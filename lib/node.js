var htmlify = require('./htmlify');

var args = process.argv;
args.shift(); // remove “node”
args.shift(); // remove script path

var htmlPath = args[0];

var fs = require('fs');
var html = fs.readFileSync(htmlPath, 'utf8');

var re = /<script[^>]*>([\\S\\s]*?)<\/script>/img;

while (m = re.exec(html)) {
  var script = m[0];
  if (/htmlify\.js/img.test(script)) {
    var urlMatch = /data-url="([^"]+)"/img.exec(script);
    var url = urlMatch[1];

    var textPath = require('path').resolve(htmlPath, '..', url);
    var text = fs.readFileSync(textPath, 'utf8');
    var fragment = htmlify.format(text);

    var prefix = html.substr(0, m.index);
    var suffix = html.substr(m.index + m[0].length);
    html = prefix + fragment + suffix;
  }
}

console.log(html);
