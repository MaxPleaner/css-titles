It makes a tooltip for all elements on the page showing their list of classes.

The code is short enough that I can paste it here:

```javascript
var classes = {};
$("*").each(function(index, item){
	classes[item] = $(item).attr("class");
	if (!$(item).attr("title")) {
		$(item).attr("title", classes[item])
	};
});

```

This is surrounded by some wrapper / namespacing code which you can see
in the source file.

jQuery is a dependency.

I don't know about the compatability, but it works for me on a current chrome
running in Ubuntu. The effect (due to HTML standards, I presume) of
giving elements a title attribute is that a tooltip appears on hover.

It is also possible to install this on a browser on a per-site basis. Install tampermonkey on chrome, then press
"make a new userscript" and copy the code from tampermonkey_script.js
to the form. it is also easy to disable it on a per-site basis. 
