include .env
.PHONY: up-build

COL=$(echo -e "\033[1;34")
NC=$(echo -e "\033[0m")

test:
	(sudo docker-compose -f test.docker-compose.yaml up --build -d && \
	sudo chmod +x ./tests/utils/db_script_test.sh ./tests/utils/wait-for-it-test.sh ./tests/utils/db_init_test.sh && \
	(./tests/utils/wait-for-it-test.sh dbtest:5432 -- true && echo "\033[92mInitializing database... \033[0m" && ./tests/utils/db_init_test.sh);\
	echo "\033[96mRunning Project Tests...\033[0m" && \
	sudo docker-compose -f test.docker-compose.yaml exec project-service-test npm run test && \
	echo "\033[92mInitializing database... \033[0m" && ./tests/utils/db_init_test.sh && \
	echo "\033[96mRunning User Tests...\033[0m" && \
	sudo docker-compose -f test.docker-compose.yaml exec user-service-test npm run test && \
	echo "\033[92mInitializing database... \033[0m" && ./tests/utils/db_init_test.sh && \
	echo "\033[96mRunning Gateway Tests...\033[0m" && \
	sudo docker-compose -f test.docker-compose.yaml exec api-gateway-test npm run test );\
	sudo docker-compose -f test.docker-compose.yaml down

test-debug:
	(sudo docker-compose -f test.docker-compose.yaml up --build -d && \
	sudo chmod +x ./tests/utils/db_script_test.sh ./tests/utils/wait-for-it-test.sh ./tests/utils/db_init_test.sh && \
	(./tests/utils/wait-for-it-test.sh dbtest:5432 -- true && echo "\033[92mInitializing database... \033[0m" && ./tests/utils/db_init_test.sh);\
	echo "\033[96mRunning Project Tests...\033[0m" && \
	sudo docker-compose -f test.docker-compose.yaml exec project-service-test npm run test-debug && \
	echo "\033[92mInitializing database... \033[0m" && ./tests/utils/db_init_test.sh && \
	echo "\033[96mRunning User Tests...\033[0m" && \
	sudo docker-compose -f test.docker-compose.yaml exec user-service-test npm run test-debug && \
	echo "\033[92mInitializing database... \033[0m" && ./tests/utils/db_init_test.sh && \
	echo "\033[96mRunning Gateway Tests...\033[0m" && \
	sudo docker-compose -f test.docker-compose.yaml exec api-gateway-test npm run test-debug );\
	sudo docker-compose -f test.docker-compose.yaml down

test-down:
	sudo docker-compose -f test.docker-compose.yaml down

up-build:
	chmod +x ../${USER_PATH}/wait-for-it.sh && \
	chmod +x ../${PROJECT_PATH}/wait-for-it.sh && \
	chmod +x ../${EXTERNAL_PATH}/wait-for-it.sh && \
	sudo docker-compose up --build

.PHONY: up

up:
	sudo docker-compose up


.PHONY: down

down:
	sudo docker-compose down -v
