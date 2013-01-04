var htmlify = require('./htmlify');

// retrieve text file URL
var scripts = document.getElementsByTagName('script');
var current = scripts[scripts.length-1];
var url = current.dataset.url;

var text = htmlify.load(url);
var html = htmlify.format(text);

document.write(html);
