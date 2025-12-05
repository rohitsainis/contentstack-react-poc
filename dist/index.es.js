import ke, { createContext as Pe, useContext as je, useState as ue, useEffect as Oe } from "react";
function Se(ee) {
  return ee && ee.__esModule && Object.prototype.hasOwnProperty.call(ee, "default") ? ee.default : ee;
}
var ye = { exports: {} }, fe = {};
var me;
function qe() {
  if (me) return fe;
  me = 1;
  var ee = Symbol.for("react.transitional.element"), ie = Symbol.for("react.fragment");
  function te(re, F, w) {
    var I = null;
    if (w !== void 0 && (I = "" + w), F.key !== void 0 && (I = "" + F.key), "key" in F) {
      w = {};
      for (var C in F)
        C !== "key" && (w[C] = F[C]);
    } else w = F;
    return F = w.ref, {
      $$typeof: ee,
      type: re,
      key: I,
      ref: F !== void 0 ? F : null,
      props: w
    };
  }
  return fe.Fragment = ie, fe.jsx = te, fe.jsxs = te, fe;
}
var de = {};
var _e;
function Te() {
  return _e || (_e = 1, process.env.NODE_ENV !== "production" && (function() {
    function ee(g) {
      if (g == null) return null;
      if (typeof g == "function")
        return g.$$typeof === _ ? null : g.displayName || g.name || null;
      if (typeof g == "string") return g;
      switch (g) {
        case E:
          return "Fragment";
        case B:
          return "Profiler";
        case T:
          return "StrictMode";
        case n:
          return "Suspense";
        case p:
          return "SuspenseList";
        case D:
          return "Activity";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case i:
            return "Portal";
          case A:
            return g.displayName || "Context";
          case $:
            return (g._context.displayName || "Context") + ".Consumer";
          case r:
            var M = g.render;
            return g = g.displayName, g || (g = M.displayName || M.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case O:
            return M = g.displayName || null, M !== null ? M : ee(g.type) || "Memo";
          case c:
            M = g._payload, g = g._init;
            try {
              return ee(g(M));
            } catch {
            }
        }
      return null;
    }
    function ie(g) {
      return "" + g;
    }
    function te(g) {
      try {
        ie(g);
        var M = !1;
      } catch {
        M = !0;
      }
      if (M) {
        M = console;
        var G = M.error, W = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return G.call(
          M,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          W
        ), ie(g);
      }
    }
    function re(g) {
      if (g === E) return "<>";
      if (typeof g == "object" && g !== null && g.$$typeof === c)
        return "<...>";
      try {
        var M = ee(g);
        return M ? "<" + M + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function F() {
      var g = f.A;
      return g === null ? null : g.getOwner();
    }
    function w() {
      return Error("react-stack-top-frame");
    }
    function I(g) {
      if (s.call(g, "key")) {
        var M = Object.getOwnPropertyDescriptor(g, "key").get;
        if (M && M.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function C(g, M) {
      function G() {
        H || (H = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          M
        ));
      }
      G.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: G,
        configurable: !0
      });
    }
    function j() {
      var g = ee(this.type);
      return K[g] || (K[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function z(g, M, G, W, X, V) {
      var Q = G.ref;
      return g = {
        $$typeof: a,
        type: g,
        key: M,
        props: G,
        _owner: W
      }, (Q !== void 0 ? Q : null) !== null ? Object.defineProperty(g, "ref", {
        enumerable: !1,
        get: j
      }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(g, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(g, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.defineProperty(g, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: V
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    }
    function N(g, M, G, W, X, V) {
      var Q = M.children;
      if (Q !== void 0)
        if (W)
          if (v(Q)) {
            for (W = 0; W < Q.length; W++)
              m(Q[W]);
            Object.freeze && Object.freeze(Q);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(Q);
      if (s.call(M, "key")) {
        Q = ee(g);
        var e = Object.keys(M).filter(function(u) {
          return u !== "key";
        });
        W = 0 < e.length ? "{key: someKey, " + e.join(": ..., ") + ": ...}" : "{key: someKey}", Y[Q + W] || (e = 0 < e.length ? "{" + e.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          W,
          Q,
          e,
          Q
        ), Y[Q + W] = !0);
      }
      if (Q = null, G !== void 0 && (te(G), Q = "" + G), I(M) && (te(M.key), Q = "" + M.key), "key" in M) {
        G = {};
        for (var o in M)
          o !== "key" && (G[o] = M[o]);
      } else G = M;
      return Q && C(
        G,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), z(
        g,
        Q,
        G,
        F(),
        X,
        V
      );
    }
    function m(g) {
      d(g) ? g._store && (g._store.validated = 1) : typeof g == "object" && g !== null && g.$$typeof === c && (g._payload.status === "fulfilled" ? d(g._payload.value) && g._payload.value._store && (g._payload.value._store.validated = 1) : g._store && (g._store.validated = 1));
    }
    function d(g) {
      return typeof g == "object" && g !== null && g.$$typeof === a;
    }
    var t = ke, a = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), $ = Symbol.for("react.consumer"), A = Symbol.for("react.context"), r = Symbol.for("react.forward_ref"), n = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), c = Symbol.for("react.lazy"), D = Symbol.for("react.activity"), _ = Symbol.for("react.client.reference"), f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, s = Object.prototype.hasOwnProperty, v = Array.isArray, R = console.createTask ? console.createTask : function() {
      return null;
    };
    t = {
      react_stack_bottom_frame: function(g) {
        return g();
      }
    };
    var H, K = {}, U = t.react_stack_bottom_frame.bind(
      t,
      w
    )(), L = R(re(w)), Y = {};
    de.Fragment = E, de.jsx = function(g, M, G) {
      var W = 1e4 > f.recentlyCreatedOwnerStacks++;
      return N(
        g,
        M,
        G,
        !1,
        W ? Error("react-stack-top-frame") : U,
        W ? R(re(g)) : L
      );
    }, de.jsxs = function(g, M, G) {
      var W = 1e4 > f.recentlyCreatedOwnerStacks++;
      return N(
        g,
        M,
        G,
        !0,
        W ? Error("react-stack-top-frame") : U,
        W ? R(re(g)) : L
      );
    };
  })()), de;
}
var ge;
function Ae() {
  return ge || (ge = 1, process.env.NODE_ENV === "production" ? ye.exports = qe() : ye.exports = Te()), ye.exports;
}
var se = Ae(), he = { exports: {} };
var be;
function Re() {
  return be || (be = 1, (function(ee, ie) {
    (function(te, re) {
      ee.exports = re();
    })(self, () => (() => {
      var te = { 42: (F, w, I) => {
        Object.defineProperty(w, "__esModule", { value: !0 }), w.default = void 0;
        var C = (function(m) {
          if (typeof WeakMap == "function")
            var d = /* @__PURE__ */ new WeakMap();
          return (function(t) {
            if (t && t.__esModule) return t;
            var a, i, E = { __proto__: null, default: t };
            if (t === null || j(t) != "object" && typeof t != "function") return E;
            if (a = d) {
              if (a.has(t)) return a.get(t);
              a.set(t, E);
            }
            for (var T in t) T !== "default" && {}.hasOwnProperty.call(t, T) && ((i = (a = Object.defineProperty) && Object.getOwnPropertyDescriptor(t, T)) && (i.get || i.set) ? a(E, T, i) : E[T] = t[T]);
            return E;
          })(m);
        })(I(925));
        function j(m) {
          return j = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(d) {
            return typeof d;
          } : function(d) {
            return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
          }, j(m);
        }
        function z(m, d) {
          for (var t = 0; t < d.length; t++) {
            var a = d[t];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(m, N(a.key), a);
          }
        }
        function N(m) {
          var d = (function(t) {
            if (j(t) != "object" || !t) return t;
            var a = t[Symbol.toPrimitive];
            if (a !== void 0) {
              var i = a.call(t, "string");
              if (j(i) != "object") return i;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
          })(m);
          return j(d) == "symbol" ? d : d + "";
        }
        w.default = (function() {
          return m = function t() {
            return (function(a, i) {
              if (!(a instanceof i)) throw new TypeError("Cannot call a class as a function");
            })(this, t), this._query = {}, this.only = C.transform("only"), this.except = C.transform("except"), this;
          }, d = [{ key: "setCacheProvider", value: function(t) {
            return t && j(t) === "object" && (this.provider = t), this;
          } }, { key: "setCachePolicy", value: function(t) {
            return typeof t == "number" && t >= -1 && t < 4 ? this._query ? this.queryCachePolicy = t : this.cachePolicy = t : this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide the valid policy"), this;
          } }, { key: "includeReference", value: function() {
            for (var t = arguments.length, a = new Array(t), i = 0; i < t; i++) a[i] = arguments[i];
            if (Array.isArray(a) || typeof a == "string") {
              if (arguments.length) for (var E = 0; E < arguments.length; E++) this._query.include = this._query.include || [], this._query.include = this._query.include.concat(arguments[E]);
              return this;
            }
            this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Argument should be a String or an Array.");
          } }, { key: "language", value: function(t) {
            if (t && typeof t == "string") return this._query.locale = t, this;
            this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Argument should be a String.");
          } }, { key: "addQuery", value: function(t, a) {
            if (t && a && typeof t == "string") return this._query[t] = a, this;
            this.fetchOptions.debug && this.fetchOptions.logHandler("error", "First argument should be a String.");
          } }, { key: "includeEmbeddedItems", value: function() {
            return this._query.include_embedded_items = ["BASE"], this;
          } }, { key: "includeSchema", value: function() {
            return this._query.include_schema = !0, this;
          } }, { key: "includeReferenceContentTypeUID", value: function() {
            return this._query.include_reference_content_type_uid = !0, this;
          } }, { key: "includeFallback", value: function() {
            return this._query.include_fallback = !0, this;
          } }, { key: "includeBranch", value: function() {
            return this._query.include_branch = !0, this;
          } }, { key: "includeMetadata", value: function() {
            return this._query.include_metadata = !0, this;
          } }, { key: "includeContentType", value: function() {
            return this._query.include_content_type = !0, this;
          } }, { key: "includeOwner", value: function() {
            return console.warn("The includeOwner function is deprecated."), this._query.include_owner = !0, this;
          } }, { key: "toJSON", value: function() {
            return this.tojson = !0, this;
          } }, { key: "addParam", value: function(t, a) {
            if (t && a && typeof t == "string" && typeof a == "string") return this._query[t] = a, this;
            this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid parameters.");
          } }, { key: "variants", value: function(t) {
            return Array.isArray(t) && t.length > 0 ? this.headers["x-cs-variant-uid"] = t.join(",") : this.headers["x-cs-variant-uid"] = t, this;
          } }, { key: "fetch", value: function(t) {
            var a = this.config.host + ":" + this.config.port;
            if (this.live_preview && this.live_preview.enable === !0 && this.live_preview.live_preview && this.live_preview.live_preview !== "init" && (a = this.live_preview.host), this.entry_uid) {
              this.requestParams = { method: "POST", headers: C.mergeDeep({}, this.headers), url: this.config.protocol + "://" + a + "/" + this.config.version + this.config.urls.content_types + this.content_type_uid + this.config.urls.entries + this.entry_uid, body: { _method: "GET", query: this._query } };
              var i = C.mergeDeep(this.fetchOptions, t);
              return C.sendRequest(C.mergeDeep({}, this), i);
            }
            this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide an entry uid. e.g. .Entry('asset_uid')");
          } }], d && z(m.prototype, d), Object.defineProperty(m, "prototype", { writable: !1 }), m;
          var m, d;
        })();
      }, 54: (F, w, I) => {
        var C;
        Object.defineProperty(w, "__esModule", { value: !0 }), w.default = void 0, ((C = I(154)) && C.__esModule ? C : { default: C }).default.polyfill(), w.default = fetch;
      }, 94: (F, w, I) => {
        Object.defineProperty(w, "__esModule", { value: !0 }), w.get = function(N) {
          var m = j.default.getItem(N);
          try {
            m = JSON.parse(m);
          } catch {
            return m;
          }
          return m || null;
        }, w.getKeys = function() {
          return j.default ? Object.keys(j.default) : [];
        }, w.getStorage = function() {
          return j.default || null;
        }, w.set = function(N, m) {
          try {
            z(m) === "object" ? j.default.setItem(N, JSON.stringify(m)) : j.default.setItem(N, m);
          } catch {
          }
        };
        var C, j = (C = I(514)) && C.__esModule ? C : { default: C };
        function z(N) {
          return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
            return typeof m;
          } : function(m) {
            return m && typeof Symbol == "function" && m.constructor === Symbol && m !== Symbol.prototype ? "symbol" : typeof m;
          }, z(N);
        }
      }, 154: (F, w, I) => {
        var C, j, z, N = I(444);
        function m(d) {
          return m = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
            return typeof t;
          } : function(t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          }, m(d);
        }
        z = function() {
          function d(l) {
            return typeof l == "function";
          }
          var t = Array.isArray ? Array.isArray : function(l) {
            return Object.prototype.toString.call(l) === "[object Array]";
          }, a = 0, i = void 0, E = void 0, T = function(l, y) {
            O[a] = l, O[a + 1] = y, (a += 2) === 2 && (E ? E(c) : v());
          }, B = typeof window < "u" ? window : void 0, $ = B || {}, A = $.MutationObserver || $.WebKitMutationObserver, r = typeof self > "u" && typeof process < "u" && {}.toString.call(process) === "[object process]", n = typeof Uint8ClampedArray < "u" && typeof importScripts < "u" && typeof MessageChannel < "u";
          function p() {
            var l = setTimeout;
            return function() {
              return l(c, 1);
            };
          }
          var O = new Array(1e3);
          function c() {
            for (var l = 0; l < a; l += 2) (0, O[l])(O[l + 1]), O[l] = void 0, O[l + 1] = void 0;
            a = 0;
          }
          var D, _, f, s, v = void 0;
          function R(l, y) {
            var q = this, h = new this.constructor(U);
            h[K] === void 0 && b(h);
            var k = q._state;
            if (k) {
              var x = arguments[k - 1];
              T(function() {
                return o(k, h, x, q._result);
              });
            } else Q(q, h, l, y);
            return h;
          }
          function H(l) {
            if (l && m(l) === "object" && l.constructor === this) return l;
            var y = new this(U);
            return G(y, l), y;
          }
          r ? v = function() {
            return process.nextTick(c);
          } : A ? (_ = 0, f = new A(c), s = document.createTextNode(""), f.observe(s, { characterData: !0 }), v = function() {
            s.data = _ = ++_ % 2;
          }) : n ? ((D = new MessageChannel()).port1.onmessage = c, v = function() {
            return D.port2.postMessage(0);
          }) : v = B === void 0 ? (function() {
            try {
              var l = Function("return this")().require("vertx");
              return (i = l.runOnLoop || l.runOnContext) !== void 0 ? function() {
                i(c);
              } : p();
            } catch {
              return p();
            }
          })() : p();
          var K = Math.random().toString(36).substring(2);
          function U() {
          }
          var L = void 0, Y = 1, g = 2;
          function M(l, y, q) {
            y.constructor === l.constructor && q === R && y.constructor.resolve === H ? (function(h, k) {
              k._state === Y ? X(h, k._result) : k._state === g ? V(h, k._result) : Q(k, void 0, function(x) {
                return G(h, x);
              }, function(x) {
                return V(h, x);
              });
            })(l, y) : q === void 0 ? X(l, y) : d(q) ? (function(h, k, x) {
              T(function(J) {
                var Z = !1, ne = (function(oe, ce) {
                  try {
                    oe.call(ce, function(ae) {
                      Z || (Z = !0, k !== ae ? G(J, ae) : X(J, ae));
                    }, function(ae) {
                      Z || (Z = !0, V(J, ae));
                    });
                  } catch (ae) {
                    return ae;
                  }
                })(x, k, 0, 0, J._label);
                !Z && ne && (Z = !0, V(J, ne));
              }, h);
            })(l, y, q) : X(l, y);
          }
          function G(l, y) {
            if (l === y) V(l, new TypeError("You cannot resolve a promise with itself"));
            else if (k = m(h = y), h === null || k !== "object" && k !== "function") X(l, y);
            else {
              var q = void 0;
              try {
                q = y.then;
              } catch (x) {
                return void V(l, x);
              }
              M(l, y, q);
            }
            var h, k;
          }
          function W(l) {
            l._onerror && l._onerror(l._result), e(l);
          }
          function X(l, y) {
            l._state === L && (l._result = y, l._state = Y, l._subscribers.length !== 0 && T(e, l));
          }
          function V(l, y) {
            l._state === L && (l._state = g, l._result = y, T(W, l));
          }
          function Q(l, y, q, h) {
            var k = l._subscribers, x = k.length;
            l._onerror = null, k[x] = y, k[x + Y] = q, k[x + g] = h, x === 0 && l._state && T(e, l);
          }
          function e(l) {
            var y = l._subscribers, q = l._state;
            if (y.length !== 0) {
              for (var h = void 0, k = void 0, x = l._result, J = 0; J < y.length; J += 3) h = y[J], k = y[J + q], h ? o(q, h, k, x) : k(x);
              l._subscribers.length = 0;
            }
          }
          function o(l, y, q, h) {
            var k = d(q), x = void 0, J = void 0, Z = !0;
            if (k) {
              try {
                x = q(h);
              } catch (ne) {
                Z = !1, J = ne;
              }
              if (y === x) return void V(y, new TypeError("A promises callback cannot return that same promise."));
            } else x = h;
            y._state !== L || (k && Z ? G(y, x) : Z === !1 ? V(y, J) : l === Y ? X(y, x) : l === g && V(y, x));
          }
          var u = 0;
          function b(l) {
            l[K] = u++, l._state = void 0, l._result = void 0, l._subscribers = [];
          }
          var S = (function() {
            function l(y, q) {
              this._instanceConstructor = y, this.promise = new y(U), this.promise[K] || b(this.promise), t(q) ? (this.length = q.length, this._remaining = q.length, this._result = new Array(this.length), this.length === 0 ? X(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(q), this._remaining === 0 && X(this.promise, this._result))) : V(this.promise, new Error("Array Methods must be provided an Array"));
            }
            return l.prototype._enumerate = function(y) {
              for (var q = 0; this._state === L && q < y.length; q++) this._eachEntry(y[q], q);
            }, l.prototype._eachEntry = function(y, q) {
              var h = this._instanceConstructor, k = h.resolve;
              if (k === H) {
                var x = void 0, J = void 0, Z = !1;
                try {
                  x = y.then;
                } catch (oe) {
                  Z = !0, J = oe;
                }
                if (x === R && y._state !== L) this._settledAt(y._state, q, y._result);
                else if (typeof x != "function") this._remaining--, this._result[q] = y;
                else if (h === P) {
                  var ne = new h(U);
                  Z ? V(ne, J) : M(ne, y, x), this._willSettleAt(ne, q);
                } else this._willSettleAt(new h(function(oe) {
                  return oe(y);
                }), q);
              } else this._willSettleAt(k(y), q);
            }, l.prototype._settledAt = function(y, q, h) {
              var k = this.promise;
              k._state === L && (this._remaining--, y === g ? V(k, h) : this._result[q] = h), this._remaining === 0 && X(k, this._result);
            }, l.prototype._willSettleAt = function(y, q) {
              var h = this;
              Q(y, void 0, function(k) {
                return h._settledAt(Y, q, k);
              }, function(k) {
                return h._settledAt(g, q, k);
              });
            }, l;
          })(), P = (function() {
            function l(y) {
              this[K] = u++, this._result = this._state = void 0, this._subscribers = [], U !== y && (typeof y != "function" && (function() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
              })(), this instanceof l ? (function(q, h) {
                try {
                  h(function(k) {
                    G(q, k);
                  }, function(k) {
                    V(q, k);
                  });
                } catch (k) {
                  V(q, k);
                }
              })(this, y) : (function() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
              })());
            }
            return l.prototype.catch = function(y) {
              return this.then(null, y);
            }, l.prototype.finally = function(y) {
              var q = this, h = q.constructor;
              return d(y) ? q.then(function(k) {
                return h.resolve(y()).then(function() {
                  return k;
                });
              }, function(k) {
                return h.resolve(y()).then(function() {
                  throw k;
                });
              }) : q.then(y, y);
            }, l;
          })();
          return P.prototype.then = R, P.all = function(l) {
            return new S(this, l).promise;
          }, P.race = function(l) {
            var y = this;
            return t(l) ? new y(function(q, h) {
              for (var k = l.length, x = 0; x < k; x++) y.resolve(l[x]).then(q, h);
            }) : new y(function(q, h) {
              return h(new TypeError("You must pass an array to race."));
            });
          }, P.resolve = H, P.reject = function(l) {
            var y = new this(U);
            return V(y, l), y;
          }, P._setScheduler = function(l) {
            E = l;
          }, P._setAsap = function(l) {
            T = l;
          }, P._asap = T, P.polyfill = function() {
            var l = void 0;
            if (N !== void 0) l = N;
            else if (typeof self < "u") l = self;
            else try {
              l = Function("return this")();
            } catch {
              throw new Error("polyfill failed because global object is unavailable in this environment");
            }
            var y = l.Promise;
            if (y) {
              var q = null;
              try {
                q = Object.prototype.toString.call(y.resolve());
              } catch {
              }
              if (q === "[object Promise]" && !y.cast) return;
            }
            l.Promise = P;
          }, P.Promise = P, P;
        }, m(w) === "object" ? F.exports = z() : (j = typeof (C = z) == "function" ? C.call(w, I, w, F) : C) === void 0 || (F.exports = j);
      }, 185: (F, w, I) => {
        Object.defineProperty(w, "__esModule", { value: !0 }), w.default = function(t, a) {
          var i = t.requestParams;
          return new Promise(function(E, T) {
            var B, $ = new URLSearchParams(), A = function(r, n) {
              if (N(r) === "object" && r.length !== void 0) for (var p = 0, O = r.length; p < O; p++) $.append(n + "[]", r[p]);
              else for (var c in r) {
                var D = n ? n + "[" + c + "]" : c, _ = r[c];
                _ !== null && N(_) === "object" && c !== "query" ? A(_, D) : $.append(D, c !== "query" ? _ : JSON.stringify(_));
              }
              return $.toString();
            };
            return i.headers["Content-Type"] = "application/json; charset=UTF-8", i.headers["X-User-Agent"] = "contentstack-delivery-javascript-web/" + m, i.body && N(i.body) === "object" && (delete i.body._method, N(i.body.query) === "object" && Object.keys(i.body.query).length === 0 && delete i.body.query, B = A(i.body)), d(t, B, a, E, T, a.retryDelay, a.retryLimit);
          });
        };
        var C, j = (function(t) {
          if (typeof WeakMap == "function")
            var a = /* @__PURE__ */ new WeakMap();
          return (function(i) {
            if (i && i.__esModule) return i;
            var E, T, B = { __proto__: null, default: i };
            if (i === null || N(i) != "object" && typeof i != "function") return B;
            if (E = a) {
              if (E.has(i)) return E.get(i);
              E.set(i, B);
            }
            for (var $ in i) $ !== "default" && {}.hasOwnProperty.call(i, $) && ((T = (E = Object.defineProperty) && Object.getOwnPropertyDescriptor(i, $)) && (T.get || T.set) ? E(B, $, T) : B[$] = i[$]);
            return B;
          })(t);
        })(I(925)), z = (C = I(54)) && C.__esModule ? C : { default: C };
        function N(t) {
          return N = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
            return typeof a;
          } : function(a) {
            return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
          }, N(t);
        }
        var m = "3.26.2";
        function d(t, a, i, E, T) {
          var B = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 300, $ = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 5, A = t.requestParams, r = A.url + "?" + a, n = A.headers, p = j.mergeDeep({ method: "GET", headers: n, timeout: 3e4 }, i);
          i.debug && i.logHandler("info", { url: r, option: p });
          var O = { url: r, option: p }, c = t.plugins;
          if (c && c !== void 0) for (var D = 0; D < c.length; D++) typeof c[D].onRequest == "function" && (O = c[D].onRequest(t, O));
          (0, z.default)(O.url, O.option).then(function(_) {
            i.debug && i.logHandler("info", _);
            var f = _.json();
            if (_.ok && _.status === 200) f.then(function(R) {
              for (var H = 0; H < c.length && typeof c[H].onResponse == "function"; H++) R = c[H].onResponse(t, O, _, R);
              E(R);
            });
            else {
              var s = _.status, v = _.statusText;
              f.then(function(R) {
                var H = { error_message: R.error_message, error_code: R.error_code, errors: R.errors, status: s, statusText: v };
                i.retryCondition && i.retryCondition(_) ? (function(K) {
                  if ($ === 0) i.debug && i.logHandler("error", K), T(K);
                  else {
                    var U = B;
                    $ -= 1;
                    var L = i.retryLimit - $;
                    i.retryDelayOptions && (i.retryDelayOptions.base ? U = i.retryDelayOptions.base * L : i.retryDelayOptions.customBackoff && (U = i.retryDelayOptions.customBackoff(L, K))), (function(Y) {
                      return new Promise(function(g) {
                        setTimeout(g, Y);
                      });
                    })(U).then(function() {
                      return d(t, a, i, E, T, B, $);
                    }).catch(function() {
                      return d(t, a, i, E, T, B, $);
                    });
                  }
                })(H) : (i.debug && i.logHandler("error", H), T(H));
              }).catch(function() {
                i.debug && i.logHandler("error", { status: s, statusText: v }), T({ status: s, statusText: v });
              });
            }
          }).catch(function(_) {
            i.debug && i.logHandler("error", _), T(_);
          });
        }
      }, 209: (F, w, I) => {
        Object.defineProperty(w, "__esModule", { value: !0 }), w.default = void 0;
        var C = (function(m) {
          if (typeof WeakMap == "function")
            var d = /* @__PURE__ */ new WeakMap();
          return (function(t) {
            if (t && t.__esModule) return t;
            var a, i, E = { __proto__: null, default: t };
            if (t === null || j(t) != "object" && typeof t != "function") return E;
            if (a = d) {
              if (a.has(t)) return a.get(t);
              a.set(t, E);
            }
            for (var T in t) T !== "default" && {}.hasOwnProperty.call(t, T) && ((i = (a = Object.defineProperty) && Object.getOwnPropertyDescriptor(t, T)) && (i.get || i.set) ? a(E, T, i) : E[T] = t[T]);
            return E;
          })(m);
        })(I(925));
        function j(m) {
          return j = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(d) {
            return typeof d;
          } : function(d) {
            return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
          }, j(m);
        }
        function z(m, d) {
          for (var t = 0; t < d.length; t++) {
            var a = d[t];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(m, N(a.key), a);
          }
        }
        function N(m) {
          var d = (function(t) {
            if (j(t) != "object" || !t) return t;
            var a = t[Symbol.toPrimitive];
            if (a !== void 0) {
              var i = a.call(t, "string");
              if (j(i) != "object") return i;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
          })(m);
          return j(d) == "symbol" ? d : d + "";
        }
        w.default = (function() {
          return m = function t(a) {
            return (function(i, E) {
              if (!(i instanceof E)) throw new TypeError("Cannot call a class as a function");
            })(this, t), a && (this.object = function() {
              return a;
            }), this;
          }, (d = [{ key: "toJSON", value: function() {
            return this.object() ? C.mergeDeep(JSON.parse(JSON.stringify({})), this.object()) : null;
          } }, { key: "get", value: function(t) {
            if (this.object() && t) return t.split(".").reduce(function(a, i) {
              return a[i];
            }, this.object());
          } }, { key: "getDownloadUrl", value: function(t) {
            if (this.object()) {
              var a = this.object().url ? this.object().url : null;
              return a ? a + "?disposition=" + (t && typeof t == "string" ? t : "attachment") : null;
            }
          } }]) && z(m.prototype, d), Object.defineProperty(m, "prototype", { writable: !1 }), m;
          var m, d;
        })();
      }, 215: (F, w) => {
        function I(e) {
          return I = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
            return typeof o;
          } : function(o) {
            return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
          }, I(e);
        }
        Object.defineProperty(w, "__esModule", { value: !0 });
        var C = function(e, o) {
          return C = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, b) {
            u.__proto__ = b;
          } || function(u, b) {
            for (var S in b) Object.prototype.hasOwnProperty.call(b, S) && (u[S] = b[S]);
          }, C(e, o);
        };
        function j(e, o) {
          if (typeof o != "function" && o !== null) throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
          function u() {
            this.constructor = e;
          }
          C(e, o), e.prototype = o === null ? Object.create(o) : (u.prototype = o.prototype, new u());
        }
        var z, N = function() {
          return N = Object.assign || function(e) {
            for (var o, u = 1, b = arguments.length; u < b; u++) for (var S in o = arguments[u]) Object.prototype.hasOwnProperty.call(o, S) && (e[S] = o[S]);
            return e;
          }, N.apply(this, arguments);
        };
        typeof SuppressedError == "function" && SuppressedError, (function(e) {
          e.BOLD = "bold", e.ITALIC = "italic", e.UNDERLINE = "underline", e.CLASSNAME_OR_ID = "classnameOrId", e.STRIKE_THROUGH = "strikethrough", e.INLINE_CODE = "inlineCode", e.SUBSCRIPT = "subscript", e.SUPERSCRIPT = "superscript", e.BREAK = "break";
        })(z || (z = {}));
        var m, d = z;
        (function(e) {
          e.DOCUMENT = "doc", e.PARAGRAPH = "p", e.LINK = "a", e.IMAGE = "img", e.EMBED = "embed", e.HEADING_1 = "h1", e.HEADING_2 = "h2", e.HEADING_3 = "h3", e.HEADING_4 = "h4", e.HEADING_5 = "h5", e.HEADING_6 = "h6", e.ORDER_LIST = "ol", e.UNORDER_LIST = "ul", e.LIST_ITEM = "li", e.FRAGMENT = "fragment", e.HR = "hr", e.TABLE = "table", e.TABLE_HEADER = "thead", e.TABLE_BODY = "tbody", e.TABLE_FOOTER = "tfoot", e.TABLE_ROW = "tr", e.TABLE_HEAD = "th", e.TABLE_DATA = "td", e.COL_GROUP = "colgroup", e.COL = "col", e.BLOCK_QUOTE = "blockquote", e.CODE = "code", e.TEXT = "text", e.REFERENCE = "reference";
        })(m || (m = {}));
        var t, a = m;
        function i(e, o, u) {
          return o === void 0 && (o = ["p", "a", "strong", "em", "ul", "ol", "li", "h1", "h2", "h3", "h4", "h5", "h6", "sub", "u", "table", "thead", "tbody", "tr", "th", "td", "span", "fragment", "sup", "strike", "br", "img", "colgroup", "col", "div"]), u === void 0 && (u = ["href", "title", "target", "alt", "src", "class", "id", "style", "colspan", "rowspan", "content-type-uid", "data-sys-asset-uid", "sys-style-type", "data-type", "data-width", "data-rows", "data-cols", "data-mtec"]), (e = e.replace(/\n/g, "<br />")).replace(/<\/?([a-z][a-z0-9]*)\b[^<>]*>/gi, function(b, S) {
            return o.includes(S.toLowerCase()) ? b : "";
          }).replace(/<([a-z][a-z0-9]*)\b[^<>]*>/gi, function(b, S) {
            return o.includes(S.toLowerCase()) ? b.replace(/\s([a-z\-]+)=['"][^'"]*['"]/gi, function(P, l) {
              return u.includes(l.toLowerCase()) ? P : "";
            }) : b;
          });
        }
        var E, T = ((t = {})[a.DOCUMENT] = function(e) {
          return "";
        }, t[a.PARAGRAPH] = function(e, o) {
          return "<p".concat(e.attrs.style ? ' style="'.concat(e.attrs.style, '"') : "").concat(e.attrs["class-name"] ? ' class="'.concat(e.attrs["class-name"], '"') : "").concat(e.attrs.id ? ' id="'.concat(e.attrs.id, '"') : "", ">").concat(i(o(e.children)), "</p>");
        }, t[a.LINK] = function(e, o) {
          var u = i(e.attrs.href || e.attrs.url);
          return e.attrs.target ? "<a".concat(e.attrs.style ? ' style="'.concat(e.attrs.style, '"') : "").concat(e.attrs["class-name"] ? ' class="'.concat(e.attrs["class-name"], '"') : "").concat(e.attrs.id ? ' id="'.concat(e.attrs.id, '"') : "", ' href="').concat(u, '" target="').concat(e.attrs.target, '">').concat(i(o(e.children)), "</a>") : "<a".concat(e.attrs.style ? ' style="'.concat(e.attrs.style, '"') : "").concat(e.attrs["class-name"] ? ' class="'.concat(e.attrs["class-name"], '"') : "").concat(e.attrs.id ? ' id="'.concat(e.attrs.id, '"') : "", ' href="').concat(u, '">').concat(i(o(e.children)), "</a>");
        }, t[a.IMAGE] = function(e, o) {
          var u = encodeURI(i(e.attrs.src || e.attrs.url));
          return "<img".concat(e.attrs.style ? ' style="'.concat(e.attrs.style, '"') : "").concat(e.attrs["class-name"] ? ' class="'.concat(e.attrs["class-name"], '"') : "").concat(e.attrs.id ? ' id="'.concat(e.attrs.id, '"') : "", ' src="').concat(u, '" />').concat(i(o(e.children)));
        }, t[a.EMBED] = function(e, o) {
          var u = encodeURI(i(e.attrs.src || e.attrs.url));
          return "<iframe".concat(e.attrs.style ? ' style="'.concat(e.attrs.style, '"') : "").concat(e.attrs["class-name"] ? ' class="'.concat(e.attrs["class-name"], '"') : "").concat(e.attrs.id ? ' id="'.concat(e.attrs.id, '"') : "", ' src="').concat(u, '">').concat(i(o(e.children)), "</iframe>");
        }, t[a.HEADING_1] = function(e, o) {
          return "<h1".concat(e.attrs.style ? ' style="'.concat(e.attrs.style, '"') : "").concat(e.attrs["class-name"] ? ' class="'.concat(e.attrs["class-name"], '"') : "").concat(e.attrs.id ? ' id="'.concat(e.attrs.id, '"') : "", ">").concat(i(o(e.children)), "</h1>");
        }, t[a.HEADING_2] = function(e, o) {
          return "<h2".concat(e.attrs.style ? ' style="'.concat(e.attrs.style, '"') : "").concat(e.attrs["class-name"] ? ' class="'.concat(e.attrs["class-name"], '"') : "").concat(e.attrs.id ? ' id="'.concat(e.attrs.id, '"') : "", ">").concat(i(o(e.children)), "</h2>");
        }, t[a.HEADING_3] = function(e, o) {
          return "<h3".concat(e.attrs.style ? ' style="'.concat(e.attrs.style, '"') : "").concat(e.attrs["class-name"] ? ' class="'.concat(e.attrs["class-name"], '"') : "").concat(e.attrs.id ? ' id="'.concat(e.attrs.id, '"') : "", ">").concat(i(o(e.children)), "</h3>");
        }, t[a.HEADING_4] = function(e, o) {
          return "<h4".concat(e.attrs.style ? ' style="'.concat(e.attrs.style, '"') : "").concat(e.attrs["class-name"] ? ' class="'.concat(e.attrs["class-name"], '"') : "").concat(e.attrs.id ? ' id="'.concat(e.attrs.id, '"') : "", ">").concat(i(o(e.children)), "</h4>");
        }, t[a.HEADING_5] = function(e, o) {
          return "<h5".concat(e.attrs.style ? ' style="'.concat(e.attrs.style, '"') : "").concat(e.attrs["class-name"] ? ' class="'.concat(e.attrs["class-name"], '"') : "").concat(e.attrs.id ? ' id="'.concat(e.attrs.id, '"') : "", ">").concat(i(o(e.children)), "</h5>");
        }, t[a.HEADING_6] = function(e, o) {
          return "<h6".concat(e.attrs.style ? ' style="'.concat(e.attrs.style, '"') : "").concat(e.attrs["class-name"] ? ' class="'.concat(e.attrs["class-name"], '"') : "").concat(e.attrs.id ? ' id="'.concat(e.attrs.id, '"') : "", ">").concat(i(o(e.children)), "</h6>");
        }, t[a.ORDER_LIST] = function(e, o) {
          return "<ol".concat(e.attrs.style ? ' style="'.concat(e.attrs.style, '"') : "").concat(e.attrs["class-name"] ? ' class="'.concat(e.attrs["class-name"], '"') : "").concat(e.attrs.id ? ' id="'.concat(e.attrs.id, '"') : "", ">").concat(i(o(e.children)), "</ol>");
        }, t[a.FRAGMENT] = function(e, o) {
          return "<fragment>".concat(i(o(e.children)), "</fragment>");
        }, t[a.UNORDER_LIST] = function(e, o) {
          return "<ul".concat(e.attrs.style ? ' style="'.concat(e.attrs.style, '"') : "").concat(e.attrs["class-name"] ? ' class="'.concat(e.attrs["class-name"], '"') : "").concat(e.attrs.id ? ' id="'.concat(e.attrs.id, '"') : "", ">").concat(i(o(e.children)), "</ul>");
        }, t[a.LIST_ITEM] = function(e, o) {
          return "<li".concat(e.attrs.style ? ' style="'.concat(e.attrs.style, '"') : "").concat(e.attrs["class-name"] ? ' class="'.concat(e.attrs["class-name"], '"') : "").concat(e.attrs.id ? ' id="'.concat(e.attrs.id, '"') : "", ">").concat(i(o(e.children)), "</li>");
        }, t[a.HR] = function(e, o) {
          return "<hr>";
        }, t[a.TABLE] = function(e, o) {
          var u = "";
          if (e.attrs.colWidths && Array.isArray(e.attrs.colWidths)) {
            var b = e.attrs.colWidths.reduce(function(S, P) {
              return S + P;
            }, 0);
            u = "<".concat(a.COL_GROUP, ' data-width="').concat(b, '">'), e.attrs.colWidths.forEach(function(S) {
              var P = S / b * 100;
              u += "<".concat(a.COL, ' style="width:').concat(P.toFixed(2), '%"/>');
            }), u += "</".concat(a.COL_GROUP, ">");
          }
          return "<table".concat(e.attrs.style ? ' style="'.concat(e.attrs.style, '"') : "") + "".concat(e.attrs["class-name"] ? ' class="'.concat(e.attrs["class-name"], '"') : "") + "".concat(e.attrs.id ? ' id="'.concat(e.attrs.id, '"') : "", ">") + "".concat(u) + "".concat(i(o(e.children))) + "</table>";
        }, t[a.TABLE_HEADER] = function(e, o) {
          return "<thead".concat(e.attrs.style ? ' style="'.concat(e.attrs.style, '"') : "").concat(e.attrs["class-name"] ? ' class="'.concat(e.attrs["class-name"], '"') : "").concat(e.attrs.id ? ' id="'.concat(e.attrs.id, '"') : "", ">").concat(i(o(e.children)), "</thead>");
        }, t[a.TABLE_BODY] = function(e, o) {
          return "<tbody".concat(e.attrs.style ? ' style="'.concat(e.attrs.style, '"') : "").concat(e.attrs["class-name"] ? ' class="'.concat(e.attrs["class-name"], '"') : "").concat(e.attrs.id ? ' id="'.concat(e.attrs.id, '"') : "", ">").concat(i(o(e.children)), "</tbody>");
        }, t[a.TABLE_FOOTER] = function(e, o) {
          return "<tfoot".concat(e.attrs.style ? ' style="'.concat(e.attrs.style, '"') : "").concat(e.attrs["class-name"] ? ' class="'.concat(e.attrs["class-name"], '"') : "").concat(e.attrs.id ? ' id="'.concat(e.attrs.id, '"') : "", ">").concat(i(o(e.children)), "</tfoot>");
        }, t[a.TABLE_ROW] = function(e, o) {
          return "<tr".concat(e.attrs.style ? ' style="'.concat(e.attrs.style, '"') : "").concat(e.attrs["class-name"] ? ' class="'.concat(e.attrs["class-name"], '"') : "").concat(e.attrs.id ? ' id="'.concat(e.attrs.id, '"') : "", ">").concat(i(o(e.children)), "</tr>");
        }, t[a.TABLE_HEAD] = function(e, o) {
          return e.attrs.void ? "" : "<th" + "".concat(e.attrs.rowSpan ? ' rowspan="'.concat(e.attrs.rowSpan, '"') : "") + "".concat(e.attrs.colSpan ? ' colspan="'.concat(e.attrs.colSpan, '"') : "") + "".concat(e.attrs.style ? ' style="'.concat(e.attrs.style, '"') : "") + "".concat(e.attrs["class-name"] ? ' class="'.concat(e.attrs["class-name"], '"') : "") + "".concat(e.attrs.id ? ' id="'.concat(e.attrs.id, '"') : "", ">").concat(i(o(e.children))) + "</th>";
        }, t[a.TABLE_DATA] = function(e, o) {
          return e.attrs.void ? "" : "<td" + "".concat(e.attrs.rowSpan ? ' rowspan="'.concat(e.attrs.rowSpan, '"') : "") + "".concat(e.attrs.colSpan ? ' colspan="'.concat(e.attrs.colSpan, '"') : "") + "".concat(e.attrs.style ? ' style="'.concat(e.attrs.style, '"') : "") + "".concat(e.attrs["class-name"] ? ' class="'.concat(e.attrs["class-name"], '"') : "") + "".concat(e.attrs.id ? ' id="'.concat(e.attrs.id, '"') : "", ">").concat(i(o(e.children))) + "</td>";
        }, t[a.BLOCK_QUOTE] = function(e, o) {
          return "<blockquote".concat(e.attrs["class-name"] ? ' class="'.concat(e.attrs["class-name"], '"') : "").concat(e.attrs.id ? ' id="'.concat(e.attrs.id, '"') : "", ">").concat(i(o(e.children)), "</blockquote>");
        }, t[a.CODE] = function(e, o) {
          return "<code".concat(e.attrs["class-name"] ? ' class="'.concat(e.attrs["class-name"], '"') : "").concat(e.attrs.id ? ' id="'.concat(e.attrs.id, '"') : "", ">").concat(i(o(e.children)), "</code>");
        }, t.reference = function(e, o) {
          var u, b, S, P, l;
          if ((e.attrs.type === "entry" || e.attrs.type === "asset") && e.attrs["display-type"] === "link") {
            var y = "".concat(e.attrs.style ? ' style="'.concat(e.attrs.style, '"') : "").concat(e.attrs["class-name"] ? ' class="'.concat(e.attrs["class-name"], '"') : "").concat(e.attrs.id ? ' id="'.concat(e.attrs.id, '"') : "", ' href="').concat(e.attrs.href || e.attrs.url, '"');
            return e.attrs.target && (y += ' target="'.concat(e.attrs.target, '"')), e.attrs.type == "asset" && (y += ' type="asset" content-type-uid="sys_assets" '.concat(e.attrs["asset-uid"] ? 'data-sys-asset-uid="'.concat(e.attrs["asset-uid"], '"') : "", ' sys-style-type="download"')), "<a".concat(y, ">").concat(i(o(e.children)), "</a>");
          }
          if (e.attrs.type === "asset") {
            var q = encodeURI(e.attrs["asset-link"]), h = (b = (u = e.attrs) === null || u === void 0 ? void 0 : u["redactor-attributes"]) === null || b === void 0 ? void 0 : b.alt, k = e.attrs.link, x = e.attrs.target || "", J = ((P = (S = e.attrs) === null || S === void 0 ? void 0 : S["redactor-attributes"]) === null || P === void 0 ? void 0 : P["asset-caption"]) || ((l = e.attrs) === null || l === void 0 ? void 0 : l["asset-caption"]) || "", Z = e.attrs.style, ne = e.attrs["asset-uid"], oe = "<img".concat(ne ? ' asset_uid="'.concat(ne, '"') : "").concat(e.attrs["class-name"] ? ' class="'.concat(i(e.attrs["class-name"]), '"') : "").concat(q ? ' src="'.concat(i(q), '"') : "").concat(h ? ' alt="'.concat(h, '"') : "").concat(x === "_blank" ? ' target="_blank"' : "").concat(Z ? ' style="'.concat(Z, '"') : "", " />");
            return "<figure".concat(Z ? ' style="'.concat(Z, '"') : "", ">") + (k ? '<a href="'.concat(k, '" target="').concat(x || "", '">') : "") + oe + (k ? "</a>" : "") + (J ? "<figcaption>".concat(J, "</figcaption>") : "") + "</figure>";
          }
          return "";
        }, t.default = function(e, o) {
          return i(o(e.children));
        }, t[d.BOLD] = function(e) {
          return "<strong>".concat(i(e), "</strong>");
        }, t[d.ITALIC] = function(e) {
          return "<em>".concat(i(e), "</em>");
        }, t[d.UNDERLINE] = function(e) {
          return "<u>".concat(i(e), "</u>");
        }, t[d.STRIKE_THROUGH] = function(e) {
          return "<strike>".concat(i(e), "</strike>");
        }, t[d.INLINE_CODE] = function(e) {
          return "<span data-type='inlineCode'>".concat(i(e), "</span>");
        }, t[d.SUBSCRIPT] = function(e) {
          return "<sub>".concat(i(e), "</sub>");
        }, t[d.SUPERSCRIPT] = function(e) {
          return "<sup>".concat(i(e), "</sup>");
        }, t[d.BREAK] = function(e) {
          return "<br />".concat(i(e));
        }, t[d.CLASSNAME_OR_ID] = function(e, o, u) {
          return "<span".concat(o ? ' class="'.concat(o, '"') : "").concat(u ? ' id="'.concat(u, '"') : "", ">").concat(i(e), "</span>");
        }, t);
        (function(e) {
          e.BLOCK = "block", e.INLINE = "inline", e.LINK = "link", e.DISPLAY = "display", e.DOWNLOAD = "download";
        })(E || (E = {}));
        var B, $ = E, A = ((B = {})[$.BLOCK] = function(e) {
          var o = i(e.title || e.uid), u = i(e._content_type_uid || (e.system ? e.system.content_type_uid : ""));
          return "<div><p>".concat(o, "</p><p>Content type: <span>").concat(u, "</span></p></div>");
        }, B[$.INLINE] = function(e) {
          var o = i(e.title || e.uid);
          return "<span>".concat(o, "</span>");
        }, B[$.LINK] = function(e, o) {
          var u = encodeURI(i(e.url || "undefined")), b = i(o.text || e.title || e.uid || (e.system ? e.system.uid : ""));
          return '<a href="'.concat(u, '">').concat(b, "</a>");
        }, B[$.DISPLAY] = function(e, o) {
          var u = encodeURI(i(e.url || "undefined")), b = i(o.attributes.alt || e.title || e.filename || e.uid || (e.system ? e.system.uid : ""));
          return '<img src="'.concat(u, '" alt="').concat(b, '" />');
        }, B[$.DOWNLOAD] = function(e, o) {
          var u = encodeURI(i(e.url || "undefined")), b = i(o.text || e.title || e.uid || (e.system ? e.system.content_type_uid : ""));
          return '<a href="'.concat(u, '">').concat(b, "</a>");
        }, B);
        function r(e, o) {
          return e.itemType === "entry" ? (u = e.itemUid, b = e.contentTypeUid, (S = o) === void 0 && (S = []), S.filter(function(P) {
            if (P.uid && P.uid === u && P._content_type_uid === b || P.system && P.system.uid === u && P.system.content_type_uid === b) return P;
          })) : (function(P, l) {
            return l === void 0 && (l = []), l.filter(function(y) {
              if (y.uid && y.uid === P || y.system && y.system.uid === P) return y;
            });
          })(e.itemUid, o);
          var u, b, S;
        }
        function n(e, o) {
          if (e && e !== void 0 && o && o !== void 0 && o._embedded_items !== void 0) {
            var u = o;
            return r(e, Object.values(u._embedded_items || []).reduce(function(b, S) {
              return b.concat(S);
            }, []));
          }
          return [];
        }
        function p(e, o, u) {
          if (!e && e === void 0 || !o && o === void 0) return "";
          if (u && u[o.styleType] !== void 0) {
            var b = u[o.styleType];
            if (o.attributes["data-sys-content-type-uid"] !== void 0 && typeof b != "function" && b[o.attributes["data-sys-content-type-uid"]] !== void 0) return b[o.attributes["data-sys-content-type-uid"]](e, o);
            if (o.attributes["data-sys-content-type-uid"] !== void 0 && typeof b != "function" && b.$default !== void 0) return b.$default(e, o);
            if (o.contentTypeUid !== void 0 && typeof b != "function" && b[o.contentTypeUid] !== void 0) return b[o.contentTypeUid](e, o);
            if (o.contentTypeUid !== void 0 && typeof b != "function" && b.$default !== void 0) return b.$default(e, o);
            if (typeof b == "function") return b(e, o);
          }
          return (0, A[o.styleType])(e, o);
        }
        function O(e, o) {
          for (var u = 0, b = e; u < b.length; u++) o(b[u]);
        }
        function c(e, o, u) {
          if (!(e instanceof Array) && e.type !== "doc") return e;
          if (e instanceof Array) {
            var b = [];
            return e.forEach(function(P) {
              b.push(c(P, o, u));
            }), b;
          }
          var S = N(N({}, T), o);
          return D(e.children, S, u);
        }
        function D(e, o, u) {
          return e.map(function(b) {
            return (function(S, P, l) {
              var y;
              if (!((y = S?.attrs) === null || y === void 0) && y.style && (S.attrs.style = (function(h) {
                if (!h) return "";
                if (typeof h == "string") return h;
                var k = "";
                for (var x in h) if (h.hasOwnProperty(x)) {
                  var J = h[x];
                  k += "".concat(x, ":").concat(J, ";");
                }
                return k;
              })(S.attrs.style)), S.type) {
                if (S.type === "reference") return (function(h, k, x) {
                  function J(le) {
                    return k[le.type](le, function(pe) {
                      return D(pe, k, x);
                    });
                  }
                  if ((h.attrs.type === "entry" || h.attrs.type === "asset") && h.attrs["display-type"] === "link") {
                    var Z = h.children ? D(h.children, k, x) : "";
                    if (k[h.type] !== void 0) return J(h);
                    var ne = "".concat(h.attrs.style ? ' style="'.concat(h.attrs.style, '"') : "").concat(h.attrs["class-name"] ? ' class="'.concat(h.attrs["class-name"], '"') : "").concat(h.attrs.id ? ' id="'.concat(h.attrs.id, '"') : "", ' href="').concat(h.attrs.href || h.attrs.url, '"');
                    return h.attrs.target && (ne += ' target="'.concat(h.attrs.target, '"')), h.attrs.type == "asset" && (ne += ' type="asset" content-type-uid="sys_assets" '.concat(h.attrs["asset-uid"] ? 'data-sys-asset-uid="'.concat(h.attrs["asset-uid"], '"') : "", ' sys-style-type="download"')), "<a".concat(ne, ">").concat(Z, "</a>");
                  }
                  if (!x && k[h.type] !== void 0) return J(h);
                  if (!x) return "";
                  var oe, ce = (oe = h.attrs, { text: (h.children && h.children.length > 0 ? h.children[0] : {}).text, itemUid: oe["entry-uid"] || oe["asset-uid"], itemType: oe.type, styleType: oe["display-type"], attributes: oe, contentTypeUid: oe["content-type-uid"] }), ae = x(ce);
                  return ae || k[h.type] === void 0 ? p(ae, ce, k) : J(h);
                })(S, P, l);
                var q = function(h) {
                  return D(h, P, l);
                };
                return P[S.type] !== void 0 ? P[S.type](S, q) : P.default(S, q);
              }
              return (function(h, k) {
                var x = _(h.text);
                return (h.classname || h.id) && (x = k[d.CLASSNAME_OR_ID](x, h.classname, h.id)), h.break && (x = k[d.BREAK](x)), h.superscript && (x = k[d.SUPERSCRIPT](x)), h.subscript && (x = k[d.SUBSCRIPT](x)), h.inlineCode && (x = k[d.INLINE_CODE](x)), h.strikethrough && (x = k[d.STRIKE_THROUGH](x)), h.underline && (x = k[d.UNDERLINE](x)), h.italic && (x = k[d.ITALIC](x)), h.bold && (x = k[d.BOLD](x)), x;
              })(S, P);
            })(b, o, u);
          }).join("");
        }
        function _(e) {
          return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
        }
        var f = ['"', "'", ">", "<", "/", "="];
        function s(e) {
          return { text: e["#text"], itemUid: e["data-sys-entry-uid"] || e["data-sys-asset-uid"], itemType: e.type, styleType: e["sys-style-type"], attributes: e, contentTypeUid: e["data-sys-content-type-uid"] };
        }
        function v(e) {
          for (var o = {}, u = 0; u < e.attributes.length; u++) o[e.attributes.item(u).name] = e.attributes.item(u).value;
          return e.childNodes.forEach(function(b) {
            var S = b;
            o = N(N({}, o), (function(P) {
              var l = {};
              return P.nodeType === 3 ? l["#text"] = P.textContent : P.nodeType === 1 && (l[P.nodeName.toLowerCase()] = v(P)), l;
            })(S));
          }), o;
        }
        var R = "documentfragmentcontainer";
        function H(e, o, u) {
          K(e.split("."), o, u);
        }
        function K(e, o, u) {
          if (e) {
            var b = e[0];
            if (e.length === 1 && o[b]) o[b] = u(o[b]);
            else if (e.length > 0 && o[b]) {
              var S = e.slice(1);
              if (Array.isArray(o[b])) for (var P = 0, l = o[b]; P < l.length; P++) K(S, l[P], u);
              else I(o[b]) === "object" && K(S, o[b], u);
            }
          }
        }
        function U(e, o) {
          if (!e || e === void 0) return "";
          if (typeof e == "string") {
            var u = e;
            return e.forEachEmbeddedItem(function(S, P) {
              u = (function(l, y, q, h) {
                var k = p(n(q, h.entry)[0], q, h.renderOption);
                return l.replace(y, k);
              })(u, S, P, o);
            }), u;
          }
          var b = [];
          return e.forEach(function(S) {
            b.push(U(S, o));
          }), b;
        }
        String.prototype.forEachEmbeddedItem = function(e) {
          var o = "<".concat(R, ">").concat(this.toString(), "</").concat(R, ">"), u = new DOMParser().parseFromString(o, "text/html");
          u.querySelectorAll(".embedded-entry").forEach(function(b) {
            e(b.outerHTML, s(v(b)));
          }), u.querySelectorAll(".embedded-asset").forEach(function(b) {
            e(b.outerHTML, s(v(b)));
          });
        };
        var L = function() {
        }, Y = (function(e) {
          function o() {
            var u = e.call(this) || this;
            return u.type = a.DOCUMENT, u;
          }
          return j(o, e), o;
        })(L), g = (function(e) {
          function o(u) {
            var b = e.call(this) || this;
            return b.text = u, b;
          }
          return j(o, e), o;
        })(L), M = { jsonToHTML: function e(o) {
          o.entry instanceof Array ? O(o.entry, function(u) {
            e({ entry: u, paths: o.paths, renderOption: o.renderOption });
          }) : (function(u) {
            for (var b = 0, S = u.paths; b < S.length; b++) H(S[b], u.entry, function(P) {
              if (P && P.json) {
                var l = P.embedded_itemsConnection ? P.embedded_itemsConnection.edges : [], y = Object.values(l || []).reduce(function(q, h) {
                  return q.concat(h.node);
                }, []);
                return c(P.json, u.renderOption, function(q) {
                  return r(q, y)[0];
                });
              }
              return P;
            });
          })({ entry: o.entry, paths: o.paths, renderOption: o.renderOption });
        } };
        function G(e, o, u, b, S) {
          var P = {};
          S.metaKey;
          var l = S.shouldApplyVariant, y = S._applied_variants;
          return Object.entries(e).forEach(function(q) {
            var h = q[0], k = q[1];
            if (h !== "$") {
              var x = k && I(k) === "object" && k._metadata && k._metadata.uid ? k._metadata.uid : "", J = S.shouldApplyVariant ? "".concat(S.metaKey ? S.metaKey + "." : "").concat(h) : "";
              x && J && (J = J + "." + x), I(k) === "object" ? (Array.isArray(k) ? k.forEach(function(Z, ne) {
                var oe, ce = "".concat(h, "__").concat(ne), ae = "".concat(h, "__parent");
                if (x = k && I(k) === "object" && Z._metadata && Z._metadata.uid ? Z._metadata.uid : "", J = S.shouldApplyVariant ? "".concat(S.metaKey ? S.metaKey + "." : "").concat(h) : "", x && J && (J = J + "." + x), P[ce] = W("".concat(o, ".").concat(h, ".").concat(ne), u, { _applied_variants: y, shouldApplyVariant: l, metaKey: J }), P[ae] = (function(ve, Ee) {
                  return Ee ? { "data-cslp-parent-field": ve } : "data-cslp-parent-field=".concat(ve);
                })("".concat(o, ".").concat(h), u), Z != null && Z._content_type_uid !== void 0 && Z.uid !== void 0) {
                  var le = Z._applied_variants || ((oe = Z?.system) === null || oe === void 0 ? void 0 : oe.applied_variants) || y, pe = !!le;
                  k[ne].$ = G(Z, "".concat(Z._content_type_uid, ".").concat(Z.uid, ".").concat(Z.locale || b), u, b, { _applied_variants: le, shouldApplyVariant: pe, metaKey: "" });
                } else I(Z) === "object" && (Z.$ = G(Z, "".concat(o, ".").concat(h, ".").concat(ne), u, b, { _applied_variants: y, shouldApplyVariant: l, metaKey: J }));
              }) : k && (k.$ = G(k, "".concat(o, ".").concat(h), u, b, { _applied_variants: y, shouldApplyVariant: l, metaKey: J })), P[h] = W("".concat(o, ".").concat(h), u, { _applied_variants: y, shouldApplyVariant: l, metaKey: J })) : P[h] = W("".concat(o, ".").concat(h), u, { _applied_variants: y, shouldApplyVariant: l, metaKey: J });
            }
          }), P;
        }
        function W(e, o, u) {
          if (u.shouldApplyVariant && u._applied_variants && u._applied_variants[u.metaKey]) {
            var b = u._applied_variants[u.metaKey], S = ("v2:" + e).split(".");
            S[1] = S[1] + "_" + b, e = S.join(".");
          }
          return o ? { "data-cslp": e } : "data-cslp=".concat(e);
        }
        function X(e) {
          for (var o in e) {
            var u = e[o];
            u instanceof Array ? u.forEach(function(b) {
              V(b);
            }) : u && I(u) === "object" && V(u);
          }
        }
        function V(e) {
          var o, u = Q(e);
          u && ((o = u?.embedded_itemsConnection) === null || o === void 0 ? void 0 : o.edges).forEach(function(b) {
            var S, P, l, y = b.node;
            if (y?.url && y?.filename) {
              if (!(!((S = y?.system) === null || S === void 0) && S.uid)) throw new Error("Asset UID not found in the response");
              ((l = (P = u?.json) === null || P === void 0 ? void 0 : P.children) === null || l === void 0 ? void 0 : l.find(function(q) {
                return q.attrs["asset-uid"] === y.system.uid;
              })).attrs["asset-link"] = y.url;
            }
          });
        }
        function Q(e) {
          if (e && e.embedded_itemsConnection) return e;
          for (var o in e) if (e[o] && I(e[o]) === "object") {
            var u = Q(e[o]);
            if (u) return u;
          }
        }
        w.Document = Y, w.GQL = M, w.MarkType = d, w.Node = L, w.NodeType = a, w.StyleType = $, w.TextNode = g, w.addEditableTags = function(e, o, u, b) {
          var S;
          if (b === void 0 && (b = "en-us"), e) {
            o = o.toLowerCase(), b = b.toLowerCase();
            var P = e._applied_variants || ((S = e?.system) === null || S === void 0 ? void 0 : S.applied_variants) || null;
            e.$ = G(e, "".concat(o, ".").concat(e.uid, ".").concat(b), u, b, { _applied_variants: P, shouldApplyVariant: !!P, metaKey: "" });
          }
        }, w.attributeToString = function(e) {
          var o = "", u = function(S) {
            if (Object.prototype.hasOwnProperty.call(e, S)) {
              if (f.some(function(h) {
                return S.includes(h);
              })) return "continue";
              var P = e[S];
              if (Array.isArray(P)) P = P.join(", ");
              else if (I(P) === "object") {
                var l = "";
                for (var y in P) if (Object.prototype.hasOwnProperty.call(P, y)) {
                  var q = P[y];
                  q != null && q !== "" && (l += "".concat(y, ":").concat(q, "; "));
                }
                P = l;
              }
              o += " ".concat(S, '="').concat(_(String(P)), '"');
            }
          };
          for (var b in e) u(b);
          return o;
        }, w.jsonToHTML = function e(o) {
          o.entry instanceof Array ? O(o.entry, function(u) {
            e({ entry: u, paths: o.paths, renderOption: o.renderOption });
          }) : (function(u) {
            for (var b = 0, S = u.paths; b < S.length; b++) H(S[b], u.entry, function(P) {
              return c(P, u.renderOption, function(l) {
                return n(l, u.entry)[0];
              });
            });
          })({ entry: o.entry, paths: o.paths, renderOption: o.renderOption });
        }, w.render = function(e) {
          function o(b, S) {
            H(b, S, function(P) {
              return U(P, { entry: S, renderOption: e.renderOption });
            });
          }
          function u(b) {
            e.paths && e.paths.length !== 0 ? e.paths.forEach(function(S) {
              o(S, b);
            }) : Object.keys(N({}, b._embedded_items)).forEach(function(S) {
              o(S, b);
            });
          }
          e.entry instanceof Array ? e.entry.forEach(function(b) {
            u(b);
          }) : u(e.entry);
        }, w.renderContent = U, w.updateAssetURLForGQL = function(e) {
          try {
            var o = e?.data;
            for (var u in o) "items" in o[u] ? o[u].items.forEach(function(b) {
              X(b);
            }) : X(o[u]);
          } catch (b) {
            console.error("Error in updating asset URL for GQL response", b);
          }
        };
      }, 241: (F, w) => {
        Object.defineProperty(w, "__esModule", { value: !0 }), w.default = void 0, w.default = { protocol: "https", host: "cdn.contentstack.io", port: 443, version: "v3", urls: { sync: "/stacks/sync", content_types: "/content_types/", entries: "/entries/", assets: "/assets/", environments: "/environments/", taxonomies: "/taxonomies/entries" }, live_preview: { enable: !1, host: "rest-preview.contentstack.com" } };
      }, 275: (F, w, I) => {
        function C(a) {
          return C = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
            return typeof i;
          } : function(i) {
            return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
          }, C(a);
        }
        Object.defineProperty(w, "__esModule", { value: !0 }), w.default = void 0;
        var j, z = (j = I(318)) && j.__esModule ? j : { default: j };
        function N() {
          try {
            var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            }));
          } catch {
          }
          return (N = function() {
            return !!a;
          })();
        }
        function m(a) {
          return m = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(i) {
            return i.__proto__ || Object.getPrototypeOf(i);
          }, m(a);
        }
        function d(a, i) {
          return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(E, T) {
            return E.__proto__ = T, E;
          }, d(a, i);
        }
        var t = function(a) {
          return function(i, E, T) {
            if (i && E && typeof i == "string" && E !== void 0) return this._query.query[i] = this._query.query.file_size || {}, this._query.query[i][a] = E, T && typeof T == "number" && (this._query.query[i].levels = T), this;
            this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid parameters.");
          };
        };
        w.default = (function(a) {
          function i() {
            var E;
            return (function(T, B) {
              if (!(T instanceof B)) throw new TypeError("Cannot call a class as a function");
            })(this, i), (E = (function(T, B, $) {
              return B = m(B), (function(A, r) {
                if (r && (C(r) == "object" || typeof r == "function")) return r;
                if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                return (function(n) {
                  if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return n;
                })(A);
              })(T, N() ? Reflect.construct(B, [], m(T).constructor) : B.apply(T, $));
            })(this, i)).above = t("$above"), E.equalAndAbove = t("$eq_above"), E.below = t("$below"), E.equalAndBelow = t("$eq_below"), E;
          }
          return (function(E, T) {
            if (typeof T != "function" && T !== null) throw new TypeError("Super expression must either be null or a function");
            E.prototype = Object.create(T && T.prototype, { constructor: { value: E, writable: !0, configurable: !0 } }), Object.defineProperty(E, "prototype", { writable: !1 }), T && d(E, T);
          })(i, a), (function(E) {
            return Object.defineProperty(E, "prototype", { writable: !1 }), E;
          })(i);
        })(z.default);
      }, 285: (F, w, I) => {
        Object.defineProperty(w, "__esModule", { value: !0 }), w.default = void 0;
        var C, j = (C = I(641)) && C.__esModule ? C : { default: C }, z = { providers: function(N) {
          if (N) return j.default;
          console.error("Kindly provide valid provider.");
        }, policies: { IGNORE_CACHE: -1, ONLY_NETWORK: 0, CACHE_ELSE_NETWORK: 1, NETWORK_ELSE_CACHE: 2, CACHE_THEN_NETWORK: 3 } };
        w.default = z;
      }, 318: (F, w, I) => {
        Object.defineProperty(w, "__esModule", { value: !0 }), w.default = void 0;
        var C, j = (function(_) {
          if (typeof WeakMap == "function")
            var f = /* @__PURE__ */ new WeakMap();
          return (function(s) {
            if (s && s.__esModule) return s;
            var v, R, H = { __proto__: null, default: s };
            if (s === null || B(s) != "object" && typeof s != "function") return H;
            if (v = f) {
              if (v.has(s)) return v.get(s);
              v.set(s, H);
            }
            for (var K in s) K !== "default" && {}.hasOwnProperty.call(s, K) && ((R = (v = Object.defineProperty) && Object.getOwnPropertyDescriptor(s, K)) && (R.get || R.set) ? v(H, K, R) : H[K] = s[K]);
            return H;
          })(_);
        })(I(925)), z = (C = I(42)) && C.__esModule ? C : { default: C };
        function N(_, f) {
          var s = Object.keys(_);
          if (Object.getOwnPropertySymbols) {
            var v = Object.getOwnPropertySymbols(_);
            f && (v = v.filter(function(R) {
              return Object.getOwnPropertyDescriptor(_, R).enumerable;
            })), s.push.apply(s, v);
          }
          return s;
        }
        function m(_) {
          for (var f = 1; f < arguments.length; f++) {
            var s = arguments[f] != null ? arguments[f] : {};
            f % 2 ? N(Object(s), !0).forEach(function(v) {
              d(_, v, s[v]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(s)) : N(Object(s)).forEach(function(v) {
              Object.defineProperty(_, v, Object.getOwnPropertyDescriptor(s, v));
            });
          }
          return _;
        }
        function d(_, f, s) {
          return (f = a(f)) in _ ? Object.defineProperty(_, f, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : _[f] = s, _;
        }
        function t(_, f) {
          for (var s = 0; s < f.length; s++) {
            var v = f[s];
            v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(_, a(v.key), v);
          }
        }
        function a(_) {
          var f = (function(s) {
            if (B(s) != "object" || !s) return s;
            var v = s[Symbol.toPrimitive];
            if (v !== void 0) {
              var R = v.call(s, "string");
              if (B(R) != "object") return R;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(s);
          })(_);
          return B(f) == "symbol" ? f : f + "";
        }
        function i() {
          try {
            var _ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            }));
          } catch {
          }
          return (i = function() {
            return !!_;
          })();
        }
        function E(_) {
          return E = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(f) {
            return f.__proto__ || Object.getPrototypeOf(f);
          }, E(_);
        }
        function T(_, f) {
          return T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(s, v) {
            return s.__proto__ = v, s;
          }, T(_, f);
        }
        function B(_) {
          return B = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(f) {
            return typeof f;
          } : function(f) {
            return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
          }, B(_);
        }
        var $ = function(_) {
          return function(f, s) {
            if (f && s && typeof f == "string" && s !== void 0) return this._query.query[f] = this._query.query.file_size || {}, this._query.query[f][_] = s, this;
            this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid parameters.");
          };
        }, A = function(_) {
          var f = _ ? "$in" : "$nin";
          return function(s, v) {
            if (s && v && typeof s == "string" && Array.isArray(v)) return this._query.query[s] = this._query.query[s] || {}, this._query.query[s][f] = this._query.query[s][f] || [], this._query.query[s][f] = this._query.query[s][f].concat(v), this;
            this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid parameters.");
          };
        }, r = function(_) {
          return function(f) {
            if (f && typeof f == "string") return this._query.query[f] = this._query.query[f] || {}, this._query.query[f].$exists = _, this;
            this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid parameters.");
          };
        }, n = function(_) {
          return function() {
            for (var f = [], s = 0, v = arguments.length; s < v; s++) arguments[s] instanceof D && arguments[s]._query.query ? f.push(arguments[s]._query.query) : B(arguments[s]) === "object" && f.push(arguments[s]);
            return this._query.query[_] ? this._query.query[_] = this._query.query[_].concat(f) : this._query.query[_] = f, this;
          };
        }, p = function(_) {
          return function(f) {
            if (f && typeof f == "string") return this._query[_] = f, this;
            this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Argument should be a string.");
          };
        }, O = function(_) {
          return function(f) {
            if (typeof f == "number") return this._query[_] = f, this;
            this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Argument should be a number.");
          };
        };
        function c(_, f, s, v) {
          var R;
          switch (_) {
            case "asset":
              R = v + f.urls.assets;
              break;
            case "taxonomy":
              R = v + f.urls.taxonomies;
              break;
            default:
              R = v + f.urls.content_types + s + f.urls.entries;
          }
          return R;
        }
        var D = w.default = (function(_) {
          function f() {
            var s;
            return (function(v, R) {
              if (!(v instanceof R)) throw new TypeError("Cannot call a class as a function");
            })(this, f), (s = (function(v, R, H) {
              return R = E(R), (function(K, U) {
                if (U && (B(U) == "object" || typeof U == "function")) return U;
                if (U !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                return (function(L) {
                  if (L === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return L;
                })(K);
              })(v, i() ? Reflect.construct(R, [], E(v).constructor) : R.apply(v, H));
            })(this, f))._query = s._query || {}, s._query.query = s._query.query || {}, s.lessThan = $("$lt"), s.lessThanOrEqualTo = $("$lte"), s.greaterThan = $("$gt"), s.greaterThanOrEqualTo = $("$gte"), s.notEqualTo = $("$ne"), s.containedIn = A(!0), s.notContainedIn = A(!1), s.exists = r(!0), s.notExists = r(!1), s.ascending = p("asc"), s.descending = p("desc"), s.beforeUid = p("before_uid"), s.afterUid = p("after_uid"), s.skip = O("skip"), s.limit = O("limit"), s.or = n("$or"), s.and = n("$and"), s;
          }
          return (function(s, v) {
            if (typeof v != "function" && v !== null) throw new TypeError("Super expression must either be null or a function");
            s.prototype = Object.create(v && v.prototype, { constructor: { value: s, writable: !0, configurable: !0 } }), Object.defineProperty(s, "prototype", { writable: !1 }), v && T(s, v);
          })(f, _), (function(s, v) {
            return v && t(s.prototype, v), Object.defineProperty(s, "prototype", { writable: !1 }), s;
          })(f, [{ key: "equalTo", value: function(s, v) {
            if (s && typeof s == "string") return this._query.query[s] = v, this;
            this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid parameters.");
          } }, { key: "where", value: function(s, v) {
            if (s && typeof s == "string") return this._query.query[s] = v, this;
            this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid parameters.");
          } }, { key: "count", value: function() {
            var s = this.config.protocol + "://" + this.config.host + ":" + this.config.port + "/" + this.config.version, v = c(this.type, this.config, this.content_type_uid, s);
            return this._query.count = !0, this.requestParams = { method: "POST", headers: j.mergeDeep({}, this.headers), url: v, body: { _method: "GET", query: this._query } }, this;
          } }, { key: "query", value: function(s) {
            if (B(s) === "object") return this._query.query = j.mergeDeep(this._query.query, s), this;
            this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid parameters");
          } }, { key: "referenceIn", value: function(s, v) {
            var R = {};
            return v instanceof f && v._query.query ? R.$in_query = v._query.query : B(v) === "object" && (R.$in_query = v), this._query.query[s] ? this._query.query[s] = this._query.query[s].concat(R) : this._query.query[s] = R, this;
          } }, { key: "referenceNotIn", value: function(s, v) {
            var R = {};
            return v instanceof f && v._query.query ? R.$nin_query = v._query.query : B(v) === "object" && (R.$nin_query = v), this._query.query[s] ? this._query.query[s] = this._query.query[s].concat(R) : this._query.query[s] = R, this;
          } }, { key: "tags", value: function(s) {
            if (Array.isArray(s)) return this._query.tags = s, this;
            this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid parameters");
          } }, { key: "includeReferenceContentTypeUID", value: function() {
            return this._query.include_reference_content_type_uid = !0, this;
          } }, { key: "includeCount", value: function() {
            return this._query.include_count = !0, this;
          } }, { key: "addParam", value: function(s, v) {
            if (s && v && typeof s == "string" && typeof v == "string") return this._query[s] = v, this;
            this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid parameters.");
          } }, { key: "getQuery", value: function() {
            return this._query.query || {};
          } }, { key: "regex", value: function(s, v, R) {
            if (s && v && typeof s == "string" && typeof v == "string") return this._query.query[s] = { $regex: v }, R && (this._query.query[s].$options = R), this;
            this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid parameters.");
          } }, { key: "search", value: function(s) {
            if (s && typeof s == "string") return this._query.typeahead = s, this;
            this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid parameters.");
          } }, { key: "find", value: function(s) {
            var v = this.config.host + ":" + this.config.port;
            this.type && this.type !== "asset" && this.live_preview && this.live_preview.enable === !0 && this.live_preview.live_preview && this.live_preview.live_preview !== "init" && (v = this.live_preview.host);
            var R = this.config.protocol + "://" + v + "/" + this.config.version, H = c(this.type, this.config, this.content_type_uid, R);
            this.requestParams = { method: "POST", headers: j.mergeDeep({}, this.headers), url: H, body: { _method: "GET", query: this._query } };
            var K = j.mergeDeep(this.fetchOptions, s);
            return j.sendRequest(j.mergeDeep({}, this), K);
          } }, { key: "variants", value: function(s) {
            return Array.isArray(s) && s.length > 0 ? this.headers["x-cs-variant-uid"] = s.join(",") : this.headers["x-cs-variant-uid"] = s, this;
          } }, { key: "findOne", value: function() {
            var s = this.config.protocol + "://" + this.config.host + ":" + this.config.port + "/" + this.config.version;
            this.type && this.type !== "asset" && this.live_preview && this.live_preview.enable === !0 && this.live_preview.live_preview && this.live_preview.live_preview !== "init" && (s = this.config.protocol + "://" + this.live_preview.host + "/" + this.config.version);
            var v = c(this.type, this.config, this.content_type_uid, s);
            this.singleEntry = !0, this._query.limit = 1, this.requestParams = { method: "POST", headers: j.mergeDeep({}, this.headers), url: v, body: { _method: "GET", query: this._query } };
            var R = j.mergeDeep({}, this.fetchOptions);
            return j.sendRequest(j.mergeDeep({}, this), R).catch(function(H) {
              return H.status ? Promise.reject(m(m({}, H), {}, { http_code: H.status, http_message: H.statusText || "An error occurred" })) : Promise.reject(H);
            });
          } }]);
        })(z.default);
      }, 348: (F, w, I) => {
        Object.defineProperty(w, "__esModule", { value: !0 }), w.default = void 0;
        var C = i(I(241)), j = (function(A) {
          if (typeof WeakMap == "function")
            var r = /* @__PURE__ */ new WeakMap();
          return (function(n) {
            if (n && n.__esModule) return n;
            var p, O, c = { __proto__: null, default: n };
            if (n === null || E(n) != "object" && typeof n != "function") return c;
            if (p = r) {
              if (p.has(n)) return p.get(n);
              p.set(n, c);
            }
            for (var D in n) D !== "default" && {}.hasOwnProperty.call(n, D) && ((O = (p = Object.defineProperty) && Object.getOwnPropertyDescriptor(n, D)) && (O.get || O.set) ? p(c, D, O) : c[D] = n[D]);
            return c;
          })(A);
        })(I(925)), z = i(I(42)), N = i(I(537)), m = i(I(318)), d = i(I(275)), t = i(I(185)), a = i(I(285));
        function i(A) {
          return A && A.__esModule ? A : { default: A };
        }
        function E(A) {
          return E = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r;
          } : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
          }, E(A);
        }
        function T(A, r) {
          for (var n = 0; n < r.length; n++) {
            var p = r[n];
            p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(A, B(p.key), p);
          }
        }
        function B(A) {
          var r = (function(n) {
            if (E(n) != "object" || !n) return n;
            var p = n[Symbol.toPrimitive];
            if (p !== void 0) {
              var O = p.call(n, "string");
              if (E(O) != "object") return O;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(n);
          })(A);
          return E(r) == "symbol" ? r : r + "";
        }
        var $ = [408, 429];
        w.default = (function() {
          return A = function n() {
            var p = this;
            (function(_, f) {
              if (!(_ instanceof f)) throw new TypeError("Cannot call a class as a function");
            })(this, n), this.fetchOptions = { retryLimit: 5, retryCondition: function(_) {
              return !!$.includes(_.status);
            }, debug: !1, logHandler: function(_, f) {
              _ === "error" && f ? console.error("[error] ".concat(f)) : _ === "warning" && f ? console.warn("[warning] ".concat(f)) : _ === "info" && f && console.info("[info] ".concat(f));
            } }, this.config = JSON.parse(JSON.stringify(C.default)), this.plugins = [];
            for (var O = arguments.length, c = new Array(O), D = 0; D < O; D++) c[D] = arguments[D];
            switch (c[0].live_preview && c[0].live_preview.enable === !0 && c[0].live_preview.management_token !== null && c[0].live_preview.management_token && (this.config.live_preview.host = "api.contentstack.io"), c[0].region && c[0].region !== void 0 && c[0].region !== "us" && (this.config.host = c[0].region + "-cdn.contentstack.com", c[0].live_preview && c[0].live_preview.enable === !0 && (c[0].live_preview.management_token ? this.config.live_preview.host = c[0].region + "-api.contentstack.com" : this.config.live_preview.host = c[0].region + "-rest-preview.contentstack.com")), c[0].fetchOptions && c[0].fetchOptions !== void 0 && (this.fetchOptions = j.mergeDeep(this.fetchOptions, c[0].fetchOptions)), c[0].plugins && c[0].plugins !== void 0 && c[0].plugins.forEach(function(_) {
              p.plugins.push(_);
            }), this.cachePolicy = a.default.policies.IGNORE_CACHE, this.provider = a.default.providers("localstorage"), c.length) {
              case 1:
                if (E(c[0]) === "object" && typeof c[0].api_key == "string" && typeof c[0].delivery_token == "string" && typeof c[0].environment == "string") return this.headers = { api_key: c[0].api_key, access_token: c[0].delivery_token }, E(c[0].live_preview) === "object" && (this.live_preview = j.mergeDeep(this.config.live_preview, c[0].live_preview), this.setLivePreviewTimelinePreviewForClient()), typeof c[0].branch == "string" && c[0].branch !== void 0 && (this.headers.branch = c[0].branch), E(c[0].early_access) === "object" && Array.isArray(c[0].early_access) && c[0].early_access.length > 0 && (this.headers["x-header-ea"] = c[0].early_access.join(",")), this.environment = c[0].environment, this;
                this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid object parameters. The specified API Key, Delivery Token, or Environment Name is invalid.");
              case 3:
                if (this.fetchOptions.debug && this.fetchOptions.logHandler("warning", "WARNING! Obsolete function called. Function 'Contentstack.Stack(api_key, delivery_token, environment)' has been deprecated, please use 'Contentstack.Stack({api_key, delivery_token, environment, region, branch, fetchOptions})' function instead!"), typeof c[0] == "string" && typeof c[1] == "string" && typeof c[2] == "string") return this.headers = { api_key: c[0], access_token: c[1] }, this.environment = c[2], this;
                this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid string parameters.");
              case 4:
                return this.fetchOptions.debug && this.fetchOptions.logHandler("warning", "WARNING! Obsolete function called. Function 'Contentstack.Stack(api_key, delivery_token, environment)' has been deprecated, please use 'Contentstack.Stack({api_key, delivery_token, environment, region, branch, fetchOptions})' function instead!"), typeof c[0] == "string" && typeof c[1] == "string" && typeof c[2] == "string" ? (this.headers = { api_key: c[0], access_token: c[1] }, this.environment = c[2]) : this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid string parameters."), c[3] && (typeof c[3] == "string" && c[3] !== void 0 && c[3] !== "us" ? this.config.host = c[3] + "-cdn.contentstack.com" : E(c[3]) === "object" && (this.fetchOptions = j.mergeDeep(this.fetchOptions, c[3]))), this;
              case 5:
                return this.fetchOptions.debug && this.fetchOptions.logHandler("warning", "WARNING! Obsolete function called. Function 'Contentstack.Stack(api_key, delivery_token, environment)' has been deprecated, please use 'Contentstack.Stack({api_key, delivery_token, environment, region, branch, fetchOptions})' function instead!"), typeof c[0] == "string" && typeof c[1] == "string" && typeof c[2] == "string" ? (this.headers = { api_key: c[0], access_token: c[1] }, this.environment = c[2]) : this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid string parameters."), c[3] && (typeof c[3] == "string" && c[3] !== void 0 && c[3] !== "us" ? this.config.host = c[3] + "-cdn.contentstack.com" : E(c[3]) === "object" && (this.fetchOptions = j.mergeDeep(this.fetchOptions, c[3]))), c[4] && E(c[4]) === "object" && (this.fetchOptions = j.mergeDeep(this.fetchOptions, c[4])), this;
              default:
                this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid parameters to initialize the Contentstack javascript-SDK Stack.");
            }
          }, r = [{ key: "setPort", value: function(n) {
            return typeof n == "number" && (this.config.port = n), this;
          } }, { key: "setProtocol", value: function(n) {
            return typeof n == "string" && ~["https", "http"].indexOf(n) && (this.config.protocol = n), this;
          } }, { key: "setHost", value: function(n) {
            return typeof n == "string" && n && (this.config.host = n), this;
          } }, { key: "setCachePolicy", value: function(n) {
            return typeof n == "number" && n >= -1 && n < 4 ? this._query ? this.queryCachePolicy = n : this.cachePolicy = n : this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide the valid policy"), this;
          } }, { key: "setLivePreviewTimelinePreviewForClient", value: function() {
            if (j.isBrowser()) {
              var n = new URL(document.location.toString()).searchParams;
              n.has("live_preview") && (this.live_preview.live_preview = n.get("live_preview")), n.has("release_id") ? this.headers.release_id = n.get("release_id") : delete this.headers.release_id, n.has("preview_timestamp") ? this.headers.preview_timestamp = n.get("preview_timestamp") : delete this.headers.preview_timestamp;
            }
          } }, { key: "livePreviewQuery", value: function(n) {
            this.live_preview && (this.live_preview.live_preview = n.live_preview || "init", this.live_preview.content_type_uid = n.content_type_uid, this.live_preview.entry_uid = n.entry_uid), n.hasOwnProperty("release_id") ? this.headers.release_id = n.release_id : delete this.headers.release_id, n.hasOwnProperty("preview_timestamp") ? this.headers.preview_timestamp = n.preview_timestamp : delete this.headers.preview_timestamp;
          } }, { key: "setCacheProvider", value: function(n) {
            return n && E(n) === "object" && (this.provider = n), this;
          } }, { key: "clearByQuery", value: function() {
            if (this.provider && typeof this.provider.clearByQuery == "function") return this.provider.clearByQuery.apply(this.provider, arguments);
          } }, { key: "clearByContentType", value: function() {
            if (this.provider && typeof this.provider.clearByContentType == "function") return this.provider.clearByContentType.apply(this.provider, arguments);
          } }, { key: "clearAll", value: function() {
            if (this.provider && typeof this.provider.clearAll == "function") return this.provider.clearAll.apply(this.provider, arguments);
          } }, { key: "getCacheProvider", value: function() {
            return this.provider;
          } }, { key: "ContentType", value: function(n) {
            return n && typeof n == "string" && (this.content_type_uid = n, this.type = "contentType"), this;
          } }, { key: "Taxonomies", value: function() {
            return this.type = "taxonomy", j.merge(new d.default(), this);
          } }, { key: "Entry", value: function(n) {
            var p = new z.default();
            return n && typeof n == "string" && (p.entry_uid = n), j.merge(p, this);
          } }, { key: "fetch", value: function(n) {
            this.requestParams = { method: "POST", headers: j.mergeDeep({}, this.headers), plugins: this.plugins, url: this.config.protocol + "://" + this.config.host + ":" + this.config.port + "/" + this.config.version + this.config.urls.content_types + this.content_type_uid, body: { _method: "GET", environment: this.environment } };
            var p = j.mergeDeep(this.fetchOptions, n);
            return (0, t.default)(this, p);
          } }, { key: "Assets", value: function(n) {
            if (this.type = "asset", n && typeof n == "string") {
              var p = new N.default();
              return p.asset_uid = n, j.merge(p, this);
            }
            return this;
          } }, { key: "Query", value: function() {
            var n = this.type === "contentType" ? new d.default() : new m.default();
            return j.merge(n, this);
          } }, { key: "getLastActivities", value: function() {
            return this.requestParams = { method: "POST", headers: j.mergeDeep({}, this.headers), url: this.config.protocol + "://" + this.config.host + ":" + this.config.port + "/" + this.config.version + this.config.urls.content_types, body: { _method: "GET", only_last_activity: !0, environment: this.environment } }, (0, t.default)(this, this.fetchOptions);
          } }, { key: "getContentTypes", value: function() {
            var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            if (this.requestParams = { method: "POST", headers: j.mergeDeep({}, this.headers), url: this.config.protocol + "://" + this.config.host + ":" + this.config.port + "/" + this.config.version + this.config.urls.content_types, body: { _method: "GET", environment: this.environment } }, n) for (var p in n) this.requestParams.body[p] = n[p];
            return (0, t.default)(this, this.fetchOptions);
          } }, { key: "sync", value: function(n, p) {
            if (n && E(n) !== "object") throw new Error("Invalid parameters: params must be an object.");
            if (this._query = {}, n) for (var O in n) {
              var c = n[O];
              if (n.hasOwnProperty(O)) {
                if (!(typeof c == "string" || typeof c == "number" || typeof c == "boolean" || c instanceof RegExp || E(c) === "object" && c !== null)) throw new Error('Invalid parameter value for key "'.concat(O, '": must be a string, number, object, boolean, or RegExp.'));
                this._query[O] = n[O];
              }
            }
            this.requestParams = { method: "POST", headers: j.mergeDeep({}, this.headers), url: this.config.protocol + "://" + this.config.host + ":" + this.config.port + "/" + this.config.version + this.config.urls.sync, body: { _method: "GET", query: this._query } };
            var D = j.mergeDeep(this.fetchOptions, p);
            return j.sendRequest(j.mergeDeep({}, this), D);
          } }, { key: "imageTransform", value: function(n, p) {
            if (n && typeof n == "string" && E(p) === "object" && p.length === void 0) {
              var O = [];
              for (var c in p) {
                var D = encodeURIComponent(c), _ = encodeURIComponent(p[c]);
                O.push(D + "=" + _);
              }
              n += n.indexOf("?") <= -1 ? "?" + O.join("&") : "&" + O.join("&");
            }
            return n;
          } }], r && T(A.prototype, r), Object.defineProperty(A, "prototype", { writable: !1 }), A;
          var A, r;
        })();
      }, 444: () => {
      }, 514: (F, w) => {
        Object.defineProperty(w, "__esModule", { value: !0 }), w.default = void 0, w.default = (function() {
          try {
            return window.localStorage;
          } catch {
            return null;
          }
        })();
      }, 537: (F, w, I) => {
        Object.defineProperty(w, "__esModule", { value: !0 }), w.default = void 0;
        var C = (function(m) {
          if (typeof WeakMap == "function")
            var d = /* @__PURE__ */ new WeakMap();
          return (function(t) {
            if (t && t.__esModule) return t;
            var a, i, E = { __proto__: null, default: t };
            if (t === null || j(t) != "object" && typeof t != "function") return E;
            if (a = d) {
              if (a.has(t)) return a.get(t);
              a.set(t, E);
            }
            for (var T in t) T !== "default" && {}.hasOwnProperty.call(t, T) && ((i = (a = Object.defineProperty) && Object.getOwnPropertyDescriptor(t, T)) && (i.get || i.set) ? a(E, T, i) : E[T] = t[T]);
            return E;
          })(m);
        })(I(925));
        function j(m) {
          return j = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(d) {
            return typeof d;
          } : function(d) {
            return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
          }, j(m);
        }
        function z(m, d) {
          for (var t = 0; t < d.length; t++) {
            var a = d[t];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(m, N(a.key), a);
          }
        }
        function N(m) {
          var d = (function(t) {
            if (j(t) != "object" || !t) return t;
            var a = t[Symbol.toPrimitive];
            if (a !== void 0) {
              var i = a.call(t, "string");
              if (j(i) != "object") return i;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
          })(m);
          return j(d) == "symbol" ? d : d + "";
        }
        w.default = (function() {
          return m = function t() {
            return (function(a, i) {
              if (!(a instanceof i)) throw new TypeError("Cannot call a class as a function");
            })(this, t), this._query = {}, this.only = C.transform("only"), this;
          }, (d = [{ key: "toJSON", value: function() {
            return this.tojson = !0, this;
          } }, { key: "addParam", value: function(t, a) {
            if (t && typeof t == "string" && a && typeof a == "string") return this._query[t] = a, this;
            this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide a valid parameters.");
          } }, { key: "includeFallback", value: function() {
            return this._query.include_fallback = !0, this;
          } }, { key: "includeMetadata", value: function() {
            return this._query.include_metadata = !0, this;
          } }, { key: "fetch", value: function(t) {
            if (this.asset_uid) {
              this.requestParams = { method: "POST", headers: C.mergeDeep({}, this.headers), url: this.config.protocol + "://" + this.config.host + ":" + this.config.port + "/" + this.config.version + this.config.urls.assets + this.asset_uid, body: { _method: "GET", query: this._query } };
              var a = C.mergeDeep(this.fetchOptions, t);
              return C.sendRequest(C.mergeDeep({}, this), a);
            }
            t.debug && t.logHandler("error", "Kindly provide an asset uid. e.g. .Assets('asset_uid')");
          } }]) && z(m.prototype, d), Object.defineProperty(m, "prototype", { writable: !1 }), m;
          var m, d;
        })();
      }, 641: (F, w, I) => {
        function C(m) {
          return C = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(d) {
            return typeof d;
          } : function(d) {
            return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
          }, C(m);
        }
        Object.defineProperty(w, "__esModule", { value: !0 }), w.default = void 0;
        var j = (function(m) {
          if (typeof WeakMap == "function")
            var d = /* @__PURE__ */ new WeakMap();
          return (function(t) {
            if (t && t.__esModule) return t;
            var a, i, E = { __proto__: null, default: t };
            if (t === null || C(t) != "object" && typeof t != "function") return E;
            if (a = d) {
              if (a.has(t)) return a.get(t);
              a.set(t, E);
            }
            for (var T in t) T !== "default" && {}.hasOwnProperty.call(t, T) && ((i = (a = Object.defineProperty) && Object.getOwnPropertyDescriptor(t, T)) && (i.get || i.set) ? a(E, T, i) : E[T] = t[T]);
            return E;
          })(m);
        })(I(94)), z = {};
        function N(m, d) {
          var t;
          m && m.length && m.push("");
          var a = j.getKeys(), i = j.getStorage();
          if (m && m.length) {
            t = m.join(".");
            for (var E = 0, T = a.length; E < T; E++) a[E] && a[E].indexOf(t) === 0 && delete i[a[E]];
          } else for (var B = 0, $ = a.length; B < $; B++) delete i[a[B]];
        }
        z.get = function(m, d) {
          try {
            d(null, j.get(m));
          } catch (t) {
            d(t);
          }
        }, z.set = function(m, d, t) {
          try {
            m && d && j.set(m, d), t();
          } catch (a) {
            t(a);
          }
        }, z.clearByContentType = function() {
          try {
            if (arguments.length === 2 || arguments.length === 3) {
              var m = Array.prototype.slice.call(arguments), d = m.splice(-1, 1).pop(), t = [];
              t.push.apply(t, m), N(t), d();
            }
          } catch (a) {
            callback(a);
          }
        }, z.clearByQuery = function(m, d) {
          try {
            for (var t = j.getKeys(), a = j.getStorage(), i = 0, E = t.length; i < E; i++) t[i] && ~t[i].indexOf(m) && delete a[t[i]];
            d();
          } catch (T) {
            d(T);
          }
        }, z.clearAll = function(m) {
          try {
            N(), m();
          } catch (d) {
            m(d);
          }
        }, w.default = z;
      }, 697: (F, w) => {
        Object.defineProperty(w, "__esModule", { value: !0 }), w.default = void 0, w.default = { EU: "eu", US: "us", AU: "au", AZURE_NA: "azure-na", AZURE_EU: "azure-eu", GCP_NA: "gcp-na", GCP_EU: "gcp-eu" };
      }, 925: (F, w, I) => {
        Object.defineProperty(w, "__esModule", { value: !0 }), w._type = function(r) {
          var n = a(r);
          return n === "object" && Array.isArray(r) && (n = "array"), n;
        }, w.generateHash = B, w.getHash = T, w.isBrowser = function() {
          return typeof window < "u";
        }, w.merge = i, w.mergeDeep = function(r, n) {
          var p = this, O = function(c, D) {
            for (var _ in D) p._type(D[_]) == "object" && p._type(c[_]) == p._type(D[_]) ? O(c[_], D[_]) : p._type(D[_]) == "array" && p._type(c[_]) == p._type(D[_]) ? c[_] = c[_].concat(D[_]) : c[_] = D[_];
          };
          return O(r, n), r;
        }, w.parseQueryFromParams = E, w.resultWrapper = $, w.sendRequest = function(r, n) {
          var p = r.environment_uid;
          p ? r._query.environment_uid = p : (r._query || (r._query = {}), r._query.environment = r.environment);
          var O = r, c = O.queryCachePolicy !== void 0 ? O.queryCachePolicy : O.cachePolicy, D = O.tojson !== void 0 && O.tojson, _ = !!(O.entry_uid || O.singleEntry || O.asset_uid), f = T(E(O, _, D));
          if (r && r.requestParams && r.requestParams.body && r.requestParams.body.query) {
            var s = JSON.parse(JSON.stringify(r.requestParams.body.query));
            a(s) !== "object" && (s = JSON.parse(s)), delete r.requestParams.body.query, r.requestParams.body = i(r.requestParams.body, s), r.live_preview && r.live_preview.enable === !0 && r.live_preview.live_preview && r.live_preview.live_preview !== "init" && (r.requestParams.body = i(r.requestParams.body, { live_preview: r.live_preview.live_preview || "init" }), c = 2, r.requestParams.body.environment && delete r.requestParams.body.environment, r.requestParams.headers.access_token && delete r.requestParams.headers.access_token, delete r.requestParams.headers.authorization, delete r.requestParams.headers.preview_token, r.live_preview.preview_token ? (r.requestParams.headers.preview_token = r.live_preview.preview_token, r.requestParams.headers.live_preview = r.live_preview.live_preview) : r.live_preview.management_token && (r.requestParams.headers.authorization = r.live_preview.management_token));
          }
          var v = function(H, K) {
            return function(U, L) {
              try {
                if (U) return K(U);
                D || (L = $(L)), H(A(L));
              } catch (Y) {
                K(Y);
              }
            };
          }, R = function(H, K, U) {
            (0, C.default)(r, n).then(function(L) {
              try {
                O.entry_uid = O.asset_uid = O.tojson = O.queryCachePolicy = void 0;
                var Y = {}, g = {};
                if (r.singleEntry) if (r.singleEntry = !1, L.schema && (Y.schema = L.schema), L.content_type && (Y.content_type = L.content_type, delete Y.schema), L.entries && L.entries.length) Y.entry = L.entries[0];
                else {
                  if (!L.assets || !L.assets.length) return c === 2 && O.provider !== null ? void O.provider.get(f, function(M, G) {
                    if (M || !G || G.entries.length === 0 && G.assets.length === 0) return U({ error_code: 141, error_message: "The requested entry doesn't exist." });
                    v(K, U)(M, G);
                  }) : U({ error_code: 141, error_message: "The requested entry doesn't exist." });
                  Y.assets = L.assets[0];
                }
                else L.items ? g = { items: L.items, pagination_token: L.pagination_token, sync_token: L.sync_token, total_count: L.total_count } : Y = L;
                return c !== -1 && O.provider !== null ? (O.provider.set(f, Y, function(M) {
                  try {
                    return M && U(M), D || (Y = $(Y)), K(A(Y));
                  } catch (G) {
                    return U(G);
                  }
                }), K(A(Y))) : Object.keys(g).length ? K(g) : (D || (Y = $(Y)), K(A(Y)));
              } catch (M) {
                return U({ message: M.message });
              }
            }).catch(function(L) {
              L ? U(L) : c === 2 && O.provider !== null && O.provider.get(f, v(K, U));
            });
          };
          switch (c) {
            case 1:
              return new Promise((function() {
                var H = t(N().m(function K(U, L) {
                  return N().w(function(Y) {
                    for (; ; ) switch (Y.n) {
                      case 0:
                        if (O.provider === null) {
                          Y.n = 2;
                          break;
                        }
                        return Y.n = 1, O.provider.get(f, (function() {
                          var g = t(N().m(function M(G, W) {
                            var X;
                            return N().w(function(V) {
                              for (; ; ) switch (V.p = V.n) {
                                case 0:
                                  if (V.p = 0, !G && W) {
                                    V.n = 1;
                                    break;
                                  }
                                  R(!0, U, L), V.n = 2;
                                  break;
                                case 1:
                                  return D || (W = $(W)), V.a(2, U(A(W)));
                                case 2:
                                  V.n = 4;
                                  break;
                                case 3:
                                  return V.p = 3, X = V.v, V.a(2, L(X));
                                case 4:
                                  return V.a(2);
                              }
                            }, M, null, [[0, 3]]);
                          }));
                          return function(M, G) {
                            return g.apply(this, arguments);
                          };
                        })());
                      case 1:
                        Y.n = 3;
                        break;
                      case 2:
                        R(!0, U, L);
                      case 3:
                        return Y.a(2);
                    }
                  }, K);
                }));
                return function(K, U) {
                  return H.apply(this, arguments);
                };
              })());
            case 2:
            case 0:
            case void 0:
            case -1:
              return new Promise(function(H, K) {
                R(!0, H, K);
              });
          }
          if (c === 3) return new Promise(function(H, K) {
            O.provider !== null && O.provider.get(f, function(U, L) {
              try {
                U || !L ? K(U) : (D || (L = $(L)), H(A(L)));
              } catch (Y) {
                K(Y);
              }
            });
          }).then(function() {
            return new Promise(function(H, K) {
              R(!0, H, K);
            });
          }).catch(function(H) {
            return new Promise(function(K, U) {
              R(!0, K, U);
            });
          });
        }, w.spreadResult = A, w.transform = function(r) {
          return function() {
            switch (this._query[r] = this._query[r] || {}, arguments.length) {
              case 1:
                if (Array.isArray(arguments[0]) || typeof arguments[0] == "string") {
                  var n = this._query[r].BASE || [];
                  return n = n.concat(arguments[0]), this._query[r].BASE = n, this;
                }
                console.error("Kindly provide valid parameters");
                break;
              case 2:
                if (typeof arguments[0] == "string" && (Array.isArray(arguments[1]) || typeof arguments[1] == "string")) {
                  var p = this._query[r][arguments[0]] || [];
                  return p = p.concat(arguments[1]), this._query[r][arguments[0]] = p, this;
                }
                console.error("Kindly provide valid parameters");
                break;
              default:
                console.error("Kindly provide valid parameters");
            }
          };
        };
        var C = z(I(185)), j = z(I(209));
        function z(r) {
          return r && r.__esModule ? r : { default: r };
        }
        function N() {
          var r, n, p = typeof Symbol == "function" ? Symbol : {}, O = p.iterator || "@@iterator", c = p.toStringTag || "@@toStringTag";
          function D(U, L, Y, g) {
            var M = L && L.prototype instanceof f ? L : f, G = Object.create(M.prototype);
            return m(G, "_invoke", (function(W, X, V) {
              var Q, e, o, u = 0, b = V || [], S = !1, P = { p: 0, n: 0, v: r, a: l, f: l.bind(r, 4), d: function(y, q) {
                return Q = y, e = 0, o = r, P.n = q, _;
              } };
              function l(y, q) {
                for (e = y, o = q, n = 0; !S && u && !h && n < b.length; n++) {
                  var h, k = b[n], x = P.p, J = k[2];
                  y > 3 ? (h = J === q) && (o = k[(e = k[4]) ? 5 : (e = 3, 3)], k[4] = k[5] = r) : k[0] <= x && ((h = y < 2 && x < k[1]) ? (e = 0, P.v = q, P.n = k[1]) : x < J && (h = y < 3 || k[0] > q || q > J) && (k[4] = y, k[5] = q, P.n = J, e = 0));
                }
                if (h || y > 1) return _;
                throw S = !0, q;
              }
              return function(y, q, h) {
                if (u > 1) throw TypeError("Generator is already running");
                for (S && q === 1 && l(q, h), e = q, o = h; (n = e < 2 ? r : o) || !S; ) {
                  Q || (e ? e < 3 ? (e > 1 && (P.n = -1), l(e, o)) : P.n = o : P.v = o);
                  try {
                    if (u = 2, Q) {
                      if (e || (y = "next"), n = Q[y]) {
                        if (!(n = n.call(Q, o))) throw TypeError("iterator result is not an object");
                        if (!n.done) return n;
                        o = n.value, e < 2 && (e = 0);
                      } else e === 1 && (n = Q.return) && n.call(Q), e < 2 && (o = TypeError("The iterator does not provide a '" + y + "' method"), e = 1);
                      Q = r;
                    } else if ((n = (S = P.n < 0) ? o : W.call(X, P)) !== _) break;
                  } catch (k) {
                    Q = r, e = 1, o = k;
                  } finally {
                    u = 1;
                  }
                }
                return { value: n, done: S };
              };
            })(U, Y, g), !0), G;
          }
          var _ = {};
          function f() {
          }
          function s() {
          }
          function v() {
          }
          n = Object.getPrototypeOf;
          var R = [][O] ? n(n([][O]())) : (m(n = {}, O, function() {
            return this;
          }), n), H = v.prototype = f.prototype = Object.create(R);
          function K(U) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(U, v) : (U.__proto__ = v, m(U, c, "GeneratorFunction")), U.prototype = Object.create(H), U;
          }
          return s.prototype = v, m(H, "constructor", v), m(v, "constructor", s), s.displayName = "GeneratorFunction", m(v, c, "GeneratorFunction"), m(H), m(H, c, "Generator"), m(H, O, function() {
            return this;
          }), m(H, "toString", function() {
            return "[object Generator]";
          }), (N = function() {
            return { w: D, m: K };
          })();
        }
        function m(r, n, p, O) {
          var c = Object.defineProperty;
          try {
            c({}, "", {});
          } catch {
            c = 0;
          }
          m = function(D, _, f, s) {
            if (_) c ? c(D, _, { value: f, enumerable: !s, configurable: !s, writable: !s }) : D[_] = f;
            else {
              var v = function(R, H) {
                m(D, R, function(K) {
                  return this._invoke(R, H, K);
                });
              };
              v("next", 0), v("throw", 1), v("return", 2);
            }
          }, m(r, n, p, O);
        }
        function d(r, n, p, O, c, D, _) {
          try {
            var f = r[D](_), s = f.value;
          } catch (v) {
            return void p(v);
          }
          f.done ? n(s) : Promise.resolve(s).then(O, c);
        }
        function t(r) {
          return function() {
            var n = this, p = arguments;
            return new Promise(function(O, c) {
              var D = r.apply(n, p);
              function _(s) {
                d(D, O, c, _, f, "next", s);
              }
              function f(s) {
                d(D, O, c, _, f, "throw", s);
              }
              _(void 0);
            });
          };
        }
        function a(r) {
          return a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
            return typeof n;
          } : function(n) {
            return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
          }, a(r);
        }
        function i(r, n) {
          if (r && n) for (var p in n) r[p] = n[p];
          return r;
        }
        function E(r, n, p) {
          if (r && r.requestParams) {
            var O = i({}, r.requestParams.body && r.requestParams.body.query || {});
            return O.environment_uid && (delete O.environment_uid, O.environment = r.environment), O.environment = r.environment, { content_type_uid: r.content_type_uid, locale: O.locale || "en-us", query: O, entry_uid: r.entry_uid, asset_uid: r.asset_uid, single: n || "false", toJSON: p || "false", api_key: r.requestParams.headers ? r.requestParams.headers.api_key : "" };
          }
        }
        function T(r) {
          try {
            var n = B(JSON.stringify(r)), p = [];
            return p.push(r.content_type_uid), p.push(r.locale), r.entry_uid && p.push(r.entry_uid), r.asset_uid && p.push(r.asset_uid), p.push(n), p.join(".");
          } catch {
          }
        }
        function B(r) {
          var n, p, O = 0;
          if (r.length === 0) return O;
          for (n = 0, p = r.length; n < p; n++) O = (O << 5) - O + r.charCodeAt(n), O |= 0;
          return O < -1 ? -1 * O : O;
        }
        function $(r) {
          if (r && r.entries !== void 0) if (r.entries && r.entries.length) for (var n = 0, p = r.entries.length; n < p; n++) r.entries[n] = (0, j.default)(r.entries[n]);
          else r.entries = [];
          else if (r && r.assets && r.assets !== void 0) if (r.assets && r.assets.length) for (var O = 0, c = r.assets.length; O < c; O++) r.assets[O] = (0, j.default)(r.assets[O]);
          else r.assets = [];
          else r && r.entry !== void 0 ? r.entry = (0, j.default)(r.entry) : r && r.asset !== void 0 ? r.asset = (0, j.default)(r.asset) : r && r.items !== void 0 && (r.items = (0, j.default)(r.items).toJSON());
          return r;
        }
        function A(r) {
          var n = [];
          return r && Object.keys(r).length && (r.entries !== void 0 && (n.push(r.entries), r.content_type && (n.schema = r.content_type)), r.assets !== void 0 && n.push(r.assets), r.content_type === void 0 && r.schema === void 0 || n.push(r.content_type || r.schema), r.count !== void 0 && n.push(r.count), r.entry !== void 0 && (n = r.entry, r.schema && (n.schema = r.schema), r.content_type && (n.content_type = r.content_type)), r.asset !== void 0 && (n = r.asset), r.items !== void 0 && n.push(r)), n;
        }
        Promise.prototype.spread || (Promise.prototype.spread = function(r, n) {
          return n = n || function(p) {
          }, this.then(function(p) {
            return r.apply(r, p);
          }).catch(function(p) {
            n(p);
          });
        });
      }, 949: (F, w, I) => {
        var C = N(I(348)), j = N(I(285)), z = N(I(697));
        function N(A) {
          return A && A.__esModule ? A : { default: A };
        }
        function m(A) {
          return m = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r;
          } : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
          }, m(A);
        }
        function d(A, r) {
          var n = typeof Symbol < "u" && A[Symbol.iterator] || A["@@iterator"];
          if (!n) {
            if (Array.isArray(A) || (n = (function(f, s) {
              if (f) {
                if (typeof f == "string") return t(f, s);
                var v = {}.toString.call(f).slice(8, -1);
                return v === "Object" && f.constructor && (v = f.constructor.name), v === "Map" || v === "Set" ? Array.from(f) : v === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v) ? t(f, s) : void 0;
              }
            })(A)) || r) {
              n && (A = n);
              var p = 0, O = function() {
              };
              return { s: O, n: function() {
                return p >= A.length ? { done: !0 } : { done: !1, value: A[p++] };
              }, e: function(f) {
                throw f;
              }, f: O };
            }
            throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          var c, D = !0, _ = !1;
          return { s: function() {
            n = n.call(A);
          }, n: function() {
            var f = n.next();
            return D = f.done, f;
          }, e: function(f) {
            _ = !0, c = f;
          }, f: function() {
            try {
              D || n.return == null || n.return();
            } finally {
              if (_) throw c;
            }
          } };
        }
        function t(A, r) {
          (r == null || r > A.length) && (r = A.length);
          for (var n = 0, p = Array(r); n < r; n++) p[n] = A[n];
          return p;
        }
        function a(A, r) {
          var n = Object.keys(A);
          if (Object.getOwnPropertySymbols) {
            var p = Object.getOwnPropertySymbols(A);
            r && (p = p.filter(function(O) {
              return Object.getOwnPropertyDescriptor(A, O).enumerable;
            })), n.push.apply(n, p);
          }
          return n;
        }
        function i(A, r, n) {
          return (r = B(r)) in A ? Object.defineProperty(A, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : A[r] = n, A;
        }
        function E() {
          try {
            var A = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            }));
          } catch {
          }
          return (E = function() {
            return !!A;
          })();
        }
        function T(A, r) {
          for (var n = 0; n < r.length; n++) {
            var p = r[n];
            p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(A, B(p.key), p);
          }
        }
        function B(A) {
          var r = (function(n) {
            if (m(n) != "object" || !n) return n;
            var p = n[Symbol.toPrimitive];
            if (p !== void 0) {
              var O = p.call(n, "string");
              if (m(O) != "object") return O;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(n);
          })(A);
          return m(r) == "symbol" ? r : r + "";
        }
        var $ = (function() {
          return A = function n() {
            (function(p, O) {
              if (!(p instanceof O)) throw new TypeError("Cannot call a class as a function");
            })(this, n), this.CachePolicy = j.default.policies, this.Region = z.default, this.Utils = I(215);
          }, r = [{ key: "Stack", value: function() {
            for (var n = arguments.length, p = new Array(n), O = 0; O < n; O++) p[O] = arguments[O];
            return (function(c, D, _) {
              if (E()) return Reflect.construct.apply(null, arguments);
              var f = [null];
              f.push.apply(f, D);
              var s = new (c.bind.apply(c, f))();
              return s;
            })(C.default, p);
          } }, { key: "updateAssetURL", value: function(n) {
            if (n._embedded_items == null) throw new Error("_embedded_items not present in entry. Call includeEmbeddedItems() before fetching entry.");
            var p = function(c) {
              var D = n._embedded_items[c];
              Array.isArray(D) && D.forEach(function(_) {
                if (_._content_type_uid == "sys_assets" && _.filename) {
                  var f, s, v = function(W) {
                    for (var X = 0; X < W.length; X++) if (W[X].children && W[X].children.length && v(W[X].children), W[X].attrs && W[X].attrs["asset-uid"] === _.uid) return void (f = W[X].attrs);
                  }, R = (function(W) {
                    for (var X = 1; X < arguments.length; X++) {
                      var V = arguments[X] != null ? arguments[X] : {};
                      X % 2 ? a(Object(V), !0).forEach(function(Q) {
                        i(W, Q, V[Q]);
                      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(W, Object.getOwnPropertyDescriptors(V)) : a(Object(V)).forEach(function(Q) {
                        Object.defineProperty(W, Q, Object.getOwnPropertyDescriptor(V, Q));
                      });
                    }
                    return W;
                  })({}, n), H = c.split("."), K = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), U = d(H);
                  try {
                    for (U.s(); !(s = U.n()).done; ) {
                      var L = s.value;
                      if (!K.has(L)) {
                        if (R && m(R) === "object" && R !== null && Object.prototype.hasOwnProperty.call(R, L)) {
                          var Y = R[L];
                          m(Y) === "object" && Y !== null && (R = Y);
                        } else if (Array.isArray(R)) {
                          var g, M = d(R);
                          try {
                            for (M.s(); !(g = M.n()).done; ) {
                              var G = g.value;
                              G && m(G) === "object" && Object.prototype.hasOwnProperty.call(G, L) && (R = G[L]);
                            }
                          } catch (W) {
                            M.e(W);
                          } finally {
                            M.f();
                          }
                        }
                      }
                    }
                  } catch (W) {
                    U.e(W);
                  } finally {
                    U.f();
                  }
                  R.children && v(R.children), f && (f.href = _.url);
                }
              });
            };
            for (var O in n._embedded_items) p(O);
          } }], r && T(A.prototype, r), Object.defineProperty(A, "prototype", { writable: !1 }), A;
          var A, r;
        })();
        F.exports = new $();
      } }, re = {};
      return (function F(w) {
        var I = re[w];
        if (I !== void 0) return I.exports;
        var C = re[w] = { exports: {} };
        return te[w](C, C.exports, F), C.exports;
      })(949);
    })());
  })(he)), he.exports;
}
var Ce = Re();
const xe = /* @__PURE__ */ Se(Ce), we = Pe({
  stack: null,
  loading: !0,
  error: null
}), De = () => je(we), Me = ({
  children: ee,
  apiKey: ie,
  deliveryToken: te,
  environment: re
}) => {
  const [F, w] = ue(null), [I, C] = ue(!0), [j, z] = ue(null);
  return Oe(() => {
    try {
      console.log("Initializing Contentstack stack with:", {
        apiKey: ie,
        deliveryToken: te,
        environment: re
      });
      const N = xe.Stack({
        api_key: ie,
        delivery_token: te,
        environment: re
        // no region for now – let SDK use default / host
      });
      w(N), C(!1);
    } catch (N) {
      console.error("Error initializing Contentstack stack", N), z(N), C(!1);
    }
  }, [ie, te, re]), /* @__PURE__ */ se.jsx(we.Provider, { value: { stack: F, loading: I, error: j }, children: ee });
};
function Ne({ contentTypeUid: ee, entryUid: ie }) {
  const { stack: te, loading: re, error: F } = De(), [w, I] = ue(null), [C, j] = ue(!0), [z, N] = ue(null);
  return Oe(() => {
    if (console.log("useHeroBanner effect:", {
      stackDefined: !!te,
      ctxLoading: re,
      ctxError: F,
      contentTypeUid: ee,
      entryUid: ie
    }), F) {
      N(F), j(!1);
      return;
    }
    re || (async () => {
      if (!te) {
        console.log("No Contentstack stack available, skipping fetch"), j(!1), N(new Error("Contentstack stack is not initialized"));
        return;
      }
      j(!0), N(null);
      try {
        console.log("Fetching from Contentstack...", { contentTypeUid: ee, entryUid: ie }), te.ContentType(ee).Entry(ie).toJSON().fetch().then((t) => {
          console.log("CS entry result:", t), I(t), j(!1);
        }).catch((t) => {
          console.error("CS fetch error:", t), N(t), j(!1);
        });
      } catch (d) {
        console.error("CS fetch exception:", d), N(d), j(!1);
      }
    })();
  }, [te, ee, ie, re, F]), {
    entry: w,
    loading: C,
    error: z
  };
}
function Ie(ee) {
  return ee ? {
    title: ee.title || "",
    subtitle: ee.subtitle || "",
    descriptionHtml: ee.description || "",
    // rich text HTML from CMS
    backgroundImageUrl: ee.background_image?.url || "",
    backgroundColor: ee.background_color || "#001f3f",
    textColor: "#ffffff",
    // you can add a field in CMS later if needed
    // no CTA fields in your JSON yet – keep undefined for now
    ctaLabel: void 0,
    ctaUrl: void 0
  } : {
    title: "",
    subtitle: "",
    descriptionHtml: "",
    backgroundImageUrl: "",
    backgroundColor: "#001f3f",
    textColor: "#ffffff",
    ctaLabel: "",
    ctaUrl: "#"
  };
}
const He = ({
  contentTypeUid: ee,
  entryUid: ie
}) => {
  const { entry: te, loading: re, error: F } = Ne({ contentTypeUid: ee, entryUid: ie });
  if (re)
    return /* @__PURE__ */ se.jsx("div", { children: "Loading hero..." });
  if (F)
    return console.error("Error loading hero banner", F), /* @__PURE__ */ se.jsx("div", { children: "Failed to load hero banner." });
  if (!te) return null;
  const w = Ie(te);
  return /* @__PURE__ */ se.jsx(
    "section",
    {
      style: {
        padding: "80px 60px",
        backgroundColor: w.backgroundColor || "#7d2dcd",
        color: w.textColor || "#ffffff"
      },
      children: /* @__PURE__ */ se.jsxs(
        "div",
        {
          style: {
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "40px"
          },
          children: [
            /* @__PURE__ */ se.jsxs("div", { style: { flex: 1, maxWidth: "60%" }, children: [
              /* @__PURE__ */ se.jsx(
                "h1",
                {
                  style: {
                    fontSize: "3rem",
                    lineHeight: 1.2,
                    marginBottom: "1rem",
                    fontWeight: 700
                  },
                  children: w.title
                }
              ),
              w.subtitle && /* @__PURE__ */ se.jsx(
                "p",
                {
                  style: {
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                    marginBottom: "2rem"
                  },
                  children: w.subtitle
                }
              ),
              w.descriptionHtml && /* @__PURE__ */ se.jsx(
                "div",
                {
                  style: { marginTop: 12 },
                  dangerouslySetInnerHTML: { __html: w.descriptionHtml }
                }
              )
            ] }),
            w.backgroundImageUrl && /* @__PURE__ */ se.jsx("div", { style: { flex: 1, textAlign: "right" }, children: /* @__PURE__ */ se.jsx(
              "img",
              {
                src: w.backgroundImageUrl,
                alt: w.title,
                style: {
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "8px"
                }
              }
            ) })
          ]
        }
      )
    }
  );
};
export {
  Me as PersonalizeProvider,
  He as PersonalizedHeroBanner,
  Ie as mapHeroBannerEntryToViewModel,
  Ne as useHeroBanner,
  De as usePersonalizeContext
};
