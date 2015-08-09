topPara = addDOMnode("p");
topPara.addDOMnode("strong", "NOTE: this is still in beta so some things may not work as expected. Please email me with issues/bugs at ");
topPara.addDOMnode("a", "nick [at] innovaweb.co.uk", {href:"mailto:nick%40innovaweb.co.uk?subject=addDOMnode%20bug", target:"_blank"}, "font-weight:normal");
addDOMnode("p", null, "This function is at the core of my DOM-based JavaScript web work. It allows dynamic construction of elements and their properties and allows, for example, the creation of elements from a JSON object or arrays for function arguments (hover over the features section for source code using an array of strings to populate an unordered list). The function gives total control of the creation of elements, their textual  contents, attributes, event listeners and inline styles.");
addDOMnode("p", null, "Check the source code for this page and see how each element on this page has been constructed and added to the document or appended to another element. The ability to append before, after, as first child or last child to the parent node - and to define that parent node via its id, a CSS selector string, predefined variable (JS object) or 'null' (as a shortcut for the root element or <body> tag) gives a powerful and versatile way to create HTML pages in pure JavaScript DOM fashion easily and quickly.");
addDOMnode("p", null, "Attributes are added as an object (or hash). There are workarounds for certain exceptions, such as being able to use 'for' instead of 'htmlFor' and 'tooltip' for 'title'. Additionally, there are custom attributes that can be used which do not get applied to the element, but send an instruction to the function, such as including the attribute 'addLabel' and giving a value of before or after. This will add a &lt;label&gt; element to the &lt;input&gt; element with the label placed either before or after the input according to the addLabel value. For input types, you can choose between input as tag name and setting the type to, say, text. Also without setting the type attribute you can enter 'input:text' as the tag name or even more simple just 'text' - the function will do the rest. <del>In future I hope to extend the checking mechanism to ensure legal attributes are used per element, providing the code does not get too much bigger as a consequence.</del> Attributes are checked against the element to assure they conform to the allowed attributes. A summary of the custom attributes is listed below:");
customAttribs = [
	["addLabel", "use the content argument inside a label element attached to a form element. Values: \"before\" (default) or \"after\""],
	["insert", "an alias of insertPos, can be used with vanilla elements without too many null entries as arguments. Values (relative to parentElm): \"bottom\" (default), \"top\", \"before\", \"after\""],
	["forceAttribute", "allows the parsing of attributes that do not officially belong to the tag, effectively treating the attribute as global. Values: false (default) or true"],
	["debug", "parses an informative span element in place of the element that cannot be rendered due to lack of browser support. Values: false (default) or true"]
];
customAttribsList = addDOMnode("ul");
customAttribs.forEach(function(txt){
	// doing this backwards means two insertions instead of three
	ca = customAttribsList.addDOMnode("li", " - "+txt[1]);
	ca.addDOMnode("strong", txt[0], {insert:"top"});
});
addDOMnode("p", null, "In an attempt to (near-)futureproof the rendered page, compatibility checks are made for both tags deprecated in HTML5 and HTML5 tags being used with a non-HTML5 DTD (or doctype). Tags such as <applet> and <frameset> are rejected by the script when an HTML5 DTD is detected Other tags, such as <acronym>, <b> and <strike> are replaced by <abbr>, <strong> and <del> respectivey, following the semantical changes made to HTML.");
addDOMnode("p", null, "Inline CSS styles can be applied by object format (e.g. {backgroundColor:\"#ddf\", color:\"#246\"} ) or as the actual inline string to be placed as the style attribute (e.g. \"background-color:#ddf;color:#246\"). If a string is entered it will be converted to an object as with the object method the properties are checked to see if a vendor-prefixed version exists which gives a wider compatibility with various browsers. It also avoids having to write multiple rules for recent additions to CSS3, like transitions for example. However it might fail when you try to enter single versions of a CSS gradient, as vendors use different syntax and mutiple declarations are necessary. I might work on such matters if the code can be kept compact.");
addDOMnode("h1", document.body, "addDOMnode() - dynamic HTML creation using standalone JavaScript", {insert:"top", tooltip:'addDOMnode("h1", document.body, "addDOMnode() - dynamic HTML creation using standalone JavaScript", {insert:"top"}, {display:"block", float:"none"});'}, {display:"block", float:"none"});
addDOMnode("h2", null, "Features");
var ul1 = addDOMnode("ul", null, null, {tooltip:'var ul1 = addDOMnode("ul"),\nlistTexts = [\n\t"parent nodes can be an ID, CSS query selector, JS object or set to null to append to document.body",\n\t"checks for deprecated and non-compatible elements - replaces where possible or cancels creation",\n\t"fixes missing attributes where required (e.g. radio group name attribute)",\n\t"adds label elements for checkbox and radio",\n\t"content can accept a string containing inline HTML with no need for HTML entities",\n\t"inserts placeholder text where available by defaut (can be overridden)",\n\t"doctype detection",\n\t"supports HTML5 elements and attributes",\n\t"CSS(3) vendor prefix detection for high compatibility factor"\n];\nlistTexts.forEach(function(txt){\n\tul1.addDOMnode("li", txt);\n});'}),
listTexts = [
	"parent nodes can be an ID, CSS query selector, JS object or set to null to append to document.body",
	"checks for deprecated and non-compatible elements - replaces where possible or cancels creation",
	"fixes missing attributes where required (e.g. radio group name attribute)",
	"adds label elements for checkbox and radio",
	"content can accept a string containing inline HTML with no need for HTML entities",
	"inserts placeholder text where available by defaut (can be overridden)",
	"doctype detection",
	"supports HTML5 elements and attributes",
	"CSS(3) vendor prefix detection for high compatibility factor"
];
listTexts.forEach(function(txt){
	ul1.addDOMnode("li", txt);
});
addDOMnode("h2", null, "Examples");
addDOMnode("h3", null, "Form elements");
pInputText1 = addDOMnode("p", null, "Input of type 'text', by default using text content as placeholder for element: ", {tooltip:'pInputText1 = addDOMnode("p", null, "Input of type \'text\', by default using text content as placeholder for element: ");'});
	pInputText1.addDOMnode("text", "type text here", {id:"textbox1", required:true, tooltip:'pInputText1.addDOMnode("text", "type text here", {id:"textbox1", required:true, tooltip:"a tooltip"});'});
