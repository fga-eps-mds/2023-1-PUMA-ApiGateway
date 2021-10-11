include .env

.PHONY: up-build

test:
	(sudo docker-compose -f test.docker-compose.yaml up -d && \
	sudo docker-compose -f test.docker-compose.yaml exec project-service-test npm test && \
	sudo docker-compose -f test.docker-compose.yaml exec user-service-test npm test && \
	sudo docker-compose -f test.docker-compose.yaml exec notify-service-test npm test && \
	sudo docker-compose -f test.docker-compose.yaml exec api-gateway-test npm test);\
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
