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

var _typeof$2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
  var type = typeof value === 'undefined' ? 'undefined' : _typeof$2(value);
  return value != null && (type == 'object' || type == 'function');
}

var _typeof$4 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof$4(global)) == 'object' && global && global.Object === Object && global;

var _typeof$3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof$3(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

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

var _typeof$5 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
  return (typeof value === 'undefined' ? 'undefined' : _typeof$5(value)) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

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
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;
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
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
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
var FUNC_ERROR_TEXT = 'Expected a function';

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
    throw new TypeError(FUNC_ERROR_TEXT);
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

var $window = $(window);
var navButtons = $(".nav").find("a").get();
var navCollapsableButtons = $(navButtons).get().filter(function (domEl) {
	return $(domEl).parent().is("strong");
});
var navTargets = $(".content").find("h2, h3 > a").get().filter(function (domEl) {
	return !!getHash(domEl);
});

function getScrollTarget() {
	return $(".content");
}

function listenForScrollNavigationEvents(domEl) {
	$(domEl).on("scroll", throttle(markNav, 30)).on("scroll", debounce(markBrowser, 300));
}

function listenForScrollAnchorEvents() {
	$("a[href^=\"#\"]").on("click", scrollToChapter);
}

function removeNonBreakingSpacesFromTds() {
	$("td").each(function () {
		var $this = $(this);
		$this.html($this.html().replace(/&nbsp;/g, ''));
	});
}

function scrollToChapter(evt) {
	var $scrollTarget = getScrollTarget(),
	    chapter = getChapterByHash(getHash(evt.target));

	if (chapter) {
		evt.preventDefault();

		$scrollTarget.scrollTo(chapter, 600, {
			axis: "y"
		});
	}
}

function markNav() {
	var hash = getHash(getCurrentlyReadableChapter());
	var markedNavButton = getNavButtonByHash(hash);
	$(navButtons).removeClass("selected");
	$(markedNavButton).addClass("selected");
}

function markBrowser() {
	var $scrollTarget = getScrollTarget(),
	    hash = "#" + getHash(getCurrentlyReadableChapter()),
	    memoPosition = $scrollTarget.scrollTop();

	if (document.location.hash !== hash) {
		document.location.hash = hash;
	}

	if ($scrollTarget.scrollTop() !== memoPosition) {
		$scrollTarget.scrollTop(memoPosition);
	}

	$scrollTarget.scrollLeft(0); // for IE.
}

function getCurrentlyReadableChapter() {
	var anchorsAboveTheFold = navTargets.filter(function (titleEl) {
		return titleEl.getBoundingClientRect().top < $window.height() * 0.5;
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

listenForScrollAnchorEvents();
listenForScrollNavigationEvents(getScrollTarget());
listenForScrollNavigationEvents(window);
removeNonBreakingSpacesFromTds();
