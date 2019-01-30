/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if (window.Modernizr = function(t, e, i) {
    function n(t) {
      y.cssText = t
    }

    function a(t, e) {
      return n(C.join(t + ";") + (e || ""))
    }

    function o(t, e) {
      return typeof t === e
    }

    function r(t, e) {
      return !!~("" + t).indexOf(e)
    }

    function s(t, e) {
      for (var n in t) {
        var a = t[n];
        if (!r(a, "-") && y[a] !== i) return "pfx" == e ? a : !0
      }
      return !1
    }

    function l(t, e, n) {
      for (var a in t) {
        var r = e[t[a]];
        if (r !== i) return n === !1 ? t[a] : o(r, "function") ? r.bind(n || e) : r
      }
      return !1
    }

    function d(t, e, i) {
      var n = t.charAt(0).toUpperCase() + t.slice(1),
        a = (t + " " + S.join(n + " ") + n).split(" ");
      return o(e, "string") || o(e, "undefined") ? s(a, e) : (a = (t + " " + T.join(n + " ") + n).split(" "), l(a, e, i))
    }

    function h() {
      f.input = function(i) {
        for (var n = 0, a = i.length; a > n; n++) _[i[n]] = i[n] in x;
        return _.list && (_.list = !!e.createElement("datalist") && !!t.HTMLDataListElement), _
      }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), f.inputtypes = function(t) {
        for (var n, a, o, r = 0, s = t.length; s > r; r++) x.setAttribute("type", a = t[r]), n = "text" !== x.type, n && (x.value = w, x.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(a) && x.style.WebkitAppearance !== i ? (m.appendChild(x), o = e.defaultView, n = o.getComputedStyle && "textfield" !== o.getComputedStyle(x, null).WebkitAppearance && 0 !== x.offsetHeight, m.removeChild(x)) : /^(search|tel)$/.test(a) || (n = /^(url|email)$/.test(a) ? x.checkValidity && x.checkValidity() === !1 : x.value != w)), A[t[r]] = !!n;
        return A
      }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var c, u, p = "2.8.3",
      f = {},
      g = !0,
      m = e.documentElement,
      v = "modernizr",
      b = e.createElement(v),
      y = b.style,
      x = e.createElement("input"),
      w = ":)",
      k = {}.toString,
      C = " -webkit- -moz- -o- -ms- ".split(" "),
      D = "Webkit Moz O ms",
      S = D.split(" "),
      T = D.toLowerCase().split(" "),
      M = {
        svg: "http://www.w3.org/2000/svg"
      },
      F = {},
      A = {},
      _ = {},
      I = [],
      P = I.slice,
      $ = function(t, i, n, a) {
        var o, r, s, l, d = e.createElement("div"),
          h = e.body,
          c = h || e.createElement("body");
        if (parseInt(n, 10))
          for (; n--;) s = e.createElement("div"), s.id = a ? a[n] : v + (n + 1), d.appendChild(s);
        return o = ["&#173;", '<style id="s', v, '">', t, "</style>"].join(""), d.id = v, (h ? d : c).innerHTML += o, c.appendChild(d), h || (c.style.background = "", c.style.overflow = "hidden", l = m.style.overflow, m.style.overflow = "hidden", m.appendChild(c)), r = i(d, t), h ? d.parentNode.removeChild(d) : (c.parentNode.removeChild(c), m.style.overflow = l), !!r
      },
      O = function(e) {
        var i = t.matchMedia || t.msMatchMedia;
        if (i) return i(e) && i(e).matches || !1;
        var n;
        return $("@media " + e + " { #" + v + " { position: absolute; } }", function(e) {
          n = "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
        }), n
      },
      E = function() {
        function t(t, a) {
          a = a || e.createElement(n[t] || "div"), t = "on" + t;
          var r = t in a;
          return r || (a.setAttribute || (a = e.createElement("div")), a.setAttribute && a.removeAttribute && (a.setAttribute(t, ""), r = o(a[t], "function"), o(a[t], "undefined") || (a[t] = i), a.removeAttribute(t))), a = null, r
        }
        var n = {
          select: "input",
          change: "input",
          submit: "form",
          reset: "form",
          error: "img",
          load: "img",
          abort: "img"
        };
        return t
      }(),
      V = {}.hasOwnProperty;
    u = o(V, "undefined") || o(V.call, "undefined") ? function(t, e) {
      return e in t && o(t.constructor.prototype[e], "undefined")
    } : function(t, e) {
      return V.call(t, e)
    }, Function.prototype.bind || (Function.prototype.bind = function(t) {
      var e = this;
      if ("function" != typeof e) throw new TypeError;
      var i = P.call(arguments, 1),
        n = function() {
          if (this instanceof n) {
            var a = function() {};
            a.prototype = e.prototype;
            var o = new a,
              r = e.apply(o, i.concat(P.call(arguments)));
            return Object(r) === r ? r : o
          }
          return e.apply(t, i.concat(P.call(arguments)))
        };
      return n
    }), F.flexbox = function() {
      return d("flexWrap")
    }, F.canvas = function() {
      var t = e.createElement("canvas");
      return !!t.getContext && !!t.getContext("2d")
    }, F.canvastext = function() {
      return !!f.canvas && !!o(e.createElement("canvas").getContext("2d").fillText, "function")
    }, F.webgl = function() {
      return !!t.WebGLRenderingContext
    }, F.touch = function() {
      var i;
      return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? i = !0 : $(["@media (", C.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
        i = 9 === t.offsetTop
      }), i
    }, F.geolocation = function() {
      return "geolocation" in navigator
    }, F.postmessage = function() {
      return !!t.postMessage
    }, F.websqldatabase = function() {
      return !!t.openDatabase
    }, F.indexedDB = function() {
      return !!d("indexedDB", t)
    }, F.hashchange = function() {
      return E("hashchange", t) && (e.documentMode === i || e.documentMode > 7)
    }, F.history = function() {
      return !!t.history && !!history.pushState
    }, F.draganddrop = function() {
      var t = e.createElement("div");
      return "draggable" in t || "ondragstart" in t && "ondrop" in t
    }, F.websockets = function() {
      return "WebSocket" in t || "MozWebSocket" in t
    }, F.rgba = function() {
      return n("background-color:rgba(150,255,150,.5)"), r(y.backgroundColor, "rgba")
    }, F.hsla = function() {
      return n("background-color:hsla(120,40%,100%,.5)"), r(y.backgroundColor, "rgba") || r(y.backgroundColor, "hsla")
    }, F.multiplebgs = function() {
      return n("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(y.background)
    }, F.backgroundsize = function() {
      return d("backgroundSize")
    }, F.borderimage = function() {
      return d("borderImage")
    }, F.borderradius = function() {
      return d("borderRadius")
    }, F.boxshadow = function() {
      return d("boxShadow")
    }, F.textshadow = function() {
      return "" === e.createElement("div").style.textShadow
    }, F.opacity = function() {
      return a("opacity:.55"), /^0.55$/.test(y.opacity)
    }, F.cssanimations = function() {
      return d("animationName")
    }, F.csscolumns = function() {
      return d("columnCount")
    }, F.cssgradients = function() {
      var t = "background-image:",
        e = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
        i = "linear-gradient(left top,#9f9, white);";
      return n((t + "-webkit- ".split(" ").join(e + t) + C.join(i + t)).slice(0, -t.length)), r(y.backgroundImage, "gradient")
    }, F.cssreflections = function() {
      return d("boxReflect")
    }, F.csstransforms = function() {
      return !!d("transform")
    }, F.csstransforms3d = function() {
      var t = !!d("perspective");
      return t && "webkitPerspective" in m.style && $("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e, i) {
        t = 9 === e.offsetLeft && 3 === e.offsetHeight
      }), t
    }, F.csstransitions = function() {
      return d("transition")
    }, F.fontface = function() {
      var t;
      return $('@font-face {font-family:"font";src:url("https://")}', function(i, n) {
        var a = e.getElementById("smodernizr"),
          o = a.sheet || a.styleSheet,
          r = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
        t = /src/i.test(r) && 0 === r.indexOf(n.split(" ")[0])
      }), t
    }, F.generatedcontent = function() {
      var t;
      return $(["#", v, "{font:0/0 a}#", v, ':after{content:"', w, '";visibility:hidden;font:3px/1 a}'].join(""), function(e) {
        t = e.offsetHeight >= 3
      }), t
    }, F.video = function() {
      var t = e.createElement("video"),
        i = !1;
      try {
        (i = !!t.canPlayType) && (i = new Boolean(i), i.ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), i.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), i.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
      } catch (n) {}
      return i
    }, F.audio = function() {
      var t = e.createElement("audio"),
        i = !1;
      try {
        (i = !!t.canPlayType) && (i = new Boolean(i), i.ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), i.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), i.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), i.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
      } catch (n) {}
      return i
    }, F.localstorage = function() {
      try {
        return localStorage.setItem(v, v), localStorage.removeItem(v), !0
      } catch (t) {
        return !1
      }
    }, F.sessionstorage = function() {
      try {
        return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
      } catch (t) {
        return !1
      }
    }, F.webworkers = function() {
      return !!t.Worker
    }, F.applicationcache = function() {
      return !!t.applicationCache
    }, F.svg = function() {
      return !!e.createElementNS && !!e.createElementNS(M.svg, "svg").createSVGRect
    }, F.inlinesvg = function() {
      var t = e.createElement("div");
      return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == M.svg
    }, F.smil = function() {
      return !!e.createElementNS && /SVGAnimate/.test(k.call(e.createElementNS(M.svg, "animate")))
    }, F.svgclippaths = function() {
      return !!e.createElementNS && /SVGClipPath/.test(k.call(e.createElementNS(M.svg, "clipPath")))
    };
    for (var R in F) u(F, R) && (c = R.toLowerCase(), f[c] = F[R](), I.push((f[c] ? "" : "no-") + c));
    return f.input || h(), f.addTest = function(t, e) {
        if ("object" == typeof t)
          for (var n in t) u(t, n) && f.addTest(n, t[n]);
        else {
          if (t = t.toLowerCase(), f[t] !== i) return f;
          e = "function" == typeof e ? e() : e, "undefined" != typeof g && g && (m.className += " " + (e ? "" : "no-") + t), f[t] = e
        }
        return f
      }, n(""), b = x = null,
      function(t, e) {
        function i(t, e) {
          var i = t.createElement("p"),
            n = t.getElementsByTagName("head")[0] || t.documentElement;
          return i.innerHTML = "x<style>" + e + "</style>", n.insertBefore(i.lastChild, n.firstChild)
        }

        function n() {
          var t = b.elements;
          return "string" == typeof t ? t.split(" ") : t
        }

        function a(t) {
          var e = v[t[g]];
          return e || (e = {}, m++, t[g] = m, v[m] = e), e
        }

        function o(t, i, n) {
          if (i || (i = e), h) return i.createElement(t);
          n || (n = a(i));
          var o;
          return o = n.cache[t] ? n.cache[t].cloneNode() : f.test(t) ? (n.cache[t] = n.createElem(t)).cloneNode() : n.createElem(t), !o.canHaveChildren || p.test(t) || o.tagUrn ? o : n.frag.appendChild(o)
        }

        function r(t, i) {
          if (t || (t = e), h) return t.createDocumentFragment();
          i = i || a(t);
          for (var o = i.frag.cloneNode(), r = 0, s = n(), l = s.length; l > r; r++) o.createElement(s[r]);
          return o
        }

        function s(t, e) {
          e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function(i) {
            return b.shivMethods ? o(i, t, e) : e.createElem(i)
          }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-]+/g, function(t) {
            return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
          }) + ");return n}")(b, e.frag)
        }

        function l(t) {
          t || (t = e);
          var n = a(t);
          return b.shivCSS && !d && !n.hasCSS && (n.hasCSS = !!i(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), h || s(t, n), t
        }
        var d, h, c = "3.7.0",
          u = t.html5 || {},
          p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
          f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
          g = "_html5shiv",
          m = 0,
          v = {};
        ! function() {
          try {
            var t = e.createElement("a");
            t.innerHTML = "<xyz></xyz>", d = "hidden" in t, h = 1 == t.childNodes.length || function() {
              e.createElement("a");
              var t = e.createDocumentFragment();
              return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
            }()
          } catch (i) {
            d = !0, h = !0
          }
        }();
        var b = {
          elements: u.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
          version: c,
          shivCSS: u.shivCSS !== !1,
          supportsUnknownElements: h,
          shivMethods: u.shivMethods !== !1,
          type: "default",
          shivDocument: l,
          createElement: o,
          createDocumentFragment: r
        };
        t.html5 = b, l(e)
      }(this, e), f._version = p, f._prefixes = C, f._domPrefixes = T, f._cssomPrefixes = S, f.mq = O, f.hasEvent = E, f.testProp = function(t) {
        return s([t])
      }, f.testAllProps = d, f.testStyles = $, f.prefixed = function(t, e, i) {
        return e ? d(t, e, i) : d(t, "pfx")
      }, m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (g ? " js " + I.join(" ") : ""), f
  }(this, this.document), function(t, e, i) {
    function n(t) {
      return "[object Function]" == m.call(t)
    }

    function a(t) {
      return "string" == typeof t
    }

    function o() {}

    function r(t) {
      return !t || "loaded" == t || "complete" == t || "uninitialized" == t
    }

    function s() {
      var t = v.shift();
      b = 1, t ? t.t ? f(function() {
        ("c" == t.t ? u.injectCss : u.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
      }, 0) : (t(), s()) : b = 0
    }

    function l(t, i, n, a, o, l, d) {
      function h(e) {
        if (!p && r(c.readyState) && (y.r = p = 1, !b && s(), c.onload = c.onreadystatechange = null, e)) {
          "img" != t && f(function() {
            w.removeChild(c)
          }, 50);
          for (var n in T[i]) T[i].hasOwnProperty(n) && T[i][n].onload()
        }
      }
      var d = d || u.errorTimeout,
        c = e.createElement(t),
        p = 0,
        m = 0,
        y = {
          t: n,
          s: i,
          e: o,
          a: l,
          x: d
        };
      1 === T[i] && (m = 1, T[i] = []), "object" == t ? c.data = i : (c.src = i, c.type = t), c.width = c.height = "0", c.onerror = c.onload = c.onreadystatechange = function() {
        h.call(this, m)
      }, v.splice(a, 0, y), "img" != t && (m || 2 === T[i] ? (w.insertBefore(c, x ? null : g), f(h, d)) : T[i].push(c))
    }

    function d(t, e, i, n, o) {
      return b = 0, e = e || "j", a(t) ? l("c" == e ? C : k, t, e, this.i++, i, n, o) : (v.splice(this.i++, 0, t), 1 == v.length && s()), this
    }

    function h() {
      var t = u;
      return t.loader = {
        load: d,
        i: 0
      }, t
    }
    var c, u, p = e.documentElement,
      f = t.setTimeout,
      g = e.getElementsByTagName("script")[0],
      m = {}.toString,
      v = [],
      b = 0,
      y = "MozAppearance" in p.style,
      x = y && !!e.createRange().compareNode,
      w = x ? p : g.parentNode,
      p = t.opera && "[object Opera]" == m.call(t.opera),
      p = !!e.attachEvent && !p,
      k = y ? "object" : p ? "script" : "img",
      C = p ? "script" : k,
      D = Array.isArray || function(t) {
        return "[object Array]" == m.call(t)
      },
      S = [],
      T = {},
      M = {
        timeout: function(t, e) {
          return e.length && (t.timeout = e[0]), t
        }
      };
    u = function(t) {
      function e(t) {
        var e, i, n, t = t.split("!"),
          a = S.length,
          o = t.pop(),
          r = t.length,
          o = {
            url: o,
            origUrl: o,
            prefixes: t
          };
        for (i = 0; r > i; i++) n = t[i].split("="), (e = M[n.shift()]) && (o = e(o, n));
        for (i = 0; a > i; i++) o = S[i](o);
        return o
      }

      function r(t, a, o, r, s) {
        var l = e(t),
          d = l.autoCallback;
        l.url.split(".").pop().split("?").shift(), l.bypass || (a && (a = n(a) ? a : a[t] || a[r] || a[t.split("/").pop().split("?")[0]]), l.instead ? l.instead(t, a, o, r, s) : (T[l.url] ? l.noexec = !0 : T[l.url] = 1, o.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : i, l.noexec, l.attrs, l.timeout), (n(a) || n(d)) && o.load(function() {
          h(), a && a(l.origUrl, s, r), d && d(l.origUrl, s, r), T[l.url] = 2
        })))
      }

      function s(t, e) {
        function i(t, i) {
          if (t) {
            if (a(t)) i || (c = function() {
              var t = [].slice.call(arguments);
              u.apply(this, t), p()
            }), r(t, c, e, 0, d);
            else if (Object(t) === t)
              for (l in s = function() {
                  var e, i = 0;
                  for (e in t) t.hasOwnProperty(e) && i++;
                  return i
                }(), t) t.hasOwnProperty(l) && (!i && !--s && (n(c) ? c = function() {
                var t = [].slice.call(arguments);
                u.apply(this, t), p()
              } : c[l] = function(t) {
                return function() {
                  var e = [].slice.call(arguments);
                  t && t.apply(this, e), p()
                }
              }(u[l])), r(t[l], c, e, l, d))
          } else !i && p()
        }
        var s, l, d = !!t.test,
          h = t.load || t.both,
          c = t.callback || o,
          u = c,
          p = t.complete || o;
        i(d ? t.yep : t.nope, !!h), h && i(h)
      }
      var l, d, c = this.yepnope.loader;
      if (a(t)) r(t, 0, c, 0);
      else if (D(t))
        for (l = 0; l < t.length; l++) d = t[l], a(d) ? r(d, 0, c, 0) : D(d) ? u(d) : Object(d) === d && s(d, c);
      else Object(t) === t && s(t, c)
    }, u.addPrefix = function(t, e) {
      M[t] = e
    }, u.addFilter = function(t) {
      S.push(t)
    }, u.errorTimeout = 1e4, null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", c = function() {
      e.removeEventListener("DOMContentLoaded", c, 0), e.readyState = "complete"
    }, 0)), t.yepnope = h(), t.yepnope.executeStack = s, t.yepnope.injectJs = function(t, i, n, a, l, d) {
      var h, c, p = e.createElement("script"),
        a = a || u.errorTimeout;
      p.src = t;
      for (c in n) p.setAttribute(c, n[c]);
      i = d ? s : i || o, p.onreadystatechange = p.onload = function() {
        !h && r(p.readyState) && (h = 1, i(), p.onload = p.onreadystatechange = null)
      }, f(function() {
        h || (h = 1, i(1))
      }, a), l ? p.onload() : g.parentNode.insertBefore(p, g)
    }, t.yepnope.injectCss = function(t, i, n, a, r, l) {
      var d, a = e.createElement("link"),
        i = l ? s : i || o;
      a.href = t, a.rel = "stylesheet", a.type = "text/css";
      for (d in n) a.setAttribute(d, n[d]);
      r || (g.parentNode.insertBefore(a, g), f(i, 0))
    }
  }(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
  }, "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
  "use strict";
  var e = t.fn.jquery.split(" ")[0].split(".");
  if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(t) {
  "use strict";

  function e() {
    var t = document.createElement("bootstrap"),
      e = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      };
    for (var i in e)
      if (void 0 !== t.style[i]) return {
        end: e[i]
      };
    return !1
  }
  t.fn.emulateTransitionEnd = function(e) {
    var i = !1,
      n = this;
    t(this).one("bsTransitionEnd", function() {
      i = !0
    });
    var a = function() {
      i || t(n).trigger(t.support.transition.end)
    };
    return setTimeout(a, e), this
  }, t(function() {
    t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
      bindType: t.support.transition.end,
      delegateType: t.support.transition.end,
      handle: function(e) {
        return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
      }
    })
  })
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var i = t(this),
        a = i.data("bs.alert");
      a || i.data("bs.alert", a = new n(this)), "string" == typeof e && a[e].call(i)
    })
  }
  var i = '[data-dismiss="alert"]',
    n = function(e) {
      t(e).on("click", i, this.close)
    };
  n.VERSION = "3.3.4", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
    function i() {
      r.detach().trigger("closed.bs.alert").remove()
    }
    var a = t(this),
      o = a.attr("data-target");
    o || (o = a.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
    var r = t(o);
    e && e.preventDefault(), r.length || (r = a.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
  };
  var a = t.fn.alert;
  t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
    return t.fn.alert = a, this
  }, t(document).on("click.bs.alert.data-api", i, n.prototype.close)
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var n = t(this),
        a = n.data("bs.button"),
        o = "object" == typeof e && e;
      a || n.data("bs.button", a = new i(this, o)), "toggle" == e ? a.toggle() : e && a.setState(e)
    })
  }
  var i = function(e, n) {
    this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
  };
  i.VERSION = "3.3.4", i.DEFAULTS = {
    loadingText: "loading..."
  }, i.prototype.setState = function(e) {
    var i = "disabled",
      n = this.$element,
      a = n.is("input") ? "val" : "html",
      o = n.data();
    e += "Text", null == o.resetText && n.data("resetText", n[a]()), setTimeout(t.proxy(function() {
      n[a](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
    }, this), 0)
  }, i.prototype.toggle = function() {
    var t = !0,
      e = this.$element.closest('[data-toggle="buttons"]');
    if (e.length) {
      var i = this.$element.find("input");
      "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
    t && this.$element.toggleClass("active")
  };
  var n = t.fn.button;
  t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
    return t.fn.button = n, this
  }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
    var n = t(i.target);
    n.hasClass("btn") || (n = n.closest(".btn")), e.call(n, "toggle"), i.preventDefault()
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
    t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
  })
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var n = t(this),
        a = n.data("bs.carousel"),
        o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
        r = "string" == typeof e ? e : o.slide;
      a || n.data("bs.carousel", a = new i(this, o)), "number" == typeof e ? a.to(e) : r ? a[r]() : o.interval && a.pause().cycle()
    })
  }
  var i = function(e, i) {
    this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
  };
  i.VERSION = "3.3.4", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, i.prototype.keydown = function(t) {
    if (!/input|textarea/i.test(t.target.tagName)) {
      switch (t.which) {
        case 37:
          this.prev();
          break;
        case 39:
          this.next();
          break;
        default:
          return
      }
      t.preventDefault()
    }
  }, i.prototype.cycle = function(e) {
    return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
  }, i.prototype.getItemIndex = function(t) {
    return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
  }, i.prototype.getItemForDirection = function(t, e) {
    var i = this.getItemIndex(e),
      n = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
    if (n && !this.options.wrap) return e;
    var a = "prev" == t ? -1 : 1,
      o = (i + a) % this.$items.length;
    return this.$items.eq(o)
  }, i.prototype.to = function(t) {
    var e = this,
      i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
      e.to(t)
    }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
  }, i.prototype.pause = function(e) {
    return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
  }, i.prototype.next = function() {
    return this.sliding ? void 0 : this.slide("next")
  }, i.prototype.prev = function() {
    return this.sliding ? void 0 : this.slide("prev")
  }, i.prototype.slide = function(e, n) {
    var a = this.$element.find(".item.active"),
      o = n || this.getItemForDirection(e, a),
      r = this.interval,
      s = "next" == e ? "left" : "right",
      l = this;
    if (o.hasClass("active")) return this.sliding = !1;
    var d = o[0],
      h = t.Event("slide.bs.carousel", {
        relatedTarget: d,
        direction: s
      });
    if (this.$element.trigger(h), !h.isDefaultPrevented()) {
      if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var c = t(this.$indicators.children()[this.getItemIndex(o)]);
        c && c.addClass("active")
      }
      var u = t.Event("slid.bs.carousel", {
        relatedTarget: d,
        direction: s
      });
      return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, a.addClass(s), o.addClass(s), a.one("bsTransitionEnd", function() {
        o.removeClass([e, s].join(" ")).addClass("active"), a.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function() {
          l.$element.trigger(u)
        }, 0)
      }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (a.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(u)), r && this.cycle(), this
    }
  };
  var n = t.fn.carousel;
  t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
    return t.fn.carousel = n, this
  };
  var a = function(i) {
    var n, a = t(this),
      o = t(a.attr("data-target") || (n = a.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
    if (o.hasClass("carousel")) {
      var r = t.extend({}, o.data(), a.data()),
        s = a.attr("data-slide-to");
      s && (r.interval = !1), e.call(o, r), s && o.data("bs.carousel").to(s), i.preventDefault()
    }
  };
  t(document).on("click.bs.carousel.data-api", "[data-slide]", a).on("click.bs.carousel.data-api", "[data-slide-to]", a), t(window).on("load", function() {
    t('[data-ride="carousel"]').each(function() {
      var i = t(this);
      e.call(i, i.data())
    })
  })
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
    return t(n)
  }

  function i(e) {
    return this.each(function() {
      var i = t(this),
        a = i.data("bs.collapse"),
        o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
      !a && o.toggle && /show|hide/.test(e) && (o.toggle = !1), a || i.data("bs.collapse", a = new n(this, o)), "string" == typeof e && a[e]()
    })
  }
  var n = function(e, i) {
    this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
  };
  n.VERSION = "3.3.4", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
    toggle: !0
  }, n.prototype.dimension = function() {
    var t = this.$element.hasClass("width");
    return t ? "width" : "height"
  }, n.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var e, a = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
      if (!(a && a.length && (e = a.data("bs.collapse"), e && e.transitioning))) {
        var o = t.Event("show.bs.collapse");
        if (this.$element.trigger(o), !o.isDefaultPrevented()) {
          a && a.length && (i.call(a, "hide"), e || a.data("bs.collapse", null));
          var r = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
          var s = function() {
            this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
          };
          if (!t.support.transition) return s.call(this);
          var l = t.camelCase(["scroll", r].join("-"));
          this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[r](this.$element[0][l])
        }
      }
    }
  }, n.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var e = t.Event("hide.bs.collapse");
      if (this.$element.trigger(e), !e.isDefaultPrevented()) {
        var i = this.dimension();
        this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
        var a = function() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        };
        return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : a.call(this)
      }
    }
  }, n.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  }, n.prototype.getParent = function() {
    return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
      var a = t(n);
      this.addAriaAndCollapsedClass(e(a), a)
    }, this)).end()
  }, n.prototype.addAriaAndCollapsedClass = function(t, e) {
    var i = t.hasClass("in");
    t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
  };
  var a = t.fn.collapse;
  t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
    return t.fn.collapse = a, this
  }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
    var a = t(this);
    a.attr("data-target") || n.preventDefault();
    var o = e(a),
      r = o.data("bs.collapse"),
      s = r ? "toggle" : a.data();
    i.call(o, s)
  })
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    e && 3 === e.which || (t(a).remove(), t(o).each(function() {
      var n = t(this),
        a = i(n),
        o = {
          relatedTarget: this
        };
      a.hasClass("open") && (a.trigger(e = t.Event("hide.bs.dropdown", o)), e.isDefaultPrevented() || (n.attr("aria-expanded", "false"), a.removeClass("open").trigger("hidden.bs.dropdown", o)))
    }))
  }

  function i(e) {
    var i = e.attr("data-target");
    i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
    var n = i && t(i);
    return n && n.length ? n : e.parent()
  }

  function n(e) {
    return this.each(function() {
      var i = t(this),
        n = i.data("bs.dropdown");
      n || i.data("bs.dropdown", n = new r(this)), "string" == typeof e && n[e].call(i)
    })
  }
  var a = ".dropdown-backdrop",
    o = '[data-toggle="dropdown"]',
    r = function(e) {
      t(e).on("click.bs.dropdown", this.toggle)
    };
  r.VERSION = "3.3.4", r.prototype.toggle = function(n) {
    var a = t(this);
    if (!a.is(".disabled, :disabled")) {
      var o = i(a),
        r = o.hasClass("open");
      if (e(), !r) {
        "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
        var s = {
          relatedTarget: this
        };
        if (o.trigger(n = t.Event("show.bs.dropdown", s)), n.isDefaultPrevented()) return;
        a.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger("shown.bs.dropdown", s)
      }
      return !1
    }
  }, r.prototype.keydown = function(e) {
    if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
      var n = t(this);
      if (e.preventDefault(), e.stopPropagation(), !n.is(".disabled, :disabled")) {
        var a = i(n),
          r = a.hasClass("open");
        if (!r && 27 != e.which || r && 27 == e.which) return 27 == e.which && a.find(o).trigger("focus"), n.trigger("click");
        var s = " li:not(.disabled):visible a",
          l = a.find('[role="menu"]' + s + ', [role="listbox"]' + s);
        if (l.length) {
          var d = l.index(e.target);
          38 == e.which && d > 0 && d--, 40 == e.which && d < l.length - 1 && d++, ~d || (d = 0), l.eq(d).trigger("focus")
        }
      }
    }
  };
  var s = t.fn.dropdown;
  t.fn.dropdown = n, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function() {
    return t.fn.dropdown = s, this
  }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
    t.stopPropagation()
  }).on("click.bs.dropdown.data-api", o, r.prototype.toggle).on("keydown.bs.dropdown.data-api", o, r.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', r.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', r.prototype.keydown)
}(jQuery), + function(t) {
  "use strict";

  function e(e, n) {
    return this.each(function() {
      var a = t(this),
        o = a.data("bs.modal"),
        r = t.extend({}, i.DEFAULTS, a.data(), "object" == typeof e && e);
      o || a.data("bs.modal", o = new i(this, r)), "string" == typeof e ? o[e](n) : r.show && o.show(n)
    })
  }
  var i = function(e, i) {
    this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
      this.$element.trigger("loaded.bs.modal")
    }, this))
  };
  i.VERSION = "3.3.4", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, i.prototype.toggle = function(t) {
    return this.isShown ? this.hide() : this.show(t)
  }, i.prototype.show = function(e) {
    var n = this,
      a = t.Event("show.bs.modal", {
        relatedTarget: e
      });
    this.$element.trigger(a), this.isShown || a.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
      n.$element.one("mouseup.dismiss.bs.modal", function(e) {
        t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
      })
    }), this.backdrop(function() {
      var a = t.support.transition && n.$element.hasClass("fade");
      n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), a && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
      var o = t.Event("shown.bs.modal", {
        relatedTarget: e
      });
      a ? n.$dialog.one("bsTransitionEnd", function() {
        n.$element.trigger("focus").trigger(o)
      }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(o)
    }))
  }, i.prototype.hide = function(e) {
    e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
  }, i.prototype.enforceFocus = function() {
    t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
      this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
    }, this))
  }, i.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
      27 == t.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
  }, i.prototype.resize = function() {
    this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
  }, i.prototype.hideModal = function() {
    var t = this;
    this.$element.hide(), this.backdrop(function() {
      t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
    })
  }, i.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
  }, i.prototype.backdrop = function(e) {
    var n = this,
      a = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var o = t.support.transition && a;
      if (this.$backdrop = t('<div class="modal-backdrop ' + a + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
          return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
        }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
      o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var r = function() {
        n.removeBackdrop(), e && e()
      };
      t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : r()
    } else e && e()
  }, i.prototype.handleUpdate = function() {
    this.adjustDialog()
  }, i.prototype.adjustDialog = function() {
    var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
    })
  }, i.prototype.resetAdjustments = function() {
    this.$element.css({
      paddingLeft: "",
      paddingRight: ""
    })
  }, i.prototype.checkScrollbar = function() {
    var t = window.innerWidth;
    if (!t) {
      var e = document.documentElement.getBoundingClientRect();
      t = e.right - Math.abs(e.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
  }, i.prototype.setScrollbar = function() {
    var t = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
  }, i.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", this.originalBodyPad)
  }, i.prototype.measureScrollbar = function() {
    var t = document.createElement("div");
    t.className = "modal-scrollbar-measure", this.$body.append(t);
    var e = t.offsetWidth - t.clientWidth;
    return this.$body[0].removeChild(t), e
  };
  var n = t.fn.modal;
  t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
    return t.fn.modal = n, this
  }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
    var n = t(this),
      a = n.attr("href"),
      o = t(n.attr("data-target") || a && a.replace(/.*(?=#[^\s]+$)/, "")),
      r = o.data("bs.modal") ? "toggle" : t.extend({
        remote: !/#/.test(a) && a
      }, o.data(), n.data());
    n.is("a") && i.preventDefault(), o.one("show.bs.modal", function(t) {
      t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
        n.is(":visible") && n.trigger("focus")
      })
    }), e.call(o, r, this)
  })
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var n = t(this),
        a = n.data("bs.tooltip"),
        o = "object" == typeof e && e;
      (a || !/destroy|hide/.test(e)) && (a || n.data("bs.tooltip", a = new i(this, o)), "string" == typeof e && a[e]())
    })
  }
  var i = function(t, e) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", t, e)
  };
  i.VERSION = "3.3.4", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    }
  }, i.prototype.init = function(e, i, n) {
    if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var a = this.options.trigger.split(" "), o = a.length; o--;) {
      var r = a[o];
      if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
      else if ("manual" != r) {
        var s = "hover" == r ? "mouseenter" : "focusin",
          l = "hover" == r ? "mouseleave" : "focusout";
        this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
      }
    }
    this.options.selector ? this._options = t.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle()
  }, i.prototype.getDefaults = function() {
    return i.DEFAULTS
  }, i.prototype.getOptions = function(e) {
    return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
      show: e.delay,
      hide: e.delay
    }), e
  }, i.prototype.getDelegateOptions = function() {
    var e = {},
      i = this.getDefaults();
    return this._options && t.each(this._options, function(t, n) {
      i[t] != n && (e[t] = n)
    }), e
  }, i.prototype.enter = function(e) {
    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    return i && i.$tip && i.$tip.is(":visible") ? void(i.hoverState = "in") : (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
      "in" == i.hoverState && i.show()
    }, i.options.delay.show)) : i.show())
  }, i.prototype.leave = function(e) {
    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
      "out" == i.hoverState && i.hide()
    }, i.options.delay.hide)) : i.hide()
  }, i.prototype.show = function() {
    var e = t.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e);
      var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (e.isDefaultPrevented() || !n) return;
      var a = this,
        o = this.tip(),
        r = this.getUID(this.type);
      this.setContent(), o.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && o.addClass("fade");
      var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
        l = /\s?auto?\s?/i,
        d = l.test(s);
      d && (s = s.replace(l, "") || "top"), o.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element);
      var h = this.getPosition(),
        c = o[0].offsetWidth,
        u = o[0].offsetHeight;
      if (d) {
        var p = s,
          f = this.options.container ? t(this.options.container) : this.$element.parent(),
          g = this.getPosition(f);
        s = "bottom" == s && h.bottom + u > g.bottom ? "top" : "top" == s && h.top - u < g.top ? "bottom" : "right" == s && h.right + c > g.width ? "left" : "left" == s && h.left - c < g.left ? "right" : s, o.removeClass(p).addClass(s)
      }
      var m = this.getCalculatedOffset(s, h, c, u);
      this.applyPlacement(m, s);
      var v = function() {
        var t = a.hoverState;
        a.$element.trigger("shown.bs." + a.type), a.hoverState = null, "out" == t && a.leave(a)
      };
      t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", v).emulateTransitionEnd(i.TRANSITION_DURATION) : v()
    }
  }, i.prototype.applyPlacement = function(e, i) {
    var n = this.tip(),
      a = n[0].offsetWidth,
      o = n[0].offsetHeight,
      r = parseInt(n.css("margin-top"), 10),
      s = parseInt(n.css("margin-left"), 10);
    isNaN(r) && (r = 0), isNaN(s) && (s = 0), e.top = e.top + r, e.left = e.left + s, t.offset.setOffset(n[0], t.extend({
      using: function(t) {
        n.css({
          top: Math.round(t.top),
          left: Math.round(t.left)
        })
      }
    }, e), 0), n.addClass("in");
    var l = n[0].offsetWidth,
      d = n[0].offsetHeight;
    "top" == i && d != o && (e.top = e.top + o - d);
    var h = this.getViewportAdjustedDelta(i, e, l, d);
    h.left ? e.left += h.left : e.top += h.top;
    var c = /top|bottom/.test(i),
      u = c ? 2 * h.left - a + l : 2 * h.top - o + d,
      p = c ? "offsetWidth" : "offsetHeight";
    n.offset(e), this.replaceArrow(u, n[0][p], c)
  }, i.prototype.replaceArrow = function(t, e, i) {
    this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
  }, i.prototype.setContent = function() {
    var t = this.tip(),
      e = this.getTitle();
    t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
  }, i.prototype.hide = function(e) {
    function n() {
      "in" != a.hoverState && o.detach(), a.$element.removeAttr("aria-describedby").trigger("hidden.bs." + a.type), e && e()
    }
    var a = this,
      o = t(this.$tip),
      r = t.Event("hide.bs." + this.type);
    return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this)
  }, i.prototype.fixTitle = function() {
    var t = this.$element;
    (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
  }, i.prototype.hasContent = function() {
    return this.getTitle()
  }, i.prototype.getPosition = function(e) {
    e = e || this.$element;
    var i = e[0],
      n = "BODY" == i.tagName,
      a = i.getBoundingClientRect();
    null == a.width && (a = t.extend({}, a, {
      width: a.right - a.left,
      height: a.bottom - a.top
    }));
    var o = n ? {
        top: 0,
        left: 0
      } : e.offset(),
      r = {
        scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
      },
      s = n ? {
        width: t(window).width(),
        height: t(window).height()
      } : null;
    return t.extend({}, a, r, s, o)
  }, i.prototype.getCalculatedOffset = function(t, e, i, n) {
    return "bottom" == t ? {
      top: e.top + e.height,
      left: e.left + e.width / 2 - i / 2
    } : "top" == t ? {
      top: e.top - n,
      left: e.left + e.width / 2 - i / 2
    } : "left" == t ? {
      top: e.top + e.height / 2 - n / 2,
      left: e.left - i
    } : {
      top: e.top + e.height / 2 - n / 2,
      left: e.left + e.width
    }
  }, i.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
    var a = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return a;
    var o = this.options.viewport && this.options.viewport.padding || 0,
      r = this.getPosition(this.$viewport);
    if (/right|left/.test(t)) {
      var s = e.top - o - r.scroll,
        l = e.top + o - r.scroll + n;
      s < r.top ? a.top = r.top - s : l > r.top + r.height && (a.top = r.top + r.height - l)
    } else {
      var d = e.left - o,
        h = e.left + o + i;
      d < r.left ? a.left = r.left - d : h > r.width && (a.left = r.left + r.width - h)
    }
    return a
  }, i.prototype.getTitle = function() {
    var t, e = this.$element,
      i = this.options;
    return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
  }, i.prototype.getUID = function(t) {
    do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
    return t
  }, i.prototype.tip = function() {
    return this.$tip = this.$tip || t(this.options.template)
  }, i.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }, i.prototype.enable = function() {
    this.enabled = !0
  }, i.prototype.disable = function() {
    this.enabled = !1
  }, i.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
  }, i.prototype.toggle = function(e) {
    var i = this;
    e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
  }, i.prototype.destroy = function() {
    var t = this;
    clearTimeout(this.timeout), this.hide(function() {
      t.$element.off("." + t.type).removeData("bs." + t.type)
    })
  };
  var n = t.fn.tooltip;
  t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
    return t.fn.tooltip = n, this
  }
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var n = t(this),
        a = n.data("bs.popover"),
        o = "object" == typeof e && e;
      (a || !/destroy|hide/.test(e)) && (a || n.data("bs.popover", a = new i(this, o)), "string" == typeof e && a[e]())
    })
  }
  var i = function(t, e) {
    this.init("popover", t, e)
  };
  if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
  i.VERSION = "3.3.4", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
    return i.DEFAULTS
  }, i.prototype.setContent = function() {
    var t = this.tip(),
      e = this.getTitle(),
      i = this.getContent();
    t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
  }, i.prototype.hasContent = function() {
    return this.getTitle() || this.getContent()
  }, i.prototype.getContent = function() {
    var t = this.$element,
      e = this.options;
    return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
  }, i.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
  };
  var n = t.fn.popover;
  t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
    return t.fn.popover = n, this
  }
}(jQuery), + function(t) {
  "use strict";

  function e(i, n) {
    this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
  }

  function i(i) {
    return this.each(function() {
      var n = t(this),
        a = n.data("bs.scrollspy"),
        o = "object" == typeof i && i;
      a || n.data("bs.scrollspy", a = new e(this, o)), "string" == typeof i && a[i]()
    })
  }
  e.VERSION = "3.3.4", e.DEFAULTS = {
    offset: 10
  }, e.prototype.getScrollHeight = function() {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }, e.prototype.refresh = function() {
    var e = this,
      i = "offset",
      n = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
      var e = t(this),
        a = e.data("target") || e.attr("href"),
        o = /^#./.test(a) && t(a);
      return o && o.length && o.is(":visible") && [
        [o[i]().top + n, a]
      ] || null
    }).sort(function(t, e) {
      return t[0] - e[0]
    }).each(function() {
      e.offsets.push(this[0]), e.targets.push(this[1])
    })
  }, e.prototype.process = function() {
    var t, e = this.$scrollElement.scrollTop() + this.options.offset,
      i = this.getScrollHeight(),
      n = this.options.offset + i - this.$scrollElement.height(),
      a = this.offsets,
      o = this.targets,
      r = this.activeTarget;
    if (this.scrollHeight != i && this.refresh(), e >= n) return r != (t = o[o.length - 1]) && this.activate(t);
    if (r && e < a[0]) return this.activeTarget = null, this.clear();
    for (t = a.length; t--;) r != o[t] && e >= a[t] && (void 0 === a[t + 1] || e < a[t + 1]) && this.activate(o[t])
  }, e.prototype.activate = function(e) {
    this.activeTarget = e, this.clear();
    var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
      n = t(i).parents("li").addClass("active");
    n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
  }, e.prototype.clear = function() {
    t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
  };
  var n = t.fn.scrollspy;
  t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
    return t.fn.scrollspy = n, this
  }, t(window).on("load.bs.scrollspy.data-api", function() {
    t('[data-spy="scroll"]').each(function() {
      var e = t(this);
      i.call(e, e.data())
    })
  })
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var n = t(this),
        a = n.data("bs.tab");
      a || n.data("bs.tab", a = new i(this)), "string" == typeof e && a[e]()
    })
  }
  var i = function(e) {
    this.element = t(e)
  };
  i.VERSION = "3.3.4", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
    var e = this.element,
      i = e.closest("ul:not(.dropdown-menu)"),
      n = e.data("target");
    if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
      var a = i.find(".active:last a"),
        o = t.Event("hide.bs.tab", {
          relatedTarget: e[0]
        }),
        r = t.Event("show.bs.tab", {
          relatedTarget: a[0]
        });
      if (a.trigger(o), e.trigger(r), !r.isDefaultPrevented() && !o.isDefaultPrevented()) {
        var s = t(n);
        this.activate(e.closest("li"), i), this.activate(s, s.parent(), function() {
          a.trigger({
            type: "hidden.bs.tab",
            relatedTarget: e[0]
          }), e.trigger({
            type: "shown.bs.tab",
            relatedTarget: a[0]
          })
        })
      }
    }
  }, i.prototype.activate = function(e, n, a) {
    function o() {
      r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), a && a()
    }
    var r = n.find("> .active"),
      s = a && t.support.transition && (r.length && r.hasClass("fade") || !!n.find("> .fade").length);
    r.length && s ? r.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), r.removeClass("in")
  };
  var n = t.fn.tab;
  t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
    return t.fn.tab = n, this
  };
  var a = function(i) {
    i.preventDefault(), e.call(t(this), "show")
  };
  t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', a).on("click.bs.tab.data-api", '[data-toggle="pill"]', a)
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var n = t(this),
        a = n.data("bs.affix"),
        o = "object" == typeof e && e;
      a || n.data("bs.affix", a = new i(this, o)), "string" == typeof e && a[e]()
    })
  }
  var i = function(e, n) {
    this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
  };
  i.VERSION = "3.3.4", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
    offset: 0,
    target: window
  }, i.prototype.getState = function(t, e, i, n) {
    var a = this.$target.scrollTop(),
      o = this.$element.offset(),
      r = this.$target.height();
    if (null != i && "top" == this.affixed) return i > a ? "top" : !1;
    if ("bottom" == this.affixed) return null != i ? a + this.unpin <= o.top ? !1 : "bottom" : t - n >= a + r ? !1 : "bottom";
    var s = null == this.affixed,
      l = s ? a : o.top,
      d = s ? r : e;
    return null != i && i >= a ? "top" : null != n && l + d >= t - n ? "bottom" : !1
  }, i.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(i.RESET).addClass("affix");
    var t = this.$target.scrollTop(),
      e = this.$element.offset();
    return this.pinnedOffset = e.top - t
  }, i.prototype.checkPositionWithEventLoop = function() {
    setTimeout(t.proxy(this.checkPosition, this), 1)
  }, i.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
      var e = this.$element.height(),
        n = this.options.offset,
        a = n.top,
        o = n.bottom,
        r = t(document.body).height();
      "object" != typeof n && (o = a = n), "function" == typeof a && (a = n.top(this.$element)), "function" == typeof o && (o = n.bottom(this.$element));
      var s = this.getState(r, e, a, o);
      if (this.affixed != s) {
        null != this.unpin && this.$element.css("top", "");
        var l = "affix" + (s ? "-" + s : ""),
          d = t.Event(l + ".bs.affix");
        if (this.$element.trigger(d), d.isDefaultPrevented()) return;
        this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
      }
      "bottom" == s && this.$element.offset({
        top: r - e - o
      })
    }
  };
  var n = t.fn.affix;
  t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
    return t.fn.affix = n, this
  }, t(window).on("load", function() {
    t('[data-spy="affix"]').each(function() {
      var i = t(this),
        n = i.data();
      n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
    })
  })
}(jQuery),
/* =========================================================
 * bootstrap-datepicker.js
 * Repo: https://github.com/eternicode/bootstrap-datepicker/
 * Demo: http://eternicode.github.io/bootstrap-datepicker/
 * Docs: http://bootstrap-datepicker.readthedocs.org/
 * Forked from http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Started by Stefan Petre; improvements by Andrew Rowls + contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
function(t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function(t, e) {
  function i() {
    return new Date(Date.UTC.apply(Date, arguments))
  }

  function n() {
    var t = new Date;
    return i(t.getFullYear(), t.getMonth(), t.getDate())
  }

  function a(t, e) {
    return t.getUTCFullYear() === e.getUTCFullYear() && t.getUTCMonth() === e.getUTCMonth() && t.getUTCDate() === e.getUTCDate()
  }

  function o(t) {
    return function() {
      return this[t].apply(this, arguments)
    }
  }

  function r(t) {
    return t && !isNaN(t.getTime())
  }

  function s(e, i) {
    function n(t, e) {
      return e.toLowerCase()
    }
    var a, o = t(e).data(),
      r = {},
      s = new RegExp("^" + i.toLowerCase() + "([A-Z])");
    i = new RegExp("^" + i.toLowerCase());
    for (var l in o) i.test(l) && (a = l.replace(s, n), r[a] = o[l]);
    return r
  }

  function l(e) {
    var i = {};
    if (m[e] || (e = e.split("-")[0], m[e])) {
      var n = m[e];
      return t.each(g, function(t, e) {
        e in n && (i[e] = n[e])
      }), i
    }
  }
  var d = function() {
      var e = {
        get: function(t) {
          return this.slice(t)[0]
        },
        contains: function(t) {
          for (var e = t && t.valueOf(), i = 0, n = this.length; n > i; i++)
            if (this[i].valueOf() === e) return i;
          return -1
        },
        remove: function(t) {
          this.splice(t, 1)
        },
        replace: function(e) {
          e && (t.isArray(e) || (e = [e]), this.clear(), this.push.apply(this, e))
        },
        clear: function() {
          this.length = 0
        },
        copy: function() {
          var t = new d;
          return t.replace(this), t
        }
      };
      return function() {
        var i = [];
        return i.push.apply(i, arguments), t.extend(i, e), i
      }
    }(),
    h = function(e, i) {
      this._process_options(i), this.dates = new d, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = t(e), this.isInline = !1, this.isInput = this.element.is("input"), this.component = this.element.hasClass("date") ? this.element.find(".add-on, .input-group-addon, .btn") : !1, this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = t(v.template), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("tfoot .today, tfoot .clear").attr("colspan", function(t, e) {
        return parseInt(e) + 1
      }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted), this.setDatesDisabled(this.o.datesDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
    };
  h.prototype = {
    constructor: h,
    _process_options: function(a) {
      this._o = t.extend({}, this._o, a);
      var o = this.o = t.extend({}, this._o),
        r = o.language;
      switch (m[r] || (r = r.split("-")[0], m[r] || (r = f.language)), o.language = r, o.startView) {
        case 2:
        case "decade":
          o.startView = 2;
          break;
        case 1:
        case "year":
          o.startView = 1;
          break;
        default:
          o.startView = 0
      }
      switch (o.minViewMode) {
        case 1:
        case "months":
          o.minViewMode = 1;
          break;
        case 2:
        case "years":
          o.minViewMode = 2;
          break;
        default:
          o.minViewMode = 0
      }
      switch (o.maxViewMode) {
        case 0:
        case "days":
          o.maxViewMode = 0;
          break;
        case 1:
        case "months":
          o.maxViewMode = 1;
          break;
        default:
          o.maxViewMode = 2
      }
      o.startView = Math.min(o.startView, o.maxViewMode), o.startView = Math.max(o.startView, o.minViewMode), o.multidate !== !0 && (o.multidate = Number(o.multidate) || !1, o.multidate !== !1 && (o.multidate = Math.max(0, o.multidate))), o.multidateSeparator = String(o.multidateSeparator), o.weekStart %= 7, o.weekEnd = (o.weekStart + 6) % 7;
      var s = v.parseFormat(o.format);
      if (o.startDate !== -(1 / 0) && (o.startDate ? o.startDate instanceof Date ? o.startDate = this._local_to_utc(this._zero_time(o.startDate)) : o.startDate = v.parseDate(o.startDate, s, o.language) : o.startDate = -(1 / 0)), o.endDate !== 1 / 0 && (o.endDate ? o.endDate instanceof Date ? o.endDate = this._local_to_utc(this._zero_time(o.endDate)) : o.endDate = v.parseDate(o.endDate, s, o.language) : o.endDate = 1 / 0), o.daysOfWeekDisabled = o.daysOfWeekDisabled || [], t.isArray(o.daysOfWeekDisabled) || (o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/)), o.daysOfWeekDisabled = t.map(o.daysOfWeekDisabled, function(t) {
          return parseInt(t, 10)
        }), o.daysOfWeekHighlighted = o.daysOfWeekHighlighted || [], t.isArray(o.daysOfWeekHighlighted) || (o.daysOfWeekHighlighted = o.daysOfWeekHighlighted.split(/[,\s]*/)), o.daysOfWeekHighlighted = t.map(o.daysOfWeekHighlighted, function(t) {
          return parseInt(t, 10)
        }), o.datesDisabled = o.datesDisabled || [], !t.isArray(o.datesDisabled)) {
        var l = [];
        l.push(v.parseDate(o.datesDisabled, s, o.language)), o.datesDisabled = l
      }
      o.datesDisabled = t.map(o.datesDisabled, function(t) {
        return v.parseDate(t, s, o.language)
      });
      var d = String(o.orientation).toLowerCase().split(/\s+/g),
        h = o.orientation.toLowerCase();
      if (d = t.grep(d, function(t) {
          return /^auto|left|right|top|bottom$/.test(t)
        }), o.orientation = {
          x: "auto",
          y: "auto"
        }, h && "auto" !== h)
        if (1 === d.length) switch (d[0]) {
          case "top":
          case "bottom":
            o.orientation.y = d[0];
            break;
          case "left":
          case "right":
            o.orientation.x = d[0]
        } else h = t.grep(d, function(t) {
          return /^left|right$/.test(t)
        }), o.orientation.x = h[0] || "auto", h = t.grep(d, function(t) {
          return /^top|bottom$/.test(t)
        }), o.orientation.y = h[0] || "auto";
        else;
      if (o.defaultViewDate) {
        var c = o.defaultViewDate.year || (new Date).getFullYear(),
          u = o.defaultViewDate.month || 0,
          p = o.defaultViewDate.day || 1;
        o.defaultViewDate = i(c, u, p)
      } else o.defaultViewDate = n();
      o.showOnFocus = o.showOnFocus !== e ? o.showOnFocus : !0, o.zIndexOffset = o.zIndexOffset !== e ? o.zIndexOffset : 10
    },
    _events: [],
    _secondaryEvents: [],
    _applyEvents: function(t) {
      for (var i, n, a, o = 0; o < t.length; o++) i = t[o][0], 2 === t[o].length ? (n = e, a = t[o][1]) : 3 === t[o].length && (n = t[o][1], a = t[o][2]), i.on(a, n)
    },
    _unapplyEvents: function(t) {
      for (var i, n, a, o = 0; o < t.length; o++) i = t[o][0], 2 === t[o].length ? (a = e, n = t[o][1]) : 3 === t[o].length && (a = t[o][1], n = t[o][2]), i.off(n, a)
    },
    _buildEvents: function() {
      var e = {
        keyup: t.proxy(function(e) {
          -1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
        }, this),
        keydown: t.proxy(this.keydown, this),
        paste: t.proxy(this.paste, this)
      };
      this.o.showOnFocus === !0 && (e.focus = t.proxy(this.show, this)), this.isInput ? this._events = [
        [this.element, e]
      ] : this.component && this.hasInput ? this._events = [
        [this.element.find("input"), e],
        [this.component, {
          click: t.proxy(this.show, this)
        }]
      ] : this.element.is("div") ? this.isInline = !0 : this._events = [
        [this.element, {
          click: t.proxy(this.show, this)
        }]
      ], this._events.push([this.element, "*", {
        blur: t.proxy(function(t) {
          this._focused_from = t.target
        }, this)
      }], [this.element, {
        blur: t.proxy(function(t) {
          this._focused_from = t.target
        }, this)
      }]), this.o.immediateUpdates && this._events.push([this.element, {
        "changeYear changeMonth": t.proxy(function(t) {
          this.update(t.date)
        }, this)
      }]), this._secondaryEvents = [
        [this.picker, {
          click: t.proxy(this.click, this)
        }],
        [t(window), {
          resize: t.proxy(this.place, this)
        }],
        [t(document), {
          mousedown: t.proxy(function(t) {
            this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.picker.hasClass("datepicker-inline") || this.hide()
          }, this)
        }]
      ]
    },
    _attachEvents: function() {
      this._detachEvents(), this._applyEvents(this._events)
    },
    _detachEvents: function() {
      this._unapplyEvents(this._events)
    },
    _attachSecondaryEvents: function() {
      this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
    },
    _detachSecondaryEvents: function() {
      this._unapplyEvents(this._secondaryEvents)
    },
    _trigger: function(e, i) {
      var n = i || this.dates.get(-1),
        a = this._utc_to_local(n);
      this.element.trigger({
        type: e,
        date: a,
        dates: t.map(this.dates, this._utc_to_local),
        format: t.proxy(function(t, e) {
          0 === arguments.length ? (t = this.dates.length - 1, e = this.o.format) : "string" == typeof t && (e = t, t = this.dates.length - 1), e = e || this.o.format;
          var i = this.dates.get(t);
          return v.formatDate(i, e, this.o.language)
        }, this)
      })
    },
    show: function() {
      return this.element.attr("readonly") && this.o.enableOnReadonly === !1 ? void 0 : (this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && t(this.element).blur(), this)
    },
    hide: function() {
      return this.isInline ? this : this.picker.is(":visible") ? (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"), this) : this
    },
    remove: function() {
      return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this
    },
    paste: function(e) {
      var i;
      if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.types && -1 !== t.inArray("text/plain", e.originalEvent.clipboardData.types)) i = e.originalEvent.clipboardData.getData("text/plain");
      else {
        if (!window.clipboardData) return;
        i = window.clipboardData.getData("Text")
      }
      this.setDate(i), this.update(), e.preventDefault()
    },
    _utc_to_local: function(t) {
      return t && new Date(t.getTime() + 6e4 * t.getTimezoneOffset())
    },
    _local_to_utc: function(t) {
      return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset())
    },
    _zero_time: function(t) {
      return t && new Date(t.getFullYear(), t.getMonth(), t.getDate())
    },
    _zero_utc_time: function(t) {
      return t && new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()))
    },
    getDates: function() {
      return t.map(this.dates, this._utc_to_local)
    },
    getUTCDates: function() {
      return t.map(this.dates, function(t) {
        return new Date(t)
      })
    },
    getDate: function() {
      return this._utc_to_local(this.getUTCDate())
    },
    getUTCDate: function() {
      var t = this.dates.get(-1);
      return "undefined" != typeof t ? new Date(t) : null
    },
    clearDates: function() {
      var t;
      this.isInput ? t = this.element : this.component && (t = this.element.find("input")), t && t.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
    },
    setDates: function() {
      var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
      return this.update.apply(this, e), this._trigger("changeDate"), this.setValue(), this
    },
    setUTCDates: function() {
      var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
      return this.update.apply(this, t.map(e, this._utc_to_local)), this._trigger("changeDate"), this.setValue(), this
    },
    setDate: o("setDates"),
    setUTCDate: o("setUTCDates"),
    setValue: function() {
      var t = this.getFormattedDate();
      return this.isInput ? this.element.val(t) : this.component && this.element.find("input").val(t), this
    },
    getFormattedDate: function(i) {
      i === e && (i = this.o.format);
      var n = this.o.language;
      return t.map(this.dates, function(t) {
        return v.formatDate(t, i, n)
      }).join(this.o.multidateSeparator)
    },
    setStartDate: function(t) {
      return this._process_options({
        startDate: t
      }), this.update(), this.updateNavArrows(), this
    },
    setEndDate: function(t) {
      return this._process_options({
        endDate: t
      }), this.update(), this.updateNavArrows(), this
    },
    setDaysOfWeekDisabled: function(t) {
      return this._process_options({
        daysOfWeekDisabled: t
      }), this.update(), this.updateNavArrows(), this
    },
    setDaysOfWeekHighlighted: function(t) {
      return this._process_options({
        daysOfWeekHighlighted: t
      }), this.update(), this
    },
    setDatesDisabled: function(t) {
      this._process_options({
        datesDisabled: t
      }), this.update(), this.updateNavArrows()
    },
    place: function() {
      if (this.isInline) return this;
      var e = this.picker.outerWidth(),
        i = this.picker.outerHeight(),
        n = 10,
        a = t(this.o.container),
        o = a.width(),
        r = a.scrollTop(),
        s = a.offset(),
        l = [];
      this.element.parents().each(function() {
        var e = t(this).css("z-index");
        "auto" !== e && 0 !== e && l.push(parseInt(e))
      });
      var d = Math.max.apply(Math, l) + this.o.zIndexOffset,
        h = this.component ? this.component.parent().offset() : this.element.offset(),
        c = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
        u = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
        p = h.left - s.left,
        f = h.top - s.top;
      this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (p -= e - u)) : h.left < 0 ? (this.picker.addClass("datepicker-orient-left"), p -= h.left - n) : p + e > o ? (this.picker.addClass("datepicker-orient-right"), p = h.left + u - e) : this.picker.addClass("datepicker-orient-left");
      var g, m = this.o.orientation.y;
      if ("auto" === m && (g = -r + f - i, m = 0 > g ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + m), "top" === m ? f -= i + parseInt(this.picker.css("padding-top")) : f += c, this.o.rtl) {
        var v = o - (p + u);
        this.picker.css({
          top: f,
          right: v,
          zIndex: d
        })
      } else this.picker.css({
        top: f,
        left: p,
        zIndex: d
      });
      return this
    },
    _allow_update: !0,
    update: function() {
      if (!this._allow_update) return this;
      var e = this.dates.copy(),
        i = [],
        n = !1;
      return arguments.length ? (t.each(arguments, t.proxy(function(t, e) {
        e instanceof Date && (e = this._local_to_utc(e)), i.push(e)
      }, this)), n = !0) : (i = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), i = i && this.o.multidate ? i.split(this.o.multidateSeparator) : [i], delete this.element.data().date), i = t.map(i, t.proxy(function(t) {
        return v.parseDate(t, this.o.format, this.o.language)
      }, this)), i = t.grep(i, t.proxy(function(t) {
        return t < this.o.startDate || t > this.o.endDate || !t
      }, this), !0), this.dates.replace(i), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate, n ? this.setValue() : i.length && String(e) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && e.length && this._trigger("clearDate"), this.fill(), this.element.change(), this
    },
    fillDow: function() {
      var t = this.o.weekStart,
        e = "<tr>";
      for (this.o.calendarWeeks && (this.picker.find(".datepicker-days .datepicker-switch").attr("colspan", function(t, e) {
          return parseInt(e) + 1
        }), e += '<th class="cw">&#160;</th>'); t < this.o.weekStart + 7;) e += '<th class="dow">' + m[this.o.language].daysMin[t++ % 7] + "</th>";
      e += "</tr>", this.picker.find(".datepicker-days thead").append(e)
    },
    fillMonths: function() {
      for (var t = "", e = 0; 12 > e;) t += '<span class="month">' + m[this.o.language].monthsShort[e++] + "</span>";
      this.picker.find(".datepicker-months td").html(t)
    },
    setRange: function(e) {
      e && e.length ? this.range = t.map(e, function(t) {
        return t.valueOf()
      }) : delete this.range, this.fill()
    },
    getClassNames: function(e) {
      var i = [],
        n = this.viewDate.getUTCFullYear(),
        o = this.viewDate.getUTCMonth(),
        r = new Date;
      return e.getUTCFullYear() < n || e.getUTCFullYear() === n && e.getUTCMonth() < o ? i.push("old") : (e.getUTCFullYear() > n || e.getUTCFullYear() === n && e.getUTCMonth() > o) && i.push("new"), this.focusDate && e.valueOf() === this.focusDate.valueOf() && i.push("focused"), this.o.todayHighlight && e.getUTCFullYear() === r.getFullYear() && e.getUTCMonth() === r.getMonth() && e.getUTCDate() === r.getDate() && i.push("today"), -1 !== this.dates.contains(e) && i.push("active"), (e.valueOf() < this.o.startDate || e.valueOf() > this.o.endDate || -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled)) && i.push("disabled"), -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekHighlighted) && i.push("highlighted"), this.o.datesDisabled.length > 0 && t.grep(this.o.datesDisabled, function(t) {
        return a(e, t)
      }).length > 0 && i.push("disabled", "disabled-date"), this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && i.push("range"), -1 !== t.inArray(e.valueOf(), this.range) && i.push("selected"), e.valueOf() === this.range[0] && i.push("range-start"), e.valueOf() === this.range[this.range.length - 1] && i.push("range-end")), i
    },
    fill: function() {
      var n, a = new Date(this.viewDate),
        o = a.getUTCFullYear(),
        r = a.getUTCMonth(),
        s = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0),
        l = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0),
        d = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
        h = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
        c = m[this.o.language].today || m.en.today || "",
        u = m[this.o.language].clear || m.en.clear || "",
        p = m[this.o.language].titleFormat || m.en.titleFormat;
      if (!isNaN(o) && !isNaN(r)) {
        this.picker.find(".datepicker-days thead .datepicker-switch").text(v.formatDate(new i(o, r), p, this.o.language)), this.picker.find("tfoot .today").text(c).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot .clear").text(u).toggle(this.o.clearBtn !== !1), this.picker.find("thead .datepicker-title").text(this.o.title).toggle("" !== this.o.title), this.updateNavArrows(), this.fillMonths();
        var f = i(o, r - 1, 28),
          g = v.getDaysInMonth(f.getUTCFullYear(), f.getUTCMonth());
        f.setUTCDate(g), f.setUTCDate(g - (f.getUTCDay() - this.o.weekStart + 7) % 7);
        var b = new Date(f);
        f.getUTCFullYear() < 100 && b.setUTCFullYear(f.getUTCFullYear()), b.setUTCDate(b.getUTCDate() + 42), b = b.valueOf();
        for (var y, x = []; f.valueOf() < b;) {
          if (f.getUTCDay() === this.o.weekStart && (x.push("<tr>"), this.o.calendarWeeks)) {
            var w = new Date(+f + (this.o.weekStart - f.getUTCDay() - 7) % 7 * 864e5),
              k = new Date(Number(w) + (11 - w.getUTCDay()) % 7 * 864e5),
              C = new Date(Number(C = i(k.getUTCFullYear(), 0, 1)) + (11 - C.getUTCDay()) % 7 * 864e5),
              D = (k - C) / 864e5 / 7 + 1;
            x.push('<td class="cw">' + D + "</td>")
          }
          if (y = this.getClassNames(f), y.push("day"), this.o.beforeShowDay !== t.noop) {
            var S = this.o.beforeShowDay(this._utc_to_local(f));
            S === e ? S = {} : "boolean" == typeof S ? S = {
              enabled: S
            } : "string" == typeof S && (S = {
              classes: S
            }), S.enabled === !1 && y.push("disabled"), S.classes && (y = y.concat(S.classes.split(/\s+/))), S.tooltip && (n = S.tooltip)
          }
          y = t.unique(y), x.push('<td class="' + y.join(" ") + '"' + (n ? ' title="' + n + '"' : "") + ">" + f.getUTCDate() + "</td>"), n = null, f.getUTCDay() === this.o.weekEnd && x.push("</tr>"), f.setUTCDate(f.getUTCDate() + 1)
        }
        this.picker.find(".datepicker-days tbody").empty().append(x.join(""));
        var T = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? "Months" : o).end().find("span").removeClass("active");
        if (t.each(this.dates, function(t, e) {
            e.getUTCFullYear() === o && T.eq(e.getUTCMonth()).addClass("active")
          }), (s > o || o > d) && T.addClass("disabled"), o === s && T.slice(0, l).addClass("disabled"), o === d && T.slice(h + 1).addClass("disabled"), this.o.beforeShowMonth !== t.noop) {
          var M = this;
          t.each(T, function(e, i) {
            if (!t(i).hasClass("disabled")) {
              var n = new Date(o, e, 1),
                a = M.o.beforeShowMonth(n);
              a === !1 && t(i).addClass("disabled")
            }
          })
        }
        x = "", o = 10 * parseInt(o / 10, 10);
        var F = this.picker.find(".datepicker-years").find(".datepicker-switch").text(o + "-" + (o + 9)).end().find("td");
        o -= 1;
        for (var A, _ = t.map(this.dates, function(t) {
            return t.getUTCFullYear()
          }), I = -1; 11 > I; I++) {
          if (A = ["year"], n = null, -1 === I ? A.push("old") : 10 === I && A.push("new"), -1 !== t.inArray(o, _) && A.push("active"), (s > o || o > d) && A.push("disabled"), this.o.beforeShowYear !== t.noop) {
            var P = this.o.beforeShowYear(new Date(o, 0, 1));
            P === e ? P = {} : "boolean" == typeof P ? P = {
              enabled: P
            } : "string" == typeof P && (P = {
              classes: P
            }), P.enabled === !1 && A.push("disabled"), P.classes && (A = A.concat(P.classes.split(/\s+/))), P.tooltip && (n = P.tooltip)
          }
          x += '<span class="' + A.join(" ") + '"' + (n ? ' title="' + n + '"' : "") + ">" + o + "</span>", o += 1
        }
        F.html(x)
      }
    },
    updateNavArrows: function() {
      if (this._allow_update) {
        var t = new Date(this.viewDate),
          e = t.getUTCFullYear(),
          i = t.getUTCMonth();
        switch (this.viewMode) {
          case 0:
            this.o.startDate !== -(1 / 0) && e <= this.o.startDate.getUTCFullYear() && i <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({
              visibility: "hidden"
            }) : this.picker.find(".prev").css({
              visibility: "visible"
            }), this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() && i >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({
              visibility: "hidden"
            }) : this.picker.find(".next").css({
              visibility: "visible"
            });
            break;
          case 1:
          case 2:
            this.o.startDate !== -(1 / 0) && e <= this.o.startDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".prev").css({
              visibility: "hidden"
            }) : this.picker.find(".prev").css({
              visibility: "visible"
            }), this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".next").css({
              visibility: "hidden"
            }) : this.picker.find(".next").css({
              visibility: "visible"
            })
        }
      }
    },
    click: function(e) {
      e.preventDefault(), e.stopPropagation();
      var n, a, o, r = t(e.target).closest("span, td, th");
      if (1 === r.length) switch (r[0].nodeName.toLowerCase()) {
        case "th":
          switch (r[0].className) {
            case "datepicker-switch":
              this.showMode(1);
              break;
            case "prev":
            case "next":
              var s = v.modes[this.viewMode].navStep * ("prev" === r[0].className ? -1 : 1);
              switch (this.viewMode) {
                case 0:
                  this.viewDate = this.moveMonth(this.viewDate, s), this._trigger("changeMonth", this.viewDate);
                  break;
                case 1:
                case 2:
                  this.viewDate = this.moveYear(this.viewDate, s), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)
              }
              this.fill();
              break;
            case "today":
              var l = new Date;
              l = i(l.getFullYear(), l.getMonth(), l.getDate(), 0, 0, 0), this.showMode(-2);
              var d = "linked" === this.o.todayBtn ? null : "view";
              this._setDate(l, d);
              break;
            case "clear":
              this.clearDates()
          }
          break;
        case "span":
          r.hasClass("disabled") || (this.viewDate.setUTCDate(1), r.hasClass("month") ? (o = 1, a = r.parent().find("span").index(r), n = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(a), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode ? (this._setDate(i(n, a, o)), this.showMode()) : this.showMode(-1)) : (o = 1, a = 0, n = parseInt(r.text(), 10) || 0, this.viewDate.setUTCFullYear(n), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(i(n, a, o)), this.showMode(-1)), this.fill());
          break;
        case "td":
          r.hasClass("day") && !r.hasClass("disabled") && (o = parseInt(r.text(), 10) || 1, n = this.viewDate.getUTCFullYear(), a = this.viewDate.getUTCMonth(), r.hasClass("old") ? 0 === a ? (a = 11, n -= 1) : a -= 1 : r.hasClass("new") && (11 === a ? (a = 0, n += 1) : a += 1), this._setDate(i(n, a, o)))
      }
      this.picker.is(":visible") && this._focused_from && t(this._focused_from).focus(), delete this._focused_from
    },
    _toggle_multidate: function(t) {
      var e = this.dates.contains(t);
      if (t || this.dates.clear(), -1 !== e ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(e) : this.o.multidate === !1 ? (this.dates.clear(), this.dates.push(t)) : this.dates.push(t), "number" == typeof this.o.multidate)
        for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
    },
    _setDate: function(t, e) {
      e && "date" !== e || this._toggle_multidate(t && new Date(t)), e && "view" !== e || (this.viewDate = t && new Date(t)), this.fill(), this.setValue(), e && "view" === e || this._trigger("changeDate");
      var i;
      this.isInput ? i = this.element : this.component && (i = this.element.find("input")), i && i.change(), !this.o.autoclose || e && "date" !== e || this.hide()
    },
    moveMonth: function(t, e) {
      if (!r(t)) return this.o.defaultViewDate;
      if (!e) return t;
      var i, n, a = new Date(t.valueOf()),
        o = a.getUTCDate(),
        s = a.getUTCMonth(),
        l = Math.abs(e);
      if (e = e > 0 ? 1 : -1, 1 === l) n = -1 === e ? function() {
        return a.getUTCMonth() === s
      } : function() {
        return a.getUTCMonth() !== i
      }, i = s + e, a.setUTCMonth(i), (0 > i || i > 11) && (i = (i + 12) % 12);
      else {
        for (var d = 0; l > d; d++) a = this.moveMonth(a, e);
        i = a.getUTCMonth(), a.setUTCDate(o), n = function() {
          return i !== a.getUTCMonth()
        }
      }
      for (; n();) a.setUTCDate(--o), a.setUTCMonth(i);
      return a
    },
    moveYear: function(t, e) {
      return this.moveMonth(t, 12 * e)
    },
    dateWithinRange: function(t) {
      return t >= this.o.startDate && t <= this.o.endDate
    },
    keydown: function(t) {
      if (!this.picker.is(":visible")) return void((40 === t.keyCode || 27 === t.keyCode) && (this.show(), t.stopPropagation()));
      var e, i, a, o = !1,
        r = this.focusDate || this.viewDate;
      switch (t.keyCode) {
        case 27:
          this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), t.preventDefault(), t.stopPropagation();
          break;
        case 37:
        case 39:
          if (!this.o.keyboardNavigation) break;
          e = 37 === t.keyCode ? -1 : 1, t.ctrlKey ? (i = this.moveYear(this.dates.get(-1) || n(), e), a = this.moveYear(r, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveMonth(this.dates.get(-1) || n(), e), a = this.moveMonth(r, e), this._trigger("changeMonth", this.viewDate)) : (i = new Date(this.dates.get(-1) || n()), i.setUTCDate(i.getUTCDate() + e), a = new Date(r), a.setUTCDate(r.getUTCDate() + e)), this.dateWithinRange(a) && (this.focusDate = this.viewDate = a, this.setValue(), this.fill(), t.preventDefault());
          break;
        case 38:
        case 40:
          if (!this.o.keyboardNavigation) break;
          e = 38 === t.keyCode ? -1 : 1, t.ctrlKey ? (i = this.moveYear(this.dates.get(-1) || n(), e), a = this.moveYear(r, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveMonth(this.dates.get(-1) || n(), e), a = this.moveMonth(r, e), this._trigger("changeMonth", this.viewDate)) : (i = new Date(this.dates.get(-1) || n()), i.setUTCDate(i.getUTCDate() + 7 * e), a = new Date(r), a.setUTCDate(r.getUTCDate() + 7 * e)), this.dateWithinRange(a) && (this.focusDate = this.viewDate = a, this.setValue(), this.fill(), t.preventDefault());
          break;
        case 32:
          break;
        case 13:
          if (!this.o.forceParse) break;
          r = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(r), o = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (t.preventDefault(), "function" == typeof t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, this.o.autoclose && this.hide());
          break;
        case 9:
          this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
      }
      if (o) {
        this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate");
        var s;
        this.isInput ? s = this.element : this.component && (s = this.element.find("input")), s && s.change()
      }
    },
    showMode: function(t) {
      t && (this.viewMode = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, this.viewMode + t))), this.picker.children("div").hide().filter(".datepicker-" + v.modes[this.viewMode].clsName).show(), this.updateNavArrows()
    }
  };
  var c = function(e, i) {
    this.element = t(e), this.inputs = t.map(i.inputs, function(t) {
      return t.jquery ? t[0] : t
    }), delete i.inputs, p.call(t(this.inputs), i).on("changeDate", t.proxy(this.dateUpdated, this)), this.pickers = t.map(this.inputs, function(e) {
      return t(e).data("datepicker")
    }), this.updateDates()
  };
  c.prototype = {
    updateDates: function() {
      this.dates = t.map(this.pickers, function(t) {
        return t.getUTCDate()
      }), this.updateRanges()
    },
    updateRanges: function() {
      var e = t.map(this.dates, function(t) {
        return t.valueOf()
      });
      t.each(this.pickers, function(t, i) {
        i.setRange(e)
      })
    },
    dateUpdated: function(e) {
      if (!this.updating) {
        this.updating = !0;
        var i = t(e.target).data("datepicker");
        if ("undefined" != typeof i) {
          var n = i.getUTCDate(),
            a = t.inArray(e.target, this.inputs),
            o = a - 1,
            r = a + 1,
            s = this.inputs.length;
          if (-1 !== a) {
            if (t.each(this.pickers, function(t, e) {
                e.getUTCDate() || e.setUTCDate(n)
              }), n < this.dates[o])
              for (; o >= 0 && n < this.dates[o];) this.pickers[o--].setUTCDate(n);
            else if (n > this.dates[r])
              for (; s > r && n > this.dates[r];) this.pickers[r++].setUTCDate(n);
            this.updateDates(), delete this.updating
          }
        }
      }
    },
    remove: function() {
      t.map(this.pickers, function(t) {
        t.remove()
      }), delete this.element.data().datepicker
    }
  };
  var u = t.fn.datepicker,
    p = function(i) {
      var n = Array.apply(null, arguments);
      n.shift();
      var a;
      return this.each(function() {
        var o = t(this),
          r = o.data("datepicker"),
          d = "object" == typeof i && i;
        if (!r) {
          var u = s(this, "date"),
            p = t.extend({}, f, u, d),
            g = l(p.language),
            m = t.extend({}, f, g, u, d);
          if (o.hasClass("input-daterange") || m.inputs) {
            var v = {
              inputs: m.inputs || o.find("input").toArray()
            };
            o.data("datepicker", r = new c(this, t.extend(m, v)))
          } else o.data("datepicker", r = new h(this, m))
        }
        return "string" == typeof i && "function" == typeof r[i] && (a = r[i].apply(r, n), a !== e) ? !1 : void 0
      }), a !== e ? a : this
    };
  t.fn.datepicker = p;
  var f = t.fn.datepicker.defaults = {
      autoclose: !0,
      beforeShowDay: t.noop,
      beforeShowMonth: t.noop,
      beforeShowYear: t.noop,
      calendarWeeks: !1,
      clearBtn: !1,
      toggleActive: !1,
      daysOfWeekDisabled: [],
      daysOfWeekHighlighted: [],
      datesDisabled: [],
      endDate: 1 / 0,
      forceParse: !0,
      format: "yyyy-mm-dd",
      keyboardNavigation: !0,
      language: "pt",
      minViewMode: 0,
      maxViewMode: 2,
      multidate: !1,
      multidateSeparator: ",",
      orientation: "bottom auto",
      rtl: !1,
      startView: 0,
      todayBtn: !1,
      todayHighlight: !0,
      weekStart: 0,
      disableTouchKeyboard: !1,
      enableOnReadonly: !0,
      container: "body",
      immediateUpdates: !1,
      title: ""
    },
    g = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
  t.fn.datepicker.Constructor = h;
  var m = t.fn.datepicker.dates = {
    en: {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      today: "Today",
      clear: "Clear",
      titleFormat: "MM yyyy"
    }
  };
  ! function(t) {
    t.fn.datepicker.dates.pt = {
      days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
      daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
      daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
      months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
      today: "Hoje",
      clear: "Limpar"
    }
  }(jQuery);
  var v = {
    modes: [{
      clsName: "days",
      navFnc: "Month",
      navStep: 1
    }, {
      clsName: "months",
      navFnc: "FullYear",
      navStep: 1
    }, {
      clsName: "years",
      navFnc: "FullYear",
      navStep: 10
    }],
    isLeapYear: function(t) {
      return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
    },
    getDaysInMonth: function(t, e) {
      return [31, v.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
    },
    validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
    nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
    parseFormat: function(t) {
      var e = t.replace(this.validParts, "\x00").split("\x00"),
        i = t.match(this.validParts);
      if (!e || !e.length || !i || 0 === i.length) throw new Error("Invalid date format.");
      return {
        separators: e,
        parts: i
      }
    },
    parseDate: function(n, a, o) {
      function r() {
        var t = this.slice(0, u[d].length),
          e = u[d].slice(0, t.length);
        return t.toLowerCase() === e.toLowerCase()
      }
      if (!n) return e;
      if (n instanceof Date) return n;
      "string" == typeof a && (a = v.parseFormat(a));
      var s, l, d, c = /([\-+]\d+)([dmwy])/,
        u = n.match(/([\-+]\d+)([dmwy])/g);
      if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(n)) {
        for (n = new Date, d = 0; d < u.length; d++) switch (s = c.exec(u[d]), l = parseInt(s[1]), s[2]) {
          case "d":
            n.setUTCDate(n.getUTCDate() + l);
            break;
          case "m":
            n = h.prototype.moveMonth.call(h.prototype, n, l);
            break;
          case "w":
            n.setUTCDate(n.getUTCDate() + 7 * l);
            break;
          case "y":
            n = h.prototype.moveYear.call(h.prototype, n, l)
        }
        return i(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), 0, 0, 0)
      }
      u = n && n.match(this.nonpunctuation) || [], n = new Date;
      var p, f, g = {},
        b = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
        y = {
          yyyy: function(t, e) {
            return t.setUTCFullYear(e)
          },
          yy: function(t, e) {
            return t.setUTCFullYear(2e3 + e)
          },
          m: function(t, e) {
            if (isNaN(t)) return t;
            for (e -= 1; 0 > e;) e += 12;
            for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;) t.setUTCDate(t.getUTCDate() - 1);
            return t
          },
          d: function(t, e) {
            return t.setUTCDate(e)
          }
        };
      y.M = y.MM = y.mm = y.m, y.dd = y.d, n = i(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0);
      var x = a.parts.slice();
      if (u.length !== x.length && (x = t(x).filter(function(e, i) {
          return -1 !== t.inArray(i, b)
        }).toArray()), u.length === x.length) {
        var w;
        for (d = 0, w = x.length; w > d; d++) {
          if (p = parseInt(u[d], 10), s = x[d], isNaN(p)) switch (s) {
            case "MM":
              f = t(m[o].months).filter(r), p = t.inArray(f[0], m[o].months) + 1;
              break;
            case "M":
              f = t(m[o].monthsShort).filter(r), p = t.inArray(f[0], m[o].monthsShort) + 1
          }
          g[s] = p
        }
        var k, C;
        for (d = 0; d < b.length; d++) C = b[d], C in g && !isNaN(g[C]) && (k = new Date(n), y[C](k, g[C]), isNaN(k) || (n = k))
      }
      return n
    },
    formatDate: function(e, i, n) {
      if (!e) return "";
      "string" == typeof i && (i = v.parseFormat(i));
      var a = {
        d: e.getUTCDate(),
        D: m[n].daysShort[e.getUTCDay()],
        DD: m[n].days[e.getUTCDay()],
        m: e.getUTCMonth() + 1,
        M: m[n].monthsShort[e.getUTCMonth()],
        MM: m[n].months[e.getUTCMonth()],
        yy: e.getUTCFullYear().toString().substring(2),
        yyyy: e.getUTCFullYear()
      };
      a.dd = (a.d < 10 ? "0" : "") + a.d, a.mm = (a.m < 10 ? "0" : "") + a.m, e = [];
      for (var o = t.extend([], i.separators), r = 0, s = i.parts.length; s >= r; r++) o.length && e.push(o.shift()), e.push(a[i.parts[r]]);
      return e.join("")
    },
    headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&#171;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&#187;</th></tr></thead>',
    contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
    footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
  };
  v.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + v.headTemplate + "<tbody></tbody>" + v.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + "</table></div></div>", t.fn.datepicker.DPGlobal = v, t.fn.datepicker.noConflict = function() {
    return t.fn.datepicker = u, this
  }, t.fn.datepicker.version = "1.4.1-dev", t(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(e) {
    var i = t(this);
    i.data("datepicker") || (e.preventDefault(), p.call(i, "show"))
  }), t(function() {
    p.call(t('[data-provide="datepicker-inline"]'))
  })
}),
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.2.0-rc.1
 *
 * Copyright 2016 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
! function(t) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    var e;
    e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.Chart = t()
  }
}(function() {
  return function t(e, i, n) {
    function a(r, s) {
      if (!i[r]) {
        if (!e[r]) {
          var l = "function" == typeof require && require;
          if (!s && l) return l(r, !0);
          if (o) return o(r, !0);
          var d = new Error("Cannot find module '" + r + "'");
          throw d.code = "MODULE_NOT_FOUND", d
        }
        var h = i[r] = {
          exports: {}
        };
        e[r][0].call(h.exports, function(t) {
          var i = e[r][1][t];
          return a(i ? i : t)
        }, h, h.exports, t, e, i, n)
      }
      return i[r].exports
    }
    for (var o = "function" == typeof require && require, r = 0; r < n.length; r++) a(n[r]);
    return a
  }({
    1: [function(t, e, i) {}, {}],
    2: [function(t, e, i) {
      function n(t) {
        if (t) {
          var e = /^#([a-fA-F0-9]{3})$/,
            i = /^#([a-fA-F0-9]{6})$/,
            n = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
            a = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
            o = /(\w+)/,
            r = [0, 0, 0],
            s = 1,
            l = t.match(e);
          if (l) {
            l = l[1];
            for (var d = 0; d < r.length; d++) r[d] = parseInt(l[d] + l[d], 16)
          } else if (l = t.match(i)) {
            l = l[1];
            for (var d = 0; d < r.length; d++) r[d] = parseInt(l.slice(2 * d, 2 * d + 2), 16)
          } else if (l = t.match(n)) {
            for (var d = 0; d < r.length; d++) r[d] = parseInt(l[d + 1]);
            s = parseFloat(l[4])
          } else if (l = t.match(a)) {
            for (var d = 0; d < r.length; d++) r[d] = Math.round(2.55 * parseFloat(l[d + 1]));
            s = parseFloat(l[4])
          } else if (l = t.match(o)) {
            if ("transparent" == l[1]) return [0, 0, 0, 0];
            if (r = x[l[1]], !r) return
          }
          for (var d = 0; d < r.length; d++) r[d] = b(r[d], 0, 255);
          return s = s || 0 == s ? b(s, 0, 1) : 1, r[3] = s, r
        }
      }

      function a(t) {
        if (t) {
          var e = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
            i = t.match(e);
          if (i) {
            var n = parseFloat(i[4]),
              a = b(parseInt(i[1]), 0, 360),
              o = b(parseFloat(i[2]), 0, 100),
              r = b(parseFloat(i[3]), 0, 100),
              s = b(isNaN(n) ? 1 : n, 0, 1);
            return [a, o, r, s]
          }
        }
      }

      function o(t) {
        if (t) {
          var e = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
            i = t.match(e);
          if (i) {
            var n = parseFloat(i[4]),
              a = b(parseInt(i[1]), 0, 360),
              o = b(parseFloat(i[2]), 0, 100),
              r = b(parseFloat(i[3]), 0, 100),
              s = b(isNaN(n) ? 1 : n, 0, 1);
            return [a, o, r, s]
          }
        }
      }

      function r(t) {
        var e = n(t);
        return e && e.slice(0, 3)
      }

      function s(t) {
        var e = a(t);
        return e && e.slice(0, 3)
      }

      function l(t) {
        var e = n(t);
        return e ? e[3] : (e = a(t)) ? e[3] : (e = o(t)) ? e[3] : void 0
      }

      function d(t) {
        return "#" + y(t[0]) + y(t[1]) + y(t[2])
      }

      function h(t, e) {
        return 1 > e || t[3] && t[3] < 1 ? c(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
      }

      function c(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
      }

      function u(t, e) {
        if (1 > e || t[3] && t[3] < 1) return p(t, e);
        var i = Math.round(t[0] / 255 * 100),
          n = Math.round(t[1] / 255 * 100),
          a = Math.round(t[2] / 255 * 100);
        return "rgb(" + i + "%, " + n + "%, " + a + "%)"
      }

      function p(t, e) {
        var i = Math.round(t[0] / 255 * 100),
          n = Math.round(t[1] / 255 * 100),
          a = Math.round(t[2] / 255 * 100);
        return "rgba(" + i + "%, " + n + "%, " + a + "%, " + (e || t[3] || 1) + ")"
      }

      function f(t, e) {
        return 1 > e || t[3] && t[3] < 1 ? g(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
      }

      function g(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
      }

      function m(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
      }

      function v(t) {
        return w[t.slice(0, 3)]
      }

      function b(t, e, i) {
        return Math.min(Math.max(e, t), i)
      }

      function y(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e
      }
      var x = t(6);
      e.exports = {
        getRgba: n,
        getHsla: a,
        getRgb: r,
        getHsl: s,
        getHwb: o,
        getAlpha: l,
        hexString: d,
        rgbString: h,
        rgbaString: c,
        percentString: u,
        percentaString: p,
        hslString: f,
        hslaString: g,
        hwbString: m,
        keyword: v
      };
      var w = {};
      for (var k in x) w[x[k]] = k
    }, {
      6: 6
    }],
    3: [function(t, e, i) {
      var n = t(5),
        a = t(2),
        o = function(t) {
          if (t instanceof o) return t;
          if (!(this instanceof o)) return new o(t);
          this.values = {
            rgb: [0, 0, 0],
            hsl: [0, 0, 0],
            hsv: [0, 0, 0],
            hwb: [0, 0, 0],
            cmyk: [0, 0, 0, 0],
            alpha: 1
          };
          var e;
          if ("string" == typeof t)
            if (e = a.getRgba(t)) this.setValues("rgb", e);
            else if (e = a.getHsla(t)) this.setValues("hsl", e);
          else {
            if (!(e = a.getHwb(t))) throw new Error('Unable to parse color from string "' + t + '"');
            this.setValues("hwb", e)
          } else if ("object" == typeof t)
            if (e = t, void 0 !== e.r || void 0 !== e.red) this.setValues("rgb", e);
            else if (void 0 !== e.l || void 0 !== e.lightness) this.setValues("hsl", e);
          else if (void 0 !== e.v || void 0 !== e.value) this.setValues("hsv", e);
          else if (void 0 !== e.w || void 0 !== e.whiteness) this.setValues("hwb", e);
          else {
            if (void 0 === e.c && void 0 === e.cyan) throw new Error("Unable to parse color from object " + JSON.stringify(t));
            this.setValues("cmyk", e)
          }
        };
      o.prototype = {
        rgb: function() {
          return this.setSpace("rgb", arguments)
        },
        hsl: function() {
          return this.setSpace("hsl", arguments)
        },
        hsv: function() {
          return this.setSpace("hsv", arguments)
        },
        hwb: function() {
          return this.setSpace("hwb", arguments)
        },
        cmyk: function() {
          return this.setSpace("cmyk", arguments)
        },
        rgbArray: function() {
          return this.values.rgb
        },
        hslArray: function() {
          return this.values.hsl
        },
        hsvArray: function() {
          return this.values.hsv
        },
        hwbArray: function() {
          var t = this.values;
          return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
        },
        cmykArray: function() {
          return this.values.cmyk
        },
        rgbaArray: function() {
          var t = this.values;
          return t.rgb.concat([t.alpha])
        },
        hslaArray: function() {
          var t = this.values;
          return t.hsl.concat([t.alpha])
        },
        alpha: function(t) {
          return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
        },
        red: function(t) {
          return this.setChannel("rgb", 0, t)
        },
        green: function(t) {
          return this.setChannel("rgb", 1, t)
        },
        blue: function(t) {
          return this.setChannel("rgb", 2, t)
        },
        hue: function(t) {
          return t && (t %= 360, t = 0 > t ? 360 + t : t), this.setChannel("hsl", 0, t)
        },
        saturation: function(t) {
          return this.setChannel("hsl", 1, t)
        },
        lightness: function(t) {
          return this.setChannel("hsl", 2, t)
        },
        saturationv: function(t) {
          return this.setChannel("hsv", 1, t)
        },
        whiteness: function(t) {
          return this.setChannel("hwb", 1, t)
        },
        blackness: function(t) {
          return this.setChannel("hwb", 2, t)
        },
        value: function(t) {
          return this.setChannel("hsv", 2, t)
        },
        cyan: function(t) {
          return this.setChannel("cmyk", 0, t)
        },
        magenta: function(t) {
          return this.setChannel("cmyk", 1, t)
        },
        yellow: function(t) {
          return this.setChannel("cmyk", 2, t)
        },
        black: function(t) {
          return this.setChannel("cmyk", 3, t)
        },
        hexString: function() {
          return a.hexString(this.values.rgb)
        },
        rgbString: function() {
          return a.rgbString(this.values.rgb, this.values.alpha)
        },
        rgbaString: function() {
          return a.rgbaString(this.values.rgb, this.values.alpha)
        },
        percentString: function() {
          return a.percentString(this.values.rgb, this.values.alpha)
        },
        hslString: function() {
          return a.hslString(this.values.hsl, this.values.alpha)
        },
        hslaString: function() {
          return a.hslaString(this.values.hsl, this.values.alpha)
        },
        hwbString: function() {
          return a.hwbString(this.values.hwb, this.values.alpha)
        },
        keyword: function() {
          return a.keyword(this.values.rgb, this.values.alpha)
        },
        rgbNumber: function() {
          var t = this.values.rgb;
          return t[0] << 16 | t[1] << 8 | t[2]
        },
        luminosity: function() {
          for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
            var n = t[i] / 255;
            e[i] = .03928 >= n ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
          }
          return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
        },
        contrast: function(t) {
          var e = this.luminosity(),
            i = t.luminosity();
          return e > i ? (e + .05) / (i + .05) : (i + .05) / (e + .05)
        },
        level: function(t) {
          var e = this.contrast(t);
          return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
        },
        dark: function() {
          var t = this.values.rgb,
            e = (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3;
          return 128 > e
        },
        light: function() {
          return !this.dark()
        },
        negate: function() {
          for (var t = [], e = 0; 3 > e; e++) t[e] = 255 - this.values.rgb[e];
          return this.setValues("rgb", t), this
        },
        lighten: function(t) {
          var e = this.values.hsl;
          return e[2] += e[2] * t, this.setValues("hsl", e), this
        },
        darken: function(t) {
          var e = this.values.hsl;
          return e[2] -= e[2] * t, this.setValues("hsl", e), this
        },
        saturate: function(t) {
          var e = this.values.hsl;
          return e[1] += e[1] * t, this.setValues("hsl", e), this
        },
        desaturate: function(t) {
          var e = this.values.hsl;
          return e[1] -= e[1] * t, this.setValues("hsl", e), this
        },
        whiten: function(t) {
          var e = this.values.hwb;
          return e[1] += e[1] * t, this.setValues("hwb", e), this
        },
        blacken: function(t) {
          var e = this.values.hwb;
          return e[2] += e[2] * t, this.setValues("hwb", e), this
        },
        greyscale: function() {
          var t = this.values.rgb,
            e = .3 * t[0] + .59 * t[1] + .11 * t[2];
          return this.setValues("rgb", [e, e, e]), this
        },
        clearer: function(t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e - e * t), this
        },
        opaquer: function(t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e + e * t), this
        },
        rotate: function(t) {
          var e = this.values.hsl,
            i = (e[0] + t) % 360;
          return e[0] = 0 > i ? 360 + i : i, this.setValues("hsl", e), this
        },
        mix: function(t, e) {
          var i = this,
            n = t,
            a = void 0 === e ? .5 : e,
            o = 2 * a - 1,
            r = i.alpha() - n.alpha(),
            s = ((o * r === -1 ? o : (o + r) / (1 + o * r)) + 1) / 2,
            l = 1 - s;
          return this.rgb(s * i.red() + l * n.red(), s * i.green() + l * n.green(), s * i.blue() + l * n.blue()).alpha(i.alpha() * a + n.alpha() * (1 - a))
        },
        toJSON: function() {
          return this.rgb()
        },
        clone: function() {
          var t, e, i = new o,
            n = this.values,
            a = i.values;
          for (var r in n) n.hasOwnProperty(r) && (t = n[r], e = {}.toString.call(t), "[object Array]" === e ? a[r] = t.slice(0) : "[object Number]" === e ? a[r] = t : console.error("unexpected color value:", t));
          return i
        }
      }, o.prototype.spaces = {
        rgb: ["red", "green", "blue"],
        hsl: ["hue", "saturation", "lightness"],
        hsv: ["hue", "saturation", "value"],
        hwb: ["hue", "whiteness", "blackness"],
        cmyk: ["cyan", "magenta", "yellow", "black"]
      }, o.prototype.maxes = {
        rgb: [255, 255, 255],
        hsl: [360, 100, 100],
        hsv: [360, 100, 100],
        hwb: [360, 100, 100],
        cmyk: [100, 100, 100, 100]
      }, o.prototype.getValues = function(t) {
        for (var e = this.values, i = {}, n = 0; n < t.length; n++) i[t.charAt(n)] = e[t][n];
        return 1 !== e.alpha && (i.a = e.alpha), i
      }, o.prototype.setValues = function(t, e) {
        var i, a = this.values,
          o = this.spaces,
          r = this.maxes,
          s = 1;
        if ("alpha" === t) s = e;
        else if (e.length) a[t] = e.slice(0, t.length), s = e[t.length];
        else if (void 0 !== e[t.charAt(0)]) {
          for (i = 0; i < t.length; i++) a[t][i] = e[t.charAt(i)];
          s = e.a
        } else if (void 0 !== e[o[t][0]]) {
          var l = o[t];
          for (i = 0; i < t.length; i++) a[t][i] = e[l[i]];
          s = e.alpha
        }
        if (a.alpha = Math.max(0, Math.min(1, void 0 === s ? a.alpha : s)), "alpha" === t) return !1;
        var d;
        for (i = 0; i < t.length; i++) d = Math.max(0, Math.min(r[t][i], a[t][i])), a[t][i] = Math.round(d);
        for (var h in o) h !== t && (a[h] = n[t][h](a[t]));
        return !0
      }, o.prototype.setSpace = function(t, e) {
        var i = e[0];
        return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this)
      }, o.prototype.setChannel = function(t, e, i) {
        var n = this.values[t];
        return void 0 === i ? n[e] : i === n[e] ? this : (n[e] = i, this.setValues(t, n), this)
      }, "undefined" != typeof window && (window.Color = o), e.exports = o
    }, {
      2: 2,
      5: 5
    }],
    4: [function(t, e, i) {
      function n(t) {
        var e, i, n, a = t[0] / 255,
          o = t[1] / 255,
          r = t[2] / 255,
          s = Math.min(a, o, r),
          l = Math.max(a, o, r),
          d = l - s;
        return l == s ? e = 0 : a == l ? e = (o - r) / d : o == l ? e = 2 + (r - a) / d : r == l && (e = 4 + (a - o) / d), e = Math.min(60 * e, 360), 0 > e && (e += 360), n = (s + l) / 2, i = l == s ? 0 : .5 >= n ? d / (l + s) : d / (2 - l - s), [e, 100 * i, 100 * n]
      }

      function a(t) {
        var e, i, n, a = t[0],
          o = t[1],
          r = t[2],
          s = Math.min(a, o, r),
          l = Math.max(a, o, r),
          d = l - s;
        return i = 0 == l ? 0 : d / l * 1e3 / 10, l == s ? e = 0 : a == l ? e = (o - r) / d : o == l ? e = 2 + (r - a) / d : r == l && (e = 4 + (a - o) / d), e = Math.min(60 * e, 360), 0 > e && (e += 360), n = l / 255 * 1e3 / 10, [e, i, n]
      }

      function o(t) {
        var e = t[0],
          i = t[1],
          a = t[2],
          o = n(t)[0],
          r = 1 / 255 * Math.min(e, Math.min(i, a)),
          a = 1 - 1 / 255 * Math.max(e, Math.max(i, a));
        return [o, 100 * r, 100 * a]
      }

      function s(t) {
        var e, i, n, a, o = t[0] / 255,
          r = t[1] / 255,
          s = t[2] / 255;
        return a = Math.min(1 - o, 1 - r, 1 - s), e = (1 - o - a) / (1 - a) || 0, i = (1 - r - a) / (1 - a) || 0, n = (1 - s - a) / (1 - a) || 0, [100 * e, 100 * i, 100 * n, 100 * a]
      }

      function l(t) {
        return Z[JSON.stringify(t)]
      }

      function d(t) {
        var e = t[0] / 255,
          i = t[1] / 255,
          n = t[2] / 255;
        e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92, n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92;
        var a = .4124 * e + .3576 * i + .1805 * n,
          o = .2126 * e + .7152 * i + .0722 * n,
          r = .0193 * e + .1192 * i + .9505 * n;
        return [100 * a, 100 * o, 100 * r]
      }

      function h(t) {
        var e, i, n, a = d(t),
          o = a[0],
          r = a[1],
          s = a[2];
        return o /= 95.047, r /= 100, s /= 108.883, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, e = 116 * r - 16, i = 500 * (o - r), n = 200 * (r - s), [e, i, n]
      }

      function c(t) {
        return L(h(t))
      }

      function u(t) {
        var e, i, n, a, o, r = t[0] / 360,
          s = t[1] / 100,
          l = t[2] / 100;
        if (0 == s) return o = 255 * l, [o, o, o];
        i = .5 > l ? l * (1 + s) : l + s - l * s, e = 2 * l - i, a = [0, 0, 0];
        for (var d = 0; 3 > d; d++) n = r + 1 / 3 * -(d - 1), 0 > n && n++, n > 1 && n--, o = 1 > 6 * n ? e + 6 * (i - e) * n : 1 > 2 * n ? i : 2 > 3 * n ? e + (i - e) * (2 / 3 - n) * 6 : e, a[d] = 255 * o;
        return a
      }

      function p(t) {
        var e, i, n = t[0],
          a = t[1] / 100,
          o = t[2] / 100;
        return 0 === o ? [0, 0, 0] : (o *= 2, a *= 1 >= o ? o : 2 - o, i = (o + a) / 2, e = 2 * a / (o + a), [n, 100 * e, 100 * i])
      }

      function f(t) {
        return o(u(t))
      }

      function m(t) {
        return s(u(t))
      }

      function v(t) {
        return l(u(t))
      }

      function y(t) {
        var e = t[0] / 60,
          i = t[1] / 100,
          n = t[2] / 100,
          a = Math.floor(e) % 6,
          o = e - Math.floor(e),
          r = 255 * n * (1 - i),
          s = 255 * n * (1 - i * o),
          l = 255 * n * (1 - i * (1 - o)),
          n = 255 * n;
        switch (a) {
          case 0:
            return [n, l, r];
          case 1:
            return [s, n, r];
          case 2:
            return [r, n, l];
          case 3:
            return [r, s, n];
          case 4:
            return [l, r, n];
          case 5:
            return [n, r, s]
        }
      }

      function x(t) {
        var e, i, n = t[0],
          a = t[1] / 100,
          o = t[2] / 100;
        return i = (2 - a) * o, e = a * o, e /= 1 >= i ? i : 2 - i, e = e || 0, i /= 2, [n, 100 * e, 100 * i]
      }

      function w(t) {
        return o(y(t))
      }

      function k(t) {
        return s(y(t))
      }

      function C(t) {
        return l(y(t))
      }

      function D(t) {
        var e, i, n, a, o = t[0] / 360,
          s = t[1] / 100,
          l = t[2] / 100,
          d = s + l;
        switch (d > 1 && (s /= d, l /= d), e = Math.floor(6 * o), i = 1 - l, n = 6 * o - e, 0 != (1 & e) && (n = 1 - n), a = s + n * (i - s), e) {
          default:
          case 6:
          case 0:
            r = i, g = a, b = s;
            break;
          case 1:
            r = a, g = i, b = s;
            break;
          case 2:
            r = s, g = i, b = a;
            break;
          case 3:
            r = s, g = a, b = i;
            break;
          case 4:
            r = a, g = s, b = i;
            break;
          case 5:
            r = i, g = s, b = a
        }
        return [255 * r, 255 * g, 255 * b]
      }

      function S(t) {
        return n(D(t))
      }

      function T(t) {
        return a(D(t))
      }

      function M(t) {
        return s(D(t))
      }

      function F(t) {
        return l(D(t))
      }

      function A(t) {
        var e, i, n, a = t[0] / 100,
          o = t[1] / 100,
          r = t[2] / 100,
          s = t[3] / 100;
        return e = 1 - Math.min(1, a * (1 - s) + s), i = 1 - Math.min(1, o * (1 - s) + s), n = 1 - Math.min(1, r * (1 - s) + s), [255 * e, 255 * i, 255 * n]
      }

      function _(t) {
        return n(A(t))
      }

      function I(t) {
        return a(A(t))
      }

      function P(t) {
        return o(A(t))
      }

      function $(t) {
        return l(A(t))
      }

      function O(t) {
        var e, i, n, a = t[0] / 100,
          o = t[1] / 100,
          r = t[2] / 100;
        return e = 3.2406 * a + -1.5372 * o + r * -.4986, i = a * -.9689 + 1.8758 * o + .0415 * r, n = .0557 * a + o * -.204 + 1.057 * r, e = e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e = 12.92 * e, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i = 12.92 * i, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n = 12.92 * n, e = Math.min(Math.max(0, e), 1), i = Math.min(Math.max(0, i), 1), n = Math.min(Math.max(0, n), 1), [255 * e, 255 * i, 255 * n]
      }

      function E(t) {
        var e, i, n, a = t[0],
          o = t[1],
          r = t[2];
        return a /= 95.047, o /= 100, r /= 108.883, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, e = 116 * o - 16, i = 500 * (a - o), n = 200 * (o - r), [e, i, n]
      }

      function V(t) {
        return L(E(t))
      }

      function R(t) {
        var e, i, n, a, o = t[0],
          r = t[1],
          s = t[2];
        return 8 >= o ? (i = 100 * o / 903.3, a = 7.787 * (i / 100) + 16 / 116) : (i = 100 * Math.pow((o + 16) / 116, 3), a = Math.pow(i / 100, 1 / 3)), e = .008856 >= e / 95.047 ? e = 95.047 * (r / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(r / 500 + a, 3), n = .008859 >= n / 108.883 ? n = 108.883 * (a - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - s / 200, 3), [e, i, n]
      }

      function L(t) {
        var e, i, n, a = t[0],
          o = t[1],
          r = t[2];
        return e = Math.atan2(r, o), i = 360 * e / 2 / Math.PI, 0 > i && (i += 360), n = Math.sqrt(o * o + r * r), [a, n, i]
      }

      function N(t) {
        return O(R(t))
      }

      function U(t) {
        var e, i, n, a = t[0],
          o = t[1],
          r = t[2];
        return n = r / 360 * 2 * Math.PI, e = o * Math.cos(n), i = o * Math.sin(n), [a, e, i]
      }

      function B(t) {
        return R(U(t))
      }

      function W(t) {
        return N(U(t))
      }

      function z(t) {
        return G[t]
      }

      function j(t) {
        return n(z(t))
      }

      function H(t) {
        return a(z(t))
      }

      function Y(t) {
        return o(z(t))
      }

      function Q(t) {
        return s(z(t))
      }

      function q(t) {
        return h(z(t))
      }

      function J(t) {
        return d(z(t))
      }
      e.exports = {
        rgb2hsl: n,
        rgb2hsv: a,
        rgb2hwb: o,
        rgb2cmyk: s,
        rgb2keyword: l,
        rgb2xyz: d,
        rgb2lab: h,
        rgb2lch: c,
        hsl2rgb: u,
        hsl2hsv: p,
        hsl2hwb: f,
        hsl2cmyk: m,
        hsl2keyword: v,
        hsv2rgb: y,
        hsv2hsl: x,
        hsv2hwb: w,
        hsv2cmyk: k,
        hsv2keyword: C,
        hwb2rgb: D,
        hwb2hsl: S,
        hwb2hsv: T,
        hwb2cmyk: M,
        hwb2keyword: F,
        cmyk2rgb: A,
        cmyk2hsl: _,
        cmyk2hsv: I,
        cmyk2hwb: P,
        cmyk2keyword: $,
        keyword2rgb: z,
        keyword2hsl: j,
        keyword2hsv: H,
        keyword2hwb: Y,
        keyword2cmyk: Q,
        keyword2lab: q,
        keyword2xyz: J,
        xyz2rgb: O,
        xyz2lab: E,
        xyz2lch: V,
        lab2xyz: R,
        lab2rgb: N,
        lab2lch: L,
        lch2lab: U,
        lch2xyz: B,
        lch2rgb: W
      };
      var G = {
          aliceblue: [240, 248, 255],
          antiquewhite: [250, 235, 215],
          aqua: [0, 255, 255],
          aquamarine: [127, 255, 212],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          bisque: [255, 228, 196],
          black: [0, 0, 0],
          blanchedalmond: [255, 235, 205],
          blue: [0, 0, 255],
          blueviolet: [138, 43, 226],
          brown: [165, 42, 42],
          burlywood: [222, 184, 135],
          cadetblue: [95, 158, 160],
          chartreuse: [127, 255, 0],
          chocolate: [210, 105, 30],
          coral: [255, 127, 80],
          cornflowerblue: [100, 149, 237],
          cornsilk: [255, 248, 220],
          crimson: [220, 20, 60],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgoldenrod: [184, 134, 11],
          darkgray: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkgrey: [169, 169, 169],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkseagreen: [143, 188, 143],
          darkslateblue: [72, 61, 139],
          darkslategray: [47, 79, 79],
          darkslategrey: [47, 79, 79],
          darkturquoise: [0, 206, 209],
          darkviolet: [148, 0, 211],
          deeppink: [255, 20, 147],
          deepskyblue: [0, 191, 255],
          dimgray: [105, 105, 105],
          dimgrey: [105, 105, 105],
          dodgerblue: [30, 144, 255],
          firebrick: [178, 34, 34],
          floralwhite: [255, 250, 240],
          forestgreen: [34, 139, 34],
          fuchsia: [255, 0, 255],
          gainsboro: [220, 220, 220],
          ghostwhite: [248, 248, 255],
          gold: [255, 215, 0],
          goldenrod: [218, 165, 32],
          gray: [128, 128, 128],
          green: [0, 128, 0],
          greenyellow: [173, 255, 47],
          grey: [128, 128, 128],
          honeydew: [240, 255, 240],
          hotpink: [255, 105, 180],
          indianred: [205, 92, 92],
          indigo: [75, 0, 130],
          ivory: [255, 255, 240],
          khaki: [240, 230, 140],
          lavender: [230, 230, 250],
          lavenderblush: [255, 240, 245],
          lawngreen: [124, 252, 0],
          lemonchiffon: [255, 250, 205],
          lightblue: [173, 216, 230],
          lightcoral: [240, 128, 128],
          lightcyan: [224, 255, 255],
          lightgoldenrodyellow: [250, 250, 210],
          lightgray: [211, 211, 211],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightsalmon: [255, 160, 122],
          lightseagreen: [32, 178, 170],
          lightskyblue: [135, 206, 250],
          lightslategray: [119, 136, 153],
          lightslategrey: [119, 136, 153],
          lightsteelblue: [176, 196, 222],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          limegreen: [50, 205, 50],
          linen: [250, 240, 230],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          mediumaquamarine: [102, 205, 170],
          mediumblue: [0, 0, 205],
          mediumorchid: [186, 85, 211],
          mediumpurple: [147, 112, 219],
          mediumseagreen: [60, 179, 113],
          mediumslateblue: [123, 104, 238],
          mediumspringgreen: [0, 250, 154],
          mediumturquoise: [72, 209, 204],
          mediumvioletred: [199, 21, 133],
          midnightblue: [25, 25, 112],
          mintcream: [245, 255, 250],
          mistyrose: [255, 228, 225],
          moccasin: [255, 228, 181],
          navajowhite: [255, 222, 173],
          navy: [0, 0, 128],
          oldlace: [253, 245, 230],
          olive: [128, 128, 0],
          olivedrab: [107, 142, 35],
          orange: [255, 165, 0],
          orangered: [255, 69, 0],
          orchid: [218, 112, 214],
          palegoldenrod: [238, 232, 170],
          palegreen: [152, 251, 152],
          paleturquoise: [175, 238, 238],
          palevioletred: [219, 112, 147],
          papayawhip: [255, 239, 213],
          peachpuff: [255, 218, 185],
          peru: [205, 133, 63],
          pink: [255, 192, 203],
          plum: [221, 160, 221],
          powderblue: [176, 224, 230],
          purple: [128, 0, 128],
          rebeccapurple: [102, 51, 153],
          red: [255, 0, 0],
          rosybrown: [188, 143, 143],
          royalblue: [65, 105, 225],
          saddlebrown: [139, 69, 19],
          salmon: [250, 128, 114],
          sandybrown: [244, 164, 96],
          seagreen: [46, 139, 87],
          seashell: [255, 245, 238],
          sienna: [160, 82, 45],
          silver: [192, 192, 192],
          skyblue: [135, 206, 235],
          slateblue: [106, 90, 205],
          slategray: [112, 128, 144],
          slategrey: [112, 128, 144],
          snow: [255, 250, 250],
          springgreen: [0, 255, 127],
          steelblue: [70, 130, 180],
          tan: [210, 180, 140],
          teal: [0, 128, 128],
          thistle: [216, 191, 216],
          tomato: [255, 99, 71],
          turquoise: [64, 224, 208],
          violet: [238, 130, 238],
          wheat: [245, 222, 179],
          white: [255, 255, 255],
          whitesmoke: [245, 245, 245],
          yellow: [255, 255, 0],
          yellowgreen: [154, 205, 50]
        },
        Z = {};
      for (var X in G) Z[JSON.stringify(G[X])] = X
    }, {}],
    5: [function(t, e, i) {
      var n = t(4),
        a = function() {
          return new d
        };
      for (var o in n) {
        a[o + "Raw"] = function(t) {
          return function(e) {
            return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), n[t](e)
          }
        }(o);
        var r = /(\w+)2(\w+)/.exec(o),
          s = r[1],
          l = r[2];
        a[s] = a[s] || {}, a[s][l] = a[o] = function(t) {
          return function(e) {
            "number" == typeof e && (e = Array.prototype.slice.call(arguments));
            var i = n[t](e);
            if ("string" == typeof i || void 0 === i) return i;
            for (var a = 0; a < i.length; a++) i[a] = Math.round(i[a]);
            return i
          }
        }(o)
      }
      var d = function() {
        this.convs = {}
      };
      d.prototype.routeSpace = function(t, e) {
        var i = e[0];
        return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i))
      }, d.prototype.setValues = function(t, e) {
        return this.space = t, this.convs = {}, this.convs[t] = e, this
      }, d.prototype.getValues = function(t) {
        var e = this.convs[t];
        if (!e) {
          var i = this.space,
            n = this.convs[i];
          e = a[i][t](n), this.convs[t] = e
        }
        return e
      }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(t) {
        d.prototype[t] = function(e) {
          return this.routeSpace(t, arguments)
        }
      }), e.exports = a
    }, {
      4: 4
    }],
    6: [function(t, e, i) {
      e.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
      }
    }, {}],
    7: [function(t, e, i) {
      var n = t(27)();
      t(26)(n), t(22)(n), t(25)(n), t(21)(n), t(23)(n), t(24)(n), t(28)(n), t(32)(n), t(30)(n), t(31)(n), t(33)(n), t(29)(n), t(34)(n), t(35)(n), t(36)(n), t(37)(n), t(38)(n), t(41)(n), t(39)(n), t(40)(n), t(42)(n), t(43)(n), t(44)(n), t(15)(n), t(16)(n), t(17)(n), t(18)(n), t(19)(n), t(20)(n), t(8)(n), t(9)(n), t(10)(n), t(11)(n), t(12)(n), t(13)(n), t(14)(n), window.Chart = e.exports = n
    }, {
      10: 10,
      11: 11,
      12: 12,
      13: 13,
      14: 14,
      15: 15,
      16: 16,
      17: 17,
      18: 18,
      19: 19,
      20: 20,
      21: 21,
      22: 22,
      23: 23,
      24: 24,
      25: 25,
      26: 26,
      27: 27,
      28: 28,
      29: 29,
      30: 30,
      31: 31,
      32: 32,
      33: 33,
      34: 34,
      35: 35,
      36: 36,
      37: 37,
      38: 38,
      39: 39,
      40: 40,
      41: 41,
      42: 42,
      43: 43,
      44: 44,
      8: 8,
      9: 9
    }],
    8: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        t.Bar = function(e, i) {
          return i.type = "bar", new t(e, i)
        }
      }
    }, {}],
    9: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        t.Bubble = function(e, i) {
          return i.type = "bubble", new t(e, i)
        }
      }
    }, {}],
    10: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        t.Doughnut = function(e, i) {
          return i.type = "doughnut", new t(e, i)
        }
      }
    }, {}],
    11: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        t.Line = function(e, i) {
          return i.type = "line", new t(e, i)
        }
      }
    }, {}],
    12: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        t.PolarArea = function(e, i) {
          return i.type = "polarArea", new t(e, i)
        }
      }
    }, {}],
    13: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        t.Radar = function(e, i) {
          return i.options = t.helpers.configMerge({
            aspectRatio: 1
          }, i.options), i.type = "radar", new t(e, i)
        }
      }
    }, {}],
    14: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        var e = {
          hover: {
            mode: "single"
          },
          scales: {
            xAxes: [{
              type: "linear",
              position: "bottom",
              id: "x-axis-1"
            }],
            yAxes: [{
              type: "linear",
              position: "left",
              id: "y-axis-1"
            }]
          },
          tooltips: {
            callbacks: {
              title: function() {
                return ""
              },
              label: function(t) {
                return "(" + t.xLabel + ", " + t.yLabel + ")"
              }
            }
          }
        };
        t.defaults.scatter = e, t.controllers.scatter = t.controllers.line, t.Scatter = function(e, i) {
          return i.type = "scatter", new t(e, i)
        }
      }
    }, {}],
    15: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        var e = t.helpers;
        t.defaults.bar = {
          hover: {
            mode: "label"
          },
          scales: {
            xAxes: [{
              type: "category",
              categoryPercentage: .8,
              barPercentage: .9,
              gridLines: {
                offsetGridLines: !0
              }
            }],
            yAxes: [{
              type: "linear"
            }]
          }
        }, t.controllers.bar = t.DatasetController.extend({
          dataElementType: t.elements.Rectangle,
          initialize: function(e, i) {
            t.DatasetController.prototype.initialize.call(this, e, i), this.getMeta().bar = !0
          },
          getBarCount: function() {
            var t = this,
              i = 0;
            return e.each(t.chart.data.datasets, function(e, n) {
              var a = t.chart.getDatasetMeta(n);
              a.bar && t.chart.isDatasetVisible(n) && ++i
            }, t), i
          },
          update: function(t) {
            var i = this;
            e.each(i.getMeta().data, function(e, n) {
              i.updateElement(e, n, t)
            }, i)
          },
          updateElement: function(t, i, n) {
            var a = this,
              o = a.getMeta(),
              r = a.getScaleForId(o.xAxisID),
              s = a.getScaleForId(o.yAxisID),
              l = s.getBasePixel(),
              d = a.chart.options.elements.rectangle,
              h = t.custom || {},
              c = a.getDataset();
            e.extend(t, {
              _xScale: r,
              _yScale: s,
              _datasetIndex: a.index,
              _index: i,
              _model: {
                x: a.calculateBarX(i, a.index),
                y: n ? l : a.calculateBarY(i, a.index),
                label: a.chart.data.labels[i],
                datasetLabel: c.label,
                base: n ? l : a.calculateBarBase(a.index, i),
                width: a.calculateBarWidth(i),
                backgroundColor: h.backgroundColor ? h.backgroundColor : e.getValueAtIndexOrDefault(c.backgroundColor, i, d.backgroundColor),
                borderSkipped: h.borderSkipped ? h.borderSkipped : d.borderSkipped,
                borderColor: h.borderColor ? h.borderColor : e.getValueAtIndexOrDefault(c.borderColor, i, d.borderColor),
                borderWidth: h.borderWidth ? h.borderWidth : e.getValueAtIndexOrDefault(c.borderWidth, i, d.borderWidth)
              }
            }), t.pivot()
          },
          calculateBarBase: function(t, e) {
            var i = this,
              n = i.getMeta(),
              a = i.getScaleForId(n.yAxisID),
              o = 0;
            if (a.options.stacked) {
              for (var r = i.chart, s = r.data.datasets, l = Number(s[t].data[e]), d = 0; t > d; d++) {
                var h = s[d],
                  c = r.getDatasetMeta(d);
                if (c.bar && c.yAxisID === a.id && r.isDatasetVisible(d)) {
                  var u = Number(h.data[e]);
                  o += 0 > l ? Math.min(u, 0) : Math.max(u, 0)
                }
              }
              return a.getPixelForValue(o)
            }
            return a.getBasePixel()
          },
          getRuler: function(t) {
            var e, i = this,
              n = i.getMeta(),
              a = i.getScaleForId(n.xAxisID),
              o = i.getBarCount();
            e = "category" === a.options.type ? a.getPixelForTick(t + 1) - a.getPixelForTick(t) : a.width / a.ticks.length;
            var r = e * a.options.categoryPercentage,
              s = (e - e * a.options.categoryPercentage) / 2,
              l = r / o;
            if (a.ticks.length !== i.chart.data.labels.length) {
              var d = a.ticks.length / i.chart.data.labels.length;
              l *= d
            }
            var h = l * a.options.barPercentage,
              c = l - l * a.options.barPercentage;
            return {
              datasetCount: o,
              tickWidth: e,
              categoryWidth: r,
              categorySpacing: s,
              fullBarWidth: l,
              barWidth: h,
              barSpacing: c
            }
          },
          calculateBarWidth: function(t) {
            var e = this.getScaleForId(this.getMeta().xAxisID),
              i = this.getRuler(t);
            return e.options.stacked ? i.categoryWidth : i.barWidth
          },
          getBarIndex: function(t) {
            var e, i, n = 0;
            for (i = 0; t > i; ++i) e = this.chart.getDatasetMeta(i), e.bar && this.chart.isDatasetVisible(i) && ++n;
            return n
          },
          calculateBarX: function(t, e) {
            var i = this,
              n = i.getMeta(),
              a = i.getScaleForId(n.xAxisID),
              o = i.getBarIndex(e),
              r = i.getRuler(t),
              s = a.getPixelForValue(null, t, e, i.chart.isCombo);
            return s -= i.chart.isCombo ? r.tickWidth / 2 : 0, a.options.stacked ? s + r.categoryWidth / 2 + r.categorySpacing : s + r.barWidth / 2 + r.categorySpacing + r.barWidth * o + r.barSpacing / 2 + r.barSpacing * o
          },
          calculateBarY: function(t, e) {
            var i = this,
              n = i.getMeta(),
              a = i.getScaleForId(n.yAxisID),
              o = Number(i.getDataset().data[t]);
            if (a.options.stacked) {
              for (var r = 0, s = 0, l = 0; e > l; l++) {
                var d = i.chart.data.datasets[l],
                  h = i.chart.getDatasetMeta(l);
                if (h.bar && h.yAxisID === a.id && i.chart.isDatasetVisible(l)) {
                  var c = Number(d.data[t]);
                  0 > c ? s += c || 0 : r += c || 0
                }
              }
              return 0 > o ? a.getPixelForValue(s + o) : a.getPixelForValue(r + o)
            }
            return a.getPixelForValue(o)
          },
          draw: function(t) {
            var i = this,
              n = t || 1;
            e.each(i.getMeta().data, function(t, e) {
              var a = i.getDataset().data[e];
              null === a || void 0 === a || isNaN(a) || t.transition(n).draw()
            }, i)
          },
          setHoverStyle: function(t) {
            var i = this.chart.data.datasets[t._datasetIndex],
              n = t._index,
              a = t.custom || {},
              o = t._model;
            o.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : e.getValueAtIndexOrDefault(i.hoverBackgroundColor, n, e.getHoverColor(o.backgroundColor)), o.borderColor = a.hoverBorderColor ? a.hoverBorderColor : e.getValueAtIndexOrDefault(i.hoverBorderColor, n, e.getHoverColor(o.borderColor)), o.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : e.getValueAtIndexOrDefault(i.hoverBorderWidth, n, o.borderWidth)
          },
          removeHoverStyle: function(t) {
            var i = this.chart.data.datasets[t._datasetIndex],
              n = t._index,
              a = t.custom || {},
              o = t._model,
              r = this.chart.options.elements.rectangle;
            o.backgroundColor = a.backgroundColor ? a.backgroundColor : e.getValueAtIndexOrDefault(i.backgroundColor, n, r.backgroundColor), o.borderColor = a.borderColor ? a.borderColor : e.getValueAtIndexOrDefault(i.borderColor, n, r.borderColor), o.borderWidth = a.borderWidth ? a.borderWidth : e.getValueAtIndexOrDefault(i.borderWidth, n, r.borderWidth)
          }
        }), t.defaults.horizontalBar = {
          hover: {
            mode: "label"
          },
          scales: {
            xAxes: [{
              type: "linear",
              position: "bottom"
            }],
            yAxes: [{
              position: "left",
              type: "category",
              categoryPercentage: .8,
              barPercentage: .9,
              gridLines: {
                offsetGridLines: !0
              }
            }]
          },
          elements: {
            rectangle: {
              borderSkipped: "left"
            }
          },
          tooltips: {
            callbacks: {
              title: function(t, e) {
                var i = "";
                return t.length > 0 && (t[0].yLabel ? i = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (i = e.labels[t[0].index])), i
              },
              label: function(t, e) {
                var i = e.datasets[t.datasetIndex].label || "";
                return i + ": " + t.xLabel
              }
            }
          }
        }, t.controllers.horizontalBar = t.controllers.bar.extend({
          updateElement: function(t, i, n) {
            var a = this,
              o = a.getMeta(),
              r = a.getScaleForId(o.xAxisID),
              s = a.getScaleForId(o.yAxisID),
              l = r.getBasePixel(),
              d = t.custom || {},
              h = a.getDataset(),
              c = a.chart.options.elements.rectangle;
            e.extend(t, {
              _xScale: r,
              _yScale: s,
              _datasetIndex: a.index,
              _index: i,
              _model: {
                x: n ? l : a.calculateBarX(i, a.index),
                y: a.calculateBarY(i, a.index),
                label: a.chart.data.labels[i],
                datasetLabel: h.label,
                base: n ? l : a.calculateBarBase(a.index, i),
                height: a.calculateBarHeight(i),
                backgroundColor: d.backgroundColor ? d.backgroundColor : e.getValueAtIndexOrDefault(h.backgroundColor, i, c.backgroundColor),
                borderSkipped: d.borderSkipped ? d.borderSkipped : c.borderSkipped,
                borderColor: d.borderColor ? d.borderColor : e.getValueAtIndexOrDefault(h.borderColor, i, c.borderColor),
                borderWidth: d.borderWidth ? d.borderWidth : e.getValueAtIndexOrDefault(h.borderWidth, i, c.borderWidth)
              },
              draw: function() {
                function t(t) {
                  return l[(h + t) % 4]
                }
                var e = this._chart.ctx,
                  i = this._view,
                  n = i.height / 2,
                  a = i.y - n,
                  o = i.y + n,
                  r = i.base - (i.base - i.x),
                  s = i.borderWidth / 2;
                i.borderWidth && (a += s, o -= s, r += s), e.beginPath(), e.fillStyle = i.backgroundColor, e.strokeStyle = i.borderColor, e.lineWidth = i.borderWidth;
                var l = [
                    [i.base, o],
                    [i.base, a],
                    [r, a],
                    [r, o]
                  ],
                  d = ["bottom", "left", "top", "right"],
                  h = d.indexOf(i.borderSkipped, 0); - 1 === h && (h = 0), e.moveTo.apply(e, t(0));
                for (var c = 1; 4 > c; c++) e.lineTo.apply(e, t(c));
                e.fill(), i.borderWidth && e.stroke()
              },
              inRange: function(t, e) {
                var i = this._view,
                  n = !1;
                return i && (n = i.x < i.base ? e >= i.y - i.height / 2 && e <= i.y + i.height / 2 && t >= i.x && t <= i.base : e >= i.y - i.height / 2 && e <= i.y + i.height / 2 && t >= i.base && t <= i.x), n
              }
            }), t.pivot()
          },
          calculateBarBase: function(t, e) {
            var i = this,
              n = i.getMeta(),
              a = i.getScaleForId(n.xAxisID),
              o = 0;
            if (a.options.stacked) {
              for (var r = i.chart, s = r.data.datasets, l = Number(s[t].data[e]), d = 0; t > d; d++) {
                var h = s[d],
                  c = r.getDatasetMeta(d);
                if (c.bar && c.xAxisID === a.id && r.isDatasetVisible(d)) {
                  var u = Number(h.data[e]);
                  o += 0 > l ? Math.min(u, 0) : Math.max(u, 0)
                }
              }
              return a.getPixelForValue(o)
            }
            return a.getBasePixel()
          },
          getRuler: function(t) {
            var e, i = this,
              n = i.getMeta(),
              a = i.getScaleForId(n.yAxisID),
              o = i.getBarCount();
            e = "category" === a.options.type ? a.getPixelForTick(t + 1) - a.getPixelForTick(t) : a.width / a.ticks.length;
            var r = e * a.options.categoryPercentage,
              s = (e - e * a.options.categoryPercentage) / 2,
              l = r / o;
            if (a.ticks.length !== i.chart.data.labels.length) {
              var d = a.ticks.length / i.chart.data.labels.length;
              l *= d
            }
            var h = l * a.options.barPercentage,
              c = l - l * a.options.barPercentage;
            return {
              datasetCount: o,
              tickHeight: e,
              categoryHeight: r,
              categorySpacing: s,
              fullBarHeight: l,
              barHeight: h,
              barSpacing: c
            }
          },
          calculateBarHeight: function(t) {
            var e = this,
              i = e.getScaleForId(e.getMeta().yAxisID),
              n = e.getRuler(t);
            return i.options.stacked ? n.categoryHeight : n.barHeight
          },
          calculateBarX: function(t, e) {
            var i = this,
              n = i.getMeta(),
              a = i.getScaleForId(n.xAxisID),
              o = Number(i.getDataset().data[t]);
            if (a.options.stacked) {
              for (var r = 0, s = 0, l = 0; e > l; l++) {
                var d = i.chart.data.datasets[l],
                  h = i.chart.getDatasetMeta(l);
                if (h.bar && h.xAxisID === a.id && i.chart.isDatasetVisible(l)) {
                  var c = Number(d.data[t]);
                  0 > c ? s += c || 0 : r += c || 0
                }
              }
              return 0 > o ? a.getPixelForValue(s + o) : a.getPixelForValue(r + o)
            }
            return a.getPixelForValue(o)
          },
          calculateBarY: function(t, e) {
            var i = this,
              n = i.getMeta(),
              a = i.getScaleForId(n.yAxisID),
              o = i.getBarIndex(e),
              r = i.getRuler(t),
              s = a.getPixelForValue(null, t, e, i.chart.isCombo);
            return s -= i.chart.isCombo ? r.tickHeight / 2 : 0, a.options.stacked ? s + r.categoryHeight / 2 + r.categorySpacing : s + r.barHeight / 2 + r.categorySpacing + r.barHeight * o + r.barSpacing / 2 + r.barSpacing * o
          }
        })
      }
    }, {}],
    16: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        var e = t.helpers;
        t.defaults.bubble = {
          hover: {
            mode: "single"
          },
          scales: {
            xAxes: [{
              type: "linear",
              position: "bottom",
              id: "x-axis-0"
            }],
            yAxes: [{
              type: "linear",
              position: "left",
              id: "y-axis-0"
            }]
          },
          tooltips: {
            callbacks: {
              title: function() {
                return ""
              },
              label: function(t, e) {
                var i = e.datasets[t.datasetIndex].label || "",
                  n = e.datasets[t.datasetIndex].data[t.index];
                return i + ": (" + n.x + ", " + n.y + ", " + n.r + ")"
              }
            }
          }
        }, t.controllers.bubble = t.DatasetController.extend({
          dataElementType: t.elements.Point,
          update: function(t) {
            var i = this,
              n = i.getMeta(),
              a = n.data;
            e.each(a, function(e, n) {
              i.updateElement(e, n, t)
            })
          },
          updateElement: function(i, n, a) {
            var o = this,
              r = o.getMeta(),
              s = o.getScaleForId(r.xAxisID),
              l = o.getScaleForId(r.yAxisID),
              d = i.custom || {},
              h = o.getDataset(),
              c = h.data[n],
              u = o.chart.options.elements.point,
              p = o.index;
            e.extend(i, {
              _xScale: s,
              _yScale: l,
              _datasetIndex: p,
              _index: n,
              _model: {
                x: a ? s.getPixelForDecimal(.5) : s.getPixelForValue("object" == typeof c ? c : NaN, n, p, o.chart.isCombo),
                y: a ? l.getBasePixel() : l.getPixelForValue(c, n, p),
                radius: a ? 0 : d.radius ? d.radius : o.getRadius(c),
                hitRadius: d.hitRadius ? d.hitRadius : e.getValueAtIndexOrDefault(h.hitRadius, n, u.hitRadius)
              }
            }), t.DatasetController.prototype.removeHoverStyle.call(o, i, u);
            var f = i._model;
            f.skip = d.skip ? d.skip : isNaN(f.x) || isNaN(f.y), i.pivot()
          },
          getRadius: function(t) {
            return t.r || this.chart.options.elements.point.radius
          },
          setHoverStyle: function(i) {
            var n = this;
            t.DatasetController.prototype.setHoverStyle.call(n, i);
            var a = n.chart.data.datasets[i._datasetIndex],
              o = i._index,
              r = i.custom || {},
              s = i._model;
            s.radius = r.hoverRadius ? r.hoverRadius : e.getValueAtIndexOrDefault(a.hoverRadius, o, n.chart.options.elements.point.hoverRadius) + n.getRadius(a.data[o])
          },
          removeHoverStyle: function(e) {
            var i = this;
            t.DatasetController.prototype.removeHoverStyle.call(i, e, i.chart.options.elements.point);
            var n = i.chart.data.datasets[e._datasetIndex].data[e._index],
              a = e.custom || {},
              o = e._model;
            o.radius = a.radius ? a.radius : i.getRadius(n)
          }
        })
      }
    }, {}],
    17: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        var e = t.helpers,
          i = t.defaults;
        i.doughnut = {
          animation: {
            animateRotate: !0,
            animateScale: !1
          },
          aspectRatio: 1,
          hover: {
            mode: "single"
          },
          legendCallback: function(t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            var i = t.data,
              n = i.datasets,
              a = i.labels;
            if (n.length)
              for (var o = 0; o < n[0].data.length; ++o) e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
            return e.push("</ul>"), e.join("")
          },
          legend: {
            labels: {
              generateLabels: function(t) {
                var i = t.data;
                return i.labels.length && i.datasets.length ? i.labels.map(function(n, a) {
                  var o = t.getDatasetMeta(0),
                    r = i.datasets[0],
                    s = o.data[a],
                    l = s.custom || {},
                    d = e.getValueAtIndexOrDefault,
                    h = t.options.elements.arc,
                    c = l.backgroundColor ? l.backgroundColor : d(r.backgroundColor, a, h.backgroundColor),
                    u = l.borderColor ? l.borderColor : d(r.borderColor, a, h.borderColor),
                    p = l.borderWidth ? l.borderWidth : d(r.borderWidth, a, h.borderWidth);
                  return {
                    text: n,
                    fillStyle: c,
                    strokeStyle: u,
                    lineWidth: p,
                    hidden: isNaN(r.data[a]) || o.data[a].hidden,
                    index: a
                  }
                }) : []
              }
            },
            onClick: function(t, e) {
              var i, n, a, o = e.index,
                r = this.chart;
              for (i = 0, n = (r.data.datasets || []).length; n > i; ++i) a = r.getDatasetMeta(i), a.data[o].hidden = !a.data[o].hidden;
              r.update()
            }
          },
          cutoutPercentage: 50,
          rotation: Math.PI * -.5,
          circumference: 2 * Math.PI,
          tooltips: {
            callbacks: {
              title: function() {
                return ""
              },
              label: function(t, e) {
                return e.labels[t.index] + ": " + e.datasets[t.datasetIndex].data[t.index]
              }
            }
          }
        }, i.pie = e.clone(i.doughnut), e.extend(i.pie, {
          cutoutPercentage: 0
        }), t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
          dataElementType: t.elements.Arc,
          linkScales: e.noop,
          getRingIndex: function(t) {
            for (var e = 0, i = 0; t > i; ++i) this.chart.isDatasetVisible(i) && ++e;
            return e
          },
          update: function(t) {
            var i = this,
              n = i.chart,
              a = n.chartArea,
              o = n.options,
              r = o.elements.arc,
              s = a.right - a.left - r.borderWidth,
              l = a.bottom - a.top - r.borderWidth,
              d = Math.min(s, l),
              h = {
                x: 0,
                y: 0
              },
              c = i.getMeta(),
              u = o.cutoutPercentage,
              p = o.circumference;
            if (p < 2 * Math.PI) {
              var f = o.rotation % (2 * Math.PI);
              f += 2 * Math.PI * (f >= Math.PI ? -1 : f < -Math.PI ? 1 : 0);
              var g = f + p,
                m = {
                  x: Math.cos(f),
                  y: Math.sin(f)
                },
                v = {
                  x: Math.cos(g),
                  y: Math.sin(g)
                },
                b = 0 >= f && g >= 0 || f <= 2 * Math.PI && 2 * Math.PI <= g,
                y = f <= .5 * Math.PI && .5 * Math.PI <= g || f <= 2.5 * Math.PI && 2.5 * Math.PI <= g,
                x = f <= -Math.PI && -Math.PI <= g || f <= Math.PI && Math.PI <= g,
                w = f <= .5 * -Math.PI && .5 * -Math.PI <= g || f <= 1.5 * Math.PI && 1.5 * Math.PI <= g,
                k = u / 100,
                C = {
                  x: x ? -1 : Math.min(m.x * (m.x < 0 ? 1 : k), v.x * (v.x < 0 ? 1 : k)),
                  y: w ? -1 : Math.min(m.y * (m.y < 0 ? 1 : k), v.y * (v.y < 0 ? 1 : k))
                },
                D = {
                  x: b ? 1 : Math.max(m.x * (m.x > 0 ? 1 : k), v.x * (v.x > 0 ? 1 : k)),
                  y: y ? 1 : Math.max(m.y * (m.y > 0 ? 1 : k), v.y * (v.y > 0 ? 1 : k))
                },
                S = {
                  width: .5 * (D.x - C.x),
                  height: .5 * (D.y - C.y)
                };
              d = Math.min(s / S.width, l / S.height), h = {
                x: (D.x + C.x) * -.5,
                y: (D.y + C.y) * -.5
              }
            }
            n.borderWidth = i.getMaxBorderWidth(c.data), n.outerRadius = Math.max((d - n.borderWidth) / 2, 0), n.innerRadius = Math.max(u ? n.outerRadius / 100 * u : 1, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), n.offsetX = h.x * n.outerRadius, n.offsetY = h.y * n.outerRadius, c.total = i.calculateTotal(), i.outerRadius = n.outerRadius - n.radiusLength * i.getRingIndex(i.index), i.innerRadius = i.outerRadius - n.radiusLength, e.each(c.data, function(e, n) {
              i.updateElement(e, n, t)
            })
          },
          updateElement: function(t, i, n) {
            var a = this,
              o = a.chart,
              r = o.chartArea,
              s = o.options,
              l = s.animation,
              d = (r.left + r.right) / 2,
              h = (r.top + r.bottom) / 2,
              c = s.rotation,
              u = s.rotation,
              p = a.getDataset(),
              f = n && l.animateRotate ? 0 : t.hidden ? 0 : a.calculateCircumference(p.data[i]) * (s.circumference / (2 * Math.PI)),
              g = n && l.animateScale ? 0 : a.innerRadius,
              m = n && l.animateScale ? 0 : a.outerRadius,
              v = e.getValueAtIndexOrDefault;
            e.extend(t, {
              _datasetIndex: a.index,
              _index: i,
              _model: {
                x: d + o.offsetX,
                y: h + o.offsetY,
                startAngle: c,
                endAngle: u,
                circumference: f,
                outerRadius: m,
                innerRadius: g,
                label: v(p.label, i, o.data.labels[i])
              }
            });
            var b = t._model;
            this.removeHoverStyle(t), n && l.animateRotate || (0 === i ? b.startAngle = s.rotation : b.startAngle = a.getMeta().data[i - 1]._model.endAngle, b.endAngle = b.startAngle + b.circumference), t.pivot()
          },
          removeHoverStyle: function(e) {
            t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
          },
          calculateTotal: function() {
            var t, i = this.getDataset(),
              n = this.getMeta(),
              a = 0;
            return e.each(n.data, function(e, n) {
              t = i.data[n], isNaN(t) || e.hidden || (a += Math.abs(t))
            }), a
          },
          calculateCircumference: function(t) {
            var e = this.getMeta().total;
            return e > 0 && !isNaN(t) ? 2 * Math.PI * (t / e) : 0
          },
          getMaxBorderWidth: function(t) {
            for (var e, i, n = 0, a = this.index, o = t.length, r = 0; o > r; r++) e = t[r]._model ? t[r]._model.borderWidth : 0, i = t[r]._chart ? t[r]._chart.config.data.datasets[a].hoverBorderWidth : 0, n = e > n ? e : n, n = i > n ? i : n;
            return n
          }
        })
      }
    }, {}],
    18: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        function e(t, e) {
          return i.getValueOrDefault(t.showLine, e.showLines)
        }
        var i = t.helpers;
        t.defaults.line = {
          showLines: !0,
          spanGaps: !1,
          hover: {
            mode: "label"
          },
          scales: {
            xAxes: [{
              type: "category",
              id: "x-axis-0"
            }],
            yAxes: [{
              type: "linear",
              id: "y-axis-0"
            }]
          }
        }, t.controllers.line = t.DatasetController.extend({
          datasetElementType: t.elements.Line,
          dataElementType: t.elements.Point,
          addElementAndReset: function(i) {
            var n = this,
              a = n.chart.options,
              o = n.getMeta();
            t.DatasetController.prototype.addElementAndReset.call(n, i), e(n.getDataset(), a) && 0 !== o.dataset._model.tension && n.updateBezierControlPoints()
          },
          update: function(t) {
            var n, a, o, r = this,
              s = r.getMeta(),
              l = s.dataset,
              d = s.data || [],
              h = r.chart.options,
              c = h.elements.line,
              u = r.getScaleForId(s.yAxisID),
              p = r.getDataset(),
              f = e(p, h);
            for (f && (o = l.custom || {}, void 0 !== p.tension && void 0 === p.lineTension && (p.lineTension = p.tension), l._scale = u, l._datasetIndex = r.index, l._children = d, l._model = {
                spanGaps: p.spanGaps ? p.spanGaps : h.spanGaps,
                tension: o.tension ? o.tension : i.getValueOrDefault(p.lineTension, c.tension),
                backgroundColor: o.backgroundColor ? o.backgroundColor : p.backgroundColor || c.backgroundColor,
                borderWidth: o.borderWidth ? o.borderWidth : p.borderWidth || c.borderWidth,
                borderColor: o.borderColor ? o.borderColor : p.borderColor || c.borderColor,
                borderCapStyle: o.borderCapStyle ? o.borderCapStyle : p.borderCapStyle || c.borderCapStyle,
                borderDash: o.borderDash ? o.borderDash : p.borderDash || c.borderDash,
                borderDashOffset: o.borderDashOffset ? o.borderDashOffset : p.borderDashOffset || c.borderDashOffset,
                borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : p.borderJoinStyle || c.borderJoinStyle,
                fill: o.fill ? o.fill : void 0 !== p.fill ? p.fill : c.fill,
                steppedLine: o.steppedLine ? o.steppedLine : i.getValueOrDefault(p.steppedLine, c.stepped),
                scaleTop: u.top,
                scaleBottom: u.bottom,
                scaleZero: u.getBasePixel()
              }, l.pivot()), n = 0, a = d.length; a > n; ++n) r.updateElement(d[n], n, t);
            for (f && 0 !== l._model.tension && r.updateBezierControlPoints(), n = 0, a = d.length; a > n; ++n) d[n].pivot()
          },
          getPointBackgroundColor: function(t, e) {
            var n = this.chart.options.elements.point.backgroundColor,
              a = this.getDataset(),
              o = t.custom || {};
            return o.backgroundColor ? n = o.backgroundColor : a.pointBackgroundColor ? n = i.getValueAtIndexOrDefault(a.pointBackgroundColor, e, n) : a.backgroundColor && (n = a.backgroundColor), n
          },
          getPointBorderColor: function(t, e) {
            var n = this.chart.options.elements.point.borderColor,
              a = this.getDataset(),
              o = t.custom || {};
            return o.borderColor ? n = o.borderColor : a.pointBorderColor ? n = i.getValueAtIndexOrDefault(a.pointBorderColor, e, n) : a.borderColor && (n = a.borderColor), n
          },
          getPointBorderWidth: function(t, e) {
            var n = this.chart.options.elements.point.borderWidth,
              a = this.getDataset(),
              o = t.custom || {};
            return o.borderWidth ? n = o.borderWidth : a.pointBorderWidth ? n = i.getValueAtIndexOrDefault(a.pointBorderWidth, e, n) : a.borderWidth && (n = a.borderWidth), n
          },
          updateElement: function(t, e, n) {
            var a, o, r = this,
              s = r.getMeta(),
              l = t.custom || {},
              d = r.getDataset(),
              h = r.index,
              c = d.data[e],
              u = r.getScaleForId(s.yAxisID),
              p = r.getScaleForId(s.xAxisID),
              f = r.chart.options.elements.point;
            void 0 !== d.radius && void 0 === d.pointRadius && (d.pointRadius = d.radius), void 0 !== d.hitRadius && void 0 === d.pointHitRadius && (d.pointHitRadius = d.hitRadius), a = p.getPixelForValue("object" == typeof c ? c : NaN, e, h, r.chart.isCombo), o = n ? u.getBasePixel() : r.calculatePointY(c, e, h), t._xScale = p, t._yScale = u, t._datasetIndex = h, t._index = e, t._model = {
              x: a,
              y: o,
              skip: l.skip || isNaN(a) || isNaN(o),
              radius: l.radius || i.getValueAtIndexOrDefault(d.pointRadius, e, f.radius),
              pointStyle: l.pointStyle || i.getValueAtIndexOrDefault(d.pointStyle, e, f.pointStyle),
              backgroundColor: r.getPointBackgroundColor(t, e),
              borderColor: r.getPointBorderColor(t, e),
              borderWidth: r.getPointBorderWidth(t, e),
              tension: s.dataset._model ? s.dataset._model.tension : 0,
              steppedLine: s.dataset._model ? s.dataset._model.steppedLine : !1,
              hitRadius: l.hitRadius || i.getValueAtIndexOrDefault(d.pointHitRadius, e, f.hitRadius)
            }
          },
          calculatePointY: function(t, e, i) {
            var n, a, o, r = this,
              s = r.chart,
              l = r.getMeta(),
              d = r.getScaleForId(l.yAxisID),
              h = 0,
              c = 0;
            if (d.options.stacked) {
              for (n = 0; i > n; n++)
                if (a = s.data.datasets[n], o = s.getDatasetMeta(n), "line" === o.type && s.isDatasetVisible(n)) {
                  var u = Number(d.getRightValue(a.data[e]));
                  0 > u ? c += u || 0 : h += u || 0
                } var p = Number(d.getRightValue(t));
              return 0 > p ? d.getPixelForValue(c + p) : d.getPixelForValue(h + p)
            }
            return d.getPixelForValue(t)
          },
          updateBezierControlPoints: function() {
            function t(t, e, i) {
              return c ? Math.max(Math.min(t, i), e) : t
            }
            var e, n, a, o, r, s = this,
              l = s.getMeta(),
              d = s.chart.chartArea,
              h = l.data || [],
              c = s.chart.options.elements.line.capBezierPoints;
            for (e = 0, n = h.length; n > e; ++e) a = h[e], o = a._model, r = i.splineCurve(i.previousItem(h, e)._model, o, i.nextItem(h, e)._model, l.dataset._model.tension), o.controlPointPreviousX = t(r.previous.x, d.left, d.right), o.controlPointPreviousY = t(r.previous.y, d.top, d.bottom), o.controlPointNextX = t(r.next.x, d.left, d.right), o.controlPointNextY = t(r.next.y, d.top, d.bottom)
          },
          draw: function(t) {
            var i, n, a = this,
              o = a.getMeta(),
              r = o.data || [],
              s = t || 1;
            for (i = 0, n = r.length; n > i; ++i) r[i].transition(s);
            for (e(a.getDataset(), a.chart.options) && o.dataset.transition(s).draw(), i = 0, n = r.length; n > i; ++i) r[i].draw()
          },
          setHoverStyle: function(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
              n = t._index,
              a = t.custom || {},
              o = t._model;
            o.radius = a.hoverRadius || i.getValueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), o.backgroundColor = a.hoverBackgroundColor || i.getValueAtIndexOrDefault(e.pointHoverBackgroundColor, n, i.getHoverColor(o.backgroundColor)), o.borderColor = a.hoverBorderColor || i.getValueAtIndexOrDefault(e.pointHoverBorderColor, n, i.getHoverColor(o.borderColor)), o.borderWidth = a.hoverBorderWidth || i.getValueAtIndexOrDefault(e.pointHoverBorderWidth, n, o.borderWidth)
          },
          removeHoverStyle: function(t) {
            var e = this,
              n = e.chart.data.datasets[t._datasetIndex],
              a = t._index,
              o = t.custom || {},
              r = t._model;
            void 0 !== n.radius && void 0 === n.pointRadius && (n.pointRadius = n.radius), r.radius = o.radius || i.getValueAtIndexOrDefault(n.pointRadius, a, e.chart.options.elements.point.radius), r.backgroundColor = e.getPointBackgroundColor(t, a), r.borderColor = e.getPointBorderColor(t, a), r.borderWidth = e.getPointBorderWidth(t, a)
          }
        })
      }
    }, {}],
    19: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        var e = t.helpers;
        t.defaults.polarArea = {
          scale: {
            type: "radialLinear",
            lineArc: !0,
            ticks: {
              beginAtZero: !0
            }
          },
          animation: {
            animateRotate: !0,
            animateScale: !0
          },
          aspectRatio: 1,
          legendCallback: function(t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            var i = t.data,
              n = i.datasets,
              a = i.labels;
            if (n.length)
              for (var o = 0; o < n[0].data.length; ++o) e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '">'), a[o] && e.push(a[o]), e.push("</span></li>");
            return e.push("</ul>"), e.join("")
          },
          legend: {
            labels: {
              generateLabels: function(t) {
                var i = t.data;
                return i.labels.length && i.datasets.length ? i.labels.map(function(n, a) {
                  var o = t.getDatasetMeta(0),
                    r = i.datasets[0],
                    s = o.data[a],
                    l = s.custom || {},
                    d = e.getValueAtIndexOrDefault,
                    h = t.options.elements.arc,
                    c = l.backgroundColor ? l.backgroundColor : d(r.backgroundColor, a, h.backgroundColor),
                    u = l.borderColor ? l.borderColor : d(r.borderColor, a, h.borderColor),
                    p = l.borderWidth ? l.borderWidth : d(r.borderWidth, a, h.borderWidth);
                  return {
                    text: n,
                    fillStyle: c,
                    strokeStyle: u,
                    lineWidth: p,
                    hidden: isNaN(r.data[a]) || o.data[a].hidden,
                    index: a
                  }
                }) : []
              }
            },
            onClick: function(t, e) {
              var i, n, a, o = e.index,
                r = this.chart;
              for (i = 0, n = (r.data.datasets || []).length; n > i; ++i) a = r.getDatasetMeta(i), a.data[o].hidden = !a.data[o].hidden;
              r.update()
            }
          },
          tooltips: {
            callbacks: {
              title: function() {
                return ""
              },
              label: function(t, e) {
                return e.labels[t.index] + ": " + t.yLabel
              }
            }
          }
        }, t.controllers.polarArea = t.DatasetController.extend({
          dataElementType: t.elements.Arc,
          linkScales: e.noop,
          update: function(t) {
            var i = this,
              n = i.chart,
              a = n.chartArea,
              o = i.getMeta(),
              r = n.options,
              s = r.elements.arc,
              l = Math.min(a.right - a.left, a.bottom - a.top);
            n.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0), n.innerRadius = Math.max(r.cutoutPercentage ? n.outerRadius / 100 * r.cutoutPercentage : 1, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), i.outerRadius = n.outerRadius - n.radiusLength * i.index, i.innerRadius = i.outerRadius - n.radiusLength, o.count = i.countVisibleElements(), e.each(o.data, function(e, n) {
              i.updateElement(e, n, t)
            })
          },
          updateElement: function(t, i, n) {
            for (var a = this, o = a.chart, r = a.getDataset(), s = o.options, l = s.animation, d = o.scale, h = e.getValueAtIndexOrDefault, c = o.data.labels, u = a.calculateCircumference(r.data[i]), p = d.xCenter, f = d.yCenter, g = 0, m = a.getMeta(), v = 0; i > v; ++v) isNaN(r.data[v]) || m.data[v].hidden || ++g;
            var b = -.5 * Math.PI,
              y = t.hidden ? 0 : d.getDistanceFromCenterForValue(r.data[i]),
              x = b + u * g,
              w = x + (t.hidden ? 0 : u),
              k = l.animateScale ? 0 : d.getDistanceFromCenterForValue(r.data[i]);
            e.extend(t, {
              _datasetIndex: a.index,
              _index: i,
              _scale: d,
              _model: {
                x: p,
                y: f,
                innerRadius: 0,
                outerRadius: n ? k : y,
                startAngle: n && l.animateRotate ? b : x,
                endAngle: n && l.animateRotate ? b : w,
                label: h(c, i, c[i])
              }
            }), a.removeHoverStyle(t), t.pivot()
          },
          removeHoverStyle: function(e) {
            t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
          },
          countVisibleElements: function() {
            var t = this.getDataset(),
              i = this.getMeta(),
              n = 0;
            return e.each(i.data, function(e, i) {
              isNaN(t.data[i]) || e.hidden || n++
            }), n
          },
          calculateCircumference: function(t) {
            var e = this.getMeta().count;
            return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0
          }
        })
      }
    }, {}],
    20: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        var e = t.helpers;
        t.defaults.radar = {
          scale: {
            type: "radialLinear"
          },
          elements: {
            line: {
              tension: 0
            }
          }
        }, t.controllers.radar = t.DatasetController.extend({
          datasetElementType: t.elements.Line,
          dataElementType: t.elements.Point,
          linkScales: e.noop,
          addElementAndReset: function(e) {
            t.DatasetController.prototype.addElementAndReset.call(this, e), this.updateBezierControlPoints()
          },
          update: function(t) {
            var i = this,
              n = i.getMeta(),
              a = n.dataset,
              o = n.data,
              r = a.custom || {},
              s = i.getDataset(),
              l = i.chart.options.elements.line,
              d = i.chart.scale;
            void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), e.extend(n.dataset, {
              _datasetIndex: i.index,
              _children: o,
              _loop: !0,
              _model: {
                tension: r.tension ? r.tension : e.getValueOrDefault(s.lineTension, l.tension),
                backgroundColor: r.backgroundColor ? r.backgroundColor : s.backgroundColor || l.backgroundColor,
                borderWidth: r.borderWidth ? r.borderWidth : s.borderWidth || l.borderWidth,
                borderColor: r.borderColor ? r.borderColor : s.borderColor || l.borderColor,
                fill: r.fill ? r.fill : void 0 !== s.fill ? s.fill : l.fill,
                borderCapStyle: r.borderCapStyle ? r.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
                borderDash: r.borderDash ? r.borderDash : s.borderDash || l.borderDash,
                borderDashOffset: r.borderDashOffset ? r.borderDashOffset : s.borderDashOffset || l.borderDashOffset,
                borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle,
                scaleTop: d.top,
                scaleBottom: d.bottom,
                scaleZero: d.getBasePosition()
              }
            }), n.dataset.pivot(), e.each(o, function(e, n) {
              i.updateElement(e, n, t)
            }, i), i.updateBezierControlPoints()
          },
          updateElement: function(t, i, n) {
            var a = this,
              o = t.custom || {},
              r = a.getDataset(),
              s = a.chart.scale,
              l = a.chart.options.elements.point,
              d = s.getPointPositionForValue(i, r.data[i]);
            e.extend(t, {
              _datasetIndex: a.index,
              _index: i,
              _scale: s,
              _model: {
                x: n ? s.xCenter : d.x,
                y: n ? s.yCenter : d.y,
                tension: o.tension ? o.tension : e.getValueOrDefault(r.tension, a.chart.options.elements.line.tension),
                radius: o.radius ? o.radius : e.getValueAtIndexOrDefault(r.pointRadius, i, l.radius),
                backgroundColor: o.backgroundColor ? o.backgroundColor : e.getValueAtIndexOrDefault(r.pointBackgroundColor, i, l.backgroundColor),
                borderColor: o.borderColor ? o.borderColor : e.getValueAtIndexOrDefault(r.pointBorderColor, i, l.borderColor),
                borderWidth: o.borderWidth ? o.borderWidth : e.getValueAtIndexOrDefault(r.pointBorderWidth, i, l.borderWidth),
                pointStyle: o.pointStyle ? o.pointStyle : e.getValueAtIndexOrDefault(r.pointStyle, i, l.pointStyle),
                hitRadius: o.hitRadius ? o.hitRadius : e.getValueAtIndexOrDefault(r.hitRadius, i, l.hitRadius)
              }
            }), t._model.skip = o.skip ? o.skip : isNaN(t._model.x) || isNaN(t._model.y)
          },
          updateBezierControlPoints: function() {
            var t = this.chart.chartArea,
              i = this.getMeta();
            e.each(i.data, function(n, a) {
              var o = n._model,
                r = e.splineCurve(e.previousItem(i.data, a, !0)._model, o, e.nextItem(i.data, a, !0)._model, o.tension);
              o.controlPointPreviousX = Math.max(Math.min(r.previous.x, t.right), t.left), o.controlPointPreviousY = Math.max(Math.min(r.previous.y, t.bottom), t.top), o.controlPointNextX = Math.max(Math.min(r.next.x, t.right), t.left), o.controlPointNextY = Math.max(Math.min(r.next.y, t.bottom), t.top), n.pivot()
            })
          },
          draw: function(t) {
            var i = this.getMeta(),
              n = t || 1;
            e.each(i.data, function(t) {
              t.transition(n)
            }), i.dataset.transition(n).draw(), e.each(i.data, function(t) {
              t.draw()
            })
          },
          setHoverStyle: function(t) {
            var i = this.chart.data.datasets[t._datasetIndex],
              n = t.custom || {},
              a = t._index,
              o = t._model;
            o.radius = n.hoverRadius ? n.hoverRadius : e.getValueAtIndexOrDefault(i.pointHoverRadius, a, this.chart.options.elements.point.hoverRadius), o.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : e.getValueAtIndexOrDefault(i.pointHoverBackgroundColor, a, e.getHoverColor(o.backgroundColor)), o.borderColor = n.hoverBorderColor ? n.hoverBorderColor : e.getValueAtIndexOrDefault(i.pointHoverBorderColor, a, e.getHoverColor(o.borderColor)), o.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : e.getValueAtIndexOrDefault(i.pointHoverBorderWidth, a, o.borderWidth)
          },
          removeHoverStyle: function(t) {
            var i = this.chart.data.datasets[t._datasetIndex],
              n = t.custom || {},
              a = t._index,
              o = t._model,
              r = this.chart.options.elements.point;
            o.radius = n.radius ? n.radius : e.getValueAtIndexOrDefault(i.radius, a, r.radius), o.backgroundColor = n.backgroundColor ? n.backgroundColor : e.getValueAtIndexOrDefault(i.pointBackgroundColor, a, r.backgroundColor), o.borderColor = n.borderColor ? n.borderColor : e.getValueAtIndexOrDefault(i.pointBorderColor, a, r.borderColor), o.borderWidth = n.borderWidth ? n.borderWidth : e.getValueAtIndexOrDefault(i.pointBorderWidth, a, r.borderWidth)
          }
        })
      }
    }, {}],
    21: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        var e = t.helpers;
        t.defaults.global.animation = {
          duration: 1e3,
          easing: "easeOutQuart",
          onProgress: e.noop,
          onComplete: e.noop
        }, t.Animation = t.Element.extend({
          currentStep: null,
          numSteps: 60,
          easing: "",
          render: null,
          onAnimationProgress: null,
          onAnimationComplete: null
        }), t.animationService = {
          frameDuration: 17,
          animations: [],
          dropFrames: 0,
          request: null,
          addAnimation: function(t, e, i, n) {
            var a = this;
            n || (t.animating = !0);
            for (var o = 0; o < a.animations.length; ++o)
              if (a.animations[o].chartInstance === t) return void(a.animations[o].animationObject = e);
            a.animations.push({
              chartInstance: t,
              animationObject: e
            }), 1 === a.animations.length && a.requestAnimationFrame()
          },
          cancelAnimation: function(t) {
            var i = e.findIndex(this.animations, function(e) {
              return e.chartInstance === t
            }); - 1 !== i && (this.animations.splice(i, 1), t.animating = !1)
          },
          requestAnimationFrame: function() {
            var t = this;
            null === t.request && (t.request = e.requestAnimFrame.call(window, function() {
              t.request = null, t.startDigest()
            }))
          },
          startDigest: function() {
            var t = this,
              e = Date.now(),
              i = 0;
            t.dropFrames > 1 && (i = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1);
            for (var n = 0; n < t.animations.length;) null === t.animations[n].animationObject.currentStep && (t.animations[n].animationObject.currentStep = 0), t.animations[n].animationObject.currentStep += 1 + i, t.animations[n].animationObject.currentStep > t.animations[n].animationObject.numSteps && (t.animations[n].animationObject.currentStep = t.animations[n].animationObject.numSteps), t.animations[n].animationObject.render(t.animations[n].chartInstance, t.animations[n].animationObject), t.animations[n].animationObject.onAnimationProgress && t.animations[n].animationObject.onAnimationProgress.call && t.animations[n].animationObject.onAnimationProgress.call(t.animations[n].chartInstance, t.animations[n]), t.animations[n].animationObject.currentStep === t.animations[n].animationObject.numSteps ? (t.animations[n].animationObject.onAnimationComplete && t.animations[n].animationObject.onAnimationComplete.call && t.animations[n].animationObject.onAnimationComplete.call(t.animations[n].chartInstance, t.animations[n]), t.animations[n].chartInstance.animating = !1, t.animations.splice(n, 1)) : ++n;
            var a = Date.now(),
              o = (a - e) / t.frameDuration;
            t.dropFrames += o, t.animations.length > 0 && t.requestAnimationFrame()
          }
        }
      }
    }, {}],
    22: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        var e = t.canvasHelpers = {};
        e.drawPoint = function(t, e, i, n, a) {
          var o, r, s, l, d, h;
          if ("object" == typeof e && (o = e.toString(), "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o)) return void t.drawImage(e, n - e.width / 2, a - e.height / 2);
          if (!(isNaN(i) || 0 >= i)) {
            switch (e) {
              default:
                t.beginPath(), t.arc(n, a, i, 0, 2 * Math.PI), t.closePath(), t.fill();
                break;
              case "triangle":
                t.beginPath(), r = 3 * i / Math.sqrt(3), d = r * Math.sqrt(3) / 2, t.moveTo(n - r / 2, a + d / 3), t.lineTo(n + r / 2, a + d / 3), t.lineTo(n, a - 2 * d / 3), t.closePath(), t.fill();
                break;
              case "rect":
                h = 1 / Math.SQRT2 * i, t.beginPath(), t.fillRect(n - h, a - h, 2 * h, 2 * h), t.strokeRect(n - h, a - h, 2 * h, 2 * h);
                break;
              case "rectRot":
                h = 1 / Math.SQRT2 * i, t.beginPath(), t.moveTo(n - h, a), t.lineTo(n, a + h), t.lineTo(n + h, a), t.lineTo(n, a - h), t.closePath(), t.fill();
                break;
              case "cross":
                t.beginPath(), t.moveTo(n, a + i), t.lineTo(n, a - i), t.moveTo(n - i, a), t.lineTo(n + i, a), t.closePath();
                break;
              case "crossRot":
                t.beginPath(), s = Math.cos(Math.PI / 4) * i, l = Math.sin(Math.PI / 4) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n - s, a + l), t.lineTo(n + s, a - l), t.closePath();
                break;
              case "star":
                t.beginPath(), t.moveTo(n, a + i), t.lineTo(n, a - i), t.moveTo(n - i, a), t.lineTo(n + i, a), s = Math.cos(Math.PI / 4) * i, l = Math.sin(Math.PI / 4) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n - s, a + l), t.lineTo(n + s, a - l), t.closePath();
                break;
              case "line":
                t.beginPath(), t.moveTo(n - i, a), t.lineTo(n + i, a), t.closePath();
                break;
              case "dash":
                t.beginPath(), t.moveTo(n, a), t.lineTo(n + i, a), t.closePath()
            }
            t.stroke()
          }
        }
      }
    }, {}],
    23: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        var e = t.helpers;
        t.types = {}, t.instances = {}, t.controllers = {}, t.Controller = function(i) {
          return this.chart = i, this.config = i.config, this.options = this.config.options = e.configMerge(t.defaults.global, t.defaults[this.config.type], this.config.options || {}), this.id = e.uid(), Object.defineProperty(this, "data", {
            get: function() {
              return this.config.data
            }
          }), t.instances[this.id] = this, this.options.responsive && this.resize(!0), this.initialize(), this
        }, e.extend(t.Controller.prototype, {
          initialize: function() {
            var e = this;
            return t.plugins.notify("beforeInit", [e]), e.bindEvents(), e.ensureScalesHaveIDs(), e.buildOrUpdateControllers(), e.buildScales(), e.updateLayout(), e.resetElements(), e.initToolTip(), e.update(), t.plugins.notify("afterInit", [e]), e
          },
          clear: function() {
            return e.clear(this.chart), this
          },
          stop: function() {
            return t.animationService.cancelAnimation(this), this
          },
          resize: function(i) {
            var n = this,
              a = n.chart,
              o = a.canvas,
              r = e.getMaximumWidth(o),
              s = a.aspectRatio,
              l = n.options.maintainAspectRatio && isNaN(s) === !1 && isFinite(s) && 0 !== s ? r / s : e.getMaximumHeight(o),
              d = a.width !== r || a.height !== l;
            if (!d) return n;
            o.width = a.width = r, o.height = a.height = l, e.retinaScale(a);
            var h = {
              width: r,
              height: l
            };
            return t.plugins.notify("resize", [n, h]), n.options.onResize && n.options.onResize(n, h), i || (n.stop(), n.update(n.options.responsiveAnimationDuration)), n
          },
          ensureScalesHaveIDs: function() {
            var t = this.options,
              i = t.scales || {},
              n = t.scale;
            e.each(i.xAxes, function(t, e) {
              t.id = t.id || "x-axis-" + e
            }), e.each(i.yAxes, function(t, e) {
              t.id = t.id || "y-axis-" + e
            }), n && (n.id = n.id || "scale")
          },
          buildScales: function() {
            var i = this,
              n = i.options,
              a = i.scales = {},
              o = [];
            n.scales && (o = o.concat((n.scales.xAxes || []).map(function(t) {
              return {
                options: t,
                dtype: "category"
              }
            }), (n.scales.yAxes || []).map(function(t) {
              return {
                options: t,
                dtype: "linear"
              }
            }))), n.scale && o.push({
              options: n.scale,
              dtype: "radialLinear",
              isDefault: !0
            }), e.each(o, function(n) {
              var o = n.options,
                r = e.getValueOrDefault(o.type, n.dtype),
                s = t.scaleService.getScaleConstructor(r);
              if (s) {
                var l = new s({
                  id: o.id,
                  options: o,
                  ctx: i.chart.ctx,
                  chart: i
                });
                a[l.id] = l, n.isDefault && (i.scale = l)
              }
            }), t.scaleService.addScalesToLayout(this)
          },
          updateLayout: function() {
            t.layoutService.update(this, this.chart.width, this.chart.height)
          },
          buildOrUpdateControllers: function() {
            var i = this,
              n = [],
              a = [];
            if (e.each(i.data.datasets, function(e, o) {
                var r = i.getDatasetMeta(o);
                r.type || (r.type = e.type || i.config.type), n.push(r.type), r.controller ? r.controller.updateIndex(o) : (r.controller = new t.controllers[r.type](i, o), a.push(r.controller))
              }, i), n.length > 1)
              for (var o = 1; o < n.length; o++)
                if (n[o] !== n[o - 1]) {
                  i.isCombo = !0;
                  break
                } return a
          },
          resetElements: function() {
            var t = this;
            e.each(t.data.datasets, function(e, i) {
              t.getDatasetMeta(i).controller.reset()
            }, t)
          },
          update: function(i, n) {
            var a = this;
            t.plugins.notify("beforeUpdate", [a]), a.tooltip._data = a.data;
            var o = a.buildOrUpdateControllers();
            e.each(a.data.datasets, function(t, e) {
              a.getDatasetMeta(e).controller.buildOrUpdateElements()
            }, a), t.layoutService.update(a, a.chart.width, a.chart.height), t.plugins.notify("afterScaleUpdate", [a]), e.each(o, function(t) {
              t.reset()
            }), a.updateDatasets(), t.plugins.notify("afterUpdate", [a]), a.render(i, n)
          },
          updateDatasets: function() {
            var e, i, n = this;
            if (t.plugins.notify("beforeDatasetsUpdate", [n])) {
              for (e = 0, i = n.data.datasets.length; i > e; ++e) n.getDatasetMeta(e).controller.update();
              t.plugins.notify("afterDatasetsUpdate", [n])
            }
          },
          render: function(i, n) {
            var a = this;
            t.plugins.notify("beforeRender", [a]);
            var o = a.options.animation;
            if (o && ("undefined" != typeof i && 0 !== i || "undefined" == typeof i && 0 !== o.duration)) {
              var r = new t.Animation;
              r.numSteps = (i || o.duration) / 16.66, r.easing = o.easing, r.render = function(t, i) {
                var n = e.easingEffects[i.easing],
                  a = i.currentStep / i.numSteps,
                  o = n(a);
                t.draw(o, a, i.currentStep)
              }, r.onAnimationProgress = o.onProgress, r.onAnimationComplete = o.onComplete, t.animationService.addAnimation(a, r, i, n)
            } else a.draw(), o && o.onComplete && o.onComplete.call && o.onComplete.call(a);
            return a
          },
          draw: function(i) {
            var n = this,
              a = i || 1;
            n.clear(), t.plugins.notify("beforeDraw", [n, a]), e.each(n.boxes, function(t) {
              t.draw(n.chartArea)
            }, n), n.scale && n.scale.draw(), t.plugins.notify("beforeDatasetsDraw", [n, a]), e.each(n.data.datasets, function(t, e) {
              n.isDatasetVisible(e) && n.getDatasetMeta(e).controller.draw(i)
            }, n, !0), t.plugins.notify("afterDatasetsDraw", [n, a]), n.tooltip.transition(a).draw(), t.plugins.notify("afterDraw", [n, a])
          },
          getElementAtEvent: function(t) {
            var i = this,
              n = e.getRelativePosition(t, i.chart),
              a = [];
            return e.each(i.data.datasets, function(t, o) {
              if (i.isDatasetVisible(o)) {
                var r = i.getDatasetMeta(o);
                e.each(r.data, function(t) {
                  return t.inRange(n.x, n.y) ? (a.push(t), a) : void 0
                })
              }
            }), a
          },
          getElementsAtEvent: function(t) {
            var i = this,
              n = e.getRelativePosition(t, i.chart),
              a = [],
              o = function() {
                if (i.data.datasets)
                  for (var t = 0; t < i.data.datasets.length; t++) {
                    var e = i.getDatasetMeta(t);
                    if (i.isDatasetVisible(t))
                      for (var a = 0; a < e.data.length; a++)
                        if (e.data[a].inRange(n.x, n.y)) return e.data[a]
                  }
              }.call(i);
            return o ? (e.each(i.data.datasets, function(t, e) {
              if (i.isDatasetVisible(e)) {
                var n = i.getDatasetMeta(e);
                n.data[o._index]._view.skip || a.push(n.data[o._index])
              }
            }, i), a) : a
          },
          getElementsAtXAxis: function(t) {
            var i = this,
              n = e.getRelativePosition(t, i.chart),
              a = [],
              o = function() {
                if (i.data.datasets)
                  for (var t = 0; t < i.data.datasets.length; t++) {
                    var e = i.getDatasetMeta(t);
                    if (i.isDatasetVisible(t))
                      for (var a = 0; a < e.data.length; a++)
                        if (e.data[a].inLabelRange(n.x, n.y)) return e.data[a]
                  }
              }.call(i);
            return o ? (e.each(i.data.datasets, function(t, e) {
              if (i.isDatasetVisible(e)) {
                var n = i.getDatasetMeta(e);
                n.data[o._index]._view.skip || a.push(n.data[o._index])
              }
            }, i), a) : a
          },
          getElementsAtEventForMode: function(t, e) {
            var i = this;
            switch (e) {
              case "single":
                return i.getElementAtEvent(t);
              case "label":
                return i.getElementsAtEvent(t);
              case "dataset":
                return i.getDatasetAtEvent(t);
              case "x-axis":
                return i.getElementsAtXAxis(t);
              default:
                return t
            }
          },
          getDatasetAtEvent: function(t) {
            var e = this.getElementAtEvent(t);
            return e.length > 0 && (e = this.getDatasetMeta(e[0]._datasetIndex).data), e
          },
          getDatasetMeta: function(t) {
            var e = this,
              i = e.data.datasets[t];
            i._meta || (i._meta = {});
            var n = i._meta[e.id];
            return n || (n = i._meta[e.id] = {
              type: null,
              data: [],
              dataset: null,
              controller: null,
              hidden: null,
              xAxisID: null,
              yAxisID: null
            }), n
          },
          getVisibleDatasetCount: function() {
            for (var t = 0, e = 0, i = this.data.datasets.length; i > e; ++e) this.isDatasetVisible(e) && t++;
            return t
          },
          isDatasetVisible: function(t) {
            var e = this.getDatasetMeta(t);
            return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
          },
          generateLegend: function() {
            return this.options.legendCallback(this)
          },
          destroy: function() {
            var i = this;
            i.stop(), i.clear(), e.unbindEvents(i, i.events), e.removeResizeListener(i.chart.canvas.parentNode);
            var n = i.chart.canvas;
            n.width = i.chart.width,
              n.height = i.chart.height, void 0 !== i.chart.originalDevicePixelRatio && i.chart.ctx.scale(1 / i.chart.originalDevicePixelRatio, 1 / i.chart.originalDevicePixelRatio), n.style.width = i.chart.originalCanvasStyleWidth, n.style.height = i.chart.originalCanvasStyleHeight, t.plugins.notify("destroy", [i]), delete t.instances[i.id]
          },
          toBase64Image: function() {
            return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
          },
          initToolTip: function() {
            var e = this;
            e.tooltip = new t.Tooltip({
              _chart: e.chart,
              _chartInstance: e,
              _data: e.data,
              _options: e.options.tooltips
            }, e)
          },
          bindEvents: function() {
            var t = this;
            e.bindEvents(t, t.options.events, function(e) {
              t.eventHandler(e)
            })
          },
          updateHoverStyle: function(t, e, i) {
            var n, a, o, r = i ? "setHoverStyle" : "removeHoverStyle";
            switch (e) {
              case "single":
                t = [t[0]];
                break;
              case "label":
              case "dataset":
              case "x-axis":
                break;
              default:
                return
            }
            for (a = 0, o = t.length; o > a; ++a) n = t[a], n && this.getDatasetMeta(n._datasetIndex).controller[r](n)
          },
          eventHandler: function(t) {
            var i = this,
              n = i.tooltip,
              a = i.options || {},
              o = a.hover,
              r = a.tooltips;
            return i.lastActive = i.lastActive || [], i.lastTooltipActive = i.lastTooltipActive || [], "mouseout" === t.type ? (i.active = [], i.tooltipActive = []) : (i.active = i.getElementsAtEventForMode(t, o.mode), i.tooltipActive = i.getElementsAtEventForMode(t, r.mode)), o.onHover && o.onHover.call(i, i.active), ("mouseup" === t.type || "click" === t.type) && (a.onClick && a.onClick.call(i, t, i.active), i.legend && i.legend.handleEvent && i.legend.handleEvent(t)), i.lastActive.length && i.updateHoverStyle(i.lastActive, o.mode, !1), i.active.length && o.mode && i.updateHoverStyle(i.active, o.mode, !0), (r.enabled || r.custom) && (n.initialize(), n._active = i.tooltipActive, n.update(!0)), n.pivot(), i.animating || e.arrayEquals(i.active, i.lastActive) && e.arrayEquals(i.tooltipActive, i.lastTooltipActive) || (i.stop(), (r.enabled || r.custom) && n.update(!0), i.render(o.animationDuration, !0)), i.lastActive = i.active, i.lastTooltipActive = i.tooltipActive, i
          }
        })
      }
    }, {}],
    24: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        var e = t.helpers,
          i = e.noop;
        t.DatasetController = function(t, e) {
          this.initialize.call(this, t, e)
        }, e.extend(t.DatasetController.prototype, {
          datasetElementType: null,
          dataElementType: null,
          initialize: function(t, e) {
            var i = this;
            i.chart = t, i.index = e, i.linkScales(), i.addElements()
          },
          updateIndex: function(t) {
            this.index = t
          },
          linkScales: function() {
            var t = this,
              e = t.getMeta(),
              i = t.getDataset();
            null === e.xAxisID && (e.xAxisID = i.xAxisID || t.chart.options.scales.xAxes[0].id), null === e.yAxisID && (e.yAxisID = i.yAxisID || t.chart.options.scales.yAxes[0].id)
          },
          getDataset: function() {
            return this.chart.data.datasets[this.index]
          },
          getMeta: function() {
            return this.chart.getDatasetMeta(this.index)
          },
          getScaleForId: function(t) {
            return this.chart.scales[t]
          },
          reset: function() {
            this.update(!0)
          },
          createMetaDataset: function() {
            var t = this,
              e = t.datasetElementType;
            return e && new e({
              _chart: t.chart.chart,
              _datasetIndex: t.index
            })
          },
          createMetaData: function(t) {
            var e = this,
              i = e.dataElementType;
            return i && new i({
              _chart: e.chart.chart,
              _datasetIndex: e.index,
              _index: t
            })
          },
          addElements: function() {
            var t, e, i = this,
              n = i.getMeta(),
              a = i.getDataset().data || [],
              o = n.data;
            for (t = 0, e = a.length; e > t; ++t) o[t] = o[t] || i.createMetaData(n, t);
            n.dataset = n.dataset || i.createMetaDataset()
          },
          addElementAndReset: function(t) {
            var e = this,
              i = e.createMetaData(t);
            e.getMeta().data.splice(t, 0, i), e.updateElement(i, t, !0)
          },
          buildOrUpdateElements: function() {
            var t = this.getMeta(),
              e = t.data,
              i = this.getDataset().data.length,
              n = e.length;
            if (n > i) e.splice(i, n - i);
            else if (i > n)
              for (var a = n; i > a; ++a) this.addElementAndReset(a)
          },
          update: i,
          draw: function(t) {
            var i = t || 1;
            e.each(this.getMeta().data, function(t) {
              t.transition(i).draw()
            })
          },
          removeHoverStyle: function(t, i) {
            var n = this.chart.data.datasets[t._datasetIndex],
              a = t._index,
              o = t.custom || {},
              r = e.getValueAtIndexOrDefault,
              s = t._model;
            s.backgroundColor = o.backgroundColor ? o.backgroundColor : r(n.backgroundColor, a, i.backgroundColor), s.borderColor = o.borderColor ? o.borderColor : r(n.borderColor, a, i.borderColor), s.borderWidth = o.borderWidth ? o.borderWidth : r(n.borderWidth, a, i.borderWidth)
          },
          setHoverStyle: function(t) {
            var i = this.chart.data.datasets[t._datasetIndex],
              n = t._index,
              a = t.custom || {},
              o = e.getValueAtIndexOrDefault,
              r = e.getHoverColor,
              s = t._model;
            s.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : o(i.hoverBackgroundColor, n, r(s.backgroundColor)), s.borderColor = a.hoverBorderColor ? a.hoverBorderColor : o(i.hoverBorderColor, n, r(s.borderColor)), s.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : o(i.hoverBorderWidth, n, s.borderWidth)
          }
        }), t.DatasetController.extend = e.inherits
      }
    }, {}],
    25: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        var e = t.helpers;
        t.elements = {}, t.Element = function(t) {
          e.extend(this, t), this.initialize.apply(this, arguments)
        }, e.extend(t.Element.prototype, {
          initialize: function() {
            this.hidden = !1
          },
          pivot: function() {
            var t = this;
            return t._view || (t._view = e.clone(t._model)), t._start = e.clone(t._view), t
          },
          transition: function(t) {
            var i = this;
            return i._view || (i._view = e.clone(i._model)), 1 === t ? (i._view = i._model, i._start = null, i) : (i._start || i.pivot(), e.each(i._model, function(n, a) {
              if ("_" === a[0]);
              else if (i._view.hasOwnProperty(a))
                if (n === i._view[a]);
                else if ("string" == typeof n) try {
                var o = e.color(i._model[a]).mix(e.color(i._start[a]), t);
                i._view[a] = o.rgbString()
              } catch (r) {
                i._view[a] = n
              } else if ("number" == typeof n) {
                var s = void 0 !== i._start[a] && isNaN(i._start[a]) === !1 ? i._start[a] : 0;
                i._view[a] = (i._model[a] - s) * t + s
              } else i._view[a] = n;
              else "number" != typeof n || isNaN(i._view[a]) ? i._view[a] = n : i._view[a] = n * t
            }, i), i)
          },
          tooltipPosition: function() {
            return {
              x: this._model.x,
              y: this._model.y
            }
          },
          hasValue: function() {
            return e.isNumber(this._model.x) && e.isNumber(this._model.y)
          }
        }), t.Element.extend = e.inherits
      }
    }, {}],
    26: [function(t, e, i) {
      "use strict";
      var n = t(3);
      e.exports = function(t) {
        function e(t, e, i) {
          var n;
          return "string" == typeof t ? (n = parseInt(t, 10), -1 != t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n
        }

        function i(t) {
          return void 0 !== t && null !== t && "none" !== t
        }

        function a(t, n, a) {
          var o = document.defaultView,
            r = t.parentNode,
            s = o.getComputedStyle(t)[n],
            l = o.getComputedStyle(r)[n],
            d = i(s),
            h = i(l),
            c = Number.POSITIVE_INFINITY;
          return d || h ? Math.min(d ? e(s, t, a) : c, h ? e(l, r, a) : c) : "none"
        }
        var o = t.helpers = {};
        o.each = function(t, e, i, n) {
          var a, r;
          if (o.isArray(t))
            if (r = t.length, n)
              for (a = r - 1; a >= 0; a--) e.call(i, t[a], a);
            else
              for (a = 0; r > a; a++) e.call(i, t[a], a);
          else if ("object" == typeof t) {
            var s = Object.keys(t);
            for (r = s.length, a = 0; r > a; a++) e.call(i, t[s[a]], s[a])
          }
        }, o.clone = function(t) {
          var e = {};
          return o.each(t, function(t, i) {
            o.isArray(t) ? e[i] = t.slice(0) : "object" == typeof t && null !== t ? e[i] = o.clone(t) : e[i] = t
          }), e
        }, o.extend = function(t) {
          for (var e = function(e, i) {
              t[i] = e
            }, i = 1, n = arguments.length; n > i; i++) o.each(arguments[i], e);
          return t
        }, o.configMerge = function(e) {
          var i = o.clone(e);
          return o.each(Array.prototype.slice.call(arguments, 1), function(e) {
            o.each(e, function(e, n) {
              if ("scales" === n) i[n] = o.scaleMerge(i.hasOwnProperty(n) ? i[n] : {}, e);
              else if ("scale" === n) i[n] = o.configMerge(i.hasOwnProperty(n) ? i[n] : {}, t.scaleService.getScaleDefaults(e.type), e);
              else if (i.hasOwnProperty(n) && o.isArray(i[n]) && o.isArray(e)) {
                var a = i[n];
                o.each(e, function(t, e) {
                  e < a.length ? "object" == typeof a[e] && null !== a[e] && "object" == typeof t && null !== t ? a[e] = o.configMerge(a[e], t) : a[e] = t : a.push(t)
                })
              } else i.hasOwnProperty(n) && "object" == typeof i[n] && null !== i[n] && "object" == typeof e ? i[n] = o.configMerge(i[n], e) : i[n] = e
            })
          }), i
        }, o.scaleMerge = function(e, i) {
          var n = o.clone(e);
          return o.each(i, function(e, i) {
            "xAxes" === i || "yAxes" === i ? n.hasOwnProperty(i) ? o.each(e, function(e, a) {
              var r = o.getValueOrDefault(e.type, "xAxes" === i ? "category" : "linear"),
                s = t.scaleService.getScaleDefaults(r);
              a >= n[i].length || !n[i][a].type ? n[i].push(o.configMerge(s, e)) : e.type && e.type !== n[i][a].type ? n[i][a] = o.configMerge(n[i][a], s, e) : n[i][a] = o.configMerge(n[i][a], e)
            }) : (n[i] = [], o.each(e, function(e) {
              var a = o.getValueOrDefault(e.type, "xAxes" === i ? "category" : "linear");
              n[i].push(o.configMerge(t.scaleService.getScaleDefaults(a), e))
            })) : n.hasOwnProperty(i) && "object" == typeof n[i] && null !== n[i] && "object" == typeof e ? n[i] = o.configMerge(n[i], e) : n[i] = e
          }), n
        }, o.getValueAtIndexOrDefault = function(t, e, i) {
          return void 0 === t || null === t ? i : o.isArray(t) ? e < t.length ? t[e] : i : t
        }, o.getValueOrDefault = function(t, e) {
          return void 0 === t ? e : t
        }, o.indexOf = Array.prototype.indexOf ? function(t, e) {
          return t.indexOf(e)
        } : function(t, e) {
          for (var i = 0, n = t.length; n > i; ++i)
            if (t[i] === e) return i;
          return -1
        }, o.where = function(t, e) {
          if (o.isArray(t) && Array.prototype.filter) return t.filter(e);
          var i = [];
          return o.each(t, function(t) {
            e(t) && i.push(t)
          }), i
        }, o.findIndex = Array.prototype.findIndex ? function(t, e, i) {
          return t.findIndex(e, i)
        } : function(t, e, i) {
          i = void 0 === i ? t : i;
          for (var n = 0, a = t.length; a > n; ++n)
            if (e.call(i, t[n], n, t)) return n;
          return -1
        }, o.findNextWhere = function(t, e, i) {
          (void 0 === i || null === i) && (i = -1);
          for (var n = i + 1; n < t.length; n++) {
            var a = t[n];
            if (e(a)) return a
          }
        }, o.findPreviousWhere = function(t, e, i) {
          (void 0 === i || null === i) && (i = t.length);
          for (var n = i - 1; n >= 0; n--) {
            var a = t[n];
            if (e(a)) return a
          }
        }, o.inherits = function(t) {
          var e = this,
            i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
              return e.apply(this, arguments)
            },
            n = function() {
              this.constructor = i
            };
          return n.prototype = e.prototype, i.prototype = new n, i.extend = o.inherits, t && o.extend(i.prototype, t), i.__super__ = e.prototype, i
        }, o.noop = function() {}, o.uid = function() {
          var t = 0;
          return function() {
            return t++
          }
        }(), o.isNumber = function(t) {
          return !isNaN(parseFloat(t)) && isFinite(t)
        }, o.almostEquals = function(t, e, i) {
          return Math.abs(t - e) < i
        }, o.max = function(t) {
          return t.reduce(function(t, e) {
            return isNaN(e) ? t : Math.max(t, e)
          }, Number.NEGATIVE_INFINITY)
        }, o.min = function(t) {
          return t.reduce(function(t, e) {
            return isNaN(e) ? t : Math.min(t, e)
          }, Number.POSITIVE_INFINITY)
        }, o.sign = Math.sign ? function(t) {
          return Math.sign(t)
        } : function(t) {
          return t = +t, 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1
        }, o.log10 = Math.log10 ? function(t) {
          return Math.log10(t)
        } : function(t) {
          return Math.log(t) / Math.LN10
        }, o.toRadians = function(t) {
          return t * (Math.PI / 180)
        }, o.toDegrees = function(t) {
          return t * (180 / Math.PI)
        }, o.getAngleFromPoint = function(t, e) {
          var i = e.x - t.x,
            n = e.y - t.y,
            a = Math.sqrt(i * i + n * n),
            o = Math.atan2(n, i);
          return o < -.5 * Math.PI && (o += 2 * Math.PI), {
            angle: o,
            distance: a
          }
        }, o.aliasPixel = function(t) {
          return t % 2 === 0 ? 0 : .5
        }, o.splineCurve = function(t, e, i, n) {
          var a = t.skip ? e : t,
            o = e,
            r = i.skip ? e : i,
            s = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
            l = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
            d = s / (s + l),
            h = l / (s + l);
          d = isNaN(d) ? 0 : d, h = isNaN(h) ? 0 : h;
          var c = n * d,
            u = n * h;
          return {
            previous: {
              x: o.x - c * (r.x - a.x),
              y: o.y - c * (r.y - a.y)
            },
            next: {
              x: o.x + u * (r.x - a.x),
              y: o.y + u * (r.y - a.y)
            }
          }
        }, o.nextItem = function(t, e, i) {
          return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
        }, o.previousItem = function(t, e, i) {
          return i ? 0 >= e ? t[t.length - 1] : t[e - 1] : 0 >= e ? t[0] : t[e - 1]
        }, o.niceNum = function(t, e) {
          var i, n = Math.floor(o.log10(t)),
            a = t / Math.pow(10, n);
          return i = e ? 1.5 > a ? 1 : 3 > a ? 2 : 7 > a ? 5 : 10 : 1 >= a ? 1 : 2 >= a ? 2 : 5 >= a ? 5 : 10, i * Math.pow(10, n)
        };
        var r = o.easingEffects = {
          linear: function(t) {
            return t
          },
          easeInQuad: function(t) {
            return t * t
          },
          easeOutQuad: function(t) {
            return -1 * t * (t - 2)
          },
          easeInOutQuad: function(t) {
            return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
          },
          easeInCubic: function(t) {
            return t * t * t
          },
          easeOutCubic: function(t) {
            return 1 * ((t = t / 1 - 1) * t * t + 1)
          },
          easeInOutCubic: function(t) {
            return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
          },
          easeInQuart: function(t) {
            return t * t * t * t
          },
          easeOutQuart: function(t) {
            return -1 * ((t = t / 1 - 1) * t * t * t - 1)
          },
          easeInOutQuart: function(t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
          },
          easeInQuint: function(t) {
            return 1 * (t /= 1) * t * t * t * t
          },
          easeOutQuint: function(t) {
            return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
          },
          easeInOutQuint: function(t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
          },
          easeInSine: function(t) {
            return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
          },
          easeOutSine: function(t) {
            return 1 * Math.sin(t / 1 * (Math.PI / 2))
          },
          easeInOutSine: function(t) {
            return -.5 * (Math.cos(Math.PI * t / 1) - 1)
          },
          easeInExpo: function(t) {
            return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
          },
          easeOutExpo: function(t) {
            return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
          },
          easeInOutExpo: function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
          },
          easeInCirc: function(t) {
            return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
          },
          easeOutCirc: function(t) {
            return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
          },
          easeInOutCirc: function(t) {
            return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
          },
          easeInElastic: function(t) {
            var e = 1.70158,
              i = 0,
              n = 1;
            return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)))
          },
          easeOutElastic: function(t) {
            var e = 1.70158,
              i = 0,
              n = 1;
            return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / i) + 1)
          },
          easeInOutElastic: function(t) {
            var e = 1.70158,
              i = 0,
              n = 1;
            return 0 === t ? 0 : 2 === (t /= .5) ? 1 : (i || (i = 1 * (.3 * 1.5)), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), 1 > t ? -.5 * (n * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i) * .5 + 1)
          },
          easeInBack: function(t) {
            var e = 1.70158;
            return 1 * (t /= 1) * t * ((e + 1) * t - e)
          },
          easeOutBack: function(t) {
            var e = 1.70158;
            return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
          },
          easeInOutBack: function(t) {
            var e = 1.70158;
            return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
          },
          easeInBounce: function(t) {
            return 1 - r.easeOutBounce(1 - t)
          },
          easeOutBounce: function(t) {
            return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
          },
          easeInOutBounce: function(t) {
            return .5 > t ? .5 * r.easeInBounce(2 * t) : .5 * r.easeOutBounce(2 * t - 1) + .5
          }
        };
        o.requestAnimFrame = function() {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
            return window.setTimeout(t, 1e3 / 60)
          }
        }(), o.cancelAnimFrame = function() {
          return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
            return window.clearTimeout(t, 1e3 / 60)
          }
        }(), o.getRelativePosition = function(t, e) {
          var i, n, a = t.originalEvent || t,
            r = t.currentTarget || t.srcElement,
            s = r.getBoundingClientRect(),
            l = a.touches;
          l && l.length > 0 ? (i = l[0].clientX, n = l[0].clientY) : (i = a.clientX, n = a.clientY);
          var d = parseFloat(o.getStyle(r, "padding-left")),
            h = parseFloat(o.getStyle(r, "padding-top")),
            c = parseFloat(o.getStyle(r, "padding-right")),
            u = parseFloat(o.getStyle(r, "padding-bottom")),
            p = s.right - s.left - d - c,
            f = s.bottom - s.top - h - u;
          return i = Math.round((i - s.left - d) / p * r.width / e.currentDevicePixelRatio), n = Math.round((n - s.top - h) / f * r.height / e.currentDevicePixelRatio), {
            x: i,
            y: n
          }
        }, o.addEvent = function(t, e, i) {
          t.addEventListener ? t.addEventListener(e, i) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i
        }, o.removeEvent = function(t, e, i) {
          t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = o.noop
        }, o.bindEvents = function(t, e, i) {
          var n = t.events = t.events || {};
          o.each(e, function(e) {
            n[e] = function() {
              i.apply(t, arguments)
            }, o.addEvent(t.chart.canvas, e, n[e])
          })
        }, o.unbindEvents = function(t, e) {
          var i = t.chart.canvas;
          o.each(e, function(t, e) {
            o.removeEvent(i, e, t)
          })
        }, o.getConstraintWidth = function(t) {
          return a(t, "max-width", "clientWidth")
        }, o.getConstraintHeight = function(t) {
          return a(t, "max-height", "clientHeight")
        }, o.getMaximumWidth = function(t) {
          var e = t.parentNode,
            i = parseInt(o.getStyle(e, "padding-left")) + parseInt(o.getStyle(e, "padding-right")),
            n = e.clientWidth - i,
            a = o.getConstraintWidth(t);
          return isNaN(a) ? n : Math.min(n, a)
        }, o.getMaximumHeight = function(t) {
          var e = t.parentNode,
            i = parseInt(o.getStyle(e, "padding-top")) + parseInt(o.getStyle(e, "padding-bottom")),
            n = e.clientHeight - i,
            a = o.getConstraintHeight(t);
          return isNaN(a) ? n : Math.min(n, a)
        }, o.getStyle = function(t, e) {
          return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
        }, o.retinaScale = function(t) {
          var e = t.ctx,
            i = t.canvas,
            n = i.width,
            a = i.height,
            o = t.currentDevicePixelRatio = window.devicePixelRatio || 1;
          1 !== o && (i.height = a * o, i.width = n * o, e.scale(o, o), t.originalDevicePixelRatio = t.originalDevicePixelRatio || o), i.style.width = n + "px", i.style.height = a + "px"
        }, o.clear = function(t) {
          t.ctx.clearRect(0, 0, t.width, t.height)
        }, o.fontString = function(t, e, i) {
          return e + " " + t + "px " + i
        }, o.longestText = function(t, e, i, n) {
          n = n || {};
          var a = n.data = n.data || {},
            r = n.garbageCollect = n.garbageCollect || [];
          n.font !== e && (a = n.data = {}, r = n.garbageCollect = [], n.font = e), t.font = e;
          var s = 0;
          o.each(i, function(e) {
            void 0 !== e && null !== e && o.isArray(e) !== !0 ? s = o.measureText(t, a, r, s, e) : o.isArray(e) && o.each(e, function(e) {
              void 0 === e || null === e || o.isArray(e) || (s = o.measureText(t, a, r, s, e))
            })
          });
          var l = r.length / 2;
          if (l > i.length) {
            for (var d = 0; l > d; d++) delete a[r[d]];
            r.splice(0, l)
          }
          return s
        }, o.measureText = function(t, e, i, n, a) {
          var o = e[a];
          return o || (o = e[a] = t.measureText(a).width, i.push(a)), o > n && (n = o), n
        }, o.numberOfLabelLines = function(t) {
          var e = 1;
          return o.each(t, function(t) {
            o.isArray(t) && t.length > e && (e = t.length)
          }), e
        }, o.drawRoundedRectangle = function(t, e, i, n, a, o) {
          t.beginPath(), t.moveTo(e + o, i), t.lineTo(e + n - o, i), t.quadraticCurveTo(e + n, i, e + n, i + o), t.lineTo(e + n, i + a - o), t.quadraticCurveTo(e + n, i + a, e + n - o, i + a), t.lineTo(e + o, i + a), t.quadraticCurveTo(e, i + a, e, i + a - o), t.lineTo(e, i + o), t.quadraticCurveTo(e, i, e + o, i), t.closePath()
        }, o.color = function(e) {
          return n ? n(e instanceof CanvasGradient ? t.defaults.global.defaultColor : e) : (console.log("Color.js not found!"), e)
        }, o.addResizeListener = function(t, e) {
          var i = document.createElement("iframe"),
            n = "chartjs-hidden-iframe";
          i.classlist ? i.classlist.add(n) : i.setAttribute("class", n);
          var a = i.style;
          a.width = "100%", a.display = "block", a.border = 0, a.height = 0, a.margin = 0, a.position = "absolute", a.left = 0, a.right = 0, a.top = 0, a.bottom = 0, t.insertBefore(i, t.firstChild), (i.contentWindow || i).onresize = function() {
            e && e()
          }
        }, o.removeResizeListener = function(t) {
          var e = t.querySelector(".chartjs-hidden-iframe");
          e && e.parentNode.removeChild(e)
        }, o.isArray = Array.isArray ? function(t) {
          return Array.isArray(t)
        } : function(t) {
          return "[object Array]" === Object.prototype.toString.call(t)
        }, o.arrayEquals = function(t, e) {
          var i, n, a, r;
          if (!t || !e || t.length != e.length) return !1;
          for (i = 0, n = t.length; n > i; ++i)
            if (a = t[i], r = e[i], a instanceof Array && r instanceof Array) {
              if (!o.arrayEquals(a, r)) return !1
            } else if (a != r) return !1;
          return !0
        }, o.callCallback = function(t, e, i) {
          t && "function" == typeof t.call && t.apply(i, e)
        }, o.getHoverColor = function(t) {
          return t instanceof CanvasPattern ? t : o.color(t).saturate(.5).darken(.1).rgbString()
        }
      }
    }, {
      3: 3
    }],
    27: [function(t, e, i) {
      "use strict";
      e.exports = function() {
        var t = function(e, i) {
          var n = this,
            a = t.helpers;
          return n.config = i || {
            data: {
              datasets: []
            }
          }, e.length && e[0].getContext && (e = e[0]), e.getContext && (e = e.getContext("2d")), n.ctx = e, n.canvas = e.canvas, e.canvas.style.display = e.canvas.style.display || "block", n.width = e.canvas.width || parseInt(a.getStyle(e.canvas, "width"), 10) || a.getMaximumWidth(e.canvas), n.height = e.canvas.height || parseInt(a.getStyle(e.canvas, "height"), 10) || a.getMaximumHeight(e.canvas), n.aspectRatio = n.width / n.height, (isNaN(n.aspectRatio) || isFinite(n.aspectRatio) === !1) && (n.aspectRatio = void 0 !== i.aspectRatio ? i.aspectRatio : 2), n.originalCanvasStyleWidth = e.canvas.style.width, n.originalCanvasStyleHeight = e.canvas.style.height, a.retinaScale(n), n.controller = new t.Controller(n), a.addResizeListener(e.canvas.parentNode, function() {
            n.controller && n.controller.config.options.responsive && n.controller.resize()
          }), n.controller ? n.controller : n
        };
        return t.defaults = {
          global: {
            responsive: !0,
            responsiveAnimationDuration: 0,
            maintainAspectRatio: !0,
            events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
            hover: {
              onHover: null,
              mode: "single",
              animationDuration: 400
            },
            onClick: null,
            defaultColor: "rgba(0,0,0,0.1)",
            defaultFontColor: "#666",
            defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            defaultFontSize: 12,
            defaultFontStyle: "normal",
            showLines: !0,
            elements: {},
            legendCallback: function(t) {
              var e = [];
              e.push('<ul class="' + t.id + '-legend">');
              for (var i = 0; i < t.data.datasets.length; i++) e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
              return e.push("</ul>"), e.join("")
            }
          }
        }, t.Chart = t, t
      }
    }, {}],
    28: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        var e = t.helpers;
        t.layoutService = {
          defaults: {},
          addBox: function(t, e) {
            t.boxes || (t.boxes = []), t.boxes.push(e)
          },
          removeBox: function(t, e) {
            t.boxes && t.boxes.splice(t.boxes.indexOf(e), 1)
          },
          update: function(t, i, n) {
            function a(t) {
              var e, i = t.isHorizontal();
              i ? (e = t.update(t.options.fullWidth ? g : w, x), k -= e.height) : (e = t.update(y, b), w -= e.width), C.push({
                horizontal: i,
                minSize: e,
                box: t
              })
            }

            function o(t) {
              var i = e.findNextWhere(C, function(e) {
                return e.box === t
              });
              if (i)
                if (t.isHorizontal()) {
                  var n = {
                    left: D,
                    right: S,
                    top: 0,
                    bottom: 0
                  };
                  t.update(t.options.fullWidth ? g : w, m / 2, n)
                } else t.update(i.minSize.width, k)
            }

            function r(t) {
              var i = e.findNextWhere(C, function(e) {
                  return e.box === t
                }),
                n = {
                  left: 0,
                  right: 0,
                  top: T,
                  bottom: M
                };
              i && t.update(i.minSize.width, k, n)
            }

            function s(t) {
              t.isHorizontal() ? (t.left = t.options.fullWidth ? l : D, t.right = t.options.fullWidth ? i - l : D + w, t.top = I, t.bottom = I + t.height, I = t.bottom) : (t.left = _, t.right = _ + t.width, t.top = T, t.bottom = T + k, _ = t.right)
            }
            if (t) {
              var l = 0,
                d = 0,
                h = e.where(t.boxes, function(t) {
                  return "left" === t.options.position
                }),
                c = e.where(t.boxes, function(t) {
                  return "right" === t.options.position
                }),
                u = e.where(t.boxes, function(t) {
                  return "top" === t.options.position
                }),
                p = e.where(t.boxes, function(t) {
                  return "bottom" === t.options.position
                }),
                f = e.where(t.boxes, function(t) {
                  return "chartArea" === t.options.position
                });
              u.sort(function(t, e) {
                return (e.options.fullWidth ? 1 : 0) - (t.options.fullWidth ? 1 : 0)
              }), p.sort(function(t, e) {
                return (t.options.fullWidth ? 1 : 0) - (e.options.fullWidth ? 1 : 0)
              });
              var g = i - 2 * l,
                m = n - 2 * d,
                v = g / 2,
                b = m / 2,
                y = (i - v) / (h.length + c.length),
                x = (n - b) / (u.length + p.length),
                w = g,
                k = m,
                C = [];
              e.each(h.concat(c, u, p), a);
              var D = l,
                S = l,
                T = d,
                M = d;
              e.each(h.concat(c), o), e.each(h, function(t) {
                D += t.width
              }), e.each(c, function(t) {
                S += t.width
              }), e.each(u.concat(p), o), e.each(u, function(t) {
                T += t.height
              }), e.each(p, function(t) {
                M += t.height
              }), e.each(h.concat(c), r), D = l, S = l, T = d, M = d, e.each(h, function(t) {
                D += t.width
              }), e.each(c, function(t) {
                S += t.width
              }), e.each(u, function(t) {
                T += t.height
              }), e.each(p, function(t) {
                M += t.height
              });
              var F = n - T - M,
                A = i - D - S;
              (A !== w || F !== k) && (e.each(h, function(t) {
                t.height = F
              }), e.each(c, function(t) {
                t.height = F
              }), e.each(u, function(t) {
                t.options.fullWidth || (t.width = A)
              }), e.each(p, function(t) {
                t.options.fullWidth || (t.width = A)
              }), k = F, w = A);
              var _ = l,
                I = d;
              e.each(h.concat(u), s), _ += w, I += k, e.each(c, s), e.each(p, s), t.chartArea = {
                left: D,
                top: T,
                right: D + w,
                bottom: T + k
              }, e.each(f, function(e) {
                e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(w, k)
              })
            }
          }
        }
      }
    }, {}],
    29: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        var e = t.helpers,
          i = e.noop;
        t.defaults.global.legend = {
          display: !0,
          position: "top",
          fullWidth: !0,
          reverse: !1,
          onClick: function(t, e) {
            var i = e.datasetIndex,
              n = this.chart,
              a = n.getDatasetMeta(i);
            a.hidden = null === a.hidden ? !n.data.datasets[i].hidden : null, n.update()
          },
          labels: {
            boxWidth: 40,
            padding: 10,
            generateLabels: function(t) {
              var i = t.data;
              return e.isArray(i.datasets) ? i.datasets.map(function(i, n) {
                return {
                  text: i.label,
                  fillStyle: e.isArray(i.backgroundColor) ? i.backgroundColor[0] : i.backgroundColor,
                  hidden: !t.isDatasetVisible(n),
                  lineCap: i.borderCapStyle,
                  lineDash: i.borderDash,
                  lineDashOffset: i.borderDashOffset,
                  lineJoin: i.borderJoinStyle,
                  lineWidth: i.borderWidth,
                  strokeStyle: i.borderColor,
                  pointStyle: i.pointStyle,
                  datasetIndex: n
                }
              }, this) : []
            }
          }
        }, t.Legend = t.Element.extend({
          initialize: function(t) {
            e.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
          },
          beforeUpdate: i,
          update: function(t, e, i) {
            var n = this;
            return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
          },
          afterUpdate: i,
          beforeSetDimensions: i,
          setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
              width: 0,
              height: 0
            }
          },
          afterSetDimensions: i,
          beforeBuildLabels: i,
          buildLabels: function() {
            var t = this;
            t.legendItems = t.options.labels.generateLabels.call(t, t.chart), t.options.reverse && t.legendItems.reverse()
          },
          afterBuildLabels: i,
          beforeFit: i,
          fit: function() {
            var i = this,
              n = i.options,
              a = n.labels,
              o = n.display,
              r = i.ctx,
              s = t.defaults.global,
              l = e.getValueOrDefault,
              d = l(a.fontSize, s.defaultFontSize),
              h = l(a.fontStyle, s.defaultFontStyle),
              c = l(a.fontFamily, s.defaultFontFamily),
              u = e.fontString(d, h, c),
              p = i.legendHitBoxes = [],
              f = i.minSize,
              g = i.isHorizontal();
            if (g ? (f.width = i.maxWidth, f.height = o ? 10 : 0) : (f.width = o ? 10 : 0, f.height = i.maxHeight), o)
              if (r.font = u, g) {
                var m = i.lineWidths = [0],
                  v = i.legendItems.length ? d + a.padding : 0;
                r.textAlign = "left", r.textBaseline = "top", e.each(i.legendItems, function(t, e) {
                  var n = a.usePointStyle ? d * Math.sqrt(2) : a.boxWidth,
                    o = n + d / 2 + r.measureText(t.text).width;
                  m[m.length - 1] + o + a.padding >= i.width && (v += d + a.padding, m[m.length] = i.left), p[e] = {
                    left: 0,
                    top: 0,
                    width: o,
                    height: d
                  }, m[m.length - 1] += o + a.padding
                }), f.height += v
              } else {
                var b = a.padding,
                  y = i.columnWidths = [],
                  x = a.padding,
                  w = 0,
                  k = 0,
                  C = d + b;
                e.each(i.legendItems, function(t, e) {
                  var i = a.usePointStyle ? 2 * a.boxWidth : a.boxWidth,
                    n = i + d / 2 + r.measureText(t.text).width;
                  k + C > f.height && (x += w + a.padding, y.push(w), w = 0, k = 0), w = Math.max(w, n), k += C, p[e] = {
                    left: 0,
                    top: 0,
                    width: n,
                    height: d
                  }
                }), x += w, y.push(w), f.width += x
              } i.width = f.width, i.height = f.height
          },
          afterFit: i,
          isHorizontal: function() {
            return "top" === this.options.position || "bottom" === this.options.position
          },
          draw: function() {
            var i = this,
              n = i.options,
              a = n.labels,
              o = t.defaults.global,
              r = o.elements.line,
              s = i.width,
              l = i.lineWidths;
            if (n.display) {
              var d, h = i.ctx,
                c = e.getValueOrDefault,
                u = c(a.fontColor, o.defaultFontColor),
                p = c(a.fontSize, o.defaultFontSize),
                f = c(a.fontStyle, o.defaultFontStyle),
                g = c(a.fontFamily, o.defaultFontFamily),
                m = e.fontString(p, f, g);
              h.textAlign = "left", h.textBaseline = "top", h.lineWidth = .5, h.strokeStyle = u, h.fillStyle = u, h.font = m;
              var v = a.boxWidth,
                b = i.legendHitBoxes,
                y = function(e, i, a) {
                  if (!(isNaN(v) || 0 >= v)) {
                    if (h.save(), h.fillStyle = c(a.fillStyle, o.defaultColor), h.lineCap = c(a.lineCap, r.borderCapStyle), h.lineDashOffset = c(a.lineDashOffset, r.borderDashOffset), h.lineJoin = c(a.lineJoin, r.borderJoinStyle), h.lineWidth = c(a.lineWidth, r.borderWidth), h.strokeStyle = c(a.strokeStyle, o.defaultColor), h.setLineDash && h.setLineDash(c(a.lineDash, r.borderDash)), n.labels && n.labels.usePointStyle) {
                      var s = p * Math.SQRT2 / 2,
                        l = s / Math.SQRT2,
                        d = e + l,
                        u = i + l;
                      t.canvasHelpers.drawPoint(h, a.pointStyle, s, d, u)
                    } else h.strokeRect(e, i, v, p), h.fillRect(e, i, v, p);
                    h.restore()
                  }
                },
                x = function(t, e, i, n) {
                  h.fillText(i.text, v + p / 2 + t, e), i.hidden && (h.beginPath(), h.lineWidth = 2, h.moveTo(v + p / 2 + t, e + p / 2), h.lineTo(v + p / 2 + t + n, e + p / 2), h.stroke())
                },
                w = i.isHorizontal();
              d = w ? {
                x: i.left + (s - l[0]) / 2,
                y: i.top + a.padding,
                line: 0
              } : {
                x: i.left + a.padding,
                y: i.top + a.padding,
                line: 0
              };
              var k = p + a.padding;
              e.each(i.legendItems, function(t, e) {
                var n = h.measureText(t.text).width,
                  o = a.usePointStyle ? p + p / 2 + n : v + p / 2 + n,
                  r = d.x,
                  c = d.y;
                w ? r + o >= s && (c = d.y += k, d.line++, r = d.x = i.left + (s - l[d.line]) / 2) : c + k > i.bottom && (r = d.x = r + i.columnWidths[d.line] + a.padding, c = d.y = i.top, d.line++), y(r, c, t), b[e].left = r, b[e].top = c, x(r, c, t, n), w ? d.x += o + a.padding : d.y += k
              })
            }
          },
          handleEvent: function(t) {
            var i = this,
              n = e.getRelativePosition(t, i.chart.chart),
              a = n.x,
              o = n.y,
              r = i.options;
            if (a >= i.left && a <= i.right && o >= i.top && o <= i.bottom)
              for (var s = i.legendHitBoxes, l = 0; l < s.length; ++l) {
                var d = s[l];
                if (a >= d.left && a <= d.left + d.width && o >= d.top && o <= d.top + d.height) {
                  r.onClick && r.onClick.call(i, t, i.legendItems[l]);
                  break
                }
              }
          }
        }), t.plugins.register({
          beforeInit: function(e) {
            var i = e.options,
              n = i.legend;
            n && (e.legend = new t.Legend({
              ctx: e.chart.ctx,
              options: n,
              chart: e
            }), t.layoutService.addBox(e, e.legend))
          }
        })
      }
    }, {}],
    30: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        var e = t.helpers.noop;
        t.plugins = {
          _plugins: [],
          register: function(t) {
            var e = this._plugins;
            [].concat(t).forEach(function(t) {
              -1 === e.indexOf(t) && e.push(t)
            })
          },
          unregister: function(t) {
            var e = this._plugins;
            [].concat(t).forEach(function(t) {
              var i = e.indexOf(t); - 1 !== i && e.splice(i, 1)
            })
          },
          clear: function() {
            this._plugins = []
          },
          count: function() {
            return this._plugins.length
          },
          getAll: function() {
            return this._plugins
          },
          notify: function(t, e) {
            var i, n, a = this._plugins,
              o = a.length;
            for (i = 0; o > i; ++i)
              if (n = a[i], "function" == typeof n[t] && n[t].apply(n, e || []) === !1) return !1;
            return !0
          }
        }, t.PluginBase = t.Element.extend({
          beforeInit: e,
          afterInit: e,
          beforeUpdate: e,
          afterUpdate: e,
          beforeDraw: e,
          afterDraw: e,
          destroy: e
        }), t.pluginService = t.plugins
      }
    }, {}],
    31: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        var e = t.helpers;
        t.defaults.scale = {
          display: !0,
          position: "left",
          gridLines: {
            display: !0,
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickMarkLength: 10,
            zeroLineWidth: 1,
            zeroLineColor: "rgba(0,0,0,0.25)",
            offsetGridLines: !1
          },
          scaleLabel: {
            labelString: "",
            display: !1
          },
          ticks: {
            beginAtZero: !1,
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            padding: 10,
            reverse: !1,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 0,
            labelOffset: 0,
            callback: function(t) {
              return e.isArray(t) ? t : "" + t
            }
          }
        }, t.Scale = t.Element.extend({
          beforeUpdate: function() {
            e.callCallback(this.options.beforeUpdate, [this])
          },
          update: function(t, i, n) {
            var a = this;
            return a.beforeUpdate(), a.maxWidth = t, a.maxHeight = i, a.margins = e.extend({
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }, n), a.beforeSetDimensions(), a.setDimensions(), a.afterSetDimensions(), a.beforeDataLimits(), a.determineDataLimits(), a.afterDataLimits(), a.beforeBuildTicks(), a.buildTicks(), a.afterBuildTicks(), a.beforeTickToLabelConversion(), a.convertTicksToLabels(), a.afterTickToLabelConversion(), a.beforeCalculateTickRotation(), a.calculateTickRotation(), a.afterCalculateTickRotation(), a.beforeFit(), a.fit(), a.afterFit(), a.afterUpdate(), a.minSize
          },
          afterUpdate: function() {
            e.callCallback(this.options.afterUpdate, [this])
          },
          beforeSetDimensions: function() {
            e.callCallback(this.options.beforeSetDimensions, [this])
          },
          setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
          },
          afterSetDimensions: function() {
            e.callCallback(this.options.afterSetDimensions, [this])
          },
          beforeDataLimits: function() {
            e.callCallback(this.options.beforeDataLimits, [this])
          },
          determineDataLimits: e.noop,
          afterDataLimits: function() {
            e.callCallback(this.options.afterDataLimits, [this])
          },
          beforeBuildTicks: function() {
            e.callCallback(this.options.beforeBuildTicks, [this])
          },
          buildTicks: e.noop,
          afterBuildTicks: function() {
            e.callCallback(this.options.afterBuildTicks, [this])
          },
          beforeTickToLabelConversion: function() {
            e.callCallback(this.options.beforeTickToLabelConversion, [this])
          },
          convertTicksToLabels: function() {
            var t = this;
            t.ticks = t.ticks.map(function(e, i, n) {
              return t.options.ticks.userCallback ? t.options.ticks.userCallback(e, i, n) : t.options.ticks.callback(e, i, n)
            }, t)
          },
          afterTickToLabelConversion: function() {
            e.callCallback(this.options.afterTickToLabelConversion, [this])
          },
          beforeCalculateTickRotation: function() {
            e.callCallback(this.options.beforeCalculateTickRotation, [this])
          },
          calculateTickRotation: function() {
            var i = this,
              n = i.ctx,
              a = t.defaults.global,
              o = i.options.ticks,
              r = e.getValueOrDefault(o.fontSize, a.defaultFontSize),
              s = e.getValueOrDefault(o.fontStyle, a.defaultFontStyle),
              l = e.getValueOrDefault(o.fontFamily, a.defaultFontFamily),
              d = e.fontString(r, s, l);
            n.font = d;
            var h, c = n.measureText(i.ticks[0]).width,
              u = n.measureText(i.ticks[i.ticks.length - 1]).width;
            if (i.labelRotation = o.minRotation || 0, i.paddingRight = 0, i.paddingLeft = 0, i.options.display && i.isHorizontal()) {
              i.paddingRight = u / 2 + 3, i.paddingLeft = c / 2 + 3, i.longestTextCache || (i.longestTextCache = {});
              for (var p, f, g = e.longestText(n, d, i.ticks, i.longestTextCache), m = g, v = i.getPixelForTick(1) - i.getPixelForTick(0) - 6; m > v && i.labelRotation < o.maxRotation;) {
                if (p = Math.cos(e.toRadians(i.labelRotation)), f = Math.sin(e.toRadians(i.labelRotation)), h = p * c, h + r / 2 > i.yLabelWidth && (i.paddingLeft = h + r / 2), i.paddingRight = r / 2, f * g > i.maxHeight) {
                  i.labelRotation--;
                  break
                }
                i.labelRotation++, m = p * g
              }
            }
            i.margins && (i.paddingLeft = Math.max(i.paddingLeft - i.margins.left, 0), i.paddingRight = Math.max(i.paddingRight - i.margins.right, 0))
          },
          afterCalculateTickRotation: function() {
            e.callCallback(this.options.afterCalculateTickRotation, [this])
          },
          beforeFit: function() {
            e.callCallback(this.options.beforeFit, [this])
          },
          fit: function() {
            var i = this,
              n = i.minSize = {
                width: 0,
                height: 0
              },
              a = i.options,
              o = t.defaults.global,
              r = a.ticks,
              s = a.scaleLabel,
              l = a.display,
              d = i.isHorizontal(),
              h = e.getValueOrDefault(r.fontSize, o.defaultFontSize),
              c = e.getValueOrDefault(r.fontStyle, o.defaultFontStyle),
              u = e.getValueOrDefault(r.fontFamily, o.defaultFontFamily),
              p = e.fontString(h, c, u),
              f = e.getValueOrDefault(s.fontSize, o.defaultFontSize),
              g = a.gridLines.tickMarkLength;
            if (d ? n.width = i.isFullWidth() ? i.maxWidth - i.margins.left - i.margins.right : i.maxWidth : n.width = l ? g : 0, d ? n.height = l ? g : 0 : n.height = i.maxHeight, s.display && l && (d ? n.height += 1.5 * f : n.width += 1.5 * f), r.display && l) {
              i.longestTextCache || (i.longestTextCache = {});
              var m = e.longestText(i.ctx, p, i.ticks, i.longestTextCache),
                v = e.numberOfLabelLines(i.ticks),
                b = .5 * h;
              if (d) {
                i.longestLabelWidth = m;
                var y = Math.sin(e.toRadians(i.labelRotation)) * i.longestLabelWidth + h * v + b * v;
                n.height = Math.min(i.maxHeight, n.height + y), i.ctx.font = p;
                var x = i.ctx.measureText(i.ticks[0]).width,
                  w = i.ctx.measureText(i.ticks[i.ticks.length - 1]).width,
                  k = Math.cos(e.toRadians(i.labelRotation)),
                  C = Math.sin(e.toRadians(i.labelRotation));
                i.paddingLeft = 0 !== i.labelRotation ? k * x + 3 : x / 2 + 3, i.paddingRight = 0 !== i.labelRotation ? C * (h / 2) + 3 : w / 2 + 3
              } else {
                var D = i.maxWidth - n.width,
                  S = r.mirror;
                S ? m = 0 : m += i.options.ticks.padding, D > m ? n.width += m : n.width = i.maxWidth, i.paddingTop = h / 2, i.paddingBottom = h / 2
              }
            }
            i.margins && (i.paddingLeft = Math.max(i.paddingLeft - i.margins.left, 0), i.paddingTop = Math.max(i.paddingTop - i.margins.top, 0), i.paddingRight = Math.max(i.paddingRight - i.margins.right, 0), i.paddingBottom = Math.max(i.paddingBottom - i.margins.bottom, 0)), i.width = n.width, i.height = n.height
          },
          afterFit: function() {
            e.callCallback(this.options.afterFit, [this])
          },
          isHorizontal: function() {
            return "top" === this.options.position || "bottom" === this.options.position
          },
          isFullWidth: function() {
            return this.options.fullWidth
          },
          getRightValue: function(t) {
            return null === t || "undefined" == typeof t ? NaN : "number" == typeof t && isNaN(t) ? NaN : "object" == typeof t ? t instanceof Date || t.isValid ? t : this.getRightValue(this.isHorizontal() ? t.x : t.y) : t
          },
          getLabelForIndex: e.noop,
          getPixelForValue: e.noop,
          getValueForPixel: e.noop,
          getPixelForTick: function(t, e) {
            var i = this;
            if (i.isHorizontal()) {
              var n = i.width - (i.paddingLeft + i.paddingRight),
                a = n / Math.max(i.ticks.length - (i.options.gridLines.offsetGridLines ? 0 : 1), 1),
                o = a * t + i.paddingLeft;
              e && (o += a / 2);
              var r = i.left + Math.round(o);
              return r += i.isFullWidth() ? i.margins.left : 0
            }
            var s = i.height - (i.paddingTop + i.paddingBottom);
            return i.top + t * (s / (i.ticks.length - 1))
          },
          getPixelForDecimal: function(t) {
            var e = this;
            if (e.isHorizontal()) {
              var i = e.width - (e.paddingLeft + e.paddingRight),
                n = i * t + e.paddingLeft,
                a = e.left + Math.round(n);
              return a += e.isFullWidth() ? e.margins.left : 0
            }
            return e.top + t * e.height
          },
          getBasePixel: function() {
            var t = this,
              e = t.min,
              i = t.max;
            return t.getPixelForValue(t.beginAtZero ? 0 : 0 > e && 0 > i ? i : e > 0 && i > 0 ? e : 0)
          },
          draw: function(i) {
            var n = this,
              a = n.options;
            if (a.display) {
              var o, r, s = n.ctx,
                l = t.defaults.global,
                d = a.ticks,
                h = a.gridLines,
                c = a.scaleLabel,
                u = 0 !== n.labelRotation,
                p = d.autoSkip,
                f = n.isHorizontal();
              d.maxTicksLimit && (r = d.maxTicksLimit);
              var g = e.getValueOrDefault(d.fontColor, l.defaultFontColor),
                m = e.getValueOrDefault(d.fontSize, l.defaultFontSize),
                v = e.getValueOrDefault(d.fontStyle, l.defaultFontStyle),
                b = e.getValueOrDefault(d.fontFamily, l.defaultFontFamily),
                y = e.fontString(m, v, b),
                x = h.tickMarkLength,
                w = e.getValueOrDefault(c.fontColor, l.defaultFontColor),
                k = e.getValueOrDefault(c.fontSize, l.defaultFontSize),
                C = e.getValueOrDefault(c.fontStyle, l.defaultFontStyle),
                D = e.getValueOrDefault(c.fontFamily, l.defaultFontFamily),
                S = e.fontString(k, C, D),
                T = e.toRadians(n.labelRotation),
                M = Math.cos(T),
                F = n.longestLabelWidth * M;
              s.fillStyle = g;
              var A = [];
              if (f) {
                if (o = !1, u && (F /= 2), (F + d.autoSkipPadding) * n.ticks.length > n.width - (n.paddingLeft + n.paddingRight) && (o = 1 + Math.floor((F + d.autoSkipPadding) * n.ticks.length / (n.width - (n.paddingLeft + n.paddingRight)))), r && n.ticks.length > r)
                  for (; !o || n.ticks.length / (o || 1) > r;) o || (o = 1), o += 1;
                p || (o = !1)
              }
              var _ = "right" === a.position ? n.left : n.right - x,
                I = "right" === a.position ? n.left + x : n.right,
                P = "bottom" === a.position ? n.top : n.bottom - x,
                $ = "bottom" === a.position ? n.top + x : n.bottom;
              if (e.each(n.ticks, function(t, r) {
                  if (void 0 !== t && null !== t) {
                    var s = n.ticks.length === r + 1,
                      l = o > 1 && r % o > 0 || r % o === 0 && r + o >= n.ticks.length;
                    if ((!l || s) && void 0 !== t && null !== t) {
                      var c, p;
                      r === ("undefined" != typeof n.zeroLineIndex ? n.zeroLineIndex : 0) ? (c = h.zeroLineWidth, p = h.zeroLineColor) : (c = e.getValueAtIndexOrDefault(h.lineWidth, r), p = e.getValueAtIndexOrDefault(h.color, r));
                      var g, m, v, b, y, w, k, C, D, S, M, F = "middle";
                      if (f) {
                        u || (F = "top" === a.position ? "bottom" : "top"), M = u ? "right" : "center";
                        var O = n.getPixelForTick(r) + e.aliasPixel(c);
                        D = n.getPixelForTick(r, h.offsetGridLines) + d.labelOffset, S = u ? n.top + 12 : "top" === a.position ? n.bottom - x : n.top + x, g = v = y = k = O, m = P, b = $, w = i.top, C = i.bottom
                      } else {
                        "left" === a.position ? d.mirror ? (D = n.right + d.padding, M = "left") : (D = n.right - d.padding, M = "right") : d.mirror ? (D = n.left - d.padding, M = "right") : (D = n.left + d.padding, M = "left");
                        var E = n.getPixelForTick(r);
                        E += e.aliasPixel(c), S = n.getPixelForTick(r, h.offsetGridLines), g = _, v = I, y = i.left, k = i.right, m = b = w = C = E
                      }
                      A.push({
                        tx1: g,
                        ty1: m,
                        tx2: v,
                        ty2: b,
                        x1: y,
                        y1: w,
                        x2: k,
                        y2: C,
                        labelX: D,
                        labelY: S,
                        glWidth: c,
                        glColor: p,
                        rotation: -1 * T,
                        label: t,
                        textBaseline: F,
                        textAlign: M
                      })
                    }
                  }
                }), e.each(A, function(t) {
                  if (h.display && (s.lineWidth = t.glWidth, s.strokeStyle = t.glColor, s.beginPath(), h.drawTicks && (s.moveTo(t.tx1, t.ty1), s.lineTo(t.tx2, t.ty2)), h.drawOnChartArea && (s.moveTo(t.x1, t.y1), s.lineTo(t.x2, t.y2)), s.stroke()), d.display) {
                    s.save(), s.translate(t.labelX, t.labelY), s.rotate(t.rotation), s.font = y, s.textBaseline = t.textBaseline, s.textAlign = t.textAlign;
                    var i = t.label;
                    if (e.isArray(i))
                      for (var n = 0, a = 0; n < i.length; ++n) s.fillText("" + i[n], 0, a), a += 1.5 * m;
                    else s.fillText(i, 0, 0);
                    s.restore()
                  }
                }), c.display) {
                var O, E, V = 0;
                if (f) O = n.left + (n.right - n.left) / 2, E = "bottom" === a.position ? n.bottom - k / 2 : n.top + k / 2;
                else {
                  var R = "left" === a.position;
                  O = R ? n.left + k / 2 : n.right - k / 2, E = n.top + (n.bottom - n.top) / 2, V = R ? -.5 * Math.PI : .5 * Math.PI
                }
                s.save(), s.translate(O, E), s.rotate(V), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = w, s.font = S, s.fillText(c.labelString, 0, 0), s.restore()
              }
              if (h.drawBorder) {
                s.lineWidth = e.getValueAtIndexOrDefault(h.lineWidth, 0), s.strokeStyle = e.getValueAtIndexOrDefault(h.color, 0);
                var L = n.left,
                  N = n.right,
                  U = n.top,
                  B = n.bottom,
                  W = e.aliasPixel(s.lineWidth);
                f ? (U = B = "top" === a.position ? n.bottom : n.top, U += W, B += W) : (L = N = "left" === a.position ? n.right : n.left, L += W, N += W), s.beginPath(), s.moveTo(L, U), s.lineTo(N, B), s.stroke()
              }
            }
          }
        })
      }
    }, {}],
    32: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        var e = t.helpers;
        t.scaleService = {
          constructors: {},
          defaults: {},
          registerScaleType: function(t, i, n) {
            this.constructors[t] = i, this.defaults[t] = e.clone(n)
          },
          getScaleConstructor: function(t) {
            return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
          },
          getScaleDefaults: function(i) {
            return this.defaults.hasOwnProperty(i) ? e.scaleMerge(t.defaults.scale, this.defaults[i]) : {}
          },
          updateScaleDefaults: function(t, i) {
            var n = this.defaults;
            n.hasOwnProperty(t) && (n[t] = e.extend(n[t], i))
          },
          addScalesToLayout: function(i) {
            e.each(i.scales, function(e) {
              t.layoutService.addBox(i, e)
            })
          }
        }
      }
    }, {}],
    33: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        var e = t.helpers;
        t.defaults.global.title = {
          display: !1,
          position: "top",
          fullWidth: !0,
          fontStyle: "bold",
          padding: 10,
          text: ""
        };
        var i = e.noop;
        t.Title = t.Element.extend({
          initialize: function(i) {
            var n = this;
            e.extend(n, i), n.options = e.configMerge(t.defaults.global.title, i.options), n.legendHitBoxes = []
          },
          beforeUpdate: function() {
            var i = this.chart.options;
            i && i.title && (this.options = e.configMerge(t.defaults.global.title, i.title))
          },
          update: function(t, e, i) {
            var n = this;
            return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
          },
          afterUpdate: i,
          beforeSetDimensions: i,
          setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
              width: 0,
              height: 0
            }
          },
          afterSetDimensions: i,
          beforeBuildLabels: i,
          buildLabels: i,
          afterBuildLabels: i,
          beforeFit: i,
          fit: function() {
            var i = this,
              n = e.getValueOrDefault,
              a = i.options,
              o = t.defaults.global,
              r = a.display,
              s = n(a.fontSize, o.defaultFontSize),
              l = i.minSize;
            i.isHorizontal() ? (l.width = i.maxWidth, l.height = r ? s + 2 * a.padding : 0) : (l.width = r ? s + 2 * a.padding : 0, l.height = i.maxHeight), i.width = l.width, i.height = l.height
          },
          afterFit: i,
          isHorizontal: function() {
            var t = this.options.position;
            return "top" === t || "bottom" === t
          },
          draw: function() {
            var i = this,
              n = i.ctx,
              a = e.getValueOrDefault,
              o = i.options,
              r = t.defaults.global;
            if (o.display) {
              var s, l, d = a(o.fontSize, r.defaultFontSize),
                h = a(o.fontStyle, r.defaultFontStyle),
                c = a(o.fontFamily, r.defaultFontFamily),
                u = e.fontString(d, h, c),
                p = 0,
                f = i.top,
                g = i.left,
                m = i.bottom,
                v = i.right;
              n.fillStyle = a(o.fontColor, r.defaultFontColor), n.font = u, i.isHorizontal() ? (s = g + (v - g) / 2, l = f + (m - f) / 2) : (s = "left" === o.position ? g + d / 2 : v - d / 2, l = f + (m - f) / 2, p = Math.PI * ("left" === o.position ? -.5 : .5)), n.save(), n.translate(s, l), n.rotate(p), n.textAlign = "center", n.textBaseline = "middle", n.fillText(o.text, 0, 0), n.restore()
            }
          }
        }), t.plugins.register({
          beforeInit: function(e) {
            var i = e.options,
              n = i.title;
            n && (e.titleBlock = new t.Title({
              ctx: e.chart.ctx,
              options: n,
              chart: e
            }), t.layoutService.addBox(e, e.titleBlock))
          }
        })
      }
    }, {}],
    34: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        function e(t, e) {
          return e && (a.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
        }

        function i(t) {
          if (!t.length) return !1;
          var e, i, n = [],
            a = [];
          for (e = 0, i = t.length; i > e; ++e) {
            var o = t[e];
            if (o && o.hasValue()) {
              var r = o.tooltipPosition();
              n.push(r.x), a.push(r.y)
            }
          }
          var s = 0,
            l = 0;
          for (e = 0; e < n.length; ++e) n[e] && (s += n[e], l += a[e]);
          return {
            x: Math.round(s / n.length),
            y: Math.round(l / n.length)
          }
        }

        function n(t) {
          var e = t._xScale,
            i = t._yScale || t._scale,
            n = t._index,
            a = t._datasetIndex;
          return {
            xLabel: e ? e.getLabelForIndex(n, a) : "",
            yLabel: i ? i.getLabelForIndex(n, a) : "",
            index: n,
            datasetIndex: a
          }
        }
        var a = t.helpers;
        t.defaults.global.tooltips = {
          enabled: !0,
          custom: null,
          mode: "single",
          backgroundColor: "rgba(0,0,0,0.8)",
          titleFontStyle: "bold",
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleFontColor: "#fff",
          titleAlign: "left",
          bodySpacing: 2,
          bodyFontColor: "#fff",
          bodyAlign: "left",
          footerFontStyle: "bold",
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFontColor: "#fff",
          footerAlign: "left",
          yPadding: 6,
          xPadding: 6,
          yAlign: "center",
          xAlign: "center",
          caretSize: 5,
          cornerRadius: 6,
          multiKeyBackground: "#fff",
          callbacks: {
            beforeTitle: a.noop,
            title: function(t, e) {
              var i = "",
                n = e.labels,
                a = n ? n.length : 0;
              if (t.length > 0) {
                var o = t[0];
                o.xLabel ? i = o.xLabel : a > 0 && o.index < a && (i = n[o.index])
              }
              return i
            },
            afterTitle: a.noop,
            beforeBody: a.noop,
            beforeLabel: a.noop,
            label: function(t, e) {
              var i = e.datasets[t.datasetIndex].label || "";
              return i + ": " + t.yLabel
            },
            labelColor: function(t, e) {
              var i = e.getDatasetMeta(t.datasetIndex),
                n = i.data[t.index],
                a = n._view;
              return {
                borderColor: a.borderColor,
                backgroundColor: a.backgroundColor
              }
            },
            afterLabel: a.noop,
            afterBody: a.noop,
            beforeFooter: a.noop,
            footer: a.noop,
            afterFooter: a.noop
          }
        }, t.Tooltip = t.Element.extend({
          initialize: function() {
            var e = this,
              i = t.defaults.global,
              n = e._options,
              o = a.getValueOrDefault;
            a.extend(e, {
              _model: {
                xPadding: n.xPadding,
                yPadding: n.yPadding,
                xAlign: n.xAlign,
                yAlign: n.yAlign,
                bodyFontColor: n.bodyFontColor,
                _bodyFontFamily: o(n.bodyFontFamily, i.defaultFontFamily),
                _bodyFontStyle: o(n.bodyFontStyle, i.defaultFontStyle),
                _bodyAlign: n.bodyAlign,
                bodyFontSize: o(n.bodyFontSize, i.defaultFontSize),
                bodySpacing: n.bodySpacing,
                titleFontColor: n.titleFontColor,
                _titleFontFamily: o(n.titleFontFamily, i.defaultFontFamily),
                _titleFontStyle: o(n.titleFontStyle, i.defaultFontStyle),
                titleFontSize: o(n.titleFontSize, i.defaultFontSize),
                _titleAlign: n.titleAlign,
                titleSpacing: n.titleSpacing,
                titleMarginBottom: n.titleMarginBottom,
                footerFontColor: n.footerFontColor,
                _footerFontFamily: o(n.footerFontFamily, i.defaultFontFamily),
                _footerFontStyle: o(n.footerFontStyle, i.defaultFontStyle),
                footerFontSize: o(n.footerFontSize, i.defaultFontSize),
                _footerAlign: n.footerAlign,
                footerSpacing: n.footerSpacing,
                footerMarginTop: n.footerMarginTop,
                caretSize: n.caretSize,
                cornerRadius: n.cornerRadius,
                backgroundColor: n.backgroundColor,
                opacity: 0,
                legendColorBackground: n.multiKeyBackground
              }
            })
          },
          getTitle: function() {
            var t = this,
              i = t._options,
              n = i.callbacks,
              a = n.beforeTitle.apply(t, arguments),
              o = n.title.apply(t, arguments),
              r = n.afterTitle.apply(t, arguments),
              s = [];
            return s = e(s, a), s = e(s, o), s = e(s, r)
          },
          getBeforeBody: function() {
            var t = this._options.callbacks.beforeBody.apply(this, arguments);
            return a.isArray(t) ? t : void 0 !== t ? [t] : []
          },
          getBody: function(t, i) {
            var n = this,
              o = n._options.callbacks,
              r = [];
            return a.each(t, function(t) {
              var a = {
                before: [],
                lines: [],
                after: []
              };
              e(a.before, o.beforeLabel.call(n, t, i)), e(a.lines, o.label.call(n, t, i)), e(a.after, o.afterLabel.call(n, t, i)), r.push(a)
            }), r
          },
          getAfterBody: function() {
            var t = this._options.callbacks.afterBody.apply(this, arguments);
            return a.isArray(t) ? t : void 0 !== t ? [t] : []
          },
          getFooter: function() {
            var t = this,
              i = t._options.callbacks,
              n = i.beforeFooter.apply(t, arguments),
              a = i.footer.apply(t, arguments),
              o = i.afterFooter.apply(t, arguments),
              r = [];
            return r = e(r, n), r = e(r, a), r = e(r, o)
          },
          update: function(t) {
            var e, o, r = this,
              s = r._options,
              l = r._model,
              d = r._active,
              h = r._data,
              c = r._chartInstance;
            if (d.length) {
              l.opacity = 1;
              var u = [],
                p = i(d),
                f = [];
              for (e = 0, o = d.length; o > e; ++e) f.push(n(d[e]));
              s.itemSort && (f = f.sort(s.itemSort)), d.length > 1 && a.each(f, function(t) {
                u.push(s.callbacks.labelColor.call(r, t, c))
              }), a.extend(l, {
                title: r.getTitle(f, h),
                beforeBody: r.getBeforeBody(f, h),
                body: r.getBody(f, h),
                afterBody: r.getAfterBody(f, h),
                footer: r.getFooter(f, h),
                x: Math.round(p.x),
                y: Math.round(p.y),
                caretPadding: a.getValueOrDefault(p.padding, 2),
                labelColors: u
              });
              var g = r.getTooltipSize(l);
              r.determineAlignment(g), a.extend(l, r.getBackgroundPoint(l, g))
            } else r._model.opacity = 0;
            return t && s.custom && s.custom.call(r, l), r
          },
          getTooltipSize: function(t) {
            var e = this._chart.ctx,
              i = {
                height: 2 * t.yPadding,
                width: 0
              },
              n = t.body,
              o = n.reduce(function(t, e) {
                return t + e.before.length + e.lines.length + e.after.length
              }, 0);
            o += t.beforeBody.length + t.afterBody.length;
            var r = t.title.length,
              s = t.footer.length,
              l = t.titleFontSize,
              d = t.bodyFontSize,
              h = t.footerFontSize;
            i.height += r * l, i.height += (r - 1) * t.titleSpacing, i.height += r ? t.titleMarginBottom : 0, i.height += o * d, i.height += o ? (o - 1) * t.bodySpacing : 0, i.height += s ? t.footerMarginTop : 0, i.height += s * h, i.height += s ? (s - 1) * t.footerSpacing : 0;
            var c = 0,
              u = function(t) {
                i.width = Math.max(i.width, e.measureText(t).width + c)
              };
            return e.font = a.fontString(l, t._titleFontStyle, t._titleFontFamily), a.each(t.title, u), e.font = a.fontString(d, t._bodyFontStyle, t._bodyFontFamily), a.each(t.beforeBody.concat(t.afterBody), u), c = n.length > 1 ? d + 2 : 0, a.each(n, function(t) {
              a.each(t.before, u), a.each(t.lines, u), a.each(t.after, u)
            }), c = 0, e.font = a.fontString(h, t._footerFontStyle, t._footerFontFamily), a.each(t.footer, u), i.width += 2 * t.xPadding, i
          },
          determineAlignment: function(t) {
            var e = this,
              i = e._model,
              n = e._chart,
              a = e._chartInstance.chartArea;
            i.y < t.height ? i.yAlign = "top" : i.y > n.height - t.height && (i.yAlign = "bottom");
            var o, r, s, l, d, h = (a.left + a.right) / 2,
              c = (a.top + a.bottom) / 2;
            "center" === i.yAlign ? (o = function(t) {
              return h >= t
            }, r = function(t) {
              return t > h
            }) : (o = function(e) {
              return e <= t.width / 2
            }, r = function(e) {
              return e >= n.width - t.width / 2
            }), s = function(e) {
              return e + t.width > n.width
            }, l = function(e) {
              return e - t.width < 0
            }, d = function(t) {
              return c >= t ? "top" : "bottom"
            }, o(i.x) ? (i.xAlign = "left", s(i.x) && (i.xAlign = "center", i.yAlign = d(i.y))) : r(i.x) && (i.xAlign = "right", l(i.x) && (i.xAlign = "center", i.yAlign = d(i.y)))
          },
          getBackgroundPoint: function(t, e) {
            var i = {
                x: t.x,
                y: t.y
              },
              n = t.caretSize,
              a = t.caretPadding,
              o = t.cornerRadius,
              r = t.xAlign,
              s = t.yAlign,
              l = n + a,
              d = o + a;
            return "right" === r ? i.x -= e.width : "center" === r && (i.x -= e.width / 2), "top" === s ? i.y += l : "bottom" === s ? i.y -= e.height + l : i.y -= e.height / 2, "center" === s ? "left" === r ? i.x += l : "right" === r && (i.x -= l) : "left" === r ? i.x -= d : "right" === r && (i.x += d), i
          },
          drawCaret: function(t, e, i) {
            var n, o, r, s, l, d, h = this._view,
              c = this._chart.ctx,
              u = h.caretSize,
              p = h.cornerRadius,
              f = h.xAlign,
              g = h.yAlign,
              m = t.x,
              v = t.y,
              b = e.width,
              y = e.height;
            "center" === g ? ("left" === f ? (n = m, o = n - u, r = n) : (n = m + b, o = n + u, r = n), l = v + y / 2, s = l - u, d = l + u) : ("left" === f ? (n = m + p, o = n + u, r = o + u) : "right" === f ? (n = m + b - p, o = n - u, r = o - u) : (o = m + b / 2, n = o - u, r = o + u), "top" === g ? (s = v, l = s - u, d = s) : (s = v + y, l = s + u, d = s));
            var x = a.color(h.backgroundColor);
            c.fillStyle = x.alpha(i * x.alpha()).rgbString(), c.beginPath(), c.moveTo(n, s), c.lineTo(o, l), c.lineTo(r, d), c.closePath(), c.fill()
          },
          drawTitle: function(t, e, i, n) {
            var o = e.title;
            if (o.length) {
              i.textAlign = e._titleAlign, i.textBaseline = "top";
              var r = e.titleFontSize,
                s = e.titleSpacing,
                l = a.color(e.titleFontColor);
              i.fillStyle = l.alpha(n * l.alpha()).rgbString(), i.font = a.fontString(r, e._titleFontStyle, e._titleFontFamily);
              var d, h;
              for (d = 0, h = o.length; h > d; ++d) i.fillText(o[d], t.x, t.y), t.y += r + s, d + 1 === o.length && (t.y += e.titleMarginBottom - s)
            }
          },
          drawBody: function(t, e, i, n) {
            var o = e.bodyFontSize,
              r = e.bodySpacing,
              s = e.body;
            i.textAlign = e._bodyAlign, i.textBaseline = "top";
            var l = a.color(e.bodyFontColor),
              d = l.alpha(n * l.alpha()).rgbString();
            i.fillStyle = d, i.font = a.fontString(o, e._bodyFontStyle, e._bodyFontFamily);
            var h = 0,
              c = function(e) {
                i.fillText(e, t.x + h, t.y), t.y += o + r
              };
            a.each(e.beforeBody, c);
            var u = s.length > 1;
            h = u ? o + 2 : 0, a.each(s, function(r, s) {
              a.each(r.before, c), a.each(r.lines, function(r) {
                u && (i.fillStyle = a.color(e.legendColorBackground).alpha(n).rgbaString(), i.fillRect(t.x, t.y, o, o), i.strokeStyle = a.color(e.labelColors[s].borderColor).alpha(n).rgbaString(), i.strokeRect(t.x, t.y, o, o), i.fillStyle = a.color(e.labelColors[s].backgroundColor).alpha(n).rgbaString(), i.fillRect(t.x + 1, t.y + 1, o - 2, o - 2), i.fillStyle = d), c(r)
              }), a.each(r.after, c)
            }), h = 0, a.each(e.afterBody, c), t.y -= r
          },
          drawFooter: function(t, e, i, n) {
            var o = e.footer;
            if (o.length) {
              t.y += e.footerMarginTop, i.textAlign = e._footerAlign, i.textBaseline = "top";
              var r = a.color(e.footerFontColor);
              i.fillStyle = r.alpha(n * r.alpha()).rgbString(), i.font = a.fontString(e.footerFontSize, e._footerFontStyle, e._footerFontFamily), a.each(o, function(n) {
                i.fillText(n, t.x, t.y), t.y += e.footerFontSize + e.footerSpacing
              })
            }
          },
          draw: function() {
            var t = this._chart.ctx,
              e = this._view;
            if (0 !== e.opacity) {
              var i = this.getTooltipSize(e),
                n = {
                  x: e.x,
                  y: e.y
                },
                o = Math.abs(e.opacity < .001) ? 0 : e.opacity;
              if (this._options.enabled) {
                var r = a.color(e.backgroundColor);
                t.fillStyle = r.alpha(o * r.alpha()).rgbString(), a.drawRoundedRectangle(t, n.x, n.y, i.width, i.height, e.cornerRadius), t.fill(), this.drawCaret(n, i, o), n.x += e.xPadding, n.y += e.yPadding, this.drawTitle(n, e, t, o), this.drawBody(n, e, t, o), this.drawFooter(n, e, t, o)
              }
            }
          }
        })
      }
    }, {}],
    35: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        var e = t.helpers,
          i = t.defaults.global;
        i.elements.arc = {
          backgroundColor: i.defaultColor,
          borderColor: "#fff",
          borderWidth: 2
        }, t.elements.Arc = t.Element.extend({
          inLabelRange: function(t) {
            var e = this._view;
            return e ? Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2) : !1
          },
          inRange: function(t, i) {
            var n = this._view;
            if (n) {
              for (var a = e.getAngleFromPoint(n, {
                  x: t,
                  y: i
                }), o = a.angle, r = a.distance, s = n.startAngle, l = n.endAngle; s > l;) l += 2 * Math.PI;
              for (; o > l;) o -= 2 * Math.PI;
              for (; s > o;) o += 2 * Math.PI;
              var d = o >= s && l >= o,
                h = r >= n.innerRadius && r <= n.outerRadius;
              return d && h
            }
            return !1
          },
          tooltipPosition: function() {
            var t = this._view,
              e = t.startAngle + (t.endAngle - t.startAngle) / 2,
              i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
            return {
              x: t.x + Math.cos(e) * i,
              y: t.y + Math.sin(e) * i
            }
          },
          draw: function() {
            var t = this._chart.ctx,
              e = this._view,
              i = e.startAngle,
              n = e.endAngle;
            t.beginPath(), t.arc(e.x, e.y, e.outerRadius, i, n), t.arc(e.x, e.y, e.innerRadius, n, i, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
          }
        })
      }
    }, {}],
    36: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        var e = t.helpers,
          i = t.defaults.global;
        t.defaults.global.elements.line = {
          tension: .4,
          backgroundColor: i.defaultColor,
          borderWidth: 3,
          borderColor: i.defaultColor,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          capBezierPoints: !0,
          fill: !0
        }, t.elements.Line = t.Element.extend({
          lineToNextPoint: function(t, e, i, n, a) {
            var o = this,
              r = o._chart.ctx,
              s = o._view ? o._view.spanGaps : !1;
            e._view.skip && !s ? n.call(o, t, e, i) : t._view.skip && !s ? a.call(o, t, e, i) : e._view.steppedLine === !0 ? (r.lineTo(e._view.x, t._view.y), r.lineTo(e._view.x, e._view.y)) : 0 === e._view.tension ? r.lineTo(e._view.x, e._view.y) : r.bezierCurveTo(t._view.controlPointNextX, t._view.controlPointNextY, e._view.controlPointPreviousX, e._view.controlPointPreviousY, e._view.x, e._view.y)
          },
          draw: function() {
            function t(t) {
              r._view.skip || s._view.skip ? t && o.lineTo(n._view.scaleZero.x, n._view.scaleZero.y) : o.bezierCurveTo(s._view.controlPointNextX, s._view.controlPointNextY, r._view.controlPointPreviousX, r._view.controlPointPreviousY, r._view.x, r._view.y)
            }
            var n = this,
              a = n._view,
              o = n._chart.ctx,
              r = n._children[0],
              s = n._children[n._children.length - 1];
            o.save(), n._children.length > 0 && a.fill && (o.beginPath(), e.each(n._children, function(t, i) {
              var r = e.previousItem(n._children, i),
                s = e.nextItem(n._children, i);
              0 === i ? (n._loop ? o.moveTo(a.scaleZero.x, a.scaleZero.y) : o.moveTo(t._view.x, a.scaleZero), t._view.skip ? n._loop || o.moveTo(s._view.x, n._view.scaleZero) : o.lineTo(t._view.x, t._view.y)) : n.lineToNextPoint(r, t, s, function(t, e, i) {
                n._loop ? o.lineTo(n._view.scaleZero.x, n._view.scaleZero.y) : (o.lineTo(t._view.x, n._view.scaleZero), o.moveTo(i._view.x, n._view.scaleZero))
              }, function(t, e) {
                o.lineTo(e._view.x, e._view.y)
              })
            }, n), n._loop ? t(!0) : (o.lineTo(n._children[n._children.length - 1]._view.x, a.scaleZero), o.lineTo(n._children[0]._view.x, a.scaleZero)), o.fillStyle = a.backgroundColor || i.defaultColor, o.closePath(), o.fill());
            var l = i.elements.line;
            o.lineCap = a.borderCapStyle || l.borderCapStyle, o.setLineDash && o.setLineDash(a.borderDash || l.borderDash), o.lineDashOffset = a.borderDashOffset || l.borderDashOffset, o.lineJoin = a.borderJoinStyle || l.borderJoinStyle, o.lineWidth = a.borderWidth || l.borderWidth, o.strokeStyle = a.borderColor || i.defaultColor, o.beginPath(), e.each(n._children, function(t, i) {
              var a = e.previousItem(n._children, i),
                r = e.nextItem(n._children, i);
              0 === i ? o.moveTo(t._view.x, t._view.y) : n.lineToNextPoint(a, t, r, function(t, e, i) {
                o.moveTo(i._view.x, i._view.y)
              }, function(t, e) {
                o.moveTo(e._view.x, e._view.y)
              })
            }, n), n._loop && n._children.length > 0 && t(), o.stroke(), o.restore()
          }
        })
      }
    }, {}],
    37: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        var e = t.helpers,
          i = t.defaults.global,
          n = i.defaultColor;
        i.elements.point = {
          radius: 3,
          pointStyle: "circle",
          backgroundColor: n,
          borderWidth: 1,
          borderColor: n,
          hitRadius: 1,
          hoverRadius: 4,
          hoverBorderWidth: 1
        }, t.elements.Point = t.Element.extend({
          inRange: function(t, e) {
            var i = this._view;
            return i ? Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2) : !1
          },
          inLabelRange: function(t) {
            var e = this._view;
            return e ? Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2) : !1
          },
          tooltipPosition: function() {
            var t = this._view;
            return {
              x: t.x,
              y: t.y,
              padding: t.radius + t.borderWidth
            }
          },
          draw: function() {
            var a = this._view,
              o = this._chart.ctx,
              r = a.pointStyle,
              s = a.radius,
              l = a.x,
              d = a.y;
            a.skip || (o.strokeStyle = a.borderColor || n, o.lineWidth = e.getValueOrDefault(a.borderWidth, i.elements.point.borderWidth), o.fillStyle = a.backgroundColor || n, t.canvasHelpers.drawPoint(o, r, s, l, d))
          }
        })
      }
    }, {}],
    38: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        var e = t.defaults.global;
        e.elements.rectangle = {
          backgroundColor: e.defaultColor,
          borderWidth: 0,
          borderColor: e.defaultColor,
          borderSkipped: "bottom"
        }, t.elements.Rectangle = t.Element.extend({
          draw: function() {
            function t(t) {
              return l[(h + t) % 4]
            }
            var e = this._chart.ctx,
              i = this._view,
              n = i.width / 2,
              a = i.x - n,
              o = i.x + n,
              r = i.base - (i.base - i.y),
              s = i.borderWidth / 2;
            i.borderWidth && (a += s, o -= s, r += s), e.beginPath(), e.fillStyle = i.backgroundColor, e.strokeStyle = i.borderColor, e.lineWidth = i.borderWidth;
            var l = [
                [a, i.base],
                [a, r],
                [o, r],
                [o, i.base]
              ],
              d = ["bottom", "left", "top", "right"],
              h = d.indexOf(i.borderSkipped, 0); - 1 === h && (h = 0), e.moveTo.apply(e, t(0));
            for (var c = 1; 4 > c; c++) e.lineTo.apply(e, t(c));
            e.fill(), i.borderWidth && e.stroke()
          },
          height: function() {
            var t = this._view;
            return t.base - t.y
          },
          inRange: function(t, e) {
            var i = this._view;
            return i ? i.y < i.base ? t >= i.x - i.width / 2 && t <= i.x + i.width / 2 && e >= i.y && e <= i.base : t >= i.x - i.width / 2 && t <= i.x + i.width / 2 && e >= i.base && e <= i.y : !1
          },
          inLabelRange: function(t) {
            var e = this._view;
            return e ? t >= e.x - e.width / 2 && t <= e.x + e.width / 2 : !1
          },
          tooltipPosition: function() {
            var t = this._view;
            return {
              x: t.x,
              y: t.y
            }
          }
        })
      }
    }, {}],
    39: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        var e = t.helpers,
          i = {
            position: "bottom"
          },
          n = t.Scale.extend({
            getLabels: function() {
              var t = this.chart.data;
              return (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
            },
            determineDataLimits: function() {
              var t = this,
                i = t.getLabels();
              t.minIndex = 0, t.maxIndex = i.length - 1;
              var n;
              void 0 !== t.options.ticks.min && (n = e.indexOf(i, t.options.ticks.min), t.minIndex = -1 !== n ? n : t.minIndex), void 0 !== t.options.ticks.max && (n = e.indexOf(i, t.options.ticks.max), t.maxIndex = -1 !== n ? n : t.maxIndex), t.min = i[t.minIndex], t.max = i[t.maxIndex]
            },
            buildTicks: function() {
              var t = this,
                e = t.getLabels();
              t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
            },
            getLabelForIndex: function(t) {
              return this.ticks[t]
            },
            getPixelForValue: function(t, e, i, n) {
              var a = this,
                o = Math.max(a.maxIndex + 1 - a.minIndex - (a.options.gridLines.offsetGridLines ? 0 : 1), 1);
              if (void 0 !== t) {
                var r = a.getLabels(),
                  s = r.indexOf(t);
                e = -1 !== s ? s : e
              }
              if (a.isHorizontal()) {
                var l = a.width - (a.paddingLeft + a.paddingRight),
                  d = l / o,
                  h = d * (e - a.minIndex) + a.paddingLeft;
                return a.options.gridLines.offsetGridLines && n && (h += d / 2), a.left + Math.round(h)
              }
              var c = a.height - (a.paddingTop + a.paddingBottom),
                u = c / o,
                p = u * (e - a.minIndex) + a.paddingTop;
              return a.options.gridLines.offsetGridLines && n && (p += u / 2), a.top + Math.round(p)
            },
            getPixelForTick: function(t, e) {
              return this.getPixelForValue(this.ticks[t], t + this.minIndex, null, e)
            },
            getValueForPixel: function(t) {
              var e, i = this,
                n = Math.max(i.ticks.length - (i.options.gridLines.offsetGridLines ? 0 : 1), 1),
                a = i.isHorizontal(),
                o = a ? i.width - (i.paddingLeft + i.paddingRight) : i.height - (i.paddingTop + i.paddingBottom),
                r = o / n;
              return t -= a ? i.left : i.top, i.options.gridLines.offsetGridLines && (t -= r / 2), t -= a ? i.paddingLeft : i.paddingTop, e = 0 >= t ? 0 : Math.round(t / r)
            },
            getBasePixel: function() {
              return this.bottom
            }
          });
        t.scaleService.registerScaleType("category", n, i)
      }
    }, {}],
    40: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        var e = t.helpers,
          i = {
            position: "left",
            ticks: {
              callback: function(t, i, n) {
                var a = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                Math.abs(a) > 1 && t !== Math.floor(t) && (a = t - Math.floor(t));
                var o = e.log10(Math.abs(a)),
                  r = "";
                if (0 !== t) {
                  var s = -1 * Math.floor(o);
                  s = Math.max(Math.min(s, 20), 0), r = t.toFixed(s)
                } else r = "0";
                return r
              }
            }
          },
          n = t.LinearScaleBase.extend({
            determineDataLimits: function() {
              function t(t) {
                return s ? t.xAxisID === i.id : t.yAxisID === i.id
              }
              var i = this,
                n = i.options,
                a = i.chart,
                o = a.data,
                r = o.datasets,
                s = i.isHorizontal();
              if (i.min = null, i.max = null, n.stacked) {
                var l = {},
                  d = !1,
                  h = !1;
                e.each(r, function(o, r) {
                  var s = a.getDatasetMeta(r);
                  void 0 === l[s.type] && (l[s.type] = {
                    positiveValues: [],
                    negativeValues: []
                  });
                  var c = l[s.type].positiveValues,
                    u = l[s.type].negativeValues;
                  a.isDatasetVisible(r) && t(s) && e.each(o.data, function(t, e) {
                    var a = +i.getRightValue(t);
                    isNaN(a) || s.data[e].hidden || (c[e] = c[e] || 0, u[e] = u[e] || 0, n.relativePoints ? c[e] = 100 : 0 > a ? (h = !0, u[e] += a) : (d = !0, c[e] += a))
                  })
                }), e.each(l, function(t) {
                  var n = t.positiveValues.concat(t.negativeValues),
                    a = e.min(n),
                    o = e.max(n);
                  i.min = null === i.min ? a : Math.min(i.min, a), i.max = null === i.max ? o : Math.max(i.max, o)
                })
              } else e.each(r, function(n, o) {
                var r = a.getDatasetMeta(o);
                a.isDatasetVisible(o) && t(r) && e.each(n.data, function(t, e) {
                  var n = +i.getRightValue(t);
                  isNaN(n) || r.data[e].hidden || (null === i.min ? i.min = n : n < i.min && (i.min = n), null === i.max ? i.max = n : n > i.max && (i.max = n))
                })
              });
              this.handleTickRangeOptions()
            },
            getTickLimit: function() {
              var i, n = this,
                a = n.options.ticks;
              if (n.isHorizontal()) i = Math.min(a.maxTicksLimit ? a.maxTicksLimit : 11, Math.ceil(n.width / 50));
              else {
                var o = e.getValueOrDefault(a.fontSize, t.defaults.global.defaultFontSize);
                i = Math.min(a.maxTicksLimit ? a.maxTicksLimit : 11, Math.ceil(n.height / (2 * o)))
              }
              return i
            },
            handleDirectionalChanges: function() {
              this.isHorizontal() || this.ticks.reverse()
            },
            getLabelForIndex: function(t, e) {
              return +this.getRightValue(this.chart.data.datasets[e].data[t])
            },
            getPixelForValue: function(t) {
              var e, i, n = this,
                a = n.paddingLeft,
                o = n.paddingBottom,
                r = n.start,
                s = +n.getRightValue(t),
                l = n.end - r;
              return n.isHorizontal() ? (i = n.width - (a + n.paddingRight), e = n.left + i / l * (s - r), Math.round(e + a)) : (i = n.height - (n.paddingTop + o), e = n.bottom - o - i / l * (s - r), Math.round(e))
            },
            getValueForPixel: function(t) {
              var e = this,
                i = e.isHorizontal(),
                n = e.paddingLeft,
                a = e.paddingBottom,
                o = i ? e.width - (n + e.paddingRight) : e.height - (e.paddingTop + a),
                r = (i ? t - e.left - n : e.bottom - a - t) / o;
              return e.start + (e.end - e.start) * r
            },
            getPixelForTick: function(t) {
              return this.getPixelForValue(this.ticksAsNumbers[t])
            }
          });
        t.scaleService.registerScaleType("linear", n, i)
      }
    }, {}],
    41: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        var e = t.helpers,
          i = e.noop;
        t.LinearScaleBase = t.Scale.extend({
          handleTickRangeOptions: function() {
            var t = this,
              i = t.options,
              n = i.ticks;
            if (n.beginAtZero) {
              var a = e.sign(t.min),
                o = e.sign(t.max);
              0 > a && 0 > o ? t.max = 0 : a > 0 && o > 0 && (t.min = 0)
            }
            void 0 !== n.min ? t.min = n.min : void 0 !== n.suggestedMin && (t.min = Math.min(t.min, n.suggestedMin)), void 0 !== n.max ? t.max = n.max : void 0 !== n.suggestedMax && (t.max = Math.max(t.max, n.suggestedMax)), t.min === t.max && (t.max++, n.beginAtZero || t.min--)
          },
          getTickLimit: i,
          handleDirectionalChanges: i,
          buildTicks: function() {
            var t = this,
              i = t.options,
              n = t.ticks = [],
              a = i.ticks,
              o = e.getValueOrDefault,
              r = t.getTickLimit();
            r = Math.max(2, r);
            var s, l = a.fixedStepSize && a.fixedStepSize > 0 || a.stepSize && a.stepSize > 0;
            if (l) s = o(a.fixedStepSize, a.stepSize);
            else {
              var d = e.niceNum(t.max - t.min, !1);
              s = e.niceNum(d / (r - 1), !0)
            }
            var h = Math.floor(t.min / s) * s,
              c = Math.ceil(t.max / s) * s,
              u = (c - h) / s;
            u = e.almostEquals(u, Math.round(u), s / 1e3) ? Math.round(u) : Math.ceil(u), n.push(void 0 !== a.min ? a.min : h);
            for (var p = 1; u > p; ++p) n.push(h + p * s);
            n.push(void 0 !== a.max ? a.max : c), t.handleDirectionalChanges(), t.max = e.max(n), t.min = e.min(n), a.reverse ? (n.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
          },
          convertTicksToLabels: function() {
            var e = this;
            e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e)
          }
        })
      }
    }, {}],
    42: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        var e = t.helpers,
          i = {
            position: "left",
            ticks: {
              callback: function(t, i, n) {
                var a = t / Math.pow(10, Math.floor(e.log10(t)));
                return 1 === a || 2 === a || 5 === a || 0 === i || i === n.length - 1 ? t.toExponential() : ""
              }
            }
          },
          n = t.Scale.extend({
            determineDataLimits: function() {
              function t(t) {
                return d ? t.xAxisID === i.id : t.yAxisID === i.id
              }
              var i = this,
                n = i.options,
                a = n.ticks,
                o = i.chart,
                r = o.data,
                s = r.datasets,
                l = e.getValueOrDefault,
                d = i.isHorizontal();
              if (i.min = null, i.max = null, n.stacked) {
                var h = {};
                e.each(s, function(a, r) {
                  var s = o.getDatasetMeta(r);
                  o.isDatasetVisible(r) && t(s) && (void 0 === h[s.type] && (h[s.type] = []), e.each(a.data, function(t, e) {
                    var a = h[s.type],
                      o = +i.getRightValue(t);
                    isNaN(o) || s.data[e].hidden || (a[e] = a[e] || 0, n.relativePoints ? a[e] = 100 : a[e] += o)
                  }))
                }), e.each(h, function(t) {
                  var n = e.min(t),
                    a = e.max(t);
                  i.min = null === i.min ? n : Math.min(i.min, n), i.max = null === i.max ? a : Math.max(i.max, a)
                })
              } else e.each(s, function(n, a) {
                var r = o.getDatasetMeta(a);
                o.isDatasetVisible(a) && t(r) && e.each(n.data, function(t, e) {
                  var n = +i.getRightValue(t);
                  isNaN(n) || r.data[e].hidden || (null === i.min ? i.min = n : n < i.min && (i.min = n), null === i.max ? i.max = n : n > i.max && (i.max = n))
                })
              });
              i.min = l(a.min, i.min), i.max = l(a.max, i.max), i.min === i.max && (0 !== i.min && null !== i.min ? (i.min = Math.pow(10, Math.floor(e.log10(i.min)) - 1), i.max = Math.pow(10, Math.floor(e.log10(i.max)) + 1)) : (i.min = 1, i.max = 10))
            },
            buildTicks: function() {
              for (var t = this, i = t.options, n = i.ticks, a = e.getValueOrDefault, o = t.ticks = [], r = a(n.min, Math.pow(10, Math.floor(e.log10(t.min)))); r < t.max;) {
                o.push(r);
                var s = Math.floor(e.log10(r)),
                  l = Math.floor(r / Math.pow(10, s)) + 1;
                10 === l && (l = 1, ++s), r = l * Math.pow(10, s)
              }
              var d = a(n.max, r);
              o.push(d), t.isHorizontal() || o.reverse(), t.max = e.max(o), t.min = e.min(o), n.reverse ? (o.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
            },
            convertTicksToLabels: function() {
              this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this)
            },
            getLabelForIndex: function(t, e) {
              return +this.getRightValue(this.chart.data.datasets[e].data[t])
            },
            getPixelForTick: function(t) {
              return this.getPixelForValue(this.tickValues[t])
            },
            getPixelForValue: function(t) {
              var i, n, a = this,
                o = a.start,
                r = +a.getRightValue(t),
                s = e.log10(a.end) - e.log10(o),
                l = a.paddingTop,
                d = a.paddingBottom,
                h = a.paddingLeft;
              return a.isHorizontal() ? 0 === r ? n = a.left + h : (i = a.width - (h + a.paddingRight), n = a.left + i / s * (e.log10(r) - e.log10(o)), n += h) : 0 === r ? n = a.top + l : (i = a.height - (l + d), n = a.bottom - d - i / s * (e.log10(r) - e.log10(o))), n
            },
            getValueForPixel: function(t) {
              var i, n, a = this,
                o = e.log10(a.end) - e.log10(a.start);
              return a.isHorizontal() ? (n = a.width - (a.paddingLeft + a.paddingRight), i = a.start * Math.pow(10, (t - a.left - a.paddingLeft) * o / n)) : (n = a.height - (a.paddingTop + a.paddingBottom), i = Math.pow(10, (a.bottom - a.paddingBottom - t) * o / n) / a.start), i
            }
          });
        t.scaleService.registerScaleType("logarithmic", n, i)
      }
    }, {}],
    43: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        var e = t.helpers,
          i = t.defaults.global,
          n = {
            display: !0,
            animate: !0,
            lineArc: !1,
            position: "chartArea",
            angleLines: {
              display: !0,
              color: "rgba(0, 0, 0, 0.1)",
              lineWidth: 1
            },
            ticks: {
              showLabelBackdrop: !0,
              backdropColor: "rgba(255,255,255,0.75)",
              backdropPaddingY: 2,
              backdropPaddingX: 2
            },
            pointLabels: {
              fontSize: 10,
              callback: function(t) {
                return t
              }
            }
          },
          a = t.LinearScaleBase.extend({
            getValueCount: function() {
              return this.chart.data.labels.length
            },
            setDimensions: function() {
              var t = this,
                n = t.options,
                a = n.ticks;
              t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
              var o = e.min([t.height, t.width]),
                r = e.getValueOrDefault(a.fontSize, i.defaultFontSize);
              t.drawingArea = n.display ? o / 2 - (r / 2 + a.backdropPaddingY) : o / 2
            },
            determineDataLimits: function() {
              var t = this,
                i = t.chart;
              t.min = null, t.max = null, e.each(i.data.datasets, function(n, a) {
                if (i.isDatasetVisible(a)) {
                  var o = i.getDatasetMeta(a);
                  e.each(n.data, function(e, i) {
                    var n = +t.getRightValue(e);
                    isNaN(n) || o.data[i].hidden || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n))
                  })
                }
              }), t.handleTickRangeOptions()
            },
            getTickLimit: function() {
              var t = this.options.ticks,
                n = e.getValueOrDefault(t.fontSize, i.defaultFontSize);
              return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * n)))
            },
            convertTicksToLabels: function() {
              var e = this;
              t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e)
            },
            getLabelForIndex: function(t, e) {
              return +this.getRightValue(this.chart.data.datasets[e].data[t])
            },
            fit: function() {
              var t, n, a, o, r, s, l, d, h, c, u, p, f = this.options.pointLabels,
                g = e.getValueOrDefault(f.fontSize, i.defaultFontSize),
                m = e.getValueOrDefault(f.fontStyle, i.defaultFontStyle),
                v = e.getValueOrDefault(f.fontFamily, i.defaultFontFamily),
                b = e.fontString(g, m, v),
                y = e.min([this.height / 2 - g - 5, this.width / 2]),
                x = this.width,
                w = 0;
              for (this.ctx.font = b, n = 0; n < this.getValueCount(); n++) t = this.getPointPosition(n, y), a = this.ctx.measureText(this.pointLabels[n] ? this.pointLabels[n] : "").width + 5, 0 === n || n === this.getValueCount() / 2 ? (o = a / 2, t.x + o > x && (x = t.x + o, r = n), t.x - o < w && (w = t.x - o, l = n)) : n < this.getValueCount() / 2 ? t.x + a > x && (x = t.x + a, r = n) : n > this.getValueCount() / 2 && t.x - a < w && (w = t.x - a, l = n);
              h = w, c = Math.ceil(x - this.width), s = this.getIndexAngle(r), d = this.getIndexAngle(l), u = c / Math.sin(s + Math.PI / 2), p = h / Math.sin(d + Math.PI / 2), u = e.isNumber(u) ? u : 0, p = e.isNumber(p) ? p : 0, this.drawingArea = Math.round(y - (p + u) / 2), this.setCenterPoint(p, u)
            },
            setCenterPoint: function(t, e) {
              var i = this,
                n = i.width - e - i.drawingArea,
                a = t + i.drawingArea;
              i.xCenter = Math.round((a + n) / 2 + i.left), i.yCenter = Math.round(i.height / 2 + i.top)
            },
            getIndexAngle: function(t) {
              var e = 2 * Math.PI / this.getValueCount();
              return t * e - Math.PI / 2
            },
            getDistanceFromCenterForValue: function(t) {
              var e = this;
              if (null === t) return 0;
              var i = e.drawingArea / (e.max - e.min);
              return e.options.reverse ? (e.max - t) * i : (t - e.min) * i
            },
            getPointPosition: function(t, e) {
              var i = this,
                n = i.getIndexAngle(t);
              return {
                x: Math.round(Math.cos(n) * e) + i.xCenter,
                y: Math.round(Math.sin(n) * e) + i.yCenter
              }
            },
            getPointPositionForValue: function(t, e) {
              return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
            },
            getBasePosition: function() {
              var t = this,
                e = t.min,
                i = t.max;
              return t.getPointPositionForValue(0, t.beginAtZero ? 0 : 0 > e && 0 > i ? i : e > 0 && i > 0 ? e : 0)
            },
            draw: function() {
              var t = this,
                n = t.options,
                a = n.gridLines,
                o = n.ticks,
                r = n.angleLines,
                s = n.pointLabels,
                l = e.getValueOrDefault;
              if (n.display) {
                var d = t.ctx,
                  h = l(o.fontSize, i.defaultFontSize),
                  c = l(o.fontStyle, i.defaultFontStyle),
                  u = l(o.fontFamily, i.defaultFontFamily),
                  p = e.fontString(h, c, u);
                if (e.each(t.ticks, function(r, s) {
                    if (s > 0 || n.reverse) {
                      var c = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]),
                        u = t.yCenter - c;
                      if (a.display && 0 !== s)
                        if (d.strokeStyle = e.getValueAtIndexOrDefault(a.color, s - 1), d.lineWidth = e.getValueAtIndexOrDefault(a.lineWidth, s - 1), n.lineArc) d.beginPath(), d.arc(t.xCenter, t.yCenter, c, 0, 2 * Math.PI), d.closePath(), d.stroke();
                        else {
                          d.beginPath();
                          for (var f = 0; f < t.getValueCount(); f++) {
                            var g = t.getPointPosition(f, c);
                            0 === f ? d.moveTo(g.x, g.y) : d.lineTo(g.x, g.y)
                          }
                          d.closePath(), d.stroke()
                        } if (o.display) {
                        var m = l(o.fontColor, i.defaultFontColor);
                        if (d.font = p, o.showLabelBackdrop) {
                          var v = d.measureText(r).width;
                          d.fillStyle = o.backdropColor, d.fillRect(t.xCenter - v / 2 - o.backdropPaddingX, u - h / 2 - o.backdropPaddingY, v + 2 * o.backdropPaddingX, h + 2 * o.backdropPaddingY)
                        }
                        d.textAlign = "center", d.textBaseline = "middle", d.fillStyle = m, d.fillText(r, t.xCenter, u)
                      }
                    }
                  }), !n.lineArc) {
                  d.lineWidth = r.lineWidth, d.strokeStyle = r.color;
                  for (var f = t.getDistanceFromCenterForValue(n.reverse ? t.min : t.max), g = l(s.fontSize, i.defaultFontSize), m = l(s.fontStyle, i.defaultFontStyle), v = l(s.fontFamily, i.defaultFontFamily), b = e.fontString(g, m, v), y = t.getValueCount() - 1; y >= 0; y--) {
                    if (r.display) {
                      var x = t.getPointPosition(y, f);
                      d.beginPath(), d.moveTo(t.xCenter, t.yCenter), d.lineTo(x.x, x.y), d.stroke(), d.closePath()
                    }
                    var w = t.getPointPosition(y, f + 5),
                      k = l(s.fontColor, i.defaultFontColor);
                    d.font = b, d.fillStyle = k;
                    var C = t.pointLabels,
                      D = C.length,
                      S = C.length / 2,
                      T = S / 2,
                      M = T > y || y > D - T,
                      F = y === T || y === D - T;
                    0 === y ? d.textAlign = "center" : y === S ? d.textAlign = "center" : S > y ? d.textAlign = "left" : d.textAlign = "right", F ? d.textBaseline = "middle" : M ? d.textBaseline = "bottom" : d.textBaseline = "top", d.fillText(C[y] ? C[y] : "", w.x, w.y)
                  }
                }
              }
            }
          });
        t.scaleService.registerScaleType("radialLinear", a, n)
      }
    }, {}],
    44: [function(t, e, i) {
      "use strict";
      var n = t(1);
      n = "function" == typeof n ? n : window.moment, e.exports = function(t) {
        var e = t.helpers,
          i = {
            units: [{
              name: "millisecond",
              steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
            }, {
              name: "second",
              steps: [1, 2, 5, 10, 30]
            }, {
              name: "minute",
              steps: [1, 2, 5, 10, 30]
            }, {
              name: "hour",
              steps: [1, 2, 3, 6, 12]
            }, {
              name: "day",
              steps: [1, 2, 5]
            }, {
              name: "week",
              maxStep: 4
            }, {
              name: "month",
              maxStep: 3
            }, {
              name: "quarter",
              maxStep: 4
            }, {
              name: "year",
              maxStep: !1
            }]
          },
          a = {
            position: "bottom",
            time: {
              parser: !1,
              format: !1,
              unit: !1,
              round: !1,
              displayFormat: !1,
              isoWeekday: !1,
              displayFormats: {
                millisecond: "h:mm:ss.SSS a",
                second: "h:mm:ss a",
                minute: "h:mm:ss a",
                hour: "MMM D, hA",
                day: "ll",
                week: "ll",
                month: "MMM YYYY",
                quarter: "[Q]Q - YYYY",
                year: "YYYY"
              }
            },
            ticks: {
              autoSkip: !1
            }
          },
          o = t.Scale.extend({
            initialize: function() {
              if (!n) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
              t.Scale.prototype.initialize.call(this)
            },
            getLabelMoment: function(t, e) {
              return this.labelMoments[t][e]
            },
            getMomentStartOf: function(t) {
              var e = this;
              return "week" === e.options.time.unit && e.options.time.isoWeekday !== !1 ? t.clone().startOf("isoWeek").isoWeekday(e.options.time.isoWeekday) : t.clone().startOf(e.tickUnit)
            },
            determineDataLimits: function() {
              var t = this;
              t.labelMoments = [];
              var i = [];
              t.chart.data.labels && t.chart.data.labels.length > 0 ? (e.each(t.chart.data.labels, function(e) {
                var n = t.parseTime(e);
                n.isValid() && (t.options.time.round && n.startOf(t.options.time.round), i.push(n))
              }, t), t.firstTick = n.min.call(t, i), t.lastTick = n.max.call(t, i)) : (t.firstTick = null, t.lastTick = null), e.each(t.chart.data.datasets, function(a, o) {
                var r = [],
                  s = t.chart.isDatasetVisible(o);
                "object" == typeof a.data[0] && null !== a.data[0] ? e.each(a.data, function(e) {
                  var i = t.parseTime(t.getRightValue(e));
                  i.isValid() && (t.options.time.round && i.startOf(t.options.time.round), r.push(i), s && (t.firstTick = null !== t.firstTick ? n.min(t.firstTick, i) : i, t.lastTick = null !== t.lastTick ? n.max(t.lastTick, i) : i))
                }, t) : r = i, t.labelMoments.push(r)
              }, t), t.options.time.min && (t.firstTick = t.parseTime(t.options.time.min)), t.options.time.max && (t.lastTick = t.parseTime(t.options.time.max)), t.firstTick = (t.firstTick || n()).clone(), t.lastTick = (t.lastTick || n()).clone()
            },
            buildTicks: function() {
              var n = this;
              n.ctx.save();
              var a = e.getValueOrDefault(n.options.ticks.fontSize, t.defaults.global.defaultFontSize),
                o = e.getValueOrDefault(n.options.ticks.fontStyle, t.defaults.global.defaultFontStyle),
                r = e.getValueOrDefault(n.options.ticks.fontFamily, t.defaults.global.defaultFontFamily),
                s = e.fontString(a, o, r);
              if (n.ctx.font = s, n.ticks = [], n.unitScale = 1, n.scaleSizeInUnits = 0, n.options.time.unit) n.tickUnit = n.options.time.unit || "day", n.displayFormat = n.options.time.displayFormats[n.tickUnit], n.scaleSizeInUnits = n.lastTick.diff(n.firstTick, n.tickUnit, !0), n.unitScale = e.getValueOrDefault(n.options.time.unitStepSize, 1);
              else {
                var l = n.isHorizontal() ? n.width - (n.paddingLeft + n.paddingRight) : n.height - (n.paddingTop + n.paddingBottom),
                  d = n.tickFormatFunction(n.firstTick, 0, []),
                  h = n.ctx.measureText(d).width,
                  c = Math.cos(e.toRadians(n.options.ticks.maxRotation)),
                  u = Math.sin(e.toRadians(n.options.ticks.maxRotation));
                h = h * c + a * u;
                var p = l / h;
                n.tickUnit = "millisecond", n.scaleSizeInUnits = n.lastTick.diff(n.firstTick, n.tickUnit, !0), n.displayFormat = n.options.time.displayFormats[n.tickUnit];
                for (var f = 0, g = i.units[f]; f < i.units.length;) {
                  if (n.unitScale = 1, e.isArray(g.steps) && Math.ceil(n.scaleSizeInUnits / p) < e.max(g.steps)) {
                    for (var m = 0; m < g.steps.length; ++m)
                      if (g.steps[m] >= Math.ceil(n.scaleSizeInUnits / p)) {
                        n.unitScale = e.getValueOrDefault(n.options.time.unitStepSize, g.steps[m]);
                        break
                      } break
                  }
                  if (g.maxStep === !1 || Math.ceil(n.scaleSizeInUnits / p) < g.maxStep) {
                    n.unitScale = e.getValueOrDefault(n.options.time.unitStepSize, Math.ceil(n.scaleSizeInUnits / p));
                    break
                  }++f, g = i.units[f], n.tickUnit = g.name;
                  var v = n.firstTick.diff(n.getMomentStartOf(n.firstTick), n.tickUnit, !0),
                    b = n.getMomentStartOf(n.lastTick.clone().add(1, n.tickUnit)).diff(n.lastTick, n.tickUnit, !0);
                  n.scaleSizeInUnits = n.lastTick.diff(n.firstTick, n.tickUnit, !0) + v + b, n.displayFormat = n.options.time.displayFormats[g.name]
                }
              }
              var y;
              if (n.options.time.min ? y = n.getMomentStartOf(n.firstTick) : (n.firstTick = n.getMomentStartOf(n.firstTick), y = n.firstTick), !n.options.time.max) {
                var x = n.getMomentStartOf(n.lastTick);
                0 !== x.diff(n.lastTick, n.tickUnit, !0) && (n.lastTick = n.getMomentStartOf(n.lastTick.add(1, n.tickUnit)))
              }
              n.smallestLabelSeparation = n.width, e.each(n.chart.data.datasets, function(t, e) {
                for (var i = 1; i < n.labelMoments[e].length; i++) n.smallestLabelSeparation = Math.min(n.smallestLabelSeparation, n.labelMoments[e][i].diff(n.labelMoments[e][i - 1], n.tickUnit, !0))
              }, n), n.options.time.displayFormat && (n.displayFormat = n.options.time.displayFormat), n.ticks.push(n.firstTick.clone());
              for (var w = 1; w <= n.scaleSizeInUnits; ++w) {
                var k = y.clone().add(w, n.tickUnit);
                if (n.options.time.max && k.diff(n.lastTick, n.tickUnit, !0) >= 0) break;
                w % n.unitScale === 0 && n.ticks.push(k)
              }
              var C = n.ticks[n.ticks.length - 1].diff(n.lastTick, n.tickUnit);
              (0 !== C || 0 === n.scaleSizeInUnits) && (n.options.time.max ? (n.ticks.push(n.lastTick.clone()), n.scaleSizeInUnits = n.lastTick.diff(n.ticks[0], n.tickUnit, !0)) : (n.ticks.push(n.lastTick.clone()), n.scaleSizeInUnits = n.lastTick.diff(n.firstTick, n.tickUnit, !0))), n.ctx.restore()
            },
            getLabelForIndex: function(t, e) {
              var i = this,
                n = i.chart.data.labels && t < i.chart.data.labels.length ? i.chart.data.labels[t] : "";
              return "object" == typeof i.chart.data.datasets[e].data[0] && (n = i.getRightValue(i.chart.data.datasets[e].data[t])), i.options.time.tooltipFormat && (n = i.parseTime(n).format(i.options.time.tooltipFormat)), n
            },
            tickFormatFunction: function(t, i, n) {
              var a = t.format(this.displayFormat),
                o = this.options.ticks,
                r = e.getValueOrDefault(o.callback, o.userCallback);
              return r ? r(a, i, n) : a
            },
            convertTicksToLabels: function() {
              var t = this;
              t.tickMoments = t.ticks, t.ticks = t.ticks.map(t.tickFormatFunction, t)
            },
            getPixelForValue: function(t, e, i) {
              var a = this;
              t && t.isValid || (t = n(a.getRightValue(t)));
              var o = t && t.isValid && t.isValid() ? t : a.getLabelMoment(i, e);
              if (o) {
                var r = o.diff(a.firstTick, a.tickUnit, !0),
                  s = 0 !== r ? r / a.scaleSizeInUnits : r;
                if (a.isHorizontal()) {
                  var l = a.width - (a.paddingLeft + a.paddingRight),
                    d = l * s + a.paddingLeft;
                  return a.left + Math.round(d)
                }
                var h = a.height - (a.paddingTop + a.paddingBottom),
                  c = h * s + a.paddingTop;
                return a.top + Math.round(c)
              }
            },
            getPixelForTick: function(t) {
              return this.getPixelForValue(this.tickMoments[t], null, null)
            },
            getValueForPixel: function(t) {
              var e = this,
                i = e.isHorizontal() ? e.width - (e.paddingLeft + e.paddingRight) : e.height - (e.paddingTop + e.paddingBottom),
                a = (t - (e.isHorizontal() ? e.left + e.paddingLeft : e.top + e.paddingTop)) / i;
              return a *= e.scaleSizeInUnits, e.firstTick.clone().add(n.duration(a, e.tickUnit).asSeconds(), "seconds")
            },
            parseTime: function(t) {
              var e = this;
              return "string" == typeof e.options.time.parser ? n(t, e.options.time.parser) : "function" == typeof e.options.time.parser ? e.options.time.parser(t) : "function" == typeof t.getMonth || "number" == typeof t ? n(t) : t.isValid && t.isValid() ? t : "string" != typeof e.options.time.format && e.options.time.format.call ? (console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale"), e.options.time.format(t)) : n(t, e.options.time.format)
            }
          });
        t.scaleService.registerScaleType("time", o, a)
      }
    }, {
      1: 1
    }]
  }, {}, [7])(7)
}),
/*! X-editable - v1.5.1
 * In-place editing with Twitter Bootstrap, jQuery UI or pure jQuery
 * http://github.com/vitalets/x-editable
 * Copyright (c) 2013 Vitaliy Potapov; Licensed MIT */
! function(t) {
  "use strict";
  var e = function(e, i) {
    this.options = t.extend({}, t.fn.editableform.defaults, i), this.$div = t(e), this.options.scope || (this.options.scope = this)
  };
  e.prototype = {
    constructor: e,
    initInput: function() {
      this.input = this.options.input, this.value = this.input.str2value(this.options.value), this.input.prerender()
    },
    initTemplate: function() {
      this.$form = t(t.fn.editableform.template)
    },
    initButtons: function() {
      var e = this.$form.find(".editable-buttons");
      e.append(t.fn.editableform.buttons), "bottom" === this.options.showbuttons && e.addClass("editable-buttons-bottom")
    },
    render: function() {
      this.$loading = t(t.fn.editableform.loading), this.$div.empty().append(this.$loading), this.initTemplate(), this.options.showbuttons ? this.initButtons() : this.$form.find(".editable-buttons").remove(), this.showLoading(), this.isSaving = !1, this.$div.triggerHandler("rendering"), this.initInput(), this.$form.find("div.editable-input").append(this.input.$tpl), this.$div.append(this.$form), t.when(this.input.render()).then(t.proxy(function() {
        if (this.options.showbuttons || this.input.autosubmit(), this.$form.find(".editable-cancel").click(t.proxy(this.cancel, this)), this.input.error) this.error(this.input.error), this.$form.find(".editable-submit").attr("disabled", !0), this.input.$input.attr("disabled", !0), this.$form.submit(function(t) {
          t.preventDefault()
        });
        else {
          this.error(!1), this.input.$input.removeAttr("disabled"), this.$form.find(".editable-submit").removeAttr("disabled");
          var e = null === this.value || void 0 === this.value || "" === this.value ? this.options.defaultValue : this.value;
          this.input.value2input(e), this.$form.submit(t.proxy(this.submit, this))
        }
        this.$div.triggerHandler("rendered"), this.showForm(), this.input.postrender && this.input.postrender()
      }, this))
    },
    cancel: function() {
      this.$div.triggerHandler("cancel")
    },
    showLoading: function() {
      var t, e;
      this.$form ? (t = this.$form.outerWidth(), e = this.$form.outerHeight(), t && this.$loading.width(t), e && this.$loading.height(e), this.$form.hide()) : (t = this.$loading.parent().width(), t && this.$loading.width(t)), this.$loading.show()
    },
    showForm: function(t) {
      this.$loading.hide(), this.$form.show(), t !== !1 && this.input.activate(), this.$div.triggerHandler("show")
    },
    error: function(e) {
      var i, n = this.$form.find(".control-group"),
        a = this.$form.find(".editable-error-block");
      if (e === !1) n.removeClass(t.fn.editableform.errorGroupClass), a.removeClass(t.fn.editableform.errorBlockClass).empty().hide();
      else {
        if (e) {
          i = ("" + e).split("\n");
          for (var o = 0; o < i.length; o++) i[o] = t("<div>").text(i[o]).html();
          e = i.join("<br>")
        }
        n.addClass(t.fn.editableform.errorGroupClass), a.addClass(t.fn.editableform.errorBlockClass).html(e).show()
      }
    },
    submit: function(e) {
      e.stopPropagation(), e.preventDefault();
      var i = this.input.input2value(),
        n = this.validate(i);
      if ("object" === t.type(n) && void 0 !== n.newValue) {
        if (i = n.newValue, this.input.value2input(i), "string" == typeof n.msg) return this.error(n.msg), void this.showForm()
      } else if (n) return this.error(n), void this.showForm();
      if (!this.options.savenochange && this.input.value2str(i) == this.input.value2str(this.value)) return void this.$div.triggerHandler("nochange");
      var a = this.input.value2submit(i);
      this.isSaving = !0, t.when(this.save(a)).done(t.proxy(function(t) {
        this.isSaving = !1;
        var e = "function" == typeof this.options.success ? this.options.success.call(this.options.scope, t, i) : null;
        return e === !1 ? (this.error(!1), void this.showForm(!1)) : "string" == typeof e ? (this.error(e), void this.showForm()) : (e && "object" == typeof e && e.hasOwnProperty("newValue") && (i = e.newValue), this.error(!1), this.value = i, void this.$div.triggerHandler("save", {
          newValue: i,
          submitValue: a,
          response: t
        }))
      }, this)).fail(t.proxy(function(t) {
        this.isSaving = !1;
        var e;
        e = "function" == typeof this.options.error ? this.options.error.call(this.options.scope, t, i) : "string" == typeof t ? t : t.responseText || t.statusText || "Unknown error!", this.error(e), this.showForm()
      }, this))
    },
    save: function(e) {
      this.options.pk = t.fn.editableutils.tryParseJson(this.options.pk, !0);
      var i, n = "function" == typeof this.options.pk ? this.options.pk.call(this.options.scope) : this.options.pk,
        a = !!("function" == typeof this.options.url || this.options.url && ("always" === this.options.send || "auto" === this.options.send && null !== n && void 0 !== n));
      return a ? (this.showLoading(), i = {
        name: this.options.name || "",
        value: e,
        pk: n
      }, "function" == typeof this.options.params ? i = this.options.params.call(this.options.scope, i) : (this.options.params = t.fn.editableutils.tryParseJson(this.options.params, !0), t.extend(i, this.options.params)), "function" == typeof this.options.url ? this.options.url.call(this.options.scope, i) : t.ajax(t.extend({
        url: this.options.url,
        data: i,
        type: "POST"
      }, this.options.ajaxOptions))) : void 0
    },
    validate: function(t) {
      return void 0 === t && (t = this.value), "function" == typeof this.options.validate ? this.options.validate.call(this.options.scope, t) : void 0
    },
    option: function(t, e) {
      t in this.options && (this.options[t] = e), "value" === t && this.setValue(e)
    },
    setValue: function(t, e) {
      this.value = e ? this.input.str2value(t) : t, this.$form && this.$form.is(":visible") && this.input.value2input(this.value)
    }
  }, t.fn.editableform = function(i) {
    var n = arguments;
    return this.each(function() {
      var a = t(this),
        o = a.data("editableform"),
        r = "object" == typeof i && i;
      o || a.data("editableform", o = new e(this, r)), "string" == typeof i && o[i].apply(o, Array.prototype.slice.call(n, 1))
    })
  }, t.fn.editableform.Constructor = e, t.fn.editableform.defaults = {
    type: "text",
    url: null,
    params: null,
    name: null,
    pk: null,
    value: null,
    defaultValue: null,
    send: "auto",
    validate: null,
    success: null,
    error: null,
    ajaxOptions: null,
    showbuttons: !0,
    scope: null,
    savenochange: !1
  }, t.fn.editableform.template = '<form class="form-inline editableform"><div class="control-group"><div><div class="editable-input"></div><div class="editable-buttons"></div></div><div class="editable-error-block"></div></div></form>', t.fn.editableform.loading = '<div class="editableform-loading"></div>', t.fn.editableform.buttons = '<button type="submit" class="editable-submit">ok</button><button type="button" class="editable-cancel">cancel</button>', t.fn.editableform.errorGroupClass = null, t.fn.editableform.errorBlockClass = "editable-error", t.fn.editableform.engine = "jquery"
}(window.jQuery),
function(t) {
  "use strict";
  t.fn.editableutils = {
    inherit: function(t, e) {
      var i = function() {};
      i.prototype = e.prototype, t.prototype = new i, t.prototype.constructor = t, t.superclass = e.prototype
    },
    setCursorPosition: function(t, e) {
      if (t.setSelectionRange) t.setSelectionRange(e, e);
      else if (t.createTextRange) {
        var i = t.createTextRange();
        i.collapse(!0), i.moveEnd("character", e), i.moveStart("character", e), i.select()
      }
    },
    tryParseJson: function(t, e) {
      if ("string" == typeof t && t.length && t.match(/^[\{\[].*[\}\]]$/))
        if (e) try {
          t = new Function("return " + t)()
        } catch (i) {} finally {
          return t
        } else t = new Function("return " + t)();
      return t
    },
    sliceObj: function(e, i, n) {
      var a, o, r = {};
      if (!t.isArray(i) || !i.length) return r;
      for (var s = 0; s < i.length; s++) a = i[s], e.hasOwnProperty(a) && (r[a] = e[a]), n !== !0 && (o = a.toLowerCase(), e.hasOwnProperty(o) && (r[a] = e[o]));
      return r
    },
    getConfigData: function(e) {
      var i = {};
      return t.each(e.data(), function(t, e) {
        ("object" != typeof e || e && "object" == typeof e && (e.constructor === Object || e.constructor === Array)) && (i[t] = e)
      }), i
    },
    objectKeys: function(t) {
      if (Object.keys) return Object.keys(t);
      if (t !== Object(t)) throw new TypeError("Object.keys called on a non-object");
      var e, i = [];
      for (e in t) Object.prototype.hasOwnProperty.call(t, e) && i.push(e);
      return i
    },
    escape: function(e) {
      return t("<div>").text(e).html()
    },
    itemsByValue: function(e, i, n) {
      if (!i || null === e) return [];
      if ("function" != typeof n) {
        var a = n || "value";
        n = function(t) {
          return t[a]
        }
      }
      var o = t.isArray(e),
        r = [],
        s = this;
      return t.each(i, function(i, a) {
        if (a.children) r = r.concat(s.itemsByValue(e, a.children, n));
        else if (o) t.grep(e, function(t) {
          return t == (a && "object" == typeof a ? n(a) : a)
        }).length && r.push(a);
        else {
          var l = a && "object" == typeof a ? n(a) : a;
          e == l && r.push(a)
        }
      }), r
    },
    createInput: function(e) {
      var i, n, a, o = e.type;
      return "date" === o && ("inline" === e.mode ? t.fn.editabletypes.datefield ? o = "datefield" : t.fn.editabletypes.dateuifield && (o = "dateuifield") : t.fn.editabletypes.date ? o = "date" : t.fn.editabletypes.dateui && (o = "dateui"), "date" !== o || t.fn.editabletypes.date || (o = "combodate")), "datetime" === o && "inline" === e.mode && (o = "datetimefield"), "wysihtml5" !== o || t.fn.editabletypes[o] || (o = "textarea"), "function" == typeof t.fn.editabletypes[o] ? (i = t.fn.editabletypes[o], n = this.sliceObj(e, this.objectKeys(i.defaults)), a = new i(n)) : (t.error("Unknown type: " + o), !1)
    },
    supportsTransitions: function() {
      var t = document.body || document.documentElement,
        e = t.style,
        i = "transition",
        n = ["Moz", "Webkit", "Khtml", "O", "ms"];
      if ("string" == typeof e[i]) return !0;
      i = i.charAt(0).toUpperCase() + i.substr(1);
      for (var a = 0; a < n.length; a++)
        if ("string" == typeof e[n[a] + i]) return !0;
      return !1
    }
  }
}(window.jQuery),
function(t) {
  "use strict";
  var e = function(t, e) {
      this.init(t, e)
    },
    i = function(t, e) {
      this.init(t, e)
    };
  e.prototype = {
    containerName: null,
    containerDataName: null,
    innerCss: null,
    containerClass: "editable-container editable-popup",
    defaults: {},
    init: function(i, n) {
      this.$element = t(i), this.options = t.extend({}, t.fn.editableContainer.defaults, n), this.splitOptions(), this.formOptions.scope = this.$element[0], this.initContainer(), this.delayedHide = !1, this.$element.on("destroyed", t.proxy(function() {
        this.destroy()
      }, this)), t(document).data("editable-handlers-attached") || (t(document).on("keyup.editable", function(e) {
        27 === e.which && t(".editable-open").editableContainer("hide")
      }), t(document).on("click.editable", function(i) {
        var n, a = t(i.target),
          o = [".editable-container", ".ui-datepicker-header", ".datepicker", ".modal-backdrop", ".bootstrap-wysihtml5-insert-image-modal", ".bootstrap-wysihtml5-insert-link-modal"];
        if (t.contains(document.documentElement, i.target) && !a.is(document)) {
          for (n = 0; n < o.length; n++)
            if (a.is(o[n]) || a.parents(o[n]).length) return;
          e.prototype.closeOthers(i.target)
        }
      }), t(document).data("editable-handlers-attached", !0))
    },
    splitOptions: function() {
      if (this.containerOptions = {}, this.formOptions = {}, !t.fn[this.containerName]) throw new Error(this.containerName + " not found. Have you included corresponding js file?");
      for (var e in this.options) e in this.defaults ? this.containerOptions[e] = this.options[e] : this.formOptions[e] = this.options[e]
    },
    tip: function() {
      return this.container() ? this.container().$tip : null
    },
    container: function() {
      var t;
      return this.containerDataName && (t = this.$element.data(this.containerDataName)) ? t : t = this.$element.data(this.containerName)
    },
    call: function() {
      this.$element[this.containerName].apply(this.$element, arguments)
    },
    initContainer: function() {
      this.call(this.containerOptions)
    },
    renderForm: function() {
      this.$form.editableform(this.formOptions).on({
        save: t.proxy(this.save, this),
        nochange: t.proxy(function() {
          this.hide("nochange")
        }, this),
        cancel: t.proxy(function() {
          this.hide("cancel")
        }, this),
        show: t.proxy(function() {
          this.delayedHide ? (this.hide(this.delayedHide.reason), this.delayedHide = !1) : this.setPosition()
        }, this),
        rendering: t.proxy(this.setPosition, this),
        resize: t.proxy(this.setPosition, this),
        rendered: t.proxy(function() {
          this.$element.triggerHandler("shown", t(this.options.scope).data("editable"))
        }, this)
      }).editableform("render")
    },
    show: function(e) {
      this.$element.addClass("editable-open"), e !== !1 && this.closeOthers(this.$element[0]), this.innerShow(), this.tip().addClass(this.containerClass), this.$form, this.$form = t("<div>"), this.tip().is(this.innerCss) ? this.tip().append(this.$form) : this.tip().find(this.innerCss).append(this.$form), this.renderForm()
    },
    hide: function(t) {
      if (this.tip() && this.tip().is(":visible") && this.$element.hasClass("editable-open")) {
        if (this.$form.data("editableform").isSaving) return void(this.delayedHide = {
          reason: t
        });
        this.delayedHide = !1, this.$element.removeClass("editable-open"), this.innerHide(), this.$element.triggerHandler("hidden", t || "manual")
      }
    },
    innerShow: function() {},
    innerHide: function() {},
    toggle: function(t) {
      this.container() && this.tip() && this.tip().is(":visible") ? this.hide() : this.show(t)
    },
    setPosition: function() {},
    save: function(t, e) {
      this.$element.triggerHandler("save", e), this.hide("save")
    },
    option: function(t, e) {
      this.options[t] = e, t in this.containerOptions ? (this.containerOptions[t] = e, this.setContainerOption(t, e)) : (this.formOptions[t] = e, this.$form && this.$form.editableform("option", t, e))
    },
    setContainerOption: function(t, e) {
      this.call("option", t, e)
    },
    destroy: function() {
      this.hide(), this.innerDestroy(), this.$element.off("destroyed"), this.$element.removeData("editableContainer")
    },
    innerDestroy: function() {},
    closeOthers: function(e) {
      t(".editable-open").each(function(i, n) {
        if (n !== e && !t(n).find(e).length) {
          var a = t(n),
            o = a.data("editableContainer");
          o && ("cancel" === o.options.onblur ? a.data("editableContainer").hide("onblur") : "submit" === o.options.onblur && a.data("editableContainer").tip().find("form").submit())
        }
      })
    },
    activate: function() {
      this.tip && this.tip().is(":visible") && this.$form && this.$form.data("editableform").input.activate()
    }
  }, t.fn.editableContainer = function(n) {
    var a = arguments;
    return this.each(function() {
      var o = t(this),
        r = "editableContainer",
        s = o.data(r),
        l = "object" == typeof n && n,
        d = "inline" === l.mode ? i : e;
      s || o.data(r, s = new d(this, l)), "string" == typeof n && s[n].apply(s, Array.prototype.slice.call(a, 1))
    })
  }, t.fn.editableContainer.Popup = e, t.fn.editableContainer.Inline = i, t.fn.editableContainer.defaults = {
    value: null,
    placement: "top",
    autohide: !0,
    onblur: "cancel",
    anim: !1,
    mode: "popup"
  }, jQuery.event.special.destroyed = {
    remove: function(t) {
      t.handler && t.handler()
    }
  }
}(window.jQuery),
function(t) {
  "use strict";
  t.extend(t.fn.editableContainer.Inline.prototype, t.fn.editableContainer.Popup.prototype, {
    containerName: "editableform",
    innerCss: ".editable-inline",
    containerClass: "editable-container editable-inline",
    initContainer: function() {
      this.$tip = t("<span></span>"), this.options.anim || (this.options.anim = 0)
    },
    splitOptions: function() {
      this.containerOptions = {}, this.formOptions = this.options
    },
    tip: function() {
      return this.$tip
    },
    innerShow: function() {
      this.$element.hide(), this.tip().insertAfter(this.$element).show()
    },
    innerHide: function() {
      this.$tip.hide(this.options.anim, t.proxy(function() {
        this.$element.show(), this.innerDestroy()
      }, this))
    },
    innerDestroy: function() {
      this.tip() && this.tip().empty().remove()
    }
  })
}(window.jQuery),
function(t) {
  "use strict";
  var e = function(e, i) {
    this.$element = t(e), this.options = t.extend({}, t.fn.editable.defaults, i, t.fn.editableutils.getConfigData(this.$element)), this.options.selector ? this.initLive() : this.init(), this.options.highlight && !t.fn.editableutils.supportsTransitions() && (this.options.highlight = !1)
  };
  e.prototype = {
    constructor: e,
    init: function() {
      var e, i = !1;
      if (this.options.name = this.options.name || this.$element.attr("id"), this.options.scope = this.$element[0], this.input = t.fn.editableutils.createInput(this.options), this.input) {
        switch (void 0 === this.options.value || null === this.options.value ? (this.value = this.input.html2value(t.trim(this.$element.html())), i = !0) : (this.options.value = t.fn.editableutils.tryParseJson(this.options.value, !0), this.value = "string" == typeof this.options.value ? this.input.str2value(this.options.value) : this.options.value), this.$element.addClass("editable"), "textarea" === this.input.type && this.$element.addClass("editable-pre-wrapped"), "manual" !== this.options.toggle ? (this.$element.addClass("editable-click"), this.$element.on(this.options.toggle + ".editable", t.proxy(function(t) {
          if (this.options.disabled || t.preventDefault(), "mouseenter" === this.options.toggle) this.show();
          else {
            var e = "click" !== this.options.toggle;
            this.toggle(e)
          }
        }, this))) : this.$element.attr("tabindex", -1), "function" == typeof this.options.display && (this.options.autotext = "always"), this.options.autotext) {
          case "always":
            e = !0;
            break;
          case "auto":
            e = !t.trim(this.$element.text()).length && null !== this.value && void 0 !== this.value && !i;
            break;
          default:
            e = !1
        }
        t.when(e ? this.render() : !0).then(t.proxy(function() {
          this.options.disabled ? this.disable() : this.enable(), this.$element.triggerHandler("init", this)
        }, this))
      }
    },
    initLive: function() {
      var e = this.options.selector;
      this.options.selector = !1, this.options.autotext = "never", this.$element.on(this.options.toggle + ".editable", e, t.proxy(function(e) {
        var i = t(e.target);
        i.data("editable") || (i.hasClass(this.options.emptyclass) && i.empty(), i.editable(this.options).trigger(e))
      }, this))
    },
    render: function(t) {
      return this.options.display !== !1 ? this.input.value2htmlFinal ? this.input.value2html(this.value, this.$element[0], this.options.display, t) : "function" == typeof this.options.display ? this.options.display.call(this.$element[0], this.value, t) : this.input.value2html(this.value, this.$element[0]) : void 0
    },
    enable: function() {
      this.options.disabled = !1, this.$element.removeClass("editable-disabled"), this.handleEmpty(this.isEmpty), "manual" !== this.options.toggle && "-1" === this.$element.attr("tabindex") && this.$element.removeAttr("tabindex")
    },
    disable: function() {
      this.options.disabled = !0, this.hide(), this.$element.addClass("editable-disabled"), this.handleEmpty(this.isEmpty), this.$element.attr("tabindex", -1)
    },
    toggleDisabled: function() {
      this.options.disabled ? this.enable() : this.disable()
    },
    option: function(e, i) {
      return e && "object" == typeof e ? void t.each(e, t.proxy(function(e, i) {
        this.option(t.trim(e), i)
      }, this)) : (this.options[e] = i, "disabled" === e ? i ? this.disable() : this.enable() : ("value" === e && this.setValue(i), this.container && this.container.option(e, i), void(this.input.option && this.input.option(e, i))))
    },
    handleEmpty: function(e) {
      this.options.display !== !1 && (this.isEmpty = void 0 !== e ? e : "function" == typeof this.input.isEmpty ? this.input.isEmpty(this.$element) : "" === t.trim(this.$element.html()), this.options.disabled ? this.isEmpty && (this.$element.empty(), this.options.emptyclass && this.$element.removeClass(this.options.emptyclass)) : this.isEmpty ? (this.$element.html(this.options.emptytext), this.options.emptyclass && this.$element.addClass(this.options.emptyclass)) : this.options.emptyclass && this.$element.removeClass(this.options.emptyclass))
    },
    show: function(e) {
      if (!this.options.disabled) {
        if (this.container) {
          if (this.container.tip().is(":visible")) return
        } else {
          var i = t.extend({}, this.options, {
            value: this.value,
            input: this.input
          });
          this.$element.editableContainer(i), this.$element.on("save.internal", t.proxy(this.save, this)), this.container = this.$element.data("editableContainer")
        }
        this.container.show(e)
      }
    },
    hide: function() {
      this.container && this.container.hide()
    },
    toggle: function(t) {
      this.container && this.container.tip().is(":visible") ? this.hide() : this.show(t)
    },
    save: function(t, e) {
      if (this.options.unsavedclass) {
        var i = !1;
        i = i || "function" == typeof this.options.url, i = i || this.options.display === !1, i = i || void 0 !== e.response, i = i || this.options.savenochange && this.input.value2str(this.value) !== this.input.value2str(e.newValue), i ? this.$element.removeClass(this.options.unsavedclass) : this.$element.addClass(this.options.unsavedclass)
      }
      if (this.options.highlight) {
        var n = this.$element,
          a = n.css("background-color");
        n.css("background-color", this.options.highlight), setTimeout(function() {
          "transparent" === a && (a = ""), n.css("background-color", a), n.addClass("editable-bg-transition"), setTimeout(function() {
            n.removeClass("editable-bg-transition")
          }, 1700)
        }, 10)
      }
      this.setValue(e.newValue, !1, e.response)
    },
    validate: function() {
      return "function" == typeof this.options.validate ? this.options.validate.call(this, this.value) : void 0
    },
    setValue: function(e, i, n) {
      this.value = i ? this.input.str2value(e) : e, this.container && this.container.option("value", this.value), t.when(this.render(n)).then(t.proxy(function() {
        this.handleEmpty()
      }, this))
    },
    activate: function() {
      this.container && this.container.activate()
    },
    destroy: function() {
      this.disable(), this.container && this.container.destroy(), this.input.destroy(), "manual" !== this.options.toggle && (this.$element.removeClass("editable-click"), this.$element.off(this.options.toggle + ".editable")), this.$element.off("save.internal"), this.$element.removeClass("editable editable-open editable-disabled"), this.$element.removeData("editable")
    }
  }, t.fn.editable = function(i) {
    var n = {},
      a = arguments,
      o = "editable";
    switch (i) {
      case "validate":
        return this.each(function() {
          var e, i = t(this),
            a = i.data(o);
          a && (e = a.validate()) && (n[a.options.name] = e)
        }), n;
      case "getValue":
        return 2 === arguments.length && arguments[1] === !0 ? n = this.eq(0).data(o).value : this.each(function() {
          var e = t(this),
            i = e.data(o);
          i && void 0 !== i.value && null !== i.value && (n[i.options.name] = i.input.value2submit(i.value))
        }), n;
      case "submit":
        var r = arguments[1] || {},
          s = this,
          l = this.editable("validate");
        if (t.isEmptyObject(l)) {
          var d = {};
          if (1 === s.length) {
            var h = s.data("editable"),
              c = {
                name: h.options.name || "",
                value: h.input.value2submit(h.value),
                pk: "function" == typeof h.options.pk ? h.options.pk.call(h.options.scope) : h.options.pk
              };
            "function" == typeof h.options.params ? c = h.options.params.call(h.options.scope, c) : (h.options.params = t.fn.editableutils.tryParseJson(h.options.params, !0), t.extend(c, h.options.params)), d = {
              url: h.options.url,
              data: c,
              type: "POST"
            }, r.success = r.success || h.options.success, r.error = r.error || h.options.error
          } else {
            var u = this.editable("getValue");
            d = {
              url: r.url,
              data: u,
              type: "POST"
            }
          }
          d.success = "function" == typeof r.success ? function(t) {
            r.success.call(s, t, r)
          } : t.noop, d.error = "function" == typeof r.error ? function() {
            r.error.apply(s, arguments)
          } : t.noop, r.ajaxOptions && t.extend(d, r.ajaxOptions), r.data && t.extend(d.data, r.data), t.ajax(d)
        } else "function" == typeof r.error && r.error.call(s, l);
        return this
    }
    return this.each(function() {
      var n = t(this),
        r = n.data(o),
        s = "object" == typeof i && i;
      return s && s.selector ? void(r = new e(this, s)) : (r || n.data(o, r = new e(this, s)), void("string" == typeof i && r[i].apply(r, Array.prototype.slice.call(a, 1))))
    })
  }, t.fn.editable.defaults = {
    type: "text",
    disabled: !1,
    toggle: "click",
    emptytext: "Empty",
    autotext: "auto",
    value: null,
    display: null,
    emptyclass: "editable-empty",
    unsavedclass: "editable-unsaved",
    selector: null,
    highlight: "#FFFF80"
  }
}(window.jQuery),
function(t) {
  "use strict";
  t.fn.editabletypes = {};
  var e = function() {};
  e.prototype = {
    init: function(e, i, n) {
      this.type = e, this.options = t.extend({}, n, i)
    },
    prerender: function() {
      this.$tpl = t(this.options.tpl), this.$input = this.$tpl, this.$clear = null, this.error = null
    },
    render: function() {},
    value2html: function(e, i) {
      t(i)[this.options.escape ? "text" : "html"](t.trim(e))
    },
    html2value: function(e) {
      return t("<div>").html(e).text()
    },
    value2str: function(t) {
      return t
    },
    str2value: function(t) {
      return t
    },
    value2submit: function(t) {
      return t
    },
    value2input: function(t) {
      this.$input.val(t)
    },
    input2value: function() {
      return this.$input.val()
    },
    activate: function() {
      this.$input.is(":visible") && this.$input.focus()
    },
    clear: function() {
      this.$input.val(null)
    },
    escape: function(e) {
      return t("<div>").text(e).html()
    },
    autosubmit: function() {},
    destroy: function() {},
    setClass: function() {
      this.options.inputclass && this.$input.addClass(this.options.inputclass)
    },
    setAttr: function(t) {
      void 0 !== this.options[t] && null !== this.options[t] && this.$input.attr(t, this.options[t])
    },
    option: function(t, e) {
      this.options[t] = e
    }
  }, e.defaults = {
    tpl: "",
    inputclass: null,
    escape: !0,
    scope: null,
    showbuttons: !0
  }, t.extend(t.fn.editabletypes, {
    abstractinput: e
  })
}(window.jQuery),
function(t) {
  "use strict";
  var e = function() {};
  t.fn.editableutils.inherit(e, t.fn.editabletypes.abstractinput), t.extend(e.prototype, {
    render: function() {
      var e = t.Deferred();
      return this.error = null, this.onSourceReady(function() {
        this.renderList(), e.resolve()
      }, function() {
        this.error = this.options.sourceError, e.resolve()
      }), e.promise()
    },
    html2value: function() {
      return null
    },
    value2html: function(e, i, n, a) {
      var o = t.Deferred(),
        r = function() {
          "function" == typeof n ? n.call(i, e, this.sourceData, a) : this.value2htmlFinal(e, i), o.resolve()
        };
      return null === e ? r.call(this) : this.onSourceReady(r, function() {
        o.resolve()
      }), o.promise()
    },
    onSourceReady: function(e, i) {
      var n;
      if (t.isFunction(this.options.source) ? (n = this.options.source.call(this.options.scope), this.sourceData = null) : n = this.options.source, this.options.sourceCache && t.isArray(this.sourceData)) return void e.call(this);
      try {
        n = t.fn.editableutils.tryParseJson(n, !1)
      } catch (a) {
        return void i.call(this)
      }
      if ("string" == typeof n) {
        if (this.options.sourceCache) {
          var o, r = n;
          if (t(document).data(r) || t(document).data(r, {}), o = t(document).data(r), o.loading === !1 && o.sourceData) return this.sourceData = o.sourceData, this.doPrepend(), void e.call(this);
          if (o.loading === !0) return o.callbacks.push(t.proxy(function() {
            this.sourceData = o.sourceData, this.doPrepend(), e.call(this)
          }, this)), void o.err_callbacks.push(t.proxy(i, this));
          o.loading = !0, o.callbacks = [], o.err_callbacks = []
        }
        var s = t.extend({
          url: n,
          type: "get",
          cache: !1,
          dataType: "json",
          success: t.proxy(function(n) {
            o && (o.loading = !1), this.sourceData = this.makeArray(n), t.isArray(this.sourceData) ? (o && (o.sourceData = this.sourceData, t.each(o.callbacks, function() {
              this.call()
            })), this.doPrepend(), e.call(this)) : (i.call(this), o && t.each(o.err_callbacks, function() {
              this.call()
            }))
          }, this),
          error: t.proxy(function() {
            i.call(this), o && (o.loading = !1, t.each(o.err_callbacks, function() {
              this.call()
            }))
          }, this)
        }, this.options.sourceOptions);
        t.ajax(s)
      } else this.sourceData = this.makeArray(n), t.isArray(this.sourceData) ? (this.doPrepend(), e.call(this)) : i.call(this)
    },
    doPrepend: function() {
      null !== this.options.prepend && void 0 !== this.options.prepend && (t.isArray(this.prependData) || (t.isFunction(this.options.prepend) && (this.options.prepend = this.options.prepend.call(this.options.scope)), this.options.prepend = t.fn.editableutils.tryParseJson(this.options.prepend, !0), "string" == typeof this.options.prepend && (this.options.prepend = {
        "": this.options.prepend
      }), this.prependData = this.makeArray(this.options.prepend)), t.isArray(this.prependData) && t.isArray(this.sourceData) && (this.sourceData = this.prependData.concat(this.sourceData)))
    },
    renderList: function() {},
    value2htmlFinal: function() {},
    makeArray: function(e) {
      var i, n, a, o, r = [];
      if (!e || "string" == typeof e) return null;
      if (t.isArray(e)) {
        o = function(t, e) {
          return n = {
            value: t,
            text: e
          }, i++ >= 2 ? !1 : void 0
        };
        for (var s = 0; s < e.length; s++) a = e[s], "object" == typeof a ? (i = 0, t.each(a, o), 1 === i ? r.push(n) : i > 1 && (a.children && (a.children = this.makeArray(a.children)), r.push(a))) : r.push({
          value: a,
          text: a
        })
      } else t.each(e, function(t, e) {
        r.push({
          value: t,
          text: e
        })
      });
      return r
    },
    option: function(t, e) {
      this.options[t] = e, "source" === t && (this.sourceData = null), "prepend" === t && (this.prependData = null)
    }
  }), e.defaults = t.extend({}, t.fn.editabletypes.abstractinput.defaults, {
    source: null,
    prepend: !1,
    sourceError: "Error when loading list",
    sourceCache: !0,
    sourceOptions: null
  }), t.fn.editabletypes.list = e
}(window.jQuery),
function(t) {
  "use strict";
  var e = function(t) {
    this.init("text", t, e.defaults)
  };
  t.fn.editableutils.inherit(e, t.fn.editabletypes.abstractinput), t.extend(e.prototype, {
    render: function() {
      this.renderClear(), this.setClass(), this.setAttr("placeholder")
    },
    activate: function() {
      this.$input.is(":visible") && (this.$input.focus(), t.fn.editableutils.setCursorPosition(this.$input.get(0), this.$input.val().length), this.toggleClear && this.toggleClear())
    },
    renderClear: function() {
      this.options.clear && (this.$clear = t('<span class="editable-clear-x"></span>'), this.$input.after(this.$clear).css("padding-right", 24).keyup(t.proxy(function(e) {
        if (!~t.inArray(e.keyCode, [40, 38, 9, 13, 27])) {
          clearTimeout(this.t);
          var i = this;
          this.t = setTimeout(function() {
            i.toggleClear(e)
          }, 100)
        }
      }, this)).parent().css("position", "relative"), this.$clear.click(t.proxy(this.clear, this)))
    },
    postrender: function() {},
    toggleClear: function() {
      if (this.$clear) {
        var t = this.$input.val().length,
          e = this.$clear.is(":visible");
        t && !e && this.$clear.show(), !t && e && this.$clear.hide()
      }
    },
    clear: function() {
      this.$clear.hide(), this.$input.val("").focus()
    }
  }), e.defaults = t.extend({}, t.fn.editabletypes.abstractinput.defaults, {
    tpl: '<input type="text">',
    placeholder: null,
    clear: !0
  }), t.fn.editabletypes.text = e
}(window.jQuery),
function(t) {
  "use strict";
  var e = function(t) {
    this.init("textarea", t, e.defaults)
  };
  t.fn.editableutils.inherit(e, t.fn.editabletypes.abstractinput), t.extend(e.prototype, {
    render: function() {
      this.setClass(), this.setAttr("placeholder"), this.setAttr("rows"), this.$input.keydown(function(e) {
        e.ctrlKey && 13 === e.which && t(this).closest("form").submit()
      })
    },
    activate: function() {
      t.fn.editabletypes.text.prototype.activate.call(this)
    }
  }), e.defaults = t.extend({}, t.fn.editabletypes.abstractinput.defaults, {
    tpl: "<textarea></textarea>",
    inputclass: "input-large",
    placeholder: null,
    rows: 7
  }), t.fn.editabletypes.textarea = e
}(window.jQuery),
function(t) {
  "use strict";
  var e = function(t) {
    this.init("select", t, e.defaults)
  };
  t.fn.editableutils.inherit(e, t.fn.editabletypes.list), t.extend(e.prototype, {
    renderList: function() {
      this.$input.empty();
      var e = function(i, n) {
        var a;
        if (t.isArray(n))
          for (var o = 0; o < n.length; o++) a = {}, n[o].children ? (a.label = n[o].text, i.append(e(t("<optgroup>", a), n[o].children))) : (a.value = n[o].value, n[o].disabled && (a.disabled = !0), i.append(t("<option>", a).text(n[o].text)));
        return i
      };
      e(this.$input, this.sourceData), this.setClass(), this.$input.on("keydown.editable", function(e) {
        13 === e.which && t(this).closest("form").submit()
      })
    },
    value2htmlFinal: function(e, i) {
      var n = "",
        a = t.fn.editableutils.itemsByValue(e, this.sourceData);
      a.length && (n = a[0].text), t.fn.editabletypes.abstractinput.prototype.value2html.call(this, n, i)
    },
    autosubmit: function() {
      this.$input.off("keydown.editable").on("change.editable", function() {
        t(this).closest("form").submit()
      })
    }
  }), e.defaults = t.extend({}, t.fn.editabletypes.list.defaults, {
    tpl: "<select></select>"
  }), t.fn.editabletypes.select = e
}(window.jQuery),
function(t) {
  "use strict";
  var e = function(t) {
    this.init("checklist", t, e.defaults)
  };
  t.fn.editableutils.inherit(e, t.fn.editabletypes.list), t.extend(e.prototype, {
    renderList: function() {
      var e;
      if (this.$tpl.empty(), t.isArray(this.sourceData)) {
        for (var i = 0; i < this.sourceData.length; i++) e = t("<label>").append(t("<input>", {
          type: "checkbox",
          value: this.sourceData[i].value
        })).append(t("<span>").text(" " + this.sourceData[i].text)), t("<div>").append(e).appendTo(this.$tpl);
        this.$input = this.$tpl.find('input[type="checkbox"]'), this.setClass()
      }
    },
    value2str: function(e) {
      return t.isArray(e) ? e.sort().join(t.trim(this.options.separator)) : ""
    },
    str2value: function(e) {
      var i, n = null;
      return "string" == typeof e && e.length ? (i = new RegExp("\\s*" + t.trim(this.options.separator) + "\\s*"), n = e.split(i)) : n = t.isArray(e) ? e : [e], n
    },
    value2input: function(e) {
      this.$input.prop("checked", !1), t.isArray(e) && e.length && this.$input.each(function(i, n) {
        var a = t(n);
        t.each(e, function(t, e) {
          a.val() == e && a.prop("checked", !0)
        })
      })
    },
    input2value: function() {
      var e = [];
      return this.$input.filter(":checked").each(function(i, n) {
        e.push(t(n).val())
      }), e
    },
    value2htmlFinal: function(e, i) {
      var n = [],
        a = t.fn.editableutils.itemsByValue(e, this.sourceData),
        o = this.options.escape;
      a.length ? (t.each(a, function(e, i) {
        var a = o ? t.fn.editableutils.escape(i.text) : i.text;
        n.push(a)
      }), t(i).html(n.join("<br>"))) : t(i).empty()
    },
    activate: function() {
      this.$input.first().focus()
    },
    autosubmit: function() {
      this.$input.on("keydown", function(e) {
        13 === e.which && t(this).closest("form").submit()
      })
    }
  }), e.defaults = t.extend({}, t.fn.editabletypes.list.defaults, {
    tpl: '<div class="editable-checklist"></div>',
    inputclass: null,
    separator: ","
  }), t.fn.editabletypes.checklist = e
}(window.jQuery),
function(t) {
  "use strict";
  var e = function(t) {
    this.init("password", t, e.defaults)
  };
  t.fn.editableutils.inherit(e, t.fn.editabletypes.text), t.extend(e.prototype, {
    value2html: function(e, i) {
      e ? t(i).text("[hidden]") : t(i).empty()
    },
    html2value: function() {
      return null
    }
  }), e.defaults = t.extend({}, t.fn.editabletypes.text.defaults, {
    tpl: '<input type="password">'
  }), t.fn.editabletypes.password = e
}(window.jQuery),
function(t) {
  "use strict";
  var e = function(t) {
    this.init("email", t, e.defaults)
  };
  t.fn.editableutils.inherit(e, t.fn.editabletypes.text), e.defaults = t.extend({}, t.fn.editabletypes.text.defaults, {
    tpl: '<input type="email">'
  }), t.fn.editabletypes.email = e
}(window.jQuery),
function(t) {
  "use strict";
  var e = function(t) {
    this.init("url", t, e.defaults)
  };
  t.fn.editableutils.inherit(e, t.fn.editabletypes.text), e.defaults = t.extend({}, t.fn.editabletypes.text.defaults, {
    tpl: '<input type="url">'
  }), t.fn.editabletypes.url = e
}(window.jQuery),
function(t) {
  "use strict";
  var e = function(t) {
    this.init("tel", t, e.defaults)
  };
  t.fn.editableutils.inherit(e, t.fn.editabletypes.text), e.defaults = t.extend({}, t.fn.editabletypes.text.defaults, {
    tpl: '<input type="tel">'
  }), t.fn.editabletypes.tel = e
}(window.jQuery),
function(t) {
  "use strict";
  var e = function(t) {
    this.init("number", t, e.defaults)
  };
  t.fn.editableutils.inherit(e, t.fn.editabletypes.text), t.extend(e.prototype, {
    render: function() {
      e.superclass.render.call(this), this.setAttr("min"), this.setAttr("max"), this.setAttr("step")
    },
    postrender: function() {
      this.$clear && this.$clear.css({
        right: 24
      })
    }
  }), e.defaults = t.extend({}, t.fn.editabletypes.text.defaults, {
    tpl: '<input type="number">',
    inputclass: "input-mini",
    min: null,
    max: null,
    step: null
  }), t.fn.editabletypes.number = e
}(window.jQuery),
function(t) {
  "use strict";
  var e = function(t) {
    this.init("range", t, e.defaults)
  };
  t.fn.editableutils.inherit(e, t.fn.editabletypes.number), t.extend(e.prototype, {
    render: function() {
      this.$input = this.$tpl.filter("input"), this.setClass(), this.setAttr("min"), this.setAttr("max"), this.setAttr("step"), this.$input.on("input", function() {
        t(this).siblings("output").text(t(this).val())
      })
    },
    activate: function() {
      this.$input.focus()
    }
  }), e.defaults = t.extend({}, t.fn.editabletypes.number.defaults, {
    tpl: '<input type="range"><output style="width: 30px; display: inline-block"></output>',
    inputclass: "input-medium"
  }), t.fn.editabletypes.range = e
}(window.jQuery),
function(t) {
  "use strict";
  var e = function(t) {
    this.init("time", t, e.defaults)
  };
  t.fn.editableutils.inherit(e, t.fn.editabletypes.abstractinput), t.extend(e.prototype, {
    render: function() {
      this.setClass()
    }
  }), e.defaults = t.extend({}, t.fn.editabletypes.abstractinput.defaults, {
    tpl: '<input type="time">'
  }), t.fn.editabletypes.time = e
}(window.jQuery),
function(t) {
  "use strict";
  var e = function(i) {
    if (this.init("select2", i, e.defaults), i.select2 = i.select2 || {}, this.sourceData = null, i.placeholder && (i.select2.placeholder = i.placeholder), !i.select2.tags && i.source) {
      var n = i.source;
      t.isFunction(i.source) && (n = i.source.call(i.scope)), "string" == typeof n ? (i.select2.ajax = i.select2.ajax || {}, i.select2.ajax.data || (i.select2.ajax.data = function(t) {
        return {
          query: t
        }
      }), i.select2.ajax.results || (i.select2.ajax.results = function(t) {
        return {
          results: t
        }
      }), i.select2.ajax.url = n) : (this.sourceData = this.convertSource(n), i.select2.data = this.sourceData)
    }
    if (this.options.select2 = t.extend({}, e.defaults.select2, i.select2), this.isMultiple = this.options.select2.tags || this.options.select2.multiple, this.isRemote = "ajax" in this.options.select2, this.idFunc = this.options.select2.id, "function" != typeof this.idFunc) {
      var a = this.idFunc || "id";
      this.idFunc = function(t) {
        return t[a]
      }
    }
    this.formatSelection = this.options.select2.formatSelection, "function" != typeof this.formatSelection && (this.formatSelection = function(t) {
      return t.text
    })
  };
  t.fn.editableutils.inherit(e, t.fn.editabletypes.abstractinput), t.extend(e.prototype, {
    render: function() {
      this.setClass(), this.isRemote && this.$input.on("select2-loaded", t.proxy(function(t) {
        this.sourceData = t.items.results
      }, this)), this.isMultiple && this.$input.on("change", function() {
        t(this).closest("form").parent().triggerHandler("resize")
      })
    },
    value2html: function(i, n) {
      var a, o = "",
        r = this;
      this.options.select2.tags ? a = i : this.sourceData && (a = t.fn.editableutils.itemsByValue(i, this.sourceData, this.idFunc)), t.isArray(a) ? (o = [], t.each(a, function(t, e) {
        o.push(e && "object" == typeof e ? r.formatSelection(e) : e)
      })) : a && (o = r.formatSelection(a)), o = t.isArray(o) ? o.join(this.options.viewseparator) : o, e.superclass.value2html.call(this, o, n)
    },
    html2value: function(t) {
      return this.options.select2.tags ? this.str2value(t, this.options.viewseparator) : null
    },
    value2input: function(e) {
      if (t.isArray(e) && (e = e.join(this.getSeparator())), this.$input.data("select2") ? this.$input.val(e).trigger("change", !0) : (this.$input.val(e), this.$input.select2(this.options.select2)), this.isRemote && !this.isMultiple && !this.options.select2.initSelection) {
        var i = this.options.select2.id,
          n = this.options.select2.formatSelection;
        if (!i && !n) {
          var a = t(this.options.scope);
          if (!a.data("editable").isEmpty) {
            var o = {
              id: e,
              text: a.text()
            };
            this.$input.select2("data", o)
          }
        }
      }
    },
    input2value: function() {
      return this.$input.select2("val")
    },
    str2value: function(e, i) {
      if ("string" != typeof e || !this.isMultiple) return e;
      i = i || this.getSeparator();
      var n, a, o;
      if (null === e || e.length < 1) return null;
      for (n = e.split(i), a = 0, o = n.length; o > a; a += 1) n[a] = t.trim(n[a]);
      return n
    },
    autosubmit: function() {
      this.$input.on("change", function(e, i) {
        i || t(this).closest("form").submit()
      })
    },
    getSeparator: function() {
      return this.options.select2.separator || t.fn.select2.defaults.separator
    },
    convertSource: function(e) {
      if (t.isArray(e) && e.length && void 0 !== e[0].value)
        for (var i = 0; i < e.length; i++) void 0 !== e[i].value && (e[i].id = e[i].value, delete e[i].value);
      return e
    },
    destroy: function() {
      this.$input.data("select2") && this.$input.select2("destroy")
    }
  }), e.defaults = t.extend({}, t.fn.editabletypes.abstractinput.defaults, {
    tpl: '<input type="hidden">',
    select2: null,
    placeholder: null,
    source: null,
    viewseparator: ", "
  }), t.fn.editabletypes.select2 = e
}(window.jQuery),
function(t) {
  var e = function(e, i) {
    return this.$element = t(e), this.$element.is("input") ? (this.options = t.extend({}, t.fn.combodate.defaults, i, this.$element.data()), void this.init()) : void t.error("Combodate should be applied to INPUT element")
  };
  e.prototype = {
    constructor: e,
    init: function() {
      this.map = {
        day: ["D", "date"],
        month: ["M", "month"],
        year: ["Y", "year"],
        hour: ["[Hh]", "hours"],
        minute: ["m", "minutes"],
        second: ["s", "seconds"],
        ampm: ["[Aa]", ""]
      }, this.$widget = t('<span class="combodate"></span>').html(this.getTemplate()), this.initCombos(), this.$widget.on("change", "select", t.proxy(function(e) {
        this.$element.val(this.getValue()).change(), this.options.smartDays && (t(e.target).is(".month") || t(e.target).is(".year")) && this.fillCombo("day")
      }, this)), this.$widget.find("select").css("width", "auto"), this.$element.hide().after(this.$widget), this.setValue(this.$element.val() || this.options.value)
    },
    getTemplate: function() {
      var e = this.options.template;
      return t.each(this.map, function(t, i) {
        i = i[0];
        var n = new RegExp(i + "+"),
          a = i.length > 1 ? i.substring(1, 2) : i;
        e = e.replace(n, "{" + a + "}")
      }), e = e.replace(/ /g, "&nbsp;"), t.each(this.map, function(t, i) {
        i = i[0];
        var n = i.length > 1 ? i.substring(1, 2) : i;
        e = e.replace("{" + n + "}", '<select class="' + t + '"></select>')
      }), e
    },
    initCombos: function() {
      for (var t in this.map) {
        var e = this.$widget.find("." + t);
        this["$" + t] = e.length ? e : null, this.fillCombo(t)
      }
    },
    fillCombo: function(t) {
      var e = this["$" + t];
      if (e) {
        var i = "fill" + t.charAt(0).toUpperCase() + t.slice(1),
          n = this[i](),
          a = e.val();
        e.empty();
        for (var o = 0; o < n.length; o++) e.append('<option value="' + n[o][0] + '">' + n[o][1] + "</option>");
        e.val(a)
      }
    },
    fillCommon: function(t) {
      var e, i = [];
      if ("name" === this.options.firstItem) {
        e = moment.relativeTime || moment.langData()._relativeTime;
        var n = "function" == typeof e[t] ? e[t](1, !0, t, !1) : e[t];
        n = n.split(" ").reverse()[0], i.push(["", n])
      } else "empty" === this.options.firstItem && i.push(["", ""]);
      return i
    },
    fillDay: function() {
      var t, e, i = this.fillCommon("d"),
        n = -1 !== this.options.template.indexOf("DD"),
        a = 31;
      if (this.options.smartDays && this.$month && this.$year) {
        var o = parseInt(this.$month.val(), 10),
          r = parseInt(this.$year.val(), 10);
        isNaN(o) || isNaN(r) || (a = moment([r, o]).daysInMonth())
      }
      for (e = 1; a >= e; e++) t = n ? this.leadZero(e) : e, i.push([e, t]);
      return i
    },
    fillMonth: function() {
      var t, e, i = this.fillCommon("M"),
        n = -1 !== this.options.template.indexOf("MMMM"),
        a = -1 !== this.options.template.indexOf("MMM"),
        o = -1 !== this.options.template.indexOf("MM");
      for (e = 0; 11 >= e; e++) t = n ? moment().date(1).month(e).format("MMMM") : a ? moment().date(1).month(e).format("MMM") : o ? this.leadZero(e + 1) : e + 1, i.push([e, t]);
      return i
    },
    fillYear: function() {
      var t, e, i = [],
        n = -1 !== this.options.template.indexOf("YYYY");
      for (e = this.options.maxYear; e >= this.options.minYear; e--) t = n ? e : (e + "").substring(2), i[this.options.yearDescending ? "push" : "unshift"]([e, t]);
      return i = this.fillCommon("y").concat(i)
    },
    fillHour: function() {
      var t, e, i = this.fillCommon("h"),
        n = -1 !== this.options.template.indexOf("h"),
        a = (-1 !== this.options.template.indexOf("H"), -1 !== this.options.template.toLowerCase().indexOf("hh")),
        o = n ? 1 : 0,
        r = n ? 12 : 23;
      for (e = o; r >= e; e++) t = a ? this.leadZero(e) : e, i.push([e, t]);
      return i
    },
    fillMinute: function() {
      var t, e, i = this.fillCommon("m"),
        n = -1 !== this.options.template.indexOf("mm");
      for (e = 0; 59 >= e; e += this.options.minuteStep) t = n ? this.leadZero(e) : e, i.push([e, t]);
      return i
    },
    fillSecond: function() {
      var t, e, i = this.fillCommon("s"),
        n = -1 !== this.options.template.indexOf("ss");
      for (e = 0; 59 >= e; e += this.options.secondStep) t = n ? this.leadZero(e) : e, i.push([e, t]);
      return i
    },
    fillAmpm: function() {
      var t = -1 !== this.options.template.indexOf("a"),
        e = (-1 !== this.options.template.indexOf("A"), [
          ["am", t ? "am" : "AM"],
          ["pm", t ? "pm" : "PM"]
        ]);
      return e
    },
    getValue: function(e) {
      var i, n = {},
        a = this,
        o = !1;
      return t.each(this.map, function(t) {
        if ("ampm" !== t) {
          var e = "day" === t ? 1 : 0;
          return n[t] = a["$" + t] ? parseInt(a["$" + t].val(), 10) : e, isNaN(n[t]) ? (o = !0, !1) : void 0
        }
      }), o ? "" : (this.$ampm && (n.hour = 12 === n.hour ? "am" === this.$ampm.val() ? 0 : 12 : "am" === this.$ampm.val() ? n.hour : n.hour + 12), i = moment([n.year, n.month, n.day, n.hour, n.minute, n.second]), this.highlight(i), e = void 0 === e ? this.options.format : e, null === e ? i.isValid() ? i : null : i.isValid() ? i.format(e) : "")
    },
    setValue: function(e) {
      function i(e, i) {
        var n = {};
        return e.children("option").each(function(e, a) {
          var o, r = t(a).attr("value");
          "" !== r && (o = Math.abs(r - i), ("undefined" == typeof n.distance || o < n.distance) && (n = {
            value: r,
            distance: o
          }))
        }), n.value
      }
      if (e) {
        var n = "string" == typeof e ? moment(e, this.options.format) : moment(e),
          a = this,
          o = {};
        n.isValid() && (t.each(this.map, function(t, e) {
          "ampm" !== t && (o[t] = n[e[1]]())
        }), this.$ampm && (o.hour >= 12 ? (o.ampm = "pm", o.hour > 12 && (o.hour -= 12)) : (o.ampm = "am", 0 === o.hour && (o.hour = 12))), t.each(o, function(t, e) {
          a["$" + t] && ("minute" === t && a.options.minuteStep > 1 && a.options.roundTime && (e = i(a["$" + t], e)), "second" === t && a.options.secondStep > 1 && a.options.roundTime && (e = i(a["$" + t], e)), a["$" + t].val(e))
        }), this.options.smartDays && this.fillCombo("day"), this.$element.val(n.format(this.options.format)).change())
      }
    },
    highlight: function(t) {
      t.isValid() ? this.options.errorClass ? this.$widget.removeClass(this.options.errorClass) : this.$widget.find("select").css("border-color", this.borderColor) : this.options.errorClass ? this.$widget.addClass(this.options.errorClass) : (this.borderColor || (this.borderColor = this.$widget.find("select").css("border-color")), this.$widget.find("select").css("border-color", "red"))
    },
    leadZero: function(t) {
      return 9 >= t ? "0" + t : t
    },
    destroy: function() {
      this.$widget.remove(), this.$element.removeData("combodate").show()
    }
  }, t.fn.combodate = function(i) {
    var n, a = Array.apply(null, arguments);
    return a.shift(), "getValue" === i && this.length && (n = this.eq(0).data("combodate")) ? n.getValue.apply(n, a) : this.each(function() {
      var n = t(this),
        o = n.data("combodate"),
        r = "object" == typeof i && i;
      o || n.data("combodate", o = new e(this, r)), "string" == typeof i && "function" == typeof o[i] && o[i].apply(o, a)
    })
  }, t.fn.combodate.defaults = {
    format: "DD-MM-YYYY HH:mm",
    template: "D / MMM / YYYY   H : mm",
    value: null,
    minYear: 1970,
    maxYear: 2015,
    yearDescending: !0,
    minuteStep: 5,
    secondStep: 1,
    firstItem: "empty",
    errorClass: null,
    roundTime: !0,
    smartDays: !1
  }
}(window.jQuery),
function(t) {
  "use strict";
  var e = function(i) {
    this.init("combodate", i, e.defaults), this.options.viewformat || (this.options.viewformat = this.options.format), i.combodate = t.fn.editableutils.tryParseJson(i.combodate, !0), this.options.combodate = t.extend({}, e.defaults.combodate, i.combodate, {
      format: this.options.format,
      template: this.options.template
    })
  };
  t.fn.editableutils.inherit(e, t.fn.editabletypes.abstractinput), t.extend(e.prototype, {
    render: function() {
      this.$input.combodate(this.options.combodate), "bs3" === t.fn.editableform.engine && this.$input.siblings().find("select").addClass("form-control"), this.options.inputclass && this.$input.siblings().find("select").addClass(this.options.inputclass)
    },
    value2html: function(t, i) {
      var n = t ? t.format(this.options.viewformat) : "";
      e.superclass.value2html.call(this, n, i)
    },
    html2value: function(t) {
      return t ? moment(t, this.options.viewformat) : null
    },
    value2str: function(t) {
      return t ? t.format(this.options.format) : ""
    },
    str2value: function(t) {
      return t ? moment(t, this.options.format) : null
    },
    value2submit: function(t) {
      return this.value2str(t)
    },
    value2input: function(t) {
      this.$input.combodate("setValue", t)
    },
    input2value: function() {
      return this.$input.combodate("getValue", null)
    },
    activate: function() {
      this.$input.siblings(".combodate").find("select").eq(0).focus()
    },
    autosubmit: function() {}
  }), e.defaults = t.extend({}, t.fn.editabletypes.abstractinput.defaults, {
    tpl: '<input type="text">',
    inputclass: null,
    format: "YYYY-MM-DD",
    viewformat: null,
    template: "D / MMM / YYYY",
    combodate: null
  }), t.fn.editabletypes.combodate = e
}(window.jQuery),
function(t) {
  "use strict";
  var e = t.fn.editableform.Constructor.prototype.initInput;
  t.extend(t.fn.editableform.Constructor.prototype, {
    initTemplate: function() {
      this.$form = t(t.fn.editableform.template), this.$form.find(".control-group").addClass("form-group"), this.$form.find(".editable-error-block").addClass("help-block")
    },
    initInput: function() {
      e.apply(this);
      var i = null === this.input.options.inputclass || this.input.options.inputclass === !1,
        n = "input-sm",
        a = "text,select,textarea,password,email,url,tel,number,range,time,typeaheadjs".split(",");
      ~t.inArray(this.input.type, a) && (this.input.$input.addClass("form-control"), i && (this.input.options.inputclass = n, this.input.$input.addClass(n)));
      for (var o = this.$form.find(".editable-buttons"), r = i ? [n] : this.input.options.inputclass.split(" "), s = 0; s < r.length; s++) "input-lg" === r[s].toLowerCase() && o.find("button").removeClass("btn-sm").addClass("btn-lg")
    }
  }), t.fn.editableform.buttons = '<button type="submit" class="btn btn-primary btn-sm editable-submit"><i class="glyphicon glyphicon-ok"></i></button><button type="button" class="btn btn-default btn-sm editable-cancel"><i class="glyphicon glyphicon-remove"></i></button>', t.fn.editableform.errorGroupClass = "has-error", t.fn.editableform.errorBlockClass = null, t.fn.editableform.engine = "bs3"
}(window.jQuery),
function(t) {
  "use strict";
  t.extend(t.fn.editableContainer.Popup.prototype, {
    containerName: "popover",
    containerDataName: "bs.popover",
    innerCss: ".popover-content",
    defaults: t.fn.popover.Constructor.DEFAULTS,
    initContainer: function() {
      t.extend(this.containerOptions, {
        trigger: "manual",
        selector: !1,
        content: " ",
        template: this.defaults.template
      });
      var e;
      this.$element.data("template") && (e = this.$element.data("template"), this.$element.removeData("template")), this.call(this.containerOptions), e && this.$element.data("template", e)
    },
    innerShow: function() {
      this.call("show")
    },
    innerHide: function() {
      this.call("hide")
    },
    innerDestroy: function() {
      this.call("destroy")
    },
    setContainerOption: function(t, e) {
      this.container().options[t] = e
    },
    setPosition: function() {
      ! function() {
        var t = this.tip(),
          e = "function" == typeof this.options.placement ? this.options.placement.call(this, t[0], this.$element[0]) : this.options.placement,
          i = /\s?auto?\s?/i,
          n = i.test(e);
        n && (e = e.replace(i, "") || "top");
        var a = this.getPosition(),
          o = t[0].offsetWidth,
          r = t[0].offsetHeight;
        if (n) {
          var s = this.$element.parent(),
            l = e,
            d = document.documentElement.scrollTop || document.body.scrollTop,
            h = "body" == this.options.container ? window.innerWidth : s.outerWidth(),
            c = "body" == this.options.container ? window.innerHeight : s.outerHeight(),
            u = "body" == this.options.container ? 0 : s.offset().left;
          e = "bottom" == e && a.top + a.height + r - d > c ? "top" : "top" == e && a.top - d - r < 0 ? "bottom" : "right" == e && a.right + o > h ? "left" : "left" == e && a.left - o < u ? "right" : e, t.removeClass(l).addClass(e)
        }
        var p = this.getCalculatedOffset(e, a, o, r);
        this.applyPlacement(p, e)
      }.call(this.container())
    }
  })
}(window.jQuery),
function(t) {
  function e() {
    return new Date(Date.UTC.apply(Date, arguments))
  }

  function i(e, i) {
    var n, a = t(e).data(),
      o = {},
      r = new RegExp("^" + i.toLowerCase() + "([A-Z])"),
      i = new RegExp("^" + i.toLowerCase());
    for (var s in a) i.test(s) && (n = s.replace(r, function(t, e) {
      return e.toLowerCase()
    }), o[n] = a[s]);
    return o
  }

  function n(e) {
    var i = {};
    if (h[e] || (e = e.split("-")[0], h[e])) {
      var n = h[e];
      return t.each(d, function(t, e) {
        e in n && (i[e] = n[e])
      }), i
    }
  }
  var a = function(e, i) {
    this._process_options(i), this.element = t(e), this.isInline = !1, this.isInput = this.element.is("input"), this.component = this.element.is(".date") ? this.element.find(".add-on, .btn") : !1, this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = t(c.template), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && (this.picker.addClass("datepicker-rtl"), this.picker.find(".prev i, .next i").toggleClass("icon-arrow-left icon-arrow-right")), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("tfoot th.today").attr("colspan", function(t, e) {
      return parseInt(e) + 1
    }), this._allow_update = !1, this.setStartDate(this.o.startDate), this.setEndDate(this.o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
  };
  a.prototype = {
    constructor: a,
    _process_options: function(e) {
      this._o = t.extend({}, this._o, e);
      var i = this.o = t.extend({}, this._o),
        n = i.language;
      switch (h[n] || (n = n.split("-")[0], h[n] || (n = l.language)), i.language = n, i.startView) {
        case 2:
        case "decade":
          i.startView = 2;
          break;
        case 1:
        case "year":
          i.startView = 1;
          break;
        default:
          i.startView = 0
      }
      switch (i.minViewMode) {
        case 1:
        case "months":
          i.minViewMode = 1;
          break;
        case 2:
        case "years":
          i.minViewMode = 2;
          break;
        default:
          i.minViewMode = 0
      }
      i.startView = Math.max(i.startView, i.minViewMode), i.weekStart %= 7, i.weekEnd = (i.weekStart + 6) % 7;
      var a = c.parseFormat(i.format);
      i.startDate !== -1 / 0 && (i.startDate = c.parseDate(i.startDate, a, i.language)), 1 / 0 !== i.endDate && (i.endDate = c.parseDate(i.endDate, a, i.language)), i.daysOfWeekDisabled = i.daysOfWeekDisabled || [], t.isArray(i.daysOfWeekDisabled) || (i.daysOfWeekDisabled = i.daysOfWeekDisabled.split(/[,\s]*/)), i.daysOfWeekDisabled = t.map(i.daysOfWeekDisabled, function(t) {
        return parseInt(t, 10)
      })
    },
    _events: [],
    _secondaryEvents: [],
    _applyEvents: function(t) {
      for (var e, i, n = 0; n < t.length; n++) e = t[n][0], i = t[n][1], e.on(i)
    },
    _unapplyEvents: function(t) {
      for (var e, i, n = 0; n < t.length; n++) e = t[n][0], i = t[n][1], e.off(i)
    },
    _buildEvents: function() {
      this.isInput ? this._events = [
        [this.element, {
          focus: t.proxy(this.show, this),
          keyup: t.proxy(this.update, this),
          keydown: t.proxy(this.keydown, this)
        }]
      ] : this.component && this.hasInput ? this._events = [
        [this.element.find("input"), {
          focus: t.proxy(this.show, this),
          keyup: t.proxy(this.update, this),
          keydown: t.proxy(this.keydown, this)
        }],
        [this.component, {
          click: t.proxy(this.show, this)
        }]
      ] : this.element.is("div") ? this.isInline = !0 : this._events = [
        [this.element, {
          click: t.proxy(this.show, this)
        }]
      ], this._secondaryEvents = [
        [this.picker, {
          click: t.proxy(this.click, this)
        }],
        [t(window), {
          resize: t.proxy(this.place, this)
        }],
        [t(document), {
          mousedown: t.proxy(function(t) {
            this.element.is(t.target) || this.element.find(t.target).size() || this.picker.is(t.target) || this.picker.find(t.target).size() || this.hide()
          }, this)
        }]
      ]
    },
    _attachEvents: function() {
      this._detachEvents(), this._applyEvents(this._events)
    },
    _detachEvents: function() {
      this._unapplyEvents(this._events)
    },
    _attachSecondaryEvents: function() {
      this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
    },
    _detachSecondaryEvents: function() {
      this._unapplyEvents(this._secondaryEvents)
    },
    _trigger: function(e, i) {
      var n = i || this.date,
        a = new Date(n.getTime() + 6e4 * n.getTimezoneOffset());
      this.element.trigger({
        type: e,
        date: a,
        format: t.proxy(function(t) {
          var e = t || this.o.format;
          return c.formatDate(n, e, this.o.language)
        }, this)
      })
    },
    show: function(t) {
      this.isInline || this.picker.appendTo("body"), this.picker.show(), this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(), this.place(), this._attachSecondaryEvents(), t && t.preventDefault(), this._trigger("show")
    },
    hide: function() {
      this.isInline || this.picker.is(":visible") && (this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"))
    },
    remove: function() {
      this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date
    },
    getDate: function() {
      var t = this.getUTCDate();
      return new Date(t.getTime() + 6e4 * t.getTimezoneOffset())
    },
    getUTCDate: function() {
      return this.date
    },
    setDate: function(t) {
      this.setUTCDate(new Date(t.getTime() - 6e4 * t.getTimezoneOffset()))
    },
    setUTCDate: function(t) {
      this.date = t, this.setValue()
    },
    setValue: function() {
      var t = this.getFormattedDate();
      this.isInput ? this.element.val(t) : this.component && this.element.find("input").val(t)
    },
    getFormattedDate: function(t) {
      return void 0 === t && (t = this.o.format), c.formatDate(this.date, t, this.o.language)
    },
    setStartDate: function(t) {
      this._process_options({
        startDate: t
      }), this.update(), this.updateNavArrows()
    },
    setEndDate: function(t) {
      this._process_options({
        endDate: t
      }), this.update(), this.updateNavArrows()
    },
    setDaysOfWeekDisabled: function(t) {
      this._process_options({
        daysOfWeekDisabled: t
      }), this.update(), this.updateNavArrows()
    },
    place: function() {
      if (!this.isInline) {
        var e = parseInt(this.element.parents().filter(function() {
            return "auto" != t(this).css("z-index")
          }).first().css("z-index")) + 10,
          i = this.component ? this.component.parent().offset() : this.element.offset(),
          n = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!0);
        this.picker.css({
          top: i.top + n,
          left: i.left,
          zIndex: e
        })
      }
    },
    _allow_update: !0,
    update: function() {
      if (this._allow_update) {
        var t, e = !1;
        arguments && arguments.length && ("string" == typeof arguments[0] || arguments[0] instanceof Date) ? (t = arguments[0], e = !0) : (t = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), delete this.element.data().date), this.date = c.parseDate(t, this.o.format, this.o.language), e && this.setValue(), this.viewDate = this.date < this.o.startDate ? new Date(this.o.startDate) : this.date > this.o.endDate ? new Date(this.o.endDate) : new Date(this.date), this.fill()
      }
    },
    fillDow: function() {
      var t = this.o.weekStart,
        e = "<tr>";
      if (this.o.calendarWeeks) {
        var i = '<th class="cw">&nbsp;</th>';
        e += i, this.picker.find(".datepicker-days thead tr:first-child").prepend(i)
      }
      for (; t < this.o.weekStart + 7;) e += '<th class="dow">' + h[this.o.language].daysMin[t++ % 7] + "</th>";
      e += "</tr>", this.picker.find(".datepicker-days thead").append(e)
    },
    fillMonths: function() {
      for (var t = "", e = 0; 12 > e;) t += '<span class="month">' + h[this.o.language].monthsShort[e++] + "</span>";
      this.picker.find(".datepicker-months td").html(t)
    },
    setRange: function(e) {
      e && e.length ? this.range = t.map(e, function(t) {
        return t.valueOf()
      }) : delete this.range, this.fill()
    },
    getClassNames: function(e) {
      var i = [],
        n = this.viewDate.getUTCFullYear(),
        a = this.viewDate.getUTCMonth(),
        o = this.date.valueOf(),
        r = new Date;
      return e.getUTCFullYear() < n || e.getUTCFullYear() == n && e.getUTCMonth() < a ? i.push("old") : (e.getUTCFullYear() > n || e.getUTCFullYear() == n && e.getUTCMonth() > a) && i.push("new"), this.o.todayHighlight && e.getUTCFullYear() == r.getFullYear() && e.getUTCMonth() == r.getMonth() && e.getUTCDate() == r.getDate() && i.push("today"), o && e.valueOf() == o && i.push("active"), (e.valueOf() < this.o.startDate || e.valueOf() > this.o.endDate || -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled)) && i.push("disabled"), this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && i.push("range"), -1 != t.inArray(e.valueOf(), this.range) && i.push("selected")), i
    },
    fill: function() {
      var i, n = new Date(this.viewDate),
        a = n.getUTCFullYear(),
        o = n.getUTCMonth(),
        r = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
        s = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
        l = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCFullYear() : 1 / 0,
        d = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCMonth() : 1 / 0;
      this.date && this.date.valueOf(), this.picker.find(".datepicker-days thead th.datepicker-switch").text(h[this.o.language].months[o] + " " + a), this.picker.find("tfoot th.today").text(h[this.o.language].today).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot th.clear").text(h[this.o.language].clear).toggle(this.o.clearBtn !== !1), this.updateNavArrows(), this.fillMonths();
      var u = e(a, o - 1, 28, 0, 0, 0, 0),
        p = c.getDaysInMonth(u.getUTCFullYear(), u.getUTCMonth());
      u.setUTCDate(p), u.setUTCDate(p - (u.getUTCDay() - this.o.weekStart + 7) % 7);
      var f = new Date(u);
      f.setUTCDate(f.getUTCDate() + 42), f = f.valueOf();
      for (var g, m = []; u.valueOf() < f;) {
        if (u.getUTCDay() == this.o.weekStart && (m.push("<tr>"), this.o.calendarWeeks)) {
          var v = new Date(+u + 864e5 * ((this.o.weekStart - u.getUTCDay() - 7) % 7)),
            b = new Date(+v + 864e5 * ((11 - v.getUTCDay()) % 7)),
            y = new Date(+(y = e(b.getUTCFullYear(), 0, 1)) + 864e5 * ((11 - y.getUTCDay()) % 7)),
            x = (b - y) / 864e5 / 7 + 1;
          m.push('<td class="cw">' + x + "</td>")
        }
        g = this.getClassNames(u), g.push("day");
        var w = this.o.beforeShowDay(u);
        void 0 === w ? w = {} : "boolean" == typeof w ? w = {
          enabled: w
        } : "string" == typeof w && (w = {
          classes: w
        }), w.enabled === !1 && g.push("disabled"), w.classes && (g = g.concat(w.classes.split(/\s+/))), w.tooltip && (i = w.tooltip), g = t.unique(g), m.push('<td class="' + g.join(" ") + '"' + (i ? ' title="' + i + '"' : "") + ">" + u.getUTCDate() + "</td>"), u.getUTCDay() == this.o.weekEnd && m.push("</tr>"), u.setUTCDate(u.getUTCDate() + 1)
      }
      this.picker.find(".datepicker-days tbody").empty().append(m.join(""));
      var k = this.date && this.date.getUTCFullYear(),
        C = this.picker.find(".datepicker-months").find("th:eq(1)").text(a).end().find("span").removeClass("active");
      k && k == a && C.eq(this.date.getUTCMonth()).addClass("active"), (r > a || a > l) && C.addClass("disabled"), a == r && C.slice(0, s).addClass("disabled"), a == l && C.slice(d + 1).addClass("disabled"), m = "", a = 10 * parseInt(a / 10, 10);
      var D = this.picker.find(".datepicker-years").find("th:eq(1)").text(a + "-" + (a + 9)).end().find("td");
      a -= 1;
      for (var S = -1; 11 > S; S++) m += '<span class="year' + (-1 == S ? " old" : 10 == S ? " new" : "") + (k == a ? " active" : "") + (r > a || a > l ? " disabled" : "") + '">' + a + "</span>", a += 1;
      D.html(m)
    },
    updateNavArrows: function() {
      if (this._allow_update) {
        var t = new Date(this.viewDate),
          e = t.getUTCFullYear(),
          i = t.getUTCMonth();
        switch (this.viewMode) {
          case 0:
            this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() && i <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({
              visibility: "hidden"
            }) : this.picker.find(".prev").css({
              visibility: "visible"
            }), 1 / 0 !== this.o.endDate && e >= this.o.endDate.getUTCFullYear() && i >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({
              visibility: "hidden"
            }) : this.picker.find(".next").css({
              visibility: "visible"
            });
            break;
          case 1:
          case 2:
            this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
              visibility: "hidden"
            }) : this.picker.find(".prev").css({
              visibility: "visible"
            }), 1 / 0 !== this.o.endDate && e >= this.o.endDate.getUTCFullYear() ? this.picker.find(".next").css({
              visibility: "hidden"
            }) : this.picker.find(".next").css({
              visibility: "visible"
            })
        }
      }
    },
    click: function(i) {
      i.preventDefault();
      var n = t(i.target).closest("span, td, th");
      if (1 == n.length) switch (n[0].nodeName.toLowerCase()) {
        case "th":
          switch (n[0].className) {
            case "datepicker-switch":
              this.showMode(1);
              break;
            case "prev":
            case "next":
              var a = c.modes[this.viewMode].navStep * ("prev" == n[0].className ? -1 : 1);
              switch (this.viewMode) {
                case 0:
                  this.viewDate = this.moveMonth(this.viewDate, a);
                  break;
                case 1:
                case 2:
                  this.viewDate = this.moveYear(this.viewDate, a)
              }
              this.fill();
              break;
            case "today":
              var o = new Date;
              o = e(o.getFullYear(), o.getMonth(), o.getDate(), 0, 0, 0), this.showMode(-2);
              var r = "linked" == this.o.todayBtn ? null : "view";
              this._setDate(o, r);
              break;
            case "clear":
              var s;
              this.isInput ? s = this.element : this.component && (s = this.element.find("input")), s && s.val("").change(), this._trigger("changeDate"), this.update(), this.o.autoclose && this.hide()
          }
          break;
        case "span":
          if (!n.is(".disabled")) {
            if (this.viewDate.setUTCDate(1), n.is(".month")) {
              var l = 1,
                d = n.parent().find("span").index(n),
                h = this.viewDate.getUTCFullYear();
              this.viewDate.setUTCMonth(d), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode && this._setDate(e(h, d, l, 0, 0, 0, 0))
            } else {
              var h = parseInt(n.text(), 10) || 0,
                l = 1,
                d = 0;
              this.viewDate.setUTCFullYear(h), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(e(h, d, l, 0, 0, 0, 0))
            }
            this.showMode(-1), this.fill()
          }
          break;
        case "td":
          if (n.is(".day") && !n.is(".disabled")) {
            var l = parseInt(n.text(), 10) || 1,
              h = this.viewDate.getUTCFullYear(),
              d = this.viewDate.getUTCMonth();
            n.is(".old") ? 0 === d ? (d = 11, h -= 1) : d -= 1 : n.is(".new") && (11 == d ? (d = 0, h += 1) : d += 1), this._setDate(e(h, d, l, 0, 0, 0, 0))
          }
      }
    },
    _setDate: function(t, e) {
      e && "date" != e || (this.date = new Date(t)), e && "view" != e || (this.viewDate = new Date(t)), this.fill(), this.setValue(), this._trigger("changeDate");
      var i;
      this.isInput ? i = this.element : this.component && (i = this.element.find("input")), i && (i.change(), !this.o.autoclose || e && "date" != e || this.hide())
    },
    moveMonth: function(t, e) {
      if (!e) return t;
      var i, n, a = new Date(t.valueOf()),
        o = a.getUTCDate(),
        r = a.getUTCMonth(),
        s = Math.abs(e);
      if (e = e > 0 ? 1 : -1, 1 == s) n = -1 == e ? function() {
        return a.getUTCMonth() == r
      } : function() {
        return a.getUTCMonth() != i
      }, i = r + e, a.setUTCMonth(i), (0 > i || i > 11) && (i = (i + 12) % 12);
      else {
        for (var l = 0; s > l; l++) a = this.moveMonth(a, e);
        i = a.getUTCMonth(), a.setUTCDate(o), n = function() {
          return i != a.getUTCMonth()
        }
      }
      for (; n();) a.setUTCDate(--o), a.setUTCMonth(i);
      return a
    },
    moveYear: function(t, e) {
      return this.moveMonth(t, 12 * e)
    },
    dateWithinRange: function(t) {
      return t >= this.o.startDate && t <= this.o.endDate
    },
    keydown: function(t) {
      if (this.picker.is(":not(:visible)")) return void(27 == t.keyCode && this.show());
      var e, i, n, a = !1;
      switch (t.keyCode) {
        case 27:
          this.hide(), t.preventDefault();
          break;
        case 37:
        case 39:
          if (!this.o.keyboardNavigation) break;
          e = 37 == t.keyCode ? -1 : 1, t.ctrlKey ? (i = this.moveYear(this.date, e), n = this.moveYear(this.viewDate, e)) : t.shiftKey ? (i = this.moveMonth(this.date, e), n = this.moveMonth(this.viewDate, e)) : (i = new Date(this.date), i.setUTCDate(this.date.getUTCDate() + e), n = new Date(this.viewDate), n.setUTCDate(this.viewDate.getUTCDate() + e)), this.dateWithinRange(i) && (this.date = i, this.viewDate = n, this.setValue(), this.update(), t.preventDefault(), a = !0);
          break;
        case 38:
        case 40:
          if (!this.o.keyboardNavigation) break;
          e = 38 == t.keyCode ? -1 : 1, t.ctrlKey ? (i = this.moveYear(this.date, e), n = this.moveYear(this.viewDate, e)) : t.shiftKey ? (i = this.moveMonth(this.date, e), n = this.moveMonth(this.viewDate, e)) : (i = new Date(this.date), i.setUTCDate(this.date.getUTCDate() + 7 * e), n = new Date(this.viewDate), n.setUTCDate(this.viewDate.getUTCDate() + 7 * e)), this.dateWithinRange(i) && (this.date = i, this.viewDate = n, this.setValue(), this.update(), t.preventDefault(), a = !0);
          break;
        case 13:
          this.hide(), t.preventDefault();
          break;
        case 9:
          this.hide()
      }
      if (a) {
        this._trigger("changeDate");
        var o;
        this.isInput ? o = this.element : this.component && (o = this.element.find("input")), o && o.change()
      }
    },
    showMode: function(t) {
      t && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + t))), this.picker.find(">div").hide().filter(".datepicker-" + c.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows()
    }
  };
  var o = function(e, i) {
    this.element = t(e), this.inputs = t.map(i.inputs, function(t) {
      return t.jquery ? t[0] : t
    }), delete i.inputs, t(this.inputs).datepicker(i).bind("changeDate", t.proxy(this.dateUpdated, this)), this.pickers = t.map(this.inputs, function(e) {
      return t(e).data("datepicker")
    }), this.updateDates()
  };
  o.prototype = {
    updateDates: function() {
      this.dates = t.map(this.pickers, function(t) {
        return t.date
      }), this.updateRanges()
    },
    updateRanges: function() {
      var e = t.map(this.dates, function(t) {
        return t.valueOf()
      });
      t.each(this.pickers, function(t, i) {
        i.setRange(e)
      })
    },
    dateUpdated: function(e) {
      var i = t(e.target).data("datepicker"),
        n = i.getUTCDate(),
        a = t.inArray(e.target, this.inputs),
        o = this.inputs.length;
      if (-1 != a) {
        if (n < this.dates[a])
          for (; a >= 0 && n < this.dates[a];) this.pickers[a--].setUTCDate(n);
        else if (n > this.dates[a])
          for (; o > a && n > this.dates[a];) this.pickers[a++].setUTCDate(n);
        this.updateDates()
      }
    },
    remove: function() {
      t.map(this.pickers, function(t) {
        t.remove()
      }), delete this.element.data().datepicker
    }
  };
  var r = t.fn.datepicker,
    s = t.fn.datepicker = function(e) {
      var r = Array.apply(null, arguments);
      r.shift();
      var s;
      return this.each(function() {
        var d = t(this),
          h = d.data("datepicker"),
          c = "object" == typeof e && e;
        if (!h) {
          var u = i(this, "date"),
            p = t.extend({}, l, u, c),
            f = n(p.language),
            g = t.extend({}, l, f, u, c);
          if (d.is(".input-daterange") || g.inputs) {
            var m = {
              inputs: g.inputs || d.find("input").toArray()
            };
            d.data("datepicker", h = new o(this, t.extend(g, m)))
          } else d.data("datepicker", h = new a(this, g))
        }
        return "string" == typeof e && "function" == typeof h[e] && (s = h[e].apply(h, r), void 0 !== s) ? !1 : void 0
      }), void 0 !== s ? s : this
    },
    l = t.fn.datepicker.defaults = {
      autoclose: !1,
      beforeShowDay: t.noop,
      calendarWeeks: !1,
      clearBtn: !1,
      daysOfWeekDisabled: [],
      endDate: 1 / 0,
      forceParse: !0,
      format: "mm/dd/yyyy",
      keyboardNavigation: !0,
      language: "en",
      minViewMode: 0,
      rtl: !1,
      startDate: -1 / 0,
      startView: 0,
      todayBtn: !1,
      todayHighlight: !1,
      weekStart: 0
    },
    d = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
  t.fn.datepicker.Constructor = a;
  var h = t.fn.datepicker.dates = {
      en: {
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        today: "Today",
        clear: "Clear"
      }
    },
    c = {
      modes: [{
        clsName: "days",
        navFnc: "Month",
        navStep: 1
      }, {
        clsName: "months",
        navFnc: "FullYear",
        navStep: 1
      }, {
        clsName: "years",
        navFnc: "FullYear",
        navStep: 10
      }],
      isLeapYear: function(t) {
        return 0 === t % 4 && 0 !== t % 100 || 0 === t % 400
      },
      getDaysInMonth: function(t, e) {
        return [31, c.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
      },
      validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
      nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
      parseFormat: function(t) {
        var e = t.replace(this.validParts, "\x00").split("\x00"),
          i = t.match(this.validParts);
        if (!e || !e.length || !i || 0 === i.length) throw new Error("Invalid date format.");
        return {
          separators: e,
          parts: i
        }
      },
      parseDate: function(i, n, o) {
        if (i instanceof Date) return i;
        if ("string" == typeof n && (n = c.parseFormat(n)), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(i)) {
          var r, s, l = /([\-+]\d+)([dmwy])/,
            d = i.match(/([\-+]\d+)([dmwy])/g);
          i = new Date;
          for (var u = 0; u < d.length; u++) switch (r = l.exec(d[u]), s = parseInt(r[1]), r[2]) {
            case "d":
              i.setUTCDate(i.getUTCDate() + s);
              break;
            case "m":
              i = a.prototype.moveMonth.call(a.prototype, i, s);
              break;
            case "w":
              i.setUTCDate(i.getUTCDate() + 7 * s);
              break;
            case "y":
              i = a.prototype.moveYear.call(a.prototype, i, s)
          }
          return e(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate(), 0, 0, 0)
        }
        var p, f, r, d = i && i.match(this.nonpunctuation) || [],
          i = new Date,
          g = {},
          m = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
          v = {
            yyyy: function(t, e) {
              return t.setUTCFullYear(e)
            },
            yy: function(t, e) {
              return t.setUTCFullYear(2e3 + e)
            },
            m: function(t, e) {
              for (e -= 1; 0 > e;) e += 12;
              for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() != e;) t.setUTCDate(t.getUTCDate() - 1);
              return t
            },
            d: function(t, e) {
              return t.setUTCDate(e)
            }
          };
        v.M = v.MM = v.mm = v.m, v.dd = v.d, i = e(i.getFullYear(), i.getMonth(), i.getDate(), 0, 0, 0);
        var b = n.parts.slice();
        if (d.length != b.length && (b = t(b).filter(function(e, i) {
            return -1 !== t.inArray(i, m)
          }).toArray()), d.length == b.length) {
          for (var u = 0, y = b.length; y > u; u++) {
            if (p = parseInt(d[u], 10), r = b[u], isNaN(p)) switch (r) {
              case "MM":
                f = t(h[o].months).filter(function() {
                  var t = this.slice(0, d[u].length),
                    e = d[u].slice(0, t.length);
                  return t == e
                }), p = t.inArray(f[0], h[o].months) + 1;
                break;
              case "M":
                f = t(h[o].monthsShort).filter(function() {
                  var t = this.slice(0, d[u].length),
                    e = d[u].slice(0, t.length);
                  return t == e
                }), p = t.inArray(f[0], h[o].monthsShort) + 1
            }
            g[r] = p
          }
          for (var x, u = 0; u < m.length; u++) x = m[u], x in g && !isNaN(g[x]) && v[x](i, g[x])
        }
        return i
      },
      formatDate: function(e, i, n) {
        "string" == typeof i && (i = c.parseFormat(i));
        var a = {
          d: e.getUTCDate(),
          D: h[n].daysShort[e.getUTCDay()],
          DD: h[n].days[e.getUTCDay()],
          m: e.getUTCMonth() + 1,
          M: h[n].monthsShort[e.getUTCMonth()],
          MM: h[n].months[e.getUTCMonth()],
          yy: e.getUTCFullYear().toString().substring(2),
          yyyy: e.getUTCFullYear()
        };
        a.dd = (a.d < 10 ? "0" : "") + a.d, a.mm = (a.m < 10 ? "0" : "") + a.m;
        for (var e = [], o = t.extend([], i.separators), r = 0, s = i.parts.length; s >= r; r++) o.length && e.push(o.shift()), e.push(a[i.parts[r]]);
        return e.join("")
      },
      headTemplate: '<thead><tr><th class="prev"><i class="icon-arrow-left"/></th><th colspan="5" class="datepicker-switch"></th><th class="next"><i class="icon-arrow-right"/></th></tr></thead>',
      contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
      footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
    };
  c.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + c.headTemplate + "<tbody></tbody>" + c.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + c.headTemplate + c.contTemplate + c.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + c.headTemplate + c.contTemplate + c.footTemplate + "</table></div></div>", t.fn.datepicker.DPGlobal = c, t.fn.datepicker.noConflict = function() {
    return t.fn.datepicker = r, this
  }, t(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(e) {
    var i = t(this);
    i.data("datepicker") || (e.preventDefault(), s.call(i, "show"))
  }), t(function() {
    s.call(t('[data-provide="datepicker-inline"]'))
  })
}(window.jQuery),
function(t) {
  "use strict";
  t.fn.bdatepicker = t.fn.datepicker.noConflict(), t.fn.datepicker || (t.fn.datepicker = t.fn.bdatepicker);
  var e = function(t) {
    this.init("date", t, e.defaults), this.initPicker(t, e.defaults)
  };
  t.fn.editableutils.inherit(e, t.fn.editabletypes.abstractinput), t.extend(e.prototype, {
    initPicker: function(e, i) {
      this.options.viewformat || (this.options.viewformat = this.options.format), e.datepicker = t.fn.editableutils.tryParseJson(e.datepicker, !0), this.options.datepicker = t.extend({}, i.datepicker, e.datepicker, {
        format: this.options.viewformat
      }), this.options.datepicker.language = this.options.datepicker.language || "en", this.dpg = t.fn.bdatepicker.DPGlobal, this.parsedFormat = this.dpg.parseFormat(this.options.format), this.parsedViewFormat = this.dpg.parseFormat(this.options.viewformat)
    },
    render: function() {
      this.$input.bdatepicker(this.options.datepicker), this.options.clear && (this.$clear = t('<a href="#"></a>').html(this.options.clear).click(t.proxy(function(t) {
        t.preventDefault(), t.stopPropagation(), this.clear()
      }, this)), this.$tpl.parent().append(t('<div class="editable-clear">').append(this.$clear)))
    },
    value2html: function(t, i) {
      var n = t ? this.dpg.formatDate(t, this.parsedViewFormat, this.options.datepicker.language) : "";
      e.superclass.value2html.call(this, n, i)
    },
    html2value: function(t) {
      return this.parseDate(t, this.parsedViewFormat)
    },
    value2str: function(t) {
      return t ? this.dpg.formatDate(t, this.parsedFormat, this.options.datepicker.language) : ""
    },
    str2value: function(t) {
      return this.parseDate(t, this.parsedFormat)
    },
    value2submit: function(t) {
      return this.value2str(t)
    },
    value2input: function(t) {
      this.$input.bdatepicker("update", t)
    },
    input2value: function() {
      return this.$input.data("datepicker").date
    },
    activate: function() {},
    clear: function() {
      this.$input.data("datepicker").date = null, this.$input.find(".active").removeClass("active"), this.options.showbuttons || this.$input.closest("form").submit()
    },
    autosubmit: function() {
      this.$input.on("mouseup", ".day", function(e) {
        if (!t(e.currentTarget).is(".old") && !t(e.currentTarget).is(".new")) {
          var i = t(this).closest("form");
          setTimeout(function() {
            i.submit()
          }, 200)
        }
      })
    },
    parseDate: function(t, e) {
      var i, n = null;
      return t && (n = this.dpg.parseDate(t, e, this.options.datepicker.language), "string" == typeof t && (i = this.dpg.formatDate(n, e, this.options.datepicker.language), t !== i && (n = null))), n
    }
  }), e.defaults = t.extend({}, t.fn.editabletypes.abstractinput.defaults, {
    tpl: '<div class="editable-date well"></div>',
    inputclass: null,
    format: "yyyy-mm-dd",
    viewformat: null,
    datepicker: {
      weekStart: 0,
      startView: 0,
      minViewMode: 0,
      autoclose: !1
    },
    clear: "&times; clear"
  }), t.fn.editabletypes.date = e
}(window.jQuery),
function(t) {
  "use strict";
  var e = function(t) {
    this.init("datefield", t, e.defaults), this.initPicker(t, e.defaults)
  };
  t.fn.editableutils.inherit(e, t.fn.editabletypes.date), t.extend(e.prototype, {
    render: function() {
      this.$input = this.$tpl.find("input"), this.setClass(), this.setAttr("placeholder"), this.$tpl.bdatepicker(this.options.datepicker), this.$input.off("focus keydown"), this.$input.keyup(t.proxy(function() {
        this.$tpl.removeData("date"), this.$tpl.bdatepicker("update")
      }, this))
    },
    value2input: function(t) {
      this.$input.val(t ? this.dpg.formatDate(t, this.parsedViewFormat, this.options.datepicker.language) : ""), this.$tpl.bdatepicker("update")
    },
    input2value: function() {
      return this.html2value(this.$input.val())
    },
    activate: function() {
      t.fn.editabletypes.text.prototype.activate.call(this)
    },
    autosubmit: function() {}
  }), e.defaults = t.extend({}, t.fn.editabletypes.date.defaults, {
    tpl: '<div class="input-append date"><input type="text"/><span class="add-on"><i class="icon-th"></i></span></div>',
    inputclass: "input-small",
    datepicker: {
      weekStart: 0,
      startView: 0,
      minViewMode: 0,
      autoclose: !0
    }
  }), t.fn.editabletypes.datefield = e
}(window.jQuery),
function(t) {
  "use strict";
  var e = function(t) {
    this.init("datetime", t, e.defaults), this.initPicker(t, e.defaults)
  };
  t.fn.editableutils.inherit(e, t.fn.editabletypes.abstractinput), t.extend(e.prototype, {
    initPicker: function(e, i) {
      this.options.viewformat || (this.options.viewformat = this.options.format), e.datetimepicker = t.fn.editableutils.tryParseJson(e.datetimepicker, !0), this.options.datetimepicker = t.extend({}, i.datetimepicker, e.datetimepicker, {
        format: this.options.viewformat
      }), this.options.datetimepicker.language = this.options.datetimepicker.language || "en", this.dpg = t.fn.datetimepicker.DPGlobal, this.parsedFormat = this.dpg.parseFormat(this.options.format, this.options.formatType), this.parsedViewFormat = this.dpg.parseFormat(this.options.viewformat, this.options.formatType)
    },
    render: function() {
      this.$input.datetimepicker(this.options.datetimepicker), this.$input.on("changeMode", function() {
        var e = t(this).closest("form").parent();
        setTimeout(function() {
          e.triggerHandler("resize")
        }, 0)
      }), this.options.clear && (this.$clear = t('<a href="#"></a>').html(this.options.clear).click(t.proxy(function(t) {
        t.preventDefault(), t.stopPropagation(), this.clear()
      }, this)), this.$tpl.parent().append(t('<div class="editable-clear">').append(this.$clear)))
    },
    value2html: function(t, i) {
      var n = t ? this.dpg.formatDate(this.toUTC(t), this.parsedViewFormat, this.options.datetimepicker.language, this.options.formatType) : "";
      return i ? void e.superclass.value2html.call(this, n, i) : n
    },
    html2value: function(t) {
      var e = this.parseDate(t, this.parsedViewFormat);
      return e ? this.fromUTC(e) : null
    },
    value2str: function(t) {
      return t ? this.dpg.formatDate(this.toUTC(t), this.parsedFormat, this.options.datetimepicker.language, this.options.formatType) : ""
    },
    str2value: function(t) {
      var e = this.parseDate(t, this.parsedFormat);
      return e ? this.fromUTC(e) : null
    },
    value2submit: function(t) {
      return this.value2str(t)
    },
    value2input: function(t) {
      t && this.$input.data("datetimepicker").setDate(t)
    },
    input2value: function() {
      var t = this.$input.data("datetimepicker");
      return t.date ? t.getDate() : null
    },
    activate: function() {},
    clear: function() {
      this.$input.data("datetimepicker").date = null, this.$input.find(".active").removeClass("active"), this.options.showbuttons || this.$input.closest("form").submit()
    },
    autosubmit: function() {
      this.$input.on("mouseup", ".minute", function() {
        var e = t(this).closest("form");
        setTimeout(function() {
          e.submit()
        }, 200)
      })
    },
    toUTC: function(t) {
      return t ? new Date(t.valueOf() - 6e4 * t.getTimezoneOffset()) : t
    },
    fromUTC: function(t) {
      return t ? new Date(t.valueOf() + 6e4 * t.getTimezoneOffset()) : t
    },
    parseDate: function(t, e) {
      var i, n = null;
      return t && (n = this.dpg.parseDate(t, e, this.options.datetimepicker.language, this.options.formatType), "string" == typeof t && (i = this.dpg.formatDate(n, e, this.options.datetimepicker.language, this.options.formatType), t !== i && (n = null))), n
    }
  }), e.defaults = t.extend({}, t.fn.editabletypes.abstractinput.defaults, {
    tpl: '<div class="editable-date well"></div>',
    inputclass: null,
    format: "yyyy-mm-dd hh:ii",
    formatType: "standard",
    viewformat: null,
    datetimepicker: {
      todayHighlight: !1,
      autoclose: !1
    },
    clear: "&times; clear"
  }), t.fn.editabletypes.datetime = e
}(window.jQuery),
function(t) {
  "use strict";
  var e = function(t) {
    this.init("datetimefield", t, e.defaults), this.initPicker(t, e.defaults)
  };
  t.fn.editableutils.inherit(e, t.fn.editabletypes.datetime), t.extend(e.prototype, {
    render: function() {
      this.$input = this.$tpl.find("input"), this.setClass(), this.setAttr("placeholder"), this.$tpl.datetimepicker(this.options.datetimepicker), this.$input.off("focus keydown"), this.$input.keyup(t.proxy(function() {
        this.$tpl.removeData("date"), this.$tpl.datetimepicker("update")
      }, this))
    },
    value2input: function(t) {
      this.$input.val(this.value2html(t)), this.$tpl.datetimepicker("update")
    },
    input2value: function() {
      return this.html2value(this.$input.val())
    },
    activate: function() {
      t.fn.editabletypes.text.prototype.activate.call(this)
    },
    autosubmit: function() {}
  }), e.defaults = t.extend({}, t.fn.editabletypes.datetime.defaults, {
    tpl: '<div class="input-append date"><input type="text"/><span class="add-on"><i class="icon-th"></i></span></div>',
    inputclass: "input-medium",
    datetimepicker: {
      todayHighlight: !1,
      autoclose: !0
    }
  }), t.fn.editabletypes.datetimefield = e
}(window.jQuery),
function(t, e, i) {
  var n = function(t) {
      t = t.toString().replace(/[,.;]/g, "");
      var e, i = t.substring(t.length - 2, t.length),
        n = t.substring(0, t.length - 2);
      if (t.length <= 2) e = i;
      else {
        var a = n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        e = a + "," + i
      }
      return e
    },
    a = function() {
      jQuery(window).bind("resize load", function() {
        jQuery(this).width() <= 1030 ? e(".element-left").insertAfter(e(".element-right")) : e(".element-right").insertAfter(e(".element-left"))
      })
    },
    o = function(t) {
      var e = n(t.val());
      t.val(e)
    },
    r = function() {
      var t = jQuery(".currencyValue");
      t.each(function() {
        o(jQuery(this))
      }), t.keyup(function() {
        o(jQuery(this))
      })
    },
    s = function(t) {
      jQuery(t).hasClass("active") ? jQuery(t).removeClass("active") : (jQuery(".filter-switch").removeClass("active"), jQuery(t).addClass("active"))
    },
    l = function() {
      var t = jQuery(".input-group.date");
      t.length > 0 && t.datepicker({})
    },
    d = function() {
      jQuery(".panel-filter").click(function() {
        var t = jQuery(".collapse-" + jQuery(this).attr("data-id"));
        s(t)
      })
    },
    h = function() {
      jQuery(window).bind("resize load", function() {
        var t = jQuery("#menu-links");
        jQuery(this).width() < 767 ? (t.removeClass("in"), t.addClass("out")) : (t.removeClass("out"), t.addClass("in"))
      })
    },
    c = function() {
      jQuery("button").on("click", function() {
        var t = jQuery(this);
        t.text() == t.data("text-swap") ? t.text(t.data("text-original")) : (t.data("text-original", t.text()), t.text(t.data("text-swap")))
      })
    },
    u = function() {
      var t = e(window).width();
      t > 768 && (jQuery(".fixed-header").each(function() {
        var t = jQuery(this),
          e = jQuery(".fixed-header-wrap"),
          i = function() {
            var i = jQuery(e).width();
            i += 10, t.width(i);
            var n = jQuery(".fixed-header-wrap");
            n.height(jQuery(".fixed-header", n).height())
          };
        i(), jQuery(window).resize(i)
      }), jQuery(".fixed-sidebar").each(function() {
        var t = jQuery(this),
          e = jQuery(".fixed-sidebar-wrap"),
          i = function() {
            var i = jQuery(e).width();
            i += 10, t.width(i);
            var n = jQuery(".fixed-sidebar-wrap");
            n.height(jQuery(".fixed-sidebar", n).height())
          };
        i(), jQuery(window).resize(i)
      }))
    },
    p = function() {
      jQuery(".filter-switch").click(function() {
        jQuery(this).toggleClass("down up")
      })
    },
    f = function() {
      jQuery(function() {
        var t = jQuery("[data-toggle='tooltip']");
        t.length > 0 && t.tooltip({
          delay: {
            show: 800
          }
        })
      })
    },
    g = function() {
      jQuery(".clickable-row").click(function() {
        window.document.location = jQuery(this).data("href")
      })
    },
    m = function() {
      jQuery(document).on("change", ".btn-file :file", function() {
        var t = e(this),
          i = t.get(0).files ? t.get(0).files.length : 1,
          n = t.val().replace(/\\/g, "/").replace(/.*\//, "");
        t.trigger("fileselect", [i, n])
      }), jQuery(document).ready(function() {
        jQuery(".btn-file :file").on("fileselect", function(t, e, i) {
          var n = jQuery(this).parents(".input-group").find(":text"),
            a = e > 1 ? e + " ficheiros selecionados" : i;
          n.length ? n.val(a) : a && alert(a)
        })
      })
    },
    v = function() {
      var t = jQuery(".fixed-header");
      t.length > 0 && (t.affix({
        offset: {
          top: 190
        }
      }), e(window).width() > "992" && jQuery(".left.fixed-sidebar").affix({
        offset: {
          top: 190
        }
      }), e(window).width() > "768" && jQuery(".right.fixed-sidebar").affix({
        offset: {
          top: 190
        }
      }))
    },
    b = function() {
      jQuery("html").on("click", function() {
        e(".header-search").fadeOut(function() {
          e(".header-static").fadeIn()
        })
      }), jQuery(".mobile-search-toggle").on("click", function(t) {
        e(".header-static").fadeOut(function() {
          e(".header-search").fadeIn(), e("#main-search .main-search-input").focus()
        }), t.stopPropagation()
      }), jQuery(".header-search").on("click", function(t) {
        t.stopPropagation()
      })
    },
    y = function() {
      e.fn.editable.defaults.mode = "inline", jQuery(".editable_edit").not(".modal-content-anexos .editable_edit").on("click", function() {
        e(this).addClass("hidden"), e(this).parent().find(".dropdown-toggle").addClass("hidden"), e(this).parent().find(".editable_remove").addClass("hidden"), e(this).parent().find(".editable_cancel, .editable_save").removeClass("hidden"), e(this).parents("tr").find(".editable-nif").editable({}), e(this).parents("tr").find(".editable-number").editable({});
        var t = e(this).parents("tr").find(".opt-editable");
        return t.length > 0 && e(t.get().reverse()).each(function() {
          e(this).editable("toggle")
        }), !1
      }), jQuery(".editable_save, .editable_cancel").on("click", function() {
        e(".editable_save, .editable_cancel").addClass("hidden"), e(this).parents("tr").find(".opt-editable").editable(), e(this).parent().find(".editable_edit, .editable_remove, .dropdown-toggle").removeClass("hidden");
        var t = e(this).parents().find(".opt-editable");
        return t.length > 0 && e(t).each(function() {
          e(this).editable("destroy"), e(this).show()
        }), !1
      })
    },
    x = function() {
      e.fn.editable.defaults.mode = "inline", jQuery(".modal-content-anexos .editable_edit").on("click", function() {
        e(this).addClass("hidden"), e(this).parent().find(".editable_remove").addClass("hidden"), e(this).parent().find(".editable_cancel, .editable_save").removeClass("hidden"), e(this).parents().find("#modal-conclude-button").removeClass("btn-success").addClass("btn-default disabled"), e(this).parents("tr").find(".editable-year").editable({
          value: "2016",
          type: "select",
          source: [{
            value: 1,
            text: "-"
          }, {
            value: 2,
            text: "2016"
          }, {
            value: 3,
            text: "2017"
          }, {
            value: 4,
            text: "2018"
          }]
        }), e(this).parents("tr").find(".editable-montly").editable({
          value: "-",
          type: "select",
          source: [{
            value: 1,
            text: "-"
          }, {
            value: 2,
            text: "1"
          }, {
            value: 3,
            text: "2"
          }, {
            value: 4,
            text: "3"
          }]
        }), e(this).parents("tr").find(".editable-quarterly").editable({
          value: "12T",
          type: "select",
          source: [{
            value: 1,
            text: "-"
          }, {
            value: 2,
            text: "3T"
          }, {
            value: 3,
            text: "6T"
          }, {
            value: 4,
            text: "9T"
          }, {
            value: 5,
            text: "12T"
          }]
        });
        var t = e(this).parents("tr").find(".opt-editable");
        return t.length > 0 && e(t.get().reverse()).each(function() {
          e(this).editable("toggle")
        }), !1
      }), jQuery(".modal-content-anexos .editable_save, .modal-content-anexos .editable_cancel").on("click", function() {
        e(".modal-content-anexos .editable_save,.modal-content-anexos .editable_cancel").addClass("hidden"), e(this).parents("tr").find(".opt-editable").editable(), e(this).parent().find(".editable_edit, .editable_remove").removeClass("hidden"), e(this).parents().find("#modal-conclude-button").removeClass("btn-default disabled").addClass("btn-success");
        var t = e(this).parents("tr").find(".opt-editable");
        return t.length > 0 && e(t).each(function() {
          e(this).editable("destroy"), e(this).show()
        }), !1
      })
    },
    w = function() {
      b(), y(), x(), d(), h(), a(), c(), v(), u(), p(), f(), g(), l(), m(), r()
    },
    k = function() {
      var t = document.getElementsByTagName("applet");
      if (t && 0 == t.length && (t = document.getElementsByTagName("embed")), t && 0 == t.length && (t = document.getElementsByTagName("object")), t && t.length > 0) {
        var e = t[0];
        e.innerHTML += '<div class="alert alert-warning text-left" role="alert" ><strong> O browser utilizado n&#227;o est&#225; a permitir a execu&#231;&#227;o de aplica&#231;&#245;es Java. Por favor verifique se:</strong><ul><li>Est&#225; a utilizar um browser com suporte a Java Applets, como &#233; o caso do Internet Explorer, do Firefox ou do Safari (para OS X).</li><li>Tem instalada uma vers&#227;o Java atualizada no seu computador. <a target="_blank" href="http://java.com/download/index.jsp">Fa&#231;a download do Java mais  recente</a>.</li><li>O browser utilizado est&#225; a bloquear a execu&#231;&#227;o de aplica&#231;&#245;es Java. Confirme se existe um pop-up a pedir para autorizar a execu&#231;&#227;o desta aplica&#231;&#227;o.</li></ul><span>A AT encontra-se a trabalhar em solu&#231;&#245;es que possibilitem a utiliza&#231;&#227;o generalizada nos v&#225;rios browsers de modo a garantir uma maior universalidade de utiliza&#231;&#227;o para todos os contribuintes.</span></div>'
      }
    };
  t.app_static = {
    url: ""
  }, t.pf_static = {
    url: ""
  }, t.iniciar = function() {
    w()
  }, t.iniciarApplet = function() {
    k()
  }
}(window.PFView = window.PFView || {}, jQuery),
function(t, e, i) {
  t.charts = t.charts || {};
  var n = ["rgba(58,196,242, #alphaValue#)", "rgba(255,188,66, #alphaValue#)", "rgba(141,211,132,#alphaValue#)", "rgba(160,112,252,#alphaValue#)", "rgba(253,101,101,#alphaValue#)", "rgba(77,175,124, #alphaValue#)", "rgba(78,129,237, #alphaValue#)", "rgba(228,78,103, #alphaValue#)"],
    a = function(t, e) {
      return n[t].replace("#alphaValue#", e)
    },
    o = n.map(function(t) {
      return t.replace("#alphaValue#", "1")
    }),
    r = function(t, e, n) {
      if (t === i) throw new Error("graphData is undefined");
      if (t.datasets === i) throw new Error("data in graphData is not defined.");
      if (t.datasets.length > 8) throw new Error("Exceeded designed series limit: " + t.datasets.length + " > 8");
      var r = !1;
      n && n.toggleOneColorPerDataset && (r = !0);
      var s = {};
      if (t.labels !== i && (s.labels = t.labels), s.datasets = [], r)
        for (var l = 0; l < t.datasets.length; l++) s.datasets[l] = {
          backgroundColor: o,
          hoverBackgroundColor: o,
          legend: t.datasets[l].legend,
          data: t.datasets[l].data
        };
      else
        for (var l = 0; l < t.datasets.length; l++) s.datasets[l] = {
          backgroundColor: a(l, 1),
          hoverBackgroundColor: a(l, 1),
          legend: t.datasets[l].legend,
          data: t.datasets[l].data
        };
      if (e !== i) {
        var d = function(t) {
          s.datasets[l][t] = e[t]
        };
        for (l = 0; l < t.datasets.length; l++) Object.getOwnPropertyNames(e).forEach(d)
      }
      return s
    },
    s = function(t, e, n) {
      if (e === i) throw new Error("graphData is undefined");
      if (e.datasets === i) throw new Error("data in graphData is not defined.");
      if (e.datasets.length > 8) throw new Error("Exceeded designed series limit: " + e.datasets.length + " > 8");
      var o = {};
      e.labels !== i && (o.labels = e.labels), o.datasets = [];
      for (var r, s = 0; s < e.datasets.length; s++) r = t.getContext("2d").createLinearGradient(0, 0, 0, t.getContext("2d").canvas.height), r.addColorStop(0, a(s, .8)), r.addColorStop(1, a(s, 0)), o.datasets[s] = {
        lineTension: 0,
        pointBorderColor: a(s, 1),
        borderColor: a(s, 1),
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 11,
        pointHoverRadius: 11,
        pointHoverBackgroundColor: a(s, 1),
        backgroundColor: r,
        hoverBackgroundColor: a(s, 1),
        legend: e.datasets[s].legend,
        data: e.datasets[s].data
      };
      if (n !== i) {
        var l = function(t) {
          o.datasets[s][t] = n[t]
        };
        for (s = 0; s < e.datasets.length; s++) Object.getOwnPropertyNames(n).forEach(l)
      }
      return o
    },
    l = function(t, e) {
      if (t === i) throw new Error("graphData is undefined");
      if (t.datasets === i) throw new Error("data in graphData is not defined.");
      if (1 !== t.datasets.length) throw new Error("Exceeded designed series limit: " + t.datasets.length + " !== 1");
      var n = {};
      t.labels !== i && (n.labels = t.labels), n.datasets = [{}], n.datasets[0].data = t.datasets[0].data, t.datasets[0].legend !== i && (n.datasets[0].legend = t.datasets[0].legend), n.datasets[0].backgroundColor = [], n.datasets[0].hoverBackgroundColor = [];
      for (var o = 0; o < t.datasets[0].data.length; o++) n.datasets[0].backgroundColor[o] = a(o, 1), n.datasets[0].hoverBackgroundColor[o] = a(o, 1);
      if (e !== i) {
        var r = function(t) {
          n.datasets[o][t] = e[t]
        };
        for (o = 0; o < t.datasets.length; o++) Object.getOwnPropertyNames(e).forEach(r)
      }
      return n
    };
  t.charts.initBarGraph = function(t, e, n) {
    var a = document.getElementById(t),
      o = 0;
    e.datasets.forEach(function(t) {
      var e = Math.max.apply(null, t.data);
      e > o && (o = e)
    });
    var s = !0;
    n && n.xAxesHide && (s = !1);
    var l = !0;
    n && n.tooltipsHide && (l = !1);
    var d = !1;
    n && n.valueTopBarDisplay && (d = !0);
    var h = !0;
    n && n.legendHide && (h = !1);
    var c = !1;
    n && n.stepSizeFix && (c = !0);
    var u = i,
      p = function(t) {
        var e = 0,
          i = 0,
          n = t.ticks,
          a = t.ticks.length - 1;
        if (c) {
          for (var r = 0; r < n.length; r++) e < n[r] - i && (e = n[r] - i), i = n[r];
          n[a] - o < e / 2 && (n[a + 1] = n[a] + e)
        }
        return n
      },
      f = new Chart(a, {
        type: "horizontalBar",
        data: r(e, u, n),
        options: {
          tooltips: {
            enabled: l,
            model: "label",
            backgroundColor: "#30302f",
            titleFontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            titleFontSize: 11,
            titleFontStyle: "bold",
            titleFontColor: "#fff",
            bodyFontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            bodyFontSize: 11,
            bodyFontStyle: "bold",
            bodyFontColor: "#3ac4f2",
            footerFontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            footerFontSize: 11,
            footerFontStyle: "bold",
            footerFontColor: "#ff000",
            caretSize: 6,
            xPadding: 10,
            yPadding: 10,
            callbacks: {
              title: function(t, e) {
                for (var i = "", n = 0; n < e.labels[t[0].index].length; n++) i += e.labels[t[0].index][n] + " - ";
                var a = i.length;
                return i = i.substr(0, a - 3)
              },
              label: function(t) {
                return t.xLabel
              }
            }
          },
          scales: {
            yAxes: [{
              ticks: {
                fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                fontSize: 14,
                fontStyle: "bold",
                fontColor: "#333333"
              }
            }],
            xAxes: [{
              afterBuildTicks: function(t) {
                t.ticks = p(t), t.max = t.ticks[t.ticks.length - 1], t.end = t.ticks[t.ticks.length - 1]
              },
              beforeUpdate: function(t) {},
              display: s,
              type: "linear",
              ticks: {
                beginAtZero: !0,
                fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                fontSize: 14,
                fontStyle: "bold",
                fontColor: "#333333",
                maxTicksLimit: 10,
                autoSkip: !1
              }
            }]
          },
          hover: {
            animationDuration: 0,
            mode: "label"
          },
          elements: {
            rectangle: {
              borderSkipped: "left"
            }
          },
          responsive: !0,
          legend: {
            display: !1
          },
          legendCallback: function(t) {
            if (h) {
              for (var e = "", i = t.data.datasets, n = 0; n < i.length; n++) {
                var o = i[n].legend,
                  r = i[n].backgroundColor;
                e += "<li>", e += '<i class="icon-round" style="color:' + r + ';"></i>', e += o, e += "</li>"
              }
              var s = document.createElement("ul");
              s.className = "labels", s.innerHTML = e;
              var l = a.parentNode;
              l.insertBefore(s, a)
            }
          },
          animation: {
            onComplete: function() {
              if (d) {
                var t = this.chart,
                  e = t.ctx;
                e.font = "bold 12px Roboto, Helvetica, Arial, sans-serif", e.fillStyle = "#333333", e.textAlign = "center", e.textBaseline = "bottom", this.data.datasets.forEach(function(i, n) {
                  var a = t.controller.getDatasetMeta(n);
                  a.data.forEach(function(t, n) {
                    var a = i.data[n];
                    e.fillText(a, t._model.x + 20, t._model.y + 10)
                  })
                })
              }
            }
          }
        }
      });
    f.generateLegend()
  }, t.charts.initColumnGraph = function(t, e) {
    var i = document.getElementById(t),
      n = new Chart(i, {
        type: "bar",
        data: r(e),
        options: {
          tooltips: {
            model: "label",
            backgroundColor: "#30302f",
            titleFontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            titleFontSize: 11,
            titleFontStyle: "bold",
            titleFontColor: "#fff",
            bodyFontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            bodyFontSize: 11,
            bodyFontStyle: "bold",
            bodyFontColor: "#3ac4f2",
            footerFontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            footerFontSize: 11,
            footerFontStyle: "bold",
            footerFontColor: "#ff000",
            caretSize: 6,
            xPadding: 10,
            yPadding: 10,
            callbacks: {
              title: function(t, e) {
                for (var i = "", n = 0; n < e.labels[t[0].index].length; n++) i += e.labels[t[0].index][n];
                return i
              },
              label: function(t) {
                return t.yLabel
              }
            }
          },
          scales: {
            yAxes: [{
              ticks: {
                fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                fontSize: 15,
                fontStyle: "bold",
                offsetGridLines: !0,
                fontColor: "#d1d2d3"
              }
            }],
            xAxes: [{
              ticks: {
                fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                fontSize: 14,
                fontStyle: "bold",
                offsetGridLines: !0,
                fontColor: "#333333"
              }
            }]
          },
          hover: {
            mode: "label"
          },
          elements: {
            rectangle: {
              borderSkipped: "left"
            }
          },
          responsive: !0,
          legend: {
            display: !1
          },
          legendCallback: function(t) {
            for (var e = "", n = t.data.datasets, a = 0; a < n.length; a++) {
              var o = n[a].legend,
                r = n[a].backgroundColor;
              e += "<li>", e += '<i class="icon-round" style="color:' + r + ';"></i>', e += o, e += "</li>"
            }
            var s = document.createElement("ul");
            s.className = "labels", s.innerHTML = e;
            var l = i.parentNode;
            l.insertBefore(s, i)
          }
        }
      });
    n.generateLegend()
  }, t.charts.initAreaGraph = function(t, e) {
    var i = document.getElementById(t),
      n = new Chart(i, {
        type: "line",
        data: s(i, e),
        options: {
          tooltips: {
            model: "single",
            backgroundColor: "#30302f",
            titleFontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            titleFontSize: 11,
            titleFontStyle: "bold",
            titleFontColor: "#fff",
            bodyFontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            bodyFontSize: 11,
            bodyFontStyle: "bold",
            bodyFontColor: "#3ac4f2",
            footerFontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            footerFontSize: 11,
            footerFontStyle: "bold",
            footerFontColor: "#ff000",
            caretSize: 6,
            xPadding: 10,
            yPadding: 10,
            callbacks: {
              title: function(t, e) {
                for (var i = "", n = 0; n < e.labels[t[0].index].length; n++) i += e.labels[t[0].index][n];
                return i
              },
              label: function(t) {
                return t.yLabel
              }
            }
          },
          scales: {
            ticks: {
              beginAtZero: !0
            },
            yAxes: [{
              ticks: {
                beginAtZero: !0,
                suggestedMax: 60,
                fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                fontSize: 15,
                fontStyle: "bold",
                offsetGridLines: !0,
                fontColor: "#d1d2d3"
              }
            }],
            xAxes: [{
              ticks: {
                beginAtZero: !0,
                fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                fontSize: 14,
                fontStyle: "bold",
                offsetGridLines: !0,
                fontColor: "#333333"
              }
            }]
          },
          hover: {
            mode: "single"
          },
          elements: {
            rectangle: {
              borderSkipped: "left"
            }
          },
          responsive: !0,
          legend: {
            display: !1
          },
          legendCallback: function(t) {
            for (var e = "", n = t.data.datasets, a = 0; a < n.length; a++) {
              var o = n[a].legend,
                r = n[a].pointBorderColor;
              e += "<li>", e += '<i class="icon-round" style="color:' + r + ';"></i>', e += o, e += "</li>"
            }
            var s = document.createElement("ul");
            s.className = "labels", s.innerHTML = e;
            var l = i.parentNode;
            l.insertBefore(s, i)
          }
        }
      });
    n.generateLegend()
  }, t.charts.initLineGraph = function(t, e) {
    var i = document.getElementById(t),
      n = new Chart(i, {
        type: "line",
        data: s(i, e, {
          fill: !1,
          borderCapStyle: "butt"
        }),
        options: {
          tooltips: {
            model: "single",
            backgroundColor: "#30302f",
            titleFontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            titleFontSize: 11,
            titleFontStyle: "bold",
            titleFontColor: "#fff",
            bodyFontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            bodyFontSize: 11,
            bodyFontStyle: "bold",
            bodyFontColor: "#3ac4f2",
            footerFontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            footerFontSize: 11,
            footerFontStyle: "bold",
            footerFontColor: "#ff000",
            caretSize: 6,
            xPadding: 10,
            yPadding: 10,
            callbacks: {
              title: function(t, e) {
                for (var i = "", n = 0; n < e.labels[t[0].index].length; n++) i += e.labels[t[0].index][n];
                return i
              },
              label: function(t) {
                return t.yLabel
              }
            }
          },
          scales: {
            ticks: {
              beginAtZero: !0
            },
            yAxes: [{
              ticks: {
                beginAtZero: !0,
                suggestedMax: 60,
                fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                fontSize: 15,
                fontStyle: "bold",
                offsetGridLines: !0,
                fontColor: "#d1d2d3"
              }
            }],
            xAxes: [{
              ticks: {
                fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                fontSize: 14,
                fontStyle: "bold",
                offsetGridLines: !0,
                fontColor: "#333333"
              }
            }]
          },
          hover: {
            mode: "single"
          },
          elements: {
            rectangle: {
              borderSkipped: "left"
            }
          },
          responsive: !0,
          legend: {
            display: !1
          },
          legendCallback: function(t) {
            for (var e = "", n = t.data.datasets, a = 0; a < n.length; a++) {
              var o = n[a].legend,
                r = n[a].pointBorderColor;
              e += "<li>", e += '<i class="icon-round" style="color:' + r + ';"></i>', e += o, e += "</li>"
            }
            var s = document.createElement("ul");
            s.className = "labels", s.innerHTML = e;
            var l = i.parentNode;
            l.insertBefore(s, i)
          }
        }
      });
    n.generateLegend()
  }, t.charts.initDotlessLineGraph = function(t, e) {
    var i = document.getElementById(t),
      n = new Chart(i, {
        type: "line",
        data: s(i, e, {
          fill: !1,
          pointRadius: 0,
          borderCapStyle: "butt"
        }),
        options: {
          tooltips: {
            model: "single",
            backgroundColor: "#30302f",
            titleFontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            titleFontSize: 11,
            titleFontStyle: "bold",
            titleFontColor: "#fff",
            bodyFontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            bodyFontSize: 11,
            bodyFontStyle: "bold",
            bodyFontColor: "#3ac4f2",
            footerFontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            footerFontSize: 11,
            footerFontStyle: "bold",
            footerFontColor: "#ff000",
            caretSize: 6,
            xPadding: 10,
            yPadding: 10,
            callbacks: {
              title: function(t, e) {
                for (var i = "", n = 0; n < e.labels[t[0].index].length; n++) i += e.labels[t[0].index][n];
                return i
              },
              label: function(t) {
                return t.yLabel
              }
            }
          },
          scales: {
            ticks: {
              beginAtZero: !0
            },
            yAxes: [{
              ticks: {
                beginAtZero: !0,
                suggestedMax: 60,
                fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                fontSize: 15,
                fontStyle: "bold",
                offsetGridLines: !0,
                fontColor: "#d1d2d3"
              }
            }],
            xAxes: [{
              ticks: {
                fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                fontSize: 14,
                fontStyle: "bold",
                offsetGridLines: !0,
                fontColor: "#333333"
              }
            }]
          },
          hover: {
            mode: "single"
          },
          elements: {
            rectangle: {
              borderSkipped: "left"
            }
          },
          responsive: !0,
          legend: {
            display: !1
          },
          legendCallback: function(t) {
            for (var e = "", n = t.data.datasets, a = 0; a < n.length; a++) {
              var o = n[a].legend,
                r = n[a].pointBorderColor;
              e += "<li>", e += '<i class="icon-round" style="color:' + r + ';"></i>', e += o, e += "</li>"
            }
            var s = document.createElement("ul");
            s.className = "labels", s.innerHTML = e;
            var l = i.parentNode;
            l.insertBefore(s, i)
          }
        }
      });
    n.generateLegend()
  }, t.charts.initBarometerGraph = function(t, e) {
    var i = document.getElementById(t),
      n = new Chart(i, {
        type: "line",
        data: s(i, e, {
          lineTension: 0,
          pointRadius: 2,
          borderCapStyle: "butt"
        }),
        options: {
          tooltips: {
            model: "single,",
            backgroundColor: "#30302f",
            titleFontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            titleFontSize: 11,
            titleFontStyle: "bold",
            titleFontColor: "#fff",
            bodyFontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            bodyFontSize: 11,
            bodyFontStyle: "bold",
            bodyFontColor: "#3ac4f2",
            footerFontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            footerFontSize: 11,
            footerFontStyle: "bold",
            footerFontColor: "#ff000",
            caretSize: 6,
            xPadding: 10,
            yPadding: 10,
            callbacks: {
              title: function(t, e) {
                for (var i = "", n = 0; n < e.labels[t[0].index].length; n++) i += e.labels[t[0].index][n];
                return i
              },
              label: function(t) {
                return t.yLabel
              }
            }
          },
          scales: {
            ticks: {
              beginAtZero: !0
            },
            yAxes: [{
              ticks: {
                beginAtZero: !0,
                suggestedMax: 6e4,
                fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                fontSize: 15,
                fontStyle: "bold",
                offsetGridLines: !0,
                fontColor: "#d1d2d3"
              }
            }],
            xAxes: [{
              ticks: {
                fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                fontSize: 14,
                fontStyle: "bold",
                offsetGridLines: !0,
                fontColor: "#333333"
              }
            }]
          },
          hover: {
            mode: "single,"
          },
          elements: {
            rectangle: {
              borderSkipped: "left"
            }
          },
          responsive: !0,
          legend: {
            display: !1
          },
          legendCallback: function(t) {
            for (var e = "", n = t.data.datasets, a = 0; a < n.length; a++) {
              var o = n[a].legend,
                r = n[a].borderColor;
              e += "<li>", e += '<i class="icon-round" style="color:' + r + ';"></i>', e += o, e += "</li>"
            }
            var s = document.createElement("ul");
            s.className = "labels", s.innerHTML = e;
            var l = i.parentNode;
            l.insertBefore(s, i);
          }
        }
      });
    n.generateLegend()
  }, t.charts.initPieGraph = function(t, e) {
    var n = document.getElementById(t),
      a = new Chart(n, {
        type: "doughnut",
        data: l(e, {
          datasets: [{
            data: [25, 10, 15, 17, 7, 12, 13],
            backgroundColor: ["rgba(58, 196, 242, 1)", "rgba(255, 188, 66, 1)", "rgba(141, 211, 132, 1)", "rgba(160, 112, 252, 1)", "rgba(253, 101, 101, 1)", "rgba(77, 175, 124, 1)", "rgba(78, 129, 237, 1)"],
            hoverBackgroundColor: ["rgba(58, 196, 242, 1)", "rgba(255, 188, 66, 1)", "rgba(141, 211, 132, 1)", "rgba(160, 112, 252, 1)", "rgba(253, 101, 101, 1)", "rgba(77, 175, 124, 1)", "rgba(78, 129, 237, 1)"]
          }],
          legend: ["Legenda 1", "Legenda 2", "Legenda 3", "Legenda 4", "Legenda 5", "Legenda 6", "Legenda 7"]
        }),
        options: {
          tooltips: {
            model: "single",
            backgroundColor: "#30302f",
            titleFontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            titleFontSize: 11,
            titleFontStyle: "bold",
            titleFontColor: "#fff",
            bodyFontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            bodyFontSize: 11,
            bodyFontStyle: "bold",
            bodyFontColor: "#3ac4f2",
            footerFontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            footerFontSize: 11,
            footerFontStyle: "bold",
            footerFontColor: "#ff000",
            caretSize: 6,
            xPadding: 10,
            yPadding: 10,
            callbacks: {
              title: function(t, e) {
                return e.labels[t[0].index]
              },
              label: function(t, e) {
                return e.datasets[t.datasetIndex].data[t.index]
              }
            }
          },
          scales: {},
          hover: {
            mode: "single"
          },
          elements: {
            rectangle: {
              borderSkipped: "left"
            }
          },
          responsive: !0,
          legend: {
            display: !1
          },
          legendCallback: function(t) {
            for (var e = "", a = t.data, o = 0, r = 0, s = 0; s < a.labels.length; s++) {
              var l = a.datasets[0].data[s];
              o += l
            }
            for (var s = 0; s < a.labels.length; s++) {
              var d = a.labels[s],
                h = a.datasets[0].backgroundColor[s],
                l = a.datasets[0].data[s];
              r = 100 * l / o, percent = Math.round(100 * r) / 100, e += "<dt>", e += '<i class="icon-round" style="color:' + h + ';"></i>', e += d, e += "</dt>", e += "<dd>", e += "<span>" + l + " / " + percent + "%</span>", e += "</dd>"
            }
            var c = document.createElement("dl");
            c.className = "labels", c.innerHTML = e;
            for (var u = n.parentNode.parentNode, p = 0; p < u.childNodes.length; p++) {
              var f = u.childNodes[p].className;
              if (f != i && -1 != f.search("pie-labels-container")) {
                u.childNodes[p].appendChild(c);
                break
              }
            }
          }
        }
      });
    a.generateLegend()
  }
}(window.PFView = window.PFView || {}, jQuery),
function(t, e, i) {
  t.util = t.util || {}, t.util.DEBUG = !1;
  var n = i;
  t.util.confirmUnload = function(e) {
    if ("string" != typeof e) return console.error("confirmationMessage is not a string: " + e), null;
    var i = function(t) {
      return t.returnValue = e, e
    };
    return window.addEventListener("beforeunload", i), t.util.DEBUG && console.log("[confirm-unload] ACTIVE with message: " + e), n = i, i
  }, t.util.removeConfirmUnload = function() {
    return n === i ? void console.error("confirmUnloadFn is not defined: ") : (window.removeEventListener("beforeunload", n), void(t.util.DEBUG && console.log("[confirm-unload] INACTIVE")))
  };
//DESATIVADO var a = saURL + "/unauthed/keep-alive",
    o = 6e5,
    r = function(n) {
      var o;
      if (n !== i && "string" == typeof n) o = n;
      else {
        var r, s = window.location.pathname;
        0 === s.indexOf("/") && (s = s.substr(1)), s.lastIndexOf("/") === s.length - 1 && (s = s.substr(0, s.length - 1));
        var l = s.split("/");
        r = l.length > 1 ? l[0] + "/" : "", o = "//" + window.location.host + "/" + r + "pfView/keep-alive"
      }
      e.ajax(o, {
        global: !1
      }).done(function() {
        t.util.DEBUG && console.log("[keep-alive] Server pinged at " + o)
      }).fail(function(t, e, i) {
        console.error("[keep-alive] Server ping failed at " + o + ": " + e + ": " + i)
      }), e.ajax(a, {
        global: !1,
        xhrFields: {
          withCredentials: !0
        }
      }).done(function() {
        t.util.DEBUG && console.log("[keep-alive] SA pinged at " + a)
      }).fail(function(t, e, i) {
        console.error("[keep-alive] SA ping failed at " + a + ": " + e + ": " + i)
      })
    },
    s = -1;
  t.util.keepAlive = function(e, i) {
    e || "true" == e ? (t.util.DEBUG && console.log("[keep-alive] ACTIVE with interval " + o / 1e3 + "s"), s = window.setInterval(r, o, i)) : (t.util.DEBUG && console.log("[keep-alive] INACTIVE"), window.clearInterval(s))
  }
}(window.PFView = window.PFView || {}, jQuery), jQuery(document).ready(function() {
    function t(t) {
      t = t || window.event, !e && (t && "logout" === t.key && "processLogout" === t.newValue || "processLogout" === localStorage.getItem("logout")) && (pathArray = location.href.split("/"), host = pathArray[2], -1 != host.indexOf("localhost") ? window.location.href = "//portalfin.stinternetdev.ritta.local" : -1 != host.indexOf("dev") ? window.location.href = "//portalfin.stinternetdev.ritta.local" : -1 != host.indexOf("qua") ? window.location.href = "//portalfin.stinternetqua.ritta.local/" : window.location.href = "//www.portaldasfinancas.gov.pt/")
    }
    localStorage.removeItem("logout");
    var e = !1;
    jQuery("#logout-link").click(function() {
      e = !0, localStorage.setItem("logout", "processLogout")
    }), window.addEventListener ? window.addEventListener("storage", t, !1) : window.attachEvent("onstorage", t)
  }),
  function(t, e, i) {
    var n, a, o, r, s = 0,
      l = 5,
      d = function() {
        for (var t = document.createDocumentFragment(), e = 0; l > e; e++) {
          var i = document.createElement("li");
          i.id = "liCliente_" + e;
          var n = document.createElement("div");
          n.className = "item", i.appendChild(n);
          var a = document.createElement("div");
          a.className = " item-left", n.appendChild(a), a.appendChild(representadosList.createClienteAvatar(e)), a.appendChild(representadosList.createClienteInfo(e)), t.appendChild(i)
        }
        var o = document.createElement("li"),
          s = document.createElement("div");
        o.appendChild(s);
        var d = document.createElement("div");
        d.className = " item-left", s.appendChild(d);
        var h = document.createElement("p");
        return h.id = "noResult", d.appendChild(h), t.appendChild(o), r = document.createElement("div"), r.appendChild(t), r
      },
      h = function() {
        var t = "<li class='col-xs-12 search'>                <form onsubmit='return false;' class='form-inline'>                    <input class='form-control pull-left' placeholder='Encontrar...' type='text' id='clientesSearchInput'>                </form>            </li>";
        return t
      },
      c = function() {
        var t = "<li  class='see-all'>                <div class='item'>                    <div class='item-right'>                        <a onclick=\"representadosList.showAllClients()\">Ver todos</a>                    </div>                </div>            </li>";
        return t
      },
      u = function(t) {
        n.length > l ? (e(t).append(h()), e(t).append(d()), e(t).append(c())) : e(t).append(d()), f()
      },
      p = function(t) {
        var e = a = n.slice(0);
        s = 0;
        var r = t === i ? o.value : t;
        if ("" === r) return void f();
        for (var l = new RegExp(r, "i"), d = e.length - 1; d >= 0; d--) {
          var h = e[d].nome;
          l.test(h) || e.splice(d, 1)
        }
        f()
      },
      f = function() {
        var t = 0,
          e = !0,
          o = document.getElementById("liCliente_0"),
          r = document.getElementById("repAvatar_0"),
          d = document.getElementById("repName_0"),
          h = document.getElementById("repNIF_0"),
          c = document.getElementById("repRole_0");
        n[0] != i && ("1" === n[0].actLikeCode ? (r.src = n[0].avatarUrl, o.setAttribute("onclick", "representadosList.actLike(" + n[0].nif + "," + n[0].actLikeCode + ")"), d.innerHTML = n[0].nome, h.innerHTML = n[0].nif, c.innerHTML = "Voltar a ser eu", r.parentElement.parentElement.className = "item", t++) : (r.src = "", o.setAttribute("onclick", ""), d.innerHTML = "", h.innerHTML = "", c.innerHTML = "", r.parentElement.parentElement.className = "", e = !1)), a.some(function(i, n) {
          if (s > n || "1" === i.actLikeCode) return e = !1, !1;
          var a = n - s;
          e && a++;
          var o = document.getElementById("liCliente_" + a),
            r = document.getElementById("repAvatar_" + a),
            d = document.getElementById("repName_" + a),
            h = document.getElementById("repNIF_" + a),
            c = document.getElementById("repRole_" + a);
          return l > a && (r.src = i.avatarUrl, o.setAttribute("onclick", "representadosList.actLike(" + i.nif + "," + i.actLikeCode + ")"), d.innerHTML = i.nome, h.innerHTML = i.nif, c.innerHTML = "Atuar como TOC", r.parentElement.parentElement.className = "item", t++), n > s + l - 2
        });
        var u = document.getElementById("noResult");
        0 === a.length ? (u.innerHTML = "Nenhum cliente encontrado.", u.parentElement.parentElement.className = "item") : (u.innerHTML = "", u.parentElement.parentElement.className = ""), g(t)
      },
      g = function(t) {
        for (var e = t; l > e; e++) {
          var i = document.getElementById("repAvatar_" + e),
            n = document.getElementById("repName_" + e),
            a = document.getElementById("repNIF_" + e),
            o = document.getElementById("repRole_" + e);
          i.src = "", n.innerHTML = "", a.innerHTML = "", o.innerHTML = "", i.parentElement.parentElement.className = ""
        }
      };
    return representadosList.createClienteAvatar = function(t) {
      var e = document.createElement("img");
      e.id = "repAvatar_" + t, e.src = "", e.alt = "";
      var i = document.createDocumentFragment();
      return i.appendChild(e), i
    }, representadosList.createClienteInfo = function(t) {
      var e = document.createElement("p");
      e.id = "repName_" + t;
      var i = document.createElement("p");
      i.id = "repNIF_" + t;
      var n = document.createElement("p");
      n.id = "repRole_" + t;
      var a = document.createElement("div");
      a.className = " item-info", a.appendChild(e), a.appendChild(i), a.appendChild(n);
      var o = document.createDocumentFragment();
      return o.appendChild(a), o
    }, t.actLike = function(t, i) {
      e("#actLikeNif").val(t), e("#actLikeCode").val(i), e("#actLikeForm").submit()
    }, t.showAllClients = function() {
      e("#showAllClientsForm").submit()
    }, representadosList.init = function(t, l) {
      return n = l, a = l, r = i, s = 0, u(t), o = document.getElementById("clientesSearchInput"), e(o).on("keyup input", function() {
        p()
      }), this
    }, representadosList
  }(window.representadosList = window.representadosList || {}, jQuery);
//# sourceMappingURL=../maps/js/pf-bundle.js.map
