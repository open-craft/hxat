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
	__webpack_require__(9);
	__webpack_require__(43);
	__webpack_require__(45);
	__webpack_require__(10);
	__webpack_require__(46);
	__webpack_require__(47);
	__webpack_require__(48);
	__webpack_require__(49);
	__webpack_require__(50);
	module.exports = __webpack_require__(51);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v1.12.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:17Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var deletedIds = [];

	var document = window.document;

	var slice = deletedIds.slice;

	var concat = deletedIds.concat;

	var push = deletedIds.push;

	var indexOf = deletedIds.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "1.12.4",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1, IE<9
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: deletedIds.sort,
		splice: deletedIds.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var src, copyIsArray, copy, name, options, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		// See test/unit/core.js for details concerning isFunction.
		// Since version 1.3, DOM methods and functions like alert
		// aren't supported. They return false on IE (#2968).
		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray || function( obj ) {
			return jQuery.type( obj ) === "array";
		},

		isWindow: function( obj ) {
			/* jshint eqeqeq: false */
			return obj != null && obj == obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		isPlainObject: function( obj ) {
			var key;

			// Must be an Object.
			// Because of IE, we also have to check the presence of the constructor property.
			// Make sure that DOM nodes and window objects don't pass through, as well
			if ( !obj || jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			try {

				// Not own constructor property must be Object
				if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
					return false;
				}
			} catch ( e ) {

				// IE8,9 Will throw exceptions on certain host objects #9897
				return false;
			}

			// Support: IE<9
			// Handle iteration over inherited properties before own properties.
			if ( !support.ownFirst ) {
				for ( key in obj ) {
					return hasOwn.call( obj, key );
				}
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own.
			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Workarounds based on findings by Jim Driscoll
		// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
		globalEval: function( data ) {
			if ( data && jQuery.trim( data ) ) {

				// We use execScript on Internet Explorer
				// We use an anonymous function so that context is window
				// rather than jQuery in Firefox
				( window.execScript || function( data ) {
					window[ "eval" ].call( window, data ); // jscs:ignore requireDotNotation
				} )( data );
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1, IE<9
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			var len;

			if ( arr ) {
				if ( indexOf ) {
					return indexOf.call( arr, elem, i );
				}

				len = arr.length;
				i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

				for ( ; i < len; i++ ) {

					// Skip accessing in sparse arrays
					if ( i in arr && arr[ i ] === elem ) {
						return i;
					}
				}
			}

			return -1;
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			while ( j < len ) {
				first[ i++ ] = second[ j++ ];
			}

			// Support: IE<9
			// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
			if ( len !== len ) {
				while ( second[ j ] !== undefined ) {
					first[ i++ ] = second[ j++ ];
				}
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var args, proxy, tmp;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: function() {
			return +( new Date() );
		},

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = deletedIds[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( jQuery.inArray( elem, qualifier ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				ret = [],
				self = this,
				len = self.length;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// init accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector.charAt( 0 ) === "<" &&
					selector.charAt( selector.length - 1 ) === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if ( elem && elem.parentNode ) {

							// Handle the case where IE and Opera return items
							// by name instead of ID
							if ( elem.id !== match[ 2 ] ) {
								return rootjQuery.find( selector );
							}

							// Otherwise, we inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return typeof root.ready !== "undefined" ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var i,
				targets = jQuery( target, this ),
				len = targets.length;

			return this.filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within
		// the matched set of elements
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// index in selector
			if ( typeof elem === "string" ) {
				return jQuery.inArray( this[ 0 ], jQuery( elem ) );
			}

			// Locate the position of the desired element
			return jQuery.inArray(

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem, this );
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		do {
			cur = cur[ dir ];
		} while ( cur && cur.nodeType !== 1 );

		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return jQuery.nodeName( elem, "iframe" ) ?
				elem.contentDocument || elem.contentWindow.document :
				jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var ret = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				ret = jQuery.filter( selector, ret );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					ret = jQuery.uniqueSort( ret );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					ret = ret.reverse();
				}
			}

			return this.pushStack( ret );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = true;
					if ( !memory ) {
						self.disable();
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );

						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// if we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * Clean-up method for dom ready events
	 */
	function detach() {
		if ( document.addEventListener ) {
			document.removeEventListener( "DOMContentLoaded", completed );
			window.removeEventListener( "load", completed );

		} else {
			document.detachEvent( "onreadystatechange", completed );
			window.detachEvent( "onload", completed );
		}
	}

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {

		// readyState === "complete" is good enough for us to call the dom ready in oldIE
		if ( document.addEventListener ||
			window.event.type === "load" ||
			document.readyState === "complete" ) {

			detach();
			jQuery.ready();
		}
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE6-10
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			// Standards-based browsers support DOMContentLoaded
			} else if ( document.addEventListener ) {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );

			// If IE event model is used
			} else {

				// Ensure firing before onload, maybe late but safe also for iframes
				document.attachEvent( "onreadystatechange", completed );

				// A fallback to window.onload, that will always work
				window.attachEvent( "onload", completed );

				// If IE and not a frame
				// continually check to see if the document is ready
				var top = false;

				try {
					top = window.frameElement == null && document.documentElement;
				} catch ( e ) {}

				if ( top && top.doScroll ) {
					( function doScrollCheck() {
						if ( !jQuery.isReady ) {

							try {

								// Use the trick by Diego Perini
								// http://javascript.nwbox.com/IEContentLoaded/
								top.doScroll( "left" );
							} catch ( e ) {
								return window.setTimeout( doScrollCheck, 50 );
							}

							// detach all dom ready events
							detach();

							// and execute any waiting functions
							jQuery.ready();
						}
					} )();
				}
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Support: IE<9
	// Iteration over object's inherited properties before its own
	var i;
	for ( i in jQuery( support ) ) {
		break;
	}
	support.ownFirst = i === "0";

	// Note: most support tests are defined in their respective modules.
	// false until the test is run
	support.inlineBlockNeedsLayout = false;

	// Execute ASAP in case we need to set body.style.zoom
	jQuery( function() {

		// Minified: var a,b,c,d
		var val, div, body, container;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {

			// Return for frameset docs that don't have a body
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		if ( typeof div.style.zoom !== "undefined" ) {

			// Support: IE<8
			// Check if natively block-level elements act like inline-block
			// elements when setting their display to 'inline' and giving
			// them layout
			div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

			support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
			if ( val ) {

				// Prevent IE 6 from affecting layout for positioned elements #11048
				// Prevent IE from shrinking the body in IE 7 mode #12869
				// Support: IE<8
				body.style.zoom = 1;
			}
		}

		body.removeChild( container );
	} );


	( function() {
		var div = document.createElement( "div" );

		// Support: IE<9
		support.deleteExpando = true;
		try {
			delete div.test;
		} catch ( e ) {
			support.deleteExpando = false;
		}

		// Null elements to avoid leaks in IE.
		div = null;
	} )();
	var acceptData = function( elem ) {
		var noData = jQuery.noData[ ( elem.nodeName + " " ).toLowerCase() ],
			nodeType = +elem.nodeType || 1;

		// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
		return nodeType !== 1 && nodeType !== 9 ?
			false :

			// Nodes accept data unless otherwise specified; rejection can be conditional
			!noData || noData !== true && elem.getAttribute( "classid" ) === noData;
	};




	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /([A-Z])/g;

	function dataAttr( elem, key, data ) {

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {

			var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				jQuery.data( elem, key, data );

			} else {
				data = undefined;
			}
		}

		return data;
	}

	// checks a cache object for emptiness
	function isEmptyDataObject( obj ) {
		var name;
		for ( name in obj ) {

			// if the public data object is empty, the private is still empty
			if ( name === "data" && jQuery.isEmptyObject( obj[ name ] ) ) {
				continue;
			}
			if ( name !== "toJSON" ) {
				return false;
			}
		}

		return true;
	}

	function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
		if ( !acceptData( elem ) ) {
			return;
		}

		var ret, thisCache,
			internalKey = jQuery.expando,

			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,

			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,

			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

		// Avoid doing any more work than we need to when trying to get data on an
		// object that has no data at all
		if ( ( !id || !cache[ id ] || ( !pvt && !cache[ id ].data ) ) &&
			data === undefined && typeof name === "string" ) {
			return;
		}

		if ( !id ) {

			// Only DOM nodes need a new unique ID for each element since their data
			// ends up in the global cache
			if ( isNode ) {
				id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
			} else {
				id = internalKey;
			}
		}

		if ( !cache[ id ] ) {

			// Avoid exposing jQuery metadata on plain JS objects when the object
			// is serialized using JSON.stringify
			cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
		}

		// An object can be passed to jQuery.data instead of a key/value pair; this gets
		// shallow copied over onto the existing cache
		if ( typeof name === "object" || typeof name === "function" ) {
			if ( pvt ) {
				cache[ id ] = jQuery.extend( cache[ id ], name );
			} else {
				cache[ id ].data = jQuery.extend( cache[ id ].data, name );
			}
		}

		thisCache = cache[ id ];

		// jQuery data() is stored in a separate object inside the object's internal data
		// cache in order to avoid key collisions between internal data and user-defined
		// data.
		if ( !pvt ) {
			if ( !thisCache.data ) {
				thisCache.data = {};
			}

			thisCache = thisCache.data;
		}

		if ( data !== undefined ) {
			thisCache[ jQuery.camelCase( name ) ] = data;
		}

		// Check for both converted-to-camel and non-converted data property names
		// If a data property was specified
		if ( typeof name === "string" ) {

			// First Try to find as-is property data
			ret = thisCache[ name ];

			// Test for null|undefined property data
			if ( ret == null ) {

				// Try to find the camelCased property
				ret = thisCache[ jQuery.camelCase( name ) ];
			}
		} else {
			ret = thisCache;
		}

		return ret;
	}

	function internalRemoveData( elem, name, pvt ) {
		if ( !acceptData( elem ) ) {
			return;
		}

		var thisCache, i,
			isNode = elem.nodeType,

			// See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,
			id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

		// If there is already no cache entry for this object, there is no
		// purpose in continuing
		if ( !cache[ id ] ) {
			return;
		}

		if ( name ) {

			thisCache = pvt ? cache[ id ] : cache[ id ].data;

			if ( thisCache ) {

				// Support array or space separated string names for data keys
				if ( !jQuery.isArray( name ) ) {

					// try the string as a key before any manipulation
					if ( name in thisCache ) {
						name = [ name ];
					} else {

						// split the camel cased version by spaces unless a key with the spaces exists
						name = jQuery.camelCase( name );
						if ( name in thisCache ) {
							name = [ name ];
						} else {
							name = name.split( " " );
						}
					}
				} else {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = name.concat( jQuery.map( name, jQuery.camelCase ) );
				}

				i = name.length;
				while ( i-- ) {
					delete thisCache[ name[ i ] ];
				}

				// If there is no data left in the cache, we want to continue
				// and let the cache object itself get destroyed
				if ( pvt ? !isEmptyDataObject( thisCache ) : !jQuery.isEmptyObject( thisCache ) ) {
					return;
				}
			}
		}

		// See jQuery.data for more information
		if ( !pvt ) {
			delete cache[ id ].data;

			// Don't destroy the parent cache unless the internal data object
			// had been the only thing left in it
			if ( !isEmptyDataObject( cache[ id ] ) ) {
				return;
			}
		}

		// Destroy the cache
		if ( isNode ) {
			jQuery.cleanData( [ elem ], true );

		// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
		/* jshint eqeqeq: false */
		} else if ( support.deleteExpando || cache != cache.window ) {
			/* jshint eqeqeq: true */
			delete cache[ id ];

		// When all else fails, undefined
		} else {
			cache[ id ] = undefined;
		}
	}

	jQuery.extend( {
		cache: {},

		// The following elements (space-suffixed to avoid Object.prototype collisions)
		// throw uncatchable exceptions if you attempt to set expando properties
		noData: {
			"applet ": true,
			"embed ": true,

			// ...but Flash objects (which have this classid) *can* handle expandos
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},

		hasData: function( elem ) {
			elem = elem.nodeType ? jQuery.cache[ elem[ jQuery.expando ] ] : elem[ jQuery.expando ];
			return !!elem && !isEmptyDataObject( elem );
		},

		data: function( elem, name, data ) {
			return internalData( elem, name, data );
		},

		removeData: function( elem, name ) {
			return internalRemoveData( elem, name );
		},

		// For internal use only.
		_data: function( elem, name, data ) {
			return internalData( elem, name, data, true );
		},

		_removeData: function( elem, name ) {
			return internalRemoveData( elem, name, true );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Special expections of .data basically thwart jQuery.access,
			// so implement the relevant behavior ourselves

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = jQuery.data( elem );

					if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						jQuery._data( elem, "parsedAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					jQuery.data( this, key );
				} );
			}

			return arguments.length > 1 ?

				// Sets one value
				this.each( function() {
					jQuery.data( this, key, value );
				} ) :

				// Gets one value
				// Try to fetch any internally stored data first
				elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
		},

		removeData: function( key ) {
			return this.each( function() {
				jQuery.removeData( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = jQuery._data( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = jQuery._data( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// not intended for public consumption - generates a queueHooks object,
		// or returns the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return jQuery._data( elem, key ) || jQuery._data( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					jQuery._removeData( elem, type + "queue" );
					jQuery._removeData( elem, key );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = jQuery._data( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );


	( function() {
		var shrinkWrapBlocksVal;

		support.shrinkWrapBlocks = function() {
			if ( shrinkWrapBlocksVal != null ) {
				return shrinkWrapBlocksVal;
			}

			// Will be changed later if needed.
			shrinkWrapBlocksVal = false;

			// Minified: var b,c,d
			var div, body, container;

			body = document.getElementsByTagName( "body" )[ 0 ];
			if ( !body || !body.style ) {

				// Test fired too early or in an unsupported environment, exit.
				return;
			}

			// Setup
			div = document.createElement( "div" );
			container = document.createElement( "div" );
			container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
			body.appendChild( container ).appendChild( div );

			// Support: IE6
			// Check if elements with layout shrink-wrap their children
			if ( typeof div.style.zoom !== "undefined" ) {

				// Reset CSS: box-sizing; display; margin; border
				div.style.cssText =

					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;" +
					"padding:1px;width:1px;zoom:1";
				div.appendChild( document.createElement( "div" ) ).style.width = "5px";
				shrinkWrapBlocksVal = div.offsetWidth !== 3;
			}

			body.removeChild( container );

			return shrinkWrapBlocksVal;
		};

	} )();
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			length = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < length; i++ ) {
					fn(
						elems[ i ],
						key,
						raw ? value : value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				length ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );

	var rleadingWhitespace = ( /^\s+/ );

	var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" +
			"details|dialog|figcaption|figure|footer|header|hgroup|main|" +
			"mark|meter|nav|output|picture|progress|section|summary|template|time|video";



	function createSafeFragment( document ) {
		var list = nodeNames.split( "|" ),
			safeFrag = document.createDocumentFragment();

		if ( safeFrag.createElement ) {
			while ( list.length ) {
				safeFrag.createElement(
					list.pop()
				);
			}
		}
		return safeFrag;
	}


	( function() {
		var div = document.createElement( "div" ),
			fragment = document.createDocumentFragment(),
			input = document.createElement( "input" );

		// Setup
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

		// IE strips leading whitespace when .innerHTML is used
		support.leadingWhitespace = div.firstChild.nodeType === 3;

		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		support.tbody = !div.getElementsByTagName( "tbody" ).length;

		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

		// Makes sure cloning an html5 element does not cause problems
		// Where outerHTML is undefined, this still works
		support.html5Clone =
			document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

		// Check if a disconnected checkbox will retain its checked
		// value of true after appended to the DOM (IE6/7)
		input.type = "checkbox";
		input.checked = true;
		fragment.appendChild( input );
		support.appendChecked = input.checked;

		// Make sure textarea (and checkbox) defaultValue is properly cloned
		// Support: IE6-IE11+
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

		// #11217 - WebKit loses check when the name is after the checked attribute
		fragment.appendChild( div );

		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input = document.createElement( "input" );
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
		// old WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<9
		// Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
		support.noCloneEvent = !!div.addEventListener;

		// Support: IE<9
		// Since attributes and properties are the same in IE,
		// cleanData must set properties to undefined rather than use removeAttribute
		div[ jQuery.expando ] = 1;
		support.attributes = !div.getAttribute( jQuery.expando );
	} )();


	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		area: [ 1, "<map>", "</map>" ],

		// Support: IE8
		param: [ 1, "<object>", "</object>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
	};

	// Support: IE8-IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {
		var elems, elem,
			i = 0,
			found = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
					undefined;

		if ( !found ) {
			for ( found = [], elems = context.childNodes || context;
				( elem = elems[ i ] ) != null;
				i++
			) {
				if ( !tag || jQuery.nodeName( elem, tag ) ) {
					found.push( elem );
				} else {
					jQuery.merge( found, getAll( elem, tag ) );
				}
			}
		}

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], found ) :
			found;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var elem,
			i = 0;
		for ( ; ( elem = elems[ i ] ) != null; i++ ) {
			jQuery._data(
				elem,
				"globalEval",
				!refElements || jQuery._data( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/,
		rtbody = /<tbody/i;

	function fixDefaultChecked( elem ) {
		if ( rcheckableType.test( elem.type ) ) {
			elem.defaultChecked = elem.checked;
		}
	}

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var j, elem, contains,
			tmp, tag, tbody, wrap,
			l = elems.length,

			// Ensure a safe fragment
			safe = createSafeFragment( context ),

			nodes = [],
			i = 0;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || safe.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;

					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Manually add leading whitespace removed by IE
					if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[ 0 ] ) );
					}

					// Remove IE's autoinserted <tbody> from table fragments
					if ( !support.tbody ) {

						// String was a <table>, *may* have spurious <tbody>
						elem = tag === "table" && !rtbody.test( elem ) ?
							tmp.firstChild :

							// String was a bare <thead> or <tfoot>
							wrap[ 1 ] === "<table>" && !rtbody.test( elem ) ?
								tmp :
								0;

						j = elem && elem.childNodes.length;
						while ( j-- ) {
							if ( jQuery.nodeName( ( tbody = elem.childNodes[ j ] ), "tbody" ) &&
								!tbody.childNodes.length ) {

								elem.removeChild( tbody );
							}
						}
					}

					jQuery.merge( nodes, tmp.childNodes );

					// Fix #12392 for WebKit and IE > 9
					tmp.textContent = "";

					// Fix #12392 for oldIE
					while ( tmp.firstChild ) {
						tmp.removeChild( tmp.firstChild );
					}

					// Remember the top-level container for proper cleanup
					tmp = safe.lastChild;
				}
			}
		}

		// Fix #11356: Clear elements from fragment
		if ( tmp ) {
			safe.removeChild( tmp );
		}

		// Reset defaultChecked for any radios and checkboxes
		// about to be appended to the DOM in IE 6/7 (#8060)
		if ( !support.appendChecked ) {
			jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
		}

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}

				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( safe.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		tmp = null;

		return safe;
	}


	( function() {
		var i, eventName,
			div = document.createElement( "div" );

		// Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
		for ( i in { submit: true, change: true, focusin: true } ) {
			eventName = "on" + i;

			if ( !( support[ i ] = eventName in window ) ) {

				// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
				div.setAttribute( eventName, "t" );
				support[ i ] = div.attributes[ eventName ].expando === false;
			}
		}

		// Null elements to avoid leaks in IE.
		div = null;
	} )();


	var rformElems = /^(?:input|select|textarea)$/i,
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {
			var tmp, events, t, handleObjIn,
				special, eventHandle, handleObj,
				handlers, type, namespaces, origType,
				elemData = jQuery._data( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" &&
						( !e || jQuery.event.triggered !== e.type ) ?
						jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
						undefined;
				};

				// Add elem as a property of the handle fn to prevent a memory leak
				// with IE non-native events
				eventHandle.elem = elem;
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener/attachEvent if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						// Bind the global event handler to the element
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle, false );

						} else if ( elem.attachEvent ) {
							elem.attachEvent( "on" + type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

			// Nullify elem to prevent memory leaks in IE
			elem = null;
		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
			var j, handleObj, tmp,
				origCount, t, events,
				special, handlers, type,
				namespaces, origType,
				elemData = jQuery.hasData( elem ) && jQuery._data( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				delete elemData.handle;

				// removeData also checks for emptiness and clears the expando if empty
				// so use it instead of delete
				jQuery._removeData( elem, "events" );
			}
		},

		trigger: function( event, data, elem, onlyHandlers ) {
			var handle, ontype, cur,
				bubbleType, special, tmp, i,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] &&
					jQuery._data( cur, "handle" );

				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if (
					( !special._default ||
					 special._default.apply( eventPath.pop(), data ) === false
					) && acceptData( elem )
				) {

					// Call a native DOM method on the target with the same name name as the event.
					// Can't use an .isFunction() check here because IE6/7 fails that test.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						try {
							elem[ type ]();
						} catch ( e ) {

							// IE<9 dies on focus/blur to hidden element (#1486,#12518)
							// only reproducible on winXP IE8 native, not IE9 in IE8 mode
						}
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				/* jshint eqeqeq: false */
				for ( ; cur != this; cur = cur.parentNode || this ) {
					/* jshint eqeqeq: true */

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: IE<9
			// Fix target property (#1925)
			if ( !event.target ) {
				event.target = originalEvent.srcElement || document;
			}

			// Support: Safari 6-8+
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			// Support: IE<9
			// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
			event.metaKey = !!event.metaKey;

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY fromElement offsetX offsetY " +
				"pageX pageY screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var body, eventDoc, doc,
					button = original.button,
					fromElement = original.fromElement;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add relatedTarget, if necessary
				if ( !event.relatedTarget && fromElement ) {
					event.relatedTarget = fromElement === event.target ?
						original.toElement :
						fromElement;
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						try {
							this.focus();
							return false;
						} catch ( e ) {

							// Support: IE<9
							// If we error on focus to hidden element (#1486, #12518),
							// let .trigger() run the handlers
						}
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},

		// Piggyback on a donor event to simulate a different one
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true

					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// Guard for simulated events was moved to jQuery.event.stopPropagation function
					// since `originalEvent` should point to the original event for the
					// constancy with other events and for more focused logic
				}
			);

			jQuery.event.trigger( e, null, elem );

			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	};

	jQuery.removeEvent = document.removeEventListener ?
		function( elem, type, handle ) {

			// This "if" is needed for plain objects
			if ( elem.removeEventListener ) {
				elem.removeEventListener( type, handle );
			}
		} :
		function( elem, type, handle ) {
			var name = "on" + type;

			if ( elem.detachEvent ) {

				// #8545, #7054, preventing memory leaks for custom events in IE6-8
				// detachEvent needed property on element, by name of that event,
				// to properly expose it to GC
				if ( typeof elem[ name ] === "undefined" ) {
					elem[ name ] = null;
				}

				elem.detachEvent( name, handle );
			}
		};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: IE < 9, Android < 4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;
			if ( !e ) {
				return;
			}

			// If preventDefault exists, run it on the original event
			if ( e.preventDefault ) {
				e.preventDefault();

			// Support: IE
			// Otherwise set the returnValue property of the original event to false
			} else {
				e.returnValue = false;
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( !e || this.isSimulated ) {
				return;
			}

			// If stopPropagation exists, run it on the original event
			if ( e.stopPropagation ) {
				e.stopPropagation();
			}

			// Support: IE
			// Set the cancelBubble property of the original event to true
			e.cancelBubble = true;
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && e.stopImmediatePropagation ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	// IE submit delegation
	if ( !support.submit ) {

		jQuery.event.special.submit = {
			setup: function() {

				// Only need this for delegated form submit events
				if ( jQuery.nodeName( this, "form" ) ) {
					return false;
				}

				// Lazy-add a submit handler when a descendant form may potentially be submitted
				jQuery.event.add( this, "click._submit keypress._submit", function( e ) {

					// Node name check avoids a VML-related crash in IE (#9807)
					var elem = e.target,
						form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ?

							// Support: IE <=8
							// We use jQuery.prop instead of elem.form
							// to allow fixing the IE8 delegated submit issue (gh-2332)
							// by 3rd party polyfills/workarounds.
							jQuery.prop( elem, "form" ) :
							undefined;

					if ( form && !jQuery._data( form, "submit" ) ) {
						jQuery.event.add( form, "submit._submit", function( event ) {
							event._submitBubble = true;
						} );
						jQuery._data( form, "submit", true );
					}
				} );

				// return undefined since we don't need an event listener
			},

			postDispatch: function( event ) {

				// If form was submitted by the user, bubble the event up the tree
				if ( event._submitBubble ) {
					delete event._submitBubble;
					if ( this.parentNode && !event.isTrigger ) {
						jQuery.event.simulate( "submit", this.parentNode, event );
					}
				}
			},

			teardown: function() {

				// Only need this for delegated form submit events
				if ( jQuery.nodeName( this, "form" ) ) {
					return false;
				}

				// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
				jQuery.event.remove( this, "._submit" );
			}
		};
	}

	// IE change delegation and checkbox/radio fix
	if ( !support.change ) {

		jQuery.event.special.change = {

			setup: function() {

				if ( rformElems.test( this.nodeName ) ) {

					// IE doesn't fire change on a check/radio until blur; trigger it on click
					// after a propertychange. Eat the blur-change in special.change.handle.
					// This still fires onchange a second time for check/radio after blur.
					if ( this.type === "checkbox" || this.type === "radio" ) {
						jQuery.event.add( this, "propertychange._change", function( event ) {
							if ( event.originalEvent.propertyName === "checked" ) {
								this._justChanged = true;
							}
						} );
						jQuery.event.add( this, "click._change", function( event ) {
							if ( this._justChanged && !event.isTrigger ) {
								this._justChanged = false;
							}

							// Allow triggered, simulated change events (#11500)
							jQuery.event.simulate( "change", this, event );
						} );
					}
					return false;
				}

				// Delegated event; lazy-add a change handler on descendant inputs
				jQuery.event.add( this, "beforeactivate._change", function( e ) {
					var elem = e.target;

					if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "change" ) ) {
						jQuery.event.add( elem, "change._change", function( event ) {
							if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
								jQuery.event.simulate( "change", this.parentNode, event );
							}
						} );
						jQuery._data( elem, "change", true );
					}
				} );
			},

			handle: function( event ) {
				var elem = event.target;

				// Swallow native change events from checkbox/radio, we already triggered them above
				if ( this !== elem || event.isSimulated || event.isTrigger ||
					( elem.type !== "radio" && elem.type !== "checkbox" ) ) {

					return event.handleObj.handler.apply( this, arguments );
				}
			},

			teardown: function() {
				jQuery.event.remove( this, "._change" );

				return !rformElems.test( this.nodeName );
			}
		};
	}

	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = jQuery._data( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = jQuery._data( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						jQuery._removeData( doc, fix );
					} else {
						jQuery._data( doc, fix, attaches );
					}
				}
			};
		} );
	}

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		},

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
		rnoshimcache = new RegExp( "<(?:" + nodeNames + ")[\\s/>]", "i" ),
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		safeFragment = createSafeFragment( document ),
		fragmentDiv = safeFragment.appendChild( document.createElement( "div" ) );

	// Support: IE<8
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( jQuery.find.attr( elem, "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}
		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
			return;
		}

		var type, i, l,
			oldData = jQuery._data( src ),
			curData = jQuery._data( dest, oldData ),
			events = oldData.events;

		if ( events ) {
			delete curData.handle;
			curData.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}

		// make the cloned public data object a copy from the original
		if ( curData.data ) {
			curData.data = jQuery.extend( {}, curData.data );
		}
	}

	function fixCloneNodeIssues( src, dest ) {
		var nodeName, e, data;

		// We do not need to do anything for non-Elements
		if ( dest.nodeType !== 1 ) {
			return;
		}

		nodeName = dest.nodeName.toLowerCase();

		// IE6-8 copies events bound via attachEvent when using cloneNode.
		if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
			data = jQuery._data( dest );

			for ( e in data.events ) {
				jQuery.removeEvent( dest, e, data.handle );
			}

			// Event data gets referenced instead of copied if the expando gets copied too
			dest.removeAttribute( jQuery.expando );
		}

		// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
		if ( nodeName === "script" && dest.text !== src.text ) {
			disableScript( dest ).text = src.text;
			restoreScript( dest );

		// IE6-10 improperly clones children of object elements using classid.
		// IE10 throws NoModificationAllowedError if parent is null, #12132.
		} else if ( nodeName === "object" ) {
			if ( dest.parentNode ) {
				dest.outerHTML = src.outerHTML;
			}

			// This path appears unavoidable for IE9. When cloning an object
			// element in IE9, the outerHTML strategy above is not sufficient.
			// If the src has innerHTML and the destination does not,
			// copy the src.innerHTML into the dest.innerHTML. #10324
			if ( support.html5Clone && ( src.innerHTML && !jQuery.trim( dest.innerHTML ) ) ) {
				dest.innerHTML = src.innerHTML;
			}

		} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {

			// IE6-8 fails to persist the checked state of a cloned checkbox
			// or radio button. Worse, IE6-7 fail to give the cloned element
			// a checked appearance if the defaultChecked value isn't also set

			dest.defaultChecked = dest.checked = src.checked;

			// IE6-7 get confused and end up setting the value of a cloned
			// checkbox/radio button to an empty string instead of "on"
			if ( dest.value !== src.value ) {
				dest.value = src.value;
			}

		// IE6-8 fails to return the selected option to the default selected
		// state when cloning options
		} else if ( nodeName === "option" ) {
			dest.defaultSelected = dest.selected = src.defaultSelected;

		// IE6-8 fails to set the defaultValue to the correct value when
		// cloning other types of input fields
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var first, node, hasScripts,
			scripts, doc, fragment,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!jQuery._data( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval(
									( node.text || node.textContent || node.innerHTML || "" )
										.replace( rcleanScript, "" )
								);
							}
						}
					}
				}

				// Fix #11809: Avoid leaking memory
				fragment = first = null;
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			elems = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = elems[ i ] ) != null; i++ ) {

			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var destElements, node, clone, i, srcElements,
				inPage = jQuery.contains( elem.ownerDocument, elem );

			if ( support.html5Clone || jQuery.isXMLDoc( elem ) ||
				!rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {

				clone = elem.cloneNode( true );

			// IE<=8 does not properly clone detached, unknown element nodes
			} else {
				fragmentDiv.innerHTML = elem.outerHTML;
				fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
			}

			if ( ( !support.noCloneEvent || !support.noCloneChecked ) &&
					( elem.nodeType === 1 || elem.nodeType === 11 ) && !jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				// Fix all IE cloning issues
				for ( i = 0; ( node = srcElements[ i ] ) != null; ++i ) {

					// Ensure that the destination node is not null; Fixes #9587
					if ( destElements[ i ] ) {
						fixCloneNodeIssues( node, destElements[ i ] );
					}
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0; ( node = srcElements[ i ] ) != null; i++ ) {
						cloneCopyEvent( node, destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			destElements = srcElements = node = null;

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems, /* internal */ forceAcceptData ) {
			var elem, type, id, data,
				i = 0,
				internalKey = jQuery.expando,
				cache = jQuery.cache,
				attributes = support.attributes,
				special = jQuery.event.special;

			for ( ; ( elem = elems[ i ] ) != null; i++ ) {
				if ( forceAcceptData || acceptData( elem ) ) {

					id = elem[ internalKey ];
					data = id && cache[ id ];

					if ( data ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Remove cache only if it was not already removed by jQuery.event.remove
						if ( cache[ id ] ) {

							delete cache[ id ];

							// Support: IE<9
							// IE does not allow us to delete expando properties from nodes
							// IE creates expando attributes along with the property
							// IE does not have a removeAttribute function on Document nodes
							if ( !attributes && typeof elem.removeAttribute !== "undefined" ) {
								elem.removeAttribute( internalKey );

							// Webkit & Blink performance suffers when deleting properties
							// from DOM nodes, so set to undefined instead
							// https://code.google.com/p/chromium/issues/detail?id=378607
							} else {
								elem[ internalKey ] = undefined;
							}

							deletedIds.push( id );
						}
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().append(
						( this[ 0 ] && this[ 0 ].ownerDocument || document ).createTextNode( value )
					);
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {

				// Remove element nodes and prevent memory leaks
				if ( elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem, false ) );
				}

				// Remove any remaining nodes
				while ( elem.firstChild ) {
					elem.removeChild( elem.firstChild );
				}

				// If this is a select, ensure that it displays empty (#12336)
				// Support: IE<9
				if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
					elem.options.length = 0;
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined ) {
					return elem.nodeType === 1 ?
						elem.innerHTML.replace( rinlinejQuery, "" ) :
						undefined;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
					( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {

							// Remove element nodes and prevent memory leaks
							elem = this[ i ] || {};
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				i = 0,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal,
			reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		div.style.cssText = "float:left;opacity:.5";

		// Support: IE<9
		// Make sure that element opacity exists (as opposed to filter)
		support.opacity = div.style.opacity === "0.5";

		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		support.cssFloat = !!div.style.cssFloat;

		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container = document.createElement( "div" );
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		div.innerHTML = "";
		container.appendChild( div );

		// Support: Firefox<29, Android 2.3
		// Vendor-prefix box-sizing
		support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" ||
			div.style.WebkitBoxSizing === "";

		jQuery.extend( support, {
			reliableHiddenOffsets: function() {
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return reliableHiddenOffsetsVal;
			},

			boxSizingReliable: function() {

				// We're checking for pixelPositionVal here instead of boxSizingReliableVal
				// since that compresses better and they're computed together anyway.
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},

			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},

			pixelPosition: function() {
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return pixelPositionVal;
			},

			reliableMarginRight: function() {

				// Support: Android 2.3
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return reliableMarginRightVal;
			},

			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			}
		} );

		function computeStyleTests() {
			var contents, divStyle,
				documentElement = document.documentElement;

			// Setup
			documentElement.appendChild( container );

			div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";

			// Support: IE<9
			// Assume reasonable values in the absence of getComputedStyle
			pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
			pixelMarginRightVal = reliableMarginRightVal = true;

			// Check for getComputedStyle so that this code is not run in IE<9.
			if ( window.getComputedStyle ) {
				divStyle = window.getComputedStyle( div );
				pixelPositionVal = ( divStyle || {} ).top !== "1%";
				reliableMarginLeftVal = ( divStyle || {} ).marginLeft === "2px";
				boxSizingReliableVal = ( divStyle || { width: "4px" } ).width === "4px";

				// Support: Android 4.0 - 4.3 only
				// Some styles come back with percentage values, even though they shouldn't
				div.style.marginRight = "50%";
				pixelMarginRightVal = ( divStyle || { marginRight: "4px" } ).marginRight === "4px";

				// Support: Android 2.3 only
				// Div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				contents = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				contents.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				contents.style.marginRight = contents.style.width = "0";
				div.style.width = "1px";

				reliableMarginRightVal =
					!parseFloat( ( window.getComputedStyle( contents ) || {} ).marginRight );

				div.removeChild( contents );
			}

			// Support: IE6-8
			// First check that getClientRects works as expected
			// Check if table cells still have offsetWidth/Height when they are set
			// to display:none and there are still other visible table cells in a
			// table row; if so, offsetWidth/Height are not reliable for use when
			// determining if an element has been hidden directly using
			// display:none (it is still safe to use offsets if a parent element is
			// hidden; don safety goggles and see bug #4512 for more information).
			div.style.display = "none";
			reliableHiddenOffsetsVal = div.getClientRects().length === 0;
			if ( reliableHiddenOffsetsVal ) {
				div.style.display = "";
				div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
				div.childNodes[ 0 ].style.borderCollapse = "separate";
				contents = div.getElementsByTagName( "td" );
				contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
				reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
				if ( reliableHiddenOffsetsVal ) {
					contents[ 0 ].style.display = "";
					contents[ 1 ].style.display = "none";
					reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
				}
			}

			// Teardown
			documentElement.removeChild( container );
		}

	} )();


	var getStyles, curCSS,
		rposition = /^(top|right|bottom|left)$/;

	if ( window.getComputedStyle ) {
		getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

		curCSS = function( elem, name, computed ) {
			var width, minWidth, maxWidth, ret,
				style = elem.style;

			computed = computed || getStyles( elem );

			// getPropertyValue is only needed for .css('filter') in IE9, see #12537
			ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

			// Support: Opera 12.1x only
			// Fall back to style even without computed
			// computed is undefined for elems on document fragments
			if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			if ( computed ) {

				// A tribute to the "awesome hack by Dean Edwards"
				// Chrome < 17 and Safari 5.0 uses "computed value"
				// instead of "used value" for margin-right
				// Safari 5.1.7 (at least) returns percentage for a larger set of values,
				// but width seems to be reliably pixels
				// this is against the CSSOM draft spec:
				// http://dev.w3.org/csswg/cssom/#resolved-values
				if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

					// Remember the original values
					width = style.width;
					minWidth = style.minWidth;
					maxWidth = style.maxWidth;

					// Put in the new values to get a computed value out
					style.minWidth = style.maxWidth = style.width = ret;
					ret = computed.width;

					// Revert the changed values
					style.width = width;
					style.minWidth = minWidth;
					style.maxWidth = maxWidth;
				}
			}

			// Support: IE
			// IE returns zIndex value as an integer.
			return ret === undefined ?
				ret :
				ret + "";
		};
	} else if ( documentElement.currentStyle ) {
		getStyles = function( elem ) {
			return elem.currentStyle;
		};

		curCSS = function( elem, name, computed ) {
			var left, rs, rsLeft, ret,
				style = elem.style;

			computed = computed || getStyles( elem );
			ret = computed ? computed[ name ] : undefined;

			// Avoid setting ret to empty string here
			// so we don't default to auto
			if ( ret == null && style && style[ name ] ) {
				ret = style[ name ];
			}

			// From the awesome hack by Dean Edwards
			// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

			// If we're not dealing with a regular pixel number
			// but a number that has a weird ending, we need to convert it to pixels
			// but not position css attributes, as those are
			// proportional to the parent element instead
			// and we can't measure the parent instead because it
			// might trigger a "stacking dolls" problem
			if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

				// Remember the original values
				left = style.left;
				rs = elem.runtimeStyle;
				rsLeft = rs && rs.left;

				// Put in the new values to get a computed value out
				if ( rsLeft ) {
					rs.left = elem.currentStyle.left;
				}
				style.left = name === "fontSize" ? "1em" : ret;
				ret = style.pixelLeft + "px";

				// Revert the changed values
				style.left = left;
				if ( rsLeft ) {
					rs.left = rsLeft;
				}
			}

			// Support: IE
			// IE returns zIndex value as an integer.
			return ret === undefined ?
				ret :
				ret + "" || "auto";
		};
	}




	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

			ralpha = /alpha\([^)]*\)/i,
		ropacity = /opacity\s*=\s*([^)]*)/i,

		// swappable if display is none or starts with table except
		// "table", "table-cell", or "table-caption"
		// see here for display values:
		// https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;


	// return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// check for vendor prefixed names
		var capName = name.charAt( 0 ).toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = jQuery._data( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] =
						jQuery._data( elem, "olddisplay", defaultDisplay( elem.nodeName ) );
				}
			} else {
				hidden = isHidden( elem );

				if ( display && display !== "none" || !hidden ) {
					jQuery._data(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	function setPositiveNumber( elem, value, subtract ) {
		var matches = rnumsplit.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// at this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// at this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// at this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = support.boxSizing &&
				jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// we need the check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {

			// normalize float css property
			"float": support.cssFloat ? "cssFloat" : "styleFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set. See: #7116
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
				// but it would mean to define eight
				// (for every problematic property) identical functions
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					// Support: IE
					// Swallow errors from 'invalid' CSS values (#5509)
					try {
						style[ name ] = value;
					} catch ( e ) {}
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var num, val, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			//convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Return, converting to number if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// certain elements can have dimension info if we invisibly show them
					// however, it must have a current display style that would benefit from this
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var styles = extra && getStyles( elem );
				return setPositiveNumber( elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						support.boxSizing &&
							jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					) : 0
				);
			}
		};
	} );

	if ( !support.opacity ) {
		jQuery.cssHooks.opacity = {
			get: function( elem, computed ) {

				// IE uses filters for opacity
				return ropacity.test( ( computed && elem.currentStyle ?
					elem.currentStyle.filter :
					elem.style.filter ) || "" ) ?
						( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
						computed ? "1" : "";
			},

			set: function( elem, value ) {
				var style = elem.style,
					currentStyle = elem.currentStyle,
					opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
					filter = currentStyle && currentStyle.filter || style.filter || "";

				// IE has trouble with opacity if it does not have layout
				// Force it by setting the zoom level
				style.zoom = 1;

				// if setting opacity to 1, and no other filters exist -
				// attempt to remove filter attribute #6652
				// if value === "", then remove inline opacity #12685
				if ( ( value >= 1 || value === "" ) &&
						jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
						style.removeAttribute ) {

					// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
					// if "filter:" is present at all, clearType is disabled, we want to avoid this
					// style.removeAttribute is IE Only, but so apparently is this code path...
					style.removeAttribute( "filter" );

					// if there is no filter style applied in a css rule
					// or unset inline opacity, we are done
					if ( value === "" || currentStyle && !currentStyle.filter ) {
						return;
					}
				}

				// otherwise, set new filter values
				style.filter = ralpha.test( filter ) ?
					filter.replace( ralpha, opacity ) :
					filter + " " + opacity;
			}
		};
	}

	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return (
					parseFloat( curCSS( elem, "marginLeft" ) ) ||

					// Support: IE<=11+
					// Running getBoundingClientRect on a disconnected node in IE throws an error
					// Support: IE8 only
					// getClientRects() errors on disconnected elems
					( jQuery.contains( elem.ownerDocument, elem ) ?
						elem.getBoundingClientRect().left -
							swap( elem, { marginLeft: 0 }, function() {
								return elem.getBoundingClientRect().left;
							} ) :
						0
					)
				) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails
				// so, simple values such as "10px" are parsed to Float.
				// complex values such as "rotate(1rad)" are returned as is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// use step hook for back compat - use cssHook if its there - use .style if its
				// available and use plain properties where available
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9
	// Panic based approach to setting things on disconnected nodes

	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			attrs = { height: type },
			i = 0;

		// if we include width, step value is 1 to do all cssExpand values,
		// if we don't include width, step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// we're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = jQuery._data( elem, "fxshow" );

		// handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// doing this makes sure that the complete handler will be called
				// before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE does not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

				// inline-level elements accept inline-block;
				// block-level elements need to be inline with layout
				if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
					style.display = "inline-block";
				} else {
					style.zoom = 1;
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			if ( !support.shrinkWrapBlocks() ) {
				anim.always( function() {
					style.overflow = opts.overflow[ 0 ];
					style.overflowX = opts.overflow[ 1 ];
					style.overflowY = opts.overflow[ 2 ];
				} );
			}
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = jQuery._data( elem, "fxshow", {} );
			}

			// store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;
				jQuery._removeData( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// not quite $.extend, this wont overwrite keys already present.
				// also - reusing 'index' from above because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// if we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// resolve when we played the last frame
					// otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || jQuery._data( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = jQuery._data( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// start the next in the queue if the last step wasn't forced
				// timers currently will call their complete callbacks, which will dequeue
				// but only if they were gotoEnd
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = jQuery._data( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// enable finishing flag on private data
				data.finish = true;

				// empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			timers = jQuery.timers,
			i = 0;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;

	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );
		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var a,
			input = document.createElement( "input" ),
			div = document.createElement( "div" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		// Setup
		div = document.createElement( "div" );
		div.setAttribute( "className", "t" );
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
		a = div.getElementsByTagName( "a" )[ 0 ];

		// Support: Windows Web Apps (WWA)
		// `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "checkbox" );
		div.appendChild( input );

		a = div.getElementsByTagName( "a" )[ 0 ];

		// First batch of tests.
		a.style.cssText = "top:1px";

		// Test setAttribute on camelCase class.
		// If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		support.getSetAttribute = div.className !== "t";

		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		support.style = /top/.test( a.getAttribute( "style" ) );

		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		support.hrefNormalized = a.getAttribute( "href" ) === "/a";

		// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
		support.checkOn = !!input.value;

		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		support.optSelected = opt.selected;

		// Tests for enctype support on a form (#6743)
		support.enctype = !!document.createElement( "form" ).enctype;

		// Make sure that the options inside disabled selects aren't marked as disabled
		// (WebKit marks them as disabled)
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE8 only
		// Check if we can trust getAttribute("value")
		input = document.createElement( "input" );
		input.setAttribute( "value", "" );
		support.input = input.getAttribute( "value" ) === "";

		// Check if an input maintains its value after becoming a radio
		input.value = "t";
		input.setAttribute( "type", "radio" );
		support.radioValue = input.value === "t";
	} )();


	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if (
						hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// handle most common string cases
						ret.replace( rreturn, "" ) :

						// handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
				} else if ( typeof val === "number" ) {
					val += "";
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// oldIE doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled :
									option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1 ) {

							// Support: IE6
							// When new option element is added to select box we need to
							// force reflow of newly added node in order to workaround delay
							// of initialization properties
							try {
								option.selected = optionSet = true;

							} catch ( _ ) {

								// Will be executed only in IE6
								option.scrollHeight;
							}

						} else {
							option.selected = false;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}

					return options;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	var nodeHook, boolHook,
		attrHandle = jQuery.expr.attrHandle,
		ruseDefault = /^(?:checked|selected)$/i,
		getSetAttribute = support.getSetAttribute,
		getSetInput = support.input;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {

						// Setting the type on a radio button after the value resets the value in IE8-9
						// Reset value to default in case type is set after value during creation
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
							elem[ propName ] = false;

						// Support: IE<9
						// Also clear defaultChecked/defaultSelected (if appropriate)
						} else {
							elem[ jQuery.camelCase( "default-" + name ) ] =
								elem[ propName ] = false;
						}

					// See #9699 for explanation of this approach (setting first, then removal)
					} else {
						jQuery.attr( elem, name, "" );
					}

					elem.removeAttribute( getSetAttribute ? name : propName );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {

				// IE<8 needs the *property* name
				elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

			} else {

				// Support: IE<9
				// Use defaultChecked and defaultSelected for oldIE
				elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
			attrHandle[ name ] = function( elem, name, isXML ) {
				var ret, handle;
				if ( !isXML ) {

					// Avoid an infinite loop by temporarily removing this function from the getter
					handle = attrHandle[ name ];
					attrHandle[ name ] = ret;
					ret = getter( elem, name, isXML ) != null ?
						name.toLowerCase() :
						null;
					attrHandle[ name ] = handle;
				}
				return ret;
			};
		} else {
			attrHandle[ name ] = function( elem, name, isXML ) {
				if ( !isXML ) {
					return elem[ jQuery.camelCase( "default-" + name ) ] ?
						name.toLowerCase() :
						null;
				}
			};
		}
	} );

	// fix oldIE attroperties
	if ( !getSetInput || !getSetAttribute ) {
		jQuery.attrHooks.value = {
			set: function( elem, value, name ) {
				if ( jQuery.nodeName( elem, "input" ) ) {

					// Does not return so that setAttribute is also used
					elem.defaultValue = value;
				} else {

					// Use nodeHook if defined (#1954); otherwise setAttribute is fine
					return nodeHook && nodeHook.set( elem, value, name );
				}
			}
		};
	}

	// IE6/7 do not support getting/setting some attributes with get/setAttribute
	if ( !getSetAttribute ) {

		// Use this for any attribute in IE6/7
		// This fixes almost every IE6/7 issue
		nodeHook = {
			set: function( elem, value, name ) {

				// Set the existing or create a new attribute node
				var ret = elem.getAttributeNode( name );
				if ( !ret ) {
					elem.setAttributeNode(
						( ret = elem.ownerDocument.createAttribute( name ) )
					);
				}

				ret.value = value += "";

				// Break association with cloned elements by also using setAttribute (#9646)
				if ( name === "value" || value === elem.getAttribute( name ) ) {
					return value;
				}
			}
		};

		// Some attributes are constructed with empty-string values when not defined
		attrHandle.id = attrHandle.name = attrHandle.coords =
			function( elem, name, isXML ) {
				var ret;
				if ( !isXML ) {
					return ( ret = elem.getAttributeNode( name ) ) && ret.value !== "" ?
						ret.value :
						null;
				}
			};

		// Fixing value retrieval on a button requires this module
		jQuery.valHooks.button = {
			get: function( elem, name ) {
				var ret = elem.getAttributeNode( name );
				if ( ret && ret.specified ) {
					return ret.value;
				}
			},
			set: nodeHook.set
		};

		// Set contenteditable to false on removals(#10429)
		// Setting to empty string throws an error as an invalid value
		jQuery.attrHooks.contenteditable = {
			set: function( elem, value, name ) {
				nodeHook.set( elem, value === "" ? false : value, name );
			}
		};

		// Set width and height to auto instead of 0 on empty string( Bug #8150 )
		// This is for removals
		jQuery.each( [ "width", "height" ], function( i, name ) {
			jQuery.attrHooks[ name ] = {
				set: function( elem, value ) {
					if ( value === "" ) {
						elem.setAttribute( name, "auto" );
						return value;
					}
				}
			};
		} );
	}

	if ( !support.style ) {
		jQuery.attrHooks.style = {
			get: function( elem ) {

				// Return undefined in the case of empty string
				// Note: IE uppercases css property names, but if we were to .toLowerCase()
				// .cssText, that would destroy case sensitivity in URL's, like in "background"
				return elem.style.cssText || undefined;
			},
			set: function( elem, value ) {
				return ( elem.style.cssText = value + "" );
			}
		};
	}




	var rfocusable = /^(?:input|select|textarea|button|object)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			name = jQuery.propFix[ name ] || name;
			return this.each( function() {

				// try/catch handles cases where IE balks (such as removing a property on window)
				try {
					this[ name ] = undefined;
					delete this[ name ];
				} catch ( e ) {}
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Some attributes require a special call on IE
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !support.hrefNormalized ) {

		// href/src property should get the full normalized URL (#10299/#12915)
		jQuery.each( [ "href", "src" ], function( i, name ) {
			jQuery.propHooks[ name ] = {
				get: function( elem ) {
					return elem.getAttribute( name, 4 );
				}
			};
		} );
	}

	// Support: Safari, IE9+
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;

				if ( parent ) {
					parent.selectedIndex;

					// Make sure that it also works with optgroups, see #5701
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );

	// IE6/7 call enctype encoding
	if ( !support.enctype ) {
		jQuery.propFix.enctype = "encoding";
	}




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return jQuery.attr( elem, "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							jQuery.attr( elem, "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							jQuery.attr( elem, "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// store className if set
						jQuery._data( this, "__className__", className );
					}

					// If the element has a class name or if we're passed "false",
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					jQuery.attr( this, "class",
						className || value === false ?
						"" :
						jQuery._data( this, "__className__" ) || ""
					);
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	// Return jQuery for attributes-only inclusion


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );


	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

	jQuery.parseJSON = function( data ) {

		// Attempt to parse using the native JSON parser first
		if ( window.JSON && window.JSON.parse ) {

			// Support: Android 2.3
			// Workaround failure to string-cast null input
			return window.JSON.parse( data + "" );
		}

		var requireNonComma,
			depth = null,
			str = jQuery.trim( data + "" );

		// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
		// after removing valid tokens
		return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

			// Force termination if we see a misplaced comma
			if ( requireNonComma && comma ) {
				depth = 0;
			}

			// Perform no more replacements after returning to outermost depth
			if ( depth === 0 ) {
				return token;
			}

			// Commas must not follow "[", "{", or ","
			requireNonComma = open || comma;

			// Determine new depth
			// array/object open ("[" or "{"): depth += true - false (increment)
			// array/object close ("]" or "}"): depth += false - true (decrement)
			// other cases ("," or primitive): depth += true - true (numeric cast)
			depth += !close - !open;

			// Remove this token
			return "";
		} ) ) ?
			( Function( "return " + str ) )() :
			jQuery.error( "Invalid JSON: " + data );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		try {
			if ( window.DOMParser ) { // Standard
				tmp = new window.DOMParser();
				xml = tmp.parseFromString( data, "text/xml" );
			} else { // IE
				xml = new window.ActiveXObject( "Microsoft.XMLDOM" );
				xml.async = "false";
				xml.loadXML( data );
			}
		} catch ( e ) {
			xml = undefined;
		}
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,

		// IE leaves an \r character at EOL
		rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Document location
		ajaxLocation = location.href,

		// Segment location into parts
		ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType.charAt( 0 ) === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var deep, key,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
		var firstDataType, ct, finalDataType, type,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s[ "throws" ] ) { // jscs:ignore requireDotNotation
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var

				// Cross-domain detection vars
				parts,

				// Loop variable
				i,

				// URL without anti-cache param
				cacheURL,

				// Response headers as string
				responseHeadersString,

				// timeout handle
				timeoutTimer,

				// To know if global events are to be dispatched
				fireGlobals,

				transport,

				// Response headers
				responseHeaders,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || ajaxLocation ) + "" )
				.replace( rhash, "" )
				.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if ( s.crossDomain == null ) {
				parts = rurl.exec( s.url.toLowerCase() );
				s.crossDomain = !!( parts &&
					( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
						( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
							( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
				);
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// We extract error from statusText
					// then normalize statusText and status for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				var wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
						elem = elem.firstChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	function getDisplay( elem ) {
		return elem.style && elem.style.display || jQuery.css( elem, "display" );
	}

	function filterHidden( elem ) {

		// Disconnected elements are considered hidden
		if ( !jQuery.contains( elem.ownerDocument || document, elem ) ) {
			return true;
		}
		while ( elem && elem.nodeType === 1 ) {
			if ( getDisplay( elem ) === "none" || elem.type === "hidden" ) {
				return true;
			}
			elem = elem.parentNode;
		}
		return false;
	}

	jQuery.expr.filters.hidden = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return support.reliableHiddenOffsets() ?
			( elem.offsetWidth <= 0 && elem.offsetHeight <= 0 &&
				!elem.getClientRects().length ) :
				filterHidden( elem );
	};

	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is(":disabled") so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	// Create the request object
	// (This is still attached to ajaxSettings for backward compatibility)
	jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?

		// Support: IE6-IE8
		function() {

			// XHR cannot access local files, always use ActiveX for that case
			if ( this.isLocal ) {
				return createActiveXHR();
			}

			// Support: IE 9-11
			// IE seems to error on cross-domain PATCH requests when ActiveX XHR
			// is used. In IE 9+ always use the native XHR.
			// Note: this condition won't catch Edge as it doesn't define
			// document.documentMode but it also doesn't support ActiveX so it won't
			// reach this code.
			if ( document.documentMode > 8 ) {
				return createStandardXHR();
			}

			// Support: IE<9
			// oldIE XHR does not support non-RFC2616 methods (#13240)
			// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
			// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
			// Although this check for six methods instead of eight
			// since IE also does not support "trace" and "connect"
			return /^(get|post|head|put|delete|options)$/i.test( this.type ) &&
				createStandardXHR() || createActiveXHR();
		} :

		// For all other browsers, use the standard XMLHttpRequest object
		createStandardXHR;

	var xhrId = 0,
		xhrCallbacks = {},
		xhrSupported = jQuery.ajaxSettings.xhr();

	// Support: IE<10
	// Open requests must be manually aborted on unload (#5280)
	// See https://support.microsoft.com/kb/2856746 for more info
	if ( window.attachEvent ) {
		window.attachEvent( "onunload", function() {
			for ( var key in xhrCallbacks ) {
				xhrCallbacks[ key ]( undefined, true );
			}
		} );
	}

	// Determine support properties
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	xhrSupported = support.ajax = !!xhrSupported;

	// Create transport if the browser can provide an xhr
	if ( xhrSupported ) {

		jQuery.ajaxTransport( function( options ) {

			// Cross domain only allowed if supported through XMLHttpRequest
			if ( !options.crossDomain || support.cors ) {

				var callback;

				return {
					send: function( headers, complete ) {
						var i,
							xhr = options.xhr(),
							id = ++xhrId;

						// Open the socket
						xhr.open(
							options.type,
							options.url,
							options.async,
							options.username,
							options.password
						);

						// Apply custom fields if provided
						if ( options.xhrFields ) {
							for ( i in options.xhrFields ) {
								xhr[ i ] = options.xhrFields[ i ];
							}
						}

						// Override mime type if needed
						if ( options.mimeType && xhr.overrideMimeType ) {
							xhr.overrideMimeType( options.mimeType );
						}

						// X-Requested-With header
						// For cross-domain requests, seeing as conditions for a preflight are
						// akin to a jigsaw puzzle, we simply never set it to be sure.
						// (it can always be set on a per-request basis or even using ajaxSetup)
						// For same-domain requests, won't change header if already provided.
						if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
							headers[ "X-Requested-With" ] = "XMLHttpRequest";
						}

						// Set headers
						for ( i in headers ) {

							// Support: IE<9
							// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
							// request header to a null-value.
							//
							// To keep consistent with other XHR implementations, cast the value
							// to string and ignore `undefined`.
							if ( headers[ i ] !== undefined ) {
								xhr.setRequestHeader( i, headers[ i ] + "" );
							}
						}

						// Do send the request
						// This may raise an exception which is actually
						// handled in jQuery.ajax (so no try/catch here)
						xhr.send( ( options.hasContent && options.data ) || null );

						// Listener
						callback = function( _, isAbort ) {
							var status, statusText, responses;

							// Was never called and is aborted or complete
							if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

								// Clean up
								delete xhrCallbacks[ id ];
								callback = undefined;
								xhr.onreadystatechange = jQuery.noop;

								// Abort manually if needed
								if ( isAbort ) {
									if ( xhr.readyState !== 4 ) {
										xhr.abort();
									}
								} else {
									responses = {};
									status = xhr.status;

									// Support: IE<10
									// Accessing binary-data responseText throws an exception
									// (#11426)
									if ( typeof xhr.responseText === "string" ) {
										responses.text = xhr.responseText;
									}

									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch ( e ) {

										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}

									// Filter status for non standard behaviors

									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if ( !status && options.isLocal && !options.crossDomain ) {
										status = responses.text ? 200 : 404;

									// IE - #1450: sometimes returns 1223 when it should be 204
									} else if ( status === 1223 ) {
										status = 204;
									}
								}
							}

							// Call complete if needed
							if ( responses ) {
								complete( status, statusText, responses, xhr.getAllResponseHeaders() );
							}
						};

						// Do send the request
						// `xhr.send` may raise an exception, but it will be
						// handled in jQuery.ajax (so no try/catch here)
						if ( !options.async ) {

							// If we're in sync mode we fire the callback
							callback();
						} else if ( xhr.readyState === 4 ) {

							// (IE6 & IE7) if it's in cache and has been
							// retrieved directly we need to fire the callback
							window.setTimeout( callback );
						} else {

							// Register the callback, but delay it in case `xhr.send` throws
							// Add to the list of active xhr callbacks
							xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
						}
					},

					abort: function() {
						if ( callback ) {
							callback( undefined, true );
						}
					}
				};
			}
		} );
	}

	// Functions to create xhrs
	function createStandardXHR() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	}

	function createActiveXHR() {
		try {
			return new window.ActiveXObject( "Microsoft.XMLHTTP" );
		} catch ( e ) {}
	}




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and global
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
			s.global = false;
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {

			var script,
				head = document.head || jQuery( "head" )[ 0 ] || document.documentElement;

			return {

				send: function( _, callback ) {

					script = document.createElement( "script" );

					script.async = true;

					if ( s.scriptCharset ) {
						script.charset = s.scriptCharset;
					}

					script.src = s.url;

					// Attach handlers for all browsers
					script.onload = script.onreadystatechange = function( _, isAbort ) {

						if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

							// Handle memory leak in IE
							script.onload = script.onreadystatechange = null;

							// Remove the script
							if ( script.parentNode ) {
								script.parentNode.removeChild( script );
							}

							// Dereference the script
							script = null;

							// Callback if not abort
							if ( !isAbort ) {
								callback( 200, "success" );
							}
						}
					};

					// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					head.insertBefore( script, head.firstChild );
				},

				abort: function() {
					if ( script ) {
						script.onload( undefined, true );
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// data: string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off, url.length ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};





	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ?
			elem :
			elem.nodeType === 9 ?
				elem.defaultView || elem.parentWindow :
				false;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				jQuery.inArray( "auto", [ curCSSTop, curCSSLeft ] ) > -1;

			// need to be able to calculate position if either top or left
			// is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );
			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				box = { top: 0, left: 0 },
				elem = this[ 0 ],
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			// If we don't have gBCR, just use 0,0 rather than error
			// BlackBerry 5, iOS 3 (original iPhone)
			if ( typeof elem.getBoundingClientRect !== "undefined" ) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow( doc );
			return {
				top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
				left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				parentOffset = { top: 0, left: 0 },
				elem = this[ 0 ];

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// we assume that getBoundingClientRect is available when computed position is fixed
				offset = elem.getBoundingClientRect();
			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			// note: when an element has margin: auto the offsetLeft and marginLeft
			// are the same in Safari causing offset.left to incorrectly be 0
			return {
				top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) &&
					jQuery.css( offsetParent, "position" ) === "static" ) ) {
					offsetParent = offsetParent.offsetParent;
				}
				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = /Y/.test( prop );

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? ( prop in win ) ? win[ prop ] :
						win.document.documentElement[ method ] :
						elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : jQuery( win ).scrollLeft(),
						top ? val : jQuery( win ).scrollTop()
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length, null );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// getComputedStyle returns percent when specified for top/left/bottom/right
	// rather than make the css module depend on the offset module, we just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// if curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

			// margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						// unfortunately, this causes bug #3838 in IE6/8 only,
						// but there is currently no good, small way to fix it.
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	// The number of elements contained in the matched element set
	jQuery.fn.size = function() {
		return this.length;
	};

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in
	// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	

/***/ },
/* 8 */,
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {jQuery(document).ready(function() {

	    if (window.location.host.indexOf('studio') !== -1) {
	        setTimeout(function() {
	            jQuery('#container').parent().prepend('<div class="hx-warning hx-alert">Warning: Due to issues in studio, the tool below may not be displayed correctly. Please view in "Preview" or "Live" to make sure things are okay.</div>')
	        }, 2000);
	    }

	    window.logThisForMe = function(action, thing) {
	        var source = 'harvardx';
	        var object = jQuery('.course-name').html().replace(/ /g, '').toLowerCase();

	        if (window.location.host.indexOf('edx.org') === -1) {
	            source = jQuery('.hx-lite-source-val').html().replace(/ /g, '').toLowerCase();
	            object = jQuery('.hx-lite-object-val').html().replace(/ /g, '').toLowerCase();

	            // trigger event that can be listened to by other Logging tools
	            jQuery(document).trigger('logThisForMe', [source + '.' + object + '.' + action, JSON.stringify(thing)]);

	        } else {
	            Logger.log(source + '.' + object + '.' + action, JSON.stringify(thing));
	            console.log(source + '.' + object + '.' + action, JSON.stringify(thing));
	        }
	        
	    }

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
	        if (typeof(window.vid) !== 'undefined') {
	            setTimeout(function() {
	                jQuery('#container').removeClass('transcript');
	                if (jQuery('.xblock.vjs-fullscreen #vid1').length > 0 && jQuery('#transcript').is(':visible')) {
	                    jQuery('#container').addClass('transcript');
	                    var evt;
	                    try {
	                        evt = new Event('resize');
	                    } catch(e) {
	                        evt = window.document.createEvent('UIEvents');
	                        evt.initUIEvent('resize', true, false, window, 0);
	                    }
	                    window.dispatchEvent(evt);
	                }
	                window.vid.annotations.refreshDesignPanel();
	            }, 550);
	        }

	        if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement !== null)
	        {
	            /* Run code on exit */
	            jQuery('.annotationSection.side').css('height', '');
	            var exiter = function() {
	                if (jQuery('.xblock').hasClass('vjs-fullscreen')) {
	                    jQuery('.xblock').removeClass('vjs-fullscreen');
	                    setTimeout(exiter, 100);
	                } 
	            }
	            exiter();
	        }
	    };

	    if (typeof(window.annotation_tool) !== "undefined") {

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
	    } else {
	        // Mirador doesn't use annotator events so this is triggered by the buttons pushed.
	    }

	    window.updateDashboard = function(annotations) {
	      jQuery('.annotationsHolder').html("");
	      jQuery.each(annotations, function(index, value){
	            var html = '';
	            if (value.media === "video") {
	                html = "<div class='annotationItem item-"+value.id+"' role='listitem' aria-label='Annotation #"+index+"'><div class='playMediaButton'><span class='fa fa-youtube-play'></span> Play Clip</div><div class='body field' aria-label='Comment within group'>"+value.text+"</div><div class='tagList field side'>";
	            } else if (value.media === "text") {
	                html = "<div class='annotationItem item-"+value.id+"' role='listitem' aria-label='Annotation #"+index+"'><div class='quote'>"+value.quote+"</div><div class='body field' aria-label='Comment within group'>"+value.text+"</div><div class='tagList field side'>";
	            } else if (value.media === "image") {
	                html = "<div class='annotationItem item-"+value.id+"' role='listitem' aria-label='Annotation #"+index+"'><div class='zoomToImageBounds'><img src='"+value.thumb+"'></div><div class='body field' aria-label='Comment within group'>"+value.text+"</div><div class='tagList field side'>";

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
	            } else if (value.media == 'image') {
	                jQuery('.annotationItem.item-'+value.id+' .zoomToImageBounds').click(function(){
	                    var ranges = value.rangePosition;
	                    jQuery.publish('fitBounds.'+Mirador.viewer.workspace.slots[0].window.id, {'x':ranges.x, 'y': ranges.y, 'width':ranges.width, 'height':ranges.height});
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
	    
	    // logs whenever the user clicks on the sidebar to open and close it
	    jQuery('body').on('click', '.sidebar', function(){
	        setTimeout(function() {
	            var state = jQuery('.annotationSection').is(':visible') ? 'open' : 'close';
	            window.logThisForMe('hxat_toggled_sidebar', {'state': state});
	        }, 200);
	    });
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {// pull all css files necessary for this to work
	__webpack_require__(31);
	__webpack_require__(35);
	__webpack_require__(37);
	__webpack_require__(39);
	__webpack_require__(41);
	__webpack_require__(7);

	// wait until page has loaded
	jQuery(document).ready(function() {

	    // create a holder for the text within the given element
	    var element = document.createElement('div');
	    element.id = 'viewer';
	    jQuery('#container')[0].appendChild(element);
	    
	    // set up the options for annotator to make things read-only
	    var annotatorOptions = {
	        showViewPermissionsCheckbox: false,
	        readOnly: true,
	    };

	    // set up the annotator area, though it is currently empty
	    window.annotation_tool = jQuery('#viewer').annotator(annotatorOptions).data('annotator');
	    
	    // set up the highlight tags to allow for different colored tags
	    window.annotation_tool.addPlugin('HighlightTags', {
	        'tag': jQuery('#tags').html()
	    });

	    // set up Summernote to allow for rich text annotations (i.e. accept html)
	    window.annotation_tool.addPlugin('SummernoteRichText', {});

	    // though currently unused, this will allow future versions to check if the text input should be broken up into multiple "pages"
	    window.checkMultiplePages = function() {
	        if (jQuery('#viewer .hx-page').length > 1) {
	            window.current_page = 0;
	            window.hx_annotation_pages = [];
	            jQuery.each(jQuery('#viewer .hx-page'), function(index, value) {
	                window.hx_annotation_pages.push(jQuery(value).html());
	                jQuery(value).children().unwrap();
	            });

	            window.changePage(window.current_page);
	        }
	    };

	    // set a global space for annotations
	    window.annotations_saved = [];

	    // though currently unsed, this should switch out pages
	    window.changePage = function(page) {
	        jQuery.each(jQuery('.annotator-wrapper').children(), function(index, element) {
	            if (!jQuery(element).hasClass('annotator-outer') || !jQuery(element).hasClass('annotator-adder')) {
	                jQuery(element).remove();
	            }
	        });

	        jQuery('.annotator-wrapper').prepend(window.hx_annotation_pages[page]);
	        window.annotations_saved.forEach(function(ann){
	            var child, h, _i, _len, _ref;
	            if (ann.highlights !== undefined) {
	                _ref = ann.highlights;
	                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	                    h = _ref[_i];
	                    if (!(h.parentNode !== undefined)) {
	                        continue;
	                    }
	                    child = h.childNodes[0];
	                    jQuery(h).replaceWith(h.childNodes);
	                }
	            }
	            window.annotation_tool.plugins.LocalStore.unregisterAnnotation(ann);
	        });
	        jQuery.each(window.annotations_saved, function (index, annotation) {
	            window.annotation_tool.setupAnnotation(annotation);
	            window.annotation_tool.plugins.LocalStore.registerAnnotation(annotation);
	        });

	        jQuery('.hxat-text-lite-nav').remove();
	        if (page !== 0) {
	            jQuery('.annotator-wrapper').after('<a class="hxat-text-lite-nav" href="#" onclick="window.changePage('+(page-1).toString()+');">Previous Page</a>');
	        }
	        if (page !== window.hx_annotation_pages.length - 1) {
	            jQuery('.annotator-wrapper').after('<a class="hxat-text-lite-nav" href="#" onclick="window.changePage('+(page+1).toString()+');">Continue Reading</a>');
	        }

	        window.current_page = page;
	    };

	    // get the url to collect the text to be annotated
	    var url = jQuery('#text_url').html().trim();

	    // make a query to retrieve text
	    jQuery.ajax({
	        url: url,
	        method: 'GET',
	        async: true,
	        contentType: 'text/plain',
	        dataType: 'text/plain',
	        complete: function(data) {

	            // add the data to the container depending if annotator has
	            // already been instantiated
	            if (data.status === 200) {
	                if (jQuery('.annotator-wrapper') !== undefined) {
	                    jQuery('.annotator-wrapper').prepend(data.responseText);
	                } else {
	                    jQuery('#viewer').prepend(data.responseText);
	                }
	                window.logThisForMe('hxat_data_retrieved', {'object': url});
	            } else {
	                var element = document.createElement('div');
	                element.innerHTML = "Sorry, no text was found";
	            }

	            // show everything once the tool has loaded
	            jQuery('#container').show();
	            jQuery('.sidebar').show();
	            jQuery('#hxat_lite_loading').hide();

	            // window.checkMultiplePages();
	        }
	    }); 

	    // get the annotations from a json file
	    var annotations_url = jQuery('#annotations-url').html();
	    var options = {
	        url: annotations_url,
	        success: function(data) {

	            // store them in the "LocalStore" plugin for annotator
	            window.annotation_tool.addPlugin('LocalStore', {
	                annotations: data.rows
	            });
	            window.annotations_saved = data.rows;

	            //trigger the event that tells the rest of the tool that the annotations have loaded
	            jQuery(document).trigger('annotation_core_init');

	            window.logThisForMe('hxat_data_retrieved', {'object': annotations_url});
	        },
	        async: true
	    };
	    jQuery.ajax(options);

	    // logs whenever the user hovers over a highlight to view the annotation
	    jQuery('body').on('mouseover', '.annotator-hl', function(){
	        window.logThisForMe('hxat_annotation_viewed', {'annotation_id': jQuery(this).data('annotation-id')});
	    });

	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 31 */
/***/ function(module, exports) {

	

/***/ },
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ function(module, exports) {

	

/***/ },
/* 36 */,
/* 37 */
/***/ function(module, exports) {

	

/***/ },
/* 38 */,
/* 39 */
/***/ function(module, exports) {

	

/***/ },
/* 40 */,
/* 41 */
/***/ function(module, exports) {

	

/***/ },
/* 42 */,
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {/**
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
	  factory(__webpack_provided_window_dot_jQuery);
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

	  var isSupportAmd = "function" === 'function' && __webpack_require__(44);

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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 44 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery, Annotator) {/*
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(46)))

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) { (function(Annotator) {
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

	})(__webpack_require__(46));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {(function(Annotator) {
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
	})( true ? __webpack_require__(46) : window.Annotator);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 49 */
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery, Annotator) {/***
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(46)))

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {(function(Annotator) {
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

	})( true ? __webpack_require__(46) : window.Annotator);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }
/******/ ]);