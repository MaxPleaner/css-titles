A short but cool script for learning and writing css. 

It makes a tooltip for all elements on the page showing their list of classes.

The approach is done in a simplistic way so that it doesn't add any styles
to the page or otherwise cause a disruption.

The code is short enough that I can paste it here:

```javascript
var classes = {};
$("*").each(function(index, item){
	classes[item] = $(item).attr("class");
	if (!$(item).attr("title")) {
		$(item).attr("title", classes[item])
	};
});

``

I don't know about the compatability, but it works for me on a current chrome
running in Ubuntu. The effect (due to HTML standards, I presume) of
giving elements a title attribute is that a tooltip appears on hover.

This is really useful when writing class-intensive html and css. 

I am going to write a userscript for Chrome so that it is possible to 
run this automatically when browsing the web. I hope this will 
give me an opportunity to study CSS code I observe and get a better
sense for conventions. 

Eventually, it might have a Chrome extension as well. I suspect that
writing a userscript (I am planning on using Tampermonkey) will be a 
more lenient process as far as permissions go. I was really surprised
at the modularity of the permissions request system when writing a Chrome
extension. Although HTML, CSS, and Javascript code appear to be 
supported from the onset, it isn't actually possible to follow a
hyperlink without using a specific API. 
