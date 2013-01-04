var htmlify = require('./htmlify');

// retrieve text file URL
var scripts = document.getElementsByTagName('script');
var current = scripts[scripts.length-1];
var url = current.dataset ? current.dataset.url : current.getAttribute('data-url');

var text = htmlify.load(url);
var html = htmlify.format(text);

document.write(html);