pInputText2 = addDOMnode("p", null, "Input of type 'text', converting text content to label for element: ", {tooltip:'pInputText2 = addDOMnode("p", null, "Input of type \'text\', converting text content to label for element: ");'});
	pInputText2.addDOMnode("text", "type text here", {id:"textbox2", addLabel:true, tooltip:'pInputText2.addDOMnode("text", "type text here", {id:"textbox2", addLabel:true});'});
pInputChkbox = addDOMnode("p", null, "Default checkbox render, adds a label by default: ", {tooltip:'pInputChkbox = addDOMnode("p", null, "Default checkbox render, adds a label by default: ");'});
	pInputChkbox.addDOMnode("checkbox", "cbox value", {id:"checkbox1", checked:true, tooltip:'pInputChkbox.addDOMnode("checkbox", "cbox value", {id:"checkbox1", checked:true});'});
pInputRadio = addDOMnode("p", null, "These radio elements had no name attribute but were fixed internally: ", {tooltip:'pInputRadio = addDOMnode("p", null, "These radio elements had no name attribute but were fixed internally: ");'});
	pInputRadio.addDOMnode("radio", "radio value 1", {id:"rd1", checked:true, value:"radio1", tooltip:'pInputRadio.addDOMnode("radio", "radio value 1", {id:"rd1", checked:true, value:"radio1"});'}); 
	pInputRadio.addDOMnode("radio", "radio value 2", {id:"rd2", value:"radio2"});  
	pInputRadio.addDOMnode("radio", "radio value 3", {id:"rd3", value:"radio3"});
pInputPwd = addDOMnode("p", null, "Password with placeholder text: ");	
	pInputPwd.addDOMnode("input:password", null, {id:"pwd", placeholder:"type your password here"}); 
addDOMnode("h3", null, "CSS3, selector as parent, deprecated elements, inline HTML / entities and HTML5 tests");
addDOMnode("h4", null, "CSS3, and CSS selector as parent");
paraTextCSS3 = addDOMnode("p", null, "This is a sloping red paragraph.", {id:"someid", class:"someclass"}, {transform:"rotate(-1deg)", color:"red"});
addDOMnode("span", "#someid", "[ this was appended via querySelector string input ]", {tooltip:'addDOMnode("span", "#someid", " [ this was appended via querySelector string input ]", {tooltip:"etc etc"}, "padding-left:1em; color:blue");'}, "padding-left:1em;color:blue");
addDOMnode("h4", null, "Deprecated elements and attributes");
pUnder = addDOMnode("p");
	pUnder.addDOMnode("u", "This was a <u> tag, converted to <span style=\"text-decoration: underline\">", {tooltip:'pUnder.addDOMnode("u", "This was a <u> tag, converted to <span style=\"text-decoration: underline\">");'});
pStrike = addDOMnode("p");
	pStrike.addDOMnode("strike", " This was a <strike> element, changed to <del> if the page has an HTML5 doctype", {tooltip:'pStrike.addDOMnode("strike", " This was a <strike> element, changed to <del> if the page has a HTML5 doctype", {tooltip:"etc etc"}, {fontWeight:"bold"});'}, {fontWeight:"bold"});
addDOMnode("center", null, "This was a <center> tag, changed to <div style=\"text-align: center\"> when an HTML5 doctype is detected", {tooltip:'addDOMnode("center", null, "This was a <center> tag, changed to <div style=\"text-align: center\"> when an HTML5 doctype is detected");'});
pFontTag = addDOMnode("p", null, "Adding an old <font> tag to this paragraph: ", {tooltip:'pFontTag = addDOMnode("p", null, "Adding an old <font> tag to this paragraph: ");'});
	fontTag = pFontTag.addDOMnode("font", "This is (was) deprecated font tag", {face:"Tahoma", size:"4", color:"#CC66CC", tooltip:'fontTag = pFontTag.addDOMnode("font", "This is (was) deprecated font tag", {face:"Tahoma", size:"4", color:"#CC66CC"});'});
