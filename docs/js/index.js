var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler ○ gmail • com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.3
 */
(function (f) {
  "use strict";
  "function" === typeof define && define.amd ? define(["jquery"], f) : "undefined" !== typeof module && module.exports ? module.exports = f(require("jquery")) : f(jQuery);
})(function ($) {
  "use strict";
  function n(a) {
    return !a.nodeName || -1 !== $.inArray(a.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
  }function h(a) {
    return $.isFunction(a) || $.isPlainObject(a) ? a : { top: a, left: a };
  }var p = $.scrollTo = function (a, d, b) {
    return $(window).scrollTo(a, d, b);
  };p.defaults = { axis: "xy", duration: 0, limit: !0 };$.fn.scrollTo = function (a, d, b) {
    "object" === (typeof d === "undefined" ? "undefined" : _typeof(d)) && (b = d, d = 0);"function" === typeof b && (b = { onAfter: b });"max" === a && (a = 9E9);b = $.extend({}, p.defaults, b);d = d || b.duration;var u = b.queue && 1 < b.axis.length;u && (d /= 2);b.offset = h(b.offset);b.over = h(b.over);return this.each(function () {
      function k(a) {
        var k = $.extend({}, b, { queue: !0, duration: d, complete: a && function () {
            a.call(q, e, b);
          } });r.animate(f, k);
      }if (null !== a) {
        var l = n(this),
            q = l ? this.contentWindow || window : this,
            r = $(q),
            e = a,
            f = {},
            t;switch (typeof e === "undefined" ? "undefined" : _typeof(e)) {case "number":case "string":
            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)) {
              e = h(e);break;
            }e = l ? $(e) : $(e, q);case "object":
            if (e.length === 0) return;if (e.is || e.style) t = (e = $(e)).offset();}var v = $.isFunction(b.offset) && b.offset(q, e) || b.offset;$.each(b.axis.split(""), function (a, c) {
          var d = "x" === c ? "Left" : "Top",
              m = d.toLowerCase(),
              g = "scroll" + d,
              h = r[g](),
              n = p.max(q, c);t ? (f[g] = t[m] + (l ? 0 : h - r.offset()[m]), b.margin && (f[g] -= parseInt(e.css("margin" + d), 10) || 0, f[g] -= parseInt(e.css("border" + d + "Width"), 10) || 0), f[g] += v[m] || 0, b.over[m] && (f[g] += e["x" === c ? "width" : "height"]() * b.over[m])) : (d = e[m], f[g] = d.slice && "%" === d.slice(-1) ? parseFloat(d) / 100 * n : d);b.limit && /^\d+$/.test(f[g]) && (f[g] = 0 >= f[g] ? 0 : Math.min(f[g], n));!a && 1 < b.axis.length && (h === f[g] ? f = {} : u && (k(b.onAfterFirst), f = {}));
        });k(b.onAfter);
      }
    });
  };p.max = function (a, d) {
    var b = "x" === d ? "Width" : "Height",
        h = "scroll" + b;if (!n(a)) return a[h] - $(a)[b.toLowerCase()]();var b = "client" + b,
        k = a.ownerDocument || a.document,
        l = k.documentElement,
        k = k.body;return Math.max(l[h], k[h]) - Math.min(l[b], k[b]);
  };$.Tween.propHooks.scrollLeft = $.Tween.propHooks.scrollTop = { get: function get(a) {
      return $(a.elem)[a.prop]();
    }, set: function set(a) {
      var d = this.get(a);if (a.options.interrupt && a._last && a._last !== d) return $(a.elem).stop();var b = Math.round(a.now);d !== b && ($(a.elem)[a.prop](b), a._last = this.get(a));
    } };return p;
});

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*global jQuery */
/*!
 * Kerning.js
 * Version: 0.2.1
 * Copyright 2011 Joshua Gross
 * MIT license
 *
 * Usage:
 *  Include this file anywhere in your HTML
 *    <script src="kerning.js"></script>
 *
 *  Then, add any of the attributes following to your CSS, under any
 *  selectors you want modified:
 *    -letter-kern, -letter-size, -letter-weight, -letter-color, -letter-transform
 *    -word-kern, -word-size, -word-weight, -word-color, -word-transform
 *
 *  To use pairings (e.g., modify 'a' if 'ab' is paired):
 *    -letter-pairs('xy': [value], …)
 *    -word-pairs('cat mouse': [value], …)
 *
 *  To use multiple transforms, you need to use transform "groups":
 *    -transform-group([transform] [transform] …)
 *
 *  Sometimes you need to want to use a different size or weight, depending on what
 *  font has loaded:
 *    font-size: [default size];
 *    font-size: if-font('font name': [size], 'font name': [size], …);
 *  (The first line is a fallback should Kerning.js not load. This is recommended.)
 *
 *  That's it! Attributes will be applied automagically.
 *
 * Examples:
 *  Alter first 3 letters:
 *    -letter-size: 100px 20px 30px;
 *
 *  Modify letter pairs:
 *    -letter-kern: -letter-pairs('ab': 1px,
 *                                'bc': 300px,
 *                                's ': 100px);
 *
 *  Transform the first two letters:
 *    -letter-transform: -transform-group(rotate3d(0,0,1,10deg) translate3d(0,10px,0))
 *                       -transform-group(translate3d(0,-10px,0) rotate3d(0,0,1,-10deg));
 *
 *  Modify word pairs:
 *    -word-size: -word-pairs('this is': 10em);
 *
 *  Modify the first 3 words:
 *    -word-size: 10em 0.1em 0.2em;
 *
 *  Using repeat rules:
 *    -letter-color: -letter-repeat(even: #f0f0f0, odd: #cccccc);
 *    -letter-color: -letter-repeat(2n+1: #f0f0f0);
 *
 *  Using conditionals:
 *    -letter-kern: if-font('Helvetica Neue': 0 1px 1px, 'Helvetica': 0 -1px 0);
 *
 *  Using conditionals on existing properties for weight or size:
 *    font-size: 9.5em;
 *    font-size: if-font('Helvetica Neue': 10em, 'Helvetica': 9em);
 */
