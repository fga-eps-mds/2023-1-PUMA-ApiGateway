include .env
.PHONY: up-build

COL=$(echo -e "\033[1;34")
NC=$(echo -e "\033[0m")

up-build:
	chmod +x ../${USER_PATH}/wait-for-it.sh && \
	chmod +x ../${PROJECT_PATH}/wait-for-it.sh && \
	sudo docker-compose up --build

.PHONY: up

up:
	sudo docker-compose up


.PHONY: down

down:
	sudo docker-compose down -v
