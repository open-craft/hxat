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

})(require('annotator'));