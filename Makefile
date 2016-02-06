PROJECT=furkot-trip

all: lint compile

check: lint

build:
	mkdir $@

build/build.js:	index.js | build
	browserify --require ./index.js:$(PROJECT) --outfile $@

compile: build/build.js

lint:
	jshint index.js

clean:
	rm -fr build components

.PHONY: clean lint compile
