/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(8);
	__webpack_require__(6);
	__webpack_require__(21);
	__webpack_require__(23);
	__webpack_require__(7);
	__webpack_require__(24);
	__webpack_require__(25);
	__webpack_require__(26);
	__webpack_require__(27);
	__webpack_require__(28);
	module.exports = __webpack_require__(29);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	/*
	    json2.js
	    2015-05-03

	    Public Domain.

	    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

	    See http://www.JSON.org/js.html


	    This code should be minified before deployment.
	    See http://javascript.crockford.com/jsmin.html

	    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
	    NOT CONTROL.


	    This file creates a global JSON object containing two methods: stringify
	    and parse. This file is provides the ES5 JSON capability to ES3 systems.
	    If a project might run on IE8 or earlier, then this file should be included.
	    This file does nothing on ES5 systems.

	        JSON.stringify(value, replacer, space)
	            value       any JavaScript value, usually an object or array.

	            replacer    an optional parameter that determines how object
	                        values are stringified for objects. It can be a
	                        function or an array of strings.

	            space       an optional parameter that specifies the indentation
	                        of nested structures. If it is omitted, the text will
	                        be packed without extra whitespace. If it is a number,
	                        it will specify the number of spaces to indent at each
	                        level. If it is a string (such as '\t' or '&nbsp;'),
	                        it contains the characters used to indent at each level.

	            This method produces a JSON text from a JavaScript value.

	            When an object value is found, if the object contains a toJSON
	            method, its toJSON method will be called and the result will be
	            stringified. A toJSON method does not serialize: it returns the
	            value represented by the name/value pair that should be serialized,
	            or undefined if nothing should be serialized. The toJSON method
	            will be passed the key associated with the value, and this will be
	            bound to the value

	            For example, this would serialize Dates as ISO strings.

	                Date.prototype.toJSON = function (key) {
	                    function f(n) {
	                        // Format integers to have at least two digits.
	                        return n < 10 
	                            ? '0' + n 
	                            : n;
	                    }

	                    return this.getUTCFullYear()   + '-' +
	                         f(this.getUTCMonth() + 1) + '-' +
	                         f(this.getUTCDate())      + 'T' +
	                         f(this.getUTCHours())     + ':' +
	                         f(this.getUTCMinutes())   + ':' +
	                         f(this.getUTCSeconds())   + 'Z';
	                };

	            You can provide an optional replacer method. It will be passed the
	            key and value of each member, with this bound to the containing
	            object. The value that is returned from your method will be
	            serialized. If your method returns undefined, then the member will
	            be excluded from the serialization.

	            If the replacer parameter is an array of strings, then it will be
	            used to select the members to be serialized. It filters the results
	            such that only members with keys listed in the replacer array are
	            stringified.

	            Values that do not have JSON representations, such as undefined or
	            functions, will not be serialized. Such values in objects will be
	            dropped; in arrays they will be replaced with null. You can use
	            a replacer function to replace those with JSON values.
	            JSON.stringify(undefined) returns undefined.

	            The optional space parameter produces a stringification of the
	            value that is filled with line breaks and indentation to make it
	            easier to read.

	            If the space parameter is a non-empty string, then that string will
	            be used for indentation. If the space parameter is a number, then
	            the indentation will be that many spaces.

	            Example:

	            text = JSON.stringify(['e', {pluribus: 'unum'}]);
	            // text is '["e",{"pluribus":"unum"}]'


	            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
	            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

	            text = JSON.stringify([new Date()], function (key, value) {
	                return this[key] instanceof Date 
	                    ? 'Date(' + this[key] + ')' 
	                    : value;
	            });
	            // text is '["Date(---current time---)"]'


	        JSON.parse(text, reviver)
	            This method parses a JSON text to produce an object or array.
	            It can throw a SyntaxError exception.

	            The optional reviver parameter is a function that can filter and
	            transform the results. It receives each of the keys and values,
	            and its return value is used instead of the original value.
	            If it returns what it received, then the structure is not modified.
	            If it returns undefined then the member is deleted.

	            Example:

	            // Parse the text. Values that look like ISO date strings will
	            // be converted to Date objects.

	            myData = JSON.parse(text, function (key, value) {
	                var a;
	                if (typeof value === 'string') {
	                    a =
	/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
	                    if (a) {
	                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
	                            +a[5], +a[6]));
	                    }
	                }
	                return value;
	            });

	            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
	                var d;
	                if (typeof value === 'string' &&
	                        value.slice(0, 5) === 'Date(' &&
	                        value.slice(-1) === ')') {
	                    d = new Date(value.slice(5, -1));
	                    if (d) {
	                        return d;
	                    }
	                }
	                return value;
	            });


	    This is a reference implementation. You are free to copy, modify, or
	    redistribute.
	*/

	/*jslint 
	    eval, for, this 
	*/

	/*property
	    JSON, apply, call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
	    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
	    lastIndex, length, parse, prototype, push, replace, slice, stringify,
	    test, toJSON, toString, valueOf
	*/


	// Create a JSON object only if one does not already exist. We create the
	// methods in a closure to avoid creating global variables.

	if (typeof JSON !== 'object') {
	    JSON = {};
	}

	(function () {
	    'use strict';
	    
	    var rx_one = /^[\],:{}\s]*$/,
	        rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
	        rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
	        rx_four = /(?:^|:|,)(?:\s*\[)+/g,
	        rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
	        rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

	    function f(n) {
	        // Format integers to have at least two digits.
	        return n < 10 
	            ? '0' + n 
	            : n;
	    }
	    
	    function this_value() {
	        return this.valueOf();
	    }

	    if (typeof Date.prototype.toJSON !== 'function') {

	        Date.prototype.toJSON = function () {

	            return isFinite(this.valueOf())
	                ? this.getUTCFullYear() + '-' +
	                        f(this.getUTCMonth() + 1) + '-' +
	                        f(this.getUTCDate()) + 'T' +
	                        f(this.getUTCHours()) + ':' +
	                        f(this.getUTCMinutes()) + ':' +
	                        f(this.getUTCSeconds()) + 'Z'
	                : null;
	        };

	        Boolean.prototype.toJSON = this_value;
	        Number.prototype.toJSON = this_value;
	        String.prototype.toJSON = this_value;
	    }

	    var gap,
	        indent,
	        meta,
	        rep;


	    function quote(string) {

	// If the string contains no control characters, no quote characters, and no
	// backslash characters, then we can safely slap some quotes around it.
	// Otherwise we must also replace the offending characters with safe escape
	// sequences.

	        rx_escapable.lastIndex = 0;
	        return rx_escapable.test(string) 
	            ? '"' + string.replace(rx_escapable, function (a) {
	                var c = meta[a];
	                return typeof c === 'string'
	                    ? c
	                    : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
	            }) + '"' 
	            : '"' + string + '"';
	    }


	    function str(key, holder) {

	// Produce a string from holder[key].

	        var i,          // The loop counter.
	            k,          // The member key.
	            v,          // The member value.
	            length,
	            mind = gap,
	            partial,
	            value = holder[key];

	// If the value has a toJSON method, call it to obtain a replacement value.

	        if (value && typeof value === 'object' &&
	                typeof value.toJSON === 'function') {
	            value = value.toJSON(key);
	        }

	// If we were called with a replacer function, then call the replacer to
	// obtain a replacement value.

	        if (typeof rep === 'function') {
	            value = rep.call(holder, key, value);
	        }

	// What happens next depends on the value's type.

	        switch (typeof value) {
	        case 'string':
	            return quote(value);

	        case 'number':

	// JSON numbers must be finite. Encode non-finite numbers as null.

	            return isFinite(value) 
	                ? String(value) 
	                : 'null';

	        case 'boolean':
	        case 'null':

	// If the value is a boolean or null, convert it to a string. Note:
	// typeof null does not produce 'null'. The case is included here in
	// the remote chance that this gets fixed someday.

	            return String(value);

	// If the type is 'object', we might be dealing with an object or an array or
	// null.

	        case 'object':

	// Due to a specification blunder in ECMAScript, typeof null is 'object',
	// so watch out for that case.

	            if (!value) {
	                return 'null';
	            }

	// Make an array to hold the partial results of stringifying this object value.

	            gap += indent;
	            partial = [];

	// Is the value an array?

	            if (Object.prototype.toString.apply(value) === '[object Array]') {

	// The value is an array. Stringify every element. Use null as a placeholder
	// for non-JSON values.

	                length = value.length;
	                for (i = 0; i < length; i += 1) {
	                    partial[i] = str(i, value) || 'null';
	                }

	// Join all of the elements together, separated with commas, and wrap them in
	// brackets.

	                v = partial.length === 0
	                    ? '[]'
	                    : gap
	                        ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
	                        : '[' + partial.join(',') + ']';
	                gap = mind;
	                return v;
	            }

	// If the replacer is an array, use it to select the members to be stringified.

	            if (rep && typeof rep === 'object') {
	                length = rep.length;
	                for (i = 0; i < length; i += 1) {
	                    if (typeof rep[i] === 'string') {
	                        k = rep[i];
	                        v = str(k, value);
	                        if (v) {
	                            partial.push(quote(k) + (
	                                gap 
	                                    ? ': ' 
	                                    : ':'
	                            ) + v);
	                        }
	                    }
	                }
	            } else {

	// Otherwise, iterate through all of the keys in the object.

	                for (k in value) {
	                    if (Object.prototype.hasOwnProperty.call(value, k)) {
	                        v = str(k, value);
	                        if (v) {
	                            partial.push(quote(k) + (
	                                gap 
	                                    ? ': ' 
	                                    : ':'
	                            ) + v);
	                        }
	                    }
	                }
	            }

	// Join all of the member texts together, separated with commas,
	// and wrap them in braces.

	            v = partial.length === 0
	                ? '{}'
	                : gap
	                    ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
	                    : '{' + partial.join(',') + '}';
	            gap = mind;
	            return v;
	        }
	    }

	// If the JSON object does not yet have a stringify method, give it one.

	    if (typeof JSON.stringify !== 'function') {
	        meta = {    // table of character substitutions
	            '\b': '\\b',
	            '\t': '\\t',
	            '\n': '\\n',
	            '\f': '\\f',
	            '\r': '\\r',
	            '"': '\\"',
	            '\\': '\\\\'
	        };
	        JSON.stringify = function (value, replacer, space) {

	// The stringify method takes a value and an optional replacer, and an optional
	// space parameter, and returns a JSON text. The replacer can be a function
	// that can replace values, or an array of strings that will select the keys.
	// A default replacer method can be provided. Use of the space parameter can
	// produce text that is more easily readable.

	            var i;
	            gap = '';
	            indent = '';

	// If the space parameter is a number, make an indent string containing that
	// many spaces.

	            if (typeof space === 'number') {
	                for (i = 0; i < space; i += 1) {
	                    indent += ' ';
	                }

	// If the space parameter is a string, it will be used as the indent string.

	            } else if (typeof space === 'string') {
	                indent = space;
	            }

	// If there is a replacer, it must be a function or an array.
	// Otherwise, throw an error.

	            rep = replacer;
	            if (replacer && typeof replacer !== 'function' &&
	                    (typeof replacer !== 'object' ||
	                    typeof replacer.length !== 'number')) {
	                throw new Error('JSON.stringify');
	            }

	// Make a fake root object containing our value under the key of ''.
	// Return the result of stringifying the value.

	            return str('', {'': value});
	        };
	    }


	// If the JSON object does not yet have a parse method, give it one.

	    if (typeof JSON.parse !== 'function') {
	        JSON.parse = function (text, reviver) {

	// The parse method takes a text and an optional reviver function, and returns
	// a JavaScript value if the text is a valid JSON text.

	            var j;

	            function walk(holder, key) {

	// The walk method is used to recursively walk the resulting structure so
	// that modifications can be made.

	                var k, v, value = holder[key];
	                if (value && typeof value === 'object') {
	                    for (k in value) {
	                        if (Object.prototype.hasOwnProperty.call(value, k)) {
	                            v = walk(value, k);
	                            if (v !== undefined) {
	                                value[k] = v;
	                            } else {
	                                delete value[k];
	                            }
	                        }
	                    }
	                }
	                return reviver.call(holder, key, value);
	            }


	// Parsing happens in four stages. In the first stage, we replace certain
	// Unicode characters with escape sequences. JavaScript handles many characters
	// incorrectly, either silently deleting them, or treating them as line endings.

	            text = String(text);
	            rx_dangerous.lastIndex = 0;
	            if (rx_dangerous.test(text)) {
	                text = text.replace(rx_dangerous, function (a) {
	                    return '\\u' +
	                            ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
	                });
	            }

	// In the second stage, we run the text against regular expressions that look
	// for non-JSON patterns. We are especially concerned with '()' and 'new'
	// because they can cause invocation, and '=' because it can cause mutation.
	// But just to be safe, we want to reject all unexpected forms.

	// We split the second stage into 4 regexp operations in order to work around
	// crippling inefficiencies in IE's and Safari's regexp engines. First we
	// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
	// replace all simple value tokens with ']' characters. Third, we delete all
	// open brackets that follow a colon or comma or that begin the text. Finally,
	// we look to see that the remaining characters are only whitespace or ']' or
	// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

	            if (
	                rx_one.test(
	                    text
	                        .replace(rx_two, '@')
	                        .replace(rx_three, ']')
	                        .replace(rx_four, '')
	                )
	            ) {

	// In the third stage we use the eval function to compile the text into a
	// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
	// in JavaScript: it can begin a block or an object literal. We wrap the text
	// in parens to eliminate the ambiguity.

	                j = eval('(' + text + ')');

	// In the optional fourth stage, we recursively walk the new structure, passing
	// each name/value pair to a reviver function for possible transformation.

	                return typeof reviver === 'function'
	                    ? walk({'': j}, '')
	                    : j;
	            }

	// If the text is not JSON parseable, then a SyntaxError is thrown.

	            throw new SyntaxError('JSON.parse');
	        };
	    }
	}());


/***/ },
/* 7 */
/***/ function(module, exports) {

	jQuery(document).ready(function() {

	    // This will change the sizes of the sidebar and Mirador instances depending on whether the sidebar is present.
	    jQuery('.sidebar').click(function() {
	        if (jQuery(this).hasClass('open')) {
	            jQuery(this).removeClass('open');
	            jQuery('#viewer').css('width', '100%');
	            jQuery('.sidebar').html("Show Annotation List");
	            jQuery('.annotationSection').hide();
	        } else {
	            jQuery(this).addClass('open');
	            jQuery('#viewer').css('width', 'calc(100% - 310px)');
	            jQuery('.sidebar').html("Hide Annotation List");
	            jQuery('.annotationSection').show();
	        }

	        // needed to handle events in both IE and literally everything else.
	        // this calls the "resize" event forcing Mirador to redraw everything to the new sizes
	        var evt;
	        try {
	            evt = new Event('resize');
	        } catch(e) {
	            evt = window.document.createEvent('UIEvents');
	            evt.initUIEvent('resize', true, false, window, 0);
	        }
	        window.dispatchEvent(evt);
	    });

	    window.onkeyup = function(e) {
	        var key = e.keyCode ? e.keyCode : e.which;
	        if (key == 27) {
	            if (jQuery('.xblock').hasClass('vjs-fullscreen')) {
	                jQuery('.xblock').removeClass('vjs-fullscreen');
	                console.log("Hit Esc");
	            }
	            jQuery('.annotationSection.side').css('height', '');
	        }
	    };
	    if (document.addEventListener)
	    {
	        document.addEventListener('webkitfullscreenchange', exitHandler, false);
	        document.addEventListener('mozfullscreenchange', exitHandler, false);
	        document.addEventListener('fullscreenchange', exitHandler, false);
	        document.addEventListener('MSFullscreenChange', exitHandler, false);
	    }

	    function exitHandler()
	    {
	        if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement !== null)
	        {
	            /* Run code on exit */
	            console.log("Exit handler");
	            jQuery('.annotationSection.side').css('height', '');
	            var exiter = function() {
	                if (jQuery('.xblock').hasClass('vjs-fullscreen')) {
	                    console.log("Removing fullscreen class");
	                    jQuery('.xblock').removeClass('vjs-fullscreen');
	                    setTimeout(exiter, 100);
	                } 
	            }
	            exiter();
	        }
	    };

	    window.annotation_tool.subscribe("annotationsLoaded", function(annotations) {
	        if (annotations.length > 0) {
	            window.updateDashboard(annotations);
	        };
	    });
	    
	    window.annotation_tool.subscribe('annotationHidden', function(annotationId) {
	        jQuery('.annotationItem.item-' + annotationId).hide();
	    });
	    window.annotation_tool.subscribe('annotationShown', function(annotationId) {
	        jQuery('.annotationItem.item-' + annotationId).show();
	    });

	    window.updateDashboard = function(annotations) {
	      jQuery('.annotationsHolder').html("");
	      jQuery.each(annotations, function(index, value){
	            var html = '';
	            if (value.media === "video") {
	                html = "<div class='annotationItem item-"+value.id+"' role='listitem' aria-label='Annotation #"+index+"'><div class='playMediaButton'><span class='fa fa-youtube-play'></span> Play Clip</div><div class='body field' aria-label='Comment within group'>"+value.text+"</div><div class='tagList field side'>";
	            } else if (value.media === "text") {
	                html = "<div class='annotationItem item-"+value.id+"' role='listitem' aria-label='Annotation #"+index+"'><div class='quote'>"+value.quote+"</div><div class='body field' aria-label='Comment within group'>"+value.text+"</div><div class='tagList field side'>";
	            }
	            
	            jQuery.each(value.tags, function(ind, tag){
	                if (tag !== undefined && tag !== '') {
	                    html+= "<div class='tag side'>" + tag.replace(/_/g, ' ') + "</div>";
	                }
	            });
	            html += "</div></div>";
	            jQuery('.annotationsHolder').append(html);
	            if (value.media === "video") {
	                jQuery('.annotationItem.item-'+index+' .playMediaButton ').click ( function(e) {
	                    var player = window.vid;
	                    player.annotator = window.annotation_tool;
	                    //player.annotations.showAnnotation(annotation);
	                    var playFunction = function() {
	                        // Fix problem with youtube videos in the first play. The plugin don't have this trigger
	                        if (player.techName === 'Youtube') {
	                            var startAPI = function() {
	                                player.annotations.showAnnotation(value);
	                            }
	                            if (player.annotations.loaded)
	                                startAPI();
	                            else
	                                player.one('loadedRangeSlider', startAPI); // show Annotations once the RangeSlider is loaded
	                        } else {
	                            player.annotations.showAnnotation(value);
	                        }
	                    };
	                    if (player.paused()) {
	                        player.play();
	                        player.one('playing', playFunction);
	                    } else {
	                        playFunction();
	                    }
	                });
	            } else if (value.media == 'text') {
	                jQuery('.annotationItem.item-'+index+' .quote ').click(function() {
	                    jQuery('html, body').animate({
	                        scrollTop: jQuery('.annotator-hl[@data-annotation-id="' + value.id + '"').offset().top
	                    }, 500);
	                });
	            }
	            jQuery('.annotationItem.item-'+index+' .tagList .tag').click ( function(e) {
	                if (!window.isFiltered) {
	                    var tag = jQuery(this).html();
	                    jQuery.each(window.annotation_tool.plugins.LocalStore.annotations, function(index, annotation) {
	                        if (annotation.tags.indexOf(tag.replace(/ /g,'_')) == -1) {
	                            jQuery('.item-'+annotation.id).css({'float': 'right', 'margin-left': '-99999px', 'margin-right': '-999999px'});
	                        } else {
	                            //jQuery('.item-'+annotation.id).show();
	                        }
	                    });
	                    jQuery('.annotationsHolder').prepend('<div class="filter-message">Showing only annotations with tag "'+tag+'". Click here to show all annotations.</div>');
	                    jQuery('.filter-message').click(function(e) {
	                        jQuery.each(window.annotation_tool.plugins.LocalStore.annotations, function(index, annotation) {
	                            jQuery('.item-'+annotation.id).css({"float": "none", "margin-left": "0px", "margin-right": "0px"});
	                        });
	                        window.isFiltered = false;
	                        jQuery('.filter-message').remove();
	                    });
	                    jQuery('.annotationSection').animate({scrollTop:0});
	                    window.isFiltered = true;
	                }
	            });
	          });
	    };
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(9);
	__webpack_require__(13);
	__webpack_require__(15);
	__webpack_require__(17);
	__webpack_require__(19);

	jQuery(document).ready(function() {
		var element = document.createElement('div');
		element.id = 'viewer';
		jQuery('#container')[0].appendChild(element);
		var annotatorOptions = {
			showViewPermissionsCheckbox: false,
			readOnly: true,
		};
		window.annotation_tool = jQuery('#viewer').annotator(annotatorOptions).data('annotator');
		window.annotation_tool.addPlugin('HighlightTags', {
	        'tag': jQuery('#tags').html()
	    });
	    window.annotation_tool.addPlugin('SummernoteRichText', {});
		var url = jQuery('#text_url').html().trim();
		jQuery.ajax({
			url: url,
			method: 'GET',
			async: true,
			contentType: 'text/plain',
			dataType: 'text/plain',
			complete: function(data) {
				if (data.status === 200) {
					if (jQuery('.annotator-wrapper') !== undefined) {
						jQuery('.annotator-wrapper').prepend(data.responseText);
					} else {
						jQuery('#viewer').prepend(data.responseText);
					}
				} else {
					var element = document.createElement('div');
					element.innerHTML = "Sorry, no text was found";
				}
				jQuery('#container').show();
				jQuery('.sidebar').show();
				jQuery('#hxat_lite_loading').hide();
			}
		});	

		var annotations_url = jQuery('#annotations-url').html();
	    var options = {
	        url: annotations_url,
	        success: function(data) {
	        	console.log(data.rows);
	            window.annotation_tool.addPlugin('LocalStore', {
	                annotations: data.rows
	            });
	            jQuery(document).trigger('annotation_core_init');
	        },
	        async: true
	    };
	    jQuery.ajax(options);
	});


/***/ },
/* 9 */
/***/ function(module, exports) {

	

/***/ },
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports) {

	

/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports) {

	

/***/ },
/* 16 */,
/* 17 */
/***/ function(module, exports) {

	

/***/ },
/* 18 */,
/* 19 */
/***/ function(module, exports) {

	

/***/ },
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Super simple wysiwyg editor on Bootstrap v0.6.7
	 * http://summernote.org/
	 *
	 * summernote.js
	 * Copyright 2013-2015 Alan Hong. and other contributors
	 * summernote may be freely distributed under the MIT license./
	 *
	 * Date: 2015-05-17T06:58Z
	 */
	(function (factory) {
	  // Browser globals: jQuery
	  factory(window.jQuery);
	}(function ($) {
	  


	  if (!Array.prototype.reduce) {
	    /**
	     * Array.prototype.reduce polyfill
	     *
	     * @param {Function} callback
	     * @param {Value} [initialValue]
	     * @return {Value}
	     *
	     * @see http://goo.gl/WNriQD
	     */
	    Array.prototype.reduce = function (callback) {
	      var t = Object(this), len = t.length >>> 0, k = 0, value;
	      if (arguments.length === 2) {
	        value = arguments[1];
	      } else {
	        while (k < len && !(k in t)) {
	          k++;
	        }
	        if (k >= len) {
	          throw new TypeError('Reduce of empty array with no initial value');
	        }
	        value = t[k++];
	      }
	      for (; k < len; k++) {
	        if (k in t) {
	          value = callback(value, t[k], k, t);
	        }
	      }
	      return value;
	    };
	  }

	  if ('function' !== typeof Array.prototype.filter) {
	    /**
	     * Array.prototype.filter polyfill
	     *
	     * @param {Function} func
	     * @return {Array}
	     *
	     * @see http://goo.gl/T1KFnq
	     */
	    Array.prototype.filter = function (func) {
	      var t = Object(this), len = t.length >>> 0;

	      var res = [];
	      var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
	      for (var i = 0; i < len; i++) {
	        if (i in t) {
	          var val = t[i];
	          if (func.call(thisArg, val, i, t)) {
	            res.push(val);
	          }
	        }
	      }
	  
	      return res;
	    };
	  }

	  var isSupportAmd = "function" === 'function' && __webpack_require__(22);

	  /**
	   * returns whether font is installed or not.
	   *
	   * @param {String} fontName
	   * @return {Boolean}
	   */
	  var isFontInstalled = function (fontName) {
	    var testFontName = fontName === 'Comic Sans MS' ? 'Courier New' : 'Comic Sans MS';
	    var $tester = $('<div>').css({
	      position: 'absolute',
	      left: '-9999px',
	      top: '-9999px',
	      fontSize: '200px'
	    }).text('mmmmmmmmmwwwwwww').appendTo(document.body);

	    var originalWidth = $tester.css('fontFamily', testFontName).width();
	    var width = $tester.css('fontFamily', fontName + ',' + testFontName).width();

	    $tester.remove();

	    return originalWidth !== width;
	  };

	  var userAgent = navigator.userAgent;

	  /**
	   * @class core.agent
	   *
	   * Object which check platform and agent
	   *
	   * @singleton
	   * @alternateClassName agent
	   */
	  var agent = {
	    /** @property {Boolean} [isMac=false] true if this agent is Mac  */
	    isMac: navigator.appVersion.indexOf('Mac') > -1,
	    /** @property {Boolean} [isMSIE=false] true if this agent is a Internet Explorer  */
	    isMSIE: /MSIE|Trident/i.test(userAgent),
	    /** @property {Boolean} [isFF=false] true if this agent is a Firefox  */
	    isFF: /firefox/i.test(userAgent),
	    isWebkit: /webkit/i.test(userAgent),
	    /** @property {Boolean} [isSafari=false] true if this agent is a Safari  */
	    isSafari: /safari/i.test(userAgent),
	    /** @property {String} jqueryVersion current jQuery version string  */
	    jqueryVersion: parseFloat($.fn.jquery),
	    isSupportAmd: isSupportAmd,
	    hasCodeMirror: false,
	    isFontInstalled: isFontInstalled,
	    isW3CRangeSupport: !!document.createRange
	  };

	  /**
	   * @class core.func
	   *
	   * func utils (for high-order func's arg)
	   *
	   * @singleton
	   * @alternateClassName func
	   */
	  var func = (function () {
	    var eq = function (itemA) {
	      return function (itemB) {
	        return itemA === itemB;
	      };
	    };

	    var eq2 = function (itemA, itemB) {
	      return itemA === itemB;
	    };

	    var peq2 = function (propName) {
	      return function (itemA, itemB) {
	        return itemA[propName] === itemB[propName];
	      };
	    };

	    var ok = function () {
	      return true;
	    };

	    var fail = function () {
	      return false;
	    };

	    var not = function (f) {
	      return function () {
	        return !f.apply(f, arguments);
	      };
	    };

	    var and = function (fA, fB) {
	      return function (item) {
	        return fA(item) && fB(item);
	      };
	    };

	    var self = function (a) {
	      return a;
	    };

	    var idCounter = 0;

	    /**
	     * generate a globally-unique id
	     *
	     * @param {String} [prefix]
	     */
	    var uniqueId = function (prefix) {
	      var id = ++idCounter + '';
	      return prefix ? prefix + id : id;
	    };

	    /**
	     * returns bnd (bounds) from rect
	     *
	     * - IE Compatability Issue: http://goo.gl/sRLOAo
	     * - Scroll Issue: http://goo.gl/sNjUc
	     *
	     * @param {Rect} rect
	     * @return {Object} bounds
	     * @return {Number} bounds.top
	     * @return {Number} bounds.left
	     * @return {Number} bounds.width
	     * @return {Number} bounds.height
	     */
	    var rect2bnd = function (rect) {
	      var $document = $(document);
	      return {
	        top: rect.top + $document.scrollTop(),
	        left: rect.left + $document.scrollLeft(),
	        width: rect.right - rect.left,
	        height: rect.bottom - rect.top
	      };
	    };

	    /**
	     * returns a copy of the object where the keys have become the values and the values the keys.
	     * @param {Object} obj
	     * @return {Object}
	     */
	    var invertObject = function (obj) {
	      var inverted = {};
	      for (var key in obj) {
	        if (obj.hasOwnProperty(key)) {
	          inverted[obj[key]] = key;
	        }
	      }
	      return inverted;
	    };

	    /**
	     * @param {String} namespace
	     * @param {String} [prefix]
	     * @return {String}
	     */
	    var namespaceToCamel = function (namespace, prefix) {
	      prefix = prefix || '';
	      return prefix + namespace.split('.').map(function (name) {
	        return name.substring(0, 1).toUpperCase() + name.substring(1);
	      }).join('');
	    };

	    return {
	      eq: eq,
	      eq2: eq2,
	      peq2: peq2,
	      ok: ok,
	      fail: fail,
	      self: self,
	      not: not,
	      and: and,
	      uniqueId: uniqueId,
	      rect2bnd: rect2bnd,
	      invertObject: invertObject,
	      namespaceToCamel: namespaceToCamel
	    };
	  })();

	  /**
	   * @class core.list
	   *
	   * list utils
	   *
	   * @singleton
	   * @alternateClassName list
	   */
	  var list = (function () {
	    /**
	     * returns the first item of an array.
	     *
	     * @param {Array} array
	     */
	    var head = function (array) {
	      return array[0];
	    };

	    /**
	     * returns the last item of an array.
	     *
	     * @param {Array} array
	     */
	    var last = function (array) {
	      return array[array.length - 1];
	    };

	    /**
	     * returns everything but the last entry of the array.
	     *
	     * @param {Array} array
	     */
	    var initial = function (array) {
	      return array.slice(0, array.length - 1);
	    };

	    /**
	     * returns the rest of the items in an array.
	     *
	     * @param {Array} array
	     */
	    var tail = function (array) {
	      return array.slice(1);
	    };

	    /**
	     * returns item of array
	     */
	    var find = function (array, pred) {
	      for (var idx = 0, len = array.length; idx < len; idx ++) {
	        var item = array[idx];
	        if (pred(item)) {
	          return item;
	        }
	      }
	    };

	    /**
	     * returns true if all of the values in the array pass the predicate truth test.
	     */
	    var all = function (array, pred) {
	      for (var idx = 0, len = array.length; idx < len; idx ++) {
	        if (!pred(array[idx])) {
	          return false;
	        }
	      }
	      return true;
	    };

	    /**
	     * returns true if the value is present in the list.
	     */
	    var contains = function (array, item) {
	      return $.inArray(item, array) !== -1;
	    };

	    /**
	     * get sum from a list
	     *
	     * @param {Array} array - array
	     * @param {Function} fn - iterator
	     */
	    var sum = function (array, fn) {
	      fn = fn || func.self;
	      return array.reduce(function (memo, v) {
	        return memo + fn(v);
	      }, 0);
	    };
	  
	    /**
	     * returns a copy of the collection with array type.
	     * @param {Collection} collection - collection eg) node.childNodes, ...
	     */
	    var from = function (collection) {
	      var result = [], idx = -1, length = collection.length;
	      while (++idx < length) {
	        result[idx] = collection[idx];
	      }
	      return result;
	    };
	  
	    /**
	     * cluster elements by predicate function.
	     *
	     * @param {Array} array - array
	     * @param {Function} fn - predicate function for cluster rule
	     * @param {Array[]}
	     */
	    var clusterBy = function (array, fn) {
	      if (!array.length) { return []; }
	      var aTail = tail(array);
	      return aTail.reduce(function (memo, v) {
	        var aLast = last(memo);
	        if (fn(last(aLast), v)) {
	          aLast[aLast.length] = v;
	        } else {
	          memo[memo.length] = [v];
	        }
	        return memo;
	      }, [[head(array)]]);
	    };
	  
	    /**
	     * returns a copy of the array with all falsy values removed
	     *
	     * @param {Array} array - array
	     * @param {Function} fn - predicate function for cluster rule
	     */
	    var compact = function (array) {
	      var aResult = [];
	      for (var idx = 0, len = array.length; idx < len; idx ++) {
	        if (array[idx]) { aResult.push(array[idx]); }
	      }
	      return aResult;
	    };

	    /**
	     * produces a duplicate-free version of the array
	     *
	     * @param {Array} array
	     */
	    var unique = function (array) {
	      var results = [];

	      for (var idx = 0, len = array.length; idx < len; idx ++) {
	        if (!contains(results, array[idx])) {
	          results.push(array[idx]);
	        }
	      }

	      return results;
	    };

	    /**
	     * returns next item.
	     * @param {Array} array
	     */
	    var next = function (array, item) {
	      var idx = array.indexOf(item);
	      if (idx === -1) { return null; }

	      return array[idx + 1];
	    };

	    /**
	     * returns prev item.
	     * @param {Array} array
	     */
	    var prev = function (array, item) {
	      var idx = array.indexOf(item);
	      if (idx === -1) { return null; }

	      return array[idx - 1];
	    };

	  
	    return { head: head, last: last, initial: initial, tail: tail,
	             prev: prev, next: next, find: find, contains: contains,
	             all: all, sum: sum, from: from,
	             clusterBy: clusterBy, compact: compact, unique: unique };
	  })();


	  var NBSP_CHAR = String.fromCharCode(160);
	  var ZERO_WIDTH_NBSP_CHAR = '\ufeff';

	  /**
	   * @class core.dom
	   *
	   * Dom functions
	   *
	   * @singleton
	   * @alternateClassName dom
	   */
	  var dom = (function () {
	    /**
	     * @method isEditable
	     *
	     * returns whether node is `note-editable` or not.
	     *
	     * @param {Node} node
	     * @return {Boolean}
	     */
	    var isEditable = function (node) {
	      return node && $(node).hasClass('note-editable');
	    };

	    /**
	     * @method isControlSizing
	     *
	     * returns whether node is `note-control-sizing` or not.
	     *
	     * @param {Node} node
	     * @return {Boolean}
	     */
	    var isControlSizing = function (node) {
	      return node && $(node).hasClass('note-control-sizing');
	    };

	    /**
	     * @method  buildLayoutInfo
	     *
	     * build layoutInfo from $editor(.note-editor)
	     *
	     * @param {jQuery} $editor
	     * @return {Object}
	     * @return {Function} return.editor
	     * @return {Node} return.dropzone
	     * @return {Node} return.toolbar
	     * @return {Node} return.editable
	     * @return {Node} return.codable
	     * @return {Node} return.popover
	     * @return {Node} return.handle
	     * @return {Node} return.dialog
	     */
	    var buildLayoutInfo = function ($editor) {
	      var makeFinder;

	      // air mode
	      if ($editor.hasClass('note-air-editor')) {
	        var id = list.last($editor.attr('id').split('-'));
	        makeFinder = function (sIdPrefix) {
	          return function () { return $(sIdPrefix + id); };
	        };

	        return {
	          editor: function () { return $editor; },
	          holder : function () { return $editor.data('holder'); },
	          editable: function () { return $editor; },
	          popover: makeFinder('#note-popover-'),
	          handle: makeFinder('#note-handle-'),
	          dialog: makeFinder('#note-dialog-')
	        };

	        // frame mode
	      } else {
	        makeFinder = function (sClassName) {
	          return function () { return $editor.find(sClassName); };
	        };
	        return {
	          editor: function () { return $editor; },
	          holder : function () { return $editor.data('holder'); },
	          dropzone: makeFinder('.note-dropzone'),
	          toolbar: makeFinder('.note-toolbar'),
	          editable: makeFinder('.note-editable'),
	          codable: makeFinder('.note-codable'),
	          statusbar: makeFinder('.note-statusbar'),
	          popover: makeFinder('.note-popover'),
	          handle: makeFinder('.note-handle'),
	          dialog: makeFinder('.note-dialog')
	        };
	      }
	    };

	    /**
	     * returns makeLayoutInfo from editor's descendant node.
	     *
	     * @private
	     * @param {Node} descendant
	     * @return {Object}
	     */
	    var makeLayoutInfo = function (descendant) {
	      var $target = $(descendant).closest('.note-editor, .note-air-editor, .note-air-layout');

	      if (!$target.length) {
	        return null;
	      }

	      var $editor;
	      if ($target.is('.note-editor, .note-air-editor')) {
	        $editor = $target;
	      } else {
	        $editor = $('#note-editor-' + list.last($target.attr('id').split('-')));
	      }

	      return buildLayoutInfo($editor);
	    };

	    /**
	     * @method makePredByNodeName
	     *
	     * returns predicate which judge whether nodeName is same
	     *
	     * @param {String} nodeName
	     * @return {Function}
	     */
	    var makePredByNodeName = function (nodeName) {
	      nodeName = nodeName.toUpperCase();
	      return function (node) {
	        return node && node.nodeName.toUpperCase() === nodeName;
	      };
	    };

	    /**
	     * @method isText
	     *
	     *
	     *
	     * @param {Node} node
	     * @return {Boolean} true if node's type is text(3)
	     */
	    var isText = function (node) {
	      return node && node.nodeType === 3;
	    };

	    /**
	     * ex) br, col, embed, hr, img, input, ...
	     * @see http://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
	     */
	    var isVoid = function (node) {
	      return node && /^BR|^IMG|^HR/.test(node.nodeName.toUpperCase());
	    };

	    var isPara = function (node) {
	      if (isEditable(node)) {
	        return false;
	      }

	      // Chrome(v31.0), FF(v25.0.1) use DIV for paragraph
	      return node && /^DIV|^P|^LI|^H[1-7]/.test(node.nodeName.toUpperCase());
	    };

	    var isLi = makePredByNodeName('LI');

	    var isPurePara = function (node) {
	      return isPara(node) && !isLi(node);
	    };

	    var isTable = makePredByNodeName('TABLE');

	    var isInline = function (node) {
	      return !isBodyContainer(node) &&
	             !isList(node) &&
	             !isPara(node) &&
	             !isTable(node) &&
	             !isBlockquote(node);
	    };

	    var isList = function (node) {
	      return node && /^UL|^OL/.test(node.nodeName.toUpperCase());
	    };

	    var isCell = function (node) {
	      return node && /^TD|^TH/.test(node.nodeName.toUpperCase());
	    };

	    var isBlockquote = makePredByNodeName('BLOCKQUOTE');

	    var isBodyContainer = function (node) {
	      return isCell(node) || isBlockquote(node) || isEditable(node);
	    };

	    var isAnchor = makePredByNodeName('A');

	    var isParaInline = function (node) {
	      return isInline(node) && !!ancestor(node, isPara);
	    };

	    var isBodyInline = function (node) {
	      return isInline(node) && !ancestor(node, isPara);
	    };

	    var isBody = makePredByNodeName('BODY');

	    /**
	     * returns whether nodeB is closest sibling of nodeA
	     *
	     * @param {Node} nodeA
	     * @param {Node} nodeB
	     * @return {Boolean}
	     */
	    var isClosestSibling = function (nodeA, nodeB) {
	      return nodeA.nextSibling === nodeB ||
	             nodeA.previousSibling === nodeB;
	    };

	    /**
	     * returns array of closest siblings with node
	     *
	     * @param {Node} node
	     * @param {function} [pred] - predicate function
	     * @return {Node[]}
	     */
	    var withClosestSiblings = function (node, pred) {
	      pred = pred || func.ok;

	      var siblings = [];
	      if (node.previousSibling && pred(node.previousSibling)) {
	        siblings.push(node.previousSibling);
	      }
	      siblings.push(node);
	      if (node.nextSibling && pred(node.nextSibling)) {
	        siblings.push(node.nextSibling);
	      }
	      return siblings;
	    };

	    /**
	     * blank HTML for cursor position
	     * - [workaround] for MSIE IE doesn't works with bogus br
	     */
	    var blankHTML = agent.isMSIE ? '&nbsp;' : '<br>';

	    /**
	     * @method nodeLength
	     *
	     * returns #text's text size or element's childNodes size
	     *
	     * @param {Node} node
	     */
	    var nodeLength = function (node) {
	      if (isText(node)) {
	        return node.nodeValue.length;
	      }

	      return node.childNodes.length;
	    };

	    /**
	     * returns whether node is empty or not.
	     *
	     * @param {Node} node
	     * @return {Boolean}
	     */
	    var isEmpty = function (node) {
	      var len = nodeLength(node);

	      if (len === 0) {
	        return true;
	      } else if (!isText(node) && len === 1 && node.innerHTML === blankHTML) {
	        // ex) <p><br></p>, <span><br></span>
	        return true;
	      } else if (list.all(node.childNodes, isText) && node.innerHTML === '') {
	        // ex) <p></p>, <span></span>
	        return true;
	      }

	      return false;
	    };

	    /**
	     * padding blankHTML if node is empty (for cursor position)
	     */
	    var paddingBlankHTML = function (node) {
	      if (!isVoid(node) && !nodeLength(node)) {
	        node.innerHTML = blankHTML;
	      }
	    };

	    /**
	     * find nearest ancestor predicate hit
	     *
	     * @param {Node} node
	     * @param {Function} pred - predicate function
	     */
	    var ancestor = function (node, pred) {
	      while (node) {
	        if (pred(node)) { return node; }
	        if (isEditable(node)) { break; }

	        node = node.parentNode;
	      }
	      return null;
	    };

	    /**
	     * find nearest ancestor only single child blood line and predicate hit
	     *
	     * @param {Node} node
	     * @param {Function} pred - predicate function
	     */
	    var singleChildAncestor = function (node, pred) {
	      node = node.parentNode;

	      while (node) {
	        if (nodeLength(node) !== 1) { break; }
	        if (pred(node)) { return node; }
	        if (isEditable(node)) { break; }

	        node = node.parentNode;
	      }
	      return null;
	    };

	    /**
	     * returns new array of ancestor nodes (until predicate hit).
	     *
	     * @param {Node} node
	     * @param {Function} [optional] pred - predicate function
	     */
	    var listAncestor = function (node, pred) {
	      pred = pred || func.fail;

	      var ancestors = [];
	      ancestor(node, function (el) {
	        if (!isEditable(el)) {
	          ancestors.push(el);
	        }

	        return pred(el);
	      });
	      return ancestors;
	    };

	    /**
	     * find farthest ancestor predicate hit
	     */
	    var lastAncestor = function (node, pred) {
	      var ancestors = listAncestor(node);
	      return list.last(ancestors.filter(pred));
	    };

	    /**
	     * returns common ancestor node between two nodes.
	     *
	     * @param {Node} nodeA
	     * @param {Node} nodeB
	     */
	    var commonAncestor = function (nodeA, nodeB) {
	      var ancestors = listAncestor(nodeA);
	      for (var n = nodeB; n; n = n.parentNode) {
	        if ($.inArray(n, ancestors) > -1) { return n; }
	      }
	      return null; // difference document area
	    };

	    /**
	     * listing all previous siblings (until predicate hit).
	     *
	     * @param {Node} node
	     * @param {Function} [optional] pred - predicate function
	     */
	    var listPrev = function (node, pred) {
	      pred = pred || func.fail;

	      var nodes = [];
	      while (node) {
	        if (pred(node)) { break; }
	        nodes.push(node);
	        node = node.previousSibling;
	      }
	      return nodes;
	    };

	    /**
	     * listing next siblings (until predicate hit).
	     *
	     * @param {Node} node
	     * @param {Function} [pred] - predicate function
	     */
	    var listNext = function (node, pred) {
	      pred = pred || func.fail;

	      var nodes = [];
	      while (node) {
	        if (pred(node)) { break; }
	        nodes.push(node);
	        node = node.nextSibling;
	      }
	      return nodes;
	    };

	    /**
	     * listing descendant nodes
	     *
	     * @param {Node} node
	     * @param {Function} [pred] - predicate function
	     */
	    var listDescendant = function (node, pred) {
	      var descendents = [];
	      pred = pred || func.ok;

	      // start DFS(depth first search) with node
	      (function fnWalk(current) {
	        if (node !== current && pred(current)) {
	          descendents.push(current);
	        }
	        for (var idx = 0, len = current.childNodes.length; idx < len; idx++) {
	          fnWalk(current.childNodes[idx]);
	        }
	      })(node);

	      return descendents;
	    };

	    /**
	     * wrap node with new tag.
	     *
	     * @param {Node} node
	     * @param {Node} tagName of wrapper
	     * @return {Node} - wrapper
	     */
	    var wrap = function (node, wrapperName) {
	      var parent = node.parentNode;
	      var wrapper = $('<' + wrapperName + '>')[0];

	      parent.insertBefore(wrapper, node);
	      wrapper.appendChild(node);

	      return wrapper;
	    };

	    /**
	     * insert node after preceding
	     *
	     * @param {Node} node
	     * @param {Node} preceding - predicate function
	     */
	    var insertAfter = function (node, preceding) {
	      var next = preceding.nextSibling, parent = preceding.parentNode;
	      if (next) {
	        parent.insertBefore(node, next);
	      } else {
	        parent.appendChild(node);
	      }
	      return node;
	    };

	    /**
	     * append elements.
	     *
	     * @param {Node} node
	     * @param {Collection} aChild
	     */
	    var appendChildNodes = function (node, aChild) {
	      $.each(aChild, function (idx, child) {
	        node.appendChild(child);
	      });
	      return node;
	    };

	    /**
	     * returns whether boundaryPoint is left edge or not.
	     *
	     * @param {BoundaryPoint} point
	     * @return {Boolean}
	     */
	    var isLeftEdgePoint = function (point) {
	      return point.offset === 0;
	    };

	    /**
	     * returns whether boundaryPoint is right edge or not.
	     *
	     * @param {BoundaryPoint} point
	     * @return {Boolean}
	     */
	    var isRightEdgePoint = function (point) {
	      return point.offset === nodeLength(point.node);
	    };

	    /**
	     * returns whether boundaryPoint is edge or not.
	     *
	     * @param {BoundaryPoint} point
	     * @return {Boolean}
	     */
	    var isEdgePoint = function (point) {
	      return isLeftEdgePoint(point) || isRightEdgePoint(point);
	    };

	    /**
	     * returns wheter node is left edge of ancestor or not.
	     *
	     * @param {Node} node
	     * @param {Node} ancestor
	     * @return {Boolean}
	     */
	    var isLeftEdgeOf = function (node, ancestor) {
	      while (node && node !== ancestor) {
	        if (position(node) !== 0) {
	          return false;
	        }
	        node = node.parentNode;
	      }

	      return true;
	    };

	    /**
	     * returns whether node is right edge of ancestor or not.
	     *
	     * @param {Node} node
	     * @param {Node} ancestor
	     * @return {Boolean}
	     */
	    var isRightEdgeOf = function (node, ancestor) {
	      while (node && node !== ancestor) {
	        if (position(node) !== nodeLength(node.parentNode) - 1) {
	          return false;
	        }
	        node = node.parentNode;
	      }

	      return true;
	    };

	    /**
	     * returns offset from parent.
	     *
	     * @param {Node} node
	     */
	    var position = function (node) {
	      var offset = 0;
	      while ((node = node.previousSibling)) {
	        offset += 1;
	      }
	      return offset;
	    };

	    var hasChildren = function (node) {
	      return !!(node && node.childNodes && node.childNodes.length);
	    };

	    /**
	     * returns previous boundaryPoint
	     *
	     * @param {BoundaryPoint} point
	     * @param {Boolean} isSkipInnerOffset
	     * @return {BoundaryPoint}
	     */
	    var prevPoint = function (point, isSkipInnerOffset) {
	      var node, offset;

	      if (point.offset === 0) {
	        if (isEditable(point.node)) {
	          return null;
	        }

	        node = point.node.parentNode;
	        offset = position(point.node);
	      } else if (hasChildren(point.node)) {
	        node = point.node.childNodes[point.offset - 1];
	        offset = nodeLength(node);
	      } else {
	        node = point.node;
	        offset = isSkipInnerOffset ? 0 : point.offset - 1;
	      }

	      return {
	        node: node,
	        offset: offset
	      };
	    };

	    /**
	     * returns next boundaryPoint
	     *
	     * @param {BoundaryPoint} point
	     * @param {Boolean} isSkipInnerOffset
	     * @return {BoundaryPoint}
	     */
	    var nextPoint = function (point, isSkipInnerOffset) {
	      var node, offset;

	      if (nodeLength(point.node) === point.offset) {
	        if (isEditable(point.node)) {
	          return null;
	        }

	        node = point.node.parentNode;
	        offset = position(point.node) + 1;
	      } else if (hasChildren(point.node)) {
	        node = point.node.childNodes[point.offset];
	        offset = 0;
	      } else {
	        node = point.node;
	        offset = isSkipInnerOffset ? nodeLength(point.node) : point.offset + 1;
	      }

	      return {
	        node: node,
	        offset: offset
	      };
	    };

	    /**
	     * returns whether pointA and pointB is same or not.
	     *
	     * @param {BoundaryPoint} pointA
	     * @param {BoundaryPoint} pointB
	     * @return {Boolean}
	     */
	    var isSamePoint = function (pointA, pointB) {
	      return pointA.node === pointB.node && pointA.offset === pointB.offset;
	    };

	    /**
	     * returns whether point is visible (can set cursor) or not.
	     * 
	     * @param {BoundaryPoint} point
	     * @return {Boolean}
	     */
	    var isVisiblePoint = function (point) {
	      if (isText(point.node) || !hasChildren(point.node) || isEmpty(point.node)) {
	        return true;
	      }

	      var leftNode = point.node.childNodes[point.offset - 1];
	      var rightNode = point.node.childNodes[point.offset];
	      if ((!leftNode || isVoid(leftNode)) && (!rightNode || isVoid(rightNode))) {
	        return true;
	      }

	      return false;
	    };

	    /**
	     * @method prevPointUtil
	     *
	     * @param {BoundaryPoint} point
	     * @param {Function} pred
	     * @return {BoundaryPoint}
	     */
	    var prevPointUntil = function (point, pred) {
	      while (point) {
	        if (pred(point)) {
	          return point;
	        }

	        point = prevPoint(point);
	      }

	      return null;
	    };

	    /**
	     * @method nextPointUntil
	     *
	     * @param {BoundaryPoint} point
	     * @param {Function} pred
	     * @return {BoundaryPoint}
	     */
	    var nextPointUntil = function (point, pred) {
	      while (point) {
	        if (pred(point)) {
	          return point;
	        }

	        point = nextPoint(point);
	      }

	      return null;
	    };

	    /**
	     * returns whether point has character or not.
	     *
	     * @param {Point} point
	     * @return {Boolean}
	     */
	    var isCharPoint = function (point) {
	      if (!isText(point.node)) {
	        return false;
	      }

	      var ch = point.node.nodeValue.charAt(point.offset - 1);
	      return ch && (ch !== ' ' && ch !== NBSP_CHAR);
	    };

	    /**
	     * @method walkPoint
	     *
	     * @param {BoundaryPoint} startPoint
	     * @param {BoundaryPoint} endPoint
	     * @param {Function} handler
	     * @param {Boolean} isSkipInnerOffset
	     */
	    var walkPoint = function (startPoint, endPoint, handler, isSkipInnerOffset) {
	      var point = startPoint;

	      while (point) {
	        handler(point);

	        if (isSamePoint(point, endPoint)) {
	          break;
	        }

	        var isSkipOffset = isSkipInnerOffset &&
	                           startPoint.node !== point.node &&
	                           endPoint.node !== point.node;
	        point = nextPoint(point, isSkipOffset);
	      }
	    };

	    /**
	     * @method makeOffsetPath
	     *
	     * return offsetPath(array of offset) from ancestor
	     *
	     * @param {Node} ancestor - ancestor node
	     * @param {Node} node
	     */
	    var makeOffsetPath = function (ancestor, node) {
	      var ancestors = listAncestor(node, func.eq(ancestor));
	      return $.map(ancestors, position).reverse();
	    };

	    /**
	     * @method fromOffsetPath
	     *
	     * return element from offsetPath(array of offset)
	     *
	     * @param {Node} ancestor - ancestor node
	     * @param {array} offsets - offsetPath
	     */
	    var fromOffsetPath = function (ancestor, offsets) {
	      var current = ancestor;
	      for (var i = 0, len = offsets.length; i < len; i++) {
	        if (current.childNodes.length <= offsets[i]) {
	          current = current.childNodes[current.childNodes.length - 1];
	        } else {
	          current = current.childNodes[offsets[i]];
	        }
	      }
	      return current;
	    };

	    /**
	     * @method splitNode
	     *
	     * split element or #text
	     *
	     * @param {BoundaryPoint} point
	     * @param {Object} [options]
	     * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false
	     * @param {Boolean} [options.isNotSplitEdgePoint] - default: false
	     * @return {Node} right node of boundaryPoint
	     */
	    var splitNode = function (point, options) {
	      var isSkipPaddingBlankHTML = options && options.isSkipPaddingBlankHTML;
	      var isNotSplitEdgePoint = options && options.isNotSplitEdgePoint;

	      // edge case
	      if (isEdgePoint(point) && (isText(point.node) || isNotSplitEdgePoint)) {
	        if (isLeftEdgePoint(point)) {
	          return point.node;
	        } else if (isRightEdgePoint(point)) {
	          return point.node.nextSibling;
	        }
	      }

	      // split #text
	      if (isText(point.node)) {
	        return point.node.splitText(point.offset);
	      } else {
	        var childNode = point.node.childNodes[point.offset];
	        var clone = insertAfter(point.node.cloneNode(false), point.node);
	        appendChildNodes(clone, listNext(childNode));

	        if (!isSkipPaddingBlankHTML) {
	          paddingBlankHTML(point.node);
	          paddingBlankHTML(clone);
	        }

	        return clone;
	      }
	    };

	    /**
	     * @method splitTree
	     *
	     * split tree by point
	     *
	     * @param {Node} root - split root
	     * @param {BoundaryPoint} point
	     * @param {Object} [options]
	     * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false
	     * @param {Boolean} [options.isNotSplitEdgePoint] - default: false
	     * @return {Node} right node of boundaryPoint
	     */
	    var splitTree = function (root, point, options) {
	      // ex) [#text, <span>, <p>]
	      var ancestors = listAncestor(point.node, func.eq(root));

	      if (!ancestors.length) {
	        return null;
	      } else if (ancestors.length === 1) {
	        return splitNode(point, options);
	      }

	      return ancestors.reduce(function (node, parent) {
	        if (node === point.node) {
	          node = splitNode(point, options);
	        }

	        return splitNode({
	          node: parent,
	          offset: node ? dom.position(node) : nodeLength(parent)
	        }, options);
	      });
	    };

	    /**
	     * split point
	     *
	     * @param {Point} point
	     * @param {Boolean} isInline
	     * @return {Object}
	     */
	    var splitPoint = function (point, isInline) {
	      // find splitRoot, container
	      //  - inline: splitRoot is a child of paragraph
	      //  - block: splitRoot is a child of bodyContainer
	      var pred = isInline ? isPara : isBodyContainer;
	      var ancestors = listAncestor(point.node, pred);
	      var topAncestor = list.last(ancestors) || point.node;

	      var splitRoot, container;
	      if (pred(topAncestor)) {
	        splitRoot = ancestors[ancestors.length - 2];
	        container = topAncestor;
	      } else {
	        splitRoot = topAncestor;
	        container = splitRoot.parentNode;
	      }

	      // if splitRoot is exists, split with splitTree
	      var pivot = splitRoot && splitTree(splitRoot, point, {
	        isSkipPaddingBlankHTML: isInline,
	        isNotSplitEdgePoint: isInline
	      });

	      // if container is point.node, find pivot with point.offset
	      if (!pivot && container === point.node) {
	        pivot = point.node.childNodes[point.offset];
	      }

	      return {
	        rightNode: pivot,
	        container: container
	      };
	    };

	    var create = function (nodeName) {
	      return document.createElement(nodeName);
	    };

	    var createText = function (text) {
	      return document.createTextNode(text);
	    };

	    /**
	     * @method remove
	     *
	     * remove node, (isRemoveChild: remove child or not)
	     *
	     * @param {Node} node
	     * @param {Boolean} isRemoveChild
	     */
	    var remove = function (node, isRemoveChild) {
	      if (!node || !node.parentNode) { return; }
	      if (node.removeNode) { return node.removeNode(isRemoveChild); }

	      var parent = node.parentNode;
	      if (!isRemoveChild) {
	        var nodes = [];
	        var i, len;
	        for (i = 0, len = node.childNodes.length; i < len; i++) {
	          nodes.push(node.childNodes[i]);
	        }

	        for (i = 0, len = nodes.length; i < len; i++) {
	          parent.insertBefore(nodes[i], node);
	        }
	      }

	      parent.removeChild(node);
	    };

	    /**
	     * @method removeWhile
	     *
	     * @param {Node} node
	     * @param {Function} pred
	     */
	    var removeWhile = function (node, pred) {
	      while (node) {
	        if (isEditable(node) || !pred(node)) {
	          break;
	        }

	        var parent = node.parentNode;
	        remove(node);
	        node = parent;
	      }
	    };

	    /**
	     * @method replace
	     *
	     * replace node with provided nodeName
	     *
	     * @param {Node} node
	     * @param {String} nodeName
	     * @return {Node} - new node
	     */
	    var replace = function (node, nodeName) {
	      if (node.nodeName.toUpperCase() === nodeName.toUpperCase()) {
	        return node;
	      }

	      var newNode = create(nodeName);

	      if (node.style.cssText) {
	        newNode.style.cssText = node.style.cssText;
	      }

	      appendChildNodes(newNode, list.from(node.childNodes));
	      insertAfter(newNode, node);
	      remove(node);

	      return newNode;
	    };

	    var isTextarea = makePredByNodeName('TEXTAREA');

	    /**
	     * @param {jQuery} $node
	     * @param {Boolean} [stripLinebreaks] - default: false
	     */
	    var value = function ($node, stripLinebreaks) {
	      var val = isTextarea($node[0]) ? $node.val() : $node.html();
	      if (stripLinebreaks) {
	        return val.replace(/[\n\r]/g, '');
	      }
	      return val;
	    };

	    /**
	     * @method html
	     *
	     * get the HTML contents of node
	     *
	     * @param {jQuery} $node
	     * @param {Boolean} [isNewlineOnBlock]
	     */
	    var html = function ($node, isNewlineOnBlock) {
	      var markup = value($node);

	      if (isNewlineOnBlock) {
	        var regexTag = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;
	        markup = markup.replace(regexTag, function (match, endSlash, name) {
	          name = name.toUpperCase();
	          var isEndOfInlineContainer = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(name) &&
	                                       !!endSlash;
	          var isBlockNode = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(name);

	          return match + ((isEndOfInlineContainer || isBlockNode) ? '\n' : '');
	        });
	        markup = $.trim(markup);
	      }

	      return markup;
	    };

	    return {
	      /** @property {String} NBSP_CHAR */
	      NBSP_CHAR: NBSP_CHAR,
	      /** @property {String} ZERO_WIDTH_NBSP_CHAR */
	      ZERO_WIDTH_NBSP_CHAR: ZERO_WIDTH_NBSP_CHAR,
	      /** @property {String} blank */
	      blank: blankHTML,
	      /** @property {String} emptyPara */
	      emptyPara: '<p>' + blankHTML + '</p>',
	      makePredByNodeName: makePredByNodeName,
	      isEditable: isEditable,
	      isControlSizing: isControlSizing,
	      buildLayoutInfo: buildLayoutInfo,
	      makeLayoutInfo: makeLayoutInfo,
	      isText: isText,
	      isVoid: isVoid,
	      isPara: isPara,
	      isPurePara: isPurePara,
	      isInline: isInline,
	      isBlock: func.not(isInline),
	      isBodyInline: isBodyInline,
	      isBody: isBody,
	      isParaInline: isParaInline,
	      isList: isList,
	      isTable: isTable,
	      isCell: isCell,
	      isBlockquote: isBlockquote,
	      isBodyContainer: isBodyContainer,
	      isAnchor: isAnchor,
	      isDiv: makePredByNodeName('DIV'),
	      isLi: isLi,
	      isBR: makePredByNodeName('BR'),
	      isSpan: makePredByNodeName('SPAN'),
	      isB: makePredByNodeName('B'),
	      isU: makePredByNodeName('U'),
	      isS: makePredByNodeName('S'),
	      isI: makePredByNodeName('I'),
	      isImg: makePredByNodeName('IMG'),
	      isTextarea: isTextarea,
	      isEmpty: isEmpty,
	      isEmptyAnchor: func.and(isAnchor, isEmpty),
	      isClosestSibling: isClosestSibling,
	      withClosestSiblings: withClosestSiblings,
	      nodeLength: nodeLength,
	      isLeftEdgePoint: isLeftEdgePoint,
	      isRightEdgePoint: isRightEdgePoint,
	      isEdgePoint: isEdgePoint,
	      isLeftEdgeOf: isLeftEdgeOf,
	      isRightEdgeOf: isRightEdgeOf,
	      prevPoint: prevPoint,
	      nextPoint: nextPoint,
	      isSamePoint: isSamePoint,
	      isVisiblePoint: isVisiblePoint,
	      prevPointUntil: prevPointUntil,
	      nextPointUntil: nextPointUntil,
	      isCharPoint: isCharPoint,
	      walkPoint: walkPoint,
	      ancestor: ancestor,
	      singleChildAncestor: singleChildAncestor,
	      listAncestor: listAncestor,
	      lastAncestor: lastAncestor,
	      listNext: listNext,
	      listPrev: listPrev,
	      listDescendant: listDescendant,
	      commonAncestor: commonAncestor,
	      wrap: wrap,
	      insertAfter: insertAfter,
	      appendChildNodes: appendChildNodes,
	      position: position,
	      hasChildren: hasChildren,
	      makeOffsetPath: makeOffsetPath,
	      fromOffsetPath: fromOffsetPath,
	      splitTree: splitTree,
	      splitPoint: splitPoint,
	      create: create,
	      createText: createText,
	      remove: remove,
	      removeWhile: removeWhile,
	      replace: replace,
	      html: html,
	      value: value
	    };
	  })();


	  var range = (function () {

	    /**
	     * return boundaryPoint from TextRange, inspired by Andy Na's HuskyRange.js
	     *
	     * @param {TextRange} textRange
	     * @param {Boolean} isStart
	     * @return {BoundaryPoint}
	     *
	     * @see http://msdn.microsoft.com/en-us/library/ie/ms535872(v=vs.85).aspx
	     */
	    var textRangeToPoint = function (textRange, isStart) {
	      var container = textRange.parentElement(), offset;
	  
	      var tester = document.body.createTextRange(), prevContainer;
	      var childNodes = list.from(container.childNodes);
	      for (offset = 0; offset < childNodes.length; offset++) {
	        if (dom.isText(childNodes[offset])) {
	          continue;
	        }
	        tester.moveToElementText(childNodes[offset]);
	        if (tester.compareEndPoints('StartToStart', textRange) >= 0) {
	          break;
	        }
	        prevContainer = childNodes[offset];
	      }
	  
	      if (offset !== 0 && dom.isText(childNodes[offset - 1])) {
	        var textRangeStart = document.body.createTextRange(), curTextNode = null;
	        textRangeStart.moveToElementText(prevContainer || container);
	        textRangeStart.collapse(!prevContainer);
	        curTextNode = prevContainer ? prevContainer.nextSibling : container.firstChild;
	  
	        var pointTester = textRange.duplicate();
	        pointTester.setEndPoint('StartToStart', textRangeStart);
	        var textCount = pointTester.text.replace(/[\r\n]/g, '').length;
	  
	        while (textCount > curTextNode.nodeValue.length && curTextNode.nextSibling) {
	          textCount -= curTextNode.nodeValue.length;
	          curTextNode = curTextNode.nextSibling;
	        }
	  
	        /* jshint ignore:start */
	        var dummy = curTextNode.nodeValue; // enforce IE to re-reference curTextNode, hack
	        /* jshint ignore:end */
	  
	        if (isStart && curTextNode.nextSibling && dom.isText(curTextNode.nextSibling) &&
	            textCount === curTextNode.nodeValue.length) {
	          textCount -= curTextNode.nodeValue.length;
	          curTextNode = curTextNode.nextSibling;
	        }
	  
	        container = curTextNode;
	        offset = textCount;
	      }
	  
	      return {
	        cont: container,
	        offset: offset
	      };
	    };
	    
	    /**
	     * return TextRange from boundary point (inspired by google closure-library)
	     * @param {BoundaryPoint} point
	     * @return {TextRange}
	     */
	    var pointToTextRange = function (point) {
	      var textRangeInfo = function (container, offset) {
	        var node, isCollapseToStart;
	  
	        if (dom.isText(container)) {
	          var prevTextNodes = dom.listPrev(container, func.not(dom.isText));
	          var prevContainer = list.last(prevTextNodes).previousSibling;
	          node =  prevContainer || container.parentNode;
	          offset += list.sum(list.tail(prevTextNodes), dom.nodeLength);
	          isCollapseToStart = !prevContainer;
	        } else {
	          node = container.childNodes[offset] || container;
	          if (dom.isText(node)) {
	            return textRangeInfo(node, 0);
	          }
	  
	          offset = 0;
	          isCollapseToStart = false;
	        }
	  
	        return {
	          node: node,
	          collapseToStart: isCollapseToStart,
	          offset: offset
	        };
	      };
	  
	      var textRange = document.body.createTextRange();
	      var info = textRangeInfo(point.node, point.offset);
	  
	      textRange.moveToElementText(info.node);
	      textRange.collapse(info.collapseToStart);
	      textRange.moveStart('character', info.offset);
	      return textRange;
	    };
	    
	    /**
	     * Wrapped Range
	     *
	     * @constructor
	     * @param {Node} sc - start container
	     * @param {Number} so - start offset
	     * @param {Node} ec - end container
	     * @param {Number} eo - end offset
	     */
	    var WrappedRange = function (sc, so, ec, eo) {
	      this.sc = sc;
	      this.so = so;
	      this.ec = ec;
	      this.eo = eo;
	  
	      // nativeRange: get nativeRange from sc, so, ec, eo
	      var nativeRange = function () {
	        if (agent.isW3CRangeSupport) {
	          var w3cRange = document.createRange();
	          w3cRange.setStart(sc, so);
	          w3cRange.setEnd(ec, eo);

	          return w3cRange;
	        } else {
	          var textRange = pointToTextRange({
	            node: sc,
	            offset: so
	          });

	          textRange.setEndPoint('EndToEnd', pointToTextRange({
	            node: ec,
	            offset: eo
	          }));

	          return textRange;
	        }
	      };

	      this.getPoints = function () {
	        return {
	          sc: sc,
	          so: so,
	          ec: ec,
	          eo: eo
	        };
	      };

	      this.getStartPoint = function () {
	        return {
	          node: sc,
	          offset: so
	        };
	      };

	      this.getEndPoint = function () {
	        return {
	          node: ec,
	          offset: eo
	        };
	      };

	      /**
	       * select update visible range
	       */
	      this.select = function () {
	        var nativeRng = nativeRange();
	        if (agent.isW3CRangeSupport) {
	          var selection = document.getSelection();
	          if (selection.rangeCount > 0) {
	            selection.removeAllRanges();
	          }
	          selection.addRange(nativeRng);
	        } else {
	          nativeRng.select();
	        }
	        
	        return this;
	      };

	      /**
	       * @return {WrappedRange}
	       */
	      this.normalize = function () {

	        /**
	         * @param {BoundaryPoint} point
	         * @return {BoundaryPoint}
	         */
	        var getVisiblePoint = function (point) {
	          if (!dom.isVisiblePoint(point)) {
	            if (dom.isLeftEdgePoint(point)) {
	              point = dom.nextPointUntil(point, dom.isVisiblePoint);
	            } else {
	              point = dom.prevPointUntil(point, dom.isVisiblePoint);
	            }
	          }
	          return point;
	        };

	        var startPoint = getVisiblePoint(this.getStartPoint());
	        var endPoint = getVisiblePoint(this.getEndPoint());

	        return new WrappedRange(
	          startPoint.node,
	          startPoint.offset,
	          endPoint.node,
	          endPoint.offset
	        );
	      };

	      /**
	       * returns matched nodes on range
	       *
	       * @param {Function} [pred] - predicate function
	       * @param {Object} [options]
	       * @param {Boolean} [options.includeAncestor]
	       * @param {Boolean} [options.fullyContains]
	       * @return {Node[]}
	       */
	      this.nodes = function (pred, options) {
	        pred = pred || func.ok;

	        var includeAncestor = options && options.includeAncestor;
	        var fullyContains = options && options.fullyContains;

	        // TODO compare points and sort
	        var startPoint = this.getStartPoint();
	        var endPoint = this.getEndPoint();

	        var nodes = [];
	        var leftEdgeNodes = [];

	        dom.walkPoint(startPoint, endPoint, function (point) {
	          if (dom.isEditable(point.node)) {
	            return;
	          }

	          var node;
	          if (fullyContains) {
	            if (dom.isLeftEdgePoint(point)) {
	              leftEdgeNodes.push(point.node);
	            }
	            if (dom.isRightEdgePoint(point) && list.contains(leftEdgeNodes, point.node)) {
	              node = point.node;
	            }
	          } else if (includeAncestor) {
	            node = dom.ancestor(point.node, pred);
	          } else {
	            node = point.node;
	          }

	          if (node && pred(node)) {
	            nodes.push(node);
	          }
	        }, true);

	        return list.unique(nodes);
	      };

	      /**
	       * returns commonAncestor of range
	       * @return {Element} - commonAncestor
	       */
	      this.commonAncestor = function () {
	        return dom.commonAncestor(sc, ec);
	      };

	      /**
	       * returns expanded range by pred
	       *
	       * @param {Function} pred - predicate function
	       * @return {WrappedRange}
	       */
	      this.expand = function (pred) {
	        var startAncestor = dom.ancestor(sc, pred);
	        var endAncestor = dom.ancestor(ec, pred);

	        if (!startAncestor && !endAncestor) {
	          return new WrappedRange(sc, so, ec, eo);
	        }

	        var boundaryPoints = this.getPoints();

	        if (startAncestor) {
	          boundaryPoints.sc = startAncestor;
	          boundaryPoints.so = 0;
	        }

	        if (endAncestor) {
	          boundaryPoints.ec = endAncestor;
	          boundaryPoints.eo = dom.nodeLength(endAncestor);
	        }

	        return new WrappedRange(
	          boundaryPoints.sc,
	          boundaryPoints.so,
	          boundaryPoints.ec,
	          boundaryPoints.eo
	        );
	      };

	      /**
	       * @param {Boolean} isCollapseToStart
	       * @return {WrappedRange}
	       */
	      this.collapse = function (isCollapseToStart) {
	        if (isCollapseToStart) {
	          return new WrappedRange(sc, so, sc, so);
	        } else {
	          return new WrappedRange(ec, eo, ec, eo);
	        }
	      };

	      /**
	       * splitText on range
	       */
	      this.splitText = function () {
	        var isSameContainer = sc === ec;
	        var boundaryPoints = this.getPoints();

	        if (dom.isText(ec) && !dom.isEdgePoint(this.getEndPoint())) {
	          ec.splitText(eo);
	        }

	        if (dom.isText(sc) && !dom.isEdgePoint(this.getStartPoint())) {
	          boundaryPoints.sc = sc.splitText(so);
	          boundaryPoints.so = 0;

	          if (isSameContainer) {
	            boundaryPoints.ec = boundaryPoints.sc;
	            boundaryPoints.eo = eo - so;
	          }
	        }

	        return new WrappedRange(
	          boundaryPoints.sc,
	          boundaryPoints.so,
	          boundaryPoints.ec,
	          boundaryPoints.eo
	        );
	      };

	      /**
	       * delete contents on range
	       * @return {WrappedRange}
	       */
	      this.deleteContents = function () {
	        if (this.isCollapsed()) {
	          return this;
	        }

	        var rng = this.splitText();
	        var nodes = rng.nodes(null, {
	          fullyContains: true
	        });

	        // find new cursor point
	        var point = dom.prevPointUntil(rng.getStartPoint(), function (point) {
	          return !list.contains(nodes, point.node);
	        });

	        var emptyParents = [];
	        $.each(nodes, function (idx, node) {
	          // find empty parents
	          var parent = node.parentNode;
	          if (point.node !== parent && dom.nodeLength(parent) === 1) {
	            emptyParents.push(parent);
	          }
	          dom.remove(node, false);
	        });

	        // remove empty parents
	        $.each(emptyParents, function (idx, node) {
	          dom.remove(node, false);
	        });

	        return new WrappedRange(
	          point.node,
	          point.offset,
	          point.node,
	          point.offset
	        ).normalize();
	      };
	      
	      /**
	       * makeIsOn: return isOn(pred) function
	       */
	      var makeIsOn = function (pred) {
	        return function () {
	          var ancestor = dom.ancestor(sc, pred);
	          return !!ancestor && (ancestor === dom.ancestor(ec, pred));
	        };
	      };
	  
	      // isOnEditable: judge whether range is on editable or not
	      this.isOnEditable = makeIsOn(dom.isEditable);
	      // isOnList: judge whether range is on list node or not
	      this.isOnList = makeIsOn(dom.isList);
	      // isOnAnchor: judge whether range is on anchor node or not
	      this.isOnAnchor = makeIsOn(dom.isAnchor);
	      // isOnAnchor: judge whether range is on cell node or not
	      this.isOnCell = makeIsOn(dom.isCell);

	      /**
	       * @param {Function} pred
	       * @return {Boolean}
	       */
	      this.isLeftEdgeOf = function (pred) {
	        if (!dom.isLeftEdgePoint(this.getStartPoint())) {
	          return false;
	        }

	        var node = dom.ancestor(this.sc, pred);
	        return node && dom.isLeftEdgeOf(this.sc, node);
	      };

	      /**
	       * returns whether range was collapsed or not
	       */
	      this.isCollapsed = function () {
	        return sc === ec && so === eo;
	      };

	      /**
	       * wrap inline nodes which children of body with paragraph
	       *
	       * @return {WrappedRange}
	       */
	      this.wrapBodyInlineWithPara = function () {
	        if (dom.isBodyContainer(sc) && dom.isEmpty(sc)) {
	          sc.innerHTML = dom.emptyPara;
	          return new WrappedRange(sc.firstChild, 0, sc.firstChild, 0);
	        }

	        if (dom.isParaInline(sc) || dom.isPara(sc)) {
	          return this.normalize();
	        }

	        // find inline top ancestor
	        var topAncestor;
	        if (dom.isInline(sc)) {
	          var ancestors = dom.listAncestor(sc, func.not(dom.isInline));
	          topAncestor = list.last(ancestors);
	          if (!dom.isInline(topAncestor)) {
	            topAncestor = ancestors[ancestors.length - 2] || sc.childNodes[so];
	          }
	        } else {
	          topAncestor = sc.childNodes[so > 0 ? so - 1 : 0];
	        }

	        // siblings not in paragraph
	        var inlineSiblings = dom.listPrev(topAncestor, dom.isParaInline).reverse();
	        inlineSiblings = inlineSiblings.concat(dom.listNext(topAncestor.nextSibling, dom.isParaInline));

	        // wrap with paragraph
	        if (inlineSiblings.length) {
	          var para = dom.wrap(list.head(inlineSiblings), 'p');
	          dom.appendChildNodes(para, list.tail(inlineSiblings));
	        }

	        return this.normalize();
	      };

	      /**
	       * insert node at current cursor
	       *
	       * @param {Node} node
	       * @return {Node}
	       */
	      this.insertNode = function (node) {
	        var rng = this.wrapBodyInlineWithPara().deleteContents();
	        var info = dom.splitPoint(rng.getStartPoint(), dom.isInline(node));

	        if (info.rightNode) {
	          info.rightNode.parentNode.insertBefore(node, info.rightNode);
	        } else {
	          info.container.appendChild(node);
	        }

	        return node;
	      };

	      /**
	       * insert html at current cursor
	       */
	      this.pasteHTML = function (markup) {
	        var self = this;
	        var contentsContainer = $('<div></div>').html(markup)[0];
	        var childNodes = list.from(contentsContainer.childNodes);

	        this.wrapBodyInlineWithPara().deleteContents();

	        return $.map(childNodes.reverse(), function (childNode) {
	          return self.insertNode(childNode);
	        }).reverse();
	      };
	  
	      /**
	       * returns text in range
	       *
	       * @return {String}
	       */
	      this.toString = function () {
	        var nativeRng = nativeRange();
	        return agent.isW3CRangeSupport ? nativeRng.toString() : nativeRng.text;
	      };

	      /**
	       * returns range for word before cursor
	       *
	       * @param {Boolean} [findAfter] - find after cursor, default: false
	       * @return {WrappedRange}
	       */
	      this.getWordRange = function (findAfter) {
	        var endPoint = this.getEndPoint();

	        if (!dom.isCharPoint(endPoint)) {
	          return this;
	        }

	        var startPoint = dom.prevPointUntil(endPoint, function (point) {
	          return !dom.isCharPoint(point);
	        });

	        if (findAfter) {
	          endPoint = dom.nextPointUntil(endPoint, function (point) {
	            return !dom.isCharPoint(point);
	          });
	        }

	        return new WrappedRange(
	          startPoint.node,
	          startPoint.offset,
	          endPoint.node,
	          endPoint.offset
	        );
	      };
	  
	      /**
	       * create offsetPath bookmark
	       *
	       * @param {Node} editable
	       */
	      this.bookmark = function (editable) {
	        return {
	          s: {
	            path: dom.makeOffsetPath(editable, sc),
	            offset: so
	          },
	          e: {
	            path: dom.makeOffsetPath(editable, ec),
	            offset: eo
	          }
	        };
	      };

	      /**
	       * create offsetPath bookmark base on paragraph
	       *
	       * @param {Node[]} paras
	       */
	      this.paraBookmark = function (paras) {
	        return {
	          s: {
	            path: list.tail(dom.makeOffsetPath(list.head(paras), sc)),
	            offset: so
	          },
	          e: {
	            path: list.tail(dom.makeOffsetPath(list.last(paras), ec)),
	            offset: eo
	          }
	        };
	      };

	      /**
	       * getClientRects
	       * @return {Rect[]}
	       */
	      this.getClientRects = function () {
	        var nativeRng = nativeRange();
	        return nativeRng.getClientRects();
	      };
	    };

	  /**
	   * @class core.range
	   *
	   * Data structure
	   *  * BoundaryPoint: a point of dom tree
	   *  * BoundaryPoints: two boundaryPoints corresponding to the start and the end of the Range
	   *
	   * See to http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Position
	   *
	   * @singleton
	   * @alternateClassName range
	   */
	    return {
	      /**
	       * @method
	       * 
	       * create Range Object From arguments or Browser Selection
	       *
	       * @param {Node} sc - start container
	       * @param {Number} so - start offset
	       * @param {Node} ec - end container
	       * @param {Number} eo - end offset
	       * @return {WrappedRange}
	       */
	      create : function (sc, so, ec, eo) {
	        if (!arguments.length) { // from Browser Selection
	          if (agent.isW3CRangeSupport) {
	            var selection = document.getSelection();
	            if (!selection || selection.rangeCount === 0) {
	              return null;
	            } else if (dom.isBody(selection.anchorNode)) {
	              // Firefox: returns entire body as range on initialization. We won't never need it.
	              return null;
	            }
	  
	            var nativeRng = selection.getRangeAt(0);
	            sc = nativeRng.startContainer;
	            so = nativeRng.startOffset;
	            ec = nativeRng.endContainer;
	            eo = nativeRng.endOffset;
	          } else { // IE8: TextRange
	            var textRange = document.selection.createRange();
	            var textRangeEnd = textRange.duplicate();
	            textRangeEnd.collapse(false);
	            var textRangeStart = textRange;
	            textRangeStart.collapse(true);
	  
	            var startPoint = textRangeToPoint(textRangeStart, true),
	            endPoint = textRangeToPoint(textRangeEnd, false);

	            // same visible point case: range was collapsed.
	            if (dom.isText(startPoint.node) && dom.isLeftEdgePoint(startPoint) &&
	                dom.isTextNode(endPoint.node) && dom.isRightEdgePoint(endPoint) &&
	                endPoint.node.nextSibling === startPoint.node) {
	              startPoint = endPoint;
	            }

	            sc = startPoint.cont;
	            so = startPoint.offset;
	            ec = endPoint.cont;
	            eo = endPoint.offset;
	          }
	        } else if (arguments.length === 2) { //collapsed
	          ec = sc;
	          eo = so;
	        }
	        return new WrappedRange(sc, so, ec, eo);
	      },

	      /**
	       * @method 
	       * 
	       * create WrappedRange from node
	       *
	       * @param {Node} node
	       * @return {WrappedRange}
	       */
	      createFromNode: function (node) {
	        var sc = node;
	        var so = 0;
	        var ec = node;
	        var eo = dom.nodeLength(ec);

	        // browsers can't target a picture or void node
	        if (dom.isVoid(sc)) {
	          so = dom.listPrev(sc).length - 1;
	          sc = sc.parentNode;
	        }
	        if (dom.isBR(ec)) {
	          eo = dom.listPrev(ec).length - 1;
	          ec = ec.parentNode;
	        } else if (dom.isVoid(ec)) {
	          eo = dom.listPrev(ec).length;
	          ec = ec.parentNode;
	        }

	        return this.create(sc, so, ec, eo);
	      },

	      /**
	       * create WrappedRange from node after position
	       *
	       * @param {Node} node
	       * @return {WrappedRange}
	       */
	      createFromNodeBefore: function (node) {
	        return this.createFromNode(node).collapse(true);
	      },

	      /**
	       * create WrappedRange from node after position
	       *
	       * @param {Node} node
	       * @return {WrappedRange}
	       */
	      createFromNodeAfter: function (node) {
	        return this.createFromNode(node).collapse();
	      },

	      /**
	       * @method 
	       * 
	       * create WrappedRange from bookmark
	       *
	       * @param {Node} editable
	       * @param {Object} bookmark
	       * @return {WrappedRange}
	       */
	      createFromBookmark : function (editable, bookmark) {
	        var sc = dom.fromOffsetPath(editable, bookmark.s.path);
	        var so = bookmark.s.offset;
	        var ec = dom.fromOffsetPath(editable, bookmark.e.path);
	        var eo = bookmark.e.offset;
	        return new WrappedRange(sc, so, ec, eo);
	      },

	      /**
	       * @method 
	       *
	       * create WrappedRange from paraBookmark
	       *
	       * @param {Object} bookmark
	       * @param {Node[]} paras
	       * @return {WrappedRange}
	       */
	      createFromParaBookmark: function (bookmark, paras) {
	        var so = bookmark.s.offset;
	        var eo = bookmark.e.offset;
	        var sc = dom.fromOffsetPath(list.head(paras), bookmark.s.path);
	        var ec = dom.fromOffsetPath(list.last(paras), bookmark.e.path);

	        return new WrappedRange(sc, so, ec, eo);
	      }
	    };
	  })();

	  /**
	   * @class defaults 
	   * 
	   * @singleton
	   */
	  var defaults = {
	    /** @property */
	    version: '0.6.7',

	    /**
	     * 
	     * for event options, reference to EventHandler.attach
	     * 
	     * @property {Object} options 
	     * @property {String/Number} [options.width=null] set editor width 
	     * @property {String/Number} [options.height=null] set editor height, ex) 300
	     * @property {String/Number} options.minHeight set minimum height of editor
	     * @property {String/Number} options.maxHeight
	     * @property {String/Number} options.focus 
	     * @property {Number} options.tabsize 
	     * @property {Boolean} options.styleWithSpan
	     * @property {Object} options.codemirror
	     * @property {Object} [options.codemirror.mode='text/html']
	     * @property {Object} [options.codemirror.htmlMode=true]
	     * @property {Object} [options.codemirror.lineNumbers=true]
	     * @property {String} [options.lang=en-US] language 'en-US', 'ko-KR', ...
	     * @property {String} [options.direction=null] text direction, ex) 'rtl'
	     * @property {Array} [options.toolbar]
	     * @property {Boolean} [options.airMode=false]
	     * @property {Array} [options.airPopover]
	     * @property {Fucntion} [options.onInit] initialize
	     * @property {Fucntion} [options.onsubmit]
	     */
	    options: {
	      width: null,                  // set editor width
	      height: null,                 // set editor height, ex) 300

	      minHeight: null,              // set minimum height of editor
	      maxHeight: null,              // set maximum height of editor

	      focus: false,                 // set focus to editable area after initializing summernote

	      tabsize: 4,                   // size of tab ex) 2 or 4
	      styleWithSpan: true,          // style with span (Chrome and FF only)

	      disableLinkTarget: false,     // hide link Target Checkbox
	      disableDragAndDrop: false,    // disable drag and drop event
	      disableResizeEditor: false,   // disable resizing editor

	      shortcuts: true,              // enable keyboard shortcuts

	      placeholder: false,           // enable placeholder text
	      prettifyHtml: true,           // enable prettifying html while toggling codeview

	      iconPrefix: 'fa fa-',         // prefix for css icon classes

	      codemirror: {                 // codemirror options
	        mode: 'text/html',
	        htmlMode: true,
	        lineNumbers: true
	      },

	      // language
	      lang: 'en-US',                // language 'en-US', 'ko-KR', ...
	      direction: null,              // text direction, ex) 'rtl'

	      // toolbar
	      toolbar: [
	        ['style', ['style']],
	        ['font', ['bold', 'italic', 'underline', 'clear']],
	        // ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
	        ['fontname', ['fontname']],
	        ['fontsize', ['fontsize']],
	        ['color', ['color']],
	        ['para', ['ul', 'ol', 'paragraph']],
	        ['height', ['height']],
	        ['table', ['table']],
	        ['insert', ['link', 'hr']],
	        ['view', ['fullscreen', 'codeview']],
	        ['help', ['help']]
	      ],

	      plugin : { },

	      // air mode: inline editor
	      airMode: false,
	      // airPopover: [
	      //   ['style', ['style']],
	      //   ['font', ['bold', 'italic', 'underline', 'clear']],
	      //   ['fontname', ['fontname']],
	      //   ['color', ['color']],
	      //   ['para', ['ul', 'ol', 'paragraph']],
	      //   ['height', ['height']],
	      //   ['table', ['table']],
	      //   ['insert', ['link', 'picture']],
	      //   ['help', ['help']]
	      // ],
	      airPopover: [
	        ['color', ['color']],
	        ['font', ['bold', 'underline', 'clear']],
	        ['para', ['ul', 'paragraph']],
	        ['table', ['table']],
	        ['insert', ['link', 'picture']]
	      ],

	      // style tag
	      styleTags: ['p', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],

	      // default fontName
	      defaultFontName: 'Open Sans',

	      // fontName
	      fontNames: [
	        'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New',
	        'Helvetica Neue', 'Helvetica', 'Impact', 'Lucida Grande',
	        'Tahoma', 'Times New Roman', 'Verdana', 'Open Sans'
	      ],
	      fontNamesIgnoreCheck: [],

	      fontSizes: ['8', '9', '10', '11', '12', '14', '18', '24', '36'],

	      // pallete colors(n x n)
	      colors: [
	        ['#000000', '#424242', '#636363', '#9C9C94', '#CEC6CE', '#EFEFEF', '#F7F7F7', '#FFFFFF'],
	        ['#FF0000', '#FF9C00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#9C00FF', '#FF00FF'],
	        ['#F7C6CE', '#FFE7CE', '#FFEFC6', '#D6EFD6', '#CEDEE7', '#CEE7F7', '#D6D6E7', '#E7D6DE'],
	        ['#E79C9C', '#FFC69C', '#FFE79C', '#B5D6A5', '#A5C6CE', '#9CC6EF', '#B5A5D6', '#D6A5BD'],
	        ['#E76363', '#F7AD6B', '#FFD663', '#94BD7B', '#73A5AD', '#6BADDE', '#8C7BC6', '#C67BA5'],
	        ['#CE0000', '#E79439', '#EFC631', '#6BA54A', '#4A7B8C', '#3984C6', '#634AA5', '#A54A7B'],
	        ['#9C0000', '#B56308', '#BD9400', '#397B21', '#104A5A', '#085294', '#311873', '#731842'],
	        ['#630000', '#7B3900', '#846300', '#295218', '#083139', '#003163', '#21104A', '#4A1031']
	      ],

	      // lineHeight
	      lineHeights: ['1.0', '1.2', '1.4', '1.5', '1.6', '1.8', '2.0', '3.0'],

	      // insertTable max size
	      insertTableMaxSize: {
	        col: 10,
	        row: 10
	      },

	      // image
	      maximumImageFileSize: null, // size in bytes, null = no limit

	      // callbacks
	      oninit: null,             // initialize
	      onfocus: null,            // editable has focus
	      onblur: null,             // editable out of focus
	      onenter: null,            // enter key pressed
	      onkeyup: null,            // keyup
	      onkeydown: null,          // keydown
	      onImageUpload: null,      // imageUpload
	      onImageUploadError: null, // imageUploadError
	      onMediaDelete: null,      // media delete
	      onToolbarClick: null,
	      onsubmit: null,

	      /**
	       * manipulate link address when user create link
	       * @param {String} sLinkUrl
	       * @return {String}
	       */
	      onCreateLink: function (sLinkUrl) {
	        if (sLinkUrl.indexOf('@') !== -1 && sLinkUrl.indexOf(':') === -1) {
	          sLinkUrl =  'mailto:' + sLinkUrl;
	        } else if (sLinkUrl.indexOf('://') === -1) {
	          sLinkUrl = 'http://' + sLinkUrl;
	        }

	        return sLinkUrl;
	      },

	      keyMap: {
	        pc: {
	          'ENTER': 'insertParagraph',
	          'CTRL+Z': 'undo',
	          'CTRL+Y': 'redo',
	          'TAB': 'tab',
	          'SHIFT+TAB': 'untab',
	          'CTRL+B': 'bold',
	          'CTRL+I': 'italic',
	          'CTRL+U': 'underline',
	          'CTRL+SHIFT+S': 'strikethrough',
	          'CTRL+BACKSLASH': 'removeFormat',
	          'CTRL+SHIFT+L': 'justifyLeft',
	          'CTRL+SHIFT+E': 'justifyCenter',
	          'CTRL+SHIFT+R': 'justifyRight',
	          'CTRL+SHIFT+J': 'justifyFull',
	          'CTRL+SHIFT+NUM7': 'insertUnorderedList',
	          'CTRL+SHIFT+NUM8': 'insertOrderedList',
	          'CTRL+LEFTBRACKET': 'outdent',
	          'CTRL+RIGHTBRACKET': 'indent',
	          'CTRL+NUM0': 'formatPara',
	          'CTRL+NUM1': 'formatH1',
	          'CTRL+NUM2': 'formatH2',
	          'CTRL+NUM3': 'formatH3',
	          'CTRL+NUM4': 'formatH4',
	          'CTRL+NUM5': 'formatH5',
	          'CTRL+NUM6': 'formatH6',
	          'CTRL+ENTER': 'insertHorizontalRule',
	          'CTRL+K': 'showLinkDialog'
	        },

	        mac: {
	          'ENTER': 'insertParagraph',
	          'CMD+Z': 'undo',
	          'CMD+SHIFT+Z': 'redo',
	          'TAB': 'tab',
	          'SHIFT+TAB': 'untab',
	          'CMD+B': 'bold',
	          'CMD+I': 'italic',
	          'CMD+U': 'underline',
	          'CMD+SHIFT+S': 'strikethrough',
	          'CMD+BACKSLASH': 'removeFormat',
	          'CMD+SHIFT+L': 'justifyLeft',
	          'CMD+SHIFT+E': 'justifyCenter',
	          'CMD+SHIFT+R': 'justifyRight',
	          'CMD+SHIFT+J': 'justifyFull',
	          'CMD+SHIFT+NUM7': 'insertUnorderedList',
	          'CMD+SHIFT+NUM8': 'insertOrderedList',
	          'CMD+LEFTBRACKET': 'outdent',
	          'CMD+RIGHTBRACKET': 'indent',
	          'CMD+NUM0': 'formatPara',
	          'CMD+NUM1': 'formatH1',
	          'CMD+NUM2': 'formatH2',
	          'CMD+NUM3': 'formatH3',
	          'CMD+NUM4': 'formatH4',
	          'CMD+NUM5': 'formatH5',
	          'CMD+NUM6': 'formatH6',
	          'CMD+ENTER': 'insertHorizontalRule',
	          'CMD+K': 'showLinkDialog'
	        }
	      }
	    },

	    // default language: en-US
	    lang: {
	      'en-US': {
	        font: {
	          bold: 'Bold',
	          italic: 'Italic',
	          underline: 'Underline',
	          clear: 'Remove Font Style',
	          height: 'Line Height',
	          name: 'Font Family',
	          strikethrough: 'Strikethrough',
	          subscript: 'Subscript',
	          superscript: 'Superscript',
	          size: 'Font Size'
	        },
	        image: {
	          image: 'Picture',
	          insert: 'Insert Image',
	          resizeFull: 'Resize Full',
	          resizeHalf: 'Resize Half',
	          resizeQuarter: 'Resize Quarter',
	          floatLeft: 'Float Left',
	          floatRight: 'Float Right',
	          floatNone: 'Float None',
	          shapeRounded: 'Shape: Rounded',
	          shapeCircle: 'Shape: Circle',
	          shapeThumbnail: 'Shape: Thumbnail',
	          shapeNone: 'Shape: None',
	          dragImageHere: 'Drag image or text here',
	          dropImage: 'Drop image or Text',
	          selectFromFiles: 'Select from files',
	          maximumFileSize: 'Maximum file size',
	          maximumFileSizeError: 'Maximum file size exceeded.',
	          url: 'Image URL',
	          remove: 'Remove Image'
	        },
	        link: {
	          link: 'Link',
	          insert: 'Insert Link',
	          unlink: 'Unlink',
	          edit: 'Edit',
	          textToDisplay: 'Text to display',
	          url: 'To what URL should this link go?',
	          openInNewWindow: 'Open in new window'
	        },
	        table: {
	          table: 'Table'
	        },
	        hr: {
	          insert: 'Insert Horizontal Rule'
	        },
	        style: {
	          style: 'Style',
	          normal: 'Normal',
	          blockquote: 'Quote',
	          pre: 'Code',
	          h1: 'Header 1',
	          h2: 'Header 2',
	          h3: 'Header 3',
	          h4: 'Header 4',
	          h5: 'Header 5',
	          h6: 'Header 6'
	        },
	        lists: {
	          unordered: 'Unordered list',
	          ordered: 'Ordered list'
	        },
	        options: {
	          help: 'Help',
	          fullscreen: 'Sidebar',
	          codeview: 'Code View'
	        },
	        paragraph: {
	          paragraph: 'Paragraph',
	          outdent: 'Outdent',
	          indent: 'Indent',
	          left: 'Align left',
	          center: 'Align center',
	          right: 'Align right',
	          justify: 'Justify full'
	        },
	        color: {
	          recent: 'Recent Color',
	          more: 'More Color',
	          background: 'Background Color',
	          foreground: 'Foreground Color',
	          transparent: 'Transparent',
	          setTransparent: 'Set transparent',
	          reset: 'Reset',
	          resetToDefault: 'Reset to default'
	        },
	        shortcut: {
	          shortcuts: 'Keyboard shortcuts',
	          close: 'Close',
	          textFormatting: 'Text formatting',
	          action: 'Action',
	          paragraphFormatting: 'Paragraph formatting',
	          documentStyle: 'Document Style',
	          extraKeys: 'Extra keys'
	        },
	        history: {
	          undo: 'Undo',
	          redo: 'Redo'
	        }
	      }
	    }
	  };

	  /**
	   * @class core.async
	   *
	   * Async functions which returns `Promise`
	   *
	   * @singleton
	   * @alternateClassName async
	   */
	  var async = (function () {
	    /**
	     * @method readFileAsDataURL
	     *
	     * read contents of file as representing URL
	     *
	     * @param {File} file
	     * @return {Promise} - then: sDataUrl
	     */
	    var readFileAsDataURL = function (file) {
	      return $.Deferred(function (deferred) {
	        $.extend(new FileReader(), {
	          onload: function (e) {
	            var sDataURL = e.target.result;
	            deferred.resolve(sDataURL);
	          },
	          onerror: function () {
	            deferred.reject(this);
	          }
	        }).readAsDataURL(file);
	      }).promise();
	    };
	  
	    /**
	     * @method createImage
	     *
	     * create `<image>` from url string
	     *
	     * @param {String} sUrl
	     * @param {String} filename
	     * @return {Promise} - then: $image
	     */
	    var createImage = function (sUrl, filename) {
	      return $.Deferred(function (deferred) {
	        var $img = $('<img>');

	        $img.one('load', function () {
	          $img.off('error abort');
	          deferred.resolve($img);
	        }).one('error abort', function () {
	          $img.off('load').detach();
	          deferred.reject($img);
	        }).css({
	          display: 'none'
	        }).appendTo(document.body).attr({
	          'src': sUrl,
	          'data-filename': filename
	        });
	      }).promise();
	    };

	    return {
	      readFileAsDataURL: readFileAsDataURL,
	      createImage: createImage
	    };
	  })();

	  /**
	   * @class core.key
	   *
	   * Object for keycodes.
	   *
	   * @singleton
	   * @alternateClassName key
	   */
	  var key = (function () {
	    var keyMap = {
	      'BACKSPACE': 8,
	      'TAB': 9,
	      'ENTER': 13,
	      'SPACE': 32,

	      // Number: 0-9
	      'NUM0': 48,
	      'NUM1': 49,
	      'NUM2': 50,
	      'NUM3': 51,
	      'NUM4': 52,
	      'NUM5': 53,
	      'NUM6': 54,
	      'NUM7': 55,
	      'NUM8': 56,

	      // Alphabet: a-z
	      'B': 66,
	      'E': 69,
	      'I': 73,
	      'J': 74,
	      'K': 75,
	      'L': 76,
	      'R': 82,
	      'S': 83,
	      'U': 85,
	      'Y': 89,
	      'Z': 90,

	      'SLASH': 191,
	      'LEFTBRACKET': 219,
	      'BACKSLASH': 220,
	      'RIGHTBRACKET': 221
	    };

	    return {
	      /**
	       * @method isEdit
	       *
	       * @param {Number} keyCode
	       * @return {Boolean}
	       */
	      isEdit: function (keyCode) {
	        return list.contains([8, 9, 13, 32], keyCode);
	      },
	      /**
	       * @method isMove
	       *
	       * @param {Number} keyCode
	       * @return {Boolean}
	       */
	      isMove: function (keyCode) {
	        return list.contains([37, 38, 39, 40], keyCode);
	      },
	      /**
	       * @property {Object} nameFromCode
	       * @property {String} nameFromCode.8 "BACKSPACE"
	       */
	      nameFromCode: func.invertObject(keyMap),
	      code: keyMap
	    };
	  })();

	  /**
	   * @class editing.History
	   *
	   * Editor History
	   *
	   */
	  var History = function ($editable) {
	    var stack = [], stackOffset = -1;
	    var editable = $editable[0];

	    var makeSnapshot = function () {
	      var rng = range.create();
	      var emptyBookmark = {s: {path: [], offset: 0}, e: {path: [], offset: 0}};

	      return {
	        contents: $editable.html(),
	        bookmark: (rng ? rng.bookmark(editable) : emptyBookmark)
	      };
	    };

	    var applySnapshot = function (snapshot) {
	      if (snapshot.contents !== null) {
	        $editable.html(snapshot.contents);
	      }
	      if (snapshot.bookmark !== null) {
	        range.createFromBookmark(editable, snapshot.bookmark).select();
	      }
	    };

	    /**
	     * undo
	     */
	    this.undo = function () {
	      if (0 < stackOffset) {
	        stackOffset--;
	        applySnapshot(stack[stackOffset]);
	      }
	    };

	    /**
	     * redo
	     */
	    this.redo = function () {
	      if (stack.length - 1 > stackOffset) {
	        stackOffset++;
	        applySnapshot(stack[stackOffset]);
	      }
	    };

	    /**
	     * recorded undo
	     */
	    this.recordUndo = function () {
	      stackOffset++;

	      // Wash out stack after stackOffset
	      if (stack.length > stackOffset) {
	        stack = stack.slice(0, stackOffset);
	      }

	      // Create new snapshot and push it to the end
	      stack.push(makeSnapshot());
	    };

	    // Create first undo stack
	    this.recordUndo();
	  };

	  /**
	   * @class editing.Style
	   *
	   * Style
	   *
	   */
	  var Style = function () {
	    /**
	     * @method jQueryCSS
	     *
	     * [workaround] for old jQuery
	     * passing an array of style properties to .css()
	     * will result in an object of property-value pairs.
	     * (compability with version < 1.9)
	     *
	     * @private
	     * @param  {jQuery} $obj
	     * @param  {Array} propertyNames - An array of one or more CSS properties.
	     * @return {Object}
	     */
	    var jQueryCSS = function ($obj, propertyNames) {
	      if (agent.jqueryVersion < 1.9) {
	        var result = {};
	        $.each(propertyNames, function (idx, propertyName) {
	          result[propertyName] = $obj.css(propertyName);
	        });
	        return result;
	      }
	      return $obj.css.call($obj, propertyNames);
	    };

	    /**
	     * paragraph level style
	     *
	     * @param {WrappedRange} rng
	     * @param {Object} styleInfo
	     */
	    this.stylePara = function (rng, styleInfo) {
	      $.each(rng.nodes(dom.isPara, {
	        includeAncestor: true
	      }), function (idx, para) {
	        $(para).css(styleInfo);
	      });
	    };

	    /**
	     * insert and returns styleNodes on range.
	     *
	     * @param {WrappedRange} rng
	     * @param {Object} [options] - options for styleNodes
	     * @param {String} [options.nodeName] - default: `SPAN`
	     * @param {Boolean} [options.expandClosestSibling] - default: `false`
	     * @param {Boolean} [options.onlyPartialContains] - default: `false`
	     * @return {Node[]}
	     */
	    this.styleNodes = function (rng, options) {
	      rng = rng.splitText();

	      var nodeName = options && options.nodeName || 'SPAN';
	      var expandClosestSibling = !!(options && options.expandClosestSibling);
	      var onlyPartialContains = !!(options && options.onlyPartialContains);

	      if (rng.isCollapsed()) {
	        return [rng.insertNode(dom.create(nodeName))];
	      }

	      var pred = dom.makePredByNodeName(nodeName);
	      var nodes = $.map(rng.nodes(dom.isText, {
	        fullyContains: true
	      }), function (text) {
	        return dom.singleChildAncestor(text, pred) || dom.wrap(text, nodeName);
	      });

	      if (expandClosestSibling) {
	        if (onlyPartialContains) {
	          var nodesInRange = rng.nodes();
	          // compose with partial contains predication
	          pred = func.and(pred, function (node) {
	            return list.contains(nodesInRange, node);
	          });
	        }

	        return $.map(nodes, function (node) {
	          var siblings = dom.withClosestSiblings(node, pred);
	          var head = list.head(siblings);
	          var tails = list.tail(siblings);
	          $.each(tails, function (idx, elem) {
	            dom.appendChildNodes(head, elem.childNodes);
	            dom.remove(elem);
	          });
	          return list.head(siblings);
	        });
	      } else {
	        return nodes;
	      }
	    };

	    /**
	     * get current style on cursor
	     *
	     * @param {WrappedRange} rng
	     * @param {Node} target - target element on event
	     * @return {Object} - object contains style properties.
	     */
	    this.current = function (rng, target) {
	      var $cont = $(dom.isText(rng.sc) ? rng.sc.parentNode : rng.sc);
	      var properties = ['font-family', 'font-size', 'text-align', 'list-style-type', 'line-height'];
	      var styleInfo = jQueryCSS($cont, properties) || {};

	      styleInfo['font-size'] = parseInt(styleInfo['font-size'], 10);

	      // document.queryCommandState for toggle state
	      styleInfo['font-bold'] = document.queryCommandState('bold') ? 'bold' : 'normal';
	      styleInfo['font-italic'] = document.queryCommandState('italic') ? 'italic' : 'normal';
	      styleInfo['font-underline'] = document.queryCommandState('underline') ? 'underline' : 'normal';
	      styleInfo['font-strikethrough'] = document.queryCommandState('strikeThrough') ? 'strikethrough' : 'normal';
	      styleInfo['font-superscript'] = document.queryCommandState('superscript') ? 'superscript' : 'normal';
	      styleInfo['font-subscript'] = document.queryCommandState('subscript') ? 'subscript' : 'normal';

	      // list-style-type to list-style(unordered, ordered)
	      if (!rng.isOnList()) {
	        styleInfo['list-style'] = 'none';
	      } else {
	        var aOrderedType = ['circle', 'disc', 'disc-leading-zero', 'square'];
	        var isUnordered = $.inArray(styleInfo['list-style-type'], aOrderedType) > -1;
	        styleInfo['list-style'] = isUnordered ? 'unordered' : 'ordered';
	      }

	      var para = dom.ancestor(rng.sc, dom.isPara);
	      if (para && para.style['line-height']) {
	        styleInfo['line-height'] = para.style.lineHeight;
	      } else {
	        var lineHeight = parseInt(styleInfo['line-height'], 10) / parseInt(styleInfo['font-size'], 10);
	        styleInfo['line-height'] = lineHeight.toFixed(1);
	      }

	      styleInfo.image = dom.isImg(target) && target;
	      styleInfo.anchor = rng.isOnAnchor() && dom.ancestor(rng.sc, dom.isAnchor);
	      styleInfo.ancestors = dom.listAncestor(rng.sc, dom.isEditable);
	      styleInfo.range = rng;

	      return styleInfo;
	    };
	  };


	  /**
	   * @class editing.Bullet
	   *
	   * @alternateClassName Bullet
	   */
	  var Bullet = function () {
	    /**
	     * @method insertOrderedList
	     *
	     * toggle ordered list
	     *
	     * @type command
	     */
	    this.insertOrderedList = function () {
	      this.toggleList('OL');
	    };

	    /**
	     * @method insertUnorderedList
	     *
	     * toggle unordered list
	     *
	     * @type command
	     */
	    this.insertUnorderedList = function () {
	      this.toggleList('UL');
	    };

	    /**
	     * @method indent
	     *
	     * indent
	     *
	     * @type command
	     */
	    this.indent = function () {
	      var self = this;
	      var rng = range.create().wrapBodyInlineWithPara();

	      var paras = rng.nodes(dom.isPara, { includeAncestor: true });
	      var clustereds = list.clusterBy(paras, func.peq2('parentNode'));

	      $.each(clustereds, function (idx, paras) {
	        var head = list.head(paras);
	        if (dom.isLi(head)) {
	          self.wrapList(paras, head.parentNode.nodeName);
	        } else {
	          $.each(paras, function (idx, para) {
	            $(para).css('marginLeft', function (idx, val) {
	              return (parseInt(val, 10) || 0) + 25;
	            });
	          });
	        }
	      });

	      rng.select();
	    };

	    /**
	     * @method outdent
	     *
	     * outdent
	     *
	     * @type command
	     */
	    this.outdent = function () {
	      var self = this;
	      var rng = range.create().wrapBodyInlineWithPara();

	      var paras = rng.nodes(dom.isPara, { includeAncestor: true });
	      var clustereds = list.clusterBy(paras, func.peq2('parentNode'));

	      $.each(clustereds, function (idx, paras) {
	        var head = list.head(paras);
	        if (dom.isLi(head)) {
	          self.releaseList([paras]);
	        } else {
	          $.each(paras, function (idx, para) {
	            $(para).css('marginLeft', function (idx, val) {
	              val = (parseInt(val, 10) || 0);
	              return val > 25 ? val - 25 : '';
	            });
	          });
	        }
	      });

	      rng.select();
	    };

	    /**
	     * @method toggleList
	     *
	     * toggle list
	     *
	     * @param {String} listName - OL or UL
	     */
	    this.toggleList = function (listName) {
	      var self = this;
	      var rng = range.create().wrapBodyInlineWithPara();

	      var paras = rng.nodes(dom.isPara, { includeAncestor: true });
	      var bookmark = rng.paraBookmark(paras);
	      var clustereds = list.clusterBy(paras, func.peq2('parentNode'));

	      // paragraph to list
	      if (list.find(paras, dom.isPurePara)) {
	        var wrappedParas = [];
	        $.each(clustereds, function (idx, paras) {
	          wrappedParas = wrappedParas.concat(self.wrapList(paras, listName));
	        });
	        paras = wrappedParas;
	      // list to paragraph or change list style
	      } else {
	        var diffLists = rng.nodes(dom.isList, {
	          includeAncestor: true
	        }).filter(function (listNode) {
	          return !$.nodeName(listNode, listName);
	        });

	        if (diffLists.length) {
	          $.each(diffLists, function (idx, listNode) {
	            dom.replace(listNode, listName);
	          });
	        } else {
	          paras = this.releaseList(clustereds, true);
	        }
	      }

	      range.createFromParaBookmark(bookmark, paras).select();
	    };

	    /**
	     * @method wrapList
	     *
	     * @param {Node[]} paras
	     * @param {String} listName
	     * @return {Node[]}
	     */
	    this.wrapList = function (paras, listName) {
	      var head = list.head(paras);
	      var last = list.last(paras);

	      var prevList = dom.isList(head.previousSibling) && head.previousSibling;
	      var nextList = dom.isList(last.nextSibling) && last.nextSibling;

	      var listNode = prevList || dom.insertAfter(dom.create(listName || 'UL'), last);

	      // P to LI
	      paras = $.map(paras, function (para) {
	        return dom.isPurePara(para) ? dom.replace(para, 'LI') : para;
	      });

	      // append to list(<ul>, <ol>)
	      dom.appendChildNodes(listNode, paras);

	      if (nextList) {
	        dom.appendChildNodes(listNode, list.from(nextList.childNodes));
	        dom.remove(nextList);
	      }

	      return paras;
	    };

	    /**
	     * @method releaseList
	     *
	     * @param {Array[]} clustereds
	     * @param {Boolean} isEscapseToBody
	     * @return {Node[]}
	     */
	    this.releaseList = function (clustereds, isEscapseToBody) {
	      var releasedParas = [];

	      $.each(clustereds, function (idx, paras) {
	        var head = list.head(paras);
	        var last = list.last(paras);

	        var headList = isEscapseToBody ? dom.lastAncestor(head, dom.isList) :
	                                         head.parentNode;
	        var lastList = headList.childNodes.length > 1 ? dom.splitTree(headList, {
	          node: last.parentNode,
	          offset: dom.position(last) + 1
	        }, {
	          isSkipPaddingBlankHTML: true
	        }) : null;

	        var middleList = dom.splitTree(headList, {
	          node: head.parentNode,
	          offset: dom.position(head)
	        }, {
	          isSkipPaddingBlankHTML: true
	        });

	        paras = isEscapseToBody ? dom.listDescendant(middleList, dom.isLi) :
	                                  list.from(middleList.childNodes).filter(dom.isLi);

	        // LI to P
	        if (isEscapseToBody || !dom.isList(headList.parentNode)) {
	          paras = $.map(paras, function (para) {
	            return dom.replace(para, 'P');
	          });
	        }

	        $.each(list.from(paras).reverse(), function (idx, para) {
	          dom.insertAfter(para, headList);
	        });

	        // remove empty lists
	        var rootLists = list.compact([headList, middleList, lastList]);
	        $.each(rootLists, function (idx, rootList) {
	          var listNodes = [rootList].concat(dom.listDescendant(rootList, dom.isList));
	          $.each(listNodes.reverse(), function (idx, listNode) {
	            if (!dom.nodeLength(listNode)) {
	              dom.remove(listNode, true);
	            }
	          });
	        });

	        releasedParas = releasedParas.concat(paras);
	      });

	      return releasedParas;
	    };
	  };


	  /**
	   * @class editing.Typing
	   *
	   * Typing
	   *
	   */
	  var Typing = function () {

	    // a Bullet instance to toggle lists off
	    var bullet = new Bullet();

	    /**
	     * insert tab
	     *
	     * @param {jQuery} $editable
	     * @param {WrappedRange} rng
	     * @param {Number} tabsize
	     */
	    this.insertTab = function ($editable, rng, tabsize) {
	      var tab = dom.createText(new Array(tabsize + 1).join(dom.NBSP_CHAR));
	      rng = rng.deleteContents();
	      rng.insertNode(tab, true);

	      rng = range.create(tab, tabsize);
	      rng.select();
	    };

	    /**
	     * insert paragraph
	     */
	    this.insertParagraph = function () {
	      var rng = range.create();

	      // deleteContents on range.
	      rng = rng.deleteContents();

	      // Wrap range if it needs to be wrapped by paragraph
	      rng = rng.wrapBodyInlineWithPara();

	      // finding paragraph
	      var splitRoot = dom.ancestor(rng.sc, dom.isPara);

	      var nextPara;
	      // on paragraph: split paragraph
	      if (splitRoot) {
	        // if it is an empty line with li
	        if (dom.isEmpty(splitRoot) && dom.isLi(splitRoot)) {
	          // disable UL/OL and escape!
	          bullet.toggleList(splitRoot.parentNode.nodeName);
	          return;
	        // if new line has content (not a line break)
	        } else {
	          nextPara = dom.splitTree(splitRoot, rng.getStartPoint());

	          var emptyAnchors = dom.listDescendant(splitRoot, dom.isEmptyAnchor);
	          emptyAnchors = emptyAnchors.concat(dom.listDescendant(nextPara, dom.isEmptyAnchor));

	          $.each(emptyAnchors, function (idx, anchor) {
	            dom.remove(anchor);
	          });
	        }
	      // no paragraph: insert empty paragraph
	      } else {
	        var next = rng.sc.childNodes[rng.so];
	        nextPara = $(dom.emptyPara)[0];
	        if (next) {
	          rng.sc.insertBefore(nextPara, next);
	        } else {
	          rng.sc.appendChild(nextPara);
	        }
	      }

	      range.create(nextPara, 0).normalize().select();

	    };

	  };

	  /**
	   * @class editing.Table
	   *
	   * Table
	   *
	   */
	  var Table = function () {
	    /**
	     * handle tab key
	     *
	     * @param {WrappedRange} rng
	     * @param {Boolean} isShift
	     */
	    this.tab = function (rng, isShift) {
	      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
	      var table = dom.ancestor(cell, dom.isTable);
	      var cells = dom.listDescendant(table, dom.isCell);

	      var nextCell = list[isShift ? 'prev' : 'next'](cells, cell);
	      if (nextCell) {
	        range.create(nextCell, 0).select();
	      }
	    };

	    /**
	     * create empty table element
	     *
	     * @param {Number} rowCount
	     * @param {Number} colCount
	     * @return {Node}
	     */
	    this.createTable = function (colCount, rowCount) {
	      var tds = [], tdHTML;
	      for (var idxCol = 0; idxCol < colCount; idxCol++) {
	        tds.push('<td>' + dom.blank + '</td>');
	      }
	      tdHTML = tds.join('');

	      var trs = [], trHTML;
	      for (var idxRow = 0; idxRow < rowCount; idxRow++) {
	        trs.push('<tr>' + tdHTML + '</tr>');
	      }
	      trHTML = trs.join('');
	      return $('<table class="table table-bordered">' + trHTML + '</table>')[0];
	    };
	  };


	  var KEY_BOGUS = 'bogus';

	  /**
	   * @class editing.Editor
	   *
	   * Editor
	   *
	   */
	  var Editor = function (handler) {

	    var style = new Style();
	    var table = new Table();
	    var typing = new Typing();
	    var bullet = new Bullet();

	    /**
	     * @method createRange
	     *
	     * create range
	     *
	     * @param {jQuery} $editable
	     * @return {WrappedRange}
	     */
	    this.createRange = function ($editable) {
	      this.focus($editable);
	      return range.create();
	    };

	    /**
	     * @method saveRange
	     *
	     * save current range
	     *
	     * @param {jQuery} $editable
	     * @param {Boolean} [thenCollapse=false]
	     */
	    this.saveRange = function ($editable, thenCollapse) {
	      this.focus($editable);
	      $editable.data('range', range.create());
	      if (thenCollapse) {
	        range.create().collapse().select();
	      }
	    };

	    /**
	     * @method saveRange
	     *
	     * save current node list to $editable.data('childNodes')
	     *
	     * @param {jQuery} $editable
	     */
	    this.saveNode = function ($editable) {
	      // copy child node reference
	      var copy = [];
	      for (var key  = 0, len = $editable[0].childNodes.length; key < len; key++) {
	        copy.push($editable[0].childNodes[key]);
	      }
	      $editable.data('childNodes', copy);
	    };

	    /**
	     * @method restoreRange
	     *
	     * restore lately range
	     *
	     * @param {jQuery} $editable
	     */
	    this.restoreRange = function ($editable) {
	      var rng = $editable.data('range');
	      if (rng) {
	        rng.select();
	        this.focus($editable);
	      }
	    };

	    /**
	     * @method restoreNode
	     *
	     * restore lately node list
	     *
	     * @param {jQuery} $editable
	     */
	    this.restoreNode = function ($editable) {
	      $editable.html('');
	      var child = $editable.data('childNodes');
	      for (var index = 0, len = child.length; index < len; index++) {
	        $editable[0].appendChild(child[index]);
	      }
	    };
	    /**
	     * @method currentStyle
	     *
	     * current style
	     *
	     * @param {Node} target
	     * @return {Boolean} false if range is no
	     */
	    this.currentStyle = function (target) {
	      var rng = range.create();
	      return rng ? rng.isOnEditable() && style.current(rng, target) : false;
	    };

	    var triggerOnBeforeChange = function ($editable) {
	      var $holder = dom.makeLayoutInfo($editable).holder();
	      handler.bindCustomEvent(
	        $holder, $editable.data('callbacks'), 'before.command'
	      )($editable.html(), $editable);
	    };

	    var triggerOnChange = function ($editable) {
	      var $holder = dom.makeLayoutInfo($editable).holder();
	      handler.bindCustomEvent(
	        $holder, $editable.data('callbacks'), 'change'
	      )($editable.html(), $editable);
	    };

	    /**
	     * @method undo
	     * undo
	     * @param {jQuery} $editable
	     */
	    this.undo = function ($editable) {
	      triggerOnBeforeChange($editable);
	      $editable.data('NoteHistory').undo();
	      triggerOnChange($editable);
	    };

	    /**
	     * @method redo
	     * redo
	     * @param {jQuery} $editable
	     */
	    this.redo = function ($editable) {
	      triggerOnBeforeChange($editable);
	      $editable.data('NoteHistory').redo();
	      triggerOnChange($editable);
	    };

	    var self = this;
	    /**
	     * @method beforeCommand
	     * before command
	     * @param {jQuery} $editable
	     */
	    var beforeCommand = this.beforeCommand = function ($editable) {
	      triggerOnBeforeChange($editable);
	      // keep focus on editable before command execution
	      self.focus($editable);
	    };

	    /**
	     * @method afterCommand
	     * after command
	     * @param {jQuery} $editable
	     * @param {Boolean} isPreventTrigger
	     */
	    var afterCommand = this.afterCommand = function ($editable, isPreventTrigger) {
	      $editable.data('NoteHistory').recordUndo();
	      if (!isPreventTrigger) {
	        triggerOnChange($editable);
	      }
	    };

	    /**
	     * @method bold
	     * @param {jQuery} $editable
	     * @param {Mixed} value
	     */

	    /**
	     * @method italic
	     * @param {jQuery} $editable
	     * @param {Mixed} value
	     */

	    /**
	     * @method underline
	     * @param {jQuery} $editable
	     * @param {Mixed} value
	     */

	    /**
	     * @method strikethrough
	     * @param {jQuery} $editable
	     * @param {Mixed} value
	     */

	    /**
	     * @method formatBlock
	     * @param {jQuery} $editable
	     * @param {Mixed} value
	     */

	    /**
	     * @method superscript
	     * @param {jQuery} $editable
	     * @param {Mixed} value
	     */

	    /**
	     * @method subscript
	     * @param {jQuery} $editable
	     * @param {Mixed} value
	     */

	    /**
	     * @method justifyLeft
	     * @param {jQuery} $editable
	     * @param {Mixed} value
	     */

	    /**
	     * @method justifyCenter
	     * @param {jQuery} $editable
	     * @param {Mixed} value
	     */

	    /**
	     * @method justifyRight
	     * @param {jQuery} $editable
	     * @param {Mixed} value
	     */

	    /**
	     * @method justifyFull
	     * @param {jQuery} $editable
	     * @param {Mixed} value
	     */

	    /**
	     * @method formatBlock
	     * @param {jQuery} $editable
	     * @param {Mixed} value
	     */

	    /**
	     * @method removeFormat
	     * @param {jQuery} $editable
	     * @param {Mixed} value
	     */

	    /**
	     * @method backColor
	     * @param {jQuery} $editable
	     * @param {Mixed} value
	     */

	    /**
	     * @method foreColor
	     * @param {jQuery} $editable
	     * @param {Mixed} value
	     */

	    /**
	     * @method insertHorizontalRule
	     * @param {jQuery} $editable
	     * @param {Mixed} value
	     */

	    /**
	     * @method fontName
	     *
	     * change font name
	     *
	     * @param {jQuery} $editable
	     * @param {Mixed} value
	     */

	    /* jshint ignore:start */
	    // native commands(with execCommand), generate function for execCommand
	    var commands = ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript',
	                    'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull',
	                    'formatBlock', 'removeFormat',
	                    'backColor', 'foreColor', 'insertHorizontalRule', 'fontName'];

	    for (var idx = 0, len = commands.length; idx < len; idx ++) {
	      this[commands[idx]] = (function (sCmd) {
	        return function ($editable, value) {
	          beforeCommand($editable);

	          document.execCommand(sCmd, false, value);

	          afterCommand($editable, true);
	        };
	      })(commands[idx]);
	    }
	    /* jshint ignore:end */

	    /**
	     * @method tab
	     *
	     * handle tab key
	     *
	     * @param {jQuery} $editable
	     * @param {Object} options
	     */
	    this.tab = function ($editable, options) {
	      var rng = this.createRange($editable);
	      if (rng.isCollapsed() && rng.isOnCell()) {
	        table.tab(rng);
	      } else {
	        beforeCommand($editable);
	        typing.insertTab($editable, rng, options.tabsize);
	        afterCommand($editable);
	      }
	    };

	    /**
	     * @method untab
	     *
	     * handle shift+tab key
	     *
	     */
	    this.untab = function ($editable) {
	      var rng = this.createRange($editable);
	      if (rng.isCollapsed() && rng.isOnCell()) {
	        table.tab(rng, true);
	      }
	    };

	    /**
	     * @method insertParagraph
	     *
	     * insert paragraph
	     *
	     * @param {Node} $editable
	     */
	    this.insertParagraph = function ($editable) {
	      beforeCommand($editable);
	      typing.insertParagraph($editable);
	      afterCommand($editable);
	    };

	    /**
	     * @method insertOrderedList
	     *
	     * @param {jQuery} $editable
	     */
	    this.insertOrderedList = function ($editable) {
	      beforeCommand($editable);
	      bullet.insertOrderedList($editable);
	      afterCommand($editable);
	    };

	    /**
	     * @param {jQuery} $editable
	     */
	    this.insertUnorderedList = function ($editable) {
	      beforeCommand($editable);
	      bullet.insertUnorderedList($editable);
	      afterCommand($editable);
	    };

	    /**
	     * @param {jQuery} $editable
	     */
	    this.indent = function ($editable) {
	      beforeCommand($editable);
	      bullet.indent($editable);
	      afterCommand($editable);
	    };

	    /**
	     * @param {jQuery} $editable
	     */
	    this.outdent = function ($editable) {
	      beforeCommand($editable);
	      bullet.outdent($editable);
	      afterCommand($editable);
	    };

	    /**
	     * insert image
	     *
	     * @param {jQuery} $editable
	     * @param {String} sUrl
	     */
	    this.insertImage = function ($editable, sUrl, filename) {
	      async.createImage(sUrl, filename).then(function ($image) {
	        beforeCommand($editable);
	        $image.css({
	          display: '',
	          width: Math.min($editable.width(), $image.width())
	        });
	        range.create().insertNode($image[0]);
	        range.createFromNodeAfter($image[0]).select();
	        afterCommand($editable);
	      }).fail(function () {
	        var $holder = dom.makeLayoutInfo($editable).holder();
	        handler.bindCustomEvent(
	          $holder, $editable.data('callbacks'), 'image.upload.error'
	        )();
	      });
	    };

	    /**
	     * @method insertNode
	     * insert node
	     * @param {Node} $editable
	     * @param {Node} node
	     */
	    this.insertNode = function ($editable, node) {
	      beforeCommand($editable);
	      range.create().insertNode(node);
	      range.createFromNodeAfter(node).select();
	      afterCommand($editable);
	    };

	    /**
	     * insert text
	     * @param {Node} $editable
	     * @param {String} text
	     */
	    this.insertText = function ($editable, text) {
	      beforeCommand($editable);
	      var textNode = range.create().insertNode(dom.createText(text));
	      range.create(textNode, dom.nodeLength(textNode)).select();
	      afterCommand($editable);
	    };

	    /**
	     * paste HTML
	     * @param {Node} $editable
	     * @param {String} markup
	     */
	    this.pasteHTML = function ($editable, markup) {
	      beforeCommand($editable);
	      var contents = range.create().pasteHTML(markup);
	      range.createFromNodeAfter(list.last(contents)).select();
	      afterCommand($editable);
	    };

	    /**
	     * formatBlock
	     *
	     * @param {jQuery} $editable
	     * @param {String} tagName
	     */
	    this.formatBlock = function ($editable, tagName) {
	      beforeCommand($editable);
	      // [workaround] for MSIE, IE need `<`
	      tagName = agent.isMSIE ? '<' + tagName + '>' : tagName;
	      document.execCommand('FormatBlock', false, tagName);
	      afterCommand($editable);
	    };

	    this.formatPara = function ($editable) {
	      beforeCommand($editable);
	      this.formatBlock($editable, 'P');
	      afterCommand($editable);
	    };

	    /* jshint ignore:start */
	    for (var idx = 1; idx <= 6; idx ++) {
	      this['formatH' + idx] = function (idx) {
	        return function ($editable) {
	          this.formatBlock($editable, 'H' + idx);
	        };
	      }(idx);
	    };
	    /* jshint ignore:end */

	    /**
	     * fontSize
	     *
	     * @param {jQuery} $editable
	     * @param {String} value - px
	     */
	    this.fontSize = function ($editable, value) {
	      var rng = range.create();
	      var isCollapsed = rng.isCollapsed();

	      if (isCollapsed) {
	        var spans = style.styleNodes(rng);
	        var firstSpan = list.head(spans);

	        $(spans).css({
	          'font-size': value + 'px'
	        });

	        // [workaround] added styled bogus span for style
	        //  - also bogus character needed for cursor position
	        if (firstSpan && !dom.nodeLength(firstSpan)) {
	          firstSpan.innerHTML = dom.ZERO_WIDTH_NBSP_CHAR;
	          range.createFromNodeAfter(firstSpan.firstChild).select();
	          $editable.data(KEY_BOGUS, firstSpan);
	        }
	      } else {
	        beforeCommand($editable);
	        $(style.styleNodes(rng)).css({
	          'font-size': value + 'px'
	        });
	        afterCommand($editable);
	      }
	    };

	    /**
	     * remove bogus node and character
	     */
	    this.removeBogus = function ($editable) {
	      var bogusNode = $editable.data(KEY_BOGUS);
	      if (!bogusNode) {
	        return;
	      }

	      var textNode = list.find(list.from(bogusNode.childNodes), dom.isText);

	      var bogusCharIdx = textNode.nodeValue.indexOf(dom.ZERO_WIDTH_NBSP_CHAR);
	      if (bogusCharIdx !== -1) {
	        textNode.deleteData(bogusCharIdx, 1);
	      }

	      if (dom.isEmpty(bogusNode)) {
	        dom.remove(bogusNode);
	      }

	      $editable.removeData(KEY_BOGUS);
	    };

	    /**
	     * lineHeight
	     * @param {jQuery} $editable
	     * @param {String} value
	     */
	    this.lineHeight = function ($editable, value) {
	      beforeCommand($editable);
	      style.stylePara(range.create(), {
	        lineHeight: value
	      });
	      afterCommand($editable);
	    };

	    /**
	     * unlink
	     *
	     * @type command
	     *
	     * @param {jQuery} $editable
	     */
	    this.unlink = function ($editable) {
	      var rng = this.createRange();
	      if (rng.isOnAnchor()) {
	        var anchor = dom.ancestor(rng.sc, dom.isAnchor);
	        rng = range.createFromNode(anchor);
	        rng.select();

	        beforeCommand($editable);
	        document.execCommand('unlink');
	        afterCommand($editable);
	      }
	    };

	    /**
	     * create link (command)
	     *
	     * @param {jQuery} $editable
	     * @param {Object} linkInfo
	     * @param {Object} options
	     */
	    this.createLink = function ($editable, linkInfo, options) {
	      var linkUrl = linkInfo.url;
	      var linkText = linkInfo.text;
	      var isNewWindow = linkInfo.newWindow;
	      var rng = linkInfo.range;
	      var isTextChanged = rng.toString() !== linkText;

	      beforeCommand($editable);

	      if (options.onCreateLink) {
	        linkUrl = options.onCreateLink(linkUrl);
	      }

	      var anchors = [];
	      if (isTextChanged) {
	        // Create a new link when text changed.
	        var anchor = rng.insertNode($('<A>' + linkText + '</A>')[0]);
	        anchors.push(anchor);
	      } else {
	        anchors = style.styleNodes(rng, {
	          nodeName: 'A',
	          expandClosestSibling: true,
	          onlyPartialContains: true
	        });
	      }

	      $.each(anchors, function (idx, anchor) {
	        $(anchor).attr('href', linkUrl);
	        if (isNewWindow) {
	          $(anchor).attr('target', '_blank');
	        } else {
	          $(anchor).removeAttr('target');
	        }
	      });

	      var startRange = range.createFromNodeBefore(list.head(anchors));
	      var startPoint = startRange.getStartPoint();
	      var endRange = range.createFromNodeAfter(list.last(anchors));
	      var endPoint = endRange.getEndPoint();

	      range.create(
	        startPoint.node,
	        startPoint.offset,
	        endPoint.node,
	        endPoint.offset
	      ).select();

	      afterCommand($editable);
	    };

	    /**
	     * returns link info
	     *
	     * @return {Object}
	     * @return {WrappedRange} return.range
	     * @return {String} return.text
	     * @return {Boolean} [return.isNewWindow=true]
	     * @return {String} [return.url=""]
	     */
	    this.getLinkInfo = function ($editable) {
	      this.focus($editable);

	      var rng = range.create().expand(dom.isAnchor);

	      // Get the first anchor on range(for edit).
	      var $anchor = $(list.head(rng.nodes(dom.isAnchor)));

	      return {
	        range: rng,
	        text: rng.toString(),
	        isNewWindow: $anchor.length ? $anchor.attr('target') === '_blank' : false,
	        url: $anchor.length ? $anchor.attr('href') : ''
	      };
	    };

	    /**
	     * setting color
	     *
	     * @param {Node} $editable
	     * @param {Object} sObjColor  color code
	     * @param {String} sObjColor.foreColor foreground color
	     * @param {String} sObjColor.backColor background color
	     */
	    this.color = function ($editable, sObjColor) {
	      var oColor = JSON.parse(sObjColor);
	      var foreColor = oColor.foreColor, backColor = oColor.backColor;

	      beforeCommand($editable);

	      if (foreColor) { document.execCommand('foreColor', false, foreColor); }
	      if (backColor) { document.execCommand('backColor', false, backColor); }

	      afterCommand($editable);
	    };

	    /**
	     * insert Table
	     *
	     * @param {Node} $editable
	     * @param {String} sDim dimension of table (ex : "5x5")
	     */
	    this.insertTable = function ($editable, sDim) {
	      var dimension = sDim.split('x');
	      beforeCommand($editable);

	      var rng = range.create().deleteContents();
	      rng.insertNode(table.createTable(dimension[0], dimension[1]));
	      afterCommand($editable);
	    };

	    /**
	     * float me
	     *
	     * @param {jQuery} $editable
	     * @param {String} value
	     * @param {jQuery} $target
	     */
	    this.floatMe = function ($editable, value, $target) {
	      beforeCommand($editable);
	      $target.css('float', value);
	      afterCommand($editable);
	    };

	    /**
	     * change image shape
	     *
	     * @param {jQuery} $editable
	     * @param {String} value css class
	     * @param {Node} $target
	     */
	    this.imageShape = function ($editable, value, $target) {
	      beforeCommand($editable);

	      $target.removeClass('img-rounded img-circle img-thumbnail');

	      if (value) {
	        $target.addClass(value);
	      }

	      afterCommand($editable);
	    };

	    /**
	     * resize overlay element
	     * @param {jQuery} $editable
	     * @param {String} value
	     * @param {jQuery} $target - target element
	     */
	    this.resize = function ($editable, value, $target) {
	      beforeCommand($editable);

	      $target.css({
	        width: value * 100 + '%',
	        height: ''
	      });

	      afterCommand($editable);
	    };

	    /**
	     * @param {Position} pos
	     * @param {jQuery} $target - target element
	     * @param {Boolean} [bKeepRatio] - keep ratio
	     */
	    this.resizeTo = function (pos, $target, bKeepRatio) {
	      var imageSize;
	      if (bKeepRatio) {
	        var newRatio = pos.y / pos.x;
	        var ratio = $target.data('ratio');
	        imageSize = {
	          width: ratio > newRatio ? pos.x : pos.y / ratio,
	          height: ratio > newRatio ? pos.x * ratio : pos.y
	        };
	      } else {
	        imageSize = {
	          width: pos.x,
	          height: pos.y
	        };
	      }

	      $target.css(imageSize);
	    };

	    /**
	     * remove media object
	     *
	     * @param {jQuery} $editable
	     * @param {String} value - dummy argument (for keep interface)
	     * @param {jQuery} $target - target element
	     */
	    this.removeMedia = function ($editable, value, $target) {
	      beforeCommand($editable);
	      $target.detach();

	      handler.bindCustomEvent(
	        $(), $editable.data('callbacks'), 'media.delete'
	      )($target, $editable);

	      afterCommand($editable);
	    };

	    /**
	     * set focus
	     *
	     * @param $editable
	     */
	    this.focus = function ($editable) {
	      $editable.focus();

	      // [workaround] for firefox bug http://goo.gl/lVfAaI
	      if (agent.isFF && !range.create().isOnEditable()) {
	        range.createFromNode($editable[0])
	             .normalize()
	             .collapse()
	             .select();
	      }
	    };
	  };

	  /**
	   * @class module.Button
	   *
	   * Button
	   */
	  var Button = function () {
	    /**
	     * update button status
	     *
	     * @param {jQuery} $container
	     * @param {Object} styleInfo
	     */
	    this.update = function ($container, styleInfo) {
	      /**
	       * handle dropdown's check mark (for fontname, fontsize, lineHeight).
	       * @param {jQuery} $btn
	       * @param {Number} value
	       */
	      var checkDropdownMenu = function ($btn, value) {
	        $btn.find('.dropdown-menu li a').each(function () {
	          // always compare string to avoid creating another func.
	          var isChecked = ($(this).data('value') + '') === (value + '');
	          this.className = isChecked ? 'checked' : '';
	        });
	      };

	      /**
	       * update button state(active or not).
	       *
	       * @private
	       * @param {String} selector
	       * @param {Function} pred
	       */
	      var btnState = function (selector, pred) {
	        var $btn = $container.find(selector);
	        $btn.toggleClass('active', pred());
	      };

	      if (styleInfo.image) {
	        var $img = $(styleInfo.image);

	        btnState('button[data-event="imageShape"][data-value="img-rounded"]', function () {
	          return $img.hasClass('img-rounded');
	        });
	        btnState('button[data-event="imageShape"][data-value="img-circle"]', function () {
	          return $img.hasClass('img-circle');
	        });
	        btnState('button[data-event="imageShape"][data-value="img-thumbnail"]', function () {
	          return $img.hasClass('img-thumbnail');
	        });
	        btnState('button[data-event="imageShape"]:not([data-value])', function () {
	          return !$img.is('.img-rounded, .img-circle, .img-thumbnail');
	        });

	        var imgFloat = $img.css('float');
	        btnState('button[data-event="floatMe"][data-value="left"]', function () {
	          return imgFloat === 'left';
	        });
	        btnState('button[data-event="floatMe"][data-value="right"]', function () {
	          return imgFloat === 'right';
	        });
	        btnState('button[data-event="floatMe"][data-value="none"]', function () {
	          return imgFloat !== 'left' && imgFloat !== 'right';
	        });

	        var style = $img.attr('style');
	        btnState('button[data-event="resize"][data-value="1"]', function () {
	          return !!/(^|\s)(max-)?width\s*:\s*100%/.test(style);
	        });
	        btnState('button[data-event="resize"][data-value="0.5"]', function () {
	          return !!/(^|\s)(max-)?width\s*:\s*50%/.test(style);
	        });
	        btnState('button[data-event="resize"][data-value="0.25"]', function () {
	          return !!/(^|\s)(max-)?width\s*:\s*25%/.test(style);
	        });
	        return;
	      }

	      // fontname
	      var $fontname = $container.find('.note-fontname');
	      if ($fontname.length) {
	        var selectedFont = styleInfo['font-family'];
	        if (!!selectedFont) {

	          var list = selectedFont.split(',');
	          for (var i = 0, len = list.length; i < len; i++) {
	            selectedFont = list[i].replace(/[\'\"]/g, '').replace(/\s+$/, '').replace(/^\s+/, '');
	            if (agent.isFontInstalled(selectedFont)) {
	              break;
	            }
	          }
	          
	          $fontname.find('.note-current-fontname').text(selectedFont);
	          checkDropdownMenu($fontname, selectedFont);

	        }
	      }

	      // fontsize
	      var $fontsize = $container.find('.note-fontsize');
	      $fontsize.find('.note-current-fontsize').text(styleInfo['font-size']);
	      checkDropdownMenu($fontsize, parseFloat(styleInfo['font-size']));

	      // lineheight
	      var $lineHeight = $container.find('.note-height');
	      checkDropdownMenu($lineHeight, parseFloat(styleInfo['line-height']));

	      btnState('button[data-event="bold"]', function () {
	        return styleInfo['font-bold'] === 'bold';
	      });
	      btnState('button[data-event="italic"]', function () {
	        return styleInfo['font-italic'] === 'italic';
	      });
	      btnState('button[data-event="underline"]', function () {
	        return styleInfo['font-underline'] === 'underline';
	      });
	      btnState('button[data-event="strikethrough"]', function () {
	        return styleInfo['font-strikethrough'] === 'strikethrough';
	      });
	      btnState('button[data-event="superscript"]', function () {
	        return styleInfo['font-superscript'] === 'superscript';
	      });
	      btnState('button[data-event="subscript"]', function () {
	        return styleInfo['font-subscript'] === 'subscript';
	      });
	      btnState('button[data-event="justifyLeft"]', function () {
	        return styleInfo['text-align'] === 'left' || styleInfo['text-align'] === 'start';
	      });
	      btnState('button[data-event="justifyCenter"]', function () {
	        return styleInfo['text-align'] === 'center';
	      });
	      btnState('button[data-event="justifyRight"]', function () {
	        return styleInfo['text-align'] === 'right';
	      });
	      btnState('button[data-event="justifyFull"]', function () {
	        return styleInfo['text-align'] === 'justify';
	      });
	      btnState('button[data-event="insertUnorderedList"]', function () {
	        return styleInfo['list-style'] === 'unordered';
	      });
	      btnState('button[data-event="insertOrderedList"]', function () {
	        return styleInfo['list-style'] === 'ordered';
	      });
	    };

	    /**
	     * update recent color
	     *
	     * @param {Node} button
	     * @param {String} eventName
	     * @param {Mixed} value
	     */
	    this.updateRecentColor = function (button, eventName, value) {
	      var $color = $(button).closest('.note-color');
	      var $recentColor = $color.find('.note-recent-color');
	      var colorInfo = JSON.parse($recentColor.attr('data-value'));
	      colorInfo[eventName] = value;
	      $recentColor.attr('data-value', JSON.stringify(colorInfo));
	      var sKey = eventName === 'backColor' ? 'background-color' : 'color';
	      $recentColor.find('i').css(sKey, value);
	    };
	  };

	  /**
	   * @class module.Toolbar
	   *
	   * Toolbar
	   */
	  var Toolbar = function () {
	    var button = new Button();

	    this.update = function ($toolbar, styleInfo) {
	      button.update($toolbar, styleInfo);
	    };

	    /**
	     * @param {Node} button
	     * @param {String} eventName
	     * @param {String} value
	     */
	    this.updateRecentColor = function (buttonNode, eventName, value) {
	      button.updateRecentColor(buttonNode, eventName, value);
	    };

	    /**
	     * activate buttons exclude codeview
	     * @param {jQuery} $toolbar
	     */
	    this.activate = function ($toolbar) {
	      $toolbar.find('button')
	              .not('button[data-event="codeview"]')
	              .removeClass('disabled');
	    };

	    /**
	     * deactivate buttons exclude codeview
	     * @param {jQuery} $toolbar
	     */
	    this.deactivate = function ($toolbar) {
	      $toolbar.find('button')
	              .not('button[data-event="codeview"]')
	              .addClass('disabled');
	    };

	    /**
	     * @param {jQuery} $container
	     * @param {Boolean} [bFullscreen=false]
	     */
	    this.updateFullscreen = function ($container, bFullscreen) {
	      var $btn = $container.find('button[data-event="fullscreen"]');
	      $btn.toggleClass('active', bFullscreen);
	    };

	    /**
	     * @param {jQuery} $container
	     * @param {Boolean} [isCodeview=false]
	     */
	    this.updateCodeview = function ($container, isCodeview) {
	      var $btn = $container.find('button[data-event="codeview"]');
	      $btn.toggleClass('active', isCodeview);

	      if (isCodeview) {
	        this.deactivate($container);
	      } else {
	        this.activate($container);
	      }
	    };

	    /**
	     * get button in toolbar 
	     *
	     * @param {jQuery} $editable
	     * @param {String} name
	     * @return {jQuery}
	     */
	    this.get = function ($editable, name) {
	      var $toolbar = dom.makeLayoutInfo($editable).toolbar();

	      return $toolbar.find('[data-name=' + name + ']');
	    };

	    /**
	     * set button state
	     * @param {jQuery} $editable
	     * @param {String} name
	     * @param {Boolean} [isActive=true]
	     */
	    this.setButtonState = function ($editable, name, isActive) {
	      isActive = (isActive === false) ? false : true;

	      var $button = this.get($editable, name);
	      $button.toggleClass('active', isActive);
	    };
	  };

	  var EDITABLE_PADDING = 24;

	  var Statusbar = function () {
	    var $document = $(document);

	    this.attach = function (layoutInfo, options) {
	      if (!options.disableResizeEditor) {
	        layoutInfo.statusbar().on('mousedown', hStatusbarMousedown);
	      }
	    };

	    /**
	     * `mousedown` event handler on statusbar
	     *
	     * @param {MouseEvent} event
	     */
	    var hStatusbarMousedown = function (event) {
	      event.preventDefault();
	      event.stopPropagation();

	      var $editable = dom.makeLayoutInfo(event.target).editable();
	      var editableTop = $editable.offset().top - $document.scrollTop();

	      var layoutInfo = dom.makeLayoutInfo(event.currentTarget || event.target);
	      var options = layoutInfo.editor().data('options');

	      $document.on('mousemove', function (event) {
	        var nHeight = event.clientY - (editableTop + EDITABLE_PADDING);

	        nHeight = (options.minHeight > 0) ? Math.max(nHeight, options.minHeight) : nHeight;
	        nHeight = (options.maxHeight > 0) ? Math.min(nHeight, options.maxHeight) : nHeight;

	        $editable.height(nHeight);
	      }).one('mouseup', function () {
	        $document.off('mousemove');
	      });
	    };
	  };

	  /**
	   * @class module.Popover
	   *
	   * Popover (http://getbootstrap.com/javascript/#popovers)
	   *
	   */
	  var Popover = function () {
	    var button = new Button();

	    /**
	     * returns position from placeholder
	     *
	     * @private
	     * @param {Node} placeholder
	     * @param {Boolean} isAirMode
	     * @return {Object}
	     * @return {Number} return.left
	     * @return {Number} return.top
	     */
	    var posFromPlaceholder = function (placeholder, isAirMode) {
	      var $placeholder = $(placeholder);
	      var pos = isAirMode ? $placeholder.offset() : $placeholder.position();
	      var height = $placeholder.outerHeight(true); // include margin

	      // popover below placeholder.
	      return {
	        left: pos.left,
	        top: pos.top + height
	      };
	    };

	    /**
	     * show popover
	     *
	     * @private
	     * @param {jQuery} popover
	     * @param {Position} pos
	     */
	    var showPopover = function ($popover, pos) {
	      $popover.css({
	        display: 'block',
	        left: pos.left,
	        top: pos.top
	      });
	    };

	    var PX_POPOVER_ARROW_OFFSET_X = 20;

	    /**
	     * update current state
	     * @param {jQuery} $popover - popover container
	     * @param {Object} styleInfo - style object
	     * @param {Boolean} isAirMode
	     */
	    this.update = function ($popover, styleInfo, isAirMode) {
	      button.update($popover, styleInfo);

	      var $linkPopover = $popover.find('.note-link-popover');
	      if (styleInfo.anchor) {
	        var $anchor = $linkPopover.find('a');
	        var href = $(styleInfo.anchor).attr('href');
	        var target = $(styleInfo.anchor).attr('target');
	        $anchor.attr('href', href).html(href);
	        if (!target) {
	          $anchor.removeAttr('target');
	        } else {
	          $anchor.attr('target', '_blank');
	        }
	        showPopover($linkPopover, posFromPlaceholder(styleInfo.anchor, isAirMode));
	      } else {
	        $linkPopover.hide();
	      }

	      var $imagePopover = $popover.find('.note-image-popover');
	      if (styleInfo.image) {
	        showPopover($imagePopover, posFromPlaceholder(styleInfo.image, isAirMode));
	      } else {
	        $imagePopover.hide();
	      }

	      var $airPopover = $popover.find('.note-air-popover');
	      if (isAirMode && !styleInfo.range.isCollapsed()) {
	        var rect = list.last(styleInfo.range.getClientRects());
	        if (rect) {
	          var bnd = func.rect2bnd(rect);
	          showPopover($airPopover, {
	            left: Math.max(bnd.left + bnd.width / 2 - PX_POPOVER_ARROW_OFFSET_X, 0),
	            top: bnd.top + bnd.height
	          });
	        }
	      } else {
	        $airPopover.hide();
	      }
	    };

	    /**
	     * @param {Node} button
	     * @param {String} eventName
	     * @param {String} value
	     */
	    this.updateRecentColor = function (button, eventName, value) {
	      button.updateRecentColor(button, eventName, value);
	    };

	    /**
	     * hide all popovers
	     * @param {jQuery} $popover - popover container
	     */
	    this.hide = function ($popover) {
	      $popover.children().hide();
	    };
	  };

	  /**
	   * @class module.Handle
	   *
	   * Handle
	   */
	  var Handle = function (handler) {
	    var $document = $(document);

	    /**
	     * `mousedown` event handler on $handle
	     *  - controlSizing: resize image
	     *
	     * @param {MouseEvent} event
	     */
	    var hHandleMousedown = function (event) {
	      if (dom.isControlSizing(event.target)) {
	        event.preventDefault();
	        event.stopPropagation();

	        var layoutInfo = dom.makeLayoutInfo(event.target),
	            $handle = layoutInfo.handle(),
	            $popover = layoutInfo.popover(),
	            $editable = layoutInfo.editable(),
	            $editor = layoutInfo.editor();

	        var target = $handle.find('.note-control-selection').data('target'),
	            $target = $(target), posStart = $target.offset(),
	            scrollTop = $document.scrollTop();

	        var isAirMode = $editor.data('options').airMode;

	        $document.on('mousemove', function (event) {
	          handler.invoke('editor.resizeTo', {
	            x: event.clientX - posStart.left,
	            y: event.clientY - (posStart.top - scrollTop)
	          }, $target, !event.shiftKey);

	          handler.invoke('handle.update', $handle, {image: target}, isAirMode);
	          handler.invoke('popover.update', $popover, {image: target}, isAirMode);
	        }).one('mouseup', function () {
	          $document.off('mousemove');
	          handler.invoke('editor.afterCommand', $editable);
	        });

	        if (!$target.data('ratio')) { // original ratio.
	          $target.data('ratio', $target.height() / $target.width());
	        }
	      }
	    };

	    this.attach = function (layoutInfo) {
	      layoutInfo.handle().on('mousedown', hHandleMousedown);
	    };

	    /**
	     * update handle
	     * @param {jQuery} $handle
	     * @param {Object} styleInfo
	     * @param {Boolean} isAirMode
	     */
	    this.update = function ($handle, styleInfo, isAirMode) {
	      var $selection = $handle.find('.note-control-selection');
	      if (styleInfo.image) {
	        var $image = $(styleInfo.image);
	        var pos = isAirMode ? $image.offset() : $image.position();

	        // include margin
	        var imageSize = {
	          w: $image.outerWidth(true),
	          h: $image.outerHeight(true)
	        };

	        $selection.css({
	          display: 'block',
	          left: pos.left,
	          top: pos.top,
	          width: imageSize.w,
	          height: imageSize.h
	        }).data('target', styleInfo.image); // save current image element.
	        var sizingText = imageSize.w + 'x' + imageSize.h;
	        $selection.find('.note-control-selection-info').text(sizingText);
	      } else {
	        $selection.hide();
	      }
	    };

	    /**
	     * hide
	     *
	     * @param {jQuery} $handle
	     */
	    this.hide = function ($handle) {
	      $handle.children().hide();
	    };
	  };

	  var Fullscreen = function (handler) {
	    var $window = $(window);
	    var $scrollbar = $('html, body');

	    /**
	     * toggle fullscreen
	     *
	     * @param {Object} layoutInfo
	     */
	    this.toggle = function (layoutInfo) {

	      var $editor = $('.annotator-widget'),//layoutInfo.editor(),
	          $toolbar = layoutInfo.toolbar(),
	          $editable = layoutInfo.editable(),
	          $codable = layoutInfo.codable(),
	          $annotatorcontrols = $('.annotator-controls:visible');

	      var resize = function (size) {
	        $editable.css('height', size.h);
	        $codable.css('height', size.h);
	        if ($codable.data('cmeditor')) {
	          $codable.data('cmeditor').setsize(null, size.h);
	        }
	      };

	      $editor.toggleClass('fullscreen');
	      var isFullscreen = $editor.hasClass('fullscreen');
	      if (isFullscreen) {
	        $editable.data('orgheight', $editable.css('height'));

	        $window.on('resize', function () {
	          resize({
	            h: $window.height() - $toolbar.outerHeight() - $annotatorcontrols.outerHeight() - 5 // for padding
	          });
	        }).trigger('resize');

	        $scrollbar.css('overflow', 'hidden');
	      } else {
	        $window.off('resize');
	        resize({
	          h: $editable.data('orgheight')
	        });
	        $scrollbar.css('overflow', 'visible');
	      }

	      handler.invoke('toolbar.updateFullscreen', $toolbar, isFullscreen);
	    };
	  };


	  var CodeMirror;
	  if (agent.hasCodeMirror) {
	    if (agent.isSupportAmd) {
	        CodeMirror = window.CodeMirror;
	    } else {
	      CodeMirror = window.CodeMirror;
	    }
	  }

	  /**
	   * @class Codeview
	   */
	  var Codeview = function (handler) {

	    this.sync = function (layoutInfo) {
	      var isCodeview = handler.invoke('codeview.isActivated', layoutInfo);
	      if (isCodeview && agent.hasCodeMirror) {
	        layoutInfo.codable().data('cmEditor').save();
	      }
	    };

	    /**
	     * @param {Object} layoutInfo
	     * @return {Boolean}
	     */
	    this.isActivated = function (layoutInfo) {
	      var $editor = layoutInfo.editor();
	      return $editor.hasClass('codeview');
	    };

	    /**
	     * toggle codeview
	     *
	     * @param {Object} layoutInfo
	     */
	    this.toggle = function (layoutInfo) {
	      if (this.isActivated(layoutInfo)) {
	        this.deactivate(layoutInfo);
	      } else {
	        this.activate(layoutInfo);
	      }
	    };

	    /**
	     * activate code view
	     *
	     * @param {Object} layoutInfo
	     */
	    this.activate = function (layoutInfo) {
	      var $editor = layoutInfo.editor(),
	          $toolbar = layoutInfo.toolbar(),
	          $editable = layoutInfo.editable(),
	          $codable = layoutInfo.codable(),
	          $popover = layoutInfo.popover(),
	          $handle = layoutInfo.handle();

	      var options = $editor.data('options');

	      $codable.val(dom.html($editable, options.prettifyHtml));
	      $codable.height($editable.height());

	      handler.invoke('toolbar.updateCodeview', $toolbar, true);
	      handler.invoke('popover.hide', $popover);
	      handler.invoke('handle.hide', $handle);

	      $editor.addClass('codeview');

	      $codable.focus();

	      // activate CodeMirror as codable
	      if (agent.hasCodeMirror) {
	        var cmEditor = CodeMirror.fromTextArea($codable[0], options.codemirror);

	        // CodeMirror TernServer
	        if (options.codemirror.tern) {
	          var server = new CodeMirror.TernServer(options.codemirror.tern);
	          cmEditor.ternServer = server;
	          cmEditor.on('cursorActivity', function (cm) {
	            server.updateArgHints(cm);
	          });
	        }

	        // CodeMirror hasn't Padding.
	        cmEditor.setSize(null, $editable.outerHeight());
	        $codable.data('cmEditor', cmEditor);
	      }
	    };

	    /**
	     * deactivate code view
	     *
	     * @param {Object} layoutInfo
	     */
	    this.deactivate = function (layoutInfo) {
	      var $holder = layoutInfo.holder(),
	          $editor = layoutInfo.editor(),
	          $toolbar = layoutInfo.toolbar(),
	          $editable = layoutInfo.editable(),
	          $codable = layoutInfo.codable();

	      var options = $editor.data('options');

	      // deactivate CodeMirror as codable
	      if (agent.hasCodeMirror) {
	        var cmEditor = $codable.data('cmEditor');
	        $codable.val(cmEditor.getValue());
	        cmEditor.toTextArea();
	      }

	      var value = dom.value($codable, options.prettifyHtml) || dom.emptyPara;
	      var isChange = $editable.html() !== value;

	      $editable.html(value);
	      $editable.height(options.height ? $codable.height() : 'auto');
	      $editor.removeClass('codeview');

	      if (isChange) {
	        handler.bindCustomEvent(
	          $holder, $editable.data('callbacks'), 'change'
	        )($editable.html(), $editable);
	      }

	      $editable.focus();

	      handler.invoke('toolbar.updateCodeview', $toolbar, false);
	    };
	  };

	  var DragAndDrop = function (handler) {
	    var $document = $(document);

	    /**
	     * attach Drag and Drop Events
	     *
	     * @param {Object} layoutInfo - layout Informations
	     * @param {Object} options
	     */
	    this.attach = function (layoutInfo, options) {
	      if (options.airMode || options.disableDragAndDrop) {
	        // prevent default drop event
	        $document.on('drop', function (e) {
	          e.preventDefault();
	        });
	      } else {
	        this.attachDragAndDropEvent(layoutInfo, options);
	      }
	    };

	    /**
	     * attach Drag and Drop Events
	     *
	     * @param {Object} layoutInfo - layout Informations
	     * @param {Object} options
	     */
	    this.attachDragAndDropEvent = function (layoutInfo, options) {
	      var collection = $(),
	          $editor = layoutInfo.editor(),
	          $dropzone = layoutInfo.dropzone(),
	          $dropzoneMessage = $dropzone.find('.note-dropzone-message');

	      // show dropzone on dragenter when dragging a object to document
	      // -but only if the editor is visible, i.e. has a positive width and height
	      $document.on('dragenter', function (e) {
	        var isCodeview = handler.invoke('codeview.isActivated', layoutInfo);
	        var hasEditorSize = $editor.width() > 0 && $editor.height() > 0;
	        if (!isCodeview && !collection.length && hasEditorSize) {
	          $editor.addClass('dragover');
	          $dropzone.width($editor.width());
	          $dropzone.height($editor.height());
	          $dropzoneMessage.text(options.langInfo.image.dragImageHere);
	        }
	        collection = collection.add(e.target);
	      }).on('dragleave', function (e) {
	        collection = collection.not(e.target);
	        if (!collection.length) {
	          $editor.removeClass('dragover');
	        }
	      }).on('drop', function () {
	        collection = $();
	        $editor.removeClass('dragover');
	      });

	      // change dropzone's message on hover.
	      $dropzone.on('dragenter', function () {
	        $dropzone.addClass('hover');
	        $dropzoneMessage.text(options.langInfo.image.dropImage);
	      }).on('dragleave', function () {
	        $dropzone.removeClass('hover');
	        $dropzoneMessage.text(options.langInfo.image.dragImageHere);
	      });

	      // attach dropImage
	      $dropzone.on('drop', function (event) {
	        event.preventDefault();

	        var dataTransfer = event.originalEvent.dataTransfer;
	        var html = dataTransfer.getData('text/html');
	        var text = dataTransfer.getData('text/plain');

	        var layoutInfo = dom.makeLayoutInfo(event.currentTarget || event.target);

	        if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
	          layoutInfo.editable().focus();
	          handler.insertImages(layoutInfo, dataTransfer.files);
	        } else if (html) {
	          $(html).each(function () {
	            layoutInfo.editable().focus();
	            handler.invoke('editor.insertNode', layoutInfo.editable(), this);
	          });
	        } else if (text) {
	          layoutInfo.editable().focus();
	          handler.invoke('editor.insertText', layoutInfo.editable(), text);
	        }
	      }).on('dragover', false); // prevent default dragover event
	    };
	  };

	  var Clipboard = function (handler) {

	    this.attach = function (layoutInfo) {
	      layoutInfo.editable().on('paste', hPasteClipboardImage);
	    };

	    /**
	     * paste clipboard image
	     *
	     * @param {Event} event
	     */
	    var hPasteClipboardImage = function (event) {
	      var clipboardData = event.originalEvent.clipboardData;
	      var layoutInfo = dom.makeLayoutInfo(event.currentTarget || event.target);
	      var $editable = layoutInfo.editable();

	      if (!clipboardData || !clipboardData.items || !clipboardData.items.length) {
	        var callbacks = $editable.data('callbacks');
	        // only can run if it has onImageUpload method
	        if (!callbacks.onImageUpload) {
	          return;
	        }

	        // save cursor
	        handler.invoke('editor.saveNode', $editable);
	        handler.invoke('editor.saveRange', $editable);

	        $editable.html('');

	        setTimeout(function () {
	          var $img = $editable.find('img');

	          // if img is no in clipboard, insert text or dom
	          if (!$img.length || $img[0].src.indexOf('data:') === -1) {
	            var html = $editable.html();

	            handler.invoke('editor.restoreNode', $editable);
	            handler.invoke('editor.restoreRange', $editable);

	            handler.invoke('editor.focus', $editable);
	            try {
	              handler.invoke('editor.pasteHTML', $editable, html);
	            } catch (ex) {
	              handler.invoke('editor.insertText', $editable, html);
	            }
	            return;
	          }

	          var datauri = $img[0].src;

	          var data = atob(datauri.split(',')[1]);
	          var array = new Uint8Array(data.length);
	          for (var i = 0; i < data.length; i++) {
	            array[i] = data.charCodeAt(i);
	          }

	          var blob = new Blob([array], { type : 'image/png' });
	          blob.name = 'clipboard.png';

	          handler.invoke('editor.restoreNode', $editable);
	          handler.invoke('editor.restoreRange', $editable);
	          handler.insertImages(layoutInfo, [blob]);

	          handler.invoke('editor.afterCommand', $editable);
	        }, 0);

	        return;
	      }

	      var item = list.head(clipboardData.items);
	      var isClipboardImage = item.kind === 'file' && item.type.indexOf('image/') !== -1;

	      if (isClipboardImage) {
	        handler.insertImages(layoutInfo, [item.getAsFile()]);
	      }

	      handler.invoke('editor.afterCommand', $editable);
	    };
	  };

	  var LinkDialog = function (handler) {

	    /**
	     * toggle button status
	     *
	     * @private
	     * @param {jQuery} $btn
	     * @param {Boolean} isEnable
	     */
	    var toggleBtn = function ($btn, isEnable) {
	      $btn.toggleClass('disabled', !isEnable);
	      $btn.attr('disabled', !isEnable);
	    };

	    /**
	     * bind enter key
	     *
	     * @private
	     * @param {jQuery} $input
	     * @param {jQuery} $btn
	     */
	    var bindEnterKey = function ($input, $btn) {
	      $input.on('keypress', function (event) {
	        if (event.keyCode === key.code.ENTER) {
	          $btn.trigger('click');
	        }
	      });
	    };

	    /**
	     * Show link dialog and set event handlers on dialog controls.
	     *
	     * @param {jQuery} $editable
	     * @param {jQuery} $dialog
	     * @param {Object} linkInfo
	     * @return {Promise}
	     */
	    this.showLinkDialog = function ($editable, $dialog, linkInfo) {
	      return $.Deferred(function (deferred) {
	        var $linkDialog = $dialog.find('.note-link-dialog');

	        var $linkText = $linkDialog.find('.note-link-text'),
	        $linkUrl = $linkDialog.find('.note-link-url'),
	        $linkBtn = $linkDialog.find('.note-link-btn'),
	        $openInNewWindow = $linkDialog.find('input[type=checkbox]');

	        $linkDialog.one('shown.bs.modal', function () {
	          $linkText.val(linkInfo.text);

	          $linkText.on('input', function () {
	            toggleBtn($linkBtn, $linkText.val() && $linkUrl.val());
	            // if linktext was modified by keyup,
	            // stop cloning text from linkUrl
	            linkInfo.text = $linkText.val();
	          });

	          // if no url was given, copy text to url
	          if (!linkInfo.url) {
	            linkInfo.url = linkInfo.text;
	            toggleBtn($linkBtn, linkInfo.text);
	          }

	          $linkUrl.on('input', function () {
	            toggleBtn($linkBtn, $linkText.val() && $linkUrl.val());
	            // display same link on `Text to display` input
	            // when create a new link
	            if (!linkInfo.text) {
	              $linkText.val($linkUrl.val());
	            }
	          }).val(linkInfo.url).trigger('focus').trigger('select');

	          bindEnterKey($linkUrl, $linkBtn);
	          bindEnterKey($linkText, $linkBtn);

	          $openInNewWindow.prop('checked', linkInfo.newWindow);

	          $linkBtn.one('click', function (event) {
	            event.preventDefault();

	            deferred.resolve({
	              range: linkInfo.range,
	              url: $linkUrl.val(),
	              text: $linkText.val(),
	              newWindow: $openInNewWindow.is(':checked')
	            });
	            $linkDialog.modal('hide');
	          });
	        }).one('hidden.bs.modal', function () {
	          // detach events
	          $linkText.off('input keypress');
	          $linkUrl.off('input keypress');
	          $linkBtn.off('click');

	          if (deferred.state() === 'pending') {
	            deferred.reject();
	          }
	        }).modal('show');
	      }).promise();
	    };

	    /**
	     * @param {Object} layoutInfo
	     */
	    this.show = function (layoutInfo) {
	      var $editor = layoutInfo.editor(),
	          $dialog = layoutInfo.dialog(),
	          $editable = layoutInfo.editable(),
	          $popover = layoutInfo.popover(),
	          linkInfo = handler.invoke('editor.getLinkInfo', $editable);

	      var options = $editor.data('options');

	      handler.invoke('editor.saveRange', $editable);
	      this.showLinkDialog($editable, $dialog, linkInfo).then(function (linkInfo) {
	        handler.invoke('editor.restoreRange', $editable);
	        handler.invoke('editor.createLink', $editable, linkInfo, options);
	        // hide popover after creating link
	        handler.invoke('popover.hide', $popover);
	      }).fail(function () {
	        handler.invoke('editor.restoreRange', $editable);
	      });
	    };
	  };

	  var ImageDialog = function (handler) {
	    /**
	     * toggle button status
	     *
	     * @private
	     * @param {jQuery} $btn
	     * @param {Boolean} isEnable
	     */
	    var toggleBtn = function ($btn, isEnable) {
	      $btn.toggleClass('disabled', !isEnable);
	      $btn.attr('disabled', !isEnable);
	    };

	    /**
	     * bind enter key
	     *
	     * @private
	     * @param {jQuery} $input
	     * @param {jQuery} $btn
	     */
	    var bindEnterKey = function ($input, $btn) {
	      $input.on('keypress', function (event) {
	        if (event.keyCode === key.code.ENTER) {
	          $btn.trigger('click');
	        }
	      });
	    };

	    this.show = function (layoutInfo) {
	      var $dialog = layoutInfo.dialog(),
	          $editable = layoutInfo.editable();

	      handler.invoke('editor.saveRange', $editable);
	      this.showImageDialog($editable, $dialog).then(function (data) {
	        handler.invoke('editor.restoreRange', $editable);

	        if (typeof data === 'string') {
	          // image url
	          handler.invoke('editor.insertImage', $editable, data);
	        } else {
	          // array of files
	          handler.insertImages(layoutInfo, data);
	        }
	      }).fail(function () {
	        handler.invoke('editor.restoreRange', $editable);
	      });
	    };

	    /**
	     * show image dialog
	     *
	     * @param {jQuery} $editable
	     * @param {jQuery} $dialog
	     * @return {Promise}
	     */
	    this.showImageDialog = function ($editable, $dialog) {
	      return $.Deferred(function (deferred) {
	        var $imageDialog = $dialog.find('.note-image-dialog');

	        var $imageInput = $dialog.find('.note-image-input'),
	            $imageUrl = $dialog.find('.note-image-url'),
	            $imageBtn = $dialog.find('.note-image-btn');

	        $imageDialog.one('shown.bs.modal', function () {
	          // Cloning imageInput to clear element.
	          $imageInput.replaceWith($imageInput.clone()
	            .on('change', function () {
	              deferred.resolve(this.files || this.value);
	              $imageDialog.modal('hide');
	            })
	            .val('')
	          );

	          $imageBtn.click(function (event) {
	            event.preventDefault();

	            deferred.resolve($imageUrl.val());
	            $imageDialog.modal('hide');
	          });

	          $imageUrl.on('keyup paste', function (event) {
	            var url;
	            
	            if (event.type === 'paste') {
	              url = event.originalEvent.clipboardData.getData('text');
	            } else {
	              url = $imageUrl.val();
	            }
	            
	            toggleBtn($imageBtn, url);
	          }).val('').trigger('focus');
	          bindEnterKey($imageUrl, $imageBtn);
	        }).one('hidden.bs.modal', function () {
	          $imageInput.off('change');
	          $imageUrl.off('keyup paste keypress');
	          $imageBtn.off('click');

	          if (deferred.state() === 'pending') {
	            deferred.reject();
	          }
	        }).modal('show');
	      });
	    };
	  };

	  var HelpDialog = function (handler) {
	    /**
	     * show help dialog
	     *
	     * @param {jQuery} $editable
	     * @param {jQuery} $dialog
	     * @return {Promise}
	     */
	    this.showHelpDialog = function ($editable, $dialog) {
	      return $.Deferred(function (deferred) {
	        var $helpDialog = $dialog.find('.note-help-dialog');

	        $helpDialog.one('hidden.bs.modal', function () {
	          deferred.resolve();
	        }).modal('show');
	      }).promise();
	    };

	    /**
	     * @param {Object} layoutInfo
	     */
	    this.show = function (layoutInfo) {
	      var $dialog = layoutInfo.dialog(),
	          $editable = layoutInfo.editable();

	      handler.invoke('editor.saveRange', $editable, true);
	      this.showHelpDialog($editable, $dialog).then(function () {
	        handler.invoke('editor.restoreRange', $editable);
	      });
	    };
	  };


	  /**
	   * @class EventHandler
	   *
	   * EventHandler
	   *  - TODO: new instance per a editor
	   */
	  var EventHandler = function () {
	    /**
	     * Modules
	     */
	    var modules = this.modules = {
	      editor: new Editor(this),
	      toolbar: new Toolbar(this),
	      statusbar: new Statusbar(this),
	      popover: new Popover(this),
	      handle: new Handle(this),
	      fullscreen: new Fullscreen(this),
	      codeview: new Codeview(this),
	      dragAndDrop: new DragAndDrop(this),
	      clipboard: new Clipboard(this),
	      linkDialog: new LinkDialog(this),
	      imageDialog: new ImageDialog(this),
	      helpDialog: new HelpDialog(this)
	    };

	    /**
	     * invoke module's method
	     *
	     * @param {String} moduleAndMethod - ex) 'editor.redo'
	     * @param {...*} arguments - arguments of method
	     * @return {*}
	     */
	    this.invoke = function () {
	      var moduleAndMethod = list.head(list.from(arguments));
	      var args = list.tail(list.from(arguments));

	      var splits = moduleAndMethod.split('.');
	      var hasSeparator = splits.length > 1;
	      var moduleName = hasSeparator && list.head(splits);
	      var methodName = hasSeparator ? list.last(splits) : list.head(splits);

	      var module = this.getModule(moduleName);
	      var method = module[methodName];

	      return method && method.apply(module, args);
	    };

	    /**
	     * returns module
	     *
	     * @param {String} moduleName - name of module
	     * @return {Module} - defaults is editor
	     */
	    this.getModule = function (moduleName) {
	      return this.modules[moduleName] || this.modules.editor;
	    };

	    /**
	     * @param {jQuery} $holder
	     * @param {Object} callbacks
	     * @param {String} eventNamespace
	     * @returns {Function}
	     */
	    var bindCustomEvent = this.bindCustomEvent = function ($holder, callbacks, eventNamespace) {
	      return function () {
	        var callback = callbacks[func.namespaceToCamel(eventNamespace, 'on')];
	        if (callback) {
	          callback.apply($holder[0], arguments);
	        }
	        return $holder.trigger('summernote.' + eventNamespace, arguments);
	      };
	    };

	    /**
	     * insert Images from file array.
	     *
	     * @private
	     * @param {Object} layoutInfo
	     * @param {File[]} files
	     */
	    this.insertImages = function (layoutInfo, files) {
	      var $editor = layoutInfo.editor(),
	          $editable = layoutInfo.editable(),
	          $holder = layoutInfo.holder();

	      var callbacks = $editable.data('callbacks');
	      var options = $editor.data('options');

	      // If onImageUpload options setted
	      if (callbacks.onImageUpload) {
	        bindCustomEvent($holder, callbacks, 'image.upload')(files);
	      // else insert Image as dataURL
	      } else {
	        $.each(files, function (idx, file) {
	          var filename = file.name;
	          if (options.maximumImageFileSize && options.maximumImageFileSize < file.size) {
	            bindCustomEvent($holder, callbacks, 'image.upload.error')(options.langInfo.image.maximumFileSizeError);
	          } else {
	            async.readFileAsDataURL(file).then(function (sDataURL) {
	              modules.editor.insertImage($editable, sDataURL, filename);
	            }).fail(function () {
	              bindCustomEvent($holder, callbacks, 'image.upload.error')(options.langInfo.image.maximumFileSizeError);
	            });
	          }
	        });
	      }
	    };

	    var commands = {
	      /**
	       * @param {Object} layoutInfo
	       */
	      showLinkDialog: function (layoutInfo) {
	        modules.linkDialog.show(layoutInfo);
	      },

	      /**
	       * @param {Object} layoutInfo
	       */
	      showImageDialog: function (layoutInfo) {
	        modules.imageDialog.show(layoutInfo);
	      },

	      /**
	       * @param {Object} layoutInfo
	       */
	      showHelpDialog: function (layoutInfo) {
	        modules.helpDialog.show(layoutInfo);
	      },

	      /**
	       * @param {Object} layoutInfo
	       */
	      fullscreen: function (layoutInfo) {
	        modules.fullscreen.toggle(layoutInfo);
	      },

	      /**
	       * @param {Object} layoutInfo
	       */
	      codeview: function (layoutInfo) {
	        modules.codeview.toggle(layoutInfo);
	      }
	    };

	    var hMousedown = function (event) {
	      //preventDefault Selection for FF, IE8+
	      if (dom.isImg(event.target)) {
	        event.preventDefault();
	      }
	    };

	    var hKeyupAndMouseup = function (event) {
	      var layoutInfo = dom.makeLayoutInfo(event.currentTarget || event.target);
	      modules.editor.removeBogus(layoutInfo.editable());
	      hToolbarAndPopoverUpdate(event);
	    };

	    var hToolbarAndPopoverUpdate = function (event) {
	      // delay for range after mouseup
	      setTimeout(function () {
	        var layoutInfo = dom.makeLayoutInfo(event.currentTarget || event.target);
	        var styleInfo = modules.editor.currentStyle(event.target);
	        if (!styleInfo) { return; }

	        var isAirMode = layoutInfo.editor().data('options').airMode;
	        if (!isAirMode) {
	          modules.toolbar.update(layoutInfo.toolbar(), styleInfo);
	        }

	        modules.popover.update(layoutInfo.popover(), styleInfo, isAirMode);
	        modules.handle.update(layoutInfo.handle(), styleInfo, isAirMode);
	      }, 0);
	    };

	    var hScrollAndBlur = function (event) {
	      var layoutInfo = dom.makeLayoutInfo(event.currentTarget || event.target);
	      //hide popover and handle when scrolled
	      modules.popover.hide(layoutInfo.popover());
	      modules.handle.hide(layoutInfo.handle());
	    };

	    var hToolbarAndPopoverMousedown = function (event) {
	      // prevent default event when insertTable (FF, Webkit)
	      var $btn = $(event.target).closest('[data-event]');
	      if ($btn.length) {
	        event.preventDefault();
	      }
	    };

	    var hToolbarAndPopoverClick = function (event) {
	      var $btn = $(event.target).closest('[data-event]');

	      if ($btn.length) {
	        var eventName = $btn.attr('data-event'),
	            value = $btn.attr('data-value'),
	            hide = $btn.attr('data-hide');

	        var layoutInfo = dom.makeLayoutInfo(event.target);

	        // before command: detect control selection element($target)
	        var $target;
	        if ($.inArray(eventName, ['resize', 'floatMe', 'removeMedia', 'imageShape']) !== -1) {
	          var $selection = layoutInfo.handle().find('.note-control-selection');
	          $target = $($selection.data('target'));
	        }

	        // If requested, hide the popover when the button is clicked.
	        // Useful for things like showHelpDialog.
	        if (hide) {
	          $btn.parents('.popover').hide();
	        }

	        if ($.isFunction($.summernote.pluginEvents[eventName])) {
	          $.summernote.pluginEvents[eventName](event, modules.editor, layoutInfo, value);
	        } else if (modules.editor[eventName]) { // on command
	          var $editable = layoutInfo.editable();
	          $editable.focus();
	          modules.editor[eventName]($editable, value, $target);
	          event.preventDefault();
	        } else if (commands[eventName]) {
	          commands[eventName].call(this, layoutInfo);
	          event.preventDefault();
	        }

	        // after command
	        if ($.inArray(eventName, ['backColor', 'foreColor']) !== -1) {
	          var options = layoutInfo.editor().data('options', options);
	          var module = options.airMode ? modules.popover : modules.toolbar;
	          module.updateRecentColor(list.head($btn), eventName, value);
	        }

	        hToolbarAndPopoverUpdate(event);
	      }
	    };

	    var PX_PER_EM = 18;
	    var hDimensionPickerMove = function (event, options) {
	      var $picker = $(event.target.parentNode); // target is mousecatcher
	      var $dimensionDisplay = $picker.next();
	      var $catcher = $picker.find('.note-dimension-picker-mousecatcher');
	      var $highlighted = $picker.find('.note-dimension-picker-highlighted');
	      var $unhighlighted = $picker.find('.note-dimension-picker-unhighlighted');

	      var posOffset;
	      // HTML5 with jQuery - e.offsetX is undefined in Firefox
	      if (event.offsetX === undefined) {
	        var posCatcher = $(event.target).offset();
	        posOffset = {
	          x: event.pageX - posCatcher.left,
	          y: event.pageY - posCatcher.top
	        };
	      } else {
	        posOffset = {
	          x: event.offsetX,
	          y: event.offsetY
	        };
	      }

	      var dim = {
	        c: Math.ceil(posOffset.x / PX_PER_EM) || 1,
	        r: Math.ceil(posOffset.y / PX_PER_EM) || 1
	      };

	      $highlighted.css({ width: dim.c + 'em', height: dim.r + 'em' });
	      $catcher.attr('data-value', dim.c + 'x' + dim.r);

	      if (3 < dim.c && dim.c < options.insertTableMaxSize.col) {
	        $unhighlighted.css({ width: dim.c + 1 + 'em'});
	      }

	      if (3 < dim.r && dim.r < options.insertTableMaxSize.row) {
	        $unhighlighted.css({ height: dim.r + 1 + 'em'});
	      }

	      $dimensionDisplay.html(dim.c + ' x ' + dim.r);
	    };
	    
	    /**
	     * bind KeyMap on keydown
	     *
	     * @param {Object} layoutInfo
	     * @param {Object} keyMap
	     */
	    this.bindKeyMap = function (layoutInfo, keyMap) {
	      var $editor = layoutInfo.editor();
	      var $editable = layoutInfo.editable();

	      $editable.on('keydown', function (event) {
	        var keys = [];

	        // modifier
	        if (event.metaKey) { keys.push('CMD'); }
	        if (event.ctrlKey && !event.altKey) { keys.push('CTRL'); }
	        if (event.shiftKey) { keys.push('SHIFT'); }

	        // keycode
	        var keyName = key.nameFromCode[event.keyCode];
	        if (keyName) {
	          keys.push(keyName);
	        }

	        var pluginEvent;
	        var keyString = keys.join('+');
	        var eventName = keyMap[keyString];
	        if (eventName) {
	          // FIXME Summernote doesn't support event pipeline yet.
	          //  - Plugin -> Base Code
	          pluginEvent = $.summernote.pluginEvents[keyString];
	          if ($.isFunction(pluginEvent)) {
	            if (pluginEvent(event, modules.editor, layoutInfo)) {
	              return false;
	            }
	          }

	          pluginEvent = $.summernote.pluginEvents[eventName];

	          if ($.isFunction(pluginEvent)) {
	            pluginEvent(event, modules.editor, layoutInfo);
	          } else if (modules.editor[eventName]) {
	            modules.editor[eventName]($editable, $editor.data('options'));
	            event.preventDefault();
	          } else if (commands[eventName]) {
	            commands[eventName].call(this, layoutInfo);
	            event.preventDefault();
	          }
	        } else if (key.isEdit(event.keyCode)) {
	          modules.editor.afterCommand($editable);
	        }
	      });
	    };

	    /**
	     * attach eventhandler
	     *
	     * @param {Object} layoutInfo - layout Informations
	     * @param {Object} options - user options include custom event handlers
	     */
	    this.attach = function (layoutInfo, options) {
	      // handlers for editable
	      if (options.shortcuts) {
	        this.bindKeyMap(layoutInfo, options.keyMap[agent.isMac ? 'mac' : 'pc']);
	      }
	      layoutInfo.editable().on('mousedown', hMousedown);
	      layoutInfo.editable().on('keyup mouseup', hKeyupAndMouseup);
	      layoutInfo.editable().on('scroll blur', hScrollAndBlur);

	      // handler for clipboard
	      modules.clipboard.attach(layoutInfo, options);

	      // handler for handle and popover
	      modules.handle.attach(layoutInfo, options);
	      layoutInfo.popover().on('click', hToolbarAndPopoverClick);
	      layoutInfo.popover().on('mousedown', hToolbarAndPopoverMousedown);

	      // handler for drag and drop
	      modules.dragAndDrop.attach(layoutInfo, options);

	      // handlers for frame mode (toolbar, statusbar)
	      if (!options.airMode) {
	        // handler for toolbar
	        layoutInfo.toolbar().on('click', hToolbarAndPopoverClick);
	        layoutInfo.toolbar().on('mousedown', hToolbarAndPopoverMousedown);

	        // handler for statusbar
	        modules.statusbar.attach(layoutInfo, options);
	      }

	      // handler for table dimension
	      var $catcherContainer = options.airMode ? layoutInfo.popover() :
	                                                layoutInfo.toolbar();
	      var $catcher = $catcherContainer.find('.note-dimension-picker-mousecatcher');
	      $catcher.css({
	        width: options.insertTableMaxSize.col + 'em',
	        height: options.insertTableMaxSize.row + 'em'
	      }).on('mousemove', function (event) {
	        hDimensionPickerMove(event, options);
	      });

	      // save options on editor
	      layoutInfo.editor().data('options', options);

	      // ret styleWithCSS for backColor / foreColor clearing with 'inherit'.
	      if (!agent.isMSIE) {
	        // [workaround] for Firefox
	        //  - protect FF Error: NS_ERROR_FAILURE: Failure
	        setTimeout(function () {
	          document.execCommand('styleWithCSS', 0, options.styleWithSpan);
	        }, 0);
	      }

	      // History
	      var history = new History(layoutInfo.editable());
	      layoutInfo.editable().data('NoteHistory', history);

	      // All editor status will be saved on editable with jquery's data
	      // for support multiple editor with singleton object.
	      layoutInfo.editable().data('callbacks', {
	        onInit: options.onInit,
	        onFocus: options.onFocus,
	        onBlur: options.onBlur,
	        onKeydown: options.onKeydown,
	        onKeyup: options.onKeyup,
	        onMousedown: options.onMousedown,
	        onEnter: options.onEnter,
	        onPaste: options.onPaste,
	        onBeforeCommand: options.onBeforeCommand,
	        onChange: options.onChange,
	        onImageUpload: options.onImageUpload,
	        onImageUploadError: options.onImageUploadError,
	        onMediaDelete : options.onMediaDelete
	      });

	      // Textarea: auto filling the code before form submit.
	      if (dom.isTextarea(list.head(layoutInfo.holder()))) {
	        layoutInfo.holder().closest('form').submit(function () {
	          layoutInfo.holder().val(layoutInfo.holder().code());
	        });
	      }
	    };

	    /**
	     * attach jquery custom event
	     *
	     * @param {Object} layoutInfo - layout Informations
	     */
	    this.attachCustomEvent = function (layoutInfo, options) {
	      var $holder = layoutInfo.holder();
	      var $editable = layoutInfo.editable();
	      var callbacks = $editable.data('callbacks');

	      $editable.focus(bindCustomEvent($holder, callbacks, 'focus'));
	      $editable.blur(bindCustomEvent($holder, callbacks, 'blur'));

	      $editable.keydown(function (event) {
	        if (event.keyCode === key.code.ENTER) {
	          bindCustomEvent($holder, callbacks, 'enter').call(this, event);
	        }
	        bindCustomEvent($holder, callbacks, 'keydown').call(this, event);
	      });
	      $editable.keyup(bindCustomEvent($holder, callbacks, 'keyup'));

	      $editable.on('mousedown', bindCustomEvent($holder, callbacks, 'mousedown'));
	      $editable.on('mouseup', bindCustomEvent($holder, callbacks, 'mouseup'));
	      $editable.on('scroll', bindCustomEvent($holder, callbacks, 'scroll'));

	      $editable.on('paste', bindCustomEvent($holder, callbacks, 'paste'));
	      
	      // [workaround] for old IE - IE8 don't have input events
	      //  - TODO check IE version
	      var changeEventName = agent.isMSIE ? 'DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted' : 'input';
	      $editable.on(changeEventName, function () {
	        bindCustomEvent($holder, callbacks, 'change')($editable.html(), $editable);
	      });

	      if (!options.airMode) {
	        layoutInfo.toolbar().click(bindCustomEvent($holder, callbacks, 'toolbar.click'));
	        layoutInfo.popover().click(bindCustomEvent($holder, callbacks, 'popover.click'));
	      }

	      // Textarea: auto filling the code before form submit.
	      if (dom.isTextarea(list.head($holder))) {
	        $holder.closest('form').submit(function (e) {
	          bindCustomEvent($holder, callbacks, 'submit').call(this, e, $holder.code());
	        });
	      }

	      // fire init event
	      bindCustomEvent($holder, callbacks, 'init')(layoutInfo);

	      // fire plugin init event
	      for (var i = 0, len = $.summernote.plugins.length; i < len; i++) {
	        if ($.isFunction($.summernote.plugins[i].init)) {
	          $.summernote.plugins[i].init(layoutInfo);
	        }
	      }
	    };
	      
	    this.detach = function (layoutInfo, options) {
	      layoutInfo.holder().off();
	      layoutInfo.editable().off();

	      layoutInfo.popover().off();
	      layoutInfo.handle().off();
	      layoutInfo.dialog().off();

	      if (!options.airMode) {
	        layoutInfo.dropzone().off();
	        layoutInfo.toolbar().off();
	        layoutInfo.statusbar().off();
	      }
	    };
	  };

	  /**
	   * @class Renderer
	   *
	   * renderer
	   *
	   * rendering toolbar and editable
	   */
	  var Renderer = function () {

	    /**
	     * bootstrap button template
	     * @private
	     * @param {String} label button name
	     * @param {Object} [options] button options
	     * @param {String} [options.event] data-event
	     * @param {String} [options.className] button's class name
	     * @param {String} [options.value] data-value
	     * @param {String} [options.title] button's title for popup
	     * @param {String} [options.dropdown] dropdown html
	     * @param {String} [options.hide] data-hide
	     */
	    var tplButton = function (label, options) {
	      var event = options.event;
	      var value = options.value;
	      var title = options.title;
	      var className = options.className;
	      var dropdown = options.dropdown;
	      var hide = options.hide;

	      return '<button type="button"' +
	                 ' class="btn btn-default btn-sm btn-small' +
	                   (className ? ' ' + className : '') +
	                   (dropdown ? ' dropdown-toggle' : '') +
	                 '"' +
	                 (dropdown ? ' data-toggle="dropdown"' : '') +
	                 (title ? ' title="' + title + '"' : '') +
	                 (event ? ' data-event="' + event + '"' : '') +
	                 (value ? ' data-value=\'' + value + '\'' : '') +
	                 (hide ? ' data-hide=\'' + hide + '\'' : '') +
	                 ' tabindex="-1">' +
	               label +
	               (dropdown ? ' <span class="caret"></span>' : '') +
	             '</button>' +
	             (dropdown || '');
	    };

	    /**
	     * bootstrap icon button template
	     * @private
	     * @param {String} iconClassName
	     * @param {Object} [options]
	     * @param {String} [options.event]
	     * @param {String} [options.value]
	     * @param {String} [options.title]
	     * @param {String} [options.dropdown]
	     */
	    var tplIconButton = function (iconClassName, options) {
	      var label = '<i class="' + iconClassName + '"></i>';
	      return tplButton(label, options);
	    };

	    /**
	     * bootstrap popover template
	     * @private
	     * @param {String} className
	     * @param {String} content
	     */
	    var tplPopover = function (className, content) {
	      var $popover = $('<div class="' + className + ' popover bottom in" style="display: none;">' +
	               '<div class="arrow"></div>' +
	               '<div class="popover-content">' +
	               '</div>' +
	             '</div>');
	      
	      $popover.find('.popover-content').append(content);
	      return $popover;
	    };

	    /**
	     * bootstrap dialog template
	     *
	     * @param {String} className
	     * @param {String} [title='']
	     * @param {String} body
	     * @param {String} [footer='']
	     */
	    var tplDialog = function (className, title, body, footer) {
	      return '<div class="' + className + ' modal" aria-hidden="false">' +
	               '<div class="modal-dialog">' +
	                 '<div class="modal-content">' +
	                   (title ?
	                   '<div class="modal-header">' +
	                     '<button type="button" class="close" aria-hidden="true" tabindex="-1">&times;</button>' +
	                     '<h4 class="modal-title">' + title + '</h4>' +
	                   '</div>' : ''
	                   ) +
	                   '<div class="modal-body">' + body + '</div>' +
	                   (footer ?
	                   '<div class="modal-footer">' + footer + '</div>' : ''
	                   ) +
	                 '</div>' +
	               '</div>' +
	             '</div>';
	    };

	    var tplButtonInfo = {
	      picture: function (lang, options) {
	        return tplIconButton(options.iconPrefix + 'picture-o', {
	          event: 'showImageDialog',
	          title: lang.image.image,
	          hide: true
	        });
	      },
	      link: function (lang, options) {
	        return tplIconButton(options.iconPrefix + 'link', {
	          event: 'showLinkDialog',
	          title: lang.link.link,
	          hide: true
	        });
	      },
	      table: function (lang, options) {
	        var dropdown = '<ul class="note-table dropdown-menu">' +
	                         '<div class="note-dimension-picker">' +
	                           '<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div>' +
	                           '<div class="note-dimension-picker-highlighted"></div>' +
	                           '<div class="note-dimension-picker-unhighlighted"></div>' +
	                         '</div>' +
	                         '<div class="note-dimension-display"> 1 x 1 </div>' +
	                       '</ul>';
	        return tplIconButton(options.iconPrefix + 'table', {
	          title: lang.table.table,
	          dropdown: dropdown
	        });
	      },
	      style: function (lang, options) {
	        var items = options.styleTags.reduce(function (memo, v) {
	          var label = lang.style[v === 'p' ? 'normal' : v];
	          return memo + '<li><a data-event="formatBlock" href="#" data-value="' + v + '">' +
	                   (
	                     (v === 'p' || v === 'pre') ? label :
	                     '<' + v + '>' + label + '</' + v + '>'
	                   ) +
	                 '</a></li>';
	        }, '');

	        return tplIconButton(options.iconPrefix + 'magic', {
	          title: lang.style.style,
	          dropdown: '<ul class="dropdown-menu">' + items + '</ul>'
	        });
	      },
	      fontname: function (lang, options) {
	        var realFontList = [];
	        var items = options.fontNames.reduce(function (memo, v) {
	          if (!agent.isFontInstalled(v) && options.fontNamesIgnoreCheck.indexOf(v) === -1) {
	            return memo;
	          }
	          realFontList.push(v);
	          return memo + '<li><a data-event="fontName" href="#" data-value="' + v + '" style="font-family:\'' + v + '\'">' +
	                          '<i class="' + options.iconPrefix + 'check"></i> ' + v +
	                        '</a></li>';
	        }, '');

	        var hasDefaultFont = agent.isFontInstalled(options.defaultFontName);
	        var defaultFontName = (hasDefaultFont) ? options.defaultFontName : realFontList[0];
	          
	        var label = '<span class="note-current-fontname">' +
	                        defaultFontName +
	                     '</span>';
	        return tplButton(label, {
	          title: lang.font.name,
	          dropdown: '<ul class="dropdown-menu note-check">' + items + '</ul>'
	        });
	      },
	      fontsize: function (lang, options) {
	        var items = options.fontSizes.reduce(function (memo, v) {
	          return memo + '<li><a data-event="fontSize" href="#" data-value="' + v + '">' +
	                          '<i class="fa fa-check"></i> ' + v +
	                        '</a></li>';
	        }, '');

	        var label = '<span class="note-current-fontsize">11</span>';
	        return tplButton(label, {
	          title: lang.font.size,
	          dropdown: '<ul class="dropdown-menu note-check">' + items + '</ul>'
	        });
	      },
	      color: function (lang, options) {
	        var colorButtonLabel = '<i class="' + options.iconPrefix + 'font" style="color:black;background-color:yellow;"></i>';
	        var colorButton = tplButton(colorButtonLabel, {
	          className: 'note-recent-color',
	          title: lang.color.recent,
	          event: 'color',
	          value: '{"backColor":"yellow"}'
	        });

	        var dropdown = '<ul class="dropdown-menu">' +
	                         '<li>' +
	                           '<div class="btn-group">' +
	                             '<div class="note-palette-title">' + lang.color.background + '</div>' +
	                             '<div class="note-color-reset" data-event="backColor"' +
	                               ' data-value="inherit" title="' + lang.color.transparent + '">' +
	                               lang.color.setTransparent +
	                             '</div>' +
	                             '<div class="note-color-palette" data-target-event="backColor"></div>' +
	                           '</div>' +
	                           '<div class="btn-group">' +
	                             '<div class="note-palette-title">' + lang.color.foreground + '</div>' +
	                             '<div class="note-color-reset" data-event="foreColor" data-value="inherit" title="' + lang.color.reset + '">' +
	                               lang.color.resetToDefault +
	                             '</div>' +
	                             '<div class="note-color-palette" data-target-event="foreColor"></div>' +
	                           '</div>' +
	                         '</li>' +
	                       '</ul>';

	        var moreButton = tplButton('', {
	          title: lang.color.more,
	          dropdown: dropdown
	        });

	        return colorButton + moreButton;
	      },
	      bold: function (lang, options) {
	        return tplIconButton(options.iconPrefix + 'bold', {
	          event: 'bold',
	          title: lang.font.bold
	        });
	      },
	      italic: function (lang, options) {
	        return tplIconButton(options.iconPrefix + 'italic', {
	          event: 'italic',
	          title: lang.font.italic
	        });
	      },
	      underline: function (lang, options) {
	        return tplIconButton(options.iconPrefix + 'underline', {
	          event: 'underline',
	          title: lang.font.underline
	        });
	      },
	      strikethrough: function (lang) {
	        return tplIconButton('fa fa-strikethrough', {
	          event: 'strikethrough',
	          title: lang.font.strikethrough
	        });
	      },
	      superscript: function (lang) {
	        return tplIconButton('fa fa-superscript', {
	          event: 'superscript',
	          title: lang.font.superscript
	        });
	      },
	      subscript: function (lang) {
	        return tplIconButton('fa fa-subscript', {
	          event: 'subscript',
	          title: lang.font.subscript
	        });
	      },
	      clear: function (lang, options) {
	        return tplIconButton(options.iconPrefix + 'eraser', {
	          event: 'removeFormat',
	          title: lang.font.clear
	        });
	      },
	      ul: function (lang, options) {
	        return tplIconButton(options.iconPrefix + 'list-ul', {
	          event: 'insertUnorderedList',
	          title: lang.lists.unordered
	        });
	      },
	      ol: function (lang, options) {
	        return tplIconButton(options.iconPrefix + 'list-ol', {
	          event: 'insertOrderedList',
	          title: lang.lists.ordered
	        });
	      },
	      paragraph: function (lang, options) {
	        var leftButton = tplIconButton(options.iconPrefix + 'align-left', {
	          title: lang.paragraph.left,
	          event: 'justifyLeft'
	        });
	        var centerButton = tplIconButton(options.iconPrefix + 'align-center', {
	          title: lang.paragraph.center,
	          event: 'justifyCenter'
	        });
	        var rightButton = tplIconButton(options.iconPrefix + 'align-right', {
	          title: lang.paragraph.right,
	          event: 'justifyRight'
	        });
	        var justifyButton = tplIconButton(options.iconPrefix + 'align-justify', {
	          title: lang.paragraph.justify,
	          event: 'justifyFull'
	        });

	        var outdentButton = tplIconButton(options.iconPrefix + 'outdent', {
	          title: lang.paragraph.outdent,
	          event: 'outdent'
	        });
	        var indentButton = tplIconButton(options.iconPrefix + 'indent', {
	          title: lang.paragraph.indent,
	          event: 'indent'
	        });

	        var dropdown = '<div class="dropdown-menu">' +
	                         '<div class="note-align btn-group">' +
	                           leftButton + centerButton + rightButton + justifyButton +
	                         '</div>' +
	                         '<div class="note-list btn-group">' +
	                           indentButton + outdentButton +
	                         '</div>' +
	                       '</div>';

	        return tplIconButton(options.iconPrefix + 'align-left', {
	          title: lang.paragraph.paragraph,
	          dropdown: dropdown
	        });
	      },
	      height: function (lang, options) {
	        var items = options.lineHeights.reduce(function (memo, v) {
	          return memo + '<li><a data-event="lineHeight" href="#" data-value="' + parseFloat(v) + '">' +
	                          '<i class="' + options.iconPrefix + 'check"></i> ' + v +
	                        '</a></li>';
	        }, '');

	        return tplIconButton(options.iconPrefix + 'text-height', {
	          title: lang.font.height,
	          dropdown: '<ul class="dropdown-menu note-check">' + items + '</ul>'
	        });

	      },
	      help: function (lang, options) {
	        return tplIconButton(options.iconPrefix + 'question', {
	          event: 'showHelpDialog',
	          title: lang.options.help,
	          hide: true
	        });
	      },
	      fullscreen: function (lang, options) {
	        return tplIconButton(options.iconPrefix + 'arrows-alt', {
	          event: 'fullscreen',
	          title: lang.options.fullscreen
	        });
	      },
	      codeview: function (lang, options) {
	        return tplIconButton(options.iconPrefix + 'code', {
	          event: 'codeview',
	          title: lang.options.codeview
	        });
	      },
	      undo: function (lang, options) {
	        return tplIconButton(options.iconPrefix + 'undo', {
	          event: 'undo',
	          title: lang.history.undo
	        });
	      },
	      redo: function (lang, options) {
	        return tplIconButton(options.iconPrefix + 'repeat', {
	          event: 'redo',
	          title: lang.history.redo
	        });
	      },
	      hr: function (lang, options) {
	        return tplIconButton(options.iconPrefix + 'minus', {
	          event: 'insertHorizontalRule',
	          title: lang.hr.insert
	        });
	      }
	    };

	    var tplPopovers = function (lang, options) {
	      var tplLinkPopover = function () {
	        var linkButton = tplIconButton(options.iconPrefix + 'edit', {
	          title: lang.link.edit,
	          event: 'showLinkDialog',
	          hide: true
	        });
	        var unlinkButton = tplIconButton(options.iconPrefix + 'unlink', {
	          title: lang.link.unlink,
	          event: 'unlink'
	        });
	        var content = '<a href="http://www.google.com" target="_blank">www.google.com</a>&nbsp;&nbsp;' +
	                      '<div class="note-insert btn-group">' +
	                        linkButton + unlinkButton +
	                      '</div>';
	        return tplPopover('note-link-popover', content);
	      };

	      var tplImagePopover = function () {
	        var fullButton = tplButton('<span class="note-fontsize-10">100%</span>', {
	          title: lang.image.resizeFull,
	          event: 'resize',
	          value: '1'
	        });
	        var halfButton = tplButton('<span class="note-fontsize-10">50%</span>', {
	          title: lang.image.resizeHalf,
	          event: 'resize',
	          value: '0.5'
	        });
	        var quarterButton = tplButton('<span class="note-fontsize-10">25%</span>', {
	          title: lang.image.resizeQuarter,
	          event: 'resize',
	          value: '0.25'
	        });

	        var leftButton = tplIconButton(options.iconPrefix + 'align-left', {
	          title: lang.image.floatLeft,
	          event: 'floatMe',
	          value: 'left'
	        });
	        var rightButton = tplIconButton(options.iconPrefix + 'align-right', {
	          title: lang.image.floatRight,
	          event: 'floatMe',
	          value: 'right'
	        });
	        var justifyButton = tplIconButton(options.iconPrefix + 'align-justify', {
	          title: lang.image.floatNone,
	          event: 'floatMe',
	          value: 'none'
	        });

	        var roundedButton = tplIconButton(options.iconPrefix + 'square', {
	          title: lang.image.shapeRounded,
	          event: 'imageShape',
	          value: 'img-rounded'
	        });
	        var circleButton = tplIconButton(options.iconPrefix + 'circle-o', {
	          title: lang.image.shapeCircle,
	          event: 'imageShape',
	          value: 'img-circle'
	        });
	        var thumbnailButton = tplIconButton(options.iconPrefix + 'picture-o', {
	          title: lang.image.shapeThumbnail,
	          event: 'imageShape',
	          value: 'img-thumbnail'
	        });
	        var noneButton = tplIconButton(options.iconPrefix + 'times', {
	          title: lang.image.shapeNone,
	          event: 'imageShape',
	          value: ''
	        });

	        var removeButton = tplIconButton(options.iconPrefix + 'trash-o', {
	          title: lang.image.remove,
	          event: 'removeMedia',
	          value: 'none'
	        });

	        var content = '<div class="btn-group">' + fullButton + halfButton + quarterButton + '</div>' +
	                      '<div class="btn-group">' + leftButton + rightButton + justifyButton + '</div>' +
	                      '<div class="btn-group">' + roundedButton + circleButton + thumbnailButton + noneButton + '</div>' +
	                      '<div class="btn-group">' + removeButton + '</div>';
	        return tplPopover('note-image-popover', content);
	      };

	      var tplAirPopover = function () {
	        var $content = $('<div />');
	        for (var idx = 0, len = options.airPopover.length; idx < len; idx ++) {
	          var group = options.airPopover[idx];
	          
	          var $group = $('<div class="note-' + group[0] + ' btn-group">');
	          for (var i = 0, lenGroup = group[1].length; i < lenGroup; i++) {
	            var $button = $(tplButtonInfo[group[1][i]](lang, options));

	            $button.attr('data-name', group[1][i]);
	            
	            $group.append($button);
	          }
	          $content.append($group);
	        }

	        return tplPopover('note-air-popover', $content.children());
	      };

	      var $notePopover = $('<div class="note-popover" />');
	      
	      $notePopover.append(tplLinkPopover());
	      $notePopover.append(tplImagePopover());
	      
	      if (options.airMode) {
	        $notePopover.append(tplAirPopover());
	      }
	      
	      return $notePopover;
	    };

	    var tplHandles = function () {
	      return '<div class="note-handle">' +
	               '<div class="note-control-selection">' +
	                 '<div class="note-control-selection-bg"></div>' +
	                 '<div class="note-control-holder note-control-nw"></div>' +
	                 '<div class="note-control-holder note-control-ne"></div>' +
	                 '<div class="note-control-holder note-control-sw"></div>' +
	                 '<div class="note-control-sizing note-control-se"></div>' +
	                 '<div class="note-control-selection-info"></div>' +
	               '</div>' +
	             '</div>';
	    };

	    /**
	     * shortcut table template
	     * @param {String} title
	     * @param {String} body
	     */
	    var tplShortcut = function (title, keys) {
	      var keyClass = 'note-shortcut-col col-xs-6 note-shortcut-';
	      var body = [];

	      for (var i in keys) {
	        if (keys.hasOwnProperty(i)) {
	          body.push(
	            '<div class="' + keyClass + 'key">' + keys[i].kbd + '</div>' +
	            '<div class="' + keyClass + 'name">' + keys[i].text + '</div>'
	            );
	        }
	      }

	      return '<div class="note-shortcut-row row"><div class="' + keyClass + 'title col-xs-offset-6">' + title + '</div></div>' +
	             '<div class="note-shortcut-row row">' + body.join('</div><div class="note-shortcut-row row">') + '</div>';
	    };

	    var tplShortcutText = function (lang) {
	      var keys = [
	        { kbd: '⌘ + B', text: lang.font.bold },
	        { kbd: '⌘ + I', text: lang.font.italic },
	        { kbd: '⌘ + U', text: lang.font.underline },
	        { kbd: '⌘ + \\', text: lang.font.clear }
	      ];

	      return tplShortcut(lang.shortcut.textFormatting, keys);
	    };

	    var tplShortcutAction = function (lang) {
	      var keys = [
	        { kbd: '⌘ + Z', text: lang.history.undo },
	        { kbd: '⌘ + ⇧ + Z', text: lang.history.redo },
	        { kbd: '⌘ + ]', text: lang.paragraph.indent },
	        { kbd: '⌘ + [', text: lang.paragraph.outdent },
	        { kbd: '⌘ + ENTER', text: lang.hr.insert }
	      ];

	      return tplShortcut(lang.shortcut.action, keys);
	    };

	    var tplShortcutPara = function (lang) {
	      var keys = [
	        { kbd: '⌘ + ⇧ + L', text: lang.paragraph.left },
	        { kbd: '⌘ + ⇧ + E', text: lang.paragraph.center },
	        { kbd: '⌘ + ⇧ + R', text: lang.paragraph.right },
	        { kbd: '⌘ + ⇧ + J', text: lang.paragraph.justify },
	        { kbd: '⌘ + ⇧ + NUM7', text: lang.lists.ordered },
	        { kbd: '⌘ + ⇧ + NUM8', text: lang.lists.unordered }
	      ];

	      return tplShortcut(lang.shortcut.paragraphFormatting, keys);
	    };

	    var tplShortcutStyle = function (lang) {
	      var keys = [
	        { kbd: '⌘ + NUM0', text: lang.style.normal },
	        { kbd: '⌘ + NUM1', text: lang.style.h1 },
	        { kbd: '⌘ + NUM2', text: lang.style.h2 },
	        { kbd: '⌘ + NUM3', text: lang.style.h3 },
	        { kbd: '⌘ + NUM4', text: lang.style.h4 },
	        { kbd: '⌘ + NUM5', text: lang.style.h5 },
	        { kbd: '⌘ + NUM6', text: lang.style.h6 }
	      ];

	      return tplShortcut(lang.shortcut.documentStyle, keys);
	    };

	    var tplExtraShortcuts = function (lang, options) {
	      var extraKeys = options.extraKeys;
	      var keys = [];

	      for (var key in extraKeys) {
	        if (extraKeys.hasOwnProperty(key)) {
	          keys.push({ kbd: key, text: extraKeys[key] });
	        }
	      }

	      return tplShortcut(lang.shortcut.extraKeys, keys);
	    };

	    var tplShortcutTable = function (lang, options) {
	      var colClass = 'class="note-shortcut note-shortcut-col col-sm-6 col-xs-12"';
	      var template = [
	        '<div ' + colClass + '>' + tplShortcutAction(lang, options) + '</div>' +
	        '<div ' + colClass + '>' + tplShortcutText(lang, options) + '</div>',
	        '<div ' + colClass + '>' + tplShortcutStyle(lang, options) + '</div>' +
	        '<div ' + colClass + '>' + tplShortcutPara(lang, options) + '</div>'
	      ];

	      if (options.extraKeys) {
	        template.push('<div ' + colClass + '>' + tplExtraShortcuts(lang, options) + '</div>');
	      }

	      return '<div class="note-shortcut-row row">' +
	               template.join('</div><div class="note-shortcut-row row">') +
	             '</div>';
	    };

	    var replaceMacKeys = function (sHtml) {
	      return sHtml.replace(/⌘/g, 'Ctrl').replace(/⇧/g, 'Shift');
	    };

	    var tplDialogInfo = {
	      image: function (lang, options) {
	        var imageLimitation = '';
	        if (options.maximumImageFileSize) {
	          var unit = Math.floor(Math.log(options.maximumImageFileSize) / Math.log(1024));
	          var readableSize = (options.maximumImageFileSize / Math.pow(1024, unit)).toFixed(2) * 1 +
	                             ' ' + ' KMGTP'[unit] + 'B';
	          imageLimitation = '<small>' + lang.image.maximumFileSize + ' : ' + readableSize + '</small>';
	        }

	        var body = '<div class="form-group row-fluid note-group-select-from-files">' +
	                     '<label>' + lang.image.selectFromFiles + '</label>' +
	                     '<input class="note-image-input" type="file" name="files" accept="image/*" multiple="multiple" />' +
	                     imageLimitation +
	                   '</div>' +
	                   '<div class="form-group row-fluid">' +
	                     '<label>' + lang.image.url + '</label>' +
	                     '<input class="note-image-url form-control span12" type="text" />' +
	                   '</div>';
	        var footer = '<button href="#" class="btn btn-primary note-image-btn disabled" disabled>' + lang.image.insert + '</button>';
	        return tplDialog('note-image-dialog', lang.image.insert, body, footer);
	      },

	      link: function (lang, options) {
	        var body = '<div class="form-group row-fluid">' +
	                     '<label>' + lang.link.textToDisplay + '</label>' +
	                     '<input class="note-link-text form-control span12" type="text" />' +
	                   '</div>' +
	                   '<div class="form-group row-fluid">' +
	                     '<label>' + lang.link.url + '</label>' +
	                     '<input class="note-link-url form-control span12" type="text" />' +
	                   '</div>' +
	                   (!options.disableLinkTarget ?
	                     '<div class="checkbox">' +
	                       '<label>' + '<input type="checkbox" checked> ' +
	                         lang.link.openInNewWindow +
	                       '</label>' +
	                     '</div>' : ''
	                   );
	        var footer = '<button href="#" class="btn btn-primary note-link-btn disabled" disabled>' + lang.link.insert + '</button>';
	        return tplDialog('note-link-dialog', lang.link.insert, body, footer);
	      },

	      help: function (lang, options) {
	        var body = '<a class="modal-close pull-right" aria-hidden="true" tabindex="-1">' + lang.shortcut.close + '</a>' +
	                   '<div class="title">' + lang.shortcut.shortcuts + '</div>' +
	                   (agent.isMac ? tplShortcutTable(lang, options) : replaceMacKeys(tplShortcutTable(lang, options))) +
	                   '<p class="text-center">' +
	                     '<a href="//summernote.org/" target="_blank">Summernote 0.6.7</a> · ' +
	                     '<a href="//github.com/summernote/summernote" target="_blank">Project</a> · ' +
	                     '<a href="//github.com/summernote/summernote/issues" target="_blank">Issues</a>' +
	                   '</p>';
	        return tplDialog('note-help-dialog', '', body, '');
	      }
	    };

	    var tplDialogs = function (lang, options) {
	      var dialogs = '';

	      $.each(tplDialogInfo, function (idx, tplDialog) {
	        dialogs += tplDialog(lang, options);
	      });

	      return '<div class="note-dialog">' + dialogs + '</div>';
	    };

	    var tplStatusbar = function () {
	      return '<div class="note-resizebar">' +
	               '<div class="note-icon-bar"></div>' +
	               '<div class="note-icon-bar"></div>' +
	               '<div class="note-icon-bar"></div>' +
	             '</div>';
	    };

	    var representShortcut = function (str) {
	      if (agent.isMac) {
	        str = str.replace('CMD', '⌘').replace('SHIFT', '⇧');
	      }

	      return str.replace('BACKSLASH', '\\')
	                .replace('SLASH', '/')
	                .replace('LEFTBRACKET', '[')
	                .replace('RIGHTBRACKET', ']');
	    };

	    /**
	     * createTooltip
	     *
	     * @param {jQuery} $container
	     * @param {Object} keyMap
	     * @param {String} [sPlacement]
	     */
	    var createTooltip = function ($container, keyMap, sPlacement) {
	      var invertedKeyMap = func.invertObject(keyMap);
	      var $buttons = $container.find('button');

	      $buttons.each(function (i, elBtn) {
	        var $btn = $(elBtn);
	        var sShortcut = invertedKeyMap[$btn.data('event')];
	        if (sShortcut) {
	          $btn.attr('title', function (i, v) {
	            return v + ' (' + representShortcut(sShortcut) + ')';
	          });
	        }
	      // bootstrap tooltip on btn-group bug
	      // https://github.com/twbs/bootstrap/issues/5687
	      }).tooltip({
	        container: 'body',
	        trigger: 'hover',
	        placement: sPlacement || 'top'
	      }).on('click', function () {
	        $(this).tooltip('hide');
	      });
	    };

	    // createPalette
	    var createPalette = function ($container, options) {
	      var colorInfo = options.colors;
	      $container.find('.note-color-palette').each(function () {
	        var $palette = $(this), eventName = $palette.attr('data-target-event');
	        var paletteContents = [];
	        for (var row = 0, lenRow = colorInfo.length; row < lenRow; row++) {
	          var colors = colorInfo[row];
	          var buttons = [];
	          for (var col = 0, lenCol = colors.length; col < lenCol; col++) {
	            var color = colors[col];
	            buttons.push(['<button type="button" class="note-color-btn" style="background-color:', color,
	                           ';" data-event="', eventName,
	                           '" data-value="', color,
	                           '" title="', color,
	                           '" data-toggle="button" tabindex="-1"></button>'].join(''));
	          }
	          paletteContents.push('<div class="note-color-row">' + buttons.join('') + '</div>');
	        }
	        $palette.html(paletteContents.join(''));
	      });
	    };

	    /**
	     * create summernote layout (air mode)
	     *
	     * @param {jQuery} $holder
	     * @param {Object} options
	     */
	    this.createLayoutByAirMode = function ($holder, options) {
	      var langInfo = options.langInfo;
	      var keyMap = options.keyMap[agent.isMac ? 'mac' : 'pc'];
	      var id = func.uniqueId();

	      $holder.addClass('note-air-editor note-editable');
	      $holder.attr({
	        'id': 'note-editor-' + id,
	        'contentEditable': true
	      });

	      var body = document.body;

	      // create Popover
	      var $popover = $(tplPopovers(langInfo, options));
	      $popover.addClass('note-air-layout');
	      $popover.attr('id', 'note-popover-' + id);
	      $popover.appendTo(body);
	      createTooltip($popover, keyMap);
	      createPalette($popover, options);

	      // create Handle
	      var $handle = $(tplHandles());
	      $handle.addClass('note-air-layout');
	      $handle.attr('id', 'note-handle-' + id);
	      $handle.appendTo(body);

	      // create Dialog
	      var $dialog = $(tplDialogs(langInfo, options));
	      $dialog.addClass('note-air-layout');
	      $dialog.attr('id', 'note-dialog-' + id);
	      $dialog.find('button.close, a.modal-close').click(function () {
	        $(this).closest('.modal').modal('hide');
	      });
	      $dialog.appendTo(body);
	    };

	    /**
	     * create summernote layout (normal mode)
	     *
	     * @param {jQuery} $holder
	     * @param {Object} options
	     */
	    this.createLayoutByFrame = function ($holder, options) {
	      var langInfo = options.langInfo;

	      //01. create Editor
	      var $editor = $('<div class="note-editor"></div>');
	      if (options.width) {
	        $editor.width(options.width);
	      }

	      //02. statusbar (resizebar)
	      if (options.height > 0) {
	        $('<div class="note-statusbar">' + (options.disableResizeEditor ? '' : tplStatusbar()) + '</div>').prependTo($editor);
	      }

	      //03. create Editable
	      var isContentEditable = !$holder.is(':disabled');
	      var $editable = $('<div class="note-editable" contentEditable="' + isContentEditable + '"></div>')
	          .prependTo($editor);
	      if (options.height) {
	        $editable.height(options.height);
	      }
	      if (options.direction) {
	        $editable.attr('dir', options.direction);
	      }
	      var placeholder = $holder.attr('placeholder') || options.placeholder;
	      if (placeholder) {
	        $editable.attr('data-placeholder', placeholder);
	      }

	      $editable.html(dom.html($holder));

	      //031. create codable
	      $('<textarea class="note-codable"></textarea>').prependTo($editor);

	      //04. create Toolbar
	      var $toolbar = $('<div class="note-toolbar btn-toolbar" />');
	      for (var idx = 0, len = options.toolbar.length; idx < len; idx ++) {
	        var groupName = options.toolbar[idx][0];
	        var groupButtons = options.toolbar[idx][1];

	        var $group = $('<div class="note-' + groupName + ' btn-group" />');
	        for (var i = 0, btnLength = groupButtons.length; i < btnLength; i++) {
	          var buttonInfo = tplButtonInfo[groupButtons[i]];
	          // continue creating toolbar even if a button doesn't exist
	          if (!$.isFunction(buttonInfo)) { continue; }

	          var $button = $(buttonInfo(langInfo, options));
	          $button.attr('data-name', groupButtons[i]);  // set button's alias, becuase to get button element from $toolbar
	          $group.append($button);
	        }
	        $toolbar.append($group);
	      }
	      
	      $toolbar.prependTo($editor);
	      var keyMap = options.keyMap[agent.isMac ? 'mac' : 'pc'];
	      createPalette($toolbar, options);
	      createTooltip($toolbar, keyMap, 'bottom');

	      //05. create Popover
	      var $popover = $(tplPopovers(langInfo, options)).prependTo($editor);
	      createPalette($popover, options);
	      createTooltip($popover, keyMap);

	      //06. handle(control selection, ...)
	      $(tplHandles()).prependTo($editor);

	      //07. create Dialog
	      var $dialog = $(tplDialogs(langInfo, options)).prependTo($editor);
	      $dialog.find('button.close, a.modal-close').click(function () {
	        $(this).closest('.modal').modal('hide');
	      });

	      //08. create Dropzone
	      $('<div class="note-dropzone"><div class="note-dropzone-message"></div></div>').prependTo($editor);

	      //09. Editor/Holder switch
	      $editor.insertAfter($holder);
	      $holder.hide();
	    };

	    this.hasNoteEditor = function ($holder) {
	      return this.noteEditorFromHolder($holder).length > 0;
	    };

	    this.noteEditorFromHolder = function ($holder) {
	      if ($holder.hasClass('note-air-editor')) {
	        return $holder;
	      } else if ($holder.next().hasClass('note-editor')) {
	        return $holder.next();
	      } else {
	        return $();
	      }
	    };

	    /**
	     * create summernote layout
	     *
	     * @param {jQuery} $holder
	     * @param {Object} options
	     */
	    this.createLayout = function ($holder, options) {
	      if (options.airMode) {
	        this.createLayoutByAirMode($holder, options);
	      } else {
	        this.createLayoutByFrame($holder, options);
	      }
	    };

	    /**
	     * returns layoutInfo from holder
	     *
	     * @param {jQuery} $holder - placeholder
	     * @return {Object}
	     */
	    this.layoutInfoFromHolder = function ($holder) {
	      var $editor = this.noteEditorFromHolder($holder);
	      if (!$editor.length) {
	        return;
	      }

	      // connect $holder to $editor
	      $editor.data('holder', $holder);

	      return dom.buildLayoutInfo($editor);
	    };

	    /**
	     * removeLayout
	     *
	     * @param {jQuery} $holder - placeholder
	     * @param {Object} layoutInfo
	     * @param {Object} options
	     *
	     */
	    this.removeLayout = function ($holder, layoutInfo, options) {
	      if (options.airMode) {
	        $holder.removeClass('note-air-editor note-editable')
	               .removeAttr('id contentEditable');

	        layoutInfo.popover().remove();
	        layoutInfo.handle().remove();
	        layoutInfo.dialog().remove();
	      } else {
	        $holder.html(layoutInfo.editable().html());

	        layoutInfo.editor().remove();
	        $holder.show();
	      }
	    };

	    /**
	     *
	     * @return {Object}
	     * @return {function(label, options=):string} return.button {@link #tplButton function to make text button}
	     * @return {function(iconClass, options=):string} return.iconButton {@link #tplIconButton function to make icon button}
	     * @return {function(className, title=, body=, footer=):string} return.dialog {@link #tplDialog function to make dialog}
	     */
	    this.getTemplate = function () {
	      return {
	        button: tplButton,
	        iconButton: tplIconButton,
	        dialog: tplDialog
	      };
	    };

	    /**
	     * add button information
	     *
	     * @param {String} name button name
	     * @param {Function} buttonInfo function to make button, reference to {@link #tplButton},{@link #tplIconButton}
	     */
	    this.addButtonInfo = function (name, buttonInfo) {
	      tplButtonInfo[name] = buttonInfo;
	    };

	    /**
	     *
	     * @param {String} name
	     * @param {Function} dialogInfo function to make dialog, reference to {@link #tplDialog}
	     */
	    this.addDialogInfo = function (name, dialogInfo) {
	      tplDialogInfo[name] = dialogInfo;
	    };
	  };


	  // jQuery namespace for summernote
	  /**
	   * @class $.summernote 
	   * 
	   * summernote attribute  
	   * 
	   * @mixin defaults
	   * @singleton  
	   * 
	   */
	  $.summernote = $.summernote || {};

	  // extends default settings
	  //  - $.summernote.version
	  //  - $.summernote.options
	  //  - $.summernote.lang
	  $.extend($.summernote, defaults);

	  var renderer = new Renderer();
	  var eventHandler = new EventHandler();

	  $.extend($.summernote, {
	    /** @property {Renderer} */
	    renderer: renderer,
	    /** @property {EventHandler} */
	    eventHandler: eventHandler,
	    /** 
	     * @property {Object} core 
	     * @property {core.agent} core.agent 
	     * @property {core.dom} core.dom
	     * @property {core.range} core.range 
	     */
	    core: {
	      agent: agent,
	      list : list,
	      dom: dom,
	      range: range
	    },
	    /** 
	     * @property {Object} 
	     * pluginEvents event list for plugins
	     * event has name and callback function.
	     * 
	     * ``` 
	     * $.summernote.addPlugin({
	     *     events : {
	     *          'hello' : function(layoutInfo, value, $target) {
	     *              console.log('event name is hello, value is ' + value );
	     *          }
	     *     }     
	     * })
	     * ```
	     * 
	     * * event name is data-event property.
	     * * layoutInfo is a summernote layout information.
	     * * value is data-value property.
	     */
	    pluginEvents: {},

	    plugins : []
	  });

	  /**
	   * @method addPlugin
	   *
	   * add Plugin in Summernote 
	   * 
	   * Summernote can make a own plugin.
	   *
	   * ### Define plugin
	   * ```
	   * // get template function  
	   * var tmpl = $.summernote.renderer.getTemplate();
	   * 
	   * // add a button   
	   * $.summernote.addPlugin({
	   *     buttons : {
	   *        // "hello"  is button's namespace.      
	   *        "hello" : function(lang, options) {
	   *            // make icon button by template function          
	   *            return tmpl.iconButton('fa fa-header', {
	   *                // callback function name when button clicked 
	   *                event : 'hello',
	   *                // set data-value property                 
	   *                value : 'hello',                
	   *                hide : true
	   *            });           
	   *        }
	   *     
	   *     }, 
	   *     
	   *     events : {
	   *        "hello" : function(layoutInfo, value) {
	   *            // here is event code 
	   *        }
	   *     }     
	   * });
	   * ``` 
	   * ### Use a plugin in toolbar
	   * 
	   * ``` 
	   *    $("#editor").summernote({
	   *    ...
	   *    toolbar : [
	   *        // display hello plugin in toolbar     
	   *        ['group', [ 'hello' ]]
	   *    ]
	   *    ...    
	   *    });
	   * ```
	   *  
	   *  
	   * @param {Object} plugin
	   * @param {Object} [plugin.buttons] define plugin button. for detail, see to Renderer.addButtonInfo
	   * @param {Object} [plugin.dialogs] define plugin dialog. for detail, see to Renderer.addDialogInfo
	   * @param {Object} [plugin.events] add event in $.summernote.pluginEvents 
	   * @param {Object} [plugin.langs] update $.summernote.lang
	   * @param {Object} [plugin.options] update $.summernote.options
	   */
	  $.summernote.addPlugin = function (plugin) {

	    // save plugin list
	    $.summernote.plugins.push(plugin);

	    if (plugin.buttons) {
	      $.each(plugin.buttons, function (name, button) {
	        renderer.addButtonInfo(name, button);
	      });
	    }

	    if (plugin.dialogs) {
	      $.each(plugin.dialogs, function (name, dialog) {
	        renderer.addDialogInfo(name, dialog);
	      });
	    }

	    if (plugin.events) {
	      $.each(plugin.events, function (name, event) {
	        $.summernote.pluginEvents[name] = event;
	      });
	    }

	    if (plugin.langs) {
	      $.each(plugin.langs, function (locale, lang) {
	        if ($.summernote.lang[locale]) {
	          $.extend($.summernote.lang[locale], lang);
	        }
	      });
	    }

	    if (plugin.options) {
	      $.extend($.summernote.options, plugin.options);
	    }
	  };

	  /*
	   * extend $.fn
	   */
	  $.fn.extend({
	    /**
	     * @method
	     * Initialize summernote
	     *  - create editor layout and attach Mouse and keyboard events.
	     * 
	     * ```
	     * $("#summernote").summernote( { options ..} );
	     * ```
	     *   
	     * @member $.fn
	     * @param {Object|String} options reference to $.summernote.options
	     * @return {this}
	     */
	    summernote: function () {
	      // check first argument's type
	      //  - {String}: External API call {{module}}.{{method}}
	      //  - {Object}: init options
	      var type = $.type(list.head(arguments));
	      var isExternalAPICalled = type === 'string';
	      var hasInitOptions = type === 'object';

	      // extend default options with custom user options
	      var options = hasInitOptions ? list.head(arguments) : {};

	      options = $.extend({}, $.summernote.options, options);

	      // Include langInfo in options for later use, e.g. for image drag-n-drop
	      // Setup language info with en-US as default
	      options.langInfo = $.extend(true, {}, $.summernote.lang['en-US'], $.summernote.lang[options.lang]);

	      // override plugin options
	      if (!isExternalAPICalled && hasInitOptions) {
	        for (var i = 0, len = $.summernote.plugins.length; i < len; i++) {
	          var plugin = $.summernote.plugins[i];

	          if (options.plugin[plugin.name]) {
	            $.summernote.plugins[i] = $.extend(true, plugin, options.plugin[plugin.name]);
	          }
	        }
	      }

	      this.each(function (idx, holder) {
	        var $holder = $(holder);

	        // if layout isn't created yet, createLayout and attach events
	        if (!renderer.hasNoteEditor($holder)) {
	          renderer.createLayout($holder, options);

	          var layoutInfo = renderer.layoutInfoFromHolder($holder);
	          $holder.data('layoutInfo', layoutInfo);

	          eventHandler.attach(layoutInfo, options);
	          eventHandler.attachCustomEvent(layoutInfo, options);

	        }
	      });

	      var $first = this.first();
	      if ($first.length) {
	        var layoutInfo = renderer.layoutInfoFromHolder($first);

	        // external API
	        if (isExternalAPICalled) {
	          var moduleAndMethod = list.head(list.from(arguments));
	          var args = list.tail(list.from(arguments));

	          // TODO now external API only works for editor
	          var params = [moduleAndMethod, layoutInfo.editable()].concat(args);
	          return eventHandler.invoke.apply(eventHandler, params);
	        } else if (options.focus) {
	          // focus on first editable element for initialize editor
	          layoutInfo.editable().focus();
	        }
	      }

	      return this;
	    },

	    /**
	     * @method 
	     * 
	     * get the HTML contents of note or set the HTML contents of note.
	     *
	     * * get contents 
	     * ```
	     * var content = $("#summernote").code();
	     * ```
	     * * set contents 
	     *
	     * ```
	     * $("#summernote").code(html);
	     * ```
	     *
	     * @member $.fn 
	     * @param {String} [html] - HTML contents(optional, set)
	     * @return {this|String} - context(set) or HTML contents of note(get).
	     */
	    code: function (html) {
	      // get the HTML contents of note
	      if (html === undefined) {
	        var $holder = this.first();
	        if (!$holder.length) {
	          return;
	        }

	        var layoutInfo = renderer.layoutInfoFromHolder($holder);
	        var $editable = layoutInfo && layoutInfo.editable();

	        if ($editable && $editable.length) {
	          var isCodeview = eventHandler.invoke('codeview.isActivated', layoutInfo);
	          eventHandler.invoke('codeview.sync', layoutInfo);
	          return isCodeview ? layoutInfo.codable().val() :
	                              layoutInfo.editable().html();
	        }
	        return dom.value($holder);
	      }

	      // set the HTML contents of note
	      this.each(function (i, holder) {
	        var layoutInfo = renderer.layoutInfoFromHolder($(holder));
	        var $editable = layoutInfo && layoutInfo.editable();
	        if ($editable) {
	          $editable.html(html);
	        }
	      });

	      return this;
	    },

	    /**
	     * @method
	     * 
	     * destroy Editor Layout and detach Key and Mouse Event
	     *
	     * @member $.fn
	     * @return {this}
	     */
	    destroy: function () {
	      this.each(function (idx, holder) {
	        var $holder = $(holder);

	        if (!renderer.hasNoteEditor($holder)) {
	          return;
	        }

	        var info = renderer.layoutInfoFromHolder($holder);
	        var options = info.editor().data('options');

	        eventHandler.detach(info, options);
	        renderer.removeLayout($holder, info, options);
	      });

	      return this;
	    }
	  });
	}));


/***/ },
/* 22 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Annotator) {/*
	 * jQuery Plugin: Tokenizing Autocomplete Text Entry
	 * Version 1.6.0
	 *
	 * Copyright (c) 2009 James Smith (http://loopj.com)
	 * Licensed jointly under the GPL and MIT licenses,
	 * choose which one suits your project best!
	 *
	 */

	(function ($) {
	// Default settings
	var DEFAULT_SETTINGS = {
	    // Search settings
	    method: "GET",
	    contentType: "json",
	    queryParam: "q",
	    searchDelay: 300,
	    minChars: 1,
	    propertyToSearch: "name",
	    jsonContainer: null,

	    // Display settings
	    hintText: "Type in a search term",
	    noResultsText: "Not Found. Hit ENTER to add a personal tag.",
	    searchingText: "Searching...",
	    deleteText: "&times;",
	    animateDropdown: true,

	    // Tokenization settings
	    tokenLimit: null,
	    tokenDelimiter: ",",
	    preventDuplicates: true,

	    // Output settings
	    tokenValue: "id",

	    // Prepopulation settings
	    prePopulate: null,
	    processPrePopulate: false,

	    // Manipulation settings
	    idPrefix: "token-input-",

	    // Formatters
	    resultsFormatter: function(item){ return "<li>" + item[this.propertyToSearch]+ "</li>" },
	    tokenFormatter: function(item) { return "<li><p>" + item[this.propertyToSearch] + "</p></li>" },

	    // Callbacks
	    onResult: null,
	    onAdd: null,
	    onDelete: null,
	    onReady: null
	};

	// Default classes to use when theming
	var DEFAULT_CLASSES = {
	    tokenList: "token-input-list",
	    token: "token-input-token",
	    tokenDelete: "token-input-delete-token",
	    selectedToken: "token-input-selected-token",
	    highlightedToken: "token-input-highlighted-token",
	    dropdown: "token-input-dropdown",
	    dropdownItem: "token-input-dropdown-item",
	    dropdownItem2: "token-input-dropdown-item2",
	    selectedDropdownItem: "token-input-selected-dropdown-item",
	    inputToken: "token-input-input-token"
	};

	// Input box position "enum"
	var POSITION = {
	    BEFORE: 0,
	    AFTER: 1,
	    END: 2
	};

	// Keys "enum"
	var KEY = {
	    BACKSPACE: 8,
	    TAB: 9,
	    ENTER: 13,
	    ESCAPE: 27,
	    SPACE: 32,
	    PAGE_UP: 33,
	    PAGE_DOWN: 34,
	    END: 35,
	    HOME: 36,
	    LEFT: 37,
	    UP: 38,
	    RIGHT: 39,
	    DOWN: 40,
	    NUMPAD_ENTER: 108,
	    COMMA: 188
	};

	// Additional public (exposed) methods
	var methods = {
	    init: function(url_or_data_or_function, options) {
	        var settings = $.extend({}, DEFAULT_SETTINGS, options || {});

	        return this.each(function () {
	            $(this).data("tokenInputObject", new $.TokenList(this, url_or_data_or_function, settings));
	        });
	    },
	    clear: function() {
	        this.data("tokenInputObject").clear();
	        return this;
	    },
	    add: function(item) {
	        this.data("tokenInputObject").add(item);
	        return this;
	    },
	    remove: function(item) {
	        this.data("tokenInputObject").remove(item);
	        return this;
	    },
	    get: function() {
	        return this.data("tokenInputObject").getTokens();
	       }
	}

	// Expose the .tokenInput function to jQuery as a plugin
	$.fn.tokenInput = function (method) {
	    // Method calling and initialization logic
	    if(methods[method]) {
	        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
	    } else {
	        return methods.init.apply(this, arguments);
	    }
	};

	// TokenList class for each input
	$.TokenList = function (input, url_or_data, settings) {
	    //
	    // Initialization
	    //

	    // Configure the data source
	    if($.type(url_or_data) === "string" || $.type(url_or_data) === "function") {
	        // Set the url to query against
	        settings.url = url_or_data;
	        // If the URL is a function, evaluate it here to do our initalization work
	        var url = computeURL();

	        // Make a smart guess about cross-domain if it wasn't explicitly specified
	        if(settings.crossDomain === undefined) {
	            if(url.indexOf("://") === -1) {
	                settings.crossDomain = false;
	            } else {
	                settings.crossDomain = (location.href.split(/\/+/g)[1] !== url.split(/\/+/g)[1]);
	            }
	        }
	    } else if(typeof(url_or_data) === "object") {
	        // Set the local data to search through
	        settings.local_data = url_or_data;
	    }

	    // Build class names
	    if(settings.classes) {
	        // Use custom class names
	        settings.classes = $.extend({}, DEFAULT_CLASSES, settings.classes);
	    } else if(settings.theme) {
	        // Use theme-suffixed default class names
	        settings.classes = {};
	        $.each(DEFAULT_CLASSES, function(key, value) {
	            settings.classes[key] = value + "-" + settings.theme;
	        });
	    } else {
	        settings.classes = DEFAULT_CLASSES;
	    }


	    // Save the tokens
	    var saved_tokens = [];

	    // Keep track of the number of tokens in the list
	    var token_count = 0;

	    // Basic cache to save on db hits
	    var cache = new $.TokenList.Cache();

	    // Keep track of the timeout, old vals
	    var timeout;
	    var input_val;

	    // Create a new text input an attach keyup events
	    var input_box = $("<input type=\"text\"  autocomplete=\"off\">")
	        .css({
	            outline: "none"
	        })
	        .attr("id", settings.idPrefix + input.id)
	        .focus(function () {
	            if (settings.tokenLimit === null || settings.tokenLimit !== token_count) {
	                show_dropdown_hint();
	            }
	        })
	        .blur(function () {
	            hide_dropdown();
	            $(this).val("");
	        })
	        .bind("keyup keydown blur update", resize_input)
	        .keydown(function (event) {
	            var previous_token;
	            var next_token;

	            switch(event.keyCode) {
	                case KEY.LEFT:
	                case KEY.RIGHT:
	                case KEY.UP:
	                case KEY.DOWN:
	                    if(!$(this).val()) {
	                        previous_token = input_token.prev();
	                        next_token = input_token.next();

	                        if((previous_token.length && previous_token.get(0) === selected_token) || (next_token.length && next_token.get(0) === selected_token)) {
	                            // Check if there is a previous/next token and it is selected
	                            if(event.keyCode === KEY.LEFT || event.keyCode === KEY.UP) {
	                                deselect_token($(selected_token), POSITION.BEFORE);
	                            } else {
	                                deselect_token($(selected_token), POSITION.AFTER);
	                            }
	                        } else if((event.keyCode === KEY.LEFT || event.keyCode === KEY.UP) && previous_token.length) {
	                            // We are moving left, select the previous token if it exists
	                            select_token($(previous_token.get(0)));
	                        } else if((event.keyCode === KEY.RIGHT || event.keyCode === KEY.DOWN) && next_token.length) {
	                            // We are moving right, select the next token if it exists
	                            select_token($(next_token.get(0)));
	                        }
	                    } else {
	                        var dropdown_item = null;

	                        if(event.keyCode === KEY.DOWN || event.keyCode === KEY.RIGHT) {
	                            dropdown_item = $(selected_dropdown_item).next();
	                        } else {
	                            dropdown_item = $(selected_dropdown_item).prev();
	                        }

	                        if(dropdown_item.length) {
	                            select_dropdown_item(dropdown_item);
	                        }
	                        return false;
	                    }
	                    break;

	                case KEY.BACKSPACE:
	                    previous_token = input_token.prev();

	                    if(!$(this).val().length) {
	                        if(selected_token) {
	                            delete_token($(selected_token));
	                            hidden_input.change();
	                        } else if(previous_token.length) {
	                            select_token($(previous_token.get(0)));
	                        }

	                        return false;
	                    } else if($(this).val().length === 1) {
	                        hide_dropdown();
	                    } else {
	                        // set a timeout just long enough to let this function finish.
	                        setTimeout(function(){do_search();}, 5);
	                    }
	                    break;

	                case KEY.TAB:
	                case KEY.ENTER:
	                case KEY.NUMPAD_ENTER:
	                case KEY.COMMA:
	                case KEY.SPACE:
	                  if(selected_dropdown_item) {
	                    add_token($(selected_dropdown_item).data("tokeninput"));
	                    // this allows for tags to be color-coded based on instructor set-up
	                    if (typeof Annotator !== "undefined") {
	                        Annotator._instances[0].publish("colorEditorTags");
	                    } else {
	                        window.AController.targetObjectController.colorizeEditor();
	                    }
	                    hidden_input.change();
	                    return false;
	                  } else{
	                    add_token({id:$(input_box).val(), name:$(input_box).val()});
	                    hidden_input.change();
	                  } 
	                  break;

	                case KEY.ESCAPE:
	                  hide_dropdown();
	                  return true;

	                default:
	                    if(String.fromCharCode(event.which)) {
	                        // set a timeout just long enough to let this function finish.
	                        setTimeout(function(){do_search();}, 5);
	                    }
	                    break;
	            }
	        });

	    // Keep a reference to the original input box
	    var hidden_input = $(input)
	                           .hide()
	                           .val("")
	                           .focus(function () {
	                               input_box.focus();
	                           })
	                           .blur(function () {
	                               input_box.blur();
	                           });

	    // Keep a reference to the selected token and dropdown item
	    var selected_token = null;
	    var selected_token_index = 0;
	    var selected_dropdown_item = null;

	    // The list to store the token items in
	    var token_list = $("<ol />")
	        .addClass(settings.classes.tokenList)
	        .click(function (event) {
	            var li = $(event.target).closest("li");
	            if(li && li.get(0) && $.data(li.get(0), "tokeninput")) {
	                toggle_select_token(li);
	            } else {
	                // Deselect selected token
	                if(selected_token) {
	                    deselect_token($(selected_token), POSITION.END);
	                }

	                // Focus input box
	                input_box.focus();
	            }
	        })
	        .mouseover(function (event) {
	            var li = $(event.target).closest("li");
	            if(li && selected_token !== this) {
	                li.addClass(settings.classes.highlightedToken);
	            }
	        })
	        .mouseout(function (event) {
	            var li = $(event.target).closest("li");
	            if(li && selected_token !== this) {
	                li.removeClass(settings.classes.highlightedToken);
	            }
	        })
	        .insertBefore(hidden_input);

	    // The token holding the input box
	    var input_token = $("<li />")
	        .addClass(settings.classes.inputToken)
	        .appendTo(token_list)
	        .append(input_box);

	    // The list to store the dropdown items in
	    var dropdown = $("<div>")
	        .addClass(settings.classes.dropdown)
	        .appendTo("body")
	        .hide();

	    // Magic element to help us resize the text input
	    var input_resizer = $("<tester/>")
	        .insertAfter(input_box)
	        .css({
	            position: "absolute",
	            top: -9999,
	            left: -9999,
	            width: "auto",
	            fontSize: input_box.css("fontSize"),
	            fontFamily: input_box.css("fontFamily"),
	            fontWeight: input_box.css("fontWeight"),
	            letterSpacing: input_box.css("letterSpacing"),
	            whiteSpace: "nowrap"
	        });

	    // Pre-populate list if items exist
	    hidden_input.val("");
	    var li_data = settings.prePopulate || hidden_input.data("pre");
	    if(settings.processPrePopulate && $.isFunction(settings.onResult)) {
	        li_data = settings.onResult.call(hidden_input, li_data);
	    }
	    if(li_data && li_data.length) {
	        $.each(li_data, function (index, value) {
	            insert_token(value);
	            checkTokenLimit();
	        });
	    }

	    // Initialization is done
	    if($.isFunction(settings.onReady)) {
	        settings.onReady.call();
	    }

	    //
	    // Public functions
	    //

	    this.clear = function() {
	        token_list.children("li").each(function() {
	            if ($(this).children("input").length === 0) {
	                delete_token($(this));
	            }
	        });
	    }

	    this.add = function(item) {
	        add_token(item);
	    }

	    this.remove = function(item) {
	        token_list.children("li").each(function() {
	            if ($(this).children("input").length === 0) {
	                var currToken = $(this).data("tokeninput");
	                var match = true;
	                for (var prop in item) {
	                    if (item[prop] !== currToken[prop]) {
	                        match = false;
	                        break;
	                    }
	                }
	                if (match) {
	                    delete_token($(this));
	                }
	            }
	        });
	    }
	    
	    this.getTokens = function() {
	           return saved_tokens;
	       }

	    //
	    // Private functions
	    //

	    function checkTokenLimit() {
	        if(settings.tokenLimit !== null && token_count >= settings.tokenLimit) {
	            input_box.hide();
	            hide_dropdown();
	            return;
	        }
	    }

	    function resize_input() {
	        if(input_val === (input_val = input_box.val())) {return;}

	        // Enter new content into resizer and resize input accordingly
	        var escaped = input_val.replace(/&/g, '&amp;').replace(/\s/g,' ').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	        input_resizer.html(escaped);
	        input_box.width(input_resizer.width() + 30);
	    }

	    function is_printable_character(keycode) {
	        return ((keycode >= 48 && keycode <= 90) ||     // 0-1a-z
	                (keycode >= 96 && keycode <= 111) ||    // numpad 0-9 + - / * .
	                (keycode >= 186 && keycode <= 192) ||   // ; = , - . / ^
	                (keycode >= 219 && keycode <= 222));    // ( \ ) '
	    }

	    // Inner function to a token to the list
	    function insert_token(item) {
	        var this_token = settings.tokenFormatter(item);
	        this_token = $(this_token)
	          .addClass(settings.classes.token)
	          .insertBefore(input_token);

	        // The 'delete token' button
	        $("<span>" + settings.deleteText + "</span>")
	            .addClass(settings.classes.tokenDelete)
	            .appendTo(this_token)
	            .click(function () {
	                delete_token($(this).parent());
	                hidden_input.change();
	                return false;
	            });

	        // Store data on the token
	        var token_data = {"id": item.id, "name": item.id};
	        token_data[settings.propertyToSearch] = item[settings.propertyToSearch];
	        $.data(this_token.get(0), "tokeninput", item);

	        // Save this token for duplicate checking
	        saved_tokens = saved_tokens.slice(0,selected_token_index).concat([token_data]).concat(saved_tokens.slice(selected_token_index));
	        selected_token_index++;

	        // Update the hidden input
	        update_hidden_input(saved_tokens, hidden_input);

	        token_count += 1;

	        // Check the token limit
	        if(settings.tokenLimit !== null && token_count >= settings.tokenLimit) {
	            input_box.hide();
	            hide_dropdown();
	        }

	        return this_token;
	    }

	    // Add a token to the token list based on user input
	    function add_token (item) {
	        var callback = settings.onAdd;

	        // See if the token already exists and select it if we don't want duplicates
	        if(token_count > 0 && settings.preventDuplicates) {
	            var found_existing_token = null;
	            token_list.children().each(function () {
	                var existing_token = $(this);
	                var existing_data = $.data(existing_token.get(0), "tokeninput");
	                if(existing_data && existing_data.id === item.id) {
	                    found_existing_token = existing_token;
	                    return false;
	                }
	            });

	            if(found_existing_token) {
	                select_token(found_existing_token);
	                //input_token.insertAfter(found_existing_token);
	                input_box.focus();
	                return;
	            }
	        }

	        // Insert the new tokens
	        if(settings.tokenLimit == null || token_count < settings.tokenLimit) {
	            insert_token(item);
	            checkTokenLimit();
	        }

	        // Clear input box
	        input_box.val("");

	        // Don't show the help dropdown, they've got the idea
	        hide_dropdown();

	        // Execute the onAdd callback if defined
	        if($.isFunction(callback)) {
	            callback.call(hidden_input,item);
	        }
	    }

	    // Select a token in the token list
	    function select_token (token) {
	        token.addClass(settings.classes.selectedToken);
	        selected_token = token.get(0);

	        // Hide input box
	        input_box.val("");

	        // Hide dropdown if it is visible (eg if we clicked to select token)
	        hide_dropdown();
	    }

	    // Deselect a token in the token list
	    function deselect_token (token, position) {
	        token.removeClass(settings.classes.selectedToken);
	        selected_token = null;

	        if(position === POSITION.BEFORE) {
	            input_token.insertBefore(token);
	            selected_token_index--;
	        } else if(position === POSITION.AFTER) {
	            //input_token.insertAfter(token);
	            selected_token_index++;
	        } else {
	            input_token.appendTo(token_list);
	            selected_token_index = token_count;
	        }

	        // Show the input box and give it focus again
	        input_box.focus();
	    }

	    // Toggle selection of a token in the token list
	    function toggle_select_token(token) {
	        var previous_selected_token = selected_token;

	        if(selected_token) {
	            deselect_token($(selected_token), POSITION.END);
	        }

	        if(previous_selected_token === token.get(0)) {
	            deselect_token(token, POSITION.END);
	        } else {
	            select_token(token);
	        }
	    }

	    // Delete a token from the token list
	    function delete_token (token) {
	        // Remove the id from the saved list
	        var token_data = $.data(token.get(0), "tokeninput");
	        var callback = settings.onDelete;

	        var index = token.prevAll().length;
	        if(index > selected_token_index) index--;

	        // Delete the token
	        token.remove();
	        selected_token = null;

	        // Show the input box and give it focus again
	        input_box.focus();

	        // Remove this token from the saved list
	        saved_tokens = saved_tokens.slice(0,index).concat(saved_tokens.slice(index+1));
	        if(index < selected_token_index) selected_token_index--;

	        // Update the hidden input
	        update_hidden_input(saved_tokens, hidden_input);

	        token_count -= 1;

	        if(settings.tokenLimit !== null) {
	            input_box
	                .show()
	                .val("")
	                .focus();
	        }

	        // Execute the onDelete callback if defined
	        if($.isFunction(callback)) {
	            callback.call(hidden_input,token_data);
	        }
	    }

	    // Update the hidden input box value
	    function update_hidden_input(saved_tokens, hidden_input) {
	        var token_values = $.map(saved_tokens, function (el) {
	            return el[settings.tokenValue];
	        });
	        hidden_input.val(token_values.join(settings.tokenDelimiter));

	    }

	    // Hide and clear the results dropdown
	    function hide_dropdown () {
	        dropdown.hide().empty();
	        selected_dropdown_item = null;
	    }

	    function show_dropdown() {
	        dropdown
	            .css({
	                position: "absolute",
	                top: $(token_list).offset().top + $(token_list).outerHeight(),
	                left: $(token_list).offset().left,
	                zindex: 999
	            })
	            .show();
	    }

	    function show_dropdown_searching () {
	        if(settings.searchingText) {
	            dropdown.html("<p>"+settings.searchingText+"</p>");
	            show_dropdown();
	        }
	    }

	    function show_dropdown_hint () {
	        if(settings.hintText) {
	            dropdown.html("<p>"+settings.hintText+"</p>");
	            show_dropdown();
	        }
	    }

	    // Highlight the query part of the search term
	    function highlight_term(value, term) {
	        return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + term + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<b>$1</b>");
	    }
	    
	    function find_value_and_highlight_term(template, value, term) {
	        return template.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + value + ")(?![^<>]*>)(?![^&;]+;)", "g"), highlight_term(value, term));
	    }

	    // Populate the results dropdown with some results
	    function populate_dropdown (query, results) {
	        if(results && results.length) {
	            dropdown.empty();
	            var dropdown_ul = $("<ul>")
	                .appendTo(dropdown)
	                .mouseover(function (event) {
	                    select_dropdown_item($(event.target).closest("li"));
	                })
	                .mousedown(function (event) {
	                    add_token($(event.target).closest("li").data("tokeninput"));
	                    hidden_input.change();
	                    return false;
	                })
	                .hide();

	            $.each(results, function(index, value) {
	                var this_li = settings.resultsFormatter(value);
	                
	                this_li = find_value_and_highlight_term(this_li ,value[settings.propertyToSearch], query);            
	                
	                this_li = $(this_li).appendTo(dropdown_ul);
	                
	                if(index % 2) {
	                    this_li.addClass(settings.classes.dropdownItem);
	                } else {
	                    this_li.addClass(settings.classes.dropdownItem2);
	                }

	                if(index === 0) {
	                    select_dropdown_item(this_li);
	                }

	                $.data(this_li.get(0), "tokeninput", value);
	            });

	            show_dropdown();

	            if(settings.animateDropdown) {
	                dropdown_ul.slideDown("fast");
	            } else {
	                dropdown_ul.show();
	            }
	        } else {
	            if(settings.noResultsText) {
	                dropdown.html("<p>"+settings.noResultsText+"</p>");
	                show_dropdown();
	            }
	        }
	    }

	    // Highlight an item in the results dropdown
	    function select_dropdown_item (item) {
	        if(item) {
	            if(selected_dropdown_item) {
	                deselect_dropdown_item($(selected_dropdown_item));
	            }

	            item.addClass(settings.classes.selectedDropdownItem);
	            selected_dropdown_item = item.get(0);
	        }
	    }

	    // Remove highlighting from an item in the results dropdown
	    function deselect_dropdown_item (item) {
	        item.removeClass(settings.classes.selectedDropdownItem);
	        selected_dropdown_item = null;
	    }

	    // Do a search and show the "searching" dropdown if the input is longer
	    // than settings.minChars
	    function do_search() {
	        var query = input_box.val().toLowerCase();
	        if(query && query.length) {
	            if(selected_token) {
	                deselect_token($(selected_token), POSITION.AFTER);
	            }

	            if(query.length >= settings.minChars) {
	                show_dropdown_searching();
	                clearTimeout(timeout);

	                timeout = setTimeout(function(){
	                    run_search(query);
	                }, settings.searchDelay);
	            } else {
	                hide_dropdown();
	            }
	        }
	    }

	    // Do the actual search
	    function run_search(query) {
	        var cache_key = query + computeURL();
	        var cached_results = cache.get(cache_key);
	        if(cached_results) {
	            populate_dropdown(query, cached_results);
	        } else {
	            // Are we doing an ajax search or local data search?
	            if(settings.url && !(typeof settings.url === "undefined") ) {
	                var url = computeURL();
	                // Extract exisiting get params
	                var ajax_params = {};
	                ajax_params.data = {};
	                if(url.indexOf("?") > -1) {
	                    var parts = url.split("?");
	                    ajax_params.url = parts[0];

	                    var param_array = parts[1].split("&");
	                    $.each(param_array, function (index, value) {
	                        var kv = value.split("=");
	                        ajax_params.data[kv[0]] = kv[1];
	                    });
	                } else {
	                    ajax_params.url = url;
	                }

	                // Prepare the request
	                ajax_params.data[settings.queryParam] = query;
	                ajax_params.type = settings.method;
	                ajax_params.dataType = settings.contentType;
	                if(settings.crossDomain) {
	                    ajax_params.dataType = "jsonp";
	                }

	                // Attach the success callback
	                ajax_params.success = function(results) {
	                  if($.isFunction(settings.onResult)) {
	                      results = settings.onResult.call(hidden_input, results);
	                  }
	                  cache.add(cache_key, settings.jsonContainer ? results[settings.jsonContainer] : results);

	                  // only populate the dropdown if the results are associated with the active search query
	                  if(input_box.val().toLowerCase() === query) {
	                      populate_dropdown(query, settings.jsonContainer ? results[settings.jsonContainer] : results);
	                  }
	                };

	                // Make the request
	                $.ajax(ajax_params);
	            } else if(settings.local_data) {
	                // Do the search through local data
	                var results = $.grep(settings.local_data, function (row) {
	                    return row[settings.propertyToSearch].toLowerCase().indexOf(query.toLowerCase()) > -1;
	                });

	                if($.isFunction(settings.onResult)) {
	                    results = settings.onResult.call(hidden_input, results);
	                }
	                cache.add(cache_key, results);
	                populate_dropdown(query, results);
	            }
	        }
	    }

	    // compute the dynamic URL
	    function computeURL() {
	        var url = settings.url;
	        if(typeof settings.url == 'function') {
	            url = settings.url.call();
	        }
	        return url;
	    }
	};

	// Really basic cache for the results
	$.TokenList.Cache = function (options) {
	    var settings = $.extend({
	        max_size: 500
	    }, options);

	    var data = {};
	    var size = 0;

	    var flush = function () {
	        data = {};
	        size = 0;
	    };

	    this.add = function (query, results) {
	        if(size > settings.max_size) {
	            flush();
	        }

	        if(!data[query]) {
	            size += 1;
	        }

	        data[query] = results;
	    };

	    this.get = function (query) {
	        return data[query];
	    };
	};
	}(jQuery));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	
	/*
	** Annotator v1.2.10
	** https://github.com/okfn/annotator/
	**
	** Copyright 2015, the Annotator project contributors.
	** Dual licensed under the MIT and GPLv3 licenses.
	** https://github.com/okfn/annotator/blob/master/LICENSE
	**
	** Built at: 2015-02-26 03:26:47Z
	 */


	//

	// Generated by CoffeeScript 1.6.3
	  var $, Annotator, Delegator, LinkParser, Range, Util, base64Decode, base64UrlDecode, createDateFromISO8601, findChild, fn, functions, g, getNodeName, getNodePosition, gettext, parseToken, simpleXPathJQuery, simpleXPathPure, _Annotator, _gettext, _i, _j, _len, _len1, _ref, _ref1, _ref2, _ref3, _ref4, _t,
	    __slice = [].slice,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

	  simpleXPathJQuery = function(relativeRoot) {
	    var jq;
	    jq = this.map(function() {
	      var elem, idx, path, tagName;
	      path = '';
	      elem = this;
	      while ((elem != null ? elem.nodeType : void 0) === Node.ELEMENT_NODE && elem !== relativeRoot) {
	        tagName = elem.tagName.replace(":", "\\:");
	        idx = $(elem.parentNode).children(tagName).index(elem) + 1;
	        idx = "[" + idx + "]";
	        path = "/" + elem.tagName.toLowerCase() + idx + path;
	        elem = elem.parentNode;
	      }
	      return path;
	    });
	    return jq.get();
	  };

	  simpleXPathPure = function(relativeRoot) {
	    var getPathSegment, getPathTo, jq, rootNode;
	    getPathSegment = function(node) {
	      var name, pos;
	      name = getNodeName(node);
	      pos = getNodePosition(node);
	      return "" + name + "[" + pos + "]";
	    };
	    rootNode = relativeRoot;
	    getPathTo = function(node) {
	      var xpath;
	      xpath = '';
	      while (node !== rootNode) {
	        if (node == null) {
	          throw new Error("Called getPathTo on a node which was not a descendant of @rootNode. " + rootNode);
	        }
	        xpath = (getPathSegment(node)) + '/' + xpath;
	        node = node.parentNode;
	      }
	      xpath = '/' + xpath;
	      xpath = xpath.replace(/\/$/, '');
	      return xpath;
	    };
	    jq = this.map(function() {
	      var path;
	      path = getPathTo(this);
	      return path;
	    });
	    return jq.get();
	  };

	  findChild = function(node, type, index) {
	    var child, children, found, name, _i, _len;
	    if (!node.hasChildNodes()) {
	      throw new Error("XPath error: node has no children!");
	    }
	    children = node.childNodes;
	    found = 0;
	    for (_i = 0, _len = children.length; _i < _len; _i++) {
	      child = children[_i];
	      name = getNodeName(child);
	      if (name === type) {
	        found += 1;
	        if (found === index) {
	          return child;
	        }
	      }
	    }
	    throw new Error("XPath error: wanted child not found.");
	  };

	  getNodeName = function(node) {
	    var nodeName;
	    nodeName = node.nodeName.toLowerCase();
	    switch (nodeName) {
	      case "#text":
	        return "text()";
	      case "#comment":
	        return "comment()";
	      case "#cdata-section":
	        return "cdata-section()";
	      default:
	        return nodeName;
	    }
	  };

	  getNodePosition = function(node) {
	    var pos, tmp;
	    pos = 0;
	    tmp = node;
	    while (tmp) {
	      if (tmp.nodeName === node.nodeName) {
	        pos++;
	      }
	      tmp = tmp.previousSibling;
	    }
	    return pos;
	  };

	  gettext = null;

	  if (typeof Gettext !== "undefined" && Gettext !== null) {
	    _gettext = new Gettext({
	      domain: "annotator"
	    });
	    gettext = function(msgid) {
	      return _gettext.gettext(msgid);
	    };
	  } else {
	    gettext = function(msgid) {
	      return msgid;
	    };
	  }

	  _t = function(msgid) {
	    return gettext(msgid);
	  };

	  if (!(typeof jQuery !== "undefined" && jQuery !== null ? (_ref = jQuery.fn) != null ? _ref.jquery : void 0 : void 0)) {
	    console.error(_t("Annotator requires jQuery: have you included lib/vendor/jquery.js?"));
	  }

	  if (!(JSON && JSON.parse && JSON.stringify)) {
	    console.error(_t("Annotator requires a JSON implementation: have you included lib/vendor/json2.js?"));
	  }

	  $ = jQuery;

	  Util = {};

	  Util.flatten = function(array) {
	    var flatten;
	    flatten = function(ary) {
	      var el, flat, _i, _len;
	      flat = [];
	      for (_i = 0, _len = ary.length; _i < _len; _i++) {
	        el = ary[_i];
	        flat = flat.concat(el && $.isArray(el) ? flatten(el) : el);
	      }
	      return flat;
	    };
	    return flatten(array);
	  };

	  Util.contains = function(parent, child) {
	    var node;
	    node = child;
	    while (node != null) {
	      if (node === parent) {
	        return true;
	      }
	      node = node.parentNode;
	    }
	    return false;
	  };

	  Util.getTextNodes = function(jq) {
	    var getTextNodes;
	    getTextNodes = function(node) {
	      var nodes;
	      if (node && node.nodeType !== Node.TEXT_NODE) {
	        nodes = [];
	        if (node.nodeType !== Node.COMMENT_NODE) {
	          node = node.lastChild;
	          while (node) {
	            nodes.push(getTextNodes(node));
	            node = node.previousSibling;
	          }
	        }
	        return nodes.reverse();
	      } else {
	        return node;
	      }
	    };
	    return jq.map(function() {
	      return Util.flatten(getTextNodes(this));
	    });
	  };

	  Util.getLastTextNodeUpTo = function(n) {
	    var result;
	    switch (n.nodeType) {
	      case Node.TEXT_NODE:
	        return n;
	      case Node.ELEMENT_NODE:
	        if (n.lastChild != null) {
	          result = Util.getLastTextNodeUpTo(n.lastChild);
	          if (result != null) {
	            return result;
	          }
	        }
	        break;
	    }
	    n = n.previousSibling;
	    if (n != null) {
	      return Util.getLastTextNodeUpTo(n);
	    } else {
	      return null;
	    }
	  };

	  Util.getFirstTextNodeNotBefore = function(n) {
	    var result;
	    switch (n.nodeType) {
	      case Node.TEXT_NODE:
	        return n;
	      case Node.ELEMENT_NODE:
	        if (n.firstChild != null) {
	          result = Util.getFirstTextNodeNotBefore(n.firstChild);
	          if (result != null) {
	            return result;
	          }
	        }
	        break;
	    }
	    n = n.nextSibling;
	    if (n != null) {
	      return Util.getFirstTextNodeNotBefore(n);
	    } else {
	      return null;
	    }
	  };

	  Util.readRangeViaSelection = function(range) {
	    var sel;
	    sel = Util.getGlobal().getSelection();
	    sel.removeAllRanges();
	    sel.addRange(range.toRange());
	    return sel.toString();
	  };

	  Util.xpathFromNode = function(el, relativeRoot) {
	    var exception, result;
	    try {
	      result = simpleXPathJQuery.call(el, relativeRoot);
	    } catch (_error) {
	      exception = _error;
	      console.log("jQuery-based XPath construction failed! Falling back to manual.");
	      result = simpleXPathPure.call(el, relativeRoot);
	    }
	    return result;
	  };

	  Util.nodeFromXPath = function(xp, root) {
	    var idx, name, node, step, steps, _i, _len, _ref1;
	    steps = xp.substring(1).split("/");
	    node = root;
	    for (_i = 0, _len = steps.length; _i < _len; _i++) {
	      step = steps[_i];
	      _ref1 = step.split("["), name = _ref1[0], idx = _ref1[1];
	      idx = idx != null ? parseInt((idx != null ? idx.split("]") : void 0)[0]) : 1;
	      node = findChild(node, name.toLowerCase(), idx);
	    }
	    return node;
	  };

	  Util.escape = function(html) {
	    return html.replace(/&(?!\w+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	  };

	  Util.uuid = (function() {
	    var counter;
	    counter = 0;
	    return function() {
	      return counter++;
	    };
	  })();

	  Util.getGlobal = function() {
	    return (function() {
	      return this;
	    })();
	  };

	  Util.maxZIndex = function($elements) {
	    var all, el;
	    all = (function() {
	      var _i, _len, _results;
	      _results = [];
	      for (_i = 0, _len = $elements.length; _i < _len; _i++) {
	        el = $elements[_i];
	        if ($(el).css('position') === 'static') {
	          _results.push(-1);
	        } else {
	          _results.push(parseFloat($(el).css('z-index')) || -1);
	        }
	      }
	      return _results;
	    })();
	    return Math.max.apply(Math, all);
	  };

	  Util.mousePosition = function(e, offsetEl) {
	    var offset, _ref1;
	    if ((_ref1 = $(offsetEl).css('position')) !== 'absolute' && _ref1 !== 'fixed' && _ref1 !== 'relative') {
	      offsetEl = $(offsetEl).offsetParent()[0];
	    }
	    offset = $(offsetEl).offset();
	    return {
	      top: e.pageY - offset.top,
	      left: e.pageX - offset.left
	    };
	  };

	  Util.preventEventDefault = function(event) {
	    return event != null ? typeof event.preventDefault === "function" ? event.preventDefault() : void 0 : void 0;
	  };

	  functions = ["log", "debug", "info", "warn", "exception", "assert", "dir", "dirxml", "trace", "group", "groupEnd", "groupCollapsed", "time", "timeEnd", "profile", "profileEnd", "count", "clear", "table", "error", "notifyFirebug", "firebug", "userObjects"];

	  if (typeof console !== "undefined" && console !== null) {
	    if (console.group == null) {
	      console.group = function(name) {
	        return console.log("GROUP: ", name);
	      };
	    }
	    if (console.groupCollapsed == null) {
	      console.groupCollapsed = console.group;
	    }
	    for (_i = 0, _len = functions.length; _i < _len; _i++) {
	      fn = functions[_i];
	      if (console[fn] == null) {
	        console[fn] = function() {
	          return console.log(_t("Not implemented:") + (" console." + name));
	        };
	      }
	    }
	  } else {
	    this.console = {};
	    for (_j = 0, _len1 = functions.length; _j < _len1; _j++) {
	      fn = functions[_j];
	      this.console[fn] = function() {};
	    }
	    this.console['error'] = function() {
	      var args;
	      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	      return alert("ERROR: " + (args.join(', ')));
	    };
	    this.console['warn'] = function() {
	      var args;
	      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	      return alert("WARNING: " + (args.join(', ')));
	    };
	  }

	  Delegator = (function() {
	    Delegator.prototype.events = {};

	    Delegator.prototype.options = {};

	    Delegator.prototype.element = null;

	    function Delegator(element, options) {
	      this.options = $.extend(true, {}, this.options, options);
	      this.element = $(element);
	      this._closures = {};
	      this.on = this.subscribe;
	      this.addEvents();
	    }

	    Delegator.prototype.destroy = function() {
	      return this.removeEvents();
	    };

	    Delegator.prototype.addEvents = function() {
	      var event, _k, _len2, _ref1, _results;
	      _ref1 = Delegator._parseEvents(this.events);
	      _results = [];
	      for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
	        event = _ref1[_k];
	        _results.push(this._addEvent(event.selector, event.event, event.functionName));
	      }
	      return _results;
	    };

	    Delegator.prototype.removeEvents = function() {
	      var event, _k, _len2, _ref1, _results;
	      _ref1 = Delegator._parseEvents(this.events);
	      _results = [];
	      for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
	        event = _ref1[_k];
	        _results.push(this._removeEvent(event.selector, event.event, event.functionName));
	      }
	      return _results;
	    };

	    Delegator.prototype._addEvent = function(selector, event, functionName) {
	      var closure,
	        _this = this;
	      closure = function() {
	        return _this[functionName].apply(_this, arguments);
	      };
	      if (selector === '' && Delegator._isCustomEvent(event)) {
	        this.subscribe(event, closure);
	      } else {
	        this.element.delegate(selector, event, closure);
	      }
	      this._closures["" + selector + "/" + event + "/" + functionName] = closure;
	      return this;
	    };

	    Delegator.prototype._removeEvent = function(selector, event, functionName) {
	      var closure;
	      closure = this._closures["" + selector + "/" + event + "/" + functionName];
	      if (selector === '' && Delegator._isCustomEvent(event)) {
	        this.unsubscribe(event, closure);
	      } else {
	        this.element.undelegate(selector, event, closure);
	      }
	      delete this._closures["" + selector + "/" + event + "/" + functionName];
	      return this;
	    };

	    Delegator.prototype.publish = function() {
	      this.element.triggerHandler.apply(this.element, arguments);
	      return this;
	    };

	    Delegator.prototype.subscribe = function(event, callback) {
	      var closure;
	      closure = function() {
	        return callback.apply(this, [].slice.call(arguments, 1));
	      };
	      closure.guid = callback.guid = ($.guid += 1);
	      this.element.bind(event, closure);
	      return this;
	    };

	    Delegator.prototype.unsubscribe = function() {
	      this.element.unbind.apply(this.element, arguments);
	      return this;
	    };

	    return Delegator;

	  })();

	  Delegator._parseEvents = function(eventsObj) {
	    var event, events, functionName, sel, selector, _k, _ref1;
	    events = [];
	    for (sel in eventsObj) {
	      functionName = eventsObj[sel];
	      _ref1 = sel.split(' '), selector = 2 <= _ref1.length ? __slice.call(_ref1, 0, _k = _ref1.length - 1) : (_k = 0, []), event = _ref1[_k++];
	      events.push({
	        selector: selector.join(' '),
	        event: event,
	        functionName: functionName
	      });
	    }
	    return events;
	  };

	  Delegator.natives = (function() {
	    var key, specials, val;
	    specials = (function() {
	      var _ref1, _results;
	      _ref1 = jQuery.event.special;
	      _results = [];
	      for (key in _ref1) {
	        if (!__hasProp.call(_ref1, key)) continue;
	        val = _ref1[key];
	        _results.push(key);
	      }
	      return _results;
	    })();
	    return "blur focus focusin focusout load resize scroll unload click dblclick\nmousedown mouseup mousemove mouseover mouseout mouseenter mouseleave\nchange select submit keydown keypress keyup error".split(/[^a-z]+/).concat(specials);
	  })();

	  Delegator._isCustomEvent = function(event) {
	    event = event.split('.')[0];
	    return $.inArray(event, Delegator.natives) === -1;
	  };

	  Range = {};

	  Range.sniff = function(r) {
	    if (r.commonAncestorContainer != null) {
	      return new Range.BrowserRange(r);
	    } else if (typeof r.start === "string") {
	      return new Range.SerializedRange(r);
	    } else if (r.start && typeof r.start === "object") {
	      return new Range.NormalizedRange(r);
	    } else {
	      console.error(_t("Could not sniff range type"));
	      return false;
	    }
	  };

	  Range.nodeFromXPath = function(xpath, root) {
	    var customResolver, evaluateXPath, namespace, node, segment;
	    if (root == null) {
	      root = document;
	    }
	    evaluateXPath = function(xp, nsResolver) {
	      var exception;
	      if (nsResolver == null) {
	        nsResolver = null;
	      }
	      try {
	        return document.evaluate('.' + xp, root, nsResolver, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
	      } catch (_error) {
	        exception = _error;
	        console.log("XPath evaluation failed.");
	        console.log("Trying fallback...");
	        return Util.nodeFromXPath(xp, root);
	      }
	    };
	    if (!$.isXMLDoc(document.documentElement)) {
	      return evaluateXPath(xpath);
	    } else {
	      customResolver = document.createNSResolver(document.ownerDocument === null ? document.documentElement : document.ownerDocument.documentElement);
	      node = evaluateXPath(xpath, customResolver);
	      if (!node) {
	        xpath = ((function() {
	          var _k, _len2, _ref1, _results;
	          _ref1 = xpath.split('/');
	          _results = [];
	          for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
	            segment = _ref1[_k];
	            if (segment && segment.indexOf(':') === -1) {
	              _results.push(segment.replace(/^([a-z]+)/, 'xhtml:$1'));
	            } else {
	              _results.push(segment);
	            }
	          }
	          return _results;
	        })()).join('/');
	        namespace = document.lookupNamespaceURI(null);
	        customResolver = function(ns) {
	          if (ns === 'xhtml') {
	            return namespace;
	          } else {
	            return document.documentElement.getAttribute('xmlns:' + ns);
	          }
	        };
	        node = evaluateXPath(xpath, customResolver);
	      }
	      return node;
	    }
	  };

	  Range.RangeError = (function(_super) {
	    __extends(RangeError, _super);

	    function RangeError(type, message, parent) {
	      this.type = type;
	      this.message = message;
	      this.parent = parent != null ? parent : null;
	      RangeError.__super__.constructor.call(this, this.message);
	    }

	    return RangeError;

	  })(Error);

	  Range.BrowserRange = (function() {
	    function BrowserRange(obj) {
	      this.commonAncestorContainer = obj.commonAncestorContainer;
	      this.startContainer = obj.startContainer;
	      this.startOffset = obj.startOffset;
	      this.endContainer = obj.endContainer;
	      this.endOffset = obj.endOffset;
	    }

	    BrowserRange.prototype.normalize = function(root) {
	      var n, node, nr, r;
	      if (this.tainted) {
	        console.error(_t("You may only call normalize() once on a BrowserRange!"));
	        return false;
	      } else {
	        this.tainted = true;
	      }
	      r = {};
	      if (this.startContainer.nodeType === Node.ELEMENT_NODE) {
	        r.start = Util.getFirstTextNodeNotBefore(this.startContainer.childNodes[this.startOffset]);
	        r.startOffset = 0;
	      } else {
	        r.start = this.startContainer;
	        r.startOffset = this.startOffset;
	      }
	      if (this.endContainer.nodeType === Node.ELEMENT_NODE) {
	        node = this.endContainer.childNodes[this.endOffset];
	        if (node != null) {
	          n = node;
	          while ((n != null) && (n.nodeType !== Node.TEXT_NODE)) {
	            n = n.firstChild;
	          }
	          if (n != null) {
	            r.end = n;
	            r.endOffset = 0;
	          }
	        }
	        if (r.end == null) {
	          node = this.endContainer.childNodes[this.endOffset - 1];
	          r.end = Util.getLastTextNodeUpTo(node);
	          r.endOffset = r.end.nodeValue.length;
	        }
	      } else {
	        r.end = this.endContainer;
	        r.endOffset = this.endOffset;
	      }
	      nr = {};
	      if (r.startOffset > 0) {
	        if (r.start.nodeValue.length > r.startOffset) {
	          nr.start = r.start.splitText(r.startOffset);
	        } else {
	          nr.start = r.start.nextSibling;
	        }
	      } else {
	        nr.start = r.start;
	      }
	      if (r.start === r.end) {
	        if (nr.start.nodeValue.length > (r.endOffset - r.startOffset)) {
	          nr.start.splitText(r.endOffset - r.startOffset);
	        }
	        nr.end = nr.start;
	      } else {
	        if (r.end.nodeValue.length > r.endOffset) {
	          r.end.splitText(r.endOffset);
	        }
	        nr.end = r.end;
	      }
	      nr.commonAncestor = this.commonAncestorContainer;
	      while (nr.commonAncestor.nodeType !== Node.ELEMENT_NODE) {
	        nr.commonAncestor = nr.commonAncestor.parentNode;
	      }
	      return new Range.NormalizedRange(nr);
	    };

	    BrowserRange.prototype.serialize = function(root, ignoreSelector) {
	      return this.normalize(root).serialize(root, ignoreSelector);
	    };

	    return BrowserRange;

	  })();

	  Range.NormalizedRange = (function() {
	    function NormalizedRange(obj) {
	      this.commonAncestor = obj.commonAncestor;
	      this.start = obj.start;
	      this.end = obj.end;
	    }

	    NormalizedRange.prototype.normalize = function(root) {
	      return this;
	    };

	    NormalizedRange.prototype.limit = function(bounds) {
	      var nodes, parent, startParents, _k, _len2, _ref1;
	      nodes = $.grep(this.textNodes(), function(node) {
	        return node.parentNode === bounds || $.contains(bounds, node.parentNode);
	      });
	      if (!nodes.length) {
	        return null;
	      }
	      this.start = nodes[0];
	      this.end = nodes[nodes.length - 1];
	      startParents = $(this.start).parents();
	      _ref1 = $(this.end).parents();
	      for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
	        parent = _ref1[_k];
	        if (startParents.index(parent) !== -1) {
	          this.commonAncestor = parent;
	          break;
	        }
	      }
	      return this;
	    };

	    NormalizedRange.prototype.serialize = function(root, ignoreSelector) {
	      var end, serialization, start;
	      serialization = function(node, isEnd) {
	        var n, nodes, offset, origParent, textNodes, xpath, _k, _len2;
	        if (ignoreSelector) {
	          origParent = $(node).parents(":not(" + ignoreSelector + ")").eq(0);
	        } else {
	          origParent = $(node).parent();
	        }
	        xpath = Util.xpathFromNode(origParent, root)[0];
	        textNodes = Util.getTextNodes(origParent);
	        nodes = textNodes.slice(0, textNodes.index(node));
	        offset = 0;
	        for (_k = 0, _len2 = nodes.length; _k < _len2; _k++) {
	          n = nodes[_k];
	          offset += n.nodeValue.length;
	        }
	        if (isEnd) {
	          return [xpath, offset + node.nodeValue.length];
	        } else {
	          return [xpath, offset];
	        }
	      };
	      start = serialization(this.start);
	      end = serialization(this.end, true);
	      return new Range.SerializedRange({
	        start: start[0],
	        end: end[0],
	        startOffset: start[1],
	        endOffset: end[1]
	      });
	    };

	    NormalizedRange.prototype.text = function() {
	      var node;
	      return ((function() {
	        var _k, _len2, _ref1, _results;
	        _ref1 = this.textNodes();
	        _results = [];
	        for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
	          node = _ref1[_k];
	          _results.push(node.nodeValue);
	        }
	        return _results;
	      }).call(this)).join('');
	    };

	    NormalizedRange.prototype.textNodes = function() {
	      var end, start, textNodes, _ref1;
	      textNodes = Util.getTextNodes($(this.commonAncestor));
	      _ref1 = [textNodes.index(this.start), textNodes.index(this.end)], start = _ref1[0], end = _ref1[1];
	      return $.makeArray(textNodes.slice(start, +end + 1 || 9e9));
	    };

	    NormalizedRange.prototype.toRange = function() {
	      var range;
	      range = document.createRange();
	      range.setStartBefore(this.start);
	      range.setEndAfter(this.end);
	      return range;
	    };

	    return NormalizedRange;

	  })();

	  Range.SerializedRange = (function() {
	    function SerializedRange(obj) {
	      this.start = obj.start;
	      this.startOffset = obj.startOffset;
	      this.end = obj.end;
	      this.endOffset = obj.endOffset;
	    }

	    SerializedRange.prototype.normalize = function(root) {
	      var contains, e, length, node, p, range, targetOffset, tn, _k, _l, _len2, _len3, _ref1, _ref2;
	      range = {};
	      _ref1 = ['start', 'end'];
	      for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
	        p = _ref1[_k];
	        try {
	          node = Range.nodeFromXPath(this[p], root);
	        } catch (_error) {
	          e = _error;
	          throw new Range.RangeError(p, ("Error while finding " + p + " node: " + this[p] + ": ") + e, e);
	        }
	        if (!node) {
	          throw new Range.RangeError(p, "Couldn't find " + p + " node: " + this[p]);
	        }
	        length = 0;
	        targetOffset = this[p + 'Offset'];
	        if (p === 'end') {
	          targetOffset--;
	        }
	        _ref2 = Util.getTextNodes($(node));
	        for (_l = 0, _len3 = _ref2.length; _l < _len3; _l++) {
	          tn = _ref2[_l];
	          if (length + tn.nodeValue.length > targetOffset) {
	            range[p + 'Container'] = tn;
	            range[p + 'Offset'] = this[p + 'Offset'] - length;
	            break;
	          } else {
	            length += tn.nodeValue.length;
	          }
	        }
	        if (range[p + 'Offset'] == null) {
	          throw new Range.RangeError("" + p + "offset", "Couldn't find offset " + this[p + 'Offset'] + " in element " + this[p]);
	        }
	      }
	      contains = document.compareDocumentPosition == null ? function(a, b) {
	        return a.contains(b);
	      } : function(a, b) {
	        return a.compareDocumentPosition(b) & 16;
	      };
	      $(range.startContainer).parents().each(function() {
	        if (contains(this, range.endContainer)) {
	          range.commonAncestorContainer = this;
	          return false;
	        }
	      });
	      return new Range.BrowserRange(range).normalize(root);
	    };

	    SerializedRange.prototype.serialize = function(root, ignoreSelector) {
	      return this.normalize(root).serialize(root, ignoreSelector);
	    };

	    SerializedRange.prototype.toObject = function() {
	      return {
	        start: this.start,
	        startOffset: this.startOffset,
	        end: this.end,
	        endOffset: this.endOffset
	      };
	    };

	    return SerializedRange;

	  })();

	  _Annotator = this.Annotator;

	  window.Annotator = Annotator =(function(_super) {
	    __extends(Annotator, _super);

	    Annotator.prototype.events = {
	      ".annotator-adder button click": "onAdderClick",
	      ".annotator-adder button mousedown": "onAdderMousedown",
	      ".annotator-hl mouseover": "onHighlightMouseover",
	      ".annotator-hl mouseout": "startViewerHideTimer"
	    };

	    Annotator.prototype.html = {
	      adder: '<div class="annotator-adder"><button>' + _t('Annotate') + '</button></div>',
	      wrapper: '<div class="annotator-wrapper"></div>'
	    };

	    Annotator.prototype.options = {
	      readOnly: false
	    };

	    Annotator.prototype.plugins = {};

	    Annotator.prototype.editor = null;

	    Annotator.prototype.viewer = null;

	    Annotator.prototype.selectedRanges = null;

	    Annotator.prototype.mouseIsDown = false;

	    Annotator.prototype.ignoreMouseup = false;

	    Annotator.prototype.viewerHideTimer = null;

	    function Annotator(element, options) {
	      this.onDeleteAnnotation = __bind(this.onDeleteAnnotation, this);
	      this.onEditAnnotation = __bind(this.onEditAnnotation, this);
	      this.onAdderClick = __bind(this.onAdderClick, this);
	      this.onAdderMousedown = __bind(this.onAdderMousedown, this);
	      this.onHighlightMouseover = __bind(this.onHighlightMouseover, this);
	      this.checkForEndSelection = __bind(this.checkForEndSelection, this);
	      this.checkForStartSelection = __bind(this.checkForStartSelection, this);
	      this.clearViewerHideTimer = __bind(this.clearViewerHideTimer, this);
	      this.startViewerHideTimer = __bind(this.startViewerHideTimer, this);
	      this.showViewer = __bind(this.showViewer, this);
	      this.onEditorSubmit = __bind(this.onEditorSubmit, this);
	      this.onEditorHide = __bind(this.onEditorHide, this);
	      this.showEditor = __bind(this.showEditor, this);
	      Annotator.__super__.constructor.apply(this, arguments);
	      this.plugins = {};
	      if (!Annotator.supported()) {
	        return this;
	      }
	      if (!this.options.readOnly) {
	        this._setupDocumentEvents();
	      }
	      this._setupWrapper()._setupViewer()._setupEditor();
	      this._setupDynamicStyle();
	      this.adder = $(this.html.adder).appendTo(this.wrapper).hide();
	      Annotator._instances.push(this);
	    }

	    Annotator.prototype._setupWrapper = function() {
	      this.wrapper = $(this.html.wrapper);
	      this.element.find('script').remove();
	      this.element.wrapInner(this.wrapper);
	      this.wrapper = this.element.find('.annotator-wrapper');
	      return this;
	    };

	    Annotator.prototype._setupViewer = function() {
	      var _this = this;
	      this.viewer = new Annotator.Viewer({
	        readOnly: this.options.readOnly
	      });
	      this.viewer.hide().on("edit", this.onEditAnnotation).on("delete", this.onDeleteAnnotation).addField({
	        load: function(field, annotation) {
	          if (annotation.text) {
	            $(field).html(Util.escape(annotation.text));
	          } else {
	            $(field).html("<i>" + (_t('No Comment')) + "</i>");
	          }
	          return _this.publish('annotationViewerTextField', [field, annotation]);
	        }
	      }).element.appendTo(this.wrapper).bind({
	        "mouseover": this.clearViewerHideTimer,
	        "mouseout": this.startViewerHideTimer
	      });
	      return this;
	    };

	    Annotator.prototype._setupEditor = function() {
	      this.editor = new Annotator.Editor();
	      this.editor.hide().on('hide', this.onEditorHide).on('save', this.onEditorSubmit).addField({
	        type: 'textarea',
	        label: _t('Comments') + '\u2026',
	        load: function(field, annotation) {
	          return $(field).find('textarea').val(annotation.text || '');
	        },
	        submit: function(field, annotation) {
	          return annotation.text = $(field).find('textarea').val();
	        }
	      });
	      this.editor.element.appendTo(this.wrapper);
	      return this;
	    };

	    Annotator.prototype._setupDocumentEvents = function() {
	      $(document).bind({
	        "mouseup": this.checkForEndSelection,
	        "mousedown": this.checkForStartSelection
	      });
	      return this;
	    };

	    Annotator.prototype._setupDynamicStyle = function() {
	      var max, sel, style, x;
	      style = $('#annotator-dynamic-style');
	      if (!style.length) {
	        style = $('<style id="annotator-dynamic-style"></style>').appendTo(document.head);
	      }
	      sel = '*' + ((function() {
	        var _k, _len2, _ref1, _results;
	        _ref1 = ['adder', 'outer', 'notice', 'filter'];
	        _results = [];
	        for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
	          x = _ref1[_k];
	          _results.push(":not(.annotator-" + x + ")");
	        }
	        return _results;
	      })()).join('');
	      max = Util.maxZIndex($(document.body).find(sel));
	      max = Math.max(max, 1000);
	      style.text([".annotator-adder, .annotator-outer, .annotator-notice {", "  z-index: " + (max + 20) + ";", "}", ".annotator-filter {", "  z-index: " + (max + 10) + ";", "}"].join("\n"));
	      return this;
	    };

	    Annotator.prototype.destroy = function() {
	      var idx, name, plugin, _base, _ref1;
	      Annotator.__super__.destroy.apply(this, arguments);
	      $(document).unbind({
	        "mouseup": this.checkForEndSelection,
	        "mousedown": this.checkForStartSelection
	      });
	      $('#annotator-dynamic-style').remove();
	      this.adder.remove();
	      this.viewer.destroy();
	      this.editor.destroy();
	      this.wrapper.find('.annotator-hl').each(function() {
	        $(this).contents().insertBefore(this);
	        return $(this).remove();
	      });
	      this.wrapper.contents().insertBefore(this.wrapper);
	      this.wrapper.remove();
	      this.element.data('annotator', null);
	      _ref1 = this.plugins;
	      for (name in _ref1) {
	        plugin = _ref1[name];
	        if (typeof (_base = this.plugins[name]).destroy === "function") {
	          _base.destroy();
	        }
	      }
	      idx = Annotator._instances.indexOf(this);
	      if (idx !== -1) {
	        return Annotator._instances.splice(idx, 1);
	      }
	    };

	    Annotator.prototype.getSelectedRanges = function() {
	      var browserRange, i, normedRange, r, ranges, rangesToIgnore, selection, _k, _len2;
	      selection = Util.getGlobal().getSelection();
	      ranges = [];
	      rangesToIgnore = [];
	      if (!selection.isCollapsed) {
	        ranges = (function() {
	          var _k, _ref1, _results;
	          _results = [];
	          for (i = _k = 0, _ref1 = selection.rangeCount; 0 <= _ref1 ? _k < _ref1 : _k > _ref1; i = 0 <= _ref1 ? ++_k : --_k) {
	            r = selection.getRangeAt(i);
	            browserRange = new Range.BrowserRange(r);
	            normedRange = browserRange.normalize().limit(this.wrapper[0]);
	            if (normedRange === null) {
	              rangesToIgnore.push(r);
	            }
	            _results.push(normedRange);
	          }
	          return _results;
	        }).call(this);
	        selection.removeAllRanges();
	      }
	      for (_k = 0, _len2 = rangesToIgnore.length; _k < _len2; _k++) {
	        r = rangesToIgnore[_k];
	        selection.addRange(r);
	      }
	      return $.grep(ranges, function(range) {
	        if (range) {
	          selection.addRange(range.toRange());
	        }
	        return range;
	      });
	    };

	    Annotator.prototype.createAnnotation = function() {
	      var annotation;
	      annotation = {};
	      this.publish('beforeAnnotationCreated', [annotation]);
	      return annotation;
	    };

	    Annotator.prototype.setupAnnotation = function(annotation) {
	      var e, normed, normedRanges, r, root, _k, _l, _len2, _len3, _ref1;
	      root = this.wrapper[0];
	      annotation.ranges || (annotation.ranges = this.selectedRanges);
	      normedRanges = [];
	      _ref1 = annotation.ranges;
	      for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
	        r = _ref1[_k];
	        try {
	          normedRanges.push(Range.sniff(r).normalize(root));
	        } catch (_error) {
	          e = _error;
	          if (e instanceof Range.RangeError) {
	            this.publish('rangeNormalizeFail', [annotation, r, e]);
	          } else {
	            throw e;
	          }
	        }
	      }
	      annotation.quote = [];
	      annotation.ranges = [];
	      annotation.highlights = [];
	      for (_l = 0, _len3 = normedRanges.length; _l < _len3; _l++) {
	        normed = normedRanges[_l];
	        annotation.quote.push($.trim(normed.text()));
	        annotation.ranges.push(normed.serialize(this.wrapper[0], '.annotator-hl'));
	        $.merge(annotation.highlights, this.highlightRange(normed));
	      }
	      annotation.quote = annotation.quote.join(' / ');
	      $(annotation.highlights).data('annotation', annotation);
	      $(annotation.highlights).attr('data-annotation-id', annotation.id);
	      return annotation;
	    };

	    Annotator.prototype.updateAnnotation = function(annotation) {
	      this.publish('beforeAnnotationUpdated', [annotation]);
	      $(annotation.highlights).attr('data-annotation-id', annotation.id);
	      this.publish('annotationUpdated', [annotation]);
	      return annotation;
	    };

	    Annotator.prototype.deleteAnnotation = function(annotation) {
	      var child, h, _k, _len2, _ref1;
	      if (annotation.highlights != null) {
	        _ref1 = annotation.highlights;
	        for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
	          h = _ref1[_k];
	          if (!(h.parentNode != null)) {
	            continue;
	          }
	          child = h.childNodes[0];
	          $(h).replaceWith(h.childNodes);
	        }
	      }
	      this.publish('annotationDeleted', [annotation]);
	      return annotation;
	    };

	    Annotator.prototype.loadAnnotations = function(annotations) {
	      var clone, loader,
	        _this = this;
	      if (annotations == null) {
	        annotations = [];
	      }
	      loader = function(annList) {
	        var n, now, _k, _len2;
	        if (annList == null) {
	          annList = [];
	        }
	        now = annList.splice(0, 10);
	        for (_k = 0, _len2 = now.length; _k < _len2; _k++) {
	          n = now[_k];
	          _this.setupAnnotation(n);
	        }
	        if (annList.length > 0) {
	          return setTimeout((function() {
	            return loader(annList);
	          }), 10);
	        } else {
	          return _this.publish('annotationsLoaded', [clone]);
	        }
	      };
	      clone = annotations.slice();
	      loader(annotations);
	      return this;
	    };

	    Annotator.prototype.dumpAnnotations = function() {
	      if (this.plugins['Store']) {
	        return this.plugins['Store'].dumpAnnotations();
	      } else {
	        console.warn(_t("Can't dump annotations without Store plugin."));
	        return false;
	      }
	    };

	    Annotator.prototype.highlightRange = function(normedRange, cssClass) {
	      var hl, node, white, _k, _len2, _ref1, _results;
	      if (cssClass == null) {
	        cssClass = 'annotator-hl';
	      }
	      white = /^\s*$/;
	      hl = $("<span class='" + cssClass + "'></span>");
	      _ref1 = normedRange.textNodes();
	      _results = [];
	      for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
	        node = _ref1[_k];
	        if (!white.test(node.nodeValue)) {
	          _results.push($(node).wrapAll(hl).parent().show()[0]);
	        }
	      }
	      return _results;
	    };

	    Annotator.prototype.highlightRanges = function(normedRanges, cssClass) {
	      var highlights, r, _k, _len2;
	      if (cssClass == null) {
	        cssClass = 'annotator-hl';
	      }
	      highlights = [];
	      for (_k = 0, _len2 = normedRanges.length; _k < _len2; _k++) {
	        r = normedRanges[_k];
	        $.merge(highlights, this.highlightRange(r, cssClass));
	      }
	      return highlights;
	    };

	    Annotator.prototype.addPlugin = function(name, options) {
	      var klass, _base;
	      if (this.plugins[name]) {
	        console.error(_t("You cannot have more than one instance of any plugin."));
	      } else {
	        klass = Annotator.Plugin[name];
	        if (typeof klass === 'function') {
	          this.plugins[name] = new klass(this.element[0], options);
	          this.plugins[name].annotator = this;
	          if (typeof (_base = this.plugins[name]).pluginInit === "function") {
	            _base.pluginInit();
	          }
	        } else {
	          console.error(_t("Could not load ") + name + _t(" plugin. Have you included the appropriate <script> tag?"));
	        }
	      }
	      return this;
	    };

	    Annotator.prototype.showEditor = function(annotation, location) {
	      this.editor.element.css(location);
	      this.editor.load(annotation);
	      this.publish('annotationEditorShown', [this.editor, annotation]);
	      return this;
	    };

	    Annotator.prototype.onEditorHide = function() {
	      this.publish('annotationEditorHidden', [this.editor]);
	      return this.ignoreMouseup = false;
	    };

	    Annotator.prototype.onEditorSubmit = function(annotation) {
	      return this.publish('annotationEditorSubmit', [this.editor, annotation]);
	    };

	    Annotator.prototype.showViewer = function(annotations, location) {
	      this.viewer.element.css(location);
	      this.viewer.load(annotations);
	      return this.publish('annotationViewerShown', [this.viewer, annotations]);
	    };

	    Annotator.prototype.startViewerHideTimer = function() {
	      if (!this.viewerHideTimer) {
	        return this.viewerHideTimer = setTimeout(this.viewer.hide, 250);
	      }
	    };

	    Annotator.prototype.clearViewerHideTimer = function() {
	      clearTimeout(this.viewerHideTimer);
	      return this.viewerHideTimer = false;
	    };

	    Annotator.prototype.checkForStartSelection = function(event) {
	      if (!(event && this.isAnnotator(event.target))) {
	        this.startViewerHideTimer();
	      }
	      return this.mouseIsDown = true;
	    };

	    Annotator.prototype.checkForEndSelection = function(event) {
	      var container, range, _k, _len2, _ref1;
	      this.mouseIsDown = false;
	      if (this.ignoreMouseup) {
	        return;
	      }
	      this.selectedRanges = this.getSelectedRanges();
	      _ref1 = this.selectedRanges;
	      for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
	        range = _ref1[_k];
	        container = range.commonAncestor;
	        if (this.isAnnotator(container)) {
	          return;
	        }
	      }
	      if (event && this.selectedRanges.length) {
	        return this.adder.css(Util.mousePosition(event, this.wrapper[0])).show();
	      } else {
	        return this.adder.hide();
	      }
	    };

	    Annotator.prototype.isAnnotator = function(element) {
	      return !!$(element).parents().addBack().filter('[class^=annotator-]').not('[class=annotator-hl]').not(this.wrapper).length;
	    };

	    Annotator.prototype.onHighlightMouseover = function(event) {
	      var annotations;
	      this.clearViewerHideTimer();
	      if (this.mouseIsDown) {
	        return false;
	      }
	      if (this.viewer.isShown()) {
	        this.viewer.hide();
	      }
	      annotations = $(event.target).parents('.annotator-hl').addBack().map(function() {
	        return $(this).data("annotation");
	      }).toArray();
	      return this.showViewer(annotations, Util.mousePosition(event, this.wrapper[0]));
	    };

	    Annotator.prototype.onAdderMousedown = function(event) {
	      if (event != null) {
	        event.preventDefault();
	      }
	      return this.ignoreMouseup = true;
	    };

	    Annotator.prototype.onAdderClick = function(event) {
	      var annotation, cancel, cleanup, position, save,
	        _this = this;
	      if (event != null) {
	        event.preventDefault();
	      }
	      position = this.adder.position();
	      this.adder.hide();
	      annotation = this.setupAnnotation(this.createAnnotation());
	      $(annotation.highlights).addClass('annotator-hl-temporary');
	      save = function() {
	        cleanup();
	        $(annotation.highlights).removeClass('annotator-hl-temporary');
	        return _this.publish('annotationCreated', [annotation]);
	      };
	      cancel = function() {
	        cleanup();
	        return _this.deleteAnnotation(annotation);
	      };
	      cleanup = function() {
	        _this.unsubscribe('annotationEditorHidden', cancel);
	        return _this.unsubscribe('annotationEditorSubmit', save);
	      };
	      this.subscribe('annotationEditorHidden', cancel);
	      this.subscribe('annotationEditorSubmit', save);
	      return this.showEditor(annotation, position);
	    };

	    Annotator.prototype.onEditAnnotation = function(annotation) {
	      var cleanup, offset, update,
	        _this = this;
	      offset = this.viewer.element.position();
	      update = function() {
	        cleanup();
	        return _this.updateAnnotation(annotation);
	      };
	      cleanup = function() {
	        _this.unsubscribe('annotationEditorHidden', cleanup);
	        return _this.unsubscribe('annotationEditorSubmit', update);
	      };
	      this.subscribe('annotationEditorHidden', cleanup);
	      this.subscribe('annotationEditorSubmit', update);
	      this.viewer.hide();
	      return this.showEditor(annotation, offset);
	    };

	    Annotator.prototype.onDeleteAnnotation = function(annotation) {
	      this.viewer.hide();
	      return this.deleteAnnotation(annotation);
	    };

	    return Annotator;

	  })(Delegator);

	  if (true) {
	    module.exports = window.Annotator;
	  }

	  Annotator.Plugin = (function(_super) {
	    __extends(Plugin, _super);

	    function Plugin(element, options) {
	      Plugin.__super__.constructor.apply(this, arguments);
	    }

	    Plugin.prototype.pluginInit = function() {};

	    return Plugin;

	  })(Delegator);

	  g = Util.getGlobal();

	  if (((_ref1 = g.document) != null ? _ref1.evaluate : void 0) == null) {
	    $.getScript('/static/vendor/Annotator/xpath.min.js');
	  }

	  if (g.getSelection == null) {
	    $.getScript('/static/vendor/Annotator/ierange.min.js');
	  }

	  if (g.JSON == null) {
	    $.getScript('/static/vendor/Annotator/json2.min.js');
	  }

	  if (g.Node == null) {
	    g.Node = {
	      ELEMENT_NODE: 1,
	      ATTRIBUTE_NODE: 2,
	      TEXT_NODE: 3,
	      CDATA_SECTION_NODE: 4,
	      ENTITY_REFERENCE_NODE: 5,
	      ENTITY_NODE: 6,
	      PROCESSING_INSTRUCTION_NODE: 7,
	      COMMENT_NODE: 8,
	      DOCUMENT_NODE: 9,
	      DOCUMENT_TYPE_NODE: 10,
	      DOCUMENT_FRAGMENT_NODE: 11,
	      NOTATION_NODE: 12
	    };
	  }

	  Annotator.$ = $;

	  Annotator.Delegator = Delegator;

	  Annotator.Range = Range;

	  Annotator.Util = Util;

	  Annotator._instances = [];

	  Annotator._t = _t;

	  Annotator.supported = function() {
	    return (function() {
	      return !!this.getSelection;
	    })();
	  };

	  Annotator.noConflict = function() {
	    Util.getGlobal().Annotator = _Annotator;
	    return this;
	  };

	  $.fn.annotator = function(options) {
	    var args;
	    args = Array.prototype.slice.call(arguments, 1);
	    return this.each(function() {
	      var instance;
	      instance = $.data(this, 'annotator');
	      if (options === 'destroy') {
	        $.removeData(this, 'annotator');
	        return instance != null ? instance.destroy(args) : void 0;
	      } else if (instance) {
	        return options && instance[options].apply(instance, args);
	      } else {
	        instance = new Annotator(this, options);
	        return $.data(this, 'annotator', instance);
	      }
	    });
	  };

	  this.Annotator = Annotator;

	  Annotator.Widget = (function(_super) {
	    __extends(Widget, _super);

	    Widget.prototype.classes = {
	      hide: 'annotator-hide',
	      invert: {
	        x: 'annotator-invert-x',
	        y: 'annotator-invert-y'
	      }
	    };

	    function Widget(element, options) {
	      Widget.__super__.constructor.apply(this, arguments);
	      this.classes = $.extend({}, Annotator.Widget.prototype.classes, this.classes);
	    }

	    Widget.prototype.destroy = function() {
	      this.removeEvents();
	      return this.element.remove();
	    };

	    Widget.prototype.checkOrientation = function() {
	      var current, offset, viewport, widget, window;
	      this.resetOrientation();
	      window = $(Annotator.Util.getGlobal());
	      widget = this.element.children(":first");
	      offset = widget.offset();
	      viewport = {
	        top: window.scrollTop(),
	        right: window.width() + window.scrollLeft()
	      };
	      current = {
	        top: offset.top,
	        right: offset.left + widget.width()
	      };
	      if ((current.top - viewport.top) < 0) {
	        this.invertY();
	      }
	      if ((current.right - viewport.right) > 0) {
	        this.invertX();
	      }
	      return this;
	    };

	    Widget.prototype.resetOrientation = function() {
	      this.element.removeClass(this.classes.invert.x).removeClass(this.classes.invert.y);
	      return this;
	    };

	    Widget.prototype.invertX = function() {
	      this.element.addClass(this.classes.invert.x);
	      return this;
	    };

	    Widget.prototype.invertY = function() {
	      this.element.addClass(this.classes.invert.y);
	      return this;
	    };

	    Widget.prototype.isInvertedY = function() {
	      return this.element.hasClass(this.classes.invert.y);
	    };

	    Widget.prototype.isInvertedX = function() {
	      return this.element.hasClass(this.classes.invert.x);
	    };

	    return Widget;

	  })(Delegator);

	  Annotator.Editor = (function(_super) {
	    __extends(Editor, _super);

	    Editor.prototype.events = {
	      "form submit": "submit",
	      ".annotator-save click": "submit",
	      ".annotator-cancel click": "hide",
	      ".annotator-cancel mouseover": "onCancelButtonMouseover",
	      "textarea keydown": "processKeypress"
	    };

	    Editor.prototype.classes = {
	      hide: 'annotator-hide',
	      focus: 'annotator-focus'
	    };

	    Editor.prototype.html = "<div class=\"annotator-outer annotator-editor\">\n  <form class=\"annotator-widget\">\n    <ul class=\"annotator-listing\"></ul>\n    <div class=\"annotator-controls\">\n      <a href=\"#cancel\" class=\"annotator-cancel\">" + _t('Cancel') + "</a>\n<a href=\"#save\" class=\"annotator-save annotator-focus\">" + _t('Save') + "</a>\n    </div>\n  </form>\n</div>";

	    Editor.prototype.options = {};

	    function Editor(options) {
	      this.onCancelButtonMouseover = __bind(this.onCancelButtonMouseover, this);
	      this.processKeypress = __bind(this.processKeypress, this);
	      this.submit = __bind(this.submit, this);
	      this.load = __bind(this.load, this);
	      this.hide = __bind(this.hide, this);
	      this.show = __bind(this.show, this);
	      Editor.__super__.constructor.call(this, $(this.html)[0], options);
	      this.fields = [];
	      this.annotation = {};
	    }

	    Editor.prototype.show = function(event) {
	      Annotator.Util.preventEventDefault(event);
	      this.element.removeClass(this.classes.hide);
	      this.element.find('.annotator-save').addClass(this.classes.focus);
	      this.checkOrientation();
	      this.element.find(":input:first").focus();
	      this.setupDraggables();
	      return this.publish('show');
	    };

	    Editor.prototype.hide = function(event) {
	      Annotator.Util.preventEventDefault(event);
	      this.element.addClass(this.classes.hide);
	      return this.publish('hide');
	    };

	    Editor.prototype.load = function(annotation) {
	      var field, _k, _len2, _ref2;
	      this.annotation = annotation;
	      this.publish('load', [this.annotation]);
	      _ref2 = this.fields;
	      for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
	        field = _ref2[_k];
	        field.load(field.element, this.annotation);
	      }
	      return this.show();
	    };

	    Editor.prototype.submit = function(event) {
	      var field, _k, _len2, _ref2;
	      Annotator.Util.preventEventDefault(event);
	      _ref2 = this.fields;
	      for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
	        field = _ref2[_k];
	        field.submit(field.element, this.annotation);
	      }
	      this.publish('save', [this.annotation]);
	      return this.hide();
	    };

	    Editor.prototype.addField = function(options) {
	      var element, field, input;
	      field = $.extend({
	        id: 'annotator-field-' + Annotator.Util.uuid(),
	        type: 'input',
	        label: '',
	        load: function() {},
	        submit: function() {}
	      }, options);
	      input = null;
	      element = $('<li class="annotator-item" />');
	      field.element = element[0];
	      switch (field.type) {
	        case 'textarea':
	          input = $('<textarea />');
	          break;
	        case 'input':
	        case 'checkbox':
	          input = $('<input />');
	          break;
	        case 'select':
	          input = $('<select />');
	      }
	      element.append(input);
	      input.attr({
	        id: field.id,
	        placeholder: field.label
	      });
	      if (field.type === 'checkbox') {
	        input[0].type = 'checkbox';
	        element.addClass('annotator-checkbox');
	        element.append($('<label />', {
	          "for": field.id,
	          html: field.label
	        }));
	      }
	      this.element.find('ul:first').append(element);
	      this.fields.push(field);
	      return field.element;
	    };

	    Editor.prototype.checkOrientation = function() {
	      var controls, list;
	      Editor.__super__.checkOrientation.apply(this, arguments);
	      list = this.element.find('ul');
	      controls = this.element.find('.annotator-controls');
	      if (this.element.hasClass(this.classes.invert.y)) {
	        controls.insertBefore(list);
	      } else if (controls.is(':first-child')) {
	        controls.insertAfter(list);
	      }
	      return this;
	    };

	    Editor.prototype.processKeypress = function(event) {
	      if (event.keyCode === 27) {
	        return this.hide();
	      } else if (event.keyCode === 13 && !event.shiftKey) {
	        return this.submit();
	      }
	    };

	    Editor.prototype.onCancelButtonMouseover = function() {
	      return this.element.find('.' + this.classes.focus).removeClass(this.classes.focus);
	    };

	    Editor.prototype.setupDraggables = function() {
	      var classes, controls, cornerItem, editor, mousedown, onMousedown, onMousemove, onMouseup, resize, textarea, throttle,
	        _this = this;
	      this.element.find('.annotator-resize').remove();
	      if (this.element.hasClass(this.classes.invert.y)) {
	        cornerItem = this.element.find('.annotator-item:last');
	      } else {
	        cornerItem = this.element.find('.annotator-item:first');
	      }
	      if (cornerItem) {
	        $('<span class="annotator-resize"></span>').appendTo(cornerItem);
	      }
	      mousedown = null;
	      classes = this.classes;
	      editor = this.element;
	      textarea = null;
	      resize = editor.find('.annotator-resize');
	      controls = editor.find('.annotator-controls');
	      throttle = false;
	      onMousedown = function(event) {
	        if (event.target === this) {
	          mousedown = {
	            element: this,
	            top: event.pageY,
	            left: event.pageX
	          };
	          textarea = editor.find('textarea:first');
	          $(window).bind({
	            'mouseup.annotator-editor-resize': onMouseup,
	            'mousemove.annotator-editor-resize': onMousemove
	          });
	          return event.preventDefault();
	        }
	      };
	      onMouseup = function() {
	        mousedown = null;
	        return $(window).unbind('.annotator-editor-resize');
	      };
	      onMousemove = function(event) {
	        var diff, directionX, directionY, height, width;
	        if (mousedown && throttle === false) {
	          diff = {
	            top: event.pageY - mousedown.top,
	            left: event.pageX - mousedown.left
	          };
	          if (mousedown.element === resize[0]) {
	            height = textarea.outerHeight();
	            width = textarea.outerWidth();
	            directionX = editor.hasClass(classes.invert.x) ? -1 : 1;
	            directionY = editor.hasClass(classes.invert.y) ? 1 : -1;
	            textarea.height(height + (diff.top * directionY));
	            textarea.width(width + (diff.left * directionX));
	            if (textarea.outerHeight() !== height) {
	              mousedown.top = event.pageY;
	            }
	            if (textarea.outerWidth() !== width) {
	              mousedown.left = event.pageX;
	            }
	          } else if (mousedown.element === controls[0]) {
	            editor.css({
	              top: parseInt(editor.css('top'), 10) + diff.top,
	              left: parseInt(editor.css('left'), 10) + diff.left
	            });
	            mousedown.top = event.pageY;
	            mousedown.left = event.pageX;
	          }
	          throttle = true;
	          return setTimeout(function() {
	            return throttle = false;
	          }, 1000 / 60);
	        }
	      };
	      resize.bind('mousedown', onMousedown);
	      return controls.bind('mousedown', onMousedown);
	    };

	    return Editor;

	  })(Annotator.Widget);

	  Annotator.Viewer = (function(_super) {
	    __extends(Viewer, _super);

	    Viewer.prototype.events = {
	      ".annotator-edit click": "onEditClick",
	      ".annotator-delete click": "onDeleteClick"
	    };

	    Viewer.prototype.classes = {
	      hide: 'annotator-hide',
	      showControls: 'annotator-visible'
	    };

	    Viewer.prototype.html = {
	      element: "<div class=\"annotator-outer annotator-viewer\">\n  <ul class=\"annotator-widget annotator-listing\"></ul>\n</div>",
	      item: "<li class=\"annotator-annotation annotator-item\">\n  <span class=\"annotator-controls\">\n    <a href=\"#\" title=\"View as webpage\" class=\"annotator-link\">View as webpage</a>\n    <button title=\"Edit\" class=\"annotator-edit\">Edit</button>\n    <button title=\"Delete\" class=\"annotator-delete\">Delete</button>\n  </span>\n</li>"
	    };

	    Viewer.prototype.options = {
	      readOnly: false
	    };

	    function Viewer(options) {
	      this.onDeleteClick = __bind(this.onDeleteClick, this);
	      this.onEditClick = __bind(this.onEditClick, this);
	      this.load = __bind(this.load, this);
	      this.hide = __bind(this.hide, this);
	      this.show = __bind(this.show, this);
	      Viewer.__super__.constructor.call(this, $(this.html.element)[0], options);
	      this.item = $(this.html.item)[0];
	      this.fields = [];
	      this.annotations = [];
	    }

	    Viewer.prototype.show = function(event) {
	      var controls,
	        _this = this;
	      Annotator.Util.preventEventDefault(event);
	      controls = this.element.find('.annotator-controls').addClass(this.classes.showControls);
	      setTimeout((function() {
	        return controls.removeClass(_this.classes.showControls);
	      }), 500);
	      this.element.removeClass(this.classes.hide);
	      return this.checkOrientation().publish('show');
	    };

	    Viewer.prototype.isShown = function() {
	      return !this.element.hasClass(this.classes.hide);
	    };

	    Viewer.prototype.hide = function(event) {
	      Annotator.Util.preventEventDefault(event);
	      this.element.addClass(this.classes.hide);
	      return this.publish('hide');
	    };

	    Viewer.prototype.load = function(annotations) {
	      var annotation, controller, controls, del, edit, element, field, item, link, links, list, _k, _l, _len2, _len3, _ref2, _ref3;
	      this.annotations = annotations || [];
	      list = this.element.find('ul:first').empty();
	      _ref2 = this.annotations;
	      for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
	        annotation = _ref2[_k];
	        item = $(this.item).clone().appendTo(list).data('annotation', annotation);
	        controls = item.find('.annotator-controls');
	        link = controls.find('.annotator-link');
	        edit = controls.find('.annotator-edit');
	        del = controls.find('.annotator-delete');
	        links = new LinkParser(annotation.links || []).get('alternate', {
	          'type': 'text/html'
	        });
	        if (links.length === 0 || (links[0].href == null)) {
	          link.remove();
	        } else {
	          link.attr('href', links[0].href);
	        }
	        if (this.options.readOnly) {
	          edit.remove();
	          del.remove();
	        } else {
	          controller = {
	            showEdit: function() {
	              return edit.removeAttr('disabled');
	            },
	            hideEdit: function() {
	              return edit.attr('disabled', 'disabled');
	            },
	            showDelete: function() {
	              return del.removeAttr('disabled');
	            },
	            hideDelete: function() {
	              return del.attr('disabled', 'disabled');
	            }
	          };
	        }
	        _ref3 = this.fields;
	        for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
	          field = _ref3[_l];
	          element = $(field.element).clone().appendTo(item)[0];
	          field.load(element, annotation, controller);
	        }
	      }
	      this.publish('load', [this.annotations]);
	      return this.show();
	    };

	    Viewer.prototype.addField = function(options) {
	      var field;
	      field = $.extend({
	        load: function() {}
	      }, options);
	      field.element = $('<div />')[0];
	      this.fields.push(field);
	      field.element;
	      return this;
	    };

	    Viewer.prototype.onEditClick = function(event) {
	      return this.onButtonClick(event, 'edit');
	    };

	    Viewer.prototype.onDeleteClick = function(event) {
	      return this.onButtonClick(event, 'delete');
	    };

	    Viewer.prototype.onButtonClick = function(event, type) {
	      var item;
	      item = $(event.target).parents('.annotator-annotation');
	      return this.publish(type, [item.data('annotation')]);
	    };

	    return Viewer;

	  })(Annotator.Widget);

	  LinkParser = (function() {
	    function LinkParser(data) {
	      this.data = data;
	    }

	    LinkParser.prototype.get = function(rel, cond) {
	      var d, k, keys, match, v, _k, _len2, _ref2, _results;
	      if (cond == null) {
	        cond = {};
	      }
	      cond = $.extend({}, cond, {
	        rel: rel
	      });
	      keys = (function() {
	        var _results;
	        _results = [];
	        for (k in cond) {
	          if (!__hasProp.call(cond, k)) continue;
	          v = cond[k];
	          _results.push(k);
	        }
	        return _results;
	      })();
	      _ref2 = this.data;
	      _results = [];
	      for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
	        d = _ref2[_k];
	        match = keys.reduce((function(m, k) {
	          return m && (d[k] === cond[k]);
	        }), true);
	        if (match) {
	          _results.push(d);
	        } else {
	          continue;
	        }
	      }
	      return _results;
	    };

	    return LinkParser;

	  })();

	  Annotator = Annotator || {};

	  Annotator.Notification = (function(_super) {
	    __extends(Notification, _super);

	    Notification.prototype.events = {
	      "click": "hide"
	    };

	    Notification.prototype.options = {
	      html: "<div class='annotator-notice'></div>",
	      classes: {
	        show: "annotator-notice-show",
	        info: "annotator-notice-info",
	        success: "annotator-notice-success",
	        error: "annotator-notice-error"
	      }
	    };

	    function Notification(options) {
	      this.hide = __bind(this.hide, this);
	      this.show = __bind(this.show, this);
	      Notification.__super__.constructor.call(this, $(this.options.html).appendTo(document.body)[0], options);
	    }

	    Notification.prototype.show = function(message, status) {
	      if (status == null) {
	        status = Annotator.Notification.INFO;
	      }
	      this.currentStatus = status;
	      $(this.element).addClass(this.options.classes.show).addClass(this.options.classes[this.currentStatus]).html(Util.escape(message || ""));
	      setTimeout(this.hide, 5000);
	      return this;
	    };

	    Notification.prototype.hide = function() {
	      if (this.currentStatus == null) {
	        this.currentStatus = Annotator.Notification.INFO;
	      }
	      $(this.element).removeClass(this.options.classes.show).removeClass(this.options.classes[this.currentStatus]);
	      return this;
	    };

	    return Notification;

	  })(Delegator);

	  Annotator.Notification.INFO = 'info';

	  Annotator.Notification.SUCCESS = 'success';

	  Annotator.Notification.ERROR = 'error';

	  $(function() {
	    var notification;
	    notification = new Annotator.Notification;
	    Annotator.showNotification = notification.show;
	    return Annotator.hideNotification = notification.hide;
	  });

	  Annotator.Plugin.Unsupported = (function(_super) {
	    __extends(Unsupported, _super);

	    function Unsupported() {
	      _ref2 = Unsupported.__super__.constructor.apply(this, arguments);
	      return _ref2;
	    }

	    Unsupported.prototype.options = {
	      message: Annotator._t("Sorry your current browser does not support the Annotator")
	    };

	    Unsupported.prototype.pluginInit = function() {
	      var _this = this;
	      if (!Annotator.supported()) {
	        return $(function() {
	          Annotator.showNotification(_this.options.message);
	          if ((window.XMLHttpRequest === void 0) && (ActiveXObject !== void 0)) {
	            return $('html').addClass('ie6');
	          }
	        });
	      }
	    };

	    return Unsupported;

	  })(Annotator.Plugin);

	  createDateFromISO8601 = function(string) {
	    var d, date, offset, regexp, time, _ref3;
	    regexp = "([0-9]{4})(-([0-9]{2})(-([0-9]{2})" + "(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(\\.([0-9]+))?)?" + "(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?";
	    d = string.match(new RegExp(regexp));
	    offset = 0;
	    date = new Date(d[1], 0, 1);
	    if (d[3]) {
	      date.setMonth(d[3] - 1);
	    }
	    if (d[5]) {
	      date.setDate(d[5]);
	    }
	    if (d[7]) {
	      date.setHours(d[7]);
	    }
	    if (d[8]) {
	      date.setMinutes(d[8]);
	    }
	    if (d[10]) {
	      date.setSeconds(d[10]);
	    }
	    if (d[12]) {
	      date.setMilliseconds(Number("0." + d[12]) * 1000);
	    }
	    if (d[14]) {
	      offset = (Number(d[16]) * 60) + Number(d[17]);
	      offset *= (_ref3 = d[15] === '-') != null ? _ref3 : {
	        1: -1
	      };
	    }
	    offset -= date.getTimezoneOffset();
	    time = Number(date) + (offset * 60 * 1000);
	    date.setTime(Number(time));
	    return date;
	  };

	  base64Decode = function(data) {
	    var ac, b64, bits, dec, h1, h2, h3, h4, i, o1, o2, o3, tmp_arr;
	    if (typeof atob !== "undefined" && atob !== null) {
	      return atob(data);
	    } else {
	      b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	      i = 0;
	      ac = 0;
	      dec = "";
	      tmp_arr = [];
	      if (!data) {
	        return data;
	      }
	      data += '';
	      while (i < data.length) {
	        h1 = b64.indexOf(data.charAt(i++));
	        h2 = b64.indexOf(data.charAt(i++));
	        h3 = b64.indexOf(data.charAt(i++));
	        h4 = b64.indexOf(data.charAt(i++));
	        bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
	        o1 = bits >> 16 & 0xff;
	        o2 = bits >> 8 & 0xff;
	        o3 = bits & 0xff;
	        if (h3 === 64) {
	          tmp_arr[ac++] = String.fromCharCode(o1);
	        } else if (h4 === 64) {
	          tmp_arr[ac++] = String.fromCharCode(o1, o2);
	        } else {
	          tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
	        }
	      }
	      return tmp_arr.join('');
	    }
	  };

	  base64UrlDecode = function(data) {
	    var i, m, _k, _ref3;
	    m = data.length % 4;
	    if (m !== 0) {
	      for (i = _k = 0, _ref3 = 4 - m; 0 <= _ref3 ? _k < _ref3 : _k > _ref3; i = 0 <= _ref3 ? ++_k : --_k) {
	        data += '=';
	      }
	    }
	    data = data.replace(/-/g, '+');
	    data = data.replace(/_/g, '/');
	    return base64Decode(data);
	  };

	  parseToken = function(token) {
	    var head, payload, sig, _ref3;
	    _ref3 = token.split('.'), head = _ref3[0], payload = _ref3[1], sig = _ref3[2];
	    return JSON.parse(base64UrlDecode(payload));
	  };

	  Annotator.Plugin.Auth = (function(_super) {
	    __extends(Auth, _super);

	    Auth.prototype.options = {
	      token: null,
	      tokenUrl: '/auth/token',
	      autoFetch: true
	    };

	    function Auth(element, options) {
	      Auth.__super__.constructor.apply(this, arguments);
	      this.waitingForToken = [];
	      if (this.options.token) {
	        this.setToken(this.options.token);
	      } else {
	        this.requestToken();
	      }
	    }

	    Auth.prototype.requestToken = function() {
	      var _this = this;
	      this.requestInProgress = true;
	      return $.ajax({
	        url: this.options.tokenUrl,
	        dataType: 'text',
	        xhrFields: {
	          withCredentials: true
	        }
	      }).done(function(data, status, xhr) {
	        return _this.setToken(data);
	      }).fail(function(xhr, status, err) {
	        var msg;
	        msg = Annotator._t("Couldn't get auth token:");
	        console.error("" + msg + " " + err, xhr);
	        return Annotator.showNotification("" + msg + " " + xhr.responseText, Annotator.Notification.ERROR);
	      }).always(function() {
	        return _this.requestInProgress = false;
	      });
	    };

	    Auth.prototype.setToken = function(token) {
	      var _results,
	        _this = this;
	      this.token = token;
	      this._unsafeToken = parseToken(token);
	      if (this.haveValidToken()) {
	        if (this.options.autoFetch) {
	          this.refreshTimeout = setTimeout((function() {
	            return _this.requestToken();
	          }), (this.timeToExpiry() - 2) * 1000);
	        }
	        this.updateHeaders();
	        _results = [];
	        while (this.waitingForToken.length > 0) {
	          _results.push(this.waitingForToken.pop()(this._unsafeToken));
	        }
	        return _results;
	      } else {
	        console.warn(Annotator._t("Didn't get a valid token."));
	        if (this.options.autoFetch) {
	          console.warn(Annotator._t("Getting a new token in 10s."));
	          return setTimeout((function() {
	            return _this.requestToken();
	          }), 10 * 1000);
	        }
	      }
	    };

	    Auth.prototype.haveValidToken = function() {
	      return (
	        this._unsafeToken &&
	        this._unsafeToken.issuedAt &&
	        this._unsafeToken.ttl &&
	        this._unsafeToken.consumerKey &&
	        this.timeToExpiry() > 0
	      );
	    };

	    Auth.prototype.timeToExpiry = function() {
	      var expiry, issue, now, timeToExpiry;
	      now = new Date().getTime() / 1000;
	      issue = createDateFromISO8601(this._unsafeToken.issuedAt).getTime() / 1000;
	      expiry = issue + this._unsafeToken.ttl;
	      timeToExpiry = expiry - now;
	      if (timeToExpiry > 0) {
	        return timeToExpiry;
	      } else {
	        return 0;
	      }
	    };

	    Auth.prototype.updateHeaders = function() {
	      var current;
	      current = this.element.data('annotator:headers');
	      return this.element.data('annotator:headers', $.extend(current, {
	        'x-annotator-auth-token': this.token
	      }));
	    };

	    Auth.prototype.withToken = function(callback) {
	      if (callback == null) {
	        return;
	      }
	      if (this.haveValidToken()) {
	        return callback(this._unsafeToken);
	      } else {
	        this.waitingForToken.push(callback);
	        if (!this.requestInProgress) {
	          return this.requestToken();
	        }
	      }
	    };

	    return Auth;

	  })(Annotator.Plugin);

	  Annotator.Plugin.Store = (function(_super) {
	    __extends(Store, _super);

	    Store.prototype.events = {
	      'annotationCreated': 'annotationCreated',
	      'annotationDeleted': 'annotationDeleted',
	      'annotationUpdated': 'annotationUpdated'
	    };

	    Store.prototype.options = {
	      annotationData: {},
	      emulateHTTP: false,
	      loadFromSearch: false,
	      prefix: '/store',
	      urls: {
	        create: '/annotations',
	        read: '/annotations/:id',
	        update: '/annotations/:id',
	        destroy: '/annotations/:id',
	        search: '/search'
	      }
	    };

	    function Store(element, options) {
	      this._onError = __bind(this._onError, this);
	      this._onLoadAnnotationsFromSearch = __bind(this._onLoadAnnotationsFromSearch, this);
	      this._onLoadAnnotations = __bind(this._onLoadAnnotations, this);
	      this._getAnnotations = __bind(this._getAnnotations, this);
	      Store.__super__.constructor.apply(this, arguments);
	      this.annotations = [];
	    }

	    Store.prototype.pluginInit = function() {
	      if (!Annotator.supported()) {
	        return;
	      }
	      if (this.annotator.plugins.Auth) {
	        return this.annotator.plugins.Auth.withToken(this._getAnnotations);
	      } else {
	        return this._getAnnotations();
	      }
	    };

	    Store.prototype._getAnnotations = function() {
	      if (this.options.loadFromSearch) {
	        return this.loadAnnotationsFromSearch(this.options.loadFromSearch);
	      } else {
	        return this.loadAnnotations();
	      }
	    };

	    Store.prototype.annotationCreated = function(annotation) {
	      var _this = this;
	      if (__indexOf.call(this.annotations, annotation) < 0) {
	        this.registerAnnotation(annotation);
	        return this._apiRequest('create', annotation, function(data) {
	          if (data.id == null) {
	            console.warn(Annotator._t("Warning: No ID returned from server for annotation "), annotation);
	          }
	          return _this.updateAnnotation(annotation, data);
	        });
	      } else {
	        return this.updateAnnotation(annotation, {});
	      }
	    };

	    Store.prototype.annotationUpdated = function(annotation) {
	      var _this = this;
	      if (__indexOf.call(this.annotations, annotation) >= 0) {
	        return this._apiRequest('update', annotation, (function(data) {
	          return _this.updateAnnotation(annotation, data);
	        }));
	      }
	    };

	    Store.prototype.annotationDeleted = function(annotation) {
	      var _this = this;
	      if (__indexOf.call(this.annotations, annotation) >= 0) {
	        return this._apiRequest('destroy', annotation, (function() {
	          return _this.unregisterAnnotation(annotation);
	        }));
	      }
	    };

	    Store.prototype.registerAnnotation = function(annotation) {
	      return this.annotations.push(annotation);
	    };

	    Store.prototype.unregisterAnnotation = function(annotation) {
	      return this.annotations.splice(this.annotations.indexOf(annotation), 1);
	    };

	    Store.prototype.updateAnnotation = function(annotation, data) {
	      if (__indexOf.call(this.annotations, annotation) < 0) {
	        console.error(Annotator._t("Trying to update unregistered annotation!"));
	      } else {
	        $.extend(annotation, data);
	      }
	      return $(annotation.highlights).data('annotation', annotation);
	    };

	    Store.prototype.loadAnnotations = function() {
	      return this._apiRequest('read', null, this._onLoadAnnotations);
	    };

	    Store.prototype._onLoadAnnotations = function(data) {
	      var a, annotation, annotationMap, newData, _k, _l, _len2, _len3, _ref3;
	      if (data == null) {
	        data = [];
	      }
	      annotationMap = {};
	      _ref3 = this.annotations;
	      for (_k = 0, _len2 = _ref3.length; _k < _len2; _k++) {
	        a = _ref3[_k];
	        annotationMap[a.id] = a;
	      }
	      newData = [];
	      for (_l = 0, _len3 = data.length; _l < _len3; _l++) {
	        a = data[_l];
	        if (annotationMap[a.id]) {
	          annotation = annotationMap[a.id];
	          this.updateAnnotation(annotation, a);
	        } else {
	          newData.push(a);
	        }
	      }
	      this.annotations = this.annotations.concat(newData);
	      return this.annotator.loadAnnotations(newData.slice());
	    };

	    Store.prototype.loadAnnotationsFromSearch = function(searchOptions) {
	      return this._apiRequest('search', searchOptions, this._onLoadAnnotationsFromSearch);
	    };

	    Store.prototype._onLoadAnnotationsFromSearch = function(data) {
	      if (data == null) {
	        data = {};
	      }
	      return this._onLoadAnnotations(data.rows || []);
	    };

	    Store.prototype.dumpAnnotations = function() {
	      var ann, _k, _len2, _ref3, _results;
	      _ref3 = this.annotations;
	      _results = [];
	      for (_k = 0, _len2 = _ref3.length; _k < _len2; _k++) {
	        ann = _ref3[_k];
	        _results.push(JSON.parse(this._dataFor(ann)));
	      }
	      return _results;
	    };

	    Store.prototype._apiRequest = function(action, obj, onSuccess) {
	      var id, options, request, url;
	      id = obj && obj.id;
	      url = this._urlFor(action, id);
	      options = this._apiRequestOptions(action, obj, onSuccess);
	      request = $.ajax(url, options);
	      request._id = id;
	      request._action = action;
	      return request;
	    };

	    Store.prototype._apiRequestOptions = function(action, obj, onSuccess) {
	      var data, method, opts;
	      method = this._methodFor(action);
	      opts = {
	        type: method,
	        headers: this.element.data('annotator:headers'),
	        dataType: "json",
	        success: onSuccess || function() {},
	        error: this._onError
	      };
	      if (this.options.emulateHTTP && (method === 'PUT' || method === 'DELETE')) {
	        opts.headers = $.extend(opts.headers, {
	          'X-HTTP-Method-Override': method
	        });
	        opts.type = 'POST';
	      }
	      if (action === "search") {
	        opts = $.extend(opts, {
	          data: obj
	        });
	        return opts;
	      }
	      data = obj && this._dataFor(obj);
	      if (this.options.emulateJSON) {
	        opts.data = {
	          json: data
	        };
	        if (this.options.emulateHTTP) {
	          opts.data._method = method;
	        }
	        return opts;
	      }
	      opts = $.extend(opts, {
	        data: data,
	        contentType: "application/json; charset=utf-8"
	      });
	      return opts;
	    };

	    Store.prototype._urlFor = function(action, id) {
	      var url;
	      url = this.options.prefix != null ? this.options.prefix : '';
	      url += this.options.urls[action];
	      url = url.replace(/\/:id/, id != null ? '/' + id : '');
	      url = url.replace(/:id/, id != null ? id : '');
	      return url;
	    };

	    Store.prototype._methodFor = function(action) {
	      var table;
	      table = {
	        'create': 'POST',
	        'read': 'GET',
	        'update': 'PUT',
	        'destroy': 'DELETE',
	        'search': 'GET'
	      };
	      return table[action];
	    };

	    Store.prototype._dataFor = function(annotation) {
	      var data, highlights;
	      highlights = annotation.highlights;
	      delete annotation.highlights;
	      $.extend(annotation, this.options.annotationData);
	      data = JSON.stringify(annotation);
	      if (highlights) {
	        annotation.highlights = highlights;
	      }
	      return data;
	    };

	    Store.prototype._onError = function(xhr) {
	      var action, message;
	      AController.annotationCore.alert(xhr);
	      // action = xhr._action;
	      // message = Annotator._t("Sorry we could not ") + action + Annotator._t(" this annotation");
	      // if (xhr._action === 'search') {
	      //   message = Annotator._t("Sorry we could not search the store for annotations");
	      // } else if (xhr._action === 'read' && !xhr._id) {
	      //   message = Annotator._t("Sorry we could not ") + action + Annotator._t(" the annotations from the store");
	      // }
	      // switch (xhr.status) {
	      //   case 401:
	      //     message = Annotator._t("Sorry you are not allowed to ") + action + Annotator._t(" this annotation");
	      //     break;
	      //   case 404:
	      //     message = Annotator._t("Sorry we could not connect to the annotations store");
	      //     break;
	      //   case 500:
	      //     message = Annotator._t("Sorry something went wrong with the annotation store");
	      // }
	      // Annotator.showNotification(message, Annotator.Notification.ERROR);
	      // return console.error(Annotator._t("API request failed:") + (" '" + xhr.status + "'"));
	    };

	    return Store;

	  })(Annotator.Plugin);

	  Annotator.Plugin.Permissions = (function(_super) {
	    __extends(Permissions, _super);

	    Permissions.prototype.events = {
	      'beforeAnnotationCreated': 'addFieldsToAnnotation'
	    };

	    Permissions.prototype.options = {
	      showViewPermissionsCheckbox: true,
	      showEditPermissionsCheckbox: true,
	      userId: function(user) {
	        return user;
	      },
	      userString: function(user) {
	        return user;
	      },
	      userAuthorize: function(action, annotation, user) {
	        var token, tokens, _k, _len2;
	        if (annotation.permissions) {
	          tokens = annotation.permissions[action] || [];
	          if (tokens.length === 0) {
	            return true;
	          }
	          for (_k = 0, _len2 = tokens.length; _k < _len2; _k++) {
	            token = tokens[_k];
	            if (this.userId(user) === token) {
	              return true;
	            }
	          }
	          return false;
	        } else if (annotation.user) {
	          if (user) {
	            return this.userId(user) === this.userId(annotation.user);
	          } else {
	            return false;
	          }
	        }
	        return true;
	      },
	      user: '',
	      permissions: {
	        'read': [],
	        'update': [],
	        'delete': [],
	        'admin': []
	      }
	    };

	    function Permissions(element, options) {
	      this._setAuthFromToken = __bind(this._setAuthFromToken, this);
	      this.updateViewer = __bind(this.updateViewer, this);
	      this.updateAnnotationPermissions = __bind(this.updateAnnotationPermissions, this);
	      this.updatePermissionsField = __bind(this.updatePermissionsField, this);
	      this.addFieldsToAnnotation = __bind(this.addFieldsToAnnotation, this);
	      Permissions.__super__.constructor.apply(this, arguments);
	      if (this.options.user) {
	        this.setUser(this.options.user);
	        delete this.options.user;
	      }
	    }

	    Permissions.prototype.pluginInit = function() {
	      var createCallback, self,
	        _this = this;
	      if (!Annotator.supported()) {
	        return;
	      }
	      self = this;
	      createCallback = function(method, type) {
	        return function(field, annotation) {
	          return self[method].call(self, type, field, annotation);
	        };
	      };
	      if (!this.user && this.annotator.plugins.Auth) {
	        this.annotator.plugins.Auth.withToken(this._setAuthFromToken);
	      }
	      if (this.options.showViewPermissionsCheckbox === true) {
	        this.annotator.editor.addField({
	          type: 'checkbox',
	          label: Annotator._t('Allow anyone to <strong>view</strong> this annotation'),
	          load: createCallback('updatePermissionsField', 'read'),
	          submit: createCallback('updateAnnotationPermissions', 'read')
	        });
	      }
	      if (this.options.showEditPermissionsCheckbox === true) {
	        this.annotator.editor.addField({
	          type: 'checkbox',
	          label: Annotator._t('Allow anyone to <strong>edit</strong> this annotation'),
	          load: createCallback('updatePermissionsField', 'update'),
	          submit: createCallback('updateAnnotationPermissions', 'update')
	        });
	      }
	      this.annotator.viewer.addField({
	        load: this.updateViewer
	      });
	      if (this.annotator.plugins.Filter) {
	        return this.annotator.plugins.Filter.addFilter({
	          label: Annotator._t('User'),
	          property: 'user',
	          isFiltered: function(input, user) {
	            var keyword, _k, _len2, _ref3;
	            user = _this.options.userString(user);
	            if (!(input && user)) {
	              return false;
	            }
	            _ref3 = input.split(/\s*/);
	            for (_k = 0, _len2 = _ref3.length; _k < _len2; _k++) {
	              keyword = _ref3[_k];
	              if (user.indexOf(keyword) === -1) {
	                return false;
	              }
	            }
	            return true;
	          }
	        });
	      }
	    };

	    Permissions.prototype.setUser = function(user) {
	      return this.user = user;
	    };

	    Permissions.prototype.addFieldsToAnnotation = function(annotation) {
	      if (annotation) {
	        annotation.permissions = $.extend(true, {}, this.options.permissions);
	        if (this.user) {
	          return annotation.user = this.user;
	        }
	      }
	    };

	    Permissions.prototype.authorize = function(action, annotation, user) {
	      if (user === void 0) {
	        user = this.user;
	      }
	      if (this.options.userAuthorize) {
	        return this.options.userAuthorize.call(this.options, action, annotation, user);
	      } else {
	        return true;
	      }
	    };

	    Permissions.prototype.updatePermissionsField = function(action, field, annotation) {
	      var input;
	      field = $(field).show();
	      input = field.find('input').removeAttr('disabled');
	      if (!this.authorize('admin', annotation)) {
	        field.hide();
	      }
	      if (this.authorize(action, annotation || {}, null)) {
	        return input.attr('checked', 'checked');
	      } else {
	        return input.removeAttr('checked');
	      }
	    };

	    Permissions.prototype.updateAnnotationPermissions = function(type, field, annotation) {
	      var dataKey;
	      if (!annotation.permissions) {
	        annotation.permissions = $.extend(true, {}, this.options.permissions);
	      }
	      dataKey = type + '-permissions';
	      if ($(field).find('input').is(':checked')) {
	        return annotation.permissions[type] = [];
	      } else {
	        return annotation.permissions[type] = [this.options.userId(this.user)];
	      }
	    };

	    Permissions.prototype.updateViewer = function(field, annotation, controls) {
	      var user, username;
	      field = $(field);
	      username = this.options.userString(annotation.user);
	      if (annotation.user && username && typeof username === 'string') {
	        user = Annotator.Util.escape(this.options.userString(annotation.user));
	        field.html(user).addClass('annotator-user');
	      } else {
	        field.remove();
	      }
	      if (controls) {
	        if (!this.authorize('update', annotation)) {
	          controls.hideEdit();
	        }
	        if (!this.authorize('delete', annotation)) {
	          return controls.hideDelete();
	        }
	      }
	    };

	    Permissions.prototype._setAuthFromToken = function(token) {
	      return this.setUser(token.userId);
	    };

	    return Permissions;

	  })(Annotator.Plugin);

	  Annotator.Plugin.AnnotateItPermissions = (function(_super) {
	    __extends(AnnotateItPermissions, _super);

	    function AnnotateItPermissions() {
	      this._setAuthFromToken = __bind(this._setAuthFromToken, this);
	      this.updateAnnotationPermissions = __bind(this.updateAnnotationPermissions, this);
	      this.updatePermissionsField = __bind(this.updatePermissionsField, this);
	      this.addFieldsToAnnotation = __bind(this.addFieldsToAnnotation, this);
	      _ref3 = AnnotateItPermissions.__super__.constructor.apply(this, arguments);
	      return _ref3;
	    }

	    AnnotateItPermissions.prototype.options = {
	      showViewPermissionsCheckbox: true,
	      showEditPermissionsCheckbox: true,
	      groups: {
	        world: 'group:__world__',
	        authenticated: 'group:__authenticated__',
	        consumer: 'group:__consumer__'
	      },
	      userId: function(user) {
	        return user.userId;
	      },
	      userString: function(user) {
	        return user.userId;
	      },
	      userAuthorize: function(action, annotation, user) {
	        var action_field, permissions, _ref4, _ref5, _ref6, _ref7;
	        permissions = annotation.permissions || {};
	        action_field = permissions[action] || [];
	        if (_ref4 = this.groups.world, __indexOf.call(action_field, _ref4) >= 0) {
	          return true;
	        } else if ((user != null) && (user.userId != null) && (user.consumerKey != null)) {
	          if (user.userId === annotation.user && user.consumerKey === annotation.consumer) {
	            return true;
	          } else if (_ref5 = this.groups.authenticated, __indexOf.call(action_field, _ref5) >= 0) {
	            return true;
	          } else if (user.consumerKey === annotation.consumer && (_ref6 = this.groups.consumer, __indexOf.call(action_field, _ref6) >= 0)) {
	            return true;
	          } else if (user.consumerKey === annotation.consumer && (_ref7 = user.userId, __indexOf.call(action_field, _ref7) >= 0)) {
	            return true;
	          } else if (user.consumerKey === annotation.consumer && user.admin) {
	            return true;
	          } else {
	            return false;
	          }
	        } else {
	          return false;
	        }
	      },
	      permissions: {
	        'read': ['group:__world__'],
	        'update': [],
	        'delete': [],
	        'admin': []
	      }
	    };

	    AnnotateItPermissions.prototype.addFieldsToAnnotation = function(annotation) {
	      if (annotation) {
	        annotation.permissions = this.options.permissions;
	        if (this.user) {
	          annotation.user = this.user.userId;
	          return annotation.consumer = this.user.consumerKey;
	        }
	      }
	    };

	    AnnotateItPermissions.prototype.updatePermissionsField = function(action, field, annotation) {
	      var input;
	      field = $(field).show();
	      input = field.find('input').removeAttr('disabled');
	      if (!this.authorize('admin', annotation)) {
	        field.hide();
	      }
	      if (this.user && this.authorize(action, annotation || {}, {
	        userId: '__nonexistentuser__',
	        consumerKey: this.user.consumerKey
	      })) {
	        return input.attr('checked', 'checked');
	      } else {
	        return input.removeAttr('checked');
	      }
	    };

	    AnnotateItPermissions.prototype.updateAnnotationPermissions = function(type, field, annotation) {
	      var dataKey;
	      if (!annotation.permissions) {
	        annotation.permissions = this.options.permissions;
	      }
	      dataKey = type + '-permissions';
	      if ($(field).find('input').is(':checked')) {
	        return annotation.permissions[type] = [type === 'read' ? this.options.groups.world : this.options.groups.consumer];
	      } else {
	        return annotation.permissions[type] = [];
	      }
	    };

	    AnnotateItPermissions.prototype._setAuthFromToken = function(token) {
	      return this.setUser(token);
	    };

	    return AnnotateItPermissions;

	  })(Annotator.Plugin.Permissions);

	  Annotator.Plugin.Filter = (function(_super) {
	    __extends(Filter, _super);

	    Filter.prototype.events = {
	      ".annotator-filter-property input focus": "_onFilterFocus",
	      ".annotator-filter-property input blur": "_onFilterBlur",
	      ".annotator-filter-property input keyup": "_onFilterKeyup",
	      ".annotator-filter-previous click": "_onPreviousClick",
	      ".annotator-filter-next click": "_onNextClick",
	      ".annotator-filter-clear click": "_onClearClick"
	    };

	    Filter.prototype.classes = {
	      active: 'annotator-filter-active',
	      hl: {
	        hide: 'annotator-hl-filtered',
	        active: 'annotator-hl-active'
	      }
	    };

	    Filter.prototype.html = {
	      element: "<div class=\"annotator-filter\">\n  <strong>" + Annotator._t('Navigate:') + "</strong>\n<span class=\"annotator-filter-navigation\">\n  <button class=\"annotator-filter-previous\">" + Annotator._t('Previous') + "</button>\n<button class=\"annotator-filter-next\">" + Annotator._t('Next') + "</button>\n</span>\n<strong>" + Annotator._t('Filter by:') + "</strong>\n</div>",
	      filter: "<span class=\"annotator-filter-property\">\n  <label></label>\n  <input/>\n  <button class=\"annotator-filter-clear\">" + Annotator._t('Clear') + "</button>\n</span>"
	    };

	    Filter.prototype.options = {
	      appendTo: 'body',
	      filters: [],
	      addAnnotationFilter: true,
	      isFiltered: function(input, property) {
	        var keyword, _k, _len2, _ref4;
	        if (!(input && property)) {
	          return false;
	        }
	        _ref4 = input.split(/\s+/);
	        for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
	          keyword = _ref4[_k];
	          if (property.indexOf(keyword) === -1) {
	            return false;
	          }
	        }
	        return true;
	      }
	    };

	    function Filter(element, options) {
	      this._onPreviousClick = __bind(this._onPreviousClick, this);
	      this._onNextClick = __bind(this._onNextClick, this);
	      this._onFilterKeyup = __bind(this._onFilterKeyup, this);
	      this._onFilterBlur = __bind(this._onFilterBlur, this);
	      this._onFilterFocus = __bind(this._onFilterFocus, this);
	      this.updateHighlights = __bind(this.updateHighlights, this);
	      var _base;
	      element = $(this.html.element).appendTo((options != null ? options.appendTo : void 0) || this.options.appendTo);
	      Filter.__super__.constructor.call(this, element, options);
	      (_base = this.options).filters || (_base.filters = []);
	      this.filter = $(this.html.filter);
	      this.filters = [];
	      this.current = 0;
	    }

	    Filter.prototype.pluginInit = function() {
	      var filter, _k, _len2, _ref4;
	      _ref4 = this.options.filters;
	      for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
	        filter = _ref4[_k];
	        this.addFilter(filter);
	      }
	      this.updateHighlights();
	      this._setupListeners()._insertSpacer();
	      if (this.options.addAnnotationFilter === true) {
	        return this.addFilter({
	          label: Annotator._t('Annotation'),
	          property: 'text'
	        });
	      }
	    };

	    Filter.prototype.destroy = function() {
	      var currentMargin, html;
	      Filter.__super__.destroy.apply(this, arguments);
	      html = $('html');
	      currentMargin = parseInt(html.css('padding-top'), 10) || 0;
	      html.css('padding-top', currentMargin - this.element.outerHeight());
	      return this.element.remove();
	    };

	    Filter.prototype._insertSpacer = function() {
	      var currentMargin, html;
	      html = $('html');
	      currentMargin = parseInt(html.css('padding-top'), 10) || 0;
	      html.css('padding-top', currentMargin + this.element.outerHeight());
	      return this;
	    };

	    Filter.prototype._setupListeners = function() {
	      var event, events, _k, _len2;
	      events = ['annotationsLoaded', 'annotationCreated', 'annotationUpdated', 'annotationDeleted'];
	      for (_k = 0, _len2 = events.length; _k < _len2; _k++) {
	        event = events[_k];
	        this.annotator.subscribe(event, this.updateHighlights);
	      }
	      return this;
	    };

	    Filter.prototype.addFilter = function(options) {
	      var f, filter;
	      filter = $.extend({
	        label: '',
	        property: '',
	        isFiltered: this.options.isFiltered
	      }, options);
	      if (!((function() {
	        var _k, _len2, _ref4, _results;
	        _ref4 = this.filters;
	        _results = [];
	        for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
	          f = _ref4[_k];
	          if (f.property === filter.property) {
	            _results.push(f);
	          }
	        }
	        return _results;
	      }).call(this)).length) {
	        filter.id = 'annotator-filter-' + filter.property;
	        filter.annotations = [];
	        filter.element = this.filter.clone().appendTo(this.element);
	        filter.element.find('label').html(filter.label).attr('for', filter.id);
	        filter.element.find('input').attr({
	          id: filter.id,
	          placeholder: Annotator._t('Filter by ') + filter.label + '\u2026'
	        });
	        filter.element.find('button').hide();
	        filter.element.data('filter', filter);
	        this.filters.push(filter);
	      }
	      return this;
	    };

	    Filter.prototype.updateFilter = function(filter) {
	      var annotation, annotations, input, property, _k, _len2, _ref4;
	      filter.annotations = [];
	      this.updateHighlights();
	      this.resetHighlights();
	      input = $.trim(filter.element.find('input').val());
	      if (input) {
	        annotations = this.highlights.map(function() {
	          return $(this).data('annotation');
	        });
	        _ref4 = $.makeArray(annotations);
	        for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
	          annotation = _ref4[_k];
	          property = annotation[filter.property];
	          if (filter.isFiltered(input, property)) {
	            filter.annotations.push(annotation);
	          }
	        }
	        return this.filterHighlights();
	      }
	    };

	    Filter.prototype.updateHighlights = function() {
	      this.highlights = this.annotator.element.find('.annotator-hl:visible');
	      return this.filtered = this.highlights.not(this.classes.hl.hide);
	    };

	    Filter.prototype.filterHighlights = function() {
	      var activeFilters, annotation, annotations, filtered, highlights, index, uniques, _k, _len2, _ref4;
	      activeFilters = $.grep(this.filters, function(filter) {
	        return !!filter.annotations.length;
	      });
	      filtered = ((_ref4 = activeFilters[0]) != null ? _ref4.annotations : void 0) || [];
	      if (activeFilters.length > 1) {
	        annotations = [];
	        $.each(activeFilters, function() {
	          return $.merge(annotations, this.annotations);
	        });
	        uniques = [];
	        filtered = [];
	        $.each(annotations, function() {
	          if ($.inArray(this, uniques) === -1) {
	            return uniques.push(this);
	          } else {
	            return filtered.push(this);
	          }
	        });
	      }
	      highlights = this.highlights;
	      for (index = _k = 0, _len2 = filtered.length; _k < _len2; index = ++_k) {
	        annotation = filtered[index];
	        highlights = highlights.not(annotation.highlights);
	      }
	      highlights.addClass(this.classes.hl.hide);
	      this.filtered = this.highlights.not(this.classes.hl.hide);
	      return this;
	    };

	    Filter.prototype.resetHighlights = function() {
	      this.highlights.removeClass(this.classes.hl.hide);
	      this.filtered = this.highlights;
	      return this;
	    };

	    Filter.prototype._onFilterFocus = function(event) {
	      var input;
	      input = $(event.target);
	      input.parent().addClass(this.classes.active);
	      return input.next('button').show();
	    };

	    Filter.prototype._onFilterBlur = function(event) {
	      var input;
	      if (!event.target.value) {
	        input = $(event.target);
	        input.parent().removeClass(this.classes.active);
	        return input.next('button').hide();
	      }
	    };

	    Filter.prototype._onFilterKeyup = function(event) {
	      var filter;
	      filter = $(event.target).parent().data('filter');
	      if (filter) {
	        return this.updateFilter(filter);
	      }
	    };

	    Filter.prototype._findNextHighlight = function(previous) {
	      var active, annotation, current, index, next, offset, operator, resetOffset;
	      if (!this.highlights.length) {
	        return this;
	      }
	      offset = previous ? 0 : -1;
	      resetOffset = previous ? -1 : 0;
	      operator = previous ? 'lt' : 'gt';
	      active = this.highlights.not('.' + this.classes.hl.hide);
	      current = active.filter('.' + this.classes.hl.active);
	      if (!current.length) {
	        current = active.eq(offset);
	      }
	      annotation = current.data('annotation');
	      index = active.index(current[0]);
	      next = active.filter(":" + operator + "(" + index + ")").not(annotation.highlights).eq(resetOffset);
	      if (!next.length) {
	        next = active.eq(resetOffset);
	      }
	      return this._scrollToHighlight(next.data('annotation').highlights);
	    };

	    Filter.prototype._onNextClick = function(event) {
	      return this._findNextHighlight();
	    };

	    Filter.prototype._onPreviousClick = function(event) {
	      return this._findNextHighlight(true);
	    };

	    Filter.prototype._scrollToHighlight = function(highlight) {
	      highlight = $(highlight);
	      this.highlights.removeClass(this.classes.hl.active);
	      highlight.addClass(this.classes.hl.active);
	      return $('html, body').animate({
	        scrollTop: highlight.offset().top - (this.element.height() + 20)
	      }, 150);
	    };

	    Filter.prototype._onClearClick = function(event) {
	      return $(event.target).prev('input').val('').keyup().blur();
	    };

	    return Filter;

	  })(Annotator.Plugin);

	  Annotator.Plugin.Markdown = (function(_super) {
	    __extends(Markdown, _super);

	    Markdown.prototype.events = {
	      'annotationViewerTextField': 'updateTextField'
	    };

	    function Markdown(element, options) {
	      this.updateTextField = __bind(this.updateTextField, this);
	      if ((typeof Showdown !== "undefined" && Showdown !== null ? Showdown.converter : void 0) != null) {
	        Markdown.__super__.constructor.apply(this, arguments);
	        this.converter = new Showdown.converter();
	      } else {
	        console.error(Annotator._t("To use the Markdown plugin, you must include Showdown into the page first."));
	      }
	    }

	    Markdown.prototype.updateTextField = function(field, annotation) {
	      var text;
	      text = Annotator.Util.escape(annotation.text || '');
	      return $(field).html(this.convert(text));
	    };

	    Markdown.prototype.convert = function(text) {
	      return this.converter.makeHtml(text);
	    };

	    return Markdown;

	  })(Annotator.Plugin);

	  Annotator.Plugin.Tags = (function(_super) {
	    __extends(Tags, _super);

	    function Tags() {
	      this.setAnnotationTags = __bind(this.setAnnotationTags, this);
	      this.updateField = __bind(this.updateField, this);
	      _ref4 = Tags.__super__.constructor.apply(this, arguments);
	      return _ref4;
	    }

	    Tags.prototype.options = {
	      parseTags: function(string) {
	        var tags;
	        string = $.trim(string);
	        tags = [];
	        if (string) {
	          tags = string.split(/\s+/);
	        }
	        return tags;
	      },
	      stringifyTags: function(array) {
	        return array.join(" ");
	      }
	    };

	    Tags.prototype.field = null;

	    Tags.prototype.input = null;

	    Tags.prototype.pluginInit = function() {
	      if (!Annotator.supported()) {
	        return;
	      }
	      this.field = this.annotator.editor.addField({
	        label: Annotator._t('Add some tags here') + '\u2026',
	        load: this.updateField,
	        submit: this.setAnnotationTags
	      });
	      this.annotator.viewer.addField({
	        load: this.updateViewer
	      });
	      if (this.annotator.plugins.Filter) {
	        this.annotator.plugins.Filter.addFilter({
	          label: Annotator._t('Tag'),
	          property: 'tags',
	          isFiltered: Annotator.Plugin.Tags.filterCallback
	        });
	      }
	      return this.input = $(this.field).find(':input');
	    };

	    Tags.prototype.parseTags = function(string) {
	      return this.options.parseTags(string);
	    };

	    Tags.prototype.stringifyTags = function(array) {
	      return this.options.stringifyTags(array);
	    };

	    Tags.prototype.updateField = function(field, annotation) {
	      var value;
	      value = '';
	      if (annotation.tags) {
	        value = this.stringifyTags(annotation.tags);
	      }
	      return this.input.val(value);
	    };

	    Tags.prototype.setAnnotationTags = function(field, annotation) {
	      return annotation.tags = this.parseTags(this.input.val());
	    };

	    Tags.prototype.updateViewer = function(field, annotation) {
	      field = $(field);
	      if (annotation.tags && $.isArray(annotation.tags) && annotation.tags.length) {
	        return field.addClass('annotator-tags').html(function() {
	          var string;
	          return string = $.map(annotation.tags, function(tag) {
	            return '<span class="annotator-tag">' + Annotator.Util.escape(tag) + '</span>';
	          }).join(' ');
	        });
	      } else {
	        return field.remove();
	      }
	    };

	    return Tags;

	  })(Annotator.Plugin);

	  Annotator.Plugin.Tags.filterCallback = function(input, tags) {
	    var keyword, keywords, matches, tag, _k, _l, _len2, _len3;
	    if (tags == null) {
	      tags = [];
	    }
	    matches = 0;
	    keywords = [];
	    if (input) {
	      keywords = input.split(/\s+/g);
	      for (_k = 0, _len2 = keywords.length; _k < _len2; _k++) {
	        keyword = keywords[_k];
	        if (tags.length) {
	          for (_l = 0, _len3 = tags.length; _l < _len3; _l++) {
	            tag = tags[_l];
	            if (tag.indexOf(keyword) !== -1) {
	              matches += 1;
	            }
	          }
	        }
	      }
	    }
	    return matches === keywords.length;
	  };

	  Annotator.prototype.setupPlugins = function(config, options) {
	    var name, opts, pluginConfig, plugins, uri, win, _k, _len2, _results;
	    if (config == null) {
	      config = {};
	    }
	    if (options == null) {
	      options = {};
	    }
	    win = Annotator.Util.getGlobal();
	    plugins = ['Unsupported', 'Auth', 'Tags', 'Filter', 'Store', 'AnnotateItPermissions'];
	    if (win.Showdown) {
	      plugins.push('Markdown');
	    }
	    uri = win.location.href.split(/#|\?/).shift() || '';
	    pluginConfig = {
	      Tags: {},
	      Filter: {
	        filters: [
	          {
	            label: Annotator._t('User'),
	            property: 'user'
	          }, {
	            label: Annotator._t('Tags'),
	            property: 'tags'
	          }
	        ]
	      },
	      Auth: {
	        tokenUrl: config.tokenUrl || 'http://annotateit.org/api/token'
	      },
	      Store: {
	        prefix: config.storeUrl || 'http://annotateit.org/api',
	        annotationData: {
	          uri: uri
	        },
	        loadFromSearch: {
	          uri: uri
	        }
	      }
	    };
	    for (name in options) {
	      if (!__hasProp.call(options, name)) continue;
	      opts = options[name];
	      if (__indexOf.call(plugins, name) < 0) {
	        plugins.push(name);
	      }
	    }
	    $.extend(true, pluginConfig, options);
	    _results = [];
	    for (_k = 0, _len2 = plugins.length; _k < _len2; _k++) {
	      name = plugins[_k];
	      if (!(name in pluginConfig) || pluginConfig[name]) {
	        _results.push(this.addPlugin(name, pluginConfig[name]));
	      } else {
	        _results.push(void 0);
	      }
	    }
	    return _results;
	  };

	//
	//# sourceMappingURL=annotator-full.map

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	(function(Annotator) {
	  var $, Annotator, Delegator, LinkParser, Range, Util, base64Decode, base64UrlDecode, createDateFromISO8601, findChild, fn, functions, g, getNodeName, getNodePosition, gettext, parseToken, simpleXPathJQuery, simpleXPathPure, _Annotator, _gettext, _i, _j, _len, _len1, _ref, _ref1, _ref2, _ref3, _ref4, _t,
	    __slice = [].slice,
	    __hasProp = {}.hasOwnProperty,
	    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

	 Annotator.Plugin.LocalStore = (function(_super) {
	  var __extends = function(child, parent) { 
	        for (var key in parent) { 
	            if (__hasProp.call(parent, key)) 
	                child[key] = parent[key]; 
	        } 
	        function ctor() { 
	            this.constructor = child; 
	        } 

	        ctor.prototype = parent.prototype; 
	        child.prototype = new ctor(); 
	        child.__super__ = parent.prototype; 
	        return child; 
	    };
	    __extends(LocalStore, _super);

	    LocalStore.prototype.events = {};

	    LocalStore.prototype.options = {
	      annotationData: {},
	      emulateHTTP: false,
	      loadFromSearch: false,
	      prefix: '/localStore',
	      urls: {
	        create: '/annotations',
	        read: '/annotations/:id',
	        update: '/annotations/:id',
	        destroy: '/annotations/:id',
	        search: '/search'
	      }
	    };

	    function LocalStore(element, options) {
	      this._onError = __bind(this._onError, this);
	      this._onLoadAnnotations = __bind(this._onLoadAnnotations, this);
	      this._getAnnotations = __bind(this._getAnnotations, this);
	      LocalStore.__super__.constructor.apply(this, arguments);
	      this.masterannotations = options.annotations;
	      this.annotations = [];
	    }

	    LocalStore.prototype.pluginInit = function() {
	      if (!Annotator.supported()) {
	        return;
	      }
	      return this._getAnnotations();
	    };

	    LocalStore.prototype._getAnnotations = function() {
	      return this.loadAnnotations();
	    };

	    LocalStore.prototype.registerAnnotation = function(annotation) {
	      return this.annotations.push(annotation);
	    };

	    LocalStore.prototype.updateAnnotation = function(annotation, data) {
	      if (__indexOf.call(this.annotations, annotation) < 0) {
	        console.error(Annotator._t("Trying to update unregistered annotation!"));
	      } else {
	        jQuery.extend(annotation, data);
	      }
	      return jQuery(annotation.highlights).data('annotation', annotation);
	    };

	    LocalStore.prototype.unregisterAnnotation = function(annotation) {
	      return this.annotations.splice(this.annotations.indexOf(annotation), 1);
	    };

	    LocalStore.prototype.loadAnnotations = function() {
	      return this._onLoadAnnotations(this.masterannotations);
	    };

	    LocalStore.prototype._onLoadAnnotations = function(data) {
	      var a, annotation, annotationMap, newData, _k, _l, _len2, _len3, _ref3;
	      if (data == null) {
	        data = [];
	      }
	      annotationMap = {};
	      _ref3 = this.annotations;
	      for (_k = 0, _len2 = _ref3.length; _k < _len2; _k++) {
	        a = _ref3[_k];
	        annotationMap[a.id] = a;
	      }
	      newData = [];
	      for (_l = 0, _len3 = data.length; _l < _len3; _l++) {
	        a = data[_l];
	        if (annotationMap[a.id]) {
	          annotation = annotationMap[a.id];
	          this.updateAnnotation(annotation, a);
	        } else {
	          newData.push(a);
	        }
	      }
	      this.annotations = this.annotations.concat(newData);
	      return this.annotator.loadAnnotations(newData.slice());
	    };

	    LocalStore.prototype.dumpAnnotations = function() {
	      var ann, _k, _len2, _ref3, _results;
	      _ref3 = this.annotations;
	      _results = [];
	      for (_k = 0, _len2 = _ref3.length; _k < _len2; _k++) {
	        ann = _ref3[_k];
	        _results.push(JSON.parse(this._dataFor(ann)));
	      }
	      return _results;
	    };

	    LocalStore.prototype._dataFor = function(annotation) {
	      var data, highlights;
	      highlights = annotation.highlights;
	      delete annotation.highlights;
	      $.extend(annotation, this.options.annotationData);
	      data = JSON.stringify(annotation);
	      if (highlights) {
	        annotation.highlights = highlights;
	      }
	      return data;
	    };

	    return LocalStore;

	  })(Annotator.Plugin);
	  })(window.Annotator || __webpack_require__(24));


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	(function(Annotator) {
	/* 
	 HighlightTags Annotator Plugin v1.0 (https://github.com/lduarte1991/tags-annotator)
	 Copyright (C) 2014 Luis F Duarte
	 License: https://github.com/lduarte1991/tags-annotator/blob/master/LICENSE.rst
	 
	 This program is free software; you can redistribute it and/or
	 modify it under the terms of the GNU General Public License
	 as published by the Free Software Foundation; either version 2
	 of the License, or (at your option) any later version.
	 
	 This program is distributed in the hope that it will be useful,
	 but WITHOUT ANY WARRANTY; without even the implied warranty of
	 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	 GNU General Public License for more details.
	  
	 You should have received a copy of the GNU General Public License
	 along with this program; if not, write to the Free Software
	 Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
	*/

	Annotator.Plugin.HighlightTags = function(element, options) {
		
		// extends the Plugin class from Annotator
		Annotator.Plugin.apply(this, arguments);

		this.field = null;
		//this.prototype.input = null;
		this.colors = null;
		//this.prototype.isFirstTime = true;
		return this;
	};

	// Set the plugin prototype. This gives us all of the Annotator.Plugin methods.
	Annotator.Plugin.HighlightTags.prototype = new Annotator.Plugin();
	Annotator.Plugin.HighlightTags.prototype.tokensavailable = [];

	Annotator.Plugin.HighlightTags.prototype.pluginInit = function() {
		// Check that Annotator is working
		if (!Annotator.supported()) {
			return;
		}

		// adds the field for them to enter tags in the editor
		var self = Annotator._instances[0].plugins.HighlightTags;
		self.field = self.annotator.editor.addField({
			type: 'input',
			label: 'Add tags...',
			load: self.updateField,
			submit: self.pluginSubmit,
		});

		$(self.field).html("<div><input placeholder =\"Add tags...\" type=\"text\" id=\"tag-input\" name=\"tags\" /></div>");

		// predetermined instructor tags are stored
		var tags = self.options.tag.split(",");

		// tags are given the structure that the dropdown/token function requires
	    tags.forEach(function(tagnames) {
	        lonename = tagnames.split(":");
	        self.tokensavailable.push({'id': lonename[0], 'name': lonename[0]});
	    });

		// now that #tag-input is in place, add the tokens to autocomplete
	    $('#tag-input').tokenInput(self.tokensavailable);

	    self.colors = self.getHighlightTags();

	    var newview = self.annotator.viewer.addField({
	        load: self.updateViewer,
	    });
	    // all of these need time for the annotations database to respond
	    this.annotator.subscribe('annotationsLoaded', function(){setTimeout(function(){self.colorize()}, 1000)});
	    self.annotator.subscribe('annotationUpdated', function(){setTimeout(function(){self.colorize()}, 1000)});
	    self.annotator.subscribe('flaggedAnnotation', self.updateViewer);
	    self.annotator.subscribe('annotationCreated', function(){setTimeout(function(){self.colorize()}, 1000)});
	    self.annotator.subscribe('externalCallToHighlightTags', function(){setTimeout(function(){self.externalCall()}, 1000)});
	    self.annotator.subscribe('colorEditorTags', self.colorizeEditorTags);
	};

	Annotator.Plugin.HighlightTags.prototype.getHighlightTags = function(){
		var self = Annotator._instances[0].plugins.HighlightTags;

	    if (typeof self.options.tag != 'undefined') {
	        var final = {};
	        var prelim = self.options.tag.split(",");
	        prelim.forEach(function(item){
	            var temp = item.split(":");
	            final[temp[0]] = self.getRGB(temp[1]);
	        });
	        return final;
	    }
	    return {};
	};

	Annotator.Plugin.HighlightTags.prototype.getRGB = function(item){
	    function getColorValues( color ){
		    var values = { red:null, green:null, blue:null, alpha:null };
		    if( typeof color == 'string' ){
		        /* hex */
		        if( color.indexOf('#') === 0 ){
		            color = color.substr(1)
		            if( color.length == 3 )
		                values = {
		                    red:   parseInt( color[0]+color[0], 16 ),
		                    green: parseInt( color[1]+color[1], 16 ),
		                    blue:  parseInt( color[2]+color[2], 16 ),
		                    alpha: .3
		                }
		            else
		                values = {
		                    red:   parseInt( color.substr(0,2), 16 ),
		                    green: parseInt( color.substr(2,2), 16 ),
		                    blue:  parseInt( color.substr(4,2), 16 ),
		                    alpha: .3
		                }
		        /* rgb */
		        }else if( color.indexOf('rgb(') === 0 ){
		            var pars = color.indexOf(',');
		            values = {
		                red:   parseInt(color.substr(4,pars)),
		                green: parseInt(color.substr(pars+1,color.indexOf(',',pars))),
		                blue:  parseInt(color.substr(color.indexOf(',',pars+1)+1,color.indexOf(')'))),
		                alpha: .3
		            }
		        /* rgba */
		        }else if( color.indexOf('rgba(') === 0 ){
		            var pars = color.indexOf(','),
		                repars = color.indexOf(',',pars+1);
		            values = {
		                red:   parseInt(color.substr(5,pars)),
		                green: parseInt(color.substr(pars+1,repars)),
		                blue:  parseInt(color.substr(color.indexOf(',',pars+1)+1,color.indexOf(',',repars))),
		                alpha: parseFloat(color.substr(color.indexOf(',',repars+1)+1,color.indexOf(')')))
		            }
		        /* verbous */
		        }else{
		            var stdCol = { acqua:'#0ff',   teal:'#008080',   blue:'#00f',      navy:'#000080',
		                           yellow:'#ff0',  olive:'#808000',  lime:'#0f0',      green:'#008000',
		                           fuchsia:'#f0f', purple:'#800080', red:'#f00',       maroon:'#800000',
		                           white:'#fff',   gray:'#808080',   silver:'#c0c0c0', black:'#000' };
		            if( stdCol[color]!=undefined )
		                values = getColorValues(stdCol[color]);
		        }
		    }
		    return values;
		}
	    return getColorValues(item);
	};

	Annotator.Plugin.HighlightTags.prototype.colorize = function() {
		var self = Annotator._instances[0].plugins.HighlightTags;
		var annotations = Array.prototype.slice.call($(".annotator-hl"));
		for (annNum = 0; annNum < annotations.length; ++annNum) {
		    var anns = $.data(annotations[annNum],"annotation");
		    if (typeof anns.tags !== "undefined" && anns.tags.length == 0) {
		        
		        // image annotations should not change the background of the highlight
		        // only the border so as not to block the image behind it.
		        if (anns.media === "text") {
		            $(annotations[annNum]).css("background-color", "");
		        } else if(anns.media === "video") {
		        	$(annotations[annNum].firstChild).css("background-color", "");
		        } else {
		            $(annotations[annNum]).css("border", "2px solid rgb(255, 255, 255)");
		            $(annotations[annNum]).css("outline", "2px solid rgb(0, 0, 0)");
		        }
		    }

		    if (typeof anns.tags !== "undefined" && self.colors !== {}) {
		        
		        for (var index = 0; index < anns.tags.length; ++index) {
		            if (anns.tags[index].indexOf("flagged-") == -1) {
		                if (typeof self.colors[anns.tags[index]] !== "undefined") {
		                    var finalcolor = self.colors[anns.tags[index]];
		                    // if it's a text change the background
		                    if (anns.media === "text") {
		                        $(annotations[annNum]).css(
		                            "background", 
		                            // last value, 0.3 is the standard highlight opacity for annotator
		                            "rgba(" + finalcolor.red + ", " + finalcolor.green + ", " + finalcolor.blue + ", 0.3)"
		                        );
		                    } else if (anns.media === "video") {
		                    	// following functions from http://stackoverflow.com/questions/20734317/create-linear-gradient-for-a-given-hex-value-in-javascript
		                    	var ratio = 1.24;
		                    	function componentToHex(c) {
									var hex = c.toString(16);
									return hex.length == 1 ? "0" + hex : hex;
								}

								function rgbToHex(r, g, b) {
									return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
								}
		                    	var finalgradient = {
		                    		red: Math.floor(finalcolor.red / ratio),
		                    		green: Math.floor(finalcolor.green / ratio),
		                    		blue: Math.floor(finalcolor.blue / ratio),
		                    	}
		                        $(annotations[annNum].firstChild).css(
		                            "background", 
		                            "rgba(" + finalcolor.red + ", " + finalcolor.green + ", " + finalcolor.blue + ", 0.9)"
		                        );
		                        $(annotations[annNum].firstChild).css(
		                            "background",
		                            "-webkit-linear-gradient(top, " + rgbToHex(finalcolor.red, finalcolor.green, finalcolor.blue) + ", " + rgbToHex(finalgradient.red, finalgradient.green, finalgradient.blue) + ")"
		                        );
		                    } 
		                    // if it's an image change the dark border/outline leave the white one as is
		                    else {
		                        $(annotations[annNum]).css(
		                            "outline",
		                            "2px solid rgb(" + finalcolor.red + ", " + finalcolor.green + ", " + finalcolor.blue + ")"
		                        );
		                    }
		                } else {
		                    // if the last tag was not predetermined by instrutor background should go back to default
		                    if (anns.media === "text") {
		                        $(annotations[annNum]).css(
		                            "background", 
		                            // returns the value to the inherited value without the above
		                            ""
		                        );
		                    } else if (anns.media === "video") {
		                        $(annotations[annNum].firstChild).css(
		                            "background", 
		                            // returns the value to the inherited value without the above
		                            ""
		                        );
		                    }
		                }
		            }
		        }
		        
		    } else {
		        // if there are no tags or predefined colors, keep the background at default
		        if (anns.media === "text") {
		           $(annotations[annNum]).css("background","");
		        } else if (anns.media === "video") {
		           $(annotations[annNum].firstChild).css("background","");
		        }
		    }
		}
		self.annotator.publish('colorizeCompleted');
	};

	// this function adds the appropriate color to the tag divs for each annotation
	Annotator.Plugin.HighlightTags.prototype.colorizeEditorTags = function() {
	    var self = Annotator._instances[0].plugins.HighlightTags;;
	    $.each($('.annotator-editor .token-input-token'), function(key, tagdiv) {
	        // default colors are black for text and the original powder blue (already default)
	        var rgbColor = "";
	        var textColor = "color:#000;";
	        var par = $(tagdiv).find("p");

	        // if the tag has a predetermined color attached to it, 
	        // then it changes the background and turns text white
	        if (typeof self.colors[par.html()] !== "undefined") {
	            var finalcolor = self.colors[par.html()];
	            rgbColor = "background-color:rgba(" + finalcolor.red + ", " + finalcolor.green + ", " + finalcolor.blue + ", 0.5);";
	            textColor = "color:#fff;";
	        }

	        // note that to change the text color you must change it in the paragraph tag, not the div
	        $(tagdiv).attr('style', rgbColor);
	        par.attr('style', textColor);
	    });    
	};

	Annotator.Plugin.HighlightTags.prototype.updateField = function(field, annotation) {
		var self = Annotator._instances[0].plugins.HighlightTags;

	    $('#tag-input').tokenInput('clear');
	    $('#token-input-tag-input').attr('placeholder', 'Add tags...');

	    // loops through the tags already in the annotation and "add" them to this annotation
	    if (typeof annotation.tags !== "undefined") {
	        for (tagnum = 0; tagnum < annotation.tags.length; tagnum++) {
	            var n = annotation.tags[tagnum];
	            if (typeof self.annotator.plugins["HighlightTags"] !== 'undefined') {
	                // if there are flags, we must ignore them
	                if (annotation.tags[tagnum].indexOf("flagged-") === -1 && annotation.tags[tagnum] !== "") {
	                    $('#tag-input').tokenInput('add',{'id':n,'name':n});
	                }
	            } else {
	                $('#tag-input').tokenInput('add', {'id': n, 'name': n});
	            }
	        }
	    }
	    self.colorizeEditorTags();
	};

	Annotator.Plugin.HighlightTags.prototype.updateViewer = function(field, annotation) {
		var self = Annotator._instances[0].plugins.HighlightTags;
		if (typeof annotation.tags !== "undefined") {
			if (annotation.tags.length === 0 || annotation.tags[0] === "") {
				$(field).remove();
				return;
			}

			// otherwise we prepare to loop through them
	        var nonFlagTags = true;
	        var tokenList = "<ul class=\"token-input-list\">";

	        for (tagnum = 0; tagnum < annotation.tags.length; ++tagnum){
	        	var colorTags = function() {
	        		  // once again, defaults are black for text and powder blue default from token function
	                var rgbColor = "";
	                var textColor = "#000";

	                // if there is a color associated with the tag, it will change the background
	                // and change the text to white
	                if (typeof self.colors[annotation.tags[tagnum]] !== "undefined") {
	                    var finalcolor = self.colors[annotation.tags[tagnum]];
	                    rgbColor = "style=\"background-color:rgba(" + finalcolor.red + ", " + finalcolor.green + ", " + finalcolor.blue + ", 0.5);\"";
	                    textColor = "#fff";
	                }

	                // note: to change text color you need to do it in the paragrph tag not the div
	                tokenList += "<li class=\"token-input-token\"" + rgbColor + "><p style=\"color: " + textColor + ";\">"+ annotation.tags[tagnum]+"</p></span></li>";
	                nonFlagTags = false;
	        	}
	            if (typeof self.annotator.plugins["Flagging"] !== 'undefined') {
	                // once again we ingore flags
	                if (annotation.tags[tagnum].indexOf("flagged-") === -1) {
	                    colorTags();
	                }
	            } else {
	                colorTags();
	            }
	        }

	        // close off list from above
	        tokenList += "</ul>";
	        $(field).append(tokenList);

	        // the field for tags is removed also if all the tags ended up being flags
	        if (nonFlagTags) {
	        	$(field.remove());
	        }
		} else {
			$(field).remove();
		}
	};

	// The following function is run when a person hits submit.
	Annotator.Plugin.HighlightTags.prototype.pluginSubmit = function(field, annotation) {
	    arr = $(field).find('input[name=tags]').val().split(',');
	    //console.log(arr.indexOf("") !== -1);
	    //console.log(arr.length === 1);
	    if (arr.indexOf("") !== -1 && arr.length === 1) {
	    	annotation.tags = [];
	    } else {
	    	annotation.tags = arr;
	    }
	    //console.log(annotation.tags);
	};

	// The following will call the colorize function during an external call and then return
	// an event signaling completion.
	Annotator.Plugin.HighlightTags.prototype.externalCall = function() {
		var self = Annotator._instances[0].plugins.HighlightTags;
	    self.colorize();
	    self.annotator.publish('finishedExternalCallToHighlightTags');
	};
	})( true ? __webpack_require__(24) : window.Annotator);


/***/ },
/* 27 */
/***/ function(module, exports) {

	/* AController.js
	 *
	 * This initializes the main Annotation Controller and all its parts on the page.
	 * It calls upon the 4 parts of the tool:
	 *     1) Target Object - to be annotated
	 *     2) Annotation Core Library - doing the annotating
	 *     3) Annotation Server - storing the annotation
	 *     4) Dashboard Object - displays annotations
	 */

	window.AController = window.AController || function(options) {
		if (typeof options.targetObjectOptions !== "undefined") {
			AController.targetObjectController = new AController.TargetObjectController(options.targetObjectOptions, options.commonInfo);
		}
		//AController.annotationServer = new AController.AnnotationServer(options.annotationServerOptions);
		if (typeof options.annotationCoreOptions !== "undefined") {
			AController.annotationCore = new AController.AnnotationCore(options.annotationCoreOptions, options.commonInfo);
		}
		if (typeof options.dashboardControllerOptions !== "undefined") {
			AController.dashboardView = AController.DashboardView;
			AController.dashboardObjectController = new AController.DashboardController(options.dashboardControllerOptions, options.commonInfo, AController.dashboardView);
		}
		AController.main = new AController.AnnotationMain(options);
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Annotator) {/***
	 * TargetObjectController.js
	 *
	 ***/

	(function($) {
	    $.TargetObjectController = function(options, commonInfo) {
	        this.initOptions = jQuery.extend({}, options, commonInfo);
	        this.init();
	    };

	    /* init
	     * 
	     */
	    $.TargetObjectController.prototype.init = function(){

	        if (this.initOptions.mediaType === "text") {
	            this.setUpTargetAsText(this.initOptions.annotationElement, this.initOptions.object_id);
	        } else if (this.initOptions.mediaType === "image") {
	            this.setUpTargetAsImage(this.initOptions.annotationElement, this.initOptions.object_id);
	        } else if (this.initOptions.mediaType === "video") {
	            this.setUpTargetAsVideo(this.initOptions.annotationElement, this.initOptions.object_id);
	        }
	    };

	    $.TargetObjectController.prototype.setUpTargetAsText = function(element, targetObject) {
	        
	        var self = this;

	        // Shows annotation toggle label only when hovered
	        jQuery('.annotations-status').hover(function() {
	                jQuery('.hover-inst').toggleClass("hidden");
	        });

	        // Actually toggles whether annotaitons are displayed or not
	        jQuery('.annotations-status').click(function() {
	            self.toggleAnnotations();
	        });

	        // helper function to turn off keyboard-input mode
	        var clearKeyboardInput = function() {
	            // set content back to normal, without outlines or editable items
	            // removes role and tabindex so user can read text without it thinking
	            // the content is within a text block
	            jQuery('.content').attr('contenteditable', 'false');
	            jQuery('.content').attr('role', '');
	            jQuery('.content').attr('tabindex', '');
	            jQuery('.content').attr('aria-multiline', 'false');
	            jQuery('.content').css('outline', '0px');

	            // toggles the keyboard-input panel below to original state
	            jQuery('#make_annotations_panel button').attr('data-toggled', 'false');
	            jQuery('#make_annotations_panel button').html("Make an annotation");
	            jQuery('#annotation-maker').addClass("hidden");

	            // sets the html back to before being marked using delimiter
	            jQuery(AController.annotationCore.annotation_tool.wrapper[0]).html(window.originalContent);
	            
	            // restarts annotator so it draws the new annotation
	            Annotator._instances[0].destroy();
	            AController.annotationCore.element = jQuery('.content');
	            AController.annotationCore.init("text");
	        };

	        // function from: http://stackoverflow.com/questions/4811822/get-a-ranges-start-and-end-offsets-relative-to-its-parent-container
	        var getTextCursor = function (element) {
	            var caretOffset = 0;
	            var doc = element.ownerDocument || element.document;
	            var win = doc.defaultView || doc.parentWindow;
	            var sel;
	            if (typeof win.getSelection != "undefined") {
	                sel = win.getSelection();
	                if (sel.rangeCount > 0) {
	                    var range = win.getSelection().getRangeAt(0);
	                    var preCaretRange = range.cloneRange();
	                    preCaretRange.selectNodeContents(element);
	                    preCaretRange.setEnd(range.endContainer, range.endOffset);
	                    caretOffset = preCaretRange.toString().length;
	                }
	            } else if ( (sel = doc.selection) && sel.type != "Control") {
	                var textRange = sel.createRange();
	                var preCaretTextRange = doc.body.createTextRange();
	                preCaretTextRange.moveToElementText(element);
	                preCaretTextRange.setEndPoint("EndToEnd", textRange);
	                caretOffset = preCaretTextRange.text.length;
	            }
	            return caretOffset;
	        };

	        /*
	         * getRangesForDelimiter
	         * It checks through the target text to check if the delimiter was used
	         * If so it expects there to be at least and at most 2 instances
	         * It will then perform a calculation to get the appropriate SerializedRange
	         * Otherwise it should return undefined
	         * 
	         * @param {string} delimiter - string used for boundaries of range
	         * @returns {SerializedRange} range for string between the pair of delimiters
	         */
	        var getRangesForDelimiter = function(delimiter){
	            var range = document.createRange();

	            found = [];

	            /*
	             * find_ranges
	             * It checks to see if the node contains the delimiter
	             * and if it does find the delimiter, it will add it to
	             * the found list variable above
	             *
	             * @param {Number} item - index of the node
	             * @param {object} value - actual node
	             */
	            var find_ranges = function(item, value){
	                // if it's an  element node, search its children. We need textnodes
	                if (value.nodeType === 1) {
	                    jQuery.each(value.childNodes, find_ranges);
	                } else if(value.nodeType === 3){

	                    // stupid check to make sure that we are in a TextNode
	                    if(value.nodeValue){

	                        // gets the offset of the first delimiter
	                        var index = value.nodeValue.indexOf(delimiter);

	                        // if this is the second time we've found a delimiter
	                        // and it's the first item in the list, then we hit a corner case
	                        // The issue here is that the highlight would end on the first character
	                        // of a new node, which would INCLUDE the first character being highlighted
	                        // this was not the intention of the user, otherwise the index would have been 1
	                        // The solution is to look back at previous siblings or previous parents
	                        // and get the offset of the full nodeValue. 
	                        if (found.length > 0 && index == 0) {
	                            var siblingNode = value.previousSibling;

	                            // make sure that previous sibling is not a break tag or a non-text node
	                            while(siblingNode.nodeName == "BR"){
	                                var currentNode = siblingNode;
	                                siblingNode = siblingNode.previousSibling;
	                                if (siblingNode === null) {
	                                    siblingNode = currentNode.parentNode.previousSibling;
	                                };
	                            };

	                            // try to find the last textnode while you are still in an element node
	                            while (siblingNode.nodeType == 1) {
	                                siblingNode = siblingNode.lastChild;
	                            };

	                            // add the node to the found list
	                            found.push({"node": siblingNode, "offset": siblingNode.textContent.length});
	                        } else if(index>-1) {
	                            // the regular case is you've found the node and offset so push them
	                            found.push({"node": value, "offset": value.textContent.indexOf(delimiter)});
	                            
	                            // corner case: start and end are in the same node
	                            var secondIndex = value.textContent.indexOf(delimiter, index+1);
	                            if (secondIndex > -1) {
	                                found.push({"node": value, "offset": secondIndex});
	                            }
	                        }
	                    }
	                }
	            };

	            // using the "contains:()" selector in jquery, find where the delimiter appears.
	            jQuery.each(
	                jQuery('.content .annotator-wrapper').find('*:contains('+delimiter+')'), function(index, value) {
	                    jQuery.each(value.childNodes, find_ranges);
	                }
	            );

	            // double check we get 2 and only two items selected for highlighting
	            if (found.length <= 0) {
	                console.log("User did not highlight anything");
	                return undefined;
	            } else if (found.length == 1) {
	                console.log("User only started a highglight and did not finish it");
	                return undefined;
	            } else if (found.length > 2) {
	                console.log("User did not read instructions to only highlight one item at a time");
	                return undefined;
	            } else {

	                // if everything went great, then create an appropriate range using Annotator
	                var startNode = found[0].node;
	                var startOffset = found[0].offset;
	                var endNode = found[1].node;
	                var endOffset = found[1].offset;
	                if (endOffset !== 0) {
	                    endOffset = endOffset - delimiter.length;
	                };

	                var root = AController.annotationCore.annotation_tool.wrapper[0];
	                range.setStart(startNode, startOffset);
	                range.setEnd(endNode, endOffset);

	                // turn that into a serializedRange to be stored in the database
	                if (typeof Annotator !== "undefined") {
	                    bRange = new Annotator.Range.BrowserRange(range);
	                    normedRange = bRange.normalize().limit(root);
	                    serializedRange = normedRange.serialize(root, '.annotator-hl');
	                    jQuery(root).html(window.originalContent);
	                    return serializedRange;
	                }
	            }

	            return undefined;
	        };
	        
	        // deals with the button that turns on keyboard annotations
	        jQuery('#make_annotations_panel button').click(function(){
	            
	            // if person is trying to start making an annotation via keyboard
	            if (jQuery(this).attr('data-toggled') == "false") {

	                // make the text editable and change UI to reflect change
	                jQuery('.content').attr('contenteditable', 'true');
	                jQuery(this).attr('data-toggled', 'true');
	                jQuery('.content').attr('role', 'textbox');
	                jQuery('.content').attr('tabindex', '0');
	                jQuery('.content').attr('aria-multiline', 'true');
	                jQuery(this).html("Save Highlights");
	                
	                // automatically bring person to beginning of target text
	                // this helps orient a person using a screen reader
	                jQuery('.content')[0].focus();

	                // makes sure that key count is set to 0 again so that you
	                // can only make two asterisks
	                window.keyCount = 0;

	                // in case this is not the first time that a person is making an annotation
	                // via keyboard input, this unloads event. 
	                jQuery('.content').off('keydown');
	                jQuery('.content').on('keydown', function(event) {
	                    var keyCode = event.keyCode;
	                    // if you haven't already:
	                    event = event || window.event;

	                    switch(keyCode) {
	                        // left arrow key
	                        case 37:
	                        // up arrow key
	                        case 38:
	                        // right arrow key
	                        case 39:
	                        // bottom arrow key
	                        case 40:
	                            // arrow keys should work normally
	                            break;
	                        // backspace key
	                        case 8:

	                            // make sure that item you are trying to backspace is the delimiter
	                            // TODO: change this asterisk to delimiter
	                                var deleted = jQuery('.content').text().charAt(getTextCursor(jQuery('.content')[0])-1) !== '*';
	                                
	                                // if it isn't an asterisk, prevent the user from deleting it
	                                // likewise prevent them if they never even typed an asterisk in the first place
	                                if (window.keyCount == 0 || deleted) {
	                                // to cancel the event:
	                                if( event.preventDefault) event.preventDefault();
	                                return false;
	                            } else {
	                                window.keyCount = window.keyCount-1;
	                            }
	                            break;
	                        // delete key
	                        case 46:
	                            // make sure item you are trying to [forward] delete is the delimiter
	                            // TODO: change this asterisk to delimiter
	                            var deleted = jQuery('.content').text().charAt(getTextCursor(jQuery('.content')[0])) !== '*';
	                            
	                            // like above, if it isn't an asterisk prevent user from deleting it
	                            // likewise prevent them if they never even typed an asterisk in the first place
	                            if (window.keyCount == 0 || deleted) {
	                                // to cancel the event:
	                                if( event.preventDefault) event.preventDefault();
	                                return false;
	                            } else {
	                                window.keyCount = window.keyCount-1;
	                            }
	                            break;
	                        // 8/* button
	                        case 56:

	                            // if person hit 8 and not * then prevent them from doing so
	                            if (!event.shiftKey) {
	                                // to cancel the event:
	                                if( event.preventDefault) event.preventDefault();
	                                return false;
	                            }

	                            // likewise prevent the if they were trying to add more than 2 delimiters
	                            if (window.keyCount == 2) {
	                                // to cancel the event:
	                                if( event.preventDefault) event.preventDefault();
	                                return false;
	                            }
	                            window.keyCount = window.keyCount+1;
	                            break;
	                        // Esc button
	                        case 27:
	                            // sets the target text back to normal and erases delimiter marks
	                            clearKeyboardInput();
	                            break;
	                        // Enter button
	                        case 13:
	                            // submits highlights like pressing the "Save Highlights" button
	                            jQuery('#make_annotations_panel button').click();
	                            return false;
	                            break;
	                        // Tab button
	                        case 9:
	                            // moves it to the "Save Highlights" button
	                            jQuery('#make_annotations_panel button')[0].focus();
	                            return false;
	                            break;
	                        default:
	                            // to cancel the event:
	                            if( event.preventDefault) event.preventDefault();
	                            return false;
	                            break;
	                    }
	                });

	                // save the original content of the tool so you can set it back to normal later
	                window.originalContent = jQuery(AController.annotationCore.annotation_tool.wrapper[0]).html();
	            } else if(jQuery(this).attr('data-toggled') == "true") {
	                // if user has submitted highlights

	                // find range of the delimiter
	                // TODO: have a setting somewhere to set the delimiter
	                var rangesForAsterisks = getRangesForDelimiter("*");

	                // If it couldn't find any ranges, (i.e. you forgot one or both delimiters do nothing)
	                // TODO: show a warning error
	                if (typeof rangesForAsterisks === "undefined") {
	                    jQuery('.content').css('outline', '2px solid red');
	                    return;
	                };

	                // show the small form to add text and tags to annotation
	                jQuery(this).attr('data-toggled', 'saving');
	                jQuery('#make_annotations_panel').css('margin-left', '0px');
	                jQuery('#make_annotations_panel').css('margin-top', '0px');
	                jQuery('#annotation-maker').removeClass("hidden");
	                jQuery(this).html("Save Annotation");
	                
	                // focus on the first one for screen reader's sake!
	                jQuery('#id_annotation_text_screen_reader')[0].focus();

	                // create an annotation to be saved once they've added text and tags
	                window.savingAnnotation = {
	                    "ranges" : [rangesForAsterisks],
	                    "collectionId": AController.annotationCore.initOptions.collection_id,
	                    "contextId": AController.annotationCore.initOptions.context_id,
	                    "uri": AController.annotationCore.initOptions.object_id,
	                    "permissions": {
	                        "admin": [AController.annotationCore.annotation_tool.plugins.Permissions.user.id],
	                        "read": [],
	                        "update": [AController.annotationCore.annotation_tool.plugins.Permissions.user.id],
	                        "delete": [AController.annotationCore.annotation_tool.plugins.Permissions.user.id],
	                    },
	                    "user": AController.annotationCore.annotation_tool.plugins.Permissions.user,
	                    "archived": false,
	                    "parent": "0",
	                    "media": "text",
	                };
	            } else {
	                clearKeyboardInput();

	                // tags and text input, if tags is empty, change it to empty list
	                var text = jQuery('#id_annotation_text_screen_reader').val();
	                var tags = jQuery('#id_annotation_tag_screen_reader').val().split(' ');
	                if (tags == "") {
	                    tags = [];
	                };

	                // add them to the annotation to be saved
	                window.savingAnnotation['text'] = text;
	                window.savingAnnotation['tags'] = tags;

	                // this sends a trigger to Annotator to tell it to send the annotation to be saved to the database
	                AController.annotationCore.annotation_tool.plugins.Store.annotationCreated(window.savingAnnotation);

	                // this adds the actual highlight to the target text
	                AController.annotationCore.annotation_tool.setupAnnotation(window.savingAnnotation);

	                // this adds the annotation to the dashboard
	                AController.dashboardObjectController.annotationCreated(window.savingAnnotation);
	            }
	        });

	        // display/hide options to input annotations via keyboard
	        jQuery('#keyboard-input-toggle-text').click(function(){

	            // toggles the bottom panel 
	            jQuery('#make_annotations_panel').toggleClass("hidden");

	            if (jQuery('#make_annotations_panel').hasClass('hidden')) {
	                
	                // if it is now hidden we turn the toggler button white and set target object
	                // back to normal
	                jQuery('#keyboard-input-toggle-text').css('color', 'white');
	                clearKeyboardInput();

	            } else {
	                
	                // if it's not hidden then we set the toggler button yellow and focus on
	                // the new button -- helps screen reader users in a flow
	                jQuery('#keyboard-input-toggle-text').css('color', '#FFFF00');
	                setTimeout(
	                    function(){
	                        jQuery('#make_annotations_panel button')[0].focus();
	                    }, 
	                500);
	            }
	        });

	        // toggles the label for toggling instructions
	        jQuery('.toggle-instructions').click(function (){
	            if (jQuery('.toggle-instructions').html() == "Collapse Instructions") {
	                jQuery('.toggle-instructions').html('Expand Instructions');
	            } else {
	                jQuery('.toggle-instructions').html('Collapse Instructions');
	            }
	        });
	    };

	    $.TargetObjectController.prototype.setUpTargetAsImage = function(element, targetObject) {
	        
	        // creates a qtip with instructions on how to make keyboard input
	        var toggleqtip = function(){
	            jQuery('#keyboard-input-button').qtip({
	                id: 'key-control-annotation',
	                content: {
	                    text: "In order to use keyboard inputs, you must click on the image once. Then you can use the 'W', 'A', 'S', and 'D' keys to move up, left, down, and right respectively. You can also use '-' to zoom out, '=' to zoom in, and 'm' to make an annotation.",
	                    // Use first steps content...
	                    title: {
	                        text: "Control via keyboard",
	                        button: false
	                    }
	                },
	                position: {
	                    my: 'top center',
	                    at: 'bottom center',
	                    target: jQuery('#keyboard-input-button'),
	                    // Also use first steps position target...
	                    viewport: $(window) // ...and make sure it stays on-screen if possible
	                },
	                show: {
	                    event: false,
	                    // Only show when show() is called manually
	                    ready: true // Also show on page load
	                },
	                events: {
	                    render: function(event, api) {
	                        // Grab tooltip element
	                        var tooltip = api.elements.tooltip;
	                    }
	                }
	            });
	        };
	        
	        // when user clicks on the button, we set aria labels and focus on the OSD viewer
	        // in order to toggle on keyboard input mode. mouseup allows focus to actually move
	        // screen reader users to the appropriate div.
	        jQuery('#keyboard-input-button').on('mouseup', function (event){
	            jQuery('.keyboard-command-area').attr('aria-label', 'Click this button to turn on keyboard input. To use keyboard input, select this area. Then use "W", "A", "S", "D" to move around. "-" to zoom out, "=" to zoom in" and lowercase "m" to make an annotation.');
	            jQuery('.openseadragon-canvas').attr('tabindex', '-1');
	            
	            document.getElementById('viewer').querySelector('.openseadragon-canvas').focus();
	            jQuery('.keyboard-command-area')[0].focus();
	            jQuery('#keyboard-input-button').css('color', '#ffff00');
	        });

	        // actually calls the qtip function above when user hovers over the keyboard button
	        jQuery('#keyboard-input-button').on('mouseenter', function(){
	            toggleqtip();
	        });

	        // also allows keyboard users to toggle qtip when they hit enter
	        jQuery('#keyboard-input-button').on('keydown', function(event){
	            var keyCode = event.keyCode;
	            event = event || window.event;

	            switch(keyCode) {
	                case 32:
	                case 13:
	                    toggleqtip();
	                    jQuery('#keyboard-input-button').css('color', '#ffff00');
	                    break;
	            }
	        });
	        
	        // when keyboard users tab away from the keyboard button it hides the qtip
	        jQuery('#keyboard-input-button').on('blur', function(event){
	            if (event.tooltip !== undefined) {
	                jQuery('#keyboard-input-button').qtip().toggle(false);
	            };
	        });

	        // likewise the button is hidden when user stops hovering over it
	        jQuery('#keyboard-input-button').on('mouseleave', function(event){
	            jQuery('#keyboard-input-button').qtip().toggle(false);
	        });

	        jQuery('#viewer').off('keyup');

	        // The following allows users to hit the 'm' key and "make" a new annotation
	        jQuery('#viewer').on('keyup', function(event) {
	            var keyCode = event.keyCode;
	            // if you haven't already:
	            event = event || window.event;

	            switch(keyCode) {
	                // 'm' key
	                case 77:
	                    // calls the dashboard to open up the fields to input annotation text
	                    // and tags
	                    AController.dashboardObjectController.annotationViaKeyboardInput();
	                    
	                    // allows users to close the modal page by hitting the close button
	                    jQuery('.newreplygroup #delete').click(function (e) {
	                        jQuery('.annotationModal #closeModal').click();
	                    });

	                    // when saving the new annotation we get all the metadata from Mirador
	                    jQuery('.newreplygroup #save').click(function (e) {

	                        // tags are set to empty array if they are input as empty string
	                        var tags = jQuery('.replyItemEdit #id_tags').val().split(' ');
	                        if (tags == ['']) {
	                            tags = [];
	                        };

	                        // we get the bounds and construct the thumbnail
	                        var miraWindow = AController.dashboardObjectController.endpoint.window;
	                        var miraEndpoint = AController.dashboardObjectController.endpoint.endpoint;
	                        var bounds = AController.dashboardObjectController.endpoint.currentImageBounds;
	                        var thumb = Mirador.Iiif.getImageUrl(miraWindow.imagesList[Mirador.getImageIndexById(miraWindow.imagesList, miraWindow.currentCanvasID)]);
	                        thumb = thumb + "/" + bounds.x + "," + bounds.y + "," + bounds.width + "," + bounds.height + "/full/0/native.jpg";
	                        
	                        // sets up the annotator structure to make the call to create an Annotation
	                        var annotation = {
	                            collectionId: miraEndpoint.collection_id,
	                            contextId: miraEndpoint.context_id,
	                            uri: miraWindow.currentCanvasID,
	                            permissions: miraEndpoint.catchOptions.permissions,
	                            user: miraEndpoint.catchOptions.user,
	                            archived: false,
	                            rangePosition: bounds,
	                            bounds: bounds,
	                            thumb: thumb,
	                            ranges: [],
	                            tags: tags,
	                            text: jQuery('.replyItemEdit .replytext').val(),
	                            parent: "0",
	                            media: "image",
	                        };

	                        // makes a call to the backend to save the annotation
	                        // TODO: Have this happen in Main instead of via here...
	                        AController.dashboardObjectController.endpoint.endpoint.createCatchAnnotation(annotation);
	                        jQuery('.annotationModal #closeModal').click();
	                    });
	                    break;
	            }
	        });
	        };

	        $.TargetObjectController.prototype.setUpTargetAsVideo = function(element, targetObject) {
	            var vidElement = jQuery(element).find('video')[0];
	            var d_items = [];
	            if (this.initOptions.transcript_download) {
	                d_items.push('transcript');
	            };
	            if (this.initOptions.video_download) {
	                d_items.push('video');
	            };
	            if (typeof videojs !== undefined) {
	                this.vid = videojs(vidElement, {
	                    techOrder: ['youtube', 'html5', 'flash'],
	                    playbackRates:[0.5, 1, 1.5, 2],
	                    downloadItems: d_items,
	                }, {});
	                var self = this;
	                    var options = {
	                        showTitle: false,
	                        showTrackSelector: false,
	                    };
	                    var transcript = self.vid.transcript(options);
	                    document.querySelector('#transcript').appendChild(transcript.el());
	                jQuery(document).bind('annotation_core_init', function() {
	                    self.vid.rangeslider(jQuery.extend(true, {}, {}));
	                    self.vid.annotations(jQuery.extend(true, {}, {posBigNew: "none"}));
	                    jQuery(self.vid.annotations.rsdl.el()).watch('left', function(data, i){
	                        jQuery('#startTimeFilter').val(self.vid.annotations.rsdbl.el_.firstChild.innerHTML);
	                    });
	                    jQuery(self.vid.annotations.rsdr.el()).watch('left', function(data, i){
	                        jQuery('#endTimeFilter').val(self.vid.annotations.rsdbr.el_.firstChild.innerHTML);
	                    });
	                });
	                jQuery(self.vid).on('annotationsDisplayed', function(){
	                    AController.annotationCore.annotation_tool.publish('externalCallToHighlightTags');
	                });
	            };
	            var self = this;            
	            Mousetrap.bind(['k', 'space'], function(e){
	                if (self.vid.paused()) {
	                    self.vid.play();
	                } else {
	                    self.vid.pause();
	                }
	            });
	            Mousetrap.bind('j', function(e){
	                self.vid.controlBar.progressControl.seekBar.stepBack();
	            });
	            Mousetrap.bind('l', function(e){
	                self.vid.controlBar.progressControl.seekBar.stepForward();
	            });
	            Mousetrap.bind('n', function(e){
	                jQuery('.vjs-new-annotation').trigger('click');
	            });

	            Mousetrap.bind('m', function(e){
	                self.vid.muted(!self.vid.muted());
	            });

	            Mousetrap.bind('a', function(e){
	                if (jQuery('.vjs-back-anpanel-annotation').hasClass("disable")) {
	                    self.vid.annotations.showDisplay();
	                    self.vid.userActive(true);
	                } else {
	                    if (jQuery('.vjs-anstat-annotation').hasClass('disable')) {
	                        self.vid.annotations.hideDisplay();
	                    } else {
	                        self.vid.annotations.showDisplay();
	                        self.vid.userActive(true);
	                    }
	                }
	            });

	            Mousetrap.bind('s', function(e){
	                if (jQuery('.vjs-back-anpanel-annotation').hasClass("disable")) {
	                    self.vid.annotations.showStatistics();
	                    self.vid.userActive(true);
	                } else {
	                    if (jQuery('.vjs-anstat-annotation').hasClass('disable')) {
	                        self.vid.annotations.showStatistics();
	                        self.vid.userActive(true);
	                    } else {
	                        self.vid.annotations.hideStatistics();
	                    }
	                }
	            });

	            Mousetrap.bind('A', function(e){
	                var left = parseFloat(self.vid.annotations.rsdl.el_.style.left) / 100.00;
	                var secs_left = self.vid.rangeslider._seconds(left);
	                
	                var newleft = 0.0;
	                if (secs_left > 5.0) {
	                    newleft = secs_left - 5;
	                }
	                var new_percentage = self.vid.rangeslider._percent(newleft);
	                self.vid.annotations.rsd.setPosition(0, new_percentage);
	            });

	            Mousetrap.bind('D', function(e){
	                var left = parseFloat(self.vid.annotations.rsdl.el_.style.left) / 100.00;
	                var secs_left = self.vid.rangeslider._seconds(left);
	                
	                var newleft = secs_left + 5;
	                var new_percentage = self.vid.rangeslider._percent(newleft);
	                if (new_percentage > 1) {
	                    new_percentage = 1.0;
	                }
	                self.vid.annotations.rsd.setPosition(0, new_percentage);
	            });
	             Mousetrap.bind('J', function(e){
	                var right = parseFloat(self.vid.annotations.rsdr.el_.style.left) / 100.00;
	                var secs_left = self.vid.rangeslider._seconds(right);
	                
	                var newright = 0.0;
	                if (secs_left > 5.0) {
	                    newright = secs_left - 5;
	                }
	                var new_percentage = self.vid.rangeslider._percent(newright);
	                self.vid.annotations.rsd.setPosition(1, new_percentage);
	            });

	            Mousetrap.bind('L', function(e){
	                var right = parseFloat(self.vid.annotations.rsdr.el_.style.left) / 100.00;
	                var secs_left = self.vid.rangeslider._seconds(right);
	                
	                var newright = secs_left + 5;
	                var new_percentage = self.vid.rangeslider._percent(newright);
	                if (new_percentage > 1) {
	                    new_percentage = 1.0;
	                }
	                self.vid.annotations.rsd.setPosition(1, new_percentage);
	            });

	            Mousetrap.bind('t', function(e){
	                if (jQuery('#transcript').is(":hidden")){
	                    jQuery("#transcript").show();
	                    jQuery('#viewer').css('height', '80%');
	                    var translate_editor = (jQuery(window).height() - (jQuery('#viewer').height() + 50)) * -1;
	                    AController.annotationCore.annotation_tool.editor.element.css('transform', 'translateY('+translate_editor+'px)');
	                } else {
	                    jQuery('#transcript').hide(10, function(){
	                        jQuery('#viewer').css('height', '100%');
	                    });
	                    AController.annotationCore.annotation_tool.editor.element.css('transform', 'translateY(0px)');
	                }
	            });

	            var iframe = jQuery(self.vid.el()).find('iframe')[0];
	            Mousetrap(iframe).bind('j', function(e){
	                self.vid.controlBar.progressControl.seekBar.stepBack();
	            });
	            Mousetrap(iframe).bind('l', function(e){
	                self.vid.controlBar.progressControl.seekBar.stepForward();
	            });
	            Mousetrap(iframe).bind('n', function(e){
	                jQuery('.vjs-new-annotation').trigger('click');
	            });
	            Mousetrap(iframe).bind('m', function(e){
	                self.vid.muted(!self.vid.muted());
	            });

	            Mousetrap(iframe).bind('t', function(e){
	                if (jQuery('#transcript').is(":hidden")){
	                    jQuery("#transcript").show();
	                    jQuery('#viewer').css('height', '80%');
	                    var translate_editor = (jQuery(window).height() - (jQuery('#viewer').height() + 50)) * -1;
	                    AController.annotationCore.annotation_tool.editor.element.css('transform', 'translateY('+translate_editor+'px)');
	                } else {
	                    jQuery('#transcript').hide(10, function(){
	                        jQuery('#viewer').css('height', '100%');
	                        AController.annotationCore.annotation_tool.editor.element.css('transform', 'translateY(0px)');
	                    });
	                }
	            });

	            Mousetrap(iframe).bind('a', function(e){
	                if (jQuery('.vjs-back-anpanel-annotation').hasClass("disable")) {
	                    self.vid.annotations.showDisplay();
	                    self.vid.userActive(true);
	                } else {
	                    if (jQuery('.vjs-anstat-annotation').hasClass('disable')) {
	                        self.vid.annotations.hideDisplay();
	                    } else {
	                        self.vid.annotations.showDisplay();
	                        self.vid.userActive(true);
	                    }
	                }
	            });

	            Mousetrap(iframe).bind('s', function(e){
	                if (jQuery('.vjs-back-anpanel-annotation').hasClass("disable")) {
	                    self.vid.annotations.showStatistics();
	                    self.vid.userActive(true);
	                } else {
	                    if (jQuery('.vjs-anstat-annotation').hasClass('disable')) {
	                        self.vid.annotations.showStatistics();
	                        self.vid.userActive(true);
	                    } else {
	                        self.vid.annotations.hideStatistics();
	                    }
	                    
	                }
	            });
	            Mousetrap(iframe).bind('A', function(e){
	                var left = parseFloat(self.vid.annotations.rsdl.el_.style.left) / 100.00;
	                var secs_left = self.vid.rangeslider._seconds(left);
	                
	                var newleft = 0.0;
	                if (secs_left > 5.0) {
	                    newleft = secs_left - 5;
	                }
	                var new_percentage = self.vid.rangeslider._percent(newleft);
	                self.vid.annotations.rsd.setPosition(0, new_percentage);
	            });

	            Mousetrap(iframe).bind('D', function(e){
	                var left = parseFloat(self.vid.annotations.rsdl.el_.style.left) / 100.00;
	                var secs_left = self.vid.rangeslider._seconds(left);
	                
	                var newleft = secs_left + 5;
	                var new_percentage = self.vid.rangeslider._percent(newleft);
	                if (new_percentage > 1) {
	                    new_percentage = 1.0;
	                }
	                self.vid.annotations.rsd.setPosition(0, new_percentage);
	            });
	             Mousetrap(iframe).bind('J', function(e){
	                var right = parseFloat(self.vid.annotations.rsdr.el_.style.left) / 100.00;
	                var secs_left = self.vid.rangeslider._seconds(right);
	                
	                var newright = 0.0;
	                if (secs_left > 5.0) {
	                    newright = secs_left - 5;
	                }
	                var new_percentage = self.vid.rangeslider._percent(newright);
	                self.vid.annotations.rsd.setPosition(1, new_percentage);
	            });

	            Mousetrap(iframe).bind('L', function(e){
	                var right = parseFloat(self.vid.annotations.rsdr.el_.style.left) / 100.00;
	                var secs_left = self.vid.rangeslider._seconds(right);
	                
	                var newright = secs_left + 5;
	                var new_percentage = self.vid.rangeslider._percent(newright);
	                if (new_percentage > 1) {
	                    new_percentage = 1.0;
	                }
	                self.vid.annotations.rsd.setPosition(1, new_percentage);
	            });            

	        };

	        $.TargetObjectController.prototype.colorizeAnnotation = function(annotationId, rgbColor) {
	            if (this.initOptions.mediaType === "image") {
	                setTimeout(function(){
	                    jQuery(".annotation#" + annotationId.toString()).css("border", "2px solid rgba(" + rgbColor.red + ", " + rgbColor.green + ", " + rgbColor.blue + ", " + rgbColor.alpha + ")");
	                    window.tags = jQuery('.annotationItem.item-' + annotationId.toString()).find('.tag');
	                    window.tags.each(function (index, item) {
	                        var tag = jQuery.trim(jQuery(item).html());
	                        var rgbColor = window.AController.main.tags[tag];
	                        if (rgbColor !== undefined) {
	                                jQuery(item).css("background-color", "rgba(" + rgbColor.red + ", " + rgbColor.green + ", " + rgbColor.blue + ", " + rgbColor.alpha + ")");
	                        };
	                    })
	                }, 30);
	            };
	        };

	        $.TargetObjectController.prototype.colorizeViewer = function (){
	            window.tags = jQuery('.qtip').find('.tag');
	            window.tags.each(function (index, item) {
	                var tag = jQuery.trim(jQuery(item).html());
	                var rgbColor = window.AController.main.tags[tag];
	                if (rgbColor !== undefined) {
	                        jQuery(item).css("background-color", "rgba(" + rgbColor.red + ", " + rgbColor.green + ", " + rgbColor.blue + ", " + rgbColor.alpha + ")");
	                };
	            });
	        };

	        $.TargetObjectController.prototype.colorizeEditor = function (){
	            window.tags = jQuery('.token-input-token p');
	            window.tags.each(function (index, item) {
	                var tag = jQuery.trim(jQuery(item).html());
	                var rgbColor = window.AController.main.tags[tag];
	                if (rgbColor !== undefined) {
	                    jQuery(item).parent().css("background-color", "rgba(" + rgbColor.red + ", " + rgbColor.green + ", " + rgbColor.blue + ", " + rgbColor.alpha + ")");
	                };
	            });
	        };

	        $.TargetObjectController.prototype.toggleAnnotations = function() {
	            if (this.initOptions.mediaType === "text") {
	                var annotator = window.AController.annotationCore.annotation_tool;
	                var store = annotator.plugins.Store;
	                if (jQuery('.annotations-status').hasClass('on')) {
	                    jQuery('.annotations-status .hover-inst').html("Show annotations");
	                    jQuery('.annotations-status').attr('aria-label', "Show annotations");
	                    jQuery('.annotations-status i').removeClass('fa-close');
	                    jQuery('.annotations-status i').addClass('fa-comments');
	                    this.annotationsSaved = store.annotations.slice();
	                    window.AController.dashboardObjectController.endpoint._clearAnnotator();
	                } else {
	                    jQuery('.annotations-status .hover-inst').html("Hide annotations");
	                    jQuery('.annotations-status').attr('aria-label', "Hide annotations");
	                    jQuery('.annotations-status i').addClass('fa-close');
	                    jQuery('.annotations-status i').removeClass('fa-comments');
	                    this.annotationsSaved.forEach(function (annotation) {
	                            annotator.setupAnnotation(annotation);
	                            store.registerAnnotation(annotation);
	                    });
	                    annotator.publish("externalCallToHighlightTags");
	                }
	                jQuery('.annotations-status').toggleClass("on");
	            };
	        };

	}(AController));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	(function(Annotator) {
	Annotator.Plugin.SummernoteRichText = function(element, options) {
		
		// extends the Plugin class from Annotator
		Annotator.Plugin.apply(this, arguments);

		this.field = null;
		this.options = {
			height: 100,
			focus: true,
			width: 400,
		};

		return this;
	};

	Annotator.Plugin.SummernoteRichText.prototype = new Annotator.Plugin();

	Annotator.Plugin.SummernoteRichText.prototype.pluginInit = function() {
		if (!Annotator.supported()){
			return;
		}
		var self = Annotator._instances[0].plugins.SummernoteRichText;
		self.field = self.annotator.editor.addField({
			type: 'input',
			load: self.updateEditor,
			submit: self.submitEditor,
		});

		self.viewer = self.annotator.viewer.addField({
			load: this.updateViewer,
		});

		self.annotator.subscribe("annotationEditorShown", function() {
			// checks to make sure it can fit on screen
			$('#annotator-field-0').summernote(self.options);
			self.checkOrientation();

			// then it will restart summernote, otherwise it may cause all <li> to have Save
			// and cancel buttons.
			$('#annotator-field-0').destroy();
			setTimeout(function(){$('#annotator-field-0').summernote(self.options)}, 100);
		});

		self.annotator.subscribe("annotationEditorHidden", function() {
			$('#annotator-field-0').destroy();
			$('.fullscreen').toggleClass('fullscreen');
		});
	};

	Annotator.Plugin.SummernoteRichText.prototype.checkOrientation = function() {
	      var current, offset, viewport, widget, window;
	      this.annotator.editor.element.removeClass('annotator-invert-x').removeClass('annotator-invert-y');
	      window = $(Annotator.Util.getGlobal());
	      widget = this.annotator.editor.element.children(":first");
	      offset = widget.offset();
	      viewport = {
	        top: window.scrollTop(),
	        right: window.width() + window.scrollLeft()
	      };
	      current = {
	        top: offset.top,
	        right: offset.left + widget.width()
	      };
	      if ((current.top - viewport.top) < 0) {
	        this.annotator.editor.element.addClass('annotator-invert-y');
	      }
	      if ((current.right - viewport.right) > 0) {
	        this.annotator.editor.element.addClass('annotator-invert-x');
	      }
	      return this;
	}

	Annotator.Plugin.SummernoteRichText.prototype.updateEditor = function(field, annotation) {
		var text = typeof annotation.text != 'undefined' ? annotation.text : '';
		$('#annotator-field-0').code(text);
		$(field).remove();
	};

	Annotator.Plugin.SummernoteRichText.prototype.updateViewer = function(field, annotation) {
		var textDiv = $(field.parentNode).find('div:first-of-type')[0];
	    textDiv.innerHTML = annotation.text;
	    $(field).remove();
	};

	Annotator.Plugin.SummernoteRichText.prototype.submitEditor = function(field, annotation) {
		var text = $('#annotator-field-0').code();
		if (annotation.text !== text) {
	        annotation.text = text;
		}
	};

	})( true ? __webpack_require__(24) : window.Annotator);


/***/ }
/******/ ]);