addDOMnode("div", null, "A div with deprecated attributes", {align:"center", hspace:"15", valign:"middle", bgcolor:"#ddeeff", border:"5", height:"150", width:"600", tooltip:'addDOMnode("div", null, "A div with deprecated attributes", {align:"center", hspace:"15", valign:"middle", bgcolor:"#ddeeff", border:"5", height:"150", width:"600"}, {borderColor:"#333"});'}, {borderColor:"#333"});
addDOMnode("p", null, "Adding some global deprecated attributes (alink, vlink, link)", {forceAttribute:true, alink:"red", vlink:"green", link:"teal", tooltip:'addDOMnode("div", null, "Adding some global deprecated attributes (alink, vlink, link)", {alink:"red", vlink:"green", link:"teal"});'});
blinkTag = addDOMnode("blink", null, "Why oh why would anybody want to use a blinkin' blink tag?", {tooltip:'blinkTag = addDOMnode("blink", null, "Why oh why would anybody want to use a blinkin\' blink tag?");'});
// addDOMnode("bgsound", null, null, {src:"startup.wav", loop:"infinity", tooltip:'addDOMnode("bgsound", null, null, {src:"startup.wav", loop:"infinity"}); '}); // 	//	bach_wtc1_f04.mid
addDOMnode("bgsound", null, null, {src:"bach_wtc1_f04.mid", loop:"infinity", tooltip:'addDOMnode("bgsound", null, null, {src:"startup.wav", loop:"infinity"}); '}); // 	//	
//	addDOMnode("basefont", null, null, {color:"#224466", face:"Arial", size: "+2"});
marqueeTag = addDOMnode("marquee", null, "It is debatable whether the marquee or blink tag qualifies as worst ever (?) ...  ");
addDOMnode("h4", null, "Inline HTML / entities");
addDOMnode("p", null, "This paragraph contains a <a href=\"#\">dead link</a> using inline HTML", {tooltip:'addDOMnode("p", null, "This paragraph contains a <a href=\"#\">dead link</a> using inline HTML");'});
addDOMnode("p", null, "This paragraph contains some unencoded HTML entities: & < > injecting a span tag: <span class=\"injectedspan\">injected span tag contents</span>", {tooltip:'addDOMnode("p", null, "This paragraph contains some unencoded HTML entities: & < > injecting a span tag: <span class=\"injectedspan\">injected span tag contents</span>");'});
entitiesPara = addDOMnode("p", null, "This paragraph contains some encoded HTML entities: &amp; &lt; &gt; injecting a span tag: <span class=\"injectedspan\">injected span tag contents</span>", {tooltip:'entitiesPara = addDOMnode("p", null, "This paragraph contains some encoded HTML entities: &amp; &lt; &gt; injecting a span tag: <span class=\"injectedspan\">injected span tag contents</span>");'});
	entitiesPara.addDOMnode("b", " NOTE: characters or their HTML entities are parsed the same, but injected tags are always parsed to the DOM", {tooltip:'entitiesPara.addDOMnode("b", " NOTE: characters or their HTML entities are parsed the same, but injected tags are always parsed to the DOM");'});
addDOMnode("h4", null, "Event listeners");
function evListenTest() {
	return console.log('This message was added via an onclick event');
}
addDOMnode("p", null, "Click this paragraph to see a message in the console.", {onclick:"evListenTest();"});
// addDOMnode("p", null, "Click this paragraph to see a message in the console.", {onclick:"console.log('This message was added via an onclick event')"});
// errors
addDOMnode("h4", null, "Errors (shoud not be anything here)");
addDOMnode("span", "nonexistentID", " This is referencing a non-existent parent ...");
fr = addDOMnode("frameset");
addDOMnode("nosuchtagname", null, "This should create an error message and not be seen on the page.");
addDOMnode("h3", null, "HTML5 tests");
canvas = addDOMnode("canvas", null, null, {width:400, height:100, debug:true}, "background:#ffffdd;box-shadow: 0 0 1.25em black");
/// canvas text
if (canvas.getContext) {
	ctx=canvas.getContext("2d");
	ctx.font="30px sans-serif";
	ctx.textBaseline = "hanging";
	ctx.strokeText("HTML5 <canvas> element", 20, 40);
} else {
	if (canvas.debug) makeDebugElem();
}

pColor = addDOMnode("p", null, "Adding the &lt;input type=\"color\"&gt; element ");
	pColor.addDOMnode("color", null, {debug:true});
pDatetime = addDOMnode("p", null, "Adding the &lt;input type=\"datetime\"&gt; element ");
	pDatetime.addDOMnode("datetime", null, {debug:true});
kgDatetime = addDOMnode("p", null, "Adding the &lt;keygen&gt; element ");
	kgDatetime.addDOMnode("keygen", null, {debug:true, name:"RSA public key", challenge:"250919620710"});
addDOMnode("footer", null, "Text content for the footer element.");