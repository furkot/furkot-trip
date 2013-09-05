
all: lint build

build: components index.js
	@component build --dev

lint:
	@jshint index.js 

components: component.json
	@component install --dev

clean:
	rm -fr build components

.PHONY: clean lint
