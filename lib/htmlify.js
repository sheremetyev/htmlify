exports.load = function(url) {
  var xhr = typeof ActiveXObject !== 'undefined' ?
    new ActiveXObject('Microsoft.XMLHTTP') :
    new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.send();
  return xhr.responseText;
};

exports.format = function(text) {
  var json = parseText(text);
  var html = formatHtml(json, { standalone: false });
  return html;
};

var formatHtml = require('../node_modules/texts/lib/writer/html5');

var blockParser = require('../build/blockparser');
var inlineParser = require('../build/spanparser');

var parseText = function (str) {
  var blocks = blockParser.parse(str);
  blocks.forEach(function (block) {
    var inlines = [block.shift()];
    block.forEach(function (inline) {
      if (typeof inline === "string") {
        inlines = inlines.concat(inlineParser.parse(inline));
      } else {
        inlines.push(inline);
      }
    });
    // replace all elements in the block
    [].splice.apply(block, [0, block.length].concat(inlines));
  });
  return ['text'].concat(blocks);
};
