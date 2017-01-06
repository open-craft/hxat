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

	__webpack_require__(30);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(21);
	__webpack_require__(44);
	__webpack_require__(45);
	__webpack_require__(46);
	__webpack_require__(47);
	__webpack_require__(23);
	__webpack_require__(48);
	__webpack_require__(49);
	__webpack_require__(24);
	__webpack_require__(26);
	__webpack_require__(50);
	__webpack_require__(29);
	__webpack_require__(51);
	__webpack_require__(52);
	__webpack_require__(25);
	__webpack_require__(27);
	module.exports = __webpack_require__(28);


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
/* 8 */,
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
/* 19 */,
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


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(31);
	__webpack_require__(9);
	__webpack_require__(36);
	__webpack_require__(38);
	__webpack_require__(13);
	__webpack_require__(15);
	__webpack_require__(40);
	__webpack_require__(42);
	__webpack_require__(17);

	window.jQuery(document).ready(function() {
	    var element = document.createElement('div');
	    element.innerHTML = '<video id="vid1" class="video-js vjs-default-skin" controls="controls" preload="none" width="auto" height="698"><source src="'+jQuery('#video-url').html()+'" type="video/youtube" /> <track kind="captions" src="'+jQuery('#transcript').html()+'" srclang="en" label="English" default /></video>';
	    element.id = "viewer";
	    jQuery('#container')[0].appendChild(element);
	    jQuery('#transcript').html("");
	    var vidElement = jQuery('#viewer').find('video')[0];
	    if (typeof videojs !== undefined) {
	        window.vid = videojs(vidElement, {
	            techOrder: ['youtube', 'html5', 'flash'],
	            playbackRates:[0.5, 1, 1.5, 2],
	            downloadItems: [],
	        }, {});
	    }
	    var annotatorOptions = {};
	    window.annotation_tool = jQuery('#viewer').annotator(annotatorOptions).data('annotator');
	    window.annotation_tool.addPlugin('Permissions', {
	        userString: function (user) {
	            return '';
	        },
	        userId: function (user) {
	            return '';
	        },
	        userAuthorize: function(action, annotation, user) {
	            if (action === 'read') {
	                return true;
	            }
	            return false;
	          }
	    });
	    
	    window.annotation_tool.addPlugin('VideoJS', {});
	    window.annotation_tool.addPlugin('HighlightTags', {
	        'tag': jQuery('#tags').html()
	    });
	    window.annotation_tool.addPlugin('TimeRangeEditor', {});
	    window.annotation_tool.addPlugin('SummernoteRichText', {});

	    var self = window;
	        var options = {
	            showTitle: false,
	            showTrackSelector: false,
	        };
	    var annotations_url = jQuery('#annotations-url').html();
	    var options = {
	        url: annotations_url,
	        success: function(data) {
	            window.annotation_tool.addPlugin('LocalStore', {
	                annotations: data.rows
	            });
	            jQuery(document).trigger('annotation_core_init');
	        },
	        async: true
	    }
	    jQuery.ajax(options);
	    var transcript_options = {
	        showTitle: false,
	        showTrackSelector: false,
	    };
	    window.parse = function(val) {
	        var result = "Not found",
	            tmp = [];
	        window.location.search
	        //.replace ( "?", "" ) 
	        // this is better, there might be a question mark inside
	        .substr(1)
	            .split("&")
	            .forEach(function (item) {
	            tmp = item.split("=");
	            if (tmp[0] === val) result = decodeURIComponent(tmp[1]);
	        });
	        return result;
	    };

	    window.play_annotation = function(ann_id){
	        var found = undefined;
	        jQuery.each(window.annotation_tool.plugins.LocalStore.annotations, function(index, value){ 
	            if(value.id == parseInt(ann_id, 10)){
	                found = value;
	                console.log("Found");
	            }
	        });
	        if (found !== undefined) {
	            var player = window.vid;
	            player.annotator = window.annotation_tool;
	            //player.annotations.showAnnotation(annotation);
	            var playFunction = function() {
	                // Fix problem with youtube videos in the first play. The plugin don't have this trigger
	                if (player.techName === 'Youtube') {
	                    var startAPI = function() {
	                        player.annotations.showAnnotation(found);
	                    }
	                    if (player.annotations.loaded)
	                        startAPI();
	                    else
	                        player.one('loadedRangeSlider', startAPI); // show Annotations once the RangeSlider is loaded
	                } else {
	                    player.annotations.showAnnotation(found);
	                }
	            };
	            if (player.paused()) {
	                player.play();
	                player.one('playing', playFunction);
	            } else {
	                playFunction();
	            }
	        }
	    };
	    window.isFiltered = false;
	    window.transcript = self.vid.transcript(transcript_options);
	    document.querySelector('#transcript').appendChild(window.transcript.el());
	     jQuery(document).bind('annotation_core_init', function() {
	        self.vid.rangeslider(jQuery.extend(true, {}, {}));
	        self.vid.annotations(jQuery.extend(true, {}, {posBigNew: "none"}));
	        jQuery(self.vid.annotations.rsdl.el()).watch('left', function(data, i){
	            jQuery('#startTimeFilter').val(self.vid.annotations.rsdbl.el_.firstChild.innerHTML);
	        });
	        jQuery(self.vid.annotations.rsdr.el()).watch('left', function(data, i){
	            jQuery('#endTimeFilter').val(self.vid.annotations.rsdbr.el_.firstChild.innerHTML);
	        });
	        setTimeout(function() {
	            jQuery('#hxat_lite_loading').hide();
	            jQuery('#container').show();
	            jQuery('.sidebar').show();
	            if (window.location.search !== "") {
	                var ann_id = window.parse('videoAn');
	                if (ann_id !== undefined) {
	                    window.play_annotation(ann_id);
	                }
	            }
	        }, 500);
	    });
	    window.extra_options = {}
	    jQuery.each(jQuery('#extra_options').children(), function(index, value) {
	        window.extra_options[value.className] = value.innerHTML;
	    });
	    if (window.extra_options.transcript_on_load == "true") {
	        jQuery("#transcript").show();
	    }
	});

/***/ },
/* 31 */
/***/ function(module, exports) {

	

/***/ },
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ function(module, exports) {

	

/***/ },
/* 37 */,
/* 38 */
/***/ function(module, exports) {

	

/***/ },
/* 39 */,
/* 40 */
/***/ function(module, exports) {

	

/***/ },
/* 41 */,
/* 42 */
/***/ function(module, exports) {

	

/***/ },
/* 43 */,
/* 44 */
/***/ function(module, exports) {

	/**
	 * @fileoverview Main function src.
	 */

	// HTML5 Shiv. Must be in <head> to support older browsers.
	document.createElement('video');
	document.createElement('audio');
	document.createElement('track');

	/**
	 * Doubles as the main function for users to create a player instance and also
	 * the main library object.
	 *
	 * @param  {String|Element} id      Video element or video element ID
	 * @param  {Object=} options        Optional options object for config/settings
	 * @param  {Function=} ready        Optional ready callback
	 * @return {vjs.Player}             A player instance
	 */
	var vjs = function(id, options, ready){
	  var tag; // Element of ID

	  // Allow for element or ID to be passed in
	  // String ID
	  if (typeof id === 'string') {

	    // Adjust for jQuery ID syntax
	    if (id.indexOf('#') === 0) {
	      id = id.slice(1);
	    }

	    // If a player instance has already been created for this ID return it.
	    if (vjs.players[id]) {
	      return vjs.players[id];

	    // Otherwise get element for ID
	    } else {
	      tag = vjs.el(id);
	    }

	  // ID is a media element
	  } else {
	    tag = id;
	  }

	  // Check for a useable element
	  if (!tag || !tag.nodeName) { // re: nodeName, could be a box div also
	    throw new TypeError('The element or ID supplied is not valid. (videojs)'); // Returns
	  }

	  // Element may have a player attr referring to an already created player instance.
	  // If not, set up a new player and return the instance.
	  return tag['player'] || new vjs.Player(tag, options, ready);
	};

	// Extended name, also available externally, window.videojs
	var videojs = vjs;
	window.videojs = window.vjs = vjs;

	// CDN Version. Used to target right flash swf.
	vjs.CDN_VERSION = '4.2';
	vjs.ACCESS_PROTOCOL = ('https:' == document.location.protocol ? 'https://' : 'http://');

	/**
	 * Global Player instance options, surfaced from vjs.Player.prototype.options_
	 * vjs.options = vjs.Player.prototype.options_
	 * All options should use string keys so they avoid
	 * renaming by closure compiler
	 * @type {Object}
	 */
	vjs.options = {
	  // Default order of fallback technology
	  'techOrder': ['html5','flash','youtube'],
	  // techOrder: ['flash','html5'],

	  'html5': {},
	  'flash': {},

	  // Default of web browser is 300x150. Should rely on source width/height.
	  'width': 300,
	  'height': 150,
	  // defaultVolume: 0.85,
	  'defaultVolume': 0.00, // The freakin seaguls are driving me crazy!

	  // default playback rates
	  'playbackRates': [],
	  // Add playback rate selection by adding rates
	  // 'playbackRates': [0.5, 1, 1.5, 2],

	  // Included control sets
	  'children': {
	    'mediaLoader': {},
	    'posterImage': {},
	    'textTrackDisplay': {},
	    'loadingSpinner': {},
	    'bigPlayButton': {},
	    'controlBar': {}
	  },

	  // Default message to show when a video cannot be played.
	  'notSupportedMessage': 'Sorry, no compatible source and playback ' +
	      'technology were found for this video. Try using another browser ' +
	      'like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the ' +
	      'latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'
	};

	// Set CDN Version of swf
	// The added (+) blocks the replace from changing this 4.2 string
	if (vjs.CDN_VERSION !== 'GENERATED'+'_CDN_VSN') {
	  videojs.options['flash']['swf'] = vjs.ACCESS_PROTOCOL + 'vjs.zencdn.net/'+vjs.CDN_VERSION+'/video-js.swf';
	}

	/**
	 * Global player list
	 * @type {Object}
	 */
	vjs.players = {};
	/**
	 * Core Object/Class for objects that use inheritance + contstructors
	 * @constructor
	 */
	vjs.CoreObject = vjs['CoreObject'] = function(){};
	// Manually exporting vjs['CoreObject'] here for Closure Compiler
	// because of the use of the extend/create class methods
	// If we didn't do this, those functions would get flattend to something like
	// `a = ...` and `this.prototype` would refer to the global object instead of
	// CoreObject

	/**
	 * Create a new object that inherits from this Object
	 * @param {Object} props Functions and properties to be applied to the
	 *                       new object's prototype
	 * @return {vjs.CoreObject} Returns an object that inherits from CoreObject
	 * @this {*}
	 */
	vjs.CoreObject.extend = function(props){
	  var init, subObj;

	  props = props || {};
	  // Set up the constructor using the supplied init method
	  // or using the init of the parent object
	  // Make sure to check the unobfuscated version for external libs
	  init = props['init'] || props.init || this.prototype['init'] || this.prototype.init || function(){};
	  // In Resig's simple class inheritance (previously used) the constructor
	  //  is a function that calls `this.init.apply(arguments)`
	  // However that would prevent us from using `ParentObject.call(this);`
	  //  in a Child constuctor because the `this` in `this.init`
	  //  would still refer to the Child and cause an inifinite loop.
	  // We would instead have to do
	  //    `ParentObject.prototype.init.apply(this, argumnents);`
	  //  Bleh. We're not creating a _super() function, so it's good to keep
	  //  the parent constructor reference simple.
	  subObj = function(){
	    init.apply(this, arguments);
	  };

	  // Inherit from this object's prototype
	  subObj.prototype = vjs.obj.create(this.prototype);
	  // Reset the constructor property for subObj otherwise
	  // instances of subObj would have the constructor of the parent Object
	  subObj.prototype.constructor = subObj;

	  // Make the class extendable
	  subObj.extend = vjs.CoreObject.extend;
	  // Make a function for creating instances
	  subObj.create = vjs.CoreObject.create;

	  // Extend subObj's prototype with functions and other properties from props
	  for (var name in props) {
	    if (props.hasOwnProperty(name)) {
	      subObj.prototype[name] = props[name];
	    }
	  }

	  return subObj;
	};

	/**
	 * Create a new instace of this Object class
	 * @return {vjs.CoreObject} Returns an instance of a CoreObject subclass
	 * @this {*}
	 */
	vjs.CoreObject.create = function(){
	  // Create a new object that inherits from this object's prototype
	  var inst = vjs.obj.create(this.prototype);

	  // Apply this constructor function to the new object
	  this.apply(inst, arguments);

	  // Return the new object
	  return inst;
	};
	/**
	 * @fileoverview Event System (John Resig - Secrets of a JS Ninja http://jsninja.com/)
	 * (Original book version wasn't completely usable, so fixed some things and made Closure Compiler compatible)
	 * This should work very similarly to jQuery's events, however it's based off the book version which isn't as
	 * robust as jquery's, so there's probably some differences.
	 */

	/**
	 * Add an event listener to element
	 * It stores the handler function in a separate cache object
	 * and adds a generic handler to the element's event,
	 * along with a unique id (guid) to the element.
	 * @param  {Element|Object}   elem Element or object to bind listeners to
	 * @param  {String}   type Type of event to bind to.
	 * @param  {Function} fn   Event listener.
	 */
	vjs.on = function(elem, type, fn){
	  var data = vjs.getData(elem);

	  // We need a place to store all our handler data
	  if (!data.handlers) data.handlers = {};

	  if (!data.handlers[type]) data.handlers[type] = [];

	  if (!fn.guid) fn.guid = vjs.guid++;

	  data.handlers[type].push(fn);

	  if (!data.dispatcher) {
	    data.disabled = false;

	    data.dispatcher = function (event){

	      if (data.disabled) return;
	      event = vjs.fixEvent(event);

	      var handlers = data.handlers[event.type];

	      if (handlers) {
	        // Copy handlers so if handlers are added/removed during the process it doesn't throw everything off.
	        var handlersCopy = handlers.slice(0);

	        for (var m = 0, n = handlersCopy.length; m < n; m++) {
	          if (event.isImmediatePropagationStopped()) {
	            break;
	          } else {
	            handlersCopy[m].call(elem, event);
	          }
	        }
	      }
	    };
	  }

	  if (data.handlers[type].length == 1) {
	    if (document.addEventListener) {
	      elem.addEventListener(type, data.dispatcher, false);
	    } else if (document.attachEvent) {
	      elem.attachEvent('on' + type, data.dispatcher);
	    }
	  }
	};

	/**
	 * Removes event listeners from an element
	 * @param  {Element|Object}   elem Object to remove listeners from
	 * @param  {String=}   type Type of listener to remove. Don't include to remove all events from element.
	 * @param  {Function} fn   Specific listener to remove. Don't incldue to remove listeners for an event type.
	 */
	vjs.off = function(elem, type, fn) {
	  // Don't want to add a cache object through getData if not needed
	  if (!vjs.hasData(elem)) return;

	  var data = vjs.getData(elem);

	  // If no events exist, nothing to unbind
	  if (!data.handlers) { return; }

	  // Utility function
	  var removeType = function(t){
	     data.handlers[t] = [];
	     vjs.cleanUpEvents(elem,t);
	  };

	  // Are we removing all bound events?
	  if (!type) {
	    for (var t in data.handlers) removeType(t);
	    return;
	  }

	  var handlers = data.handlers[type];

	  // If no handlers exist, nothing to unbind
	  if (!handlers) return;

	  // If no listener was provided, remove all listeners for type
	  if (!fn) {
	    removeType(type);
	    return;
	  }

	  // We're only removing a single handler
	  if (fn.guid) {
	    for (var n = 0; n < handlers.length; n++) {
	      if (handlers[n].guid === fn.guid) {
	        handlers.splice(n--, 1);
	      }
	    }
	  }

	  vjs.cleanUpEvents(elem, type);
	};

	/**
	 * Clean up the listener cache and dispatchers
	 * @param  {Element|Object} elem Element to clean up
	 * @param  {String} type Type of event to clean up
	 */
	vjs.cleanUpEvents = function(elem, type) {
	  var data = vjs.getData(elem);

	  // Remove the events of a particular type if there are none left
	  if (data.handlers[type].length === 0) {
	    delete data.handlers[type];
	    // data.handlers[type] = null;
	    // Setting to null was causing an error with data.handlers

	    // Remove the meta-handler from the element
	    if (document.removeEventListener) {
	      elem.removeEventListener(type, data.dispatcher, false);
	    } else if (document.detachEvent) {
	      elem.detachEvent('on' + type, data.dispatcher);
	    }
	  }

	  // Remove the events object if there are no types left
	  if (vjs.isEmpty(data.handlers)) {
	    delete data.handlers;
	    delete data.dispatcher;
	    delete data.disabled;

	    // data.handlers = null;
	    // data.dispatcher = null;
	    // data.disabled = null;
	  }

	  // Finally remove the expando if there is no data left
	  if (vjs.isEmpty(data)) {
	    vjs.removeData(elem);
	  }
	};

	/**
	 * Fix a native event to have standard property values
	 * @param  {Object} event Event object to fix
	 * @return {Object}
	 */
	vjs.fixEvent = function(event) {

	  function returnTrue() { return true; }
	  function returnFalse() { return false; }

	  // Test if fixing up is needed
	  // Used to check if !event.stopPropagation instead of isPropagationStopped
	  // But native events return true for stopPropagation, but don't have
	  // other expected methods like isPropagationStopped. Seems to be a problem
	  // with the Javascript Ninja code. So we're just overriding all events now.
	  if (!event || !event.isPropagationStopped) {
	    var old = event || window.event;

	    event = {};
	    // Clone the old object so that we can modify the values event = {};
	    // IE8 Doesn't like when you mess with native event properties
	    // Firefox returns false for event.hasOwnProperty('type') and other props
	    //  which makes copying more difficult.
	    // TODO: Probably best to create a whitelist of event props
	    for (var key in old) {
	      // Safari 6.0.3 warns you if you try to copy deprecated layerX/Y
	      if (key !== 'layerX' && key !== 'layerY') {
	        event[key] = old[key];
	      }
	    }

	    // The event occurred on this element
	    if (!event.target) {
	      event.target = event.srcElement || document;
	    }

	    // Handle which other element the event is related to
	    event.relatedTarget = event.fromElement === event.target ?
	      event.toElement :
	      event.fromElement;

	    // Stop the default browser action
	    event.preventDefault = function () {
	      if (old.preventDefault) {
	        old.preventDefault();
	      }
	      event.returnValue = false;
	      event.isDefaultPrevented = returnTrue;
	    };

	    event.isDefaultPrevented = returnFalse;

	    // Stop the event from bubbling
	    event.stopPropagation = function () {
	      if (old.stopPropagation) {
	        old.stopPropagation();
	      }
	      event.cancelBubble = true;
	      event.isPropagationStopped = returnTrue;
	    };

	    event.isPropagationStopped = returnFalse;

	    // Stop the event from bubbling and executing other handlers
	    event.stopImmediatePropagation = function () {
	      if (old.stopImmediatePropagation) {
	        old.stopImmediatePropagation();
	      }
	      event.isImmediatePropagationStopped = returnTrue;
	      event.stopPropagation();
	    };

	    event.isImmediatePropagationStopped = returnFalse;

	    // Handle mouse position
	    if (event.clientX != null) {
	      var doc = document.documentElement, body = document.body;

	      event.pageX = event.clientX +
	        (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
	        (doc && doc.clientLeft || body && body.clientLeft || 0);
	      event.pageY = event.clientY +
	        (doc && doc.scrollTop || body && body.scrollTop || 0) -
	        (doc && doc.clientTop || body && body.clientTop || 0);
	    }

	    // Handle key presses
	    event.which = event.charCode || event.keyCode;

	    // Fix button for mouse clicks:
	    // 0 == left; 1 == middle; 2 == right
	    if (event.button != null) {
	      event.button = (event.button & 1 ? 0 :
	        (event.button & 4 ? 1 :
	          (event.button & 2 ? 2 : 0)));
	    }
	  }

	  // Returns fixed-up instance
	  return event;
	};

	/**
	 * Trigger an event for an element
	 * @param  {Element|Object} elem  Element to trigger an event on
	 * @param  {String} event Type of event to trigger
	 */
	vjs.trigger = function(elem, event) {
	  // Fetches element data and a reference to the parent (for bubbling).
	  // Don't want to add a data object to cache for every parent,
	  // so checking hasData first.
	  var elemData = (vjs.hasData(elem)) ? vjs.getData(elem) : {};
	  var parent = elem.parentNode || elem.ownerDocument;
	      // type = event.type || event,
	      // handler;

	  // If an event name was passed as a string, creates an event out of it
	  if (typeof event === 'string') {
	    event = { type:event, target:elem };
	  }
	  // Normalizes the event properties.
	  event = vjs.fixEvent(event);

	  // If the passed element has a dispatcher, executes the established handlers.
	  if (elemData.dispatcher) {
	    elemData.dispatcher.call(elem, event);
	  }

	  // Unless explicitly stopped or the event does not bubble (e.g. media events)
	    // recursively calls this function to bubble the event up the DOM.
	    if (parent && !event.isPropagationStopped() && event.bubbles !== false) {
	    vjs.trigger(parent, event);

	  // If at the top of the DOM, triggers the default action unless disabled.
	  } else if (!parent && !event.isDefaultPrevented()) {
	    var targetData = vjs.getData(event.target);

	    // Checks if the target has a default action for this event.
	    if (event.target[event.type]) {
	      // Temporarily disables event dispatching on the target as we have already executed the handler.
	      targetData.disabled = true;
	      // Executes the default action.
	      if (typeof event.target[event.type] === 'function') {
	        event.target[event.type]();
	      }
	      // Re-enables event dispatching.
	      targetData.disabled = false;
	    }
	  }

	  // Inform the triggerer if the default was prevented by returning false
	  return !event.isDefaultPrevented();
	  /* Original version of js ninja events wasn't complete.
	   * We've since updated to the latest version, but keeping this around
	   * for now just in case.
	   */
	  // // Added in attion to book. Book code was broke.
	  // event = typeof event === 'object' ?
	  //   event[vjs.expando] ?
	  //     event :
	  //     new vjs.Event(type, event) :
	  //   new vjs.Event(type);

	  // event.type = type;
	  // if (handler) {
	  //   handler.call(elem, event);
	  // }

	  // // Clean up the event in case it is being reused
	  // event.result = undefined;
	  // event.target = elem;
	};

	/**
	 * Trigger a listener only once for an event
	 * @param  {Element|Object}   elem Element or object to
	 * @param  {[type]}   type [description]
	 * @param  {Function} fn   [description]
	 * @return {[type]}
	 */
	vjs.one = function(elem, type, fn) {
	  var func = function(){
	    vjs.off(elem, type, func);
	    fn.apply(this, arguments);
	  };
	  func.guid = fn.guid = fn.guid || vjs.guid++;
	  vjs.on(elem, type, func);
	};
	var hasOwnProp = Object.prototype.hasOwnProperty;

	/**
	 * Creates an element and applies properties.
	 * @param  {String=} tagName    Name of tag to be created.
	 * @param  {Object=} properties Element properties to be applied.
	 * @return {Element}
	 */
	vjs.createEl = function(tagName, properties){
	  var el, propName;

	  el = document.createElement(tagName || 'div');

	  for (propName in properties){
	    if (hasOwnProp.call(properties, propName)) {
	      //el[propName] = properties[propName];
	      // Not remembering why we were checking for dash
	      // but using setAttribute means you have to use getAttribute

	      // The check for dash checks for the aria-* attributes, like aria-label, aria-valuemin.
	      // The additional check for "role" is because the default method for adding attributes does not
	      // add the attribute "role". My guess is because it's not a valid attribute in some namespaces, although
	      // browsers handle the attribute just fine. The W3C allows for aria-* attributes to be used in pre-HTML5 docs.
	      // http://www.w3.org/TR/wai-aria-primer/#ariahtml. Using setAttribute gets around this problem.

	       if (propName.indexOf('aria-') !== -1 || propName=='role') {
	         el.setAttribute(propName, properties[propName]);
	       } else {
	         el[propName] = properties[propName];
	       }
	    }
	  }
	  return el;
	};

	/**
	 * Uppercase the first letter of a string
	 * @param  {String} string String to be uppercased
	 * @return {String}
	 */
	vjs.capitalize = function(string){
	  return string.charAt(0).toUpperCase() + string.slice(1);
	};

	/**
	 * Object functions container
	 * @type {Object}
	 */
	vjs.obj = {};

	/**
	 * Object.create shim for prototypal inheritance.
	 * https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/create
	 * @param  {Object}   obj Object to use as prototype
	 */
	 vjs.obj.create = Object.create || function(obj){
	  //Create a new function called 'F' which is just an empty object.
	  function F() {}

	  //the prototype of the 'F' function should point to the
	  //parameter of the anonymous function.
	  F.prototype = obj;

	  //create a new constructor function based off of the 'F' function.
	  return new F();
	};

	/**
	 * Loop through each property in an object and call a function
	 * whose arguments are (key,value)
	 * @param  {Object}   obj Object of properties
	 * @param  {Function} fn  Function to be called on each property.
	 * @this {*}
	 */
	vjs.obj.each = function(obj, fn, context){
	  for (var key in obj) {
	    if (hasOwnProp.call(obj, key)) {
	      fn.call(context || this, key, obj[key]);
	    }
	  }
	};

	/**
	 * Merge two objects together and return the original.
	 * @param  {Object} obj1
	 * @param  {Object} obj2
	 * @return {Object}
	 */
	vjs.obj.merge = function(obj1, obj2){
	  if (!obj2) { return obj1; }
	  for (var key in obj2){
	    if (hasOwnProp.call(obj2, key)) {
	      obj1[key] = obj2[key];
	    }
	  }
	  return obj1;
	};

	/**
	 * Merge two objects, and merge any properties that are objects
	 * instead of just overwriting one. Uses to merge options hashes
	 * where deeper default settings are important.
	 * @param  {Object} obj1 Object to override
	 * @param  {Object} obj2 Overriding object
	 * @return {Object}      New object. Obj1 and Obj2 will be untouched.
	 */
	vjs.obj.deepMerge = function(obj1, obj2){
	  var key, val1, val2;

	  // make a copy of obj1 so we're not ovewriting original values.
	  // like prototype.options_ and all sub options objects
	  obj1 = vjs.obj.copy(obj1);

	  for (key in obj2){
	    if (hasOwnProp.call(obj2, key)) {
	      val1 = obj1[key];
	      val2 = obj2[key];

	      // Check if both properties are pure objects and do a deep merge if so
	      if (vjs.obj.isPlain(val1) && vjs.obj.isPlain(val2)) {
	        obj1[key] = vjs.obj.deepMerge(val1, val2);
	      } else {
	        obj1[key] = obj2[key];
	      }
	    }
	  }
	  return obj1;
	};

	/**
	 * Make a copy of the supplied object
	 * @param  {Object} obj Object to copy
	 * @return {Object}     Copy of object
	 */
	vjs.obj.copy = function(obj){
	  return vjs.obj.merge({}, obj);
	};

	/**
	 * Check if an object is plain, and not a dom node or any object sub-instance
	 * @param  {Object} obj Object to check
	 * @return {Boolean}     True if plain, false otherwise
	 */
	vjs.obj.isPlain = function(obj){
	  return !!obj
	    && typeof obj === 'object'
	    && obj.toString() === '[object Object]'
	    && obj.constructor === Object;
	};

	/**
	 * Bind (a.k.a proxy or Context). A simple method for changing the context of a function
	   It also stores a unique id on the function so it can be easily removed from events
	 * @param  {*}   context The object to bind as scope
	 * @param  {Function} fn      The function to be bound to a scope
	 * @param  {Number=}   uid     An optional unique ID for the function to be set
	 * @return {Function}
	 */
	vjs.bind = function(context, fn, uid) {
	  // Make sure the function has a unique ID
	  if (!fn.guid) { fn.guid = vjs.guid++; }

	  // Create the new function that changes the context
	  var ret = function() {
	    return fn.apply(context, arguments);
	  };

	  // Allow for the ability to individualize this function
	  // Needed in the case where multiple objects might share the same prototype
	  // IF both items add an event listener with the same function, then you try to remove just one
	  // it will remove both because they both have the same guid.
	  // when using this, you need to use the bind method when you remove the listener as well.
	  // currently used in text tracks
	  ret.guid = (uid) ? uid + '_' + fn.guid : fn.guid;

	  return ret;
	};

	/**
	 * Element Data Store. Allows for binding data to an element without putting it directly on the element.
	 * Ex. Event listneres are stored here.
	 * (also from jsninja.com, slightly modified and updated for closure compiler)
	 * @type {Object}
	 */
	vjs.cache = {};

	/**
	 * Unique ID for an element or function
	 * @type {Number}
	 */
	vjs.guid = 1;

	/**
	 * Unique attribute name to store an element's guid in
	 * @type {String}
	 * @constant
	 */
	vjs.expando = 'vdata' + (new Date()).getTime();

	/**
	 * Returns the cache object where data for an element is stored
	 * @param  {Element} el Element to store data for.
	 * @return {Object}
	 */
	vjs.getData = function(el){
	  var id = el[vjs.expando];
	  if (!id) {
	    id = el[vjs.expando] = vjs.guid++;
	    vjs.cache[id] = {};
	  }
	  return vjs.cache[id];
	};

	/**
	 * Returns the cache object where data for an element is stored
	 * @param  {Element} el Element to store data for.
	 * @return {Object}
	 */
	vjs.hasData = function(el){
	  var id = el[vjs.expando];
	  return !(!id || vjs.isEmpty(vjs.cache[id]));
	};

	/**
	 * Delete data for the element from the cache and the guid attr from getElementById
	 * @param  {Element} el Remove data for an element
	 */
	vjs.removeData = function(el){
	  var id = el[vjs.expando];
	  if (!id) { return; }
	  // Remove all stored data
	  // Changed to = null
	  // http://coding.smashingmagazine.com/2012/11/05/writing-fast-memory-efficient-javascript/
	  // vjs.cache[id] = null;
	  delete vjs.cache[id];

	  // Remove the expando property from the DOM node
	  try {
	    delete el[vjs.expando];
	  } catch(e) {
	    if (el.removeAttribute) {
	      el.removeAttribute(vjs.expando);
	    } else {
	      // IE doesn't appear to support removeAttribute on the document element
	      el[vjs.expando] = null;
	    }
	  }
	};

	vjs.isEmpty = function(obj) {
	  for (var prop in obj) {
	    // Inlude null properties as empty.
	    if (obj[prop] !== null) {
	      return false;
	    }
	  }
	  return true;
	};

	/**
	 * Add a CSS class name to an element
	 * @param {Element} element    Element to add class name to
	 * @param {String} classToAdd Classname to add
	 */
	vjs.addClass = function(element, classToAdd){
	  if ((' '+element.className+' ').indexOf(' '+classToAdd+' ') == -1) {
	    element.className = element.className === '' ? classToAdd : element.className + ' ' + classToAdd;
	  }
	};

	/**
	 * Remove a CSS class name from an element
	 * @param {Element} element    Element to remove from class name
	 * @param {String} classToAdd Classname to remove
	 */
	vjs.removeClass = function(element, classToRemove){
	  var classNames, i;

	  if (element.className.indexOf(classToRemove) == -1) { return; }

	  classNames = element.className.split(' ');

	  // no arr.indexOf in ie8, and we don't want to add a big shim
	  for (i = classNames.length - 1; i >= 0; i--) {
	    if (classNames[i] === classToRemove) {
	      classNames.splice(i,1);
	    }
	  }

	  element.className = classNames.join(' ');
	};

	/**
	 * Element for testing browser HTML5 video capabilities
	 * @type {Element}
	 * @constant
	 */
	vjs.TEST_VID = vjs.createEl('video');

	/**
	 * Useragent for browser testing.
	 * @type {String}
	 * @constant
	 */
	vjs.USER_AGENT = navigator.userAgent;

	/**
	 * Device is an iPhone
	 * @type {Boolean}
	 * @constant
	 */
	vjs.IS_IPHONE = (/iPhone/i).test(vjs.USER_AGENT);
	vjs.IS_IPAD = (/iPad/i).test(vjs.USER_AGENT);
	vjs.IS_IPOD = (/iPod/i).test(vjs.USER_AGENT);
	vjs.IS_IOS = vjs.IS_IPHONE || vjs.IS_IPAD || vjs.IS_IPOD;

	vjs.IOS_VERSION = (function(){
	  var match = vjs.USER_AGENT.match(/OS (\d+)_/i);
	  if (match && match[1]) { return match[1]; }
	})();

	vjs.IS_ANDROID = (/Android/i).test(vjs.USER_AGENT);
	vjs.ANDROID_VERSION = (function() {
	  // This matches Android Major.Minor.Patch versions
	  // ANDROID_VERSION is Major.Minor as a Number, if Minor isn't available, then only Major is returned
	  var match = vjs.USER_AGENT.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
	    major,
	    minor;

	  if (!match) {
	    return null;
	  }

	  major = match[1] && parseFloat(match[1]);
	  minor = match[2] && parseFloat(match[2]);

	  if (major && minor) {
	    return parseFloat(match[1] + '.' + match[2]);
	  } else if (major) {
	    return major;
	  } else {
	    return null;
	  }
	})();
	// Old Android is defined as Version older than 2.3, and requiring a webkit version of the android browser
	vjs.IS_OLD_ANDROID = vjs.IS_ANDROID && (/webkit/i).test(vjs.USER_AGENT) && vjs.ANDROID_VERSION < 2.3;

	vjs.IS_FIREFOX = (/Firefox/i).test(vjs.USER_AGENT);
	vjs.IS_CHROME = (/Chrome/i).test(vjs.USER_AGENT);

	vjs.TOUCH_ENABLED = ('ontouchstart' in window);

	/**
	 * Get an element's attribute values, as defined on the HTML tag
	 * Attributs are not the same as properties. They're defined on the tag
	 * or with setAttribute (which shouldn't be used with HTML)
	 * This will return true or false for boolean attributes.
	 * @param  {Element} tag Element from which to get tag attributes
	 * @return {Object}
	 */
	vjs.getAttributeValues = function(tag){
	  var obj, knownBooleans, attrs, attrName, attrVal;

	  obj = {};

	  // known boolean attributes
	  // we can check for matching boolean properties, but older browsers
	  // won't know about HTML5 boolean attributes that we still read from
	  knownBooleans = ','+'autoplay,controls,loop,muted,default'+',';

	  if (tag && tag.attributes && tag.attributes.length > 0) {
	    attrs = tag.attributes;

	    for (var i = attrs.length - 1; i >= 0; i--) {
	      attrName = attrs[i].name;
	      attrVal = attrs[i].value;

	      // check for known booleans
	      // the matching element property will return a value for typeof
	      if (typeof tag[attrName] === 'boolean' || knownBooleans.indexOf(','+attrName+',') !== -1) {
	        // the value of an included boolean attribute is typically an empty
	        // string ('') which would equal false if we just check for a false value.
	        // we also don't want support bad code like autoplay='false'
	        attrVal = (attrVal !== null) ? true : false;
	      }

	      obj[attrName] = attrVal;
	    }
	  }

	  return obj;
	};

	/**
	 * Get the computed style value for an element
	 * From http://robertnyman.com/2006/04/24/get-the-rendered-style-of-an-element/
	 * @param  {Element} el        Element to get style value for
	 * @param  {String} strCssRule Style name
	 * @return {String}            Style value
	 */
	vjs.getComputedDimension = function(el, strCssRule){
	  var strValue = '';
	  if(document.defaultView && document.defaultView.getComputedStyle){
	    strValue = document.defaultView.getComputedStyle(el, '').getPropertyValue(strCssRule);

	  } else if(el.currentStyle){
	    // IE8 Width/Height support
	    strValue = el['client'+strCssRule.substr(0,1).toUpperCase() + strCssRule.substr(1)] + 'px';
	  }
	  return strValue;
	};

	/**
	 * Insert an element as the first child node of another
	 * @param  {Element} child   Element to insert
	 * @param  {[type]} parent Element to insert child into
	 */
	vjs.insertFirst = function(child, parent){
	  if (parent.firstChild) {
	    parent.insertBefore(child, parent.firstChild);
	  } else {
	    parent.appendChild(child);
	  }
	};

	/**
	 * Object to hold browser support information
	 * @type {Object}
	 */
	vjs.support = {};

	/**
	 * Shorthand for document.getElementById()
	 * Also allows for CSS (jQuery) ID syntax. But nothing other than IDs.
	 * @param  {String} id  Element ID
	 * @return {Element}    Element with supplied ID
	 */
	vjs.el = function(id){
	  if (id.indexOf('#') === 0) {
	    id = id.slice(1);
	  }

	  return document.getElementById(id);
	};

	/**
	 * Format seconds as a time string, H:MM:SS or M:SS
	 * Supplying a guide (in seconds) will force a number of leading zeros
	 * to cover the length of the guide
	 * @param  {Number} seconds Number of seconds to be turned into a string
	 * @param  {Number} guide   Number (in seconds) to model the string after
	 * @return {String}         Time formatted as H:MM:SS or M:SS
	 */
	vjs.formatTime = function(seconds, guide) {
	  // Default to using seconds as guide
	  guide = guide || seconds;
	  var s = Math.floor(seconds % 60),
	      m = Math.floor(seconds / 60 % 60),
	      h = Math.floor(seconds / 3600),
	      gm = Math.floor(guide / 60 % 60),
	      gh = Math.floor(guide / 3600);

	  // handle invalid times
	  if (isNaN(seconds) || seconds === Infinity) {
	    // '-' is false for all relational operators (e.g. <, >=) so this setting
	    // will add the minimum number of fields specified by the guide
	    h = m = s = '-';
	  }

	  // Check if we need to show hours
	  h = (h > 0 || gh > 0) ? h + ':' : '';

	  // If hours are showing, we may need to add a leading zero.
	  // Always show at least one digit of minutes.
	  m = (((h || gm >= 10) && m < 10) ? '0' + m : m) + ':';

	  // Check if leading zero is need for seconds
	  s = (s < 10) ? '0' + s : s;

	  return h + m + s;
	};

	// Attempt to block the ability to select text while dragging controls
	vjs.blockTextSelection = function(){
	  document.body.focus();
	  document.onselectstart = function () { return false; };
	};
	// Turn off text selection blocking
	vjs.unblockTextSelection = function(){ document.onselectstart = function () { return true; }; };

	/**
	 * Trim whitespace from the ends of a string.
	 * @param  {String} string String to trim
	 * @return {String}        Trimmed string
	 */
	vjs.trim = function(str){
	  return (str+'').replace(/^\s+|\s+$/g, '');
	};

	/**
	 * Should round off a number to a decimal place
	 * @param  {Number} num Number to round
	 * @param  {Number} dec Number of decimal places to round to
	 * @return {Number}     Rounded number
	 */
	vjs.round = function(num, dec) {
	  if (!dec) { dec = 0; }
	  return Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	};

	/**
	 * Should create a fake TimeRange object
	 * Mimics an HTML5 time range instance, which has functions that
	 * return the start and end times for a range
	 * TimeRanges are returned by the buffered() method
	 * @param  {Number} start Start time in seconds
	 * @param  {Number} end   End time in seconds
	 * @return {Object}       Fake TimeRange object
	 */
	vjs.createTimeRange = function(start, end){
	  return {
	    length: 1,
	    start: function() { return start; },
	    end: function() { return end; }
	  };
	};

	/**
	 * Simple http request for retrieving external files (e.g. text tracks)
	 * @param  {String} url           URL of resource
	 * @param  {Function=} onSuccess  Success callback
	 * @param  {Function=} onError    Error callback
	 */
	vjs.get = function(url, onSuccess, onError){
	  var local, request;

	  if (typeof XMLHttpRequest === 'undefined') {
	    window.XMLHttpRequest = function () {
	      try { return new window.ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch (e) {}
	      try { return new window.ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch (f) {}
	      try { return new window.ActiveXObject('Msxml2.XMLHTTP'); } catch (g) {}
	      throw new Error('This browser does not support XMLHttpRequest.');
	    };
	  }

	  request = new XMLHttpRequest();
	  try {
	    request.open('GET', url);
	  } catch(e) {
	    onError(e);
	  }

	  local = (url.indexOf('file:') === 0 || (window.location.href.indexOf('file:') === 0 && url.indexOf('http') === -1));

	  request.onreadystatechange = function() {
	    if (request.readyState === 4) {
	      if (request.status === 200 || local && request.status === 0) {
	        onSuccess(request.responseText);
	      } else {
	        if (onError) {
	          onError();
	        }
	      }
	    }
	  };

	  try {
	    request.send();
	  } catch(e) {
	    if (onError) {
	      onError(e);
	    }
	  }
	};

	/* Local Storage
	================================================================================ */
	vjs.setLocalStorage = function(key, value){
	  try {
	    // IE was throwing errors referencing the var anywhere without this
	    var localStorage = window.localStorage || false;
	    if (!localStorage) { return; }
	    localStorage[key] = value;
	  } catch(e) {
	    if (e.code == 22 || e.code == 1014) { // Webkit == 22 / Firefox == 1014
	      vjs.log('LocalStorage Full (VideoJS)', e);
	    } else {
	      if (e.code == 18) {
	        vjs.log('LocalStorage not allowed (VideoJS)', e);
	      } else {
	        vjs.log('LocalStorage Error (VideoJS)', e);
	      }
	    }
	  }
	};

	/**
	 * Get abosolute version of relative URL. Used to tell flash correct URL.
	 * http://stackoverflow.com/questions/470832/getting-an-absolute-url-from-a-relative-one-ie6-issue
	 * @param  {String} url URL to make absolute
	 * @return {String}     Absolute URL
	 */
	vjs.getAbsoluteURL = function(url){

	  // Check if absolute URL
	  if (!url.match(/^https?:\/\//)) {
	    // Convert to absolute URL. Flash hosted off-site needs an absolute URL.
	    url = vjs.createEl('div', {
	      innerHTML: '<a href="'+url+'">x</a>'
	    }).firstChild.href;
	  }

	  return url;
	};

	// usage: log('inside coolFunc',this,arguments);
	// http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
	vjs.log = function(){
	  vjs.log.history = vjs.log.history || [];   // store logs to an array for reference
	  vjs.log.history.push(arguments);
	  if(window.console){
	    window.console.log(Array.prototype.slice.call(arguments));
	  }
	};

	// Offset Left
	// getBoundingClientRect technique from John Resig http://ejohn.org/blog/getboundingclientrect-is-awesome/
	vjs.findPosition = function(el) {
	    var box, docEl, body, clientLeft, scrollLeft, left, clientTop, scrollTop, top;

	    if (el.getBoundingClientRect && el.parentNode) {
	      box = el.getBoundingClientRect();
	    }

	    if (!box) {
	      return {
	        left: 0,
	        top: 0
	      };
	    }

	    docEl = document.documentElement;
	    body = document.body;

	    clientLeft = docEl.clientLeft || body.clientLeft || 0;
	    scrollLeft = window.pageXOffset || body.scrollLeft;
	    left = box.left + scrollLeft - clientLeft;

	    clientTop = docEl.clientTop || body.clientTop || 0;
	    scrollTop = window.pageYOffset || body.scrollTop;
	    top = box.top + scrollTop - clientTop;

	    return {
	      left: left,
	      top: top
	    };
	};
	/**
	 * @fileoverview Player Component - Base class for all UI objects
	 *
	 */

	/**
	 * Base UI Component class
	 * @param {Object} player  Main Player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.Component = vjs.CoreObject.extend({
	  /** @constructor */
	  init: function(player, options, ready){
	    this.player_ = player;

	    // Make a copy of prototype.options_ to protect against overriding global defaults
	    this.options_ = vjs.obj.copy(this.options_);

	    // Updated options with supplied options
	    options = this.options(options);

	    // Get ID from options, element, or create using player ID and unique ID
	    this.id_ = options['id'] || ((options['el'] && options['el']['id']) ? options['el']['id'] : player.id() + '_component_' + vjs.guid++ );

	    this.name_ = options['name'] || null;

	    // Create element if one wasn't provided in options
	    this.el_ = options['el'] || this.createEl();

	    this.children_ = [];
	    this.childIndex_ = {};
	    this.childNameIndex_ = {};

	    // Add any child components in options
	    this.initChildren();

	    this.ready(ready);
	    // Don't want to trigger ready here or it will before init is actually
	    // finished for all children that run this constructor
	  }
	});

	/**
	 * Dispose of the component and all child components.
	 */
	vjs.Component.prototype.dispose = function(){
	  this.trigger('dispose');

	  // Dispose all children.
	  if (this.children_) {
	    for (var i = this.children_.length - 1; i >= 0; i--) {
	      if (this.children_[i].dispose) {
	        this.children_[i].dispose();
	      }
	    }
	  }

	  // Delete child references
	  this.children_ = null;
	  this.childIndex_ = null;
	  this.childNameIndex_ = null;

	  // Remove all event listeners.
	  this.off();

	  // Remove element from DOM
	  if (this.el_.parentNode) {
	    this.el_.parentNode.removeChild(this.el_);
	  }

	  vjs.removeData(this.el_);
	  this.el_ = null;
	};

	/**
	 * Reference to main player instance.
	 * @type {vjs.Player}
	 * @private
	 */
	vjs.Component.prototype.player_;

	/**
	 * Return the component's player.
	 * @return {vjs.Player}
	 */
	vjs.Component.prototype.player = function(){
	  return this.player_;
	};

	/**
	 * Component options object.
	 * @type {Object}
	 * @private
	 */
	vjs.Component.prototype.options_;

	/**
	 * Deep merge of options objects
	 * Whenever a property is an object on both options objects
	 * the two properties will be merged using vjs.obj.deepMerge.
	 *
	 * This is used for merging options for child components. We
	 * want it to be easy to override individual options on a child
	 * component without having to rewrite all the other default options.
	 *
	 * Parent.prototype.options_ = {
	 *   children: {
	 *     'childOne': { 'foo': 'bar', 'asdf': 'fdsa' },
	 *     'childTwo': {},
	 *     'childThree': {}
	 *   }
	 * }
	 * newOptions = {
	 *   children: {
	 *     'childOne': { 'foo': 'baz', 'abc': '123' }
	 *     'childTwo': null,
	 *     'childFour': {}
	 *   }
	 * }
	 *
	 * this.options(newOptions);
	 *
	 * RESULT
	 *
	 * {
	 *   children: {
	 *     'childOne': { 'foo': 'baz', 'asdf': 'fdsa', 'abc': '123' },
	 *     'childTwo': null, // Disabled. Won't be initialized.
	 *     'childThree': {},
	 *     'childFour': {}
	 *   }
	 * }
	 *
	 * @param  {Object} obj Object whose values will be overwritten
	 * @return {Object}      NEW merged object. Does not return obj1.
	 */
	vjs.Component.prototype.options = function(obj){
	  if (obj === undefined) return this.options_;

	  return this.options_ = vjs.obj.deepMerge(this.options_, obj);
	};

	/**
	 * The DOM element for the component.
	 * @type {Element}
	 * @private
	 */
	vjs.Component.prototype.el_;

	/**
	 * Create the component's DOM element.
	 * @param  {String=} tagName  Element's node type. e.g. 'div'
	 * @param  {Object=} attributes An object of element attributes that should be set on the element.
	 * @return {Element}
	 */
	vjs.Component.prototype.createEl = function(tagName, attributes){
	  return vjs.createEl(tagName, attributes);
	};

	/**
	 * Return the component's DOM element.
	 * @return {Element}
	 */
	vjs.Component.prototype.el = function(){
	  return this.el_;
	};

	/**
	 * An optional element where, if defined, children will be inserted
	 *   instead of directly in el_
	 * @type {Element}
	 * @private
	 */
	vjs.Component.prototype.contentEl_;

	/**
	 * Return the component's DOM element for embedding content.
	 *   will either be el_ or a new element defined in createEl
	 * @return {Element}
	 */
	vjs.Component.prototype.contentEl = function(){
	  return this.contentEl_ || this.el_;
	};

	/**
	 * The ID for the component.
	 * @type {String}
	 * @private
	 */
	vjs.Component.prototype.id_;

	/**
	 * Return the component's ID.
	 * @return {String}
	 */
	vjs.Component.prototype.id = function(){
	  return this.id_;
	};

	/**
	 * The name for the component. Often used to reference the component.
	 * @type {String}
	 * @private
	 */
	vjs.Component.prototype.name_;

	/**
	 * Return the component's ID.
	 * @return {String}
	 */
	vjs.Component.prototype.name = function(){
	  return this.name_;
	};

	/**
	 * Array of child components
	 * @type {Array}
	 * @private
	 */
	vjs.Component.prototype.children_;

	/**
	 * Returns array of all child components.
	 * @return {Array}
	 */
	vjs.Component.prototype.children = function(){
	  return this.children_;
	};

	/**
	 * Object of child components by ID
	 * @type {Object}
	 * @private
	 */
	vjs.Component.prototype.childIndex_;

	/**
	 * Returns a child component with the provided ID.
	 * @return {Array}
	 */
	vjs.Component.prototype.getChildById = function(id){
	  return this.childIndex_[id];
	};

	/**
	 * Object of child components by Name
	 * @type {Object}
	 * @private
	 */
	vjs.Component.prototype.childNameIndex_;

	/**
	 * Returns a child component with the provided ID.
	 * @return {Array}
	 */
	vjs.Component.prototype.getChild = function(name){
	  return this.childNameIndex_[name];
	};

	/**
	 * Adds a child component inside this component.
	 * @param {String|vjs.Component} child The class name or instance of a child to add.
	 * @param {Object=} options Optional options, including options to be passed to
	 *  children of the child.
	 * @return {vjs.Component} The child component, because it might be created in this process.
	 * @suppress {accessControls|checkRegExp|checkTypes|checkVars|const|constantProperty|deprecated|duplicate|es5Strict|fileoverviewTags|globalThis|invalidCasts|missingProperties|nonStandardJsDocs|strictModuleDepCheck|undefinedNames|undefinedVars|unknownDefines|uselessCode|visibility}
	 */
	vjs.Component.prototype.addChild = function(child, options){
	  var component, componentClass, componentName, componentId;

	  // If string, create new component with options
	  if (typeof child === 'string') {

	    componentName = child;

	    // Make sure options is at least an empty object to protect against errors
	    options = options || {};

	    // Assume name of set is a lowercased name of the UI Class (PlayButton, etc.)
	    componentClass = options['componentClass'] || vjs.capitalize(componentName);

	    // Set name through options
	    options['name'] = componentName;

	    // Create a new object & element for this controls set
	    // If there's no .player_, this is a player
	    // Closure Compiler throws an 'incomplete alias' warning if we use the vjs variable directly.
	    // Every class should be exported, so this should never be a problem here.
	    component = new window['videojs'][componentClass](this.player_ || this, options);

	  // child is a component instance
	  } else {
	    component = child;
	  }

	  this.children_.push(component);

	  if (typeof component.id === 'function') {
	    this.childIndex_[component.id()] = component;
	  }

	  // If a name wasn't used to create the component, check if we can use the
	  // name function of the component
	  componentName = componentName || (component.name && component.name());

	  if (componentName) {
	    this.childNameIndex_[componentName] = component;
	  }

	  // Add the UI object's element to the container div (box)
	  // Having an element is not required
	  if (typeof component['el'] === 'function' && component['el']()) {
	    this.contentEl().appendChild(component['el']());
	  }

	  // Return so it can stored on parent object if desired.
	  return component;
	};

	vjs.Component.prototype.removeChild = function(component){
	  if (typeof component === 'string') {
	    component = this.getChild(component);
	  }

	  if (!component || !this.children_) return;

	  var childFound = false;
	  for (var i = this.children_.length - 1; i >= 0; i--) {
	    if (this.children_[i] === component) {
	      childFound = true;
	      this.children_.splice(i,1);
	      break;
	    }
	  }

	  if (!childFound) return;

	  this.childIndex_[component.id] = null;
	  this.childNameIndex_[component.name] = null;

	  var compEl = component.el();
	  if (compEl && compEl.parentNode === this.contentEl()) {
	    this.contentEl().removeChild(component.el());
	  }
	};

	/**
	 * Initialize default child components from options
	 */
	vjs.Component.prototype.initChildren = function(){
	  var options = this.options_;

	  if (options && options['children']) {
	    var self = this;

	    // Loop through components and add them to the player
	    vjs.obj.each(options['children'], function(name, opts){
	      // Allow for disabling default components
	      // e.g. vjs.options['children']['posterImage'] = false
	      if (opts === false) return;

	      // Allow waiting to add components until a specific event is called
	      var tempAdd = function(){
	        // Set property name on player. Could cause conflicts with other prop names, but it's worth making refs easy.
	        self[name] = self.addChild(name, opts);
	      };

	      if (opts['loadEvent']) {
	        // this.one(opts.loadEvent, tempAdd)
	      } else {
	        tempAdd();
	      }
	    });
	  }
	};

	vjs.Component.prototype.buildCSSClass = function(){
	    // Child classes can include a function that does:
	    // return 'CLASS NAME' + this._super();
	    return '';
	};

	/* Events
	============================================================================= */

	/**
	 * Add an event listener to this component's element. Context will be the component.
	 * @param  {String}   type Event type e.g. 'click'
	 * @param  {Function} fn   Event listener
	 * @return {vjs.Component}
	 */
	vjs.Component.prototype.on = function(type, fn){
	  vjs.on(this.el_, type, vjs.bind(this, fn));
	  return this;
	};

	/**
	 * Remove an event listener from the component's element
	 * @param  {String=}   type Optional event type. Without type it will remove all listeners.
	 * @param  {Function=} fn   Optional event listener. Without fn it will remove all listeners for a type.
	 * @return {vjs.Component}
	 */
	vjs.Component.prototype.off = function(type, fn){
	  vjs.off(this.el_, type, fn);
	  return this;
	};

	/**
	 * Add an event listener to be triggered only once and then removed
	 * @param  {String}   type Event type
	 * @param  {Function} fn   Event listener
	 * @return {vjs.Component}
	 */
	vjs.Component.prototype.one = function(type, fn) {
	  vjs.one(this.el_, type, vjs.bind(this, fn));
	  return this;
	};

	/**
	 * Trigger an event on an element
	 * @param  {String} type  Event type to trigger
	 * @param  {Event|Object} event Event object to be passed to the listener
	 * @return {vjs.Component}
	 */
	vjs.Component.prototype.trigger = function(type, event){
	  vjs.trigger(this.el_, type, event);
	  return this;
	};

	/* Ready
	================================================================================ */
	/**
	 * Is the component loaded.
	 * @type {Boolean}
	 * @private
	 */
	vjs.Component.prototype.isReady_;

	/**
	 * Trigger ready as soon as initialization is finished.
	 *   Allows for delaying ready. Override on a sub class prototype.
	 *   If you set this.isReadyOnInitFinish_ it will affect all components.
	 *   Specially used when waiting for the Flash player to asynchrnously load.
	 *   @type {Boolean}
	 *   @private
	 */
	vjs.Component.prototype.isReadyOnInitFinish_ = true;

	/**
	 * List of ready listeners
	 * @type {Array}
	 * @private
	 */
	vjs.Component.prototype.readyQueue_;

	/**
	 * Bind a listener to the component's ready state.
	 *   Different from event listeners in that if the ready event has already happend
	 *   it will trigger the function immediately.
	 * @param  {Function} fn Ready listener
	 * @return {vjs.Component}
	 */
	vjs.Component.prototype.ready = function(fn){
	  if (fn) {
	    if (this.isReady_) {
	      fn.call(this);
	    } else {
	      if (this.readyQueue_ === undefined) {
	        this.readyQueue_ = [];
	      }
	      this.readyQueue_.push(fn);
	    }
	  }
	  return this;
	};

	/**
	 * Trigger the ready listeners
	 * @return {vjs.Component}
	 */
	vjs.Component.prototype.triggerReady = function(){
	  this.isReady_ = true;

	  var readyQueue = this.readyQueue_;

	  if (readyQueue && readyQueue.length > 0) {
	    var stack = new Error().stack;
	    for (var i = 0, j = readyQueue.length; i < j; i++) {
	      readyQueue[i].call(this);
	    }

	    // Reset Ready Queue
	    this.readyQueue_ = [];

	    // Allow for using event listeners also, in case you want to do something everytime a source is ready.
	    this.trigger('ready');
	  }
	};

	/* Display
	============================================================================= */

	/**
	 * Add a CSS class name to the component's element
	 * @param {String} classToAdd Classname to add
	 * @return {vjs.Component}
	 */
	vjs.Component.prototype.addClass = function(classToAdd){
	  vjs.addClass(this.el_, classToAdd);
	  return this;
	};

	/**
	 * Remove a CSS class name from the component's element
	 * @param {String} classToRemove Classname to remove
	 * @return {vjs.Component}
	 */
	vjs.Component.prototype.removeClass = function(classToRemove){
	  vjs.removeClass(this.el_, classToRemove);
	  return this;
	};

	/**
	 * Show the component element if hidden
	 * @return {vjs.Component}
	 */
	vjs.Component.prototype.show = function(){
	  this.el_.style.display = 'block';
	  return this;
	};

	/**
	 * Hide the component element if hidden
	 * @return {vjs.Component}
	 */
	vjs.Component.prototype.hide = function(){
	  this.el_.style.display = 'none';
	  return this;
	};

	/**
	 * Lock an item in its visible state. To be used with fadeIn/fadeOut.
	 * @return {vjs.Component}
	 */
	vjs.Component.prototype.lockShowing = function(){
	  this.addClass('vjs-lock-showing');
	  return this;
	};

	/**
	 * Unlock an item to be hidden. To be used with fadeIn/fadeOut.
	 * @return {vjs.Component}
	 */
	vjs.Component.prototype.unlockShowing = function(){
	  this.removeClass('vjs-lock-showing');
	  return this;
	};

	/**
	 * Disable component by making it unshowable
	 */
	vjs.Component.prototype.disable = function(){
	  this.hide();
	  this.show = function(){};
	};

	/**
	 * If a value is provided it will change the width of the player to that value
	 * otherwise the width is returned
	 * http://dev.w3.org/html5/spec/dimension-attributes.html#attr-dim-height
	 * Video tag width/height only work in pixels. No percents.
	 * But allowing limited percents use. e.g. width() will return number+%, not computed width
	 * @param  {Number|String=} num   Optional width number
	 * @param  {[type]} skipListeners Skip the 'resize' event trigger
	 * @return {vjs.Component|Number|String} Returns 'this' if dimension was set.
	 *   Otherwise it returns the dimension.
	 */
	vjs.Component.prototype.width = function(num, skipListeners){
	  return this.dimension('width', num, skipListeners);
	};

	/**
	 * Get or set the height of the player
	 * @param  {Number|String=} num     Optional new player height
	 * @param  {Boolean=} skipListeners Optional skip resize event trigger
	 * @return {vjs.Component|Number|String} The player, or the dimension
	 */
	vjs.Component.prototype.height = function(num, skipListeners){
	  return this.dimension('height', num, skipListeners);
	};

	/**
	 * Set both width and height at the same time.
	 * @param  {Number|String} width
	 * @param  {Number|String} height
	 * @return {vjs.Component}   The player.
	 */
	vjs.Component.prototype.dimensions = function(width, height){
	  // Skip resize listeners on width for optimization
	  return this.width(width, true).height(height);
	};

	/**
	 * Get or set width or height.
	 * All for an integer, integer + 'px' or integer + '%';
	 * Known issue: hidden elements. Hidden elements officially have a width of 0.
	 * So we're defaulting to the style.width value and falling back to computedStyle
	 * which has the hidden element issue.
	 * Info, but probably not an efficient fix:
	 * http://www.foliotek.com/devblog/getting-the-width-of-a-hidden-element-with-jquery-using-width/
	 * @param  {String=} widthOrHeight 'width' or 'height'
	 * @param  {Number|String=} num           New dimension
	 * @param  {Boolean=} skipListeners Skip resize event trigger
	 * @return {vjs.Component|Number|String} Return the player if setting a dimension.
	 *                                         Otherwise it returns the dimension.
	 */
	vjs.Component.prototype.dimension = function(widthOrHeight, num, skipListeners){
	  if (num !== undefined) {

	    // Check if using css width/height (% or px) and adjust
	    if ((''+num).indexOf('%') !== -1 || (''+num).indexOf('px') !== -1) {
	      this.el_.style[widthOrHeight] = num;
	    } else if (num === 'auto') {
	      this.el_.style[widthOrHeight] = '';
	    } else {
	      this.el_.style[widthOrHeight] = num+'px';
	    }

	    // skipListeners allows us to avoid triggering the resize event when setting both width and height
	    if (!skipListeners) { this.trigger('resize'); }

	    // Return component
	    return this;
	  }

	  // Not setting a value, so getting it
	  // Make sure element exists
	  if (!this.el_) return 0;

	  // Get dimension value from style
	  var val = this.el_.style[widthOrHeight];
	  var pxIndex = val.indexOf('px');
	  if (pxIndex !== -1) {
	    // Return the pixel value with no 'px'
	    return parseInt(val.slice(0,pxIndex), 10);

	  // No px so using % or no style was set, so falling back to offsetWidth/height
	  // If component has display:none, offset will return 0
	  // TODO: handle display:none and no dimension style using px
	  } else {

	    return parseInt(this.el_['offset'+vjs.capitalize(widthOrHeight)], 10);

	    // ComputedStyle version.
	    // Only difference is if the element is hidden it will return
	    // the percent value (e.g. '100%'')
	    // instead of zero like offsetWidth returns.
	    // var val = vjs.getComputedStyleValue(this.el_, widthOrHeight);
	    // var pxIndex = val.indexOf('px');

	    // if (pxIndex !== -1) {
	    //   return val.slice(0, pxIndex);
	    // } else {
	    //   return val;
	    // }
	  }
	};

	/**
	 * Emit 'tap' events when touch events are supported. We're requireing them to
	 * be enabled because otherwise every component would have this extra overhead
	 * unnecessarily, on mobile devices where extra overhead is especially bad.
	 *
	 * This is being implemented so we can support taps on the video element
	 * toggling the controls.
	 */
	vjs.Component.prototype.emitTapEvents = function(){
	  var touchStart, touchTime, couldBeTap, noTap;

	  // Track the start time so we can determine how long the touch lasted
	  touchStart = 0;

	  this.on('touchstart', function(event) {
	    // Record start time so we can detect a tap vs. "touch and hold"
	    touchStart = new Date().getTime();
	    // Reset couldBeTap tracking
	    couldBeTap = true;
	  });

	  noTap = function(){
	    couldBeTap = false;
	  };
	  // TODO: Listen to the original target. http://youtu.be/DujfpXOKUp8?t=13m8s
	  this.on('touchmove', noTap);
	  this.on('touchleave', noTap);
	  this.on('touchcancel', noTap);

	  // When the touch ends, measure how long it took and trigger the appropriate
	  // event
	  this.on('touchend', function() {
	    // Proceed only if the touchmove/leave/cancel event didn't happen
	    if (couldBeTap === true) {
	      // Measure how long the touch lasted
	      touchTime = new Date().getTime() - touchStart;
	      // The touch needs to be quick in order to consider it a tap
	      if (touchTime < 250) {
	        this.trigger('tap');
	        // It may be good to copy the touchend event object and change the
	        // type to tap, if the other event properties aren't exact after
	        // vjs.fixEvent runs (e.g. event.target)
	      }
	    }
	  });
	};
	/* Button - Base class for all buttons
	================================================================================ */
	/**
	 * Base class for all buttons
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.Button = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Component.call(this, player, options);

	    var touchstart = false;
	    this.on('touchstart', function(event) {
	      // Stop click and other mouse events from triggering also
	      event.preventDefault();
	      touchstart = true;
	    });
	    this.on('touchmove', function() {
	      touchstart = false;
	    });
	    var self = this;
	    this.on('touchend', function(event) {
	      if (touchstart) {
	        self.onClick(event);
	      }
	      event.preventDefault();
	    });

	    this.on('click', this.onClick);
	    this.on('focus', this.onFocus);
	    this.on('blur', this.onBlur);
	  }
	});

	vjs.Button.prototype.createEl = function(type, props){
	  // Add standard Aria and Tabindex info
	  props = vjs.obj.merge({
	    className: this.buildCSSClass(),
	    innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">' + (this.buttonText || 'Need Text') + '</span></div>',
	    role: 'button',
	    'aria-live': 'polite', // let the screen reader user know that the text of the button may change
	    tabIndex: 0
	  }, props);

	  return vjs.Component.prototype.createEl.call(this, type, props);
	};

	vjs.Button.prototype.buildCSSClass = function(){
	  // TODO: Change vjs-control to vjs-button?
	  return 'vjs-control ' + vjs.Component.prototype.buildCSSClass.call(this);
	};

	  // Click - Override with specific functionality for button
	vjs.Button.prototype.onClick = function(){};

	  // Focus - Add keyboard functionality to element
	vjs.Button.prototype.onFocus = function(){
	  vjs.on(document, 'keyup', vjs.bind(this, this.onKeyPress));
	};

	  // KeyPress (document level) - Trigger click when keys are pressed
	vjs.Button.prototype.onKeyPress = function(event){
	  // Check for space bar (32) or enter (13) keys
	  if (event.which == 32 || event.which == 13) {
	    event.preventDefault();
	    this.onClick();
	  }
	};

	// Blur - Remove keyboard triggers
	vjs.Button.prototype.onBlur = function(){
	  vjs.off(document, 'keyup', vjs.bind(this, this.onKeyPress));
	};
	/* Slider
	================================================================================ */
	/**
	 * Parent for seek bar and volume slider
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.Slider = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Component.call(this, player, options);

	    // Set property names to bar and handle to match with the child Slider class is looking for
	    this.bar = this.getChild(this.options_['barName']);
	    this.handle = this.getChild(this.options_['handleName']);

	    player.on(this.playerEvent, vjs.bind(this, this.update));

	    this.on('mousedown', this.onMouseDown);
	    this.on('touchstart', this.onMouseDown);
	    this.on('focus', this.onFocus);
	    this.on('blur', this.onBlur);
	    this.on('click', this.onClick);

	    this.player_.on('controlsvisible', vjs.bind(this, this.update));

	    // This is actually to fix the volume handle position. http://twitter.com/#!/gerritvanaaken/status/159046254519787520
	    // this.player_.one('timeupdate', vjs.bind(this, this.update));

	    player.ready(vjs.bind(this, this.update));

	    this.boundEvents = {};
	  }
	});

	vjs.Slider.prototype.createEl = function(type, props) {
	  props = props || {};
	  // Add the slider element class to all sub classes
	  props.className = props.className + ' vjs-slider';
	  props = vjs.obj.merge({
	    role: 'slider',
	    'aria-valuenow': 0,
	    'aria-valuemin': 0,
	    'aria-valuemax': 100,
	    tabIndex: 0
	  }, props);

	  return vjs.Component.prototype.createEl.call(this, type, props);
	};

	vjs.Slider.prototype.onMouseDown = function(event){
	  event.preventDefault();
	  vjs.blockTextSelection();

	  this.boundEvents.move = vjs.bind(this, this.onMouseMove);
	  this.boundEvents.end = vjs.bind(this, this.onMouseUp);

	  vjs.on(document, 'mousemove', this.boundEvents.move);
	  vjs.on(document, 'mouseup', this.boundEvents.end);
	  vjs.on(document, 'touchmove', this.boundEvents.move);
	  vjs.on(document, 'touchend', this.boundEvents.end);

	  this.onMouseMove(event);
	};

	vjs.Slider.prototype.onMouseUp = function() {
	  vjs.unblockTextSelection();
	  vjs.off(document, 'mousemove', this.boundEvents.move, false);
	  vjs.off(document, 'mouseup', this.boundEvents.end, false);
	  vjs.off(document, 'touchmove', this.boundEvents.move, false);
	  vjs.off(document, 'touchend', this.boundEvents.end, false);

	  this.update();
	};

	vjs.Slider.prototype.update = function(){
	  // In VolumeBar init we have a setTimeout for update that pops and update to the end of the
	  // execution stack. The player is destroyed before then update will cause an error
	  if (!this.el_) return;

	  // If scrubbing, we could use a cached value to make the handle keep up with the user's mouse.
	  // On HTML5 browsers scrubbing is really smooth, but some flash players are slow, so we might want to utilize this later.
	  // var progress =  (this.player_.scrubbing) ? this.player_.getCache().currentTime / this.player_.duration() : this.player_.currentTime() / this.player_.duration();

	  var barProgress,
	      progress = this.getPercent(),
	      handle = this.handle,
	      bar = this.bar;

	  // Protect against no duration and other division issues
	  if (isNaN(progress)) { progress = 0; }

	  barProgress = progress;

	  // If there is a handle, we need to account for the handle in our calculation for progress bar
	  // so that it doesn't fall short of or extend past the handle.
	  if (handle) {

	    var box = this.el_,
	        boxWidth = box.offsetWidth,

	        handleWidth = handle.el().offsetWidth,

	        // The width of the handle in percent of the containing box
	        // In IE, widths may not be ready yet causing NaN
	        handlePercent = (handleWidth) ? handleWidth / boxWidth : 0,

	        // Get the adjusted size of the box, considering that the handle's center never touches the left or right side.
	        // There is a margin of half the handle's width on both sides.
	        boxAdjustedPercent = 1 - handlePercent,

	        // Adjust the progress that we'll use to set widths to the new adjusted box width
	        adjustedProgress = progress * boxAdjustedPercent;

	    // The bar does reach the left side, so we need to account for this in the bar's width
	    barProgress = adjustedProgress + (handlePercent / 2);

	    // Move the handle from the left based on the adjected progress
	    handle.el().style.left = vjs.round(adjustedProgress * 100, 2) + '%';
	  }

	  // Set the new bar width
	  bar.el().style.width = vjs.round(barProgress * 100, 2) + '%';
	};

	vjs.Slider.prototype.calculateDistance = function(event){
	  var el, box, boxX, boxY, boxW, boxH, handle, pageX, pageY;

	  el = this.el_;
	  box = vjs.findPosition(el);
	  boxW = boxH = el.offsetWidth;
	  handle = this.handle;

	  if (this.options_.vertical) {
	    boxY = box.top;

	    if (event.changedTouches) {
	      pageY = event.changedTouches[0].pageY;
	    } else {
	      pageY = event.pageY;
	    }

	    if (handle) {
	      var handleH = handle.el().offsetHeight;
	      // Adjusted X and Width, so handle doesn't go outside the bar
	      boxY = boxY + (handleH / 2);
	      boxH = boxH - handleH;
	    }

	    // Percent that the click is through the adjusted area
	    return Math.max(0, Math.min(1, ((boxY - pageY) + boxH) / boxH));

	  } else {
	    boxX = box.left;

	    if (event.changedTouches) {
	      pageX = event.changedTouches[0].pageX;
	    } else {
	      pageX = event.pageX;
	    }

	    if (handle) {
	      var handleW = handle.el().offsetWidth;

	      // Adjusted X and Width, so handle doesn't go outside the bar
	      boxX = boxX + (handleW / 2);
	      boxW = boxW - handleW;
	    }

	    // Percent that the click is through the adjusted area
	    return Math.max(0, Math.min(1, (pageX - boxX) / boxW));
	  }
	};

	vjs.Slider.prototype.onFocus = function(){
	  vjs.on(document, 'keyup', vjs.bind(this, this.onKeyPress));
	};

	vjs.Slider.prototype.onKeyPress = function(event){
	  if (event.which == 37) { // Left Arrow
	    event.preventDefault();
	    this.stepBack();
	  } else if (event.which == 39) { // Right Arrow
	    event.preventDefault();
	    this.stepForward();
	  }
	};

	vjs.Slider.prototype.onBlur = function(){
	  vjs.off(document, 'keyup', vjs.bind(this, this.onKeyPress));
	};

	/**
	 * Listener for click events on slider, used to prevent clicks
	 *   from bubbling up to parent elements like button menus.
	 * @param  {Object} event Event object
	 */
	vjs.Slider.prototype.onClick = function(event){
	  event.stopImmediatePropagation();
	  event.preventDefault();
	};

	/**
	 * SeekBar Behavior includes play progress bar, and seek handle
	 * Needed so it can determine seek position based on handle position/size
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.SliderHandle = vjs.Component.extend();

	/**
	 * Default value of the slider
	 * @type {Number}
	 */
	vjs.SliderHandle.prototype.defaultValue = 0;

	/** @inheritDoc */
	vjs.SliderHandle.prototype.createEl = function(type, props) {
	  props = props || {};
	  // Add the slider element class to all sub classes
	  props.className = props.className + ' vjs-slider-handle';
	  props = vjs.obj.merge({
	    innerHTML: '<span class="vjs-control-text">'+this.defaultValue+'</span>'
	  }, props);

	  return vjs.Component.prototype.createEl.call(this, 'div', props);
	};
	/* Menu
	================================================================================ */
	/**
	 * The base for text track and settings menu buttons.
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.Menu = vjs.Component.extend();

	/**
	 * Add a menu item to the menu
	 * @param {Object|String} component Component or component type to add
	 */
	vjs.Menu.prototype.addItem = function(component){
	  this.addChild(component);
	  component.on('click', vjs.bind(this, function(){
	    this.unlockShowing();
	  }));
	};

	/** @inheritDoc */
	vjs.Menu.prototype.createEl = function(){
	  var contentElType = this.options().contentElType || 'ul';
	  this.contentEl_ = vjs.createEl(contentElType, {
	    className: 'vjs-menu-content'
	  });
	  var el = vjs.Component.prototype.createEl.call(this, 'div', {
	    append: this.contentEl_,
	    className: 'vjs-menu'
	  });
	  el.appendChild(this.contentEl_);

	  // Prevent clicks from bubbling up. Needed for Menu Buttons,
	  // where a click on the parent is significant
	  vjs.on(el, 'click', function(event){
	    event.preventDefault();
	    event.stopImmediatePropagation();
	  });

	  return el;
	};

	/**
	 * Menu item
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.MenuItem = vjs.Button.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Button.call(this, player, options);
	    this.selected(options['selected']);
	  }
	});

	/** @inheritDoc */
	vjs.MenuItem.prototype.createEl = function(type, props){
	  return vjs.Button.prototype.createEl.call(this, 'li', vjs.obj.merge({
	    className: 'vjs-menu-item',
	    innerHTML: this.options_['label']
	  }, props));
	};

	/** @inheritDoc */
	vjs.MenuItem.prototype.onClick = function(){
	  this.selected(true);
	};

	/**
	 * Set this menu item as selected or not
	 * @param  {Boolean} selected
	 */
	vjs.MenuItem.prototype.selected = function(selected){
	  if (selected) {
	    this.addClass('vjs-selected');
	    this.el_.setAttribute('aria-selected',true);
	  } else {
	    this.removeClass('vjs-selected');
	    this.el_.setAttribute('aria-selected',false);
	  }
	};


	/**
	 * A button class with a popup menu
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.MenuButton = vjs.Button.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Button.call(this, player, options);

	    this.menu = this.createMenu();

	    // Add list to element
	    this.addChild(this.menu);

	    // Automatically hide empty menu buttons
	    if (this.items && this.items.length === 0) {
	      this.hide();
	    }

	    this.on('keyup', this.onKeyPress);
	    this.el_.setAttribute('aria-haspopup', true);
	    this.el_.setAttribute('role', 'button');
	  }
	});

	/**
	 * Track the state of the menu button
	 * @type {Boolean}
	 */
	vjs.MenuButton.prototype.buttonPressed_ = false;

	vjs.MenuButton.prototype.createMenu = function(){
	  var menu = new vjs.Menu(this.player_);

	  // Add a title list item to the top
	  if (this.options().title) {
	    menu.el().appendChild(vjs.createEl('li', {
	      className: 'vjs-menu-title',
	      innerHTML: vjs.capitalize(this.kind_),
	      tabindex: -1
	    }));
	  }

	  this.items = this['createItems']();

	  if (this.items) {
	    // Add menu items to the menu
	    for (var i = 0; i < this.items.length; i++) {
	      menu.addItem(this.items[i]);
	    }
	  }

	  return menu;
	};

	/**
	 * Create the list of menu items. Specific to each subclass.
	 */
	vjs.MenuButton.prototype.createItems = function(){};

	/** @inheritDoc */
	vjs.MenuButton.prototype.buildCSSClass = function(){
	  return this.className + ' vjs-menu-button ' + vjs.Button.prototype.buildCSSClass.call(this);
	};

	// Focus - Add keyboard functionality to element
	// This function is not needed anymore. Instead, the keyboard functionality is handled by
	// treating the button as triggering a submenu. When the button is pressed, the submenu
	// appears. Pressing the button again makes the submenu disappear.
	vjs.MenuButton.prototype.onFocus = function(){};
	// Can't turn off list display that we turned on with focus, because list would go away.
	vjs.MenuButton.prototype.onBlur = function(){};

	vjs.MenuButton.prototype.onClick = function(){
	  // When you click the button it adds focus, which will show the menu indefinitely.
	  // So we'll remove focus when the mouse leaves the button.
	  // Focus is needed for tab navigation.
	  this.one('mouseout', vjs.bind(this, function(){
	    this.menu.unlockShowing();
	    this.el_.blur();
	  }));
	  if (this.buttonPressed_){
	    this.unpressButton();
	  } else {
	    this.pressButton();
	  }
	};

	vjs.MenuButton.prototype.onKeyPress = function(event){
	  event.preventDefault();

	  // Check for space bar (32) or enter (13) keys
	  if (event.which == 32 || event.which == 13) {
	    if (this.buttonPressed_){
	      this.unpressButton();
	    } else {
	      this.pressButton();
	    }
	  // Check for escape (27) key
	  } else if (event.which == 27){
	    if (this.buttonPressed_){
	      this.unpressButton();
	    }
	  }
	};

	vjs.MenuButton.prototype.pressButton = function(){
	  this.buttonPressed_ = true;
	  this.menu.lockShowing();
	  this.el_.setAttribute('aria-pressed', true);
	  if (this.items && this.items.length > 0) {
	    this.items[0].el().focus(); // set the focus to the title of the submenu
	  }
	};

	vjs.MenuButton.prototype.unpressButton = function(){
	  this.buttonPressed_ = false;
	  this.menu.unlockShowing();
	  this.el_.setAttribute('aria-pressed', false);
	};

	/**
	 * Main player class. A player instance is returned by _V_(id);
	 * @param {Element} tag        The original video tag used for configuring options
	 * @param {Object=} options    Player options
	 * @param {Function=} ready    Ready callback function
	 * @constructor
	 */
	vjs.Player = vjs.Component.extend({
	  /** @constructor */
	  init: function(tag, options, ready){
	    this.tag = tag; // Store the original tag used to set options

	    // Set Options
	    // The options argument overrides options set in the video tag
	    // which overrides globally set options.
	    // This latter part coincides with the load order
	    // (tag must exist before Player)
	    options = vjs.obj.merge(this.getTagSettings(tag), options);

	    // Cache for video property values.
	    this.cache_ = {};

	    // Set poster
	    this.poster_ = options['poster'];
	    // Set controls
	    this.controls_ = options['controls'];
	    // Original tag settings stored in options
	    // now remove immediately so native controls don't flash.
	    // May be turned back on by HTML5 tech if nativeControlsForTouch is true
	    tag.controls = false;

	    // Run base component initializing with new options.
	    // Builds the element through createEl()
	    // Inits and embeds any child components in opts
	    vjs.Component.call(this, this, options, ready);

	    // Update controls className. Can't do this when the controls are initially
	    // set because the element doesn't exist yet.
	    if (this.controls()) {
	      this.addClass('vjs-controls-enabled');
	    } else {
	      this.addClass('vjs-controls-disabled');
	    }

	    // TODO: Make this smarter. Toggle user state between touching/mousing
	    // using events, since devices can have both touch and mouse events.
	    // if (vjs.TOUCH_ENABLED) {
	    //   this.addClass('vjs-touch-enabled');
	    // }

	    // Firstplay event implimentation. Not sold on the event yet.
	    // Could probably just check currentTime==0?
	    this.one('play', function(e){
	      var fpEvent = { type: 'firstplay', target: this.el_ };
	      // Using vjs.trigger so we can check if default was prevented
	      var keepGoing = vjs.trigger(this.el_, fpEvent);

	      if (!keepGoing) {
	        e.preventDefault();
	        e.stopPropagation();
	        e.stopImmediatePropagation();
	      }
	    });

	    this.on('ended', this.onEnded);
	    this.on('play', this.onPlay);
	    this.on('firstplay', this.onFirstPlay);
	    this.on('pause', this.onPause);
	    this.on('progress', this.onProgress);
	    this.on('durationchange', this.onDurationChange);
	    this.on('error', this.onError);
	    this.on('fullscreenchange', this.onFullscreenChange);

	    // Make player easily findable by ID
	    vjs.players[this.id_] = this;

	    if (options['plugins']) {
	      vjs.obj.each(options['plugins'], function(key, val){
	        this[key](val);
	      }, this);
	    }

	    this.listenForUserActivity();
	  }
	});

	/**
	 * Player instance options, surfaced using vjs.options
	 * vjs.options = vjs.Player.prototype.options_
	 * Make changes in vjs.options, not here.
	 * All options should use string keys so they avoid
	 * renaming by closure compiler
	 * @type {Object}
	 * @private
	 */
	vjs.Player.prototype.options_ = vjs.options;

	vjs.Player.prototype.dispose = function(){
	  this.trigger('dispose');
	  // prevent dispose from being called twice
	  this.off('dispose');

	  // Kill reference to this player
	  vjs.players[this.id_] = null;
	  if (this.tag && this.tag['player']) { this.tag['player'] = null; }
	  if (this.el_ && this.el_['player']) { this.el_['player'] = null; }

	  // Ensure that tracking progress and time progress will stop and plater deleted
	  this.stopTrackingProgress();
	  this.stopTrackingCurrentTime();

	  if (this.tech) { this.tech.dispose(); }

	  // Component dispose
	  vjs.Component.prototype.dispose.call(this);
	};

	vjs.Player.prototype.getTagSettings = function(tag){
	  var options = {
	    'sources': [],
	    'tracks': []
	  };

	  vjs.obj.merge(options, vjs.getAttributeValues(tag));

	  // Get tag children settings
	  if (tag.hasChildNodes()) {
	    var children, child, childName, i, j;

	    children = tag.childNodes;

	    for (i=0,j=children.length; i<j; i++) {
	      child = children[i];
	      // Change case needed: http://ejohn.org/blog/nodename-case-sensitivity/
	      childName = child.nodeName.toLowerCase();
	      if (childName === 'source') {
	        options['sources'].push(vjs.getAttributeValues(child));
	      } else if (childName === 'track') {
	        options['tracks'].push(vjs.getAttributeValues(child));
	      }
	    }
	  }

	  return options;
	};

	vjs.Player.prototype.createEl = function(){
	  var el = this.el_ = vjs.Component.prototype.createEl.call(this, 'div');
	  var tag = this.tag;

	  // Remove width/height attrs from tag so CSS can make it 100% width/height
	  tag.removeAttribute('width');
	  tag.removeAttribute('height');
	  // Empty video tag sources and tracks so the built-in player doesn't use them also.
	  // This may not be fast enough to stop HTML5 browsers from reading the tags
	  // so we'll need to turn off any default tracks if we're manually doing
	  // captions and subtitles. videoElement.textTracks
	  if (tag.hasChildNodes()) {
	    var nodes, nodesLength, i, node, nodeName, removeNodes;

	    nodes = tag.childNodes;
	    nodesLength = nodes.length;
	    removeNodes = [];

	    while (nodesLength--) {
	      node = nodes[nodesLength];
	      nodeName = node.nodeName.toLowerCase();
	      if (nodeName === 'source' || nodeName === 'track') {
	        removeNodes.push(node);
	      }
	    }

	    for (i=0; i<removeNodes.length; i++) {
	      tag.removeChild(removeNodes[i]);
	    }
	  }

	  // Make sure tag ID exists
	  tag.id = tag.id || 'vjs_video_' + vjs.guid++;

	  // Give video tag ID and class to player div
	  // ID will now reference player box, not the video tag
	  el.id = tag.id;
	  el.className = tag.className;

	  // Update tag id/class for use as HTML5 playback tech
	  // Might think we should do this after embedding in container so .vjs-tech class
	  // doesn't flash 100% width/height, but class only applies with .video-js parent
	  tag.id += '_html5_api';
	  tag.className = 'vjs-tech';

	  // Make player findable on elements
	  tag['player'] = el['player'] = this;
	  // Default state of video is paused
	  this.addClass('vjs-paused');

	  // Make box use width/height of tag, or rely on default implementation
	  // Enforce with CSS since width/height attrs don't work on divs
	  this.width(this.options_['width'], true); // (true) Skip resize listener on load
	  this.height(this.options_['height'], true);

	  // Wrap video tag in div (el/box) container
	  if (tag.parentNode) {
	    tag.parentNode.insertBefore(el, tag);
	  }
	  vjs.insertFirst(tag, el); // Breaks iPhone, fixed in HTML5 setup.

	  return el;
	};

	// /* Media Technology (tech)
	// ================================================================================ */
	// Load/Create an instance of playback technlogy including element and API methods
	// And append playback element in player div.
	vjs.Player.prototype.loadTech = function(techName, source){

	  // Pause and remove current playback technology
	  if (this.tech) {
	    this.unloadTech();

	  // If the first time loading, HTML5 tag will exist but won't be initialized
	  // So we need to remove it if we're not loading HTML5
	  } else if (techName !== 'Html5' && this.tag) {
	    this.el_.removeChild(this.tag);
	    this.tag['player'] = null;
	    this.tag = null;
	  }

	  this.techName = techName;

	  // Turn off API access because we're loading a new tech that might load asynchronously
	  this.isReady_ = false;

	  var techReady = function(){
	    // removed this because it caused the progression to not go up for some reason...
	    //this.player_.triggerReady();

	    // Manually track progress in cases where the browser/flash player doesn't report it.
	    if (!this.features['progressEvents']) {
	      this.player_.manualProgressOn();
	    }

	    // Manually track timeudpates in cases where the browser/flash player doesn't report it.
	    if (!this.features['timeupdateEvents']) {
	      this.player_.manualTimeUpdatesOn();
	    }
	  };

	  // Grab tech-specific options from player options and add source and parent element to use.
	  var techOptions = vjs.obj.merge({ 'source': source, 'parentEl': this.el_ }, this.options_[techName.toLowerCase()]);

	  if (source) {
	    if (source.src == this.cache_.src && this.cache_.currentTime > 0) {
	      techOptions['startTime'] = this.cache_.currentTime;
	    }

	    this.cache_.src = source.src;
	  }

	  // Initialize tech instance
	  this.tech = new window['videojs'][techName](this, techOptions);

	  this.tech.ready(techReady);
	};

	vjs.Player.prototype.unloadTech = function(){
	  this.isReady_ = false;
	  this.tech.dispose();

	  // Turn off any manual progress or timeupdate tracking
	  if (this.manualProgress) { this.manualProgressOff(); }

	  if (this.manualTimeUpdates) { this.manualTimeUpdatesOff(); }

	  this.tech = false;
	};

	// There's many issues around changing the size of a Flash (or other plugin) object.
	// First is a plugin reload issue in Firefox that has been around for 11 years: https://bugzilla.mozilla.org/show_bug.cgi?id=90268
	// Then with the new fullscreen API, Mozilla and webkit browsers will reload the flash object after going to fullscreen.
	// To get around this, we're unloading the tech, caching source and currentTime values, and reloading the tech once the plugin is resized.
	// reloadTech: function(betweenFn){
	//   vjs.log('unloadingTech')
	//   this.unloadTech();
	//   vjs.log('unloadedTech')
	//   if (betweenFn) { betweenFn.call(); }
	//   vjs.log('LoadingTech')
	//   this.loadTech(this.techName, { src: this.cache_.src })
	//   vjs.log('loadedTech')
	// },

	/* Fallbacks for unsupported event types
	================================================================================ */
	// Manually trigger progress events based on changes to the buffered amount
	// Many flash players and older HTML5 browsers don't send progress or progress-like events
	vjs.Player.prototype.manualProgressOn = function(){
	  this.manualProgress = true;

	  // Trigger progress watching when a source begins loading
	  this.trackProgress();

	  // Watch for a native progress event call on the tech element
	  // In HTML5, some older versions don't support the progress event
	  // So we're assuming they don't, and turning off manual progress if they do.
	  // As opposed to doing user agent detection
	  this.tech.one('progress', function(){

	    // Update known progress support for this playback technology
	    this.features['progressEvents'] = true;

	    // Turn off manual progress tracking
	    this.player_.manualProgressOff();
	  });
	};

	vjs.Player.prototype.manualProgressOff = function(){
	  this.manualProgress = false;
	  this.stopTrackingProgress();
	};

	vjs.Player.prototype.trackProgress = function(){

	  this.progressInterval = setInterval(vjs.bind(this, function(){
	    // Don't trigger unless buffered amount is greater than last time
	    // log(this.cache_.bufferEnd, this.buffered().end(0), this.duration())
	    /* TODO: update for multiple buffered regions */
	    if (this.cache_.bufferEnd < this.buffered().end(0)) {
	      this.trigger('progress');
	    } else if (this.bufferedPercent() == 1) {
	      this.stopTrackingProgress();
	      this.trigger('progress'); // Last update
	    }
	  }), 500);
	};
	vjs.Player.prototype.stopTrackingProgress = function(){ clearInterval(this.progressInterval); };

	/* Time Tracking -------------------------------------------------------------- */
	vjs.Player.prototype.manualTimeUpdatesOn = function(){
	  this.manualTimeUpdates = true;

	  this.on('play', this.trackCurrentTime);
	  this.on('pause', this.stopTrackingCurrentTime);
	  // timeupdate is also called by .currentTime whenever current time is set

	  // Watch for native timeupdate event
	  this.tech.one('timeupdate', function(){
	    // Update known progress support for this playback technology
	    this.features['timeupdateEvents'] = true;
	    // Turn off manual progress tracking
	    this.player_.manualTimeUpdatesOff();
	  });
	};

	vjs.Player.prototype.manualTimeUpdatesOff = function(){
	  this.manualTimeUpdates = false;
	  this.stopTrackingCurrentTime();
	  this.off('play', this.trackCurrentTime);
	  this.off('pause', this.stopTrackingCurrentTime);
	};

	vjs.Player.prototype.trackCurrentTime = function(){
	  if (this.currentTimeInterval) { this.stopTrackingCurrentTime(); }
	  this.currentTimeInterval = setInterval(vjs.bind(this, function(){
	    this.trigger('timeupdate');
	  }), 250); // 42 = 24 fps // 250 is what Webkit uses // FF uses 15
	};

	// Turn off play progress tracking (when paused or dragging)
	vjs.Player.prototype.stopTrackingCurrentTime = function(){ clearInterval(this.currentTimeInterval); };

	// /* Player event handlers (how the player reacts to certain events)
	// ================================================================================ */
	vjs.Player.prototype.onEnded = function(){
	  if (this.options_['loop']) {
	    this.currentTime(0);
	    this.play();
	  }
	};

	vjs.Player.prototype.onPlay = function(){
	  vjs.removeClass(this.el_, 'vjs-paused');
	  vjs.addClass(this.el_, 'vjs-playing');
	};

	vjs.Player.prototype.onFirstPlay = function(){
	    //If the first starttime attribute is specified
	    //then we will start at the given offset in seconds
	    if(this.options_['starttime']){
	      this.currentTime(this.options_['starttime']);
	    }

	    this.addClass('vjs-has-started');
	};

	vjs.Player.prototype.onPause = function(){
	  vjs.removeClass(this.el_, 'vjs-playing');
	  vjs.addClass(this.el_, 'vjs-paused');
	};

	vjs.Player.prototype.onProgress = function(){
	  // Add custom event for when source is finished downloading.
	  if (this.bufferedPercent() == 1) {
	    this.trigger('loadedalldata');
	  }
	};

	// Update duration with durationchange event
	// Allows for cacheing value instead of asking player each time.
	vjs.Player.prototype.onDurationChange = function(){
	  this.duration(this.techGet('duration'));
	};

	vjs.Player.prototype.onError = function(e) {
	  vjs.log('Video Error', e);
	};

	vjs.Player.prototype.onFullscreenChange = function() {
	  if (this.isFullScreen) {
	    this.addClass('vjs-fullscreen');
	  } else {
	    this.removeClass('vjs-fullscreen');
	  }
	};

	// /* Player API
	// ================================================================================ */

	/**
	 * Object for cached values.
	 * @private
	 */
	vjs.Player.prototype.cache_;

	vjs.Player.prototype.getCache = function(){
	  return this.cache_;
	};

	// Pass values to the playback tech
	vjs.Player.prototype.techCall = function(method, arg){
	  // If it's not ready yet, call method when it is
	  if (this.tech && !this.tech.isReady_) {
	    this.tech.ready(function(){
	      this[method](arg);
	    });

	  // Otherwise call method now
	  } else {
	    try {
	      this.tech[method](arg);
	    } catch(e) {
	      vjs.log(e);
	      throw e;
	    }
	  }
	};

	// Get calls can't wait for the tech, and sometimes don't need to.
	vjs.Player.prototype.techGet = function(method){

	  if (this.tech && this.tech.isReady_) {

	    // Flash likes to die and reload when you hide or reposition it.
	    // In these cases the object methods go away and we get errors.
	    // When that happens we'll catch the errors and inform tech that it's not ready any more.
	    try {
	      return this.tech[method]();
	    } catch(e) {
	      // When building additional tech libs, an expected method may not be defined yet
	      if (this.tech[method] === undefined) {
	        vjs.log('Video.js: ' + method + ' method not defined for '+this.techName+' playback technology.', e);
	      } else {
	        // When a method isn't available on the object it throws a TypeError
	        if (e.name == 'TypeError') {
	          vjs.log('Video.js: ' + method + ' unavailable on '+this.techName+' playback technology element.', e);
	          this.tech.isReady_ = false;
	        } else {
	          vjs.log(e);
	        }
	      }
	      throw e;
	    }
	  }

	  return;
	};

	/**
	 * Start media playback
	 * http://dev.w3.org/html5/spec/video.html#dom-media-play
	 * We're triggering the 'play' event here instead of relying on the
	 * media element to allow using event.preventDefault() to stop
	 * play from happening if desired. Usecase: preroll ads.
	 */
	vjs.Player.prototype.play = function(){
	  this.techCall('play');
	  return this;
	};

	// http://dev.w3.org/html5/spec/video.html#dom-media-pause
	vjs.Player.prototype.pause = function(){
	  this.techCall('pause');
	  return this;
	};

	// http://dev.w3.org/html5/spec/video.html#dom-media-paused
	// The initial state of paused should be true (in Safari it's actually false)
	vjs.Player.prototype.paused = function(){
	  return (this.techGet('paused') === false) ? false : true;
	};

	// http://dev.w3.org/html5/spec/video.html#dom-media-currenttime
	vjs.Player.prototype.currentTime = function(seconds){
	  if (seconds !== undefined) {

	    // Cache the last set value for smoother scrubbing.
	    this.cache_.lastSetCurrentTime = seconds;

	    this.techCall('setCurrentTime', seconds);

	    // Improve the accuracy of manual timeupdates
	    if (this.manualTimeUpdates) { this.trigger('timeupdate'); }

	    return this;
	  }

	  // Cache last currentTime and return
	  // Default to 0 seconds
	  return this.cache_.currentTime = (this.techGet('currentTime') || 0);
	};

	// http://dev.w3.org/html5/spec/video.html#dom-media-duration
	// Duration should return NaN if not available. ParseFloat will turn false-ish values to NaN.
	vjs.Player.prototype.duration = function(seconds){
	  if (seconds !== undefined) {

	    // Cache the last set value for optimiized scrubbing (esp. Flash)
	    this.cache_.duration = parseFloat(seconds);

	    return this;
	  }

	  return this.cache_.duration;
	};

	// Calculates how much time is left. Not in spec, but useful.
	vjs.Player.prototype.remainingTime = function(){
	  return this.duration() - this.currentTime();
	};

	// http://dev.w3.org/html5/spec/video.html#dom-media-buffered
	// Buffered returns a timerange object.
	// Kind of like an array of portions of the video that have been downloaded.
	// So far no browsers return more than one range (portion)
	vjs.Player.prototype.buffered = function(){
	  var buffered = this.techGet('buffered'),
	      start = 0,
	      buflast = buffered.length - 1,
	      // Default end to 0 and store in values
	      end = this.cache_.bufferEnd = this.cache_.bufferEnd || 0;

	  if (buffered && buflast >= 0 && buffered.end(buflast) !== end) {
	    end = buffered.end(buflast);
	    // Storing values allows them be overridden by setBufferedFromProgress
	    this.cache_.bufferEnd = end;
	  }

	  return vjs.createTimeRange(start, end);
	};

	// Calculates amount of buffer is full. Not in spec but useful.
	vjs.Player.prototype.bufferedPercent = function(){
	  return (this.duration()) ? this.buffered().end(0) / this.duration() : 0;
	};

	// http://dev.w3.org/html5/spec/video.html#dom-media-volume
	vjs.Player.prototype.volume = function(percentAsDecimal){
	  var vol;

	  if (percentAsDecimal !== undefined) {
	    vol = Math.max(0, Math.min(1, parseFloat(percentAsDecimal))); // Force value to between 0 and 1
	    this.cache_.volume = vol;
	    this.techCall('setVolume', vol);
	    vjs.setLocalStorage('volume', vol);
	    return this;
	  }

	  // Default to 1 when returning current volume.
	  vol = parseFloat(this.techGet('volume'));
	  return (isNaN(vol)) ? 1 : vol;
	};

	// http://dev.w3.org/html5/spec/video.html#attr-media-muted
	vjs.Player.prototype.muted = function(muted){
	  if (muted !== undefined) {
	    this.techCall('setMuted', muted);
	    return this;
	  }
	  return this.techGet('muted') || false; // Default to false
	};

	// Check if current tech can support native fullscreen (e.g. with built in controls lik iOS, so not our flash swf)
	vjs.Player.prototype.supportsFullScreen = function(){ return this.techGet('supportsFullScreen') || false; };

	// Turn on fullscreen (or window) mode
	vjs.Player.prototype.requestFullScreen = function(){
	  var requestFullScreen = vjs.support.requestFullScreen;
	  this.isFullScreen = true;

	  if (requestFullScreen) {
	    console.log("Option1");
	    // the browser supports going fullscreen at the element level so we can
	    // take the controls fullscreen as well as the video

	    // Trigger fullscreenchange event after change
	    // We have to specifically add this each time, and remove
	    // when cancelling fullscreen. Otherwise if there's multiple
	    // players on a page, they would all be reacting to the same fullscreen
	    // events
	    vjs.on(document, requestFullScreen.eventName, vjs.bind(this, function(e){
	      this.isFullScreen = document[requestFullScreen.isFullScreen];

	      // If cancelling fullscreen, remove event listener.
	      if (this.isFullScreen === false) {
	        vjs.off(document, requestFullScreen.eventName, arguments.callee);
	      }
	      var currblock = jQuery(this.el_).closest('.xblock');
	      if (currblock.hasClass('vjs-fullscreen')) {
	        currblock.removeClass('vjs-fullscreen');
	      } else {
	        currblock.addClass('vjs-fullscreen');
	      }
	      //this.trigger('fullscreenchange');
	    }));
	    var video = this.el_;
	    var toggleFullscreen = function () {
	            var self = this;
	            var enterFullscreen = function() {
	              var el = jQuery(video).closest('.xblock')[0];
	              console.log(el);
	              if (el.requestFullscreen) {
	                el.requestFullscreen();
	              } else if (el.mozRequestFullScreen) {
	                el.mozRequestFullScreen();
	              } else if (el.webkitRequestFullscreen) {
	                el.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
	                if (!document.webkitCurrentFullScreenElement) {
	                    el.webkitRequestFullscreen()
	                }
	              } else if (el.msRequestFullscreen) {
	                el.msRequestFullscreen();
	              }
	            };

	            var exitFullscreen = function() {
	                if (document.exitFullscreen) {
	                    document.exitFullscreen();
	                } else if (document.mozCancelFullScreen) {
	                    document.mozCancelFullScreen();
	                } else if (document.webkitExitFullscreen) {
	                    document.webkitExitFullscreen();
	                }
	                
	            };

	            var isFullscreen = function() {
	              var $fullscreen = $(fullscreenElement());
	              return ($fullscreen.length > 0);
	            };

	            var fullscreenElement = function() {
	              return (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement);
	            };

	            fullscreenElement() ? exitFullscreen() : enterFullscreen();
	        };
	        toggleFullscreen();
	    //jQuery(this.el_).closest('.xblock')[0][requestFullScreen.requestFn]();

	  } else if (this.tech.supportsFullScreen()) {
	    console.log("Option2");
	    // we can't take the video.js controls fullscreen but we can go fullscreen
	    // with native controls
	    this.techCall('enterFullScreen');
	  } else {
	    // fullscreen isn't supported so we'll just stretch the video element to
	    // fill the viewport
	    console.log("Option");
	    this.enterFullWindow();
	    this.trigger('fullscreenchange');
	  }

	  return this;
	};

	vjs.Player.prototype.cancelFullScreen = function(){
	  var requestFullScreen = vjs.support.requestFullScreen;
	  this.isFullScreen = false;

	  // Check for browser element fullscreen support
	  if (requestFullScreen) {
	    document[requestFullScreen.cancelFn]();
	  } else if (this.tech.supportsFullScreen()) {
	   this.techCall('exitFullScreen');
	  } else {
	   this.exitFullWindow();
	   this.trigger('fullscreenchange');
	  }

	  return this;
	};

	// When fullscreen isn't supported we can stretch the video container to as wide as the browser will let us.
	vjs.Player.prototype.enterFullWindow = function(){
	  this.isFullWindow = true;

	  // Storing original doc overflow value to return to when fullscreen is off
	  this.docOrigOverflow = document.documentElement.style.overflow;

	  // Add listener for esc key to exit fullscreen
	  vjs.on(document, 'keydown', vjs.bind(this, this.fullWindowOnEscKey));

	  // Hide any scroll bars
	  document.documentElement.style.overflow = 'hidden';

	  // Apply fullscreen styles
	  vjs.addClass(document.body, 'vjs-full-window');

	  this.trigger('enterFullWindow');
	};
	vjs.Player.prototype.fullWindowOnEscKey = function(event){
	  if (event.keyCode === 27) {
	    if (this.isFullScreen === true) {
	      this.cancelFullScreen();
	    } else {
	      this.exitFullWindow();
	    }
	  }
	};

	vjs.Player.prototype.exitFullWindow = function(){
	  this.isFullWindow = false;
	  vjs.off(document, 'keydown', this.fullWindowOnEscKey);

	  // Unhide scroll bars.
	  document.documentElement.style.overflow = this.docOrigOverflow;

	  // Remove fullscreen styles
	  vjs.removeClass(document.body, 'vjs-full-window');

	  // Resize the box, controller, and poster to original sizes
	  // this.positionAll();
	  this.trigger('exitFullWindow');
	};

	vjs.Player.prototype.selectSource = function(sources){

	  // Loop through each playback technology in the options order
	  for (var i=0,j=this.options_['techOrder'];i<j.length;i++) {
	    var techName = vjs.capitalize(j[i]),
	        tech = window['videojs'][techName];

	    // Check if the browser supports this technology
	    if (tech.isSupported()) {
	      // Loop through each source object
	      for (var a=0,b=sources;a<b.length;a++) {
	        var source = b[a];

	        // Check if source can be played with this technology
	        if (tech['canPlaySource'](source)) {
	          return { source: source, tech: techName };
	        }
	      }
	    }
	  }

	  return false;
	};

	// src is a pretty powerful function
	// If you pass it an array of source objects, it will find the best source to play and use that object.src
	//   If the new source requires a new playback technology, it will switch to that.
	// If you pass it an object, it will set the source to object.src
	// If you pass it anything else (url string) it will set the video source to that
	vjs.Player.prototype.src = function(source){
	  // Case: Array of source objects to choose from and pick the best to play
	  if (source instanceof Array) {

	    var sourceTech = this.selectSource(source),
	        techName;

	    if (sourceTech) {
	        source = sourceTech.source;
	        techName = sourceTech.tech;

	      // If this technology is already loaded, set source
	      if (techName == this.techName) {
	        this.src(source); // Passing the source object
	      // Otherwise load this technology with chosen source
	      } else {
	        this.loadTech(techName, source);
	      }
	    } else {
	      this.el_.appendChild(vjs.createEl('p', {
	        innerHTML: this.options()['notSupportedMessage']
	      }));
	    }

	  // Case: Source object { src: '', type: '' ... }
	  } else if (source instanceof Object) {

	    if (window['videojs'][this.techName]['canPlaySource'](source)) {
	      this.src(source.src);
	    } else {
	      // Send through tech loop to check for a compatible technology.
	      this.src([source]);
	    }

	  // Case: URL String (http://myvideo...)
	  } else {
	    // Cache for getting last set source
	    this.cache_.src = source;

	    if (!this.isReady_) {
	      this.ready(function(){
	        this.src(source);
	      });
	    } else {
	      this.techCall('src', source);
	      if (this.options_['preload'] == 'auto') {
	        this.load();
	      }
	      if (this.options_['autoplay']) {
	        this.play();
	      }
	    }
	  }
	  return this;
	};

	// Begin loading the src data
	// http://dev.w3.org/html5/spec/video.html#dom-media-load
	vjs.Player.prototype.load = function(){
	  this.techCall('load');
	  return this;
	};

	// http://dev.w3.org/html5/spec/video.html#dom-media-currentsrc
	vjs.Player.prototype.currentSrc = function(){
	  return this.techGet('currentSrc') || this.cache_.src || '';
	};

	// Attributes/Options
	vjs.Player.prototype.preload = function(value){
	  if (value !== undefined) {
	    this.techCall('setPreload', value);
	    this.options_['preload'] = value;
	    return this;
	  }
	  return this.techGet('preload');
	};
	vjs.Player.prototype.autoplay = function(value){
	  if (value !== undefined) {
	    this.techCall('setAutoplay', value);
	    this.options_['autoplay'] = value;
	    return this;
	  }
	  return this.techGet('autoplay', value);
	};
	vjs.Player.prototype.loop = function(value){
	  if (value !== undefined) {
	    this.techCall('setLoop', value);
	    this.options_['loop'] = value;
	    return this;
	  }
	  return this.techGet('loop');
	};

	/**
	 * The url of the poster image source.
	 * @type {String}
	 * @private
	 */
	vjs.Player.prototype.poster_;

	/**
	 * Get or set the poster image source url.
	 * @param  {String} src Poster image source URL
	 * @return {String}    Poster image source URL or null
	 */
	vjs.Player.prototype.poster = function(src){
	  if (src !== undefined) {
	    this.poster_ = src;
	  }
	  return this.poster_;
	};

	/**
	 * Whether or not the controls are showing
	 * @type {Boolean}
	 * @private
	 */
	vjs.Player.prototype.controls_;

	/**
	 * Get or set whether or not the controls are showing.
	 * @param  {Boolean} controls Set controls to showing or not
	 * @return {Boolean}    Controls are showing
	 */
	vjs.Player.prototype.controls = function(bool){
	  if (bool !== undefined) {
	    bool = !!bool; // force boolean
	    // Don't trigger a change event unless it actually changed
	    if (this.controls_ !== bool) {
	      this.controls_ = bool;
	      if (bool) {
	        this.removeClass('vjs-controls-disabled');
	        this.addClass('vjs-controls-enabled');
	        this.trigger('controlsenabled');
	      } else {
	        this.removeClass('vjs-controls-enabled');
	        this.addClass('vjs-controls-disabled');
	        this.trigger('controlsdisabled');
	      }
	    }
	    return this;
	  }
	  return this.controls_;
	};

	vjs.Player.prototype.usingNativeControls_;

	/**
	 * Toggle native controls on/off. Native controls are the controls built into
	 * devices (e.g. default iPhone controls), Flash, or other techs
	 * (e.g. Vimeo Controls)
	 *
	 * **This should only be set by the current tech, because only the tech knows
	 * if it can support native controls**
	 *
	 * @param  {Boolean} bool    True signals that native controls are on
	 * @return {vjs.Player}      Returns the player
	 */
	vjs.Player.prototype.usingNativeControls = function(bool){
	  if (bool !== undefined) {
	    bool = !!bool; // force boolean
	    // Don't trigger a change event unless it actually changed
	    if (this.usingNativeControls_ !== bool) {
	      this.usingNativeControls_ = bool;
	      if (bool) {
	        this.addClass('vjs-using-native-controls');
	        this.trigger('usingnativecontrols');
	      } else {
	        this.removeClass('vjs-using-native-controls');
	        this.trigger('usingcustomcontrols');
	      }
	    }
	    return this;
	  }
	  return this.usingNativeControls_;
	};

	vjs.Player.prototype.error = function(){ return this.techGet('error'); };
	vjs.Player.prototype.ended = function(){ return this.techGet('ended'); };
	vjs.Player.prototype.seeking = function(){ return this.techGet('seeking'); };

	// When the player is first initialized, trigger activity so components
	// like the control bar show themselves if needed
	vjs.Player.prototype.userActivity_ = true;
	vjs.Player.prototype.reportUserActivity = function(event){
	  this.userActivity_ = true;
	};

	vjs.Player.prototype.userActive_ = true;
	vjs.Player.prototype.userActive = function(bool){
	  if (bool !== undefined) {
	    bool = !!bool;
	    if (bool !== this.userActive_) {
	      this.userActive_ = bool;
	      if (bool) {
	        // If the user was inactive and is now active we want to reset the
	        // inactivity timer
	        this.userActivity_ = true;
	        this.removeClass('vjs-user-inactive');
	        this.addClass('vjs-user-active');
	        this.trigger('useractive');
	      } else {
	        // We're switching the state to inactive manually, so erase any other
	        // activity
	        this.userActivity_ = false;

	        // Chrome/Safari/IE have bugs where when you change the cursor it can
	        // trigger a mousemove event. This causes an issue when you're hiding
	        // the cursor when the user is inactive, and a mousemove signals user
	        // activity. Making it impossible to go into inactive mode. Specifically
	        // this happens in fullscreen when we really need to hide the cursor.
	        //
	        // When this gets resolved in ALL browsers it can be removed
	        // https://code.google.com/p/chromium/issues/detail?id=103041
	        this.tech.one('mousemove', function(e){
	          e.stopPropagation();
	          e.preventDefault();
	        });
	        this.removeClass('vjs-user-active');
	        this.addClass('vjs-user-inactive');
	        this.trigger('userinactive');
	      }
	    }
	    return this;
	  }
	  return this.userActive_;
	};

	vjs.Player.prototype.listenForUserActivity = function(){
	  var onMouseActivity, onMouseDown, mouseInProgress, onMouseUp,
	      activityCheck, inactivityTimeout;

	  onMouseActivity = this.reportUserActivity;

	  onMouseDown = function() {
	    onMouseActivity();
	    // For as long as the they are touching the device or have their mouse down,
	    // we consider them active even if they're not moving their finger or mouse.
	    // So we want to continue to update that they are active
	    clearInterval(mouseInProgress);
	    // Setting userActivity=true now and setting the interval to the same time
	    // as the activityCheck interval (250) should ensure we never miss the
	    // next activityCheck
	    mouseInProgress = setInterval(vjs.bind(this, onMouseActivity), 250);
	  };

	  onMouseUp = function(event) {
	    onMouseActivity();
	    // Stop the interval that maintains activity if the mouse/touch is down
	    clearInterval(mouseInProgress);
	  };

	  // Any mouse movement will be considered user activity
	  this.on('mousedown', onMouseDown);
	  this.on('mousemove', onMouseActivity);
	  this.on('mouseup', onMouseUp);

	  // Listen for keyboard navigation
	  // Shouldn't need to use inProgress interval because of key repeat
	  this.on('keydown', onMouseActivity);
	  this.on('keyup', onMouseActivity);

	  // Consider any touch events that bubble up to be activity
	  // Certain touches on the tech will be blocked from bubbling because they
	  // toggle controls
	  this.on('touchstart', onMouseDown);
	  this.on('touchmove', onMouseActivity);
	  this.on('touchend', onMouseUp);
	  this.on('touchcancel', onMouseUp);

	  // Run an interval every 250 milliseconds instead of stuffing everything into
	  // the mousemove/touchmove function itself, to prevent performance degradation.
	  // `this.reportUserActivity` simply sets this.userActivity_ to true, which
	  // then gets picked up by this loop
	  // http://ejohn.org/blog/learning-from-twitter/
	  activityCheck = setInterval(vjs.bind(this, function() {
	    // Check to see if mouse/touch activity has happened
	    if (this.userActivity_) {
	      // Reset the activity tracker
	      this.userActivity_ = false;

	      // If the user state was inactive, set the state to active
	      this.userActive(true);

	      // Clear any existing inactivity timeout to start the timer over
	      clearTimeout(inactivityTimeout);

	      // In X seconds, if no more activity has occurred the user will be
	      // considered inactive
	      inactivityTimeout = setTimeout(vjs.bind(this, function() {
	        // Protect against the case where the inactivityTimeout can trigger just
	        // before the next user activity is picked up by the activityCheck loop
	        // causing a flicker
	        if (!this.userActivity_) {
	          this.userActive(false);
	        }
	      }), 2000);
	    }
	  }), 250);

	  // Clean up the intervals when we kill the player
	  this.on('dispose', function(){
	    clearInterval(activityCheck);
	    clearTimeout(inactivityTimeout);
	  });
	};

	vjs.Player.prototype.playbackRate = function(rate) {
	  if (rate !== undefined) {
	    this.techCall('setPlaybackRate', rate);
	    return this;
	  }

	  if (this.tech && this.tech.features && this.tech.features['playbackRate']) {
	    return this.techGet('playbackRate');
	  } else {
	    return 1.0;
	  }

	};

	// Methods to add support for
	// networkState: function(){ return this.techCall('networkState'); },
	// readyState: function(){ return this.techCall('readyState'); },
	// seeking: function(){ return this.techCall('seeking'); },
	// initialTime: function(){ return this.techCall('initialTime'); },
	// startOffsetTime: function(){ return this.techCall('startOffsetTime'); },
	// played: function(){ return this.techCall('played'); },
	// seekable: function(){ return this.techCall('seekable'); },
	// videoTracks: function(){ return this.techCall('videoTracks'); },
	// audioTracks: function(){ return this.techCall('audioTracks'); },
	// videoWidth: function(){ return this.techCall('videoWidth'); },
	// videoHeight: function(){ return this.techCall('videoHeight'); },
	// defaultPlaybackRate: function(){ return this.techCall('defaultPlaybackRate'); },
	// playbackRate: function(){ return this.techCall('playbackRate'); },
	// mediaGroup: function(){ return this.techCall('mediaGroup'); },
	// controller: function(){ return this.techCall('controller'); },
	// defaultMuted: function(){ return this.techCall('defaultMuted'); }

	// TODO
	// currentSrcList: the array of sources including other formats and bitrates
	// playList: array of source lists in order of playback

	// RequestFullscreen API
	(function(){
	  var prefix, requestFS, div;

	  div = document.createElement('div');

	  requestFS = {};

	  // Current W3C Spec
	  // http://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html#api
	  // Mozilla Draft: https://wiki.mozilla.org/Gecko:FullScreenAPI#fullscreenchange_event
	  // New: https://dvcs.w3.org/hg/fullscreen/raw-file/529a67b8d9f3/Overview.html
	  if (div.cancelFullscreen !== undefined) {
	    requestFS.requestFn = 'requestFullscreen';
	    requestFS.cancelFn = 'exitFullscreen';
	    requestFS.eventName = 'fullscreenchange';
	    requestFS.isFullScreen = 'fullScreen';

	  // Webkit (Chrome/Safari) and Mozilla (Firefox) have working implementations
	  // that use prefixes and vary slightly from the new W3C spec. Specifically,
	  // using 'exit' instead of 'cancel', and lowercasing the 'S' in Fullscreen.
	  // Other browsers don't have any hints of which version they might follow yet,
	  // so not going to try to predict by looping through all prefixes.
	  } else {

	    if (document.mozCancelFullScreen) {
	      prefix = 'moz';
	      requestFS.isFullScreen = prefix + 'FullScreen';
	    } else {
	      prefix = 'webkit';
	      requestFS.isFullScreen = prefix + 'IsFullScreen';
	    }

	    if (div[prefix + 'RequestFullScreen']) {
	      requestFS.requestFn = prefix + 'RequestFullScreen';
	      requestFS.cancelFn = prefix + 'CancelFullScreen';
	    }
	    requestFS.eventName = prefix + 'fullscreenchange';
	  }

	  if (document[requestFS.cancelFn]) {
	    vjs.support.requestFullScreen = requestFS;
	  }

	})();


	/**
	 * Container of main controls
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.ControlBar = vjs.Component.extend();

	vjs.ControlBar.prototype.options_ = {
	  loadEvent: 'play',
	  children: {
	    'playToggle': {},
	    'currentTimeDisplay': {},
	    'timeDivider': {},
	    'durationDisplay': {},
	    'remainingTimeDisplay': {},
	    'progressControl': {},
	    'fullscreenToggle': {},
	    'volumeControl': {},
	    'muteToggle': {},
	    // 'volumeMenuButton': {}
	    'playbackRateMenuButton': {},
	    'transcriptToggle': {},
	    'downloadMenuButton': {},
	  }
	};

	vjs.ControlBar.prototype.createEl = function(){
	  return vjs.createEl('div', {
	    className: 'vjs-control-bar'
	  });
	};
	/**
	 * Button to toggle between play and pause
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.PlayToggle = vjs.Button.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Button.call(this, player, options);

	    player.on('play', vjs.bind(this, this.onPlay));
	    player.on('pause', vjs.bind(this, this.onPause));
	  }
	});

	vjs.PlayToggle.prototype.buttonText = 'Play';

	vjs.PlayToggle.prototype.buildCSSClass = function(){
	  return 'vjs-play-control ' + vjs.Button.prototype.buildCSSClass.call(this);
	};

	  // OnClick - Toggle between play and pause
	vjs.PlayToggle.prototype.onClick = function(){
	  if (this.player_.paused()) {
	    this.player_.play();
	  } else {
	    this.player_.pause();
	  }
	};

	  // OnPlay - Add the vjs-playing class to the element so it can change appearance
	vjs.PlayToggle.prototype.onPlay = function(){
	  vjs.removeClass(this.el_, 'vjs-paused');
	  vjs.addClass(this.el_, 'vjs-playing');
	  this.el_.children[0].children[0].innerHTML = 'Pause'; // change the button text to "Pause"
	};

	  // OnPause - Add the vjs-paused class to the element so it can change appearance
	vjs.PlayToggle.prototype.onPause = function(){
	  vjs.removeClass(this.el_, 'vjs-playing');
	  vjs.addClass(this.el_, 'vjs-paused');
	  this.el_.children[0].children[0].innerHTML = 'Play'; // change the button text to "Play"
	};/**
	 * Displays the current time
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.CurrentTimeDisplay = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Component.call(this, player, options);

	    player.on('timeupdate', vjs.bind(this, this.updateContent));
	  }
	});

	vjs.CurrentTimeDisplay.prototype.createEl = function(){
	  var el = vjs.Component.prototype.createEl.call(this, 'div', {
	    className: 'vjs-current-time vjs-time-controls vjs-control'
	  });

	  this.content = vjs.createEl('div', {
	    className: 'vjs-current-time-display',
	    innerHTML: '<span class="vjs-control-text">Current Time </span>' + '0:00', // label the current time for screen reader users
	    'aria-live': 'off' // tell screen readers not to automatically read the time as it changes
	  });

	  el.appendChild(vjs.createEl('div').appendChild(this.content));
	  return el;
	};

	vjs.CurrentTimeDisplay.prototype.updateContent = function(){
	  // Allows for smooth scrubbing, when player can't keep up.
	  var time = (this.player_.scrubbing) ? this.player_.getCache().currentTime : this.player_.currentTime();
	  this.content.innerHTML = '<span class="vjs-control-text">Current Time </span>' + vjs.formatTime(time, this.player_.duration());
	};

	/**
	 * Displays the duration
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.DurationDisplay = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Component.call(this, player, options);

	    player.on('timeupdate', vjs.bind(this, this.updateContent)); // this might need to be changes to 'durationchange' instead of 'timeupdate' eventually, however the durationchange event fires before this.player_.duration() is set, so the value cannot be written out using this method. Once the order of durationchange and this.player_.duration() being set is figured out, this can be updated.
	  }
	});

	vjs.DurationDisplay.prototype.createEl = function(){
	  var el = vjs.Component.prototype.createEl.call(this, 'div', {
	    className: 'vjs-duration vjs-time-controls vjs-control'
	  });

	  this.content = vjs.createEl('div', {
	    className: 'vjs-duration-display',
	    innerHTML: '<span class="vjs-control-text">Duration Time </span>' + '0:00', // label the duration time for screen reader users
	    'aria-live': 'off' // tell screen readers not to automatically read the time as it changes
	  });

	  el.appendChild(vjs.createEl('div').appendChild(this.content));
	  return el;
	};

	vjs.DurationDisplay.prototype.updateContent = function(){
	  var duration = this.player_.duration();
	  if (duration) {
	      this.content.innerHTML = '<span class="vjs-control-text">Duration Time </span>' + vjs.formatTime(duration); // label the duration time for screen reader users
	  }
	};

	/**
	 * Time Separator (Not used in main skin, but still available, and could be used as a 'spare element')
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.TimeDivider = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Component.call(this, player, options);
	  }
	});

	vjs.TimeDivider.prototype.createEl = function(){
	  return vjs.Component.prototype.createEl.call(this, 'div', {
	    className: 'vjs-time-divider',
	    innerHTML: '<div><span>/</span></div>'
	  });
	};

	/**
	 * Displays the time left in the video
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.RemainingTimeDisplay = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Component.call(this, player, options);

	    player.on('timeupdate', vjs.bind(this, this.updateContent));
	  }
	});

	vjs.RemainingTimeDisplay.prototype.createEl = function(){
	  var el = vjs.Component.prototype.createEl.call(this, 'div', {
	    className: 'vjs-remaining-time vjs-time-controls vjs-control'
	  });

	  this.content = vjs.createEl('div', {
	    className: 'vjs-remaining-time-display',
	    innerHTML: '<span class="vjs-control-text">Remaining Time </span>' + '-0:00', // label the remaining time for screen reader users
	    'aria-live': 'off' // tell screen readers not to automatically read the time as it changes
	  });

	  el.appendChild(vjs.createEl('div').appendChild(this.content));
	  return el;
	};

	vjs.RemainingTimeDisplay.prototype.updateContent = function(){
	  if (this.player_.duration()) {
	    this.content.innerHTML = '<span class="vjs-control-text">Remaining Time </span>' + '-'+ vjs.formatTime(this.player_.remainingTime());
	  }

	  // Allows for smooth scrubbing, when player can't keep up.
	  // var time = (this.player_.scrubbing) ? this.player_.getCache().currentTime : this.player_.currentTime();
	  // this.content.innerHTML = vjs.formatTime(time, this.player_.duration());
	};
	/**
	 * Toggle fullscreen video
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.FullscreenToggle = vjs.Button.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Button.call(this, player, options);
	  }
	});

	vjs.FullscreenToggle.prototype.buttonText = 'Fullscreen';

	vjs.FullscreenToggle.prototype.buildCSSClass = function(){
	  return 'vjs-fullscreen-control ' + vjs.Button.prototype.buildCSSClass.call(this);
	};

	vjs.FullscreenToggle.prototype.onClick = function(){
	  if (!this.player_.isFullScreen) {
	    this.player_.requestFullScreen();
	    this.el_.children[0].children[0].innerHTML = 'Non-Fullscreen'; // change the button text to "Non-Fullscreen"
	    if (jQuery('.transcript-body:visible').length > 0 && jQuery('.annotationSection:visible').length > 0) {
	      jQuery('#container').css('height', '80%');
	      jQuery('#container').css('height', 'calc(100% - 150px)');
	      jQuery('.annotationSection.side').css('height', '80%');
	      jQuery('.annotationSection.side').css('height', 'calc(100% - 150px)');
	    }
	  } else {
	    this.player_.cancelFullScreen();
	    this.el_.children[0].children[0].innerHTML = 'Fullscreen'; // change the button to "Fullscreen"
	    jQuery('.annotationSection.side').css('height','');
	  }
	};/**
	 * Seek, Load Progress, and Play Progress
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.ProgressControl = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Component.call(this, player, options);
	  }
	});

	vjs.ProgressControl.prototype.options_ = {
	  children: {
	    'seekBar': {}
	  }
	};

	vjs.ProgressControl.prototype.createEl = function(){
	  return vjs.Component.prototype.createEl.call(this, 'div', {
	    className: 'vjs-progress-control vjs-control'
	  });
	};

	/**
	 * Seek Bar and holder for the progress bars
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.SeekBar = vjs.Slider.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Slider.call(this, player, options);
	    player.on('timeupdate', vjs.bind(this, this.updateARIAAttributes));
	    player.ready(vjs.bind(this, this.updateARIAAttributes));
	  }
	});

	vjs.SeekBar.prototype.options_ = {
	  children: {
	    'loadProgressBar': {},
	    'playProgressBar': {},
	    'seekHandle': {}
	  },
	  'barName': 'playProgressBar',
	  'handleName': 'seekHandle'
	};

	vjs.SeekBar.prototype.playerEvent = 'timeupdate';

	vjs.SeekBar.prototype.createEl = function(){
	  return vjs.Slider.prototype.createEl.call(this, 'div', {
	    className: 'vjs-progress-holder',
	    'aria-label': 'video progress bar'
	  });
	};

	vjs.SeekBar.prototype.updateARIAAttributes = function(){
	    // Allows for smooth scrubbing, when player can't keep up.
	    var time = (this.player_.scrubbing) ? this.player_.getCache().currentTime : this.player_.currentTime();
	    this.el_.setAttribute('aria-valuenow',vjs.round(this.getPercent()*100, 2)); // machine readable value of progress bar (percentage complete)
	    this.el_.setAttribute('aria-valuetext',vjs.formatTime(time, this.player_.duration())); // human readable value of progress bar (time complete)
	};

	vjs.SeekBar.prototype.getPercent = function(){
	  var currentTime;
	  // Flash RTMP provider will not report the correct time
	  // immediately after a seek. This isn't noticeable if you're
	  // seeking while the video is playing, but it is if you seek
	  // while the video is paused.
	  if (this.player_.techName === 'Flash' && this.player_.seeking()) {
	    var cache = this.player_.getCache();
	    if (cache.lastSetCurrentTime) {
	      currentTime = cache.lastSetCurrentTime;
	    }
	    else {
	      currentTime = this.player_.currentTime();
	    }
	  }
	  else {
	    currentTime = this.player_.currentTime();
	  }

	  return currentTime / this.player_.duration();
	};

	vjs.SeekBar.prototype.onMouseDown = function(event){
	  vjs.Slider.prototype.onMouseDown.call(this, event);

	  this.player_.scrubbing = true;

	  this.videoWasPlaying = !this.player_.paused();
	  this.player_.pause();
	};

	vjs.SeekBar.prototype.onMouseMove = function(event){
	  var newTime = this.calculateDistance(event) * this.player_.duration();

	  // Don't let video end while scrubbing.
	  if (newTime == this.player_.duration()) { newTime = newTime - 0.1; }

	  // Set new time (tell player to seek to new time)
	  this.player_.currentTime(newTime);
	};

	vjs.SeekBar.prototype.onMouseUp = function(event){
	  vjs.Slider.prototype.onMouseUp.call(this, event);

	  this.player_.scrubbing = false;
	  if (this.videoWasPlaying) {
	    this.player_.play();
	  }
	};

	vjs.SeekBar.prototype.stepForward = function(){
	  this.player_.currentTime(this.player_.currentTime() + 5); // more quickly fast forward for keyboard-only users
	};

	vjs.SeekBar.prototype.stepBack = function(){
	  this.player_.currentTime(this.player_.currentTime() - 5); // more quickly rewind for keyboard-only users
	};


	/**
	 * Shows load progres
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.LoadProgressBar = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Component.call(this, player, options);
	    player.on('progress', vjs.bind(this, this.update));
	  }
	});

	vjs.LoadProgressBar.prototype.createEl = function(){
	  return vjs.Component.prototype.createEl.call(this, 'div', {
	    className: 'vjs-load-progress',
	    innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>'
	  });
	};

	vjs.LoadProgressBar.prototype.update = function(){
	  if (this.el_.style) { this.el_.style.width = vjs.round(this.player_.bufferedPercent() * 100, 2) + '%'; }
	};


	/**
	 * Shows play progress
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.PlayProgressBar = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Component.call(this, player, options);
	  }
	});

	vjs.PlayProgressBar.prototype.createEl = function(){
	  return vjs.Component.prototype.createEl.call(this, 'div', {
	    className: 'vjs-play-progress',
	    innerHTML: '<span class="vjs-control-text">Progress: 0%</span>'
	  });
	};

	/**
	 * SeekBar component includes play progress bar, and seek handle
	 * Needed so it can determine seek position based on handle position/size
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.SeekHandle = vjs.SliderHandle.extend();

	/** @inheritDoc */
	vjs.SeekHandle.prototype.defaultValue = '00:00';

	/** @inheritDoc */
	vjs.SeekHandle.prototype.createEl = function(){
	  return vjs.SliderHandle.prototype.createEl.call(this, 'div', {
	    className: 'vjs-seek-handle'
	  });
	};/**
	 * Control the volume
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.VolumeControl = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Component.call(this, player, options);

	    // hide volume controls when they're not supported by the current tech
	    if (player.tech && player.tech.features && player.tech.features['volumeControl'] === false) {
	      this.addClass('vjs-hidden');
	    }
	    player.on('loadstart', vjs.bind(this, function(){
	      if (player.tech.features && player.tech.features['volumeControl'] === false) {
	        this.addClass('vjs-hidden');
	      } else {
	        this.removeClass('vjs-hidden');
	      }
	    }));
	  }
	});

	vjs.VolumeControl.prototype.options_ = {
	  children: {
	    'volumeBar': {}
	  }
	};

	vjs.VolumeControl.prototype.createEl = function(){
	  return vjs.Component.prototype.createEl.call(this, 'div', {
	    className: 'vjs-volume-control vjs-control'
	  });
	};

	/**
	 * Contains volume level
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.VolumeBar = vjs.Slider.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Slider.call(this, player, options);
	    player.on('volumechange', vjs.bind(this, this.updateARIAAttributes));
	    player.ready(vjs.bind(this, this.updateARIAAttributes));
	    setTimeout(vjs.bind(this, this.update), 0); // update when elements is in DOM
	  }
	});

	vjs.VolumeBar.prototype.updateARIAAttributes = function(){
	  // Current value of volume bar as a percentage
	  this.el_.setAttribute('aria-valuenow',vjs.round(this.player_.volume()*100, 2));
	  this.el_.setAttribute('aria-valuetext',vjs.round(this.player_.volume()*100, 2)+'%');
	};

	vjs.VolumeBar.prototype.options_ = {
	  children: {
	    'volumeLevel': {},
	    'volumeHandle': {}
	  },
	  'barName': 'volumeLevel',
	  'handleName': 'volumeHandle'
	};

	vjs.VolumeBar.prototype.playerEvent = 'volumechange';

	vjs.VolumeBar.prototype.createEl = function(){
	  return vjs.Slider.prototype.createEl.call(this, 'div', {
	    className: 'vjs-volume-bar',
	    'aria-label': 'volume level'
	  });
	};

	vjs.VolumeBar.prototype.onMouseMove = function(event) {
	  if (this.player_.muted()) {
	    this.player_.muted(false);
	  }

	  this.player_.volume(this.calculateDistance(event));
	};

	vjs.VolumeBar.prototype.getPercent = function(){
	  if (this.player_.muted()) {
	    return 0;
	  } else {
	    return this.player_.volume();
	  }
	};

	vjs.VolumeBar.prototype.stepForward = function(){
	  this.player_.volume(this.player_.volume() + 0.1);
	};

	vjs.VolumeBar.prototype.stepBack = function(){
	  this.player_.volume(this.player_.volume() - 0.1);
	};

	/**
	 * Shows volume level
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.VolumeLevel = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Component.call(this, player, options);
	  }
	});

	vjs.VolumeLevel.prototype.createEl = function(){
	  return vjs.Component.prototype.createEl.call(this, 'div', {
	    className: 'vjs-volume-level',
	    innerHTML: '<span class="vjs-control-text"></span>'
	  });
	};

	/**
	 * Change volume level
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	 vjs.VolumeHandle = vjs.SliderHandle.extend();

	 /** @inheritDoc */
	 vjs.VolumeHandle.prototype.defaultValue = '00:00';

	 /** @inheritDoc */
	 vjs.VolumeHandle.prototype.createEl = function(){
	   return vjs.SliderHandle.prototype.createEl.call(this, 'div', {
	     className: 'vjs-volume-handle'
	   });
	 };
	/**
	 * Mute the audio
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.MuteToggle = vjs.Button.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Button.call(this, player, options);

	    player.on('volumechange', vjs.bind(this, this.update));

	    // hide mute toggle if the current tech doesn't support volume control
	    if (player.tech && player.tech.features && player.tech.features['volumeControl'] === false) {
	      this.addClass('vjs-hidden');
	    }
	    player.on('loadstart', vjs.bind(this, function(){
	      if (player.tech.features && player.tech.features['volumeControl'] === false) {
	        this.addClass('vjs-hidden');
	      } else {
	        this.removeClass('vjs-hidden');
	      }
	    }));
	  }
	});

	vjs.MuteToggle.prototype.createEl = function(){
	  return vjs.Button.prototype.createEl.call(this, 'div', {
	    className: 'vjs-mute-control vjs-control',
	    innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
	  });
	};

	vjs.MuteToggle.prototype.onClick = function(){
	  this.player_.muted( this.player_.muted() ? false : true );
	};

	vjs.MuteToggle.prototype.update = function(){
	  var vol = this.player_.volume(),
	      level = 3;

	  if (vol === 0 || this.player_.muted()) {
	    level = 0;
	  } else if (vol < 0.33) {
	    level = 1;
	  } else if (vol < 0.67) {
	    level = 2;
	  }

	  // Don't rewrite the button text if the actual text doesn't change.
	  // This causes unnecessary and confusing information for screen reader users.
	  // This check is needed because this function gets called every time the volume level is changed.
	  if(this.player_.muted()){
	      if(this.el_.children[0].children[0].innerHTML!='Unmute'){
	          this.el_.children[0].children[0].innerHTML = 'Unmute'; // change the button text to "Unmute"
	      }
	  } else {
	      if(this.el_.children[0].children[0].innerHTML!='Mute'){
	          this.el_.children[0].children[0].innerHTML = 'Mute'; // change the button text to "Mute"
	      }
	  }

	  /* TODO improve muted icon classes */
	  for (var i = 0; i < 4; i++) {
	    vjs.removeClass(this.el_, 'vjs-vol-'+i);
	  }
	  vjs.addClass(this.el_, 'vjs-vol-'+level);
	};
	/**
	 * Menu button with a popup for showing the volume slider.
	 * @constructor
	 */
	vjs.VolumeMenuButton = vjs.MenuButton.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.MenuButton.call(this, player, options);

	    // Same listeners as MuteToggle
	    player.on('volumechange', vjs.bind(this, this.update));

	    // hide mute toggle if the current tech doesn't support volume control
	    if (player.tech && player.tech.features && player.tech.features.volumeControl === false) {
	      this.addClass('vjs-hidden');
	    }
	    player.on('loadstart', vjs.bind(this, function(){
	      if (player.tech.features && player.tech.features.volumeControl === false) {
	        this.addClass('vjs-hidden');
	      } else {
	        this.removeClass('vjs-hidden');
	      }
	    }));
	    this.addClass('vjs-menu-button');
	  }
	});

	vjs.VolumeMenuButton.prototype.createMenu = function(){
	  var menu = new vjs.Menu(this.player_, {
	    contentElType: 'div'
	  });
	  var vc = new vjs.VolumeBar(this.player_, vjs.obj.merge({vertical: true}, this.options_.volumeBar));
	  menu.addChild(vc);
	  return menu;
	};

	vjs.VolumeMenuButton.prototype.onClick = function(){
	  vjs.MuteToggle.prototype.onClick.call(this);
	  vjs.MenuButton.prototype.onClick.call(this);
	};

	vjs.VolumeMenuButton.prototype.createEl = function(){
	  return vjs.Button.prototype.createEl.call(this, 'div', {
	    className: 'vjs-volume-menu-button vjs-menu-button vjs-control',
	    innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
	  });
	};
	vjs.VolumeMenuButton.prototype.update = vjs.MuteToggle.prototype.update;

	vjs.PlaybackRateMenuButton = vjs.MenuButton.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.MenuButton.call(this, player, options);

	    this.updateVisibility();
	    this.updateLabel();

	    player.on('loadstart', vjs.bind(this, this.updateVisibility));
	    player.on('ratechange', vjs.bind(this, this.updateLabel));
	  }
	});

	vjs.PlaybackRateMenuButton.prototype.createEl = function(){
	  var el = vjs.Component.prototype.createEl.call(this, 'div', {
	    className: 'vjs-playback-rate vjs-menu-button vjs-control',
	    innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">Playback Rate</span></div>'
	  });

	  this.labelEl_ = vjs.createEl('div', {
	    className: 'vjs-playback-rate-value',
	    innerHTML: 1.0
	  });

	  el.appendChild(this.labelEl_);

	  return el;
	};

	// Menu creation
	vjs.PlaybackRateMenuButton.prototype.createMenu = function(){
	  var menu = new vjs.Menu(this.player());
	  var rates = this.player().options()['playbackRates'];

	  if (rates) {
	    for (var i = rates.length - 1; i >= 0; i--) {
	      menu.addChild(
	        new vjs.PlaybackRateMenuItem(this.player(), { 'rate': rates[i] + 'x'})
	        );
	    };
	  }

	  return menu;
	};

	vjs.PlaybackRateMenuButton.prototype.updateARIAAttributes = function(){
	  // Current playback rate
	  this.el().setAttribute('aria-valuenow', this.player().playbackRate());
	};

	vjs.PlaybackRateMenuButton.prototype.onClick = function(){
	  // select next rate option
	  var currentRate = this.player().playbackRate();
	  var rates = this.player().options()['playbackRates'];
	  // this will select first one if the last one currently selected
	  var newRate = rates[0];
	  for (var i = 0; i <rates.length ; i++) {
	    if (rates[i] > currentRate) {
	      newRate = rates[i];
	      break;
	    }
	  };
	  this.player().playbackRate(newRate);
	  this.labelEl_.innerHTML = newRate + 'x';
	};

	vjs.PlaybackRateMenuButton.prototype.playbackRateSupported = function(){
	  return this.player().tech
	    && this.player().tech.features['playbackRate']
	    && this.player().options()['playbackRates']
	    && this.player().options()['playbackRates'].length > 0
	  ;
	};

	/**
	 * Hide playback rate controls when they're no playback rate options to select
	 */
	vjs.PlaybackRateMenuButton.prototype.updateVisibility = function(){
	  if (this.playbackRateSupported()) {
	    this.removeClass('vjs-hidden');
	  } else {
	    this.addClass('vjs-hidden');
	  }
	};

	/**
	 * Update button label when rate changed
	 */
	vjs.PlaybackRateMenuButton.prototype.updateLabel = function(){
	  if (this.playbackRateSupported()) {
	    this.labelEl_.innerHTML = this.player().playbackRate() + 'x';
	  }
	};

	/**
	 * The specific menu item type for selecting a playback rate
	 *
	 * @constructor
	 */
	vjs.PlaybackRateMenuItem = vjs.MenuItem.extend({
	  contentElType: 'button',
	  /** @constructor */
	  init: function(player, options){
	    var label = this.label = options['rate'];
	    var rate = this.rate = parseFloat(label, 10);

	    // Modify options for parent MenuItem class's init.
	    options['label'] = label;
	    options['selected'] = rate === 1;
	    vjs.MenuItem.call(this, player, options);

	    this.player().on('ratechange', vjs.bind(this, this.update));
	  }
	});

	vjs.PlaybackRateMenuItem.prototype.onClick = function(){
	  vjs.MenuItem.prototype.onClick.call(this);
	  this.player().playbackRate(this.rate);
	  this.player().controlBar.playbackRateMenuButton.labelEl_.innerHTML = this.rate + "x";
	};

	vjs.PlaybackRateMenuItem.prototype.update = function(){
	  this.selected(this.player().playbackRate() == this.rate);
	};

	vjs.TranscriptToggle = vjs.Button.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Button.call(this, player, options);
	  }
	});

	vjs.TranscriptToggle.prototype.buttonText = 'Transcript';

	vjs.TranscriptToggle.prototype.buildCSSClass = function(){
	  return 'vjs-transcript-control ' + vjs.Button.prototype.buildCSSClass.call(this);
	};

	vjs.TranscriptToggle.prototype.onClick = function(){
	  if (jQuery('#transcript').is(":hidden")){
	    jQuery("#transcript").show();
	    if (jQuery('.xblock.vjs-fullscreen').length === 0){
	      jQuery(window.vid.el()).css('height', '80%!important');
	    } else {
	      jQuery('#container').css('height', '80%');
	      jQuery('#container').css('height', 'calc(100% - 150px)');
	      jQuery('.annotationSection.side').css('height', '80%');
	      jQuery('.annotationSection.side').css('height', 'calc(100% - 125px)');
	    }
	    translate_editor = (jQuery(window).height() - (jQuery('#viewer').height() + 50)) * -1;
	    window.annotation_tool.editor.element.css('transform', 'translateY('+translate_editor+'px)');
	  } else {
	    jQuery('#transcript').hide(10, function(){
	      if (jQuery('.xblock.vjs-fullscreen').length === 0) {
	        jQuery(window.vid.el()).css('height', '100%!important');
	      } else {
	        jQuery('#container').css('height', '100%');
	        jQuery('#container').css('height', 'calc(100% - 68px)');
	        jQuery('.annotationSection.side').css('height', '');
	      }
	      window.annotation_tool.editor.element.css('transform', 'translateY(0px)');
	    });
	  }
	  
	};

	vjs.DownloadMenuButton = vjs.MenuButton.extend({
	  init: function(player, options) {

	    var downloads = player.options()['downloadItems'];
	    if (downloads.length > 0){
	      vjs.MenuButton.call(this, player, options);
	    } 
	  }
	});

	vjs.DownloadMenuButton.prototype.createEl = function(){
	  var el = vjs.Component.prototype.createEl.call(this, 'div', {
	    className: 'vjs-download-control vjs-control vjs-menu-button',
	    innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">Download Video/Transcript</span></div>',
	  });
	  
	  return el;
	};

	vjs.DownloadMenuButton.prototype.createMenu = function (){
	  var menu = new vjs.Menu(this.player());
	  var downloads = this.player().options()['downloadItems'];
	  var self = this;

	  if (downloads) {

	    for (var i = downloads.length - 1; i >= 0; i--) {
	      if (downloads[i] === 'video') {
	        jQuery.each(this.player().options_.sources, function(index, value) {
	          if (value.type === "video/mp4") {
	            menu.addChild(
	              new vjs.DownloadMenuItem(self.player(), {'downloadItem': 'Download Video', 'source': value.src})
	            );
	          }
	        });
	      };
	      if (downloads[i] === 'transcript') {
	        jQuery.each(this.player().options_.tracks, function(index, value) {
	          console.log(value);
	            menu.addChild(
	              new vjs.DownloadMenuItem(self.player(), {'downloadItem': 'Download ' + value.label + ' Transcript', 'source': value.src})
	            );
	        });
	      };
	    };
	    
	  };

	  return menu;
	};

	vjs.DownloadMenuItem = vjs.MenuItem.extend({
	  contentElType: 'button',
	  init: function(player, options) {
	    var label = this.label = options['downloadItem'];
	    var src = this.src = options['source'];

	    options['label'] = label;
	    vjs.MenuItem.call(this, player, options);
	  }
	});

	vjs.DownloadMenuItem.prototype.onClick = function() {
	  vjs.MenuItem.prototype.onClick.call(this);
	  window.open(this.src);
	};
	/* Poster Image
	================================================================================ */
	/**
	 * Poster image. Shows before the video plays.
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.PosterImage = vjs.Button.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Button.call(this, player, options);

	    if (!player.poster() || !player.controls()) {
	      this.hide();
	    }

	    player.on('play', vjs.bind(this, this.hide));
	  }
	});

	vjs.PosterImage.prototype.createEl = function(){
	  var el = vjs.createEl('div', {
	        className: 'vjs-poster',

	        // Don't want poster to be tabbable.
	        tabIndex: -1
	      }),
	      poster = this.player_.poster();

	  if (poster) {
	    if ('backgroundSize' in el.style) {
	      el.style.backgroundImage = 'url("' + poster + '")';
	    } else {
	      el.appendChild(vjs.createEl('img', { src: poster }));
	    }
	  }

	  return el;
	};

	vjs.PosterImage.prototype.onClick = function(){
	  // Only accept clicks when controls are enabled
	  if (this.player().controls()) {
	    this.player_.play();
	  }
	};
	/* Loading Spinner
	================================================================================ */
	/**
	 * Loading spinner for waiting events
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.LoadingSpinner = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Component.call(this, player, options);

	    player.on('canplay', vjs.bind(this, this.hide));
	    player.on('canplaythrough', vjs.bind(this, this.hide));
	    player.on('playing', vjs.bind(this, this.hide));
	    player.on('seeked', vjs.bind(this, this.hide));

	    player.on('seeking', vjs.bind(this, this.show));

	    // in some browsers seeking does not trigger the 'playing' event,
	    // so we also need to trap 'seeked' if we are going to set a
	    // 'seeking' event
	    player.on('seeked', vjs.bind(this, this.hide));

	    player.on('error', vjs.bind(this, this.show));

	    // Not showing spinner on stalled any more. Browsers may stall and then not trigger any events that would remove the spinner.
	    // Checked in Chrome 16 and Safari 5.1.2. http://help.videojs.com/discussions/problems/883-why-is-the-download-progress-showing
	    // player.on('stalled', vjs.bind(this, this.show));

	    player.on('waiting', vjs.bind(this, this.show));
	  }
	});

	vjs.LoadingSpinner.prototype.createEl = function(){
	  return vjs.Component.prototype.createEl.call(this, 'div', {
	    className: 'vjs-loading-spinner'
	  });
	};
	/* Big Play Button
	================================================================================ */
	/**
	 * Initial play button. Shows before the video has played. The hiding of the
	 * big play button is done via CSS and player states.
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.BigPlayButton = vjs.Button.extend();

	vjs.BigPlayButton.prototype.createEl = function(){
	  return vjs.Button.prototype.createEl.call(this, 'div', {
	    className: 'vjs-big-play-button',
	    innerHTML: '<span></span>',
	    'aria-label': 'play video'
	  });
	};

	vjs.BigPlayButton.prototype.onClick = function(){
	  this.player_.play();
	};
	/**
	 * @fileoverview Media Technology Controller - Base class for media playback
	 * technology controllers like Flash and HTML5
	 */

	/**
	 * Base class for media (HTML5 Video, Flash) controllers
	 * @param {vjs.Player|Object} player  Central player instance
	 * @param {Object=} options Options object
	 * @constructor
	 */
	vjs.MediaTechController = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options, ready){
	    vjs.Component.call(this, player, options, ready);

	    this.initControlsListeners();
	  }
	});

	/**
	 * Set up click and touch listeners for the playback element
	 * On desktops, a click on the video itself will toggle playback,
	 * on a mobile device a click on the video toggles controls.
	 * (toggling controls is done by toggling the user state between active and
	 * inactive)
	 *
	 * A tap can signal that a user has become active, or has become inactive
	 * e.g. a quick tap on an iPhone movie should reveal the controls. Another
	 * quick tap should hide them again (signaling the user is in an inactive
	 * viewing state)
	 *
	 * In addition to this, we still want the user to be considered inactive after
	 * a few seconds of inactivity.
	 *
	 * Note: the only part of iOS interaction we can't mimic with this setup
	 * is a touch and hold on the video element counting as activity in order to
	 * keep the controls showing, but that shouldn't be an issue. A touch and hold on
	 * any controls will still keep the user active
	 */
	vjs.MediaTechController.prototype.initControlsListeners = function(){
	  var player, tech, activateControls, deactivateControls;

	  tech = this;
	  player = this.player();

	  var activateControls = function(){
	    if (player.controls() && !player.usingNativeControls()) {
	      tech.addControlsListeners();
	    }
	  };

	  deactivateControls = vjs.bind(tech, tech.removeControlsListeners);

	  // Set up event listeners once the tech is ready and has an element to apply
	  // listeners to
	  this.ready(activateControls);
	  player.on('controlsenabled', activateControls);
	  player.on('controlsdisabled', deactivateControls);
	};

	vjs.MediaTechController.prototype.addControlsListeners = function(){
	  var preventBubble, userWasActive;

	  // Some browsers (Chrome & IE) don't trigger a click on a flash swf, but do
	  // trigger mousedown/up.
	  // http://stackoverflow.com/questions/1444562/javascript-onclick-event-over-flash-object
	  // Any touch events are set to block the mousedown event from happening
	  this.on('mousedown', this.onClick);

	  // We need to block touch events on the video element from bubbling up,
	  // otherwise they'll signal activity prematurely. The specific use case is
	  // when the video is playing and the controls have faded out. In this case
	  // only a tap (fast touch) should toggle the user active state and turn the
	  // controls back on. A touch and move or touch and hold should not trigger
	  // the controls (per iOS as an example at least)
	  //
	  // We always want to stop propagation on touchstart because touchstart
	  // at the player level starts the touchInProgress interval. We can still
	  // report activity on the other events, but won't let them bubble for
	  // consistency. We don't want to bubble a touchend without a touchstart.
	  this.on('touchstart', function(event) {
	    // Stop the mouse events from also happening
	    event.preventDefault();
	    event.stopPropagation();
	    // Record if the user was active now so we don't have to keep polling it
	    userWasActive = this.player_.userActive();
	  });

	  preventBubble = function(event){
	    event.stopPropagation();
	    if (userWasActive) {
	      this.player_.reportUserActivity();
	    }
	  };

	  // Treat all touch events the same for consistency
	  this.on('touchmove', preventBubble);
	  this.on('touchleave', preventBubble);
	  this.on('touchcancel', preventBubble);
	  this.on('touchend', preventBubble);

	  // Turn on component tap events
	  this.emitTapEvents();

	  // The tap listener needs to come after the touchend listener because the tap
	  // listener cancels out any reportedUserActivity when setting userActive(false)
	  this.on('tap', this.onTap);
	};

	/**
	 * Remove the listeners used for click and tap controls. This is needed for
	 * toggling to controls disabled, where a tap/touch should do nothing.
	 */
	vjs.MediaTechController.prototype.removeControlsListeners = function(){
	  // We don't want to just use `this.off()` because there might be other needed
	  // listeners added by techs that extend this.
	  this.off('tap');
	  this.off('touchstart');
	  this.off('touchmove');
	  this.off('touchleave');
	  this.off('touchcancel');
	  this.off('touchend');
	  this.off('click');
	  this.off('mousedown');
	};

	/**
	 * Handle a click on the media element. By default will play/pause the media.
	 */
	vjs.MediaTechController.prototype.onClick = function(event){
	  // We're using mousedown to detect clicks thanks to Flash, but mousedown
	  // will also be triggered with right-clicks, so we need to prevent that
	  if (event.button !== 0) return;

	  // When controls are disabled a click should not toggle playback because
	  // the click is considered a control
	  if (this.player().controls()) {
	    if (this.player().paused()) {
	      this.player().play();
	    } else {
	      this.player().pause();
	    }
	  }
	};

	/**
	 * Handle a tap on the media element. By default it will toggle the user
	 * activity state, which hides and shows the controls.
	 */

	vjs.MediaTechController.prototype.onTap = function(){
	  this.player().userActive(!this.player().userActive());
	};

	vjs.MediaTechController.prototype.features = {
	  'volumeControl': true,

	  // Resizing plugins using request fullscreen reloads the plugin
	  'fullscreenResize': false,
	  'playbackRate': true,

	  // Optional events that we can manually mimic with timers
	  // currently not triggered by video-js-swf
	  'progressEvents': false,
	  'timeupdateEvents': false,
	};

	vjs.media = {};

	/**
	 * List of default API methods for any MediaTechController
	 * @type {String}
	 */
	vjs.media.ApiMethods = 'play,pause,paused,currentTime,setCurrentTime,duration,buffered,volume,setVolume,muted,setMuted,width,height,supportsFullScreen,enterFullScreen,src,load,currentSrc,preload,setPreload,autoplay,setAutoplay,loop,setLoop,error,networkState,readyState,seeking,initialTime,startOffsetTime,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks,defaultPlaybackRate,playbackRate,mediaGroup,controller,controls,defaultMuted'.split(',');
	// Create placeholder methods for each that warn when a method isn't supported by the current playback technology

	function createMethod(methodName){
	  return function(){
	    throw new Error('The "'+methodName+'" method is not available on the playback technology\'s API');
	  };
	}

	for (var i = vjs.media.ApiMethods.length - 1; i >= 0; i--) {
	  var methodName = vjs.media.ApiMethods[i];
	  vjs.MediaTechController.prototype[vjs.media.ApiMethods[i]] = createMethod(methodName);
	}
	/**
	 * @fileoverview HTML5 Media Controller - Wrapper for HTML5 Media API
	 */

	/**
	 * HTML5 Media Controller - Wrapper for HTML5 Media API
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @param {Function=} ready
	 * @constructor
	 */
	vjs.Html5 = vjs.MediaTechController.extend({
	  /** @constructor */
	  init: function(player, options, ready){
	    // volume cannot be changed from 1 on iOS
	    this.features['volumeControl'] = vjs.Html5.canControlVolume();

	    // just in case; or is it excessively...
	    this.features['playbackRate'] = vjs.Html5.canControlPlaybackRate();

	    // In iOS, if you move a video element in the DOM, it breaks video playback.
	    this.features['movingMediaElementInDOM'] = !vjs.IS_IOS;

	    // HTML video is able to automatically resize when going to fullscreen
	    this.features['fullscreenResize'] = true;

	    vjs.MediaTechController.call(this, player, options, ready);

	    var source = options['source'];

	    // If the element source is already set, we may have missed the loadstart event, and want to trigger it.
	    // We don't want to set the source again and interrupt playback.
	    if (source && this.el_.currentSrc == source.src) {
	      player.trigger('loadstart');

	    // Otherwise set the source if one was provided.
	    } else if (source) {
	      this.el_.src = source.src;
	    }

	    // Determine if native controls should be used
	    // Our goal should be to get the custom controls on mobile solid everywhere
	    // so we can remove this all together. Right now this will block custom
	    // controls on touch enabled laptops like the Chrome Pixel
	    if (vjs.TOUCH_ENABLED && player.options()['nativeControlsForTouch'] !== false) {
	      this.useNativeControls();
	    }

	    // Chrome and Safari both have issues with autoplay.
	    // In Safari (5.1.1), when we move the video element into the container div, autoplay doesn't work.
	    // In Chrome (15), if you have autoplay + a poster + no controls, the video gets hidden (but audio plays)
	    // This fixes both issues. Need to wait for API, so it updates displays correctly
	    player.ready(function(){
	      if (this.tag && this.options_['autoplay'] && this.paused()) {
	        delete this.tag['poster']; // Chrome Fix. Fixed in Chrome v16.
	        this.play();
	      }
	    });

	    this.setupTriggers();
	    this.triggerReady();
	  }
	});

	vjs.Html5.prototype.dispose = function(){
	  vjs.MediaTechController.prototype.dispose.call(this);
	};

	vjs.Html5.prototype.createEl = function(){
	  var player = this.player_,
	      // If possible, reuse original tag for HTML5 playback technology element
	      el = player.tag,
	      newEl;

	  // Check if this browser supports moving the element into the box.
	  // On the iPhone video will break if you move the element,
	  // So we have to create a brand new element.
	  if (!el || this.features['movingMediaElementInDOM'] === false) {

	    // If the original tag is still there, remove it.
	    if (el) {
	      el['player'] = null;
	      player.tag = null;
	      player.el().removeChild(el);
	      el = el.cloneNode(false);
	    } else {
	      el = vjs.createEl('video', {
	        id:player.id() + '_html5_api',
	        className:'vjs-tech'
	      });
	    }
	    // associate the player with the new tag
	    el['player'] = player;

	    vjs.insertFirst(el, player.el());
	  }

	  // Update specific tag settings, in case they were overridden
	  var attrs = ['autoplay','preload','loop','muted'];
	  for (var i = attrs.length - 1; i >= 0; i--) {
	    var attr = attrs[i];
	    if (player.options_[attr] !== null) {
	      el[attr] = player.options_[attr];
	    }
	  }

	  return el;
	  // jenniisawesome = true;
	};

	// Make video events trigger player events
	// May seem verbose here, but makes other APIs possible.
	vjs.Html5.prototype.setupTriggers = function(){
	  for (var i = vjs.Html5.Events.length - 1; i >= 0; i--) {
	    vjs.on(this.el_, vjs.Html5.Events[i], vjs.bind(this.player_, this.eventHandler));
	  }
	};
	// Triggers removed using this.off when disposed

	vjs.Html5.prototype.eventHandler = function(e){
	  this.trigger(e);

	  // No need for media events to bubble up.
	  e.stopPropagation();
	};

	vjs.Html5.prototype.useNativeControls = function(){
	  var tech, player, controlsOn, controlsOff, cleanUp;

	  tech = this;
	  player = this.player();

	  // If the player controls are enabled turn on the native controls
	  tech.setControls(player.controls());

	  // Update the native controls when player controls state is updated
	  controlsOn = function(){
	    tech.setControls(true);
	  };
	  controlsOff = function(){
	    tech.setControls(false);
	  };
	  player.on('controlsenabled', controlsOn);
	  player.on('controlsdisabled', controlsOff);

	  // Clean up when not using native controls anymore
	  cleanUp = function(){
	    player.off('controlsenabled', controlsOn);
	    player.off('controlsdisabled', controlsOff);
	  };
	  tech.on('dispose', cleanUp);
	  player.on('usingcustomcontrols', cleanUp);

	  // Update the state of the player to using native controls
	  player.usingNativeControls(true);
	};


	vjs.Html5.prototype.play = function(){ this.el_.play(); };
	vjs.Html5.prototype.pause = function(){ this.el_.pause(); };
	vjs.Html5.prototype.paused = function(){ return this.el_.paused; };

	vjs.Html5.prototype.currentTime = function(){ return this.el_.currentTime; };
	vjs.Html5.prototype.setCurrentTime = function(seconds){
	  try {
	    this.el_.currentTime = seconds;
	  } catch(e) {
	    vjs.log(e, 'Video is not ready. (Video.js)');
	    // this.warning(VideoJS.warnings.videoNotReady);
	  }
	};

	vjs.Html5.prototype.duration = function(){ return this.el_.duration || 0; };
	vjs.Html5.prototype.buffered = function(){ return this.el_.buffered; };

	vjs.Html5.prototype.volume = function(){ return this.el_.volume; };
	vjs.Html5.prototype.setVolume = function(percentAsDecimal){ this.el_.volume = percentAsDecimal; };
	vjs.Html5.prototype.muted = function(){ return this.el_.muted; };
	vjs.Html5.prototype.setMuted = function(muted){ this.el_.muted = muted; };

	vjs.Html5.prototype.width = function(){ return this.el_.offsetWidth; };
	vjs.Html5.prototype.height = function(){ return this.el_.offsetHeight; };

	vjs.Html5.prototype.supportsFullScreen = function(){
	  if (typeof this.el_.webkitEnterFullScreen == 'function') {

	    // Seems to be broken in Chromium/Chrome && Safari in Leopard
	    if (/Android/.test(vjs.USER_AGENT) || !/Chrome|Mac OS X 10.5/.test(vjs.USER_AGENT)) {
	      return true;
	    }
	  }
	  return false;
	};

	vjs.Html5.prototype.enterFullScreen = function(){
	  var video = this.el_;
	  var toggleFullscreen = function () {
	            var self = this;
	            var enterFullscreen = function() {
	              var el = jQuery(video).closest('.xblock')[0];
	              jQuery(el).css('padding-top', '21px');
	              if (el.requestFullscreen) {
	                el.requestFullscreen();
	              } else if (el.mozRequestFullScreen) {
	                el.mozRequestFullScreen();
	              } else if (el.webkitRequestFullscreen) {
	                el.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
	                if (!document.webkitCurrentFullScreenElement) {
	                    el.webkitRequestFullscreen()
	                }
	              } else if (el.msRequestFullscreen) {
	                el.msRequestFullscreen();
	              }
	            };

	            var exitFullscreen = function() {
	                jQuery(video).closest('.xblock').css('padding-top', '0px');
	                if (document.exitFullscreen) {
	                    document.exitFullscreen();
	                } else if (document.mozCancelFullScreen) {
	                    document.mozCancelFullScreen();
	                } else if (document.webkitExitFullscreen) {
	                    document.webkitExitFullscreen();
	                }
	                
	            };

	            var isFullscreen = function() {
	              var $fullscreen = $(fullscreenElement());
	              return ($fullscreen.length > 0);
	            };

	            var fullscreenElement = function() {
	              return (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement);
	            };

	            fullscreenElement() ? exitFullscreen() : enterFullscreen();
	        };
	  if (video.paused && video.networkState <= video.HAVE_METADATA) {
	    // attempt to prime the video element for programmatic access
	    // this isn't necessary on the desktop but shouldn't hurt
	    this.el_.play();

	    // playing and pausing synchronously during the transition to fullscreen
	    // can get iOS ~6.1 devices into a play/pause loop
	    setTimeout(function(){
	      video.pause();
	      toggleFullscreen()
	      //video.webkitEnterFullScreen();
	    }, 0);
	  } else {
	    toggleFullscreen()
	    //video.webkitEnterFullScreen();
	  }
	};
	vjs.Html5.prototype.exitFullScreen = function(){
	  this.el_.webkitExitFullScreen();
	};
	vjs.Html5.prototype.src = function(src){ this.el_.src = src; };
	vjs.Html5.prototype.load = function(){ this.el_.load(); };
	vjs.Html5.prototype.currentSrc = function(){ return this.el_.currentSrc; };

	vjs.Html5.prototype.preload = function(){ return this.el_.preload; };
	vjs.Html5.prototype.setPreload = function(val){ this.el_.preload = val; };

	vjs.Html5.prototype.autoplay = function(){ return this.el_.autoplay; };
	vjs.Html5.prototype.setAutoplay = function(val){ this.el_.autoplay = val; };

	vjs.Html5.prototype.controls = function(){ return this.el_.controls; }
	vjs.Html5.prototype.setControls = function(val){ this.el_.controls = !!val; }

	vjs.Html5.prototype.loop = function(){ return this.el_.loop; };
	vjs.Html5.prototype.setLoop = function(val){ this.el_.loop = val; };

	vjs.Html5.prototype.error = function(){ return this.el_.error; };
	vjs.Html5.prototype.seeking = function(){ return this.el_.seeking; };
	vjs.Html5.prototype.ended = function(){ return this.el_.ended; };
	vjs.Html5.prototype.defaultMuted = function(){ return this.el_.defaultMuted; };

	vjs.Html5.prototype.playbackRate = function(){ return this.el_.playbackRate; };
	vjs.Html5.prototype.setPlaybackRate = function(val){ this.el_.playbackRate = val; };

	/* HTML5 Support Testing ---------------------------------------------------- */

	vjs.Html5.isSupported = function(){
	  return !!vjs.TEST_VID.canPlayType;
	};

	vjs.Html5.canPlaySource = function(srcObj){
	  // IE9 on Windows 7 without MediaPlayer throws an error here
	  // https://github.com/videojs/video.js/issues/519
	  try {
	    return !!vjs.TEST_VID.canPlayType(srcObj.type);
	  } catch(e) {
	    return '';
	  }
	  // TODO: Check Type
	  // If no Type, check ext
	  // Check Media Type
	};

	vjs.Html5.canControlVolume = function(){
	  var volume =  vjs.TEST_VID.volume;
	  vjs.TEST_VID.volume = (volume / 2) + 0.1;
	  return volume !== vjs.TEST_VID.volume;
	};

	vjs.Html5.canControlPlaybackRate = function(){
	  var playbackRate = Html5.TEST_VID.playbackRate;
	  Html5.TEST_VID.playbackRate = (playbackRate / 2) + 0.1;
	  return playbackRate !== Html5.TEST_VID.playbackRate;
	};

	// List of all HTML5 events (various uses).
	vjs.Html5.Events = 'loadstart,suspend,abort,error,emptied,stalled,loadedmetadata,loadeddata,canplay,canplaythrough,playing,waiting,seeking,seeked,ended,durationchange,timeupdate,progress,play,pause,ratechange,volumechange'.split(',');


	// HTML5 Feature detection and Device Fixes --------------------------------- //

	  // Override Android 2.2 and less canPlayType method which is broken
	if (vjs.IS_OLD_ANDROID) {
	  document.createElement('video').constructor.prototype.canPlayType = function(type){
	    return (type && type.toLowerCase().indexOf('video/mp4') != -1) ? 'maybe' : '';
	  };
	}
	/**
	 * @fileoverview VideoJS-SWF - Custom Flash Player with HTML5-ish API
	 * https://github.com/zencoder/video-js-swf
	 * Not using setupTriggers. Using global onEvent func to distribute events
	 */

	/**
	 * HTML5 Media Controller - Wrapper for HTML5 Media API
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @param {Function=} ready
	 * @constructor
	 */
	vjs.Flash = vjs.MediaTechController.extend({
	  /** @constructor */
	  init: function(player, options, ready){
	    vjs.MediaTechController.call(this, player, options, ready);

	    var source = options['source'],

	        // Which element to embed in
	        parentEl = options['parentEl'],

	        // Create a temporary element to be replaced by swf object
	        placeHolder = this.el_ = vjs.createEl('div', { id: player.id() + '_temp_flash' }),

	        // Generate ID for swf object
	        objId = player.id()+'_flash_api',

	        // Store player options in local var for optimization
	        // TODO: switch to using player methods instead of options
	        // e.g. player.autoplay();
	        playerOptions = player.options_,

	        // Merge default flashvars with ones passed in to init
	        flashVars = vjs.obj.merge({

	          // SWF Callback Functions
	          'readyFunction': 'videojs.Flash.onReady',
	          'eventProxyFunction': 'videojs.Flash.onEvent',
	          'errorEventProxyFunction': 'videojs.Flash.onError',

	          // Player Settings
	          'autoplay': playerOptions.autoplay,
	          'preload': playerOptions.preload,
	          'loop': playerOptions.loop,
	          'muted': playerOptions.muted

	        }, options['flashVars']),

	        // Merge default parames with ones passed in
	        params = vjs.obj.merge({
	          'wmode': 'opaque', // Opaque is needed to overlay controls, but can affect playback performance
	          'bgcolor': '#000000' // Using bgcolor prevents a white flash when the object is loading
	        }, options['params']),

	        // Merge default attributes with ones passed in
	        attributes = vjs.obj.merge({
	          'id': objId,
	          'name': objId, // Both ID and Name needed or swf to identifty itself
	          'class': 'vjs-tech'
	        }, options['attributes'])
	    ;

	    // If source was supplied pass as a flash var.
	    if (source) {
	      if (source.type && vjs.Flash.isStreamingType(source.type)) {
	        var parts = vjs.Flash.streamToParts(source.src);
	        flashVars['rtmpConnection'] = encodeURIComponent(parts.connection);
	        flashVars['rtmpStream'] = encodeURIComponent(parts.stream);
	      }
	      else {
	        flashVars['src'] = encodeURIComponent(vjs.getAbsoluteURL(source.src));
	      }
	    }

	    // Add placeholder to player div
	    vjs.insertFirst(placeHolder, parentEl);

	    // Having issues with Flash reloading on certain page actions (hide/resize/fullscreen) in certain browsers
	    // This allows resetting the playhead when we catch the reload
	    if (options['startTime']) {
	      this.ready(function(){
	        this.load();
	        this.play();
	        this.currentTime(options['startTime']);
	      });
	    }

	    // Flash iFrame Mode
	    // In web browsers there are multiple instances where changing the parent element or visibility of a plugin causes the plugin to reload.
	    // - Firefox just about always. https://bugzilla.mozilla.org/show_bug.cgi?id=90268 (might be fixed by version 13)
	    // - Webkit when hiding the plugin
	    // - Webkit and Firefox when using requestFullScreen on a parent element
	    // Loading the flash plugin into a dynamically generated iFrame gets around most of these issues.
	    // Issues that remain include hiding the element and requestFullScreen in Firefox specifically

	    // There's on particularly annoying issue with this method which is that Firefox throws a security error on an offsite Flash object loaded into a dynamically created iFrame.
	    // Even though the iframe was inserted into a page on the web, Firefox + Flash considers it a local app trying to access an internet file.
	    // I tried mulitple ways of setting the iframe src attribute but couldn't find a src that worked well. Tried a real/fake source, in/out of domain.
	    // Also tried a method from stackoverflow that caused a security error in all browsers. http://stackoverflow.com/questions/2486901/how-to-set-document-domain-for-a-dynamically-generated-iframe
	    // In the end the solution I found to work was setting the iframe window.location.href right before doing a document.write of the Flash object.
	    // The only downside of this it seems to trigger another http request to the original page (no matter what's put in the href). Not sure why that is.

	    // NOTE (2012-01-29): Cannot get Firefox to load the remote hosted SWF into a dynamically created iFrame
	    // Firefox 9 throws a security error, unleess you call location.href right before doc.write.
	    //    Not sure why that even works, but it causes the browser to look like it's continuously trying to load the page.
	    // Firefox 3.6 keeps calling the iframe onload function anytime I write to it, causing an endless loop.

	    if (options['iFrameMode'] === true && !vjs.IS_FIREFOX) {

	      // Create iFrame with vjs-tech class so it's 100% width/height
	      var iFrm = vjs.createEl('iframe', {
	        'id': objId + '_iframe',
	        'name': objId + '_iframe',
	        'className': 'vjs-tech',
	        'scrolling': 'no',
	        'marginWidth': 0,
	        'marginHeight': 0,
	        'frameBorder': 0
	      });

	      // Update ready function names in flash vars for iframe window
	      flashVars['readyFunction'] = 'ready';
	      flashVars['eventProxyFunction'] = 'events';
	      flashVars['errorEventProxyFunction'] = 'errors';

	      // Tried multiple methods to get this to work in all browsers

	      // Tried embedding the flash object in the page first, and then adding a place holder to the iframe, then replacing the placeholder with the page object.
	      // The goal here was to try to load the swf URL in the parent page first and hope that got around the firefox security error
	      // var newObj = vjs.Flash.embed(options['swf'], placeHolder, flashVars, params, attributes);
	      // (in onload)
	      //  var temp = vjs.createEl('a', { id:'asdf', innerHTML: 'asdf' } );
	      //  iDoc.body.appendChild(temp);

	      // Tried embedding the flash object through javascript in the iframe source.
	      // This works in webkit but still triggers the firefox security error
	      // iFrm.src = 'javascript: document.write('"+vjs.Flash.getEmbedCode(options['swf'], flashVars, params, attributes)+"');";

	      // Tried an actual local iframe just to make sure that works, but it kills the easiness of the CDN version if you require the user to host an iframe
	      // We should add an option to host the iframe locally though, because it could help a lot of issues.
	      // iFrm.src = "iframe.html";

	      // Wait until iFrame has loaded to write into it.
	      vjs.on(iFrm, 'load', vjs.bind(this, function(){

	        var iDoc,
	            iWin = iFrm.contentWindow;

	        // The one working method I found was to use the iframe's document.write() to create the swf object
	        // This got around the security issue in all browsers except firefox.
	        // I did find a hack where if I call the iframe's window.location.href='', it would get around the security error
	        // However, the main page would look like it was loading indefinitely (URL bar loading spinner would never stop)
	        // Plus Firefox 3.6 didn't work no matter what I tried.
	        // if (vjs.USER_AGENT.match('Firefox')) {
	        //   iWin.location.href = '';
	        // }

	        // Get the iFrame's document depending on what the browser supports
	        iDoc = iFrm.contentDocument ? iFrm.contentDocument : iFrm.contentWindow.document;

	        // Tried ensuring both document domains were the same, but they already were, so that wasn't the issue.
	        // Even tried adding /. that was mentioned in a browser security writeup
	        // document.domain = document.domain+'/.';
	        // iDoc.domain = document.domain+'/.';

	        // Tried adding the object to the iframe doc's innerHTML. Security error in all browsers.
	        // iDoc.body.innerHTML = swfObjectHTML;

	        // Tried appending the object to the iframe doc's body. Security error in all browsers.
	        // iDoc.body.appendChild(swfObject);

	        // Using document.write actually got around the security error that browsers were throwing.
	        // Again, it's a dynamically generated (same domain) iframe, loading an external Flash swf.
	        // Not sure why that's a security issue, but apparently it is.
	        iDoc.write(vjs.Flash.getEmbedCode(options['swf'], flashVars, params, attributes));

	        // Setting variables on the window needs to come after the doc write because otherwise they can get reset in some browsers
	        // So far no issues with swf ready event being called before it's set on the window.
	        iWin['player'] = this.player_;

	        // Create swf ready function for iFrame window
	        iWin['ready'] = vjs.bind(this.player_, function(currSwf){
	          var el = iDoc.getElementById(currSwf),
	              player = this,
	              tech = player.tech;

	          // Update reference to playback technology element
	          tech.el_ = el;

	          // Make sure swf is actually ready. Sometimes the API isn't actually yet.
	          vjs.Flash.checkReady(tech);
	        });

	        // Create event listener for all swf events
	        iWin['events'] = vjs.bind(this.player_, function(swfID, eventName){
	          var player = this;
	          if (player && player.techName === 'flash') {
	            player.trigger(eventName);
	          }
	        });

	        // Create error listener for all swf errors
	        iWin['errors'] = vjs.bind(this.player_, function(swfID, eventName){
	          vjs.log('Flash Error', eventName);
	        });

	      }));

	      // Replace placeholder with iFrame (it will load now)
	      placeHolder.parentNode.replaceChild(iFrm, placeHolder);

	    // If not using iFrame mode, embed as normal object
	    } else {
	      vjs.Flash.embed(options['swf'], placeHolder, flashVars, params, attributes);
	    }
	  }
	});

	vjs.Flash.prototype.dispose = function(){
	  vjs.MediaTechController.prototype.dispose.call(this);
	};

	vjs.Flash.prototype.play = function(){
	  this.el_.vjs_play();
	};

	vjs.Flash.prototype.pause = function(){
	  this.el_.vjs_pause();
	};

	vjs.Flash.prototype.src = function(src){
	  if (vjs.Flash.isStreamingSrc(src)) {
	    src = vjs.Flash.streamToParts(src);
	    this.setRtmpConnection(src.connection);
	    this.setRtmpStream(src.stream);
	  }
	  else {
	    // Make sure source URL is abosolute.
	    src = vjs.getAbsoluteURL(src);
	    this.el_.vjs_src(src);
	  }

	  // Currently the SWF doesn't autoplay if you load a source later.
	  // e.g. Load player w/ no source, wait 2s, set src.
	  if (this.player_.autoplay()) {
	    var tech = this;
	    setTimeout(function(){ tech.play(); }, 0);
	  }
	};

	vjs.Flash.prototype.currentSrc = function(){
	  var src = this.el_.vjs_getProperty('currentSrc');
	  // no src, check and see if RTMP
	  if (src == null) {
	    var connection = this.rtmpConnection(),
	        stream = this.rtmpStream();

	    if (connection && stream) {
	      src = vjs.Flash.streamFromParts(connection, stream);
	    }
	  }
	  return src;
	};

	vjs.Flash.prototype.load = function(){
	  this.el_.vjs_load();
	};

	vjs.Flash.prototype.poster = function(){
	  this.el_.vjs_getProperty('poster');
	};

	vjs.Flash.prototype.buffered = function(){
	  return vjs.createTimeRange(0, this.el_.vjs_getProperty('buffered'));
	};

	vjs.Flash.prototype.supportsFullScreen = function(){
	  return false; // Flash does not allow fullscreen through javascript
	};

	vjs.Flash.prototype.enterFullScreen = function(){
	  return false;
	};


	// Create setters and getters for attributes
	var api = vjs.Flash.prototype,
	    readWrite = 'rtmpConnection,rtmpStream,preload,currentTime,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted'.split(','),
	    readOnly = 'error,currentSrc,networkState,readyState,seeking,initialTime,duration,startOffsetTime,paused,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks'.split(',');
	    // Overridden: buffered

	/**
	 * @this {*}
	 */
	var createSetter = function(attr){
	  var attrUpper = attr.charAt(0).toUpperCase() + attr.slice(1);
	  api['set'+attrUpper] = function(val){ return this.el_.vjs_setProperty(attr, val); };
	};

	/**
	 * @this {*}
	 */
	var createGetter = function(attr){
	  api[attr] = function(){ return this.el_.vjs_getProperty(attr); };
	};

	(function(){
	  var i;
	  // Create getter and setters for all read/write attributes
	  for (i = 0; i < readWrite.length; i++) {
	    createGetter(readWrite[i]);
	    createSetter(readWrite[i]);
	  }

	  // Create getters for read-only attributes
	  for (i = 0; i < readOnly.length; i++) {
	    createGetter(readOnly[i]);
	  }
	})();

	/* Flash Support Testing -------------------------------------------------------- */

	vjs.Flash.isSupported = function(){
	  return vjs.Flash.version()[0] >= 10;
	  // return swfobject.hasFlashPlayerVersion('10');
	};

	vjs.Flash.canPlaySource = function(srcObj){
	  if (srcObj.type in vjs.Flash.formats || srcObj.type in vjs.Flash.streamingFormats) { return 'maybe'; }
	};

	vjs.Flash.formats = {
	  'video/flv': 'FLV',
	  'video/x-flv': 'FLV',
	  'video/mp4': 'MP4',
	  'video/m4v': 'MP4'
	};

	vjs.Flash.streamingFormats = {
	  'rtmp/mp4': 'MP4',
	  'rtmp/flv': 'FLV'
	};

	vjs.Flash['onReady'] = function(currSwf){
	  var el = vjs.el(currSwf);

	  // Get player from box
	  // On firefox reloads, el might already have a player
	  var player = el['player'] || el.parentNode['player'],
	      tech = player.tech;

	  // Reference player on tech element
	  el['player'] = player;

	  // Update reference to playback technology element
	  tech.el_ = el;

	  vjs.Flash.checkReady(tech);
	};

	// The SWF isn't alwasy ready when it says it is. Sometimes the API functions still need to be added to the object.
	// If it's not ready, we set a timeout to check again shortly.
	vjs.Flash.checkReady = function(tech){

	  // Check if API property exists
	  if (tech.el().vjs_getProperty) {

	    // If so, tell tech it's ready
	    tech.triggerReady();

	  // Otherwise wait longer.
	  } else {

	    setTimeout(function(){
	      vjs.Flash.checkReady(tech);
	    }, 50);

	  }
	};

	// Trigger events from the swf on the player
	vjs.Flash['onEvent'] = function(swfID, eventName){
	  var player = vjs.el(swfID)['player'];
	  player.trigger(eventName);
	};

	// Log errors from the swf
	vjs.Flash['onError'] = function(swfID, err){
	  var player = vjs.el(swfID)['player'];
	  player.trigger('error');
	  vjs.log('Flash Error', err, swfID);
	};

	// Flash Version Check
	vjs.Flash.version = function(){
	  var version = '0,0,0';

	  // IE
	  try {
	    version = new window.ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];

	  // other browsers
	  } catch(e) {
	    try {
	      if (navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin){
	        version = (navigator.plugins['Shockwave Flash 2.0'] || navigator.plugins['Shockwave Flash']).description.replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];
	      }
	    } catch(err) {}
	  }
	  return version.split(',');
	};

	// Flash embedding method. Only used in non-iframe mode
	vjs.Flash.embed = function(swf, placeHolder, flashVars, params, attributes){
	  var code = vjs.Flash.getEmbedCode(swf, flashVars, params, attributes),

	      // Get element by embedding code and retrieving created element
	      obj = vjs.createEl('div', { innerHTML: code }).childNodes[0],

	      par = placeHolder.parentNode
	  ;

	  placeHolder.parentNode.replaceChild(obj, placeHolder);

	  // IE6 seems to have an issue where it won't initialize the swf object after injecting it.
	  // This is a dumb fix
	  var newObj = par.childNodes[0];
	  setTimeout(function(){
	    newObj.style.display = 'block';
	  }, 1000);

	  return obj;

	};

	vjs.Flash.getEmbedCode = function(swf, flashVars, params, attributes){

	  var objTag = '<object type="application/x-shockwave-flash"',
	      flashVarsString = '',
	      paramsString = '',
	      attrsString = '';

	  // Convert flash vars to string
	  if (flashVars) {
	    vjs.obj.each(flashVars, function(key, val){
	      flashVarsString += (key + '=' + val + '&amp;');
	    });
	  }

	  // Add swf, flashVars, and other default params
	  params = vjs.obj.merge({
	    'movie': swf,
	    'flashvars': flashVarsString,
	    'allowScriptAccess': 'always', // Required to talk to swf
	    'allowNetworking': 'all' // All should be default, but having security issues.
	  }, params);

	  // Create param tags string
	  vjs.obj.each(params, function(key, val){
	    paramsString += '<param name="'+key+'" value="'+val+'" />';
	  });

	  attributes = vjs.obj.merge({
	    // Add swf to attributes (need both for IE and Others to work)
	    'data': swf,

	    // Default to 100% width/height
	    'width': '100%',
	    'height': '100%'

	  }, attributes);

	  // Create Attributes string
	  vjs.obj.each(attributes, function(key, val){
	    attrsString += (key + '="' + val + '" ');
	  });

	  return objTag + attrsString + '>' + paramsString + '</object>';
	};

	vjs.Flash.streamFromParts = function(connection, stream) {
	  return connection + '&' + stream;
	};

	vjs.Flash.streamToParts = function(src) {
	  var parts = {
	    connection: '',
	    stream: ''
	  };

	  if (! src) {
	    return parts;
	  }

	  // Look for the normal URL separator we expect, '&'.
	  // If found, we split the URL into two pieces around the
	  // first '&'.
	  var connEnd = src.indexOf('&');
	  var streamBegin;
	  if (connEnd !== -1) {
	    streamBegin = connEnd + 1;
	  }
	  else {
	    // If there's not a '&', we use the last '/' as the delimiter.
	    connEnd = streamBegin = src.lastIndexOf('/') + 1;
	    if (connEnd === 0) {
	      // really, there's not a '/'?
	      connEnd = streamBegin = src.length;
	    }
	  }
	  parts.connection = src.substring(0, connEnd);
	  parts.stream = src.substring(streamBegin, src.length);

	  return parts;
	};

	vjs.Flash.isStreamingType = function(srcType) {
	  return srcType in vjs.Flash.streamingFormats;
	};

	// RTMP has four variations, any string starting
	// with one of these protocols should be valid
	vjs.Flash.RTMP_RE = /^rtmp[set]?:\/\//i;

	vjs.Flash.isStreamingSrc = function(src) {
	  return vjs.Flash.RTMP_RE.test(src);
	};
	/**
	 * @constructor
	 */
	vjs.MediaLoader = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options, ready){
	    vjs.Component.call(this, player, options, ready);

	    // If there are no sources when the player is initialized,
	    // load the first supported playback technology.
	    if (!player.options_['sources'] || player.options_['sources'].length === 0) {
	      for (var i=0,j=player.options_['techOrder']; i<j.length; i++) {
	        var techName = vjs.capitalize(j[i]),
	            tech = window['videojs'][techName];

	        // Check if the browser supports this technology
	        if (tech && tech.isSupported()) {
	          player.loadTech(techName);
	          break;
	        }
	      }
	    } else {
	      // // Loop through playback technologies (HTML5, Flash) and check for support.
	      // // Then load the best source.
	      // // A few assumptions here:
	      // //   All playback technologies respect preload false.
	      player.src(player.options_['sources']);
	    }
	  }
	});/**
	 * @fileoverview Text Tracks
	 * Text tracks are tracks of timed text events.
	 * Captions - text displayed over the video for the hearing impared
	 * Subtitles - text displayed over the video for those who don't understand langauge in the video
	 * Chapters - text displayed in a menu allowing the user to jump to particular points (chapters) in the video
	 * Descriptions (not supported yet) - audio descriptions that are read back to the user by a screen reading device
	 */

	// Player Additions - Functions add to the player object for easier access to tracks

	/**
	 * List of associated text tracks
	 * @type {Array}
	 * @private
	 */
	vjs.Player.prototype.textTracks_;

	/**
	 * Get an array of associated text tracks. captions, subtitles, chapters, descriptions
	 * http://www.w3.org/html/wg/drafts/html/master/embedded-content-0.html#dom-media-texttracks
	 * @return {Array}           Array of track objects
	 */
	vjs.Player.prototype.textTracks = function(){
	  this.textTracks_ = this.textTracks_ || [];
	  return this.textTracks_;
	};

	/**
	 * Add a text track
	 * In addition to the W3C settings we allow adding additional info through options.
	 * http://www.w3.org/html/wg/drafts/html/master/embedded-content-0.html#dom-media-addtexttrack
	 * @param {String}  kind        Captions, subtitles, chapters, descriptions, or metadata
	 * @param {String=} label       Optional label
	 * @param {String=} language    Optional language
	 * @param {Object=} options     Additional track options, like src
	 */
	vjs.Player.prototype.addTextTrack = function(kind, label, language, options){
	  var tracks = this.textTracks_ = this.textTracks_ || [];
	  options = options || {};

	  options['kind'] = kind;
	  options['label'] = label;
	  options['language'] = language;

	  // HTML5 Spec says default to subtitles.
	  // Uppercase first letter to match class names
	  var Kind = vjs.capitalize(kind || 'subtitles');

	  // Create correct texttrack class. CaptionsTrack, etc.
	  var track = new window['videojs'][Kind + 'Track'](this, options);

	  tracks.push(track);

	  // If track.dflt() is set, start showing immediately
	  // TODO: Add a process to deterime the best track to show for the specific kind
	  // Incase there are mulitple defaulted tracks of the same kind
	  // Or the user has a set preference of a specific language that should override the default
	  // if (track.dflt()) {
	  //   this.ready(vjs.bind(track, track.show));
	  // }

	  return track;
	};

	/**
	 * Add an array of text tracks. captions, subtitles, chapters, descriptions
	 * Track objects will be stored in the player.textTracks() array
	 * @param {Array} trackList Array of track elements or objects (fake track elements)
	 */
	vjs.Player.prototype.addTextTracks = function(trackList){
	  var trackObj;

	  for (var i = 0; i < trackList.length; i++) {
	    trackObj = trackList[i];
	    this.addTextTrack(trackObj['kind'], trackObj['label'], trackObj['language'], trackObj);
	  }

	  return this;
	};

	// Show a text track
	// disableSameKind: disable all other tracks of the same kind. Value should be a track kind (captions, etc.)
	vjs.Player.prototype.showTextTrack = function(id, disableSameKind){
	  var tracks = this.textTracks_,
	      i = 0,
	      j = tracks.length,
	      track, showTrack, kind;

	  // Find Track with same ID
	  for (;i<j;i++) {
	    track = tracks[i];
	    if (track.id() === id) {
	      track.show();
	      showTrack = track;

	    // Disable tracks of the same kind
	    } else if (disableSameKind && track.kind() == disableSameKind && track.mode() > 0) {
	      track.disable();
	    }
	  }

	  // Get track kind from shown track or disableSameKind
	  kind = (showTrack) ? showTrack.kind() : ((disableSameKind) ? disableSameKind : false);

	  // Trigger trackchange event, captionstrackchange, subtitlestrackchange, etc.
	  if (kind) {
	    this.trigger(kind+'trackchange');
	  }

	  return this;
	};

	/**
	 * Track Class
	 * Contains track methods for loading, showing, parsing cues of tracks
	 * @param {vjs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	vjs.TextTrack = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.Component.call(this, player, options);

	    // Apply track info to track object
	    // Options will often be a track element

	    // Build ID if one doesn't exist
	    this.id_ = options['id'] || ('vjs_' + options['kind'] + '_' + options['language'] + '_' + vjs.guid++);
	    this.src_ = options['src'];
	    // 'default' is a reserved keyword in js so we use an abbreviated version
	    this.dflt_ = options['default'] || options['dflt'];
	    this.title_ = options['title'];
	    this.language_ = options['srclang'];
	    this.label_ = options['label'];
	    this.cues_ = [];
	    this.activeCues_ = [];
	    this.readyState_ = 0;
	    this.mode_ = 0;

	    this.player_.on('fullscreenchange', vjs.bind(this, this.adjustFontSize));
	  }
	});

	/**
	 * Track kind value. Captions, subtitles, etc.
	 * @private
	 */
	vjs.TextTrack.prototype.kind_;

	/**
	 * Get the track kind value
	 * @return {String}
	 */
	vjs.TextTrack.prototype.kind = function(){
	  return this.kind_;
	};

	/**
	 * Track src value
	 * @private
	 */
	vjs.TextTrack.prototype.src_;

	/**
	 * Get the track src value
	 * @return {String}
	 */
	vjs.TextTrack.prototype.src = function(){
	  return this.src_;
	};

	/**
	 * Track default value
	 * If default is used, subtitles/captions to start showing
	 * @private
	 */
	vjs.TextTrack.prototype.dflt_;

	/**
	 * Get the track default value
	 * 'default' is a reserved keyword
	 * @return {Boolean}
	 */
	vjs.TextTrack.prototype.dflt = function(){
	  return this.dflt_;
	};

	/**
	 * Track title value
	 * @private
	 */
	vjs.TextTrack.prototype.title_;

	/**
	 * Get the track title value
	 * @return {String}
	 */
	vjs.TextTrack.prototype.title = function(){
	  return this.title_;
	};

	/**
	 * Language - two letter string to represent track language, e.g. 'en' for English
	 * Spec def: readonly attribute DOMString language;
	 * @private
	 */
	vjs.TextTrack.prototype.language_;

	/**
	 * Get the track language value
	 * @return {String}
	 */
	vjs.TextTrack.prototype.language = function(){
	  return this.language_;
	};

	/**
	 * Track label e.g. 'English'
	 * Spec def: readonly attribute DOMString label;
	 * @private
	 */
	vjs.TextTrack.prototype.label_;

	/**
	 * Get the track label value
	 * @return {String}
	 */
	vjs.TextTrack.prototype.label = function(){
	  return this.label_;
	};

	/**
	 * All cues of the track. Cues have a startTime, endTime, text, and other properties.
	 * Spec def: readonly attribute TextTrackCueList cues;
	 * @private
	 */
	vjs.TextTrack.prototype.cues_;

	/**
	 * Get the track cues
	 * @return {Array}
	 */
	vjs.TextTrack.prototype.cues = function(){
	  return this.cues_;
	};

	/**
	 * ActiveCues is all cues that are currently showing
	 * Spec def: readonly attribute TextTrackCueList activeCues;
	 * @private
	 */
	vjs.TextTrack.prototype.activeCues_;

	/**
	 * Get the track active cues
	 * @return {Array}
	 */
	vjs.TextTrack.prototype.activeCues = function(){
	  return this.activeCues_;
	};

	/**
	 * ReadyState describes if the text file has been loaded
	 * const unsigned short NONE = 0;
	 * const unsigned short LOADING = 1;
	 * const unsigned short LOADED = 2;
	 * const unsigned short ERROR = 3;
	 * readonly attribute unsigned short readyState;
	 * @private
	 */
	vjs.TextTrack.prototype.readyState_;

	/**
	 * Get the track readyState
	 * @return {Number}
	 */
	vjs.TextTrack.prototype.readyState = function(){
	  return this.readyState_;
	};

	/**
	 * Mode describes if the track is showing, hidden, or disabled
	 * const unsigned short OFF = 0;
	 * const unsigned short HIDDEN = 1; (still triggering cuechange events, but not visible)
	 * const unsigned short SHOWING = 2;
	 * attribute unsigned short mode;
	 * @private
	 */
	vjs.TextTrack.prototype.mode_;

	/**
	 * Get the track mode
	 * @return {Number}
	 */
	vjs.TextTrack.prototype.mode = function(){
	  return this.mode_;
	};

	/**
	 * Change the font size of the text track to make it larger when playing in fullscreen mode
	 * and restore it to its normal size when not in fullscreen mode.
	 */
	vjs.TextTrack.prototype.adjustFontSize = function(){
	    if (this.player_.isFullScreen) {
	        // Scale the font by the same factor as increasing the video width to the full screen window width.
	        // Additionally, multiply that factor by 1.4, which is the default font size for
	        // the caption track (from the CSS)
	        this.el_.style.fontSize = screen.width / this.player_.width() * 1.4 * 100 + '%';
	    } else {
	        // Change the font size of the text track back to its original non-fullscreen size
	        this.el_.style.fontSize = '';
	    }
	};

	/**
	 * Create basic div to hold cue text
	 * @return {Element}
	 */
	vjs.TextTrack.prototype.createEl = function(){
	  return vjs.Component.prototype.createEl.call(this, 'div', {
	    className: 'vjs-' + this.kind_ + ' vjs-text-track'
	  });
	};

	/**
	 * Show: Mode Showing (2)
	 * Indicates that the text track is active. If no attempt has yet been made to obtain the track's cues, the user agent will perform such an attempt momentarily.
	 * The user agent is maintaining a list of which cues are active, and events are being fired accordingly.
	 * In addition, for text tracks whose kind is subtitles or captions, the cues are being displayed over the video as appropriate;
	 * for text tracks whose kind is descriptions, the user agent is making the cues available to the user in a non-visual fashion;
	 * and for text tracks whose kind is chapters, the user agent is making available to the user a mechanism by which the user can navigate to any point in the media resource by selecting a cue.
	 * The showing by default state is used in conjunction with the default attribute on track elements to indicate that the text track was enabled due to that attribute.
	 * This allows the user agent to override the state if a later track is discovered that is more appropriate per the user's preferences.
	 */
	vjs.TextTrack.prototype.show = function(){
	  this.activate();

	  this.mode_ = 2;

	  // Show element.
	  vjs.Component.prototype.show.call(this);
	};

	/**
	 * Hide: Mode Hidden (1)
	 * Indicates that the text track is active, but that the user agent is not actively displaying the cues.
	 * If no attempt has yet been made to obtain the track's cues, the user agent will perform such an attempt momentarily.
	 * The user agent is maintaining a list of which cues are active, and events are being fired accordingly.
	 */
	vjs.TextTrack.prototype.hide = function(){
	  // When hidden, cues are still triggered. Disable to stop triggering.
	  this.activate();

	  this.mode_ = 1;

	  // Hide element.
	  vjs.Component.prototype.hide.call(this);
	};

	/**
	 * Disable: Mode Off/Disable (0)
	 * Indicates that the text track is not active. Other than for the purposes of exposing the track in the DOM, the user agent is ignoring the text track.
	 * No cues are active, no events are fired, and the user agent will not attempt to obtain the track's cues.
	 */
	vjs.TextTrack.prototype.disable = function(){
	  // If showing, hide.
	  if (this.mode_ == 2) { this.hide(); }

	  // Stop triggering cues
	  this.deactivate();

	  // Switch Mode to Off
	  this.mode_ = 0;
	};

	/**
	 * Turn on cue tracking. Tracks that are showing OR hidden are active.
	 */
	vjs.TextTrack.prototype.activate = function(){
	  // Load text file if it hasn't been yet.
	  if (this.readyState_ === 0) { this.load(); }

	  // Only activate if not already active.
	  if (this.mode_ === 0) {
	    // Update current cue on timeupdate
	    // Using unique ID for bind function so other tracks don't remove listener
	    this.player_.on('timeupdate', vjs.bind(this, this.update, this.id_));

	    // Reset cue time on media end
	    this.player_.on('ended', vjs.bind(this, this.reset, this.id_));

	    // Add to display
	    if (this.kind_ === 'captions' || this.kind_ === 'subtitles') {
	      this.player_.getChild('textTrackDisplay').addChild(this);
	    }
	  }
	};

	/**
	 * Turn off cue tracking.
	 */
	vjs.TextTrack.prototype.deactivate = function(){
	  // Using unique ID for bind function so other tracks don't remove listener
	  this.player_.off('timeupdate', vjs.bind(this, this.update, this.id_));
	  this.player_.off('ended', vjs.bind(this, this.reset, this.id_));
	  this.reset(); // Reset

	  // Remove from display
	  this.player_.getChild('textTrackDisplay').removeChild(this);
	};

	// A readiness state
	// One of the following:
	//
	// Not loaded
	// Indicates that the text track is known to exist (e.g. it has been declared with a track element), but its cues have not been obtained.
	//
	// Loading
	// Indicates that the text track is loading and there have been no fatal errors encountered so far. Further cues might still be added to the track.
	//
	// Loaded
	// Indicates that the text track has been loaded with no fatal errors. No new cues will be added to the track except if the text track corresponds to a MutableTextTrack object.
	//
	// Failed to load
	// Indicates that the text track was enabled, but when the user agent attempted to obtain it, this failed in some way (e.g. URL could not be resolved, network error, unknown text track format). Some or all of the cues are likely missing and will not be obtained.
	vjs.TextTrack.prototype.load = function(){

	  // Only load if not loaded yet.
	  if (this.readyState_ === 0) {
	    this.readyState_ = 1;
	    vjs.get(this.src_, vjs.bind(this, this.parseCues), vjs.bind(this, this.onError));
	  }

	};

	vjs.TextTrack.prototype.onError = function(err){
	  this.error = err;
	  this.readyState_ = 3;
	  this.trigger('error');
	};

	// Parse the WebVTT text format for cue times.
	// TODO: Separate parser into own class so alternative timed text formats can be used. (TTML, DFXP)
	vjs.TextTrack.prototype.parseCues = function(srcContent) {
	  var cue, time, text,
	      lines = srcContent.split('\n'),
	      line = '', id;

	  for (var i=1, j=lines.length; i<j; i++) {
	    // Line 0 should be 'WEBVTT', so skipping i=0

	    line = vjs.trim(lines[i]); // Trim whitespace and linebreaks

	    if (line) { // Loop until a line with content

	      // First line could be an optional cue ID
	      // Check if line has the time separator
	      if (line.indexOf('-->') == -1) {
	        id = line;
	        // Advance to next line for timing.
	        line = vjs.trim(lines[++i]);
	      } else {
	        id = this.cues_.length;
	      }

	      // First line - Number
	      cue = {
	        id: id, // Cue Number
	        index: this.cues_.length // Position in Array
	      };

	      // Timing line
	      time = line.split(' --> ');
	      cue.startTime = this.parseCueTime(time[0]);
	      cue.endTime = this.parseCueTime(time[1]);

	      // Additional lines - Cue Text
	      text = [];

	      // Loop until a blank line or end of lines
	      // Assumeing trim('') returns false for blank lines
	      while (lines[++i] && (line = vjs.trim(lines[i]))) {
	        text.push(line);
	      }

	      cue.text = text.join('<br/>');

	      // Add this cue
	      this.cues_.push(cue);
	    }
	  }

	  this.readyState_ = 2;
	  this.trigger('loaded');
	};


	vjs.TextTrack.prototype.parseCueTime = function(timeText) {
	  var parts = timeText.split(':'),
	      time = 0,
	      hours, minutes, other, seconds, ms;

	  // Check if optional hours place is included
	  // 00:00:00.000 vs. 00:00.000
	  if (parts.length == 3) {
	    hours = parts[0];
	    minutes = parts[1];
	    other = parts[2];
	  } else {
	    hours = 0;
	    minutes = parts[0];
	    other = parts[1];
	  }

	  // Break other (seconds, milliseconds, and flags) by spaces
	  // TODO: Make additional cue layout settings work with flags
	  other = other.split(/\s+/);
	  // Remove seconds. Seconds is the first part before any spaces.
	  seconds = other.splice(0,1)[0];
	  // Could use either . or , for decimal
	  seconds = seconds.split(/\.|,/);
	  // Get milliseconds
	  ms = parseFloat(seconds[1]);
	  seconds = seconds[0];

	  // hours => seconds
	  time += parseFloat(hours) * 3600;
	  // minutes => seconds
	  time += parseFloat(minutes) * 60;
	  // Add seconds
	  time += parseFloat(seconds);
	  // Add milliseconds
	  if (ms) { time += ms/1000; }

	  return time;
	};

	// Update active cues whenever timeupdate events are triggered on the player.
	vjs.TextTrack.prototype.update = function(){
	  if (this.cues_.length > 0) {

	    // Get curent player time
	    var time = this.player_.currentTime();

	    // Check if the new time is outside the time box created by the the last update.
	    if (this.prevChange === undefined || time < this.prevChange || this.nextChange <= time) {
	      var cues = this.cues_,

	          // Create a new time box for this state.
	          newNextChange = this.player_.duration(), // Start at beginning of the timeline
	          newPrevChange = 0, // Start at end

	          reverse = false, // Set the direction of the loop through the cues. Optimized the cue check.
	          newCues = [], // Store new active cues.

	          // Store where in the loop the current active cues are, to provide a smart starting point for the next loop.
	          firstActiveIndex, lastActiveIndex,
	          cue, i; // Loop vars

	      // Check if time is going forwards or backwards (scrubbing/rewinding)
	      // If we know the direction we can optimize the starting position and direction of the loop through the cues array.
	      if (time >= this.nextChange || this.nextChange === undefined) { // NextChange should happen
	        // Forwards, so start at the index of the first active cue and loop forward
	        i = (this.firstActiveIndex !== undefined) ? this.firstActiveIndex : 0;
	      } else {
	        // Backwards, so start at the index of the last active cue and loop backward
	        reverse = true;
	        i = (this.lastActiveIndex !== undefined) ? this.lastActiveIndex : cues.length - 1;
	      }

	      while (true) { // Loop until broken
	        cue = cues[i];

	        // Cue ended at this point
	        if (cue.endTime <= time) {
	          newPrevChange = Math.max(newPrevChange, cue.endTime);

	          if (cue.active) {
	            cue.active = false;
	          }

	          // No earlier cues should have an active start time.
	          // Nevermind. Assume first cue could have a duration the same as the video.
	          // In that case we need to loop all the way back to the beginning.
	          // if (reverse && cue.startTime) { break; }

	        // Cue hasn't started
	        } else if (time < cue.startTime) {
	          newNextChange = Math.min(newNextChange, cue.startTime);

	          if (cue.active) {
	            cue.active = false;
	          }

	          // No later cues should have an active start time.
	          if (!reverse) { break; }

	        // Cue is current
	        } else {

	          if (reverse) {
	            // Add cue to front of array to keep in time order
	            newCues.splice(0,0,cue);

	            // If in reverse, the first current cue is our lastActiveCue
	            if (lastActiveIndex === undefined) { lastActiveIndex = i; }
	            firstActiveIndex = i;
	          } else {
	            // Add cue to end of array
	            newCues.push(cue);

	            // If forward, the first current cue is our firstActiveIndex
	            if (firstActiveIndex === undefined) { firstActiveIndex = i; }
	            lastActiveIndex = i;
	          }

	          newNextChange = Math.min(newNextChange, cue.endTime);
	          newPrevChange = Math.max(newPrevChange, cue.startTime);

	          cue.active = true;
	        }

	        if (reverse) {
	          // Reverse down the array of cues, break if at first
	          if (i === 0) { break; } else { i--; }
	        } else {
	          // Walk up the array fo cues, break if at last
	          if (i === cues.length - 1) { break; } else { i++; }
	        }

	      }

	      this.activeCues_ = newCues;
	      this.nextChange = newNextChange;
	      this.prevChange = newPrevChange;
	      this.firstActiveIndex = firstActiveIndex;
	      this.lastActiveIndex = lastActiveIndex;

	      this.updateDisplay();

	      this.trigger('cuechange');
	    }
	  }
	};

	// Add cue HTML to display
	vjs.TextTrack.prototype.updateDisplay = function(){
	  var cues = this.activeCues_,
	      html = '',
	      i=0,j=cues.length;

	  for (;i<j;i++) {
	    html += '<span class="vjs-tt-cue">'+cues[i].text+'</span>';
	  }

	  this.el_.innerHTML = html;
	};

	// Set all loop helper values back
	vjs.TextTrack.prototype.reset = function(){
	  this.nextChange = 0;
	  this.prevChange = this.player_.duration();
	  this.firstActiveIndex = 0;
	  this.lastActiveIndex = 0;
	};

	// Create specific track types
	/**
	 * @constructor
	 */
	vjs.CaptionsTrack = vjs.TextTrack.extend();
	vjs.CaptionsTrack.prototype.kind_ = 'captions';
	// Exporting here because Track creation requires the track kind
	// to be available on global object. e.g. new window['videojs'][Kind + 'Track']

	/**
	 * @constructor
	 */
	vjs.SubtitlesTrack = vjs.TextTrack.extend();
	vjs.SubtitlesTrack.prototype.kind_ = 'subtitles';

	/**
	 * @constructor
	 */
	vjs.ChaptersTrack = vjs.TextTrack.extend();
	vjs.ChaptersTrack.prototype.kind_ = 'chapters';


	/* Text Track Display
	============================================================================= */
	// Global container for both subtitle and captions text. Simple div container.

	/**
	 * @constructor
	 */
	vjs.TextTrackDisplay = vjs.Component.extend({
	  /** @constructor */
	  init: function(player, options, ready){
	    vjs.Component.call(this, player, options, ready);

	    // This used to be called during player init, but was causing an error
	    // if a track should show by default and the display hadn't loaded yet.
	    // Should probably be moved to an external track loader when we support
	    // tracks that don't need a display.
	    if (player.options_['tracks'] && player.options_['tracks'].length > 0) {
	      this.player_.addTextTracks(player.options_['tracks']);
	    }
	  }
	});

	vjs.TextTrackDisplay.prototype.createEl = function(){
	  return vjs.Component.prototype.createEl.call(this, 'div', {
	    className: 'vjs-text-track-display'
	  });
	};


	/* Text Track Menu Items
	============================================================================= */
	/**
	 * @constructor
	 */
	vjs.TextTrackMenuItem = vjs.MenuItem.extend({
	  /** @constructor */
	  init: function(player, options){
	    var track = this.track = options['track'];

	    // Modify options for parent MenuItem class's init.
	    options['label'] = track.label();
	    options['selected'] = track.dflt();
	    vjs.MenuItem.call(this, player, options);

	    this.player_.on(track.kind() + 'trackchange', vjs.bind(this, this.update));
	  }
	});

	vjs.TextTrackMenuItem.prototype.onClick = function(){
	  vjs.MenuItem.prototype.onClick.call(this);
	  this.player_.showTextTrack(this.track.id_, this.track.kind());
	};

	vjs.TextTrackMenuItem.prototype.update = function(){
	  this.selected(this.track.mode() == 2);
	};

	/**
	 * @constructor
	 */
	vjs.OffTextTrackMenuItem = vjs.TextTrackMenuItem.extend({
	  /** @constructor */
	  init: function(player, options){
	    // Create pseudo track info
	    // Requires options['kind']
	    options['track'] = {
	      kind: function() { return options['kind']; },
	      player: player,
	      label: function(){ return options['kind'] + ' off'; },
	      dflt: function(){ return false; },
	      mode: function(){ return false; }
	    };
	    vjs.TextTrackMenuItem.call(this, player, options);
	    this.selected(true);
	  }
	});

	vjs.OffTextTrackMenuItem.prototype.onClick = function(){
	  vjs.TextTrackMenuItem.prototype.onClick.call(this);
	  this.player_.showTextTrack(this.track.id_, this.track.kind());
	};

	vjs.OffTextTrackMenuItem.prototype.update = function(){
	  var tracks = this.player_.textTracks(),
	      i=0, j=tracks.length, track,
	      off = true;

	  for (;i<j;i++) {
	    track = tracks[i];
	    if (track.kind() == this.track.kind() && track.mode() == 2) {
	      off = false;
	    }
	  }

	  this.selected(off);
	};

	/* Captions Button
	================================================================================ */
	/**
	 * @constructor
	 */
	vjs.TextTrackButton = vjs.MenuButton.extend({
	  /** @constructor */
	  init: function(player, options){
	    vjs.MenuButton.call(this, player, options);

	    if (this.items.length <= 1) {
	      this.hide();
	    }
	  }
	});

	// vjs.TextTrackButton.prototype.buttonPressed = false;

	// vjs.TextTrackButton.prototype.createMenu = function(){
	//   var menu = new vjs.Menu(this.player_);

	//   // Add a title list item to the top
	//   // menu.el().appendChild(vjs.createEl('li', {
	//   //   className: 'vjs-menu-title',
	//   //   innerHTML: vjs.capitalize(this.kind_),
	//   //   tabindex: -1
	//   // }));

	//   this.items = this.createItems();

	//   // Add menu items to the menu
	//   for (var i = 0; i < this.items.length; i++) {
	//     menu.addItem(this.items[i]);
	//   }

	//   // Add list to element
	//   this.addChild(menu);

	//   return menu;
	// };

	// Create a menu item for each text track
	vjs.TextTrackButton.prototype.createItems = function(){
	  var items = [], track;

	  // Add an OFF menu item to turn all tracks off
	  items.push(new vjs.OffTextTrackMenuItem(this.player_, { 'kind': this.kind_ }));

	  for (var i = 0; i < this.player_.textTracks().length; i++) {
	    track = this.player_.textTracks()[i];
	    if (track.kind() === this.kind_) {
	      items.push(new vjs.TextTrackMenuItem(this.player_, {
	        'track': track
	      }));
	    }
	  }

	  return items;
	};

	/**
	 * @constructor
	 */
	vjs.CaptionsButton = vjs.TextTrackButton.extend({
	  /** @constructor */
	  init: function(player, options, ready){
	    vjs.TextTrackButton.call(this, player, options, ready);
	    this.el_.setAttribute('aria-label','Captions Menu');
	  }
	});
	vjs.CaptionsButton.prototype.kind_ = 'captions';
	vjs.CaptionsButton.prototype.buttonText = 'Captions';
	vjs.CaptionsButton.prototype.className = 'vjs-captions-button';

	/**
	 * @constructor
	 */
	vjs.SubtitlesButton = vjs.TextTrackButton.extend({
	  /** @constructor */
	  init: function(player, options, ready){
	    vjs.TextTrackButton.call(this, player, options, ready);
	    this.el_.setAttribute('aria-label','Subtitles Menu');
	  }
	});
	vjs.SubtitlesButton.prototype.kind_ = 'subtitles';
	vjs.SubtitlesButton.prototype.buttonText = 'Subtitles';
	vjs.SubtitlesButton.prototype.className = 'vjs-subtitles-button';

	// Chapters act much differently than other text tracks
	// Cues are navigation vs. other tracks of alternative languages
	/**
	 * @constructor
	 */
	vjs.ChaptersButton = vjs.TextTrackButton.extend({
	  /** @constructor */
	  init: function(player, options, ready){
	    vjs.TextTrackButton.call(this, player, options, ready);
	    this.el_.setAttribute('aria-label','Chapters Menu');
	  }
	});
	vjs.ChaptersButton.prototype.kind_ = 'chapters';
	vjs.ChaptersButton.prototype.buttonText = 'Chapters';
	vjs.ChaptersButton.prototype.className = 'vjs-chapters-button';

	// Create a menu item for each text track
	vjs.ChaptersButton.prototype.createItems = function(){
	  var items = [], track;

	  for (var i = 0; i < this.player_.textTracks().length; i++) {
	    track = this.player_.textTracks()[i];
	    if (track.kind() === this.kind_) {
	      items.push(new vjs.TextTrackMenuItem(this.player_, {
	        'track': track
	      }));
	    }
	  }

	  return items;
	};

	vjs.ChaptersButton.prototype.createMenu = function(){
	  var tracks = this.player_.textTracks(),
	      i = 0,
	      j = tracks.length,
	      track, chaptersTrack,
	      items = this.items = [];

	  for (;i<j;i++) {
	    track = tracks[i];
	    if (track.kind() == this.kind_ && track.dflt()) {
	      if (track.readyState() < 2) {
	        this.chaptersTrack = track;
	        track.on('loaded', vjs.bind(this, this.createMenu));
	        return;
	      } else {
	        chaptersTrack = track;
	        break;
	      }
	    }
	  }

	  var menu = this.menu = new vjs.Menu(this.player_);

	  menu.el_.appendChild(vjs.createEl('li', {
	    className: 'vjs-menu-title',
	    innerHTML: vjs.capitalize(this.kind_),
	    tabindex: -1
	  }));

	  if (chaptersTrack) {
	    var cues = chaptersTrack.cues_, cue, mi;
	    i = 0;
	    j = cues.length;

	    for (;i<j;i++) {
	      cue = cues[i];

	      mi = new vjs.ChaptersTrackMenuItem(this.player_, {
	        'track': chaptersTrack,
	        'cue': cue
	      });

	      items.push(mi);

	      menu.addChild(mi);
	    }
	  }

	  if (this.items.length > 0) {
	    this.show();
	  }

	  return menu;
	};


	/**
	 * @constructor
	 */
	vjs.ChaptersTrackMenuItem = vjs.MenuItem.extend({
	  /** @constructor */
	  init: function(player, options){
	    var track = this.track = options['track'],
	        cue = this.cue = options['cue'],
	        currentTime = player.currentTime();

	    // Modify options for parent MenuItem class's init.
	    options['label'] = cue.text;
	    options['selected'] = (cue.startTime <= currentTime && currentTime < cue.endTime);
	    vjs.MenuItem.call(this, player, options);

	    track.on('cuechange', vjs.bind(this, this.update));
	  }
	});

	vjs.ChaptersTrackMenuItem.prototype.onClick = function(){
	  vjs.MenuItem.prototype.onClick.call(this);
	  this.player_.currentTime(this.cue.startTime);
	  this.update(this.cue.startTime);
	};

	vjs.ChaptersTrackMenuItem.prototype.update = function(){
	  var cue = this.cue,
	      currentTime = this.player_.currentTime();

	  // vjs.log(currentTime, cue.startTime);
	  this.selected(cue.startTime <= currentTime && currentTime < cue.endTime);
	};

	// Add Buttons to controlBar
	vjs.obj.merge(vjs.ControlBar.prototype.options_['children'], {
	  'subtitlesButton': {},
	  'captionsButton': {},
	  'chaptersButton': {}
	});

	// vjs.Cue = vjs.Component.extend({
	//   /** @constructor */
	//   init: function(player, options){
	//     vjs.Component.call(this, player, options);
	//   }
	// });
	/**
	 * @fileoverview Add JSON support
	 * @suppress {undefinedVars}
	 * (Compiler doesn't like JSON not being declared)
	 */

	/**
	 * Javascript JSON implementation
	 * (Parse Method Only)
	 * https://github.com/douglascrockford/JSON-js/blob/master/json2.js
	 * Only using for parse method when parsing data-setup attribute JSON.
	 * @type {Object}
	 * @suppress {undefinedVars}
	 */
	vjs.JSON;

	/**
	 * @suppress {undefinedVars}
	 */
	if (typeof window.JSON !== 'undefined' && window.JSON.parse === 'function') {
	  vjs.JSON = window.JSON;

	} else {
	  vjs.JSON = {};

	  var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

	  vjs.JSON.parse = function (text, reviver) {
	      var j;

	      function walk(holder, key) {
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
	      text = String(text);
	      cx.lastIndex = 0;
	      if (cx.test(text)) {
	          text = text.replace(cx, function (a) {
	              return '\\u' +
	                  ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
	          });
	      }

	      if (/^[\],:{}\s]*$/
	              .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
	                  .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
	                  .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

	          j = eval('(' + text + ')');

	          return typeof reviver === 'function' ?
	              walk({'': j}, '') : j;
	      }

	      throw new SyntaxError('JSON.parse(): invalid or malformed JSON data');
	  };
	}
	/**
	 * @fileoverview Functions for automatically setting up a player
	 * based on the data-setup attribute of the video tag
	 */

	// Automatically set up any tags that have a data-setup attribute
	vjs.autoSetup = function(){
	  var options, vid, player,
	      vids = document.getElementsByTagName('video');

	  // Check if any media elements exist
	  if (vids && vids.length > 0) {

	    for (var i=0,j=vids.length; i<j; i++) {
	      vid = vids[i];

	      // Check if element exists, has getAttribute func.
	      // IE seems to consider typeof el.getAttribute == 'object' instead of 'function' like expected, at least when loading the player immediately.
	      if (vid && vid.getAttribute) {

	        // Make sure this player hasn't already been set up.
	        if (vid['player'] === undefined) {
	          options = vid.getAttribute('data-setup');

	          // Check if data-setup attr exists.
	          // We only auto-setup if they've added the data-setup attr.
	          if (options !== null) {

	            // Parse options JSON
	            // If empty string, make it a parsable json object.
	            options = vjs.JSON.parse(options || '{}');

	            // Create new video.js instance.
	            player = videojs(vid, options);
	          }
	        }

	      // If getAttribute isn't defined, we need to wait for the DOM.
	      } else {
	        vjs.autoSetupTimeout(1);
	        break;
	      }
	    }

	  // No videos were found, so keep looping unless page is finisehd loading.
	  } else if (!vjs.windowLoaded) {
	    vjs.autoSetupTimeout(1);
	  }
	};

	// Pause to let the DOM keep processing
	vjs.autoSetupTimeout = function(wait){
	  setTimeout(vjs.autoSetup, wait);
	};

	if (document.readyState === 'complete') {
	  vjs.windowLoaded = true;
	} else {
	  vjs.one(window, 'load', function(){
	    vjs.windowLoaded = true;
	  });
	}

	// Run Auto-load players
	// You have to wait at least once in case this script is loaded after your video in the DOM (weird behavior only with minified version)
	vjs.autoSetupTimeout(1);
	vjs.plugin = function(name, init){
	  vjs.Player.prototype[name] = init;
	};


/***/ },
/* 45 */
/***/ function(module, exports) {

	/**
	 * @fileoverview YouTube Media Controller - Wrapper for YouTube Media API
	 */

	/**
	 * YouTube Media Controller - Wrapper for YouTube Media API
	 * @param {videojs.Player|Object} player
	 * @param {Object=} options
	 * @param {Function=} ready
	 * @constructor
	 */
	videojs.Youtube = videojs.MediaTechController.extend({
	  /** @constructor */
	  init: function(player, options, ready){
	    videojs.MediaTechController.call(this, player, options, ready);
	    
	    // No event is triggering this for YouTube
	    this.features['progressEvents'] = false;
	    this.features['timeupdateEvents'] = false;

	    // Copy the JavaScript options if they exists
	    if (typeof options['source'] != 'undefined') {
	      for (var key in options['source']) {
	        player.options()[key] = options['source'][key];
	      }
	    }

	    this.userQuality = videojs.Youtube.convertQualityName(player.options()['quality']);

	    // Save those for internal usage
	    this.player_ = player;
	    this.player_el_ = document.getElementById(player.id());
	    this.player_el_.className += ' vjs-youtube';

	    // Mobile devices are using their own native players
	    if (!!navigator.userAgent.match(/iPhone/i) || !!navigator.userAgent.match(/iPad/i) || !!navigator.userAgent.match(/iPod/i) || !!navigator.userAgent.match(/Android.*AppleWebKit/i)) {
	      player.options()['ytcontrols'] = true;
	    }

	    // Create the Quality button
	    this.qualityButton = document.createElement('div');
	    this.qualityButton.setAttribute('class', 'vjs-quality-button vjs-menu-button vjs-control');
	    this.qualityButton.setAttribute('tabindex', 0);
	    
	    var qualityContent = document.createElement('div');
	    this.qualityButton.appendChild(qualityContent);
	    
	    this.qualityTitle = document.createElement('span');
	    qualityContent.appendChild(this.qualityTitle);
	    
	    var qualityMenu = document.createElement('div');
	    qualityMenu.setAttribute('class', 'vjs-menu');
	    this.qualityButton.appendChild(qualityMenu);
	    
	    this.qualityMenuContent = document.createElement('ul');
	    this.qualityMenuContent.setAttribute('class', 'vjs-menu-content');
	    qualityMenu.appendChild(this.qualityMenuContent);

	    this.id_ = this.player_.id() + '_youtube_api';

	    this.el_ = videojs.Component.prototype.createEl('iframe', {
	      id: this.id_,
	      className: 'vjs-tech',
	      scrolling: 'no',
	      marginWidth: 0,
	      marginHeight: 0,
	      frameBorder: 0,
	      webkitAllowFullScreen: 'true',
	      mozallowfullscreen: 'true',
	      allowFullScreen: 'true'
	    });

	    // This makes sure the mousemove is not lost within the iframe
	    // Only way to make sure the control bar shows when we come back in the video player
	    this.iframeblocker = videojs.Component.prototype.createEl('div', {
	      className: 'iframeblocker'
	    });

	    // Make sure to not block the play or pause
	    var self = this;
	    var toggleThis = function() {
	      if (self.paused()) {
	        self.play();
	      } else {
	        self.pause();
	      }
	    };

	    this.iframeblocker.addEventListener('click', toggleThis);
	    this.iframeblocker.addEventListener('mousemove', function(e) {
	      if (!self.player_.userActive()) {
	        self.player_.userActive(true);
	      }
	      
	      e.stopPropagation();
	      e.preventDefault();
	    });

	    if (!this.player_.options()['ytcontrols']) {
	      // Before the tech is ready, we have to take care of the play action
	      this.iframeblocker.style.display = 'block';
	    }

	    this.player_el_.insertBefore(this.iframeblocker, this.player_el_.firstChild);
	    this.player_el_.insertBefore(this.el_, this.iframeblocker);

	    this.parseSrc(player.options()['src']);

	    this.playOnReady = this.player_.options()['autoplay'] || false;

	    var params = {
	      enablejsapi: 1,
	      iv_load_policy: 3,
	      playerapiid: this.id(),
	      disablekb: 1,
	      wmode: 'transparent',
	      controls: (this.player_.options()['ytcontrols'])?1:0,
	      showinfo: 0,
	      modestbranding: 1,
	      rel: 0,
	      autoplay: (this.playOnReady)?1:0,
	      loop: (this.player_.options()['loop'])?1:0,
	      list: this.playlistId,
	      vq: this.userQuality
	    };

	    if (typeof params.list == 'undefined') {
	      delete params.list;
	    }

	    // If we are not on a server, don't specify the origin (it will crash)
	    if (window.location.protocol != 'file:'){
	      params.origin = window.location.protocol + '//' + window.location.host;
	      this.el_.src = window.location.protocol + '//www.youtube.com/embed/' + this.videoId + '?' + videojs.Youtube.makeQueryString(params);
	    } else {
	      this.el_.src = 'https://www.youtube.com/embed/' + this.videoId + '?' + videojs.Youtube.makeQueryString(params);
	    }

	    var self = this;
	    player.ready(function(){
	      var controlBar = self.player_el_.getElementsByClassName('vjs-control-bar')[0];
	      controlBar.appendChild(self.qualityButton);

	      if (self.playOnReady && !self.player_.options()['ytcontrols']) {
	        self.player_.loadingSpinner.show();
	        self.player_.bigPlayButton.hide();
	      }
	    });

	    if (this.player_.options()['ytcontrols']){
	      // Disable the video.js controls if we use the YouTube controls
	      this.player_.controls(false);
	    } else {
	      // Show the YouTube poster if their is no custom poster
	      if (!this.player_.poster()) {
	        if (this.videoId == null) {
	          // Set the black background if their is no video initially
	          this.iframeblocker.style.backgroundColor = 'black';
	        } else {
	          this.player_.poster('https://img.youtube.com/vi/' + this.videoId + '/maxresdefault.jpg');
	        }
	      }
	    }

	    if (videojs.Youtube.apiReady){
	      this.loadYoutube();
	    } else {
	      // Add to the queue because the YouTube API is not ready
	      videojs.Youtube.loadingQueue.push(this);

	      // Load the YouTube API if it is the first YouTube video
	      if(!videojs.Youtube.apiLoading){
	        var tag = document.createElement('script');
	        tag.src = '//www.youtube.com/iframe_api';
	        var firstScriptTag = document.getElementsByTagName('script')[0];
	        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	        videojs.Youtube.apiLoading = true;
	      }
	    }
	    
	    this.on('dispose', function() {
	      // Get rid of the created DOM elements
	      this.el_.parentNode.removeChild(this.el_);
	      this.iframeblocker.parentNode.removeChild(this.iframeblocker);
	      this.qualityButton.parentNode.removeChild(this.qualityButton);
	      
	      this.player_.loadingSpinner.hide();
	      this.player_.bigPlayButton.hide();
	    });
	  }
	});

	videojs.Youtube.prototype.parseSrc = function(src){
	  this.srcVal = src;
	  
	  if (src) {
	    // Regex to parse the video ID
	    var regId = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
	    var match = src.match(regId);
	    
	    if (match && match[2].length == 11){
	      this.videoId = match[2];
	    } else {
	      this.videoId = null;
	    }
	    
	    // Regex to parse the playlist ID
	    var regPlaylist = /[?&]list=([^#\&\?]+)/;
	    match = src.match(regPlaylist);
	    
	    if (match != null && match.length > 1) {
	      this.playlistId = match[1];
	    } else {
	      // Make sure their is no playlist
	      if (this.playlistId) {
	        delete this.playlistId;
	      }
	    }

	    // Parse video quality option
	    var regVideoQuality = /[?&]vq=([^#\&\?]+)/;
	    match = src.match(regVideoQuality);

	    if (match != null && match.length > 1) {
	      this.userQuality = match[1];
	    }
	  }
	};

	videojs.Youtube.prototype.src = function(src){
	  if (src) {
	    this.parseSrc(src);

	    if (this.videoId == null) {
	      // Set the black background if the URL isn't valid
	      this.iframeblocker.style.backgroundColor = 'black';
	      this.iframeblocker.style.display = 'block';
	    } else {
	      this.ytplayer.loadVideoById({
	        videoId: this.videoId,
	        suggestedQuality: this.userQuality
	      });

	      // Update the poster
	      this.player_el_.getElementsByClassName('vjs-poster')[0].style.backgroundImage = 'url(https://img.youtube.com/vi/' + this.videoId + '/maxresdefault.jpg)';
	      this.iframeblocker.style.backgroundColor = '';
	      this.iframeblocker.style.display = '';
	      this.player_.poster('https://img.youtube.com/vi/' + this.videoId + '/maxresdefault.jpg');
	    }
	  }

	  return this.srcVal;
	};

	videojs.Youtube.prototype.load = function(){};

	videojs.Youtube.prototype.play = function(){
	  if (this.videoId != null) {
	    // Make sure to not display the spinner for mobile
	    if (!this.player_.options()['ytcontrols']) {
	      // Display the spinner until the video is playing by YouTube
	      this.player_.trigger('waiting');
	    }
	    
	    if (this.isReady_){
	      this.ytplayer.playVideo();
	    } else {
	      this.playOnReady = true;
	    }
	  }
	};

	videojs.Youtube.prototype.pause = function(){ this.ytplayer.pauseVideo(); };
	videojs.Youtube.prototype.paused = function(){ return (this.ytplayer)?(this.lastState !== YT.PlayerState.PLAYING && this.lastState !== YT.PlayerState.BUFFERING):true; };
	videojs.Youtube.prototype.currentTime = function(){ return (this.ytplayer && this.ytplayer.getCurrentTime)?this.ytplayer.getCurrentTime():0; };
	videojs.Youtube.prototype.setCurrentTime = function(seconds){ this.ytplayer.seekTo(seconds, true); this.player_.trigger('timeupdate'); };
	videojs.Youtube.prototype.playbackRate = function(){ return this.ytplayer.getPlaybackRate();};
	videojs.Youtube.prototype.setPlaybackRate = function(rate) {this.ytplayer.setPlaybackRate(rate);};
	videojs.Youtube.prototype.duration = function(){ return (this.ytplayer && this.ytplayer.getDuration)?this.ytplayer.getDuration():0; };

	videojs.Youtube.prototype.volume = function() {
	  if (this.ytplayer && isNaN(this.volumeVal)) {
	    this.volumeVal = this.ytplayer.getVolume() / 100.0;
	  }

	  return this.volumeVal;
	};

	videojs.Youtube.prototype.setVolume = function(percentAsDecimal){
	  if (percentAsDecimal && percentAsDecimal != this.volumeVal) {
	    this.ytplayer.setVolume(percentAsDecimal * 100.0);
	    this.volumeVal = percentAsDecimal;
	    this.player_.trigger('volumechange');
	  }
	};

	videojs.Youtube.prototype.muted = function() { return this.mutedVal; };
	videojs.Youtube.prototype.setMuted = function(muted) {
	  if (muted) {
	    this.ytplayer.mute();
	  } else {
	    this.ytplayer.unMute();
	  }

	  this.mutedVal = muted;
	  this.player_.trigger('volumechange');
	};

	videojs.Youtube.prototype.buffered = function(){
	  if (this.ytplayer && this.ytplayer.getVideoBytesLoaded) {
	    var loadedBytes = this.ytplayer.getVideoBytesLoaded();
	    var totalBytes = this.ytplayer.getVideoBytesTotal();
	    if (!loadedBytes || !totalBytes) return 0;

	    var duration = this.ytplayer.getDuration();
	    var secondsBuffered = (loadedBytes / totalBytes) * duration;
	    var secondsOffset = (this.ytplayer.getVideoStartBytes() / totalBytes) * duration;

	    return videojs.createTimeRange(secondsOffset, secondsOffset + secondsBuffered);
	  } else {
	    return videojs.createTimeRange(0, 0);
	  }
	};

	videojs.Youtube.prototype.supportsFullScreen = function(){ return true; };

	// YouTube is supported on all platforms
	videojs.Youtube.isSupported = function(){ return true; };

	// You can use video/youtube as a media in your HTML5 video to specify the source
	videojs.Youtube.canPlaySource = function(srcObj){
	  return (srcObj.type == 'video/youtube');
	};

	// Always can control the volume
	videojs.Youtube.canControlVolume = function(){ return true; };

	////////////////////////////// YouTube specific functions //////////////////////////////

	// All videos created before YouTube API is loaded
	videojs.Youtube.loadingQueue = [];

	// Create the YouTube player
	videojs.Youtube.prototype.loadYoutube = function(){
	  this.ytplayer = new YT.Player(this.id_, {
	    events: {
	      onReady: function(e) { e.target.vjsTech.onReady(); },
	      onStateChange: function(e) { e.target.vjsTech.onStateChange(e.data); },
	      onPlaybackQualityChange: function(e){ e.target.vjsTech.onPlaybackQualityChange(e.data); },
	      onError: function(e){ e.target.vjsTech.onError(e.data); }
	    }
	  });

	  this.ytplayer.vjsTech = this;
	};

	// Transform a JavaScript object into URL params
	videojs.Youtube.makeQueryString = function(args){
	  var array = [];
	  for (var key in args){
	    if (args.hasOwnProperty(key)){
	      array.push(encodeURIComponent(key) + '=' + encodeURIComponent(args[key]));
	    }
	  }

	  return array.join('&');
	};

	// Called when YouTube API is ready to be used
	window.onYouTubeIframeAPIReady = function(){
	  var yt;
	  while ((yt = videojs.Youtube.loadingQueue.shift())){
	    yt.loadYoutube();
	  }
	  videojs.Youtube.loadingQueue = [];
	  videojs.Youtube.apiReady = true;
	};

	videojs.Youtube.prototype.onReady = function(){
	  this.isReady_ = true;
	  this.triggerReady();

	  // Let the player take care of itself as soon as the YouTube is ready
	  // The loading spinner while waiting for the tech would be impossible otherwise
	  this.iframeblocker.style.display = '';
	  this.player_.loadingSpinner.hide();

	  if (this.player_.options()['muted']) {
	    this.setMuted(true);
	  }

	  // Play ASAP if they clicked play before it's ready
	  if (this.playOnReady) {
	    this.playOnReady = false;
	    this.play();
	  }
	};

	videojs.Youtube.prototype.updateQualities = function(){
	  var qualities = this.ytplayer.getAvailableQualityLevels();
	  
	  if (qualities.length == 0) {
	    this.qualityButton.style.display = 'none';
	  } else {
	    this.qualityButton.style.display = '';
	    
	    while (this.qualityMenuContent.hasChildNodes()) {
	      this.qualityMenuContent.removeChild(this.qualityMenuContent.lastChild);
	    }

	    for (var i = 0; i < qualities.length; ++i) {
	      var el = document.createElement('li');
	      el.setAttribute('class', 'vjs-menu-item');

	      setInnerText(el, videojs.Youtube.parseQualityName(qualities[i]));

	      el.setAttribute('data-val', qualities[i]);
	      if (qualities[i] == this.quality) el.classList.add('vjs-selected');
	      
	      var self = this;
	      
	      el.addEventListener('click', function() {
	        var quality = this.getAttribute('data-val');
	        self.ytplayer.setPlaybackQuality(quality);
	        
	        setInnerText(self.qualityTitle, videojs.Youtube.parseQualityName(quality));
	        
	        var selected = self.qualityMenuContent.querySelector('.vjs-selected');
	        if (selected) selected.classList.remove('vjs-selected');
	        
	        this.classList.add('vjs-selected');
	      });
	      
	      this.qualityMenuContent.appendChild(el);
	    }
	  }
	};

	videojs.Youtube.prototype.onStateChange = function(state){
	  if (state != this.lastState){
	    switch(state){
	      case -1:
	        this.player_.trigger('durationchange');
	        break;

	      case YT.PlayerState.ENDED:
	        // Replace YouTube play button by our own
	        if (!this.player_.options()['ytcontrols']) {
	          // commented out because adding the first line pushes the live transcript down
	          // and the second line has a button appear over the youtube play button and looks weird.
	          //this.player_el_.getElementsByClassName('vjs-poster')[0].style.display = 'block';
	          //this.player_.bigPlayButton.show();
	        }

	        this.player_.trigger('ended');
	        break;

	      case YT.PlayerState.PLAYING:
	        // Make sure the big play is not there
	        this.player_.bigPlayButton.hide();

	        this.updateQualities();

	        this.player_.trigger('timeupdate');
	        this.player_.trigger('durationchange');
	        this.player_.trigger('playing');
	        this.player_.trigger('play');
	        break;

	      case YT.PlayerState.PAUSED:
	        this.player_.trigger('pause');
	        break;

	      case YT.PlayerState.BUFFERING:
	        this.player_.trigger('timeupdate');
	        
	        // Make sure to not display the spinner for mobile
	        if (!this.player_.options()['ytcontrols']) {
	          this.player_.trigger('waiting');
	        }
	        break;

	      case YT.PlayerState.CUED:
	        break;
	    }

	    this.lastState = state;
	  }
	};

	videojs.Youtube.convertQualityName = function(name) {
	  switch (name) {
	    case '144p':
	      return 'tiny';

	    case '240p':
	      return 'small';

	    case '360p':
	      return 'medium';

	    case '480p':
	      return 'large';

	    case '720p':
	      return 'hd720';

	    case '1080p':
	      return 'hd1080';
	  }

	  return name;
	};

	videojs.Youtube.parseQualityName = function(name) {
	  switch (name) {
	    case 'tiny':
	      return '144p';

	    case 'small':
	      return '240p';

	    case 'medium':
	      return '360p';

	    case 'large':
	      return '480p';

	    case 'hd720':
	      return '720p';

	    case 'hd1080':
	      return '1080p';
	  }
	  
	  return name;
	};

	videojs.Youtube.prototype.onPlaybackQualityChange = function(quality){
	  this.quality = quality;
	  setInnerText(this.qualityTitle, videojs.Youtube.parseQualityName(quality));
	  
	  switch(quality){
	    case 'medium':
	      this.player_.videoWidth = 480;
	      this.player_.videoHeight = 360;
	      break;

	    case 'large':
	      this.player_.videoWidth = 640;
	      this.player_.videoHeight = 480;
	      break;

	    case 'hd720':
	      this.player_.videoWidth = 960;
	      this.player_.videoHeight = 720;
	      break;

	    case 'hd1080':
	      this.player_.videoWidth = 1440;
	      this.player_.videoHeight = 1080;
	      break;

	    case 'highres':
	      this.player_.videoWidth = 1920;
	      this.player_.videoHeight = 1080;
	      break;

	    case 'small':
	      this.player_.videoWidth = 320;
	      this.player_.videoHeight = 240;
	      break;
	      
	    case 'tiny':
	      this.player_.videoWidth = 144;
	      this.player_.videoHeight = 108;
	      break;

	    default:
	      this.player_.videoWidth = 0;
	      this.player_.videoHeight = 0;
	      break;
	  }

	  this.player_.trigger('ratechange');
	};

	videojs.Youtube.prototype.onError = function(error){
	  this.player_.error = error;
	  this.player_.trigger('error');
	};

	//Cross browser solution to add text content to an element
	function setInnerText(element, text) {
	  var textProperty = ('innerText' in element)? 'innerText' : 'textContent';
	  element[textProperty] = text;
	}

	// Stretch the YouTube poster
	// Keep the iframeblocker in front of the player when the user is inactive
	// (ONLY way because the iframe is so selfish with events)
	(function() {
	  var style = document.createElement("style");
	  style.type = 'text/css';
	  var css = " .vjs-youtube .vjs-poster { background-size: cover; }.iframeblocker { display:none;position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer;z-index:2; }.vjs-youtube.vjs-user-inactive .iframeblocker { display:block; } .vjs-quality-button > div:first-child > span:first-child { position:relative;top:7px }";
	  setInnerText(style, css);
	  document.getElementsByTagName("head")[0].appendChild(style);
	})();



/***/ },
/* 46 */
/***/ function(module, exports) {

	/*! videojs-transcript - v0.7.1 - 2014-10-10
	* Copyright (c) 2014 Matthew Walsh; Licensed MIT */
	(function (window, videojs) {
	  'use strict';


	// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
	// MIT license
	// https://gist.github.com/paulirish/1579671
	(function() {
	  var lastTime = 0;
	  var vendors = ['ms', 'moz', 'webkit', 'o'];
	  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
	    window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
	    || window[vendors[x]+'CancelRequestAnimationFrame'];
	  }
	  if (!window.requestAnimationFrame)
	    window.requestAnimationFrame = function(callback, element) {
	      var currTime = new Date().getTime();
	      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	      var id = window.setTimeout(function() { callback(currTime + timeToCall); },
	      timeToCall);
	      lastTime = currTime + timeToCall;
	      return id;
	    };
	  if (!window.cancelAnimationFrame)
	    window.cancelAnimationFrame = function(id) {
	      clearTimeout(id);
	    };
	}());

	// Object.create() polyfill
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Polyfill
	if (typeof Object.create != 'function') {
	  Object.create = (function() {
	    var Object = function() {};
	    return function (prototype) {
	      if (arguments.length > 1) {
	        throw Error('Second argument not supported');
	      }
	      if (typeof prototype != 'object') {
	        throw TypeError('Argument must be an object');
	      }
	      Object.prototype = prototype;
	      var result = new Object();
	      Object.prototype = null;
	      return result;
	    };
	  })();
	}

	// forEach polyfill
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Polyfill
	if (!Array.prototype.forEach) {
	  Array.prototype.forEach = function(callback, thisArg) {
	    var T, k;
	    if (this == null) {
	      throw new TypeError(' this is null or not defined');
	    }
	    var O = Object(this);
	    var len = O.length >>> 0;
	    if (typeof callback != "function") {
	      throw new TypeError(callback + ' is not a function');
	    }
	    if (arguments.length > 1) {
	      T = thisArg;
	    }
	    k = 0;
	    while (k < len) {
	      var kValue;
	      if (k in O) {
	        kValue = O[k];
	        callback.call(T, kValue, k, O);
	      }
	      k++;
	    }
	  };
	}

	// classList polyfill
	/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
	;if("document" in self&&!("classList" in document.createElement("_"))){(function(j){"use strict";if(!("Element" in j)){return}var a="classList",f="prototype",m=j.Element[f],b=Object,k=String[f].trim||function(){return this.replace(/^\s+|\s+$/g,"")},c=Array[f].indexOf||function(q){var p=0,o=this.length;for(;p<o;p++){if(p in this&&this[p]===q){return p}}return -1},n=function(o,p){this.name=o;this.code=DOMException[o];this.message=p},g=function(p,o){if(o===""){throw new n("SYNTAX_ERR","An invalid or illegal string was specified")}if(/\s/.test(o)){throw new n("INVALID_CHARACTER_ERR","String contains an invalid character")}return c.call(p,o)},d=function(s){var r=k.call(s.getAttribute("class")||""),q=r?r.split(/\s+/):[],p=0,o=q.length;for(;p<o;p++){this.push(q[p])}this._updateClassName=function(){s.setAttribute("class",this.toString())}},e=d[f]=[],i=function(){return new d(this)};n[f]=Error[f];e.item=function(o){return this[o]||null};e.contains=function(o){o+="";return g(this,o)!==-1};e.add=function(){var s=arguments,r=0,p=s.length,q,o=false;do{q=s[r]+"";if(g(this,q)===-1){this.push(q);o=true}}while(++r<p);if(o){this._updateClassName()}};e.remove=function(){var t=arguments,s=0,p=t.length,r,o=false;do{r=t[s]+"";var q=g(this,r);if(q!==-1){this.splice(q,1);o=true}}while(++s<p);if(o){this._updateClassName()}};e.toggle=function(p,q){p+="";var o=this.contains(p),r=o?q!==true&&"remove":q!==false&&"add";if(r){this[r](p)}return !o};e.toString=function(){return this.join(" ")};if(b.defineProperty){var l={get:i,enumerable:true,configurable:true};try{b.defineProperty(m,a,l)}catch(h){if(h.number===-2146823252){l.enumerable=false;b.defineProperty(m,a,l)}}}else{if(b[f].__defineGetter__){m.__defineGetter__(a,i)}}}(self))};



	// Global settings
	var my = {};
	my.settings = {};
	my.prefix = 'transcript';
	my.player = this;

	// Defaults
	var defaults = {
	  autoscroll: true,
	  clickArea: 'text',
	  showTitle: true,
	  showTrackSelector: true,
	  followPlayerTrack: true,
	  stopScrollWhenInUse: true,
	};

	/*global my*/
	var utils = (function (plugin) {
	  return {
	    secondsToTime: function (timeInSeconds) {
	      var hour = Math.floor(timeInSeconds / 3600);
	      var min = Math.floor(timeInSeconds % 3600 / 60);
	      var sec = Math.floor(timeInSeconds % 60);
	      sec = (sec < 10) ? '0' + sec : sec;
	      min = (hour > 0 && min < 10) ? '0' + min : min;
	      if (hour > 0) {
	        return hour + ':' + min + ':' + sec;
	      }
	      return min + ':' + sec;
	    },
	    localize: function (string) {
	      return string; // TODO: do something here;
	    },
	    createEl: function (elementName, classSuffix) {
	      classSuffix = classSuffix || '';
	      var el = document.createElement(elementName);
	      el.className = plugin.prefix + classSuffix;
	      return el;
	    },
	    extend: function(obj) {
	      var type = typeof obj;
	      if (!(type === 'function' || type === 'object' && !!obj)) {
	        return obj;
	      }
	      var source, prop;
	      for (var i = 1, length = arguments.length; i < length; i++) {
	        source = arguments[i];
	        for (prop in source) {
	          obj[prop] = source[prop];
	        }
	      }
	      return obj;
	    }
	  };
	}(my));

	var eventEmitter = {
	  handlers_: [],
	  on: function on (object, eventtype, callback) {
	    if (typeof callback === 'function') {
	      this.handlers_.push([object, eventtype, callback]);
	    } else {
	      throw new TypeError('Callback is not a function.');
	    }
	  },
	  trigger: function trigger (object, eventtype) {
	    this.handlers_.forEach( function(h) {
	      if (h[0] === object &&
	          h[1] === eventtype) {
	            h[2].apply();
	      }
	    });
	  }
	};

	var scrollerProto = function(plugin) {

	  var initHandlers = function (el) {
	    var self = this;
	    // The scroll event. We want to keep track of when the user is scrolling the transcript.
	    el.addEventListener('scroll', function () {
	      if (self.isAutoScrolling) {

	        // If isAutoScrolling was set to true, we can set it to false and then ignore this event.
	        // It wasn't the user.
	        self.isAutoScrolling = false; // event handled
	      } else {

	        // We only care about when the user scrolls. Set userIsScrolling to true and add a nice class.
	        self.userIsScrolling = true;
	        el.classList.add('is-inuse');
	      }
	    });

	    // The mouseover event.
	    el.addEventListener('mouseenter', function () {
	      self.mouseIsOverTranscript = true;
	    });
	    el.addEventListener('mouseleave', function () {
	      self.mouseIsOverTranscript = false;

	      // Have a small delay before deciding user as done interacting.
	      setTimeout(function () {

	        // Make sure the user didn't move the pointer back in.
	        if (!self.mouseIsOverTranscript) {
	          self.userIsScrolling = false;
	          el.classList.remove('is-inuse');
	        }
	      }, 1000);
	    });
	  };

	  // Init instance variables
	  var init = function (element, plugin) {
	    this.element = element;
	    this.userIsScrolling = false;

	    //default to true in case user isn't using a mouse;
	    this.mouseIsOverTranscript = true;
	    this.isAutoScrolling = true;
	    initHandlers.call(this, this.element);
	    return this;
	  };

	  // Easing function for smoothness.
	  var easeOut = function (time, start, change, duration) {
	    return start + change * Math.sin(Math.min(1, time / duration) * (Math.PI / 2));
	  };

	  // Animate the scrolling.
	  var scrollTo = function (element, newPos, duration) {
	    var startTime = Date.now();
	    var startPos = element.scrollTop;
	    var self = this;

	    // Don't try to scroll beyond the limits. You won't get there and this will loop forever.
	    newPos = Math.max(0, newPos);
	    newPos = Math.min(element.scrollHeight - element.clientHeight, newPos);
	    var change = newPos - startPos;

	    // This inner function is called until the elements scrollTop reaches newPos.
	    var updateScroll = function () {
	      var now = Date.now();
	      var time = now - startTime;
	      self.isAutoScrolling = true;
	      element.scrollTop = easeOut(time, startPos, change, duration);
	      if (element.scrollTop !== newPos) {
	        requestAnimationFrame(updateScroll, element);
	      }
	    };
	    requestAnimationFrame(updateScroll, element);
	  };

	  // Scroll an element's parent so the element is brought into view.
	  var scrollToElement = function (element) {
	    if (this.canScroll(element)) {
	      var parent = element.parentElement.parentElement.parentElement;
	      var parentOffsetBottom = parent.offsetTop + parent.clientHeight;
	      var elementOffsetBottom = element.offsetTop + element.clientHeight;
	      var relTop = element.offsetTop - parent.offsetTop;
	      var relBottom = (element.offsetTop + element.clientHeight) - parent.offsetTop;
	      var newPos;

	      // If the top of the line is above the top of the parent view, were scrolling up,
	      // so we want to move the top of the element downwards to match the top of the parent.
	      if (relTop < parent.scrollTop) {
	        newPos = element.offsetTop - parent.offsetTop;

	      // If the bottom of the line is below the parent view, we're scrolling down, so we want the
	      // bottom edge of the line to move up to meet the bottom edge of the parent.
	      } else if (relBottom > (parent.scrollTop + parent.clientHeight)) {
	        newPos = elementOffsetBottom - parentOffsetBottom;
	      }

	      // Don't try to scroll if we haven't set a new position.  If we didn't
	      // set a new position the line is already in view (i.e. It's not above
	      // or below the view)
	      // And don't try to scroll when the element is already in position.
	      if (newPos !== undefined && parent.scrollTop !== newPos) {
	        scrollTo.call(this, parent, newPos, 400);
	      }
	    }
	  };

	  // Return whether the element is scrollable.
	  var canScroll = function (element) {
	    var el = this.element;
	    var scrollable = el.scrollHeight+el.offsetTop;
	    var offsettop = element.offsetTop + element.clientHeight;
	    return scrollable > offsettop;
	  };

	  // Return whether the user is interacting with the transcript.
	  var inUse = function () {
	    return this.userIsScrolling;
	  };

	  return {
	    init: init,
	    to : scrollToElement,
	    canScroll : canScroll,
	    inUse : inUse
	  }
	}(my);

	var scroller = function(element) {
	  return Object.create(scrollerProto).init(element);
	};


	/*global my*/
	var trackList = function (plugin) {
	  var activeTrack;
	  return {
	    get: function () {
	      var validTracks = [];
	      my.tracks = my.player.textTracks();
	      my.tracks.forEach(function (track) {
	        if (track.kind() === 'captions' || track.kind() === 'subtitles') {
	          validTracks.push(track);
	        }
	      });
	      return validTracks;
	    },
	    active: function (tracks) {
	      tracks.forEach(function (track) {
	        if (track.mode() === 2) {
	          activeTrack = track;
	          return track;
	        }
	      });
	      // fallback to first track
	      return activeTrack || tracks[0];
	    },
	  };
	}(my);

	/*globals utils, eventEmitter, my, scrollable*/

	var widget = function (plugin) {
	  var my = {};
	  my.element = {};
	  my.body = {};
	  var on = function (event, callback) {
	    eventEmitter.on(this, event, callback);
	  };
	  var trigger = function (event) {
	    eventEmitter.trigger(this, event);
	  };
	  var createTitle = function () {
	    var header = utils.createEl('header', '-header');
	    header.textContent = utils.localize('Transcript');
	    return header;
	  };
	  var createSelector = function (){
	    var selector = utils.createEl('select', '-selector');
	      plugin.validTracks.forEach(function (track, i) {
	      var option = document.createElement('option');
	      option.value = i;
	      option.textContent = track.label() + ' (' + track.language() + ')';
	      selector.appendChild(option);
	    });
	    selector.addEventListener('change', function (e) {
	      setTrack(document.querySelector('#' + plugin.prefix + '-' + plugin.player.id() + ' option:checked').value);
	      trigger('trackchanged');
	    });
	    return selector;
	  };
	  var clickToSeekHandler = function (event) {
	    var clickedClasses = event.target.classList;
	    var clickedTime = event.target.getAttribute('data-begin') || event.target.parentElement.getAttribute('data-begin');
	    if (clickedTime !== undefined && clickedTime !== null) { // can be zero
	      if ((plugin.settings.clickArea === 'line') || // clickArea: 'line' activates on all elements
	        (plugin.settings.clickArea === 'timestamp' && clickedClasses.contains(plugin.prefix + '-timestamp')) ||
	        (plugin.settings.clickArea === 'text' && clickedClasses.contains(plugin.prefix + '-text'))) {
	        plugin.player.currentTime(clickedTime);
	      }
	    }
	  };
	  var createLine = function (cue) {
	    var line = utils.createEl('div', '-line');
	    var timestamp = utils.createEl('span', '-timestamp');
	    var text = utils.createEl('span', '-text');
	    line.setAttribute('data-begin', cue.startTime);
	    timestamp.textContent = utils.secondsToTime(cue.startTime);
	    text.innerHTML = cue.text;
	    line.appendChild(timestamp);
	    line.appendChild(text);
	    return line;
	  };
	  var createTranscriptBody = function (track) {
	    if (typeof track !== 'object') {
	      track = plugin.player.textTracks()[track];
	    }
	    var body = utils.createEl('div', '-body');
	    var line, i;
	    var fragment = document.createDocumentFragment();
	    var createTranscript = function () {
	      var cues = track.cues();
	      for (i = 0; i < cues.length; i++) {
	        line = createLine(cues[i]);
	        fragment.appendChild(line);
	      }
	      body.innerHTML = '';
	      body.appendChild(fragment);
	      body.setAttribute('lang', track.language());
	    };
	    if (track.readyState() !==2) {
	      track.load();
	      track.on('loaded', createTranscript);
	    } else {
	      createTranscript();
	    }
	    body.scroll = scroller(body);
	    body.addEventListener('click', clickToSeekHandler);
	    return body;
	  };
	  var create = function () {
	    var el = document.createElement('div');
	    my.element = el;
	    el.setAttribute('id', plugin.prefix + '-' + plugin.player.id());
	    if (plugin.settings.showTitle) {
	      var title = createTitle();
	      el.appendChild(title);
	    }
	    if (plugin.settings.showTrackSelector) {
	      var selector = createSelector();
	      el.appendChild(selector);
	    }
	    my.body = utils.createEl('div', '-body');
	    el.appendChild(my.body);
	    setTrack(plugin.currentTrack);
	    return this;
	  };
	  var setTrack = function (track) {
	    var newBody = createTranscriptBody(track);
	    my.element.replaceChild(newBody, my.body);
	    my.body = newBody;
	  };
	  var setCue = function (time) {
	    var active, i, line, begin, end;
	    var lines = my.body.children;
	    for (i = 0; i < lines.length; i++) {
	      line = lines[i];
	      begin = line.getAttribute('data-begin');
	      if (i < lines.length - 1) {
	        end = lines[i + 1].getAttribute('data-begin');
	      } else {
	        end = plugin.player.duration() || Infinity;
	      }
	      if (time > begin && time < end) {
	        if (!line.classList.contains('is-active')) { // don't update if it hasn't changed
	          line.classList.add('is-active');
	          if (plugin.settings.autoscroll && !(plugin.settings.stopScrollWhenInUse && my.body.scroll.inUse())) {
	              my.body.scroll.to(line);
	          }
	        }
	      } else {
	        line.classList.remove('is-active');
	      }
	    }
	  };
	  var el = function () {
	    return my.element;
	  };
	  return {
	    create: create,
	    setTrack: setTrack,
	    setCue: setCue,
	    el : el,
	    on: on,
	    trigger: trigger,
	  };

	}(my);

	var transcript = function (options) {
	  my.player = this;
	  my.validTracks = trackList.get();
	  my.currentTrack = trackList.active(my.validTracks);
	  my.settings = jQuery.extend({}, defaults, options);
	  my.widget = widget.create();
	  var timeUpdate = function () {
	    my.widget.setCue(my.player.currentTime());
	  };
	  var updateTrack = function () {
	    my.currentTrack = trackList.active(my.validTracks);
	    my.widget.setTrack(my.currentTrack);
	  };
	  if (my.validTracks.length > 0) {
	    updateTrack();
	    my.player.on('timeupdate', timeUpdate);
	    if (my.settings.followPlayerTrack) {
	      my.player.on('captionstrackchange', updateTrack);
	      my.player.on('subtitlestrackchange', updateTrack);
	    }
	  } else {
	    throw new Error('videojs-transcript: No tracks found!');
	  }
	  return {
	    el: function () {
	      return my.widget.el();
	    },
	    setTrack: my.widget.setTrack
	  };
	};
	videojs.plugin('transcript', transcript);

	}(window, videojs));


/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * jQuery Watch Plugin
	 *
	 * @author Darcy Clarke
	 * @version 2.0
	 *
	 * Copyright (c) 2012 Darcy Clarke
	 * Dual licensed under the MIT and GPL licenses.
	 *
	 * ADDS: 
	 *
	 * - $.watch()
	 *  
	 * USES:
	 *
	 * - DOMAttrModified event
	 * 
	 * FALLBACKS:
	 * 
	 * - propertychange event
	 * - setTimeout() with delay 
	 *
	 * EXAMPLE:
	 * 
	 * $('div').watch('width height', function(){
	 *      console.log(this.style.width, this.style.height);
	 * });
	 *
	 * $('div').animate({width:'100px',height:'200px'}, 500);
	 *
	 */

	(function($){
	    $.extend($.fn, {         
	        /**
	         * Watch Method
	         * 
	         * @param {String} the name of the properties to watch
	         * @param {Object} options to overide defaults (only 'throttle' right now)
	         * @param {Function} callback function to be executed when attributes change
	         *
	         * @return {jQuery Object} returns the jQuery object for chainability
	         */   
	        watch : function(props, options, callback){
	            // Dummmy element
	            var element = document.createElement('div');

	            /**
	             * Checks Support for Event
	             * 
	             * @param {String} the name of the event
	             * @param {Element Object} the element to test support against
	             *
	             * @return {Boolean} returns result of test (true/false)
	             */
	            var isEventSupported = function(eventName, el) {
	                eventName = 'on' + eventName;
	                var supported = (eventName in el);
	                if(!supported){
	                    el.setAttribute(eventName, 'return;');
	                    supported = typeof el[eventName] == 'function';
	                }
	                return supported;
	            };
	            // Type check options
	            if(typeof(options) == 'function'){
	                callback = options;
	                options = {};
	            }
	            // Type check callback
	            if(typeof(callback) != 'function')
	                callback = function(){};
	            // Map options over defaults
	            options = $.extend({}, { throttle : 10 }, options);
	            /**
	             * Checks if properties have changed
	             * 
	             * @param {Element Object} the element to watch
	             *
	             */
	            var check = function(el) {
	                var data = el.data(),
	                    changed = false,
	                    temp;

	                // Loop through properties
	                var length = typeof data!='undefined' && typeof data.props!='undefined'?data.props.length:0;
	                for(var i=0;i < length; i++){
	                    temp = el.css(data.props[i]);
	                    if(data.vals[i] != temp){
	                        data.vals[i] = temp;
	                        changed = true;
	                        break;
	                    }
	                }
	                // Run callback if property has changed
	                if(changed && data.cb)
	                    data.cb.call(el, data);
	            };
	            return this.each(function(){
	                var el = $(this),
	                    cb = function(){ check.call(this, el) },
	                    data = { props:props.split(','), cb:callback, vals: [] };
	                $.each(data.props, function(i){ data.vals[i] = el.css(data.props[i]); });
	                el.data(data);
	                if(isEventSupported('DOMAttrModified', element)){
	                    el.on('DOMAttrModified', callback);
	                } else if(isEventSupported('propertychange', element)){
	                    el.on('propertychange', callback);
	                } else {
	                    setInterval(cb, options.throttle);
	                }
	            });
	        }
	    });
	})(jQuery);


/***/ },
/* 48 */
/***/ function(module, exports) {

	/* 
	RangeSlider v1.0 (https://github.com/danielcebrian/rangeslider-videojs)
	Copyright (C) 2014 Daniel Cebrian Robles
	License: https://github.com/danielcebrian/rangeslider-videojs/blob/master/License.rst

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
	//----------------Load Plugin----------------//
	(function (){
	//-- Load RangeSlider plugin in videojs
	function RangeSlider_(options){
		var player = this;
		
		player.rangeslider=new RangeSlider(player, options);
		
		//When the DOM and the video media is loaded
		function initialVideoFinished(event) {
			var plugin = player.rangeslider;
			//All components will be initialize after they have been loaded by videojs
			for (var index in plugin.components) {
				plugin.components[index].init_();
			}
			
			if (plugin.options.hidden)
				plugin.hide(); //Hide the Range Slider
				
			if(plugin.options.locked) 
				plugin.lock(); //Lock the Range Slider
				
			if(plugin.options.panel==false) 
				plugin.hidePanel(); //Hide the second Panel
				
			if(plugin.options.controlTime==false) 
				plugin.hidecontrolTime(); //Hide the control time panel

			plugin._reset();
			player.trigger('loadedRangeSlider'); //Let know if the Range Slider DOM is ready
		}
		if (player.techName == 'Youtube'){
			//Detect youtube problems
			player.one('error', function(e){
				switch (player.error) {
					case 2:
						alert("The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.");
					case 5:
						alert("The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.");
					case 100:
						alert("The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.");
						break;
					case 101:
						alert("The owner of the requested video does not allow it to be played in embedded players.");
						break;
					case 150:
						alert("The owner of the requested video does not allow it to be played in embedded players.");
						break;
					default:
						alert("Unknown Error");
						break;
				}
			});
			player.on('firstplay', initialVideoFinished);
		}else{
			player.one('playing', initialVideoFinished);
		}
		
		
		//console.log("Loaded Plugin RangeSlider");
	}
	videojs.plugin('rangeslider', RangeSlider_);



	//-- Plugin
	function RangeSlider(player,options){
		var player = player || this;
		
		this.player = player;
		
		this.components = {}; // holds any custom components we add to the player

		options = options || {}; // plugin options
		
		if(!options.hasOwnProperty('locked')) 
			options.locked = false; // lock slider handles
			
		if(!options.hasOwnProperty('hidden')) 
			options.hidden = true; // hide slider handles
			
		if(!options.hasOwnProperty('panel')) 
			options.panel = true; // Show Second Panel
			
		if(!options.hasOwnProperty('controlTime')) 
			options.controlTime = true; // Show Control Time to set the arrows in the edition
		
		this.options = options;
		
		this.init();
	}

	//-- Methods
	RangeSlider.prototype = {
		/*Constructor*/
		init:function(){
			var player = this.player || {};
			
			this.updatePrecision = 3;
			
			//position in second of the arrows
			this.start = 0;
			this.end = 0;
			
			//components of the plugin
			var controlBar = player.controlBar;
			var seekBar = controlBar.progressControl.seekBar;
			this.components.RSTimeBar = seekBar.RSTimeBar;
			this.components.ControlTimePanel = controlBar.ControlTimePanel;
			
			//Save local component 
			this.rstb = this.components.RSTimeBar;
			this.box = this.components.SeekRSBar = this.rstb.SeekRSBar;
			this.bar = this.components.SelectionBar = this.box.SelectionBar;
			this.left = this.components.SelectionBarLeft = this.box.SelectionBarLeft;
			this.right = this.components.SelectionBarRight = this.box.SelectionBarRight;
			this.tp = this.components.TimePanel = this.box.TimePanel;
			this.tpl = this.components.TimePanelLeft = this.tp.TimePanelLeft;
			this.tpr = this.components.TimePanelRight = this.tp.TimePanelRight;
			this.ctp = this.components.ControlTimePanel;
			this.ctpl = this.components.ControlTimePanelLeft = this.ctp.ControlTimePanelLeft;
			this.ctpr = this.components.ControlTimePanelRight = this.ctp.ControlTimePanelRight;
			
		},
		lock: function() {
			this.options.locked = true;
			this.ctp.enable(false);
			if (typeof this.box != 'undefined')
				videojs.addClass(this.box.el_, 'locked');
		},
		unlock: function() {
			this.options.locked = false;
			this.ctp.enable();
			if (typeof this.box !='undefined')
				videojs.removeClass(this.box.el_, 'locked');
		},
		show:function(){
			this.options.hidden = false;
			if (typeof this.rstb !='undefined'){
				this.rstb.show();
				if (this.options.controlTime)
					this.showcontrolTime();
			}
		},
		hide:function(){
			this.options.hidden = true;
			if (typeof this.rstb !='undefined'){
				this.rstb.hide();
				this.ctp.hide();
			}
		},
		showPanel:function(){
			this.options.panel = true;
			if (typeof this.tp !='undefined')
				videojs.removeClass(this.tp.el_, 'disable');			
		},
		hidePanel:function(){
			this.options.panel = false;
			if (typeof this.tp !='undefined')
				videojs.addClass(this.tp.el_, 'disable');	
		},
		showcontrolTime:function(){
			this.options.controlTime = true;
			if (typeof this.ctp !='undefined')
				this.ctp.show();
		},
		hidecontrolTime:function(){
			this.options.controlTime = false;
			if (typeof this.ctp !='undefined')
				this.ctp.hide();
		},
		setValue: function(index, seconds, writeControlTime) {
			//index = 0 for the left Arrow and 1 for the right Arrow. Value in seconds
			var writeControlTime = typeof writeControlTime!='undefined'?writeControlTime:true;
			
			var percent = this._percent(seconds);
			var isValidIndex = (index === 0 || index === 1);
			var isChangeable = !this.locked;
			if(isChangeable && isValidIndex)
				this.box.setPosition(index,percent,writeControlTime);
		},
		setValues: function(start, end, writeControlTime) {
			//index = 0 for the left Arrow and 1 for the right Arrow. Value in seconds
			var writeControlTime = typeof writeControlTime!='undefined'?writeControlTime:true;
			
			this._reset();
			
			this._setValuesLocked(start,end,writeControlTime);
		},
		getValues: function() { //get values in seconds
			var values = {}, start, end;
			start = this.start || this._getArrowValue(0);
			end = this.end || this._getArrowValue(1);
			return {start:start, end:end};
		},
		playBetween: function(start, end,showRS) {
			showRS = typeof showRS == 'undefined'?true:showRS;
			this.player.currentTime(start);
			this.player.play();
			if (showRS){
				this.show();
				this._reset();
			}else{
				this.hide();
			}
			this._setValuesLocked(start,end);
			
			this.bar.activatePlay(start,end);
		},
	    loop: function (start, end, show) {
	        var player = this.player;

	        if (player) {
	            player.on("pause", videojs.bind(this, function () {
	                this.looping = false;
	            }));

	            show = typeof show === 'undefined' ? true : show;

	            if (show) {
	                this.show();
	                this._reset();
	            }
	            else {
	                this.hide();
	            }
	            this._setValuesLocked(start, end);

	            this.timeStart = start;
	            this.timeEnd = end;
	            this.looping = true;

	            this.player.currentTime(start);
	            this.player.play();

	            this.player.on("timeupdate", videojs.bind(this, this.bar.process_loop));
	        }
	    },
		_getArrowValue: function(index) {
			var index = index || 0;
			var duration = this.player.duration();
			
			duration = typeof duration == 'undefined'? 0 : duration;
			
			var percentage = this[index === 0? "left" : "right"].el_.style.left.replace("%","");
			if (percentage == "")
				percentage = index === 0? 0 : 100;
				
			return videojs.round(this._seconds(percentage / 100),this.updatePrecision-1);
		},
		_percent: function(seconds) {
			var duration = this.player.duration();
			if(isNaN(duration)) {
				return 0;
			}
			return Math.min(1, Math.max(0, seconds / duration));
		},
		_seconds: function(percent) { 
			var duration = this.player.duration();
			if(isNaN(duration)) {
				return 0;
			}
			return Math.min(duration, Math.max(0, percent * duration));
		},
		_reset: function() {
			var duration = this.player.duration();
			this.tpl.el_.style.left = '0%';
			this.tpr.el_.style.left = '100%';
			this._setValuesLocked(0,duration);
		},
		_setValuesLocked: function(start,end, writeControlTime){
			var triggerSliderChange = typeof writeControlTime!='undefined';
			var writeControlTime = typeof writeControlTime!='undefined'?writeControlTime:true;
			if(this.options.locked) {
				this.unlock();//It is unlocked to change the bar position. In the end it will return the value.
				this.setValue(0,start,writeControlTime);
				this.setValue(1,end,writeControlTime);
				this.lock();
			}else{
				this.setValue(0,start,writeControlTime);
				this.setValue(1,end,writeControlTime);
			}
			
			// Trigger slider change
			if (triggerSliderChange) {
				this._triggerSliderChange();
			}
		},
		_checkControlTime: function(index,TextInput,timeOld){
			var h = TextInput[0],
				m = TextInput[1],
				s = TextInput[2],
				newHour = h.value,
				newMin = m.value,
				newSec = s.value,
				obj, objNew, objOld;
			index = index || 0;
			
			if (newHour != timeOld[0]){
				obj = h;
				objNew = newHour;
				objOld = timeOld[0];
			}else if (newMin != timeOld[1]){
				obj = m;
				objNew = newMin;
				objOld = timeOld[1];
			}else if(newSec != timeOld[2]){
				obj = s;
				objNew = newSec;
				objOld = timeOld[2];
			}else{	
				return false;
			}
		
			var duration = this.player.duration() || 0,
				durationSel;
			
			var intRegex = /^\d+$/;//check if the objNew is an integer
			if(!intRegex.test(objNew) || objNew>60){
				objNew = objNew ==""?"":objOld;
			}
		
			newHour = newHour == ""?0:newHour;
			newMin = newMin == ""?0:newMin;
			newSec = newSec == ""?0:newSec;
		
			durationSel = videojs.TextTrack.prototype.parseCueTime(newHour+":"+newMin+":"+newSec);
			if (durationSel > duration){
				obj.value = objOld;
				obj.style.border = "1px solid red";
			}else{
				obj.value = objNew;
				h.style.border = m.style.border = s.style.border = "1px solid transparent";
				this.setValue(index,durationSel,false);
				
				// Trigger slider change
				this._triggerSliderChange();
			}
			if (index===1){
				var oldTimeLeft = this.ctpl.el_.children,
					durationSelLeft = videojs.TextTrack.prototype.parseCueTime(oldTimeLeft[0].value+":"+oldTimeLeft[1].value+":"+oldTimeLeft[2].value);
				if (durationSel < durationSelLeft){
					obj.style.border = "1px solid red";
				}
			}else{
				
				var oldTimeRight = this.ctpr.el_.children,
					durationSelRight = videojs.TextTrack.prototype.parseCueTime(oldTimeRight[0].value+":"+oldTimeRight[1].value+":"+oldTimeRight[2].value);
				if (durationSel > durationSelRight){
					obj.style.border = "1px solid red";
				}
			}
		},
		_triggerSliderChange: function(){
			this.player.trigger("sliderchange");
		}
	};


	//----------------Public Functions----------------//

	//-- Public Functions added to video-js

	//Lock the Slider bar and it will not be possible to change the arrow positions
	videojs.Player.prototype.lockSlider = function(){
		return this.rangeslider.lock();
	};

	//Unlock the Slider bar and it will be possible to change the arrow positions
	videojs.Player.prototype.unlockSlider = function(){
		return this.rangeslider.unlock();
	};

	//Show the Slider Bar Component
	videojs.Player.prototype.showSlider = function(){
		return this.rangeslider.show();
	};

	//Hide the Slider Bar Component
	videojs.Player.prototype.hideSlider = function(){
		return this.rangeslider.hide();
	};

	//Show the Panel with the seconds of the selection
	videojs.Player.prototype.showSliderPanel = function(){
		return this.rangeslider.showPanel();
	};

	//Hide the Panel with the seconds of the selection
	videojs.Player.prototype.hideSliderPanel = function(){
		return this.rangeslider.hidePanel();
	};


	//Show the control Time to edit the position of the arrows
	videojs.Player.prototype.showControlTime = function(){
		return this.rangeslider.showcontrolTime();
	};

	//Hide the control Time to edit the position of the arrows
	videojs.Player.prototype.hideControlTime = function(){
		return this.rangeslider.hidecontrolTime();
	};

	//Set a Value in second for both arrows
	videojs.Player.prototype.setValueSlider = function(start, end){
		return this.rangeslider.setValues(start, end);
	};

	//The video will be played in a selected section
	videojs.Player.prototype.playBetween = function(start, end){
		return this.rangeslider.playBetween(start, end);
	};

	//The video will loop between to values
	videojs.Player.prototype.loopBetween = function (start, end) {
	    return this.rangeslider.loop(start, end);
	};

	//Set a Value in second for the arrows
	videojs.Player.prototype.getValueSlider = function(){
		return this.rangeslider.getValues();
	};



	//----------------Create new Components----------------//

	//--Charge the new Component into videojs
	videojs.SeekBar.prototype.options_.children.RSTimeBar={}; //Range Slider Time Bar
	videojs.ControlBar.prototype.options_.children.ControlTimePanel={}; //Panel with the time of the range slider



	//-- Design the new components

	/**
	 * Range Slider Time Bar
	 * @param {videojs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	videojs.RSTimeBar = videojs.Component.extend({
	  /** @constructor */
		init: function(player, options){
			videojs.Component.call(this, player, options);
		}
	});

	videojs.RSTimeBar.prototype.init_ = function(){
	    	this.rs = this.player_.rangeslider;
	};

	videojs.RSTimeBar.prototype.options_ = {
		children: {
			'SeekRSBar': {}
		}
	};

	videojs.RSTimeBar.prototype.createEl = function(){
		return videojs.Component.prototype.createEl.call(this, 'div', {
			className: 'vjs-timebar-RS',
			innerHTML: ''
		});
	};



	/**
	 * Seek Range Slider Bar and holder for the selection bars
	 * @param {videojs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	videojs.SeekRSBar = videojs.Component.extend({
	  /** @constructor */
		init: function(player, options){
			videojs.Component.call(this, player, options);
			this.on('mousedown', this.onMouseDown);
		}
	});

	videojs.SeekRSBar.prototype.init_ =function(){
	    	this.rs = this.player_.rangeslider;
	};

	videojs.SeekRSBar.prototype.options_ = {
		children: {
			'SelectionBar': {},
			'SelectionBarLeft': {},
			'SelectionBarRight': {},
			'TimePanel': {},
		}
	};

	videojs.SeekRSBar.prototype.createEl = function(){
		return videojs.Component.prototype.createEl.call(this, 'div', {
			className: 'vjs-rangeslider-holder'
		});
	};


	videojs.SeekRSBar.prototype.onMouseDown = function(event) {
		event.preventDefault();
		videojs.blockTextSelection();
		
		if(!this.rs.options.locked) {
			videojs.on(document, "mousemove", videojs.bind(this,this.onMouseMove));
			videojs.on(document, "mouseup", videojs.bind(this,this.onMouseUp));
		}
	};

	videojs.SeekRSBar.prototype.onMouseUp = function(event) {
		videojs.off(document, "mousemove", this.onMouseMove, false);
		videojs.off(document, "mouseup", this.onMouseUp, false);
	};

	videojs.SeekRSBar.prototype.onMouseMove = function(event) {
		var left = this.calculateDistance(event);
		
		if (this.rs.left.pressed)
			this.setPosition(0,left);
		else if (this.rs.right.pressed)
			this.setPosition(1,left);
			
		//Fix a problem with the presition in the display time
		var currentTimeDisplay = this.player_.controlBar.currentTimeDisplay.content;
		currentTimeDisplay.innerHTML = '<span class="vjs-control-text">Current Time </span>'+vjs.formatTime(this.rs._seconds(left), this.player_.duration());
		
		// Trigger slider change
		if (this.rs.left.pressed||this.rs.right.pressed) {
			this.rs._triggerSliderChange();
		}
	};

	videojs.SeekRSBar.prototype.setPosition = function(index,left,writeControlTime) {
		var writeControlTime = typeof writeControlTime!='undefined'?writeControlTime:true;
		//index = 0 for left side, index = 1 for right side
		var index = index || 0;
		
		// Position shouldn't change when handle is locked
		if(this.rs.options.locked)
			return false;

		// Check for invalid position
		if(isNaN(left)) 
			return false;
		
		// Check index between 0 and 1
		if(!(index === 0 || index === 1))
			return false;
			
		// Alias
		var ObjLeft = this.rs.left.el_,
			ObjRight = this.rs.right.el_,
			Obj = this.rs[index === 0 ? 'left' : 'right'].el_,
			tpr = this.rs.tpr.el_,
			tpl = this.rs.tpl.el_,
			bar = this.rs.bar,
			ctp = this.rs[index === 0 ? 'ctpl' : 'ctpr'].el_;
		
		//Check if left arrow is passing the right arrow
		if ((index === 0 ?bar.updateLeft(left):bar.updateRight(left))){
			Obj.style.left = (left * 100) + '%';
			index === 0 ?bar.updateLeft(left):bar.updateRight(left);
			
			this.rs[index === 0 ? 'start' : 'end'] = this.rs._seconds(left);
		
			//Fix the problem  when you press the button and the two arrow are underhand
			//left.zIndex = 10 and right.zIndex=20. This is always less in this case:
			if (index === 0){
				if((left) >= 0.9)
					ObjLeft.style.zIndex = 25;
				else
					ObjLeft.style.zIndex = 10;
			}
			
			//-- Panel
			var TimeText = videojs.formatTime(this.rs._seconds(left)),
				tplTextLegth = tpl.children[0].innerHTML.length;
			var MaxP,MinP,MaxDisP;
			if (tplTextLegth<=4) //0:00
				MaxDisP = this.player_.isFullScreen?3.25:6.5;
			else if(tplTextLegth<=5)//00:00
				MaxDisP = this.player_.isFullScreen?4:8;
			else//0:00:00
				MaxDisP = this.player_.isFullScreen?5:10;
			if(TimeText.length<=4){ //0:00
				MaxP = this.player_.isFullScreen?97:93;
				MinP = this.player_.isFullScreen?0.1:0.5;
			}else if(TimeText.length<=5){//00:00
				MaxP = this.player_.isFullScreen?96:92;
				MinP = this.player_.isFullScreen?0.1:0.5;
			}else{//0:00:00
				MaxP = this.player_.isFullScreen?95:91;
				MinP = this.player_.isFullScreen?0.1:0.5;
			}
			
			if (index===0){
				tpl.style.left = Math.max(MinP,Math.min(MaxP,(left * 100 - MaxDisP/2))) + '%';
				
				if ((tpr.style.left.replace("%","") - tpl.style.left.replace("%",""))<=MaxDisP)
					tpl.style.left = Math.max(MinP,Math.min(MaxP,tpr.style.left.replace("%","")-MaxDisP)) + '%';
				tpl.children[0].innerHTML = TimeText;
			}else{
				tpr.style.left = Math.max(MinP,Math.min(MaxP,(left * 100 - MaxDisP/2))) + '%';
				
				if (((tpr.style.left.replace("%","")||100) - tpl.style.left.replace("%",""))<=MaxDisP)
					tpr.style.left = Math.max(MinP,Math.min(MaxP,tpl.style.left.replace("%","")-0+MaxDisP)) + '%';
				tpr.children[0].innerHTML = TimeText;
			}
			//-- Control Time
			if(writeControlTime){
				var time = TimeText.split(":"),
					h,m,s;
				if(time.length == 2){
					h = 00;
					m = time[0];
					s = time[1];
				}else{
					h = time[0];
					m = time[1];
					s = time[2];
				}
				ctp.children[0].value = h;
				ctp.children[1].value = m;
				ctp.children[2].value = s;
			}
		}
		return true;
	};

	videojs.SeekRSBar.prototype.calculateDistance = function(event){
		var rstbX = this.getRSTBX();
		var rstbW = this.getRSTBWidth();
		var handleW = this.getWidth();

		// Adjusted X and Width, so handle doesn't go outside the bar
		rstbX = rstbX + (handleW / 2);
		rstbW = rstbW - handleW;

		// Percent that the click is through the adjusted area
		return Math.max(0, Math.min(1, (event.pageX - rstbX) / rstbW));
	};

	videojs.SeekRSBar.prototype.getRSTBWidth = function() {
		return this.el_.offsetWidth;
	};
	videojs.SeekRSBar.prototype.getRSTBX = function() {
		return videojs.findPosition(this.el_).left;
	};
	videojs.SeekRSBar.prototype.getWidth = function() {
		return this.rs.left.el_.offsetWidth;//does not matter left or right
	};



	/**
	 * This is the bar with the selection of the RangeSlider
	 * @param {videojs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	videojs.SelectionBar = videojs.Component.extend({
	  /** @constructor */
		init: function(player, options){
			videojs.Component.call(this, player, options);
			this.on('mouseup', this.onMouseUp);
			this.fired = false;
		}
	});

	videojs.SelectionBar.prototype.init_ = function(){
	    	this.rs = this.player_.rangeslider;
	};

	videojs.SelectionBar.prototype.createEl = function(){
		return videojs.Component.prototype.createEl.call(this, 'div', {
			className: 'vjs-selectionbar-RS'
		});
	};

	videojs.SelectionBar.prototype.onMouseUp = function(){
		var start = this.rs.left.el_.style.left.replace("%",""),
			end = this.rs.right.el_.style.left.replace("%",""),
			duration = this.player_.duration(),
			precision = this.rs.updatePrecision,
			segStart = videojs.round(start * duration/100, precision),
			segEnd = videojs.round(end * duration/100, precision);
		this.player_.currentTime(segStart);
		this.player_.play();
		this.rs.bar.activatePlay(segStart,segEnd);
	};

	videojs.SelectionBar.prototype.updateLeft = function(left) {
		var rightVal = this.rs.right.el_.style.left!=''?this.rs.right.el_.style.left:100;
		var right = parseFloat(rightVal) / 100;
		
		var width = videojs.round((right - left),this.rs.updatePrecision); //round necessary for not get 0.6e-7 for example that it's not able for the html css width
		
		//(right+0.00001) is to fix the precision of the css in html
		if(left <= (right+0.00001)) {
				this.rs.bar.el_.style.left = (left * 100) + '%';
				this.rs.bar.el_.style.width = (width * 100) + '%';
				return true;
		}
		return false;
	};
			
	videojs.SelectionBar.prototype.updateRight = function(right) {
		var leftVal = this.rs.left.el_.style.left!=''?this.rs.left.el_.style.left:0;
		var left = parseFloat(leftVal) / 100;
		
		var width = videojs.round((right - left),this.rs.updatePrecision);//round necessary for not get 0.6e-7 for example that it's not able for the html css width
		
		//(right+0.00001) is to fix the precision of the css in html
		if((right+0.00001) >= left) {
			this.rs.bar.el_.style.width = (width * 100) + '%';
			this.rs.bar.el_.style.left = ((right  - width) * 100) + '%';
			return true;
		}
		return false;
	};

	videojs.SelectionBar.prototype.activatePlay = function(start,end){
		this.timeStart = start;
		this.timeEnd = end;
		
		this.suspendPlay();
		
		this.player_.on("timeupdate", videojs.bind(this,this._processPlay));
	};

	videojs.SelectionBar.prototype.suspendPlay = function(){
		this.fired = false;
		this.player_.off("timeupdate", videojs.bind(this,this._processPlay));
	};

	videojs.SelectionBar.prototype._processPlay = function (){
		//Check if current time is between start and end
	    if(this.player_.currentTime() >= this.timeStart && (this.timeEnd < 0 || this.player_.currentTime() < this.timeEnd)){
	        if(this.fired){ //Do nothing if start has already been called
	            return;
	        }
	        this.fired = true; //Set fired flag to true
	    }else{
	        if(!this.fired){ //Do nothing if end has already been called
	            return;
	        }
	        this.fired = false; //Set fired flat to false
	        this.player_.pause(); //Call end function
	        this.player_.currentTime(this.timeEnd);
	        this.suspendPlay();
	    }
	};

	videojs.SelectionBar.prototype.process_loop = function () {
	    var player = this.player;

	    if (player && this.looping) {
	        var current_time = player.currentTime();

	        if (current_time < this.timeStart || this.timeEnd > 0 &&  this.timeEnd < current_time) {
	            player.currentTime(this.timeStart);
	        }
	    }
	};

	/**
	 * This is the left arrow to select the RangeSlider
	 * @param {videojs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	videojs.SelectionBarLeft = videojs.Component.extend({
	  /** @constructor */
		init: function(player, options){
			videojs.Component.call(this, player, options);
			this.on('mousedown', this.onMouseDown);
			this.pressed = false;
		}
	});

	videojs.SelectionBarLeft.prototype.init_ = function(){
	    	this.rs = this.player_.rangeslider;
	};

	videojs.SelectionBarLeft.prototype.createEl = function(){
		return videojs.Component.prototype.createEl.call(this, 'div', {
			className: 'vjs-rangeslider-handle vjs-selectionbar-left-RS',
			innerHTML: '<div class="vjs-selectionbar-arrow-RS"></div><div class="vjs-selectionbar-line-RS"></div>'
		});
	};

	videojs.SelectionBarLeft.prototype.onMouseDown = function(event) {
		event.preventDefault();
		videojs.blockTextSelection();
		if(!this.rs.options.locked) {
			this.pressed = true;
			videojs.on(document, "mouseup", videojs.bind(this,this.onMouseUp));
			videojs.addClass(this.el_, 'active');
		}
	};

	videojs.SelectionBarLeft.prototype.onMouseUp = function(event) {
		videojs.off(document, "mouseup", this.onMouseUp, false);
		videojs.removeClass(this.el_, 'active');
		if(!this.rs.options.locked) {
			this.pressed = false;
		}
	};



	/**
	 * This is the right arrow to select the RangeSlider
	 * @param {videojs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	videojs.SelectionBarRight = videojs.Component.extend({
	  /** @constructor */
		init: function(player, options){
			videojs.Component.call(this, player, options);
			this.on('mousedown', this.onMouseDown);
			this.pressed = false;
		}
	});

	videojs.SelectionBarRight.prototype.init_ = function(){
	    	this.rs = this.player_.rangeslider;
	};

	videojs.SelectionBarRight.prototype.createEl = function(){
		return videojs.Component.prototype.createEl.call(this, 'div', {
			className: 'vjs-rangeslider-handle vjs-selectionbar-right-RS',
			innerHTML: '<div class="vjs-selectionbar-arrow-RS"></div><div class="vjs-selectionbar-line-RS"></div>'
		});
	};


	videojs.SelectionBarRight.prototype.onMouseDown = function(event) {
		event.preventDefault();
		videojs.blockTextSelection();
		if(!this.rs.options.locked) {
			this.pressed = true;
			videojs.on(document, "mouseup", videojs.bind(this,this.onMouseUp));
			videojs.addClass(this.el_, 'active');
		}
	};

	videojs.SelectionBarRight.prototype.onMouseUp = function(event) {
		videojs.off(document, "mouseup", this.onMouseUp, false);
		videojs.removeClass(this.el_, 'active');
		if(!this.rs.options.locked) {
			this.pressed = false;
		}
	};


	/**
	 * This is the time panel
	 * @param {videojs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	videojs.TimePanel = videojs.Component.extend({
	  /** @constructor */
		init: function(player, options){
			videojs.Component.call(this, player, options);
		}
	});

	videojs.TimePanel.prototype.init_ = function(){
	    	this.rs = this.player_.rangeslider;
	};

	videojs.TimePanel.prototype.options_ = {
		children: {
			'TimePanelLeft': {},
			'TimePanelRight': {},
		}
	};

	videojs.TimePanel.prototype.createEl = function(){
		return videojs.Component.prototype.createEl.call(this, 'div', {
			className: 'vjs-timepanel-RS'
		});
	};


	/**
	 * This is the left time panel 
	 * @param {videojs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	videojs.TimePanelLeft = videojs.Component.extend({
	  /** @constructor */
		init: function(player, options){
			videojs.Component.call(this, player, options);
		}
	});

	videojs.TimePanelLeft.prototype.init_ = function(){
	    	this.rs = this.player_.rangeslider;
	};

	videojs.TimePanelLeft.prototype.createEl = function(){
		return videojs.Component.prototype.createEl.call(this, 'div', {
			className: 'vjs-timepanel-left-RS',
			innerHTML: '<span class="vjs-time-text">00:00</span>'
		});
	};


	/**
	 * This is the right time panel 
	 * @param {videojs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	videojs.TimePanelRight = videojs.Component.extend({
	  /** @constructor */
		init: function(player, options){
			videojs.Component.call(this, player, options);
		}
	});

	videojs.TimePanelRight.prototype.init_ = function(){
	    	this.rs = this.player_.rangeslider;
	};

	videojs.TimePanelRight.prototype.createEl = function(){
		return videojs.Component.prototype.createEl.call(this, 'div', {
			className: 'vjs-timepanel-right-RS',
			innerHTML: '<span class="vjs-time-text">00:00</span>'
		});
	};


	/**
	 * This is the control time panel
	 * @param {videojs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	videojs.ControlTimePanel= videojs.Component.extend({
	  /** @constructor */
		init: function(player, options){
			videojs.Component.call(this, player, options);
		}
	});

	videojs.ControlTimePanel.prototype.init_ = function(){
	    	this.rs = this.player_.rangeslider;
	};


	videojs.ControlTimePanel.prototype.options_ = {
		children: {
			'ControlTimePanelLeft': {},
			'ControlTimePanelRight': {},
		}
	};

	videojs.ControlTimePanel.prototype.createEl = function(){
		return videojs.Component.prototype.createEl.call(this, 'div', {
			className: 'vjs-controltimepanel-RS vjs-control',
		});
	};

	videojs.ControlTimePanel.prototype.enable = function(enable){
		var enable = typeof enable != 'undefined'? enable:true;
		this.rs.ctpl.el_.children[0].disabled = enable?"":"disabled";
		this.rs.ctpl.el_.children[1].disabled = enable?"":"disabled";
		this.rs.ctpl.el_.children[2].disabled = enable?"":"disabled";
		this.rs.ctpr.el_.children[0].disabled = enable?"":"disabled";
		this.rs.ctpr.el_.children[1].disabled = enable?"":"disabled";
		this.rs.ctpr.el_.children[2].disabled = enable?"":"disabled";
	};


	/**
	 * This is the control left time panel 
	 * @param {videojs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	videojs.ControlTimePanelLeft = videojs.Component.extend({
	  /** @constructor */
		init: function(player, options){
			videojs.Component.call(this, player, options);
			this.on('keyup', this.onKeyUp);
			this.on('keydown', this.onKeyDown);
		}
	});

	videojs.ControlTimePanelLeft.prototype.init_ = function(){
	    this.rs = this.player_.rangeslider;
		this.timeOld = {};
	};

	videojs.ControlTimePanelLeft.prototype.createEl = function(){
		return videojs.Component.prototype.createEl.call(this, 'div', {
			className: 'vjs-controltimepanel-left-RS',
			innerHTML: 'Start: <input type="text" id="controltimepanel" maxlength="2" value="00"/>:<input type="text" id="controltimepanel" maxlength="2" value="00"/>:<input type="text" id="controltimepanel" maxlength="2" value="00"/>'
		});
	};

	videojs.ControlTimePanelLeft.prototype.onKeyDown = function(event) {
		this.timeOld[0] = this.el_.children[0].value;
		this.timeOld[1] = this.el_.children[1].value;
		this.timeOld[2] = this.el_.children[2].value;
	};

	videojs.ControlTimePanelLeft.prototype.onKeyUp = function(event) {
		this.rs._checkControlTime(0,this.el_.children,this.timeOld);
	};



	/**
	 * This is the control right time panel 
	 * @param {videojs.Player|Object} player
	 * @param {Object=} options
	 * @constructor
	 */
	videojs.ControlTimePanelRight = videojs.Component.extend({
	  /** @constructor */
		init: function(player, options){
			videojs.Component.call(this, player, options);
			this.on('keyup', this.onKeyUp);
			this.on('keydown', this.onKeyDown);
		}
	});

	videojs.ControlTimePanelRight.prototype.init_ = function(){
	    	this.rs = this.player_.rangeslider;
	    	this.timeOld = {};
	};

	videojs.ControlTimePanelRight.prototype.createEl = function(){
		return videojs.Component.prototype.createEl.call(this, 'div', {
			className: 'vjs-controltimepanel-right-RS',
			innerHTML: 'End: <input type="text" id="controltimepanel" maxlength="2" value="00"/>:<input type="text" id="controltimepanel" maxlength="2" value="00"/>:<input type="text" id="controltimepanel" maxlength="2" value="00"/>'
		});
	};

	videojs.ControlTimePanelRight.prototype.onKeyDown = function(event) {
		this.timeOld[0] = this.el_.children[0].value;
		this.timeOld[1] = this.el_.children[1].value;
		this.timeOld[2] = this.el_.children[2].value;
	};

	videojs.ControlTimePanelRight.prototype.onKeyUp = function(event) {
		this.rs._checkControlTime(1,this.el_.children,this.timeOld);
	};
	})();


/***/ },
/* 49 */
/***/ function(module, exports) {

	// videojs-speed-plugin

	videojs.plugin('speed', function(options) {
	    var player = this,
	        items = [],
	        selectedItem;

	    function changeSpeed(item) {
	        var opt = item.options();
	        item.selected(true);
	        player.playbackRate(opt.rate);

	        var nodes = player.controlBar.speedButton.el().firstChild.children;
	        for (var i = 0, l = nodes.length; i < l; i++) {
	            if (nodes[i].className == 'vjs-current-speed') {
	                nodes[i].innerHTML = opt.label;
	            }
	        }
	    }

	    videojs.SpeedMenuItem = videojs.MenuItem.extend({
	        init: function(player, options) {
	            videojs.MenuItem.call(this, player, options);
	            this.on('click', this.onClick);
	        }
	    });
	    videojs.SpeedMenuItem.prototype.onClick = function(e) {
	        for (var i = 0, l = items.length; i < l; i++) {
	            items[i].selected(false);
	        }
	        changeSpeed(this);
	    }

	    videojs.SpeedButton = videojs.MenuButton.extend({
	        init: function(player, options){
	            videojs.MenuButton.call(this, player, options);
	        }
	    });
	    videojs.SpeedButton.prototype.createItems = function() {
	        var item;
	        options.forEach(function(opt) {
	            item = new videojs.SpeedMenuItem(player, { label: opt.text, rate: opt.rate });
	            if (opt.selected) {
	                selectedItem = item;
	            }
	            items.push(item);
	        });
	        return items;
	    }

	    player.ready(function() {
	        var button = new videojs.SpeedButton(player, {
	            el: videojs.Component.prototype.createEl(null, {
	                className: 'vjs-res-button vjs-menu-button vjs-control',
	                innerHTML: '<div class="vjs-control-content" style="font-size: 11px; line-height: 28px;"><span class="vjs-current-speed"></span></div>',
	                role: 'button'
	            })
	        });
	        player.controlBar.speedButton = player.controlBar.addChild(button);
	        changeSpeed(selectedItem);
	        
	        try {
	            if (player.c.P.id.indexOf('html5') == -1) { // FIXME player.c.P
	                button.hide();
	            }
	        } catch (err) {
	            console.log("can't detect tech.");
	        }
	    });
	});



/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	(function(Annotator) {
	Annotator.Plugin.TimeRangeEditor = function(element, options) {
		
		// extends the Plugin class from Annotator
		Annotator.Plugin.apply(this, arguments);

		this.field = null;

		return this;
	};

	Annotator.Plugin.TimeRangeEditor.prototype = new Annotator.Plugin();

	Annotator.Plugin.TimeRangeEditor.prototype.pluginInit = function() {
		if (!Annotator.supported()){
			return;
		}
		var self = Annotator._instances[0].plugins.TimeRangeEditor;
		self.field = self.annotator.editor.addField({
			type: 'input',
			load: self.updateEditor,
		});

		jQuery(self.field).html("<div class='timeRangeEditor' style='padding-left: 10px;padding-right:10px;'>Start: <input type='number' id='start' style='min-width: 30%!important;width: 30%!important;display:inline-block!important;'></input>seconds.<button role='button' style='padding:3px;margin-left:35px;margin-bottom:-30px;width:130px' id='preview' class='btn btn-default' aria-label='Select to preview range selected.'>Preview Video</button><br>End:&nbsp;&nbsp;&nbsp;<input type='number' id='end' style='min-width: 30%!important;width: 30%!important;display:inline-block!important;'></input>seconds.</div>");

	};

	Annotator.Plugin.TimeRangeEditor.prototype.updateEditor = function(field, annotation) {
		var times = AController.targetObjectController.vid.rangeslider.getValues();
		var startElement = jQuery(field).find('#start');
		var endElement = jQuery(field).find('#end');
		startElement.val(Math.floor(times.start));
		endElement.val(Math.floor(times.end));
		
		startElement.on('change', function(e){
			AController.targetObjectController.vid.rangeslider.setValue(0, startElement.val());
		});

		endElement.on('change', function(e){
			AController.targetObjectController.vid.rangeslider.setValue(1, endElement.val());
		});
		var self = Annotator._instances[0]
		console.log(self.editor);
		jQuery('#preview').click(function(e) {
			e.preventDefault();
			AController.targetObjectController.vid.player().playBetween(startElement.val(), endElement.val());
			
			if (jQuery('#transcript').is(":hidden")){
				var translate_editor = (jQuery(window).height() - (jQuery('#viewer').height() + 50)) * -1;
	        	AController.annotationCore.annotation_tool.editor.element.css('transform', 'translateY('+translate_editor+'px)');
	        	jQuery("#transcript").show();
		        jQuery('#viewer').css('height', '80%');
			}
			
		});

	};

	})( true ? __webpack_require__(24) : window.Annotator);


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Annotator) {// ----------------Utilities---------------- //
	var _ref;
	var __bind = function(fn, me) { 
	    return function() { 
	        return fn.apply(me, arguments); 
	    }; 
	};
	var __hasProp = {}.hasOwnProperty;
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
	var createDateFromISO8601 = function(string) {
	  var d, date, offset, regexp, time, _ref;
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
	    offset *= (_ref = d[15] === '-') != null ? _ref : {
	      1: -1
	    };
	  }
	  offset -= date.getTimezoneOffset();
	  time = Number(date) + (offset * 60 * 1000);
	  date.setTime(Number(time));
	  return date;
	};
	var Util = typeof Util != 'undefined' ? Util : {};
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




	// ----------------Load videojs-Annotation Plugin---------------- //
	(function () {
	    // -- Load Annotation plugin in videojs
	    function vjsAnnotation_(options){
	        var player = this;
	    
	        // variables to know if it is ready
	    
	        player.annotations = new vjsAnnotation(player, options);
	    
	        // When the DOM, Range Slider and the video media is loaded
	        function initialVideoFinished(event) {
	            // -- wait for plugins -- //
	            var wrapper = $('.annotator-wrapper').parent()[0];
	            var annotator = $.data(wrapper, 'annotator');
	            
	            // wait for Annotator and the Share plugin
	            if (typeof Annotator.Plugin["Share"] === 'function') {
	                if (typeof annotator.isShareLoaded != 'undefined' && annotator.isShareLoaded) {
	                    annotator.unsubscribe('shareloaded', initialVideoFinished);
	                } else {
	                    annotator.subscribe('shareloaded', initialVideoFinished);
	                    return false;
	                }
	            }
	        
	            var plugin = player.annotations;
	        
	            // All components will be initialize after they have been loaded by videojs
	            for (var index in plugin.components) {
	                plugin.components[index].init_();
	            }

	            player.annotations.AnConBut.show();
	            //player.annotations.BigNewAn.show();
	        
	            // set the position of the big buttom
	            plugin.setposBigNew(plugin.options.posBigNew);
	        
	            if(!options.showDisplay) 
	                plugin.hideDisplay();
	            if(!options.showStatistics) 
	                plugin.hideStatistics();
	        
	        
	            // Get current instance of annotator 
	            player.annotator = annotator;
	            plugin.annotator = annotator;
	        
	            // get annotations
	            var allannotations = typeof(annotator.plugins['LocalStore']) !== 'undefined' ? annotator.plugins['LocalStore'].annotations : annotator.plugins['Store'].annotations;
	            plugin.refreshDisplay();
	        
	            // -- Listener to Range Slider Plugin
	            player.rangeslider.rstb.on('mousedown', function(){plugin._onMouseDownRS(event)});
	            // Open the autoPlay from the API
	            if (player.autoPlayAPI) {
	                var OnePlay = function () {
	                    player.annotations.showAnnotation(player.autoPlayAPI);
	                    $('html, body').animate({
	                        scrollTop: $("#" + player.id_).offset().top},
	                        'slow');
	                };
	                if (player.techName == 'Youtube')
	                    setTimeout(OnePlay, 100); // fix the delay playing youtube
	                else
	                    OnePlay();
	            }
	        
	            // set the number of Annotations to display
	            plugin.refreshDesignPanel();
	        
	            // check full-screen change
	            player.on('fullscreenchange', function() {
	                if (player.isFullScreen) {
	                    $(player.annotator.wrapper[0]).addClass('vjs-fullscreen');
	                } else {
	                    $(player.annotator.wrapper[0]).removeClass('vjs-fullscreen');
	                }
	                plugin.refreshDesignPanel();
	            });
	        
	            // loaded plugin
	            plugin.loaded = true;
	        }
	        player.one('loadedRangeSlider', initialVideoFinished); // Loaded RangeSlider
	    
	        //console.log("Loaded Annotation Plugin");
	    }
	    videojs.plugin('annotations', vjsAnnotation_);


	    // -- Plugin
	    function vjsAnnotation(player, options) {
	        var player = player || this;
	    
	        this.player = player;
	        
	        this.components = {}; // holds any custom components we add to the player

	        options = options || {}; // plugin options
	        
	        if(!options.hasOwnProperty('posBigNew')) 
	            options.posBigNew = 'none'; // ul = up left || ur = up right || bl = below left || br = below right || c = center
	        if(!options.hasOwnProperty('showDisplay')) 
	            options.showDisplay = false; 
	        if(!options.hasOwnProperty('showStatistics')) 
	            options.showStatistics = false; 
	        
	        this.options = options;
	    
	        this.init();
	    }

	    // -- Methods
	    vjsAnnotation.prototype = {
	        /* Constructor */
	        init: function() {
	            var player = this.player || {};
	            var controlBar = player.controlBar;
	            var seekBar = player.controlBar.progressControl.seekBar;
	                
	            this.updatePrecision = 3;
	            
	            // Components and Quick Aliases
	            //this.BigNewAn = this.components.BigNewAnnotation = player.BigNewAnnotation;
	            this.AnConBut = this.components.AnContainerButtons = player.AnContainerButtons;
	            this.ShowSt = this.components.ShowStatistics = this.AnConBut.ShowStatistics;
	            this.NewAn = this.components.NewAnnotation = this.AnConBut.NewAnnotation;
	            this.ShowAn =this.components.ShowAnnotations = this.AnConBut.ShowAnnotations;
	            this.BackAnDisplay = this.components.BackAnDisplay = controlBar.BackAnDisplay; // Background of the panel
	            this.AnDisplay = this.components.AnDisplay = controlBar.BackAnDisplay.AnDisplay; // Panel with all the annotations
	            this.AnStat = this.components.AnStat = controlBar.BackAnDisplay.AnStat; // Panel with statistics of the number of annotations
	            this.BackAnDisplayScroll = this.components.BackAnDisplayScroll = controlBar.BackAnDisplayScroll; // Back Panel with all the annotations
	            this.backDSBar = this.components.BackAnDisplayScrollBar = this.BackAnDisplayScroll.BackAnDisplayScrollBar; // Scroll Bar
	            this.backDSBarSel = this.components.ScrollBarSelector = this.backDSBar.ScrollBarSelector; // Scroll Bar Selector
	            this.backDSTime = this.components.BackAnDisplayScrollTime = this.BackAnDisplayScroll.BackAnDisplayScrollTime; // Back Panel with time of the annotations in the scroll
	            this.rsd = this.components.RangeSelectorDisplay = controlBar.BackAnDisplay.RangeSelectorDisplay; // Selection the time to display the annotations
	            this.rsdl = this.components.RangeSelectorLeft = this.rsd.RangeSelectorLeft;
	            this.rsdr = this.components.RangeSelectorRight = this.rsd.RangeSelectorRight;
	            this.rsdb = this.components.RangeSelectorBar = this.rsd.RangeSelectorBar;
	            this.rsdbl = this.components.RangeSelectorBarL = this.rsdb.RangeSelectorBarL;
	            this.rsdbr = this.components.RangeSelectorBarR = this.rsdb.RangeSelectorBarR;
	            this.rs = player.rangeslider;
	            
	            // local variables
	            this.editing = false;
	            
	            var wrapper = $('.annotator-wrapper').parent()[0];
	            var annotator = $.data(wrapper, 'annotator');
	            var self = this;
	            // Subscribe to Annotator changes
	            annotator.subscribe("annotationsLoaded", function (annotations) {
	                if(self.loaded)
	                    self.refreshDisplay();
	            });
	            annotator.subscribe("annotationUpdated", function (annotation) {
	               if(self.loaded)
	                    self.refreshDisplay();
	            });
	            annotator.subscribe("annotationDeleted", function (annotation) {
	                var annotations = typeof(annotator.plugins['LocalStore']) !== 'undefined' ? annotator.plugins['LocalStore'].annotations : annotator.plugins['Store'].annotations;
	                var tot = typeof annotations !== 'undefined' ? annotations.length : 0;
	                var attempts = 0; // max 100
	                // This is to watch the annotations object, to see when is deleted the annotation
	                var ischanged = function() {
	                    var new_tot = typeof(annotator.plugins['LocalStore']) !== 'undefined' ? annotator.plugins['LocalStore'].annotations.length : annotator.plugins['Store'].annotations.length;
	                    if (attempts < 100)
	                        setTimeout(function(){
	                            if (new_tot !== tot) {
	                                if(self.loaded)
	                                    self.refreshDisplay();
	                            } else {
	                                attempts++;
	                                ischanged();
	                            }
	                        }, 100); // wait for the change in the annotations
	                };
	                ischanged();
	            });
	            this.AnConBut.hide();
	           // this.BigNewAn.hide(); // Hide until the video is load
	        },
	        newan: function(start, end) {
	            var player = this.player;
	            var annotator = this.annotator;
	            var sumPercent = 10; // percentage for the last mark
	            var currentTime = player.currentTime();
	            var lastTime = this._sumPercent(currentTime, sumPercent); 
	            
	            var start = typeof start !== 'undefined' ? start : currentTime;
	            var end = typeof end !== 'undefined' ? end : lastTime;
	                
	            this._reset();
	            
	            // set position RS and pause the player
	            player.showSlider();
	            player.pause();
	            
	            player.setValueSlider(start, end);
	            
	            // This variable is to say the editor that we want create a VideoJS annotation
	            annotator.editor.VideoJS = this.player.id_;
	            
	            annotator.adder.show();
	            
	            this._setOverRS(annotator.adder);

	            // Open a new annotator dialog
	            annotator.onAdderClick();
	        },
	        showDisplay: function() {
	            this._reset();
	            // show
	            this.BackAnDisplay.removeClass('disable'); // show the Container
	            this.BackAnDisplayScroll.removeClass('disable'); // show the scroll
	            // active button
	            this.ShowAn.addClass('active');
	            this.options.showDisplay =true;
	            console.log(this);
	            jQuery(this.player).trigger('annotationsDisplayed');
	        },
	        hideDisplay: function() {
	            // hide
	            this.BackAnDisplay.addClass('disable'); // hide the Container
	            this.BackAnDisplayScroll.addClass('disable'); // hide the scroll
	            // no active button
	            videojs.removeClass(this.ShowAn.el_, 'active');
	            this.options.showDisplay =false;
	        },
	        showStatistics: function() {
	            this._reset();
	            // show
	            this.BackAnDisplay.removeClass('disable'); // show the Container
	            this.AnStat.removeClass('disable'); // show Statistics
	            // mode (this mode will hide the annotations to show the statistics in the container)
	            this.BackAnDisplay.addClass('statistics'); // mode statistics 
	            // paint
	            this.AnStat.paintCanvas(); // refresh canvas
	            // active button
	            this.ShowSt.addClass('active');
	            this.options.showStatistics =true;
	        },
	        hideStatistics: function() {
	            // hide
	            this.BackAnDisplay.addClass('disable'); // hide the Container
	            this.AnStat.addClass('disable'); // hide Statistics
	            // remove mode statistics
	            this.BackAnDisplay.removeClass('statistics');
	            // no active button
	            this.ShowSt.removeClass('active');
	            this.options.showStatistics = false;
	        },
	        showAnnotation: function(annotation) {
	            var isVideo = this._isVideoJS(annotation);
	            if (isVideo) {
	                var start = annotation.rangeTime.start;
	                var end = annotation.rangeTime.end;
	                var duration = this.player.duration();
	                var isPoint = videojs.round(start, 3) == videojs.round(end, 3);
	                
	                this._reset();
	            
	                // show the range slider
	                this.rs.show();
	            
	                // set the slider position
	                this.rs.setValues(start, end);
	            
	                // lock the player        
	                this.rs.lock();
	                console.log(start);
	                console.log(end);
	                // play
	                if (!isPoint)
	                    this.rs.playBetween(start, end);
	                    
	                // fix small bar
	                var width = Math.min(1, Math.max(0.005, (this.rs._percent(end - start)))) * 100;
	                this.rs.bar.el_.style.width = width + '%';
	                    
	                // Add the annotation object to the bar 
	                var bar = isPoint ? this.rs[((duration - start) / duration < 0.1) ? 'left' : 'right'].el_ : this.rs.bar.el_;
	                var holder = $(this.rs.left.el_).parent()[0];
	                $(holder).append('<span class="annotator-hl"></div>');
	                $(bar).appendTo( $(holder).find('.annotator-hl'));
	            
	                var span = $(bar).parent()[0];
	                $.data(span, 'annotation', annotation); // Set the object in the span
	            
	                // set the editor over the range slider
	                this._setOverRS(this.annotator.editor.element);
	                this.annotator.editor.checkOrientation();
	            
	                // hide the panel
	                this.rs.hidePanel();
	            }
	        },
	        hideAnnotation: function() {
	            this.rs.hide();
	            this.rs.showPanel();
	            
	            // remove the last single showed annotation
	            var holder = $(this.rs.left.el_).parent()[0];
	            var holderRight = $(this.rs.right.el_).parent()[0];
	            if ($(holder).find('.annotator-hl').length > 0) {
	                $($(holder).find('.annotator-hl')[0].children[0]).appendTo(holder);
	                $(holder).find('.annotator-hl').remove();
	            } else if ($(holderRight).find('.annotator-hl').length > 0) {
	                $($(holderRight).find('.annotator-hl')[0].children[0]).appendTo(holderRight);
	                $(holderRight).find('.annotator-hl').remove();
	            }
	        },
	        editAnnotation: function(annotation, editor) {
	            // This will be usefull when we are going to edit an annotation.
	            if (this._isVideoJS(annotation)) {
	                this.hideDisplay();
	                var player = this.player;
	                var editor = editor || this.annotator.editor;
	                
	                // show the slider and set in the position
	                player.showSlider();
	                player.unlockSlider();
	                player.setValueSlider(annotation.rangeTime.start, annotation.rangeTime.end);
	                
	                // show the time panel
	                player.showSliderPanel();
	                
	                // set the editor over the range slider
	                this._setOverRS(editor.element);
	                editor.checkOrientation();
	                
	                // set the VideoJS variable
	                editor.VideoJS = player.id_;
	            }
	        },
	        refreshDisplay: function() {
	            var count = 0;
	            var allannotations = typeof(this.annotator.plugins['LocalStore']) !== 'undefined' ? this.annotator.plugins['LocalStore'].annotations : this.annotator.plugins['Store'].annotations;
	            
	            // Sort by date the Array
	            this._sortByDate(allannotations);
	            
	            // reset the panel
	            $(this.AnDisplay.el_).find('span').remove(); // remove the last html items
	            $(this.player.el_).find('.vjs-anpanel-annotation .annotation').remove(); // remove a deleted annotation without span wrapper
	            
	            for (var item in allannotations) {
	                var an = allannotations[item];
	                
	                // check if the annotation is a video annotation
	                if (this._isVideoJS(an)){
	                    var div = document.createElement('div');
	                    var span = document.createElement('span');
	                    var start = this.rs._percent(an.rangeTime.start) * 100;
	                    var end = this.rs._percent(an.rangeTime.end) * 100;
	                    var width;
	                    span.appendChild(div);
	                    span.className = "annotator-hl";
	                    width = Math.min(100, Math.max(0.2, end - start));
	                    div.className = "annotation";
	                    div.id = count;
	                    div.style.top = count + "em";
	                    div.style.left = start + '%';
	                    div.style.width = width + '%';
	                    div.start = an.rangeTime.start;
	                    div.end = an.rangeTime.end;
	                    this.AnDisplay.el_.appendChild(span);
	                    
	                    // detect point annotations
	                    if (videojs.round(start, 0) == videojs.round(end, 0)) {
	                        $(div).css('width', '');
	                        $(div).addClass("point");
	                    }
	                    
	                    // Set the object in the div
	                    $.data(span, 'annotation', an);
	                    // Add the highlights to the annotation
	                    an.highlights = $(span);
	                    
	                    count++;
	                }
	            };
	            var start = this.rs._seconds(parseFloat(this.rsdl.el_.style.left) / 100);
	            var end = this.rs._seconds(parseFloat(this.rsdr.el_.style.left) / 100);
	                
	            this.showBetween(start, end, this.rsdl.include, this.rsdr.include);
	        },
	        showBetween: function (start, end, includeLeft, includeRight) {
	            var duration = this.player.duration();
	            var start = start || 0;
	            var end = end || duration;
	            var annotationsHTML = $.makeArray($(this.player.el_).find('.vjs-anpanel-annotation .annotator-hl'));
	            var count = 0;
	            var wrapper = $('.annotator-wrapper').parent()[0];
	            var annotator = $.data(wrapper, 'annotator');
	            for (var index in annotationsHTML) {
	                var an = $.data(annotationsHTML[index], 'annotation');
	                var expressionLeft = includeLeft ? (an.rangeTime.end >= start) : (an.rangeTime.start >= start);
	                var expressionRight = includeRight ? (an.rangeTime.start <= end) : (an.rangeTime.end <= end);
	                if (this._isVideoJS(an) && expressionLeft && expressionRight && typeof an.highlights[0] !== 'undefined') {
	                    var annotationHTML = an.highlights[0].children[0];
	                    annotationHTML.style.marginTop = (-1 * parseFloat(annotationHTML.style.top) + count) + 'em';
	                    $(an.highlights[0]).show();
	                    annotator.publish('annotationShown', an.id);
	                    count++;
	                } else if (this._isVideoJS(an) && typeof an.highlights[0] !== 'undefined') {
	                    $(an.highlights[0]).hide();
	                    an.highlights[0].children[0].style.marginTop = '';
	                    annotator.publish('annotationHidden', an.id);
	                }
	            }
	            // Set the times in the scroll time panel
	            this.backDSTime.setTimes();
	        },
	        setposBigNew: function(pos) {
	            /*var pos = pos || 'ul';
	            var el = this.player.BigNewAnnotation.el_;
	            videojs.removeClass(el, 'ul');
	            videojs.removeClass(el, 'ur');
	            videojs.removeClass(el, 'c');
	            videojs.removeClass(el, 'bl');
	            videojs.removeClass(el, 'br');
	            videojs.addClass(el, pos);*/
	        },
	        pressedKey: function (key) {
	            var player = this.player;
	            var rs = this.player.rs;
	            if (typeof key !== 'undefined' && key == 73) { // -- i key
	                this._reset();
	                
	                // show slider
	                this.rs.show();
	                // hide other elements
	                this.rs._reset();
	                this.rs.setValue(0, player.currentTime());
	                this.rs.right.el_.style.visibility = 'hidden';
	                this.rs.tpr.el_.style.visibility = 'hidden';
	                this.rs.ctpr.el_.style.visibility = 'hidden';
	                this.rs.bar.el_.style.visibility = 'hidden';
	                this.lastStartbyKey = player.currentTime();
	            } else if (typeof key!='undefined' && key==79) { // -- o key
	                if (this.rs.bar.el_.style.visibility == 'hidden') { // the last action was to type the i key
	                    var start = this.lastStartbyKey != 'undefined' ? this.lastStartbyKey:0;
	                    this.newan(start, player.currentTime());
	                } else {
	                    this.newan(player.currentTime(), player.currentTime());
	                }
	            }
	        },
	        refreshDesignPanel: function() {
	            var player = this.player;
	            var emtoPx = parseFloat($(this.backDSBar.el_).css('width'));
	            var playerHeight = parseFloat($(player.el_).css('height'));
	            var controlBarHeight = parseFloat($(player.controlBar.el_).css('height'));
	            var newHeight = (playerHeight - controlBarHeight - 80) / emtoPx - 5;
	            this.BackAnDisplay.el_.style.height = this.backDSBar.el_.style.height = (newHeight + 'em');
	            this.BackAnDisplay.el_.style.top = this.backDSBar.el_.style.top = "-" + (newHeight + 3 + 'em');
	            this.BackAnDisplayScroll.el_.children[0].style.top = "-" + (newHeight + 5 + 'em');
	            this.backDSTime.el_.children[0].style.top = "-" + (newHeight + 5 + 'em');
	        },
	        _reset: function() {
	            // Hide all the components
	            this.hideDisplay();
	            this.hideAnnotation();
	            this.hideStatistics();
	            this.player.annotator.adder.hide(); 
	            this.player.annotator.editor.hide();
	            this.player.annotator.viewer.hide();
	            
	            // make visible all the range slider element that maybe were hidden in pressedKey event
	            this.rs.right.el_.style.visibility = '';
	            this.rs.tpr.el_.style.visibility = '';
	            this.rs.ctpr.el_.style.visibility = '';
	            this.rs.bar.el_.style.visibility = '';
	            
	            // by default the range slider must be unlocked
	            this.rs.unlock();
	            
	            // whether there is a playing selection
	            this.rs.bar.suspendPlay(); 
	            
	            // refresh the design
	            this.refreshDesignPanel();
	        },
	        _setOverRS: function(elem) {
	            var annotator = this.player.annotator;
	            var wrapper = $('.annotator-wrapper')[0];
	            var positionLeft = videojs.findPosition(this.rs.left.el_);
	            var positionRight = videojs.findPosition(this.rs.right.el_);
	            var positionAnnotator = videojs.findPosition(wrapper);
	            var positionAdder = {};
	                
	            elem[0].style.display = 'block'; // Show the adder
	            
	            if (this.player.isFullScreen) {
	                positionAdder.top = positionLeft.top;
	                positionAdder.left = positionLeft.left + (positionRight.left - positionLeft.left) / 2;
	            } else {
	                positionAdder.left = positionLeft.left + (positionRight.left - positionLeft.left) / 2 - positionAnnotator.left;
	                positionAdder.top = positionLeft.top - positionAnnotator.top;
	            }
	            
	            elem.css(positionAdder);
	        },
	        _onMouseDownRS: function(event) {
	            event.preventDefault();
	        
	            if (!this.rs.options.locked) {
	                videojs.on(document, "mousemove", videojs.bind(this, this._onMouseMoveRS));
	                videojs.on(document, "mouseup", videojs.bind(this, this._onMouseUpRS));
	            }
	        },
	        _onMouseMoveRS: function(event) {
	            var player = this.player;
	            var annotator = player.annotator;
	            var rs = player.rangeslider;
	            annotator.editor.element[0].style.display = 'none';
	            rs.show();
	            this._setOverRS(annotator.adder);
	        },
	        _onMouseUpRS: function(event) {
	            videojs.off(document, "mousemove", this._onMouseMoveRS, false);
	            videojs.off(document, "mouseup", this._onMouseUpRS, false);
	            
	            var player = this.player;
	            var annotator = player.annotator;
	            var rs = player.rangeslider;
	            annotator.editor.element[0].style.display = 'block';
	            
	            this._setOverRS(annotator.editor.element);
	        },
	        _sumPercent: function(seconds, percent) {
	            // the percentage is in %
	            var duration = this.player.duration();
	            var seconds = seconds || 0;
	            var percent = percent || 10;
	            percent = Math.min(100, Math.max(0, percent));
	            
	            if (isNaN(duration)) {
	                return 0;
	            }
	            return Math.min(duration, Math.max(0, seconds + duration * percent / 100));
	        },
	        // Detect if we are creating or editing a video-js annotation
	        _EditVideoAn: function () {
	            var annotator = this.annotator;
	            var isOpenVideojs = (typeof this.player != 'undefined');
	            var VideoJS = annotator.editor.VideoJS;
	            return (isOpenVideojs && typeof VideoJS!='undefined' && VideoJS!==-1);
	        },
	        // Detect if the annotation is a video-js annotation
	        _isVideoJS: function (an) {
	            var player = this.player;
	            var rt = an.rangeTime;
	            var isOpenVideojs = (typeof this.player !== 'undefined');
	            var isVideo = (typeof an.media !== 'undefined' && (an.media === 'video' || an.media === 'audio'));
	            var isContainer = (typeof an.target !== 'undefined' && an.target.container == player.id_ );
	            var isNumber = (typeof rt !== 'undefined' && !isNaN(parseFloat(rt.start)) && isFinite(rt.start) && !isNaN(parseFloat(rt.end)) && isFinite(rt.end));
	            var isSource = false;
	            if (isContainer) {
	                // Compare without extension
	                var isYoutube = (isOpenVideojs && typeof this.player.techName !== 'undefined') ? (this.player.techName === 'Youtube') : false;
	                var targetSrc = isYoutube ? an.target.src : an.target.src.substring(0, an.target.src.lastIndexOf("."));
	                var playerSrc = isYoutube ? player.options_.sources[0].src : player.options_.sources[0].src.substring(0, player.options_.sources[0].src.lastIndexOf("."));
	                isSource = (targetSrc === playerSrc);
	            }
	            return (isOpenVideojs && isVideo && isContainer && isSource && isNumber);
	        },
	        _sortByDate: function (annotations, type) {
	            var type = type || 'asc'; // asc => The value [0] will be the most recent date
	            annotations.sort(function(a, b) {
	                a = new Date(typeof a.updated !== 'undefined' ? createDateFromISO8601(a.updated) : '');
	                b = new Date(typeof b.updated !== 'undefined' ? createDateFromISO8601(b.updated) : '');
	                if (type == 'asc')
	                    return (b < a) ? -1 : ((b > a) ? 1 : 0);
	                else
	                    return (a < b) ? -1 : ((a > b) ? 1 : 0);
	            });
	        }
	    };

	    // ----------------CREATE new Components for video-js---------------- //

	    // --Charge the new Component into videojs
	    videojs.Player.prototype.options_.children.AnContainerButtons = {}; // Container with the css for the buttons
	    videojs.ControlBar.prototype.options_.children.BackAnDisplay = {}; // Range Slider Time Bar
	    videojs.ControlBar.prototype.options_.children.BackAnDisplayScroll = {}; // Range Slider Time Bar
	   // videojs.options.children.BigNewAnnotation = {}; // Big Button New Annotation



	    // -- Player--> BigNewAnnotation

	    /**
	     * Create a New Annotation with big Button
	     * @param {videojs.Player|Object} player
	     * @param {Object=} options
	     * @constructor
	     */
	    // videojs.BigNewAnnotation = videojs.Button.extend({
	    //     /** @constructor */
	    //     init: function(player, options) {
	    //         videojs.Button.call(this, player, options);
	    //     }
	    // });

	    // videojs.BigNewAnnotation.prototype.init_ = function() {
	    //     this.an = this.player_.annotations;
	    //     // Hide Button if the user has selected readOnly in the Annotator options
	    //     var opts = this.an.options.optionsAnnotator;
	    //     if (typeof opts !== 'undefined' && typeof opts.readOnly !== 'undefined' && opts.readOnly)
	    //         this.hide();
	    // };

	    // videojs.BigNewAnnotation.prototype.createEl = function() {
	    //     return videojs.Button.prototype.createEl.call(this, 'div', {
	    //         className: 'vjs-big-new-annotation vjs-menu-button vjs-control',
	    //         innerHTML: '<div class="vjs-big-menu-button vjs-control">A</div>',
	    //         title: 'New Annotation',
	    //     });
	    // };

	    // videojs.BigNewAnnotation.prototype.onClick = function() {
	    //     this.an.newan();
	    // };

	    // -- Player--> ControlBar--> AnContainerButtons

	    /**
	     * Container for the button CSS
	     * @param {videojs.Player|Object} player
	     * @param {Object=} options
	     * @constructor
	     */

	    videojs.AnContainerButtons = videojs.Component.extend({
	        /** @constructor */
	        init: function(player, options) {
	            videojs.Component.call(this, player, options);
	        }
	    });

	    videojs.AnContainerButtons.prototype.init_ = function() {};


	    videojs.AnContainerButtons.prototype.options_ = {
	        children: {
	            'ShowAnnotations': {},
	            'NewAnnotation': {},
	            'ShowStatistics': {},
	        }
	    };

	    videojs.AnContainerButtons.prototype.createEl = function() {
	        return videojs.Component.prototype.createEl.call(this, 'div', {
	            className: 'vjs-container-button-annotation',
	        });
	    };

	    // -- Player--> ControlBar--> AnContainerButtons--> ShowStatistics

	    /**
	     * Button for show/hide the chart with statistics of the annotation's number
	     * @param {videojs.Player|Object} player
	     * @param {Object=} options
	     * @constructor
	     */

	    videojs.ShowStatistics = videojs.Button.extend({
	        /** @constructor */
	        init: function(player, options) {
	            videojs.Button.call(this, player, options);
	        }
	    });

	    videojs.ShowStatistics.prototype.init_ = function() {
	        this.an = this.player_.annotations;
	    };

	    videojs.ShowStatistics.prototype.createEl = function() {
	        return videojs.Button.prototype.createEl.call(this, 'div', {
	            className: 'vjs-statistics-annotation vjs-control',
	            title: 'Show the Statistics',
	        });
	    };

	    videojs.ShowStatistics.prototype.onClick = function() {
	        if (!this.an.options.showStatistics) this.an.showStatistics();
	        else this.an.hideStatistics();
	    };



	    // -- Player--> ControlBar--> AnContainerButtons--> ShowAnnotations

	    /**
	     * Button for show/hide the annotation panel
	     * @param {videojs.Player|Object} player
	     * @param {Object=} options
	     * @constructor
	     */

	    videojs.ShowAnnotations = videojs.Button.extend({
	      /** @constructor */
	      init: function(player, options) {
	        videojs.Button.call(this, player, options);
	      }
	    });

	    videojs.ShowAnnotations.prototype.init_ = function() {
	        this.an = this.player_.annotations;
	    };

	    videojs.ShowAnnotations.prototype.createEl = function() {
	        return videojs.Button.prototype.createEl.call(this, 'div', {
	            className: 'vjs-showannotations-annotation vjs-control',
	            title: 'Show Annotations',
	        });
	    };

	    videojs.ShowAnnotations.prototype.onClick = function() {
	        if (!this.an.options.showDisplay) this.an.showDisplay();
	        else this.an.hideDisplay();
	    };



	    // -- Player--> ControlBar--> AnContainerButtons--> NewAnnotation

	    /**
	     * Create a New Annotation
	     * @param {videojs.Player|Object} player
	     * @param {Object=} options
	     * @constructor
	     */
	    videojs.NewAnnotation = videojs.Button.extend({
	        /** @constructor */
	        init: function(player, options) {
	            videojs.Button.call(this, player, options);
	        }
	    });

	    videojs.NewAnnotation.prototype.init_ = function() {
	        this.an = this.player_.annotations;
	        // Hide Button if the user has selected readOnly in the Annotator options
	        var opts = this.an.options.optionsAnnotator;
	        if (typeof opts !== 'undefined' && typeof opts.readOnly !== 'undefined' && opts.readOnly)
	            this.hide();
	    };

	    videojs.NewAnnotation.prototype.createEl = function() {
	        return videojs.Button.prototype.createEl.call(this, 'div', {
	            className: 'vjs-new-annotation vjs-control',
	            title: 'New Annotation',
	        });
	    };

	    videojs.NewAnnotation.prototype.onClick = function() {
	        this.an.newan();
	    };



	    // -- Player--> ControlBar--> BackAnDisplay

	    /**
	     * The background annotations panel
	     * @param {videojs.Player|Object} player
	     * @param {Object=} options
	     * @constructor
	     */
	    videojs.BackAnDisplay = videojs.Component.extend({
	        /** @constructor */
	        init: function(player, options) {
	            videojs.Component.call(this, player, options);
	        }
	    });

	    videojs.BackAnDisplay.prototype.init_ = function() {
	        this.an = this.player_.annotations
	            self = this;
	        // Fix error resizing the display panel. The scroll always went up.
	        $(this.el_).watch('font-size', function() {
	            self.an.backDSBarSel.setPosition(self.an.BackAnDisplayScroll.currentValue, false);
	        });

	    };

	    videojs.BackAnDisplay.prototype.options_ = {
	        children: {
	            'RangeSelectorDisplay': {},
	            'AnDisplay': {},
	            'AnStat': {},
	        }
	    };

	    videojs.BackAnDisplay.prototype.createEl = function() {
	        return videojs.Component.prototype.createEl.call(this, 'div', {
	            className: 'vjs-back-anpanel-annotation',
	        });
	    };



	    // -- Player--> ControlBar--> BackAnDisplay--> RangeSelectorDisplay

	    /**
	     * The selector to show the annotations in a time selection
	     * @param {videojs.Player|Object} player
	     * @param {Object=} options
	     * @constructor
	     */
	     
	    videojs.RangeSelectorDisplay = videojs.Component.extend({
	        /** @constructor */
	        init: function(player, options) {
	        videojs.Component.call(this, player, options);
	            this.on('mousedown', this.onMouseDown);
	        }
	    });

	    videojs.RangeSelectorDisplay.prototype.init_ = function() {
	        this.rs = this.player_.rangeslider;
	        this.an = this.player_.annotations;
	        var duration = this.an.player.duration();
	        this.start = 0;
	        this.end = duration;
	        
	        // set the selection area in the extreme position
	        this.setPosition(0, 0, false);
	        this.setPosition(1, this.rs._percent(duration), false);
	    };

	    videojs.RangeSelectorDisplay.prototype.options_ = {
	        children: {
	            'RangeSelectorLeft': {},
	            'RangeSelectorRight': {},
	            'RangeSelectorBar': {},
	        }
	    };

	    videojs.RangeSelectorDisplay.prototype.createEl = function(){
	        return videojs.Component.prototype.createEl.call(this, 'div', {
	            className: 'vjs-rangeselector-anpanel-annotation',
	        });
	    };

	    videojs.RangeSelectorDisplay.prototype.onMouseDown = function(event) {
	        event.preventDefault();
	        // videojs.blockTextSelection();
	        
	        videojs.on(document, "mousemove", videojs.bind(this, this.onMouseMove));
	        videojs.on(document, "mouseup", videojs.bind(this, this.onMouseUp));
	        
	        videojs.removeClass(this.an.rsdb.el_, 'disable');
	    };

	    videojs.RangeSelectorDisplay.prototype.onMouseUp = function(event) {
	        videojs.off(document, "mousemove", this.onMouseMove, false);
	        videojs.off(document, "mouseup", this.onMouseUp, false);
	        
	        videojs.addClass(this.an.rsdb.el_, 'disable');
	    };

	    videojs.RangeSelectorDisplay.prototype.onMouseMove = function(event) {
	        var left = this.calculateDistance(event);
	        if (this.an.rsdl.pressed)
	            this.setPosition(0, left);
	        else if (this.an.rsdr.pressed)
	            this.setPosition(1, left);
	        
	        // move the frame to the position of the arrow
	        this.an.player.currentTime(this.rs._seconds(left));
	    };

	    videojs.RangeSelectorDisplay.prototype.calculateDistance = function(event) {
	        var rstbX = this.getRSTBX();
	        var rstbW = this.getRSTBWidth();
	        var handleW = this.getWidth();

	        // Adjusted X and Width, so handle doesn't go outside the bar
	        rstbX = rstbX + (handleW / 2);
	        rstbW = rstbW - handleW;

	        // Percent that the click is through the adjusted area
	        return Math.max(0, Math.min(1, (event.pageX - rstbX) / rstbW));
	    };

	    videojs.RangeSelectorDisplay.prototype.getRSTBWidth = function() {
	        return this.el_.offsetWidth;
	    };
	    videojs.RangeSelectorDisplay.prototype.getRSTBX = function() {
	        return videojs.findPosition(this.el_).left;
	    };
	    videojs.RangeSelectorDisplay.prototype.getWidth = function() {
	        var arrow = $(this.an.rsdl.el_).find('.vjs-selector-arrow')[0];
	        return arrow.offsetWidth; // does not matter left or right
	    };

	    videojs.RangeSelectorDisplay.prototype.setPosition = function(index, left, changeTime) {
	        // index = 0 for left side, index = 1 for right side
	        var index = index || 0;
	        var changeTime = typeof changeTime !== 'undefined' ? changeTime : true;

	        // Check for invalid position
	        if(isNaN(left)) 
	            return false;
	        
	        // Check index between 0 and 1
	        if (!(index === 0 || index === 1))
	            return false;
	        // Alias
	        var ObjLeft = this.an.rsdl.el_;
	        var ObjRight = this.an.rsdr.el_;
	        var Obj = this.an[index === 0 ? 'rsdl' : 'rsdr'].el_;
	        
	        // Check if left arrow is over the right arrow
	        if ((index === 0 ? this.updateLeft(left) : this.updateRight(left))) {
	            if (index === 1) { // right
	                Obj.style.left = (left * 100) + '%';
	                Obj.style.width = ((1 - left) * 100) + '%';
	            } else { // left
	                Obj.style.left = (left * 100) + '%';
	                Obj.style.width = ((left) * 100) + '%';
	            }
	            
	            this[index === 0 ? 'start' : 'end'] = this.rs._seconds(left);
	        
	            // Fix the problem  when you press the button and the two arrow are underhand
	            // left.zIndex = 10 and right.zIndex=20. This is always less in this case:
	            if (index === 0 && (left * 100) >= 90)
	                $(ObjLeft).find('.vjs-selector-arrow')[0].style.zIndex = 25;
	            else
	                $(ObjLeft).find('.vjs-selector-arrow')[0].style.zIndex = 10;
	            
	            
	            // -- Panel
	            var rsdbl = this.an.rsdbl.el_,
	                rsdbr = this.an.rsdbr.el_,
	                distance = parseFloat(ObjRight.style.left) - parseFloat(ObjLeft.style.left);
	            if (index === 0)
	                rsdbl.children[0].innerHTML = videojs.formatTime(this.rs._seconds(left));
	            else
	                rsdbr.children[0].innerHTML = videojs.formatTime(this.rs._seconds(left));
	            if (typeof distance !== 'undefined' && distance <= 12.5) {
	                if (parseFloat(ObjLeft.style.left) < 7) {
	                    rsdbl.style.top = (-1.5) + 'em';
	                    rsdbl.style.left = 1 + 'em';
	                } else {
	                    rsdbl.style.left = (-2.5) + 'em';
	                    rsdbl.style.top = '';
	                }
	                    
	                if (parseFloat(ObjRight.style.left) > 93) {
	                    rsdbr.style.top = (-1.5) + 'em';
	                    rsdbr.style.right = 1 + 'em';
	                } else {
	                    rsdbr.style.right = (-2.5) + 'em';
	                    rsdbr.style.top = '';
	                }
	            } else {
	                rsdbl.style.left = 1 + 'em';
	                rsdbr.style.right = 1 + 'em';
	                rsdbl.style.top = '';
	                rsdbr.style.top = '';
	            }
	            
	            
	            var start = this.rs._seconds(parseFloat(ObjLeft.style.left) / 100);
	            var end = this.rs._seconds(parseFloat(ObjRight.style.left) / 100);
	                
	            if (changeTime)
	                this.an.showBetween(start, end, this.an.rsdl.include, this.an.rsdr.include);
	        }
	        return true;
	    };

	    videojs.RangeSelectorDisplay.prototype.updateLeft = function(left) {
	        var rightVal = this.an.rsdr.el_.style.left !== '' ? this.an.rsdr.el_.style.left : 100;
	        var right = parseFloat(rightVal) / 100;
	        var bar = this.an.rsdb.el_;
	        
	        var width = videojs.round((right - left), this.an.updatePrecision); // round necessary for not get 0.6e-7 for example that it's not able for the html css width
	        if(left <= (right+0.00001)) {
	                bar.style.left = (left * 100) + '%';
	                bar.style.width = (width * 100) + '%';
	                return true;
	        }
	        return false;
	    };
	            
	    videojs.RangeSelectorDisplay.prototype.updateRight = function(right) {
	        var leftVal = this.an.rsdl.el_.style.left !== '' ? this.an.rsdl.el_.style.left : 0;
	        var left = parseFloat(leftVal) / 100;
	        var bar = this.an.rsdb.el_;
	            
	        var width = videojs.round((right - left), this.an.updatePrecision); // round necessary for not get 0.6e-7 for example that it's not able for the html css width
	        
	        if((right+0.00001) >= left) {
	            bar.style.width = (width * 100) + '%';
	            bar.style.left = ((right  - width) * 100) + '%';
	            return true;
	        }
	        return false;
	    };        



	    // -- Player--> ControlBar--> BackAnDisplay--> RangeSelectorDisplay--> RangeSelectorLeft

	    /**
	     * Left Time selector
	     * @param {videojs.Player|Object} player
	     * @param {Object=} options
	     * @constructor
	     */
	    videojs.RangeSelectorLeft = videojs.Component.extend({
	        /** @constructor */
	        init: function(player, options) {
	            videojs.Component.call(this, player, options);
	            this.on('mousedown', this.onMouseDown);
	            this.on('dblclick', this.ondblclick);
	            this.pressed = false; // to know when is mousedown
	            this.include = true; // to know when we want to include the boundary time in the selection or not
	        }
	    });

	    videojs.RangeSelectorLeft.prototype.init_ = function() {
	        this.rs = this.player_.rangeslider;
	        this.an = this.player_.annotations;
	        videojs.addClass(this.el_, 'include');
	    };

	    videojs.RangeSelectorLeft.prototype.createEl = function() {
	        return videojs.Component.prototype.createEl.call(this, 'div', {
	            className: 'vjs-leftselector-anpanel-annotation',
	            innerHTML: '<div class="vjs-selector-arrow" title="Left Annotation Selector"></div><div class="vjs-leftselector-back"></div>'
	        });
	    };


	    videojs.RangeSelectorLeft.prototype.onMouseDown = function(event) {
	        event.preventDefault();
	        
	        this.pressed = true;
	        videojs.on(document, "mouseup", videojs.bind(this, this.onMouseUp));
	        videojs.addClass(this.el_, 'active');
	        videojs.addClass(this.el_.parentNode, 'active');
	    };

	    videojs.RangeSelectorLeft.prototype.onMouseUp = function(event) {
	        videojs.off(document, "mouseup", this.onMouseUp, false);
	        videojs.removeClass(this.el_, 'active');
	        videojs.removeClass(this.el_.parentNode, 'active');
	        this.pressed = false;
	    };

	    videojs.RangeSelectorLeft.prototype.ondblclick = function(event) {
	        if (this.include) {
	            this.include = false;
	            videojs.removeClass(this.el_, 'include');
	        } else {
	            this.include = true;
	            videojs.addClass(this.el_, 'include');
	        }
	        var left = this.an.rsd.calculateDistance(event);
	        this.an.rsd.setPosition(0, left);
	    };



	    // -- Player--> ControlBar--> BackAnDisplay--> RangeSelectorDisplay--> RangeSelectorRight

	    /**
	     * Right Time selector
	     * @param {videojs.Player|Object} player
	     * @param {Object=} options
	     * @constructor
	     */
	    videojs.RangeSelectorRight = videojs.Component.extend({
	        /** @constructor */
	        init: function(player, options) {
	            videojs.Component.call(this, player, options);
	            this.on('mousedown', this.onMouseDown);
	            this.on('dblclick', this.ondblclick);
	            this.pressed = false; // to know when is mousedown
	            this.include = true; // to know when we want to include the boundary time in the selection or not
	        }
	    });

	    videojs.RangeSelectorRight.prototype.init_ = function() {
	        this.rs = this.player_.rangeslider;
	        this.an = this.player_.annotations;
	        videojs.addClass(this.el_, 'include');
	    };

	    videojs.RangeSelectorRight.prototype.createEl = function() {
	        return videojs.Component.prototype.createEl.call(this, 'div', {
	            className: 'vjs-rightselector-anpanel-annotation',
	            innerHTML: '<div class="vjs-selector-arrow" title="Right Annotation Selector"></div><div class="vjs-rightselector-back"></div>'
	        });
	    };

	    videojs.RangeSelectorRight.prototype.onMouseDown = function(event) {
	        event.preventDefault();
	        
	        this.pressed = true;
	        videojs.on(document, "mouseup", videojs.bind(this, this.onMouseUp));
	        videojs.addClass(this.el_, 'active');
	        videojs.addClass(this.el_.parentNode, 'active');
	    };

	    videojs.RangeSelectorRight.prototype.onMouseUp = function(event) {
	        videojs.off(document, "mouseup", this.onMouseUp, false);
	        videojs.removeClass(this.el_, 'active');
	        videojs.removeClass(this.el_.parentNode, 'active');
	        this.pressed = false;
	    };

	    videojs.RangeSelectorRight.prototype.ondblclick = function(event) {
	        if (this.include){
	            this.include = false;
	            videojs.removeClass(this.el_, 'include');
	        }else{
	            this.include = true;
	            videojs.addClass(this.el_, 'include');
	        }
	        var left = this.an.rsd.calculateDistance(event);
	        this.an.rsd.setPosition(1, left);
	    };



	    // -- Player--> ControlBar--> BackAnDisplay--> RangeSelectorDisplay--> RangeSelectorBar

	    /**
	     * Bar to display the selected Time
	     * @param {videojs.Player|Object} player
	     * @param {Object=} options
	     * @constructor
	     */
	     
	    videojs.RangeSelectorBar = videojs.Component.extend({
	        /** @constructor */
	        init: function(player, options) {
	            videojs.Component.call(this, player, options);
	        }
	    });

	    videojs.RangeSelectorBar.prototype.init_ = function() {
	        videojs.addClass(this.el_, 'disable');
	    };

	    videojs.RangeSelectorBar.prototype.options_ = {
	        children: {
	            'RangeSelectorBarL': {},
	            'RangeSelectorBarR': {},
	        }
	    };

	    videojs.RangeSelectorBar.prototype.createEl = function() {
	        return videojs.Component.prototype.createEl.call(this, 'div', {
	            className: 'vjs-barselector-anpanel-annotation',
	        });
	    };



	    // -- Player--> ControlBar--> BackAnDisplay--> RangeSelectorDisplay--> RangeSelectorBar--> RangeSelectorBarL

	    /**
	     * This is the left time panel for RangeSelectorBar
	     * @param {videojs.Player|Object} player
	     * @param {Object=} options
	     * @constructor
	     */
	    videojs.RangeSelectorBarL = videojs.Component.extend({
	      /** @constructor */
	        init: function(player, options) {
	            videojs.Component.call(this, player, options);
	        }
	    });

	    videojs.RangeSelectorBarL.prototype.init_ = function() {};

	    videojs.RangeSelectorBarL.prototype.createEl = function() {
	        return videojs.Component.prototype.createEl.call(this, 'div', {
	            className: 'vjs-barselector-left',
	            innerHTML: '<span class="vjs-time-text">00:00</span>',
	        });
	    };



	    // -- Player--> ControlBar--> BackAnDisplay--> RangeSelectorDisplay--> RangeSelectorBar--> RangeSelectorBarR
	    /**
	     * This is the right time panel for RangeSelectorBar
	     * @param {videojs.Player|Object} player
	     * @param {Object=} options
	     * @constructor
	     */
	    videojs.RangeSelectorBarR = videojs.Component.extend({
	      /** @constructor */
	        init: function(player, options) {
	            videojs.Component.call(this, player, options);
	        }
	    });

	    videojs.RangeSelectorBarR.prototype.init_ = function() {};

	    videojs.RangeSelectorBarR.prototype.createEl = function() {
	        return videojs.Component.prototype.createEl.call(this, 'div', {
	            className: 'vjs-barselector-right',
	            innerHTML: '<span class="vjs-time-text">00:00</span>'
	        });
	    };



	    // -- Player--> ControlBar--> BackAnDisplay--> AnDisplay

	    /**
	     * Show the annotations in a panel
	     * @param {videojs.Player|Object} player
	     * @param {Object=} options
	     * @constructor
	     */
	     
	    videojs.AnDisplay = videojs.Component.extend({
	        /** @constructor */
	        init: function(player, options) {
	            videojs.Component.call(this, player, options);
	            this.on('mousedown', this.onMouseDown);
	            this.on('mouseover', this.onMouseOver);
	        }
	    });

	    videojs.AnDisplay.prototype.init_ = function() {
	        this.rs = this.player_.rangeslider;
	        this.an = this.player_.annotations;
	        this.transition = false;
	    };

	    videojs.AnDisplay.prototype.createEl = function() {
	        return videojs.Component.prototype.createEl.call(this, 'div', {
	            className: 'vjs-anpanel-annotation',
	        });
	    };

	    videojs.AnDisplay.prototype.onMouseDown = function(event) {
	        var elem = $(event.target).parents('.annotator-hl').andSelf();
	        var _self = this;
	        if (elem.hasClass("annotator-hl")) {
	            videojs.on(document, "mouseup", videojs.bind(this, this.onMouseUp));
	            // Clone the bar box to make the animation
	            var boxup = document.createElement('div');
	            var ElemTop = parseFloat(elem[1].style.top);
	            var ElemMargin = parseFloat(elem[1].style.marginTop);
	            var emtoPx = parseFloat($(elem[1]).css('height'));
	            var isPoint = $(elem[1]).hasClass("point");
	                
	            boxup.className = isPoint ? "boxup-dashed-line point" : "boxup-dashed-line";
	            boxup.style.left = elem[1].style.left;
	            boxup.style.width = elem[1].style.width;
	        
	            boxup.style.top = (ElemTop + ElemMargin - this.el_.scrollTop / emtoPx) + 'em';
	            elem[0].parentNode.parentNode.appendChild(boxup);
	        }
	    }

	    videojs.AnDisplay.prototype.onMouseUp = function(event) {
	        if (typeof this.lastelem === 'undefined')
	            return false;
	        var elem = this.lastelem;
	        var _self = this;
	        if (elem.hasClass("annotator-hl")) {
	            var annotation = elem.map(function() {
	                return $(this).data("annotation");
	            })[0];
	            var displayHeight = (-1) * parseFloat($(this.el_).parent()[0].style.top);
	            var emtoPx = parseFloat($(elem[1]).css('height'));
	            if (typeof $(elem).parent().parent().find('.boxup-dashed-line')[0] !== 'undefined') {
	                $(elem).parent().parent().find('.boxup-dashed-line')[0].style.top = (displayHeight - 2) + 'em';
	            }
	            
	            this.an.player.pause();
	            this.transition = true;
	            window.setTimeout(function () {
	                _self.an.showAnnotation(annotation);
	                _self.transition = false;
	                _self.onCloseViewer();
	            }, 900);
	        }
	        videojs.off(document, "mouseup", this.onMouseUp, false);
	    };

	    videojs.AnDisplay.prototype.onMouseOver = function(event) {
	        if (!this.transition && !this.an.rsdl.pressed && !this.an.rsdr.pressed) {
	            var annotator = this.an.annotator;
	            var elem = $(event.target).parents('.annotator-hl').andSelf();
	        
	            // if there is a opened annotation then show the new annotation mouse over
	            if (typeof annotator !== 'undefined' && annotator.viewer.isShown() && elem.hasClass("annotator-hl")) {
	                // hide the last open viewer
	                annotator.viewer.hide();
	                // get the annotation over the mouse
	                var annotations = elem.map(function() {
	                    return $(this).data("annotation");
	                });
	                // show the annotation in the viewer
	                annotator.showViewer($.makeArray(annotations), Util.mousePosition(event, annotator.wrapper[0]));
	            }
	        
	            // create dashed line
	            elem.addClass('active');
	            if (typeof elem !== 'undefined' && $(elem[1]).hasClass('annotation')) {
	                // create dashed line under the bar
	                var dashed = document.createElement('div');
	                var boxdown = document.createElement('div');
	                var DisplayHeight = parseFloat(this.an.BackAnDisplay.el_.style.height);
	                var ElemMarginTop = elem[1].style.marginTop !== '' ? parseFloat(elem[1].style.marginTop) : 0;
	                var ElemTop = parseFloat(elem[1].style.top) + ElemMarginTop;
	                var emtoPx = parseFloat($(elem[1]).css('height'));
	                var isPoint = $(elem[1]).hasClass("point");

	                dashed.className = isPoint ? 'dashed-line point' : 'dashed-line';
	                boxdown.className = "box-dashed-line";
	                dashed.style.left = boxdown.style.left = elem[1].style.left;
	                dashed.style.width = boxdown.style.width = isPoint ? '0' : elem[1].style.width;
	                dashed.style.top = ((ElemTop + 1) - this.el_.scrollTop / emtoPx) + 'em';
	                dashed.style.height = ((DisplayHeight - ElemTop + 2) + this.el_.scrollTop / emtoPx) + 'em'; // get the absolute value of the top to put in the height
	                boxdown.style.top = (DisplayHeight + 2) + 'em';
	                elem[0].parentNode.parentNode.appendChild(dashed);
	                elem[0].parentNode.parentNode.appendChild(boxdown);
	                
	                $(this.player).find('.vjs-play-progress').css('z-index', 2);
	                $(this.player).find('.vjs-seek-handle').css('z-index', 2);
	            }
	        
	            // store the last selected item
	            if (elem.hasClass("annotator-hl"))
	                this.lastelem = elem;
	        }
	    };

	    videojs.AnDisplay.prototype.onCloseViewer = function() {
	        if (!this.transition) {
	            if (typeof this.lastelem !== 'undefined')
	                this.lastelem.removeClass('active');
	            // remove dashed line
	            if (typeof this.lastelem !== 'undefined' && this.lastelem.hasClass("annotator-hl")) {
	                $(this.lastelem).parent().parent().find('.dashed-line').remove();
	                $(this.lastelem).parent().parent().find('.box-dashed-line').remove();
	                $(this.lastelem).parent().parent().find('.boxup-dashed-line').remove();
	                $(this.player).find('.vjs-play-progress').css('z-index', "");
	                $(this.player).find('.vjs-seek-handle').css('z-index', "");
	            }
	        }
	    };


	    videojs.AnDisplay.prototype.countVisibles = function() {
	        var AnArray = $.makeArray(this.el_.children);
	        // Count visible annotations in Panel
	        var count = 0;
	        for (var index in AnArray) {
	            var an = AnArray[index];
	            if (an.style.display !== 'none') {
	                count++;
	            }
	        }
	        return count;
	    };



	    // -- Player--> ControlBar--> BackAnDisplay--> AnStat

	    /**
	     * Display with a chart with the statistics of the number of Annotations
	     * @param {videojs.Player|Object} player
	     * @param {Object=} options
	     * @constructor
	     */
	     
	    videojs.AnStat = videojs.Component.extend({
	        /** @constructor */
	        init: function(player, options) {
	            videojs.Component.call(this, player, options);
	            this.marginTop = 20;
	            this.marginBottom = 0;
	        }
	    });

	    videojs.AnStat.prototype.init_ = function() {
	        this.rs = this.player_.rangeslider;
	        this.an = this.player_.annotations;
	        this.canvas = this.el_.children[0];
	    };

	    videojs.AnStat.prototype.createEl = function() {
	        return videojs.Component.prototype.createEl.call(this, 'div', {
	            className: 'vjs-anstat-annotation',
	            innerHTML: '<canvas class="vjs-char-anstat-annotation">Your browser does not support the HTML5 canvas tag.</canvas>',
	        });
	    };

	    videojs.AnStat.prototype.paintCanvas = function() {
	        var ctx = this.canvas.getContext("2d");
	        var points = this._getPoints();
	        var w = this._getWeights(points);
	        var maxEn = this._getMaxArray(points, 'entries');
	        var TotAn = this.an.AnDisplay.el_.children.length;
	        var duration = this.an.player.duration();

	        // set the position of the canvas
	        this.canvas.style.marginTop = Math.round(this.marginTop) + 'px';
	        
	        // Add the Max Concentration and Number of annotations
	        if($(this.canvas).parent().find('.vjs-totan-anstat-annotation').length === 0) {
	            $(this.canvas).parent().append('<div class="vjs-totan-anstat-annotation">');
	            $(this.canvas).parent().append('<div class="vjs-maxcon-anstat-annotation">');
	        }
	        var textCanvas = $(this.canvas).parent().find('.vjs-totan-anstat-annotation')[0];
	        textCanvas.innerHTML = TotAn + ' total annotations';
	        var textCanvas = $(this.canvas).parent().find('.vjs-maxcon-anstat-annotation')[0];
	        textCanvas.innerHTML = 'Max Annotations = ' + maxEn;
	        
	        // Added dashed line function to paint
	        if (window.CanvasRenderingContext2D && CanvasRenderingContext2D.prototype.lineTo) {
	            CanvasRenderingContext2D.prototype.dashedLine = function(x1, y1, x2, y2, dashLen) {
	                if (dashLen === undefined) dashLen = 2;

	                this.beginPath();
	                this.moveTo(x1, y1);

	                var dX = x2 - x1;
	                var dY = y2 - y1;
	                var dashes = Math.floor(Math.sqrt(dX * dX + dY * dY) / dashLen);
	                var dashX = dX / dashes;
	                var dashY = dY / dashes;

	                var q = 0;
	                while (q++ < dashes) {
	                 x1 += dashX;
	                 y1 += dashY;
	                 this[q % 2 == 0 ? 'moveTo' : 'lineTo'](x1, y1);
	                }
	                this[q % 2 == 0 ? 'moveTo' : 'lineTo'](x2, y2);

	                this.stroke();
	                this.closePath();
	            };
	        };    
	            
	        
	        // set the canvas size
	        this.canvas.height = this.an.AnDisplay.el_.offsetHeight - (this.marginTop + this.marginBottom);
	        this.canvas.width  = this.an.AnDisplay.el_.offsetWidth;
	        
	        ctx.beginPath();
	        ctx.strokeStyle = "rgb(255, 163, 0)";
	        var lastSe = 0;
	        var lastEn = 0;
	        ctx.moveTo(0, maxEn * w.Y); // Move pointer to 0, 0
	        for (var index in points) {
	            var p = points[index];
	            var x1 = lastSe * w.X, y1 = (maxEn - lastEn) * w.Y; // Old Point
	            var x2 = p.second * w.X, y2 = (maxEn - p.entries) * w.Y; // New Point
	            // new line
	            ctx.lineTo(x2, y1); // move horizontally to the new point
	            ctx.moveTo(x2, y1); // Move pointer
	            ctx.lineTo(x2, y2); // move vertically to the new point height
	            ctx.moveTo(x2, y2); // Prepare pointer for a new instance
	            // new rectangle under the curve
	            ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
	            ctx.fillRect(x1, y1, (x2 - x1), (maxEn * w.Y - y1));
	            
	            // store the last point
	            lastSe = p.second;
	            lastEn = p.entries;
	        }
	        // set the graphic to the end of the video
	        ctx.lineTo(lastSe * w.X, maxEn * w.Y); 
	        ctx.moveTo(lastSe * w.X, maxEn * w.Y); 
	        ctx.lineTo(duration * w.X, maxEn * w.Y);
	        ctx.stroke();
	        
	        // dashed line down
	        ctx.beginPath();
	        ctx.dashedLine(0, maxEn * w.Y, duration * w.X, maxEn * w.Y, 8);
	        ctx.stroke();
	        // dashed line top
	        ctx.beginPath();
	        ctx.dashedLine(0, 0, duration * w.X, 0, 8);
	        ctx.stroke();
	    };

	    videojs.AnStat.prototype._getWeights = function(points){
	        var weight = {};
	        var panel = $(this.an.AnDisplay.el_);
	        var maxSe = this.an.player.duration();
	        var maxEn = this._getMaxArray(points, 'entries');
	        var panelW = parseFloat(panel.css('width'));
	        var panelH = parseFloat(panel.css('height')) - (this.marginTop + this.marginBottom);
	        weight.X = maxSe != 0 ? (panelW / maxSe) : 0;
	        weight.Y = maxEn != 0 ? (panelH / maxEn) : 0;
	        return weight;
	    };

	    videojs.AnStat.prototype._getMaxArray = function(points, variable) {
	        var highest = 0;
	        var tmp;
	        for (var index in points) {
	            tmp = points[index][variable];
	            if (tmp > highest) highest = tmp;
	        }
	        return highest;
	    };

	    videojs.AnStat.prototype._getPoints = function() {
	        var points = [];
	        var allannotations = this.an.annotator.plugins.Store.annotations;
	        for (var index in allannotations) {
	            var an = allannotations[index];
	            var start, end;
	            if (this.an._isVideoJS(an)) {
	                start = an.rangeTime.start;
	                end = an.rangeTime.end;
	                // start
	                if (!this._isFound(points, start)) {
	                    points.push({
	                        second:an.rangeTime.start,
	                        entries:this._getNumberAnnotations(start)
	                    });
	                    if (an.rangeTime.start == an.rangeTime.end){ // is a point
	                        points.push({
	                            second:an.rangeTime.end,
	                            entries:this._getNumberAnnotations(end, true)
	                        });
	                    }
	                }
	                // end
	                if (!this._isFound(points, end)) {
	                    points.push({
	                        second:an.rangeTime.end,
	                        entries:this._getNumberAnnotations(end, true)
	                    });
	                }
	                    
	                found = false;
	            }
	        }
	        points.sort(function(a, b) {
	            return parseFloat(a.second) - parseFloat(b.second)
	        });
	        return points;
	    };

	    videojs.AnStat.prototype._isFound = function(array, elem) {
	        var found = false;
	        for (var indexA in array) {
	            if(typeof array[indexA].second !== 'undefined' && array[indexA].second == elem)
	                found = true;
	        }
	        return found;
	    };

	    videojs.AnStat.prototype._getNumberAnnotations = function(time, end) {
	        var num = (typeof end !== 'undefined' && end) ? -1 : 0;
	        var allannotations = typeof(this.an.annotator.plugins['LocalStore']) !== 'undefined' ? this.an.annotator.plugins['LocalStore'].annotations : this.an.annotator.plugins['Store'].annotations;
	        for (var index in allannotations) {
	            var an = allannotations[index];
	            if (this.an._isVideoJS(an)) {
	                if(an.rangeTime.start <= time && an.rangeTime.end >= time)
	                    num++;
	            }
	        }
	        return num;
	    };

	    // -- Player--> ControlBar--> BackAnDisplayScroll

	    /**
	     * The background annotations panel
	     * @param {videojs.Player|Object} player
	     * @param {Object=} options
	     * @constructor
	     */
	     
	    videojs.BackAnDisplayScroll = videojs.Component.extend({
	          /** @constructor */
	        init: function(player, options) {
	            videojs.Component.call(this, player, options);
	            this.on('mousedown', this.onMouseDown);
	            this.UpValue = 0.1;
	            this.currentValue = 0;
	        }
	    });

	    videojs.BackAnDisplayScroll.prototype.init_ = function() {
	        this.rs = this.player_.rangeslider;
	        this.an = this.player_.annotations;
	        this.mousedownID = -1;
	        var self = this;
	        var direction;
	            
	        // Firefox
	        $(this.an.AnDisplay.el_).bind('DOMMouseScroll', function(e) {
	            if (e.originalEvent.detail > 0)
	                direction = self.UpValue;
	            else 
	                direction = -self.UpValue;
	            self.an.backDSBarSel.setPosition(self.getPercentScroll() + direction);
	            return false;
	        });

	        // IE, Opera, Safari
	        $(this.an.AnDisplay.el_).bind('mousewheel', function(e) {
	            if (e.originalEvent.wheelDelta < 0) 
	                direction = self.UpValue;
	            else 
	                direction = -self.UpValue;
	            self.an.backDSBarSel.setPosition(self.getPercentScroll() + direction);
	            return false;
	        });
	    };

	    videojs.BackAnDisplayScroll.prototype.options_ = {
	        children: {
	            'BackAnDisplayScrollBar': {},
	            'BackAnDisplayScrollTime': {},
	        }
	    };

	    videojs.BackAnDisplayScroll.prototype.createEl = function() {
	      return videojs.Component.prototype.createEl.call(this, 'div', {
	        className: 'vjs-scroll-anpanel-annotation',
	        innerHTML: '<div class="vjs-up-scroll-annotation"></div><div class="vjs-down-scroll-annotation"></div>',
	      });
	    };

	    videojs.BackAnDisplayScroll.prototype.onMouseDown = function(event) {
	        var self = this;
	        if (event.target.className === 'vjs-scrollbar-anpanel-annotation') {
	            // change position with a click in the scrollbar
	            this.an.backDSBarSel.onMouseMove(event);
	            return false;
	        } else if (event.target.className === 'vjs-scrollbar-selector') {
	            // change position with scrollbar
	            // this event is controlled by this.an.backDSBarSel
	            return false;
	        } else {
	            // change position with arrows
	            var direction = event.target.className=='vjs-down-scroll-annotation' ? this.UpValue : -this.UpValue;
	            videojs.on(document, "mouseup", videojs.bind(this, this.onMouseUp));
	            if(parseInt(this.mousedownID, 10) === -1) {  // Prevent multimple loops!
	                this.mousedownID = setInterval(function () {
	                    var pos = Math.max(0, Math.min(1, self.getPercentScroll() + direction));
	                    self.an.backDSBarSel.setPosition(pos);
	                }, 100);
	            }
	        }
	    };

	    videojs.BackAnDisplayScroll.prototype.onMouseUp = function(event) {
	        videojs.off(document, "mouseup", this.onMouseUp, false);
	        var self = this;
	        if(parseInt(this.mousedownID, 10) != -1) { // Only stop if exists
	            clearInterval(this.mousedownID);
	            self.mousedownID = -1;
	        }
	    };

	    videojs.BackAnDisplayScroll.prototype.getPercentScroll = function() {
	        var scroll = this.an.AnDisplay.el_;
	        var maxscroll = scroll.scrollHeight - scroll.offsetHeight;
	        var currentValue = scroll.scrollTop;
	        return Math.max(0, Math.min(1, maxscroll !== 0 ? (currentValue / maxscroll) : 0));
	    };

	    videojs.BackAnDisplayScroll.prototype.setPercentScroll = function(percent) {
	        var scroll = this.an.AnDisplay.el_;
	        var maxscroll = scroll.scrollHeight-scroll.offsetHeight;
	        percent = Math.max(0, Math.min(1, percent ? percent : 0));
	        scroll.scrollTop = Math.round(maxscroll * percent);
	    };



	    // -- Player--> ControlBar--> BackAnDisplayScroll--> BackAnDisplayScrollBar

	    /**
	     * The Scroll bar for the display
	     * @param {videojs.Player|Object} player
	     * @param {Object=} options
	     * @constructor
	     */
	     
	    videojs.BackAnDisplayScrollBar = videojs.Component.extend({
	          /** @constructor */
	        init: function(player, options) {
	            videojs.Component.call(this, player, options);
	        }
	    });

	    videojs.BackAnDisplayScrollBar.prototype.init_ = function() {};

	    videojs.BackAnDisplayScrollBar.prototype.options_ = {
	        children: {
	            'ScrollBarSelector': {},
	        }
	    };

	    videojs.BackAnDisplayScrollBar.prototype.createEl = function() {
	      return videojs.Component.prototype.createEl.call(this, 'div', {
	        className: 'vjs-scrollbar-anpanel-annotation',
	      });
	    };



	    // -- Player--> ControlBar--> BackAnDisplayScroll--> BackAnDisplayScrollBar--> ScrollBarSelector

	    /**
	     * The Scroll bar for the display
	     * @param {videojs.Player|Object} player
	     * @param {Object=} options
	     * @constructor
	     */
	     
	    videojs.ScrollBarSelector = videojs.Component.extend({
	          /** @constructor */
	        init: function(player, options) {
	            videojs.Component.call(this, player, options);
	            this.on('mousedown', this.onMouseDown);
	        }
	    });

	    videojs.ScrollBarSelector.prototype.init_ = function() {
	        this.rs = this.player_.rangeslider;
	        this.an = this.player_.annotations;
	        videojs.addClass(this.an.backDSBar.el_, 'disable');
	    };


	    videojs.ScrollBarSelector.prototype.createEl = function() {
	        return videojs.Component.prototype.createEl.call(this, 'div', {
	            className: 'vjs-scrollbar-selector',
	        });
	    };

	    videojs.ScrollBarSelector.prototype.onMouseDown = function(event) {
	        event.preventDefault();
	        videojs.on(document, "mousemove", videojs.bind(this, this.onMouseMove));
	        videojs.on(document, "mouseup", videojs.bind(this, this.onMouseUp));
	    }

	    videojs.ScrollBarSelector.prototype.onMouseUp = function(event) {
	        videojs.off(document, "mousemove", this.onMouseMove, false);
	        videojs.off(document, "mouseup", this.onMouseUp, false);
	    };

	    videojs.ScrollBarSelector.prototype.onMouseMove = function(event) {
	        var top = this.calculateDistance(event);
	        top = this.parseMaxPercent(top); // set the max value fixing the height of the handle
	        this.setPosition(top);
	    }

	    videojs.ScrollBarSelector.prototype.calculateDistance = function(event) {
	        var scrollY = this.getscrollY();
	        var scrollH = this.getscrollHeight();
	        var handleH = this.getHeight();
	        
	        // Adjusted X and Width, so handle doesn't go outside the bar
	        scrollY = scrollY + (handleH);
	        scrollH = scrollH - (handleH);
	        // Adjusted X and Width, so handle doesn't go outside the bar
	        // Percent that the click is through the adjusted area
	        return Math.max(0, Math.min(1, (event.pageY - scrollY) / scrollH));
	    };

	    videojs.ScrollBarSelector.prototype.getscrollHeight = function() {
	        return this.el_.parentNode.offsetHeight;
	    };
	    videojs.ScrollBarSelector.prototype.getscrollY = function() {
	        return videojs.findPosition(this.el_.parentNode).top;
	    };
	    videojs.ScrollBarSelector.prototype.getHeight = function() {
	        return this.el_.offsetHeight;
	    };
	    videojs.ScrollBarSelector.prototype.parseMaxHeight = function(top) {
	        var scrollH = this.getscrollHeight();
	        var handleH = this.getHeight();
	        var percent = handleH / scrollH;
	        return Math.max(0, Math.min(1 - percent, top));
	    };

	    videojs.ScrollBarSelector.prototype.parseMaxPercent = function(top) {
	        var scrollH = this.getscrollHeight();
	        var handleH = this.getHeight();
	        var percent = handleH / scrollH;
	        var newTop = top;
	        if (top >= (1 - percent))
	            newTop = 1;
	        return newTop;
	    };

	    videojs.ScrollBarSelector.prototype.setPosition = function(top, showBar) {
	        var showBar = typeof showBar !== 'undefined' ? showBar : true;
	        
	        // Check for invalid position
	        if (isNaN(top)) 
	            return false;
	        
	        // Check if there is enough annotations to scroll
	        if (!this.isScrollable())
	            return false;
	            
	        // Show the Scrollbar
	        if (showBar) {
	            videojs.removeClass(this.an.backDSBar.el_, 'disable')
	        }
	        
	        // Alias
	        var Obj = this.el_;
	        var scroll = this.an.BackAnDisplayScroll;
	        var scrollTime = this.an.backDSTime;
	        
	        Obj.style.top = (this.parseMaxHeight(top) * 100) + '%';
	        scroll.setPercentScroll(top);
	        
	        // Set the times in the scroll time panel
	        scrollTime.setTimes();
	        
	        // Hide the Scrollbar in 1 sec
	        if(showBar) {
	            var _self = this;
	            if (typeof this.Timeout !== 'undefined')
	                clearTimeout(this.Timeout);
	            this.Timeout = window.setTimeout(function () {
	                videojs.addClass(_self.an.backDSBar.el_, 'disable');
	            }, 1000);
	        }
	        
	        // set current position
	        this.an.BackAnDisplayScroll.currentValue = top;
	        return true;
	    }

	    videojs.ScrollBarSelector.prototype.isScrollable = function() {
	        var scroll = this.an.AnDisplay.el_;
	        var emtoPx = parseFloat($(scroll).find('.annotation').css('height'));
	        var minTop = parseInt(scroll.offsetHeight/emtoPx);
	        
	        // Count visible annotations in Panel
	        var count = this.an.AnDisplay.countVisibles();
	        return (count > minTop);
	    }



	    // -- Player--> ControlBar--> BackAnDisplayScroll--> BackAnDisplayScrollTime

	    videojs.BackAnDisplayScrollTime = videojs.Component.extend({
	          /** @constructor */
	        init: function(player, options) {
	            videojs.Component.call(this, player, options);
	        }
	    });

	    videojs.BackAnDisplayScrollTime.prototype.init_ = function() {
	        this.rs = this.player_.rangeslider;
	        this.an = this.player_.annotations;
	    };

	    videojs.BackAnDisplayScrollTime.prototype.createEl = function() {
	      return videojs.Component.prototype.createEl.call(this, 'div', {
	        className: 'vjs-scrolltime-anpanel-annotation',
	        innerHTML: '<div class="vjs-up-scrolltime-annotation"><span class="vjs-time-text"></span></div><div class="vjs-down-scrolltime-annotation"><span class="vjs-time-text"></span></div>',
	      });
	    };

	    videojs.BackAnDisplayScrollTime.prototype.setTimes = function() {
	        var AnPos = this.getAnnotationPosition();
	        var AnEl = this.getElements(AnPos);
	        var AnTimes = this.getTimes(AnEl);
	        if (AnTimes.top != 'Invalid Date') {
	            $(this.el_).find('.vjs-up-scrolltime-annotation')[0].style.visibility = '';
	            $(this.el_).find('.vjs-up-scrolltime-annotation span')[0].innerHTML = AnTimes.top;
	        } else {
	            $(this.el_).find('.vjs-up-scrolltime-annotation')[0].style.visibility = 'hidden';
	        }
	        if (AnTimes.bottom != 'Invalid Date') {
	            $(this.el_).find('.vjs-down-scrolltime-annotation')[0].style.visibility = '';
	            $(this.el_).find('.vjs-down-scrolltime-annotation span')[0].innerHTML = AnTimes.bottom;
	        } else {
	            $(this.el_).find('.vjs-down-scrolltime-annotation')[0].style.visibility = 'hidden';
	        }
	    };

	    videojs.BackAnDisplayScrollTime.prototype.getAnnotationPosition = function() {
	        var backDSBarSel = this.an.backDSBarSel;
	        var percent = backDSBarSel.parseMaxPercent(parseFloat(backDSBarSel.el_.style.top) / 100);
	        var scroll = this.an.AnDisplay.el_;
	        var maxTop = scroll.scrollHeight;
	        var minTop = scroll.offsetHeight;
	        var maxBottom = maxTop - minTop;
	        var minBottom = 0;
	        var pos = {};
	        
	        percent = percent || 0;
	        pos.top = Math.max(minTop, Math.min(maxTop, maxBottom * percent + scroll.offsetHeight));
	        pos.bottom = Math.max(minBottom, Math.min(maxBottom, maxBottom * percent));
	        return pos;
	    };

	    videojs.BackAnDisplayScrollTime.prototype.getElements = function(AnPos) {
	        var AnPos = AnPos || {};
	        var scroll = this.an.AnDisplay.el_;
	        var emtoPx = parseFloat($(scroll).find('.annotation').css('height'));
	        var maxTop = parseInt(scroll.scrollHeight / emtoPx);
	        var minTop = parseInt(scroll.offsetHeight / emtoPx);
	        var maxBottom = (maxTop - minTop);
	        var minBottom = 0;
	        var AnEl = {};
	        AnEl.top = Math.max(minTop, Math.min(maxTop, parseInt(AnPos.top / emtoPx)));
	        AnEl.bottom = Math.max(minBottom, Math.min(maxBottom, parseInt(AnPos.bottom / emtoPx)));
	        return AnEl;
	    };

	    videojs.BackAnDisplayScrollTime.prototype.getTimes = function(AnEl) {
	        var AnEl = AnEl || {};
	        var AnTimes = {};
	        var TopEl, BottomEl, AnTop, AnBottom;
	        var AnArray = $.makeArray(this.an.AnDisplay.el_.children);
	        AnEl.top = AnEl.top || 0;
	        AnEl.bottom = AnEl.bottom || 0;
	        
	        // Get HTML Elements
	        var count = 0;
	        var lastEl;
	        for (var index in AnArray) {
	            var an = AnArray[index];
	            if (an.style.display !== 'none') {
	                if (count == AnEl.bottom) {
	                    TopEl = an;
	                } else if (count == AnEl.top) {
	                    BottomEl = an;
	                }
	                lastEl = an;
	                count++;
	            }
	        }
	        if (typeof BottomEl === 'undefined')
	            BottomEl = lastEl;
	            
	        // Annotation Element
	        AnTop = typeof TopEl !== 'undefined' ? $.data(TopEl, 'annotation') : undefined;
	        AnBottom = typeof BottomEl !== 'undefined' ? $.data(BottomEl, 'annotation') : undefined;
	        // Update of the element
	        AnTimes.top = (typeof AnTop !== 'undefined' && typeof AnTop.updated !== 'undefined') ? AnTop.updated : '';
	        AnTimes.bottom = (typeof AnBottom !=='undefined' && typeof AnBottom.updated !== 'undefined') ? AnBottom.updated : '';
	        // Format
	        AnTimes.top = new Date(AnTimes.top !== '' ? createDateFromISO8601(AnTimes.top) : '');
	        AnTimes.bottom = new Date(AnTimes.bottom != '' ? createDateFromISO8601(AnTimes.bottom) : '');
	        return AnTimes;
	    };
	}) ();

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	(function(Annotator) {
	// ----------------Plugin for Annotator to setup videojs---------------- //

	Annotator.Plugin.VideoJS = (function(_super) {
	    var __bind = function(fn, me) { 
	        return function() { 
	            return fn.apply(me, arguments); 
	        }; 
	    };
	    var __hasProp = {}.hasOwnProperty;
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
	    __extends(VideoJS, _super);

	    // constructor
	    function VideoJS() {
	        this.pluginSubmit = __bind(this.pluginSubmit, this);
	        _ref = VideoJS.__super__.constructor.apply(this, arguments);
	        this.__indexOf = [].indexOf || function(item) { 
	            for (var i = 0, l = this.length; i < l; i++) { 
	                if (i in this && this[i] === item) 
	                    return i; 
	            } 
	            return -1; 
	        };
	        return _ref;
	    };

	    VideoJS.prototype.field = null;
	    VideoJS.prototype.input = null;

	    VideoJS.prototype.pluginInit = function() {
	        //console.log("VideoJS-pluginInit");
	        // Check that annotator is working
	        if (!Annotator.supported()) {
	            return;
	        }
	        
	        // -- Editor
	        this.field = this.annotator.editor.addField({
	            id: 'vjs-input-rangeTime-annotations',
	            type: 'input', // options (textarea, input, select, checkbox)
	            submit: this.pluginSubmit,
	            EditVideoAn: this.EditVideoAn
	        });
	        
	        // Modify the element created with annotator to be an invisible span
	        var select = '<li><span id="vjs-input-rangeTime-annotations"></span></li>';
	        var newfield = Annotator.$(select);
	        Annotator.$(this.field).replaceWith(newfield);
	        this.field = newfield[0];
	        
	        // -- Listener for Open Video Annotator
	        this.initListeners();
	        
	        return this.input = $(this.field).find(':input');
	    };
	    

	    // New JSON for the database
	    VideoJS.prototype.pluginSubmit = function(field, annotation) {
	        console.log("Plug-pluginSubmit");
	        // Select the new JSON for the Object to save
	        if (this.EditVideoAn()) {
	            var annotator = this.annotator;
	            var index = annotator.editor.VideoJS;
	            var player = AController.targetObjectController.vid;//annotator.mplayer[index];
	            var rs = player.rangeslider;
	            var time = rs.getValues();
	            var isYoutube = (player && typeof player.techName !== 'undefined') ? (player.techName === 'Youtube') : false;
	            var isNew = typeof annotation.media === 'undefined';
	            var ext;
	            var type = player.options_.sources[0].type.split("/") || "";
	            
	            if (isNew) 
	                annotation.media = typeof type[0] !== 'undefined' ? type[0] : "video"; // - media (by default: video)
	            
	            annotation.target = annotation.target || {}; // - target
	            annotation.target.container = player.id_ || ""; // - target.container
	            annotation.target.src = player.options_.sources[0].src || ""; // - target.src (media source)
	            ext = (player.options_.sources[0].src.substring(player.options_.sources[0].src.lastIndexOf("."))).toLowerCase(); 
	            ext = isYoutube ? 'Youtube' : ext; // The extension for youtube
	            annotation.target.ext = ext || ""; // - target.ext (extension)
	            annotation.rangeTime =     annotation.rangeTime || {};    // - rangeTime
	            annotation.rangeTime.start = time.start || 0; // - rangeTime.start
	            annotation.rangeTime.end = time.end || 0; // - rangeTime.end
	            annotation.updated = new Date().toISOString(); // - updated
	            if (typeof annotation.created === 'undefined')
	                annotation.created = annotation.updated; // - created
	            
	            // show the new annotation
	            var eventAn = isNew ? "annotationCreated" : "annotationUpdated";
	            function afterFinish(){
	                player.annotations.showAnnotation(annotation);
	                annotator.unsubscribe(eventAn, afterFinish);
	            };
	            annotator.subscribe(eventAn, afterFinish); // show after the annotation is in the back-end
	        } else {
	            if (typeof annotation.media === 'undefined')
	                annotation.media = "text"; // - media
	            
	            annotation.updated = new Date().toISOString(); // - updated
	            
	            if (typeof annotation.created === 'undefined')
	                annotation.created = annotation.updated; // - created
	        }
	        return annotation.media;
	    };
	    
	    
	    // ------ Methods    ------ //
	    // Detect if we are creating or editing a video-js annotation
	    VideoJS.prototype.EditVideoAn =  function () {
	        var wrapper = $('.annotator-wrapper').parent()[0];
	        var annotator = window.annotator = $.data(wrapper, 'annotator');
	        var isOpenVideojs = (typeof AController.targetObjectController.vid !== 'undefined');
	        return (isOpenVideojs && typeof VideoJS !== 'undefined');
	    };
	    
	    
	    // Detect if the annotation is a video-js annotation
	    VideoJS.prototype.isVideoJS = function (an) {
	        var wrapper = $('.annotator-wrapper').parent()[0];
	        var annotator = window.annotator = $.data(wrapper, 'annotator');
	        var rt = an.rangeTime;
	        var isOpenVideojs = (typeof AController.targetObjectController.vid !== 'undefined');
	        var isVideo = (typeof an.media !== 'undefined' && (an.media === 'video' || an.media === 'audio'));
	        var isNumber = (typeof rt !== 'undefined' && !isNaN(parseFloat(rt.start)) && isFinite(rt.start) && !isNaN(parseFloat(rt.end)) && isFinite(rt.end));
	        return (isOpenVideojs && isVideo && isNumber);
	    };
	    
	    // Delete Video Annotation
	    VideoJS.prototype._deleteAnnotation = function(an) {
	        var target = an.target || {};
	        var container = target.container || {};
	        var player = AController.targetObjectController.vid;
	        
	        var annotator = this.annotator;
	        var annotations = annotator.plugins.Store.annotations;
	        var tot = typeof annotations !== 'undefined' ? annotations.length : 0;
	        var attempts = 0; // max 100
	            
	        // This is to watch the annotations object, to see when is deleted the annotation
	        var ischanged = function() {
	            var new_tot = annotator.plugins.Store.annotations.length;
	            if (attempts < 100)
	                setTimeout(function() {
	                    if (new_tot !== tot) {
	                        player.annotations.refreshDisplay(); // Reload the display of annotation
	                    } else {
	                        attempts++;
	                        ischanged();
	                    }
	                }, 100); // wait for the change in the annotations
	        };
	        ischanged();
	        
	        player.rangeslider.hide(); // Hide Range Slider
	    };
	    
	    
	    // --Listeners
	    VideoJS.prototype.initListeners = function () {
	        var wrapper = $('.annotator-wrapper').parent()[0];
	        var annotator = $.data(wrapper, 'annotator');
	        var EditVideoAn = this.EditVideoAn;
	        var isVideoJS = this.isVideoJS;
	        var self = this;
	            
	        // local functions
	        // -- Editor
	        function annotationEditorHidden(editor) {
	            if (EditVideoAn()){
	                AController.targetObjectController.vid.rangeslider.hide(); // Hide Range Slider
	                AController.targetObjectController.vid.annotations.refreshDisplay(); // Reload the display of annotations
	            }
	            annotator.unsubscribe("annotationEditorHidden", annotationEditorHidden);
	        };
	        function annotationEditorShown(editor, annotation) {
	            AController.targetObjectController.vid.annotations.editAnnotation(annotation, editor);
	            annotator.subscribe("annotationEditorHidden", annotationEditorHidden);
	        };
	        // -- Annotations
	        function annotationDeleted(annotation) {
	            
	            if (isVideoJS(annotation))
	                self._deleteAnnotation(annotation);
	        };
	        // -- Viewer
	        function hideViewer(){
	            AController.targetObjectController.vid.annotations.AnDisplay.onCloseViewer();
	            annotator.viewer.unsubscribe("hide", hideViewer);
	        };
	        function annotationViewerShown(viewer, annotations) {
	            
	            var separation = viewer.element.hasClass(viewer.classes.invert.y) ? 5 : -5;
	            var newpos = {
	                top: parseFloat(viewer.element[0].style.top)+separation,
	                left: parseFloat(viewer.element[0].style.left)
	            };
	            viewer.element.css(newpos);
	            
	            // Remove the time to wait until disapear, to be more faster that annotator by default
	            viewer.element.find('.annotator-controls').removeClass(viewer.classes.showControls);
	            
	            annotator.viewer.subscribe("hide", hideViewer);
	        };    
	        
	        // subscribe to Annotator
	        annotator.subscribe("annotationEditorShown", annotationEditorShown)
	            .subscribe("annotationDeleted", annotationDeleted)
	            .subscribe("annotationViewerShown", annotationViewerShown);
	    };
	    return VideoJS;

	})(Annotator.Plugin);

	})( true ? __webpack_require__(24) : window.Annotator);


/***/ }
/******/ ]);