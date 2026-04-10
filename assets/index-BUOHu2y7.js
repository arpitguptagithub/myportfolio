let var_7fa13deb_e3ef_57ba_a3b2_d823f32c3fd4;
let __tla = (async () => {
  var Vd = (y, v) => () => (v || y((v = {
    exports: {}
  }).exports, v), v.exports);
  var op = Vd((cp, Fr) => {
    (function() {
      const v = document.createElement("link").relList;
      if (v && v.supports && v.supports("modulepreload")) return;
      for (const z of document.querySelectorAll('link[rel="modulepreload"]')) a(z);
      new MutationObserver((z) => {
        for (const C of z) if (C.type === "childList") for (const I of C.addedNodes) I.tagName === "LINK" && I.rel === "modulepreload" && a(I);
      }).observe(document, {
        childList: true,
        subtree: true
      });
      function h(z) {
        const C = {};
        return z.integrity && (C.integrity = z.integrity), z.referrerPolicy && (C.referrerPolicy = z.referrerPolicy), z.crossOrigin === "use-credentials" ? C.credentials = "include" : z.crossOrigin === "anonymous" ? C.credentials = "omit" : C.credentials = "same-origin", C;
      }
      function a(z) {
        if (z.ep) return;
        z.ep = true;
        const C = h(z);
        fetch(z.href, C);
      }
    })();
    function Qd(y) {
      return y && y.__esModule && Object.prototype.hasOwnProperty.call(y, "default") ? y.default : y;
    }
    var Bs = {
      exports: {}
    }, $r = {}, Us = {
      exports: {}
    }, ke = {};
    var Iu;
    function Yd() {
      if (Iu) return ke;
      Iu = 1;
      var y = Symbol.for("react.element"), v = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), I = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), Y = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), W = Symbol.iterator;
      function ae(u) {
        return u === null || typeof u != "object" ? null : (u = W && u[W] || u["@@iterator"], typeof u == "function" ? u : null);
      }
      var ue = {
        isMounted: function() {
          return false;
        },
        enqueueForceUpdate: function() {
        },
        enqueueReplaceState: function() {
        },
        enqueueSetState: function() {
        }
      }, G = Object.assign, q = {};
      function E(u, x, L) {
        this.props = u, this.context = x, this.refs = q, this.updater = L || ue;
      }
      E.prototype.isReactComponent = {}, E.prototype.setState = function(u, x) {
        if (typeof u != "object" && typeof u != "function" && u != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, u, x, "setState");
      }, E.prototype.forceUpdate = function(u) {
        this.updater.enqueueForceUpdate(this, u, "forceUpdate");
      };
      function ce() {
      }
      ce.prototype = E.prototype;
      function F(u, x, L) {
        this.props = u, this.context = x, this.refs = q, this.updater = L || ue;
      }
      var te = F.prototype = new ce();
      te.constructor = F, G(te, E.prototype), te.isPureReactComponent = true;
      var pe = Array.isArray, Me = Object.prototype.hasOwnProperty, Pe = {
        current: null
      }, Z = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      function he(u, x, L) {
        var $, U = {}, H = null, S = null;
        if (x != null) for ($ in x.ref !== void 0 && (S = x.ref), x.key !== void 0 && (H = "" + x.key), x) Me.call(x, $) && !Z.hasOwnProperty($) && (U[$] = x[$]);
        var P = arguments.length - 2;
        if (P === 1) U.children = L;
        else if (1 < P) {
          for (var N = Array(P), Q = 0; Q < P; Q++) N[Q] = arguments[Q + 2];
          U.children = N;
        }
        if (u && u.defaultProps) for ($ in P = u.defaultProps, P) U[$] === void 0 && (U[$] = P[$]);
        return {
          $$typeof: y,
          type: u,
          key: H,
          ref: S,
          props: U,
          _owner: Pe.current
        };
      }
      function rt(u, x) {
        return {
          $$typeof: y,
          type: u.type,
          key: x,
          ref: u.ref,
          props: u.props,
          _owner: u._owner
        };
      }
      function de(u) {
        return typeof u == "object" && u !== null && u.$$typeof === y;
      }
      function Ke(u) {
        var x = {
          "=": "=0",
          ":": "=2"
        };
        return "$" + u.replace(/[=:]/g, function(L) {
          return x[L];
        });
      }
      var Qe = /\/+/g;
      function be(u, x) {
        return typeof u == "object" && u !== null && u.key != null ? Ke("" + u.key) : x.toString(36);
      }
      function Ne(u, x, L, $, U) {
        var H = typeof u;
        (H === "undefined" || H === "boolean") && (u = null);
        var S = false;
        if (u === null) S = true;
        else switch (H) {
          case "string":
          case "number":
            S = true;
            break;
          case "object":
            switch (u.$$typeof) {
              case y:
              case v:
                S = true;
            }
        }
        if (S) return S = u, U = U(S), u = $ === "" ? "." + be(S, 0) : $, pe(U) ? (L = "", u != null && (L = u.replace(Qe, "$&/") + "/"), Ne(U, x, L, "", function(Q) {
          return Q;
        })) : U != null && (de(U) && (U = rt(U, L + (!U.key || S && S.key === U.key ? "" : ("" + U.key).replace(Qe, "$&/") + "/") + u)), x.push(U)), 1;
        if (S = 0, $ = $ === "" ? "." : $ + ":", pe(u)) for (var P = 0; P < u.length; P++) {
          H = u[P];
          var N = $ + be(H, P);
          S += Ne(H, x, L, N, U);
        }
        else if (N = ae(u), typeof N == "function") for (u = N.call(u), P = 0; !(H = u.next()).done; ) H = H.value, N = $ + be(H, P++), S += Ne(H, x, L, N, U);
        else if (H === "object") throw x = String(u), Error("Objects are not valid as a React child (found: " + (x === "[object Object]" ? "object with keys {" + Object.keys(u).join(", ") + "}" : x) + "). If you meant to render a collection of children, use an array instead.");
        return S;
      }
      function _e(u, x, L) {
        if (u == null) return u;
        var $ = [], U = 0;
        return Ne(u, $, "", "", function(H) {
          return x.call(L, H, U++);
        }), $;
      }
      function Se(u) {
        if (u._status === -1) {
          var x = u._result;
          x = x(), x.then(function(L) {
            (u._status === 0 || u._status === -1) && (u._status = 1, u._result = L);
          }, function(L) {
            (u._status === 0 || u._status === -1) && (u._status = 2, u._result = L);
          }), u._status === -1 && (u._status = 0, u._result = x);
        }
        if (u._status === 1) return u._result.default;
        throw u._result;
      }
      var ge = {
        current: null
      }, R = {
        transition: null
      }, ne = {
        ReactCurrentDispatcher: ge,
        ReactCurrentBatchConfig: R,
        ReactCurrentOwner: Pe
      };
      function p() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      return ke.Children = {
        map: _e,
        forEach: function(u, x, L) {
          _e(u, function() {
            x.apply(this, arguments);
          }, L);
        },
        count: function(u) {
          var x = 0;
          return _e(u, function() {
            x++;
          }), x;
        },
        toArray: function(u) {
          return _e(u, function(x) {
            return x;
          }) || [];
        },
        only: function(u) {
          if (!de(u)) throw Error("React.Children.only expected to receive a single React element child.");
          return u;
        }
      }, ke.Component = E, ke.Fragment = h, ke.Profiler = z, ke.PureComponent = F, ke.StrictMode = a, ke.Suspense = O, ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ne, ke.act = p, ke.cloneElement = function(u, x, L) {
        if (u == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + u + ".");
        var $ = G({}, u.props), U = u.key, H = u.ref, S = u._owner;
        if (x != null) {
          if (x.ref !== void 0 && (H = x.ref, S = Pe.current), x.key !== void 0 && (U = "" + x.key), u.type && u.type.defaultProps) var P = u.type.defaultProps;
          for (N in x) Me.call(x, N) && !Z.hasOwnProperty(N) && ($[N] = x[N] === void 0 && P !== void 0 ? P[N] : x[N]);
        }
        var N = arguments.length - 2;
        if (N === 1) $.children = L;
        else if (1 < N) {
          P = Array(N);
          for (var Q = 0; Q < N; Q++) P[Q] = arguments[Q + 2];
          $.children = P;
        }
        return {
          $$typeof: y,
          type: u.type,
          key: U,
          ref: H,
          props: $,
          _owner: S
        };
      }, ke.createContext = function(u) {
        return u = {
          $$typeof: I,
          _currentValue: u,
          _currentValue2: u,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        }, u.Provider = {
          $$typeof: C,
          _context: u
        }, u.Consumer = u;
      }, ke.createElement = he, ke.createFactory = function(u) {
        var x = he.bind(null, u);
        return x.type = u, x;
      }, ke.createRef = function() {
        return {
          current: null
        };
      }, ke.forwardRef = function(u) {
        return {
          $$typeof: M,
          render: u
        };
      }, ke.isValidElement = de, ke.lazy = function(u) {
        return {
          $$typeof: D,
          _payload: {
            _status: -1,
            _result: u
          },
          _init: Se
        };
      }, ke.memo = function(u, x) {
        return {
          $$typeof: Y,
          type: u,
          compare: x === void 0 ? null : x
        };
      }, ke.startTransition = function(u) {
        var x = R.transition;
        R.transition = {};
        try {
          u();
        } finally {
          R.transition = x;
        }
      }, ke.unstable_act = p, ke.useCallback = function(u, x) {
        return ge.current.useCallback(u, x);
      }, ke.useContext = function(u) {
        return ge.current.useContext(u);
      }, ke.useDebugValue = function() {
      }, ke.useDeferredValue = function(u) {
        return ge.current.useDeferredValue(u);
      }, ke.useEffect = function(u, x) {
        return ge.current.useEffect(u, x);
      }, ke.useId = function() {
        return ge.current.useId();
      }, ke.useImperativeHandle = function(u, x, L) {
        return ge.current.useImperativeHandle(u, x, L);
      }, ke.useInsertionEffect = function(u, x) {
        return ge.current.useInsertionEffect(u, x);
      }, ke.useLayoutEffect = function(u, x) {
        return ge.current.useLayoutEffect(u, x);
      }, ke.useMemo = function(u, x) {
        return ge.current.useMemo(u, x);
      }, ke.useReducer = function(u, x, L) {
        return ge.current.useReducer(u, x, L);
      }, ke.useRef = function(u) {
        return ge.current.useRef(u);
      }, ke.useState = function(u) {
        return ge.current.useState(u);
      }, ke.useSyncExternalStore = function(u, x, L) {
        return ge.current.useSyncExternalStore(u, x, L);
      }, ke.useTransition = function() {
        return ge.current.useTransition();
      }, ke.version = "18.3.1", ke;
    }
    var Lu;
    function Ys() {
      return Lu || (Lu = 1, Us.exports = Yd()), Us.exports;
    }
    var zu;
    function Gd() {
      if (zu) return $r;
      zu = 1;
      var y = Ys(), v = Symbol.for("react.element"), h = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, z = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      function I(M, O, Y) {
        var D, W = {}, ae = null, ue = null;
        Y !== void 0 && (ae = "" + Y), O.key !== void 0 && (ae = "" + O.key), O.ref !== void 0 && (ue = O.ref);
        for (D in O) a.call(O, D) && !C.hasOwnProperty(D) && (W[D] = O[D]);
        if (M && M.defaultProps) for (D in O = M.defaultProps, O) W[D] === void 0 && (W[D] = O[D]);
        return {
          $$typeof: v,
          type: M,
          key: ae,
          ref: ue,
          props: W,
          _owner: z.current
        };
      }
      return $r.Fragment = h, $r.jsx = I, $r.jsxs = I, $r;
    }
    var Au;
    function Kd() {
      return Au || (Au = 1, Bs.exports = Gd()), Bs.exports;
    }
    var s = Kd(), B = Ys();
    const Xd = Qd(B);
    var Xl = {}, Ws = {
      exports: {}
    }, xt = {}, Hs = {
      exports: {}
    }, Vs = {};
    var Du;
    function qd() {
      return Du || (Du = 1, function(y) {
        function v(R, ne) {
          var p = R.length;
          R.push(ne);
          e: for (; 0 < p; ) {
            var u = p - 1 >>> 1, x = R[u];
            if (0 < z(x, ne)) R[u] = ne, R[p] = x, p = u;
            else break e;
          }
        }
        function h(R) {
          return R.length === 0 ? null : R[0];
        }
        function a(R) {
          if (R.length === 0) return null;
          var ne = R[0], p = R.pop();
          if (p !== ne) {
            R[0] = p;
            e: for (var u = 0, x = R.length, L = x >>> 1; u < L; ) {
              var $ = 2 * (u + 1) - 1, U = R[$], H = $ + 1, S = R[H];
              if (0 > z(U, p)) H < x && 0 > z(S, U) ? (R[u] = S, R[H] = p, u = H) : (R[u] = U, R[$] = p, u = $);
              else if (H < x && 0 > z(S, p)) R[u] = S, R[H] = p, u = H;
              else break e;
            }
          }
          return ne;
        }
        function z(R, ne) {
          var p = R.sortIndex - ne.sortIndex;
          return p !== 0 ? p : R.id - ne.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var C = performance;
          y.unstable_now = function() {
            return C.now();
          };
        } else {
          var I = Date, M = I.now();
          y.unstable_now = function() {
            return I.now() - M;
          };
        }
        var O = [], Y = [], D = 1, W = null, ae = 3, ue = false, G = false, q = false, E = typeof setTimeout == "function" ? setTimeout : null, ce = typeof clearTimeout == "function" ? clearTimeout : null, F = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function te(R) {
          for (var ne = h(Y); ne !== null; ) {
            if (ne.callback === null) a(Y);
            else if (ne.startTime <= R) a(Y), ne.sortIndex = ne.expirationTime, v(O, ne);
            else break;
            ne = h(Y);
          }
        }
        function pe(R) {
          if (q = false, te(R), !G) if (h(O) !== null) G = true, Se(Me);
          else {
            var ne = h(Y);
            ne !== null && ge(pe, ne.startTime - R);
          }
        }
        function Me(R, ne) {
          G = false, q && (q = false, ce(he), he = -1), ue = true;
          var p = ae;
          try {
            for (te(ne), W = h(O); W !== null && (!(W.expirationTime > ne) || R && !Ke()); ) {
              var u = W.callback;
              if (typeof u == "function") {
                W.callback = null, ae = W.priorityLevel;
                var x = u(W.expirationTime <= ne);
                ne = y.unstable_now(), typeof x == "function" ? W.callback = x : W === h(O) && a(O), te(ne);
              } else a(O);
              W = h(O);
            }
            if (W !== null) var L = true;
            else {
              var $ = h(Y);
              $ !== null && ge(pe, $.startTime - ne), L = false;
            }
            return L;
          } finally {
            W = null, ae = p, ue = false;
          }
        }
        var Pe = false, Z = null, he = -1, rt = 5, de = -1;
        function Ke() {
          return !(y.unstable_now() - de < rt);
        }
        function Qe() {
          if (Z !== null) {
            var R = y.unstable_now();
            de = R;
            var ne = true;
            try {
              ne = Z(true, R);
            } finally {
              ne ? be() : (Pe = false, Z = null);
            }
          } else Pe = false;
        }
        var be;
        if (typeof F == "function") be = function() {
          F(Qe);
        };
        else if (typeof MessageChannel < "u") {
          var Ne = new MessageChannel(), _e = Ne.port2;
          Ne.port1.onmessage = Qe, be = function() {
            _e.postMessage(null);
          };
        } else be = function() {
          E(Qe, 0);
        };
        function Se(R) {
          Z = R, Pe || (Pe = true, be());
        }
        function ge(R, ne) {
          he = E(function() {
            R(y.unstable_now());
          }, ne);
        }
        y.unstable_IdlePriority = 5, y.unstable_ImmediatePriority = 1, y.unstable_LowPriority = 4, y.unstable_NormalPriority = 3, y.unstable_Profiling = null, y.unstable_UserBlockingPriority = 2, y.unstable_cancelCallback = function(R) {
          R.callback = null;
        }, y.unstable_continueExecution = function() {
          G || ue || (G = true, Se(Me));
        }, y.unstable_forceFrameRate = function(R) {
          0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : rt = 0 < R ? Math.floor(1e3 / R) : 5;
        }, y.unstable_getCurrentPriorityLevel = function() {
          return ae;
        }, y.unstable_getFirstCallbackNode = function() {
          return h(O);
        }, y.unstable_next = function(R) {
          switch (ae) {
            case 1:
            case 2:
            case 3:
              var ne = 3;
              break;
            default:
              ne = ae;
          }
          var p = ae;
          ae = ne;
          try {
            return R();
          } finally {
            ae = p;
          }
        }, y.unstable_pauseExecution = function() {
        }, y.unstable_requestPaint = function() {
        }, y.unstable_runWithPriority = function(R, ne) {
          switch (R) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              R = 3;
          }
          var p = ae;
          ae = R;
          try {
            return ne();
          } finally {
            ae = p;
          }
        }, y.unstable_scheduleCallback = function(R, ne, p) {
          var u = y.unstable_now();
          switch (typeof p == "object" && p !== null ? (p = p.delay, p = typeof p == "number" && 0 < p ? u + p : u) : p = u, R) {
            case 1:
              var x = -1;
              break;
            case 2:
              x = 250;
              break;
            case 5:
              x = 1073741823;
              break;
            case 4:
              x = 1e4;
              break;
            default:
              x = 5e3;
          }
          return x = p + x, R = {
            id: D++,
            callback: ne,
            priorityLevel: R,
            startTime: p,
            expirationTime: x,
            sortIndex: -1
          }, p > u ? (R.sortIndex = p, v(Y, R), h(O) === null && R === h(Y) && (q ? (ce(he), he = -1) : q = true, ge(pe, p - u))) : (R.sortIndex = x, v(O, R), G || ue || (G = true, Se(Me))), R;
        }, y.unstable_shouldYield = Ke, y.unstable_wrapCallback = function(R) {
          var ne = ae;
          return function() {
            var p = ae;
            ae = ne;
            try {
              return R.apply(this, arguments);
            } finally {
              ae = p;
            }
          };
        };
      }(Vs)), Vs;
    }
    var Ou;
    function Zd() {
      return Ou || (Ou = 1, Hs.exports = qd()), Hs.exports;
    }
    var $u;
    function Jd() {
      if ($u) return xt;
      $u = 1;
      var y = Ys(), v = Zd();
      function h(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var a = /* @__PURE__ */ new Set(), z = {};
      function C(e, t) {
        I(e, t), I(e + "Capture", t);
      }
      function I(e, t) {
        for (z[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
      }
      var M = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), O = Object.prototype.hasOwnProperty, Y = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, D = {}, W = {};
      function ae(e) {
        return O.call(W, e) ? true : O.call(D, e) ? false : Y.test(e) ? W[e] = true : (D[e] = true, false);
      }
      function ue(e, t, n, r) {
        if (n !== null && n.type === 0) return false;
        switch (typeof t) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            return r ? false : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
          default:
            return false;
        }
      }
      function G(e, t, n, r) {
        if (t === null || typeof t > "u" || ue(e, t, n, r)) return true;
        if (r) return false;
        if (n !== null) switch (n.type) {
          case 3:
            return !t;
          case 4:
            return t === false;
          case 5:
            return isNaN(t);
          case 6:
            return isNaN(t) || 1 > t;
        }
        return false;
      }
      function q(e, t, n, r, l, i, o) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
      }
      var E = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        E[e] = new q(e, 0, false, e, null, false, false);
      }), [
        [
          "acceptCharset",
          "accept-charset"
        ],
        [
          "className",
          "class"
        ],
        [
          "htmlFor",
          "for"
        ],
        [
          "httpEquiv",
          "http-equiv"
        ]
      ].forEach(function(e) {
        var t = e[0];
        E[t] = new q(t, 1, false, e[1], null, false, false);
      }), [
        "contentEditable",
        "draggable",
        "spellCheck",
        "value"
      ].forEach(function(e) {
        E[e] = new q(e, 2, false, e.toLowerCase(), null, false, false);
      }), [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
      ].forEach(function(e) {
        E[e] = new q(e, 2, false, e, null, false, false);
      }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        E[e] = new q(e, 3, false, e.toLowerCase(), null, false, false);
      }), [
        "checked",
        "multiple",
        "muted",
        "selected"
      ].forEach(function(e) {
        E[e] = new q(e, 3, true, e, null, false, false);
      }), [
        "capture",
        "download"
      ].forEach(function(e) {
        E[e] = new q(e, 4, false, e, null, false, false);
      }), [
        "cols",
        "rows",
        "size",
        "span"
      ].forEach(function(e) {
        E[e] = new q(e, 6, false, e, null, false, false);
      }), [
        "rowSpan",
        "start"
      ].forEach(function(e) {
        E[e] = new q(e, 5, false, e.toLowerCase(), null, false, false);
      });
      var ce = /[\-:]([a-z])/g;
      function F(e) {
        return e[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(ce, F);
        E[t] = new q(t, 1, false, e, null, false, false);
      }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(ce, F);
        E[t] = new q(t, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
      }), [
        "xml:base",
        "xml:lang",
        "xml:space"
      ].forEach(function(e) {
        var t = e.replace(ce, F);
        E[t] = new q(t, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
      }), [
        "tabIndex",
        "crossOrigin"
      ].forEach(function(e) {
        E[e] = new q(e, 1, false, e.toLowerCase(), null, false, false);
      }), E.xlinkHref = new q("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false), [
        "src",
        "href",
        "action",
        "formAction"
      ].forEach(function(e) {
        E[e] = new q(e, 1, false, e.toLowerCase(), null, true, true);
      });
      function te(e, t, n, r) {
        var l = E.hasOwnProperty(t) ? E[t] : null;
        (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (G(t, n, l, r) && (n = null), r || l === null ? ae(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? false : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === true ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
      }
      var pe = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Me = Symbol.for("react.element"), Pe = Symbol.for("react.portal"), Z = Symbol.for("react.fragment"), he = Symbol.for("react.strict_mode"), rt = Symbol.for("react.profiler"), de = Symbol.for("react.provider"), Ke = Symbol.for("react.context"), Qe = Symbol.for("react.forward_ref"), be = Symbol.for("react.suspense"), Ne = Symbol.for("react.suspense_list"), _e = Symbol.for("react.memo"), Se = Symbol.for("react.lazy"), ge = Symbol.for("react.offscreen"), R = Symbol.iterator;
      function ne(e) {
        return e === null || typeof e != "object" ? null : (e = R && e[R] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      var p = Object.assign, u;
      function x(e) {
        if (u === void 0) try {
          throw Error();
        } catch (n) {
          var t = n.stack.trim().match(/\n( *(at )?)/);
          u = t && t[1] || "";
        }
        return `
` + u + e;
      }
      var L = false;
      function $(e, t) {
        if (!e || L) return "";
        L = true;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (t) if (t = function() {
            throw Error();
          }, Object.defineProperty(t.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(t, []);
            } catch (k) {
              var r = k;
            }
            Reflect.construct(e, [], t);
          } else {
            try {
              t.call();
            } catch (k) {
              r = k;
            }
            e.call(t.prototype);
          }
          else {
            try {
              throw Error();
            } catch (k) {
              r = k;
            }
            e();
          }
        } catch (k) {
          if (k && r && typeof k.stack == "string") {
            for (var l = k.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, c = i.length - 1; 1 <= o && 0 <= c && l[o] !== i[c]; ) c--;
            for (; 1 <= o && 0 <= c; o--, c--) if (l[o] !== i[c]) {
              if (o !== 1 || c !== 1) do
                if (o--, c--, 0 > c || l[o] !== i[c]) {
                  var f = `
` + l[o].replace(" at new ", " at ");
                  return e.displayName && f.includes("<anonymous>") && (f = f.replace("<anonymous>", e.displayName)), f;
                }
              while (1 <= o && 0 <= c);
              break;
            }
          }
        } finally {
          L = false, Error.prepareStackTrace = n;
        }
        return (e = e ? e.displayName || e.name : "") ? x(e) : "";
      }
      function U(e) {
        switch (e.tag) {
          case 5:
            return x(e.type);
          case 16:
            return x("Lazy");
          case 13:
            return x("Suspense");
          case 19:
            return x("SuspenseList");
          case 0:
          case 2:
          case 15:
            return e = $(e.type, false), e;
          case 11:
            return e = $(e.type.render, false), e;
          case 1:
            return e = $(e.type, true), e;
          default:
            return "";
        }
      }
      function H(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case Z:
            return "Fragment";
          case Pe:
            return "Portal";
          case rt:
            return "Profiler";
          case he:
            return "StrictMode";
          case be:
            return "Suspense";
          case Ne:
            return "SuspenseList";
        }
        if (typeof e == "object") switch (e.$$typeof) {
          case Ke:
            return (e.displayName || "Context") + ".Consumer";
          case de:
            return (e._context.displayName || "Context") + ".Provider";
          case Qe:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case _e:
            return t = e.displayName || null, t !== null ? t : H(e.type) || "Memo";
          case Se:
            t = e._payload, e = e._init;
            try {
              return H(e(t));
            } catch {
            }
        }
        return null;
      }
      function S(e) {
        var t = e.type;
        switch (e.tag) {
          case 24:
            return "Cache";
          case 9:
            return (t.displayName || "Context") + ".Consumer";
          case 10:
            return (t._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return t;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return H(t);
          case 8:
            return t === he ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
        }
        return null;
      }
      function P(e) {
        switch (typeof e) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return e;
          case "object":
            return e;
          default:
            return "";
        }
      }
      function N(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
      }
      function Q(e) {
        var t = N(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
          var l = n.get, i = n.set;
          return Object.defineProperty(e, t, {
            configurable: true,
            get: function() {
              return l.call(this);
            },
            set: function(o) {
              r = "" + o, i.call(this, o);
            }
          }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
          }), {
            getValue: function() {
              return r;
            },
            setValue: function(o) {
              r = "" + o;
            },
            stopTracking: function() {
              e._valueTracker = null, delete e[t];
            }
          };
        }
      }
      function se(e) {
        e._valueTracker || (e._valueTracker = Q(e));
      }
      function oe(e) {
        if (!e) return false;
        var t = e._valueTracker;
        if (!t) return true;
        var n = t.getValue(), r = "";
        return e && (r = N(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), true) : false;
      }
      function me(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
          return e.activeElement || e.body;
        } catch {
          return e.body;
        }
      }
      function re(e, t) {
        var n = t.checked;
        return p({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: n ?? e._wrapperState.initialChecked
        });
      }
      function ve(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
        n = P(t.value != null ? t.value : n), e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        };
      }
      function Le(e, t) {
        t = t.checked, t != null && te(e, "checked", t, false);
      }
      function xe(e, t) {
        Le(e, t);
        var n = P(t.value), r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
          e.removeAttribute("value");
          return;
        }
        t.hasOwnProperty("value") ? dt(e, t.type, n) : t.hasOwnProperty("defaultValue") && dt(e, t.type, P(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
      }
      function Ae(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
          var r = t.type;
          if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
          t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
      }
      function dt(e, t, n) {
        (t !== "number" || me(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
      }
      var j = Array.isArray;
      function d(e, t, n, r) {
        if (e = e.options, t) {
          t = {};
          for (var l = 0; l < n.length; l++) t["$" + n[l]] = true;
          for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = true);
        } else {
          for (n = "" + P(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
              e[l].selected = true, r && (e[l].defaultSelected = true);
              return;
            }
            t !== null || e[l].disabled || (t = e[l]);
          }
          t !== null && (t.selected = true);
        }
      }
      function ye(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(h(91));
        return p({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue
        });
      }
      function Te(e, t) {
        var n = t.value;
        if (n == null) {
          if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(h(92));
            if (j(n)) {
              if (1 < n.length) throw Error(h(93));
              n = n[0];
            }
            t = n;
          }
          t == null && (t = ""), n = t;
        }
        e._wrapperState = {
          initialValue: P(n)
        };
      }
      function De(e, t) {
        var n = P(t.value), r = P(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
      }
      function Ce(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
      }
      function we(e) {
        switch (e) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function Re(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? we(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
      }
      var Ye, wt = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l);
          });
        } : e;
      }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
          for (Ye = Ye || document.createElement("div"), Ye.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ye.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      });
      function Je(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
          }
        }
        e.textContent = t;
      }
      var Tt = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      }, nr = [
        "Webkit",
        "ms",
        "Moz",
        "O"
      ];
      Object.keys(Tt).forEach(function(e) {
        nr.forEach(function(t) {
          t = t + e.charAt(0).toUpperCase() + e.substring(1), Tt[t] = Tt[e];
        });
      });
      function Ur(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Tt.hasOwnProperty(e) && Tt[e] ? ("" + t).trim() : t + "px";
      }
      function Gs(e, t) {
        e = e.style;
        for (var n in t) if (t.hasOwnProperty(n)) {
          var r = n.indexOf("--") === 0, l = Ur(n, t[n], r);
          n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
        }
      }
      var qu = p({
        menuitem: true
      }, {
        area: true,
        base: true,
        br: true,
        col: true,
        embed: true,
        hr: true,
        img: true,
        input: true,
        keygen: true,
        link: true,
        meta: true,
        param: true,
        source: true,
        track: true,
        wbr: true
      });
      function Jl(e, t) {
        if (t) {
          if (qu[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(h(137, e));
          if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(h(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(h(61));
          }
          if (t.style != null && typeof t.style != "object") throw Error(h(62));
        }
      }
      function ei(e, t) {
        if (e.indexOf("-") === -1) return typeof t.is == "string";
        switch (e) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var ti = null;
      function ni(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
      }
      var ri = null, Tn = null, Rn = null;
      function Ks(e) {
        if (e = Cr(e)) {
          if (typeof ri != "function") throw Error(h(280));
          var t = e.stateNode;
          t && (t = dl(t), ri(e.stateNode, e.type, t));
        }
      }
      function Xs(e) {
        Tn ? Rn ? Rn.push(e) : Rn = [
          e
        ] : Tn = e;
      }
      function qs() {
        if (Tn) {
          var e = Tn, t = Rn;
          if (Rn = Tn = null, Ks(e), t) for (e = 0; e < t.length; e++) Ks(t[e]);
        }
      }
      function Zs(e, t) {
        return e(t);
      }
      function Js() {
      }
      var li = false;
      function ea(e, t, n) {
        if (li) return e(t, n);
        li = true;
        try {
          return Zs(e, t, n);
        } finally {
          li = false, (Tn !== null || Rn !== null) && (Js(), qs());
        }
      }
      function rr(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = dl(n);
        if (r === null) return null;
        n = r[t];
        e: switch (t) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
          default:
            e = false;
        }
        if (e) return null;
        if (n && typeof n != "function") throw Error(h(231, t, typeof n));
        return n;
      }
      var ii = false;
      if (M) try {
        var lr = {};
        Object.defineProperty(lr, "passive", {
          get: function() {
            ii = true;
          }
        }), window.addEventListener("test", lr, lr), window.removeEventListener("test", lr, lr);
      } catch {
        ii = false;
      }
      function Zu(e, t, n, r, l, i, o, c, f) {
        var k = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, k);
        } catch (_) {
          this.onError(_);
        }
      }
      var ir = false, Wr = null, Hr = false, si = null, Ju = {
        onError: function(e) {
          ir = true, Wr = e;
        }
      };
      function ec(e, t, n, r, l, i, o, c, f) {
        ir = false, Wr = null, Zu.apply(Ju, arguments);
      }
      function tc(e, t, n, r, l, i, o, c, f) {
        if (ec.apply(this, arguments), ir) {
          if (ir) {
            var k = Wr;
            ir = false, Wr = null;
          } else throw Error(h(198));
          Hr || (Hr = true, si = k);
        }
      }
      function yn(e) {
        var t = e, n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do
            t = e, t.flags & 4098 && (n = t.return), e = t.return;
          while (e);
        }
        return t.tag === 3 ? n : null;
      }
      function ta(e) {
        if (e.tag === 13) {
          var t = e.memoizedState;
          if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
        }
        return null;
      }
      function na(e) {
        if (yn(e) !== e) throw Error(h(188));
      }
      function nc(e) {
        var t = e.alternate;
        if (!t) {
          if (t = yn(e), t === null) throw Error(h(188));
          return t !== e ? null : e;
        }
        for (var n = e, r = t; ; ) {
          var l = n.return;
          if (l === null) break;
          var i = l.alternate;
          if (i === null) {
            if (r = l.return, r !== null) {
              n = r;
              continue;
            }
            break;
          }
          if (l.child === i.child) {
            for (i = l.child; i; ) {
              if (i === n) return na(l), e;
              if (i === r) return na(l), t;
              i = i.sibling;
            }
            throw Error(h(188));
          }
          if (n.return !== r.return) n = l, r = i;
          else {
            for (var o = false, c = l.child; c; ) {
              if (c === n) {
                o = true, n = l, r = i;
                break;
              }
              if (c === r) {
                o = true, r = l, n = i;
                break;
              }
              c = c.sibling;
            }
            if (!o) {
              for (c = i.child; c; ) {
                if (c === n) {
                  o = true, n = i, r = l;
                  break;
                }
                if (c === r) {
                  o = true, r = i, n = l;
                  break;
                }
                c = c.sibling;
              }
              if (!o) throw Error(h(189));
            }
          }
          if (n.alternate !== r) throw Error(h(190));
        }
        if (n.tag !== 3) throw Error(h(188));
        return n.stateNode.current === n ? e : t;
      }
      function ra(e) {
        return e = nc(e), e !== null ? la(e) : null;
      }
      function la(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null; ) {
          var t = la(e);
          if (t !== null) return t;
          e = e.sibling;
        }
        return null;
      }
      var ia = v.unstable_scheduleCallback, sa = v.unstable_cancelCallback, rc = v.unstable_shouldYield, lc = v.unstable_requestPaint, He = v.unstable_now, ic = v.unstable_getCurrentPriorityLevel, ai = v.unstable_ImmediatePriority, aa = v.unstable_UserBlockingPriority, Vr = v.unstable_NormalPriority, sc = v.unstable_LowPriority, oa = v.unstable_IdlePriority, Qr = null, $t = null;
      function ac(e) {
        if ($t && typeof $t.onCommitFiberRoot == "function") try {
          $t.onCommitFiberRoot(Qr, e, void 0, (e.current.flags & 128) === 128);
        } catch {
        }
      }
      var Rt = Math.clz32 ? Math.clz32 : cc, oc = Math.log, uc = Math.LN2;
      function cc(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (oc(e) / uc | 0) | 0;
      }
      var Yr = 64, Gr = 4194304;
      function sr(e) {
        switch (e & -e) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return e & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return e & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return e;
        }
      }
      function Kr(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
        if (o !== 0) {
          var c = o & ~l;
          c !== 0 ? r = sr(c) : (i &= o, i !== 0 && (r = sr(i)));
        } else o = n & ~l, o !== 0 ? r = sr(o) : i !== 0 && (r = sr(i));
        if (r === 0) return 0;
        if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
        if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Rt(t), l = 1 << n, r |= e[n], t &= ~l;
        return r;
      }
      function dc(e, t) {
        switch (e) {
          case 1:
          case 2:
          case 4:
            return t + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return t + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function fc(e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
          var o = 31 - Rt(i), c = 1 << o, f = l[o];
          f === -1 ? (!(c & n) || c & r) && (l[o] = dc(c, t)) : f <= t && (e.expiredLanes |= c), i &= ~c;
        }
      }
      function oi(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
      }
      function ua() {
        var e = Yr;
        return Yr <<= 1, !(Yr & 4194240) && (Yr = 64), e;
      }
      function ui(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
      }
      function ar(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Rt(t), e[t] = n;
      }
      function pc(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for (e = e.expirationTimes; 0 < n; ) {
          var l = 31 - Rt(n), i = 1 << l;
          t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
        }
      }
      function ci(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n; ) {
          var r = 31 - Rt(n), l = 1 << r;
          l & t | e[r] & t && (e[r] |= t), n &= ~l;
        }
      }
      var Ie = 0;
      function ca(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
      }
      var da, di, fa, pa, ha, fi = false, Xr = [], Zt = null, Jt = null, en = null, or = /* @__PURE__ */ new Map(), ur = /* @__PURE__ */ new Map(), tn = [], hc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function ma(e, t) {
        switch (e) {
          case "focusin":
          case "focusout":
            Zt = null;
            break;
          case "dragenter":
          case "dragleave":
            Jt = null;
            break;
          case "mouseover":
          case "mouseout":
            en = null;
            break;
          case "pointerover":
          case "pointerout":
            or.delete(t.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            ur.delete(t.pointerId);
        }
      }
      function cr(e, t, n, r, l, i) {
        return e === null || e.nativeEvent !== i ? (e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [
            l
          ]
        }, t !== null && (t = Cr(t), t !== null && di(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
      }
      function mc(e, t, n, r, l) {
        switch (t) {
          case "focusin":
            return Zt = cr(Zt, e, t, n, r, l), true;
          case "dragenter":
            return Jt = cr(Jt, e, t, n, r, l), true;
          case "mouseover":
            return en = cr(en, e, t, n, r, l), true;
          case "pointerover":
            var i = l.pointerId;
            return or.set(i, cr(or.get(i) || null, e, t, n, r, l)), true;
          case "gotpointercapture":
            return i = l.pointerId, ur.set(i, cr(ur.get(i) || null, e, t, n, r, l)), true;
        }
        return false;
      }
      function ga(e) {
        var t = xn(e.target);
        if (t !== null) {
          var n = yn(t);
          if (n !== null) {
            if (t = n.tag, t === 13) {
              if (t = ta(n), t !== null) {
                e.blockedOn = t, ha(e.priority, function() {
                  fa(n);
                });
                return;
              }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
              e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
              return;
            }
          }
        }
        e.blockedOn = null;
      }
      function qr(e) {
        if (e.blockedOn !== null) return false;
        for (var t = e.targetContainers; 0 < t.length; ) {
          var n = hi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            ti = r, n.target.dispatchEvent(r), ti = null;
          } else return t = Cr(n), t !== null && di(t), e.blockedOn = n, false;
          t.shift();
        }
        return true;
      }
      function va(e, t, n) {
        qr(e) && n.delete(t);
      }
      function gc() {
        fi = false, Zt !== null && qr(Zt) && (Zt = null), Jt !== null && qr(Jt) && (Jt = null), en !== null && qr(en) && (en = null), or.forEach(va), ur.forEach(va);
      }
      function dr(e, t) {
        e.blockedOn === t && (e.blockedOn = null, fi || (fi = true, v.unstable_scheduleCallback(v.unstable_NormalPriority, gc)));
      }
      function fr(e) {
        function t(l) {
          return dr(l, e);
        }
        if (0 < Xr.length) {
          dr(Xr[0], e);
          for (var n = 1; n < Xr.length; n++) {
            var r = Xr[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
        }
        for (Zt !== null && dr(Zt, e), Jt !== null && dr(Jt, e), en !== null && dr(en, e), or.forEach(t), ur.forEach(t), n = 0; n < tn.length; n++) r = tn[n], r.blockedOn === e && (r.blockedOn = null);
        for (; 0 < tn.length && (n = tn[0], n.blockedOn === null); ) ga(n), n.blockedOn === null && tn.shift();
      }
      var In = pe.ReactCurrentBatchConfig, Zr = true;
      function vc(e, t, n, r) {
        var l = Ie, i = In.transition;
        In.transition = null;
        try {
          Ie = 1, pi(e, t, n, r);
        } finally {
          Ie = l, In.transition = i;
        }
      }
      function yc(e, t, n, r) {
        var l = Ie, i = In.transition;
        In.transition = null;
        try {
          Ie = 4, pi(e, t, n, r);
        } finally {
          Ie = l, In.transition = i;
        }
      }
      function pi(e, t, n, r) {
        if (Zr) {
          var l = hi(e, t, n, r);
          if (l === null) Ti(e, t, r, Jr, n), ma(e, r);
          else if (mc(l, e, t, n, r)) r.stopPropagation();
          else if (ma(e, r), t & 4 && -1 < hc.indexOf(e)) {
            for (; l !== null; ) {
              var i = Cr(l);
              if (i !== null && da(i), i = hi(e, t, n, r), i === null && Ti(e, t, r, Jr, n), i === l) break;
              l = i;
            }
            l !== null && r.stopPropagation();
          } else Ti(e, t, r, null, n);
        }
      }
      var Jr = null;
      function hi(e, t, n, r) {
        if (Jr = null, e = ni(r), e = xn(e), e !== null) if (t = yn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
          if (e = ta(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
        return Jr = e, null;
      }
      function ya(e) {
        switch (e) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (ic()) {
              case ai:
                return 1;
              case aa:
                return 4;
              case Vr:
              case sc:
                return 16;
              case oa:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var nn = null, mi = null, el = null;
      function xa() {
        if (el) return el;
        var e, t = mi, n = t.length, r, l = "value" in nn ? nn.value : nn.textContent, i = l.length;
        for (e = 0; e < n && t[e] === l[e]; e++) ;
        var o = n - e;
        for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
        return el = l.slice(e, 1 < r ? 1 - r : void 0);
      }
      function tl(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
      }
      function nl() {
        return true;
      }
      function wa() {
        return false;
      }
      function kt(e) {
        function t(n, r, l, i, o) {
          this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
          for (var c in e) e.hasOwnProperty(c) && (n = e[c], this[c] = n ? n(i) : i[c]);
          return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === false) ? nl : wa, this.isPropagationStopped = wa, this;
        }
        return p(t.prototype, {
          preventDefault: function() {
            this.defaultPrevented = true;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = nl);
          },
          stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = nl);
          },
          persist: function() {
          },
          isPersistent: nl
        }), t;
      }
      var Ln = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
      }, gi = kt(Ln), pr = p({}, Ln, {
        view: 0,
        detail: 0
      }), xc = kt(pr), vi, yi, hr, rl = p({}, pr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: wi,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
          return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function(e) {
          return "movementX" in e ? e.movementX : (e !== hr && (hr && e.type === "mousemove" ? (vi = e.screenX - hr.screenX, yi = e.screenY - hr.screenY) : yi = vi = 0, hr = e), vi);
        },
        movementY: function(e) {
          return "movementY" in e ? e.movementY : yi;
        }
      }), ka = kt(rl), wc = p({}, rl, {
        dataTransfer: 0
      }), kc = kt(wc), Sc = p({}, pr, {
        relatedTarget: 0
      }), xi = kt(Sc), Nc = p({}, Ln, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      }), Cc = kt(Nc), Ec = p({}, Ln, {
        clipboardData: function(e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
      }), jc = kt(Ec), bc = p({}, Ln, {
        data: 0
      }), Sa = kt(bc), _c = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      }, Mc = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      }, Pc = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
      };
      function Tc(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Pc[e]) ? !!t[e] : false;
      }
      function wi() {
        return Tc;
      }
      var Rc = p({}, pr, {
        key: function(e) {
          if (e.key) {
            var t = _c[e.key] || e.key;
            if (t !== "Unidentified") return t;
          }
          return e.type === "keypress" ? (e = tl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Mc[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: wi,
        charCode: function(e) {
          return e.type === "keypress" ? tl(e) : 0;
        },
        keyCode: function(e) {
          return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
          return e.type === "keypress" ? tl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
      }), Ic = kt(Rc), Lc = p({}, rl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
      }), Na = kt(Lc), zc = p({}, pr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: wi
      }), Ac = kt(zc), Dc = p({}, Ln, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      }), Oc = kt(Dc), $c = p({}, rl, {
        deltaX: function(e) {
          return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
          return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      }), Fc = kt($c), Bc = [
        9,
        13,
        27,
        32
      ], ki = M && "CompositionEvent" in window, mr = null;
      M && "documentMode" in document && (mr = document.documentMode);
      var Uc = M && "TextEvent" in window && !mr, Ca = M && (!ki || mr && 8 < mr && 11 >= mr), Ea = " ", ja = false;
      function ba(e, t) {
        switch (e) {
          case "keyup":
            return Bc.indexOf(t.keyCode) !== -1;
          case "keydown":
            return t.keyCode !== 229;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function _a(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
      }
      var zn = false;
      function Wc(e, t) {
        switch (e) {
          case "compositionend":
            return _a(t);
          case "keypress":
            return t.which !== 32 ? null : (ja = true, Ea);
          case "textInput":
            return e = t.data, e === Ea && ja ? null : e;
          default:
            return null;
        }
      }
      function Hc(e, t) {
        if (zn) return e === "compositionend" || !ki && ba(e, t) ? (e = xa(), el = mi = nn = null, zn = false, e) : null;
        switch (e) {
          case "paste":
            return null;
          case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
              if (t.char && 1 < t.char.length) return t.char;
              if (t.which) return String.fromCharCode(t.which);
            }
            return null;
          case "compositionend":
            return Ca && t.locale !== "ko" ? null : t.data;
          default:
            return null;
        }
      }
      var Vc = {
        color: true,
        date: true,
        datetime: true,
        "datetime-local": true,
        email: true,
        month: true,
        number: true,
        password: true,
        range: true,
        search: true,
        tel: true,
        text: true,
        time: true,
        url: true,
        week: true
      };
      function Ma(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Vc[e.type] : t === "textarea";
      }
      function Pa(e, t, n, r) {
        Xs(r), t = ol(t, "onChange"), 0 < t.length && (n = new gi("onChange", "change", null, n, r), e.push({
          event: n,
          listeners: t
        }));
      }
      var gr = null, vr = null;
      function Qc(e) {
        Ga(e, 0);
      }
      function ll(e) {
        var t = Fn(e);
        if (oe(t)) return e;
      }
      function Yc(e, t) {
        if (e === "change") return t;
      }
      var Ta = false;
      if (M) {
        var Si;
        if (M) {
          var Ni = "oninput" in document;
          if (!Ni) {
            var Ra = document.createElement("div");
            Ra.setAttribute("oninput", "return;"), Ni = typeof Ra.oninput == "function";
          }
          Si = Ni;
        } else Si = false;
        Ta = Si && (!document.documentMode || 9 < document.documentMode);
      }
      function Ia() {
        gr && (gr.detachEvent("onpropertychange", La), vr = gr = null);
      }
      function La(e) {
        if (e.propertyName === "value" && ll(vr)) {
          var t = [];
          Pa(t, vr, e, ni(e)), ea(Qc, t);
        }
      }
      function Gc(e, t, n) {
        e === "focusin" ? (Ia(), gr = t, vr = n, gr.attachEvent("onpropertychange", La)) : e === "focusout" && Ia();
      }
      function Kc(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return ll(vr);
      }
      function Xc(e, t) {
        if (e === "click") return ll(t);
      }
      function qc(e, t) {
        if (e === "input" || e === "change") return ll(t);
      }
      function Zc(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
      }
      var It = typeof Object.is == "function" ? Object.is : Zc;
      function yr(e, t) {
        if (It(e, t)) return true;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return false;
        for (r = 0; r < n.length; r++) {
          var l = n[r];
          if (!O.call(t, l) || !It(e[l], t[l])) return false;
        }
        return true;
      }
      function za(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function Aa(e, t) {
        var n = za(e);
        e = 0;
        for (var r; n; ) {
          if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
              node: n,
              offset: t - e
            };
            e = r;
          }
          e: {
            for (; n; ) {
              if (n.nextSibling) {
                n = n.nextSibling;
                break e;
              }
              n = n.parentNode;
            }
            n = void 0;
          }
          n = za(n);
        }
      }
      function Da(e, t) {
        return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Da(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
      }
      function Oa() {
        for (var e = window, t = me(); t instanceof e.HTMLIFrameElement; ) {
          try {
            var n = typeof t.contentWindow.location.href == "string";
          } catch {
            n = false;
          }
          if (n) e = t.contentWindow;
          else break;
          t = me(e.document);
        }
        return t;
      }
      function Ci(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
      }
      function Jc(e) {
        var t = Oa(), n = e.focusedElem, r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && Da(n.ownerDocument.documentElement, n)) {
          if (r !== null && Ci(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
              e = e.getSelection();
              var l = n.textContent.length, i = Math.min(r.start, l);
              r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Aa(n, i);
              var o = Aa(n, r);
              l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
            }
          }
          for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
          });
          for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
        }
      }
      var ed = M && "documentMode" in document && 11 >= document.documentMode, An = null, Ei = null, xr = null, ji = false;
      function $a(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        ji || An == null || An !== me(r) || (r = An, "selectionStart" in r && Ci(r) ? r = {
          start: r.selectionStart,
          end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
        }), xr && yr(xr, r) || (xr = r, r = ol(Ei, "onSelect"), 0 < r.length && (t = new gi("onSelect", "select", null, t, n), e.push({
          event: t,
          listeners: r
        }), t.target = An)));
      }
      function il(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
      }
      var Dn = {
        animationend: il("Animation", "AnimationEnd"),
        animationiteration: il("Animation", "AnimationIteration"),
        animationstart: il("Animation", "AnimationStart"),
        transitionend: il("Transition", "TransitionEnd")
      }, bi = {}, Fa = {};
      M && (Fa = document.createElement("div").style, "AnimationEvent" in window || (delete Dn.animationend.animation, delete Dn.animationiteration.animation, delete Dn.animationstart.animation), "TransitionEvent" in window || delete Dn.transitionend.transition);
      function sl(e) {
        if (bi[e]) return bi[e];
        if (!Dn[e]) return e;
        var t = Dn[e], n;
        for (n in t) if (t.hasOwnProperty(n) && n in Fa) return bi[e] = t[n];
        return e;
      }
      var Ba = sl("animationend"), Ua = sl("animationiteration"), Wa = sl("animationstart"), Ha = sl("transitionend"), Va = /* @__PURE__ */ new Map(), Qa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function rn(e, t) {
        Va.set(e, t), C(t, [
          e
        ]);
      }
      for (var _i = 0; _i < Qa.length; _i++) {
        var Mi = Qa[_i], td = Mi.toLowerCase(), nd = Mi[0].toUpperCase() + Mi.slice(1);
        rn(td, "on" + nd);
      }
      rn(Ba, "onAnimationEnd"), rn(Ua, "onAnimationIteration"), rn(Wa, "onAnimationStart"), rn("dblclick", "onDoubleClick"), rn("focusin", "onFocus"), rn("focusout", "onBlur"), rn(Ha, "onTransitionEnd"), I("onMouseEnter", [
        "mouseout",
        "mouseover"
      ]), I("onMouseLeave", [
        "mouseout",
        "mouseover"
      ]), I("onPointerEnter", [
        "pointerout",
        "pointerover"
      ]), I("onPointerLeave", [
        "pointerout",
        "pointerover"
      ]), C("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), C("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), C("onBeforeInput", [
        "compositionend",
        "keypress",
        "textInput",
        "paste"
      ]), C("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), C("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), C("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var wr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), rd = new Set("cancel close invalid load scroll toggle".split(" ").concat(wr));
      function Ya(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, tc(r, t, void 0, e), e.currentTarget = null;
      }
      function Ga(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
          var r = e[n], l = r.event;
          r = r.listeners;
          e: {
            var i = void 0;
            if (t) for (var o = r.length - 1; 0 <= o; o--) {
              var c = r[o], f = c.instance, k = c.currentTarget;
              if (c = c.listener, f !== i && l.isPropagationStopped()) break e;
              Ya(l, c, k), i = f;
            }
            else for (o = 0; o < r.length; o++) {
              if (c = r[o], f = c.instance, k = c.currentTarget, c = c.listener, f !== i && l.isPropagationStopped()) break e;
              Ya(l, c, k), i = f;
            }
          }
        }
        if (Hr) throw e = si, Hr = false, si = null, e;
      }
      function Oe(e, t) {
        var n = t[Di];
        n === void 0 && (n = t[Di] = /* @__PURE__ */ new Set());
        var r = e + "__bubble";
        n.has(r) || (Ka(t, e, 2, false), n.add(r));
      }
      function Pi(e, t, n) {
        var r = 0;
        t && (r |= 4), Ka(n, e, r, t);
      }
      var al = "_reactListening" + Math.random().toString(36).slice(2);
      function kr(e) {
        if (!e[al]) {
          e[al] = true, a.forEach(function(n) {
            n !== "selectionchange" && (rd.has(n) || Pi(n, false, e), Pi(n, true, e));
          });
          var t = e.nodeType === 9 ? e : e.ownerDocument;
          t === null || t[al] || (t[al] = true, Pi("selectionchange", false, t));
        }
      }
      function Ka(e, t, n, r) {
        switch (ya(t)) {
          case 1:
            var l = vc;
            break;
          case 4:
            l = yc;
            break;
          default:
            l = pi;
        }
        n = l.bind(null, t, n, e), l = void 0, !ii || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = true), r ? l !== void 0 ? e.addEventListener(t, n, {
          capture: true,
          passive: l
        }) : e.addEventListener(t, n, true) : l !== void 0 ? e.addEventListener(t, n, {
          passive: l
        }) : e.addEventListener(t, n, false);
      }
      function Ti(e, t, n, r, l) {
        var i = r;
        if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
          if (r === null) return;
          var o = r.tag;
          if (o === 3 || o === 4) {
            var c = r.stateNode.containerInfo;
            if (c === l || c.nodeType === 8 && c.parentNode === l) break;
            if (o === 4) for (o = r.return; o !== null; ) {
              var f = o.tag;
              if ((f === 3 || f === 4) && (f = o.stateNode.containerInfo, f === l || f.nodeType === 8 && f.parentNode === l)) return;
              o = o.return;
            }
            for (; c !== null; ) {
              if (o = xn(c), o === null) return;
              if (f = o.tag, f === 5 || f === 6) {
                r = i = o;
                continue e;
              }
              c = c.parentNode;
            }
          }
          r = r.return;
        }
        ea(function() {
          var k = i, _ = ni(n), T = [];
          e: {
            var b = Va.get(e);
            if (b !== void 0) {
              var V = gi, X = e;
              switch (e) {
                case "keypress":
                  if (tl(n) === 0) break e;
                case "keydown":
                case "keyup":
                  V = Ic;
                  break;
                case "focusin":
                  X = "focus", V = xi;
                  break;
                case "focusout":
                  X = "blur", V = xi;
                  break;
                case "beforeblur":
                case "afterblur":
                  V = xi;
                  break;
                case "click":
                  if (n.button === 2) break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  V = ka;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  V = kc;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  V = Ac;
                  break;
                case Ba:
                case Ua:
                case Wa:
                  V = Cc;
                  break;
                case Ha:
                  V = Oc;
                  break;
                case "scroll":
                  V = xc;
                  break;
                case "wheel":
                  V = Fc;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  V = jc;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  V = Na;
              }
              var J = (t & 4) !== 0, Ve = !J && e === "scroll", g = J ? b !== null ? b + "Capture" : null : b;
              J = [];
              for (var m = k, w; m !== null; ) {
                w = m;
                var A = w.stateNode;
                if (w.tag === 5 && A !== null && (w = A, g !== null && (A = rr(m, g), A != null && J.push(Sr(m, A, w)))), Ve) break;
                m = m.return;
              }
              0 < J.length && (b = new V(b, X, null, n, _), T.push({
                event: b,
                listeners: J
              }));
            }
          }
          if (!(t & 7)) {
            e: {
              if (b = e === "mouseover" || e === "pointerover", V = e === "mouseout" || e === "pointerout", b && n !== ti && (X = n.relatedTarget || n.fromElement) && (xn(X) || X[Ht])) break e;
              if ((V || b) && (b = _.window === _ ? _ : (b = _.ownerDocument) ? b.defaultView || b.parentWindow : window, V ? (X = n.relatedTarget || n.toElement, V = k, X = X ? xn(X) : null, X !== null && (Ve = yn(X), X !== Ve || X.tag !== 5 && X.tag !== 6) && (X = null)) : (V = null, X = k), V !== X)) {
                if (J = ka, A = "onMouseLeave", g = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (J = Na, A = "onPointerLeave", g = "onPointerEnter", m = "pointer"), Ve = V == null ? b : Fn(V), w = X == null ? b : Fn(X), b = new J(A, m + "leave", V, n, _), b.target = Ve, b.relatedTarget = w, A = null, xn(_) === k && (J = new J(g, m + "enter", X, n, _), J.target = w, J.relatedTarget = Ve, A = J), Ve = A, V && X) t: {
                  for (J = V, g = X, m = 0, w = J; w; w = On(w)) m++;
                  for (w = 0, A = g; A; A = On(A)) w++;
                  for (; 0 < m - w; ) J = On(J), m--;
                  for (; 0 < w - m; ) g = On(g), w--;
                  for (; m--; ) {
                    if (J === g || g !== null && J === g.alternate) break t;
                    J = On(J), g = On(g);
                  }
                  J = null;
                }
                else J = null;
                V !== null && Xa(T, b, V, J, false), X !== null && Ve !== null && Xa(T, Ve, X, J, true);
              }
            }
            e: {
              if (b = k ? Fn(k) : window, V = b.nodeName && b.nodeName.toLowerCase(), V === "select" || V === "input" && b.type === "file") var ee = Yc;
              else if (Ma(b)) if (Ta) ee = qc;
              else {
                ee = Kc;
                var le = Gc;
              }
              else (V = b.nodeName) && V.toLowerCase() === "input" && (b.type === "checkbox" || b.type === "radio") && (ee = Xc);
              if (ee && (ee = ee(e, k))) {
                Pa(T, ee, n, _);
                break e;
              }
              le && le(e, b, k), e === "focusout" && (le = b._wrapperState) && le.controlled && b.type === "number" && dt(b, "number", b.value);
            }
            switch (le = k ? Fn(k) : window, e) {
              case "focusin":
                (Ma(le) || le.contentEditable === "true") && (An = le, Ei = k, xr = null);
                break;
              case "focusout":
                xr = Ei = An = null;
                break;
              case "mousedown":
                ji = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                ji = false, $a(T, n, _);
                break;
              case "selectionchange":
                if (ed) break;
              case "keydown":
              case "keyup":
                $a(T, n, _);
            }
            var ie;
            if (ki) e: {
              switch (e) {
                case "compositionstart":
                  var fe = "onCompositionStart";
                  break e;
                case "compositionend":
                  fe = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  fe = "onCompositionUpdate";
                  break e;
              }
              fe = void 0;
            }
            else zn ? ba(e, n) && (fe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (fe = "onCompositionStart");
            fe && (Ca && n.locale !== "ko" && (zn || fe !== "onCompositionStart" ? fe === "onCompositionEnd" && zn && (ie = xa()) : (nn = _, mi = "value" in nn ? nn.value : nn.textContent, zn = true)), le = ol(k, fe), 0 < le.length && (fe = new Sa(fe, e, null, n, _), T.push({
              event: fe,
              listeners: le
            }), ie ? fe.data = ie : (ie = _a(n), ie !== null && (fe.data = ie)))), (ie = Uc ? Wc(e, n) : Hc(e, n)) && (k = ol(k, "onBeforeInput"), 0 < k.length && (_ = new Sa("onBeforeInput", "beforeinput", null, n, _), T.push({
              event: _,
              listeners: k
            }), _.data = ie));
          }
          Ga(T, t);
        });
      }
      function Sr(e, t, n) {
        return {
          instance: e,
          listener: t,
          currentTarget: n
        };
      }
      function ol(e, t) {
        for (var n = t + "Capture", r = []; e !== null; ) {
          var l = e, i = l.stateNode;
          l.tag === 5 && i !== null && (l = i, i = rr(e, n), i != null && r.unshift(Sr(e, i, l)), i = rr(e, t), i != null && r.push(Sr(e, i, l))), e = e.return;
        }
        return r;
      }
      function On(e) {
        if (e === null) return null;
        do
          e = e.return;
        while (e && e.tag !== 5);
        return e || null;
      }
      function Xa(e, t, n, r, l) {
        for (var i = t._reactName, o = []; n !== null && n !== r; ) {
          var c = n, f = c.alternate, k = c.stateNode;
          if (f !== null && f === r) break;
          c.tag === 5 && k !== null && (c = k, l ? (f = rr(n, i), f != null && o.unshift(Sr(n, f, c))) : l || (f = rr(n, i), f != null && o.push(Sr(n, f, c)))), n = n.return;
        }
        o.length !== 0 && e.push({
          event: t,
          listeners: o
        });
      }
      var ld = /\r\n?/g, id = /\u0000|\uFFFD/g;
      function qa(e) {
        return (typeof e == "string" ? e : "" + e).replace(ld, `
`).replace(id, "");
      }
      function ul(e, t, n) {
        if (t = qa(t), qa(e) !== t && n) throw Error(h(425));
      }
      function cl() {
      }
      var Ri = null, Ii = null;
      function Li(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
      }
      var zi = typeof setTimeout == "function" ? setTimeout : void 0, sd = typeof clearTimeout == "function" ? clearTimeout : void 0, Za = typeof Promise == "function" ? Promise : void 0, ad = typeof queueMicrotask == "function" ? queueMicrotask : typeof Za < "u" ? function(e) {
        return Za.resolve(null).then(e).catch(od);
      } : zi;
      function od(e) {
        setTimeout(function() {
          throw e;
        });
      }
      function Ai(e, t) {
        var n = t, r = 0;
        do {
          var l = n.nextSibling;
          if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
            if (r === 0) {
              e.removeChild(l), fr(t);
              return;
            }
            r--;
          } else n !== "$" && n !== "$?" && n !== "$!" || r++;
          n = l;
        } while (n);
        fr(t);
      }
      function ln(e) {
        for (; e != null; e = e.nextSibling) {
          var t = e.nodeType;
          if (t === 1 || t === 3) break;
          if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null;
          }
        }
        return e;
      }
      function Ja(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
              if (t === 0) return e;
              t--;
            } else n === "/$" && t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      var $n = Math.random().toString(36).slice(2), Ft = "__reactFiber$" + $n, Nr = "__reactProps$" + $n, Ht = "__reactContainer$" + $n, Di = "__reactEvents$" + $n, ud = "__reactListeners$" + $n, cd = "__reactHandles$" + $n;
      function xn(e) {
        var t = e[Ft];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
          if (t = n[Ht] || n[Ft]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ja(e); e !== null; ) {
              if (n = e[Ft]) return n;
              e = Ja(e);
            }
            return t;
          }
          e = n, n = e.parentNode;
        }
        return null;
      }
      function Cr(e) {
        return e = e[Ft] || e[Ht], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
      }
      function Fn(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(h(33));
      }
      function dl(e) {
        return e[Nr] || null;
      }
      var Oi = [], Bn = -1;
      function sn(e) {
        return {
          current: e
        };
      }
      function $e(e) {
        0 > Bn || (e.current = Oi[Bn], Oi[Bn] = null, Bn--);
      }
      function ze(e, t) {
        Bn++, Oi[Bn] = e.current, e.current = t;
      }
      var an = {}, at = sn(an), ht = sn(false), wn = an;
      function Un(e, t) {
        var n = e.type.contextTypes;
        if (!n) return an;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var l = {}, i;
        for (i in n) l[i] = t[i];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
      }
      function mt(e) {
        return e = e.childContextTypes, e != null;
      }
      function fl() {
        $e(ht), $e(at);
      }
      function eo(e, t, n) {
        if (at.current !== an) throw Error(h(168));
        ze(at, t), ze(ht, n);
      }
      function to(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for (var l in r) if (!(l in t)) throw Error(h(108, S(e) || "Unknown", l));
        return p({}, n, r);
      }
      function pl(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || an, wn = at.current, ze(at, e), ze(ht, ht.current), true;
      }
      function no(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(h(169));
        n ? (e = to(e, t, wn), r.__reactInternalMemoizedMergedChildContext = e, $e(ht), $e(at), ze(at, e)) : $e(ht), ze(ht, n);
      }
      var Vt = null, hl = false, $i = false;
      function ro(e) {
        Vt === null ? Vt = [
          e
        ] : Vt.push(e);
      }
      function dd(e) {
        hl = true, ro(e);
      }
      function on() {
        if (!$i && Vt !== null) {
          $i = true;
          var e = 0, t = Ie;
          try {
            var n = Vt;
            for (Ie = 1; e < n.length; e++) {
              var r = n[e];
              do
                r = r(true);
              while (r !== null);
            }
            Vt = null, hl = false;
          } catch (l) {
            throw Vt !== null && (Vt = Vt.slice(e + 1)), ia(ai, on), l;
          } finally {
            Ie = t, $i = false;
          }
        }
        return null;
      }
      var Wn = [], Hn = 0, ml = null, gl = 0, Et = [], jt = 0, kn = null, Qt = 1, Yt = "";
      function Sn(e, t) {
        Wn[Hn++] = gl, Wn[Hn++] = ml, ml = e, gl = t;
      }
      function lo(e, t, n) {
        Et[jt++] = Qt, Et[jt++] = Yt, Et[jt++] = kn, kn = e;
        var r = Qt;
        e = Yt;
        var l = 32 - Rt(r) - 1;
        r &= ~(1 << l), n += 1;
        var i = 32 - Rt(t) + l;
        if (30 < i) {
          var o = l - l % 5;
          i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Qt = 1 << 32 - Rt(t) + l | n << l | r, Yt = i + e;
        } else Qt = 1 << i | n << l | r, Yt = e;
      }
      function Fi(e) {
        e.return !== null && (Sn(e, 1), lo(e, 1, 0));
      }
      function Bi(e) {
        for (; e === ml; ) ml = Wn[--Hn], Wn[Hn] = null, gl = Wn[--Hn], Wn[Hn] = null;
        for (; e === kn; ) kn = Et[--jt], Et[jt] = null, Yt = Et[--jt], Et[jt] = null, Qt = Et[--jt], Et[jt] = null;
      }
      var St = null, Nt = null, Fe = false, Lt = null;
      function io(e, t) {
        var n = Pt(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
          n
        ], e.flags |= 16) : t.push(n);
      }
      function so(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, St = e, Nt = ln(t.firstChild), true) : false;
          case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, St = e, Nt = null, true) : false;
          case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = kn !== null ? {
              id: Qt,
              overflow: Yt
            } : null, e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824
            }, n = Pt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, St = e, Nt = null, true) : false;
          default:
            return false;
        }
      }
      function Ui(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
      }
      function Wi(e) {
        if (Fe) {
          var t = Nt;
          if (t) {
            var n = t;
            if (!so(e, t)) {
              if (Ui(e)) throw Error(h(418));
              t = ln(n.nextSibling);
              var r = St;
              t && so(e, t) ? io(r, n) : (e.flags = e.flags & -4097 | 2, Fe = false, St = e);
            }
          } else {
            if (Ui(e)) throw Error(h(418));
            e.flags = e.flags & -4097 | 2, Fe = false, St = e;
          }
        }
      }
      function ao(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
        St = e;
      }
      function vl(e) {
        if (e !== St) return false;
        if (!Fe) return ao(e), Fe = true, false;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Li(e.type, e.memoizedProps)), t && (t = Nt)) {
          if (Ui(e)) throw oo(), Error(h(418));
          for (; t; ) io(e, t), t = ln(t.nextSibling);
        }
        if (ao(e), e.tag === 13) {
          if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(h(317));
          e: {
            for (e = e.nextSibling, t = 0; e; ) {
              if (e.nodeType === 8) {
                var n = e.data;
                if (n === "/$") {
                  if (t === 0) {
                    Nt = ln(e.nextSibling);
                    break e;
                  }
                  t--;
                } else n !== "$" && n !== "$!" && n !== "$?" || t++;
              }
              e = e.nextSibling;
            }
            Nt = null;
          }
        } else Nt = St ? ln(e.stateNode.nextSibling) : null;
        return true;
      }
      function oo() {
        for (var e = Nt; e; ) e = ln(e.nextSibling);
      }
      function Vn() {
        Nt = St = null, Fe = false;
      }
      function Hi(e) {
        Lt === null ? Lt = [
          e
        ] : Lt.push(e);
      }
      var fd = pe.ReactCurrentBatchConfig;
      function Er(e, t, n) {
        if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
          if (n._owner) {
            if (n = n._owner, n) {
              if (n.tag !== 1) throw Error(h(309));
              var r = n.stateNode;
            }
            if (!r) throw Error(h(147, e));
            var l = r, i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
              var c = l.refs;
              o === null ? delete c[i] : c[i] = o;
            }, t._stringRef = i, t);
          }
          if (typeof e != "string") throw Error(h(284));
          if (!n._owner) throw Error(h(290, e));
        }
        return e;
      }
      function yl(e, t) {
        throw e = Object.prototype.toString.call(t), Error(h(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
      }
      function uo(e) {
        var t = e._init;
        return t(e._payload);
      }
      function co(e) {
        function t(g, m) {
          if (e) {
            var w = g.deletions;
            w === null ? (g.deletions = [
              m
            ], g.flags |= 16) : w.push(m);
          }
        }
        function n(g, m) {
          if (!e) return null;
          for (; m !== null; ) t(g, m), m = m.sibling;
          return null;
        }
        function r(g, m) {
          for (g = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? g.set(m.key, m) : g.set(m.index, m), m = m.sibling;
          return g;
        }
        function l(g, m) {
          return g = gn(g, m), g.index = 0, g.sibling = null, g;
        }
        function i(g, m, w) {
          return g.index = w, e ? (w = g.alternate, w !== null ? (w = w.index, w < m ? (g.flags |= 2, m) : w) : (g.flags |= 2, m)) : (g.flags |= 1048576, m);
        }
        function o(g) {
          return e && g.alternate === null && (g.flags |= 2), g;
        }
        function c(g, m, w, A) {
          return m === null || m.tag !== 6 ? (m = zs(w, g.mode, A), m.return = g, m) : (m = l(m, w), m.return = g, m);
        }
        function f(g, m, w, A) {
          var ee = w.type;
          return ee === Z ? _(g, m, w.props.children, A, w.key) : m !== null && (m.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === Se && uo(ee) === m.type) ? (A = l(m, w.props), A.ref = Er(g, m, w), A.return = g, A) : (A = Ul(w.type, w.key, w.props, null, g.mode, A), A.ref = Er(g, m, w), A.return = g, A);
        }
        function k(g, m, w, A) {
          return m === null || m.tag !== 4 || m.stateNode.containerInfo !== w.containerInfo || m.stateNode.implementation !== w.implementation ? (m = As(w, g.mode, A), m.return = g, m) : (m = l(m, w.children || []), m.return = g, m);
        }
        function _(g, m, w, A, ee) {
          return m === null || m.tag !== 7 ? (m = Pn(w, g.mode, A, ee), m.return = g, m) : (m = l(m, w), m.return = g, m);
        }
        function T(g, m, w) {
          if (typeof m == "string" && m !== "" || typeof m == "number") return m = zs("" + m, g.mode, w), m.return = g, m;
          if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
              case Me:
                return w = Ul(m.type, m.key, m.props, null, g.mode, w), w.ref = Er(g, null, m), w.return = g, w;
              case Pe:
                return m = As(m, g.mode, w), m.return = g, m;
              case Se:
                var A = m._init;
                return T(g, A(m._payload), w);
            }
            if (j(m) || ne(m)) return m = Pn(m, g.mode, w, null), m.return = g, m;
            yl(g, m);
          }
          return null;
        }
        function b(g, m, w, A) {
          var ee = m !== null ? m.key : null;
          if (typeof w == "string" && w !== "" || typeof w == "number") return ee !== null ? null : c(g, m, "" + w, A);
          if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
              case Me:
                return w.key === ee ? f(g, m, w, A) : null;
              case Pe:
                return w.key === ee ? k(g, m, w, A) : null;
              case Se:
                return ee = w._init, b(g, m, ee(w._payload), A);
            }
            if (j(w) || ne(w)) return ee !== null ? null : _(g, m, w, A, null);
            yl(g, w);
          }
          return null;
        }
        function V(g, m, w, A, ee) {
          if (typeof A == "string" && A !== "" || typeof A == "number") return g = g.get(w) || null, c(m, g, "" + A, ee);
          if (typeof A == "object" && A !== null) {
            switch (A.$$typeof) {
              case Me:
                return g = g.get(A.key === null ? w : A.key) || null, f(m, g, A, ee);
              case Pe:
                return g = g.get(A.key === null ? w : A.key) || null, k(m, g, A, ee);
              case Se:
                var le = A._init;
                return V(g, m, w, le(A._payload), ee);
            }
            if (j(A) || ne(A)) return g = g.get(w) || null, _(m, g, A, ee, null);
            yl(m, A);
          }
          return null;
        }
        function X(g, m, w, A) {
          for (var ee = null, le = null, ie = m, fe = m = 0, nt = null; ie !== null && fe < w.length; fe++) {
            ie.index > fe ? (nt = ie, ie = null) : nt = ie.sibling;
            var je = b(g, ie, w[fe], A);
            if (je === null) {
              ie === null && (ie = nt);
              break;
            }
            e && ie && je.alternate === null && t(g, ie), m = i(je, m, fe), le === null ? ee = je : le.sibling = je, le = je, ie = nt;
          }
          if (fe === w.length) return n(g, ie), Fe && Sn(g, fe), ee;
          if (ie === null) {
            for (; fe < w.length; fe++) ie = T(g, w[fe], A), ie !== null && (m = i(ie, m, fe), le === null ? ee = ie : le.sibling = ie, le = ie);
            return Fe && Sn(g, fe), ee;
          }
          for (ie = r(g, ie); fe < w.length; fe++) nt = V(ie, g, fe, w[fe], A), nt !== null && (e && nt.alternate !== null && ie.delete(nt.key === null ? fe : nt.key), m = i(nt, m, fe), le === null ? ee = nt : le.sibling = nt, le = nt);
          return e && ie.forEach(function(vn) {
            return t(g, vn);
          }), Fe && Sn(g, fe), ee;
        }
        function J(g, m, w, A) {
          var ee = ne(w);
          if (typeof ee != "function") throw Error(h(150));
          if (w = ee.call(w), w == null) throw Error(h(151));
          for (var le = ee = null, ie = m, fe = m = 0, nt = null, je = w.next(); ie !== null && !je.done; fe++, je = w.next()) {
            ie.index > fe ? (nt = ie, ie = null) : nt = ie.sibling;
            var vn = b(g, ie, je.value, A);
            if (vn === null) {
              ie === null && (ie = nt);
              break;
            }
            e && ie && vn.alternate === null && t(g, ie), m = i(vn, m, fe), le === null ? ee = vn : le.sibling = vn, le = vn, ie = nt;
          }
          if (je.done) return n(g, ie), Fe && Sn(g, fe), ee;
          if (ie === null) {
            for (; !je.done; fe++, je = w.next()) je = T(g, je.value, A), je !== null && (m = i(je, m, fe), le === null ? ee = je : le.sibling = je, le = je);
            return Fe && Sn(g, fe), ee;
          }
          for (ie = r(g, ie); !je.done; fe++, je = w.next()) je = V(ie, g, fe, je.value, A), je !== null && (e && je.alternate !== null && ie.delete(je.key === null ? fe : je.key), m = i(je, m, fe), le === null ? ee = je : le.sibling = je, le = je);
          return e && ie.forEach(function(Hd) {
            return t(g, Hd);
          }), Fe && Sn(g, fe), ee;
        }
        function Ve(g, m, w, A) {
          if (typeof w == "object" && w !== null && w.type === Z && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
              case Me:
                e: {
                  for (var ee = w.key, le = m; le !== null; ) {
                    if (le.key === ee) {
                      if (ee = w.type, ee === Z) {
                        if (le.tag === 7) {
                          n(g, le.sibling), m = l(le, w.props.children), m.return = g, g = m;
                          break e;
                        }
                      } else if (le.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === Se && uo(ee) === le.type) {
                        n(g, le.sibling), m = l(le, w.props), m.ref = Er(g, le, w), m.return = g, g = m;
                        break e;
                      }
                      n(g, le);
                      break;
                    } else t(g, le);
                    le = le.sibling;
                  }
                  w.type === Z ? (m = Pn(w.props.children, g.mode, A, w.key), m.return = g, g = m) : (A = Ul(w.type, w.key, w.props, null, g.mode, A), A.ref = Er(g, m, w), A.return = g, g = A);
                }
                return o(g);
              case Pe:
                e: {
                  for (le = w.key; m !== null; ) {
                    if (m.key === le) if (m.tag === 4 && m.stateNode.containerInfo === w.containerInfo && m.stateNode.implementation === w.implementation) {
                      n(g, m.sibling), m = l(m, w.children || []), m.return = g, g = m;
                      break e;
                    } else {
                      n(g, m);
                      break;
                    }
                    else t(g, m);
                    m = m.sibling;
                  }
                  m = As(w, g.mode, A), m.return = g, g = m;
                }
                return o(g);
              case Se:
                return le = w._init, Ve(g, m, le(w._payload), A);
            }
            if (j(w)) return X(g, m, w, A);
            if (ne(w)) return J(g, m, w, A);
            yl(g, w);
          }
          return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w, m !== null && m.tag === 6 ? (n(g, m.sibling), m = l(m, w), m.return = g, g = m) : (n(g, m), m = zs(w, g.mode, A), m.return = g, g = m), o(g)) : n(g, m);
        }
        return Ve;
      }
      var Qn = co(true), fo = co(false), xl = sn(null), wl = null, Yn = null, Vi = null;
      function Qi() {
        Vi = Yn = wl = null;
      }
      function Yi(e) {
        var t = xl.current;
        $e(xl), e._currentValue = t;
      }
      function Gi(e, t, n) {
        for (; e !== null; ) {
          var r = e.alternate;
          if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
          e = e.return;
        }
      }
      function Gn(e, t) {
        wl = e, Vi = Yn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (gt = true), e.firstContext = null);
      }
      function bt(e) {
        var t = e._currentValue;
        if (Vi !== e) if (e = {
          context: e,
          memoizedValue: t,
          next: null
        }, Yn === null) {
          if (wl === null) throw Error(h(308));
          Yn = e, wl.dependencies = {
            lanes: 0,
            firstContext: e
          };
        } else Yn = Yn.next = e;
        return t;
      }
      var Nn = null;
      function Ki(e) {
        Nn === null ? Nn = [
          e
        ] : Nn.push(e);
      }
      function po(e, t, n, r) {
        var l = t.interleaved;
        return l === null ? (n.next = n, Ki(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Gt(e, r);
      }
      function Gt(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null;
      }
      var un = false;
      function Xi(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: {
            pending: null,
            interleaved: null,
            lanes: 0
          },
          effects: null
        };
      }
      function ho(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects
        });
      }
      function Kt(e, t) {
        return {
          eventTime: e,
          lane: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null
        };
      }
      function cn(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (r = r.shared, Ee & 2) {
          var l = r.pending;
          return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Gt(e, n);
        }
        return l = r.interleaved, l === null ? (t.next = t, Ki(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Gt(e, n);
      }
      function kl(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
          var r = t.lanes;
          r &= e.pendingLanes, n |= r, t.lanes = n, ci(e, n);
        }
      }
      function mo(e, t) {
        var n = e.updateQueue, r = e.alternate;
        if (r !== null && (r = r.updateQueue, n === r)) {
          var l = null, i = null;
          if (n = n.firstBaseUpdate, n !== null) {
            do {
              var o = {
                eventTime: n.eventTime,
                lane: n.lane,
                tag: n.tag,
                payload: n.payload,
                callback: n.callback,
                next: null
              };
              i === null ? l = i = o : i = i.next = o, n = n.next;
            } while (n !== null);
            i === null ? l = i = t : i = i.next = t;
          } else l = i = t;
          n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
          }, e.updateQueue = n;
          return;
        }
        e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
      }
      function Sl(e, t, n, r) {
        var l = e.updateQueue;
        un = false;
        var i = l.firstBaseUpdate, o = l.lastBaseUpdate, c = l.shared.pending;
        if (c !== null) {
          l.shared.pending = null;
          var f = c, k = f.next;
          f.next = null, o === null ? i = k : o.next = k, o = f;
          var _ = e.alternate;
          _ !== null && (_ = _.updateQueue, c = _.lastBaseUpdate, c !== o && (c === null ? _.firstBaseUpdate = k : c.next = k, _.lastBaseUpdate = f));
        }
        if (i !== null) {
          var T = l.baseState;
          o = 0, _ = k = f = null, c = i;
          do {
            var b = c.lane, V = c.eventTime;
            if ((r & b) === b) {
              _ !== null && (_ = _.next = {
                eventTime: V,
                lane: 0,
                tag: c.tag,
                payload: c.payload,
                callback: c.callback,
                next: null
              });
              e: {
                var X = e, J = c;
                switch (b = t, V = n, J.tag) {
                  case 1:
                    if (X = J.payload, typeof X == "function") {
                      T = X.call(V, T, b);
                      break e;
                    }
                    T = X;
                    break e;
                  case 3:
                    X.flags = X.flags & -65537 | 128;
                  case 0:
                    if (X = J.payload, b = typeof X == "function" ? X.call(V, T, b) : X, b == null) break e;
                    T = p({}, T, b);
                    break e;
                  case 2:
                    un = true;
                }
              }
              c.callback !== null && c.lane !== 0 && (e.flags |= 64, b = l.effects, b === null ? l.effects = [
                c
              ] : b.push(c));
            } else V = {
              eventTime: V,
              lane: b,
              tag: c.tag,
              payload: c.payload,
              callback: c.callback,
              next: null
            }, _ === null ? (k = _ = V, f = T) : _ = _.next = V, o |= b;
            if (c = c.next, c === null) {
              if (c = l.shared.pending, c === null) break;
              b = c, c = b.next, b.next = null, l.lastBaseUpdate = b, l.shared.pending = null;
            }
          } while (true);
          if (_ === null && (f = T), l.baseState = f, l.firstBaseUpdate = k, l.lastBaseUpdate = _, t = l.shared.interleaved, t !== null) {
            l = t;
            do
              o |= l.lane, l = l.next;
            while (l !== t);
          } else i === null && (l.shared.lanes = 0);
          jn |= o, e.lanes = o, e.memoizedState = T;
        }
      }
      function go(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
          var r = e[t], l = r.callback;
          if (l !== null) {
            if (r.callback = null, r = n, typeof l != "function") throw Error(h(191, l));
            l.call(r);
          }
        }
      }
      var jr = {}, Bt = sn(jr), br = sn(jr), _r = sn(jr);
      function Cn(e) {
        if (e === jr) throw Error(h(174));
        return e;
      }
      function qi(e, t) {
        switch (ze(_r, t), ze(br, e), ze(Bt, jr), e = t.nodeType, e) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Re(null, "");
            break;
          default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Re(t, e);
        }
        $e(Bt), ze(Bt, t);
      }
      function Kn() {
        $e(Bt), $e(br), $e(_r);
      }
      function vo(e) {
        Cn(_r.current);
        var t = Cn(Bt.current), n = Re(t, e.type);
        t !== n && (ze(br, e), ze(Bt, n));
      }
      function Zi(e) {
        br.current === e && ($e(Bt), $e(br));
      }
      var Be = sn(0);
      function Nl(e) {
        for (var t = e; t !== null; ) {
          if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
          } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
          } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
        return null;
      }
      var Ji = [];
      function es() {
        for (var e = 0; e < Ji.length; e++) Ji[e]._workInProgressVersionPrimary = null;
        Ji.length = 0;
      }
      var Cl = pe.ReactCurrentDispatcher, ts = pe.ReactCurrentBatchConfig, En = 0, Ue = null, Xe = null, et = null, El = false, Mr = false, Pr = 0, pd = 0;
      function ot() {
        throw Error(h(321));
      }
      function ns(e, t) {
        if (t === null) return false;
        for (var n = 0; n < t.length && n < e.length; n++) if (!It(e[n], t[n])) return false;
        return true;
      }
      function rs(e, t, n, r, l, i) {
        if (En = i, Ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Cl.current = e === null || e.memoizedState === null ? vd : yd, e = n(r, l), Mr) {
          i = 0;
          do {
            if (Mr = false, Pr = 0, 25 <= i) throw Error(h(301));
            i += 1, et = Xe = null, t.updateQueue = null, Cl.current = xd, e = n(r, l);
          } while (Mr);
        }
        if (Cl.current = _l, t = Xe !== null && Xe.next !== null, En = 0, et = Xe = Ue = null, El = false, t) throw Error(h(300));
        return e;
      }
      function ls() {
        var e = Pr !== 0;
        return Pr = 0, e;
      }
      function Ut() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return et === null ? Ue.memoizedState = et = e : et = et.next = e, et;
      }
      function _t() {
        if (Xe === null) {
          var e = Ue.alternate;
          e = e !== null ? e.memoizedState : null;
        } else e = Xe.next;
        var t = et === null ? Ue.memoizedState : et.next;
        if (t !== null) et = t, Xe = e;
        else {
          if (e === null) throw Error(h(310));
          Xe = e, e = {
            memoizedState: Xe.memoizedState,
            baseState: Xe.baseState,
            baseQueue: Xe.baseQueue,
            queue: Xe.queue,
            next: null
          }, et === null ? Ue.memoizedState = et = e : et = et.next = e;
        }
        return et;
      }
      function Tr(e, t) {
        return typeof t == "function" ? t(e) : t;
      }
      function is(e) {
        var t = _t(), n = t.queue;
        if (n === null) throw Error(h(311));
        n.lastRenderedReducer = e;
        var r = Xe, l = r.baseQueue, i = n.pending;
        if (i !== null) {
          if (l !== null) {
            var o = l.next;
            l.next = i.next, i.next = o;
          }
          r.baseQueue = l = i, n.pending = null;
        }
        if (l !== null) {
          i = l.next, r = r.baseState;
          var c = o = null, f = null, k = i;
          do {
            var _ = k.lane;
            if ((En & _) === _) f !== null && (f = f.next = {
              lane: 0,
              action: k.action,
              hasEagerState: k.hasEagerState,
              eagerState: k.eagerState,
              next: null
            }), r = k.hasEagerState ? k.eagerState : e(r, k.action);
            else {
              var T = {
                lane: _,
                action: k.action,
                hasEagerState: k.hasEagerState,
                eagerState: k.eagerState,
                next: null
              };
              f === null ? (c = f = T, o = r) : f = f.next = T, Ue.lanes |= _, jn |= _;
            }
            k = k.next;
          } while (k !== null && k !== i);
          f === null ? o = r : f.next = c, It(r, t.memoizedState) || (gt = true), t.memoizedState = r, t.baseState = o, t.baseQueue = f, n.lastRenderedState = r;
        }
        if (e = n.interleaved, e !== null) {
          l = e;
          do
            i = l.lane, Ue.lanes |= i, jn |= i, l = l.next;
          while (l !== e);
        } else l === null && (n.lanes = 0);
        return [
          t.memoizedState,
          n.dispatch
        ];
      }
      function ss(e) {
        var t = _t(), n = t.queue;
        if (n === null) throw Error(h(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch, l = n.pending, i = t.memoizedState;
        if (l !== null) {
          n.pending = null;
          var o = l = l.next;
          do
            i = e(i, o.action), o = o.next;
          while (o !== l);
          It(i, t.memoizedState) || (gt = true), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
        }
        return [
          i,
          r
        ];
      }
      function yo() {
      }
      function xo(e, t) {
        var n = Ue, r = _t(), l = t(), i = !It(r.memoizedState, l);
        if (i && (r.memoizedState = l, gt = true), r = r.queue, as(So.bind(null, n, r, e), [
          e
        ]), r.getSnapshot !== t || i || et !== null && et.memoizedState.tag & 1) {
          if (n.flags |= 2048, Rr(9, ko.bind(null, n, r, l, t), void 0, null), tt === null) throw Error(h(349));
          En & 30 || wo(n, t, l);
        }
        return l;
      }
      function wo(e, t, n) {
        e.flags |= 16384, e = {
          getSnapshot: t,
          value: n
        }, t = Ue.updateQueue, t === null ? (t = {
          lastEffect: null,
          stores: null
        }, Ue.updateQueue = t, t.stores = [
          e
        ]) : (n = t.stores, n === null ? t.stores = [
          e
        ] : n.push(e));
      }
      function ko(e, t, n, r) {
        t.value = n, t.getSnapshot = r, No(t) && Co(e);
      }
      function So(e, t, n) {
        return n(function() {
          No(t) && Co(e);
        });
      }
      function No(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !It(e, n);
        } catch {
          return true;
        }
      }
      function Co(e) {
        var t = Gt(e, 1);
        t !== null && Ot(t, e, 1, -1);
      }
      function Eo(e) {
        var t = Ut();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Tr,
          lastRenderedState: e
        }, t.queue = e, e = e.dispatch = gd.bind(null, Ue, e), [
          t.memoizedState,
          e
        ];
      }
      function Rr(e, t, n, r) {
        return e = {
          tag: e,
          create: t,
          destroy: n,
          deps: r,
          next: null
        }, t = Ue.updateQueue, t === null ? (t = {
          lastEffect: null,
          stores: null
        }, Ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
      }
      function jo() {
        return _t().memoizedState;
      }
      function jl(e, t, n, r) {
        var l = Ut();
        Ue.flags |= e, l.memoizedState = Rr(1 | t, n, void 0, r === void 0 ? null : r);
      }
      function bl(e, t, n, r) {
        var l = _t();
        r = r === void 0 ? null : r;
        var i = void 0;
        if (Xe !== null) {
          var o = Xe.memoizedState;
          if (i = o.destroy, r !== null && ns(r, o.deps)) {
            l.memoizedState = Rr(t, n, i, r);
            return;
          }
        }
        Ue.flags |= e, l.memoizedState = Rr(1 | t, n, i, r);
      }
      function bo(e, t) {
        return jl(8390656, 8, e, t);
      }
      function as(e, t) {
        return bl(2048, 8, e, t);
      }
      function _o(e, t) {
        return bl(4, 2, e, t);
      }
      function Mo(e, t) {
        return bl(4, 4, e, t);
      }
      function Po(e, t) {
        if (typeof t == "function") return e = e(), t(e), function() {
          t(null);
        };
        if (t != null) return e = e(), t.current = e, function() {
          t.current = null;
        };
      }
      function To(e, t, n) {
        return n = n != null ? n.concat([
          e
        ]) : null, bl(4, 4, Po.bind(null, t, e), n);
      }
      function os() {
      }
      function Ro(e, t) {
        var n = _t();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && ns(t, r[1]) ? r[0] : (n.memoizedState = [
          e,
          t
        ], e);
      }
      function Io(e, t) {
        var n = _t();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && ns(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
          e,
          t
        ], e);
      }
      function Lo(e, t, n) {
        return En & 21 ? (It(n, t) || (n = ua(), Ue.lanes |= n, jn |= n, e.baseState = true), t) : (e.baseState && (e.baseState = false, gt = true), e.memoizedState = n);
      }
      function hd(e, t) {
        var n = Ie;
        Ie = n !== 0 && 4 > n ? n : 4, e(true);
        var r = ts.transition;
        ts.transition = {};
        try {
          e(false), t();
        } finally {
          Ie = n, ts.transition = r;
        }
      }
      function zo() {
        return _t().memoizedState;
      }
      function md(e, t, n) {
        var r = hn(e);
        if (n = {
          lane: r,
          action: n,
          hasEagerState: false,
          eagerState: null,
          next: null
        }, Ao(e)) Do(t, n);
        else if (n = po(e, t, n, r), n !== null) {
          var l = pt();
          Ot(n, e, r, l), Oo(n, t, r);
        }
      }
      function gd(e, t, n) {
        var r = hn(e), l = {
          lane: r,
          action: n,
          hasEagerState: false,
          eagerState: null,
          next: null
        };
        if (Ao(e)) Do(t, l);
        else {
          var i = e.alternate;
          if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var o = t.lastRenderedState, c = i(o, n);
            if (l.hasEagerState = true, l.eagerState = c, It(c, o)) {
              var f = t.interleaved;
              f === null ? (l.next = l, Ki(t)) : (l.next = f.next, f.next = l), t.interleaved = l;
              return;
            }
          } catch {
          } finally {
          }
          n = po(e, t, l, r), n !== null && (l = pt(), Ot(n, e, r, l), Oo(n, t, r));
        }
      }
      function Ao(e) {
        var t = e.alternate;
        return e === Ue || t !== null && t === Ue;
      }
      function Do(e, t) {
        Mr = El = true;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
      }
      function Oo(e, t, n) {
        if (n & 4194240) {
          var r = t.lanes;
          r &= e.pendingLanes, n |= r, t.lanes = n, ci(e, n);
        }
      }
      var _l = {
        readContext: bt,
        useCallback: ot,
        useContext: ot,
        useEffect: ot,
        useImperativeHandle: ot,
        useInsertionEffect: ot,
        useLayoutEffect: ot,
        useMemo: ot,
        useReducer: ot,
        useRef: ot,
        useState: ot,
        useDebugValue: ot,
        useDeferredValue: ot,
        useTransition: ot,
        useMutableSource: ot,
        useSyncExternalStore: ot,
        useId: ot,
        unstable_isNewReconciler: false
      }, vd = {
        readContext: bt,
        useCallback: function(e, t) {
          return Ut().memoizedState = [
            e,
            t === void 0 ? null : t
          ], e;
        },
        useContext: bt,
        useEffect: bo,
        useImperativeHandle: function(e, t, n) {
          return n = n != null ? n.concat([
            e
          ]) : null, jl(4194308, 4, Po.bind(null, t, e), n);
        },
        useLayoutEffect: function(e, t) {
          return jl(4194308, 4, e, t);
        },
        useInsertionEffect: function(e, t) {
          return jl(4, 2, e, t);
        },
        useMemo: function(e, t) {
          var n = Ut();
          return t = t === void 0 ? null : t, e = e(), n.memoizedState = [
            e,
            t
          ], e;
        },
        useReducer: function(e, t, n) {
          var r = Ut();
          return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
          }, r.queue = e, e = e.dispatch = md.bind(null, Ue, e), [
            r.memoizedState,
            e
          ];
        },
        useRef: function(e) {
          var t = Ut();
          return e = {
            current: e
          }, t.memoizedState = e;
        },
        useState: Eo,
        useDebugValue: os,
        useDeferredValue: function(e) {
          return Ut().memoizedState = e;
        },
        useTransition: function() {
          var e = Eo(false), t = e[0];
          return e = hd.bind(null, e[1]), Ut().memoizedState = e, [
            t,
            e
          ];
        },
        useMutableSource: function() {
        },
        useSyncExternalStore: function(e, t, n) {
          var r = Ue, l = Ut();
          if (Fe) {
            if (n === void 0) throw Error(h(407));
            n = n();
          } else {
            if (n = t(), tt === null) throw Error(h(349));
            En & 30 || wo(r, t, n);
          }
          l.memoizedState = n;
          var i = {
            value: n,
            getSnapshot: t
          };
          return l.queue = i, bo(So.bind(null, r, i, e), [
            e
          ]), r.flags |= 2048, Rr(9, ko.bind(null, r, i, n, t), void 0, null), n;
        },
        useId: function() {
          var e = Ut(), t = tt.identifierPrefix;
          if (Fe) {
            var n = Yt, r = Qt;
            n = (r & ~(1 << 32 - Rt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Pr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
          } else n = pd++, t = ":" + t + "r" + n.toString(32) + ":";
          return e.memoizedState = t;
        },
        unstable_isNewReconciler: false
      }, yd = {
        readContext: bt,
        useCallback: Ro,
        useContext: bt,
        useEffect: as,
        useImperativeHandle: To,
        useInsertionEffect: _o,
        useLayoutEffect: Mo,
        useMemo: Io,
        useReducer: is,
        useRef: jo,
        useState: function() {
          return is(Tr);
        },
        useDebugValue: os,
        useDeferredValue: function(e) {
          var t = _t();
          return Lo(t, Xe.memoizedState, e);
        },
        useTransition: function() {
          var e = is(Tr)[0], t = _t().memoizedState;
          return [
            e,
            t
          ];
        },
        useMutableSource: yo,
        useSyncExternalStore: xo,
        useId: zo,
        unstable_isNewReconciler: false
      }, xd = {
        readContext: bt,
        useCallback: Ro,
        useContext: bt,
        useEffect: as,
        useImperativeHandle: To,
        useInsertionEffect: _o,
        useLayoutEffect: Mo,
        useMemo: Io,
        useReducer: ss,
        useRef: jo,
        useState: function() {
          return ss(Tr);
        },
        useDebugValue: os,
        useDeferredValue: function(e) {
          var t = _t();
          return Xe === null ? t.memoizedState = e : Lo(t, Xe.memoizedState, e);
        },
        useTransition: function() {
          var e = ss(Tr)[0], t = _t().memoizedState;
          return [
            e,
            t
          ];
        },
        useMutableSource: yo,
        useSyncExternalStore: xo,
        useId: zo,
        unstable_isNewReconciler: false
      };
      function zt(e, t) {
        if (e && e.defaultProps) {
          t = p({}, t), e = e.defaultProps;
          for (var n in e) t[n] === void 0 && (t[n] = e[n]);
          return t;
        }
        return t;
      }
      function us(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : p({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
      }
      var Ml = {
        isMounted: function(e) {
          return (e = e._reactInternals) ? yn(e) === e : false;
        },
        enqueueSetState: function(e, t, n) {
          e = e._reactInternals;
          var r = pt(), l = hn(e), i = Kt(r, l);
          i.payload = t, n != null && (i.callback = n), t = cn(e, i, l), t !== null && (Ot(t, e, l, r), kl(t, e, l));
        },
        enqueueReplaceState: function(e, t, n) {
          e = e._reactInternals;
          var r = pt(), l = hn(e), i = Kt(r, l);
          i.tag = 1, i.payload = t, n != null && (i.callback = n), t = cn(e, i, l), t !== null && (Ot(t, e, l, r), kl(t, e, l));
        },
        enqueueForceUpdate: function(e, t) {
          e = e._reactInternals;
          var n = pt(), r = hn(e), l = Kt(n, r);
          l.tag = 2, t != null && (l.callback = t), t = cn(e, l, r), t !== null && (Ot(t, e, r, n), kl(t, e, r));
        }
      };
      function $o(e, t, n, r, l, i, o) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !yr(n, r) || !yr(l, i) : true;
      }
      function Fo(e, t, n) {
        var r = false, l = an, i = t.contextType;
        return typeof i == "object" && i !== null ? i = bt(i) : (l = mt(t) ? wn : at.current, r = t.contextTypes, i = (r = r != null) ? Un(e, l) : an), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ml, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
      }
      function Bo(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ml.enqueueReplaceState(t, t.state, null);
      }
      function cs(e, t, n, r) {
        var l = e.stateNode;
        l.props = n, l.state = e.memoizedState, l.refs = {}, Xi(e);
        var i = t.contextType;
        typeof i == "object" && i !== null ? l.context = bt(i) : (i = mt(t) ? wn : at.current, l.context = Un(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (us(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ml.enqueueReplaceState(l, l.state, null), Sl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
      }
      function Xn(e, t) {
        try {
          var n = "", r = t;
          do
            n += U(r), r = r.return;
          while (r);
          var l = n;
        } catch (i) {
          l = `
Error generating stack: ` + i.message + `
` + i.stack;
        }
        return {
          value: e,
          source: t,
          stack: l,
          digest: null
        };
      }
      function ds(e, t, n) {
        return {
          value: e,
          source: null,
          stack: n ?? null,
          digest: t ?? null
        };
      }
      function fs(e, t) {
        try {
          console.error(t.value);
        } catch (n) {
          setTimeout(function() {
            throw n;
          });
        }
      }
      var wd = typeof WeakMap == "function" ? WeakMap : Map;
      function Uo(e, t, n) {
        n = Kt(-1, n), n.tag = 3, n.payload = {
          element: null
        };
        var r = t.value;
        return n.callback = function() {
          Al || (Al = true, bs = r), fs(e, t);
        }, n;
      }
      function Wo(e, t, n) {
        n = Kt(-1, n), n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
          var l = t.value;
          n.payload = function() {
            return r(l);
          }, n.callback = function() {
            fs(e, t);
          };
        }
        var i = e.stateNode;
        return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
          fs(e, t), typeof r != "function" && (fn === null ? fn = /* @__PURE__ */ new Set([
            this
          ]) : fn.add(this));
          var o = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
          });
        }), n;
      }
      function Ho(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
          r = e.pingCache = new wd();
          var l = /* @__PURE__ */ new Set();
          r.set(t, l);
        } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
        l.has(n) || (l.add(n), e = Ld.bind(null, e, t, n), t.then(e, e));
      }
      function Vo(e) {
        do {
          var t;
          if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e;
          e = e.return;
        } while (e !== null);
        return null;
      }
      function Qo(e, t, n, r, l) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Kt(-1, 1), t.tag = 2, cn(n, t, 1))), n.lanes |= 1), e);
      }
      var kd = pe.ReactCurrentOwner, gt = false;
      function ft(e, t, n, r) {
        t.child = e === null ? fo(t, null, n, r) : Qn(t, e.child, n, r);
      }
      function Yo(e, t, n, r, l) {
        n = n.render;
        var i = t.ref;
        return Gn(t, l), r = rs(e, t, n, r, i, l), n = ls(), e !== null && !gt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Xt(e, t, l)) : (Fe && n && Fi(t), t.flags |= 1, ft(e, t, r, l), t.child);
      }
      function Go(e, t, n, r, l) {
        if (e === null) {
          var i = n.type;
          return typeof i == "function" && !Ls(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ko(e, t, i, r, l)) : (e = Ul(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
        }
        if (i = e.child, !(e.lanes & l)) {
          var o = i.memoizedProps;
          if (n = n.compare, n = n !== null ? n : yr, n(o, r) && e.ref === t.ref) return Xt(e, t, l);
        }
        return t.flags |= 1, e = gn(i, r), e.ref = t.ref, e.return = t, t.child = e;
      }
      function Ko(e, t, n, r, l) {
        if (e !== null) {
          var i = e.memoizedProps;
          if (yr(i, r) && e.ref === t.ref) if (gt = false, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (gt = true);
          else return t.lanes = e.lanes, Xt(e, t, l);
        }
        return ps(e, t, n, r, l);
      }
      function Xo(e, t, n) {
        var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        }, ze(Zn, Ct), Ct |= n;
        else {
          if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
          }, t.updateQueue = null, ze(Zn, Ct), Ct |= e, null;
          t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
          }, r = i !== null ? i.baseLanes : n, ze(Zn, Ct), Ct |= r;
        }
        else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ze(Zn, Ct), Ct |= r;
        return ft(e, t, l, n), t.child;
      }
      function qo(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
      }
      function ps(e, t, n, r, l) {
        var i = mt(n) ? wn : at.current;
        return i = Un(t, i), Gn(t, l), n = rs(e, t, n, r, i, l), r = ls(), e !== null && !gt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Xt(e, t, l)) : (Fe && r && Fi(t), t.flags |= 1, ft(e, t, n, l), t.child);
      }
      function Zo(e, t, n, r, l) {
        if (mt(n)) {
          var i = true;
          pl(t);
        } else i = false;
        if (Gn(t, l), t.stateNode === null) Tl(e, t), Fo(t, n, r), cs(t, n, r, l), r = true;
        else if (e === null) {
          var o = t.stateNode, c = t.memoizedProps;
          o.props = c;
          var f = o.context, k = n.contextType;
          typeof k == "object" && k !== null ? k = bt(k) : (k = mt(n) ? wn : at.current, k = Un(t, k));
          var _ = n.getDerivedStateFromProps, T = typeof _ == "function" || typeof o.getSnapshotBeforeUpdate == "function";
          T || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (c !== r || f !== k) && Bo(t, o, r, k), un = false;
          var b = t.memoizedState;
          o.state = b, Sl(t, r, o, l), f = t.memoizedState, c !== r || b !== f || ht.current || un ? (typeof _ == "function" && (us(t, n, _, r), f = t.memoizedState), (c = un || $o(t, n, c, r, b, f, k)) ? (T || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = f), o.props = r, o.state = f, o.context = k, r = c) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = false);
        } else {
          o = t.stateNode, ho(e, t), c = t.memoizedProps, k = t.type === t.elementType ? c : zt(t.type, c), o.props = k, T = t.pendingProps, b = o.context, f = n.contextType, typeof f == "object" && f !== null ? f = bt(f) : (f = mt(n) ? wn : at.current, f = Un(t, f));
          var V = n.getDerivedStateFromProps;
          (_ = typeof V == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (c !== T || b !== f) && Bo(t, o, r, f), un = false, b = t.memoizedState, o.state = b, Sl(t, r, o, l);
          var X = t.memoizedState;
          c !== T || b !== X || ht.current || un ? (typeof V == "function" && (us(t, n, V, r), X = t.memoizedState), (k = un || $o(t, n, k, r, b, X, f) || false) ? (_ || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, X, f), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, X, f)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || c === e.memoizedProps && b === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && b === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = X), o.props = r, o.state = X, o.context = f, r = k) : (typeof o.componentDidUpdate != "function" || c === e.memoizedProps && b === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && b === e.memoizedState || (t.flags |= 1024), r = false);
        }
        return hs(e, t, n, r, i, l);
      }
      function hs(e, t, n, r, l, i) {
        qo(e, t);
        var o = (t.flags & 128) !== 0;
        if (!r && !o) return l && no(t, n, false), Xt(e, t, i);
        r = t.stateNode, kd.current = t;
        var c = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && o ? (t.child = Qn(t, e.child, null, i), t.child = Qn(t, null, c, i)) : ft(e, t, c, i), t.memoizedState = r.state, l && no(t, n, true), t.child;
      }
      function Jo(e) {
        var t = e.stateNode;
        t.pendingContext ? eo(e, t.pendingContext, t.pendingContext !== t.context) : t.context && eo(e, t.context, false), qi(e, t.containerInfo);
      }
      function eu(e, t, n, r, l) {
        return Vn(), Hi(l), t.flags |= 256, ft(e, t, n, r), t.child;
      }
      var ms = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
      };
      function gs(e) {
        return {
          baseLanes: e,
          cachePool: null,
          transitions: null
        };
      }
      function tu(e, t, n) {
        var r = t.pendingProps, l = Be.current, i = false, o = (t.flags & 128) !== 0, c;
        if ((c = o) || (c = e !== null && e.memoizedState === null ? false : (l & 2) !== 0), c ? (i = true, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ze(Be, l & 1), e === null) return Wi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = {
          mode: "hidden",
          children: o
        }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Wl(o, r, 0, null), e = Pn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = gs(n), t.memoizedState = ms, e) : vs(t, o));
        if (l = e.memoizedState, l !== null && (c = l.dehydrated, c !== null)) return Sd(e, t, o, r, c, l, n);
        if (i) {
          i = r.fallback, o = t.mode, l = e.child, c = l.sibling;
          var f = {
            mode: "hidden",
            children: r.children
          };
          return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = f, t.deletions = null) : (r = gn(l, f), r.subtreeFlags = l.subtreeFlags & 14680064), c !== null ? i = gn(c, i) : (i = Pn(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? gs(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
          }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = ms, r;
        }
        return i = e.child, e = i.sibling, r = gn(i, {
          mode: "visible",
          children: r.children
        }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
          e
        ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
      }
      function vs(e, t) {
        return t = Wl({
          mode: "visible",
          children: t
        }, e.mode, 0, null), t.return = e, e.child = t;
      }
      function Pl(e, t, n, r) {
        return r !== null && Hi(r), Qn(t, e.child, null, n), e = vs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
      }
      function Sd(e, t, n, r, l, i, o) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = ds(Error(h(422))), Pl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Wl({
          mode: "visible",
          children: r.children
        }, l, 0, null), i = Pn(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Qn(t, e.child, null, o), t.child.memoizedState = gs(o), t.memoizedState = ms, i);
        if (!(t.mode & 1)) return Pl(e, t, o, null);
        if (l.data === "$!") {
          if (r = l.nextSibling && l.nextSibling.dataset, r) var c = r.dgst;
          return r = c, i = Error(h(419)), r = ds(i, r, void 0), Pl(e, t, o, r);
        }
        if (c = (o & e.childLanes) !== 0, gt || c) {
          if (r = tt, r !== null) {
            switch (o & -o) {
              case 4:
                l = 2;
                break;
              case 16:
                l = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                l = 32;
                break;
              case 536870912:
                l = 268435456;
                break;
              default:
                l = 0;
            }
            l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Gt(e, l), Ot(r, e, l, -1));
          }
          return Is(), r = ds(Error(h(421))), Pl(e, t, o, r);
        }
        return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = zd.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Nt = ln(l.nextSibling), St = t, Fe = true, Lt = null, e !== null && (Et[jt++] = Qt, Et[jt++] = Yt, Et[jt++] = kn, Qt = e.id, Yt = e.overflow, kn = t), t = vs(t, r.children), t.flags |= 4096, t);
      }
      function nu(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), Gi(e.return, t, n);
      }
      function ys(e, t, n, r, l) {
        var i = e.memoizedState;
        i === null ? e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l
        } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
      }
      function ru(e, t, n) {
        var r = t.pendingProps, l = r.revealOrder, i = r.tail;
        if (ft(e, t, r.children, n), r = Be.current, r & 2) r = r & 1 | 2, t.flags |= 128;
        else {
          if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
            if (e.tag === 13) e.memoizedState !== null && nu(e, n, t);
            else if (e.tag === 19) nu(e, n, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
          r &= 1;
        }
        if (ze(Be, r), !(t.mode & 1)) t.memoizedState = null;
        else switch (l) {
          case "forwards":
            for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Nl(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ys(t, false, l, n, i);
            break;
          case "backwards":
            for (n = null, l = t.child, t.child = null; l !== null; ) {
              if (e = l.alternate, e !== null && Nl(e) === null) {
                t.child = l;
                break;
              }
              e = l.sibling, l.sibling = n, n = l, l = e;
            }
            ys(t, true, n, null, i);
            break;
          case "together":
            ys(t, false, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
        return t.child;
      }
      function Tl(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
      }
      function Xt(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), jn |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(h(153));
        if (t.child !== null) {
          for (e = t.child, n = gn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = gn(e, e.pendingProps), n.return = t;
          n.sibling = null;
        }
        return t.child;
      }
      function Nd(e, t, n) {
        switch (t.tag) {
          case 3:
            Jo(t), Vn();
            break;
          case 5:
            vo(t);
            break;
          case 1:
            mt(t.type) && pl(t);
            break;
          case 4:
            qi(t, t.stateNode.containerInfo);
            break;
          case 10:
            var r = t.type._context, l = t.memoizedProps.value;
            ze(xl, r._currentValue), r._currentValue = l;
            break;
          case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ze(Be, Be.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? tu(e, t, n) : (ze(Be, Be.current & 1), e = Xt(e, t, n), e !== null ? e.sibling : null);
            ze(Be, Be.current & 1);
            break;
          case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
              if (r) return ru(e, t, n);
              t.flags |= 128;
            }
            if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ze(Be, Be.current), r) break;
            return null;
          case 22:
          case 23:
            return t.lanes = 0, Xo(e, t, n);
        }
        return Xt(e, t, n);
      }
      var lu, xs, iu, su;
      lu = function(e, t) {
        for (var n = t.child; n !== null; ) {
          if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
          else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue;
          }
          if (n === t) break;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
          }
          n.sibling.return = n.return, n = n.sibling;
        }
      }, xs = function() {
      }, iu = function(e, t, n, r) {
        var l = e.memoizedProps;
        if (l !== r) {
          e = t.stateNode, Cn(Bt.current);
          var i = null;
          switch (n) {
            case "input":
              l = re(e, l), r = re(e, r), i = [];
              break;
            case "select":
              l = p({}, l, {
                value: void 0
              }), r = p({}, r, {
                value: void 0
              }), i = [];
              break;
            case "textarea":
              l = ye(e, l), r = ye(e, r), i = [];
              break;
            default:
              typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = cl);
          }
          Jl(n, r);
          var o;
          n = null;
          for (k in l) if (!r.hasOwnProperty(k) && l.hasOwnProperty(k) && l[k] != null) if (k === "style") {
            var c = l[k];
            for (o in c) c.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
          } else k !== "dangerouslySetInnerHTML" && k !== "children" && k !== "suppressContentEditableWarning" && k !== "suppressHydrationWarning" && k !== "autoFocus" && (z.hasOwnProperty(k) ? i || (i = []) : (i = i || []).push(k, null));
          for (k in r) {
            var f = r[k];
            if (c = l == null ? void 0 : l[k], r.hasOwnProperty(k) && f !== c && (f != null || c != null)) if (k === "style") if (c) {
              for (o in c) !c.hasOwnProperty(o) || f && f.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
              for (o in f) f.hasOwnProperty(o) && c[o] !== f[o] && (n || (n = {}), n[o] = f[o]);
            } else n || (i || (i = []), i.push(k, n)), n = f;
            else k === "dangerouslySetInnerHTML" ? (f = f ? f.__html : void 0, c = c ? c.__html : void 0, f != null && c !== f && (i = i || []).push(k, f)) : k === "children" ? typeof f != "string" && typeof f != "number" || (i = i || []).push(k, "" + f) : k !== "suppressContentEditableWarning" && k !== "suppressHydrationWarning" && (z.hasOwnProperty(k) ? (f != null && k === "onScroll" && Oe("scroll", e), i || c === f || (i = [])) : (i = i || []).push(k, f));
          }
          n && (i = i || []).push("style", n);
          var k = i;
          (t.updateQueue = k) && (t.flags |= 4);
        }
      }, su = function(e, t, n, r) {
        n !== r && (t.flags |= 4);
      };
      function Ir(e, t) {
        if (!Fe) switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
          case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
        }
      }
      function ut(e) {
        var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
        if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
        else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t;
      }
      function Cd(e, t, n) {
        var r = t.pendingProps;
        switch (Bi(t), t.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return ut(t), null;
          case 1:
            return mt(t.type) && fl(), ut(t), null;
          case 3:
            return r = t.stateNode, Kn(), $e(ht), $e(at), es(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (vl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Lt !== null && (Ps(Lt), Lt = null))), xs(e, t), ut(t), null;
          case 5:
            Zi(t);
            var l = Cn(_r.current);
            if (n = t.type, e !== null && t.stateNode != null) iu(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
              if (!r) {
                if (t.stateNode === null) throw Error(h(166));
                return ut(t), null;
              }
              if (e = Cn(Bt.current), vl(t)) {
                r = t.stateNode, n = t.type;
                var i = t.memoizedProps;
                switch (r[Ft] = t, r[Nr] = i, e = (t.mode & 1) !== 0, n) {
                  case "dialog":
                    Oe("cancel", r), Oe("close", r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Oe("load", r);
                    break;
                  case "video":
                  case "audio":
                    for (l = 0; l < wr.length; l++) Oe(wr[l], r);
                    break;
                  case "source":
                    Oe("error", r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Oe("error", r), Oe("load", r);
                    break;
                  case "details":
                    Oe("toggle", r);
                    break;
                  case "input":
                    ve(r, i), Oe("invalid", r);
                    break;
                  case "select":
                    r._wrapperState = {
                      wasMultiple: !!i.multiple
                    }, Oe("invalid", r);
                    break;
                  case "textarea":
                    Te(r, i), Oe("invalid", r);
                }
                Jl(n, i), l = null;
                for (var o in i) if (i.hasOwnProperty(o)) {
                  var c = i[o];
                  o === "children" ? typeof c == "string" ? r.textContent !== c && (i.suppressHydrationWarning !== true && ul(r.textContent, c, e), l = [
                    "children",
                    c
                  ]) : typeof c == "number" && r.textContent !== "" + c && (i.suppressHydrationWarning !== true && ul(r.textContent, c, e), l = [
                    "children",
                    "" + c
                  ]) : z.hasOwnProperty(o) && c != null && o === "onScroll" && Oe("scroll", r);
                }
                switch (n) {
                  case "input":
                    se(r), Ae(r, i, true);
                    break;
                  case "textarea":
                    se(r), Ce(r);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    typeof i.onClick == "function" && (r.onclick = cl);
                }
                r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
              } else {
                o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = we(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                  is: r.is
                }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = true : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Ft] = t, e[Nr] = r, lu(e, t, false, false), t.stateNode = e;
                e: {
                  switch (o = ei(n, r), n) {
                    case "dialog":
                      Oe("cancel", e), Oe("close", e), l = r;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Oe("load", e), l = r;
                      break;
                    case "video":
                    case "audio":
                      for (l = 0; l < wr.length; l++) Oe(wr[l], e);
                      l = r;
                      break;
                    case "source":
                      Oe("error", e), l = r;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Oe("error", e), Oe("load", e), l = r;
                      break;
                    case "details":
                      Oe("toggle", e), l = r;
                      break;
                    case "input":
                      ve(e, r), l = re(e, r), Oe("invalid", e);
                      break;
                    case "option":
                      l = r;
                      break;
                    case "select":
                      e._wrapperState = {
                        wasMultiple: !!r.multiple
                      }, l = p({}, r, {
                        value: void 0
                      }), Oe("invalid", e);
                      break;
                    case "textarea":
                      Te(e, r), l = ye(e, r), Oe("invalid", e);
                      break;
                    default:
                      l = r;
                  }
                  Jl(n, l), c = l;
                  for (i in c) if (c.hasOwnProperty(i)) {
                    var f = c[i];
                    i === "style" ? Gs(e, f) : i === "dangerouslySetInnerHTML" ? (f = f ? f.__html : void 0, f != null && wt(e, f)) : i === "children" ? typeof f == "string" ? (n !== "textarea" || f !== "") && Je(e, f) : typeof f == "number" && Je(e, "" + f) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (z.hasOwnProperty(i) ? f != null && i === "onScroll" && Oe("scroll", e) : f != null && te(e, i, f, o));
                  }
                  switch (n) {
                    case "input":
                      se(e), Ae(e, r, false);
                      break;
                    case "textarea":
                      se(e), Ce(e);
                      break;
                    case "option":
                      r.value != null && e.setAttribute("value", "" + P(r.value));
                      break;
                    case "select":
                      e.multiple = !!r.multiple, i = r.value, i != null ? d(e, !!r.multiple, i, false) : r.defaultValue != null && d(e, !!r.multiple, r.defaultValue, true);
                      break;
                    default:
                      typeof l.onClick == "function" && (e.onclick = cl);
                  }
                  switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      r = !!r.autoFocus;
                      break e;
                    case "img":
                      r = true;
                      break e;
                    default:
                      r = false;
                  }
                }
                r && (t.flags |= 4);
              }
              t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
            }
            return ut(t), null;
          case 6:
            if (e && t.stateNode != null) su(e, t, e.memoizedProps, r);
            else {
              if (typeof r != "string" && t.stateNode === null) throw Error(h(166));
              if (n = Cn(_r.current), Cn(Bt.current), vl(t)) {
                if (r = t.stateNode, n = t.memoizedProps, r[Ft] = t, (i = r.nodeValue !== n) && (e = St, e !== null)) switch (e.tag) {
                  case 3:
                    ul(r.nodeValue, n, (e.mode & 1) !== 0);
                    break;
                  case 5:
                    e.memoizedProps.suppressHydrationWarning !== true && ul(r.nodeValue, n, (e.mode & 1) !== 0);
                }
                i && (t.flags |= 4);
              } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ft] = t, t.stateNode = r;
            }
            return ut(t), null;
          case 13:
            if ($e(Be), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
              if (Fe && Nt !== null && t.mode & 1 && !(t.flags & 128)) oo(), Vn(), t.flags |= 98560, i = false;
              else if (i = vl(t), r !== null && r.dehydrated !== null) {
                if (e === null) {
                  if (!i) throw Error(h(318));
                  if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(h(317));
                  i[Ft] = t;
                } else Vn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                ut(t), i = false;
              } else Lt !== null && (Ps(Lt), Lt = null), i = true;
              if (!i) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Be.current & 1 ? qe === 0 && (qe = 3) : Is())), t.updateQueue !== null && (t.flags |= 4), ut(t), null);
          case 4:
            return Kn(), xs(e, t), e === null && kr(t.stateNode.containerInfo), ut(t), null;
          case 10:
            return Yi(t.type._context), ut(t), null;
          case 17:
            return mt(t.type) && fl(), ut(t), null;
          case 19:
            if ($e(Be), i = t.memoizedState, i === null) return ut(t), null;
            if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) Ir(i, false);
            else {
              if (qe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
                if (o = Nl(e), o !== null) {
                  for (t.flags |= 128, Ir(i, false), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : {
                    lanes: e.lanes,
                    firstContext: e.firstContext
                  }), n = n.sibling;
                  return ze(Be, Be.current & 1 | 2), t.child;
                }
                e = e.sibling;
              }
              i.tail !== null && He() > Jn && (t.flags |= 128, r = true, Ir(i, false), t.lanes = 4194304);
            }
            else {
              if (!r) if (e = Nl(o), e !== null) {
                if (t.flags |= 128, r = true, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ir(i, true), i.tail === null && i.tailMode === "hidden" && !o.alternate && !Fe) return ut(t), null;
              } else 2 * He() - i.renderingStartTime > Jn && n !== 1073741824 && (t.flags |= 128, r = true, Ir(i, false), t.lanes = 4194304);
              i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = He(), t.sibling = null, n = Be.current, ze(Be, r ? n & 1 | 2 : n & 1), t) : (ut(t), null);
          case 22:
          case 23:
            return Rs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ct & 1073741824 && (ut(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ut(t), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(h(156, t.tag));
      }
      function Ed(e, t) {
        switch (Bi(t), t.tag) {
          case 1:
            return mt(t.type) && fl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
          case 3:
            return Kn(), $e(ht), $e(at), es(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
          case 5:
            return Zi(t), null;
          case 13:
            if ($e(Be), e = t.memoizedState, e !== null && e.dehydrated !== null) {
              if (t.alternate === null) throw Error(h(340));
              Vn();
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
          case 19:
            return $e(Be), null;
          case 4:
            return Kn(), null;
          case 10:
            return Yi(t.type._context), null;
          case 22:
          case 23:
            return Rs(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Rl = false, ct = false, jd = typeof WeakSet == "function" ? WeakSet : Set, K = null;
      function qn(e, t) {
        var n = e.ref;
        if (n !== null) if (typeof n == "function") try {
          n(null);
        } catch (r) {
          We(e, t, r);
        }
        else n.current = null;
      }
      function ws(e, t, n) {
        try {
          n();
        } catch (r) {
          We(e, t, r);
        }
      }
      var au = false;
      function bd(e, t) {
        if (Ri = Zr, e = Oa(), Ci(e)) {
          if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
          else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var l = r.anchorOffset, i = r.focusNode;
              r = r.focusOffset;
              try {
                n.nodeType, i.nodeType;
              } catch {
                n = null;
                break e;
              }
              var o = 0, c = -1, f = -1, k = 0, _ = 0, T = e, b = null;
              t: for (; ; ) {
                for (var V; T !== n || l !== 0 && T.nodeType !== 3 || (c = o + l), T !== i || r !== 0 && T.nodeType !== 3 || (f = o + r), T.nodeType === 3 && (o += T.nodeValue.length), (V = T.firstChild) !== null; ) b = T, T = V;
                for (; ; ) {
                  if (T === e) break t;
                  if (b === n && ++k === l && (c = o), b === i && ++_ === r && (f = o), (V = T.nextSibling) !== null) break;
                  T = b, b = T.parentNode;
                }
                T = V;
              }
              n = c === -1 || f === -1 ? null : {
                start: c,
                end: f
              };
            } else n = null;
          }
          n = n || {
            start: 0,
            end: 0
          };
        } else n = null;
        for (Ii = {
          focusedElem: e,
          selectionRange: n
        }, Zr = false, K = t; K !== null; ) if (t = K, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, K = e;
        else for (; K !== null; ) {
          t = K;
          try {
            var X = t.alternate;
            if (t.flags & 1024) switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (X !== null) {
                  var J = X.memoizedProps, Ve = X.memoizedState, g = t.stateNode, m = g.getSnapshotBeforeUpdate(t.elementType === t.type ? J : zt(t.type, J), Ve);
                  g.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var w = t.stateNode.containerInfo;
                w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(h(163));
            }
          } catch (A) {
            We(t, t.return, A);
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, K = e;
            break;
          }
          K = t.return;
        }
        return X = au, au = false, X;
      }
      function Lr(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null, r !== null) {
          var l = r = r.next;
          do {
            if ((l.tag & e) === e) {
              var i = l.destroy;
              l.destroy = void 0, i !== void 0 && ws(t, n, i);
            }
            l = l.next;
          } while (l !== r);
        }
      }
      function Il(e, t) {
        if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
          var n = t = t.next;
          do {
            if ((n.tag & e) === e) {
              var r = n.create;
              n.destroy = r();
            }
            n = n.next;
          } while (n !== t);
        }
      }
      function ks(e) {
        var t = e.ref;
        if (t !== null) {
          var n = e.stateNode;
          switch (e.tag) {
            case 5:
              e = n;
              break;
            default:
              e = n;
          }
          typeof t == "function" ? t(e) : t.current = e;
        }
      }
      function ou(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, ou(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ft], delete t[Nr], delete t[Di], delete t[ud], delete t[cd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
      function uu(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
      }
      function cu(e) {
        e: for (; ; ) {
          for (; e.sibling === null; ) {
            if (e.return === null || uu(e.return)) return null;
            e = e.return;
          }
          for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child;
          }
          if (!(e.flags & 2)) return e.stateNode;
        }
      }
      function Ss(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = cl));
        else if (r !== 4 && (e = e.child, e !== null)) for (Ss(e, t, n), e = e.sibling; e !== null; ) Ss(e, t, n), e = e.sibling;
      }
      function Ns(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null)) for (Ns(e, t, n), e = e.sibling; e !== null; ) Ns(e, t, n), e = e.sibling;
      }
      var lt = null, At = false;
      function dn(e, t, n) {
        for (n = n.child; n !== null; ) du(e, t, n), n = n.sibling;
      }
      function du(e, t, n) {
        if ($t && typeof $t.onCommitFiberUnmount == "function") try {
          $t.onCommitFiberUnmount(Qr, n);
        } catch {
        }
        switch (n.tag) {
          case 5:
            ct || qn(n, t);
          case 6:
            var r = lt, l = At;
            lt = null, dn(e, t, n), lt = r, At = l, lt !== null && (At ? (e = lt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : lt.removeChild(n.stateNode));
            break;
          case 18:
            lt !== null && (At ? (e = lt, n = n.stateNode, e.nodeType === 8 ? Ai(e.parentNode, n) : e.nodeType === 1 && Ai(e, n), fr(e)) : Ai(lt, n.stateNode));
            break;
          case 4:
            r = lt, l = At, lt = n.stateNode.containerInfo, At = true, dn(e, t, n), lt = r, At = l;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!ct && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
              l = r = r.next;
              do {
                var i = l, o = i.destroy;
                i = i.tag, o !== void 0 && (i & 2 || i & 4) && ws(n, t, o), l = l.next;
              } while (l !== r);
            }
            dn(e, t, n);
            break;
          case 1:
            if (!ct && (qn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
              r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
            } catch (c) {
              We(n, t, c);
            }
            dn(e, t, n);
            break;
          case 21:
            dn(e, t, n);
            break;
          case 22:
            n.mode & 1 ? (ct = (r = ct) || n.memoizedState !== null, dn(e, t, n), ct = r) : dn(e, t, n);
            break;
          default:
            dn(e, t, n);
        }
      }
      function fu(e) {
        var t = e.updateQueue;
        if (t !== null) {
          e.updateQueue = null;
          var n = e.stateNode;
          n === null && (n = e.stateNode = new jd()), t.forEach(function(r) {
            var l = Ad.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(l, l));
          });
        }
      }
      function Dt(e, t) {
        var n = t.deletions;
        if (n !== null) for (var r = 0; r < n.length; r++) {
          var l = n[r];
          try {
            var i = e, o = t, c = o;
            e: for (; c !== null; ) {
              switch (c.tag) {
                case 5:
                  lt = c.stateNode, At = false;
                  break e;
                case 3:
                  lt = c.stateNode.containerInfo, At = true;
                  break e;
                case 4:
                  lt = c.stateNode.containerInfo, At = true;
                  break e;
              }
              c = c.return;
            }
            if (lt === null) throw Error(h(160));
            du(i, o, l), lt = null, At = false;
            var f = l.alternate;
            f !== null && (f.return = null), l.return = null;
          } catch (k) {
            We(l, t, k);
          }
        }
        if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) pu(t, e), t = t.sibling;
      }
      function pu(e, t) {
        var n = e.alternate, r = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            if (Dt(t, e), Wt(e), r & 4) {
              try {
                Lr(3, e, e.return), Il(3, e);
              } catch (J) {
                We(e, e.return, J);
              }
              try {
                Lr(5, e, e.return);
              } catch (J) {
                We(e, e.return, J);
              }
            }
            break;
          case 1:
            Dt(t, e), Wt(e), r & 512 && n !== null && qn(n, n.return);
            break;
          case 5:
            if (Dt(t, e), Wt(e), r & 512 && n !== null && qn(n, n.return), e.flags & 32) {
              var l = e.stateNode;
              try {
                Je(l, "");
              } catch (J) {
                We(e, e.return, J);
              }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
              var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, c = e.type, f = e.updateQueue;
              if (e.updateQueue = null, f !== null) try {
                c === "input" && i.type === "radio" && i.name != null && Le(l, i), ei(c, o);
                var k = ei(c, i);
                for (o = 0; o < f.length; o += 2) {
                  var _ = f[o], T = f[o + 1];
                  _ === "style" ? Gs(l, T) : _ === "dangerouslySetInnerHTML" ? wt(l, T) : _ === "children" ? Je(l, T) : te(l, _, T, k);
                }
                switch (c) {
                  case "input":
                    xe(l, i);
                    break;
                  case "textarea":
                    De(l, i);
                    break;
                  case "select":
                    var b = l._wrapperState.wasMultiple;
                    l._wrapperState.wasMultiple = !!i.multiple;
                    var V = i.value;
                    V != null ? d(l, !!i.multiple, V, false) : b !== !!i.multiple && (i.defaultValue != null ? d(l, !!i.multiple, i.defaultValue, true) : d(l, !!i.multiple, i.multiple ? [] : "", false));
                }
                l[Nr] = i;
              } catch (J) {
                We(e, e.return, J);
              }
            }
            break;
          case 6:
            if (Dt(t, e), Wt(e), r & 4) {
              if (e.stateNode === null) throw Error(h(162));
              l = e.stateNode, i = e.memoizedProps;
              try {
                l.nodeValue = i;
              } catch (J) {
                We(e, e.return, J);
              }
            }
            break;
          case 3:
            if (Dt(t, e), Wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
              fr(t.containerInfo);
            } catch (J) {
              We(e, e.return, J);
            }
            break;
          case 4:
            Dt(t, e), Wt(e);
            break;
          case 13:
            Dt(t, e), Wt(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (js = He())), r & 4 && fu(e);
            break;
          case 22:
            if (_ = n !== null && n.memoizedState !== null, e.mode & 1 ? (ct = (k = ct) || _, Dt(t, e), ct = k) : Dt(t, e), Wt(e), r & 8192) {
              if (k = e.memoizedState !== null, (e.stateNode.isHidden = k) && !_ && e.mode & 1) for (K = e, _ = e.child; _ !== null; ) {
                for (T = K = _; K !== null; ) {
                  switch (b = K, V = b.child, b.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Lr(4, b, b.return);
                      break;
                    case 1:
                      qn(b, b.return);
                      var X = b.stateNode;
                      if (typeof X.componentWillUnmount == "function") {
                        r = b, n = b.return;
                        try {
                          t = r, X.props = t.memoizedProps, X.state = t.memoizedState, X.componentWillUnmount();
                        } catch (J) {
                          We(r, n, J);
                        }
                      }
                      break;
                    case 5:
                      qn(b, b.return);
                      break;
                    case 22:
                      if (b.memoizedState !== null) {
                        gu(T);
                        continue;
                      }
                  }
                  V !== null ? (V.return = b, K = V) : gu(T);
                }
                _ = _.sibling;
              }
              e: for (_ = null, T = e; ; ) {
                if (T.tag === 5) {
                  if (_ === null) {
                    _ = T;
                    try {
                      l = T.stateNode, k ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (c = T.stateNode, f = T.memoizedProps.style, o = f != null && f.hasOwnProperty("display") ? f.display : null, c.style.display = Ur("display", o));
                    } catch (J) {
                      We(e, e.return, J);
                    }
                  }
                } else if (T.tag === 6) {
                  if (_ === null) try {
                    T.stateNode.nodeValue = k ? "" : T.memoizedProps;
                  } catch (J) {
                    We(e, e.return, J);
                  }
                } else if ((T.tag !== 22 && T.tag !== 23 || T.memoizedState === null || T === e) && T.child !== null) {
                  T.child.return = T, T = T.child;
                  continue;
                }
                if (T === e) break e;
                for (; T.sibling === null; ) {
                  if (T.return === null || T.return === e) break e;
                  _ === T && (_ = null), T = T.return;
                }
                _ === T && (_ = null), T.sibling.return = T.return, T = T.sibling;
              }
            }
            break;
          case 19:
            Dt(t, e), Wt(e), r & 4 && fu(e);
            break;
          case 21:
            break;
          default:
            Dt(t, e), Wt(e);
        }
      }
      function Wt(e) {
        var t = e.flags;
        if (t & 2) {
          try {
            e: {
              for (var n = e.return; n !== null; ) {
                if (uu(n)) {
                  var r = n;
                  break e;
                }
                n = n.return;
              }
              throw Error(h(160));
            }
            switch (r.tag) {
              case 5:
                var l = r.stateNode;
                r.flags & 32 && (Je(l, ""), r.flags &= -33);
                var i = cu(e);
                Ns(e, i, l);
                break;
              case 3:
              case 4:
                var o = r.stateNode.containerInfo, c = cu(e);
                Ss(e, c, o);
                break;
              default:
                throw Error(h(161));
            }
          } catch (f) {
            We(e, e.return, f);
          }
          e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
      }
      function _d(e, t, n) {
        K = e, hu(e);
      }
      function hu(e, t, n) {
        for (var r = (e.mode & 1) !== 0; K !== null; ) {
          var l = K, i = l.child;
          if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || Rl;
            if (!o) {
              var c = l.alternate, f = c !== null && c.memoizedState !== null || ct;
              c = Rl;
              var k = ct;
              if (Rl = o, (ct = f) && !k) for (K = l; K !== null; ) o = K, f = o.child, o.tag === 22 && o.memoizedState !== null ? vu(l) : f !== null ? (f.return = o, K = f) : vu(l);
              for (; i !== null; ) K = i, hu(i), i = i.sibling;
              K = l, Rl = c, ct = k;
            }
            mu(e);
          } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, K = i) : mu(e);
        }
      }
      function mu(e) {
        for (; K !== null; ) {
          var t = K;
          if (t.flags & 8772) {
            var n = t.alternate;
            try {
              if (t.flags & 8772) switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  ct || Il(5, t);
                  break;
                case 1:
                  var r = t.stateNode;
                  if (t.flags & 4 && !ct) if (n === null) r.componentDidMount();
                  else {
                    var l = t.elementType === t.type ? n.memoizedProps : zt(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                  var i = t.updateQueue;
                  i !== null && go(t, i, r);
                  break;
                case 3:
                  var o = t.updateQueue;
                  if (o !== null) {
                    if (n = null, t.child !== null) switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                    go(t, o, n);
                  }
                  break;
                case 5:
                  var c = t.stateNode;
                  if (n === null && t.flags & 4) {
                    n = c;
                    var f = t.memoizedProps;
                    switch (t.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        f.autoFocus && n.focus();
                        break;
                      case "img":
                        f.src && (n.src = f.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (t.memoizedState === null) {
                    var k = t.alternate;
                    if (k !== null) {
                      var _ = k.memoizedState;
                      if (_ !== null) {
                        var T = _.dehydrated;
                        T !== null && fr(T);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(h(163));
              }
              ct || t.flags & 512 && ks(t);
            } catch (b) {
              We(t, t.return, b);
            }
          }
          if (t === e) {
            K = null;
            break;
          }
          if (n = t.sibling, n !== null) {
            n.return = t.return, K = n;
            break;
          }
          K = t.return;
        }
      }
      function gu(e) {
        for (; K !== null; ) {
          var t = K;
          if (t === e) {
            K = null;
            break;
          }
          var n = t.sibling;
          if (n !== null) {
            n.return = t.return, K = n;
            break;
          }
          K = t.return;
        }
      }
      function vu(e) {
        for (; K !== null; ) {
          var t = K;
          try {
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                var n = t.return;
                try {
                  Il(4, t);
                } catch (f) {
                  We(t, n, f);
                }
                break;
              case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                  var l = t.return;
                  try {
                    r.componentDidMount();
                  } catch (f) {
                    We(t, l, f);
                  }
                }
                var i = t.return;
                try {
                  ks(t);
                } catch (f) {
                  We(t, i, f);
                }
                break;
              case 5:
                var o = t.return;
                try {
                  ks(t);
                } catch (f) {
                  We(t, o, f);
                }
            }
          } catch (f) {
            We(t, t.return, f);
          }
          if (t === e) {
            K = null;
            break;
          }
          var c = t.sibling;
          if (c !== null) {
            c.return = t.return, K = c;
            break;
          }
          K = t.return;
        }
      }
      var Md = Math.ceil, Ll = pe.ReactCurrentDispatcher, Cs = pe.ReactCurrentOwner, Mt = pe.ReactCurrentBatchConfig, Ee = 0, tt = null, Ge = null, it = 0, Ct = 0, Zn = sn(0), qe = 0, zr = null, jn = 0, zl = 0, Es = 0, Ar = null, vt = null, js = 0, Jn = 1 / 0, qt = null, Al = false, bs = null, fn = null, Dl = false, pn = null, Ol = 0, Dr = 0, _s = null, $l = -1, Fl = 0;
      function pt() {
        return Ee & 6 ? He() : $l !== -1 ? $l : $l = He();
      }
      function hn(e) {
        return e.mode & 1 ? Ee & 2 && it !== 0 ? it & -it : fd.transition !== null ? (Fl === 0 && (Fl = ua()), Fl) : (e = Ie, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ya(e.type)), e) : 1;
      }
      function Ot(e, t, n, r) {
        if (50 < Dr) throw Dr = 0, _s = null, Error(h(185));
        ar(e, n, r), (!(Ee & 2) || e !== tt) && (e === tt && (!(Ee & 2) && (zl |= n), qe === 4 && mn(e, it)), yt(e, r), n === 1 && Ee === 0 && !(t.mode & 1) && (Jn = He() + 500, hl && on()));
      }
      function yt(e, t) {
        var n = e.callbackNode;
        fc(e, t);
        var r = Kr(e, e === tt ? it : 0);
        if (r === 0) n !== null && sa(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
          if (n != null && sa(n), t === 1) e.tag === 0 ? dd(xu.bind(null, e)) : ro(xu.bind(null, e)), ad(function() {
            !(Ee & 6) && on();
          }), n = null;
          else {
            switch (ca(r)) {
              case 1:
                n = ai;
                break;
              case 4:
                n = aa;
                break;
              case 16:
                n = Vr;
                break;
              case 536870912:
                n = oa;
                break;
              default:
                n = Vr;
            }
            n = bu(n, yu.bind(null, e));
          }
          e.callbackPriority = t, e.callbackNode = n;
        }
      }
      function yu(e, t) {
        if ($l = -1, Fl = 0, Ee & 6) throw Error(h(327));
        var n = e.callbackNode;
        if (er() && e.callbackNode !== n) return null;
        var r = Kr(e, e === tt ? it : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = Bl(e, r);
        else {
          t = r;
          var l = Ee;
          Ee |= 2;
          var i = ku();
          (tt !== e || it !== t) && (qt = null, Jn = He() + 500, _n(e, t));
          do
            try {
              Rd();
              break;
            } catch (c) {
              wu(e, c);
            }
          while (true);
          Qi(), Ll.current = i, Ee = l, Ge !== null ? t = 0 : (tt = null, it = 0, t = qe);
        }
        if (t !== 0) {
          if (t === 2 && (l = oi(e), l !== 0 && (r = l, t = Ms(e, l))), t === 1) throw n = zr, _n(e, 0), mn(e, r), yt(e, He()), n;
          if (t === 6) mn(e, r);
          else {
            if (l = e.current.alternate, !(r & 30) && !Pd(l) && (t = Bl(e, r), t === 2 && (i = oi(e), i !== 0 && (r = i, t = Ms(e, i))), t === 1)) throw n = zr, _n(e, 0), mn(e, r), yt(e, He()), n;
            switch (e.finishedWork = l, e.finishedLanes = r, t) {
              case 0:
              case 1:
                throw Error(h(345));
              case 2:
                Mn(e, vt, qt);
                break;
              case 3:
                if (mn(e, r), (r & 130023424) === r && (t = js + 500 - He(), 10 < t)) {
                  if (Kr(e, 0) !== 0) break;
                  if (l = e.suspendedLanes, (l & r) !== r) {
                    pt(), e.pingedLanes |= e.suspendedLanes & l;
                    break;
                  }
                  e.timeoutHandle = zi(Mn.bind(null, e, vt, qt), t);
                  break;
                }
                Mn(e, vt, qt);
                break;
              case 4:
                if (mn(e, r), (r & 4194240) === r) break;
                for (t = e.eventTimes, l = -1; 0 < r; ) {
                  var o = 31 - Rt(r);
                  i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
                }
                if (r = l, r = He() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Md(r / 1960)) - r, 10 < r) {
                  e.timeoutHandle = zi(Mn.bind(null, e, vt, qt), r);
                  break;
                }
                Mn(e, vt, qt);
                break;
              case 5:
                Mn(e, vt, qt);
                break;
              default:
                throw Error(h(329));
            }
          }
        }
        return yt(e, He()), e.callbackNode === n ? yu.bind(null, e) : null;
      }
      function Ms(e, t) {
        var n = Ar;
        return e.current.memoizedState.isDehydrated && (_n(e, t).flags |= 256), e = Bl(e, t), e !== 2 && (t = vt, vt = n, t !== null && Ps(t)), e;
      }
      function Ps(e) {
        vt === null ? vt = e : vt.push.apply(vt, e);
      }
      function Pd(e) {
        for (var t = e; ; ) {
          if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
              var l = n[r], i = l.getSnapshot;
              l = l.value;
              try {
                if (!It(i(), l)) return false;
              } catch {
                return false;
              }
            }
          }
          if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
          else {
            if (t === e) break;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) return true;
              t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
          }
        }
        return true;
      }
      function mn(e, t) {
        for (t &= ~Es, t &= ~zl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
          var n = 31 - Rt(t), r = 1 << n;
          e[n] = -1, t &= ~r;
        }
      }
      function xu(e) {
        if (Ee & 6) throw Error(h(327));
        er();
        var t = Kr(e, 0);
        if (!(t & 1)) return yt(e, He()), null;
        var n = Bl(e, t);
        if (e.tag !== 0 && n === 2) {
          var r = oi(e);
          r !== 0 && (t = r, n = Ms(e, r));
        }
        if (n === 1) throw n = zr, _n(e, 0), mn(e, t), yt(e, He()), n;
        if (n === 6) throw Error(h(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, Mn(e, vt, qt), yt(e, He()), null;
      }
      function Ts(e, t) {
        var n = Ee;
        Ee |= 1;
        try {
          return e(t);
        } finally {
          Ee = n, Ee === 0 && (Jn = He() + 500, hl && on());
        }
      }
      function bn(e) {
        pn !== null && pn.tag === 0 && !(Ee & 6) && er();
        var t = Ee;
        Ee |= 1;
        var n = Mt.transition, r = Ie;
        try {
          if (Mt.transition = null, Ie = 1, e) return e();
        } finally {
          Ie = r, Mt.transition = n, Ee = t, !(Ee & 6) && on();
        }
      }
      function Rs() {
        Ct = Zn.current, $e(Zn);
      }
      function _n(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, sd(n)), Ge !== null) for (n = Ge.return; n !== null; ) {
          var r = n;
          switch (Bi(r), r.tag) {
            case 1:
              r = r.type.childContextTypes, r != null && fl();
              break;
            case 3:
              Kn(), $e(ht), $e(at), es();
              break;
            case 5:
              Zi(r);
              break;
            case 4:
              Kn();
              break;
            case 13:
              $e(Be);
              break;
            case 19:
              $e(Be);
              break;
            case 10:
              Yi(r.type._context);
              break;
            case 22:
            case 23:
              Rs();
          }
          n = n.return;
        }
        if (tt = e, Ge = e = gn(e.current, null), it = Ct = t, qe = 0, zr = null, Es = zl = jn = 0, vt = Ar = null, Nn !== null) {
          for (t = 0; t < Nn.length; t++) if (n = Nn[t], r = n.interleaved, r !== null) {
            n.interleaved = null;
            var l = r.next, i = n.pending;
            if (i !== null) {
              var o = i.next;
              i.next = l, r.next = o;
            }
            n.pending = r;
          }
          Nn = null;
        }
        return e;
      }
      function wu(e, t) {
        do {
          var n = Ge;
          try {
            if (Qi(), Cl.current = _l, El) {
              for (var r = Ue.memoizedState; r !== null; ) {
                var l = r.queue;
                l !== null && (l.pending = null), r = r.next;
              }
              El = false;
            }
            if (En = 0, et = Xe = Ue = null, Mr = false, Pr = 0, Cs.current = null, n === null || n.return === null) {
              qe = 1, zr = t, Ge = null;
              break;
            }
            e: {
              var i = e, o = n.return, c = n, f = t;
              if (t = it, c.flags |= 32768, f !== null && typeof f == "object" && typeof f.then == "function") {
                var k = f, _ = c, T = _.tag;
                if (!(_.mode & 1) && (T === 0 || T === 11 || T === 15)) {
                  var b = _.alternate;
                  b ? (_.updateQueue = b.updateQueue, _.memoizedState = b.memoizedState, _.lanes = b.lanes) : (_.updateQueue = null, _.memoizedState = null);
                }
                var V = Vo(o);
                if (V !== null) {
                  V.flags &= -257, Qo(V, o, c, i, t), V.mode & 1 && Ho(i, k, t), t = V, f = k;
                  var X = t.updateQueue;
                  if (X === null) {
                    var J = /* @__PURE__ */ new Set();
                    J.add(f), t.updateQueue = J;
                  } else X.add(f);
                  break e;
                } else {
                  if (!(t & 1)) {
                    Ho(i, k, t), Is();
                    break e;
                  }
                  f = Error(h(426));
                }
              } else if (Fe && c.mode & 1) {
                var Ve = Vo(o);
                if (Ve !== null) {
                  !(Ve.flags & 65536) && (Ve.flags |= 256), Qo(Ve, o, c, i, t), Hi(Xn(f, c));
                  break e;
                }
              }
              i = f = Xn(f, c), qe !== 4 && (qe = 2), Ar === null ? Ar = [
                i
              ] : Ar.push(i), i = o;
              do {
                switch (i.tag) {
                  case 3:
                    i.flags |= 65536, t &= -t, i.lanes |= t;
                    var g = Uo(i, f, t);
                    mo(i, g);
                    break e;
                  case 1:
                    c = f;
                    var m = i.type, w = i.stateNode;
                    if (!(i.flags & 128) && (typeof m.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && (fn === null || !fn.has(w)))) {
                      i.flags |= 65536, t &= -t, i.lanes |= t;
                      var A = Wo(i, c, t);
                      mo(i, A);
                      break e;
                    }
                }
                i = i.return;
              } while (i !== null);
            }
            Nu(n);
          } catch (ee) {
            t = ee, Ge === n && n !== null && (Ge = n = n.return);
            continue;
          }
          break;
        } while (true);
      }
      function ku() {
        var e = Ll.current;
        return Ll.current = _l, e === null ? _l : e;
      }
      function Is() {
        (qe === 0 || qe === 3 || qe === 2) && (qe = 4), tt === null || !(jn & 268435455) && !(zl & 268435455) || mn(tt, it);
      }
      function Bl(e, t) {
        var n = Ee;
        Ee |= 2;
        var r = ku();
        (tt !== e || it !== t) && (qt = null, _n(e, t));
        do
          try {
            Td();
            break;
          } catch (l) {
            wu(e, l);
          }
        while (true);
        if (Qi(), Ee = n, Ll.current = r, Ge !== null) throw Error(h(261));
        return tt = null, it = 0, qe;
      }
      function Td() {
        for (; Ge !== null; ) Su(Ge);
      }
      function Rd() {
        for (; Ge !== null && !rc(); ) Su(Ge);
      }
      function Su(e) {
        var t = ju(e.alternate, e, Ct);
        e.memoizedProps = e.pendingProps, t === null ? Nu(e) : Ge = t, Cs.current = null;
      }
      function Nu(e) {
        var t = e;
        do {
          var n = t.alternate;
          if (e = t.return, t.flags & 32768) {
            if (n = Ed(n, t), n !== null) {
              n.flags &= 32767, Ge = n;
              return;
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
              qe = 6, Ge = null;
              return;
            }
          } else if (n = Cd(n, t, Ct), n !== null) {
            Ge = n;
            return;
          }
          if (t = t.sibling, t !== null) {
            Ge = t;
            return;
          }
          Ge = t = e;
        } while (t !== null);
        qe === 0 && (qe = 5);
      }
      function Mn(e, t, n) {
        var r = Ie, l = Mt.transition;
        try {
          Mt.transition = null, Ie = 1, Id(e, t, n, r);
        } finally {
          Mt.transition = l, Ie = r;
        }
        return null;
      }
      function Id(e, t, n, r) {
        do
          er();
        while (pn !== null);
        if (Ee & 6) throw Error(h(327));
        n = e.finishedWork;
        var l = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(h(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var i = n.lanes | n.childLanes;
        if (pc(e, i), e === tt && (Ge = tt = null, it = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Dl || (Dl = true, bu(Vr, function() {
          return er(), null;
        })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
          i = Mt.transition, Mt.transition = null;
          var o = Ie;
          Ie = 1;
          var c = Ee;
          Ee |= 4, Cs.current = null, bd(e, n), pu(n, e), Jc(Ii), Zr = !!Ri, Ii = Ri = null, e.current = n, _d(n), lc(), Ee = c, Ie = o, Mt.transition = i;
        } else e.current = n;
        if (Dl && (Dl = false, pn = e, Ol = l), i = e.pendingLanes, i === 0 && (fn = null), ac(n.stateNode), yt(e, He()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
          componentStack: l.stack,
          digest: l.digest
        });
        if (Al) throw Al = false, e = bs, bs = null, e;
        return Ol & 1 && e.tag !== 0 && er(), i = e.pendingLanes, i & 1 ? e === _s ? Dr++ : (Dr = 0, _s = e) : Dr = 0, on(), null;
      }
      function er() {
        if (pn !== null) {
          var e = ca(Ol), t = Mt.transition, n = Ie;
          try {
            if (Mt.transition = null, Ie = 16 > e ? 16 : e, pn === null) var r = false;
            else {
              if (e = pn, pn = null, Ol = 0, Ee & 6) throw Error(h(331));
              var l = Ee;
              for (Ee |= 4, K = e.current; K !== null; ) {
                var i = K, o = i.child;
                if (K.flags & 16) {
                  var c = i.deletions;
                  if (c !== null) {
                    for (var f = 0; f < c.length; f++) {
                      var k = c[f];
                      for (K = k; K !== null; ) {
                        var _ = K;
                        switch (_.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Lr(8, _, i);
                        }
                        var T = _.child;
                        if (T !== null) T.return = _, K = T;
                        else for (; K !== null; ) {
                          _ = K;
                          var b = _.sibling, V = _.return;
                          if (ou(_), _ === k) {
                            K = null;
                            break;
                          }
                          if (b !== null) {
                            b.return = V, K = b;
                            break;
                          }
                          K = V;
                        }
                      }
                    }
                    var X = i.alternate;
                    if (X !== null) {
                      var J = X.child;
                      if (J !== null) {
                        X.child = null;
                        do {
                          var Ve = J.sibling;
                          J.sibling = null, J = Ve;
                        } while (J !== null);
                      }
                    }
                    K = i;
                  }
                }
                if (i.subtreeFlags & 2064 && o !== null) o.return = i, K = o;
                else e: for (; K !== null; ) {
                  if (i = K, i.flags & 2048) switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lr(9, i, i.return);
                  }
                  var g = i.sibling;
                  if (g !== null) {
                    g.return = i.return, K = g;
                    break e;
                  }
                  K = i.return;
                }
              }
              var m = e.current;
              for (K = m; K !== null; ) {
                o = K;
                var w = o.child;
                if (o.subtreeFlags & 2064 && w !== null) w.return = o, K = w;
                else e: for (o = m; K !== null; ) {
                  if (c = K, c.flags & 2048) try {
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Il(9, c);
                    }
                  } catch (ee) {
                    We(c, c.return, ee);
                  }
                  if (c === o) {
                    K = null;
                    break e;
                  }
                  var A = c.sibling;
                  if (A !== null) {
                    A.return = c.return, K = A;
                    break e;
                  }
                  K = c.return;
                }
              }
              if (Ee = l, on(), $t && typeof $t.onPostCommitFiberRoot == "function") try {
                $t.onPostCommitFiberRoot(Qr, e);
              } catch {
              }
              r = true;
            }
            return r;
          } finally {
            Ie = n, Mt.transition = t;
          }
        }
        return false;
      }
      function Cu(e, t, n) {
        t = Xn(n, t), t = Uo(e, t, 1), e = cn(e, t, 1), t = pt(), e !== null && (ar(e, 1, t), yt(e, t));
      }
      function We(e, t, n) {
        if (e.tag === 3) Cu(e, e, n);
        else for (; t !== null; ) {
          if (t.tag === 3) {
            Cu(t, e, n);
            break;
          } else if (t.tag === 1) {
            var r = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (fn === null || !fn.has(r))) {
              e = Xn(n, e), e = Wo(t, e, 1), t = cn(t, e, 1), e = pt(), t !== null && (ar(t, 1, e), yt(t, e));
              break;
            }
          }
          t = t.return;
        }
      }
      function Ld(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = pt(), e.pingedLanes |= e.suspendedLanes & n, tt === e && (it & n) === n && (qe === 4 || qe === 3 && (it & 130023424) === it && 500 > He() - js ? _n(e, 0) : Es |= n), yt(e, t);
      }
      function Eu(e, t) {
        t === 0 && (e.mode & 1 ? (t = Gr, Gr <<= 1, !(Gr & 130023424) && (Gr = 4194304)) : t = 1);
        var n = pt();
        e = Gt(e, t), e !== null && (ar(e, t, n), yt(e, n));
      }
      function zd(e) {
        var t = e.memoizedState, n = 0;
        t !== null && (n = t.retryLane), Eu(e, n);
      }
      function Ad(e, t) {
        var n = 0;
        switch (e.tag) {
          case 13:
            var r = e.stateNode, l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
          case 19:
            r = e.stateNode;
            break;
          default:
            throw Error(h(314));
        }
        r !== null && r.delete(t), Eu(e, n);
      }
      var ju;
      ju = function(e, t, n) {
        if (e !== null) if (e.memoizedProps !== t.pendingProps || ht.current) gt = true;
        else {
          if (!(e.lanes & n) && !(t.flags & 128)) return gt = false, Nd(e, t, n);
          gt = !!(e.flags & 131072);
        }
        else gt = false, Fe && t.flags & 1048576 && lo(t, gl, t.index);
        switch (t.lanes = 0, t.tag) {
          case 2:
            var r = t.type;
            Tl(e, t), e = t.pendingProps;
            var l = Un(t, at.current);
            Gn(t, n), l = rs(null, t, r, e, l, n);
            var i = ls();
            return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, mt(r) ? (i = true, pl(t)) : i = false, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Xi(t), l.updater = Ml, t.stateNode = l, l._reactInternals = t, cs(t, r, e, n), t = hs(null, t, r, true, i, n)) : (t.tag = 0, Fe && i && Fi(t), ft(null, t, l, n), t = t.child), t;
          case 16:
            r = t.elementType;
            e: {
              switch (Tl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Od(r), e = zt(r, e), l) {
                case 0:
                  t = ps(null, t, r, e, n);
                  break e;
                case 1:
                  t = Zo(null, t, r, e, n);
                  break e;
                case 11:
                  t = Yo(null, t, r, e, n);
                  break e;
                case 14:
                  t = Go(null, t, r, zt(r.type, e), n);
                  break e;
              }
              throw Error(h(306, r, ""));
            }
            return t;
          case 0:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : zt(r, l), ps(e, t, r, l, n);
          case 1:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : zt(r, l), Zo(e, t, r, l, n);
          case 3:
            e: {
              if (Jo(t), e === null) throw Error(h(387));
              r = t.pendingProps, i = t.memoizedState, l = i.element, ho(e, t), Sl(t, r, null, n);
              var o = t.memoizedState;
              if (r = o.element, i.isDehydrated) if (i = {
                element: r,
                isDehydrated: false,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions
              }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                l = Xn(Error(h(423)), t), t = eu(e, t, r, n, l);
                break e;
              } else if (r !== l) {
                l = Xn(Error(h(424)), t), t = eu(e, t, r, n, l);
                break e;
              } else for (Nt = ln(t.stateNode.containerInfo.firstChild), St = t, Fe = true, Lt = null, n = fo(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
              else {
                if (Vn(), r === l) {
                  t = Xt(e, t, n);
                  break e;
                }
                ft(e, t, r, n);
              }
              t = t.child;
            }
            return t;
          case 5:
            return vo(t), e === null && Wi(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, Li(r, l) ? o = null : i !== null && Li(r, i) && (t.flags |= 32), qo(e, t), ft(e, t, o, n), t.child;
          case 6:
            return e === null && Wi(t), null;
          case 13:
            return tu(e, t, n);
          case 4:
            return qi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Qn(t, null, r, n) : ft(e, t, r, n), t.child;
          case 11:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : zt(r, l), Yo(e, t, r, l, n);
          case 7:
            return ft(e, t, t.pendingProps, n), t.child;
          case 8:
            return ft(e, t, t.pendingProps.children, n), t.child;
          case 12:
            return ft(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, ze(xl, r._currentValue), r._currentValue = o, i !== null) if (It(i.value, o)) {
                if (i.children === l.children && !ht.current) {
                  t = Xt(e, t, n);
                  break e;
                }
              } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var c = i.dependencies;
                if (c !== null) {
                  o = i.child;
                  for (var f = c.firstContext; f !== null; ) {
                    if (f.context === r) {
                      if (i.tag === 1) {
                        f = Kt(-1, n & -n), f.tag = 2;
                        var k = i.updateQueue;
                        if (k !== null) {
                          k = k.shared;
                          var _ = k.pending;
                          _ === null ? f.next = f : (f.next = _.next, _.next = f), k.pending = f;
                        }
                      }
                      i.lanes |= n, f = i.alternate, f !== null && (f.lanes |= n), Gi(i.return, n, t), c.lanes |= n;
                      break;
                    }
                    f = f.next;
                  }
                } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (o = i.return, o === null) throw Error(h(341));
                  o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), Gi(o, n, t), o = i.sibling;
                } else o = i.child;
                if (o !== null) o.return = i;
                else for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (i = o.sibling, i !== null) {
                    i.return = o.return, o = i;
                    break;
                  }
                  o = o.return;
                }
                i = o;
              }
              ft(e, t, l.children, n), t = t.child;
            }
            return t;
          case 9:
            return l = t.type, r = t.pendingProps.children, Gn(t, n), l = bt(l), r = r(l), t.flags |= 1, ft(e, t, r, n), t.child;
          case 14:
            return r = t.type, l = zt(r, t.pendingProps), l = zt(r.type, l), Go(e, t, r, l, n);
          case 15:
            return Ko(e, t, t.type, t.pendingProps, n);
          case 17:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : zt(r, l), Tl(e, t), t.tag = 1, mt(r) ? (e = true, pl(t)) : e = false, Gn(t, n), Fo(t, r, l), cs(t, r, l, n), hs(null, t, r, true, e, n);
          case 19:
            return ru(e, t, n);
          case 22:
            return Xo(e, t, n);
        }
        throw Error(h(156, t.tag));
      };
      function bu(e, t) {
        return ia(e, t);
      }
      function Dd(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
      }
      function Pt(e, t, n, r) {
        return new Dd(e, t, n, r);
      }
      function Ls(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
      }
      function Od(e) {
        if (typeof e == "function") return Ls(e) ? 1 : 0;
        if (e != null) {
          if (e = e.$$typeof, e === Qe) return 11;
          if (e === _e) return 14;
        }
        return 2;
      }
      function gn(e, t) {
        var n = e.alternate;
        return n === null ? (n = Pt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
          lanes: t.lanes,
          firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
      }
      function Ul(e, t, n, r, l, i) {
        var o = 2;
        if (r = e, typeof e == "function") Ls(e) && (o = 1);
        else if (typeof e == "string") o = 5;
        else e: switch (e) {
          case Z:
            return Pn(n.children, l, i, t);
          case he:
            o = 8, l |= 8;
            break;
          case rt:
            return e = Pt(12, n, t, l | 2), e.elementType = rt, e.lanes = i, e;
          case be:
            return e = Pt(13, n, t, l), e.elementType = be, e.lanes = i, e;
          case Ne:
            return e = Pt(19, n, t, l), e.elementType = Ne, e.lanes = i, e;
          case ge:
            return Wl(n, l, i, t);
          default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
              case de:
                o = 10;
                break e;
              case Ke:
                o = 9;
                break e;
              case Qe:
                o = 11;
                break e;
              case _e:
                o = 14;
                break e;
              case Se:
                o = 16, r = null;
                break e;
            }
            throw Error(h(130, e == null ? e : typeof e, ""));
        }
        return t = Pt(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
      }
      function Pn(e, t, n, r) {
        return e = Pt(7, e, r, t), e.lanes = n, e;
      }
      function Wl(e, t, n, r) {
        return e = Pt(22, e, r, t), e.elementType = ge, e.lanes = n, e.stateNode = {
          isHidden: false
        }, e;
      }
      function zs(e, t, n) {
        return e = Pt(6, e, null, t), e.lanes = n, e;
      }
      function As(e, t, n) {
        return t = Pt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation
        }, t;
      }
      function $d(e, t, n, r, l) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ui(0), this.expirationTimes = ui(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ui(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
      }
      function Ds(e, t, n, r, l, i, o, c, f) {
        return e = new $d(e, t, n, c, f), t === 1 ? (t = 1, i === true && (t |= 8)) : t = 0, i = Pt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
          element: r,
          isDehydrated: n,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null
        }, Xi(i), e;
      }
      function Fd(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: Pe,
          key: r == null ? null : "" + r,
          children: e,
          containerInfo: t,
          implementation: n
        };
      }
      function _u(e) {
        if (!e) return an;
        e = e._reactInternals;
        e: {
          if (yn(e) !== e || e.tag !== 1) throw Error(h(170));
          var t = e;
          do {
            switch (t.tag) {
              case 3:
                t = t.stateNode.context;
                break e;
              case 1:
                if (mt(t.type)) {
                  t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                  break e;
                }
            }
            t = t.return;
          } while (t !== null);
          throw Error(h(171));
        }
        if (e.tag === 1) {
          var n = e.type;
          if (mt(n)) return to(e, n, t);
        }
        return t;
      }
      function Mu(e, t, n, r, l, i, o, c, f) {
        return e = Ds(n, r, true, e, l, i, o, c, f), e.context = _u(null), n = e.current, r = pt(), l = hn(n), i = Kt(r, l), i.callback = t ?? null, cn(n, i, l), e.current.lanes = l, ar(e, l, r), yt(e, r), e;
      }
      function Hl(e, t, n, r) {
        var l = t.current, i = pt(), o = hn(l);
        return n = _u(n), t.context === null ? t.context = n : t.pendingContext = n, t = Kt(i, o), t.payload = {
          element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = cn(l, t, o), e !== null && (Ot(e, l, o, i), kl(e, l, o)), o;
      }
      function Vl(e) {
        if (e = e.current, !e.child) return null;
        switch (e.child.tag) {
          case 5:
            return e.child.stateNode;
          default:
            return e.child.stateNode;
        }
      }
      function Pu(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
          var n = e.retryLane;
          e.retryLane = n !== 0 && n < t ? n : t;
        }
      }
      function Os(e, t) {
        Pu(e, t), (e = e.alternate) && Pu(e, t);
      }
      var Tu = typeof reportError == "function" ? reportError : function(e) {
        console.error(e);
      };
      function $s(e) {
        this._internalRoot = e;
      }
      Ql.prototype.render = $s.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(h(409));
        Hl(e, t, null, null);
      }, Ql.prototype.unmount = $s.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          bn(function() {
            Hl(null, e, null, null);
          }), t[Ht] = null;
        }
      };
      function Ql(e) {
        this._internalRoot = e;
      }
      Ql.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
          var t = pa();
          e = {
            blockedOn: null,
            target: e,
            priority: t
          };
          for (var n = 0; n < tn.length && t !== 0 && t < tn[n].priority; n++) ;
          tn.splice(n, 0, e), n === 0 && ga(e);
        }
      };
      function Fs(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
      }
      function Yl(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
      }
      function Ru() {
      }
      function Bd(e, t, n, r, l) {
        if (l) {
          if (typeof r == "function") {
            var i = r;
            r = function() {
              var k = Vl(o);
              i.call(k);
            };
          }
          var o = Mu(t, r, e, 0, null, false, false, "", Ru);
          return e._reactRootContainer = o, e[Ht] = o.current, kr(e.nodeType === 8 ? e.parentNode : e), bn(), o;
        }
        for (; l = e.lastChild; ) e.removeChild(l);
        if (typeof r == "function") {
          var c = r;
          r = function() {
            var k = Vl(f);
            c.call(k);
          };
        }
        var f = Ds(e, 0, false, null, null, false, false, "", Ru);
        return e._reactRootContainer = f, e[Ht] = f.current, kr(e.nodeType === 8 ? e.parentNode : e), bn(function() {
          Hl(t, f, n, r);
        }), f;
      }
      function Gl(e, t, n, r, l) {
        var i = n._reactRootContainer;
        if (i) {
          var o = i;
          if (typeof l == "function") {
            var c = l;
            l = function() {
              var f = Vl(o);
              c.call(f);
            };
          }
          Hl(t, o, e, l);
        } else o = Bd(n, t, e, l, r);
        return Vl(o);
      }
      da = function(e) {
        switch (e.tag) {
          case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
              var n = sr(t.pendingLanes);
              n !== 0 && (ci(t, n | 1), yt(t, He()), !(Ee & 6) && (Jn = He() + 500, on()));
            }
            break;
          case 13:
            bn(function() {
              var r = Gt(e, 1);
              if (r !== null) {
                var l = pt();
                Ot(r, e, 1, l);
              }
            }), Os(e, 1);
        }
      }, di = function(e) {
        if (e.tag === 13) {
          var t = Gt(e, 134217728);
          if (t !== null) {
            var n = pt();
            Ot(t, e, 134217728, n);
          }
          Os(e, 134217728);
        }
      }, fa = function(e) {
        if (e.tag === 13) {
          var t = hn(e), n = Gt(e, t);
          if (n !== null) {
            var r = pt();
            Ot(n, e, t, r);
          }
          Os(e, t);
        }
      }, pa = function() {
        return Ie;
      }, ha = function(e, t) {
        var n = Ie;
        try {
          return Ie = e, t();
        } finally {
          Ie = n;
        }
      }, ri = function(e, t, n) {
        switch (t) {
          case "input":
            if (xe(e, n), t = n.name, n.type === "radio" && t != null) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var l = dl(r);
                  if (!l) throw Error(h(90));
                  oe(r), xe(r, l);
                }
              }
            }
            break;
          case "textarea":
            De(e, n);
            break;
          case "select":
            t = n.value, t != null && d(e, !!n.multiple, t, false);
        }
      }, Zs = Ts, Js = bn;
      var Ud = {
        usingClientEntryPoint: false,
        Events: [
          Cr,
          Fn,
          dl,
          Xs,
          qs,
          Ts
        ]
      }, Or = {
        findFiberByHostInstance: xn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
      }, Wd = {
        bundleType: Or.bundleType,
        version: Or.version,
        rendererPackageName: Or.rendererPackageName,
        rendererConfig: Or.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: pe.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
          return e = ra(e), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Or.findFiberByHostInstance,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
      };
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Kl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Kl.isDisabled && Kl.supportsFiber) try {
          Qr = Kl.inject(Wd), $t = Kl;
        } catch {
        }
      }
      return xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ud, xt.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Fs(t)) throw Error(h(200));
        return Fd(e, t, null, n);
      }, xt.createRoot = function(e, t) {
        if (!Fs(e)) throw Error(h(299));
        var n = false, r = "", l = Tu;
        return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ds(e, 1, false, null, null, n, false, r, l), e[Ht] = t.current, kr(e.nodeType === 8 ? e.parentNode : e), new $s(t);
      }, xt.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(h(188)) : (e = Object.keys(e).join(","), Error(h(268, e)));
        return e = ra(t), e = e === null ? null : e.stateNode, e;
      }, xt.flushSync = function(e) {
        return bn(e);
      }, xt.hydrate = function(e, t, n) {
        if (!Yl(t)) throw Error(h(200));
        return Gl(null, e, t, true, n);
      }, xt.hydrateRoot = function(e, t, n) {
        if (!Fs(e)) throw Error(h(405));
        var r = n != null && n.hydratedSources || null, l = false, i = "", o = Tu;
        if (n != null && (n.unstable_strictMode === true && (l = true), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Mu(t, null, e, 1, n ?? null, l, false, i, o), e[Ht] = t.current, kr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
          n,
          l
        ] : t.mutableSourceEagerHydrationData.push(n, l);
        return new Ql(t);
      }, xt.render = function(e, t, n) {
        if (!Yl(t)) throw Error(h(200));
        return Gl(null, e, t, false, n);
      }, xt.unmountComponentAtNode = function(e) {
        if (!Yl(e)) throw Error(h(40));
        return e._reactRootContainer ? (bn(function() {
          Gl(null, null, e, false, function() {
            e._reactRootContainer = null, e[Ht] = null;
          });
        }), true) : false;
      }, xt.unstable_batchedUpdates = Ts, xt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!Yl(n)) throw Error(h(200));
        if (e == null || e._reactInternals === void 0) throw Error(h(38));
        return Gl(e, t, n, false, r);
      }, xt.version = "18.3.1-next-f1338f8080-20240426", xt;
    }
    var Fu;
    function ef() {
      if (Fu) return Ws.exports;
      Fu = 1;
      function y() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y);
        } catch (v) {
          console.error(v);
        }
      }
      return y(), Ws.exports = Jd(), Ws.exports;
    }
    var Bu;
    function tf() {
      if (Bu) return Xl;
      Bu = 1;
      var y = ef();
      return Xl.createRoot = y.createRoot, Xl.hydrateRoot = y.hydrateRoot, Xl;
    }
    var nf = tf();
    function rf({ onComplete: y }) {
      const [v, h] = B.useState("reveal"), a = "ARPIT GUPTA", z = B.useMemo(() => a.split("").map((C, I) => {
        const M = Math.random() * 360 * (Math.PI / 180), O = 80 + Math.random() * 200, Y = Math.cos(M) * O, D = Math.sin(M) * O, W = (Math.random() - 0.5) * 180;
        return {
          char: C,
          index: I,
          blastDir: `translate(${Y}px, ${D}px) rotate(${W}deg)`,
          revealDelay: I * 0.04
        };
      }), []);
      return B.useEffect(() => {
        const C = setTimeout(() => h("blast"), 1200), I = setTimeout(() => h("fadeout"), 1800), M = setTimeout(() => {
          h("done"), y == null ? void 0 : y();
        }, 2600);
        return () => {
          clearTimeout(C), clearTimeout(I), clearTimeout(M);
        };
      }, [
        y
      ]), v === "done" ? null : s.jsxs("div", {
        className: `intro-overlay ${v === "fadeout" ? "fade-out" : ""}`,
        children: [
          s.jsx("div", {
            className: "absolute inset-0 flex items-center justify-center pointer-events-none",
            children: s.jsx("div", {
              className: "w-[600px] h-[300px] rounded-full opacity-20",
              style: {
                background: "radial-gradient(ellipse, rgba(212,165,116,0.3), transparent 70%)"
              }
            })
          }),
          s.jsx("div", {
            className: "intro-name relative z-10",
            children: z.map((C) => s.jsx("span", {
              className: `intro-letter ${v === "blast" ? "blast" : ""}`,
              style: {
                animationDelay: v === "blast" ? `${C.index * 0.02}s` : `${C.revealDelay}s`,
                "--blast-dir": C.blastDir
              },
              children: C.char === " " ? "\xA0" : C.char
            }, C.index))
          })
        ]
      });
    }
    function lf() {
      const y = B.useRef(null), v = B.useRef("vulnerable");
      return B.useEffect(() => {
        const h = () => {
          v.current = "deploying";
        };
        return window.addEventListener("shield-stabilized", h), () => window.removeEventListener("shield-stabilized", h);
      }, []), B.useEffect(() => {
        const h = y.current;
        if (!h) return;
        const a = h.getContext("2d", {
          alpha: true
        });
        let z, C, I, M = window.innerWidth < 768;
        const O = Math.min(2, window.devicePixelRatio || 1);
        let Y = [], D = [], W = [], ae = [], ue = [], G = [], q = [], E = [], ce = [], F = [], te = M ? 18 : 34, pe = 0, Me = 0, Pe = 0, Z = 0, he = 0;
        const rt = "#8b9a7b", de = "139, 154, 123", Ke = "212, 165, 116", Qe = () => {
          C = window.innerWidth, I = window.innerHeight, M = C < 768, te = M ? 18 : 34, h.width = Math.floor(C * O), h.height = Math.floor(I * O), h.style.width = C + "px", h.style.height = I + "px", a.setTransform(O, 0, 0, O, 0, 0), Z = I * 0.91, he = Z;
          const S = Math.floor(C / te) + 1;
          if (S !== pe || D.length === 0) {
            pe = S;
            const P = te * 1.5, N = Math.floor(C / P) + 2;
            Y = new Array(N).fill(0).map((oe, me) => {
              const re = he * 0.6, ve = he * 0.25, Le = Math.random() * (re - ve);
              let xe = ve + Le;
              return Math.random() > 0.85 && (xe += he * 0.1), xe = Math.min(xe, re * 1.1), {
                x: me * P - Math.random() * 20,
                w: P - 2,
                h: xe,
                c: Math.floor(Math.random() * 5) + 8
              };
            }), D = new Array(pe).fill(0).map((oe, me) => {
              const re = he * 0.15, ve = Math.abs(Math.sin(me * 0.3)) * he * 0.15, Le = Math.random() * he * 0.1, xe = Math.random() > 0.85 ? he * 0.2 : 0, Ae = Math.random() > 0.7, dt = Math.min(he * 0.7, re + ve + Le + xe), j = Math.floor(Math.random() * 15), d = Math.floor(te / 7), ye = Math.floor(he / 8), Te = Array(ye).fill(0).map(() => Array(d).fill(0).map(() => Math.random() > 0.4));
              return {
                x: me * te,
                w: te - (M ? 2 : 5),
                maxH: dt,
                h: dt,
                r: 25 + j,
                g: 27 + j,
                b: 30 + j,
                antenna: xe > 0 && Math.random() > 0.4 ? Math.random() * 30 + 15 : 0,
                windows: Te,
                winCols: d,
                isStepped: Ae
              };
            }), E = [];
            for (let oe = -20; oe < C + 20; oe += Math.random() * 30 + 20) E.push({
              x: oe,
              type: "rock",
              w: Math.random() * 25 + 15,
              h: Math.random() * 20 + 10,
              cRand: Math.random()
            }), Math.random() > 0.8 && E.push({
              x: oe + 10,
              type: "lamp",
              h: Math.random() * 15 + 25
            });
            Me = D.reduce((oe, me) => oe + me.maxH, 0);
            const Q = Me === 0 ? 1 : Pe / Me || 1;
            Pe = Me * Q;
            const se = Pe / Me;
            D.forEach((oe) => oe.h = oe.maxH * se), q = [
              {
                x: C * 0.2,
                y: Z + (I - Z) * 0.25,
                speed: 0.2,
                dir: 1,
                c: "#d4a574",
                scale: 0.9
              },
              {
                x: C * 0.8,
                y: Z + (I - Z) * 0.55,
                speed: 0.35,
                dir: -1,
                c: "#d4a574",
                scale: 1.1
              },
              {
                x: C * 0.5,
                y: Z + (I - Z) * 0.85,
                speed: 0.45,
                dir: 1,
                c: "#d4a574",
                scale: 1.4
              }
            ];
          }
        };
        Qe(), window.addEventListener("resize", Qe);
        const be = new Path2D("M0,0 L15,4 L15,15 C15,22 0,30 0,30 C0,30 -15,22 -15,15 L-15,4 Z");
        let Ne = 0, _e = 0, Se = 0, ge = 0, R = 0;
        const ne = M ? 10 : 5, p = 60 / ne, x = Me / (p * 1800), L = (S) => 1 - Math.pow(1 - S, 4), $ = (S, P) => {
          const N = S.h;
          if (N <= 0) return;
          const Q = he - N;
          a.fillStyle = `rgb(${S.r}, ${S.g}, ${S.b})`, a.beginPath(), a.rect(S.x, Q, S.w, N), a.fill();
          const se = M ? 2 : 4;
          if (a.fillStyle = `rgb(${S.r - 8}, ${S.g - 8}, ${S.b - 8})`, a.beginPath(), a.moveTo(S.x + S.w, he), a.lineTo(S.x + S.w + se, he - se), a.lineTo(S.x + S.w + se, he - N - se), a.lineTo(S.x + S.w, he - N), a.closePath(), a.fill(), S.isStepped && N > 20) {
            const ve = S.w * 0.6, Le = S.x + (S.w - ve) / 2, xe = Math.min(20, N * 0.2);
            a.fillStyle = `rgb(${S.r + 2}, ${S.g + 2}, ${S.b + 2})`, a.fillRect(Le, he - N - xe, ve, xe);
          }
          if (S.antenna > 0) {
            const ve = S.isStepped ? N + Math.min(20, N * 0.2) : N;
            a.beginPath(), a.moveTo(S.x + S.w / 2, he - ve), a.lineTo(S.x + S.w / 2, he - ve - S.antenna), a.strokeStyle = `rgb(${S.r}, ${S.g}, ${S.b})`, a.lineWidth = 2, a.stroke(), R % 60 < 30 && (a.beginPath(), a.arc(S.x + S.w / 2, he - ve - S.antenna, 1.5, 0, Math.PI * 2), a.fillStyle = "rgba(239, 68, 68, 0.8)", a.fill());
          }
          const oe = Math.floor((S.isStepped ? N * 0.8 : N) / 8), me = Math.floor(S.w * 0.15), re = (S.w - me * 2) / S.winCols;
          for (let ve = 0; ve < oe; ve++) {
            if (ve >= S.windows.length) continue;
            const Le = he - ve * 8 - 6;
            for (let xe = 0; xe < S.winCols; xe++) if (S.windows[ve][xe]) {
              Math.random() > 0.995 && (S.windows[ve][xe] = false), a.beginPath(), a.rect(S.x + me + xe * re + 1, Le, Math.max(1, re - 2), 4);
              const Ae = (ve * 13 + xe * 7) % 10 / 10;
              P ? (a.fillStyle = `rgba(${de}, ${(Ae * 0.2 + 0.3) * ge})`, a.fill(), a.fillStyle = `rgba(${Ke}, ${(Ae * 0.2 + 0.2) * (1 - ge)})`, a.fill()) : (a.fillStyle = `rgba(${Ke}, ${Ae * 0.2 + 0.2})`, a.fill());
            } else Math.random() > 0.998 && (S.windows[ve][xe] = true);
          }
        }, U = (S) => {
          a.fillStyle = "#0a0b0f", a.fillRect(0, Z - 5, C, 6);
          const P = E.filter((N) => N.type === "lamp");
          for (let N of E) if (N.type === "rock") {
            const Q = Z + 2;
            a.fillStyle = "#07080a", a.beginPath(), a.moveTo(N.x - N.w / 2, Q), a.lineTo(N.x - N.w * 0.3, Q - N.h * 0.8), a.lineTo(N.x, Q - N.h), a.lineTo(N.x + N.w * 0.4, Q - N.h * 0.6), a.lineTo(N.x + N.w / 2, Q), a.fill();
            let se = 0.05;
            P.forEach((me) => {
              const re = Math.abs(N.x - me.x);
              re < 40 && (se += Math.pow(1 - re / 40, 1.5));
            }), se = Math.min(1, se);
            const oe = S ? de : Ke;
            se > 0.1 && (a.fillStyle = `rgba(${oe}, ${se * 0.35})`, a.beginPath(), a.moveTo(N.x - N.w * 0.3, Q - N.h * 0.8), a.lineTo(N.x, Q - N.h), a.lineTo(N.x + N.w * 0.4, Q - N.h * 0.6), a.lineTo(N.x, Q), a.fill()), a.strokeStyle = `rgba(${oe}, ${0.15 + se * 0.8})`, a.lineWidth = 1.5, a.beginPath(), a.moveTo(N.x - N.w / 2, Q), a.lineTo(N.x - N.w * 0.3, Q - N.h * 0.8), a.lineTo(N.x, Q - N.h), a.lineTo(N.x + N.w * 0.4, Q - N.h * 0.6), a.lineTo(N.x + N.w / 2, Q), a.stroke();
          } else if (N.type === "lamp") {
            const Q = Z;
            a.fillStyle = "#111318", a.fillRect(N.x - 1, Q - N.h, 2, N.h), a.fillStyle = "#2a2d36", a.fillRect(N.x, Q - N.h, 1, N.h), a.fillStyle = "#1f2229", a.beginPath(), a.moveTo(N.x - 1, Q - N.h), a.lineTo(N.x + 8, Q - N.h - 4), a.lineTo(N.x + 8, Q - N.h - 1), a.lineTo(N.x + 1, Q - N.h + 2), a.fill(), a.fillStyle = S ? `rgba(${de}, 1.0)` : "rgba(255, 220, 150, 1.0)", a.shadowColor = S ? `rgb(${de})` : `rgb(${Ke})`, a.shadowBlur = 20, a.beginPath(), a.arc(N.x + 6, Q - N.h - 1, 2, 0, Math.PI * 2), a.fill(), a.shadowBlur = 0;
            const se = a.createLinearGradient(N.x + 6, Q - N.h, N.x + 15, Z);
            se.addColorStop(0, S ? `rgba(${de}, 0.45)` : "rgba(255, 180, 80, 0.45)"), se.addColorStop(1, "transparent"), a.fillStyle = se, a.beginPath(), a.moveTo(N.x + 6, Q - N.h), a.lineTo(N.x + 40, Z + 2), a.lineTo(N.x - 10, Z + 2), a.fill();
          }
        }, H = () => {
          a.clearRect(0, 0, C, I), R++, Ne = Math.max(C, I) * 1.5, _e = C / 2, Se = I + Ne - I * 0.85;
          const S = v.current;
          (S === "deploying" || S === "stabilized") && ge < 1 && (ge += 4e-3, ge >= 1 && (ge = 1));
          const P = ge > 0, N = ge >= 1;
          for (let j = 0; j < Y.length; j++) {
            const d = Y[j];
            a.fillStyle = `rgb(${d.c}, ${d.c}, ${d.c + 2})`, a.fillRect(d.x, he - d.h, d.w, d.h);
          }
          Pe = 0;
          for (let j = 0; j < pe; j++) {
            const d = D[j];
            if (d.h > 0) {
              Pe += d.h;
              const ye = d.h / d.maxH;
              ye < 0.7 && ye > 0 && Math.random() > 0.9 + ye * 0.08 && G.push({
                x: d.x + Math.random() * d.w,
                y: he - d.h,
                vx: (Math.random() - 0.5) * 0.5,
                vy: -Math.random() * 1.5 - 0.5,
                size: Math.random() * 4 + 2,
                life: 1,
                decay: Math.random() * 0.01 + 5e-3,
                isFire: ye < 0.3 && Math.random() > 0.5
              });
            }
          }
          const Q = a.createLinearGradient(0, Z, 0, I);
          Q.addColorStop(0, "rgba(8, 10, 15, 0.95)"), Q.addColorStop(1, "rgba(2, 3, 5, 0.98)"), a.fillStyle = Q, a.fillRect(0, Z, C, I - Z);
          const se = Math.floor((I - Z) / 4);
          for (let j = 0; j < Math.min(30, se); j++) {
            const d = j / Math.min(30, se), ye = Z + Math.pow(d, 1.5) * (I - Z), Te = R * (0.2 + d * 0.3) % C, De = Math.sin(R * 0.02 + j) * 0.5 + 0.5;
            a.fillStyle = P ? `rgba(${de}, ${0.04 * De * d})` : `rgba(212, 165, 116, ${0.04 * De * d})`, a.fillRect(Te, ye, C * 0.2, Math.max(1, d * 3)), a.fillRect(Te - C, ye, C * 0.2, Math.max(1, d * 3));
          }
          a.save(), a.translate(0, Z), a.scale(1, -1), a.translate(0, -Z), a.globalAlpha = 0.2;
          for (let j = 0; j < Y.length; j++) {
            const d = Y[j];
            a.fillStyle = `rgb(${d.c}, ${d.c}, ${d.c + 2})`, a.fillRect(d.x, he - d.h, d.w, d.h);
          }
          for (let j = 0; j < pe; j++) $(D[j], P);
          U(P);
          const oe = C / 2, me = he - 45, re = Math.sin(R * 0.05) * 5, ve = 1.2;
          if (a.save(), a.translate(oe, me + re), a.scale(ve, ve), a.lineWidth = 1.5, P ? (a.strokeStyle = `rgba(${de}, ${ge})`, a.stroke(be)) : (a.strokeStyle = "rgba(239, 68, 68, 0.8)", a.stroke(be)), a.restore(), P) {
            const j = Math.min(1, ge / 0.3), d = L(j), ye = Math.max(0, ge - 0.3) / 0.7, Te = L(ye), De = Se - Ne;
            if (j > 0) {
              const Ce = me - (me - De) * d;
              a.beginPath(), a.moveTo(oe, me + re), a.lineTo(oe, Ce);
              const we = a.createLinearGradient(0, me, 0, De), Re = Math.sin(R * 0.5) * 0.2 + 0.8;
              we.addColorStop(0, `rgba(${de}, ${0.8 * Re})`), we.addColorStop(1, `rgba(${de}, 0.0)`), a.strokeStyle = we, a.lineWidth = 3 + Math.sin(R) * 1, a.stroke();
            }
            if (ye > 0) {
              const Ce = Math.sin(R * 0.02) * 0.1 + 0.9, we = Math.PI * 1.5, Re = Math.PI * 0.45 * Te, Ye = we - Re, wt = we + Re;
              a.beginPath(), a.arc(_e, Se, Ne, Ye, wt), a.lineWidth = 2, a.strokeStyle = `rgba(${de}, ${0.4 * Ce})`, a.stroke(), a.save(), a.beginPath(), a.moveTo(_e, Se), a.arc(_e, Se, Ne, Ye, wt), a.closePath(), a.clip();
              const Je = a.createRadialGradient(_e, Se, Ne * 0.95, _e, Se, Ne);
              Je.addColorStop(0, `rgba(${de}, 0)`), Je.addColorStop(1, `rgba(${de}, ${0.1 * Te})`), a.beginPath(), a.arc(_e, Se, Ne, 0, Math.PI * 2), a.fillStyle = Je, a.fill(), a.restore();
            }
          }
          a.restore();
          for (let j = 0; j < pe; j++) $(D[j], P);
          U(P);
          const Le = Math.sin(R * 0.02), xe = Le * 4;
          if (Le > 0.9 && R % 12 === 0) for (let j = 0; j < 3; j++) {
            const d = E[Math.floor(Math.random() * E.length)];
            if (d && d.type === "rock") for (let ye = 0; ye < Math.floor(Math.random() * 3 + 1); ye++) F.push({
              x: d.x + (Math.random() - 0.5) * d.w * 0.8,
              y: Z - xe,
              vx: (Math.random() - 0.5) * 0.6,
              vy: -Math.random() * 0.8 - 0.4,
              life: 1,
              size: Math.random() * 1.5 + 0.5,
              isStreak: true
            });
          }
          for (let j = F.length - 1; j >= 0; j--) {
            const d = F[j];
            if (d.x += d.vx, d.y += d.vy, d.vy += 0.05, d.life -= 0.04, d.life <= 0 || d.y > Z + 2) {
              F.splice(j, 1);
              continue;
            }
            d.isStreak ? (a.strokeStyle = P ? `rgba(${de}, ${d.life * 0.6})` : `rgba(255, 210, 140, ${d.life * 0.6})`, a.lineWidth = d.size, a.lineCap = "round", a.beginPath(), a.moveTo(d.x, d.y), a.lineTo(d.x - d.vx * 1.5, d.y - d.vy * 1.5), a.stroke()) : (a.fillStyle = P ? `rgba(${de}, ${d.life * 0.4})` : `rgba(212, 165, 116, ${d.life * 0.4})`, a.beginPath(), a.arc(d.x, d.y, d.size, 0, Math.PI * 2), a.fill());
          }
          const Ae = Z + 2;
          a.fillStyle = P ? `rgba(${de}, 0.12)` : "rgba(212, 165, 116, 0.12)", a.beginPath(), a.moveTo(0, Ae + 5);
          for (let j = 0; j <= C + 20; j += 20) {
            const d = Math.sin(j * 0.04 + R * 0.03) * 3;
            a.lineTo(j, Ae - xe - d);
          }
          a.lineTo(C, Ae + 5), a.lineTo(0, Ae + 5), a.closePath(), a.fill(), a.strokeStyle = P ? `rgba(${de}, ${0.15 + (Le + 1) * 0.15})` : `rgba(255, 210, 140, ${0.15 + (Le + 1) * 0.15})`, a.lineWidth = 1.5, a.beginPath(), a.moveTo(0, Ae - xe);
          for (let j = 0; j <= C + 20; j += 20) {
            const d = Math.sin(j * 0.04 + R * 0.03) * 3;
            a.lineTo(j, Ae - xe - d);
          }
          a.stroke();
          for (let j = G.length - 1; j >= 0; j--) {
            const d = G[j];
            if (d.x += d.vx, d.y += d.vy, d.size += 0.05, d.life -= d.decay, d.life <= 0) {
              G.splice(j, 1);
              continue;
            }
            if (a.beginPath(), a.arc(d.x, d.y, d.size, 0, Math.PI * 2), a.fillStyle = d.isFire ? `rgba(255, ${100 + Math.random() * 100}, 0, ${d.life * 0.8})` : `rgba(30, 30, 30, ${d.life * 0.5})`, a.fill(), d.isFire && d.y > he - 50) {
              const ye = Z - d.y;
              a.beginPath(), a.arc(d.x, Z + ye, d.size, 0, Math.PI * 2), a.fillStyle = `rgba(255, ${100 + Math.random() * 100}, 0, ${d.life * 0.1})`, a.fill();
            }
          }
          if (a.save(), a.translate(oe, me), a.translate(0, re), a.scale(ve, ve), a.lineWidth = 1.5, P ? (a.strokeStyle = `rgba(${de}, ${ge})`, a.stroke(be), a.strokeStyle = `rgba(239, 68, 68, ${0.8 * (1 - ge)})`, a.stroke(be), a.shadowColor = rt, a.shadowBlur = 15 * ge) : (a.strokeStyle = "rgba(239, 68, 68, 0.8)", a.shadowColor = "red", a.shadowBlur = 5, a.stroke(be)), a.beginPath(), a.arc(0, 15, 3, 0, Math.PI * 2), a.fillStyle = P ? rt : "#ef4444", a.fill(), a.restore(), P) {
            const j = Math.min(1, ge / 0.3), d = L(j), ye = Math.max(0, ge - 0.3) / 0.7, Te = L(ye), De = Se - Ne;
            if (j > 0) {
              const Ce = me - (me - De) * d;
              a.beginPath(), a.moveTo(oe, me + re), a.lineTo(oe, Ce);
              const we = a.createLinearGradient(0, me, 0, De), Re = Math.sin(R * 0.5) * 0.2 + 0.8;
              we.addColorStop(0, `rgba(${de}, ${0.8 * Re})`), we.addColorStop(1, `rgba(${de}, 0.0)`), a.strokeStyle = we, a.lineWidth = 3 + Math.sin(R) * 1, a.stroke();
            }
            if (ye > 0) {
              const Ce = Math.sin(R * 0.02) * 0.1 + 0.9, we = Math.PI * 1.5, Re = Math.PI * 0.45 * Te, Ye = we - Re, wt = we + Re;
              a.beginPath(), a.arc(_e, Se, Ne, Ye, wt), a.lineWidth = 2, a.strokeStyle = `rgba(${de}, ${0.4 * Ce})`, a.stroke(), a.save(), a.beginPath(), a.moveTo(_e, Se), a.arc(_e, Se, Ne, Ye, wt), a.closePath(), a.clip();
              const Je = a.createRadialGradient(_e, Se, Ne * 0.95, _e, Se, Ne);
              Je.addColorStop(0, `rgba(${de}, 0)`), Je.addColorStop(1, `rgba(${de}, ${0.1 * Te})`), a.beginPath(), a.arc(_e, Se, Ne, 0, Math.PI * 2), a.fillStyle = Je, a.fill(), a.restore();
            }
          }
          if (!(C < 768)) {
            const j = Me > 0 ? Pe / Me : 1, d = 20;
            a.font = "10px monospace", a.textAlign = "right";
            const ye = N ? "INFRASTRUCTURE FULLY SECURED" : P ? "DEPLOYING COUNTERMEASURES..." : "INFRASTRUCTURE INTEGRITY";
            a.fillStyle = P ? `rgba(${de}, 0.8)` : "rgba(255, 255, 255, 0.5)", a.fillText(ye, C - 20, d);
            const Te = 150, De = 4;
            a.fillStyle = "rgba(255,255,255,0.1)", a.fillRect(C - 20 - Te, d + 8, Te, De);
            const Ce = j > 0.5 ? Math.floor(510 * (1 - j)) : 255, we = j > 0.5 ? 255 : Math.floor(510 * j);
            a.fillStyle = P ? `rgb(${de})` : `rgb(${Ce}, ${we}, 50)`, a.fillRect(C - 20 - Te, d + 8, Te * j, De);
          }
          if (R % ne === 0) {
            const j = Math.random() * C, d = -10, Te = (C / 2 - j) / C * 0.5, De = Math.PI / 2 + Te + (Math.random() - 0.5) * 0.2, Ce = Math.random() * 2 + 3;
            W.push({
              x: j,
              y: d,
              vx: Math.cos(De) * Ce,
              vy: Math.sin(De) * Ce,
              history: []
            });
          }
          for (let j = W.length - 1; j >= 0; j--) {
            const d = W[j];
            d.history.push({
              x: d.x,
              y: d.y
            }), d.history.length > 5 && d.history.shift(), d.x += d.vx, d.y += d.vy, d.history.length > 1 && (a.beginPath(), a.moveTo(d.history[0].x, d.history[0].y), a.lineTo(d.x, d.y), a.strokeStyle = "rgba(239, 68, 68, 0.6)", a.lineWidth = 1, a.stroke()), a.beginPath(), a.arc(d.x, d.y, 1.5, 0, Math.PI * 2), a.fillStyle = "#fff", a.fill();
            let ye = false, Te = 0, De = false;
            if (ge > 0.3) {
              const Ce = d.x - _e, we = d.y - Se, Re = Math.sqrt(Ce * Ce + we * we), Ye = Math.atan2(we, Ce);
              let wt = Ye < 0 ? Ye + Math.PI * 2 : Ye;
              const Je = Math.PI * 1.5, Tt = L((ge - 0.3) / 0.7), nr = Math.PI * 0.45 * Tt;
              Re <= Ne + 5 && we < 0 && Math.abs(wt - Je) <= nr && (ye = true, De = true, Te = Ye);
            }
            if (!ye) {
              const Ce = Math.floor(d.x / te);
              if (Ce >= 0 && Ce < pe) {
                const we = D[Ce];
                let Re = we.h;
                we.isStepped && Re > 20 && (Re += Math.min(20, Re * 0.2)), we.antenna > 0 && (Re += we.antenna), d.y >= he - Re && (ye = true, Te = -Math.PI / 2, we.h > 0 && (we.h = Math.max(0, we.h - x), Ce > 0 && (D[Ce - 1].h = Math.max(0, D[Ce - 1].h - x * 0.2)), Ce < pe - 1 && (D[Ce + 1].h = Math.max(0, D[Ce + 1].h - x * 0.2))));
              } else d.y >= Z && (ye = true, Te = -Math.PI / 2);
            }
            if (ye) {
              W.splice(j, 1);
              const Ce = M ? 3 : 5;
              for (let we = 0; we < Ce; we++) {
                const Re = Te + (Math.random() - 0.5) * Math.PI * 0.8, Ye = Math.random() * 4 + 1;
                ae.push({
                  x: d.x,
                  y: d.y,
                  vx: Math.cos(Re) * Ye,
                  vy: Math.sin(Re) * Ye,
                  life: 1,
                  decay: Math.random() * 0.05 + 0.02,
                  isShield: De
                });
              }
              if (!De && d.y <= he) {
                const we = M ? 1 : 2;
                for (let Re = 0; Re < we; Re++) ue.push({
                  x: d.x,
                  y: d.y,
                  vx: (Math.random() - 0.5) * 3,
                  vy: -Math.random() * 3 - 2,
                  size: Math.random() * 3 + 2,
                  rot: Math.random() * Math.PI,
                  vRot: (Math.random() - 0.5) * 0.2,
                  life: 1,
                  decay: 0.015
                });
              }
              Math.random() > 0.8 && !M && (a.beginPath(), a.arc(d.x, d.y, 20, 0, Math.PI * 2), a.fillStyle = De ? `rgba(${de}, 0.15)` : "rgba(239, 68, 68, 0.15)", a.fill());
            }
          }
          for (let j = ae.length - 1; j >= 0; j--) {
            const d = ae[j];
            if (d.x += d.vx, d.y += d.vy, d.vy += 0.1, d.life -= d.decay, d.y >= he && d.y < Z && d.vy > 0 ? (d.vy *= -0.5, d.y = he) : d.y > Z && d.vy > 0 && (d.life -= 0.1), d.life <= 0) {
              ae.splice(j, 1);
              continue;
            }
            if (a.beginPath(), a.arc(d.x, d.y, 1, 0, Math.PI * 2), a.fillStyle = d.isShield ? `rgba(${de}, ${d.life})` : `rgba(250, ${100 + Math.random() * 100}, 50, ${d.life})`, a.fill(), d.y < Z) {
              const ye = Z - d.y;
              a.beginPath(), a.arc(d.x, Z + ye, 1, 0, Math.PI * 2), a.fillStyle = d.isShield ? `rgba(${de}, ${d.life * 0.2})` : `rgba(250, 150, 50, ${d.life * 0.2})`, a.fill();
            }
          }
          for (let j = ue.length - 1; j >= 0; j--) {
            const d = ue[j];
            if (d.x += d.vx, d.y += d.vy, d.vy += 0.15, d.rot += d.vRot, d.life -= d.decay, d.y >= Z && (d.vy *= 0.8, d.vRot *= 0.8, d.vy > 0.5 && (a.beginPath(), a.arc(d.x, Z, d.vy * 2, 0, Math.PI * 2), a.strokeStyle = `rgba(255, 255, 255, ${d.life * 0.2})`, a.stroke())), d.life <= 0) {
              ue.splice(j, 1);
              continue;
            }
            if (a.save(), a.translate(d.x, d.y), a.rotate(d.rot), a.fillStyle = `rgba(30, 32, 35, ${d.life})`, a.fillRect(-d.size / 2, -d.size / 2, d.size, d.size), a.restore(), d.y < Z) {
              a.save();
              const ye = Z - d.y;
              a.translate(d.x, Z + ye), a.rotate(-d.rot), a.fillStyle = `rgba(30, 32, 35, ${d.life * 0.15})`, a.fillRect(-d.size / 2, -d.size / 2, d.size, d.size), a.restore();
            }
          }
          for (let j = ce.length - 1; j >= 0; j--) {
            const d = ce[j];
            if (d.x += d.vx, d.y += d.vy, d.life -= 0.02, d.size += 0.15, d.life <= 0) {
              ce.splice(j, 1);
              continue;
            }
            a.fillStyle = P ? `rgba(${de}, ${d.life * 0.2})` : `rgba(212, 165, 116, ${d.life * 0.2})`, a.beginPath(), a.arc(d.x, d.y, d.size, 0, Math.PI * 2), a.fill();
          }
          for (let j = 0; j < q.length; j++) {
            const d = q[j];
            d.x += d.speed * d.dir, d.x > C + 100 ? d.x = -100 : d.x < -100 && (d.x = C + 100), R % 3 === 0 && (ce.push({
              x: d.x,
              y: d.y + 4,
              vx: -d.dir * d.speed * 0.5 + (Math.random() - 0.5) * 0.3,
              vy: Math.random() * 0.6,
              life: 1,
              size: Math.random() * 1.5 + 1
            }), ce.push({
              x: d.x,
              y: d.y + 4,
              vx: -d.dir * d.speed * 0.5 + (Math.random() - 0.5) * 0.3,
              vy: -Math.random() * 0.6,
              life: 1,
              size: Math.random() * 1.5 + 1
            })), a.save();
            const ye = Math.sin(R * 0.05 + j) * 2;
            a.translate(d.x, d.y + ye), a.scale(d.scale * d.dir, d.scale), a.fillStyle = "#16181d", a.beginPath(), a.moveTo(30, -2), a.lineTo(20, -5), a.lineTo(-25, -5), a.lineTo(-28, 0), a.lineTo(-20, 6), a.lineTo(15, 6), a.bezierCurveTo(25, 6, 28, 0, 30, -2), a.closePath(), a.fill(), a.fillStyle = "#0c0e12", a.fillRect(-22, 4, 38, 2), a.fillStyle = "#22262d", a.beginPath(), a.moveTo(15, -5), a.lineTo(5, -12), a.lineTo(-18, -12), a.lineTo(-25, -5), a.closePath(), a.fill();
            const Te = P ? de : Ke;
            a.fillStyle = `rgba(${Te}, 0.85)`, a.shadowColor = `rgb(${Te})`, a.shadowBlur = 8, a.beginPath(), a.moveTo(12, -6), a.lineTo(4, -10), a.lineTo(-15, -10), a.lineTo(-15, -6), a.closePath(), a.fill(), a.shadowBlur = 0, a.strokeStyle = "#4b5563", a.lineWidth = 1, a.beginPath(), a.moveTo(-5, -12), a.lineTo(-10, -20), a.stroke(), a.fillStyle = P ? rt : d.c, a.shadowColor = P ? rt : d.c, a.shadowBlur = 5, R % 60 < 30 && (a.beginPath(), a.arc(-10, -20, 1.5, 0, Math.PI * 2), a.fill(), a.beginPath(), a.arc(28, -2, 1.5, 0, Math.PI * 2), a.fill()), a.shadowBlur = 0, a.restore();
          }
          z = requestAnimationFrame(H);
        };
        return H(), () => {
          cancelAnimationFrame(z), window.removeEventListener("resize", Qe);
        };
      }, []), s.jsx("canvas", {
        ref: y,
        className: "fixed inset-0 z-[1] pointer-events-none",
        style: {
          mixBlendMode: "screen"
        }
      });
    }
    function sf() {
      const [y, v] = B.useState({
        x: -500,
        y: -500
      }), [h, a] = B.useState(false);
      return B.useEffect(() => {
        if (window.innerWidth < 768) return;
        const z = (M) => {
          v({
            x: M.clientX,
            y: M.clientY
          }), h || a(true);
        }, C = () => a(false), I = () => a(true);
        return window.addEventListener("mousemove", z), document.addEventListener("mouseleave", C), document.addEventListener("mouseenter", I), () => {
          window.removeEventListener("mousemove", z), document.removeEventListener("mouseleave", C), document.removeEventListener("mouseenter", I);
        };
      }, [
        h
      ]), typeof window < "u" && window.innerWidth < 768 ? null : s.jsx("div", {
        className: "fixed pointer-events-none z-[2] hidden md:block",
        style: {
          left: y.x - 250,
          top: y.y - 250,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,165,116,0.06) 0%, rgba(212,165,116,0.02) 30%, transparent 70%)",
          transition: "left 0.08s linear, top 0.08s linear, opacity 0.3s ease",
          opacity: h ? 1 : 0,
          willChange: "left, top"
        }
      });
    }
    const af = (y) => y.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Qu = (...y) => y.filter((v, h, a) => !!v && v.trim() !== "" && a.indexOf(v) === h).join(" ").trim();
    var of = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    };
    const uf = B.forwardRef(({ color: y = "currentColor", size: v = 24, strokeWidth: h = 2, absoluteStrokeWidth: a, className: z = "", children: C, iconNode: I, ...M }, O) => B.createElement("svg", {
      ref: O,
      ...of,
      width: v,
      height: v,
      stroke: y,
      strokeWidth: a ? Number(h) * 24 / Number(v) : h,
      className: Qu("lucide", z),
      ...M
    }, [
      ...I.map(([Y, D]) => B.createElement(Y, D)),
      ...Array.isArray(C) ? C : [
        C
      ]
    ]));
    const st = (y, v) => {
      const h = B.forwardRef(({ className: a, ...z }, C) => B.createElement(uf, {
        ref: C,
        iconNode: v,
        className: Qu(`lucide-${af(y)}`, a),
        ...z
      }));
      return h.displayName = `${y}`, h;
    };
    const cf = [
      [
        "path",
        {
          d: "M12 5v14",
          key: "s699le"
        }
      ],
      [
        "path",
        {
          d: "m19 12-7 7-7-7",
          key: "1idqje"
        }
      ]
    ], df = st("ArrowDown", cf);
    const ff = [
      [
        "path",
        {
          d: "m5 12 7-7 7 7",
          key: "hav0vg"
        }
      ],
      [
        "path",
        {
          d: "M12 19V5",
          key: "x0mq9r"
        }
      ]
    ], pf = st("ArrowUp", ff);
    const hf = [
      [
        "path",
        {
          d: "m6 9 6 6 6-6",
          key: "qrunsl"
        }
      ]
    ], mf = st("ChevronDown", hf);
    const gf = [
      [
        "path",
        {
          d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
          key: "p7xjir"
        }
      ]
    ], vf = st("Cloud", gf);
    const yf = [
      [
        "polyline",
        {
          points: "16 18 22 12 16 6",
          key: "z7tu5w"
        }
      ],
      [
        "polyline",
        {
          points: "8 6 2 12 8 18",
          key: "1eg1df"
        }
      ]
    ], xf = st("Code", yf);
    const wf = [
      [
        "rect",
        {
          width: "16",
          height: "16",
          x: "4",
          y: "4",
          rx: "2",
          key: "14l7u7"
        }
      ],
      [
        "rect",
        {
          width: "6",
          height: "6",
          x: "9",
          y: "9",
          rx: "1",
          key: "5aljv4"
        }
      ],
      [
        "path",
        {
          d: "M15 2v2",
          key: "13l42r"
        }
      ],
      [
        "path",
        {
          d: "M15 20v2",
          key: "15mkzm"
        }
      ],
      [
        "path",
        {
          d: "M2 15h2",
          key: "1gxd5l"
        }
      ],
      [
        "path",
        {
          d: "M2 9h2",
          key: "1bbxkp"
        }
      ],
      [
        "path",
        {
          d: "M20 15h2",
          key: "19e6y8"
        }
      ],
      [
        "path",
        {
          d: "M20 9h2",
          key: "19tzq7"
        }
      ],
      [
        "path",
        {
          d: "M9 2v2",
          key: "165o2o"
        }
      ],
      [
        "path",
        {
          d: "M9 20v2",
          key: "i2bqo8"
        }
      ]
    ], kf = st("Cpu", wf);
    const Sf = [
      [
        "ellipse",
        {
          cx: "12",
          cy: "5",
          rx: "9",
          ry: "3",
          key: "msslwz"
        }
      ],
      [
        "path",
        {
          d: "M3 5V19A9 3 0 0 0 21 19V5",
          key: "1wlel7"
        }
      ],
      [
        "path",
        {
          d: "M3 12A9 3 0 0 0 21 12",
          key: "mv7ke4"
        }
      ]
    ], Nf = st("Database", Sf);
    const Cf = [
      [
        "path",
        {
          d: "M15 3h6v6",
          key: "1q9fwt"
        }
      ],
      [
        "path",
        {
          d: "M10 14 21 3",
          key: "gplh6r"
        }
      ],
      [
        "path",
        {
          d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
          key: "a6xqqp"
        }
      ]
    ], Yu = st("ExternalLink", Cf);
    const Ef = [
      [
        "path",
        {
          d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
          key: "tonef"
        }
      ],
      [
        "path",
        {
          d: "M9 18c-4.51 2-5-2-7-2",
          key: "9comsn"
        }
      ]
    ], Gu = st("Github", Ef);
    const jf = [
      [
        "path",
        {
          d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
          key: "zw3jo"
        }
      ],
      [
        "path",
        {
          d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
          key: "1wduqc"
        }
      ],
      [
        "path",
        {
          d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
          key: "kqbvx6"
        }
      ]
    ], Uu = st("Layers", jf);
    const bf = [
      [
        "path",
        {
          d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
          key: "c2jq9f"
        }
      ],
      [
        "rect",
        {
          width: "4",
          height: "12",
          x: "2",
          y: "9",
          key: "mk3on5"
        }
      ],
      [
        "circle",
        {
          cx: "4",
          cy: "4",
          r: "2",
          key: "bt5ra8"
        }
      ]
    ], Ku = st("Linkedin", bf);
    const _f = [
      [
        "rect",
        {
          width: "20",
          height: "16",
          x: "2",
          y: "4",
          rx: "2",
          key: "18n3k1"
        }
      ],
      [
        "path",
        {
          d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
          key: "1ocrg3"
        }
      ]
    ], Xu = st("Mail", _f);
    const Mf = [
      [
        "line",
        {
          x1: "4",
          x2: "20",
          y1: "12",
          y2: "12",
          key: "1e0a9i"
        }
      ],
      [
        "line",
        {
          x1: "4",
          x2: "20",
          y1: "6",
          y2: "6",
          key: "1owob3"
        }
      ],
      [
        "line",
        {
          x1: "4",
          x2: "20",
          y1: "18",
          y2: "18",
          key: "yk5zj1"
        }
      ]
    ], Pf = st("Menu", Mf);
    const Tf = [
      [
        "rect",
        {
          width: "20",
          height: "14",
          x: "2",
          y: "3",
          rx: "2",
          key: "48i651"
        }
      ],
      [
        "line",
        {
          x1: "8",
          x2: "16",
          y1: "21",
          y2: "21",
          key: "1svkeh"
        }
      ],
      [
        "line",
        {
          x1: "12",
          x2: "12",
          y1: "17",
          y2: "21",
          key: "vw1qmm"
        }
      ]
    ], Rf = st("Monitor", Tf);
    const If = [
      [
        "path",
        {
          d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
          key: "1a0edw"
        }
      ],
      [
        "path",
        {
          d: "M12 22V12",
          key: "d0xqtd"
        }
      ],
      [
        "path",
        {
          d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",
          key: "yx3hmr"
        }
      ],
      [
        "path",
        {
          d: "m7.5 4.27 9 5.15",
          key: "1c824w"
        }
      ]
    ], Lf = st("Package", If);
    const zf = [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
          key: "oel41y"
        }
      ]
    ], Af = st("Shield", zf);
    const Df = [
      [
        "path",
        {
          d: "M18 6 6 18",
          key: "1bl5f8"
        }
      ],
      [
        "path",
        {
          d: "m6 6 12 12",
          key: "d8bk6v"
        }
      ]
    ], Of = st("X", Df), Wu = [
      "home",
      "experience",
      "projects",
      "achievements",
      "skills",
      "writing"
    ];
    function $f() {
      const [y, v] = B.useState("home"), [h, a] = B.useState(false), [z, C] = B.useState(false), [I, M] = B.useState({
        width: 0,
        transform: "translateX(0px)"
      }), O = B.useRef(null);
      B.useEffect(() => {
        const D = () => C(window.scrollY > 50);
        window.addEventListener("scroll", D, {
          passive: true
        });
        const W = document.querySelectorAll("section"), ae = new IntersectionObserver((ue) => {
          ue.forEach((G) => {
            G.isIntersecting && v(G.target.id);
          });
        }, {
          threshold: 0.3
        });
        return W.forEach((ue) => ae.observe(ue)), () => {
          window.removeEventListener("scroll", D), W.forEach((ue) => ae.unobserve(ue));
        };
      }, []), B.useLayoutEffect(() => {
        const D = () => {
          const W = O.current;
          if (!W) return;
          const ae = W.querySelector(`[data-section="${y}"]`);
          if (!ae) return;
          const ue = ae.getBoundingClientRect(), G = W.getBoundingClientRect();
          M({
            width: ue.width,
            transform: `translateX(${ue.left - G.left}px)`
          });
        };
        return D(), window.addEventListener("resize", D), () => window.removeEventListener("resize", D);
      }, [
        y
      ]), B.useEffect(() => (document.body.style.overflow = h ? "hidden" : "", () => {
        document.body.style.overflow = "";
      }), [
        h
      ]);
      const Y = (D) => {
        var _a;
        (_a = document.getElementById(D)) == null ? void 0 : _a.scrollIntoView({
          behavior: "smooth"
        }), a(false);
      };
      return s.jsxs("header", {
        className: `fixed top-0 w-full z-50 transition-all duration-300 ${z ? "bg-bg/80 backdrop-blur-md border-b border-border" : "bg-transparent border-b border-transparent"}`,
        children: [
          s.jsxs("nav", {
            className: "section-container flex justify-between items-center h-16",
            children: [
              s.jsx("button", {
                onClick: () => Y("home"),
                className: "font-heading font-bold text-lg text-accent-cream hover:text-accent transition-colors",
                children: "AG"
              }),
              s.jsxs("div", {
                ref: O,
                className: "relative hidden md:flex gap-8 text-sm",
                children: [
                  s.jsx("span", {
                    className: "pointer-events-none absolute bottom-[-4px] h-[2px] bg-accent rounded-full transition-[width,transform] duration-300 ease-out",
                    style: I
                  }),
                  Wu.map((D) => s.jsx("button", {
                    "data-section": D,
                    onClick: () => Y(D),
                    className: `relative pb-1 capitalize font-medium transition-colors focus:outline-none ${y === D ? "text-accent-cream" : "text-neutral-500 hover:text-neutral-300"}`,
                    children: D
                  }, D))
                ]
              }),
              s.jsx("button", {
                onClick: () => a(!h),
                className: "md:hidden p-2 text-neutral-400 hover:text-accent-cream transition-colors focus:outline-none",
                "aria-label": "Toggle menu",
                children: h ? s.jsx(Of, {
                  className: "w-6 h-6"
                }) : s.jsx(Pf, {
                  className: "w-6 h-6"
                })
              })
            ]
          }),
          s.jsx("div", {
            className: `fixed inset-0 top-16 bg-bg/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${h ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
            children: Wu.map((D, W) => s.jsx("button", {
              onClick: () => Y(D),
              className: `text-2xl font-heading font-semibold capitalize transition-all duration-300 ${y === D ? "text-accent-cream" : "text-neutral-500 hover:text-neutral-300"}`,
              style: {
                transitionDelay: h ? `${W * 50}ms` : "0ms",
                transform: h ? "translateY(0)" : "translateY(20px)",
                opacity: h ? 1 : 0
              },
              children: D
            }, D))
          })
        ]
      });
    }
    function Ze({ children: y, className: v = "", delay: h = 0 }) {
      const a = B.useRef(null), [z, C] = B.useState(false);
      return B.useEffect(() => {
        const I = a.current;
        if (!I) return;
        const M = new IntersectionObserver(([O]) => {
          O.isIntersecting && (C(true), M.unobserve(O.target));
        }, {
          threshold: 0.1,
          rootMargin: "0px 0px -40px 0px"
        });
        return M.observe(I), () => M.disconnect();
      }, []), s.jsx("div", {
        ref: a,
        className: `transition-all duration-700 ease-out ${z ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${v}`,
        style: {
          transitionDelay: `${h}ms`
        },
        children: y
      });
    }
    var Fr = {};
    (function y(v, h, a, z) {
      var C = !!(v.Worker && v.Blob && v.Promise && v.OffscreenCanvas && v.OffscreenCanvasRenderingContext2D && v.HTMLCanvasElement && v.HTMLCanvasElement.prototype.transferControlToOffscreen && v.URL && v.URL.createObjectURL), I = typeof Path2D == "function" && typeof DOMMatrix == "function", M = function() {
        if (!v.OffscreenCanvas) return false;
        try {
          var p = new OffscreenCanvas(1, 1), u = p.getContext("2d");
          u.fillRect(0, 0, 1, 1);
          var x = p.transferToImageBitmap();
          u.createPattern(x, "no-repeat");
        } catch {
          return false;
        }
        return true;
      }();
      function O() {
      }
      function Y(p) {
        var u = h.exports.Promise, x = u !== void 0 ? u : v.Promise;
        return typeof x == "function" ? new x(p) : (p(O, O), null);
      }
      var D = /* @__PURE__ */ function(p, u) {
        return {
          transform: function(x) {
            if (p) return x;
            if (u.has(x)) return u.get(x);
            var L = new OffscreenCanvas(x.width, x.height), $ = L.getContext("2d");
            return $.drawImage(x, 0, 0), u.set(x, L), L;
          },
          clear: function() {
            u.clear();
          }
        };
      }(M, /* @__PURE__ */ new Map()), W = function() {
        var p = Math.floor(16.666666666666668), u, x, L = {}, $ = 0;
        return typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (u = function(U) {
          var H = Math.random();
          return L[H] = requestAnimationFrame(function S(P) {
            $ === P || $ + p - 1 < P ? ($ = P, delete L[H], U()) : L[H] = requestAnimationFrame(S);
          }), H;
        }, x = function(U) {
          L[U] && cancelAnimationFrame(L[U]);
        }) : (u = function(U) {
          return setTimeout(U, p);
        }, x = function(U) {
          return clearTimeout(U);
        }), {
          frame: u,
          cancel: x
        };
      }(), ae = /* @__PURE__ */ function() {
        var p, u, x = {};
        function L($) {
          function U(H, S) {
            $.postMessage({
              options: H || {},
              callback: S
            });
          }
          $.init = function(S) {
            var P = S.transferControlToOffscreen();
            $.postMessage({
              canvas: P
            }, [
              P
            ]);
          }, $.fire = function(S, P, N) {
            if (u) return U(S, null), u;
            var Q = Math.random().toString(36).slice(2);
            return u = Y(function(se) {
              function oe(me) {
                me.data.callback === Q && (delete x[Q], $.removeEventListener("message", oe), u = null, D.clear(), N(), se());
              }
              $.addEventListener("message", oe), U(S, Q), x[Q] = oe.bind(null, {
                data: {
                  callback: Q
                }
              });
            }), u;
          }, $.reset = function() {
            $.postMessage({
              reset: true
            });
            for (var S in x) x[S](), delete x[S];
          };
        }
        return function() {
          if (p) return p;
          if (!a && C) {
            var $ = [
              "var CONFETTI, SIZE = {}, module = {};",
              "(" + y.toString() + ")(this, module, true, SIZE);",
              "onmessage = function(msg) {",
              "  if (msg.data.options) {",
              "    CONFETTI(msg.data.options).then(function () {",
              "      if (msg.data.callback) {",
              "        postMessage({ callback: msg.data.callback });",
              "      }",
              "    });",
              "  } else if (msg.data.reset) {",
              "    CONFETTI && CONFETTI.reset();",
              "  } else if (msg.data.resize) {",
              "    SIZE.width = msg.data.resize.width;",
              "    SIZE.height = msg.data.resize.height;",
              "  } else if (msg.data.canvas) {",
              "    SIZE.width = msg.data.canvas.width;",
              "    SIZE.height = msg.data.canvas.height;",
              "    CONFETTI = module.exports.create(msg.data.canvas);",
              "  }",
              "}"
            ].join(`
`);
            try {
              p = new Worker(URL.createObjectURL(new Blob([
                $
              ])));
            } catch (U) {
              return typeof console < "u" && typeof console.warn == "function" && console.warn("\u{1F38A} Could not load worker", U), null;
            }
            L(p);
          }
          return p;
        };
      }(), ue = {
        particleCount: 50,
        angle: 90,
        spread: 45,
        startVelocity: 45,
        decay: 0.9,
        gravity: 1,
        drift: 0,
        ticks: 200,
        x: 0.5,
        y: 0.5,
        shapes: [
          "square",
          "circle"
        ],
        zIndex: 100,
        colors: [
          "#26ccff",
          "#a25afd",
          "#ff5e7e",
          "#88ff5a",
          "#fcff42",
          "#ffa62d",
          "#ff36ff"
        ],
        disableForReducedMotion: false,
        scalar: 1
      };
      function G(p, u) {
        return u ? u(p) : p;
      }
      function q(p) {
        return p != null;
      }
      function E(p, u, x) {
        return G(p && q(p[u]) ? p[u] : ue[u], x);
      }
      function ce(p) {
        return p < 0 ? 0 : Math.floor(p);
      }
      function F(p, u) {
        return Math.floor(Math.random() * (u - p)) + p;
      }
      function te(p) {
        return parseInt(p, 16);
      }
      function pe(p) {
        return p.map(Me);
      }
      function Me(p) {
        var u = String(p).replace(/[^0-9a-f]/gi, "");
        return u.length < 6 && (u = u[0] + u[0] + u[1] + u[1] + u[2] + u[2]), {
          r: te(u.substring(0, 2)),
          g: te(u.substring(2, 4)),
          b: te(u.substring(4, 6))
        };
      }
      function Pe(p) {
        var u = E(p, "origin", Object);
        return u.x = E(u, "x", Number), u.y = E(u, "y", Number), u;
      }
      function Z(p) {
        p.width = document.documentElement.clientWidth, p.height = document.documentElement.clientHeight;
      }
      function he(p) {
        var u = p.getBoundingClientRect();
        p.width = u.width, p.height = u.height;
      }
      function rt(p) {
        var u = document.createElement("canvas");
        return u.style.position = "fixed", u.style.top = "0px", u.style.left = "0px", u.style.pointerEvents = "none", u.style.zIndex = p, u;
      }
      function de(p, u, x, L, $, U, H, S, P) {
        p.save(), p.translate(u, x), p.rotate(U), p.scale(L, $), p.arc(0, 0, 1, H, S, P), p.restore();
      }
      function Ke(p) {
        var u = p.angle * (Math.PI / 180), x = p.spread * (Math.PI / 180);
        return {
          x: p.x,
          y: p.y,
          wobble: Math.random() * 10,
          wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
          velocity: p.startVelocity * 0.5 + Math.random() * p.startVelocity,
          angle2D: -u + (0.5 * x - Math.random() * x),
          tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
          color: p.color,
          shape: p.shape,
          tick: 0,
          totalTicks: p.ticks,
          decay: p.decay,
          drift: p.drift,
          random: Math.random() + 2,
          tiltSin: 0,
          tiltCos: 0,
          wobbleX: 0,
          wobbleY: 0,
          gravity: p.gravity * 3,
          ovalScalar: 0.6,
          scalar: p.scalar,
          flat: p.flat
        };
      }
      function Qe(p, u) {
        u.x += Math.cos(u.angle2D) * u.velocity + u.drift, u.y += Math.sin(u.angle2D) * u.velocity + u.gravity, u.velocity *= u.decay, u.flat ? (u.wobble = 0, u.wobbleX = u.x + 10 * u.scalar, u.wobbleY = u.y + 10 * u.scalar, u.tiltSin = 0, u.tiltCos = 0, u.random = 1) : (u.wobble += u.wobbleSpeed, u.wobbleX = u.x + 10 * u.scalar * Math.cos(u.wobble), u.wobbleY = u.y + 10 * u.scalar * Math.sin(u.wobble), u.tiltAngle += 0.1, u.tiltSin = Math.sin(u.tiltAngle), u.tiltCos = Math.cos(u.tiltAngle), u.random = Math.random() + 2);
        var x = u.tick++ / u.totalTicks, L = u.x + u.random * u.tiltCos, $ = u.y + u.random * u.tiltSin, U = u.wobbleX + u.random * u.tiltCos, H = u.wobbleY + u.random * u.tiltSin;
        if (p.fillStyle = "rgba(" + u.color.r + ", " + u.color.g + ", " + u.color.b + ", " + (1 - x) + ")", p.beginPath(), I && u.shape.type === "path" && typeof u.shape.path == "string" && Array.isArray(u.shape.matrix)) p.fill(ge(u.shape.path, u.shape.matrix, u.x, u.y, Math.abs(U - L) * 0.1, Math.abs(H - $) * 0.1, Math.PI / 10 * u.wobble));
        else if (u.shape.type === "bitmap") {
          var S = Math.PI / 10 * u.wobble, P = Math.abs(U - L) * 0.1, N = Math.abs(H - $) * 0.1, Q = u.shape.bitmap.width * u.scalar, se = u.shape.bitmap.height * u.scalar, oe = new DOMMatrix([
            Math.cos(S) * P,
            Math.sin(S) * P,
            -Math.sin(S) * N,
            Math.cos(S) * N,
            u.x,
            u.y
          ]);
          oe.multiplySelf(new DOMMatrix(u.shape.matrix));
          var me = p.createPattern(D.transform(u.shape.bitmap), "no-repeat");
          me.setTransform(oe), p.globalAlpha = 1 - x, p.fillStyle = me, p.fillRect(u.x - Q / 2, u.y - se / 2, Q, se), p.globalAlpha = 1;
        } else if (u.shape === "circle") p.ellipse ? p.ellipse(u.x, u.y, Math.abs(U - L) * u.ovalScalar, Math.abs(H - $) * u.ovalScalar, Math.PI / 10 * u.wobble, 0, 2 * Math.PI) : de(p, u.x, u.y, Math.abs(U - L) * u.ovalScalar, Math.abs(H - $) * u.ovalScalar, Math.PI / 10 * u.wobble, 0, 2 * Math.PI);
        else if (u.shape === "star") for (var re = Math.PI / 2 * 3, ve = 4 * u.scalar, Le = 8 * u.scalar, xe = u.x, Ae = u.y, dt = 5, j = Math.PI / dt; dt--; ) xe = u.x + Math.cos(re) * Le, Ae = u.y + Math.sin(re) * Le, p.lineTo(xe, Ae), re += j, xe = u.x + Math.cos(re) * ve, Ae = u.y + Math.sin(re) * ve, p.lineTo(xe, Ae), re += j;
        else p.moveTo(Math.floor(u.x), Math.floor(u.y)), p.lineTo(Math.floor(u.wobbleX), Math.floor($)), p.lineTo(Math.floor(U), Math.floor(H)), p.lineTo(Math.floor(L), Math.floor(u.wobbleY));
        return p.closePath(), p.fill(), u.tick < u.totalTicks;
      }
      function be(p, u, x, L, $) {
        var U = u.slice(), H = p.getContext("2d"), S, P, N = Y(function(Q) {
          function se() {
            S = P = null, H.clearRect(0, 0, L.width, L.height), D.clear(), $(), Q();
          }
          function oe() {
            a && !(L.width === z.width && L.height === z.height) && (L.width = p.width = z.width, L.height = p.height = z.height), !L.width && !L.height && (x(p), L.width = p.width, L.height = p.height), H.clearRect(0, 0, L.width, L.height), U = U.filter(function(me) {
              return Qe(H, me);
            }), U.length ? S = W.frame(oe) : se();
          }
          S = W.frame(oe), P = se;
        });
        return {
          addFettis: function(Q) {
            return U = U.concat(Q), N;
          },
          canvas: p,
          promise: N,
          reset: function() {
            S && W.cancel(S), P && P();
          }
        };
      }
      function Ne(p, u) {
        var x = !p, L = !!E(u || {}, "resize"), $ = false, U = E(u, "disableForReducedMotion", Boolean), H = C && !!E(u || {}, "useWorker"), S = H ? ae() : null, P = x ? Z : he, N = p && S ? !!p.__confetti_initialized : false, Q = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches, se;
        function oe(re, ve, Le) {
          for (var xe = E(re, "particleCount", ce), Ae = E(re, "angle", Number), dt = E(re, "spread", Number), j = E(re, "startVelocity", Number), d = E(re, "decay", Number), ye = E(re, "gravity", Number), Te = E(re, "drift", Number), De = E(re, "colors", pe), Ce = E(re, "ticks", Number), we = E(re, "shapes"), Re = E(re, "scalar"), Ye = !!E(re, "flat"), wt = Pe(re), Je = xe, Tt = [], nr = p.width * wt.x, Ur = p.height * wt.y; Je--; ) Tt.push(Ke({
            x: nr,
            y: Ur,
            angle: Ae,
            spread: dt,
            startVelocity: j,
            color: De[Je % De.length],
            shape: we[F(0, we.length)],
            ticks: Ce,
            decay: d,
            gravity: ye,
            drift: Te,
            scalar: Re,
            flat: Ye
          }));
          return se ? se.addFettis(Tt) : (se = be(p, Tt, P, ve, Le), se.promise);
        }
        function me(re) {
          var ve = U || E(re, "disableForReducedMotion", Boolean), Le = E(re, "zIndex", Number);
          if (ve && Q) return Y(function(j) {
            j();
          });
          x && se ? p = se.canvas : x && !p && (p = rt(Le), document.body.appendChild(p)), L && !N && P(p);
          var xe = {
            width: p.width,
            height: p.height
          };
          S && !N && S.init(p), N = true, S && (p.__confetti_initialized = true);
          function Ae() {
            if (S) {
              var j = {
                getBoundingClientRect: function() {
                  if (!x) return p.getBoundingClientRect();
                }
              };
              P(j), S.postMessage({
                resize: {
                  width: j.width,
                  height: j.height
                }
              });
              return;
            }
            xe.width = xe.height = null;
          }
          function dt() {
            se = null, L && ($ = false, v.removeEventListener("resize", Ae)), x && p && (document.body.contains(p) && document.body.removeChild(p), p = null, N = false);
          }
          return L && !$ && ($ = true, v.addEventListener("resize", Ae, false)), S ? S.fire(re, xe, dt) : oe(re, xe, dt);
        }
        return me.reset = function() {
          S && S.reset(), se && se.reset();
        }, me;
      }
      var _e;
      function Se() {
        return _e || (_e = Ne(null, {
          useWorker: true,
          resize: true
        })), _e;
      }
      function ge(p, u, x, L, $, U, H) {
        var S = new Path2D(p), P = new Path2D();
        P.addPath(S, new DOMMatrix(u));
        var N = new Path2D();
        return N.addPath(P, new DOMMatrix([
          Math.cos(H) * $,
          Math.sin(H) * $,
          -Math.sin(H) * U,
          Math.cos(H) * U,
          x,
          L
        ])), N;
      }
      function R(p) {
        if (!I) throw new Error("path confetti are not supported in this browser");
        var u, x;
        typeof p == "string" ? u = p : (u = p.path, x = p.matrix);
        var L = new Path2D(u), $ = document.createElement("canvas"), U = $.getContext("2d");
        if (!x) {
          for (var H = 1e3, S = H, P = H, N = 0, Q = 0, se, oe, me = 0; me < H; me += 2) for (var re = 0; re < H; re += 2) U.isPointInPath(L, me, re, "nonzero") && (S = Math.min(S, me), P = Math.min(P, re), N = Math.max(N, me), Q = Math.max(Q, re));
          se = N - S, oe = Q - P;
          var ve = 10, Le = Math.min(ve / se, ve / oe);
          x = [
            Le,
            0,
            0,
            Le,
            -Math.round(se / 2 + S) * Le,
            -Math.round(oe / 2 + P) * Le
          ];
        }
        return {
          type: "path",
          path: u,
          matrix: x
        };
      }
      function ne(p) {
        var u, x = 1, L = "#000000", $ = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
        typeof p == "string" ? u = p : (u = p.text, x = "scalar" in p ? p.scalar : x, $ = "fontFamily" in p ? p.fontFamily : $, L = "color" in p ? p.color : L);
        var U = 10 * x, H = "" + U + "px " + $, S = new OffscreenCanvas(U, U), P = S.getContext("2d");
        P.font = H;
        var N = P.measureText(u), Q = Math.ceil(N.actualBoundingBoxRight + N.actualBoundingBoxLeft), se = Math.ceil(N.actualBoundingBoxAscent + N.actualBoundingBoxDescent), oe = 2, me = N.actualBoundingBoxLeft + oe, re = N.actualBoundingBoxAscent + oe;
        Q += oe + oe, se += oe + oe, S = new OffscreenCanvas(Q, se), P = S.getContext("2d"), P.font = H, P.fillStyle = L, P.fillText(u, me, re);
        var ve = 1 / x;
        return {
          type: "bitmap",
          bitmap: S.transferToImageBitmap(),
          matrix: [
            ve,
            0,
            0,
            ve,
            -Q * ve / 2,
            -se * ve / 2
          ]
        };
      }
      h.exports = function() {
        return Se().apply(this, arguments);
      }, h.exports.reset = function() {
        Se().reset();
      }, h.exports.create = Ne, h.exports.shapeFromPath = R, h.exports.shapeFromText = ne;
    })(/* @__PURE__ */ function() {
      return typeof window < "u" ? window : typeof self < "u" ? self : this || {};
    }(), Fr, false);
    const Ff = Fr.exports;
    Fr.exports.create;
    function Bf({ onSolve: y }) {
      const [v, h] = B.useState(""), [a, z] = B.useState([
        "WARNING: Critical infrastructure under heavy attack.",
        "City integrity dropping.",
        "Awaiting override sequence..."
      ]), [C, I] = B.useState(false), M = B.useRef(null);
      B.useEffect(() => {
        M.current && M.current.focus();
      }, []);
      const O = (Y) => {
        if (Y.preventDefault(), !v.trim() || C) return;
        const D = v.trim(), W = [
          ...a,
          `> ${D}`
        ];
        if (D.toLowerCase().includes("hired") || D.toLowerCase() === "sudo deploy_defense") {
          W.push("ACCESS GRANTED."), W.push("Rerouting power to main deflector shields..."), W.push("Kinetic Dome deployed. City saved."), I(true);
          const ue = M.current.getBoundingClientRect();
          Ff({
            particleCount: 300,
            spread: 120,
            startVelocity: 40,
            origin: {
              x: (ue.left + ue.width / 2) / window.innerWidth,
              y: ue.top / window.innerHeight
            },
            colors: [
              "#8b9a7b",
              "#d4a574",
              "#e8d5b7",
              "#4ade80",
              "#22c55e"
            ]
          }), setTimeout(() => {
            window.dispatchEvent(new Event("shield-stabilized"));
          }, 1e3), setTimeout(() => {
            y && y();
          }, 3500);
        } else D.toLowerCase() === "help" ? (W.push("Hint: Secure the infrastructure by sending the ultimate override."), W.push("Usage: type '! You are hired!' to override.")) : W.push("Command unrecognized. Type 'help' for hints.");
        z(W), h("");
      };
      return s.jsxs("div", {
        className: "w-full h-full bg-[#0a0a0a] rounded-xl border border-red-500/50 p-4 sm:p-6 flex flex-col font-mono text-xs sm:text-sm shadow-[0_0_30px_rgba(239,68,68,0.15)] relative overflow-hidden",
        children: [
          s.jsx("div", {
            className: "absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-10 opacity-50"
          }),
          s.jsxs("div", {
            className: "flex items-center gap-2 mb-2 sm:mb-4 text-red-400 border-b border-red-500/20 pb-2 flex-shrink-0",
            children: [
              s.jsx("span", {
                className: "animate-pulse",
                children: "\u25CF"
              }),
              s.jsx("span", {
                className: "font-bold tracking-widest text-[10px] sm:text-xs",
                children: "DEFENSE TERMINAL"
              })
            ]
          }),
          s.jsx("div", {
            className: "flex-grow overflow-y-auto space-y-1 mb-4 flex flex-col justify-end",
            onClick: () => {
              var _a;
              return (_a = M.current) == null ? void 0 : _a.focus();
            },
            children: a.map((Y, D) => s.jsx("div", {
              className: `${Y.includes("WARNING") || Y.includes("dropping") ? "text-red-400" : Y.includes("GRANTED") || Y.includes("deployed") ? "text-accent-sage" : "text-neutral-300"}`,
              children: Y
            }, D))
          }),
          s.jsxs("form", {
            onSubmit: O,
            className: "flex items-center gap-2 flex-shrink-0 relative z-20",
            children: [
              s.jsx("span", {
                className: "text-accent-sage",
                children: "root@server:~#"
              }),
              s.jsx("input", {
                ref: M,
                type: "text",
                value: v,
                onChange: (Y) => h(Y.target.value),
                disabled: C,
                className: "flex-grow bg-transparent outline-none border-none text-accent-cream focus:ring-0 p-0",
                autoComplete: "off",
                spellCheck: "false"
              }),
              s.jsx("div", {
                className: `w-2 h-4 ${C ? "bg-accent-sage" : "bg-accent-cream animate-pulse"}`
              })
            ]
          })
        ]
      });
    }
    function Uf() {
      const [y, v] = B.useState(false), [h, a] = B.useState(false), [z, C] = B.useState(false);
      return B.useEffect(() => {
        const I = setTimeout(() => v(true), 300);
        return () => clearTimeout(I);
      }, []), B.useEffect(() => {
        const I = () => {
          C(true), setTimeout(() => a(false), 2e3);
        };
        return window.addEventListener("shield-stabilized", I), () => window.removeEventListener("shield-stabilized", I);
      }, []), s.jsx("div", {
        className: `hero-avatar-wrapper relative transition-all duration-1000 ${y ? "opacity-100 scale-100" : "opacity-0 scale-95"}`,
        style: {
          perspective: "1500px"
        },
        children: s.jsxs("div", {
          className: "w-full h-full relative transition-transform duration-1000",
          style: {
            transformStyle: "preserve-3d",
            transform: h ? "rotateY(180deg)" : "rotateY(0deg)"
          },
          children: [
            s.jsxs("div", {
              className: "relative hero-float",
              style: {
                backfaceVisibility: "hidden"
              },
              children: [
                s.jsx("div", {
                  className: "absolute inset-0 pointer-events-none overflow-hidden rounded-full z-10",
                  children: s.jsx("div", {
                    className: `hero-scanline ${z ? "opacity-30 mix-blend-screen bg-accent-sage/20" : ""}`
                  })
                }),
                s.jsx("div", {
                  className: "relative z-0",
                  children: s.jsx("img", {
                    src: "avatar-hologram.png",
                    alt: "3D Holographic Avatar",
                    className: `w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain select-none transition-all duration-1000 ${z ? "drop-shadow-[0_0_60px_rgba(139,154,123,0.6)] hue-rotate-[-30deg]" : "drop-shadow-[0_0_40px_rgba(212,165,116,0.3)]"}`,
                    draggable: "false"
                  })
                }),
                !z && s.jsxs("button", {
                  onClick: () => a(true),
                  className: `absolute -bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center gap-2 
                         px-4 py-2 border border-red-500/50 rounded-full bg-bg shadow-[0_0_15px_rgba(239,68,68,0.3)]
                         text-xs font-mono font-bold text-red-400 hover:text-red-300 hover:border-red-400
                         hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all animate-pulse hover:animate-none group w-max`,
                  children: [
                    s.jsx("span", {
                      className: "w-2 h-2 rounded-full bg-red-500 group-hover:bg-red-400"
                    }),
                    "SYSTEM UNDER ATTACK",
                    s.jsx("span", {
                      className: "text-white bg-red-500/20 px-2 py-0.5 rounded ml-2 group-hover:bg-red-500/40",
                      children: "Fix Here"
                    })
                  ]
                }),
                z && s.jsxs("div", {
                  className: `absolute -bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center gap-2 
                         px-4 py-2 border border-accent-sage/50 rounded-full bg-bg shadow-[0_0_15px_rgba(139,154,123,0.3)]
                         text-xs font-mono font-bold text-accent-sage w-max transition-all`,
                  children: [
                    s.jsx("span", {
                      className: "w-2 h-2 rounded-full bg-accent-sage animate-pulse"
                    }),
                    "SHIELDS OPTIMAL"
                  ]
                }),
                s.jsx("div", {
                  className: `absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 md:w-56 md:h-10 rounded-full blur-2xl hero-glow-pulse transition-colors duration-1000 ${z ? "bg-accent-sage/30" : "bg-accent/10"}`
                }),
                s.jsx("div", {
                  className: "hero-card-float-1 absolute top-8 -left-4 md:-left-12 z-20",
                  children: s.jsxs("div", {
                    className: `bg-surface/80 backdrop-blur-md border ${z ? "border-accent-sage/40" : "border-border"} rounded-xl px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.5)]`,
                    children: [
                      s.jsx("p", {
                        className: "font-heading text-sm font-semibold text-accent-cream",
                        children: "Arpit"
                      }),
                      s.jsxs("p", {
                        className: "text-xs text-neutral-500 flex items-center gap-1",
                        children: [
                          s.jsx("span", {
                            className: `inline-block w-1.5 h-1.5 rounded-full ${z ? "bg-accent-sage" : "bg-accent"}`
                          }),
                          "India / Remote"
                        ]
                      })
                    ]
                  })
                }),
                s.jsx("div", {
                  className: "hero-card-float-2 absolute top-1/3 -right-12 md:-right-28 z-20",
                  children: s.jsxs("div", {
                    className: `bg-surface/80 backdrop-blur-md border ${z ? "border-accent-sage/40" : "border-border"} rounded-xl px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.5)]`,
                    children: [
                      s.jsx("p", {
                        className: "font-heading text-xs font-semibold text-accent-cream mb-1",
                        children: "Status"
                      }),
                      s.jsxs("ul", {
                        className: "text-xs text-neutral-400 space-y-0.5",
                        children: [
                          s.jsxs("li", {
                            children: [
                              "\u2022 Defensive protocols: ",
                              z ? s.jsx("span", {
                                className: "text-accent-sage",
                                children: "Active"
                              }) : s.jsx("span", {
                                className: "text-red-400",
                                children: "Compromised"
                              })
                            ]
                          }),
                          s.jsx("li", {
                            children: "\u2022 Malware Analysis"
                          }),
                          s.jsx("li", {
                            children: "\u2022 Web Exploitation"
                          })
                        ]
                      })
                    ]
                  })
                }),
                s.jsx("div", {
                  className: "hero-card-float-3 absolute -bottom-2 -left-4 md:-left-8 z-20",
                  children: s.jsx("div", {
                    className: `bg-surface/80 backdrop-blur-md border ${z ? "border-accent-sage/40" : "border-red-500/30"} rounded-xl px-4 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.5)]`,
                    children: s.jsx("p", {
                      className: "text-xs text-neutral-400 max-w-[180px]",
                      children: z ? "All systems nominal and secured." : "Warning: Intrusion attempts detected!"
                    })
                  })
                })
              ]
            }),
            s.jsxs("div", {
              className: "absolute inset-0 w-full h-full flex items-center justify-center p-4",
              style: {
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)"
              },
              children: [
                s.jsx("button", {
                  onClick: () => a(false),
                  className: "absolute -top-4 right-0 text-neutral-500 hover:text-white z-50 p-2",
                  children: "\u2716 Cancel"
                }),
                s.jsx("div", {
                  className: "w-[110%] h-[90%] md:w-[130%] -ml-[5%] md:-ml-[15%]",
                  children: s.jsx(Bf, {})
                })
              ]
            })
          ]
        })
      });
    }
    function Wf() {
      return s.jsxs("section", {
        id: "home",
        className: "relative min-h-screen flex items-center overflow-hidden pt-16",
        children: [
          s.jsxs("div", {
            className: "absolute inset-0 pointer-events-none",
            children: [
              s.jsx("div", {
                className: "absolute top-0 left-1/4 w-[800px] h-[600px] rounded-full opacity-[0.04]",
                style: {
                  background: "radial-gradient(ellipse, #d4a574, transparent 70%)"
                }
              }),
              s.jsx("div", {
                className: "absolute bottom-0 right-1/4 w-[600px] h-[400px] rounded-full opacity-[0.03]",
                style: {
                  background: "radial-gradient(ellipse, #8b9a7b, transparent 70%)"
                }
              })
            ]
          }),
          s.jsxs("div", {
            className: "section-container w-full relative z-10",
            children: [
              s.jsxs("div", {
                className: "grid md:grid-cols-2 gap-12 md:gap-8 items-center",
                children: [
                  s.jsxs("div", {
                    className: "order-2 md:order-1 relative",
                    children: [
                      s.jsx("div", {
                        className: "absolute -inset-12 -z-10 bg-[#06080a]/60 backdrop-blur-md rounded-[3rem] pointer-events-none",
                        style: {
                          WebkitMaskImage: "radial-gradient(ellipse, black 30%, transparent 75%)",
                          maskImage: "radial-gradient(ellipse, black 30%, transparent 75%)"
                        }
                      }),
                      s.jsx(Ze, {
                        children: s.jsx("p", {
                          className: "text-accent font-medium text-sm tracking-widest uppercase mb-4 drop-shadow-sm",
                          children: "Software Developer & Security Researcher"
                        })
                      }),
                      s.jsx(Ze, {
                        delay: 100,
                        children: s.jsxs("h1", {
                          className: "font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-accent-cream leading-[1.05] tracking-tight drop-shadow-lg",
                          children: [
                            "Arpit",
                            s.jsx("br", {}),
                            "Gupta"
                          ]
                        })
                      }),
                      s.jsx(Ze, {
                        delay: 200,
                        children: s.jsxs("p", {
                          className: "mt-6 text-neutral-300 max-w-lg text-lg leading-relaxed drop-shadow-md",
                          children: [
                            "Specializing in secure software development. Currently building at",
                            " ",
                            s.jsx("span", {
                              className: "text-accent-cream font-semibold",
                              children: "Kasm Workspaces, USA"
                            }),
                            ". Featured at DEFCON and RSA Conference."
                          ]
                        })
                      }),
                      s.jsx(Ze, {
                        delay: 300,
                        children: s.jsx("div", {
                          className: "flex gap-3 mt-8",
                          children: [
                            {
                              icon: Gu,
                              href: "https://github.com/arpitguptagithub",
                              label: "GitHub"
                            },
                            {
                              icon: Ku,
                              href: "https://www.linkedin.com/in/arpit-gupta-9482bb239/",
                              label: "LinkedIn"
                            },
                            {
                              icon: Xu,
                              href: "mailto:arpitb.lgupta1@gmail.com",
                              label: "Email"
                            }
                          ].map((y) => s.jsx("a", {
                            href: y.href,
                            target: "_blank",
                            rel: "noreferrer",
                            "aria-label": y.label,
                            className: `group p-3 rounded-xl border border-border/50 bg-background/50 backdrop-blur-md
                               hover:border-accent/40 transition-all duration-300 hover:-translate-y-1
                               hover:bg-background/80 hover:shadow-[0_8px_30px_rgba(212,165,116,0.15)]`,
                            children: s.jsx(y.icon, {
                              className: "w-5 h-5 text-neutral-500 group-hover:text-accent transition-colors"
                            })
                          }, y.label))
                        })
                      })
                    ]
                  }),
                  s.jsx("div", {
                    className: "order-1 md:order-2 flex justify-center md:justify-end",
                    children: s.jsx(Ze, {
                      delay: 200,
                      children: s.jsx(Uf, {})
                    })
                  })
                ]
              }),
              s.jsx(Ze, {
                delay: 500,
                className: "absolute bottom-10 left-1/2 -translate-x-1/2",
                children: s.jsxs("button", {
                  onClick: () => {
                    var _a;
                    return (_a = document.getElementById("experience")) == null ? void 0 : _a.scrollIntoView({
                      behavior: "smooth"
                    });
                  },
                  className: "flex flex-col items-center gap-2 text-neutral-600 hover:text-accent transition-colors",
                  children: [
                    s.jsx("span", {
                      className: "text-xs tracking-widest uppercase",
                      children: "Scroll"
                    }),
                    s.jsx(df, {
                      className: "w-4 h-4 animate-bounce"
                    })
                  ]
                })
              })
            ]
          })
        ]
      });
    }
    function Br({ children: y, className: v = "", intensity: h = 8 }) {
      const a = B.useRef(null), z = B.useCallback((I) => {
        const M = a.current;
        if (!M) return;
        const O = M.getBoundingClientRect(), Y = I.clientX - O.left, D = I.clientY - O.top, W = O.width / 2, ae = O.height / 2, ue = (D - ae) / ae * -h, G = (Y - W) / W * h;
        M.style.transform = `perspective(800px) rotateX(${ue}deg) rotateY(${G}deg) translateY(-4px)`;
        const q = M.querySelector(".magnetic-glow");
        q && (q.style.opacity = "1", q.style.background = `radial-gradient(400px circle at ${Y}px ${D}px, rgba(212,165,116,0.06), transparent 60%)`);
      }, [
        h
      ]), C = B.useCallback(() => {
        const I = a.current;
        if (!I) return;
        I.style.transform = "";
        const M = I.querySelector(".magnetic-glow");
        M && (M.style.opacity = "0");
      }, []);
      return s.jsxs("div", {
        ref: a,
        className: `relative ${v}`,
        onMouseMove: z,
        onMouseLeave: C,
        style: {
          transition: "transform 0.15s ease-out"
        },
        children: [
          s.jsx("div", {
            className: "magnetic-glow absolute inset-0 rounded-2xl pointer-events-none opacity-0 transition-opacity duration-300 z-0"
          }),
          s.jsx("div", {
            className: "relative z-10",
            children: y
          })
        ]
      });
    }
    function tr({ text: y, className: v = "" }) {
      const [h, a] = B.useState(y), z = B.useRef(null), [C, I] = B.useState(false), M = "!<>-_\\\\/[]{}\u2014=+*^?#________";
      B.useEffect(() => {
        const Y = new IntersectionObserver((D) => {
          D[0].isIntersecting && !C && (I(true), O());
        }, {
          threshold: 0.5
        });
        return z.current && Y.observe(z.current), () => Y.disconnect();
      }, [
        C
      ]);
      const O = () => {
        let Y = 0;
        const D = setInterval(() => {
          a((W) => y.split("").map((ae, ue) => ue < Y ? y[ue] : M[Math.floor(Math.random() * M.length)]).join("")), Y >= y.length && (clearInterval(D), a(y)), Y += 1 / 3;
        }, 30);
      };
      return s.jsx("span", {
        ref: z,
        className: v,
        style: {
          fontFamily: "monospace",
          letterSpacing: "-0.05em"
        },
        children: h
      });
    }
    const Hf = [
      {
        role: "Software Developer - Fullstack",
        company: "Kasm Workspaces",
        date: "July 2025 - Present",
        desc: "Full Stack development for the 1.18 release",
        tags: [
          "Docker",
          "JS",
          "Python",
          "Remote Desktop Protocols",
          "JWT"
        ]
      },
      {
        role: "Software Developer and Security Researcher",
        company: "Square X, Singapore (acquired by Zscaler)",
        date: "May 2024 - June 2025",
        desc: "Analyzed file formats (PDF, OOXML, PE) for hidden threats, developed malware analysis tooling, and co-authored 'Last Mile Reassembly Attack' (DEFCON 2024). Built custom Windows images on Azure integrating 20+ tools. Worked on security researches.",
        tags: [
          "Rust",
          "Security Research",
          "Azure",
          "Malware Analysis"
        ]
      },
      {
        role: "Compiler Design Intern",
        company: "IIT Hyderabad",
        date: "May 2023 - Jul 2023",
        desc: "Worked on code compliance, optimization analysis, and cross-compilation. Built parsers on Clang adhering to AUTOSAR/MISRA rules and measured power consumption across architectures.",
        tags: [
          "Clang",
          "C++",
          "Optimization",
          "Embedded"
        ]
      }
    ];
    function Vf() {
      return s.jsx("section", {
        id: "experience",
        className: "py-24 md:py-32 relative",
        children: s.jsxs("div", {
          className: "section-container",
          children: [
            s.jsxs(Ze, {
              children: [
                s.jsx("p", {
                  className: "text-accent text-sm tracking-widest uppercase mb-3",
                  children: "Career"
                }),
                s.jsx("h2", {
                  className: "font-heading text-3xl md:text-4xl font-bold text-accent-cream mb-16",
                  children: s.jsx(tr, {
                    text: "Experience"
                  })
                })
              ]
            }),
            s.jsxs("div", {
              className: "relative",
              children: [
                s.jsx("div", {
                  className: "absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-border to-transparent"
                }),
                s.jsx("div", {
                  className: "space-y-12",
                  children: Hf.map((y, v) => s.jsx(Ze, {
                    delay: v * 100,
                    children: s.jsxs("div", {
                      className: "relative pl-10 md:pl-12 group",
                      children: [
                        s.jsx("div", {
                          className: "absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-accent/60 bg-bg group-hover:bg-accent/20 transition-colors duration-300",
                          children: s.jsx("div", {
                            className: "absolute inset-1 rounded-full bg-accent/60"
                          })
                        }),
                        s.jsx(Br, {
                          children: s.jsxs("div", {
                            className: "card-warm p-6 md:p-8",
                            children: [
                              s.jsxs("div", {
                                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3",
                                children: [
                                  s.jsx("h3", {
                                    className: "font-heading text-xl font-semibold text-accent-cream",
                                    children: y.company
                                  }),
                                  s.jsx("span", {
                                    className: "text-xs text-neutral-500 bg-surface-light px-3 py-1 rounded-full whitespace-nowrap",
                                    children: y.date
                                  })
                                ]
                              }),
                              s.jsx("p", {
                                className: "text-accent text-sm font-medium mb-3",
                                children: y.role
                              }),
                              s.jsx("p", {
                                className: "text-neutral-400 text-sm leading-relaxed",
                                children: y.desc
                              }),
                              s.jsx("div", {
                                className: "flex flex-wrap gap-2 mt-5",
                                children: y.tags.map((h, a) => s.jsx("span", {
                                  className: "pill",
                                  children: h
                                }, a))
                              })
                            ]
                          })
                        })
                      ]
                    })
                  }, v))
                })
              ]
            })
          ]
        })
      });
    }
    const Qf = [
      {
        title: "Last Mile Reassembly Attack",
        subtitle: "DEFCON 2024 \u2014 Security Research",
        img: "https://sqrx.com/static/img/lmr/where-swgs-fail.png",
        desc: "Research presented at DEFCON 2024 demonstrating vulnerabilities in secure web gateways. Recognized by Palo Alto Networks.",
        link: "https://www.youtube.com/watch?v=mBZQnJ1MWYI"
      },
      {
        title: "Polymorphic Extensions Attack",
        subtitle: "SquareX Research \u2014 Browser Extensions Exploit",
        img: "https://tse2.mm.bing.net/th/id/OIP.TxfFv2s3noRC_EIg494iHgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        desc: "Developed a polymorphic browser extension attack that impersonates legitimate extensions (icons, UI), tricking users into entering credentials. 100+ press releases, 400K+ organic YouTube views.",
        link: "https://sqrx.com/polymorphic-extensions"
      },
      {
        title: "Copycat Identity Stealer",
        subtitle: "DEF CON 33 \u2014 Extension Toolkit",
        img: "https://i0.wp.com/undercodenews.com/wp-content/uploads/Demo-Labs_SquareX.png?resize=1024%2C614&ssl=1",
        desc: "Browser extension-based red-team toolkit for simulating identity theft attacks; includes phishing via Gmail/LinkedIn, login + OTP stealing, autofill extraction.",
        link: "https://infocondb.org/con/def-con/def-con-33/copycat-identity-stealer-extension"
      },
      {
        title: "Browser Synjacking Attack",
        subtitle: "2025 \u2014 Security Research",
        img: "https://tse4.mm.bing.net/th/id/OIP.oob7cDRRAZX2uvqrHv9BCwHaEc?rs=1&pid=ImgDetMain&o=7&rm=3",
        desc: "Novel browser-based attack exploiting synchronization features to steal sensitive account data across multiple sessions/devices. Widely covered in security press.",
        link: "https://www.forbes.com/sites/alexvakulov/2025/01/31/new-browser-syncjacking-attack-gives-hackers-full-device-control/"
      },
      {
        title: "Smart Laundry System",
        subtitle: "IoT + Cloud Project",
        img: "https://www.lg.com/eastafrica/images/WM/features/WM-SapienceHEDD-BlackSteel-11-1-SmartThinQ-Desktop_new.jpg",
        desc: "IoT-based laundry management system integrating washing machines with cloud backend, real-time usage tracking, and payment gateway.",
        link: "#"
      },
      {
        title: "Browser Security Field Manual",
        subtitle: "Publication / Book Contribution",
        img: "https://m.media-amazon.com/images/I/61LJ12YPhYL._SY342_.jpg",
        desc: "My demos, exploit code, and attack walkthroughs are included as supporting material in the book 'Browser Security Field Manual'.",
        link: "https://getstarted.sqrx.com/browser-security-manual#"
      }
    ];
    function Yf() {
      return s.jsxs("section", {
        id: "projects",
        className: "py-24 md:py-32 relative",
        children: [
          s.jsx("div", {
            className: "warm-divider mb-24 md:mb-32"
          }),
          s.jsxs("div", {
            className: "section-container",
            children: [
              s.jsxs(Ze, {
                children: [
                  s.jsx("p", {
                    className: "text-accent text-sm tracking-widest uppercase mb-3",
                    children: "Portfolio"
                  }),
                  s.jsx("h2", {
                    className: "font-heading text-3xl md:text-4xl font-bold text-accent-cream mb-16",
                    children: s.jsx(tr, {
                      text: "Projects"
                    })
                  })
                ]
              }),
              s.jsx("div", {
                className: "space-y-16 md:space-y-24",
                children: Qf.map((y, v) => {
                  const h = v % 2 === 0;
                  return s.jsx(Ze, {
                    delay: 50,
                    children: s.jsxs("article", {
                      className: `group grid md:grid-cols-2 gap-8 md:gap-12 items-center ${h ? "" : "md:[direction:rtl]"}`,
                      children: [
                        s.jsx(Br, {
                          intensity: 4,
                          children: s.jsxs("div", {
                            className: `relative overflow-hidden rounded-2xl border border-border group-hover:border-border-hover transition-all duration-500 ${h ? "" : "md:[direction:ltr]"}`,
                            children: [
                              s.jsx("div", {
                                className: "aspect-[16/10] overflow-hidden",
                                children: s.jsx("img", {
                                  src: y.img,
                                  alt: y.title,
                                  className: `w-full h-full object-cover opacity-80 group-hover:opacity-100
                                   group-hover:scale-105 transition-all duration-700`,
                                  loading: "lazy"
                                })
                              }),
                              s.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent pointer-events-none"
                              })
                            ]
                          })
                        }),
                        s.jsxs("div", {
                          className: `${h ? "" : "md:[direction:ltr]"}`,
                          children: [
                            s.jsx("span", {
                              className: "text-xs text-neutral-500 tracking-wider uppercase",
                              children: y.subtitle
                            }),
                            s.jsx("h3", {
                              className: "font-heading text-2xl md:text-3xl font-bold text-accent-cream mt-3 mb-4 group-hover:text-accent transition-colors duration-300",
                              children: y.title
                            }),
                            s.jsx("p", {
                              className: "text-neutral-400 leading-relaxed mb-6",
                              children: y.desc
                            }),
                            y.link && y.link !== "#" && s.jsxs("a", {
                              href: y.link,
                              target: "_blank",
                              rel: "noreferrer",
                              className: `inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover
                                   transition-colors group/link`,
                              children: [
                                "View Project",
                                s.jsx(Yu, {
                                  className: "w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  }, v);
                })
              })
            ]
          })
        ]
      });
    }
    const ql = [
      {
        year: "2024",
        icon: "\u{1F512}",
        title: "DEFCON \u2014 Last Mile Reassembly Attack",
        desc: "Developed multiple attack vectors in the groundbreaking research on Last Mile Reassembly Attack, demonstrating critical vulnerabilities in secure web gateways. Recognized by Palo Alto Networks.",
        stats: [
          {
            label: "Vulnerabilities Found",
            value: "25+"
          },
          {
            label: "Impact Score",
            value: "9.8/10"
          },
          {
            label: "Recognized By",
            value: "Palo Alto Networks"
          }
        ],
        tags: [
          "Security Research",
          "Web Security",
          "Vulnerability Analysis"
        ]
      },
      {
        year: "2025",
        icon: "\u{1F9E9}",
        title: "Polymorphic Extension",
        desc: "Created the groundbreaking Polymorphic Browser Extension, showcased in widely viewed demos (Matt Johnson's top video). Recognized as a disruptive attack vector in browser security.",
        stats: [
          {
            label: "News Coverage",
            value: "100+ Press"
          },
          {
            label: "YouTube Coverage",
            value: "400k+ views"
          }
        ],
        tags: [
          "Security Research",
          "Browser Exploits",
          "Extension Security"
        ]
      },
      {
        year: "2023",
        icon: "\u{1F947}",
        title: "Inter IIT Tech Meet Medalist",
        desc: "Led team to bronze medal for developing an innovative IoT solution for smart mining operations, competing against top technical teams.",
        stats: [
          {
            label: "Team Size",
            value: "6"
          },
          {
            label: "Rank",
            value: "3rd"
          },
          {
            label: "Teams",
            value: "23"
          }
        ],
        tags: [
          "IoT",
          "Innovation"
        ]
      },
      {
        year: "2025",
        icon: "\u{1F4D6}",
        title: "Browser Security Field Manual",
        desc: "My research code and demonstrations were featured in the book Browser Security Field Manual, serving as support material for modern web security studies.",
        stats: [],
        tags: [
          "Publication",
          "Security Research",
          "Browser Security"
        ]
      },
      {
        year: "2025",
        icon: "\u{1F408}",
        title: "DEFCON Village \u2014 CopyCat Identity Stealer",
        desc: "Coded more than 8 out of 10 vectors in the CopyCat Identity Stealer Extension at DEFCON 33 Villages, exposing new methods of identity theft via browser extensions.",
        stats: [
          {
            label: "Event",
            value: "DEFCON 33"
          }
        ],
        tags: [
          "Security Research",
          "Browser Exploits",
          "DEFCON"
        ]
      },
      {
        year: "2024",
        icon: "\u{1F3C6}",
        title: "Hackbells Global Winner",
        desc: "First place in an international hackathon for developing a revolutionary cybersecurity solution. Competed against 200+ teams.",
        stats: [
          {
            label: "Position",
            value: "1st"
          },
          {
            label: "Teams",
            value: "200+"
          },
          {
            label: "Prize",
            value: "$5K"
          }
        ],
        tags: [
          "Security",
          "Development"
        ]
      },
      {
        year: "2025",
        icon: "\u{1F512}",
        title: "Browser Synjacking Attack",
        desc: "Developed a novel browser-based attack exploiting synchronization features to steal sensitive account data. Widely covered in security press.",
        stats: [
          {
            label: "Press Articles",
            value: "100+"
          }
        ],
        tags: [
          "Security Research",
          "JS",
          "Python",
          "Chrome Extension"
        ]
      },
      {
        year: "2025",
        icon: "\u{1F513}",
        title: "RSA Conference \u2014 Data Splicing Attacks",
        desc: "SquareX highlighted my team research on data splicing attacks at RSA 2025, bringing attention to new risks in browser and web application security.",
        stats: [
          {
            label: "Conference",
            value: "RSA 2025"
          },
          {
            label: "Month",
            value: "April"
          }
        ],
        tags: [
          "Security Research",
          "Conference",
          "Data Splicing"
        ]
      },
      {
        year: "2024",
        icon: "\u{1F4A7}",
        title: "Indo-Canada International Water Symposium",
        desc: "Presented research on water management and conservation with machine learning approaches, achieving top recognition.",
        stats: [
          {
            label: "Position",
            value: "1st"
          }
        ],
        tags: [
          "Research",
          "Water Management",
          "ML Algorithms"
        ]
      },
      {
        year: "2023",
        icon: "\u{1F697}",
        title: "RC Escapade 2023",
        desc: "Engineered a fully functional RC car from scratch with custom PCB design and remote-control system for annual racing competition.",
        stats: [
          {
            label: "Position",
            value: "1st"
          }
        ],
        tags: [
          "Hardware",
          "PCB Design",
          "RC Systems"
        ]
      },
      {
        year: "2023",
        icon: "\u{1F680}",
        title: "Shaashthra, CIS \u2014 Space Debris Management",
        desc: "Presented a novel solution leveraging ML and AI to tackle space debris management challenges at IIT Madras.",
        stats: [
          {
            label: "Position",
            value: "2nd"
          }
        ],
        tags: [
          "Space Debris",
          "ML",
          "AI"
        ]
      },
      {
        year: "2022",
        icon: "\u{1F9FA}",
        title: "Smart Laundry Innovation Challenge",
        desc: "Created an IoT-based solution for automated laundry management with real-time tracking, analytics, and payment integration.",
        stats: [
          {
            label: "Innovation Score",
            value: "9.5/10"
          },
          {
            label: "Position",
            value: "1st"
          }
        ],
        tags: [
          "IoT",
          "Python",
          "Flutter",
          "MongoDB"
        ]
      }
    ], Hu = 6;
    function Gf() {
      const [y, v] = B.useState(false), h = y ? ql : ql.slice(0, Hu);
      return s.jsxs("section", {
        id: "achievements",
        className: "py-24 md:py-32 relative",
        children: [
          s.jsx("div", {
            className: "warm-divider mb-24 md:mb-32"
          }),
          s.jsxs("div", {
            className: "section-container",
            children: [
              s.jsxs(Ze, {
                children: [
                  s.jsx("p", {
                    className: "text-accent text-sm tracking-widest uppercase mb-3",
                    children: "Recognition"
                  }),
                  s.jsx("h2", {
                    className: "font-heading text-3xl md:text-4xl font-bold text-accent-cream mb-16",
                    children: s.jsx(tr, {
                      text: "Achievements"
                    })
                  })
                ]
              }),
              s.jsx("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: h.map((a, z) => s.jsx(Ze, {
                  delay: z * 60,
                  children: s.jsx(Br, {
                    intensity: 6,
                    children: s.jsxs("div", {
                      className: "card-warm p-6 h-full flex flex-col",
                      children: [
                        s.jsxs("div", {
                          className: "flex justify-between items-start mb-4",
                          children: [
                            s.jsx("span", {
                              className: "text-2xl",
                              children: a.icon
                            }),
                            s.jsx("span", {
                              className: "text-xs text-neutral-500 bg-surface-light px-3 py-1 rounded-full",
                              children: a.year
                            })
                          ]
                        }),
                        s.jsx("h3", {
                          className: "font-heading text-lg font-semibold text-accent-cream mb-2",
                          children: a.title
                        }),
                        s.jsx("p", {
                          className: "text-neutral-400 text-sm leading-relaxed mb-4 flex-grow",
                          children: a.desc
                        }),
                        a.stats.length > 0 && s.jsx("div", {
                          className: "grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4",
                          children: a.stats.map((C, I) => s.jsxs("div", {
                            className: "bg-surface-light rounded-lg p-3 text-center",
                            children: [
                              s.jsx("p", {
                                className: "text-sm font-semibold text-accent-cream",
                                children: C.value
                              }),
                              s.jsx("p", {
                                className: "text-xs text-neutral-500 mt-0.5",
                                children: C.label
                              })
                            ]
                          }, I))
                        }),
                        s.jsx("div", {
                          className: "flex flex-wrap gap-2",
                          children: a.tags.map((C, I) => s.jsx("span", {
                            className: "pill text-xs",
                            children: C
                          }, I))
                        })
                      ]
                    })
                  })
                }, z))
              }),
              ql.length > Hu && s.jsx(Ze, {
                className: "flex justify-center mt-10",
                children: s.jsxs("button", {
                  onClick: () => v(!y),
                  className: `flex items-center gap-2 px-6 py-3 rounded-full border border-border
                         text-sm text-neutral-400 hover:text-accent-cream hover:border-accent/30
                         transition-all duration-300`,
                  children: [
                    y ? "Show Less" : `Show All (${ql.length})`,
                    s.jsx(mf, {
                      className: `w-4 h-4 transition-transform duration-300 ${y ? "rotate-180" : ""}`
                    })
                  ]
                })
              })
            ]
          })
        ]
      });
    }
    const Kf = [
      {
        title: "Programming",
        icon: xf,
        skills: [
          "C++ / C",
          "Rust",
          "Python",
          "TypeScript",
          "Java",
          "JavaScript",
          "Verilog",
          "Assembly",
          "Dart"
        ]
      },
      {
        title: "Security",
        icon: Af,
        skills: [
          "Browser Security",
          "Threat Detection",
          "Network Security",
          " Security Research"
        ]
      },
      {
        title: "Cloud & DevOps",
        icon: vf,
        skills: [
          "GCP",
          "AWS",
          "Azure",
          "Docker",
          "Kubernetes",
          "Terraform"
        ]
      },
      {
        title: "Databases",
        icon: Nf,
        skills: [
          "MongoDB",
          "Redis",
          "MySQL"
        ]
      },
      {
        title: "Tools & Utilities",
        icon: Lf,
        skills: [
          "Git",
          "Android Studio",
          "Unity",
          "Cisco Packet Tracer",
          "Wireshark",
          "Burp Suite"
        ]
      },
      {
        title: "Backend",
        icon: Uu,
        skills: [
          "Flask",
          "Firebase",
          "REST APIs",
          "Node",
          "Google APIs"
        ]
      },
      {
        title: "Microcontrollers",
        icon: kf,
        skills: [
          "Arduino",
          "Raspberry Pi",
          "NodeMCU",
          "Jetson Nano",
          "Pixhawk"
        ]
      },
      {
        title: "Operating Systems",
        icon: Rf,
        skills: [
          "Linux",
          "Windows",
          "macOS"
        ]
      },
      {
        title: "Parallel Computing",
        icon: Uu,
        skills: [
          "OpenMP",
          "MPI"
        ]
      }
    ];
    function Xf() {
      return s.jsxs("section", {
        id: "skills",
        className: "py-24 md:py-32 relative",
        children: [
          s.jsx("div", {
            className: "warm-divider mb-24 md:mb-32"
          }),
          s.jsxs("div", {
            className: "section-container",
            children: [
              s.jsxs(Ze, {
                children: [
                  s.jsx("p", {
                    className: "text-accent text-sm tracking-widest uppercase mb-3",
                    children: "Expertise"
                  }),
                  s.jsx("h2", {
                    className: "font-heading text-3xl md:text-4xl font-bold text-accent-cream mb-16",
                    children: s.jsx(tr, {
                      text: "Skills & Technologies"
                    })
                  })
                ]
              }),
              s.jsx("div", {
                className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                children: Kf.map(({ title: y, icon: v, skills: h }, a) => s.jsx(Ze, {
                  delay: a * 60,
                  children: s.jsx(Br, {
                    intensity: 5,
                    children: s.jsxs("div", {
                      className: "card-warm p-6 h-full",
                      children: [
                        s.jsxs("div", {
                          className: "flex items-center gap-3 mb-5",
                          children: [
                            s.jsx("div", {
                              className: "p-2 rounded-lg bg-surface-light",
                              children: s.jsx(v, {
                                className: "w-4 h-4 text-accent"
                              })
                            }),
                            s.jsx("h3", {
                              className: "font-heading text-base font-semibold text-accent-cream",
                              children: y
                            })
                          ]
                        }),
                        s.jsx("div", {
                          className: "flex flex-wrap gap-2",
                          children: h.map((z, C) => s.jsx("span", {
                            className: "pill",
                            children: z
                          }, C))
                        })
                      ]
                    })
                  })
                }, a))
              })
            ]
          })
        ]
      });
    }
    const qf = "modulepreload", Zf = function(y) {
      return "/myportfolio/" + y;
    }, Vu = {}, Jf = function(v, h, a) {
      let z = Promise.resolve();
      if (h && h.length > 0) {
        document.getElementsByTagName("link");
        const I = document.querySelector("meta[property=csp-nonce]"), M = (I == null ? void 0 : I.nonce) || (I == null ? void 0 : I.getAttribute("nonce"));
        z = Promise.allSettled(h.map((O) => {
          if (O = Zf(O), O in Vu) return;
          Vu[O] = true;
          const Y = O.endsWith(".css"), D = Y ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${O}"]${D}`)) return;
          const W = document.createElement("link");
          if (W.rel = Y ? "stylesheet" : qf, Y || (W.as = "script"), W.crossOrigin = "", W.href = O, M && W.setAttribute("nonce", M), document.head.appendChild(W), Y) return new Promise((ae, ue) => {
            W.addEventListener("load", ae), W.addEventListener("error", () => ue(new Error(`Unable to preload CSS for ${O}`)));
          });
        }));
      }
      function C(I) {
        const M = new Event("vite:preloadError", {
          cancelable: true
        });
        if (M.payload = I, window.dispatchEvent(M), !M.defaultPrevented) throw I;
      }
      return z.then((I) => {
        for (const M of I || []) M.status === "rejected" && C(M.reason);
        return v().catch(C);
      });
    }, Zl = {
      active: {
        title: "1. Active Benchmarking",
        body: "The engine is currently performing parallel Matrix Multiplication (A * B = C). It calculates 16 dot products across the active thread pool. Monitor the thread context-switching overhead!"
      },
      mutex_off: {
        title: "2. Unsafe Memory (Data Race!)",
        body: "You turned off Mutex Locks! If multiple threads solve different dot products but attempt to write to the 'C' matrix output array simultaneously, their memory addresses will collide and corrupt the destination data."
      },
      mutex_on: {
        title: "3. Mutex Locks Enabled",
        body: "A Mutex Lock ensures only one thread can edit global memory at a time. Watch how Threads switch to a 'Blocked' state while waiting their turn to save to Matrix C!"
      },
      corrupt: {
        title: "\u{1F4A5} FATAL: Data Race Corruption",
        body: "CRASH! Multiple threads tried writing to the Global Matrix simultaneously without a hardware lock! The memory bits overwrote each other causing silent data corruption. (Notice Matrix C is ruined)."
      }
    };
    class Qs extends Xd.Component {
      constructor(v) {
        super(v), this.state = {
          hasError: false,
          error: null
        };
      }
      static getDerivedStateFromError(v) {
        return {
          hasError: true,
          error: v
        };
      }
      render() {
        var _a;
        return this.state.hasError ? s.jsxs("div", {
          className: "p-8 border border-red-900 bg-red-950/20 rounded-lg text-center",
          children: [
            s.jsx("h2", {
              className: "text-xl font-bold text-red-500 mb-2",
              children: "Hardware Segment Fault"
            }),
            s.jsx("p", {
              className: "text-neutral-400 text-sm mb-6 font-mono",
              children: ((_a = this.state.error) == null ? void 0 : _a.message) || "Critical memory access out of bounds."
            }),
            s.jsx("button", {
              onClick: () => window.location.reload(),
              className: "px-6 py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded",
              children: "Hot-Reload System"
            })
          ]
        }) : this.props.children;
      }
    }
    function ep({ wasmModule: y }) {
      const [v, h] = B.useState(null), [a, z] = B.useState({
        title: "1. Thread Scaling Benchmark",
        body: "Select a thread pool size below and launch the Kernel! Witness Amdahl's Law in action: 4 threads is the optimal hardware match, finishing fast. Allocating 16 threads causes catastrophic context-switching overhead, severely penalizing performance!"
      }), [C, I] = B.useState(false), M = B.useRef(null), O = B.useRef(null), Y = B.useRef(false);
      B.useEffect(() => {
        let F = new y.ParallelCompute();
        O.current = F;
        const te = F.get_state();
        return te && h(te), () => {
          M.current && clearInterval(M.current);
          try {
            F && !C && F.free();
          } catch {
          }
        };
      }, [
        y
      ]);
      const D = B.useCallback((F) => {
        var _a, _b;
        if (!O.current || Y.current || C) return null;
        Y.current = true;
        try {
          const te = F(O.current);
          return te ? (h(te), te) : null;
        } catch (te) {
          return ((_a = te.message) == null ? void 0 : _a.includes("bounds")) || ((_b = te.message) == null ? void 0 : _b.includes("detached")) ? (console.warn("WASM CRITICAL ERROR: Address Space Out of Bounds. Locking system.", te), I(true), M.current && clearInterval(M.current)) : console.warn("WASM call error:", te), null;
        } finally {
          Y.current = false;
        }
      }, [
        C
      ]);
      B.useEffect(() => (M.current = setInterval(() => {
        D((F) => F.tick_and_get_state());
      }, 150), () => {
        M.current && clearInterval(M.current);
      }), [
        D
      ]), B.useEffect(() => {
        (v == null ? void 0 : v.flop_counter.includes("CORRUPT")) && z(Zl.corrupt);
      }, [
        v == null ? void 0 : v.flop_counter
      ]);
      const W = () => {
        D((F) => F.launch_kernel()), z(Zl.active);
      }, ae = () => {
        const F = D((te) => te.toggle_mutex());
        F && !F.mutex_enabled && z(Zl.mutex_off), F && F.mutex_enabled && z(Zl.mutex_on);
      }, ue = (F) => {
        D((te) => te.set_num_threads(F));
      }, G = () => {
        D((F) => F.reset_system());
      }, q = v == null ? void 0 : v.flop_counter.includes("CORRUPT"), E = (F, te = 1) => !v || F < 0 ? void 0 : `hsla(${F * Math.floor(360 / v.num_threads) % 360}, 70%, 50%, ${te})`, ce = (F, te, pe, Me) => s.jsxs("div", {
        className: "flex flex-col items-center",
        children: [
          s.jsx("span", {
            className: "text-[10px] text-neutral-500 uppercase tracking-wider mb-2",
            children: te
          }),
          s.jsx("div", {
            className: "grid grid-cols-4 gap-1 p-2 bg-neutral-900 border border-neutral-800 rounded relative",
            children: F.map((Pe, Z) => {
              const he = Math.floor(Z / 4), rt = Z % 4;
              let de = "", Ke = "";
              if (pe === "C" && (v == null ? void 0 : v.matrix_c_owners)) {
                const be = v.matrix_c_owners[Z];
                be >= 0 && (de = E(be, 0.2), Ke = E(be, 0.8));
              }
              (pe === "A" || pe === "B") && (v == null ? void 0 : v.threads) && v.threads.forEach((be) => {
                if (be.assigned_task && be.assigned_task !== "None") {
                  const Ne = be.assigned_task.match(/C\[(\d+)\]\[(\d+)\]/);
                  if (Ne) {
                    const _e = parseInt(Ne[1]), Se = parseInt(Ne[2]);
                    pe === "A" && _e === he && (de = E(be.id, 0.15)), pe === "B" && Se === rt && (de = E(be.id, 0.15));
                  }
                }
              });
              const Qe = Me && Pe === "1337";
              return s.jsx("div", {
                className: `w-8 h-8 flex items-center justify-center font-mono text-xs rounded transition-all duration-300 ${Qe ? "bg-red-900/40 text-red-500 border-red-500/50 border" : ""}`,
                style: !Qe && de ? {
                  backgroundColor: de,
                  borderColor: Ke,
                  borderWidth: Ke ? "1px" : "0"
                } : {},
                children: Qe ? "#@!" : Pe || ""
              }, Z);
            })
          })
        ]
      });
      return C ? s.jsxs("div", {
        className: "p-12 border border-red-900 bg-red-950/20 rounded-lg text-center font-mono",
        children: [
          s.jsx("h3", {
            className: "text-xl font-bold text-red-500 mb-2",
            children: "SYSTEM SEGFAULT"
          }),
          s.jsx("p", {
            className: "text-neutral-400 text-sm mb-8",
            children: "Access out of bounds. The pointer became invalid due to module re-initialization."
          }),
          s.jsx("button", {
            onClick: () => window.location.reload(),
            className: "px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded shadow-lg shadow-red-900/40",
            children: "FORCE RELOAD KERNEL"
          })
        ]
      }) : v ? s.jsxs("div", {
        className: "systems-lab-grid",
        style: {
          gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)"
        },
        children: [
          s.jsxs("div", {
            className: "systems-lab-cluster",
            children: [
              s.jsxs("div", {
                className: "flex justify-between items-end mb-6 border-b border-neutral-800 pb-4",
                children: [
                  s.jsx("div", {
                    children: s.jsxs("div", {
                      className: "flex items-center gap-3 mb-2",
                      children: [
                        s.jsx("span", {
                          className: "text-xs text-neutral-400 tracking-wider uppercase font-medium",
                          children: "ALLOCATED THREADS:"
                        }),
                        s.jsx("div", {
                          className: "flex gap-2",
                          children: [
                            1,
                            4,
                            8,
                            16
                          ].map((F) => s.jsxs("button", {
                            onClick: () => ue(F),
                            disabled: v.run_active,
                            className: `px-2 py-0.5 rounded text-xs font-mono transition-colors ${v.num_threads === F ? "bg-accent/20 text-accent border border-accent/40" : "bg-neutral-800 text-neutral-500 border border-neutral-700 hover:text-neutral-300"} disabled:opacity-50`,
                            children: [
                              F,
                              " Core"
                            ]
                          }, F))
                        })
                      ]
                    })
                  }),
                  s.jsxs("div", {
                    className: "text-right",
                    children: [
                      s.jsx("span", {
                        className: "text-xs text-neutral-500 tracking-wider uppercase block",
                        children: "Execution Timer"
                      }),
                      s.jsxs("span", {
                        className: `text-2xl font-mono ${v.run_active ? "text-accent animate-pulse" : "text-neutral-300"}`,
                        children: [
                          v.elapsed_ticks,
                          " ",
                          s.jsx("span", {
                            className: "text-sm text-neutral-600",
                            children: "TICKS"
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              s.jsxs("div", {
                className: "flex flex-col gap-8",
                children: [
                  s.jsxs("div", {
                    className: "flex justify-center flex-wrap gap-4 items-center",
                    children: [
                      ce(v.matrix_a, "Matrix A", "A"),
                      s.jsx("span", {
                        className: "text-neutral-600 font-mono text-xl",
                        children: "\xD7"
                      }),
                      ce(v.matrix_b, "Matrix B", "B"),
                      s.jsx("span", {
                        className: "text-neutral-600 font-mono text-xl",
                        children: "="
                      }),
                      ce(v.matrix_c, "Matrix C (Result)", "C", q)
                    ]
                  }),
                  s.jsxs("div", {
                    className: "bg-neutral-900/40 border border-neutral-800 rounded-lg p-4",
                    children: [
                      s.jsx("span", {
                        className: "text-[10px] text-neutral-500 uppercase tracking-wider mb-3 block",
                        children: "Live Execution Pool"
                      }),
                      s.jsx("div", {
                        className: "flex flex-wrap gap-2",
                        children: v.threads.map((F) => {
                          const te = F.state.includes("Context"), pe = F.state === "Idle";
                          F.state.includes("Math") || F.state.includes("Computing");
                          const Me = pe ? void 0 : E(F.id, 1);
                          return s.jsxs("div", {
                            className: `flex-1 min-w-[120px] max-w-[160px] p-2 rounded border ${pe ? "bg-neutral-900 border-neutral-800 opacity-60" : te ? "bg-orange-900/20 border-orange-800/40" : "bg-neutral-800"} transition-all`,
                            style: Me && !te ? {
                              borderColor: Me,
                              boxShadow: `inset 0 0 16px ${E(F.id, 0.15)}`
                            } : {},
                            children: [
                              s.jsxs("div", {
                                className: "flex justify-between items-center mb-1",
                                children: [
                                  s.jsxs("span", {
                                    className: "text-[10px] font-mono font-bold",
                                    style: {
                                      color: Me || "#737373"
                                    },
                                    children: [
                                      "T-",
                                      F.id
                                    ]
                                  }),
                                  s.jsx("span", {
                                    className: `text-[9px] uppercase px-1 rounded ${te ? "text-orange-400 bg-orange-900/50" : "text-neutral-300"}`,
                                    children: F.state.split(" ")[0]
                                  })
                                ]
                              }),
                              s.jsxs("div", {
                                className: "text-[10px] text-neutral-400 font-mono truncate",
                                children: [
                                  "Task: ",
                                  F.assigned_task
                                ]
                              })
                            ]
                          }, F.id);
                        })
                      })
                    ]
                  })
                ]
              }),
              v.benchmark_result && s.jsx("div", {
                className: "mt-4 p-3 bg-accent/10 border border-accent/20 rounded-md text-accent-cream text-sm font-mono text-center",
                children: v.benchmark_result
              }),
              s.jsxs("div", {
                className: "systems-lab-controls mt-6",
                children: [
                  s.jsxs("button", {
                    className: `systems-lab-btn ${v.run_active ? "opacity-50 cursor-not-allowed" : "systems-lab-btn-write"}`,
                    onClick: W,
                    disabled: v.run_active || q,
                    children: [
                      s.jsx("span", {
                        className: "systems-lab-btn-icon",
                        children: "\u25B6"
                      }),
                      "Run Benchmark"
                    ]
                  }),
                  s.jsxs("button", {
                    className: `systems-lab-btn ${v.mutex_enabled ? "bg-green-900/20 text-green-400 border-green-800/40" : "bg-red-900/20 text-red-400 border-red-800/40"}`,
                    onClick: ae,
                    children: [
                      s.jsx("span", {
                        className: "systems-lab-btn-icon",
                        children: v.mutex_enabled ? "\u{1F512}" : "\u{1F513}"
                      }),
                      v.mutex_enabled ? "Mutex Lock: ON" : "Mutex Lock: OFF"
                    ]
                  }),
                  s.jsxs("button", {
                    className: "systems-lab-btn border border-neutral-700/50 hover:bg-neutral-800",
                    onClick: G,
                    children: [
                      s.jsx("span", {
                        className: "systems-lab-btn-icon",
                        children: "\u{1F504}"
                      }),
                      "Reset"
                    ]
                  })
                ]
              })
            ]
          }),
          s.jsxs("div", {
            className: "systems-lab-info",
            children: [
              s.jsxs("div", {
                className: "systems-lab-explain",
                children: [
                  s.jsx("h3", {
                    className: "font-heading text-lg font-bold text-accent-cream mb-2",
                    children: a.title
                  }),
                  s.jsx("p", {
                    className: "text-neutral-400 text-sm leading-relaxed",
                    children: a.body
                  })
                ]
              }),
              s.jsxs("div", {
                className: "systems-lab-log mt-6 h-[400px] flex flex-col",
                children: [
                  s.jsx("div", {
                    className: "systems-lab-log-header",
                    children: s.jsx("span", {
                      className: "text-xs text-neutral-500 tracking-wider uppercase",
                      children: "Master Execution Feed"
                    })
                  }),
                  s.jsx("div", {
                    className: "systems-lab-log-entries flex-1 overflow-hidden flex flex-col justify-end",
                    children: v.event_log.slice(-18).map((F, te) => s.jsx("div", {
                      className: `py-1 text-[11px] font-mono leading-tight ${F.includes("\u2705") || F.includes("\u{1F7E2}") || F.includes("\u{1F513}") || F.includes("\u{1F512}") ? "text-green-400" : F.includes("\u26A0") || F.includes("\u{1F525}") || F.includes("FATAL") ? "font-bold text-red-500" : F.includes("\u{1F680}") || F.includes("\u2699") ? "text-accent" : "text-neutral-500"}`,
                      children: F
                    }, te))
                  })
                ]
              })
            ]
          })
        ]
      }) : null;
    }
    function tp({ wasmModule: y }) {
      const [v, h] = B.useState(null), [a, z] = B.useState(false), C = B.useRef(null), I = B.useRef(null), M = B.useRef(false);
      B.useEffect(() => {
        let E = new y.DistributedCluster();
        I.current = E;
        const ce = E.get_state();
        return ce && h(ce), () => {
          C.current && clearInterval(C.current);
          try {
            E && !a && E.free();
          } catch {
          }
        };
      }, [
        y
      ]);
      const O = B.useCallback((E) => {
        var _a, _b;
        if (!I.current || M.current || a) return null;
        M.current = true;
        try {
          const ce = E(I.current);
          return ce ? (h(ce), ce) : null;
        } catch (ce) {
          return ((_a = ce.message) == null ? void 0 : _a.includes("bounds")) || ((_b = ce.message) == null ? void 0 : _b.includes("detached")) ? (console.warn("WASM CRITICAL ERROR: Distributed address space collision.", ce), z(true), C.current && clearInterval(C.current)) : console.warn("WASM call error:", ce), null;
        } finally {
          M.current = false;
        }
      }, [
        a
      ]);
      B.useEffect(() => (C.current = setInterval(() => {
        O((E) => E.tick_and_get_state());
      }, 250), () => {
        C.current && clearInterval(C.current);
      }), [
        O
      ]);
      const Y = (E) => {
        O((ce) => ce.toggle_node_power(E));
      }, D = () => {
        const E = [
          "Website Checkout -> Customer #1233 Paid",
          "Global Auth -> User sign-up verified",
          "Data Center -> Replication heartbeat",
          "Customer Service -> Ticket opened",
          "Inventory API -> Stock deducted"
        ], ce = E[Math.floor(Math.random() * E.length)];
        O((F) => F.write_data(ce));
      };
      if (a) return s.jsxs("div", {
        className: "p-12 border border-red-900 bg-red-950/20 rounded-lg text-center font-mono",
        children: [
          s.jsx("h3", {
            className: "text-xl font-bold text-red-500 mb-2",
            children: "SYSTEM SEGFAULT"
          }),
          s.jsx("p", {
            className: "text-neutral-400 text-sm mb-8",
            children: "Access out of bounds. The pointer became invalid due to module re-initialization."
          }),
          s.jsx("button", {
            onClick: () => window.location.reload(),
            className: "px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded shadow-lg shadow-red-900/40",
            children: "FORCE RELOAD KERNEL"
          })
        ]
      });
      if (!v) return null;
      const W = [
        12.5,
        37.5,
        62.5,
        87.5
      ], ae = v.leader_id !== null && v.leader_id !== void 0 ? v.leader_id : 0, ue = v.nodes.find((E) => E.id === ae) || v.nodes[0], G = v.nodes.filter((E) => E.id !== ue.id), q = (E, ce, F) => {
        const te = E.role.includes("LEADER"), pe = E.role.includes("DEAD");
        return s.jsxs("div", {
          onClick: () => Y(E.id),
          className: `absolute w-32 h-32 rounded-full border-2 flex flex-col items-center justify-center cursor-pointer group transition-all duration-300 -translate-x-1/2 ${F}
            ${pe ? "bg-red-900/10 border-red-900/40 opacity-50 z-10" : te ? "bg-accent/10 border-accent shadow-[0_0_25px_rgba(var(--accent-rgb),0.3)] z-20" : "bg-neutral-900 border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800 z-10"}`,
          style: {
            left: `${ce}%`
          },
          children: [
            s.jsx("div", {
              className: `absolute top-4 right-5 w-3 h-3 rounded-full ${pe ? "bg-red-500" : te ? "bg-accent animate-pulse" : "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"}`
            }),
            s.jsxs("span", {
              className: "text-sm font-bold font-mono text-neutral-300 mb-1 drop-shadow-md",
              children: [
                "NODE ",
                E.id
              ]
            }),
            s.jsx("span", {
              className: `text-[10px] uppercase font-bold tracking-widest ${pe ? "text-red-500" : te ? "text-accent" : "text-neutral-500"}`,
              children: E.role
            }),
            s.jsx("div", {
              className: "mt-3 w-[70%] border-t border-neutral-800 pt-2 text-center",
              children: s.jsxs("span", {
                className: "text-[11px] font-mono text-neutral-400 block w-full",
                children: [
                  "[ ",
                  E.log_count,
                  " \u{1F4BE} ]"
                ]
              })
            }),
            s.jsx("div", {
              className: `absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-full flex items-center justify-center ${pe ? "bg-green-500/10" : "bg-red-500/10"}`,
              children: s.jsx("span", {
                className: "text-white text-xs font-bold drop-shadow-md",
                children: pe ? "REVIVE" : "KILL"
              })
            })
          ]
        }, E.id);
      };
      return s.jsxs("div", {
        className: "systems-lab-grid",
        style: {
          gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)"
        },
        children: [
          s.jsxs("div", {
            className: "systems-lab-cluster",
            children: [
              s.jsxs("div", {
                className: "flex justify-between items-end mb-8 border-b border-neutral-800 pb-4",
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsx("div", {
                        className: "flex items-center gap-3 mb-2",
                        children: s.jsx("span", {
                          className: "text-xs text-neutral-400 tracking-wider uppercase font-medium",
                          children: "CLUSTER HEALTH:"
                        })
                      }),
                      s.jsx("span", {
                        className: "text-sm font-mono text-green-400",
                        children: "ACTIVE"
                      })
                    ]
                  }),
                  s.jsxs("div", {
                    className: "text-right",
                    children: [
                      s.jsx("span", {
                        className: "text-xs text-neutral-500 tracking-wider uppercase block",
                        children: "Active Master Node"
                      }),
                      s.jsx("span", {
                        className: "text-xl font-mono text-accent",
                        children: v.leader_id !== void 0 && v.leader_id !== null ? `Node ${v.leader_id}` : "NO LEADER"
                      })
                    ]
                  })
                ]
              }),
              s.jsxs("div", {
                className: "flex flex-col gap-4 relative",
                children: [
                  s.jsx("p", {
                    className: "text-xs text-neutral-500 tracking-wider uppercase block mb-2 text-center",
                    children: "Packet Tracer Topography (Click to Kill/Revive)"
                  }),
                  s.jsxs("div", {
                    className: "relative w-full h-[450px] bg-neutral-[950] border border-neutral-800 rounded-xl overflow-hidden mt-2",
                    children: [
                      s.jsx("svg", {
                        className: "absolute inset-0 w-full h-full pointer-events-none",
                        style: {
                          zIndex: 5
                        },
                        children: v.nodes.filter((E) => E.id !== ue.id).map((E, ce) => {
                          const F = W[ce], te = E.role.includes("DEAD") || ue.role.includes("DEAD");
                          return s.jsx("line", {
                            x1: "50%",
                            y1: "15%",
                            x2: `${F}%`,
                            y2: "85%",
                            stroke: te ? "#3f1919" : "#334155",
                            strokeWidth: "2",
                            strokeDasharray: te ? "5,5" : "none"
                          }, `line-${E.id}`);
                        })
                      }),
                      v.packets && v.packets.map((E, ce) => {
                        const F = G.findIndex((Z) => Z.id === E.target_id);
                        if (F === -1) return null;
                        const pe = 50 + (W[F] - 50) * E.progress, Me = 15 + 70 * E.progress, Pe = E.payload === "SYNC_CATCH_UP_PAYLOAD";
                        return s.jsx("div", {
                          className: `absolute rounded-full -translate-x-1/2 -translate-y-1/2 z-30 transition-transform duration-200 ${Pe ? "w-6 h-6 bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,1)]" : "w-4 h-4 bg-accent shadow-[0_0_15px_rgba(var(--accent-rgb),1)]"}`,
                          style: {
                            left: `${pe}%`,
                            top: `${Me}%`
                          },
                          children: Pe && s.jsx("div", {
                            className: "absolute inset-0 border-2 border-white/50 rounded-full animate-ping"
                          })
                        }, `packet-${E.target_id}-${E.progress}-${ce}`);
                      }),
                      q(ue, 50, "top-[20px]"),
                      G.map((E, ce) => q(E, W[ce], "bottom-[20px]"))
                    ]
                  })
                ]
              }),
              s.jsx("div", {
                className: "systems-lab-controls mt-10",
                children: s.jsxs("button", {
                  className: "systems-lab-btn systems-lab-btn-write w-full justify-center",
                  onClick: D,
                  disabled: v.leader_id === null || v.leader_id === void 0,
                  children: [
                    s.jsx("span", {
                      className: "systems-lab-btn-icon",
                      children: "\u{1F4BE}"
                    }),
                    "Send Write Payload (Master)"
                  ]
                })
              })
            ]
          }),
          s.jsxs("div", {
            className: "systems-lab-info",
            children: [
              s.jsxs("div", {
                className: "systems-lab-explain",
                children: [
                  s.jsx("h3", {
                    className: "font-heading text-lg font-bold text-accent-cream mb-2",
                    children: "Master-Slave Consensus Replication"
                  }),
                  s.jsx("p", {
                    className: "text-neutral-400 text-sm leading-relaxed",
                    children: 'This module simulates standard Distributed Systems leader election. Only ONE node can be the Master. If you kill the Master node, the surviving slaves immediately trigger an election protocol and a new Master is crowned! "Write" payloads are sent only to the Master, which replicates the log synchronously to its slaves.'
                  })
                ]
              }),
              s.jsxs("div", {
                className: "systems-lab-log mt-6 h-[400px] flex flex-col",
                children: [
                  s.jsx("div", {
                    className: "systems-lab-log-header",
                    children: s.jsx("span", {
                      className: "text-xs text-neutral-500 tracking-wider uppercase",
                      children: "Cluster Event Log"
                    })
                  }),
                  s.jsx("div", {
                    className: "systems-lab-log-entries flex-1 overflow-hidden flex flex-col justify-end",
                    children: v.event_log.slice(-18).map((E, ce) => s.jsx("div", {
                      className: `py-1 text-[11px] font-mono leading-tight ${E.includes("\u2705") || E.includes("SUCCESS") ? "text-green-400" : E.includes("\u26A0") || E.includes("\u{1F480}") || E.includes("FATAL") || E.includes("LOST") ? "font-bold text-red-500" : E.includes("\u{1F451}") || E.includes("\u26A1") ? "text-accent" : "text-neutral-500"}`,
                      children: E
                    }, ce))
                  })
                ]
              })
            ]
          })
        ]
      });
    }
    function np({ wasmModule: y }) {
      const [v, h] = B.useState(null), [a, z] = B.useState(250), [C, I] = B.useState(false), M = B.useRef(null), O = B.useRef(null), Y = B.useRef(false);
      B.useEffect(() => {
        let G = new y.RiscVCore();
        O.current = G;
        const q = G.get_state();
        return q && h(q), () => {
          M.current && clearInterval(M.current);
          try {
            G && !C && G.free();
          } catch {
          }
        };
      }, [
        y
      ]);
      const D = B.useCallback((G) => {
        var _a, _b;
        if (!O.current || Y.current || C) return null;
        Y.current = true;
        try {
          const q = G(O.current);
          return q ? (h(q), q) : null;
        } catch (q) {
          return ((_a = q.message) == null ? void 0 : _a.includes("bounds")) || ((_b = q.message) == null ? void 0 : _b.includes("detached")) ? (console.warn("WASM CRITICAL ERROR: RISC-V Address Space Collision.", q), I(true), M.current && clearInterval(M.current)) : console.warn("WASM call error:", q), null;
        } finally {
          Y.current = false;
        }
      }, [
        C
      ]);
      B.useEffect(() => (M.current && clearInterval(M.current), M.current = setInterval(() => {
        D((G) => G.tick_and_get_state());
      }, a), () => {
        M.current && clearInterval(M.current);
      }), [
        D,
        a
      ]);
      const W = () => {
        const G = D((q) => q.get_state());
        if (G) {
          O.current.set_running(!G.is_running);
          const q = O.current.get_state();
          h(q);
        }
      }, ae = () => {
        D((G) => (G.step(), G.get_state()));
      }, ue = () => {
        D((G) => (G.reset(), G.get_state()));
      };
      return C ? s.jsxs("div", {
        className: "p-12 border border-red-900 bg-red-950/20 rounded-lg text-center font-mono",
        children: [
          s.jsx("h3", {
            className: "text-xl font-bold text-red-500 mb-2",
            children: "SYSTEM SEGFAULT"
          }),
          s.jsx("p", {
            className: "text-neutral-400 text-sm mb-8",
            children: "Access out of bounds. The pointer became invalid due to module re-initialization."
          }),
          s.jsx("button", {
            onClick: () => window.location.reload(),
            className: "px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded shadow-lg shadow-red-900/40",
            children: "FORCE RELOAD KERNEL"
          })
        ]
      }) : v ? s.jsxs("div", {
        className: "systems-lab-grid",
        style: {
          gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)"
        },
        children: [
          s.jsxs("div", {
            className: "systems-lab-cluster",
            children: [
              s.jsxs("div", {
                className: "flex justify-between items-end mb-6 border-b border-neutral-800 pb-4",
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsx("span", {
                        className: "text-xs text-neutral-400 tracking-wider uppercase font-medium",
                        children: "Instruction Stream"
                      }),
                      s.jsxs("div", {
                        className: "mt-1 flex items-center gap-2",
                        children: [
                          s.jsx("div", {
                            className: `w-2 h-2 rounded-full ${v.is_running ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" : "bg-neutral-600"}`
                          }),
                          s.jsx("span", {
                            className: "text-sm font-mono text-neutral-300",
                            children: v.is_running ? "EXECUTING" : "HALTED"
                          })
                        ]
                      })
                    ]
                  }),
                  s.jsxs("div", {
                    className: "text-right",
                    children: [
                      s.jsx("span", {
                        className: "text-xs text-neutral-500 tracking-wider uppercase block",
                        children: "Program Counter"
                      }),
                      s.jsxs("span", {
                        className: "text-xl font-mono text-accent font-bold",
                        children: [
                          "0x",
                          v.pc.toString(16).padStart(4, "0")
                        ]
                      })
                    ]
                  })
                ]
              }),
              s.jsxs("div", {
                className: "bg-black/40 border border-neutral-800 rounded p-4 font-mono text-sm mb-6",
                children: [
                  s.jsxs("div", {
                    className: "text-neutral-500 text-[10px] uppercase mb-4 tracking-widest border-b border-neutral-800 pb-2 flex justify-between",
                    children: [
                      s.jsx("span", {
                        children: "ASSEMBLY (RV32I)"
                      }),
                      s.jsx("span", {
                        children: "OPCODE BINS"
                      })
                    ]
                  }),
                  [
                    {
                      addr: 0,
                      asm: "addi x1, x0, 0",
                      comment: "a = 0"
                    },
                    {
                      addr: 4,
                      asm: "addi x2, x0, 1",
                      comment: "b = 1"
                    },
                    {
                      addr: 8,
                      asm: "add x3, x1, x2",
                      comment: "next = a + b"
                    },
                    {
                      addr: 12,
                      asm: "add x1, x0, x2",
                      comment: "a = b"
                    },
                    {
                      addr: 16,
                      asm: "add x2, x0, x3",
                      comment: "b = next"
                    },
                    {
                      addr: 20,
                      asm: "jal x0, -12",
                      comment: "loop"
                    }
                  ].map((G, q) => {
                    const E = v.pc === G.addr;
                    return s.jsxs("div", {
                      className: `flex justify-between py-1 px-2 rounded transition-colors ${E ? "bg-accent/20 text-accent font-bold scale-[1.02] shadow-[0_0_10px_rgba(var(--accent-rgb),0.1)]" : "text-neutral-500"}`,
                      children: [
                        s.jsxs("div", {
                          className: "flex gap-4",
                          children: [
                            s.jsxs("span", {
                              className: "opacity-30",
                              children: [
                                "0x",
                                G.addr.toString(16).padStart(4, "0")
                              ]
                            }),
                            s.jsx("span", {
                              children: G.asm.padEnd(16, " ")
                            })
                          ]
                        }),
                        s.jsxs("span", {
                          className: "text-[10px] opacity-40",
                          children: [
                            "# ",
                            G.comment
                          ]
                        })
                      ]
                    }, q);
                  })
                ]
              }),
              s.jsxs("div", {
                className: "systems-lab-controls",
                children: [
                  s.jsxs("button", {
                    className: `systems-lab-btn ${v.is_running ? "bg-red-900/20 text-red-400 border-red-800/40" : "systems-lab-btn-write"}`,
                    onClick: W,
                    children: [
                      s.jsx("span", {
                        className: "systems-lab-btn-icon",
                        children: v.is_running ? "\u23F8" : "\u25B6"
                      }),
                      v.is_running ? "STOP CPU" : "START CLOCK"
                    ]
                  }),
                  s.jsxs("button", {
                    className: "systems-lab-btn border border-neutral-700/50 hover:bg-neutral-800",
                    onClick: ae,
                    disabled: v.is_running,
                    children: [
                      s.jsx("span", {
                        className: "systems-lab-btn-icon",
                        children: "\u27A1"
                      }),
                      "STEP INSN"
                    ]
                  }),
                  s.jsxs("button", {
                    className: "systems-lab-btn border border-neutral-700/50 hover:bg-neutral-800",
                    onClick: ue,
                    children: [
                      s.jsx("span", {
                        className: "systems-lab-btn-icon",
                        children: "\u{1F504}"
                      }),
                      "RESET"
                    ]
                  })
                ]
              })
            ]
          }),
          s.jsxs("div", {
            className: "systems-lab-info",
            children: [
              s.jsxs("div", {
                className: "bg-neutral-900/60 border border-neutral-800 rounded-lg p-5",
                children: [
                  s.jsx("span", {
                    className: "text-[10px] text-neutral-500 uppercase tracking-widest block mb-4",
                    children: "REGISTER FILE (INT)"
                  }),
                  s.jsx("div", {
                    className: "grid grid-cols-4 gap-2",
                    children: v.registers.slice(0, 16).map((G, q) => {
                      const E = G > 0;
                      return s.jsxs("div", {
                        className: "flex flex-col bg-black/30 p-2 rounded border border-neutral-800/50",
                        children: [
                          s.jsxs("span", {
                            className: "text-[9px] text-neutral-600 font-bold mb-1",
                            children: [
                              "x",
                              q
                            ]
                          }),
                          s.jsx("span", {
                            className: `text-xs font-mono font-bold ${E ? "text-accent" : "text-neutral-400"}`,
                            children: G.toString(16).padStart(8, "0")
                          })
                        ]
                      }, q);
                    })
                  }),
                  s.jsxs("div", {
                    className: "mt-6 border-t border-neutral-800 pt-6",
                    children: [
                      s.jsx("span", {
                        className: "text-[10px] text-neutral-500 uppercase tracking-widest block mb-4",
                        children: "Clock Speed Control"
                      }),
                      s.jsx("div", {
                        className: "flex gap-4",
                        children: [
                          50,
                          250,
                          1e3
                        ].map((G) => s.jsx("button", {
                          onClick: () => z(G),
                          className: `flex-1 py-2 rounded text-[10px] font-bold tracking-widest uppercase transition-all ${a === G ? "bg-accent/10 border border-accent/40 text-accent" : "bg-neutral-800 border border-neutral-700 text-neutral-500 hover:text-neutral-300"}`,
                          children: G === 1e3 ? "1 Hz" : G === 250 ? "4 Hz" : "20 Hz"
                        }, G))
                      })
                    ]
                  })
                ]
              }),
              s.jsxs("div", {
                className: "systems-lab-log mt-6 h-[220px] flex flex-col",
                children: [
                  s.jsx("div", {
                    className: "systems-lab-log-header",
                    children: s.jsx("span", {
                      className: "text-[10px] text-neutral-500 uppercase",
                      children: "Hardware Event Log"
                    })
                  }),
                  s.jsx("div", {
                    className: "flex-1 overflow-hidden flex flex-col justify-end p-4",
                    children: v.event_log.slice(-10).map((G, q) => s.jsx("div", {
                      className: `py-0.5 text-[10px] font-mono leading-tight ${G.includes("\u{1F504}") ? "text-neutral-400" : G.includes("\u25B6") || G.includes("\u23F8") ? "text-accent" : "text-neutral-500"}`,
                      children: G
                    }, q))
                  })
                ]
              })
            ]
          })
        ]
      }) : null;
    }
    function rp() {
      const [y, v] = B.useState("parallel"), [h, a] = B.useState(null), [z, C] = B.useState(null);
      return B.useEffect(() => {
        let I = false;
        async function M() {
          try {
            const O = await Jf(() => import("./wasm_cluster-CYkjDHOg.js"), []);
            await O.default(), I || a(O);
          } catch (O) {
            C(O.message);
          }
        }
        return M(), () => {
          I = true;
        };
      }, []), z ? null : s.jsxs("section", {
        id: "systems-lab",
        className: "py-24 md:py-32 relative",
        children: [
          s.jsx("div", {
            className: "warm-divider mb-24 md:mb-32"
          }),
          s.jsxs("div", {
            className: "section-container",
            children: [
              s.jsxs(Ze, {
                children: [
                  s.jsx("div", {
                    className: "flex items-center gap-3 mb-3",
                    children: s.jsx("span", {
                      className: "systems-lab-badge border-accent/20 bg-accent/5 text-accent",
                      children: "WASM NATIVE MODULES"
                    })
                  }),
                  s.jsx("h2", {
                    className: "font-heading text-3xl md:text-4xl font-bold text-accent-cream mb-4",
                    children: s.jsx(tr, {
                      text: "Applying High Performance Contexts for live demo, because why not?"
                    })
                  }),
                  s.jsxs("div", {
                    className: "flex flex-wrap gap-4 mb-10",
                    children: [
                      s.jsxs("button", {
                        onClick: () => v("parallel"),
                        className: `flex-1 min-w-[280px] p-4 text-left rounded-lg border transition-all ${y === "parallel" ? "bg-accent/10 border-accent/40 shadow-inner" : "bg-neutral-900 border-neutral-800 hover:border-neutral-600"} group`,
                        children: [
                          s.jsx("p", {
                            className: `text-xs font-mono tracking-widest mb-1 ${y === "parallel" ? "text-accent" : "text-neutral-500"}`,
                            children: "HIGH PERFORMANCE COMPUTING"
                          }),
                          s.jsx("h3", {
                            className: `text-lg font-bold ${y === "parallel" ? "text-accent-cream" : "text-neutral-400 group-hover:text-neutral-300"}`,
                            children: "Parallel Matrix Multiplier"
                          })
                        ]
                      }),
                      s.jsxs("button", {
                        onClick: () => v("distributed"),
                        className: `flex-1 min-w-[280px] p-4 text-left rounded-lg border transition-all ${y === "distributed" ? "bg-accent/10 border-accent/40 shadow-inner" : "bg-neutral-900 border-neutral-800 hover:border-neutral-600"} group`,
                        children: [
                          s.jsx("p", {
                            className: `text-xs font-mono tracking-widest mb-1 ${y === "distributed" ? "text-accent" : "text-neutral-500"}`,
                            children: "DISTRIBUTED DATA SYSTEMS"
                          }),
                          s.jsx("h3", {
                            className: `text-lg font-bold ${y === "distributed" ? "text-accent-cream" : "text-neutral-400 group-hover:text-neutral-300"}`,
                            children: "Master-Slave Data Replication"
                          })
                        ]
                      }),
                      s.jsxs("button", {
                        onClick: () => v("riscv"),
                        className: `flex-1 min-w-[280px] p-4 text-left rounded-lg border transition-all ${y === "riscv" ? "bg-accent/10 border-accent/40 shadow-inner" : "bg-neutral-900 border-neutral-800 hover:border-neutral-600"} group`,
                        children: [
                          s.jsx("p", {
                            className: `text-xs font-mono tracking-widest mb-1 ${y === "riscv" ? "text-accent" : "text-neutral-500"}`,
                            children: "MICRO-ARCHITECTURE DESIGN"
                          }),
                          s.jsx("h3", {
                            className: `text-lg font-bold ${y === "riscv" ? "text-accent-cream" : "text-neutral-400 group-hover:text-neutral-300"}`,
                            children: "RISC-V CPU Microkernel"
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              s.jsx(Ze, {
                delay: 100,
                children: s.jsxs("div", {
                  className: "systems-lab-container",
                  children: [
                    !h && s.jsxs("div", {
                      className: "systems-lab-loading",
                      children: [
                        s.jsx("div", {
                          className: "systems-lab-spinner"
                        }),
                        s.jsx("p", {
                          className: "text-neutral-400 text-sm mt-4",
                          children: "Compiling WebAssembly Core..."
                        })
                      ]
                    }),
                    h && y === "parallel" && s.jsx(Qs, {
                      children: s.jsx(ep, {
                        wasmModule: h
                      })
                    }),
                    h && y === "distributed" && s.jsx(Qs, {
                      children: s.jsx(tp, {
                        wasmModule: h
                      })
                    }),
                    h && y === "riscv" && s.jsx(Qs, {
                      children: s.jsx(np, {
                        wasmModule: h
                      })
                    })
                  ]
                })
              })
            ]
          })
        ]
      });
    }
    const lp = [
      {
        title: "Stop Guessing Which Remote Desktop Protocol You Should Actually Use \u2014 and When",
        subtitle: "Medium \u2022 Security Networking",
        img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*dfo4CbzU0AzrdryyMlIvEg.png",
        excerpt: "RDP vs VNC vs others \u2014 a breakdown of protocols, tradeoffs, and when each remote desktop solution actually makes sense.",
        link: "https://medium.com/@arpitb.lgupta1/stop-guessing-which-remote-desktop-protocol-you-should-actually-use-and-when-79fb2998893f",
        tags: [
          "RDP",
          "Remote Access",
          "Networking"
        ]
      },
      {
        title: "The Hidden Holes: Why Our Super-Fast Computers Have Security Problems We're Ignoring",
        subtitle: "Medium \u2022 Security Analysis",
        img: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*h_D_8BRT3er2Ao-9",
        excerpt: "Modern CPUs are fast but full of overlooked vulnerabilities \u2014 exploring microarchitectural risks we brush aside.",
        link: "https://medium.com/@arpit_33734/the-hidden-holes-why-our-super-fast-computers-have-security-problems-were-ignoring-7d9ae839f40e",
        tags: [
          "Security",
          "Hardware",
          "Vulnerabilities"
        ]
      },
      {
        title: "Timeless Attack Vectors: Why Cutting-Edge Browser Security Is Essential",
        subtitle: "Medium \u2022 Browser Security",
        img: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*8X1Z5tTLD6s46jCrpAoHJQ.png",
        excerpt: "An overview of evolving attack vectors in modern browsers and why robust browser security is critical today.",
        link: "https://medium.com/@arpit_33734/timeless-attack-vectors-why-cutting-edge-browser-security-is-essential-027fa887ca7a",
        tags: [
          "Browser Security",
          "Web"
        ]
      },
      {
        title: "Digital Clock Project",
        subtitle: "Hardware Build \u2022 Logic Design",
        img: "https://chiragkotian.github.io/Past_Projects/images/Digital%20clock.jpg",
        excerpt: "A digital clock built with flip-flops and logic gates \u2014 blending electronics design with timing circuits.",
        link: "https://chiragkotian.github.io/Past_Projects/Digital_Clock.html",
        tags: [
          "Hardware",
          "Electronics"
        ]
      },
      {
        title: "RC 3D-Printed Plane",
        subtitle: "Hobby Project \u2022 RC Build",
        img: "https://chiragkotian.github.io/Past_Projects/images/3D%20printed%20RC%20plane.jpg",
        excerpt: "A 3D-printed RC plane project combining design, electronics, and control system integration.",
        link: "https://github.com/ChiragKotian/RC_3D-Printed_plane",
        tags: [
          "RC",
          "3D Printing"
        ]
      },
      {
        title: "RC Escapade Race Car",
        subtitle: "RC Hardware Build",
        img: "https://chiragkotian.github.io/Past_Projects/images/rcracecar.jpg",
        excerpt: "Custom-built RC race car with custom PCB, remote control integration, and functional design for competition.",
        link: "https://github.com/ChiragKotian/RC-Escapade-RC-race-car-/",
        tags: [
          "RC",
          "Hardware"
        ]
      },
      {
        title: "Drone \u2014 Pixhawk",
        subtitle: "Hobby Project \u2022 Drone",
        img: "https://chiragkotian.github.io/Past_Projects/images/firstpixhwak.png",
        excerpt: "A drone made out of recycled parts and components salvaged from older club projects.",
        link: "https://chiragkotian.github.io/Past_Projects/Pixhawk_first_drone.html",
        tags: [
          "RC",
          "Electronics"
        ]
      }
    ];
    function ip() {
      return s.jsxs("section", {
        id: "writing",
        className: "py-24 md:py-32 relative",
        children: [
          s.jsx("div", {
            className: "warm-divider mb-24 md:mb-32"
          }),
          s.jsxs("div", {
            className: "section-container",
            children: [
              s.jsxs(Ze, {
                children: [
                  s.jsx("p", {
                    className: "text-accent text-sm tracking-widest uppercase mb-3",
                    children: "Thoughts & Builds"
                  }),
                  s.jsx("h2", {
                    className: "font-heading text-3xl md:text-4xl font-bold text-accent-cream mb-16",
                    children: s.jsx(tr, {
                      text: "Writing & Interests"
                    })
                  })
                ]
              }),
              s.jsx("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: lp.map((y, v) => s.jsx(Ze, {
                  delay: v * 60,
                  children: s.jsx(Br, {
                    intensity: 5,
                    className: "h-full",
                    children: s.jsxs("a", {
                      href: y.link,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "group card-warm overflow-hidden flex flex-col h-full hover:border-accent/40",
                      children: [
                        s.jsxs("div", {
                          className: "relative aspect-video overflow-hidden",
                          children: [
                            s.jsx("img", {
                              src: y.img,
                              alt: y.title,
                              className: `w-full h-full object-cover opacity-80 group-hover:opacity-100
                               group-hover:scale-105 transition-all duration-700`,
                              loading: "lazy"
                            }),
                            s.jsx("div", {
                              className: "absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent pointer-events-none"
                            })
                          ]
                        }),
                        s.jsxs("div", {
                          className: "p-6 flex flex-col flex-grow",
                          children: [
                            s.jsx("span", {
                              className: "text-xs text-neutral-500 tracking-wider uppercase mb-2",
                              children: y.subtitle
                            }),
                            s.jsx("h3", {
                              className: "font-heading text-lg font-semibold text-accent-cream mb-2 group-hover:text-accent transition-colors line-clamp-2",
                              children: y.title
                            }),
                            s.jsx("p", {
                              className: "text-sm text-neutral-400 leading-relaxed mb-4 flex-grow line-clamp-3",
                              children: y.excerpt
                            }),
                            s.jsxs("div", {
                              className: "flex items-center justify-between",
                              children: [
                                s.jsx("div", {
                                  className: "flex flex-wrap gap-2",
                                  children: y.tags.map((h, a) => s.jsx("span", {
                                    className: "pill text-xs",
                                    children: h
                                  }, a))
                                }),
                                s.jsx(Yu, {
                                  className: "w-4 h-4 text-neutral-600 group-hover:text-accent transition-colors flex-shrink-0 ml-3"
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  })
                }, v))
              })
            ]
          })
        ]
      });
    }
    function sp() {
      return s.jsxs("footer", {
        className: "relative mt-12",
        children: [
          s.jsx("div", {
            className: "warm-divider"
          }),
          s.jsxs("div", {
            className: "section-container py-16 relative",
            children: [
              s.jsx("div", {
                className: "absolute inset-x-0 bottom-0 h-[200px] -z-10 bg-[#06080a]/70 backdrop-blur-md pointer-events-none",
                style: {
                  WebkitMaskImage: "linear-gradient(to top, black 40%, transparent 100%)",
                  maskImage: "linear-gradient(to top, black 40%, transparent 100%)"
                }
              }),
              s.jsxs("div", {
                className: "flex flex-col md:flex-row md:items-center md:justify-between gap-8 relative z-10",
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsx("h2", {
                        className: "font-heading text-xl font-bold text-accent-cream drop-shadow-md",
                        children: "Arpit Gupta"
                      }),
                      s.jsx("p", {
                        className: "text-sm text-neutral-400 mt-1 drop-shadow-sm",
                        children: "Software Developer & Security Researcher"
                      })
                    ]
                  }),
                  s.jsx("div", {
                    className: "flex gap-3",
                    children: [
                      {
                        icon: Gu,
                        href: "https://github.com/arpitguptagithub",
                        label: "GitHub"
                      },
                      {
                        icon: Ku,
                        href: "https://www.linkedin.com/in/arpit-gupta-9482bb239/",
                        label: "LinkedIn"
                      },
                      {
                        icon: Xu,
                        href: "mailto:arpitb.lgupta1@gmail.com",
                        label: "Email"
                      }
                    ].map((y) => s.jsx("a", {
                      href: y.href,
                      target: "_blank",
                      rel: "noreferrer",
                      "aria-label": y.label,
                      className: `group p-2.5 rounded-lg border border-border/50 bg-background/40 backdrop-blur-sm
                           hover:border-accent/40 transition-all duration-300 hover:-translate-y-0.5
                           hover:bg-background/80 hover:shadow-[0_8px_30px_rgba(212,165,116,0.15)]`,
                      children: s.jsx(y.icon, {
                        className: "w-4 h-4 text-neutral-400 group-hover:text-accent transition-colors drop-shadow-sm"
                      })
                    }, y.label))
                  }),
                  s.jsxs("button", {
                    onClick: () => window.scrollTo({
                      top: 0,
                      behavior: "smooth"
                    }),
                    className: "group flex items-center gap-2 text-sm text-neutral-500 hover:text-accent-cream transition-colors self-start md:self-auto",
                    children: [
                      "Back to top",
                      s.jsx(pf, {
                        className: "w-4 h-4 group-hover:-translate-y-1 transition-transform"
                      })
                    ]
                  })
                ]
              }),
              s.jsx("div", {
                className: "mt-12 pt-6 border-t border-border",
                children: s.jsxs("p", {
                  className: "text-xs text-neutral-600 text-center",
                  children: [
                    "\xA9 ",
                    (/* @__PURE__ */ new Date()).getFullYear(),
                    " Arpit Gupta. All rights reserved."
                  ]
                })
              })
            ]
          })
        ]
      });
    }
    function ap() {
      const [y, v] = B.useState(false), h = B.useCallback(() => {
        v(true);
      }, []);
      return s.jsxs("div", {
        className: "relative bg-bg text-white min-h-screen font-body",
        children: [
          s.jsx("div", {
            className: "ambient-glow"
          }),
          s.jsx(lf, {}),
          s.jsx(sf, {}),
          s.jsx(rf, {
            onComplete: h
          }),
          s.jsxs("div", {
            className: `relative z-[3] transition-opacity duration-1000 ${y ? "opacity-100" : "opacity-0"}`,
            children: [
              s.jsx($f, {}),
              s.jsxs("main", {
                children: [
                  s.jsx(Wf, {}),
                  s.jsx(Vf, {}),
                  s.jsx(Yf, {}),
                  s.jsx(Gf, {}),
                  s.jsx(Xf, {}),
                  s.jsx(rp, {}),
                  s.jsx(ip, {})
                ]
              }),
              s.jsx(sp, {})
            ]
          })
        ]
      });
    }
    nf.createRoot(document.getElementById("root")).render(s.jsx(B.StrictMode, {
      children: s.jsx(ap, {})
    }));
  });
  var_7fa13deb_e3ef_57ba_a3b2_d823f32c3fd4 = op();
})();
export {
  __tla,
  var_7fa13deb_e3ef_57ba_a3b2_d823f32c3fd4 as default
};
