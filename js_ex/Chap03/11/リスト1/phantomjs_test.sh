#!/bin/sh
URL=file://$PWD/qunit/index.html
phantomjs ./test_src/run_qunit.js $URL

