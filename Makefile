include .env

.PHONY: up-build

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
