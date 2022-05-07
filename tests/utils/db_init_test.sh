#!/usr/bin/env bash

./tests/utils/db_script_test.sh drop && \
./tests/utils/db_script_test.sh create && \
./tests/utils/db_script_test.sh populate