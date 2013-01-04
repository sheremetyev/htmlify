all: build htmlify.js

htmlify.js: lib/browser.js lib/htmlify.js build/blockparser.js build/spanparser.js
	node node_modules/webpack/bin/webpack.js --min lib/browser.js htmlify.js

build/blockparser.js: node_modules/texts/lib/reader/text-blocks.peg
	node node_modules/pegjs/bin/pegjs node_modules/texts/lib/reader/text-blocks.peg build/blockparser.js

build/spanparser.js: node_modules/texts/lib/reader/text-inlines.peg
	node node_modules/pegjs/bin/pegjs node_modules/texts/lib/reader/text-inlines.peg build/spanparser.js

build:
	mkdir -p build
