HTMLify
=======

HTMLify can do both dynamic (on-the-fly) and static conversion from Markdown to
HTML. No server side (PHP/Perl etc.) involved.

Example
-------

[HTML file][1] containing the following markup can be opened in a web browser to
display this <README.md>.

[1]: <README.html>

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<!DOCTYPE html><html><body>
<script src="htmlify.js" data-url="README.md"></script>
</body></html>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The same HTML file can be processed, using the following command, to embed the
text and produce a [static HTML][2].

[2]: <README-static.html>

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
node htmlify.js README.html README-static.html
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Features
--------

-   Single script for dynamic conversion and for compilation.

-   Can be installed via NPM.

-   Automatic refresh in dynamic mode.

-   Relative URLs correction.

-   Customization of generated HTML before embedding.

-   Document title can be set from Markdown document heading.

Dependencies
------------

Compiled script has no dependencies.

Execution Modes
---------------

1.  Execute source code in a browser, load via lobrow.

2.  Execute source code in Node, load via standard require.

3.  Execute webpack-compiled code in a browser.

4.  Execute webpack-compiled in Node.

Compilation
-----------

1.  Execute `npm update`.

2.  Execute `make` (`nmake` on Windows).

Compatibility
-------------

-   Node

-   Safari

-   Chrome (needs `--allow-file-access-from-files` flag to work with local
    files).

-   Firefox

-   Internet Explorer

License
-------

Apache 2