(function ($) {
  (function () {
    function parsedeclarations(e) {
      var t = munged[e].replace(/^{|}$/g, "");t = munge(t);var n = {};$.each(t.split(";"), function (e, t) {
        t = t.split(":");if (t.length < 2) return;n[restore(t[0])] = restore(t.slice(1).join(":"));
      });return n;
    }function munge(e, t) {
      e = e.replace(REatcomment, "$1").replace(REcomment_string, function (e, t) {
        if (!t) return "";var n = "%s`" + ++uid + "`s%";munged[uid] = t.replace(/^\\/, "");return n;
      });var n = t ? REfull : REbraces;while (match = n.exec(e)) {
        replacement = "%b`" + ++uid + "`b%";munged[uid] = match[0];e = e.replace(n, replacement);
      }return e;
    }function restore(e) {
      if (e === undefined) return e;while (match = REmunged.exec(e)) {
        e = e.replace(REmunged, munged[match[1]]);
      }return $.trim(e);
    }function processAtRule(e, t) {
      var n = e.split(/\s+/);var r = n.shift();if (r == "media") {
        var i = restore(n.pop()).slice(1, -1);if ($.parsecss.mediumApplies(n.join(" "))) {
          $.parsecss(i, t);
        }
      } else if (r == "import") {
        var s = restore(n.shift());if ($.parsecss.mediumApplies(n.join(" "))) {
          s = s.replace(/^url\(|\)$/gi, "").replace(/^["']|["']$/g, "");$.get(s, function (e) {
            $.parsecss(e, t);
          });
        }
      }
    }function styleAttributes(e, t) {
      var n = "",
          r,
          i = {};e = e.replace(RESGMLcomment, "").replace(REnotATag, "$1");munge(e).replace(REtag, function (e, t, s) {
        t = t.toLowerCase();if (i[t]) ++i[t];else i[t] = 1;if (r = /\bstyle\s*=\s*(%s`\d+`s%)/i.exec(s)) {
          var o = /\bid\s*=\s*(\S+)/i.exec(s);if (o) o = "#" + restore(o[1]).replace(/^['"]|['"]$/g, "");else o = t + ":eq(" + (i[t] - 1) + ")";n += [o, "{", restore(r[1]).replace(/^['"]|['"]$/g, ""), "}"].join("");
        }
      });$.parsecss(n, t);
    }var hasSameOrigin = function hasSameOrigin(e) {
      return e === e.replace(/^([^\/]*)\/\/([^@]*@)?([^\/:]+)(:\d+)?.*/, function (t, n, r, i, s, o, u) {
        n = n === "" ? window.location.protocol : n;s = s === undefined ? "" : s.substring(1);if (n !== window.location.protocol) return "";if (i !== window.location.hostname) return "";if (s !== window.location.port) return "";return e;
      });
    };$.fn.findandfilter = function (e) {
      var t = this.filter(e).add(this.find(e));t.prevObject = t.prevObject.prevObject;return t;
    };$.fn.parsecss = function (e, t) {
      var n = function n(t) {
        $.parsecss(t, e);
      };this.findandfilter("style").each(function () {
        n(this.innerHTML);
      }).end().findandfilter('link[type="text/css"],link[rel="stylesheet"]').each(function () {
        if (!this.disabled && hasSameOrigin(this.href) && $.parsecss.mediumApplies(this.media)) $.get(this.href, n);
      }).end();if (t) {
        $.get(location.pathname + location.search, "text", function (t) {
          styleAttributes(t, e);
        });
      }return this;
    };$.parsecss = function (e, t) {
      var n = {};e = munge(e).replace(/@(([^;`]|`[^b]|`b[^%])*(`b%)?);?/g, function (e, n) {
        processAtRule($.trim(n), t);return "";
      });$.each(e.split("`b%"), function (e, t) {
        t = t.split("%b`");if (t.length < 2) return;t[0] = restore(t[0]);n[t[0]] = $.extend(n[t[0]] || {}, parsedeclarations(t[1]));
      });t(n);
    };$.parsecss.mediumApplies = window.media && window.media.query || function (e) {
      if (!e) return true;if (e in media) return media[e];var t = $('<style media="' + e + '">body {position: relative; z-index: 1;}</style>').appendTo("head");return media[e] = [$("body").css("z-index") == 1, t.remove()][0];
    };$.parsecss.isValidSelector = function (e) {
      var t = $("<style>" + e + "{}</style>").appendTo("head")[0];return [t.styleSheet ? !/UNKNOWN/i.test(t.styleSheet.cssText) : !!t.sheet.cssRules.length, $(t).remove()][0];
    };$.parsecss.parseArguments = function (str) {
      if (!str) return [];var ret = [],
          mungedArguments = munge(str, true).split(/\s+/);for (var i = 0; i < mungedArguments.length; ++i) {
        var a = restore(mungedArguments[i]);try {
          ret.push(eval("(" + a + ")"));
        } catch (err) {
          ret.push(a);
        }
      }return ret;
    };$.parsecss.styleAttributes = styleAttributes;var media = {};var munged = {};var REbraces = /{[^{}]*}/;var REfull = /\[[^\[\]]*\]|{[^{}]*}|\([^()]*\)|function(\s+\w+)?(\s*%b`\d+`b%){2}/;var REatcomment = /\/\*@((?:[^\*]|\*[^\/])*)\*\//g;var REcomment_string = /(?:\/\*(?:[^\*]|\*[^\/])*\*\/)|(\\.|"(?:[^\\\"]|\\.|\\\n)*"|'(?:[^\\\']|\\.|\\\n)*')/g;var REmunged = /%\w`(\d+)`\w%/;var uid = 0;var _show = { show: $.fn.show, hide: $.fn.hide };$.each(["show", "hide"], function () {
      var e = this,
          t = _show[e],
          n = e + "Default";$.fn[e] = function () {
        if (arguments.length > 0) return t.apply(this, arguments);return this.each(function () {
          var e = $.data(this, n),
              r = $(this);if (e) {
            $.removeData(this, n);e.call(r);r.queue(function () {
              r.data(n, e).dequeue();
            });
          } else {
            t.call(r);
          }
        });
      };$.fn[n] = function () {
        var t = $.makeArray(arguments),
            r = t[0];if ($.fn[r]) {
          t.shift();var i = $.fn[r];
        } else if ($.effects && $.effects[r]) {
          if (_typeof$1(t[1]) != "object") t.splice(1, 0, {});i = _show[e];
        } else {
          i = _show[e];
        }return this.data(n, function () {
          i.apply(this, t);
        });
      };
    });var RESGMLcomment = /<!--([^-]|-[^-])*-->/g;var REnotATag = /(>)[^<]*/g;var REtag = /<(\w+)([^>]*)>/g;
  })();(function () {
    function e(e, t, n, r) {
      var i = e.text().split(t),
          s = "";if (i.length) {
        $(i).each(function (e, t) {
          s += '<span class="' + n + (e + 1) + '">' + t + "</span>" + r;
        });e.empty().append(s);
      }
    }var t = { init: function init() {
        return this.each(function () {
          e($(this), "", "char", "");
        });
      }, words: function words() {
        return this.each(function () {
          e($(this), " ", "word", " ");
        });
      }, lines: function lines() {
        return this.each(function () {
          var t = "eefec303079ad17405c889e092e105b0";e($(this).children("br").replaceWith(t).end(), t, "line", "");
        });
      } };$.fn.lettering = function (e) {
      if (e && t[e]) {
        return t[e].apply(this, [].slice.call(arguments, 1));
      } else if (e === "letters" || !e) {
        return t.init.apply(this, [].slice.call(arguments, 0));
      }$.error("Method " + e + " does not exist on jQuery.lettering");return this;
    };
  })();var unstack = function () {
    var e = { init: function init(e) {
        var t = $(e).css("font-family").match(/[^'",;\s][^'",;]*/g) || [];return this.analyzeStack(t, e);
      }, analyzeStack: function analyzeStack(t, n) {
        var r = ["monospace", "sans-serif", "serif", "cursive", "fantasy"];var i = r[0];var s = t.length;var o = t[s - 1];if ($.inArray(o, r)) {
          t.push(i);s++;
        }if (o == i) {
          i = r[1];
        }for (var u = 0; u < s - 1; u++) {
          font = t[u];if (e.testFont(font, i)) {
            return font;
          }
        }
      }, testFont: function testFont(e, t) {
        var n = $('<span id="font_tester" style="font-family:' + t + '; font-size:144px;position:absolute;left:-10000px;top:-10000px;visibility:hidden;">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmml</span>');$("body").prepend(n);var r = n.width();n.css("font-family", e + "," + t);var i = n.width();n.remove();return i != r;
      } };return function (t) {
      return e.init(t);
    };
  }();window.Kerning = new function () {
    var e = this,
        t = navigator.platform,
        n = ["webkitTransform" in document.documentElement.style && "webkit", navigator.userAgent.indexOf("MSIE") > -1 && "ms", "MozTransform" in document.documentElement.style && "moz", window.opera && "o"].reduce(function (e, t) {
      return e + (t || "");
    }),
        r = [t.match(/Mac/) && "mac", t.match(/Win/) && "win", t.match(/Linux/) && "linux"].reduce(function (e, t) {
      return e + (t || "");
    });var i = { _pairs: function _pairs(e, t, n) {
        var r = n.match(/^-(letter|word)-pairs\(([\s\S]+)\)$/i);if (!r || r[1] !== e) return false;var i = e === "word" ? t.children("span") : t.find("span > span"),
            s = n.match(/translate|rotate|skew|perspective/i),
            o = $.trim(r[2].replace(/,\s+?'/g, ",'").replace(/:\s+?(\d)/g, ":$1")).split(s ? ")," : ","),
            u,
            a,
            f,
            l = [];if (!o) return;$.each(o, function (t, n) {
          u = n.split(":");u[0] = u[0].replace(/^['"](.+)['"]$/g, "$1");if (e === "word") a = u[0].split(" ");else a = u[0];f = function f(t) {
            var n = $(this).text().match(new RegExp(a[0])),
                r,
                i;if (a[1] !== " ") {
              i = ($(this).next().html() || "").match(new RegExp(a[1]));
            } else {
              r = e == "word" ? $(this).next('[class^="word"]') : $(this).parent().next('[class^="word"]');i = !$(this).next().length && r.length;
            }return n && i;
          };l.push([u[1], i.filter(f)]);
        });return l;
      }, _repeats: function _repeats(e, t, n) {
        var r = n.match(/^-(letter|word)-repeats\(([\s\S]+)\)$/i);if (!r || r[1] !== e) return false;var i = e === "word" ? t.children("span") : t.find("span > span"),
            s = n.match(/translate|rotate|skew|perspective/i),
            o = $.trim(r[2].replace(/,\s+?'/g, ",'").replace(/:\s+?(\d)/g, ":$1")).split(s ? ")," : ","),
            u,
            a,
            f,
            l = [];if (!o) return;$.each(o, function (e, t) {
          u = t.split(":");if (s && u[1].substring(u[1].length - 1) !== ")") u[1] += ")";l.push([$.trim(u[1]), i.filter(":nth-child(" + $.trim(u[0]) + ")")]);
        });return l;
      }, _conditional: function _conditional(e, t, n) {
        var r = n.match(/^(?:-(letter|word)-)?if-font\(([\s\S]+)\)$/i);if (!r) return;var i = e === "all" ? t : e === "word" ? t.children("span") : t.find("span > span"),
            s = n.match(/translate|rotate|skew|perspective/i),
            o = r[2].replace(/\n/g, "").match(/['"][^'"]+['"]:\s*.+?(\)|(?=\w),\s['"]|$)/g),
            u,
            a = {},
            f = [];if (!o) return;t.each(function (e, t) {
          var n = unstack(t).replace(/^['"](.+)['"]$/g, "$1");if (!a[n]) a[n] = [t];else a[n].push(t);
        });$.each(o, function (e, t) {
          u = t.match(/['"]([^'"]+)['"]:\s*(.+)$/);if (!u) return true;u = u.splice(1);if (u[0] in a) f.push([$.trim(u[1]), $(a[u[0]])]);
        });return f;
      }, _applyAttribute: function _applyAttribute(e, t, n, r) {
        var s = i._conditional(e, t, r);if (!s || !s.length) s = [[r, t]];$.each(s, function (t, r) {
          var s = r[0],
              o = r[1];var u = i._pairs(e, o, s) || i._repeats(e, o, s);if (u) {
            $.each(u, function (e, t) {
              if (typeof n !== "string") {
                var r = {};$.each(n, function (e, n) {
                  r[n] = t[0];
                });t[1].css(r);
              } else {
                t[1].css(n, t[0]);
              }
            });
          } else {
            var a, f, l;if (l = s.match(/-transform-group\(([\s\S]+?\([^)]+\))*?\)/g)) {
              a = $.map(l, function (e, t) {
                return e.replace(/-transform-group\(([\s\S]+)\)$/, "$1");
              });
            } else {
              a = s.replace(/[\n\s]+/g, " ").split(" ");
            }o.each(function (t, r) {
              f = e === "all" ? $(r) : e === "word" ? $(r).children("span") : $(r).find("span > span");$.each(a, function (e, t) {
                if (typeof n !== "string") {
                  var r = {};$.each(n, function (e, n) {
                    r[n] = t;
                  });f.eq(e).css(r);
                } else {
                  f.eq(e).css(n, t);
                }
              });
            });
          }
        });
      }, kern: function kern(e, t, n) {
        i._applyAttribute(e, t, "margin-right", n);
      }, size: function size(e, t, n) {
        i._applyAttribute(e, t, "font-size", n);
      }, weight: function weight(e, t, n) {
        i._applyAttribute(e, t, "font-weight", n);
      }, color: function color(e, t, n) {
        i._applyAttribute(e, t, "color", n);
      }, backgroundcolor: function backgroundcolor(e, t, n) {
        i._applyAttribute(e, t, "background-color", n);
      }, transform: function transform(e, t, n) {
        var r = ["-webkit-transform", "-moz-transform", "-ms-transform", "-o-transform", "transform"];i._applyAttribute(e, t, r, n);
      } };this._parse = function (t, s) {
      if (!e._parsedCSS) e._parsedCSS = t;for (var o in t) {
        for (var u in t[o]) {
          var a,
              f,
              l = t[o][u];if (a = u.match(new RegExp("^(-" + n + "|-" + r + ")?-(letter|word)-(kern|transform|size|color|backgroundcolor|weight)", "i"))) {
            var c = a[2].toLowerCase(),
                h = a[3].toLowerCase();f = $(o);if (s) f = f.not(".kerningjs");f.not(".kerningjs").addClass("kerningjs").css("visibility", "inherit").lettering("words").children("span").css("display", "inline-block").lettering().children("span").css("display", "inline-block");if (i[h]) i[h].call(this, c, f, l);
          } else if ((a = u.match(/font-(size|weight)/i)) && l.match(/if-font/i)) {
            var h = a[1].toLowerCase();f = $(o);if (s) f = f.not(".kerningjs");f.not(".kerningjs").addClass("kerningjs").css("visibility", "inherit");if (i[h]) i[h].call(this, "all", f, l);
          }
        }
      }
    };this.live = function () {
      $(document).bind("DOMNodeInserted", function (t) {
        if (t.target) e.refresh(true);
      });
    };this.refresh = function (t) {
      if (e._parsedCSS) e._parse(e._parsedCSS, t);
    };$(function () {
      $(document).parsecss(e._parse, true);
    });
  }();
})(jQuery);

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var _typeof$5 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof$5(global)) == 'object' && global && global.Object === Object && global;

var _typeof$4 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof$4(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var _Symbol = root.Symbol;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

var _typeof$6 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof$6(value)) == 'object';
}

var _typeof$3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof$3(value)) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

var _typeof$2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value === 'undefined' ? 'undefined' : _typeof$2(value);
  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

var _typeof$7 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof$7(value);
  return value != null && (type == 'object' || type == 'function');
}

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]';
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype;
var objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty$3.call(data, key);
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
  return this;
}

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

var _typeof$8 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof$8(value);
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

/** Used to match property names within property paths. */
var reLeadingDot = /^\./;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function (string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function (match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined;
var symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : undefined;
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * The base implementation of `_.at` without support for individual paths.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {string[]} paths The property paths to pick.
 * @returns {Array} Returns the picked elements.
 */
function baseAt(object, paths) {
  var index = -1,
      length = paths.length,
      result = Array(length),
      skip = object == null;

  while (++index < length) {
    result[index] = skip ? undefined : get(object, paths[index]);
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty$4.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};

/** Built-in value references. */
var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function (func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800;
var HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function () {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

/**
 * Creates an array of values corresponding to `paths` of `object`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Array} Returns the picked values.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
 *
 * _.at(object, ['a[0].b.c', 'a[1]']);
 * // => [3, 4]
 */
var at = flatRest(baseAt);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function now() {
  return root.Date.now();
};

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

/** Error message constants. */
var FUNC_ERROR_TEXT$2 = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max;
var nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax$1(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

var navButtons = $(".nav").find("a").get();
var navTargets = $(".content").find("h2, h3 > a").get().filter(function (domEl) {
	return !!getHash(domEl);
});

function scrollToChapter(evt) {
	var chapter = getChapterByHash(getHash(evt.target));

	if (chapter) {
		evt.preventDefault();

		$(".content").scrollTo(chapter, 600, {
			axis: "y"
		});
	}
}

function markNavAndBrowser() {
	var hash = getHash(getCurrentlyReadableChapter());
	markNav(hash);
	markBrowser(hash);
}

function markNav(hash) {
	var markedNavButton = getNavButtonByHash(hash);
	$(navButtons).removeClass("selected");
	$(markedNavButton).addClass("selected");
}

function markBrowser(hash) {
	var newHash = "#" + hash;

	if (document.location.hash !== newHash) {
		safeChangeHash(newHash);
	}
}

function safeChangeHash(hash) {
	var memoPosition = $(".content").scrollTop();

	setTimeout(function () {
		var currentPosition = $(".content").scrollTop(),
		    scrollHasStopped = currentPosition === memoPosition;

		if (scrollHasStopped) {
			document.location.hash = hash;
			$(".content").scrollTop(memoPosition);
		}
	}, 100);
}

function getCurrentlyReadableChapter() {
	var anchorsAboveTheFold = navTargets.filter(function (titleEl) {
		return titleEl.getBoundingClientRect().top < $(window).height() * 0.5;
	});
	return getLastItem(anchorsAboveTheFold);
}

function getHash(domEl) {
	return domEl.href ? domEl.href.split("#")[1] : "" || domEl.getAttribute("id") || domEl.getAttribute("name");
}

function getChapterByHash(hash) {
	return $("[id=\"" + hash + "\"], [name=\"" + hash + "\"]")[0];
}

function getNavButtonByHash(hash) {
	return $(navButtons).filter("a[href$=\"#" + hash + "\"]")[0];
}

function getLastItem(arr) {
	return arr[arr.length - 1];
}

$("a[href^=\"#\"]").on("click", scrollToChapter);
$(".content").on("scroll", throttle(markNavAndBrowser, 30));
$("window").on("load resize", throttle(markNavAndBrowser, 290));
