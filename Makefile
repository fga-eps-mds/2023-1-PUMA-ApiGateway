include .env

.PHONY: up-build

COL=$(echo -e "\033[1;34")
NC=$(echo -e "\033[0m")

test:
	(sudo docker-compose -f test.docker-compose.yaml up -d && \
	sudo chmod +x ./tests/utils/db_script_test.sh ./tests/utils/wait-for-it-test.sh ./tests/utils/init-cmd-test.sh && \
	(./tests/utils/wait-for-it-test.sh dbtest:5432 -- ./tests/utils/db_script_test.sh && \
	echo "\033[92mInserting data to database... \033[0m");\
	echo "\033[96mRunning Project Tests...\033[0m" && \
	sudo docker-compose -f test.docker-compose.yaml exec project-service-test npm test && \
	echo "\033[96mRunning User Tests...\033[0m" && \
	sudo docker-compose -f test.docker-compose.yaml exec user-service-test npm test && \
	echo "\033[96mRunning Notify Tests...\033[0m" && \
	sudo docker-compose -f test.docker-compose.yaml exec notify-service-test npm test && \
	echo "\033[96mRunning Gateway Tests...\033[0m" && \
	sudo docker-compose -f test.docker-compose.yaml exec api-gateway-test npm test );\
	sudo docker-compose -f test.docker-compose.yaml down

test-down:
	sudo docker-compose -f test.docker-compose.yaml down

up-build:
	chmod +x ../${ALOCATE_PATH}/wait-for-it.sh && \
	chmod +x ../${USER_PATH}/wait-for-it.sh && \
	chmod +x ../${NOTIFY_PATH}/wait-for-it.sh && \
	chmod +x ../${PROJECT_PATH}/wait-for-it.sh && \
	sudo docker-compose up --build

.PHONY: up

up:
	sudo docker-compose up


.PHONY: down

down:
	sudo docker-compose down -v
