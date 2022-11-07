(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === "childList")
        for (const s of l.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerpolicy && (l.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (l.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = n(i);
    fetch(i.href, l);
  }
})();
function jf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var X = { exports: {} },
  G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qr = Symbol.for("react.element"),
  Bf = Symbol.for("react.portal"),
  bf = Symbol.for("react.fragment"),
  Vf = Symbol.for("react.strict_mode"),
  Hf = Symbol.for("react.profiler"),
  Wf = Symbol.for("react.provider"),
  Gf = Symbol.for("react.context"),
  Uf = Symbol.for("react.forward_ref"),
  Yf = Symbol.for("react.suspense"),
  Qf = Symbol.for("react.memo"),
  Xf = Symbol.for("react.lazy"),
  ka = Symbol.iterator;
function Kf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ka && e[ka]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var rc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ic = Object.assign,
  lc = {};
function Zn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = lc),
    (this.updater = n || rc);
}
Zn.prototype.isReactComponent = {};
Zn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Zn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function sc() {}
sc.prototype = Zn.prototype;
function xo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = lc),
    (this.updater = n || rc);
}
var Co = (xo.prototype = new sc());
Co.constructor = xo;
ic(Co, Zn.prototype);
Co.isPureReactComponent = !0;
var Ta = Array.isArray,
  oc = Object.prototype.hasOwnProperty,
  Eo = { current: null },
  ac = { key: !0, ref: !0, __self: !0, __source: !0 };
function uc(e, t, n) {
  var r,
    i = {},
    l = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      oc.call(t, r) && !ac.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var o = Array(a), u = 0; u < a; u++) o[u] = arguments[u + 2];
    i.children = o;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Qr,
    type: e,
    key: l,
    ref: s,
    props: i,
    _owner: Eo.current,
  };
}
function qf(e, t) {
  return {
    $$typeof: Qr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ko(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Qr;
}
function Zf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Pa = /\/+/g;
function Bl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Zf("" + e.key)
    : t.toString(36);
}
function Ti(e, t, n, r, i) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (l) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Qr:
          case Bf:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Bl(s, 0) : r),
      Ta(i)
        ? ((n = ""),
          e != null && (n = e.replace(Pa, "$&/") + "/"),
          Ti(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (ko(i) &&
            (i = qf(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Pa, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Ta(e)))
    for (var a = 0; a < e.length; a++) {
      l = e[a];
      var o = r + Bl(l, a);
      s += Ti(l, t, n, o, i);
    }
  else if (((o = Kf(e)), typeof o == "function"))
    for (e = o.call(e), a = 0; !(l = e.next()).done; )
      (l = l.value), (o = r + Bl(l, a++)), (s += Ti(l, t, n, o, i));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function ni(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ti(e, r, "", "", function (l) {
      return t.call(n, l, i++);
    }),
    r
  );
}
function Jf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Be = { current: null },
  Pi = { transition: null },
  ep = {
    ReactCurrentDispatcher: Be,
    ReactCurrentBatchConfig: Pi,
    ReactCurrentOwner: Eo,
  };
G.Children = {
  map: ni,
  forEach: function (e, t, n) {
    ni(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ni(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ni(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ko(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
G.Component = Zn;
G.Fragment = bf;
G.Profiler = Hf;
G.PureComponent = xo;
G.StrictMode = Vf;
G.Suspense = Yf;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ep;
G.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ic({}, e.props),
    i = e.key,
    l = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (s = Eo.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (o in t)
      oc.call(t, o) &&
        !ac.hasOwnProperty(o) &&
        (r[o] = t[o] === void 0 && a !== void 0 ? a[o] : t[o]);
  }
  var o = arguments.length - 2;
  if (o === 1) r.children = n;
  else if (1 < o) {
    a = Array(o);
    for (var u = 0; u < o; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Qr, type: e.type, key: i, ref: l, props: r, _owner: s };
};
G.createContext = function (e) {
  return (
    (e = {
      $$typeof: Gf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Wf, _context: e }),
    (e.Consumer = e)
  );
};
G.createElement = uc;
G.createFactory = function (e) {
  var t = uc.bind(null, e);
  return (t.type = e), t;
};
G.createRef = function () {
  return { current: null };
};
G.forwardRef = function (e) {
  return { $$typeof: Uf, render: e };
};
G.isValidElement = ko;
G.lazy = function (e) {
  return { $$typeof: Xf, _payload: { _status: -1, _result: e }, _init: Jf };
};
G.memo = function (e, t) {
  return { $$typeof: Qf, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function (e) {
  var t = Pi.transition;
  Pi.transition = {};
  try {
    e();
  } finally {
    Pi.transition = t;
  }
};
G.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
G.useCallback = function (e, t) {
  return Be.current.useCallback(e, t);
};
G.useContext = function (e) {
  return Be.current.useContext(e);
};
G.useDebugValue = function () {};
G.useDeferredValue = function (e) {
  return Be.current.useDeferredValue(e);
};
G.useEffect = function (e, t) {
  return Be.current.useEffect(e, t);
};
G.useId = function () {
  return Be.current.useId();
};
G.useImperativeHandle = function (e, t, n) {
  return Be.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function (e, t) {
  return Be.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function (e, t) {
  return Be.current.useLayoutEffect(e, t);
};
G.useMemo = function (e, t) {
  return Be.current.useMemo(e, t);
};
G.useReducer = function (e, t, n) {
  return Be.current.useReducer(e, t, n);
};
G.useRef = function (e) {
  return Be.current.useRef(e);
};
G.useState = function (e) {
  return Be.current.useState(e);
};
G.useSyncExternalStore = function (e, t, n) {
  return Be.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function () {
  return Be.current.useTransition();
};
G.version = "18.2.0";
(function (e) {
  e.exports = G;
})(X);
const Et = jf(X.exports);
var ws = {},
  cc = { exports: {} },
  tt = {},
  dc = { exports: {} },
  fc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(z, R) {
    var j = z.length;
    z.push(R);
    e: for (; 0 < j; ) {
      var J = (j - 1) >>> 1,
        L = z[J];
      if (0 < i(L, R)) (z[J] = R), (z[j] = L), (j = J);
      else break e;
    }
  }
  function n(z) {
    return z.length === 0 ? null : z[0];
  }
  function r(z) {
    if (z.length === 0) return null;
    var R = z[0],
      j = z.pop();
    if (j !== R) {
      z[0] = j;
      e: for (var J = 0, L = z.length, N = L >>> 1; J < N; ) {
        var $ = 2 * (J + 1) - 1,
          B = z[$],
          x = $ + 1,
          U = z[x];
        if (0 > i(B, j))
          x < L && 0 > i(U, B)
            ? ((z[J] = U), (z[x] = j), (J = x))
            : ((z[J] = B), (z[$] = j), (J = $));
        else if (x < L && 0 > i(U, j)) (z[J] = U), (z[x] = j), (J = x);
        else break e;
      }
    }
    return R;
  }
  function i(z, R) {
    var j = z.sortIndex - R.sortIndex;
    return j !== 0 ? j : z.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var o = [],
    u = [],
    c = 1,
    p = null,
    f = 3,
    g = !1,
    v = !1,
    y = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(z) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null) r(u);
      else if (R.startTime <= z)
        r(u), (R.sortIndex = R.expirationTime), t(o, R);
      else break;
      R = n(u);
    }
  }
  function S(z) {
    if (((y = !1), m(z), !v))
      if (n(o) !== null) (v = !0), Xe(E);
      else {
        var R = n(u);
        R !== null && ye(S, R.startTime - z);
      }
  }
  function E(z, R) {
    (v = !1), y && ((y = !1), d(k), (k = -1)), (g = !0);
    var j = f;
    try {
      for (
        m(R), p = n(o);
        p !== null && (!(p.expirationTime > R) || (z && !D()));

      ) {
        var J = p.callback;
        if (typeof J == "function") {
          (p.callback = null), (f = p.priorityLevel);
          var L = J(p.expirationTime <= R);
          (R = e.unstable_now()),
            typeof L == "function" ? (p.callback = L) : p === n(o) && r(o),
            m(R);
        } else r(o);
        p = n(o);
      }
      if (p !== null) var N = !0;
      else {
        var $ = n(u);
        $ !== null && ye(S, $.startTime - R), (N = !1);
      }
      return N;
    } finally {
      (p = null), (f = j), (g = !1);
    }
  }
  var T = !1,
    M = null,
    k = -1,
    V = 5,
    _ = -1;
  function D() {
    return !(e.unstable_now() - _ < V);
  }
  function F() {
    if (M !== null) {
      var z = e.unstable_now();
      _ = z;
      var R = !0;
      try {
        R = M(!0, z);
      } finally {
        R ? K() : ((T = !1), (M = null));
      }
    } else T = !1;
  }
  var K;
  if (typeof h == "function")
    K = function () {
      h(F);
    };
  else if (typeof MessageChannel < "u") {
    var ge = new MessageChannel(),
      de = ge.port2;
    (ge.port1.onmessage = F),
      (K = function () {
        de.postMessage(null);
      });
  } else
    K = function () {
      w(F, 0);
    };
  function Xe(z) {
    (M = z), T || ((T = !0), K());
  }
  function ye(z, R) {
    k = w(function () {
      z(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (z) {
      z.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || g || ((v = !0), Xe(E));
    }),
    (e.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (V = 0 < z ? Math.floor(1e3 / z) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(o);
    }),
    (e.unstable_next = function (z) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = f;
      }
      var j = f;
      f = R;
      try {
        return z();
      } finally {
        f = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (z, R) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var j = f;
      f = z;
      try {
        return R();
      } finally {
        f = j;
      }
    }),
    (e.unstable_scheduleCallback = function (z, R, j) {
      var J = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? J + j : J))
          : (j = J),
        z)
      ) {
        case 1:
          var L = -1;
          break;
        case 2:
          L = 250;
          break;
        case 5:
          L = 1073741823;
          break;
        case 4:
          L = 1e4;
          break;
        default:
          L = 5e3;
      }
      return (
        (L = j + L),
        (z = {
          id: c++,
          callback: R,
          priorityLevel: z,
          startTime: j,
          expirationTime: L,
          sortIndex: -1,
        }),
        j > J
          ? ((z.sortIndex = j),
            t(u, z),
            n(o) === null &&
              z === n(u) &&
              (y ? (d(k), (k = -1)) : (y = !0), ye(S, j - J)))
          : ((z.sortIndex = L), t(o, z), v || g || ((v = !0), Xe(E))),
        z
      );
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (z) {
      var R = f;
      return function () {
        var j = f;
        f = R;
        try {
          return z.apply(this, arguments);
        } finally {
          f = j;
        }
      };
    });
})(fc);
(function (e) {
  e.exports = fc;
})(dc);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pc = X.exports,
  et = dc.exports;
function P(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var hc = new Set(),
  Lr = {};
function xn(e, t) {
  Hn(e, t), Hn(e + "Capture", t);
}
function Hn(e, t) {
  for (Lr[e] = t, e = 0; e < t.length; e++) hc.add(t[e]);
}
var Ot = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  xs = Object.prototype.hasOwnProperty,
  tp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  _a = {},
  Ma = {};
function np(e) {
  return xs.call(Ma, e)
    ? !0
    : xs.call(_a, e)
    ? !1
    : tp.test(e)
    ? (Ma[e] = !0)
    : ((_a[e] = !0), !1);
}
function rp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ip(e, t, n, r) {
  if (t === null || typeof t > "u" || rp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function be(e, t, n, r, i, l, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = s);
}
var Oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Oe[e] = new be(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Oe[t] = new be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Oe[e] = new be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Oe[e] = new be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Oe[e] = new be(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Oe[e] = new be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Oe[e] = new be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Oe[e] = new be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Oe[e] = new be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var To = /[\-:]([a-z])/g;
function Po(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(To, Po);
    Oe[t] = new be(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(To, Po);
    Oe[t] = new be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(To, Po);
  Oe[t] = new be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Oe[e] = new be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Oe.xlinkHref = new be(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Oe[e] = new be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function _o(e, t, n, r) {
  var i = Oe.hasOwnProperty(t) ? Oe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ip(t, n, i, r) && (n = null),
    r || i === null
      ? np(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var At = pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ri = Symbol.for("react.element"),
  kn = Symbol.for("react.portal"),
  Tn = Symbol.for("react.fragment"),
  Mo = Symbol.for("react.strict_mode"),
  Cs = Symbol.for("react.profiler"),
  mc = Symbol.for("react.provider"),
  gc = Symbol.for("react.context"),
  zo = Symbol.for("react.forward_ref"),
  Es = Symbol.for("react.suspense"),
  ks = Symbol.for("react.suspense_list"),
  Lo = Symbol.for("react.memo"),
  Ft = Symbol.for("react.lazy"),
  vc = Symbol.for("react.offscreen"),
  za = Symbol.iterator;
function rr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (za && e[za]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ce = Object.assign,
  bl;
function pr(e) {
  if (bl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      bl = (t && t[1]) || "";
    }
  return (
    `
` +
    bl +
    e
  );
}
var Vl = !1;
function Hl(e, t) {
  if (!e || Vl) return "";
  Vl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          l = r.stack.split(`
`),
          s = i.length - 1,
          a = l.length - 1;
        1 <= s && 0 <= a && i[s] !== l[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== l[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== l[a])) {
                var o =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    o.includes("<anonymous>") &&
                    (o = o.replace("<anonymous>", e.displayName)),
                  o
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Vl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? pr(e) : "";
}
function lp(e) {
  switch (e.tag) {
    case 5:
      return pr(e.type);
    case 16:
      return pr("Lazy");
    case 13:
      return pr("Suspense");
    case 19:
      return pr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Hl(e.type, !1)), e;
    case 11:
      return (e = Hl(e.type.render, !1)), e;
    case 1:
      return (e = Hl(e.type, !0)), e;
    default:
      return "";
  }
}
function Ts(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Tn:
      return "Fragment";
    case kn:
      return "Portal";
    case Cs:
      return "Profiler";
    case Mo:
      return "StrictMode";
    case Es:
      return "Suspense";
    case ks:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case gc:
        return (e.displayName || "Context") + ".Consumer";
      case mc:
        return (e._context.displayName || "Context") + ".Provider";
      case zo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Lo:
        return (
          (t = e.displayName || null), t !== null ? t : Ts(e.type) || "Memo"
        );
      case Ft:
        (t = e._payload), (e = e._init);
        try {
          return Ts(e(t));
        } catch {}
    }
  return null;
}
function sp(e) {
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
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return Ts(t);
    case 8:
      return t === Mo ? "StrictMode" : "Mode";
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
function nn(e) {
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
function yc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function op(e) {
  var t = yc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), l.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ii(e) {
  e._valueTracker || (e._valueTracker = op(e));
}
function Sc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = yc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Fi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ps(e, t) {
  var n = t.checked;
  return ce({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function La(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = nn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function wc(e, t) {
  (t = t.checked), t != null && _o(e, "checked", t, !1);
}
function _s(e, t) {
  wc(e, t);
  var n = nn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ms(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ms(e, t.type, nn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Oa(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ms(e, t, n) {
  (t !== "number" || Fi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var hr = Array.isArray;
function Dn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + nn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function zs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return ce({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Na(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92));
      if (hr(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: nn(n) };
}
function xc(e, t) {
  var n = nn(t.value),
    r = nn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function $a(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Cc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ls(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Cc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var li,
  Ec = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        li = li || document.createElement("div"),
          li.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = li.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Or(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Sr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ap = ["Webkit", "ms", "Moz", "O"];
Object.keys(Sr).forEach(function (e) {
  ap.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Sr[t] = Sr[e]);
  });
});
function kc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Sr.hasOwnProperty(e) && Sr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Tc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = kc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var up = ce(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Os(e, t) {
  if (t) {
    if (up[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function Ns(e, t) {
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
      return !1;
    default:
      return !0;
  }
}
var $s = null;
function Oo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Is = null,
  Fn = null,
  jn = null;
function Ia(e) {
  if ((e = qr(e))) {
    if (typeof Is != "function") throw Error(P(280));
    var t = e.stateNode;
    t && ((t = hl(t)), Is(e.stateNode, e.type, t));
  }
}
function Pc(e) {
  Fn ? (jn ? jn.push(e) : (jn = [e])) : (Fn = e);
}
function _c() {
  if (Fn) {
    var e = Fn,
      t = jn;
    if (((jn = Fn = null), Ia(e), t)) for (e = 0; e < t.length; e++) Ia(t[e]);
  }
}
function Mc(e, t) {
  return e(t);
}
function zc() {}
var Wl = !1;
function Lc(e, t, n) {
  if (Wl) return e(t, n);
  Wl = !0;
  try {
    return Mc(e, t, n);
  } finally {
    (Wl = !1), (Fn !== null || jn !== null) && (zc(), _c());
  }
}
function Nr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = hl(n);
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(P(231, t, typeof n));
  return n;
}
var As = !1;
if (Ot)
  try {
    var ir = {};
    Object.defineProperty(ir, "passive", {
      get: function () {
        As = !0;
      },
    }),
      window.addEventListener("test", ir, ir),
      window.removeEventListener("test", ir, ir);
  } catch {
    As = !1;
  }
function cp(e, t, n, r, i, l, s, a, o) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var wr = !1,
  ji = null,
  Bi = !1,
  Rs = null,
  dp = {
    onError: function (e) {
      (wr = !0), (ji = e);
    },
  };
function fp(e, t, n, r, i, l, s, a, o) {
  (wr = !1), (ji = null), cp.apply(dp, arguments);
}
function pp(e, t, n, r, i, l, s, a, o) {
  if ((fp.apply(this, arguments), wr)) {
    if (wr) {
      var u = ji;
      (wr = !1), (ji = null);
    } else throw Error(P(198));
    Bi || ((Bi = !0), (Rs = u));
  }
}
function Cn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Oc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Aa(e) {
  if (Cn(e) !== e) throw Error(P(188));
}
function hp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Cn(e)), t === null)) throw Error(P(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var l = i.alternate;
    if (l === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === l.child) {
      for (l = i.child; l; ) {
        if (l === n) return Aa(i), e;
        if (l === r) return Aa(i), t;
        l = l.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return) (n = i), (r = l);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = l);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = l);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = l.child; a; ) {
          if (a === n) {
            (s = !0), (n = l), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = l), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function Nc(e) {
  return (e = hp(e)), e !== null ? $c(e) : null;
}
function $c(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = $c(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ic = et.unstable_scheduleCallback,
  Ra = et.unstable_cancelCallback,
  mp = et.unstable_shouldYield,
  gp = et.unstable_requestPaint,
  me = et.unstable_now,
  vp = et.unstable_getCurrentPriorityLevel,
  No = et.unstable_ImmediatePriority,
  Ac = et.unstable_UserBlockingPriority,
  bi = et.unstable_NormalPriority,
  yp = et.unstable_LowPriority,
  Rc = et.unstable_IdlePriority,
  cl = null,
  xt = null;
function Sp(e) {
  if (xt && typeof xt.onCommitFiberRoot == "function")
    try {
      xt.onCommitFiberRoot(cl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var mt = Math.clz32 ? Math.clz32 : Cp,
  wp = Math.log,
  xp = Math.LN2;
function Cp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((wp(e) / xp) | 0)) | 0;
}
var si = 64,
  oi = 4194304;
function mr(e) {
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
function Vi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    l = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = mr(a)) : ((l &= s), l !== 0 && (r = mr(l)));
  } else (s = n & ~i), s !== 0 ? (r = mr(s)) : l !== 0 && (r = mr(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    (t & i) === 0 &&
    ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))
  )
    return t;
  if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - mt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Ep(e, t) {
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
function kp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var s = 31 - mt(l),
      a = 1 << s,
      o = i[s];
    o === -1
      ? ((a & n) === 0 || (a & r) !== 0) && (i[s] = Ep(a, t))
      : o <= t && (e.expiredLanes |= a),
      (l &= ~a);
  }
}
function Ds(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Dc() {
  var e = si;
  return (si <<= 1), (si & 4194240) === 0 && (si = 64), e;
}
function Gl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Xr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - mt(t)),
    (e[t] = n);
}
function Tp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - mt(n),
      l = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
  }
}
function $o(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - mt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var te = 0;
function Fc(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var jc,
  Io,
  Bc,
  bc,
  Vc,
  Fs = !1,
  ai = [],
  Ut = null,
  Yt = null,
  Qt = null,
  $r = new Map(),
  Ir = new Map(),
  Bt = [],
  Pp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Da(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ut = null;
      break;
    case "dragenter":
    case "dragleave":
      Yt = null;
      break;
    case "mouseover":
    case "mouseout":
      Qt = null;
      break;
    case "pointerover":
    case "pointerout":
      $r.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ir.delete(t.pointerId);
  }
}
function lr(e, t, n, r, i, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i],
      }),
      t !== null && ((t = qr(t)), t !== null && Io(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function _p(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Ut = lr(Ut, e, t, n, r, i)), !0;
    case "dragenter":
      return (Yt = lr(Yt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Qt = lr(Qt, e, t, n, r, i)), !0;
    case "pointerover":
      var l = i.pointerId;
      return $r.set(l, lr($r.get(l) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (l = i.pointerId), Ir.set(l, lr(Ir.get(l) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Hc(e) {
  var t = cn(e.target);
  if (t !== null) {
    var n = Cn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Oc(n)), t !== null)) {
          (e.blockedOn = t),
            Vc(e.priority, function () {
              Bc(n);
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
function _i(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = js(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ($s = r), n.target.dispatchEvent(r), ($s = null);
    } else return (t = qr(n)), t !== null && Io(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Fa(e, t, n) {
  _i(e) && n.delete(t);
}
function Mp() {
  (Fs = !1),
    Ut !== null && _i(Ut) && (Ut = null),
    Yt !== null && _i(Yt) && (Yt = null),
    Qt !== null && _i(Qt) && (Qt = null),
    $r.forEach(Fa),
    Ir.forEach(Fa);
}
function sr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Fs ||
      ((Fs = !0),
      et.unstable_scheduleCallback(et.unstable_NormalPriority, Mp)));
}
function Ar(e) {
  function t(i) {
    return sr(i, e);
  }
  if (0 < ai.length) {
    sr(ai[0], e);
    for (var n = 1; n < ai.length; n++) {
      var r = ai[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ut !== null && sr(Ut, e),
      Yt !== null && sr(Yt, e),
      Qt !== null && sr(Qt, e),
      $r.forEach(t),
      Ir.forEach(t),
      n = 0;
    n < Bt.length;
    n++
  )
    (r = Bt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Bt.length && ((n = Bt[0]), n.blockedOn === null); )
    Hc(n), n.blockedOn === null && Bt.shift();
}
var Bn = At.ReactCurrentBatchConfig,
  Hi = !0;
function zp(e, t, n, r) {
  var i = te,
    l = Bn.transition;
  Bn.transition = null;
  try {
    (te = 1), Ao(e, t, n, r);
  } finally {
    (te = i), (Bn.transition = l);
  }
}
function Lp(e, t, n, r) {
  var i = te,
    l = Bn.transition;
  Bn.transition = null;
  try {
    (te = 4), Ao(e, t, n, r);
  } finally {
    (te = i), (Bn.transition = l);
  }
}
function Ao(e, t, n, r) {
  if (Hi) {
    var i = js(e, t, n, r);
    if (i === null) ts(e, t, r, Wi, n), Da(e, r);
    else if (_p(i, e, t, n, r)) r.stopPropagation();
    else if ((Da(e, r), t & 4 && -1 < Pp.indexOf(e))) {
      for (; i !== null; ) {
        var l = qr(i);
        if (
          (l !== null && jc(l),
          (l = js(e, t, n, r)),
          l === null && ts(e, t, r, Wi, n),
          l === i)
        )
          break;
        i = l;
      }
      i !== null && r.stopPropagation();
    } else ts(e, t, r, null, n);
  }
}
var Wi = null;
function js(e, t, n, r) {
  if (((Wi = null), (e = Oo(r)), (e = cn(e)), e !== null))
    if (((t = Cn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Oc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Wi = e), null;
}
function Wc(e) {
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
      switch (vp()) {
        case No:
          return 1;
        case Ac:
          return 4;
        case bi:
        case yp:
          return 16;
        case Rc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Vt = null,
  Ro = null,
  Mi = null;
function Gc() {
  if (Mi) return Mi;
  var e,
    t = Ro,
    n = t.length,
    r,
    i = "value" in Vt ? Vt.value : Vt.textContent,
    l = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[l - r]; r++);
  return (Mi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function zi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ui() {
  return !0;
}
function ja() {
  return !1;
}
function nt(e) {
  function t(n, r, i, l, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? ui
        : ja),
      (this.isPropagationStopped = ja),
      this
    );
  }
  return (
    ce(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ui));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ui));
      },
      persist: function () {},
      isPersistent: ui,
    }),
    t
  );
}
var Jn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Do = nt(Jn),
  Kr = ce({}, Jn, { view: 0, detail: 0 }),
  Op = nt(Kr),
  Ul,
  Yl,
  or,
  dl = ce({}, Kr, {
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
    getModifierState: Fo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== or &&
            (or && e.type === "mousemove"
              ? ((Ul = e.screenX - or.screenX), (Yl = e.screenY - or.screenY))
              : (Yl = Ul = 0),
            (or = e)),
          Ul);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Yl;
    },
  }),
  Ba = nt(dl),
  Np = ce({}, dl, { dataTransfer: 0 }),
  $p = nt(Np),
  Ip = ce({}, Kr, { relatedTarget: 0 }),
  Ql = nt(Ip),
  Ap = ce({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Rp = nt(Ap),
  Dp = ce({}, Jn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Fp = nt(Dp),
  jp = ce({}, Jn, { data: 0 }),
  ba = nt(jp),
  Bp = {
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
    MozPrintableKey: "Unidentified",
  },
  bp = {
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
    224: "Meta",
  },
  Vp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Hp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Vp[e]) ? !!t[e] : !1;
}
function Fo() {
  return Hp;
}
var Wp = ce({}, Kr, {
    key: function (e) {
      if (e.key) {
        var t = Bp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = zi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? bp[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fo,
    charCode: function (e) {
      return e.type === "keypress" ? zi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? zi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Gp = nt(Wp),
  Up = ce({}, dl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Va = nt(Up),
  Yp = ce({}, Kr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fo,
  }),
  Qp = nt(Yp),
  Xp = ce({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Kp = nt(Xp),
  qp = ce({}, dl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Zp = nt(qp),
  Jp = [9, 13, 27, 32],
  jo = Ot && "CompositionEvent" in window,
  xr = null;
Ot && "documentMode" in document && (xr = document.documentMode);
var eh = Ot && "TextEvent" in window && !xr,
  Uc = Ot && (!jo || (xr && 8 < xr && 11 >= xr)),
  Ha = String.fromCharCode(32),
  Wa = !1;
function Yc(e, t) {
  switch (e) {
    case "keyup":
      return Jp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Qc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Pn = !1;
function th(e, t) {
  switch (e) {
    case "compositionend":
      return Qc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Wa = !0), Ha);
    case "textInput":
      return (e = t.data), e === Ha && Wa ? null : e;
    default:
      return null;
  }
}
function nh(e, t) {
  if (Pn)
    return e === "compositionend" || (!jo && Yc(e, t))
      ? ((e = Gc()), (Mi = Ro = Vt = null), (Pn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Uc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var rh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ga(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!rh[e.type] : t === "textarea";
}
function Xc(e, t, n, r) {
  Pc(r),
    (t = Gi(t, "onChange")),
    0 < t.length &&
      ((n = new Do("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Cr = null,
  Rr = null;
function ih(e) {
  sd(e, 0);
}
function fl(e) {
  var t = zn(e);
  if (Sc(t)) return e;
}
function lh(e, t) {
  if (e === "change") return t;
}
var Kc = !1;
if (Ot) {
  var Xl;
  if (Ot) {
    var Kl = "oninput" in document;
    if (!Kl) {
      var Ua = document.createElement("div");
      Ua.setAttribute("oninput", "return;"),
        (Kl = typeof Ua.oninput == "function");
    }
    Xl = Kl;
  } else Xl = !1;
  Kc = Xl && (!document.documentMode || 9 < document.documentMode);
}
function Ya() {
  Cr && (Cr.detachEvent("onpropertychange", qc), (Rr = Cr = null));
}
function qc(e) {
  if (e.propertyName === "value" && fl(Rr)) {
    var t = [];
    Xc(t, Rr, e, Oo(e)), Lc(ih, t);
  }
}
function sh(e, t, n) {
  e === "focusin"
    ? (Ya(), (Cr = t), (Rr = n), Cr.attachEvent("onpropertychange", qc))
    : e === "focusout" && Ya();
}
function oh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return fl(Rr);
}
function ah(e, t) {
  if (e === "click") return fl(t);
}
function uh(e, t) {
  if (e === "input" || e === "change") return fl(t);
}
function ch(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var vt = typeof Object.is == "function" ? Object.is : ch;
function Dr(e, t) {
  if (vt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!xs.call(t, i) || !vt(e[i], t[i])) return !1;
  }
  return !0;
}
function Qa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xa(e, t) {
  var n = Qa(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
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
    n = Qa(n);
  }
}
function Zc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Zc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Jc() {
  for (var e = window, t = Fi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Fi(e.document);
  }
  return t;
}
function Bo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function dh(e) {
  var t = Jc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Zc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Bo(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          l = Math.min(r.start, i);
        (r = r.end === void 0 ? l : Math.min(r.end, i)),
          !e.extend && l > r && ((i = r), (r = l), (l = i)),
          (i = Xa(n, l));
        var s = Xa(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var fh = Ot && "documentMode" in document && 11 >= document.documentMode,
  _n = null,
  Bs = null,
  Er = null,
  bs = !1;
function Ka(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  bs ||
    _n == null ||
    _n !== Fi(r) ||
    ((r = _n),
    "selectionStart" in r && Bo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Er && Dr(Er, r)) ||
      ((Er = r),
      (r = Gi(Bs, "onSelect")),
      0 < r.length &&
        ((t = new Do("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = _n))));
}
function ci(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Mn = {
    animationend: ci("Animation", "AnimationEnd"),
    animationiteration: ci("Animation", "AnimationIteration"),
    animationstart: ci("Animation", "AnimationStart"),
    transitionend: ci("Transition", "TransitionEnd"),
  },
  ql = {},
  ed = {};
Ot &&
  ((ed = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Mn.animationend.animation,
    delete Mn.animationiteration.animation,
    delete Mn.animationstart.animation),
  "TransitionEvent" in window || delete Mn.transitionend.transition);
function pl(e) {
  if (ql[e]) return ql[e];
  if (!Mn[e]) return e;
  var t = Mn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ed) return (ql[e] = t[n]);
  return e;
}
var td = pl("animationend"),
  nd = pl("animationiteration"),
  rd = pl("animationstart"),
  id = pl("transitionend"),
  ld = new Map(),
  qa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function ln(e, t) {
  ld.set(e, t), xn(t, [e]);
}
for (var Zl = 0; Zl < qa.length; Zl++) {
  var Jl = qa[Zl],
    ph = Jl.toLowerCase(),
    hh = Jl[0].toUpperCase() + Jl.slice(1);
  ln(ph, "on" + hh);
}
ln(td, "onAnimationEnd");
ln(nd, "onAnimationIteration");
ln(rd, "onAnimationStart");
ln("dblclick", "onDoubleClick");
ln("focusin", "onFocus");
ln("focusout", "onBlur");
ln(id, "onTransitionEnd");
Hn("onMouseEnter", ["mouseout", "mouseover"]);
Hn("onMouseLeave", ["mouseout", "mouseover"]);
Hn("onPointerEnter", ["pointerout", "pointerover"]);
Hn("onPointerLeave", ["pointerout", "pointerover"]);
xn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
xn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
xn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
xn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
xn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
xn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var gr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  mh = new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));
function Za(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), pp(r, t, void 0, e), (e.currentTarget = null);
}
function sd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            o = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), o !== l && i.isPropagationStopped())) break e;
          Za(i, a, u), (l = o);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (o = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            o !== l && i.isPropagationStopped())
          )
            break e;
          Za(i, a, u), (l = o);
        }
    }
  }
  if (Bi) throw ((e = Rs), (Bi = !1), (Rs = null), e);
}
function le(e, t) {
  var n = t[Us];
  n === void 0 && (n = t[Us] = new Set());
  var r = e + "__bubble";
  n.has(r) || (od(t, e, 2, !1), n.add(r));
}
function es(e, t, n) {
  var r = 0;
  t && (r |= 4), od(n, e, r, t);
}
var di = "_reactListening" + Math.random().toString(36).slice(2);
function Fr(e) {
  if (!e[di]) {
    (e[di] = !0),
      hc.forEach(function (n) {
        n !== "selectionchange" && (mh.has(n) || es(n, !1, e), es(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[di] || ((t[di] = !0), es("selectionchange", !1, t));
  }
}
function od(e, t, n, r) {
  switch (Wc(t)) {
    case 1:
      var i = zp;
      break;
    case 4:
      i = Lp;
      break;
    default:
      i = Ao;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !As ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function ts(e, t, n, r, i) {
  var l = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var o = s.tag;
            if (
              (o === 3 || o === 4) &&
              ((o = s.stateNode.containerInfo),
              o === i || (o.nodeType === 8 && o.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = cn(a)), s === null)) return;
          if (((o = s.tag), o === 5 || o === 6)) {
            r = l = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Lc(function () {
    var u = l,
      c = Oo(n),
      p = [];
    e: {
      var f = ld.get(e);
      if (f !== void 0) {
        var g = Do,
          v = e;
        switch (e) {
          case "keypress":
            if (zi(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Gp;
            break;
          case "focusin":
            (v = "focus"), (g = Ql);
            break;
          case "focusout":
            (v = "blur"), (g = Ql);
            break;
          case "beforeblur":
          case "afterblur":
            g = Ql;
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
            g = Ba;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = $p;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Qp;
            break;
          case td:
          case nd:
          case rd:
            g = Rp;
            break;
          case id:
            g = Kp;
            break;
          case "scroll":
            g = Op;
            break;
          case "wheel":
            g = Zp;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Fp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Va;
        }
        var y = (t & 4) !== 0,
          w = !y && e === "scroll",
          d = y ? (f !== null ? f + "Capture" : null) : f;
        y = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var S = m.stateNode;
          if (
            (m.tag === 5 &&
              S !== null &&
              ((m = S),
              d !== null && ((S = Nr(h, d)), S != null && y.push(jr(h, S, m)))),
            w)
          )
            break;
          h = h.return;
        }
        0 < y.length &&
          ((f = new g(f, v, null, n, c)), p.push({ event: f, listeners: y }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          f &&
            n !== $s &&
            (v = n.relatedTarget || n.fromElement) &&
            (cn(v) || v[Nt]))
        )
          break e;
        if (
          (g || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          g
            ? ((v = n.relatedTarget || n.toElement),
              (g = u),
              (v = v ? cn(v) : null),
              v !== null &&
                ((w = Cn(v)), v !== w || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((g = null), (v = u)),
          g !== v)
        ) {
          if (
            ((y = Ba),
            (S = "onMouseLeave"),
            (d = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Va),
              (S = "onPointerLeave"),
              (d = "onPointerEnter"),
              (h = "pointer")),
            (w = g == null ? f : zn(g)),
            (m = v == null ? f : zn(v)),
            (f = new y(S, h + "leave", g, n, c)),
            (f.target = w),
            (f.relatedTarget = m),
            (S = null),
            cn(c) === u &&
              ((y = new y(d, h + "enter", v, n, c)),
              (y.target = m),
              (y.relatedTarget = w),
              (S = y)),
            (w = S),
            g && v)
          )
            t: {
              for (y = g, d = v, h = 0, m = y; m; m = En(m)) h++;
              for (m = 0, S = d; S; S = En(S)) m++;
              for (; 0 < h - m; ) (y = En(y)), h--;
              for (; 0 < m - h; ) (d = En(d)), m--;
              for (; h--; ) {
                if (y === d || (d !== null && y === d.alternate)) break t;
                (y = En(y)), (d = En(d));
              }
              y = null;
            }
          else y = null;
          g !== null && Ja(p, f, g, y, !1),
            v !== null && w !== null && Ja(p, w, v, y, !0);
        }
      }
      e: {
        if (
          ((f = u ? zn(u) : window),
          (g = f.nodeName && f.nodeName.toLowerCase()),
          g === "select" || (g === "input" && f.type === "file"))
        )
          var E = lh;
        else if (Ga(f))
          if (Kc) E = uh;
          else {
            E = oh;
            var T = sh;
          }
        else
          (g = f.nodeName) &&
            g.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (E = ah);
        if (E && (E = E(e, u))) {
          Xc(p, E, n, c);
          break e;
        }
        T && T(e, f, u),
          e === "focusout" &&
            (T = f._wrapperState) &&
            T.controlled &&
            f.type === "number" &&
            Ms(f, "number", f.value);
      }
      switch (((T = u ? zn(u) : window), e)) {
        case "focusin":
          (Ga(T) || T.contentEditable === "true") &&
            ((_n = T), (Bs = u), (Er = null));
          break;
        case "focusout":
          Er = Bs = _n = null;
          break;
        case "mousedown":
          bs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (bs = !1), Ka(p, n, c);
          break;
        case "selectionchange":
          if (fh) break;
        case "keydown":
        case "keyup":
          Ka(p, n, c);
      }
      var M;
      if (jo)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        Pn
          ? Yc(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (Uc &&
          n.locale !== "ko" &&
          (Pn || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && Pn && (M = Gc())
            : ((Vt = c),
              (Ro = "value" in Vt ? Vt.value : Vt.textContent),
              (Pn = !0))),
        (T = Gi(u, k)),
        0 < T.length &&
          ((k = new ba(k, e, null, n, c)),
          p.push({ event: k, listeners: T }),
          M ? (k.data = M) : ((M = Qc(n)), M !== null && (k.data = M)))),
        (M = eh ? th(e, n) : nh(e, n)) &&
          ((u = Gi(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new ba("onBeforeInput", "beforeinput", null, n, c)),
            p.push({ event: c, listeners: u }),
            (c.data = M)));
    }
    sd(p, t);
  });
}
function jr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Gi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      l = i.stateNode;
    i.tag === 5 &&
      l !== null &&
      ((i = l),
      (l = Nr(e, n)),
      l != null && r.unshift(jr(e, l, i)),
      (l = Nr(e, t)),
      l != null && r.push(jr(e, l, i))),
      (e = e.return);
  }
  return r;
}
function En(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ja(e, t, n, r, i) {
  for (var l = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      o = a.alternate,
      u = a.stateNode;
    if (o !== null && o === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((o = Nr(n, l)), o != null && s.unshift(jr(n, o, a)))
        : i || ((o = Nr(n, l)), o != null && s.push(jr(n, o, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var gh = /\r\n?/g,
  vh = /\u0000|\uFFFD/g;
function eu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      gh,
      `
`
    )
    .replace(vh, "");
}
function fi(e, t, n) {
  if (((t = eu(t)), eu(e) !== t && n)) throw Error(P(425));
}
function Ui() {}
var Vs = null,
  Hs = null;
function Ws(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Gs = typeof setTimeout == "function" ? setTimeout : void 0,
  yh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  tu = typeof Promise == "function" ? Promise : void 0,
  Sh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof tu < "u"
      ? function (e) {
          return tu.resolve(null).then(e).catch(wh);
        }
      : Gs;
function wh(e) {
  setTimeout(function () {
    throw e;
  });
}
function ns(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Ar(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Ar(t);
}
function Xt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function nu(e) {
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
var er = Math.random().toString(36).slice(2),
  wt = "__reactFiber$" + er,
  Br = "__reactProps$" + er,
  Nt = "__reactContainer$" + er,
  Us = "__reactEvents$" + er,
  xh = "__reactListeners$" + er,
  Ch = "__reactHandles$" + er;
function cn(e) {
  var t = e[wt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Nt] || n[wt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = nu(e); e !== null; ) {
          if ((n = e[wt])) return n;
          e = nu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function qr(e) {
  return (
    (e = e[wt] || e[Nt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function zn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function hl(e) {
  return e[Br] || null;
}
var Ys = [],
  Ln = -1;
function sn(e) {
  return { current: e };
}
function se(e) {
  0 > Ln || ((e.current = Ys[Ln]), (Ys[Ln] = null), Ln--);
}
function ie(e, t) {
  Ln++, (Ys[Ln] = e.current), (e.current = t);
}
var rn = {},
  Re = sn(rn),
  Ge = sn(!1),
  mn = rn;
function Wn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return rn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    l;
  for (l in n) i[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ue(e) {
  return (e = e.childContextTypes), e != null;
}
function Yi() {
  se(Ge), se(Re);
}
function ru(e, t, n) {
  if (Re.current !== rn) throw Error(P(168));
  ie(Re, t), ie(Ge, n);
}
function ad(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(P(108, sp(e) || "Unknown", i));
  return ce({}, n, r);
}
function Qi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || rn),
    (mn = Re.current),
    ie(Re, e),
    ie(Ge, Ge.current),
    !0
  );
}
function iu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n
    ? ((e = ad(e, t, mn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      se(Ge),
      se(Re),
      ie(Re, e))
    : se(Ge),
    ie(Ge, n);
}
var Pt = null,
  ml = !1,
  rs = !1;
function ud(e) {
  Pt === null ? (Pt = [e]) : Pt.push(e);
}
function Eh(e) {
  (ml = !0), ud(e);
}
function on() {
  if (!rs && Pt !== null) {
    rs = !0;
    var e = 0,
      t = te;
    try {
      var n = Pt;
      for (te = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Pt = null), (ml = !1);
    } catch (i) {
      throw (Pt !== null && (Pt = Pt.slice(e + 1)), Ic(No, on), i);
    } finally {
      (te = t), (rs = !1);
    }
  }
  return null;
}
var On = [],
  Nn = 0,
  Xi = null,
  Ki = 0,
  it = [],
  lt = 0,
  gn = null,
  _t = 1,
  Mt = "";
function an(e, t) {
  (On[Nn++] = Ki), (On[Nn++] = Xi), (Xi = e), (Ki = t);
}
function cd(e, t, n) {
  (it[lt++] = _t), (it[lt++] = Mt), (it[lt++] = gn), (gn = e);
  var r = _t;
  e = Mt;
  var i = 32 - mt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var l = 32 - mt(t) + i;
  if (30 < l) {
    var s = i - (i % 5);
    (l = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (_t = (1 << (32 - mt(t) + i)) | (n << i) | r),
      (Mt = l + e);
  } else (_t = (1 << l) | (n << i) | r), (Mt = e);
}
function bo(e) {
  e.return !== null && (an(e, 1), cd(e, 1, 0));
}
function Vo(e) {
  for (; e === Xi; )
    (Xi = On[--Nn]), (On[Nn] = null), (Ki = On[--Nn]), (On[Nn] = null);
  for (; e === gn; )
    (gn = it[--lt]),
      (it[lt] = null),
      (Mt = it[--lt]),
      (it[lt] = null),
      (_t = it[--lt]),
      (it[lt] = null);
}
var Je = null,
  Ze = null,
  oe = !1,
  ht = null;
function dd(e, t) {
  var n = st(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function lu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Je = e), (Ze = Xt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Je = e), (Ze = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = gn !== null ? { id: _t, overflow: Mt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = st(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Je = e),
            (Ze = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Qs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Xs(e) {
  if (oe) {
    var t = Ze;
    if (t) {
      var n = t;
      if (!lu(e, t)) {
        if (Qs(e)) throw Error(P(418));
        t = Xt(n.nextSibling);
        var r = Je;
        t && lu(e, t)
          ? dd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (oe = !1), (Je = e));
      }
    } else {
      if (Qs(e)) throw Error(P(418));
      (e.flags = (e.flags & -4097) | 2), (oe = !1), (Je = e);
    }
  }
}
function su(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Je = e;
}
function pi(e) {
  if (e !== Je) return !1;
  if (!oe) return su(e), (oe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ws(e.type, e.memoizedProps))),
    t && (t = Ze))
  ) {
    if (Qs(e)) throw (fd(), Error(P(418)));
    for (; t; ) dd(e, t), (t = Xt(t.nextSibling));
  }
  if ((su(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ze = Xt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ze = null;
    }
  } else Ze = Je ? Xt(e.stateNode.nextSibling) : null;
  return !0;
}
function fd() {
  for (var e = Ze; e; ) e = Xt(e.nextSibling);
}
function Gn() {
  (Ze = Je = null), (oe = !1);
}
function Ho(e) {
  ht === null ? (ht = [e]) : ht.push(e);
}
var kh = At.ReactCurrentBatchConfig;
function ft(e, t) {
  if (e && e.defaultProps) {
    (t = ce({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var qi = sn(null),
  Zi = null,
  $n = null,
  Wo = null;
function Go() {
  Wo = $n = Zi = null;
}
function Uo(e) {
  var t = qi.current;
  se(qi), (e._currentValue = t);
}
function Ks(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function bn(e, t) {
  (Zi = e),
    (Wo = $n = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (We = !0), (e.firstContext = null));
}
function at(e) {
  var t = e._currentValue;
  if (Wo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), $n === null)) {
      if (Zi === null) throw Error(P(308));
      ($n = e), (Zi.dependencies = { lanes: 0, firstContext: e });
    } else $n = $n.next = e;
  return t;
}
var dn = null;
function Yo(e) {
  dn === null ? (dn = [e]) : dn.push(e);
}
function pd(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Yo(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    $t(e, r)
  );
}
function $t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var jt = !1;
function Qo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function hd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Lt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Kt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), (Y & 2) !== 0)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      $t(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Yo(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    $t(e, n)
  );
}
function Li(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), $o(e, n);
  }
}
function ou(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (i = l = s) : (l = l.next = s), (n = n.next);
      } while (n !== null);
      l === null ? (i = l = t) : (l = l.next = t);
    } else i = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ji(e, t, n, r) {
  var i = e.updateQueue;
  jt = !1;
  var l = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var o = a,
      u = o.next;
    (o.next = null), s === null ? (l = u) : (s.next = u), (s = o);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = o)));
  }
  if (l !== null) {
    var p = i.baseState;
    (s = 0), (c = u = o = null), (a = l);
    do {
      var f = a.lane,
        g = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            y = a;
          switch (((f = t), (g = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == "function")) {
                p = v.call(g, p, f);
                break e;
              }
              p = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = y.payload),
                (f = typeof v == "function" ? v.call(g, p, f) : v),
                f == null)
              )
                break e;
              p = ce({}, p, f);
              break e;
            case 2:
              jt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [a]) : f.push(a));
      } else
        (g = {
          eventTime: g,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (o = p)) : (c = c.next = g),
          (s |= f);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (o = p),
      (i.baseState = o),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else l === null && (i.shared.lanes = 0);
    (yn |= s), (e.lanes = s), (e.memoizedState = p);
  }
}
function au(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(P(191, i));
        i.call(r);
      }
    }
}
var md = new pc.Component().refs;
function qs(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ce({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var gl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Cn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = je(),
      i = Zt(e),
      l = Lt(r, i);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = Kt(e, l, i)),
      t !== null && (gt(t, e, i, r), Li(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = je(),
      i = Zt(e),
      l = Lt(r, i);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = Kt(e, l, i)),
      t !== null && (gt(t, e, i, r), Li(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = je(),
      r = Zt(e),
      i = Lt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Kt(e, i, r)),
      t !== null && (gt(t, e, r, n), Li(t, e, r));
  },
};
function uu(e, t, n, r, i, l, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Dr(n, r) || !Dr(i, l)
      : !0
  );
}
function gd(e, t, n) {
  var r = !1,
    i = rn,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = at(l))
      : ((i = Ue(t) ? mn : Re.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? Wn(e, i) : rn)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = gl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function cu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && gl.enqueueReplaceState(t, t.state, null);
}
function Zs(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = md), Qo(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (i.context = at(l))
    : ((l = Ue(t) ? mn : Re.current), (i.context = Wn(e, l))),
    (i.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (qs(e, t, l, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && gl.enqueueReplaceState(i, i.state, null),
      Ji(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ar(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var i = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            a === md && (a = i.refs = {}),
              s === null ? delete a[l] : (a[l] = s);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function hi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      P(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function du(e) {
  var t = e._init;
  return t(e._payload);
}
function vd(e) {
  function t(d, h) {
    if (e) {
      var m = d.deletions;
      m === null ? ((d.deletions = [h]), (d.flags |= 16)) : m.push(h);
    }
  }
  function n(d, h) {
    if (!e) return null;
    for (; h !== null; ) t(d, h), (h = h.sibling);
    return null;
  }
  function r(d, h) {
    for (d = new Map(); h !== null; )
      h.key !== null ? d.set(h.key, h) : d.set(h.index, h), (h = h.sibling);
    return d;
  }
  function i(d, h) {
    return (d = Jt(d, h)), (d.index = 0), (d.sibling = null), d;
  }
  function l(d, h, m) {
    return (
      (d.index = m),
      e
        ? ((m = d.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((d.flags |= 2), h) : m)
            : ((d.flags |= 2), h))
        : ((d.flags |= 1048576), h)
    );
  }
  function s(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function a(d, h, m, S) {
    return h === null || h.tag !== 6
      ? ((h = cs(m, d.mode, S)), (h.return = d), h)
      : ((h = i(h, m)), (h.return = d), h);
  }
  function o(d, h, m, S) {
    var E = m.type;
    return E === Tn
      ? c(d, h, m.props.children, S, m.key)
      : h !== null &&
        (h.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Ft &&
            du(E) === h.type))
      ? ((S = i(h, m.props)), (S.ref = ar(d, h, m)), (S.return = d), S)
      : ((S = Ri(m.type, m.key, m.props, null, d.mode, S)),
        (S.ref = ar(d, h, m)),
        (S.return = d),
        S);
  }
  function u(d, h, m, S) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = ds(m, d.mode, S)), (h.return = d), h)
      : ((h = i(h, m.children || [])), (h.return = d), h);
  }
  function c(d, h, m, S, E) {
    return h === null || h.tag !== 7
      ? ((h = hn(m, d.mode, S, E)), (h.return = d), h)
      : ((h = i(h, m)), (h.return = d), h);
  }
  function p(d, h, m) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = cs("" + h, d.mode, m)), (h.return = d), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ri:
          return (
            (m = Ri(h.type, h.key, h.props, null, d.mode, m)),
            (m.ref = ar(d, null, h)),
            (m.return = d),
            m
          );
        case kn:
          return (h = ds(h, d.mode, m)), (h.return = d), h;
        case Ft:
          var S = h._init;
          return p(d, S(h._payload), m);
      }
      if (hr(h) || rr(h))
        return (h = hn(h, d.mode, m, null)), (h.return = d), h;
      hi(d, h);
    }
    return null;
  }
  function f(d, h, m, S) {
    var E = h !== null ? h.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return E !== null ? null : a(d, h, "" + m, S);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ri:
          return m.key === E ? o(d, h, m, S) : null;
        case kn:
          return m.key === E ? u(d, h, m, S) : null;
        case Ft:
          return (E = m._init), f(d, h, E(m._payload), S);
      }
      if (hr(m) || rr(m)) return E !== null ? null : c(d, h, m, S, null);
      hi(d, m);
    }
    return null;
  }
  function g(d, h, m, S, E) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (d = d.get(m) || null), a(h, d, "" + S, E);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case ri:
          return (d = d.get(S.key === null ? m : S.key) || null), o(h, d, S, E);
        case kn:
          return (d = d.get(S.key === null ? m : S.key) || null), u(h, d, S, E);
        case Ft:
          var T = S._init;
          return g(d, h, m, T(S._payload), E);
      }
      if (hr(S) || rr(S)) return (d = d.get(m) || null), c(h, d, S, E, null);
      hi(h, S);
    }
    return null;
  }
  function v(d, h, m, S) {
    for (
      var E = null, T = null, M = h, k = (h = 0), V = null;
      M !== null && k < m.length;
      k++
    ) {
      M.index > k ? ((V = M), (M = null)) : (V = M.sibling);
      var _ = f(d, M, m[k], S);
      if (_ === null) {
        M === null && (M = V);
        break;
      }
      e && M && _.alternate === null && t(d, M),
        (h = l(_, h, k)),
        T === null ? (E = _) : (T.sibling = _),
        (T = _),
        (M = V);
    }
    if (k === m.length) return n(d, M), oe && an(d, k), E;
    if (M === null) {
      for (; k < m.length; k++)
        (M = p(d, m[k], S)),
          M !== null &&
            ((h = l(M, h, k)), T === null ? (E = M) : (T.sibling = M), (T = M));
      return oe && an(d, k), E;
    }
    for (M = r(d, M); k < m.length; k++)
      (V = g(M, d, k, m[k], S)),
        V !== null &&
          (e && V.alternate !== null && M.delete(V.key === null ? k : V.key),
          (h = l(V, h, k)),
          T === null ? (E = V) : (T.sibling = V),
          (T = V));
    return (
      e &&
        M.forEach(function (D) {
          return t(d, D);
        }),
      oe && an(d, k),
      E
    );
  }
  function y(d, h, m, S) {
    var E = rr(m);
    if (typeof E != "function") throw Error(P(150));
    if (((m = E.call(m)), m == null)) throw Error(P(151));
    for (
      var T = (E = null), M = h, k = (h = 0), V = null, _ = m.next();
      M !== null && !_.done;
      k++, _ = m.next()
    ) {
      M.index > k ? ((V = M), (M = null)) : (V = M.sibling);
      var D = f(d, M, _.value, S);
      if (D === null) {
        M === null && (M = V);
        break;
      }
      e && M && D.alternate === null && t(d, M),
        (h = l(D, h, k)),
        T === null ? (E = D) : (T.sibling = D),
        (T = D),
        (M = V);
    }
    if (_.done) return n(d, M), oe && an(d, k), E;
    if (M === null) {
      for (; !_.done; k++, _ = m.next())
        (_ = p(d, _.value, S)),
          _ !== null &&
            ((h = l(_, h, k)), T === null ? (E = _) : (T.sibling = _), (T = _));
      return oe && an(d, k), E;
    }
    for (M = r(d, M); !_.done; k++, _ = m.next())
      (_ = g(M, d, k, _.value, S)),
        _ !== null &&
          (e && _.alternate !== null && M.delete(_.key === null ? k : _.key),
          (h = l(_, h, k)),
          T === null ? (E = _) : (T.sibling = _),
          (T = _));
    return (
      e &&
        M.forEach(function (F) {
          return t(d, F);
        }),
      oe && an(d, k),
      E
    );
  }
  function w(d, h, m, S) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Tn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case ri:
          e: {
            for (var E = m.key, T = h; T !== null; ) {
              if (T.key === E) {
                if (((E = m.type), E === Tn)) {
                  if (T.tag === 7) {
                    n(d, T.sibling),
                      (h = i(T, m.props.children)),
                      (h.return = d),
                      (d = h);
                    break e;
                  }
                } else if (
                  T.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Ft &&
                    du(E) === T.type)
                ) {
                  n(d, T.sibling),
                    (h = i(T, m.props)),
                    (h.ref = ar(d, T, m)),
                    (h.return = d),
                    (d = h);
                  break e;
                }
                n(d, T);
                break;
              } else t(d, T);
              T = T.sibling;
            }
            m.type === Tn
              ? ((h = hn(m.props.children, d.mode, S, m.key)),
                (h.return = d),
                (d = h))
              : ((S = Ri(m.type, m.key, m.props, null, d.mode, S)),
                (S.ref = ar(d, h, m)),
                (S.return = d),
                (d = S));
          }
          return s(d);
        case kn:
          e: {
            for (T = m.key; h !== null; ) {
              if (h.key === T)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  n(d, h.sibling),
                    (h = i(h, m.children || [])),
                    (h.return = d),
                    (d = h);
                  break e;
                } else {
                  n(d, h);
                  break;
                }
              else t(d, h);
              h = h.sibling;
            }
            (h = ds(m, d.mode, S)), (h.return = d), (d = h);
          }
          return s(d);
        case Ft:
          return (T = m._init), w(d, h, T(m._payload), S);
      }
      if (hr(m)) return v(d, h, m, S);
      if (rr(m)) return y(d, h, m, S);
      hi(d, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        h !== null && h.tag === 6
          ? (n(d, h.sibling), (h = i(h, m)), (h.return = d), (d = h))
          : (n(d, h), (h = cs(m, d.mode, S)), (h.return = d), (d = h)),
        s(d))
      : n(d, h);
  }
  return w;
}
var Un = vd(!0),
  yd = vd(!1),
  Zr = {},
  Ct = sn(Zr),
  br = sn(Zr),
  Vr = sn(Zr);
function fn(e) {
  if (e === Zr) throw Error(P(174));
  return e;
}
function Xo(e, t) {
  switch ((ie(Vr, t), ie(br, e), ie(Ct, Zr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ls(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ls(t, e));
  }
  se(Ct), ie(Ct, t);
}
function Yn() {
  se(Ct), se(br), se(Vr);
}
function Sd(e) {
  fn(Vr.current);
  var t = fn(Ct.current),
    n = Ls(t, e.type);
  t !== n && (ie(br, e), ie(Ct, n));
}
function Ko(e) {
  br.current === e && (se(Ct), se(br));
}
var ae = sn(0);
function el(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var is = [];
function qo() {
  for (var e = 0; e < is.length; e++)
    is[e]._workInProgressVersionPrimary = null;
  is.length = 0;
}
var Oi = At.ReactCurrentDispatcher,
  ls = At.ReactCurrentBatchConfig,
  vn = 0,
  ue = null,
  Se = null,
  xe = null,
  tl = !1,
  kr = !1,
  Hr = 0,
  Th = 0;
function $e() {
  throw Error(P(321));
}
function Zo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!vt(e[n], t[n])) return !1;
  return !0;
}
function Jo(e, t, n, r, i, l) {
  if (
    ((vn = l),
    (ue = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Oi.current = e === null || e.memoizedState === null ? zh : Lh),
    (e = n(r, i)),
    kr)
  ) {
    l = 0;
    do {
      if (((kr = !1), (Hr = 0), 25 <= l)) throw Error(P(301));
      (l += 1),
        (xe = Se = null),
        (t.updateQueue = null),
        (Oi.current = Oh),
        (e = n(r, i));
    } while (kr);
  }
  if (
    ((Oi.current = nl),
    (t = Se !== null && Se.next !== null),
    (vn = 0),
    (xe = Se = ue = null),
    (tl = !1),
    t)
  )
    throw Error(P(300));
  return e;
}
function ea() {
  var e = Hr !== 0;
  return (Hr = 0), e;
}
function St() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return xe === null ? (ue.memoizedState = xe = e) : (xe = xe.next = e), xe;
}
function ut() {
  if (Se === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Se.next;
  var t = xe === null ? ue.memoizedState : xe.next;
  if (t !== null) (xe = t), (Se = e);
  else {
    if (e === null) throw Error(P(310));
    (Se = e),
      (e = {
        memoizedState: Se.memoizedState,
        baseState: Se.baseState,
        baseQueue: Se.baseQueue,
        queue: Se.queue,
        next: null,
      }),
      xe === null ? (ue.memoizedState = xe = e) : (xe = xe.next = e);
  }
  return xe;
}
function Wr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ss(e) {
  var t = ut(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = Se,
    i = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = l.next), (l.next = s);
    }
    (r.baseQueue = i = l), (n.pending = null);
  }
  if (i !== null) {
    (l = i.next), (r = r.baseState);
    var a = (s = null),
      o = null,
      u = l;
    do {
      var c = u.lane;
      if ((vn & c) === c)
        o !== null &&
          (o = o.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var p = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        o === null ? ((a = o = p), (s = r)) : (o = o.next = p),
          (ue.lanes |= c),
          (yn |= c);
      }
      u = u.next;
    } while (u !== null && u !== l);
    o === null ? (s = r) : (o.next = a),
      vt(r, t.memoizedState) || (We = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = o),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (l = i.lane), (ue.lanes |= l), (yn |= l), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function os(e) {
  var t = ut(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    l = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (l = e(l, s.action)), (s = s.next);
    while (s !== i);
    vt(l, t.memoizedState) || (We = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function wd() {}
function xd(e, t) {
  var n = ue,
    r = ut(),
    i = t(),
    l = !vt(r.memoizedState, i);
  if (
    (l && ((r.memoizedState = i), (We = !0)),
    (r = r.queue),
    ta(kd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (xe !== null && xe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Gr(9, Ed.bind(null, n, r, i, t), void 0, null),
      Ce === null)
    )
      throw Error(P(349));
    (vn & 30) !== 0 || Cd(n, t, i);
  }
  return i;
}
function Cd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ed(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Td(t) && Pd(e);
}
function kd(e, t, n) {
  return n(function () {
    Td(t) && Pd(e);
  });
}
function Td(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !vt(e, n);
  } catch {
    return !0;
  }
}
function Pd(e) {
  var t = $t(e, 1);
  t !== null && gt(t, e, 1, -1);
}
function fu(e) {
  var t = St();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Mh.bind(null, ue, e)),
    [t.memoizedState, e]
  );
}
function Gr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function _d() {
  return ut().memoizedState;
}
function Ni(e, t, n, r) {
  var i = St();
  (ue.flags |= e),
    (i.memoizedState = Gr(1 | t, n, void 0, r === void 0 ? null : r));
}
function vl(e, t, n, r) {
  var i = ut();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (Se !== null) {
    var s = Se.memoizedState;
    if (((l = s.destroy), r !== null && Zo(r, s.deps))) {
      i.memoizedState = Gr(t, n, l, r);
      return;
    }
  }
  (ue.flags |= e), (i.memoizedState = Gr(1 | t, n, l, r));
}
function pu(e, t) {
  return Ni(8390656, 8, e, t);
}
function ta(e, t) {
  return vl(2048, 8, e, t);
}
function Md(e, t) {
  return vl(4, 2, e, t);
}
function zd(e, t) {
  return vl(4, 4, e, t);
}
function Ld(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Od(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), vl(4, 4, Ld.bind(null, t, e), n)
  );
}
function na() {}
function Nd(e, t) {
  var n = ut();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function $d(e, t) {
  var n = ut();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Id(e, t, n) {
  return (vn & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (We = !0)), (e.memoizedState = n))
    : (vt(n, t) || ((n = Dc()), (ue.lanes |= n), (yn |= n), (e.baseState = !0)),
      t);
}
function Ph(e, t) {
  var n = te;
  (te = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ls.transition;
  ls.transition = {};
  try {
    e(!1), t();
  } finally {
    (te = n), (ls.transition = r);
  }
}
function Ad() {
  return ut().memoizedState;
}
function _h(e, t, n) {
  var r = Zt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Rd(e))
  )
    Dd(t, n);
  else if (((n = pd(e, t, n, r)), n !== null)) {
    var i = je();
    gt(n, e, r, i), Fd(n, t, r);
  }
}
function Mh(e, t, n) {
  var r = Zt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Rd(e)) Dd(t, i);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = l(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), vt(a, s))) {
          var o = t.interleaved;
          o === null
            ? ((i.next = i), Yo(t))
            : ((i.next = o.next), (o.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = pd(e, t, i, r)),
      n !== null && ((i = je()), gt(n, e, r, i), Fd(n, t, r));
  }
}
function Rd(e) {
  var t = e.alternate;
  return e === ue || (t !== null && t === ue);
}
function Dd(e, t) {
  kr = tl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Fd(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), $o(e, n);
  }
}
var nl = {
    readContext: at,
    useCallback: $e,
    useContext: $e,
    useEffect: $e,
    useImperativeHandle: $e,
    useInsertionEffect: $e,
    useLayoutEffect: $e,
    useMemo: $e,
    useReducer: $e,
    useRef: $e,
    useState: $e,
    useDebugValue: $e,
    useDeferredValue: $e,
    useTransition: $e,
    useMutableSource: $e,
    useSyncExternalStore: $e,
    useId: $e,
    unstable_isNewReconciler: !1,
  },
  zh = {
    readContext: at,
    useCallback: function (e, t) {
      return (St().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: at,
    useEffect: pu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ni(4194308, 4, Ld.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ni(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ni(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = St();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = St();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = _h.bind(null, ue, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = St();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: fu,
    useDebugValue: na,
    useDeferredValue: function (e) {
      return (St().memoizedState = e);
    },
    useTransition: function () {
      var e = fu(!1),
        t = e[0];
      return (e = Ph.bind(null, e[1])), (St().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ue,
        i = St();
      if (oe) {
        if (n === void 0) throw Error(P(407));
        n = n();
      } else {
        if (((n = t()), Ce === null)) throw Error(P(349));
        (vn & 30) !== 0 || Cd(r, t, n);
      }
      i.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (i.queue = l),
        pu(kd.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        Gr(9, Ed.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = St(),
        t = Ce.identifierPrefix;
      if (oe) {
        var n = Mt,
          r = _t;
        (n = (r & ~(1 << (32 - mt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Hr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Th++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Lh = {
    readContext: at,
    useCallback: Nd,
    useContext: at,
    useEffect: ta,
    useImperativeHandle: Od,
    useInsertionEffect: Md,
    useLayoutEffect: zd,
    useMemo: $d,
    useReducer: ss,
    useRef: _d,
    useState: function () {
      return ss(Wr);
    },
    useDebugValue: na,
    useDeferredValue: function (e) {
      var t = ut();
      return Id(t, Se.memoizedState, e);
    },
    useTransition: function () {
      var e = ss(Wr)[0],
        t = ut().memoizedState;
      return [e, t];
    },
    useMutableSource: wd,
    useSyncExternalStore: xd,
    useId: Ad,
    unstable_isNewReconciler: !1,
  },
  Oh = {
    readContext: at,
    useCallback: Nd,
    useContext: at,
    useEffect: ta,
    useImperativeHandle: Od,
    useInsertionEffect: Md,
    useLayoutEffect: zd,
    useMemo: $d,
    useReducer: os,
    useRef: _d,
    useState: function () {
      return os(Wr);
    },
    useDebugValue: na,
    useDeferredValue: function (e) {
      var t = ut();
      return Se === null ? (t.memoizedState = e) : Id(t, Se.memoizedState, e);
    },
    useTransition: function () {
      var e = os(Wr)[0],
        t = ut().memoizedState;
      return [e, t];
    },
    useMutableSource: wd,
    useSyncExternalStore: xd,
    useId: Ad,
    unstable_isNewReconciler: !1,
  };
function Qn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += lp(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (l) {
    i =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function as(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n != null ? n : null,
    digest: t != null ? t : null,
  };
}
function Js(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Nh = typeof WeakMap == "function" ? WeakMap : Map;
function jd(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      il || ((il = !0), (uo = r)), Js(e, t);
    }),
    n
  );
}
function Bd(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Js(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        Js(e, t),
          typeof r != "function" &&
            (qt === null ? (qt = new Set([this])) : qt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function hu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Nh();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Uh.bind(null, e, t, n)), t.then(e, e));
}
function mu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function gu(e, t, n, r, i) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Lt(-1, 1)), (t.tag = 2), Kt(n, t, 1))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = i), e);
}
var $h = At.ReactCurrentOwner,
  We = !1;
function De(e, t, n, r) {
  t.child = e === null ? yd(t, null, n, r) : Un(t, e.child, n, r);
}
function vu(e, t, n, r, i) {
  n = n.render;
  var l = t.ref;
  return (
    bn(t, i),
    (r = Jo(e, t, n, r, l, i)),
    (n = ea()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        It(e, t, i))
      : (oe && n && bo(t), (t.flags |= 1), De(e, t, r, i), t.child)
  );
}
function yu(e, t, n, r, i) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !ca(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), bd(e, t, l, r, i))
      : ((e = Ri(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), (e.lanes & i) === 0)) {
    var s = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Dr), n(s, r) && e.ref === t.ref)
    )
      return It(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Jt(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function bd(e, t, n, r, i) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Dr(l, r) && e.ref === t.ref)
      if (((We = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
        (e.flags & 131072) !== 0 && (We = !0);
      else return (t.lanes = e.lanes), It(e, t, i);
  }
  return eo(e, t, n, r, i);
}
function Vd(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if ((t.mode & 1) === 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ie(An, Ke),
        (Ke |= n);
    else {
      if ((n & 1073741824) === 0)
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ie(An, Ke),
          (Ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        ie(An, Ke),
        (Ke |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ie(An, Ke),
      (Ke |= r);
  return De(e, t, i, n), t.child;
}
function Hd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function eo(e, t, n, r, i) {
  var l = Ue(n) ? mn : Re.current;
  return (
    (l = Wn(t, l)),
    bn(t, i),
    (n = Jo(e, t, n, r, l, i)),
    (r = ea()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        It(e, t, i))
      : (oe && r && bo(t), (t.flags |= 1), De(e, t, n, i), t.child)
  );
}
function Su(e, t, n, r, i) {
  if (Ue(n)) {
    var l = !0;
    Qi(t);
  } else l = !1;
  if ((bn(t, i), t.stateNode === null))
    $i(e, t), gd(t, n, r), Zs(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var o = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = at(u))
      : ((u = Ue(n) ? mn : Re.current), (u = Wn(t, u)));
    var c = n.getDerivedStateFromProps,
      p =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || o !== u) && cu(t, s, r, u)),
      (jt = !1);
    var f = t.memoizedState;
    (s.state = f),
      Ji(t, r, s, i),
      (o = t.memoizedState),
      a !== r || f !== o || Ge.current || jt
        ? (typeof c == "function" && (qs(t, n, c, r), (o = t.memoizedState)),
          (a = jt || uu(t, n, a, r, f, o, u))
            ? (p ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = o)),
          (s.props = r),
          (s.state = o),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      hd(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : ft(t.type, a)),
      (s.props = u),
      (p = t.pendingProps),
      (f = s.context),
      (o = n.contextType),
      typeof o == "object" && o !== null
        ? (o = at(o))
        : ((o = Ue(n) ? mn : Re.current), (o = Wn(t, o)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== p || f !== o) && cu(t, s, r, o)),
      (jt = !1),
      (f = t.memoizedState),
      (s.state = f),
      Ji(t, r, s, i);
    var v = t.memoizedState;
    a !== p || f !== v || Ge.current || jt
      ? (typeof g == "function" && (qs(t, n, g, r), (v = t.memoizedState)),
        (u = jt || uu(t, n, u, r, f, v, o) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, v, o),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, v, o)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = o),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return to(e, t, n, r, l, i);
}
function to(e, t, n, r, i, l) {
  Hd(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && iu(t, n, !1), It(e, t, l);
  (r = t.stateNode), ($h.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Un(t, e.child, null, l)), (t.child = Un(t, null, a, l)))
      : De(e, t, a, l),
    (t.memoizedState = r.state),
    i && iu(t, n, !0),
    t.child
  );
}
function Wd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ru(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ru(e, t.context, !1),
    Xo(e, t.containerInfo);
}
function wu(e, t, n, r, i) {
  return Gn(), Ho(i), (t.flags |= 256), De(e, t, n, r), t.child;
}
var no = { dehydrated: null, treeContext: null, retryLane: 0 };
function ro(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Gd(e, t, n) {
  var r = t.pendingProps,
    i = ae.current,
    l = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ie(ae, i & 1),
    e === null)
  )
    return (
      Xs(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0
            ? (t.lanes = 1)
            : e.data === "$!"
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((s = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (s = { mode: "hidden", children: s }),
              (r & 1) === 0 && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = s))
                : (l = wl(s, r, 0, null)),
              (e = hn(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = ro(n)),
              (t.memoizedState = no),
              e)
            : ra(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return Ih(e, t, s, r, a, i, n);
  if (l) {
    (l = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var o = { mode: "hidden", children: r.children };
    return (
      (s & 1) === 0 && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = o),
          (t.deletions = null))
        : ((r = Jt(i, o)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (l = Jt(a, l)) : ((l = hn(l, s, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? ro(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (l.memoizedState = s),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = no),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = Jt(l, { mode: "visible", children: r.children })),
    (t.mode & 1) === 0 && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ra(e, t) {
  return (
    (t = wl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function mi(e, t, n, r) {
  return (
    r !== null && Ho(r),
    Un(t, e.child, null, n),
    (e = ra(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ih(e, t, n, r, i, l, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = as(Error(P(422)))), mi(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (i = t.mode),
        (r = wl({ mode: "visible", children: r.children }, i, 0, null)),
        (l = hn(l, i, s, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        (t.mode & 1) !== 0 && Un(t, e.child, null, s),
        (t.child.memoizedState = ro(s)),
        (t.memoizedState = no),
        l);
  if ((t.mode & 1) === 0) return mi(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (l = Error(P(419))), (r = as(l, r, void 0)), mi(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), We || a)) {
    if (((r = Ce), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = (i & (r.suspendedLanes | s)) !== 0 ? 0 : i),
        i !== 0 &&
          i !== l.retryLane &&
          ((l.retryLane = i), $t(e, i), gt(r, e, i, -1));
    }
    return ua(), (r = as(Error(P(421)))), mi(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Yh.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Ze = Xt(i.nextSibling)),
      (Je = t),
      (oe = !0),
      (ht = null),
      e !== null &&
        ((it[lt++] = _t),
        (it[lt++] = Mt),
        (it[lt++] = gn),
        (_t = e.id),
        (Mt = e.overflow),
        (gn = t)),
      (t = ra(t, r.children)),
      (t.flags |= 4096),
      t);
}
function xu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ks(e.return, t, n);
}
function us(e, t, n, r, i) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = i));
}
function Ud(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    l = r.tail;
  if ((De(e, t, r.children, n), (r = ae.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xu(e, n, t);
        else if (e.tag === 19) xu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ie(ae, r), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && el(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          us(t, !1, i, n, l);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && el(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        us(t, !0, n, null, l);
        break;
      case "together":
        us(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function $i(e, t) {
  (t.mode & 1) === 0 &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function It(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (yn |= t.lanes),
    (n & t.childLanes) === 0)
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Jt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Jt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Ah(e, t, n) {
  switch (t.tag) {
    case 3:
      Wd(t), Gn();
      break;
    case 5:
      Sd(t);
      break;
    case 1:
      Ue(t.type) && Qi(t);
      break;
    case 4:
      Xo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      ie(qi, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ie(ae, ae.current & 1), (t.flags |= 128), null)
          : (n & t.child.childLanes) !== 0
          ? Gd(e, t, n)
          : (ie(ae, ae.current & 1),
            (e = It(e, t, n)),
            e !== null ? e.sibling : null);
      ie(ae, ae.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (r) return Ud(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ie(ae, ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Vd(e, t, n);
  }
  return It(e, t, n);
}
var Yd, io, Qd, Xd;
Yd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
io = function () {};
Qd = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), fn(Ct.current);
    var l = null;
    switch (n) {
      case "input":
        (i = Ps(e, i)), (r = Ps(e, r)), (l = []);
        break;
      case "select":
        (i = ce({}, i, { value: void 0 })),
          (r = ce({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (i = zs(e, i)), (r = zs(e, r)), (l = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ui);
    }
    Os(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Lr.hasOwnProperty(u)
              ? l || (l = [])
              : (l = l || []).push(u, null));
    for (u in r) {
      var o = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && o !== a && (o != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (o && o.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in o)
              o.hasOwnProperty(s) &&
                a[s] !== o[s] &&
                (n || (n = {}), (n[s] = o[s]));
          } else n || (l || (l = []), l.push(u, n)), (n = o);
        else
          u === "dangerouslySetInnerHTML"
            ? ((o = o ? o.__html : void 0),
              (a = a ? a.__html : void 0),
              o != null && a !== o && (l = l || []).push(u, o))
            : u === "children"
            ? (typeof o != "string" && typeof o != "number") ||
              (l = l || []).push(u, "" + o)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Lr.hasOwnProperty(u)
                ? (o != null && u === "onScroll" && le("scroll", e),
                  l || a === o || (l = []))
                : (l = l || []).push(u, o));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Xd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ur(e, t) {
  if (!oe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Rh(e, t, n) {
  var r = t.pendingProps;
  switch ((Vo(t), t.tag)) {
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
      return Ie(t), null;
    case 1:
      return Ue(t.type) && Yi(), Ie(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Yn(),
        se(Ge),
        se(Re),
        qo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (pi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), ht !== null && (po(ht), (ht = null)))),
        io(e, t),
        Ie(t),
        null
      );
    case 5:
      Ko(t);
      var i = fn(Vr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Qd(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return Ie(t), null;
        }
        if (((e = fn(Ct.current)), pi(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[wt] = t), (r[Br] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              le("cancel", r), le("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              le("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < gr.length; i++) le(gr[i], r);
              break;
            case "source":
              le("error", r);
              break;
            case "img":
            case "image":
            case "link":
              le("error", r), le("load", r);
              break;
            case "details":
              le("toggle", r);
              break;
            case "input":
              La(r, l), le("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                le("invalid", r);
              break;
            case "textarea":
              Na(r, l), le("invalid", r);
          }
          Os(n, l), (i = null);
          for (var s in l)
            if (l.hasOwnProperty(s)) {
              var a = l[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (l.suppressHydrationWarning !== !0 &&
                      fi(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (l.suppressHydrationWarning !== !0 &&
                      fi(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Lr.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  le("scroll", r);
            }
          switch (n) {
            case "input":
              ii(r), Oa(r, l, !0);
              break;
            case "textarea":
              ii(r), $a(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Ui);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Cc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[wt] = t),
            (e[Br] = r),
            Yd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Ns(n, r)), n)) {
              case "dialog":
                le("cancel", e), le("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                le("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < gr.length; i++) le(gr[i], e);
                i = r;
                break;
              case "source":
                le("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                le("error", e), le("load", e), (i = r);
                break;
              case "details":
                le("toggle", e), (i = r);
                break;
              case "input":
                La(e, r), (i = Ps(e, r)), le("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ce({}, r, { value: void 0 })),
                  le("invalid", e);
                break;
              case "textarea":
                Na(e, r), (i = zs(e, r)), le("invalid", e);
                break;
              default:
                i = r;
            }
            Os(n, i), (a = i);
            for (l in a)
              if (a.hasOwnProperty(l)) {
                var o = a[l];
                l === "style"
                  ? Tc(e, o)
                  : l === "dangerouslySetInnerHTML"
                  ? ((o = o ? o.__html : void 0), o != null && Ec(e, o))
                  : l === "children"
                  ? typeof o == "string"
                    ? (n !== "textarea" || o !== "") && Or(e, o)
                    : typeof o == "number" && Or(e, "" + o)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (Lr.hasOwnProperty(l)
                      ? o != null && l === "onScroll" && le("scroll", e)
                      : o != null && _o(e, l, o, s));
              }
            switch (n) {
              case "input":
                ii(e), Oa(e, r, !1);
                break;
              case "textarea":
                ii(e), $a(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + nn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? Dn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      Dn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ui);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ie(t), null;
    case 6:
      if (e && t.stateNode != null) Xd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
        if (((n = fn(Vr.current)), fn(Ct.current), pi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[wt] = t),
            (l = r.nodeValue !== n) && ((e = Je), e !== null))
          )
            switch (e.tag) {
              case 3:
                fi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  fi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[wt] = t),
            (t.stateNode = r);
      }
      return Ie(t), null;
    case 13:
      if (
        (se(ae),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (oe && Ze !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          fd(), Gn(), (t.flags |= 98560), (l = !1);
        else if (((l = pi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(P(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(P(317));
            l[wt] = t;
          } else
            Gn(),
              (t.flags & 128) === 0 && (t.memoizedState = null),
              (t.flags |= 4);
          Ie(t), (l = !1);
        } else ht !== null && (po(ht), (ht = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            (t.mode & 1) !== 0 &&
              (e === null || (ae.current & 1) !== 0
                ? we === 0 && (we = 3)
                : ua())),
          t.updateQueue !== null && (t.flags |= 4),
          Ie(t),
          null);
    case 4:
      return (
        Yn(), io(e, t), e === null && Fr(t.stateNode.containerInfo), Ie(t), null
      );
    case 10:
      return Uo(t.type._context), Ie(t), null;
    case 17:
      return Ue(t.type) && Yi(), Ie(t), null;
    case 19:
      if ((se(ae), (l = t.memoizedState), l === null)) return Ie(t), null;
      if (((r = (t.flags & 128) !== 0), (s = l.rendering), s === null))
        if (r) ur(l, !1);
        else {
          if (we !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((s = el(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ur(l, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (s = l.alternate),
                    s === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = s.childLanes),
                        (l.lanes = s.lanes),
                        (l.child = s.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = s.memoizedProps),
                        (l.memoizedState = s.memoizedState),
                        (l.updateQueue = s.updateQueue),
                        (l.type = s.type),
                        (e = s.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ie(ae, (ae.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            me() > Xn &&
            ((t.flags |= 128), (r = !0), ur(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = el(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ur(l, !0),
              l.tail === null && l.tailMode === "hidden" && !s.alternate && !oe)
            )
              return Ie(t), null;
          } else
            2 * me() - l.renderingStartTime > Xn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ur(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = l.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (l.last = s));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = me()),
          (t.sibling = null),
          (n = ae.current),
          ie(ae, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ie(t), null);
    case 22:
    case 23:
      return (
        aa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && (t.mode & 1) !== 0
          ? (Ke & 1073741824) !== 0 &&
            (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ie(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function Dh(e, t) {
  switch ((Vo(t), t.tag)) {
    case 1:
      return (
        Ue(t.type) && Yi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Yn(),
        se(Ge),
        se(Re),
        qo(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return Ko(t), null;
    case 13:
      if (
        (se(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(P(340));
        Gn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return se(ae), null;
    case 4:
      return Yn(), null;
    case 10:
      return Uo(t.type._context), null;
    case 22:
    case 23:
      return aa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var gi = !1,
  Ae = !1,
  Fh = typeof WeakSet == "function" ? WeakSet : Set,
  I = null;
function In(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        pe(e, t, r);
      }
    else n.current = null;
}
function lo(e, t, n) {
  try {
    n();
  } catch (r) {
    pe(e, t, r);
  }
}
var Cu = !1;
function jh(e, t) {
  if (((Vs = Hi), (e = Jc()), Bo(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            o = -1,
            u = 0,
            c = 0,
            p = e,
            f = null;
          t: for (;;) {
            for (
              var g;
              p !== n || (i !== 0 && p.nodeType !== 3) || (a = s + i),
                p !== l || (r !== 0 && p.nodeType !== 3) || (o = s + r),
                p.nodeType === 3 && (s += p.nodeValue.length),
                (g = p.firstChild) !== null;

            )
              (f = p), (p = g);
            for (;;) {
              if (p === e) break t;
              if (
                (f === n && ++u === i && (a = s),
                f === l && ++c === r && (o = s),
                (g = p.nextSibling) !== null)
              )
                break;
              (p = f), (f = p.parentNode);
            }
            p = g;
          }
          n = a === -1 || o === -1 ? null : { start: a, end: o };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Hs = { focusedElem: e, selectionRange: n }, Hi = !1, I = t; I !== null; )
    if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (I = e);
    else
      for (; I !== null; ) {
        t = I;
        try {
          var v = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    w = v.memoizedState,
                    d = t.stateNode,
                    h = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : ft(t.type, y),
                      w
                    );
                  d.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(P(163));
            }
        } catch (S) {
          pe(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (I = e);
          break;
        }
        I = t.return;
      }
  return (v = Cu), (Cu = !1), v;
}
function Tr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var l = i.destroy;
        (i.destroy = void 0), l !== void 0 && lo(t, n, l);
      }
      i = i.next;
    } while (i !== r);
  }
}
function yl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function so(e) {
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
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Kd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Kd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[wt], delete t[Br], delete t[Us], delete t[xh], delete t[Ch])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function qd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Eu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || qd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function oo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ui));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (oo(e, t, n), e = e.sibling; e !== null; ) oo(e, t, n), (e = e.sibling);
}
function ao(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ao(e, t, n), e = e.sibling; e !== null; ) ao(e, t, n), (e = e.sibling);
}
var ze = null,
  pt = !1;
function Dt(e, t, n) {
  for (n = n.child; n !== null; ) Zd(e, t, n), (n = n.sibling);
}
function Zd(e, t, n) {
  if (xt && typeof xt.onCommitFiberUnmount == "function")
    try {
      xt.onCommitFiberUnmount(cl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ae || In(n, t);
    case 6:
      var r = ze,
        i = pt;
      (ze = null),
        Dt(e, t, n),
        (ze = r),
        (pt = i),
        ze !== null &&
          (pt
            ? ((e = ze),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ze.removeChild(n.stateNode));
      break;
    case 18:
      ze !== null &&
        (pt
          ? ((e = ze),
            (n = n.stateNode),
            e.nodeType === 8
              ? ns(e.parentNode, n)
              : e.nodeType === 1 && ns(e, n),
            Ar(e))
          : ns(ze, n.stateNode));
      break;
    case 4:
      (r = ze),
        (i = pt),
        (ze = n.stateNode.containerInfo),
        (pt = !0),
        Dt(e, t, n),
        (ze = r),
        (pt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ae &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var l = i,
            s = l.destroy;
          (l = l.tag),
            s !== void 0 && ((l & 2) !== 0 || (l & 4) !== 0) && lo(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Dt(e, t, n);
      break;
    case 1:
      if (
        !Ae &&
        (In(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          pe(n, t, a);
        }
      Dt(e, t, n);
      break;
    case 21:
      Dt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ae = (r = Ae) || n.memoizedState !== null), Dt(e, t, n), (Ae = r))
        : Dt(e, t, n);
      break;
    default:
      Dt(e, t, n);
  }
}
function ku(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Fh()),
      t.forEach(function (r) {
        var i = Qh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function dt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var l = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ze = a.stateNode), (pt = !1);
              break e;
            case 3:
              (ze = a.stateNode.containerInfo), (pt = !0);
              break e;
            case 4:
              (ze = a.stateNode.containerInfo), (pt = !0);
              break e;
          }
          a = a.return;
        }
        if (ze === null) throw Error(P(160));
        Zd(l, s, i), (ze = null), (pt = !1);
        var o = i.alternate;
        o !== null && (o.return = null), (i.return = null);
      } catch (u) {
        pe(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Jd(t, e), (t = t.sibling);
}
function Jd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((dt(t, e), yt(e), r & 4)) {
        try {
          Tr(3, e, e.return), yl(3, e);
        } catch (y) {
          pe(e, e.return, y);
        }
        try {
          Tr(5, e, e.return);
        } catch (y) {
          pe(e, e.return, y);
        }
      }
      break;
    case 1:
      dt(t, e), yt(e), r & 512 && n !== null && In(n, n.return);
      break;
    case 5:
      if (
        (dt(t, e),
        yt(e),
        r & 512 && n !== null && In(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Or(i, "");
        } catch (y) {
          pe(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var l = e.memoizedProps,
          s = n !== null ? n.memoizedProps : l,
          a = e.type,
          o = e.updateQueue;
        if (((e.updateQueue = null), o !== null))
          try {
            a === "input" && l.type === "radio" && l.name != null && wc(i, l),
              Ns(a, s);
            var u = Ns(a, l);
            for (s = 0; s < o.length; s += 2) {
              var c = o[s],
                p = o[s + 1];
              c === "style"
                ? Tc(i, p)
                : c === "dangerouslySetInnerHTML"
                ? Ec(i, p)
                : c === "children"
                ? Or(i, p)
                : _o(i, c, p, u);
            }
            switch (a) {
              case "input":
                _s(i, l);
                break;
              case "textarea":
                xc(i, l);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!l.multiple;
                var g = l.value;
                g != null
                  ? Dn(i, !!l.multiple, g, !1)
                  : f !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Dn(i, !!l.multiple, l.defaultValue, !0)
                      : Dn(i, !!l.multiple, l.multiple ? [] : "", !1));
            }
            i[Br] = l;
          } catch (y) {
            pe(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((dt(t, e), yt(e), r & 4)) {
        if (e.stateNode === null) throw Error(P(162));
        (i = e.stateNode), (l = e.memoizedProps);
        try {
          i.nodeValue = l;
        } catch (y) {
          pe(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (dt(t, e), yt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ar(t.containerInfo);
        } catch (y) {
          pe(e, e.return, y);
        }
      break;
    case 4:
      dt(t, e), yt(e);
      break;
    case 13:
      dt(t, e),
        yt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((l = i.memoizedState !== null),
          (i.stateNode.isHidden = l),
          !l ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (sa = me())),
        r & 4 && ku(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ae = (u = Ae) || c), dt(t, e), (Ae = u)) : dt(t, e),
        yt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && (e.mode & 1) !== 0)
        )
          for (I = e, c = e.child; c !== null; ) {
            for (p = I = c; I !== null; ) {
              switch (((f = I), (g = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tr(4, f, f.return);
                  break;
                case 1:
                  In(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (y) {
                      pe(r, n, y);
                    }
                  }
                  break;
                case 5:
                  In(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Pu(p);
                    continue;
                  }
              }
              g !== null ? ((g.return = f), (I = g)) : Pu(p);
            }
            c = c.sibling;
          }
        e: for (c = null, p = e; ; ) {
          if (p.tag === 5) {
            if (c === null) {
              c = p;
              try {
                (i = p.stateNode),
                  u
                    ? ((l = i.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((a = p.stateNode),
                      (o = p.memoizedProps.style),
                      (s =
                        o != null && o.hasOwnProperty("display")
                          ? o.display
                          : null),
                      (a.style.display = kc("display", s)));
              } catch (y) {
                pe(e, e.return, y);
              }
            }
          } else if (p.tag === 6) {
            if (c === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (y) {
                pe(e, e.return, y);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            c === p && (c = null), (p = p.return);
          }
          c === p && (c = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      dt(t, e), yt(e), r & 4 && ku(e);
      break;
    case 21:
      break;
    default:
      dt(t, e), yt(e);
  }
}
function yt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (qd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Or(i, ""), (r.flags &= -33));
          var l = Eu(e);
          ao(e, l, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Eu(e);
          oo(e, a, s);
          break;
        default:
          throw Error(P(161));
      }
    } catch (o) {
      pe(e, e.return, o);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Bh(e, t, n) {
  (I = e), ef(e);
}
function ef(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var i = I,
      l = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || gi;
      if (!s) {
        var a = i.alternate,
          o = (a !== null && a.memoizedState !== null) || Ae;
        a = gi;
        var u = Ae;
        if (((gi = s), (Ae = o) && !u))
          for (I = i; I !== null; )
            (s = I),
              (o = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? _u(i)
                : o !== null
                ? ((o.return = s), (I = o))
                : _u(i);
        for (; l !== null; ) (I = l), ef(l), (l = l.sibling);
        (I = i), (gi = a), (Ae = u);
      }
      Tu(e);
    } else
      (i.subtreeFlags & 8772) !== 0 && l !== null
        ? ((l.return = i), (I = l))
        : Tu(e);
  }
}
function Tu(e) {
  for (; I !== null; ) {
    var t = I;
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ae || yl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ae)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ft(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && au(t, l, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                au(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var o = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    o.autoFocus && n.focus();
                    break;
                  case "img":
                    o.src && (n.src = o.src);
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
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var p = c.dehydrated;
                    p !== null && Ar(p);
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
              throw Error(P(163));
          }
        Ae || (t.flags & 512 && so(t));
      } catch (f) {
        pe(t, t.return, f);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Pu(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function _u(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            yl(4, t);
          } catch (o) {
            pe(t, n, o);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (o) {
              pe(t, i, o);
            }
          }
          var l = t.return;
          try {
            so(t);
          } catch (o) {
            pe(t, l, o);
          }
          break;
        case 5:
          var s = t.return;
          try {
            so(t);
          } catch (o) {
            pe(t, s, o);
          }
      }
    } catch (o) {
      pe(t, t.return, o);
    }
    if (t === e) {
      I = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (I = a);
      break;
    }
    I = t.return;
  }
}
var bh = Math.ceil,
  rl = At.ReactCurrentDispatcher,
  ia = At.ReactCurrentOwner,
  ot = At.ReactCurrentBatchConfig,
  Y = 0,
  Ce = null,
  ve = null,
  Le = 0,
  Ke = 0,
  An = sn(0),
  we = 0,
  Ur = null,
  yn = 0,
  Sl = 0,
  la = 0,
  Pr = null,
  He = null,
  sa = 0,
  Xn = 1 / 0,
  Tt = null,
  il = !1,
  uo = null,
  qt = null,
  vi = !1,
  Ht = null,
  ll = 0,
  _r = 0,
  co = null,
  Ii = -1,
  Ai = 0;
function je() {
  return (Y & 6) !== 0 ? me() : Ii !== -1 ? Ii : (Ii = me());
}
function Zt(e) {
  return (e.mode & 1) === 0
    ? 1
    : (Y & 2) !== 0 && Le !== 0
    ? Le & -Le
    : kh.transition !== null
    ? (Ai === 0 && (Ai = Dc()), Ai)
    : ((e = te),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Wc(e.type))),
      e);
}
function gt(e, t, n, r) {
  if (50 < _r) throw ((_r = 0), (co = null), Error(P(185)));
  Xr(e, n, r),
    ((Y & 2) === 0 || e !== Ce) &&
      (e === Ce && ((Y & 2) === 0 && (Sl |= n), we === 4 && bt(e, Le)),
      Ye(e, r),
      n === 1 &&
        Y === 0 &&
        (t.mode & 1) === 0 &&
        ((Xn = me() + 500), ml && on()));
}
function Ye(e, t) {
  var n = e.callbackNode;
  kp(e, t);
  var r = Vi(e, e === Ce ? Le : 0);
  if (r === 0)
    n !== null && Ra(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ra(n), t === 1))
      e.tag === 0 ? Eh(Mu.bind(null, e)) : ud(Mu.bind(null, e)),
        Sh(function () {
          (Y & 6) === 0 && on();
        }),
        (n = null);
    else {
      switch (Fc(r)) {
        case 1:
          n = No;
          break;
        case 4:
          n = Ac;
          break;
        case 16:
          n = bi;
          break;
        case 536870912:
          n = Rc;
          break;
        default:
          n = bi;
      }
      n = uf(n, tf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function tf(e, t) {
  if (((Ii = -1), (Ai = 0), (Y & 6) !== 0)) throw Error(P(327));
  var n = e.callbackNode;
  if (Vn() && e.callbackNode !== n) return null;
  var r = Vi(e, e === Ce ? Le : 0);
  if (r === 0) return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = sl(e, r);
  else {
    t = r;
    var i = Y;
    Y |= 2;
    var l = rf();
    (Ce !== e || Le !== t) && ((Tt = null), (Xn = me() + 500), pn(e, t));
    do
      try {
        Wh();
        break;
      } catch (a) {
        nf(e, a);
      }
    while (1);
    Go(),
      (rl.current = l),
      (Y = i),
      ve !== null ? (t = 0) : ((Ce = null), (Le = 0), (t = we));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Ds(e)), i !== 0 && ((r = i), (t = fo(e, i)))), t === 1)
    )
      throw ((n = Ur), pn(e, 0), bt(e, r), Ye(e, me()), n);
    if (t === 6) bt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        (r & 30) === 0 &&
          !Vh(i) &&
          ((t = sl(e, r)),
          t === 2 && ((l = Ds(e)), l !== 0 && ((r = l), (t = fo(e, l)))),
          t === 1))
      )
        throw ((n = Ur), pn(e, 0), bt(e, r), Ye(e, me()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          un(e, He, Tt);
          break;
        case 3:
          if (
            (bt(e, r), (r & 130023424) === r && ((t = sa + 500 - me()), 10 < t))
          ) {
            if (Vi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              je(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Gs(un.bind(null, e, He, Tt), t);
            break;
          }
          un(e, He, Tt);
          break;
        case 4:
          if ((bt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - mt(r);
            (l = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~l);
          }
          if (
            ((r = i),
            (r = me() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * bh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Gs(un.bind(null, e, He, Tt), r);
            break;
          }
          un(e, He, Tt);
          break;
        case 5:
          un(e, He, Tt);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return Ye(e, me()), e.callbackNode === n ? tf.bind(null, e) : null;
}
function fo(e, t) {
  var n = Pr;
  return (
    e.current.memoizedState.isDehydrated && (pn(e, t).flags |= 256),
    (e = sl(e, t)),
    e !== 2 && ((t = He), (He = n), t !== null && po(t)),
    e
  );
}
function po(e) {
  He === null ? (He = e) : He.push.apply(He, e);
}
function Vh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            l = i.getSnapshot;
          i = i.value;
          try {
            if (!vt(l(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function bt(e, t) {
  for (
    t &= ~la,
      t &= ~Sl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - mt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Mu(e) {
  if ((Y & 6) !== 0) throw Error(P(327));
  Vn();
  var t = Vi(e, 0);
  if ((t & 1) === 0) return Ye(e, me()), null;
  var n = sl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ds(e);
    r !== 0 && ((t = r), (n = fo(e, r)));
  }
  if (n === 1) throw ((n = Ur), pn(e, 0), bt(e, t), Ye(e, me()), n);
  if (n === 6) throw Error(P(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    un(e, He, Tt),
    Ye(e, me()),
    null
  );
}
function oa(e, t) {
  var n = Y;
  Y |= 1;
  try {
    return e(t);
  } finally {
    (Y = n), Y === 0 && ((Xn = me() + 500), ml && on());
  }
}
function Sn(e) {
  Ht !== null && Ht.tag === 0 && (Y & 6) === 0 && Vn();
  var t = Y;
  Y |= 1;
  var n = ot.transition,
    r = te;
  try {
    if (((ot.transition = null), (te = 1), e)) return e();
  } finally {
    (te = r), (ot.transition = n), (Y = t), (Y & 6) === 0 && on();
  }
}
function aa() {
  (Ke = An.current), se(An);
}
function pn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), yh(n)), ve !== null))
    for (n = ve.return; n !== null; ) {
      var r = n;
      switch ((Vo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Yi();
          break;
        case 3:
          Yn(), se(Ge), se(Re), qo();
          break;
        case 5:
          Ko(r);
          break;
        case 4:
          Yn();
          break;
        case 13:
          se(ae);
          break;
        case 19:
          se(ae);
          break;
        case 10:
          Uo(r.type._context);
          break;
        case 22:
        case 23:
          aa();
      }
      n = n.return;
    }
  if (
    ((Ce = e),
    (ve = e = Jt(e.current, null)),
    (Le = Ke = t),
    (we = 0),
    (Ur = null),
    (la = Sl = yn = 0),
    (He = Pr = null),
    dn !== null)
  ) {
    for (t = 0; t < dn.length; t++)
      if (((n = dn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          l = n.pending;
        if (l !== null) {
          var s = l.next;
          (l.next = i), (r.next = s);
        }
        n.pending = r;
      }
    dn = null;
  }
  return e;
}
function nf(e, t) {
  do {
    var n = ve;
    try {
      if ((Go(), (Oi.current = nl), tl)) {
        for (var r = ue.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        tl = !1;
      }
      if (
        ((vn = 0),
        (xe = Se = ue = null),
        (kr = !1),
        (Hr = 0),
        (ia.current = null),
        n === null || n.return === null)
      ) {
        (we = 1), (Ur = t), (ve = null);
        break;
      }
      e: {
        var l = e,
          s = n.return,
          a = n,
          o = t;
        if (
          ((t = Le),
          (a.flags |= 32768),
          o !== null && typeof o == "object" && typeof o.then == "function")
        ) {
          var u = o,
            c = a,
            p = c.tag;
          if ((c.mode & 1) === 0 && (p === 0 || p === 11 || p === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = mu(s);
          if (g !== null) {
            (g.flags &= -257),
              gu(g, s, a, l, t),
              g.mode & 1 && hu(l, u, t),
              (t = g),
              (o = u);
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              y.add(o), (t.updateQueue = y);
            } else v.add(o);
            break e;
          } else {
            if ((t & 1) === 0) {
              hu(l, u, t), ua();
              break e;
            }
            o = Error(P(426));
          }
        } else if (oe && a.mode & 1) {
          var w = mu(s);
          if (w !== null) {
            (w.flags & 65536) === 0 && (w.flags |= 256),
              gu(w, s, a, l, t),
              Ho(Qn(o, a));
            break e;
          }
        }
        (l = o = Qn(o, a)),
          we !== 4 && (we = 2),
          Pr === null ? (Pr = [l]) : Pr.push(l),
          (l = s);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var d = jd(l, o, t);
              ou(l, d);
              break e;
            case 1:
              a = o;
              var h = l.type,
                m = l.stateNode;
              if (
                (l.flags & 128) === 0 &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (qt === null || !qt.has(m))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var S = Bd(l, a, t);
                ou(l, S);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      sf(n);
    } catch (E) {
      (t = E), ve === n && n !== null && (ve = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function rf() {
  var e = rl.current;
  return (rl.current = nl), e === null ? nl : e;
}
function ua() {
  (we === 0 || we === 3 || we === 2) && (we = 4),
    Ce === null ||
      ((yn & 268435455) === 0 && (Sl & 268435455) === 0) ||
      bt(Ce, Le);
}
function sl(e, t) {
  var n = Y;
  Y |= 2;
  var r = rf();
  (Ce !== e || Le !== t) && ((Tt = null), pn(e, t));
  do
    try {
      Hh();
      break;
    } catch (i) {
      nf(e, i);
    }
  while (1);
  if ((Go(), (Y = n), (rl.current = r), ve !== null)) throw Error(P(261));
  return (Ce = null), (Le = 0), we;
}
function Hh() {
  for (; ve !== null; ) lf(ve);
}
function Wh() {
  for (; ve !== null && !mp(); ) lf(ve);
}
function lf(e) {
  var t = af(e.alternate, e, Ke);
  (e.memoizedProps = e.pendingProps),
    t === null ? sf(e) : (ve = t),
    (ia.current = null);
}
function sf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((n = Rh(n, t, Ke)), n !== null)) {
        ve = n;
        return;
      }
    } else {
      if (((n = Dh(n, t)), n !== null)) {
        (n.flags &= 32767), (ve = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (we = 6), (ve = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  we === 0 && (we = 5);
}
function un(e, t, n) {
  var r = te,
    i = ot.transition;
  try {
    (ot.transition = null), (te = 1), Gh(e, t, n, r);
  } finally {
    (ot.transition = i), (te = r);
  }
  return null;
}
function Gh(e, t, n, r) {
  do Vn();
  while (Ht !== null);
  if ((Y & 6) !== 0) throw Error(P(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (Tp(e, l),
    e === Ce && ((ve = Ce = null), (Le = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      vi ||
      ((vi = !0),
      uf(bi, function () {
        return Vn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    (n.subtreeFlags & 15990) !== 0 || l)
  ) {
    (l = ot.transition), (ot.transition = null);
    var s = te;
    te = 1;
    var a = Y;
    (Y |= 4),
      (ia.current = null),
      jh(e, n),
      Jd(n, e),
      dh(Hs),
      (Hi = !!Vs),
      (Hs = Vs = null),
      (e.current = n),
      Bh(n),
      gp(),
      (Y = a),
      (te = s),
      (ot.transition = l);
  } else e.current = n;
  if (
    (vi && ((vi = !1), (Ht = e), (ll = i)),
    (l = e.pendingLanes),
    l === 0 && (qt = null),
    Sp(n.stateNode),
    Ye(e, me()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (il) throw ((il = !1), (e = uo), (uo = null), e);
  return (
    (ll & 1) !== 0 && e.tag !== 0 && Vn(),
    (l = e.pendingLanes),
    (l & 1) !== 0 ? (e === co ? _r++ : ((_r = 0), (co = e))) : (_r = 0),
    on(),
    null
  );
}
function Vn() {
  if (Ht !== null) {
    var e = Fc(ll),
      t = ot.transition,
      n = te;
    try {
      if (((ot.transition = null), (te = 16 > e ? 16 : e), Ht === null))
        var r = !1;
      else {
        if (((e = Ht), (Ht = null), (ll = 0), (Y & 6) !== 0))
          throw Error(P(331));
        var i = Y;
        for (Y |= 4, I = e.current; I !== null; ) {
          var l = I,
            s = l.child;
          if ((I.flags & 16) !== 0) {
            var a = l.deletions;
            if (a !== null) {
              for (var o = 0; o < a.length; o++) {
                var u = a[o];
                for (I = u; I !== null; ) {
                  var c = I;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tr(8, c, l);
                  }
                  var p = c.child;
                  if (p !== null) (p.return = c), (I = p);
                  else
                    for (; I !== null; ) {
                      c = I;
                      var f = c.sibling,
                        g = c.return;
                      if ((Kd(c), c === u)) {
                        I = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = g), (I = f);
                        break;
                      }
                      I = g;
                    }
                }
              }
              var v = l.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var w = y.sibling;
                    (y.sibling = null), (y = w);
                  } while (y !== null);
                }
              }
              I = l;
            }
          }
          if ((l.subtreeFlags & 2064) !== 0 && s !== null)
            (s.return = l), (I = s);
          else
            e: for (; I !== null; ) {
              if (((l = I), (l.flags & 2048) !== 0))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Tr(9, l, l.return);
                }
              var d = l.sibling;
              if (d !== null) {
                (d.return = l.return), (I = d);
                break e;
              }
              I = l.return;
            }
        }
        var h = e.current;
        for (I = h; I !== null; ) {
          s = I;
          var m = s.child;
          if ((s.subtreeFlags & 2064) !== 0 && m !== null)
            (m.return = s), (I = m);
          else
            e: for (s = h; I !== null; ) {
              if (((a = I), (a.flags & 2048) !== 0))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yl(9, a);
                  }
                } catch (E) {
                  pe(a, a.return, E);
                }
              if (a === s) {
                I = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (I = S);
                break e;
              }
              I = a.return;
            }
        }
        if (
          ((Y = i), on(), xt && typeof xt.onPostCommitFiberRoot == "function")
        )
          try {
            xt.onPostCommitFiberRoot(cl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (te = n), (ot.transition = t);
    }
  }
  return !1;
}
function zu(e, t, n) {
  (t = Qn(n, t)),
    (t = jd(e, t, 1)),
    (e = Kt(e, t, 1)),
    (t = je()),
    e !== null && (Xr(e, 1, t), Ye(e, t));
}
function pe(e, t, n) {
  if (e.tag === 3) zu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        zu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (qt === null || !qt.has(r)))
        ) {
          (e = Qn(n, e)),
            (e = Bd(t, e, 1)),
            (t = Kt(t, e, 1)),
            (e = je()),
            t !== null && (Xr(t, 1, e), Ye(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Uh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = je()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ce === e &&
      (Le & n) === n &&
      (we === 4 || (we === 3 && (Le & 130023424) === Le && 500 > me() - sa)
        ? pn(e, 0)
        : (la |= n)),
    Ye(e, t);
}
function of(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = oi), (oi <<= 1), (oi & 130023424) === 0 && (oi = 4194304)));
  var n = je();
  (e = $t(e, t)), e !== null && (Xr(e, t, n), Ye(e, n));
}
function Yh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), of(e, n);
}
function Qh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(P(314));
  }
  r !== null && r.delete(t), of(e, n);
}
var af;
af = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ge.current) We = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return (We = !1), Ah(e, t, n);
      We = (e.flags & 131072) !== 0;
    }
  else (We = !1), oe && (t.flags & 1048576) !== 0 && cd(t, Ki, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      $i(e, t), (e = t.pendingProps);
      var i = Wn(t, Re.current);
      bn(t, n), (i = Jo(null, t, r, e, i, n));
      var l = ea();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ue(r) ? ((l = !0), Qi(t)) : (l = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Qo(t),
            (i.updater = gl),
            (t.stateNode = i),
            (i._reactInternals = t),
            Zs(t, r, e, n),
            (t = to(null, t, r, !0, l, n)))
          : ((t.tag = 0), oe && l && bo(t), De(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          ($i(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Kh(r)),
          (e = ft(r, e)),
          i)
        ) {
          case 0:
            t = eo(null, t, r, e, n);
            break e;
          case 1:
            t = Su(null, t, r, e, n);
            break e;
          case 11:
            t = vu(null, t, r, e, n);
            break e;
          case 14:
            t = yu(null, t, r, ft(r.type, e), n);
            break e;
        }
        throw Error(P(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ft(r, i)),
        eo(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ft(r, i)),
        Su(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Wd(t), e === null)) throw Error(P(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (i = l.element),
          hd(e, t),
          Ji(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (i = Qn(Error(P(423)), t)), (t = wu(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Qn(Error(P(424)), t)), (t = wu(e, t, r, n, i));
            break e;
          } else
            for (
              Ze = Xt(t.stateNode.containerInfo.firstChild),
                Je = t,
                oe = !0,
                ht = null,
                n = yd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Gn(), r === i)) {
            t = It(e, t, n);
            break e;
          }
          De(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Sd(t),
        e === null && Xs(t),
        (r = t.type),
        (i = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Ws(r, i) ? (s = null) : l !== null && Ws(r, l) && (t.flags |= 32),
        Hd(e, t),
        De(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Xs(t), null;
    case 13:
      return Gd(e, t, n);
    case 4:
      return (
        Xo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Un(t, null, r, n)) : De(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ft(r, i)),
        vu(e, t, r, i, n)
      );
    case 7:
      return De(e, t, t.pendingProps, n), t.child;
    case 8:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (l = t.memoizedProps),
          (s = i.value),
          ie(qi, r._currentValue),
          (r._currentValue = s),
          l !== null)
        )
          if (vt(l.value, s)) {
            if (l.children === i.children && !Ge.current) {
              t = It(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var a = l.dependencies;
              if (a !== null) {
                s = l.child;
                for (var o = a.firstContext; o !== null; ) {
                  if (o.context === r) {
                    if (l.tag === 1) {
                      (o = Lt(-1, n & -n)), (o.tag = 2);
                      var u = l.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (o.next = o)
                          : ((o.next = c.next), (c.next = o)),
                          (u.pending = o);
                      }
                    }
                    (l.lanes |= n),
                      (o = l.alternate),
                      o !== null && (o.lanes |= n),
                      Ks(l.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  o = o.next;
                }
              } else if (l.tag === 10) s = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((s = l.return), s === null)) throw Error(P(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Ks(s, n, t),
                  (s = l.sibling);
              } else s = l.child;
              if (s !== null) s.return = l;
              else
                for (s = l; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((l = s.sibling), l !== null)) {
                    (l.return = s.return), (s = l);
                    break;
                  }
                  s = s.return;
                }
              l = s;
            }
        De(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        bn(t, n),
        (i = at(i)),
        (r = r(i)),
        (t.flags |= 1),
        De(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = ft(r, t.pendingProps)),
        (i = ft(r.type, i)),
        yu(e, t, r, i, n)
      );
    case 15:
      return bd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ft(r, i)),
        $i(e, t),
        (t.tag = 1),
        Ue(r) ? ((e = !0), Qi(t)) : (e = !1),
        bn(t, n),
        gd(t, r, i),
        Zs(t, r, i, n),
        to(null, t, r, !0, e, n)
      );
    case 19:
      return Ud(e, t, n);
    case 22:
      return Vd(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function uf(e, t) {
  return Ic(e, t);
}
function Xh(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function st(e, t, n, r) {
  return new Xh(e, t, n, r);
}
function ca(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Kh(e) {
  if (typeof e == "function") return ca(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === zo)) return 11;
    if (e === Lo) return 14;
  }
  return 2;
}
function Jt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = st(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ri(e, t, n, r, i, l) {
  var s = 2;
  if (((r = e), typeof e == "function")) ca(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Tn:
        return hn(n.children, i, l, t);
      case Mo:
        (s = 8), (i |= 8);
        break;
      case Cs:
        return (
          (e = st(12, n, t, i | 2)), (e.elementType = Cs), (e.lanes = l), e
        );
      case Es:
        return (e = st(13, n, t, i)), (e.elementType = Es), (e.lanes = l), e;
      case ks:
        return (e = st(19, n, t, i)), (e.elementType = ks), (e.lanes = l), e;
      case vc:
        return wl(n, i, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case mc:
              s = 10;
              break e;
            case gc:
              s = 9;
              break e;
            case zo:
              s = 11;
              break e;
            case Lo:
              s = 14;
              break e;
            case Ft:
              (s = 16), (r = null);
              break e;
          }
        throw Error(P(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = st(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function hn(e, t, n, r) {
  return (e = st(7, e, r, t)), (e.lanes = n), e;
}
function wl(e, t, n, r) {
  return (
    (e = st(22, e, r, t)),
    (e.elementType = vc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function cs(e, t, n) {
  return (e = st(6, e, null, t)), (e.lanes = n), e;
}
function ds(e, t, n) {
  return (
    (t = st(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function qh(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Gl(0)),
    (this.expirationTimes = Gl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Gl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function da(e, t, n, r, i, l, s, a, o) {
  return (
    (e = new qh(e, t, n, a, o)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = st(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Qo(l),
    e
  );
}
function Zh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: kn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function cf(e) {
  if (!e) return rn;
  e = e._reactInternals;
  e: {
    if (Cn(e) !== e || e.tag !== 1) throw Error(P(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ue(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ue(n)) return ad(e, n, t);
  }
  return t;
}
function df(e, t, n, r, i, l, s, a, o) {
  return (
    (e = da(n, r, !0, e, i, l, s, a, o)),
    (e.context = cf(null)),
    (n = e.current),
    (r = je()),
    (i = Zt(n)),
    (l = Lt(r, i)),
    (l.callback = t != null ? t : null),
    Kt(n, l, i),
    (e.current.lanes = i),
    Xr(e, i, r),
    Ye(e, r),
    e
  );
}
function xl(e, t, n, r) {
  var i = t.current,
    l = je(),
    s = Zt(i);
  return (
    (n = cf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Lt(l, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Kt(i, t, s)),
    e !== null && (gt(e, i, s, l), Li(e, i, s)),
    s
  );
}
function ol(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Lu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function fa(e, t) {
  Lu(e, t), (e = e.alternate) && Lu(e, t);
}
function Jh() {
  return null;
}
var ff =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function pa(e) {
  this._internalRoot = e;
}
Cl.prototype.render = pa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  xl(e, t, null, null);
};
Cl.prototype.unmount = pa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Sn(function () {
      xl(null, e, null, null);
    }),
      (t[Nt] = null);
  }
};
function Cl(e) {
  this._internalRoot = e;
}
Cl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = bc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Bt.length && t !== 0 && t < Bt[n].priority; n++);
    Bt.splice(n, 0, e), n === 0 && Hc(e);
  }
};
function ha(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function El(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ou() {}
function em(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = ol(s);
        l.call(u);
      };
    }
    var s = df(t, r, e, 0, null, !1, !1, "", Ou);
    return (
      (e._reactRootContainer = s),
      (e[Nt] = s.current),
      Fr(e.nodeType === 8 ? e.parentNode : e),
      Sn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = ol(o);
      a.call(u);
    };
  }
  var o = da(e, 0, !1, null, null, !1, !1, "", Ou);
  return (
    (e._reactRootContainer = o),
    (e[Nt] = o.current),
    Fr(e.nodeType === 8 ? e.parentNode : e),
    Sn(function () {
      xl(t, o, n, r);
    }),
    o
  );
}
function kl(e, t, n, r, i) {
  var l = n._reactRootContainer;
  if (l) {
    var s = l;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var o = ol(s);
        a.call(o);
      };
    }
    xl(t, s, e, i);
  } else s = em(n, t, e, i, r);
  return ol(s);
}
jc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = mr(t.pendingLanes);
        n !== 0 &&
          ($o(t, n | 1),
          Ye(t, me()),
          (Y & 6) === 0 && ((Xn = me() + 500), on()));
      }
      break;
    case 13:
      Sn(function () {
        var r = $t(e, 1);
        if (r !== null) {
          var i = je();
          gt(r, e, 1, i);
        }
      }),
        fa(e, 1);
  }
};
Io = function (e) {
  if (e.tag === 13) {
    var t = $t(e, 134217728);
    if (t !== null) {
      var n = je();
      gt(t, e, 134217728, n);
    }
    fa(e, 134217728);
  }
};
Bc = function (e) {
  if (e.tag === 13) {
    var t = Zt(e),
      n = $t(e, t);
    if (n !== null) {
      var r = je();
      gt(n, e, t, r);
    }
    fa(e, t);
  }
};
bc = function () {
  return te;
};
Vc = function (e, t) {
  var n = te;
  try {
    return (te = e), t();
  } finally {
    te = n;
  }
};
Is = function (e, t, n) {
  switch (t) {
    case "input":
      if ((_s(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = hl(r);
            if (!i) throw Error(P(90));
            Sc(r), _s(r, i);
          }
        }
      }
      break;
    case "textarea":
      xc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Dn(e, !!n.multiple, t, !1);
  }
};
Mc = oa;
zc = Sn;
var tm = { usingClientEntryPoint: !1, Events: [qr, zn, hl, Pc, _c, oa] },
  cr = {
    findFiberByHostInstance: cn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  nm = {
    bundleType: cr.bundleType,
    version: cr.version,
    rendererPackageName: cr.rendererPackageName,
    rendererConfig: cr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: At.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Nc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: cr.findFiberByHostInstance || Jh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var yi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yi.isDisabled && yi.supportsFiber)
    try {
      (cl = yi.inject(nm)), (xt = yi);
    } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tm;
tt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ha(t)) throw Error(P(200));
  return Zh(e, t, null, n);
};
tt.createRoot = function (e, t) {
  if (!ha(e)) throw Error(P(299));
  var n = !1,
    r = "",
    i = ff;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = da(e, 1, !1, null, null, n, !1, r, i)),
    (e[Nt] = t.current),
    Fr(e.nodeType === 8 ? e.parentNode : e),
    new pa(t)
  );
};
tt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(P(188))
      : ((e = Object.keys(e).join(",")), Error(P(268, e)));
  return (e = Nc(t)), (e = e === null ? null : e.stateNode), e;
};
tt.flushSync = function (e) {
  return Sn(e);
};
tt.hydrate = function (e, t, n) {
  if (!El(t)) throw Error(P(200));
  return kl(null, e, t, !0, n);
};
tt.hydrateRoot = function (e, t, n) {
  if (!ha(e)) throw Error(P(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    l = "",
    s = ff;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = df(t, null, e, 1, n != null ? n : null, i, !1, l, s)),
    (e[Nt] = t.current),
    Fr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Cl(t);
};
tt.render = function (e, t, n) {
  if (!El(t)) throw Error(P(200));
  return kl(null, e, t, !1, n);
};
tt.unmountComponentAtNode = function (e) {
  if (!El(e)) throw Error(P(40));
  return e._reactRootContainer
    ? (Sn(function () {
        kl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Nt] = null);
        });
      }),
      !0)
    : !1;
};
tt.unstable_batchedUpdates = oa;
tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!El(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return kl(e, t, n, !1, r);
};
tt.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = tt);
})(cc);
var Nu = cc.exports;
(ws.createRoot = Nu.createRoot), (ws.hydrateRoot = Nu.hydrateRoot);
var Tl = { exports: {} },
  ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ee = typeof Symbol == "function" && Symbol.for,
  ma = Ee ? Symbol.for("react.element") : 60103,
  ga = Ee ? Symbol.for("react.portal") : 60106,
  Pl = Ee ? Symbol.for("react.fragment") : 60107,
  _l = Ee ? Symbol.for("react.strict_mode") : 60108,
  Ml = Ee ? Symbol.for("react.profiler") : 60114,
  zl = Ee ? Symbol.for("react.provider") : 60109,
  Ll = Ee ? Symbol.for("react.context") : 60110,
  va = Ee ? Symbol.for("react.async_mode") : 60111,
  Ol = Ee ? Symbol.for("react.concurrent_mode") : 60111,
  Nl = Ee ? Symbol.for("react.forward_ref") : 60112,
  $l = Ee ? Symbol.for("react.suspense") : 60113,
  rm = Ee ? Symbol.for("react.suspense_list") : 60120,
  Il = Ee ? Symbol.for("react.memo") : 60115,
  Al = Ee ? Symbol.for("react.lazy") : 60116,
  im = Ee ? Symbol.for("react.block") : 60121,
  lm = Ee ? Symbol.for("react.fundamental") : 60117,
  sm = Ee ? Symbol.for("react.responder") : 60118,
  om = Ee ? Symbol.for("react.scope") : 60119;
function rt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ma:
        switch (((e = e.type), e)) {
          case va:
          case Ol:
          case Pl:
          case Ml:
          case _l:
          case $l:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Ll:
              case Nl:
              case Al:
              case Il:
              case zl:
                return e;
              default:
                return t;
            }
        }
      case ga:
        return t;
    }
  }
}
function pf(e) {
  return rt(e) === Ol;
}
ne.AsyncMode = va;
ne.ConcurrentMode = Ol;
ne.ContextConsumer = Ll;
ne.ContextProvider = zl;
ne.Element = ma;
ne.ForwardRef = Nl;
ne.Fragment = Pl;
ne.Lazy = Al;
ne.Memo = Il;
ne.Portal = ga;
ne.Profiler = Ml;
ne.StrictMode = _l;
ne.Suspense = $l;
ne.isAsyncMode = function (e) {
  return pf(e) || rt(e) === va;
};
ne.isConcurrentMode = pf;
ne.isContextConsumer = function (e) {
  return rt(e) === Ll;
};
ne.isContextProvider = function (e) {
  return rt(e) === zl;
};
ne.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === ma;
};
ne.isForwardRef = function (e) {
  return rt(e) === Nl;
};
ne.isFragment = function (e) {
  return rt(e) === Pl;
};
ne.isLazy = function (e) {
  return rt(e) === Al;
};
ne.isMemo = function (e) {
  return rt(e) === Il;
};
ne.isPortal = function (e) {
  return rt(e) === ga;
};
ne.isProfiler = function (e) {
  return rt(e) === Ml;
};
ne.isStrictMode = function (e) {
  return rt(e) === _l;
};
ne.isSuspense = function (e) {
  return rt(e) === $l;
};
ne.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Pl ||
    e === Ol ||
    e === Ml ||
    e === _l ||
    e === $l ||
    e === rm ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Al ||
        e.$$typeof === Il ||
        e.$$typeof === zl ||
        e.$$typeof === Ll ||
        e.$$typeof === Nl ||
        e.$$typeof === lm ||
        e.$$typeof === sm ||
        e.$$typeof === om ||
        e.$$typeof === im))
  );
};
ne.typeOf = rt;
(function (e) {
  e.exports = ne;
})(Tl);
function am(e) {
  function t(L, N, $, B, x) {
    for (
      var U = 0,
        O = 0,
        fe = 0,
        q = 0,
        ee,
        H,
        Te = 0,
        Ve = 0,
        Q,
        Ne = (Q = ee = 0),
        Z = 0,
        Pe = 0,
        tr = 0,
        _e = 0,
        ti = $.length,
        nr = ti - 1,
        ct,
        b = "",
        he = "",
        Fl = "",
        jl = "",
        Rt;
      Z < ti;

    ) {
      if (
        ((H = $.charCodeAt(Z)),
        Z === nr &&
          O + q + fe + U !== 0 &&
          (O !== 0 && (H = O === 47 ? 10 : 47), (q = fe = U = 0), ti++, nr++),
        O + q + fe + U === 0)
      ) {
        if (
          Z === nr &&
          (0 < Pe && (b = b.replace(f, "")), 0 < b.trim().length)
        ) {
          switch (H) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              b += $.charAt(Z);
          }
          H = 59;
        }
        switch (H) {
          case 123:
            for (
              b = b.trim(), ee = b.charCodeAt(0), Q = 1, _e = ++Z;
              Z < ti;

            ) {
              switch ((H = $.charCodeAt(Z))) {
                case 123:
                  Q++;
                  break;
                case 125:
                  Q--;
                  break;
                case 47:
                  switch ((H = $.charCodeAt(Z + 1))) {
                    case 42:
                    case 47:
                      e: {
                        for (Ne = Z + 1; Ne < nr; ++Ne)
                          switch ($.charCodeAt(Ne)) {
                            case 47:
                              if (
                                H === 42 &&
                                $.charCodeAt(Ne - 1) === 42 &&
                                Z + 2 !== Ne
                              ) {
                                Z = Ne + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (H === 47) {
                                Z = Ne + 1;
                                break e;
                              }
                          }
                        Z = Ne;
                      }
                  }
                  break;
                case 91:
                  H++;
                case 40:
                  H++;
                case 34:
                case 39:
                  for (; Z++ < nr && $.charCodeAt(Z) !== H; );
              }
              if (Q === 0) break;
              Z++;
            }
            switch (
              ((Q = $.substring(_e, Z)),
              ee === 0 && (ee = (b = b.replace(p, "").trim()).charCodeAt(0)),
              ee)
            ) {
              case 64:
                switch (
                  (0 < Pe && (b = b.replace(f, "")), (H = b.charCodeAt(1)), H)
                ) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Pe = N;
                    break;
                  default:
                    Pe = Xe;
                }
                if (
                  ((Q = t(N, Pe, Q, H, x + 1)),
                  (_e = Q.length),
                  0 < z &&
                    ((Pe = n(Xe, b, tr)),
                    (Rt = a(3, Q, Pe, N, K, F, _e, H, x, B)),
                    (b = Pe.join("")),
                    Rt !== void 0 &&
                      (_e = (Q = Rt.trim()).length) === 0 &&
                      ((H = 0), (Q = ""))),
                  0 < _e)
                )
                  switch (H) {
                    case 115:
                      b = b.replace(T, s);
                    case 100:
                    case 109:
                    case 45:
                      Q = b + "{" + Q + "}";
                      break;
                    case 107:
                      (b = b.replace(h, "$1 $2")),
                        (Q = b + "{" + Q + "}"),
                        (Q =
                          de === 1 || (de === 2 && l("@" + Q, 3))
                            ? "@-webkit-" + Q + "@" + Q
                            : "@" + Q);
                      break;
                    default:
                      (Q = b + Q), B === 112 && (Q = ((he += Q), ""));
                  }
                else Q = "";
                break;
              default:
                Q = t(N, n(N, b, tr), Q, B, x + 1);
            }
            (Fl += Q),
              (Q = tr = Pe = Ne = ee = 0),
              (b = ""),
              (H = $.charCodeAt(++Z));
            break;
          case 125:
          case 59:
            if (
              ((b = (0 < Pe ? b.replace(f, "") : b).trim()),
              1 < (_e = b.length))
            )
              switch (
                (Ne === 0 &&
                  ((ee = b.charCodeAt(0)),
                  ee === 45 || (96 < ee && 123 > ee)) &&
                  (_e = (b = b.replace(" ", ":")).length),
                0 < z &&
                  (Rt = a(1, b, N, L, K, F, he.length, B, x, B)) !== void 0 &&
                  (_e = (b = Rt.trim()).length) === 0 &&
                  (b = "\0\0"),
                (ee = b.charCodeAt(0)),
                (H = b.charCodeAt(1)),
                ee)
              ) {
                case 0:
                  break;
                case 64:
                  if (H === 105 || H === 99) {
                    jl += b + $.charAt(Z);
                    break;
                  }
                default:
                  b.charCodeAt(_e - 1) !== 58 &&
                    (he += i(b, ee, H, b.charCodeAt(2)));
              }
            (tr = Pe = Ne = ee = 0), (b = ""), (H = $.charCodeAt(++Z));
        }
      }
      switch (H) {
        case 13:
        case 10:
          O === 47
            ? (O = 0)
            : 1 + ee === 0 &&
              B !== 107 &&
              0 < b.length &&
              ((Pe = 1), (b += "\0")),
            0 < z * j && a(0, b, N, L, K, F, he.length, B, x, B),
            (F = 1),
            K++;
          break;
        case 59:
        case 125:
          if (O + q + fe + U === 0) {
            F++;
            break;
          }
        default:
          switch ((F++, (ct = $.charAt(Z)), H)) {
            case 9:
            case 32:
              if (q + U + O === 0)
                switch (Te) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    ct = "";
                    break;
                  default:
                    H !== 32 && (ct = " ");
                }
              break;
            case 0:
              ct = "\\0";
              break;
            case 12:
              ct = "\\f";
              break;
            case 11:
              ct = "\\v";
              break;
            case 38:
              q + O + U === 0 && ((Pe = tr = 1), (ct = "\f" + ct));
              break;
            case 108:
              if (q + O + U + ge === 0 && 0 < Ne)
                switch (Z - Ne) {
                  case 2:
                    Te === 112 && $.charCodeAt(Z - 3) === 58 && (ge = Te);
                  case 8:
                    Ve === 111 && (ge = Ve);
                }
              break;
            case 58:
              q + O + U === 0 && (Ne = Z);
              break;
            case 44:
              O + fe + q + U === 0 && ((Pe = 1), (ct += "\r"));
              break;
            case 34:
            case 39:
              O === 0 && (q = q === H ? 0 : q === 0 ? H : q);
              break;
            case 91:
              q + O + fe === 0 && U++;
              break;
            case 93:
              q + O + fe === 0 && U--;
              break;
            case 41:
              q + O + U === 0 && fe--;
              break;
            case 40:
              if (q + O + U === 0) {
                if (ee === 0)
                  switch (2 * Te + 3 * Ve) {
                    case 533:
                      break;
                    default:
                      ee = 1;
                  }
                fe++;
              }
              break;
            case 64:
              O + fe + q + U + Ne + Q === 0 && (Q = 1);
              break;
            case 42:
            case 47:
              if (!(0 < q + U + fe))
                switch (O) {
                  case 0:
                    switch (2 * H + 3 * $.charCodeAt(Z + 1)) {
                      case 235:
                        O = 47;
                        break;
                      case 220:
                        (_e = Z), (O = 42);
                    }
                    break;
                  case 42:
                    H === 47 &&
                      Te === 42 &&
                      _e + 2 !== Z &&
                      ($.charCodeAt(_e + 2) === 33 &&
                        (he += $.substring(_e, Z + 1)),
                      (ct = ""),
                      (O = 0));
                }
          }
          O === 0 && (b += ct);
      }
      (Ve = Te), (Te = H), Z++;
    }
    if (((_e = he.length), 0 < _e)) {
      if (
        ((Pe = N),
        0 < z &&
          ((Rt = a(2, he, Pe, L, K, F, _e, B, x, B)),
          Rt !== void 0 && (he = Rt).length === 0))
      )
        return jl + he + Fl;
      if (((he = Pe.join(",") + "{" + he + "}"), de * ge !== 0)) {
        switch ((de !== 2 || l(he, 2) || (ge = 0), ge)) {
          case 111:
            he = he.replace(S, ":-moz-$1") + he;
            break;
          case 112:
            he =
              he.replace(m, "::-webkit-input-$1") +
              he.replace(m, "::-moz-$1") +
              he.replace(m, ":-ms-input-$1") +
              he;
        }
        ge = 0;
      }
    }
    return jl + he + Fl;
  }
  function n(L, N, $) {
    var B = N.trim().split(w);
    N = B;
    var x = B.length,
      U = L.length;
    switch (U) {
      case 0:
      case 1:
        var O = 0;
        for (L = U === 0 ? "" : L[0] + " "; O < x; ++O)
          N[O] = r(L, N[O], $).trim();
        break;
      default:
        var fe = (O = 0);
        for (N = []; O < x; ++O)
          for (var q = 0; q < U; ++q) N[fe++] = r(L[q] + " ", B[O], $).trim();
    }
    return N;
  }
  function r(L, N, $) {
    var B = N.charCodeAt(0);
    switch ((33 > B && (B = (N = N.trim()).charCodeAt(0)), B)) {
      case 38:
        return N.replace(d, "$1" + L.trim());
      case 58:
        return L.trim() + N.replace(d, "$1" + L.trim());
      default:
        if (0 < 1 * $ && 0 < N.indexOf("\f"))
          return N.replace(d, (L.charCodeAt(0) === 58 ? "" : "$1") + L.trim());
    }
    return L + N;
  }
  function i(L, N, $, B) {
    var x = L + ";",
      U = 2 * N + 3 * $ + 4 * B;
    if (U === 944) {
      L = x.indexOf(":", 9) + 1;
      var O = x.substring(L, x.length - 1).trim();
      return (
        (O = x.substring(0, L).trim() + O + ";"),
        de === 1 || (de === 2 && l(O, 1)) ? "-webkit-" + O + O : O
      );
    }
    if (de === 0 || (de === 2 && !l(x, 1))) return x;
    switch (U) {
      case 1015:
        return x.charCodeAt(10) === 97 ? "-webkit-" + x + x : x;
      case 951:
        return x.charCodeAt(3) === 116 ? "-webkit-" + x + x : x;
      case 963:
        return x.charCodeAt(5) === 110 ? "-webkit-" + x + x : x;
      case 1009:
        if (x.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + x + x;
      case 978:
        return "-webkit-" + x + "-moz-" + x + x;
      case 1019:
      case 983:
        return "-webkit-" + x + "-moz-" + x + "-ms-" + x + x;
      case 883:
        if (x.charCodeAt(8) === 45) return "-webkit-" + x + x;
        if (0 < x.indexOf("image-set(", 11))
          return x.replace(D, "$1-webkit-$2") + x;
        break;
      case 932:
        if (x.charCodeAt(4) === 45)
          switch (x.charCodeAt(5)) {
            case 103:
              return (
                "-webkit-box-" +
                x.replace("-grow", "") +
                "-webkit-" +
                x +
                "-ms-" +
                x.replace("grow", "positive") +
                x
              );
            case 115:
              return (
                "-webkit-" + x + "-ms-" + x.replace("shrink", "negative") + x
              );
            case 98:
              return (
                "-webkit-" +
                x +
                "-ms-" +
                x.replace("basis", "preferred-size") +
                x
              );
          }
        return "-webkit-" + x + "-ms-" + x + x;
      case 964:
        return "-webkit-" + x + "-ms-flex-" + x + x;
      case 1023:
        if (x.charCodeAt(8) !== 99) break;
        return (
          (O = x
            .substring(x.indexOf(":", 15))
            .replace("flex-", "")
            .replace("space-between", "justify")),
          "-webkit-box-pack" + O + "-webkit-" + x + "-ms-flex-pack" + O + x
        );
      case 1005:
        return v.test(x)
          ? x.replace(g, ":-webkit-") + x.replace(g, ":-moz-") + x
          : x;
      case 1e3:
        switch (
          ((O = x.substring(13).trim()),
          (N = O.indexOf("-") + 1),
          O.charCodeAt(0) + O.charCodeAt(N))
        ) {
          case 226:
            O = x.replace(E, "tb");
            break;
          case 232:
            O = x.replace(E, "tb-rl");
            break;
          case 220:
            O = x.replace(E, "lr");
            break;
          default:
            return x;
        }
        return "-webkit-" + x + "-ms-" + O + x;
      case 1017:
        if (x.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (
          ((N = (x = L).length - 10),
          (O = (x.charCodeAt(N) === 33 ? x.substring(0, N) : x)
            .substring(L.indexOf(":", 7) + 1)
            .trim()),
          (U = O.charCodeAt(0) + (O.charCodeAt(7) | 0)))
        ) {
          case 203:
            if (111 > O.charCodeAt(8)) break;
          case 115:
            x = x.replace(O, "-webkit-" + O) + ";" + x;
            break;
          case 207:
          case 102:
            x =
              x.replace(O, "-webkit-" + (102 < U ? "inline-" : "") + "box") +
              ";" +
              x.replace(O, "-webkit-" + O) +
              ";" +
              x.replace(O, "-ms-" + O + "box") +
              ";" +
              x;
        }
        return x + ";";
      case 938:
        if (x.charCodeAt(5) === 45)
          switch (x.charCodeAt(6)) {
            case 105:
              return (
                (O = x.replace("-items", "")),
                "-webkit-" + x + "-webkit-box-" + O + "-ms-flex-" + O + x
              );
            case 115:
              return "-webkit-" + x + "-ms-flex-item-" + x.replace(k, "") + x;
            default:
              return (
                "-webkit-" +
                x +
                "-ms-flex-line-pack" +
                x.replace("align-content", "").replace(k, "") +
                x
              );
          }
        break;
      case 973:
      case 989:
        if (x.charCodeAt(3) !== 45 || x.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (_.test(L) === !0)
          return (O = L.substring(L.indexOf(":") + 1)).charCodeAt(0) === 115
            ? i(L.replace("stretch", "fill-available"), N, $, B).replace(
                ":fill-available",
                ":stretch"
              )
            : x.replace(O, "-webkit-" + O) +
                x.replace(O, "-moz-" + O.replace("fill-", "")) +
                x;
        break;
      case 962:
        if (
          ((x =
            "-webkit-" + x + (x.charCodeAt(5) === 102 ? "-ms-" + x : "") + x),
          $ + B === 211 &&
            x.charCodeAt(13) === 105 &&
            0 < x.indexOf("transform", 10))
        )
          return (
            x.substring(0, x.indexOf(";", 27) + 1).replace(y, "$1-webkit-$2") +
            x
          );
    }
    return x;
  }
  function l(L, N) {
    var $ = L.indexOf(N === 1 ? ":" : "{"),
      B = L.substring(0, N !== 3 ? $ : 10);
    return (
      ($ = L.substring($ + 1, L.length - 1)),
      R(N !== 2 ? B : B.replace(V, "$1"), $, N)
    );
  }
  function s(L, N) {
    var $ = i(N, N.charCodeAt(0), N.charCodeAt(1), N.charCodeAt(2));
    return $ !== N + ";"
      ? $.replace(M, " or ($1)").substring(4)
      : "(" + N + ")";
  }
  function a(L, N, $, B, x, U, O, fe, q, ee) {
    for (var H = 0, Te = N, Ve; H < z; ++H)
      switch ((Ve = ye[H].call(c, L, Te, $, B, x, U, O, fe, q, ee))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Te = Ve;
      }
    if (Te !== N) return Te;
  }
  function o(L) {
    switch (L) {
      case void 0:
      case null:
        z = ye.length = 0;
        break;
      default:
        if (typeof L == "function") ye[z++] = L;
        else if (typeof L == "object")
          for (var N = 0, $ = L.length; N < $; ++N) o(L[N]);
        else j = !!L | 0;
    }
    return o;
  }
  function u(L) {
    return (
      (L = L.prefix),
      L !== void 0 &&
        ((R = null),
        L
          ? typeof L != "function"
            ? (de = 1)
            : ((de = 2), (R = L))
          : (de = 0)),
      u
    );
  }
  function c(L, N) {
    var $ = L;
    if ((33 > $.charCodeAt(0) && ($ = $.trim()), (J = $), ($ = [J]), 0 < z)) {
      var B = a(-1, N, $, $, K, F, 0, 0, 0, 0);
      B !== void 0 && typeof B == "string" && (N = B);
    }
    var x = t(Xe, $, N, 0, 0);
    return (
      0 < z &&
        ((B = a(-2, x, $, $, K, F, x.length, 0, 0, 0)),
        B !== void 0 && (x = B)),
      (J = ""),
      (ge = 0),
      (F = K = 1),
      x
    );
  }
  var p = /^\0+/g,
    f = /[\0\r\f]/g,
    g = /: */g,
    v = /zoo|gra/,
    y = /([,: ])(transform)/g,
    w = /,\r+?/g,
    d = /([\t\r\n ])*\f?&/g,
    h = /@(k\w+)\s*(\S*)\s*/,
    m = /::(place)/g,
    S = /:(read-only)/g,
    E = /[svh]\w+-[tblr]{2}/,
    T = /\(\s*(.*)\s*\)/g,
    M = /([\s\S]*?);/g,
    k = /-self|flex-/g,
    V = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    _ = /stretch|:\s*\w+\-(?:conte|avail)/,
    D = /([^-])(image-set\()/,
    F = 1,
    K = 1,
    ge = 0,
    de = 1,
    Xe = [],
    ye = [],
    z = 0,
    R = null,
    j = 0,
    J = "";
  return (c.use = o), (c.set = u), e !== void 0 && u(e), c;
}
var um = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
};
function cm(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var dm =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  $u = cm(function (e) {
    return (
      dm.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  ya = Tl.exports,
  fm = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  pm = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  hm = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  hf = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Sa = {};
Sa[ya.ForwardRef] = hm;
Sa[ya.Memo] = hf;
function Iu(e) {
  return ya.isMemo(e) ? hf : Sa[e.$$typeof] || fm;
}
var mm = Object.defineProperty,
  gm = Object.getOwnPropertyNames,
  Au = Object.getOwnPropertySymbols,
  vm = Object.getOwnPropertyDescriptor,
  ym = Object.getPrototypeOf,
  Ru = Object.prototype;
function mf(e, t, n) {
  if (typeof t != "string") {
    if (Ru) {
      var r = ym(t);
      r && r !== Ru && mf(e, r, n);
    }
    var i = gm(t);
    Au && (i = i.concat(Au(t)));
    for (var l = Iu(e), s = Iu(t), a = 0; a < i.length; ++a) {
      var o = i[a];
      if (!pm[o] && !(n && n[o]) && !(s && s[o]) && !(l && l[o])) {
        var u = vm(t, o);
        try {
          mm(e, o, u);
        } catch {}
      }
    }
  }
  return e;
}
var Sm = mf;
function zt() {
  return (zt =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
}
var Du = function (e, t) {
    for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1)
      n.push(t[r], e[r + 1]);
    return n;
  },
  ho = function (e) {
    return (
      e !== null &&
      typeof e == "object" &&
      (e.toString ? e.toString() : Object.prototype.toString.call(e)) ===
        "[object Object]" &&
      !Tl.exports.typeOf(e)
    );
  },
  al = Object.freeze([]),
  en = Object.freeze({});
function Yr(e) {
  return typeof e == "function";
}
function Fu(e) {
  return e.displayName || e.name || "Component";
}
function wa(e) {
  return e && typeof e.styledComponentId == "string";
}
var Kn =
    (typeof process < "u" &&
      (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR)) ||
    "data-styled",
  xa = typeof window < "u" && "HTMLElement" in window,
  wm = Boolean(
    typeof SC_DISABLE_SPEEDY == "boolean"
      ? SC_DISABLE_SPEEDY
      : typeof process < "u" &&
        process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
        process.env.REACT_APP_SC_DISABLE_SPEEDY !== ""
      ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
        process.env.REACT_APP_SC_DISABLE_SPEEDY
      : typeof process < "u" &&
        process.env.SC_DISABLE_SPEEDY !== void 0 &&
        process.env.SC_DISABLE_SPEEDY !== ""
      ? process.env.SC_DISABLE_SPEEDY !== "false" &&
        process.env.SC_DISABLE_SPEEDY
      : !1
  );
function Jr(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw new Error(
    "An error occurred. See https://git.io/JUIaE#" +
      e +
      " for more information." +
      (n.length > 0 ? " Args: " + n.join(", ") : "")
  );
}
var xm = (function () {
    function e(n) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = n);
    }
    var t = e.prototype;
    return (
      (t.indexOfGroup = function (n) {
        for (var r = 0, i = 0; i < n; i++) r += this.groupSizes[i];
        return r;
      }),
      (t.insertRules = function (n, r) {
        if (n >= this.groupSizes.length) {
          for (var i = this.groupSizes, l = i.length, s = l; n >= s; )
            (s <<= 1) < 0 && Jr(16, "" + n);
          (this.groupSizes = new Uint32Array(s)),
            this.groupSizes.set(i),
            (this.length = s);
          for (var a = l; a < s; a++) this.groupSizes[a] = 0;
        }
        for (var o = this.indexOfGroup(n + 1), u = 0, c = r.length; u < c; u++)
          this.tag.insertRule(o, r[u]) && (this.groupSizes[n]++, o++);
      }),
      (t.clearGroup = function (n) {
        if (n < this.length) {
          var r = this.groupSizes[n],
            i = this.indexOfGroup(n),
            l = i + r;
          this.groupSizes[n] = 0;
          for (var s = i; s < l; s++) this.tag.deleteRule(i);
        }
      }),
      (t.getGroup = function (n) {
        var r = "";
        if (n >= this.length || this.groupSizes[n] === 0) return r;
        for (
          var i = this.groupSizes[n],
            l = this.indexOfGroup(n),
            s = l + i,
            a = l;
          a < s;
          a++
        )
          r +=
            this.tag.getRule(a) +
            `/*!sc*/
`;
        return r;
      }),
      e
    );
  })(),
  Di = new Map(),
  ul = new Map(),
  Mr = 1,
  Si = function (e) {
    if (Di.has(e)) return Di.get(e);
    for (; ul.has(Mr); ) Mr++;
    var t = Mr++;
    return Di.set(e, t), ul.set(t, e), t;
  },
  Cm = function (e) {
    return ul.get(e);
  },
  Em = function (e, t) {
    t >= Mr && (Mr = t + 1), Di.set(e, t), ul.set(t, e);
  },
  km = "style[" + Kn + '][data-styled-version="5.3.6"]',
  Tm = new RegExp("^" + Kn + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  Pm = function (e, t, n) {
    for (var r, i = n.split(","), l = 0, s = i.length; l < s; l++)
      (r = i[l]) && e.registerName(t, r);
  },
  _m = function (e, t) {
    for (
      var n = (t.textContent || "").split(`/*!sc*/
`),
        r = [],
        i = 0,
        l = n.length;
      i < l;
      i++
    ) {
      var s = n[i].trim();
      if (s) {
        var a = s.match(Tm);
        if (a) {
          var o = 0 | parseInt(a[1], 10),
            u = a[2];
          o !== 0 && (Em(u, o), Pm(e, u, a[3]), e.getTag().insertRules(o, r)),
            (r.length = 0);
        } else r.push(s);
      }
    }
  },
  Mm = function () {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
  },
  gf = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      i = (function (a) {
        for (var o = a.childNodes, u = o.length; u >= 0; u--) {
          var c = o[u];
          if (c && c.nodeType === 1 && c.hasAttribute(Kn)) return c;
        }
      })(n),
      l = i !== void 0 ? i.nextSibling : null;
    r.setAttribute(Kn, "active"),
      r.setAttribute("data-styled-version", "5.3.6");
    var s = Mm();
    return s && r.setAttribute("nonce", s), n.insertBefore(r, l), r;
  },
  zm = (function () {
    function e(n) {
      var r = (this.element = gf(n));
      r.appendChild(document.createTextNode("")),
        (this.sheet = (function (i) {
          if (i.sheet) return i.sheet;
          for (var l = document.styleSheets, s = 0, a = l.length; s < a; s++) {
            var o = l[s];
            if (o.ownerNode === i) return o;
          }
          Jr(17);
        })(r)),
        (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        try {
          return this.sheet.insertRule(r, n), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (t.deleteRule = function (n) {
        this.sheet.deleteRule(n), this.length--;
      }),
      (t.getRule = function (n) {
        var r = this.sheet.cssRules[n];
        return r !== void 0 && typeof r.cssText == "string" ? r.cssText : "";
      }),
      e
    );
  })(),
  Lm = (function () {
    function e(n) {
      var r = (this.element = gf(n));
      (this.nodes = r.childNodes), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        if (n <= this.length && n >= 0) {
          var i = document.createTextNode(r),
            l = this.nodes[n];
          return this.element.insertBefore(i, l || null), this.length++, !0;
        }
        return !1;
      }),
      (t.deleteRule = function (n) {
        this.element.removeChild(this.nodes[n]), this.length--;
      }),
      (t.getRule = function (n) {
        return n < this.length ? this.nodes[n].textContent : "";
      }),
      e
    );
  })(),
  Om = (function () {
    function e(n) {
      (this.rules = []), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        return (
          n <= this.length && (this.rules.splice(n, 0, r), this.length++, !0)
        );
      }),
      (t.deleteRule = function (n) {
        this.rules.splice(n, 1), this.length--;
      }),
      (t.getRule = function (n) {
        return n < this.length ? this.rules[n] : "";
      }),
      e
    );
  })(),
  ju = xa,
  Nm = { isServer: !xa, useCSSOMInjection: !wm },
  vf = (function () {
    function e(n, r, i) {
      n === void 0 && (n = en),
        r === void 0 && (r = {}),
        (this.options = zt({}, Nm, {}, n)),
        (this.gs = r),
        (this.names = new Map(i)),
        (this.server = !!n.isServer),
        !this.server &&
          xa &&
          ju &&
          ((ju = !1),
          (function (l) {
            for (
              var s = document.querySelectorAll(km), a = 0, o = s.length;
              a < o;
              a++
            ) {
              var u = s[a];
              u &&
                u.getAttribute(Kn) !== "active" &&
                (_m(l, u), u.parentNode && u.parentNode.removeChild(u));
            }
          })(this));
    }
    e.registerId = function (n) {
      return Si(n);
    };
    var t = e.prototype;
    return (
      (t.reconstructWithOptions = function (n, r) {
        return (
          r === void 0 && (r = !0),
          new e(
            zt({}, this.options, {}, n),
            this.gs,
            (r && this.names) || void 0
          )
        );
      }),
      (t.allocateGSInstance = function (n) {
        return (this.gs[n] = (this.gs[n] || 0) + 1);
      }),
      (t.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((i = (r = this.options).isServer),
            (l = r.useCSSOMInjection),
            (s = r.target),
            (n = i ? new Om(s) : l ? new zm(s) : new Lm(s)),
            new xm(n)))
        );
        var n, r, i, l, s;
      }),
      (t.hasNameForId = function (n, r) {
        return this.names.has(n) && this.names.get(n).has(r);
      }),
      (t.registerName = function (n, r) {
        if ((Si(n), this.names.has(n))) this.names.get(n).add(r);
        else {
          var i = new Set();
          i.add(r), this.names.set(n, i);
        }
      }),
      (t.insertRules = function (n, r, i) {
        this.registerName(n, r), this.getTag().insertRules(Si(n), i);
      }),
      (t.clearNames = function (n) {
        this.names.has(n) && this.names.get(n).clear();
      }),
      (t.clearRules = function (n) {
        this.getTag().clearGroup(Si(n)), this.clearNames(n);
      }),
      (t.clearTag = function () {
        this.tag = void 0;
      }),
      (t.toString = function () {
        return (function (n) {
          for (var r = n.getTag(), i = r.length, l = "", s = 0; s < i; s++) {
            var a = Cm(s);
            if (a !== void 0) {
              var o = n.names.get(a),
                u = r.getGroup(s);
              if (o && u && o.size) {
                var c = Kn + ".g" + s + '[id="' + a + '"]',
                  p = "";
                o !== void 0 &&
                  o.forEach(function (f) {
                    f.length > 0 && (p += f + ",");
                  }),
                  (l +=
                    "" +
                    u +
                    c +
                    '{content:"' +
                    p +
                    `"}/*!sc*/
`);
              }
            }
          }
          return l;
        })(this);
      }),
      e
    );
  })(),
  $m = /(a)(d)/gi,
  Bu = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function mo(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = Bu(t % 52) + n;
  return (Bu(t % 52) + n).replace($m, "$1-$2");
}
var Rn = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  yf = function (e) {
    return Rn(5381, e);
  };
function Im(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Yr(n) && !wa(n)) return !1;
  }
  return !0;
}
var Am = yf("5.3.6"),
  Rm = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && Im(t)),
        (this.componentId = n),
        (this.baseHash = Rn(Am, n)),
        (this.baseStyle = r),
        vf.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var i = this.componentId,
          l = [];
        if (
          (this.baseStyle &&
            l.push(this.baseStyle.generateAndInjectStyles(t, n, r)),
          this.isStatic && !r.hash)
        )
          if (this.staticRulesId && n.hasNameForId(i, this.staticRulesId))
            l.push(this.staticRulesId);
          else {
            var s = qn(this.rules, t, n, r).join(""),
              a = mo(Rn(this.baseHash, s) >>> 0);
            if (!n.hasNameForId(i, a)) {
              var o = r(s, "." + a, void 0, i);
              n.insertRules(i, a, o);
            }
            l.push(a), (this.staticRulesId = a);
          }
        else {
          for (
            var u = this.rules.length,
              c = Rn(this.baseHash, r.hash),
              p = "",
              f = 0;
            f < u;
            f++
          ) {
            var g = this.rules[f];
            if (typeof g == "string") p += g;
            else if (g) {
              var v = qn(g, t, n, r),
                y = Array.isArray(v) ? v.join("") : v;
              (c = Rn(c, y + f)), (p += y);
            }
          }
          if (p) {
            var w = mo(c >>> 0);
            if (!n.hasNameForId(i, w)) {
              var d = r(p, "." + w, void 0, i);
              n.insertRules(i, w, d);
            }
            l.push(w);
          }
        }
        return l.join(" ");
      }),
      e
    );
  })(),
  Dm = /^\s*\/\/.*$/gm,
  Fm = [":", "[", ".", "#"];
function jm(e) {
  var t,
    n,
    r,
    i,
    l = e === void 0 ? en : e,
    s = l.options,
    a = s === void 0 ? en : s,
    o = l.plugins,
    u = o === void 0 ? al : o,
    c = new am(a),
    p = [],
    f = (function (y) {
      function w(d) {
        if (d)
          try {
            y(d + "}");
          } catch {}
      }
      return function (d, h, m, S, E, T, M, k, V, _) {
        switch (d) {
          case 1:
            if (V === 0 && h.charCodeAt(0) === 64) return y(h + ";"), "";
            break;
          case 2:
            if (k === 0) return h + "/*|*/";
            break;
          case 3:
            switch (k) {
              case 102:
              case 112:
                return y(m[0] + h), "";
              default:
                return h + (_ === 0 ? "/*|*/" : "");
            }
          case -2:
            h.split("/*|*/}").forEach(w);
        }
      };
    })(function (y) {
      p.push(y);
    }),
    g = function (y, w, d) {
      return (w === 0 && Fm.indexOf(d[n.length]) !== -1) || d.match(i)
        ? y
        : "." + t;
    };
  function v(y, w, d, h) {
    h === void 0 && (h = "&");
    var m = y.replace(Dm, ""),
      S = w && d ? d + " " + w + " { " + m + " }" : m;
    return (
      (t = h),
      (n = w),
      (r = new RegExp("\\" + n + "\\b", "g")),
      (i = new RegExp("(\\" + n + "\\b){2,}")),
      c(d || !w ? "" : w, S)
    );
  }
  return (
    c.use(
      [].concat(u, [
        function (y, w, d) {
          y === 2 &&
            d.length &&
            d[0].lastIndexOf(n) > 0 &&
            (d[0] = d[0].replace(r, g));
        },
        f,
        function (y) {
          if (y === -2) {
            var w = p;
            return (p = []), w;
          }
        },
      ])
    ),
    (v.hash = u.length
      ? u
          .reduce(function (y, w) {
            return w.name || Jr(15), Rn(y, w.name);
          }, 5381)
          .toString()
      : ""),
    v
  );
}
var Sf = Et.createContext();
Sf.Consumer;
var wf = Et.createContext(),
  Bm = (wf.Consumer, new vf()),
  go = jm();
function bm() {
  return X.exports.useContext(Sf) || Bm;
}
function Vm() {
  return X.exports.useContext(wf) || go;
}
var Hm = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (i, l) {
        l === void 0 && (l = go);
        var s = r.name + l.hash;
        i.hasNameForId(r.id, s) ||
          i.insertRules(r.id, s, l(r.rules, s, "@keyframes"));
      }),
        (this.toString = function () {
          return Jr(12, String(r.name));
        }),
        (this.name = t),
        (this.id = "sc-keyframes-" + t),
        (this.rules = n);
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = go), this.name + t.hash;
      }),
      e
    );
  })(),
  Wm = /([A-Z])/,
  Gm = /([A-Z])/g,
  Um = /^ms-/,
  Ym = function (e) {
    return "-" + e.toLowerCase();
  };
function bu(e) {
  return Wm.test(e) ? e.replace(Gm, Ym).replace(Um, "-ms-") : e;
}
var Vu = function (e) {
  return e == null || e === !1 || e === "";
};
function qn(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var i, l = [], s = 0, a = e.length; s < a; s += 1)
      (i = qn(e[s], t, n, r)) !== "" &&
        (Array.isArray(i) ? l.push.apply(l, i) : l.push(i));
    return l;
  }
  if (Vu(e)) return "";
  if (wa(e)) return "." + e.styledComponentId;
  if (Yr(e)) {
    if (
      typeof (u = e) != "function" ||
      (u.prototype && u.prototype.isReactComponent) ||
      !t
    )
      return e;
    var o = e(t);
    return qn(o, t, n, r);
  }
  var u;
  return e instanceof Hm
    ? n
      ? (e.inject(n, r), e.getName(r))
      : e
    : ho(e)
    ? (function c(p, f) {
        var g,
          v,
          y = [];
        for (var w in p)
          p.hasOwnProperty(w) &&
            !Vu(p[w]) &&
            ((Array.isArray(p[w]) && p[w].isCss) || Yr(p[w])
              ? y.push(bu(w) + ":", p[w], ";")
              : ho(p[w])
              ? y.push.apply(y, c(p[w], w))
              : y.push(
                  bu(w) +
                    ": " +
                    ((g = w),
                    (v = p[w]) == null || typeof v == "boolean" || v === ""
                      ? ""
                      : typeof v != "number" || v === 0 || g in um
                      ? String(v).trim()
                      : v + "px") +
                    ";"
                ));
        return f ? [f + " {"].concat(y, ["}"]) : y;
      })(e)
    : e.toString();
}
var Hu = function (e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Qm(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  return Yr(e) || ho(e)
    ? Hu(qn(Du(al, [e].concat(n))))
    : n.length === 0 && e.length === 1 && typeof e[0] == "string"
    ? e
    : Hu(qn(Du(e, n)));
}
var Xm = function (e, t, n) {
    return (
      n === void 0 && (n = en), (e.theme !== n.theme && e.theme) || t || n.theme
    );
  },
  Km = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  qm = /(^-|-$)/g;
function fs(e) {
  return e.replace(Km, "-").replace(qm, "");
}
var Zm = function (e) {
  return mo(yf(e) >>> 0);
};
function wi(e) {
  return typeof e == "string" && !0;
}
var vo = function (e) {
    return (
      typeof e == "function" ||
      (typeof e == "object" && e !== null && !Array.isArray(e))
    );
  },
  Jm = function (e) {
    return e !== "__proto__" && e !== "constructor" && e !== "prototype";
  };
function e0(e, t, n) {
  var r = e[n];
  vo(t) && vo(r) ? xf(r, t) : (e[n] = t);
}
function xf(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  for (var i = 0, l = n; i < l.length; i++) {
    var s = l[i];
    if (vo(s)) for (var a in s) Jm(a) && e0(e, s[a], a);
  }
  return e;
}
var Cf = Et.createContext();
Cf.Consumer;
var ps = {};
function Ef(e, t, n) {
  var r = wa(e),
    i = !wi(e),
    l = t.attrs,
    s = l === void 0 ? al : l,
    a = t.componentId,
    o =
      a === void 0
        ? (function (h, m) {
            var S = typeof h != "string" ? "sc" : fs(h);
            ps[S] = (ps[S] || 0) + 1;
            var E = S + "-" + Zm("5.3.6" + S + ps[S]);
            return m ? m + "-" + E : E;
          })(t.displayName, t.parentComponentId)
        : a,
    u = t.displayName,
    c =
      u === void 0
        ? (function (h) {
            return wi(h) ? "styled." + h : "Styled(" + Fu(h) + ")";
          })(e)
        : u,
    p =
      t.displayName && t.componentId
        ? fs(t.displayName) + "-" + t.componentId
        : t.componentId || o,
    f = r && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s,
    g = t.shouldForwardProp;
  r &&
    e.shouldForwardProp &&
    (g = t.shouldForwardProp
      ? function (h, m, S) {
          return e.shouldForwardProp(h, m, S) && t.shouldForwardProp(h, m, S);
        }
      : e.shouldForwardProp);
  var v,
    y = new Rm(n, p, r ? e.componentStyle : void 0),
    w = y.isStatic && s.length === 0,
    d = function (h, m) {
      return (function (S, E, T, M) {
        var k = S.attrs,
          V = S.componentStyle,
          _ = S.defaultProps,
          D = S.foldedComponentIds,
          F = S.shouldForwardProp,
          K = S.styledComponentId,
          ge = S.target,
          de = (function (B, x, U) {
            B === void 0 && (B = en);
            var O = zt({}, x, { theme: B }),
              fe = {};
            return (
              U.forEach(function (q) {
                var ee,
                  H,
                  Te,
                  Ve = q;
                for (ee in (Yr(Ve) && (Ve = Ve(O)), Ve))
                  O[ee] = fe[ee] =
                    ee === "className"
                      ? ((H = fe[ee]),
                        (Te = Ve[ee]),
                        H && Te ? H + " " + Te : H || Te)
                      : Ve[ee];
              }),
              [O, fe]
            );
          })(Xm(E, X.exports.useContext(Cf), _) || en, E, k),
          Xe = de[0],
          ye = de[1],
          z = (function (B, x, U, O) {
            var fe = bm(),
              q = Vm(),
              ee = x
                ? B.generateAndInjectStyles(en, fe, q)
                : B.generateAndInjectStyles(U, fe, q);
            return ee;
          })(V, M, Xe),
          R = T,
          j = ye.$as || E.$as || ye.as || E.as || ge,
          J = wi(j),
          L = ye !== E ? zt({}, E, {}, ye) : E,
          N = {};
        for (var $ in L)
          $[0] !== "$" &&
            $ !== "as" &&
            ($ === "forwardedAs"
              ? (N.as = L[$])
              : (F ? F($, $u, j) : !J || $u($)) && (N[$] = L[$]));
        return (
          E.style &&
            ye.style !== E.style &&
            (N.style = zt({}, E.style, {}, ye.style)),
          (N.className = Array.prototype
            .concat(D, K, z !== K ? z : null, E.className, ye.className)
            .filter(Boolean)
            .join(" ")),
          (N.ref = R),
          X.exports.createElement(j, N)
        );
      })(v, h, m, w);
    };
  return (
    (d.displayName = c),
    ((v = Et.forwardRef(d)).attrs = f),
    (v.componentStyle = y),
    (v.displayName = c),
    (v.shouldForwardProp = g),
    (v.foldedComponentIds = r
      ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
      : al),
    (v.styledComponentId = p),
    (v.target = r ? e.target : e),
    (v.withComponent = function (h) {
      var m = t.componentId,
        S = (function (T, M) {
          if (T == null) return {};
          var k,
            V,
            _ = {},
            D = Object.keys(T);
          for (V = 0; V < D.length; V++)
            (k = D[V]), M.indexOf(k) >= 0 || (_[k] = T[k]);
          return _;
        })(t, ["componentId"]),
        E = m && m + "-" + (wi(h) ? h : fs(Fu(h)));
      return Ef(h, zt({}, S, { attrs: f, componentId: E }), n);
    }),
    Object.defineProperty(v, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (h) {
        this._foldedDefaultProps = r ? xf({}, e.defaultProps, h) : h;
      },
    }),
    (v.toString = function () {
      return "." + v.styledComponentId;
    }),
    i &&
      Sm(v, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0,
      }),
    v
  );
}
var yo = function (e) {
  return (function t(n, r, i) {
    if ((i === void 0 && (i = en), !Tl.exports.isValidElementType(r)))
      return Jr(1, String(r));
    var l = function () {
      return n(r, i, Qm.apply(void 0, arguments));
    };
    return (
      (l.withConfig = function (s) {
        return t(n, r, zt({}, i, {}, s));
      }),
      (l.attrs = function (s) {
        return t(
          n,
          r,
          zt({}, i, {
            attrs: Array.prototype.concat(i.attrs, s).filter(Boolean),
          })
        );
      }),
      l
    );
  })(Ef, e);
};
[
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "textPath",
  "tspan",
].forEach(function (e) {
  yo[e] = yo(e);
});
const re = yo;
var Rl = { exports: {} },
  Dl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var t0 = X.exports,
  n0 = Symbol.for("react.element"),
  r0 = Symbol.for("react.fragment"),
  i0 = Object.prototype.hasOwnProperty,
  l0 = t0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  s0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function kf(e, t, n) {
  var r,
    i = {},
    l = null,
    s = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) i0.call(t, r) && !s0.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: n0,
    type: e,
    key: l,
    ref: s,
    props: i,
    _owner: l0.current,
  };
}
Dl.Fragment = r0;
Dl.jsx = kf;
Dl.jsxs = kf;
(function (e) {
  e.exports = Dl;
})(Rl);
const Ca = Rl.exports.Fragment,
  C = Rl.exports.jsx,
  W = Rl.exports.jsxs,
  o0 = re.footer`
margin-top: 30px;
padding: 5rem;
background: rgb(32, 29, 72);
display: grid;
place-content: center;
`;
re.a`
color: white;
`;
const a0 = re.p`
color: white;
`,
  u0 = () =>
    C(o0, {
      children: W(a0, {
        children: [
          "Ceci est un site pour d\xE9crocher un entretien chez Vitibot pour un poste de D\xE9veloppeur Front-end.",
          C("br", {}),
          "Fait avec \u2764 et grande motivation par Cl\xE9ment BELLIER",
        ],
      }),
    }),
  c0 = re.button`
font-size: .5rem;
line-height: 1;
text-transform: uppercase;
border: none;
background: none;
cursor: pointer;
width: 40px;
height: 40px;
aspect-ratio:1;
position: relative;
margin-bottom: 10px;
&:before, &:after{
position: absolute;
display: block;
content: "";
width: 1.25rem;
height: 2px;
background: rgb(0, 0, 0);
top: 50%;
left:50%;
transform: translateX(-50%);
}
&:before{
    transform: translate(-50%, -200%);
}
& span{
    position: absolute;
    bottom: 0;
    left:50%;
    transform: translateX(-50%);
}
@media (min-width: 900px){
    display: none;
}
`,
  d0 = () =>
    C(c0, {
      onClick: (e) => e.preventDefault(),
      children: C("span", { children: "Menu" }),
    }),
  Wu = re.svg`
  width: 25px;
  height: 25px;
  color: rgb(117, 117, 117);
  padding: 0px 0.625rem;
  line-height: 1.1875rem;
`,
  f0 = re.div`
margin-inline: 20px;
font-size: 0.875rem;
display: flex;
align-items: center;
margin-bottom: 15px;
& a{
    color: rgb(0, 109, 183);
}
@media(min-width: 900px){
    margin-top: 10px;
}
`,
  p0 = () =>
    W(f0, {
      children: [
        C("a", { children: "Accueil" }),
        C(Wu, {
          width: "18",
          height: "28",
          viewBox: "0 0 18 28",
          "aria-hidden": "true",
          xmlns: "http://www.w3.org/2000/svg",
          children: C("path", {
            d: "M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z",
            fill: "currentColor",
          }),
        }),
        C("a", { children: "Ideas" }),
        C(Wu, {
          width: "18",
          height: "28",
          viewBox: "0 0 18 28",
          "aria-hidden": "true",
          xmlns: "http://www.w3.org/2000/svg",
          children: C("path", {
            d: "M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z",
            fill: "currentColor",
          }),
        }),
        "BAKUS de Vitibot",
      ],
    }),
  h0 = re.header`
  height: 54px;
  margin-inline: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-image: none;
  @media (min-width: 900px) {
    border-image: conic-gradient(rgb(255, 207, 0) 0 0) fill 0/0/0 100vmax;
    height: 75px;
  }
`,
  m0 = re.div`
  width: 100%;
  height: 2px;
  background: rgb(255, 207, 0);
`,
  Gu = re.div`
  cursor: pointer;
  height: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
`,
  g0 = re.img`
  cursor: pointer;
  width: 40px;
  margin-right: 2rem;
  @media (min-width: 900px) {
    width: 54px;
  }
`,
  hs = re.a`
  margin-right: 2rem;
  text-transform: uppercase;
  color: rgb(0, 0, 0);
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.1875rem;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  &:hover {
    border-bottom: 3px solid rgb(0, 0, 0);
  }
  @media (max-width: 900px) {
    display: none;
  }
`,
  v0 = () =>
    W(Ca, {
      children: [
        W(h0, {
          children: [
            W(Gu, {
              children: [
                C(d0, {}),
                C(g0, { src: "./assets/lego.svg" }),
                C(hs, { href: "#", children: "Boutique" }),
                C(hs, { href: "#", children: "D\xE9couvrir" }),
                C(hs, { href: "#", children: "Aide" }),
              ],
            }),
            W(Gu, {
              children: [
                C("img", { src: "./assets/search.svg", width: "20px" }),
                C("img", { src: "./assets/minifig-head.svg", width: "20px" }),
                C("img", { src: "./assets/heart.svg", width: "20px" }),
                C("img", { src: "./assets/cart.svg", width: "20px" }),
              ],
            }),
          ],
        }),
        C(m0, {}),
        C(p0, {}),
      ],
    }),
  y0 = re.a`
  display: block;
  width: 100%;
  padding: 0.9375rem;
  border-style: solid;
  border-radius: 4px;
  border-collapse: collapse;
  text-align: center;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.1875rem;
  background-color: rgb(253, 128, 36);
  border-color: rgb(253, 128, 36);
  color: rgb(0, 0, 0);
  position: relative;
  border-width: 2px;
  cursor: pointer;
`,
  vr = ({ url: e, children: t }) =>
    C(y0, { href: e, target: "_blank", children: t });
function Uu(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function Ea(e = {}, t = {}) {
  Object.keys(t).forEach((n) => {
    typeof e[n] > "u"
      ? (e[n] = t[n])
      : Uu(t[n]) && Uu(e[n]) && Object.keys(t[n]).length > 0 && Ea(e[n], t[n]);
  });
}
const Tf = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function Qe() {
  const e = typeof document < "u" ? document : {};
  return Ea(e, Tf), e;
}
const S0 = {
  document: Tf,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function ke() {
  const e = typeof window < "u" ? window : {};
  return Ea(e, S0), e;
}
function w0(e) {
  const t = e.__proto__;
  Object.defineProperty(e, "__proto__", {
    get() {
      return t;
    },
    set(n) {
      t.__proto__ = n;
    },
  });
}
class Wt extends Array {
  constructor(t) {
    typeof t == "number" ? super(t) : (super(...(t || [])), w0(this));
  }
}
function ei(e = []) {
  const t = [];
  return (
    e.forEach((n) => {
      Array.isArray(n) ? t.push(...ei(n)) : t.push(n);
    }),
    t
  );
}
function Pf(e, t) {
  return Array.prototype.filter.call(e, t);
}
function x0(e) {
  const t = [];
  for (let n = 0; n < e.length; n += 1) t.indexOf(e[n]) === -1 && t.push(e[n]);
  return t;
}
function C0(e, t) {
  if (typeof e != "string") return [e];
  const n = [],
    r = t.querySelectorAll(e);
  for (let i = 0; i < r.length; i += 1) n.push(r[i]);
  return n;
}
function A(e, t) {
  const n = ke(),
    r = Qe();
  let i = [];
  if (!t && e instanceof Wt) return e;
  if (!e) return new Wt(i);
  if (typeof e == "string") {
    const l = e.trim();
    if (l.indexOf("<") >= 0 && l.indexOf(">") >= 0) {
      let s = "div";
      l.indexOf("<li") === 0 && (s = "ul"),
        l.indexOf("<tr") === 0 && (s = "tbody"),
        (l.indexOf("<td") === 0 || l.indexOf("<th") === 0) && (s = "tr"),
        l.indexOf("<tbody") === 0 && (s = "table"),
        l.indexOf("<option") === 0 && (s = "select");
      const a = r.createElement(s);
      a.innerHTML = l;
      for (let o = 0; o < a.childNodes.length; o += 1) i.push(a.childNodes[o]);
    } else i = C0(e.trim(), t || r);
  } else if (e.nodeType || e === n || e === r) i.push(e);
  else if (Array.isArray(e)) {
    if (e instanceof Wt) return e;
    i = e;
  }
  return new Wt(x0(i));
}
A.fn = Wt.prototype;
function E0(...e) {
  const t = ei(e.map((n) => n.split(" ")));
  return (
    this.forEach((n) => {
      n.classList.add(...t);
    }),
    this
  );
}
function k0(...e) {
  const t = ei(e.map((n) => n.split(" ")));
  return (
    this.forEach((n) => {
      n.classList.remove(...t);
    }),
    this
  );
}
function T0(...e) {
  const t = ei(e.map((n) => n.split(" ")));
  this.forEach((n) => {
    t.forEach((r) => {
      n.classList.toggle(r);
    });
  });
}
function P0(...e) {
  const t = ei(e.map((n) => n.split(" ")));
  return (
    Pf(this, (n) => t.filter((r) => n.classList.contains(r)).length > 0)
      .length > 0
  );
}
function _0(e, t) {
  if (arguments.length === 1 && typeof e == "string")
    return this[0] ? this[0].getAttribute(e) : void 0;
  for (let n = 0; n < this.length; n += 1)
    if (arguments.length === 2) this[n].setAttribute(e, t);
    else for (const r in e) (this[n][r] = e[r]), this[n].setAttribute(r, e[r]);
  return this;
}
function M0(e) {
  for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
  return this;
}
function z0(e) {
  for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
  return this;
}
function L0(e) {
  for (let t = 0; t < this.length; t += 1)
    this[t].style.transitionDuration = typeof e != "string" ? `${e}ms` : e;
  return this;
}
function O0(...e) {
  let [t, n, r, i] = e;
  typeof e[1] == "function" && (([t, r, i] = e), (n = void 0)), i || (i = !1);
  function l(u) {
    const c = u.target;
    if (!c) return;
    const p = u.target.dom7EventData || [];
    if ((p.indexOf(u) < 0 && p.unshift(u), A(c).is(n))) r.apply(c, p);
    else {
      const f = A(c).parents();
      for (let g = 0; g < f.length; g += 1) A(f[g]).is(n) && r.apply(f[g], p);
    }
  }
  function s(u) {
    const c = u && u.target ? u.target.dom7EventData || [] : [];
    c.indexOf(u) < 0 && c.unshift(u), r.apply(this, c);
  }
  const a = t.split(" ");
  let o;
  for (let u = 0; u < this.length; u += 1) {
    const c = this[u];
    if (n)
      for (o = 0; o < a.length; o += 1) {
        const p = a[o];
        c.dom7LiveListeners || (c.dom7LiveListeners = {}),
          c.dom7LiveListeners[p] || (c.dom7LiveListeners[p] = []),
          c.dom7LiveListeners[p].push({ listener: r, proxyListener: l }),
          c.addEventListener(p, l, i);
      }
    else
      for (o = 0; o < a.length; o += 1) {
        const p = a[o];
        c.dom7Listeners || (c.dom7Listeners = {}),
          c.dom7Listeners[p] || (c.dom7Listeners[p] = []),
          c.dom7Listeners[p].push({ listener: r, proxyListener: s }),
          c.addEventListener(p, s, i);
      }
  }
  return this;
}
function N0(...e) {
  let [t, n, r, i] = e;
  typeof e[1] == "function" && (([t, r, i] = e), (n = void 0)), i || (i = !1);
  const l = t.split(" ");
  for (let s = 0; s < l.length; s += 1) {
    const a = l[s];
    for (let o = 0; o < this.length; o += 1) {
      const u = this[o];
      let c;
      if (
        (!n && u.dom7Listeners
          ? (c = u.dom7Listeners[a])
          : n && u.dom7LiveListeners && (c = u.dom7LiveListeners[a]),
        c && c.length)
      )
        for (let p = c.length - 1; p >= 0; p -= 1) {
          const f = c[p];
          (r && f.listener === r) ||
          (r &&
            f.listener &&
            f.listener.dom7proxy &&
            f.listener.dom7proxy === r)
            ? (u.removeEventListener(a, f.proxyListener, i), c.splice(p, 1))
            : r ||
              (u.removeEventListener(a, f.proxyListener, i), c.splice(p, 1));
        }
    }
  }
  return this;
}
function $0(...e) {
  const t = ke(),
    n = e[0].split(" "),
    r = e[1];
  for (let i = 0; i < n.length; i += 1) {
    const l = n[i];
    for (let s = 0; s < this.length; s += 1) {
      const a = this[s];
      if (t.CustomEvent) {
        const o = new t.CustomEvent(l, {
          detail: r,
          bubbles: !0,
          cancelable: !0,
        });
        (a.dom7EventData = e.filter((u, c) => c > 0)),
          a.dispatchEvent(o),
          (a.dom7EventData = []),
          delete a.dom7EventData;
      }
    }
  }
  return this;
}
function I0(e) {
  const t = this;
  function n(r) {
    r.target === this && (e.call(this, r), t.off("transitionend", n));
  }
  return e && t.on("transitionend", n), this;
}
function A0(e) {
  if (this.length > 0) {
    if (e) {
      const t = this.styles();
      return (
        this[0].offsetWidth +
        parseFloat(t.getPropertyValue("margin-right")) +
        parseFloat(t.getPropertyValue("margin-left"))
      );
    }
    return this[0].offsetWidth;
  }
  return null;
}
function R0(e) {
  if (this.length > 0) {
    if (e) {
      const t = this.styles();
      return (
        this[0].offsetHeight +
        parseFloat(t.getPropertyValue("margin-top")) +
        parseFloat(t.getPropertyValue("margin-bottom"))
      );
    }
    return this[0].offsetHeight;
  }
  return null;
}
function D0() {
  if (this.length > 0) {
    const e = ke(),
      t = Qe(),
      n = this[0],
      r = n.getBoundingClientRect(),
      i = t.body,
      l = n.clientTop || i.clientTop || 0,
      s = n.clientLeft || i.clientLeft || 0,
      a = n === e ? e.scrollY : n.scrollTop,
      o = n === e ? e.scrollX : n.scrollLeft;
    return { top: r.top + a - l, left: r.left + o - s };
  }
  return null;
}
function F0() {
  const e = ke();
  return this[0] ? e.getComputedStyle(this[0], null) : {};
}
function j0(e, t) {
  const n = ke();
  let r;
  if (arguments.length === 1)
    if (typeof e == "string") {
      if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e);
    } else {
      for (r = 0; r < this.length; r += 1)
        for (const i in e) this[r].style[i] = e[i];
      return this;
    }
  if (arguments.length === 2 && typeof e == "string") {
    for (r = 0; r < this.length; r += 1) this[r].style[e] = t;
    return this;
  }
  return this;
}
function B0(e) {
  return e
    ? (this.forEach((t, n) => {
        e.apply(t, [t, n]);
      }),
      this)
    : this;
}
function b0(e) {
  const t = Pf(this, e);
  return A(t);
}
function V0(e) {
  if (typeof e > "u") return this[0] ? this[0].innerHTML : null;
  for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
  return this;
}
function H0(e) {
  if (typeof e > "u") return this[0] ? this[0].textContent.trim() : null;
  for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
  return this;
}
function W0(e) {
  const t = ke(),
    n = Qe(),
    r = this[0];
  let i, l;
  if (!r || typeof e > "u") return !1;
  if (typeof e == "string") {
    if (r.matches) return r.matches(e);
    if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
    if (r.msMatchesSelector) return r.msMatchesSelector(e);
    for (i = A(e), l = 0; l < i.length; l += 1) if (i[l] === r) return !0;
    return !1;
  }
  if (e === n) return r === n;
  if (e === t) return r === t;
  if (e.nodeType || e instanceof Wt) {
    for (i = e.nodeType ? [e] : e, l = 0; l < i.length; l += 1)
      if (i[l] === r) return !0;
    return !1;
  }
  return !1;
}
function G0() {
  let e = this[0],
    t;
  if (e) {
    for (t = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (t += 1);
    return t;
  }
}
function U0(e) {
  if (typeof e > "u") return this;
  const t = this.length;
  if (e > t - 1) return A([]);
  if (e < 0) {
    const n = t + e;
    return n < 0 ? A([]) : A([this[n]]);
  }
  return A([this[e]]);
}
function Y0(...e) {
  let t;
  const n = Qe();
  for (let r = 0; r < e.length; r += 1) {
    t = e[r];
    for (let i = 0; i < this.length; i += 1)
      if (typeof t == "string") {
        const l = n.createElement("div");
        for (l.innerHTML = t; l.firstChild; ) this[i].appendChild(l.firstChild);
      } else if (t instanceof Wt)
        for (let l = 0; l < t.length; l += 1) this[i].appendChild(t[l]);
      else this[i].appendChild(t);
  }
  return this;
}
function Q0(e) {
  const t = Qe();
  let n, r;
  for (n = 0; n < this.length; n += 1)
    if (typeof e == "string") {
      const i = t.createElement("div");
      for (i.innerHTML = e, r = i.childNodes.length - 1; r >= 0; r -= 1)
        this[n].insertBefore(i.childNodes[r], this[n].childNodes[0]);
    } else if (e instanceof Wt)
      for (r = 0; r < e.length; r += 1)
        this[n].insertBefore(e[r], this[n].childNodes[0]);
    else this[n].insertBefore(e, this[n].childNodes[0]);
  return this;
}
function X0(e) {
  return this.length > 0
    ? e
      ? this[0].nextElementSibling && A(this[0].nextElementSibling).is(e)
        ? A([this[0].nextElementSibling])
        : A([])
      : this[0].nextElementSibling
      ? A([this[0].nextElementSibling])
      : A([])
    : A([]);
}
function K0(e) {
  const t = [];
  let n = this[0];
  if (!n) return A([]);
  for (; n.nextElementSibling; ) {
    const r = n.nextElementSibling;
    e ? A(r).is(e) && t.push(r) : t.push(r), (n = r);
  }
  return A(t);
}
function q0(e) {
  if (this.length > 0) {
    const t = this[0];
    return e
      ? t.previousElementSibling && A(t.previousElementSibling).is(e)
        ? A([t.previousElementSibling])
        : A([])
      : t.previousElementSibling
      ? A([t.previousElementSibling])
      : A([]);
  }
  return A([]);
}
function Z0(e) {
  const t = [];
  let n = this[0];
  if (!n) return A([]);
  for (; n.previousElementSibling; ) {
    const r = n.previousElementSibling;
    e ? A(r).is(e) && t.push(r) : t.push(r), (n = r);
  }
  return A(t);
}
function J0(e) {
  const t = [];
  for (let n = 0; n < this.length; n += 1)
    this[n].parentNode !== null &&
      (e
        ? A(this[n].parentNode).is(e) && t.push(this[n].parentNode)
        : t.push(this[n].parentNode));
  return A(t);
}
function e1(e) {
  const t = [];
  for (let n = 0; n < this.length; n += 1) {
    let r = this[n].parentNode;
    for (; r; ) e ? A(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
  }
  return A(t);
}
function t1(e) {
  let t = this;
  return typeof e > "u" ? A([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
}
function n1(e) {
  const t = [];
  for (let n = 0; n < this.length; n += 1) {
    const r = this[n].querySelectorAll(e);
    for (let i = 0; i < r.length; i += 1) t.push(r[i]);
  }
  return A(t);
}
function r1(e) {
  const t = [];
  for (let n = 0; n < this.length; n += 1) {
    const r = this[n].children;
    for (let i = 0; i < r.length; i += 1) (!e || A(r[i]).is(e)) && t.push(r[i]);
  }
  return A(t);
}
function i1() {
  for (let e = 0; e < this.length; e += 1)
    this[e].parentNode && this[e].parentNode.removeChild(this[e]);
  return this;
}
const Yu = {
  addClass: E0,
  removeClass: k0,
  hasClass: P0,
  toggleClass: T0,
  attr: _0,
  removeAttr: M0,
  transform: z0,
  transition: L0,
  on: O0,
  off: N0,
  trigger: $0,
  transitionEnd: I0,
  outerWidth: A0,
  outerHeight: R0,
  styles: F0,
  offset: D0,
  css: j0,
  each: B0,
  html: V0,
  text: H0,
  is: W0,
  index: G0,
  eq: U0,
  append: Y0,
  prepend: Q0,
  next: X0,
  nextAll: K0,
  prev: q0,
  prevAll: Z0,
  parent: J0,
  parents: e1,
  closest: t1,
  find: n1,
  children: r1,
  filter: b0,
  remove: i1,
};
Object.keys(Yu).forEach((e) => {
  Object.defineProperty(A.fn, e, { value: Yu[e], writable: !0 });
});
function l1(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function So(e, t = 0) {
  return setTimeout(e, t);
}
function tn() {
  return Date.now();
}
function s1(e) {
  const t = ke();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function o1(e, t = "x") {
  const n = ke();
  let r, i, l;
  const s = s1(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = s.transform || s.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((a) => a.replace(",", "."))
            .join(", ")),
        (l = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((l =
          s.MozTransform ||
          s.OTransform ||
          s.MsTransform ||
          s.msTransform ||
          s.transform ||
          s
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = l.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = l.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = l.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  );
}
function yr(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function a1(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function qe(...e) {
  const t = Object(e[0]),
    n = ["__proto__", "constructor", "prototype"];
  for (let r = 1; r < e.length; r += 1) {
    const i = e[r];
    if (i != null && !a1(i)) {
      const l = Object.keys(Object(i)).filter((s) => n.indexOf(s) < 0);
      for (let s = 0, a = l.length; s < a; s += 1) {
        const o = l[s],
          u = Object.getOwnPropertyDescriptor(i, o);
        u !== void 0 &&
          u.enumerable &&
          (yr(t[o]) && yr(i[o])
            ? i[o].__swiper__
              ? (t[o] = i[o])
              : qe(t[o], i[o])
            : !yr(t[o]) && yr(i[o])
            ? ((t[o] = {}), i[o].__swiper__ ? (t[o] = i[o]) : qe(t[o], i[o]))
            : (t[o] = i[o]));
      }
    }
  }
  return t;
}
function xi(e, t, n) {
  e.style.setProperty(t, n);
}
function _f({ swiper: e, targetPosition: t, side: n }) {
  const r = ke(),
    i = -e.translate;
  let l = null,
    s;
  const a = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = "none"),
    r.cancelAnimationFrame(e.cssModeFrameID);
  const o = t > i ? "next" : "prev",
    u = (p, f) => (o === "next" && p >= f) || (o === "prev" && p <= f),
    c = () => {
      (s = new Date().getTime()), l === null && (l = s);
      const p = Math.max(Math.min((s - l) / a, 1), 0),
        f = 0.5 - Math.cos(p * Math.PI) / 2;
      let g = i + f * (t - i);
      if ((u(g, t) && (g = t), e.wrapperEl.scrollTo({ [n]: g }), u(g, t))) {
        (e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [n]: g });
          }),
          r.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = r.requestAnimationFrame(c);
    };
  c();
}
let ms;
function u1() {
  const e = ke(),
    t = Qe();
  return {
    smoothScroll:
      t.documentElement && "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
    passiveListener: (function () {
      let r = !1;
      try {
        const i = Object.defineProperty({}, "passive", {
          get() {
            r = !0;
          },
        });
        e.addEventListener("testPassiveListener", null, i);
      } catch {}
      return r;
    })(),
    gestures: (function () {
      return "ongesturestart" in e;
    })(),
  };
}
function Mf() {
  return ms || (ms = u1()), ms;
}
let gs;
function c1({ userAgent: e } = {}) {
  const t = Mf(),
    n = ke(),
    r = n.navigator.platform,
    i = e || n.navigator.userAgent,
    l = { ios: !1, android: !1 },
    s = n.screen.width,
    a = n.screen.height,
    o = i.match(/(Android);?[\s\/]+([\d.]+)?/);
  let u = i.match(/(iPad).*OS\s([\d_]+)/);
  const c = i.match(/(iPod)(.*OS\s([\d_]+))?/),
    p = !u && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    f = r === "Win32";
  let g = r === "MacIntel";
  const v = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !u &&
      g &&
      t.touch &&
      v.indexOf(`${s}x${a}`) >= 0 &&
      ((u = i.match(/(Version)\/([\d.]+)/)),
      u || (u = [0, 1, "13_0_0"]),
      (g = !1)),
    o && !f && ((l.os = "android"), (l.android = !0)),
    (u || p || c) && ((l.os = "ios"), (l.ios = !0)),
    l
  );
}
function d1(e = {}) {
  return gs || (gs = c1(e)), gs;
}
let vs;
function f1() {
  const e = ke();
  function t() {
    const n = e.navigator.userAgent.toLowerCase();
    return (
      n.indexOf("safari") >= 0 &&
      n.indexOf("chrome") < 0 &&
      n.indexOf("android") < 0
    );
  }
  return {
    isSafari: t(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
  };
}
function p1() {
  return vs || (vs = f1()), vs;
}
function h1({ swiper: e, on: t, emit: n }) {
  const r = ke();
  let i = null,
    l = null;
  const s = () => {
      !e || e.destroyed || !e.initialized || (n("beforeResize"), n("resize"));
    },
    a = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((i = new ResizeObserver((c) => {
          l = r.requestAnimationFrame(() => {
            const { width: p, height: f } = e;
            let g = p,
              v = f;
            c.forEach(({ contentBoxSize: y, contentRect: w, target: d }) => {
              (d && d !== e.el) ||
                ((g = w ? w.width : (y[0] || y).inlineSize),
                (v = w ? w.height : (y[0] || y).blockSize));
            }),
              (g !== p || v !== f) && s();
          });
        })),
        i.observe(e.el));
    },
    o = () => {
      l && r.cancelAnimationFrame(l),
        i && i.unobserve && e.el && (i.unobserve(e.el), (i = null));
    },
    u = () => {
      !e || e.destroyed || !e.initialized || n("orientationchange");
    };
  t("init", () => {
    if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
      a();
      return;
    }
    r.addEventListener("resize", s), r.addEventListener("orientationchange", u);
  }),
    t("destroy", () => {
      o(),
        r.removeEventListener("resize", s),
        r.removeEventListener("orientationchange", u);
    });
}
function m1({ swiper: e, extendParams: t, on: n, emit: r }) {
  const i = [],
    l = ke(),
    s = (u, c = {}) => {
      const p = l.MutationObserver || l.WebkitMutationObserver,
        f = new p((g) => {
          if (g.length === 1) {
            r("observerUpdate", g[0]);
            return;
          }
          const v = function () {
            r("observerUpdate", g[0]);
          };
          l.requestAnimationFrame
            ? l.requestAnimationFrame(v)
            : l.setTimeout(v, 0);
        });
      f.observe(u, {
        attributes: typeof c.attributes > "u" ? !0 : c.attributes,
        childList: typeof c.childList > "u" ? !0 : c.childList,
        characterData: typeof c.characterData > "u" ? !0 : c.characterData,
      }),
        i.push(f);
    },
    a = () => {
      if (!!e.params.observer) {
        if (e.params.observeParents) {
          const u = e.$el.parents();
          for (let c = 0; c < u.length; c += 1) s(u[c]);
        }
        s(e.$el[0], { childList: e.params.observeSlideChildren }),
          s(e.$wrapperEl[0], { attributes: !1 });
      }
    },
    o = () => {
      i.forEach((u) => {
        u.disconnect();
      }),
        i.splice(0, i.length);
    };
  t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    n("init", a),
    n("destroy", o);
}
const g1 = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((l) => {
        r.eventsListeners[l] || (r.eventsListeners[l] = []),
          r.eventsListeners[l][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function i(...l) {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(r, l);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, l) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(l, 1);
              });
        }),
      n
    );
  },
  emit(...e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
    let n, r, i;
    return (
      typeof e[0] == "string" || Array.isArray(e[0])
        ? ((n = e[0]), (r = e.slice(1, e.length)), (i = t))
        : ((n = e[0].events), (r = e[0].data), (i = e[0].context || t)),
      r.unshift(i),
      (Array.isArray(n) ? n : n.split(" ")).forEach((s) => {
        t.eventsAnyListeners &&
          t.eventsAnyListeners.length &&
          t.eventsAnyListeners.forEach((a) => {
            a.apply(i, [s, ...r]);
          }),
          t.eventsListeners &&
            t.eventsListeners[s] &&
            t.eventsListeners[s].forEach((a) => {
              a.apply(i, r);
            });
      }),
      t
    );
  },
};
function v1() {
  const e = this;
  let t, n;
  const r = e.$el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r[0].clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r[0].clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(r.css("padding-left") || 0, 10) -
        parseInt(r.css("padding-right") || 0, 10)),
      (n =
        n -
        parseInt(r.css("padding-top") || 0, 10) -
        parseInt(r.css("padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function y1() {
  const e = this;
  function t(_) {
    return e.isHorizontal()
      ? _
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[_];
  }
  function n(_, D) {
    return parseFloat(_.getPropertyValue(t(D)) || 0);
  }
  const r = e.params,
    { $wrapperEl: i, size: l, rtlTranslate: s, wrongRTL: a } = e,
    o = e.virtual && r.virtual.enabled,
    u = o ? e.virtual.slides.length : e.slides.length,
    c = i.children(`.${e.params.slideClass}`),
    p = o ? e.virtual.slides.length : c.length;
  let f = [];
  const g = [],
    v = [];
  let y = r.slidesOffsetBefore;
  typeof y == "function" && (y = r.slidesOffsetBefore.call(e));
  let w = r.slidesOffsetAfter;
  typeof w == "function" && (w = r.slidesOffsetAfter.call(e));
  const d = e.snapGrid.length,
    h = e.slidesGrid.length;
  let m = r.spaceBetween,
    S = -y,
    E = 0,
    T = 0;
  if (typeof l > "u") return;
  typeof m == "string" &&
    m.indexOf("%") >= 0 &&
    (m = (parseFloat(m.replace("%", "")) / 100) * l),
    (e.virtualSize = -m),
    s
      ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
      : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
    r.centeredSlides &&
      r.cssMode &&
      (xi(e.wrapperEl, "--swiper-centered-offset-before", ""),
      xi(e.wrapperEl, "--swiper-centered-offset-after", ""));
  const M = r.grid && r.grid.rows > 1 && e.grid;
  M && e.grid.initSlides(p);
  let k;
  const V =
    r.slidesPerView === "auto" &&
    r.breakpoints &&
    Object.keys(r.breakpoints).filter(
      (_) => typeof r.breakpoints[_].slidesPerView < "u"
    ).length > 0;
  for (let _ = 0; _ < p; _ += 1) {
    k = 0;
    const D = c.eq(_);
    if ((M && e.grid.updateSlide(_, D, p, t), D.css("display") !== "none")) {
      if (r.slidesPerView === "auto") {
        V && (c[_].style[t("width")] = "");
        const F = getComputedStyle(D[0]),
          K = D[0].style.transform,
          ge = D[0].style.webkitTransform;
        if (
          (K && (D[0].style.transform = "none"),
          ge && (D[0].style.webkitTransform = "none"),
          r.roundLengths)
        )
          k = e.isHorizontal() ? D.outerWidth(!0) : D.outerHeight(!0);
        else {
          const de = n(F, "width"),
            Xe = n(F, "padding-left"),
            ye = n(F, "padding-right"),
            z = n(F, "margin-left"),
            R = n(F, "margin-right"),
            j = F.getPropertyValue("box-sizing");
          if (j && j === "border-box") k = de + z + R;
          else {
            const { clientWidth: J, offsetWidth: L } = D[0];
            k = de + Xe + ye + z + R + (L - J);
          }
        }
        K && (D[0].style.transform = K),
          ge && (D[0].style.webkitTransform = ge),
          r.roundLengths && (k = Math.floor(k));
      } else
        (k = (l - (r.slidesPerView - 1) * m) / r.slidesPerView),
          r.roundLengths && (k = Math.floor(k)),
          c[_] && (c[_].style[t("width")] = `${k}px`);
      c[_] && (c[_].swiperSlideSize = k),
        v.push(k),
        r.centeredSlides
          ? ((S = S + k / 2 + E / 2 + m),
            E === 0 && _ !== 0 && (S = S - l / 2 - m),
            _ === 0 && (S = S - l / 2 - m),
            Math.abs(S) < 1 / 1e3 && (S = 0),
            r.roundLengths && (S = Math.floor(S)),
            T % r.slidesPerGroup === 0 && f.push(S),
            g.push(S))
          : (r.roundLengths && (S = Math.floor(S)),
            (T - Math.min(e.params.slidesPerGroupSkip, T)) %
              e.params.slidesPerGroup ===
              0 && f.push(S),
            g.push(S),
            (S = S + k + m)),
        (e.virtualSize += k + m),
        (E = k),
        (T += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, l) + w),
    s &&
      a &&
      (r.effect === "slide" || r.effect === "coverflow") &&
      i.css({ width: `${e.virtualSize + r.spaceBetween}px` }),
    r.setWrapperSize &&
      i.css({ [t("width")]: `${e.virtualSize + r.spaceBetween}px` }),
    M && e.grid.updateWrapperSize(k, f, t),
    !r.centeredSlides)
  ) {
    const _ = [];
    for (let D = 0; D < f.length; D += 1) {
      let F = f[D];
      r.roundLengths && (F = Math.floor(F)),
        f[D] <= e.virtualSize - l && _.push(F);
    }
    (f = _),
      Math.floor(e.virtualSize - l) - Math.floor(f[f.length - 1]) > 1 &&
        f.push(e.virtualSize - l);
  }
  if ((f.length === 0 && (f = [0]), r.spaceBetween !== 0)) {
    const _ = e.isHorizontal() && s ? "marginLeft" : t("marginRight");
    c.filter((D, F) => (r.cssMode ? F !== c.length - 1 : !0)).css({
      [_]: `${m}px`,
    });
  }
  if (r.centeredSlides && r.centeredSlidesBounds) {
    let _ = 0;
    v.forEach((F) => {
      _ += F + (r.spaceBetween ? r.spaceBetween : 0);
    }),
      (_ -= r.spaceBetween);
    const D = _ - l;
    f = f.map((F) => (F < 0 ? -y : F > D ? D + w : F));
  }
  if (r.centerInsufficientSlides) {
    let _ = 0;
    if (
      (v.forEach((D) => {
        _ += D + (r.spaceBetween ? r.spaceBetween : 0);
      }),
      (_ -= r.spaceBetween),
      _ < l)
    ) {
      const D = (l - _) / 2;
      f.forEach((F, K) => {
        f[K] = F - D;
      }),
        g.forEach((F, K) => {
          g[K] = F + D;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: c,
      snapGrid: f,
      slidesGrid: g,
      slidesSizesGrid: v,
    }),
    r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
  ) {
    xi(e.wrapperEl, "--swiper-centered-offset-before", `${-f[0]}px`),
      xi(
        e.wrapperEl,
        "--swiper-centered-offset-after",
        `${e.size / 2 - v[v.length - 1] / 2}px`
      );
    const _ = -e.snapGrid[0],
      D = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((F) => F + _)),
      (e.slidesGrid = e.slidesGrid.map((F) => F + D));
  }
  if (
    (p !== u && e.emit("slidesLengthChange"),
    f.length !== d &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    g.length !== h && e.emit("slidesGridLengthChange"),
    r.watchSlidesProgress && e.updateSlidesOffset(),
    !o && !r.cssMode && (r.effect === "slide" || r.effect === "fade"))
  ) {
    const _ = `${r.containerModifierClass}backface-hidden`,
      D = e.$el.hasClass(_);
    p <= r.maxBackfaceHiddenSlides
      ? D || e.$el.addClass(_)
      : D && e.$el.removeClass(_);
  }
}
function S1(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    l;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const s = (a) =>
    r
      ? t.slides.filter(
          (o) => parseInt(o.getAttribute("data-swiper-slide-index"), 10) === a
        )[0]
      : t.slides.eq(a)[0];
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || A([])).each((a) => {
        n.push(a);
      });
    else
      for (l = 0; l < Math.ceil(t.params.slidesPerView); l += 1) {
        const a = t.activeIndex + l;
        if (a > t.slides.length && !r) break;
        n.push(s(a));
      }
  else n.push(s(t.activeIndex));
  for (l = 0; l < n.length; l += 1)
    if (typeof n[l] < "u") {
      const a = n[l].offsetHeight;
      i = a > i ? a : i;
    }
  (i || i === 0) && t.$wrapperEl.css("height", `${i}px`);
}
function w1() {
  const e = this,
    t = e.slides;
  for (let n = 0; n < t.length; n += 1)
    t[n].swiperSlideOffset = e.isHorizontal()
      ? t[n].offsetLeft
      : t[n].offsetTop;
}
function x1(e = (this && this.translate) || 0) {
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: l } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let s = -e;
  i && (s = e),
    r.removeClass(n.slideVisibleClass),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []);
  for (let a = 0; a < r.length; a += 1) {
    const o = r[a];
    let u = o.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (u -= r[0].swiperSlideOffset);
    const c =
        (s + (n.centeredSlides ? t.minTranslate() : 0) - u) /
        (o.swiperSlideSize + n.spaceBetween),
      p =
        (s - l[0] + (n.centeredSlides ? t.minTranslate() : 0) - u) /
        (o.swiperSlideSize + n.spaceBetween),
      f = -(s - u),
      g = f + t.slidesSizesGrid[a];
    ((f >= 0 && f < t.size - 1) ||
      (g > 1 && g <= t.size) ||
      (f <= 0 && g >= t.size)) &&
      (t.visibleSlides.push(o),
      t.visibleSlidesIndexes.push(a),
      r.eq(a).addClass(n.slideVisibleClass)),
      (o.progress = i ? -c : c),
      (o.originalProgress = i ? -p : p);
  }
  t.visibleSlides = A(t.visibleSlides);
}
function C1(e) {
  const t = this;
  if (typeof e > "u") {
    const u = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * u) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: l, isEnd: s } = t;
  const a = l,
    o = s;
  r === 0
    ? ((i = 0), (l = !0), (s = !0))
    : ((i = (e - t.minTranslate()) / r), (l = i <= 0), (s = i >= 1)),
    Object.assign(t, { progress: i, isBeginning: l, isEnd: s }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    l && !a && t.emit("reachBeginning toEdge"),
    s && !o && t.emit("reachEnd toEdge"),
    ((a && !l) || (o && !s)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
function E1() {
  const e = this,
    { slides: t, params: n, $wrapperEl: r, activeIndex: i, realIndex: l } = e,
    s = e.virtual && n.virtual.enabled;
  t.removeClass(
    `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
  );
  let a;
  s
    ? (a = e.$wrapperEl.find(
        `.${n.slideClass}[data-swiper-slide-index="${i}"]`
      ))
    : (a = t.eq(i)),
    a.addClass(n.slideActiveClass),
    n.loop &&
      (a.hasClass(n.slideDuplicateClass)
        ? r
            .children(
              `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l}"]`
            )
            .addClass(n.slideDuplicateActiveClass)
        : r
            .children(
              `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l}"]`
            )
            .addClass(n.slideDuplicateActiveClass));
  let o = a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
  n.loop && o.length === 0 && ((o = t.eq(0)), o.addClass(n.slideNextClass));
  let u = a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
  n.loop && u.length === 0 && ((u = t.eq(-1)), u.addClass(n.slidePrevClass)),
    n.loop &&
      (o.hasClass(n.slideDuplicateClass)
        ? r
            .children(
              `.${n.slideClass}:not(.${
                n.slideDuplicateClass
              })[data-swiper-slide-index="${o.attr(
                "data-swiper-slide-index"
              )}"]`
            )
            .addClass(n.slideDuplicateNextClass)
        : r
            .children(
              `.${n.slideClass}.${
                n.slideDuplicateClass
              }[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`
            )
            .addClass(n.slideDuplicateNextClass),
      u.hasClass(n.slideDuplicateClass)
        ? r
            .children(
              `.${n.slideClass}:not(.${
                n.slideDuplicateClass
              })[data-swiper-slide-index="${u.attr(
                "data-swiper-slide-index"
              )}"]`
            )
            .addClass(n.slideDuplicatePrevClass)
        : r
            .children(
              `.${n.slideClass}.${
                n.slideDuplicateClass
              }[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`
            )
            .addClass(n.slideDuplicatePrevClass)),
    e.emitSlidesClasses();
}
function k1(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    {
      slidesGrid: r,
      snapGrid: i,
      params: l,
      activeIndex: s,
      realIndex: a,
      snapIndex: o,
    } = t;
  let u = e,
    c;
  if (typeof u > "u") {
    for (let f = 0; f < r.length; f += 1)
      typeof r[f + 1] < "u"
        ? n >= r[f] && n < r[f + 1] - (r[f + 1] - r[f]) / 2
          ? (u = f)
          : n >= r[f] && n < r[f + 1] && (u = f + 1)
        : n >= r[f] && (u = f);
    l.normalizeSlideIndex && (u < 0 || typeof u > "u") && (u = 0);
  }
  if (i.indexOf(n) >= 0) c = i.indexOf(n);
  else {
    const f = Math.min(l.slidesPerGroupSkip, u);
    c = f + Math.floor((u - f) / l.slidesPerGroup);
  }
  if ((c >= i.length && (c = i.length - 1), u === s)) {
    c !== o && ((t.snapIndex = c), t.emit("snapIndexChange"));
    return;
  }
  const p = parseInt(t.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
  Object.assign(t, {
    snapIndex: c,
    realIndex: p,
    previousIndex: s,
    activeIndex: u,
  }),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    a !== p && t.emit("realIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
}
function T1(e) {
  const t = this,
    n = t.params,
    r = A(e).closest(`.${n.slideClass}`)[0];
  let i = !1,
    l;
  if (r) {
    for (let s = 0; s < t.slides.length; s += 1)
      if (t.slides[s] === r) {
        (i = !0), (l = s);
        break;
      }
  }
  if (r && i)
    (t.clickedSlide = r),
      t.virtual && t.params.virtual.enabled
        ? (t.clickedIndex = parseInt(A(r).attr("data-swiper-slide-index"), 10))
        : (t.clickedIndex = l);
  else {
    (t.clickedSlide = void 0), (t.clickedIndex = void 0);
    return;
  }
  n.slideToClickedSlide &&
    t.clickedIndex !== void 0 &&
    t.clickedIndex !== t.activeIndex &&
    t.slideToClickedSlide();
}
const P1 = {
  updateSize: v1,
  updateSlides: y1,
  updateAutoHeight: S1,
  updateSlidesOffset: w1,
  updateSlidesProgress: x1,
  updateProgress: C1,
  updateSlidesClasses: E1,
  updateActiveIndex: k1,
  updateClickedSlide: T1,
};
function _1(e = this.isHorizontal() ? "x" : "y") {
  const t = this,
    { params: n, rtlTranslate: r, translate: i, $wrapperEl: l } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let s = o1(l[0], e);
  return r && (s = -s), s || 0;
}
function M1(e, t) {
  const n = this,
    {
      rtlTranslate: r,
      params: i,
      $wrapperEl: l,
      wrapperEl: s,
      progress: a,
    } = n;
  let o = 0,
    u = 0;
  const c = 0;
  n.isHorizontal() ? (o = r ? -e : e) : (u = e),
    i.roundLengths && ((o = Math.floor(o)), (u = Math.floor(u))),
    i.cssMode
      ? (s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -o
          : -u)
      : i.virtualTranslate ||
        l.transform(`translate3d(${o}px, ${u}px, ${c}px)`),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? o : u);
  let p;
  const f = n.maxTranslate() - n.minTranslate();
  f === 0 ? (p = 0) : (p = (e - n.minTranslate()) / f),
    p !== a && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function z1() {
  return -this.snapGrid[0];
}
function L1() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function O1(e = 0, t = this.params.speed, n = !0, r = !0, i) {
  const l = this,
    { params: s, wrapperEl: a } = l;
  if (l.animating && s.preventInteractionOnTransition) return !1;
  const o = l.minTranslate(),
    u = l.maxTranslate();
  let c;
  if (
    (r && e > o ? (c = o) : r && e < u ? (c = u) : (c = e),
    l.updateProgress(c),
    s.cssMode)
  ) {
    const p = l.isHorizontal();
    if (t === 0) a[p ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!l.support.smoothScroll)
        return (
          _f({ swiper: l, targetPosition: -c, side: p ? "left" : "top" }), !0
        );
      a.scrollTo({ [p ? "left" : "top"]: -c, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (l.setTransition(0),
        l.setTranslate(c),
        n && (l.emit("beforeTransitionStart", t, i), l.emit("transitionEnd")))
      : (l.setTransition(t),
        l.setTranslate(c),
        n && (l.emit("beforeTransitionStart", t, i), l.emit("transitionStart")),
        l.animating ||
          ((l.animating = !0),
          l.onTranslateToWrapperTransitionEnd ||
            (l.onTranslateToWrapperTransitionEnd = function (f) {
              !l ||
                l.destroyed ||
                (f.target === this &&
                  (l.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    l.onTranslateToWrapperTransitionEnd
                  ),
                  l.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    l.onTranslateToWrapperTransitionEnd
                  ),
                  (l.onTranslateToWrapperTransitionEnd = null),
                  delete l.onTranslateToWrapperTransitionEnd,
                  n && l.emit("transitionEnd")));
            }),
          l.$wrapperEl[0].addEventListener(
            "transitionend",
            l.onTranslateToWrapperTransitionEnd
          ),
          l.$wrapperEl[0].addEventListener(
            "webkitTransitionEnd",
            l.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
const N1 = {
  getTranslate: _1,
  setTranslate: M1,
  minTranslate: z1,
  maxTranslate: L1,
  translateTo: O1,
};
function $1(e, t) {
  const n = this;
  n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t);
}
function zf({ swiper: e, runCallbacks: t, direction: n, step: r }) {
  const { activeIndex: i, previousIndex: l } = e;
  let s = n;
  if (
    (s || (i > l ? (s = "next") : i < l ? (s = "prev") : (s = "reset")),
    e.emit(`transition${r}`),
    t && i !== l)
  ) {
    if (s === "reset") {
      e.emit(`slideResetTransition${r}`);
      return;
    }
    e.emit(`slideChangeTransition${r}`),
      s === "next"
        ? e.emit(`slideNextTransition${r}`)
        : e.emit(`slidePrevTransition${r}`);
  }
}
function I1(e = !0, t) {
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    zf({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function A1(e = !0, t) {
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      zf({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
const R1 = { setTransition: $1, transitionStart: I1, transitionEnd: A1 };
function D1(e = 0, t = this.params.speed, n = !0, r, i) {
  if (typeof e != "number" && typeof e != "string")
    throw new Error(
      `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
    );
  if (typeof e == "string") {
    const m = parseInt(e, 10);
    if (!isFinite(m))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
      );
    e = m;
  }
  const l = this;
  let s = e;
  s < 0 && (s = 0);
  const {
    params: a,
    snapGrid: o,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: p,
    rtlTranslate: f,
    wrapperEl: g,
    enabled: v,
  } = l;
  if ((l.animating && a.preventInteractionOnTransition) || (!v && !r && !i))
    return !1;
  const y = Math.min(l.params.slidesPerGroupSkip, s);
  let w = y + Math.floor((s - y) / l.params.slidesPerGroup);
  w >= o.length && (w = o.length - 1);
  const d = -o[w];
  if (a.normalizeSlideIndex)
    for (let m = 0; m < u.length; m += 1) {
      const S = -Math.floor(d * 100),
        E = Math.floor(u[m] * 100),
        T = Math.floor(u[m + 1] * 100);
      typeof u[m + 1] < "u"
        ? S >= E && S < T - (T - E) / 2
          ? (s = m)
          : S >= E && S < T && (s = m + 1)
        : S >= E && (s = m);
    }
  if (
    l.initialized &&
    s !== p &&
    ((!l.allowSlideNext && d < l.translate && d < l.minTranslate()) ||
      (!l.allowSlidePrev &&
        d > l.translate &&
        d > l.maxTranslate() &&
        (p || 0) !== s))
  )
    return !1;
  s !== (c || 0) && n && l.emit("beforeSlideChangeStart"), l.updateProgress(d);
  let h;
  if (
    (s > p ? (h = "next") : s < p ? (h = "prev") : (h = "reset"),
    (f && -d === l.translate) || (!f && d === l.translate))
  )
    return (
      l.updateActiveIndex(s),
      a.autoHeight && l.updateAutoHeight(),
      l.updateSlidesClasses(),
      a.effect !== "slide" && l.setTranslate(d),
      h !== "reset" && (l.transitionStart(n, h), l.transitionEnd(n, h)),
      !1
    );
  if (a.cssMode) {
    const m = l.isHorizontal(),
      S = f ? d : -d;
    if (t === 0) {
      const E = l.virtual && l.params.virtual.enabled;
      E &&
        ((l.wrapperEl.style.scrollSnapType = "none"),
        (l._immediateVirtual = !0)),
        (g[m ? "scrollLeft" : "scrollTop"] = S),
        E &&
          requestAnimationFrame(() => {
            (l.wrapperEl.style.scrollSnapType = ""),
              (l._swiperImmediateVirtual = !1);
          });
    } else {
      if (!l.support.smoothScroll)
        return (
          _f({ swiper: l, targetPosition: S, side: m ? "left" : "top" }), !0
        );
      g.scrollTo({ [m ? "left" : "top"]: S, behavior: "smooth" });
    }
    return !0;
  }
  return (
    l.setTransition(t),
    l.setTranslate(d),
    l.updateActiveIndex(s),
    l.updateSlidesClasses(),
    l.emit("beforeTransitionStart", t, r),
    l.transitionStart(n, h),
    t === 0
      ? l.transitionEnd(n, h)
      : l.animating ||
        ((l.animating = !0),
        l.onSlideToWrapperTransitionEnd ||
          (l.onSlideToWrapperTransitionEnd = function (S) {
            !l ||
              l.destroyed ||
              (S.target === this &&
                (l.$wrapperEl[0].removeEventListener(
                  "transitionend",
                  l.onSlideToWrapperTransitionEnd
                ),
                l.$wrapperEl[0].removeEventListener(
                  "webkitTransitionEnd",
                  l.onSlideToWrapperTransitionEnd
                ),
                (l.onSlideToWrapperTransitionEnd = null),
                delete l.onSlideToWrapperTransitionEnd,
                l.transitionEnd(n, h)));
          }),
        l.$wrapperEl[0].addEventListener(
          "transitionend",
          l.onSlideToWrapperTransitionEnd
        ),
        l.$wrapperEl[0].addEventListener(
          "webkitTransitionEnd",
          l.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function F1(e = 0, t = this.params.speed, n = !0, r) {
  if (typeof e == "string") {
    const s = parseInt(e, 10);
    if (!isFinite(s))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
      );
    e = s;
  }
  const i = this;
  let l = e;
  return i.params.loop && (l += i.loopedSlides), i.slideTo(l, t, n, r);
}
function j1(e = this.params.speed, t = !0, n) {
  const r = this,
    { animating: i, enabled: l, params: s } = r;
  if (!l) return r;
  let a = s.slidesPerGroup;
  s.slidesPerView === "auto" &&
    s.slidesPerGroup === 1 &&
    s.slidesPerGroupAuto &&
    (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const o = r.activeIndex < s.slidesPerGroupSkip ? 1 : a;
  if (s.loop) {
    if (i && s.loopPreventsSlide) return !1;
    r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
  }
  return s.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + o, e, t, n);
}
function B1(e = this.params.speed, t = !0, n) {
  const r = this,
    {
      params: i,
      animating: l,
      snapGrid: s,
      slidesGrid: a,
      rtlTranslate: o,
      enabled: u,
    } = r;
  if (!u) return r;
  if (i.loop) {
    if (l && i.loopPreventsSlide) return !1;
    r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
  }
  const c = o ? r.translate : -r.translate;
  function p(w) {
    return w < 0 ? -Math.floor(Math.abs(w)) : Math.floor(w);
  }
  const f = p(c),
    g = s.map((w) => p(w));
  let v = s[g.indexOf(f) - 1];
  if (typeof v > "u" && i.cssMode) {
    let w;
    s.forEach((d, h) => {
      f >= d && (w = h);
    }),
      typeof w < "u" && (v = s[w > 0 ? w - 1 : w]);
  }
  let y = 0;
  if (
    (typeof v < "u" &&
      ((y = a.indexOf(v)),
      y < 0 && (y = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((y = y - r.slidesPerViewDynamic("previous", !0) + 1),
        (y = Math.max(y, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const w =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(w, e, t, n);
  }
  return r.slideTo(y, e, t, n);
}
function b1(e = this.params.speed, t = !0, n) {
  const r = this;
  return r.slideTo(r.activeIndex, e, t, n);
}
function V1(e = this.params.speed, t = !0, n, r = 0.5) {
  const i = this;
  let l = i.activeIndex;
  const s = Math.min(i.params.slidesPerGroupSkip, l),
    a = s + Math.floor((l - s) / i.params.slidesPerGroup),
    o = i.rtlTranslate ? i.translate : -i.translate;
  if (o >= i.snapGrid[a]) {
    const u = i.snapGrid[a],
      c = i.snapGrid[a + 1];
    o - u > (c - u) * r && (l += i.params.slidesPerGroup);
  } else {
    const u = i.snapGrid[a - 1],
      c = i.snapGrid[a];
    o - u <= (c - u) * r && (l -= i.params.slidesPerGroup);
  }
  return (
    (l = Math.max(l, 0)),
    (l = Math.min(l, i.slidesGrid.length - 1)),
    i.slideTo(l, e, t, n)
  );
}
function H1() {
  const e = this,
    { params: t, $wrapperEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    l;
  if (t.loop) {
    if (e.animating) return;
    (l = parseInt(A(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = n
              .children(
                `.${t.slideClass}[data-swiper-slide-index="${l}"]:not(.${t.slideDuplicateClass})`
              )
              .eq(0)
              .index()),
            So(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = n
            .children(
              `.${t.slideClass}[data-swiper-slide-index="${l}"]:not(.${t.slideDuplicateClass})`
            )
            .eq(0)
            .index()),
          So(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
const W1 = {
  slideTo: D1,
  slideToLoop: F1,
  slideNext: j1,
  slidePrev: B1,
  slideReset: b1,
  slideToClosest: V1,
  slideToClickedSlide: H1,
};
function G1() {
  const e = this,
    t = Qe(),
    { params: n, $wrapperEl: r } = e,
    i = r.children().length > 0 ? A(r.children()[0].parentNode) : r;
  i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
  let l = i.children(`.${n.slideClass}`);
  if (n.loopFillGroupWithBlank) {
    const o = n.slidesPerGroup - (l.length % n.slidesPerGroup);
    if (o !== n.slidesPerGroup) {
      for (let u = 0; u < o; u += 1) {
        const c = A(t.createElement("div")).addClass(
          `${n.slideClass} ${n.slideBlankClass}`
        );
        i.append(c);
      }
      l = i.children(`.${n.slideClass}`);
    }
  }
  n.slidesPerView === "auto" && !n.loopedSlides && (n.loopedSlides = l.length),
    (e.loopedSlides = Math.ceil(
      parseFloat(n.loopedSlides || n.slidesPerView, 10)
    )),
    (e.loopedSlides += n.loopAdditionalSlides),
    e.loopedSlides > l.length &&
      e.params.loopedSlidesLimit &&
      (e.loopedSlides = l.length);
  const s = [],
    a = [];
  l.each((o, u) => {
    A(o).attr("data-swiper-slide-index", u);
  });
  for (let o = 0; o < e.loopedSlides; o += 1) {
    const u = o - Math.floor(o / l.length) * l.length;
    a.push(l.eq(u)[0]), s.unshift(l.eq(l.length - u - 1)[0]);
  }
  for (let o = 0; o < a.length; o += 1)
    i.append(A(a[o].cloneNode(!0)).addClass(n.slideDuplicateClass));
  for (let o = s.length - 1; o >= 0; o -= 1)
    i.prepend(A(s[o].cloneNode(!0)).addClass(n.slideDuplicateClass));
}
function U1() {
  const e = this;
  e.emit("beforeLoopFix");
  const {
    activeIndex: t,
    slides: n,
    loopedSlides: r,
    allowSlidePrev: i,
    allowSlideNext: l,
    snapGrid: s,
    rtlTranslate: a,
  } = e;
  let o;
  (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
  const c = -s[t] - e.getTranslate();
  t < r
    ? ((o = n.length - r * 3 + t),
      (o += r),
      e.slideTo(o, 0, !1, !0) &&
        c !== 0 &&
        e.setTranslate((a ? -e.translate : e.translate) - c))
    : t >= n.length - r &&
      ((o = -n.length + t + r),
      (o += r),
      e.slideTo(o, 0, !1, !0) &&
        c !== 0 &&
        e.setTranslate((a ? -e.translate : e.translate) - c)),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = l),
    e.emit("loopFix");
}
function Y1() {
  const e = this,
    { $wrapperEl: t, params: n, slides: r } = e;
  t
    .children(
      `.${n.slideClass}.${n.slideDuplicateClass},.${n.slideClass}.${n.slideBlankClass}`
    )
    .remove(),
    r.removeAttr("data-swiper-slide-index");
}
const Q1 = { loopCreate: G1, loopFix: U1, loopDestroy: Y1 };
function X1(e) {
  const t = this;
  if (
    t.support.touch ||
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  (n.style.cursor = "move"), (n.style.cursor = e ? "grabbing" : "grab");
}
function K1() {
  const e = this;
  e.support.touch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = "");
}
const q1 = { setGrabCursor: X1, unsetGrabCursor: K1 };
function Z1(e, t = this) {
  function n(r) {
    if (!r || r === Qe() || r === ke()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function J1(e) {
  const t = this,
    n = Qe(),
    r = ke(),
    i = t.touchEventsData,
    { params: l, touches: s, enabled: a } = t;
  if (!a || (t.animating && l.preventInteractionOnTransition)) return;
  !t.animating && l.cssMode && l.loop && t.loopFix();
  let o = e;
  o.originalEvent && (o = o.originalEvent);
  let u = A(o.target);
  if (
    (l.touchEventsTarget === "wrapper" && !u.closest(t.wrapperEl).length) ||
    ((i.isTouchEvent = o.type === "touchstart"),
    !i.isTouchEvent && "which" in o && o.which === 3) ||
    (!i.isTouchEvent && "button" in o && o.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const c = !!l.noSwipingClass && l.noSwipingClass !== "",
    p = e.composedPath ? e.composedPath() : e.path;
  c && o.target && o.target.shadowRoot && p && (u = A(p[0]));
  const f = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
    g = !!(o.target && o.target.shadowRoot);
  if (l.noSwiping && (g ? Z1(f, u[0]) : u.closest(f)[0])) {
    t.allowClick = !0;
    return;
  }
  if (l.swipeHandler && !u.closest(l.swipeHandler)[0]) return;
  (s.currentX = o.type === "touchstart" ? o.targetTouches[0].pageX : o.pageX),
    (s.currentY = o.type === "touchstart" ? o.targetTouches[0].pageY : o.pageY);
  const v = s.currentX,
    y = s.currentY,
    w = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
    d = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
  if (w && (v <= d || v >= r.innerWidth - d))
    if (w === "prevent") e.preventDefault();
    else return;
  if (
    (Object.assign(i, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
    (s.startX = v),
    (s.startY = y),
    (i.touchStartTime = tn()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    l.threshold > 0 && (i.allowThresholdMove = !1),
    o.type !== "touchstart")
  ) {
    let h = !0;
    u.is(i.focusableElements) &&
      ((h = !1), u[0].nodeName === "SELECT" && (i.isTouched = !1)),
      n.activeElement &&
        A(n.activeElement).is(i.focusableElements) &&
        n.activeElement !== u[0] &&
        n.activeElement.blur();
    const m = h && t.allowTouchMove && l.touchStartPreventDefault;
    (l.touchStartForcePreventDefault || m) &&
      !u[0].isContentEditable &&
      o.preventDefault();
  }
  t.params.freeMode &&
    t.params.freeMode.enabled &&
    t.freeMode &&
    t.animating &&
    !l.cssMode &&
    t.freeMode.onTouchStart(),
    t.emit("touchStart", o);
}
function eg(e) {
  const t = Qe(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: l, rtlTranslate: s, enabled: a } = n;
  if (!a) return;
  let o = e;
  if ((o.originalEvent && (o = o.originalEvent), !r.isTouched)) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", o);
    return;
  }
  if (r.isTouchEvent && o.type !== "touchmove") return;
  const u =
      o.type === "touchmove" &&
      o.targetTouches &&
      (o.targetTouches[0] || o.changedTouches[0]),
    c = o.type === "touchmove" ? u.pageX : o.pageX,
    p = o.type === "touchmove" ? u.pageY : o.pageY;
  if (o.preventedByNestedSwiper) {
    (l.startX = c), (l.startY = p);
    return;
  }
  if (!n.allowTouchMove) {
    A(o.target).is(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(l, { startX: c, startY: p, currentX: c, currentY: p }),
        (r.touchStartTime = tn()));
    return;
  }
  if (r.isTouchEvent && i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (p < l.startY && n.translate <= n.maxTranslate()) ||
        (p > l.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (c < l.startX && n.translate <= n.maxTranslate()) ||
      (c > l.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    r.isTouchEvent &&
    t.activeElement &&
    o.target === t.activeElement &&
    A(o.target).is(r.focusableElements)
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  if (
    (r.allowTouchCallbacks && n.emit("touchMove", o),
    o.targetTouches && o.targetTouches.length > 1)
  )
    return;
  (l.currentX = c), (l.currentY = p);
  const f = l.currentX - l.startX,
    g = l.currentY - l.startY;
  if (n.params.threshold && Math.sqrt(f ** 2 + g ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let d;
    (n.isHorizontal() && l.currentY === l.startY) ||
    (n.isVertical() && l.currentX === l.startX)
      ? (r.isScrolling = !1)
      : f * f + g * g >= 25 &&
        ((d = (Math.atan2(Math.abs(g), Math.abs(f)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? d > i.touchAngle
          : 90 - d > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", o),
    typeof r.startMoving > "u" &&
      (l.currentX !== l.startX || l.currentY !== l.startY) &&
      (r.startMoving = !0),
    r.isScrolling)
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && o.cancelable && o.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && o.stopPropagation(),
    r.isMoved ||
      (i.loop && !i.cssMode && n.loopFix(),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
      (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", o)),
    n.emit("sliderMove", o),
    (r.isMoved = !0);
  let v = n.isHorizontal() ? f : g;
  (l.diff = v),
    (v *= i.touchRatio),
    s && (v = -v),
    (n.swipeDirection = v > 0 ? "prev" : "next"),
    (r.currentTranslate = v + r.startTranslate);
  let y = !0,
    w = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (w = 0),
    v > 0 && r.currentTranslate > n.minTranslate()
      ? ((y = !1),
        i.resistance &&
          (r.currentTranslate =
            n.minTranslate() -
            1 +
            (-n.minTranslate() + r.startTranslate + v) ** w))
      : v < 0 &&
        r.currentTranslate < n.maxTranslate() &&
        ((y = !1),
        i.resistance &&
          (r.currentTranslate =
            n.maxTranslate() +
            1 -
            (n.maxTranslate() - r.startTranslate - v) ** w)),
    y && (o.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(v) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (l.startX = l.currentX),
          (l.startY = l.currentY),
          (r.currentTranslate = r.startTranslate),
          (l.diff = n.isHorizontal()
            ? l.currentX - l.startX
            : l.currentY - l.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    n.params.freeMode &&
      i.freeMode.enabled &&
      n.freeMode &&
      n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function tg(e) {
  const t = this,
    n = t.touchEventsData,
    { params: r, touches: i, rtlTranslate: l, slidesGrid: s, enabled: a } = t;
  if (!a) return;
  let o = e;
  if (
    (o.originalEvent && (o = o.originalEvent),
    n.allowTouchCallbacks && t.emit("touchEnd", o),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && r.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  r.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const u = tn(),
    c = u - n.touchStartTime;
  if (t.allowClick) {
    const h = o.path || (o.composedPath && o.composedPath());
    t.updateClickedSlide((h && h[0]) || o.target),
      t.emit("tap click", o),
      c < 300 &&
        u - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", o);
  }
  if (
    ((n.lastClickTime = tn()),
    So(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      i.diff === 0 ||
      n.currentTranslate === n.startTranslate)
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let p;
  if (
    (r.followFinger
      ? (p = l ? t.translate : -t.translate)
      : (p = -n.currentTranslate),
    r.cssMode)
  )
    return;
  if (t.params.freeMode && r.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: p });
    return;
  }
  let f = 0,
    g = t.slidesSizesGrid[0];
  for (
    let h = 0;
    h < s.length;
    h += h < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
  ) {
    const m = h < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    typeof s[h + m] < "u"
      ? p >= s[h] && p < s[h + m] && ((f = h), (g = s[h + m] - s[h]))
      : p >= s[h] && ((f = h), (g = s[s.length - 1] - s[s.length - 2]));
  }
  let v = null,
    y = null;
  r.rewind &&
    (t.isBeginning
      ? (y =
          t.params.virtual && t.params.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (v = 0));
  const w = (p - s[f]) / g,
    d = f < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
  if (c > r.longSwipesMs) {
    if (!r.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (w >= r.longSwipesRatio
        ? t.slideTo(r.rewind && t.isEnd ? v : f + d)
        : t.slideTo(f)),
      t.swipeDirection === "prev" &&
        (w > 1 - r.longSwipesRatio
          ? t.slideTo(f + d)
          : y !== null && w < 0 && Math.abs(w) > r.longSwipesRatio
          ? t.slideTo(y)
          : t.slideTo(f));
  } else {
    if (!r.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl)
      ? o.target === t.navigation.nextEl
        ? t.slideTo(f + d)
        : t.slideTo(f)
      : (t.swipeDirection === "next" && t.slideTo(v !== null ? v : f + d),
        t.swipeDirection === "prev" && t.slideTo(y !== null ? y : f));
  }
}
function Qu() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: l } = e;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses(),
    (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
    e.isEnd &&
    !e.isBeginning &&
    !e.params.centeredSlides
      ? e.slideTo(e.slides.length - 1, 0, !1, !0)
      : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow();
}
function ng(e) {
  const t = this;
  !t.enabled ||
    t.allowClick ||
    (t.params.preventClicks && e.preventDefault(),
    t.params.preventClicksPropagation &&
      t.animating &&
      (e.stopPropagation(), e.stopImmediatePropagation()));
}
function rg() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const l = e.maxTranslate() - e.minTranslate();
  l === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / l),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
let Xu = !1;
function ig() {}
const Lf = (e, t) => {
  const n = Qe(),
    {
      params: r,
      touchEvents: i,
      el: l,
      wrapperEl: s,
      device: a,
      support: o,
    } = e,
    u = !!r.nested,
    c = t === "on" ? "addEventListener" : "removeEventListener",
    p = t;
  if (!o.touch)
    l[c](i.start, e.onTouchStart, !1),
      n[c](i.move, e.onTouchMove, u),
      n[c](i.end, e.onTouchEnd, !1);
  else {
    const f =
      i.start === "touchstart" && o.passiveListener && r.passiveListeners
        ? { passive: !0, capture: !1 }
        : !1;
    l[c](i.start, e.onTouchStart, f),
      l[c](
        i.move,
        e.onTouchMove,
        o.passiveListener ? { passive: !1, capture: u } : u
      ),
      l[c](i.end, e.onTouchEnd, f),
      i.cancel && l[c](i.cancel, e.onTouchEnd, f);
  }
  (r.preventClicks || r.preventClicksPropagation) &&
    l[c]("click", e.onClick, !0),
    r.cssMode && s[c]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[p](
          a.ios || a.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Qu,
          !0
        )
      : e[p]("observerUpdate", Qu, !0);
};
function lg() {
  const e = this,
    t = Qe(),
    { params: n, support: r } = e;
  (e.onTouchStart = J1.bind(e)),
    (e.onTouchMove = eg.bind(e)),
    (e.onTouchEnd = tg.bind(e)),
    n.cssMode && (e.onScroll = rg.bind(e)),
    (e.onClick = ng.bind(e)),
    r.touch && !Xu && (t.addEventListener("touchstart", ig), (Xu = !0)),
    Lf(e, "on");
}
function sg() {
  Lf(this, "off");
}
const og = { attachEvents: lg, detachEvents: sg },
  Ku = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function ag() {
  const e = this,
    {
      activeIndex: t,
      initialized: n,
      loopedSlides: r = 0,
      params: i,
      $el: l,
    } = e,
    s = i.breakpoints;
  if (!s || (s && Object.keys(s).length === 0)) return;
  const a = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
  if (!a || e.currentBreakpoint === a) return;
  const u = (a in s ? s[a] : void 0) || e.originalParams,
    c = Ku(e, i),
    p = Ku(e, u),
    f = i.enabled;
  c && !p
    ? (l.removeClass(
        `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !c &&
      p &&
      (l.addClass(`${i.containerModifierClass}grid`),
      ((u.grid.fill && u.grid.fill === "column") ||
        (!u.grid.fill && i.grid.fill === "column")) &&
        l.addClass(`${i.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((w) => {
      const d = i[w] && i[w].enabled,
        h = u[w] && u[w].enabled;
      d && !h && e[w].disable(), !d && h && e[w].enable();
    });
  const g = u.direction && u.direction !== i.direction,
    v = i.loop && (u.slidesPerView !== i.slidesPerView || g);
  g && n && e.changeDirection(), qe(e.params, u);
  const y = e.params.enabled;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    f && !y ? e.disable() : !f && y && e.enable(),
    (e.currentBreakpoint = a),
    e.emit("_beforeBreakpoint", u),
    v &&
      n &&
      (e.loopDestroy(),
      e.loopCreate(),
      e.updateSlides(),
      e.slideTo(t - r + e.loopedSlides, 0, !1)),
    e.emit("breakpoint", u);
}
function ug(e, t = "window", n) {
  if (!e || (t === "container" && !n)) return;
  let r = !1;
  const i = ke(),
    l = t === "window" ? i.innerHeight : n.clientHeight,
    s = Object.keys(e).map((a) => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const o = parseFloat(a.substr(1));
        return { value: l * o, point: a };
      }
      return { value: a, point: a };
    });
  s.sort((a, o) => parseInt(a.value, 10) - parseInt(o.value, 10));
  for (let a = 0; a < s.length; a += 1) {
    const { point: o, value: u } = s[a];
    t === "window"
      ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = o)
      : u <= n.clientWidth && (r = o);
  }
  return r || "max";
}
const cg = { setBreakpoint: ag, getBreakpoint: ug };
function dg(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function fg() {
  const e = this,
    { classNames: t, params: n, rtl: r, $el: i, device: l, support: s } = e,
    a = dg(
      [
        "initialized",
        n.direction,
        { "pointer-events": !s.touch },
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: l.android },
        { ios: l.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...a), i.addClass([...t].join(" ")), e.emitContainerClasses();
}
function pg() {
  const e = this,
    { $el: t, classNames: n } = e;
  t.removeClass(n.join(" ")), e.emitContainerClasses();
}
const hg = { addClasses: fg, removeClasses: pg };
function mg(e, t, n, r, i, l) {
  const s = ke();
  let a;
  function o() {
    l && l();
  }
  !A(e).parent("picture")[0] && (!e.complete || !i) && t
    ? ((a = new s.Image()),
      (a.onload = o),
      (a.onerror = o),
      r && (a.sizes = r),
      n && (a.srcset = n),
      t && (a.src = t))
    : o();
}
function gg() {
  const e = this;
  e.imagesToLoad = e.$el.find("img");
  function t() {
    typeof e > "u" ||
      e === null ||
      !e ||
      e.destroyed ||
      (e.imagesLoaded !== void 0 && (e.imagesLoaded += 1),
      e.imagesLoaded === e.imagesToLoad.length &&
        (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
  }
  for (let n = 0; n < e.imagesToLoad.length; n += 1) {
    const r = e.imagesToLoad[n];
    e.loadImage(
      r,
      r.currentSrc || r.getAttribute("src"),
      r.srcset || r.getAttribute("srcset"),
      r.sizes || r.getAttribute("sizes"),
      !0,
      t
    );
  }
}
const vg = { loadImage: mg, preloadImages: gg };
function yg() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      l = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > l;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
const Sg = { checkOverflow: yg },
  qu = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopedSlidesLimit: !0,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function wg(e, t) {
  return function (r = {}) {
    const i = Object.keys(r)[0],
      l = r[i];
    if (typeof l != "object" || l === null) {
      qe(t, r);
      return;
    }
    if (
      (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] === !0 &&
        (e[i] = { auto: !0 }),
      !(i in e && "enabled" in l))
    ) {
      qe(t, r);
      return;
    }
    e[i] === !0 && (e[i] = { enabled: !0 }),
      typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      qe(t, r);
  };
}
const ys = {
    eventsEmitter: g1,
    update: P1,
    translate: N1,
    transition: R1,
    slide: W1,
    loop: Q1,
    grabCursor: q1,
    events: og,
    breakpoints: cg,
    checkOverflow: Sg,
    classes: hg,
    images: vg,
  },
  Ss = {};
class Fe {
  constructor(...t) {
    let n, r;
    if (
      (t.length === 1 &&
      t[0].constructor &&
      Object.prototype.toString.call(t[0]).slice(8, -1) === "Object"
        ? (r = t[0])
        : ([n, r] = t),
      r || (r = {}),
      (r = qe({}, r)),
      n && !r.el && (r.el = n),
      r.el && A(r.el).length > 1)
    ) {
      const a = [];
      return (
        A(r.el).each((o) => {
          const u = qe({}, r, { el: o });
          a.push(new Fe(u));
        }),
        a
      );
    }
    const i = this;
    (i.__swiper__ = !0),
      (i.support = Mf()),
      (i.device = d1({ userAgent: r.userAgent })),
      (i.browser = p1()),
      (i.eventsListeners = {}),
      (i.eventsAnyListeners = []),
      (i.modules = [...i.__modules__]),
      r.modules && Array.isArray(r.modules) && i.modules.push(...r.modules);
    const l = {};
    i.modules.forEach((a) => {
      a({
        swiper: i,
        extendParams: wg(r, l),
        on: i.on.bind(i),
        once: i.once.bind(i),
        off: i.off.bind(i),
        emit: i.emit.bind(i),
      });
    });
    const s = qe({}, qu, l);
    return (
      (i.params = qe({}, s, Ss, r)),
      (i.originalParams = qe({}, i.params)),
      (i.passedParams = qe({}, r)),
      i.params &&
        i.params.on &&
        Object.keys(i.params.on).forEach((a) => {
          i.on(a, i.params.on[a]);
        }),
      i.params && i.params.onAny && i.onAny(i.params.onAny),
      (i.$ = A),
      Object.assign(i, {
        enabled: i.params.enabled,
        el: n,
        classNames: [],
        slides: A(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return i.params.direction === "horizontal";
        },
        isVertical() {
          return i.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: i.params.allowSlideNext,
        allowSlidePrev: i.params.allowSlidePrev,
        touchEvents: (function () {
          const o = ["touchstart", "touchmove", "touchend", "touchcancel"],
            u = ["pointerdown", "pointermove", "pointerup"];
          return (
            (i.touchEventsTouch = {
              start: o[0],
              move: o[1],
              end: o[2],
              cancel: o[3],
            }),
            (i.touchEventsDesktop = { start: u[0], move: u[1], end: u[2] }),
            i.support.touch || !i.params.simulateTouch
              ? i.touchEventsTouch
              : i.touchEventsDesktop
          );
        })(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: i.params.focusableElements,
          lastClickTime: tn(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0,
        },
        allowClick: !0,
        allowTouchMove: i.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      i.emit("_swiper"),
      i.params.init && i.init(),
      i
    );
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    !t.enabled ||
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      s = (r.maxTranslate() - i) * t + i;
    r.translateTo(s, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.each((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t = "current", n = !1) {
    const r = this,
      {
        params: i,
        slides: l,
        slidesGrid: s,
        slidesSizesGrid: a,
        size: o,
        activeIndex: u,
      } = r;
    let c = 1;
    if (i.centeredSlides) {
      let p = l[u].swiperSlideSize,
        f;
      for (let g = u + 1; g < l.length; g += 1)
        l[g] &&
          !f &&
          ((p += l[g].swiperSlideSize), (c += 1), p > o && (f = !0));
      for (let g = u - 1; g >= 0; g -= 1)
        l[g] &&
          !f &&
          ((p += l[g].swiperSlideSize), (c += 1), p > o && (f = !0));
    } else if (t === "current")
      for (let p = u + 1; p < l.length; p += 1)
        (n ? s[p] + a[p] - s[u] < o : s[p] - s[u] < o) && (c += 1);
    else for (let p = u - 1; p >= 0; p -= 1) s[u] - s[p] < o && (c += 1);
    return c;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const s = t.rtlTranslate ? t.translate * -1 : t.translate,
        a = Math.min(Math.max(s, t.maxTranslate()), t.minTranslate());
      t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let l;
    t.params.freeMode && t.params.freeMode.enabled
      ? (i(), t.params.autoHeight && t.updateAutoHeight())
      : ((t.params.slidesPerView === "auto" || t.params.slidesPerView > 1) &&
        t.isEnd &&
        !t.params.centeredSlides
          ? (l = t.slideTo(t.slides.length - 1, 0, !1, !0))
          : (l = t.slideTo(t.activeIndex, 0, !1, !0)),
        l || i()),
      r.watchOverflow && n !== t.snapGrid && t.checkOverflow(),
      t.emit("update");
  }
  changeDirection(t, n = !0) {
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.$el
          .removeClass(`${r.params.containerModifierClass}${i}`)
          .addClass(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.each((l) => {
          t === "vertical" ? (l.style.width = "") : (l.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.$el.addClass(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.$el.removeClass(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    const r = A(t || n.params.el);
    if (((t = r[0]), !t)) return !1;
    t.swiper = n;
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let s = (() => {
      if (t && t.shadowRoot && t.shadowRoot.querySelector) {
        const a = A(t.shadowRoot.querySelector(i()));
        return (a.children = (o) => r.children(o)), a;
      }
      return r.children ? r.children(i()) : A(r).children(i());
    })();
    if (s.length === 0 && n.params.createElements) {
      const o = Qe().createElement("div");
      (s = A(o)),
        (o.className = n.params.wrapperClass),
        r.append(o),
        r.children(`.${n.params.slideClass}`).each((u) => {
          s.append(u);
        });
    }
    return (
      Object.assign(n, {
        $el: r,
        el: t,
        $wrapperEl: s,
        wrapperEl: s[0],
        mounted: !0,
        rtl: t.dir.toLowerCase() === "rtl" || r.css("direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (t.dir.toLowerCase() === "rtl" || r.css("direction") === "rtl"),
        wrongRTL: s.css("display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    return (
      n.initialized ||
        n.mount(t) === !1 ||
        (n.emit("beforeInit"),
        n.params.breakpoints && n.setBreakpoint(),
        n.addClasses(),
        n.params.loop && n.loopCreate(),
        n.updateSize(),
        n.updateSlides(),
        n.params.watchOverflow && n.checkOverflow(),
        n.params.grabCursor && n.enabled && n.setGrabCursor(),
        n.params.preloadImages && n.preloadImages(),
        n.params.loop
          ? n.slideTo(
              n.params.initialSlide + n.loopedSlides,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0
            )
          : n.slideTo(
              n.params.initialSlide,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0
            ),
        n.attachEvents(),
        (n.initialized = !0),
        n.emit("init"),
        n.emit("afterInit")),
      n
    );
  }
  destroy(t = !0, n = !0) {
    const r = this,
      { params: i, $el: l, $wrapperEl: s, slides: a } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          l.removeAttr("style"),
          s.removeAttr("style"),
          a &&
            a.length &&
            a
              .removeClass(
                [
                  i.slideVisibleClass,
                  i.slideActiveClass,
                  i.slideNextClass,
                  i.slidePrevClass,
                ].join(" ")
              )
              .removeAttr("style")
              .removeAttr("data-swiper-slide-index")),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((o) => {
          r.off(o);
        }),
        t !== !1 && ((r.$el[0].swiper = null), l1(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    qe(Ss, t);
  }
  static get extendedDefaults() {
    return Ss;
  }
  static get defaults() {
    return qu;
  }
  static installModule(t) {
    Fe.prototype.__modules__ || (Fe.prototype.__modules__ = []);
    const n = Fe.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => Fe.installModule(n)), Fe)
      : (Fe.installModule(t), Fe);
  }
}
Object.keys(ys).forEach((e) => {
  Object.keys(ys[e]).forEach((t) => {
    Fe.prototype[t] = ys[e][t];
  });
});
Fe.use([h1, m1]);
function xg(e, t, n, r) {
  const i = Qe();
  return (
    e.params.createElements &&
      Object.keys(r).forEach((l) => {
        if (!n[l] && n.auto === !0) {
          let s = e.$el.children(`.${r[l]}`)[0];
          s ||
            ((s = i.createElement("div")),
            (s.className = r[l]),
            e.$el.append(s)),
            (n[l] = s),
            (t[l] = s);
        }
      }),
    n
  );
}
function Zu({ swiper: e, extendParams: t, on: n, emit: r }) {
  t({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (e.navigation = {
      nextEl: null,
      $nextEl: null,
      prevEl: null,
      $prevEl: null,
    });
  function i(g) {
    let v;
    return (
      g &&
        ((v = A(g)),
        e.params.uniqueNavElements &&
          typeof g == "string" &&
          v.length > 1 &&
          e.$el.find(g).length === 1 &&
          (v = e.$el.find(g))),
      v
    );
  }
  function l(g, v) {
    const y = e.params.navigation;
    g &&
      g.length > 0 &&
      (g[v ? "addClass" : "removeClass"](y.disabledClass),
      g[0] && g[0].tagName === "BUTTON" && (g[0].disabled = v),
      e.params.watchOverflow &&
        e.enabled &&
        g[e.isLocked ? "addClass" : "removeClass"](y.lockClass));
  }
  function s() {
    if (e.params.loop) return;
    const { $nextEl: g, $prevEl: v } = e.navigation;
    l(v, e.isBeginning && !e.params.rewind), l(g, e.isEnd && !e.params.rewind);
  }
  function a(g) {
    g.preventDefault(),
      !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
        (e.slidePrev(), r("navigationPrev"));
  }
  function o(g) {
    g.preventDefault(),
      !(e.isEnd && !e.params.loop && !e.params.rewind) &&
        (e.slideNext(), r("navigationNext"));
  }
  function u() {
    const g = e.params.navigation;
    if (
      ((e.params.navigation = xg(
        e,
        e.originalParams.navigation,
        e.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(g.nextEl || g.prevEl))
    )
      return;
    const v = i(g.nextEl),
      y = i(g.prevEl);
    v && v.length > 0 && v.on("click", o),
      y && y.length > 0 && y.on("click", a),
      Object.assign(e.navigation, {
        $nextEl: v,
        nextEl: v && v[0],
        $prevEl: y,
        prevEl: y && y[0],
      }),
      e.enabled || (v && v.addClass(g.lockClass), y && y.addClass(g.lockClass));
  }
  function c() {
    const { $nextEl: g, $prevEl: v } = e.navigation;
    g &&
      g.length &&
      (g.off("click", o), g.removeClass(e.params.navigation.disabledClass)),
      v &&
        v.length &&
        (v.off("click", a), v.removeClass(e.params.navigation.disabledClass));
  }
  n("init", () => {
    e.params.navigation.enabled === !1 ? f() : (u(), s());
  }),
    n("toEdge fromEdge lock unlock", () => {
      s();
    }),
    n("destroy", () => {
      c();
    }),
    n("enable disable", () => {
      const { $nextEl: g, $prevEl: v } = e.navigation;
      g &&
        g[e.enabled ? "removeClass" : "addClass"](
          e.params.navigation.lockClass
        ),
        v &&
          v[e.enabled ? "removeClass" : "addClass"](
            e.params.navigation.lockClass
          );
    }),
    n("click", (g, v) => {
      const { $nextEl: y, $prevEl: w } = e.navigation,
        d = v.target;
      if (e.params.navigation.hideOnClick && !A(d).is(w) && !A(d).is(y)) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === d || e.pagination.el.contains(d))
        )
          return;
        let h;
        y
          ? (h = y.hasClass(e.params.navigation.hiddenClass))
          : w && (h = w.hasClass(e.params.navigation.hiddenClass)),
          r(h === !0 ? "navigationShow" : "navigationHide"),
          y && y.toggleClass(e.params.navigation.hiddenClass),
          w && w.toggleClass(e.params.navigation.hiddenClass);
      }
    });
  const p = () => {
      e.$el.removeClass(e.params.navigation.navigationDisabledClass), u(), s();
    },
    f = () => {
      e.$el.addClass(e.params.navigation.navigationDisabledClass), c();
    };
  Object.assign(e.navigation, {
    enable: p,
    disable: f,
    update: s,
    init: u,
    destroy: c,
  });
}
function Ju({ swiper: e, extendParams: t, on: n }) {
  t({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: !0,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs",
    },
  });
  let r = !1,
    i = !1;
  e.thumbs = { swiper: null };
  function l() {
    const o = e.thumbs.swiper;
    if (!o || o.destroyed) return;
    const u = o.clickedIndex,
      c = o.clickedSlide;
    if (
      (c && A(c).hasClass(e.params.thumbs.slideThumbActiveClass)) ||
      typeof u > "u" ||
      u === null
    )
      return;
    let p;
    if (
      (o.params.loop
        ? (p = parseInt(A(o.clickedSlide).attr("data-swiper-slide-index"), 10))
        : (p = u),
      e.params.loop)
    ) {
      let f = e.activeIndex;
      e.slides.eq(f).hasClass(e.params.slideDuplicateClass) &&
        (e.loopFix(),
        (e._clientLeft = e.$wrapperEl[0].clientLeft),
        (f = e.activeIndex));
      const g = e.slides
          .eq(f)
          .prevAll(`[data-swiper-slide-index="${p}"]`)
          .eq(0)
          .index(),
        v = e.slides
          .eq(f)
          .nextAll(`[data-swiper-slide-index="${p}"]`)
          .eq(0)
          .index();
      typeof g > "u"
        ? (p = v)
        : typeof v > "u"
        ? (p = g)
        : v - f < f - g
        ? (p = v)
        : (p = g);
    }
    e.slideTo(p);
  }
  function s() {
    const { thumbs: o } = e.params;
    if (r) return !1;
    r = !0;
    const u = e.constructor;
    if (o.swiper instanceof u)
      (e.thumbs.swiper = o.swiper),
        Object.assign(e.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1,
        }),
        Object.assign(e.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1,
        });
    else if (yr(o.swiper)) {
      const c = Object.assign({}, o.swiper);
      Object.assign(c, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
        (e.thumbs.swiper = new u(c)),
        (i = !0);
    }
    return (
      e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
      e.thumbs.swiper.on("tap", l),
      !0
    );
  }
  function a(o) {
    const u = e.thumbs.swiper;
    if (!u || u.destroyed) return;
    const c =
      u.params.slidesPerView === "auto"
        ? u.slidesPerViewDynamic()
        : u.params.slidesPerView;
    let p = 1;
    const f = e.params.thumbs.slideThumbActiveClass;
    if (
      (e.params.slidesPerView > 1 &&
        !e.params.centeredSlides &&
        (p = e.params.slidesPerView),
      e.params.thumbs.multipleActiveThumbs || (p = 1),
      (p = Math.floor(p)),
      u.slides.removeClass(f),
      u.params.loop || (u.params.virtual && u.params.virtual.enabled))
    )
      for (let y = 0; y < p; y += 1)
        u.$wrapperEl
          .children(`[data-swiper-slide-index="${e.realIndex + y}"]`)
          .addClass(f);
    else
      for (let y = 0; y < p; y += 1) u.slides.eq(e.realIndex + y).addClass(f);
    const g = e.params.thumbs.autoScrollOffset,
      v = g && !u.params.loop;
    if (e.realIndex !== u.realIndex || v) {
      let y = u.activeIndex,
        w,
        d;
      if (u.params.loop) {
        u.slides.eq(y).hasClass(u.params.slideDuplicateClass) &&
          (u.loopFix(),
          (u._clientLeft = u.$wrapperEl[0].clientLeft),
          (y = u.activeIndex));
        const h = u.slides
            .eq(y)
            .prevAll(`[data-swiper-slide-index="${e.realIndex}"]`)
            .eq(0)
            .index(),
          m = u.slides
            .eq(y)
            .nextAll(`[data-swiper-slide-index="${e.realIndex}"]`)
            .eq(0)
            .index();
        typeof h > "u"
          ? (w = m)
          : typeof m > "u"
          ? (w = h)
          : m - y === y - h
          ? (w = u.params.slidesPerGroup > 1 ? m : y)
          : m - y < y - h
          ? (w = m)
          : (w = h),
          (d = e.activeIndex > e.previousIndex ? "next" : "prev");
      } else (w = e.realIndex), (d = w > e.previousIndex ? "next" : "prev");
      v && (w += d === "next" ? g : -1 * g),
        u.visibleSlidesIndexes &&
          u.visibleSlidesIndexes.indexOf(w) < 0 &&
          (u.params.centeredSlides
            ? w > y
              ? (w = w - Math.floor(c / 2) + 1)
              : (w = w + Math.floor(c / 2) - 1)
            : w > y && u.params.slidesPerGroup,
          u.slideTo(w, o ? 0 : void 0));
    }
  }
  n("beforeInit", () => {
    const { thumbs: o } = e.params;
    !o || !o.swiper || (s(), a(!0));
  }),
    n("slideChange update resize observerUpdate", () => {
      a();
    }),
    n("setTransition", (o, u) => {
      const c = e.thumbs.swiper;
      !c || c.destroyed || c.setTransition(u);
    }),
    n("beforeDestroy", () => {
      const o = e.thumbs.swiper;
      !o || o.destroyed || (i && o.destroy());
    }),
    Object.assign(e.thumbs, { init: s, update: a });
}
function ec({ swiper: e, extendParams: t, emit: n, once: r }) {
  t({
    freeMode: {
      enabled: !1,
      momentum: !0,
      momentumRatio: 1,
      momentumBounce: !0,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: !1,
      minimumVelocity: 0.02,
    },
  });
  function i() {
    const a = e.getTranslate();
    e.setTranslate(a),
      e.setTransition(0),
      (e.touchEventsData.velocities.length = 0),
      e.freeMode.onTouchEnd({ currentPos: e.rtl ? e.translate : -e.translate });
  }
  function l() {
    const { touchEventsData: a, touches: o } = e;
    a.velocities.length === 0 &&
      a.velocities.push({
        position: o[e.isHorizontal() ? "startX" : "startY"],
        time: a.touchStartTime,
      }),
      a.velocities.push({
        position: o[e.isHorizontal() ? "currentX" : "currentY"],
        time: tn(),
      });
  }
  function s({ currentPos: a }) {
    const {
        params: o,
        $wrapperEl: u,
        rtlTranslate: c,
        snapGrid: p,
        touchEventsData: f,
      } = e,
      v = tn() - f.touchStartTime;
    if (a < -e.minTranslate()) {
      e.slideTo(e.activeIndex);
      return;
    }
    if (a > -e.maxTranslate()) {
      e.slides.length < p.length
        ? e.slideTo(p.length - 1)
        : e.slideTo(e.slides.length - 1);
      return;
    }
    if (o.freeMode.momentum) {
      if (f.velocities.length > 1) {
        const T = f.velocities.pop(),
          M = f.velocities.pop(),
          k = T.position - M.position,
          V = T.time - M.time;
        (e.velocity = k / V),
          (e.velocity /= 2),
          Math.abs(e.velocity) < o.freeMode.minimumVelocity && (e.velocity = 0),
          (V > 150 || tn() - T.time > 300) && (e.velocity = 0);
      } else e.velocity = 0;
      (e.velocity *= o.freeMode.momentumVelocityRatio),
        (f.velocities.length = 0);
      let y = 1e3 * o.freeMode.momentumRatio;
      const w = e.velocity * y;
      let d = e.translate + w;
      c && (d = -d);
      let h = !1,
        m;
      const S = Math.abs(e.velocity) * 20 * o.freeMode.momentumBounceRatio;
      let E;
      if (d < e.maxTranslate())
        o.freeMode.momentumBounce
          ? (d + e.maxTranslate() < -S && (d = e.maxTranslate() - S),
            (m = e.maxTranslate()),
            (h = !0),
            (f.allowMomentumBounce = !0))
          : (d = e.maxTranslate()),
          o.loop && o.centeredSlides && (E = !0);
      else if (d > e.minTranslate())
        o.freeMode.momentumBounce
          ? (d - e.minTranslate() > S && (d = e.minTranslate() + S),
            (m = e.minTranslate()),
            (h = !0),
            (f.allowMomentumBounce = !0))
          : (d = e.minTranslate()),
          o.loop && o.centeredSlides && (E = !0);
      else if (o.freeMode.sticky) {
        let T;
        for (let M = 0; M < p.length; M += 1)
          if (p[M] > -d) {
            T = M;
            break;
          }
        Math.abs(p[T] - d) < Math.abs(p[T - 1] - d) ||
        e.swipeDirection === "next"
          ? (d = p[T])
          : (d = p[T - 1]),
          (d = -d);
      }
      if (
        (E &&
          r("transitionEnd", () => {
            e.loopFix();
          }),
        e.velocity !== 0)
      ) {
        if (
          (c
            ? (y = Math.abs((-d - e.translate) / e.velocity))
            : (y = Math.abs((d - e.translate) / e.velocity)),
          o.freeMode.sticky)
        ) {
          const T = Math.abs((c ? -d : d) - e.translate),
            M = e.slidesSizesGrid[e.activeIndex];
          T < M
            ? (y = o.speed)
            : T < 2 * M
            ? (y = o.speed * 1.5)
            : (y = o.speed * 2.5);
        }
      } else if (o.freeMode.sticky) {
        e.slideToClosest();
        return;
      }
      o.freeMode.momentumBounce && h
        ? (e.updateProgress(m),
          e.setTransition(y),
          e.setTranslate(d),
          e.transitionStart(!0, e.swipeDirection),
          (e.animating = !0),
          u.transitionEnd(() => {
            !e ||
              e.destroyed ||
              !f.allowMomentumBounce ||
              (n("momentumBounce"),
              e.setTransition(o.speed),
              setTimeout(() => {
                e.setTranslate(m),
                  u.transitionEnd(() => {
                    !e || e.destroyed || e.transitionEnd();
                  });
              }, 0));
          }))
        : e.velocity
        ? (n("_freeModeNoMomentumRelease"),
          e.updateProgress(d),
          e.setTransition(y),
          e.setTranslate(d),
          e.transitionStart(!0, e.swipeDirection),
          e.animating ||
            ((e.animating = !0),
            u.transitionEnd(() => {
              !e || e.destroyed || e.transitionEnd();
            })))
        : e.updateProgress(d),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    } else if (o.freeMode.sticky) {
      e.slideToClosest();
      return;
    } else o.freeMode && n("_freeModeNoMomentumRelease");
    (!o.freeMode.momentum || v >= o.longSwipesMs) &&
      (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses());
  }
  Object.assign(e, {
    freeMode: { onTouchStart: i, onTouchMove: l, onTouchEnd: s },
  });
}
function wn(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function Gt(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : wn(t[r]) && wn(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : Gt(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function Of(e = {}) {
  return (
    e.navigation &&
    typeof e.navigation.nextEl > "u" &&
    typeof e.navigation.prevEl > "u"
  );
}
function Nf(e = {}) {
  return e.pagination && typeof e.pagination.el > "u";
}
function $f(e = {}) {
  return e.scrollbar && typeof e.scrollbar.el > "u";
}
function If(e = "") {
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
const Af = [
  "modules",
  "init",
  "_direction",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_preloadImages",
  "updateOnImagesReady",
  "_loop",
  "_loopAdditionalSlides",
  "_loopedSlides",
  "_loopedSlidesLimit",
  "_loopFillGroupWithBlank",
  "loopPreventsSlide",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideBlankClass",
  "slideActiveClass",
  "slideDuplicateActiveClass",
  "slideVisibleClass",
  "slideDuplicateClass",
  "slideNextClass",
  "slideDuplicateNextClass",
  "slidePrevClass",
  "slideDuplicatePrevClass",
  "wrapperClass",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "lazy",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
];
function Cg(e = {}, t = !0) {
  const n = { on: {} },
    r = {},
    i = {};
  Gt(n, Fe.defaults),
    Gt(n, Fe.extendedDefaults),
    (n._emitClasses = !0),
    (n.init = !1);
  const l = {},
    s = Af.map((o) => o.replace(/_/, "")),
    a = Object.assign({}, e);
  return (
    Object.keys(a).forEach((o) => {
      typeof e[o] > "u" ||
        (s.indexOf(o) >= 0
          ? wn(e[o])
            ? ((n[o] = {}), (i[o] = {}), Gt(n[o], e[o]), Gt(i[o], e[o]))
            : ((n[o] = e[o]), (i[o] = e[o]))
          : o.search(/on[A-Z]/) === 0 && typeof e[o] == "function"
          ? t
            ? (r[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
            : (n.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
          : (l[o] = e[o]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((o) => {
      n[o] === !0 && (n[o] = {}), n[o] === !1 && delete n[o];
    }),
    { params: n, passedParams: i, rest: l, events: r }
  );
}
function Eg(
  { el: e, nextEl: t, prevEl: n, paginationEl: r, scrollbarEl: i, swiper: l },
  s
) {
  Of(s) &&
    t &&
    n &&
    ((l.params.navigation.nextEl = t),
    (l.originalParams.navigation.nextEl = t),
    (l.params.navigation.prevEl = n),
    (l.originalParams.navigation.prevEl = n)),
    Nf(s) &&
      r &&
      ((l.params.pagination.el = r), (l.originalParams.pagination.el = r)),
    $f(s) &&
      i &&
      ((l.params.scrollbar.el = i), (l.originalParams.scrollbar.el = i)),
    l.init(e);
}
const Rf = (e, t) => {
  let n = t.slidesPerView;
  if (t.breakpoints) {
    const i = Fe.prototype.getBreakpoint(t.breakpoints),
      l = i in t.breakpoints ? t.breakpoints[i] : void 0;
    l && l.slidesPerView && (n = l.slidesPerView);
  }
  let r = Math.ceil(parseFloat(t.loopedSlides || n, 10));
  return (
    (r += t.loopAdditionalSlides),
    r > e.length && t.loopedSlidesLimit && (r = e.length),
    r
  );
};
function kg(e, t, n) {
  const r = t.map((o, u) =>
    Et.cloneElement(o, { swiper: e, "data-swiper-slide-index": u })
  );
  function i(o, u, c) {
    return Et.cloneElement(o, {
      key: `${o.key}-duplicate-${u}-${c}`,
      className: `${o.props.className || ""} ${n.slideDuplicateClass}`,
    });
  }
  if (n.loopFillGroupWithBlank) {
    const o = n.slidesPerGroup - (r.length % n.slidesPerGroup);
    if (o !== n.slidesPerGroup)
      for (let u = 0; u < o; u += 1) {
        const c = C("div", {
          className: `${n.slideClass} ${n.slideBlankClass}`,
        });
        r.push(c);
      }
  }
  n.slidesPerView === "auto" && !n.loopedSlides && (n.loopedSlides = r.length);
  const l = Rf(r, n),
    s = [],
    a = [];
  for (let o = 0; o < l; o += 1) {
    const u = o - Math.floor(o / r.length) * r.length;
    a.push(i(r[u], o, "append")),
      s.unshift(i(r[r.length - u - 1], o, "prepend"));
  }
  return e && (e.loopedSlides = l), [...s, ...r, ...a];
}
function Tg(e, t, n, r, i) {
  const l = [];
  if (!t) return l;
  const s = (o) => {
    l.indexOf(o) < 0 && l.push(o);
  };
  if (n && r) {
    const o = r.map(i),
      u = n.map(i);
    o.join("") !== u.join("") && s("children"),
      r.length !== n.length && s("children");
  }
  return (
    Af.filter((o) => o[0] === "_")
      .map((o) => o.replace(/_/, ""))
      .forEach((o) => {
        if (o in e && o in t)
          if (wn(e[o]) && wn(t[o])) {
            const u = Object.keys(e[o]),
              c = Object.keys(t[o]);
            u.length !== c.length
              ? s(o)
              : (u.forEach((p) => {
                  e[o][p] !== t[o][p] && s(o);
                }),
                c.forEach((p) => {
                  e[o][p] !== t[o][p] && s(o);
                }));
          } else e[o] !== t[o] && s(o);
      }),
    l
  );
}
function Df(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
  );
}
function Ff(e) {
  const t = [];
  return (
    Et.Children.toArray(e).forEach((n) => {
      Df(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          Ff(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function Pg(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    Et.Children.toArray(e).forEach((r) => {
      if (Df(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = Ff(r.props.children);
        i.length > 0 ? i.forEach((l) => t.push(l)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function _g({
  swiper: e,
  slides: t,
  passedParams: n,
  changedParams: r,
  nextEl: i,
  prevEl: l,
  scrollbarEl: s,
  paginationEl: a,
}) {
  const o = r.filter((E) => E !== "children" && E !== "direction"),
    {
      params: u,
      pagination: c,
      navigation: p,
      scrollbar: f,
      virtual: g,
      thumbs: v,
    } = e;
  let y, w, d, h, m;
  r.includes("thumbs") &&
    n.thumbs &&
    n.thumbs.swiper &&
    u.thumbs &&
    !u.thumbs.swiper &&
    (y = !0),
    r.includes("controller") &&
      n.controller &&
      n.controller.control &&
      u.controller &&
      !u.controller.control &&
      (w = !0),
    r.includes("pagination") &&
      n.pagination &&
      (n.pagination.el || a) &&
      (u.pagination || u.pagination === !1) &&
      c &&
      !c.el &&
      (d = !0),
    r.includes("scrollbar") &&
      n.scrollbar &&
      (n.scrollbar.el || s) &&
      (u.scrollbar || u.scrollbar === !1) &&
      f &&
      !f.el &&
      (h = !0),
    r.includes("navigation") &&
      n.navigation &&
      (n.navigation.prevEl || l) &&
      (n.navigation.nextEl || i) &&
      (u.navigation || u.navigation === !1) &&
      p &&
      !p.prevEl &&
      !p.nextEl &&
      (m = !0);
  const S = (E) => {
    !e[E] ||
      (e[E].destroy(),
      E === "navigation"
        ? ((u[E].prevEl = void 0),
          (u[E].nextEl = void 0),
          (e[E].prevEl = void 0),
          (e[E].nextEl = void 0))
        : ((u[E].el = void 0), (e[E].el = void 0)));
  };
  o.forEach((E) => {
    if (wn(u[E]) && wn(n[E])) Gt(u[E], n[E]);
    else {
      const T = n[E];
      (T === !0 || T === !1) &&
      (E === "navigation" || E === "pagination" || E === "scrollbar")
        ? T === !1 && S(E)
        : (u[E] = n[E]);
    }
  }),
    o.includes("controller") &&
      !w &&
      e.controller &&
      e.controller.control &&
      u.controller &&
      u.controller.control &&
      (e.controller.control = u.controller.control),
    r.includes("children") && t && g && u.virtual.enabled
      ? ((g.slides = t), g.update(!0))
      : r.includes("children") &&
        e.lazy &&
        e.params.lazy.enabled &&
        e.lazy.load(),
    y && v.init() && v.update(!0),
    w && (e.controller.control = u.controller.control),
    d && (a && (u.pagination.el = a), c.init(), c.render(), c.update()),
    h &&
      (s && (u.scrollbar.el = s), f.init(), f.updateSize(), f.setTranslate()),
    m &&
      (i && (u.navigation.nextEl = i),
      l && (u.navigation.prevEl = l),
      p.init(),
      p.update()),
    r.includes("allowSlideNext") && (e.allowSlideNext = n.allowSlideNext),
    r.includes("allowSlidePrev") && (e.allowSlidePrev = n.allowSlidePrev),
    r.includes("direction") && e.changeDirection(n.direction, !1),
    e.update();
}
function Mg(e, t, n) {
  if (!n) return null;
  const r = e.isHorizontal()
    ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
    : { top: `${n.offset}px` };
  return t
    .filter((i, l) => l >= n.from && l <= n.to)
    .map((i) => Et.cloneElement(i, { swiper: e, style: r }));
}
const zg = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.lazy && e.params.lazy.enabled && e.lazy.load(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function zr(e, t) {
  return typeof window > "u"
    ? X.exports.useEffect(e, t)
    : X.exports.useLayoutEffect(e, t);
}
const Lg = X.exports.createContext(null),
  Og = X.exports.createContext(null),
  wo = X.exports.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = "div",
        wrapperTag: i = "div",
        children: l,
        onSwiper: s,
        ...a
      } = e === void 0 ? {} : e,
      o = !1;
    const [u, c] = X.exports.useState("swiper"),
      [p, f] = X.exports.useState(null),
      [g, v] = X.exports.useState(!1),
      y = X.exports.useRef(!1),
      w = X.exports.useRef(null),
      d = X.exports.useRef(null),
      h = X.exports.useRef(null),
      m = X.exports.useRef(null),
      S = X.exports.useRef(null),
      E = X.exports.useRef(null),
      T = X.exports.useRef(null),
      M = X.exports.useRef(null),
      { params: k, passedParams: V, rest: _, events: D } = Cg(a),
      { slides: F, slots: K } = Pg(l),
      ge = () => {
        v(!g);
      };
    Object.assign(k.on, {
      _containerClasses(R, j) {
        c(j);
      },
    });
    const de = () => {
      if (
        (Object.assign(k.on, D),
        (o = !0),
        (d.current = new Fe(k)),
        (d.current.loopCreate = () => {}),
        (d.current.loopDestroy = () => {}),
        k.loop && (d.current.loopedSlides = Rf(F, k)),
        d.current.virtual && d.current.params.virtual.enabled)
      ) {
        d.current.virtual.slides = F;
        const R = {
          cache: !1,
          slides: F,
          renderExternal: f,
          renderExternalUpdate: !1,
        };
        Gt(d.current.params.virtual, R),
          Gt(d.current.originalParams.virtual, R);
      }
    };
    w.current || de(), d.current && d.current.on("_beforeBreakpoint", ge);
    const Xe = () => {
        o ||
          !D ||
          !d.current ||
          Object.keys(D).forEach((R) => {
            d.current.on(R, D[R]);
          });
      },
      ye = () => {
        !D ||
          !d.current ||
          Object.keys(D).forEach((R) => {
            d.current.off(R, D[R]);
          });
      };
    X.exports.useEffect(() => () => {
      d.current && d.current.off("_beforeBreakpoint", ge);
    }),
      X.exports.useEffect(() => {
        !y.current &&
          d.current &&
          (d.current.emitSlidesClasses(), (y.current = !0));
      }),
      zr(() => {
        if ((t && (t.current = w.current), !!w.current))
          return (
            d.current.destroyed && de(),
            Eg(
              {
                el: w.current,
                nextEl: S.current,
                prevEl: E.current,
                paginationEl: T.current,
                scrollbarEl: M.current,
                swiper: d.current,
              },
              k
            ),
            s && s(d.current),
            () => {
              d.current && !d.current.destroyed && d.current.destroy(!0, !1);
            }
          );
      }, []),
      zr(() => {
        Xe();
        const R = Tg(V, h.current, F, m.current, (j) => j.key);
        return (
          (h.current = V),
          (m.current = F),
          R.length &&
            d.current &&
            !d.current.destroyed &&
            _g({
              swiper: d.current,
              slides: F,
              passedParams: V,
              changedParams: R,
              nextEl: S.current,
              prevEl: E.current,
              scrollbarEl: M.current,
              paginationEl: T.current,
            }),
          () => {
            ye();
          }
        );
      }),
      zr(() => {
        zg(d.current);
      }, [p]);
    function z() {
      return k.virtual
        ? Mg(d.current, F, p)
        : !k.loop || (d.current && d.current.destroyed)
        ? F.map((R) => Et.cloneElement(R, { swiper: d.current }))
        : kg(d.current, F, k);
    }
    return C(r, {
      ref: w,
      className: If(`${u}${n ? ` ${n}` : ""}`),
      ..._,
      children: W(Og.Provider, {
        value: d.current,
        children: [
          K["container-start"],
          W(i, {
            className: "swiper-wrapper",
            children: [K["wrapper-start"], z(), K["wrapper-end"]],
          }),
          Of(k) &&
            W(Ca, {
              children: [
                C("div", { ref: E, className: "swiper-button-prev" }),
                C("div", { ref: S, className: "swiper-button-next" }),
              ],
            }),
          $f(k) && C("div", { ref: M, className: "swiper-scrollbar" }),
          Nf(k) && C("div", { ref: T, className: "swiper-pagination" }),
          K["container-end"],
        ],
      }),
    });
  });
wo.displayName = "Swiper";
const Me = X.exports.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: l,
    zoom: s,
    virtualIndex: a,
    ...o
  } = e === void 0 ? {} : e;
  const u = X.exports.useRef(null),
    [c, p] = X.exports.useState("swiper-slide");
  function f(y, w, d) {
    w === u.current && p(d);
  }
  zr(() => {
    if ((t && (t.current = u.current), !(!u.current || !l))) {
      if (l.destroyed) {
        c !== "swiper-slide" && p("swiper-slide");
        return;
      }
      return (
        l.on("_slideClass", f),
        () => {
          !l || l.off("_slideClass", f);
        }
      );
    }
  }),
    zr(() => {
      l && u.current && !l.destroyed && p(l.getSlideClasses(u.current));
    }, [l]);
  const g = {
      isActive:
        c.indexOf("swiper-slide-active") >= 0 ||
        c.indexOf("swiper-slide-duplicate-active") >= 0,
      isVisible: c.indexOf("swiper-slide-visible") >= 0,
      isDuplicate: c.indexOf("swiper-slide-duplicate") >= 0,
      isPrev:
        c.indexOf("swiper-slide-prev") >= 0 ||
        c.indexOf("swiper-slide-duplicate-prev") >= 0,
      isNext:
        c.indexOf("swiper-slide-next") >= 0 ||
        c.indexOf("swiper-slide-duplicate-next") >= 0,
    },
    v = () => (typeof r == "function" ? r(g) : r);
  return C(n, {
    ref: u,
    className: If(`${c}${i ? ` ${i}` : ""}`),
    "data-swiper-slide-index": a,
    ...o,
    children: C(Lg.Provider, {
      value: g,
      children: s
        ? C("div", {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof s == "number" ? s : void 0,
            children: v(),
          })
        : v(),
    }),
  });
});
Me.displayName = "SwiperSlide";
const Ng = () => {
    const [e, t] = X.exports.useState(null);
    return W("div", {
      children: [
        W(wo, {
          style: {
            "--swiper-navigation-color": "rgb(117,117,117)",
            "--swiper-pagination-color": "rgb(117,117,117)",
            "--swiper-navigation-size": "2rem",
          },
          spaceBetween: 10,
          navigation: !0,
          thumbs: { swiper: e },
          modules: [ec, Zu, Ju],
          className: "mySwiper",
          children: [
            C(Me, { children: C("img", { src: "./assets/vitibot_21.png" }) }),
            C(Me, { children: C("img", { src: "./assets/vitibot.png" }) }),
            C(Me, { children: C("img", { src: "./assets/vitibot_10.png" }) }),
            C(Me, { children: C("img", { src: "./assets/vitibot_16.png" }) }),
            C(Me, { children: C("img", { src: "./assets/vitibot_18.png" }) }),
            C(Me, { children: C("img", { src: "./assets/vitibot_19.png" }) }),
            C(Me, { children: C("img", { src: "./assets/vitibot_17.png" }) }),
            C(Me, { children: C("img", { src: "./assets/vitibot_20.png" }) }),
          ],
        }),
        C("div", {
          style: { position: "relative" },
          children: W(wo, {
            style: {
              "--swiper-navigation-color": "rgb(117,117,117)",
              "--swiper-pagination-color": "rgb(117,117,117)",
              "--swiper-navigation-size": "1.2rem",
            },
            onSwiper: t,
            spaceBetween: 10,
            slidesPerView: 7,
            freeMode: !0,
            navigation: !0,
            watchSlidesProgress: !0,
            modules: [ec, Zu, Ju],
            className: "myThumbsSwiper",
            children: [
              C(Me, { children: C("img", { src: "./assets/vitibot_21.png" }) }),
              C(Me, { children: C("img", { src: "./assets/vitibot.png" }) }),
              C(Me, { children: C("img", { src: "./assets/vitibot_10.png" }) }),
              C(Me, { children: C("img", { src: "./assets/vitibot_16.png" }) }),
              C(Me, { children: C("img", { src: "./assets/vitibot_18.png" }) }),
              C(Me, { children: C("img", { src: "./assets/vitibot_19.png" }) }),
              C(Me, { children: C("img", { src: "./assets/vitibot_17.png" }) }),
              C(Me, { children: C("img", { src: "./assets/vitibot_20.png" }) }),
            ],
          }),
        }),
      ],
    });
  },
  $g = re.div`
  display: flex;
  justify-content: center;
  margin-block: 2rem; 
`,
  Ci = re.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  max-width: 11.5rem;
  width: 16%;
  &:not(:last-child){
    border-right: 1px solid rgba(117,117,117,.3)
  }
  & svg{
    height: 40px;
  }
`,
  Ei = re.p`
  font-size: 2rem;
  margin: 0.625rem;
`,
  ki = re.p`
  margin: 0;
  font-size: 0.875rem;
  text-align: center;
`,
  Ig = () =>
    W($g, {
      children: [
        W(Ci, {
          children: [
            C("svg", {
              width: "34",
              height: "40",
              viewBox: "0 0 34 40",
              "aria-hidden": "true",
              xmlns: "http://www.w3.org/2000/svg",
              children: W("g", {
                fill: "rgb(117,117,117)",
                children: [
                  C("path", {
                    d: "M32.606 29.532c.319 0 .576.127.576.282v.585c0 .155-.257.281-.576.281H.895c-.32 0-.578-.126-.578-.281v-.585c0-.155.258-.282.578-.282h31.71zM15.737 14.597c.071 0 .129.126.129.281v.585c0 .155-.058.281-.13.281H8.63c-.072 0-.13-.126-.13-.281v-.585c0-.155.058-.281.13-.281h7.107zm9.713 0c.072 0 .13.126.13.281v.585c0 .155-.058.281-.13.281h-7.106c-.072 0-.13-.126-.13-.281v-.585c0-.155.058-.281.13-.281h7.107z",
                  }),
                  C("path", {
                    d: "M1.821 21.572H32.18v16.606H1.82V21.572zM1.195 20A1.19 1.19 0 000 21.186v17.592a1.19 1.19 0 001.195 1.186h31.54a1.19 1.19 0 001.193-1.186V21.186A1.19 1.19 0 0032.734 20H1.195zM7.856 8.485c-.79.11-1.183.505-1.177 1.186v3.741c.342.047 1.524.09 1.524 1.559V9.885H25.9v3.874c.291-1.068.765-1.132 1.421-.193V9.671c0-.655-.527-1.186-1.177-1.186H7.856z",
                  }),
                  C("path", {
                    d: "M7.34 18.919c-1.64 0-1.634-.814-1.634-1.042 0-1.052 1.071-3.36 1.614-3.48.593.12 1.665 2.428 1.666 3.48 0 .23-.005 1.042-1.646 1.042M7.3 12.12c-1.028.214-3.05 4.31-3.05 6.18 0 .403-.008 1.847 3.085 1.847 3.097 0 3.106-1.441 3.106-1.847-.004-1.869-2.025-5.968-3.142-6.178m9.66 6.797c-1.64 0-1.635-.814-1.635-1.042 0-1.052 1.072-3.36 1.615-3.48.593.12 1.664 2.428 1.666 3.48 0 .23-.005 1.042-1.646 1.042m-.042-6.798c-1.026.213-3.048 4.309-3.048 6.178 0 .403-.008 1.847 3.085 1.847 3.096 0 3.105-1.441 3.105-1.847-.004-1.869-2.025-5.968-3.142-6.178m9.729 6.798c-1.64 0-1.634-.814-1.634-1.042 0-1.052 1.072-3.36 1.614-3.48.593.12 1.665 2.428 1.667 3.48 0 .23-.005 1.042-1.647 1.042m-.041-6.798c-1.025.213-3.048 4.309-3.048 6.178 0 .403-.009 1.847 3.084 1.847 3.097 0 3.105-1.441 3.105-1.847-.002-1.869-2.024-5.968-3.141-6.178m-9.646-4.596c-1.64 0-1.635-.814-1.635-1.041 0-1.053 1.072-3.36 1.615-3.482.593.12 1.664 2.429 1.666 3.482 0 .228-.005 1.04-1.646 1.04M16.917.728C15.891.94 13.87 5.036 13.87 6.905c0 .404-.008 1.847 3.085 1.847 3.096 0 3.105-1.441 3.105-1.847-.004-1.869-2.025-5.968-3.142-6.178",
                  }),
                ],
              }),
            }),
            C(Ei, { children: "9+" }),
            C(ki, { children: "\xC2ges" }),
          ],
        }),
        W(Ci, {
          children: [
            C("svg", {
              width: "33",
              height: "40",
              viewBox: "0 0 33 40",
              "aria-hidden": "true",
              xmlns: "http://www.w3.org/2000/svg",
              children: W("g", {
                fillRule: "nonzero",
                stroke: "rgb(117,117,117)",
                fill: "none",
                children: [
                  C("path", {
                    strokeWidth: "1.727",
                    fill: "#FFF",
                    d: "M1.184 9.433l15.224-7.281 15.59 7.194V30.49L17.418 39 1.184 30.577z",
                  }),
                  C("path", {
                    d: "M23.23 3.544C22.864 2.141 19.925 1 16.526 1c-3.675 0-6.798 1.228-6.89 2.895 0 0 .184 4.124.184 4.211 0 2.018 3.307 3.422 6.798 3.422 3.582 0 6.797-1.404 6.797-3.422v-3.07s.184-.965-.183-1.492z",
                    strokeWidth: "1.152",
                    fill: "#FFF",
                  }),
                  C("path", {
                    d: "M10.094 4.334c.092-1.58 2.94-2.895 6.43-2.895 3.491 0 6.34 1.316 6.431 2.895.092 1.667-2.756 2.983-6.43 2.983-3.675 0-6.523-1.404-6.43-2.983h0z",
                    strokeWidth: "1.152",
                  }),
                  C("path", {
                    strokeWidth: "1.727",
                    d: "M2 10l15 7.222V39M17 17l14.63-7.122",
                  }),
                ],
              }),
            }),
            C(Ei, { children: "276" }),
            C(ki, { children: "Nombre de pi\xE8ces" }),
          ],
        }),
        W(Ci, {
          children: [
            C("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "28",
              height: "42",
              viewBox: "0 0 28 42",
              "aria-hidden": "true",
              children: W("g", {
                stroke: "#6F6F6F",
                fill: "none",
                fillRule: "evenodd",
                children: [
                  C("path", {
                    d: "M24.568 23.822l-.719-3.617c-.16-.63-.245-1.226-.482-1.681-.862-1.655-3.313-4.703-3.938-4.869a1.687 1.687 0 00-.44-.052l1.91 10.85 3.669-.631z",
                    strokeWidth: "1.2",
                  }),
                  C("path", {
                    d: "M26.512 27.17c-.085-1.173-1.116-2.075-2.35-2.049-1.285.035-2.341 1.068-2.308 2.338.026.937.634 1.7 1.471 1.997l-.093-.955a1.62 1.62 0 01-.49-1.016c-.06-.805.532-1.47 1.327-1.488.794-.018 1.496.622 1.547 1.436.017.263-.034.517-.144.727l.279.823a2.203 2.203 0 00.76-1.813z",
                    fill: "#6F6F6F",
                    strokeWidth: ".5",
                  }),
                  C("path", {
                    d: "M2.295 23.822l.719-3.617c.16-.63.245-1.226.481-1.681.863-1.655 3.314-4.703 3.94-4.869.126-.035.278-.052.439-.052l-1.919 10.84-3.66-.621z",
                    strokeWidth: "1.2",
                  }),
                  C("path", {
                    d: "M.42 27.17c.084-1.173 1.116-2.075 2.35-2.049 1.285.035 2.341 1.068 2.307 2.338-.025.937-.634 1.7-1.47 1.997L3.7 28.5a1.62 1.62 0 00.49-1.016c.059-.805-.533-1.47-1.327-1.488-.795-.018-1.496.622-1.556 1.436-.016.263.034.517.144.727l-.279.823A2.222 2.222 0 01.42 27.17z",
                    fill: "#6F6F6F",
                    strokeWidth: ".5",
                  }),
                  C("path", {
                    strokeWidth: "1.436",
                    d: "M12.047 27.456l-5.088-.014-.527 12.44h5.896V33.04l-.296-.56z",
                  }),
                  C("path", {
                    strokeWidth: ".513",
                    d: "M12.81 37.318H6.04M6.25 32.289h6.265",
                  }),
                  W("g", {
                    children: [
                      C("path", {
                        strokeWidth: "1.436",
                        d: "M19.938 27.45l-5.081.014.008 5.024-.296.567v6.843h5.895z",
                      }),
                      C("path", {
                        strokeWidth: ".513",
                        d: "M14.383 32.298h6.263M20.866 37.36h-6.78",
                      }),
                    ],
                  }),
                  C("path", {
                    d: "M20.806 25.81l-1.31-7.876-.668-4.221c-.042-.294-.21-.54-.481-.54H8.533c-.262 0-.43.246-.482.54l-.667 4.221-1.31 7.875v1.07h14.724v-1.07h.008z",
                    strokeWidth: "1.436",
                  }),
                  W("g", {
                    children: [
                      C("path", {
                        d: "M11.103 3.54c-.017 0 0-1.681 0-1.681a.29.29 0 01.287-.298h4.108a.29.29 0 01.288.298V3.54",
                        strokeWidth: ".851",
                      }),
                      C("path", {
                        d: "M16.411 11.965c1.057 0 1.91-.885 1.91-1.98V5.529c0-1.094-.853-1.979-1.91-1.979h-5.925c-1.057 0-1.91.885-1.91 1.98v4.457c0 1.094.853 1.979 1.91 1.979h5.925z",
                        strokeWidth: "1.436",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            C(Ei, { children: "0" }),
            C(ki, { children: "Minifigs" }),
          ],
        }),
        W(Ci, {
          children: [
            C("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "36",
              height: "36",
              "aria-hidden": "true",
              viewBox: "0 0 36 36",
              children: C("path", {
                d: "M13.81 12.333l-2.833 11.334h11.216l2.834-11.334H13.81zm.945-3.777H25.97l1.53-6.124a1.89 1.89 0 013.668.914l-1.303 5.21h3.245c1.047 0 1.889.846 1.889 1.889a1.887 1.887 0 01-1.889 1.888h-4.19l-2.833 11.334h7.023c1.047 0 1.889.846 1.889 1.888a1.887 1.887 0 01-1.889 1.89h-7.967l-1.534 6.123a1.888 1.888 0 11-3.66-.914l1.299-5.21H10.033l-1.534 6.124a1.888 1.888 0 11-3.66-.914l1.299-5.21h-3.25a1.89 1.89 0 010-3.777h4.194l2.834-11.334H2.889a1.89 1.89 0 010-3.777h7.971l1.534-6.124a1.884 1.884 0 012.285-1.375 1.883 1.883 0 011.375 2.29l-1.3 5.209z",
                fill: "rgb(117,117,117)",
                stroke: "#FFF",
                fillRule: "evenodd",
              }),
            }),
            C(Ei, { children: "58030" }),
            C(ki, { children: "Num\xE9ro d'article" }),
          ],
        }),
      ],
    }),
  Ag = re.div`
  padding-top: 1.25rem;
  padding-inline: 1.25rem;
`,
  Rg = re.div`
  display: inline-block;
  margin: 0px;
  margin-right: 0.27rem;
  padding: 0.19rem 0.625rem;
  background: rgb(255, 207, 0);
  color: rgb(0, 0, 0);
  font-size: 0.75rem;
  line-height: 1.1875rem;
`,
  Dg = re.h1`
  font-size: 1.5rem;
  font-weight: 500;
`,
  Fg = re.p`
  color: rgb(253, 128, 36);
  font-size: 0.875rem;
`,
  jg = re.div`
margin-block: 20px;
display: flex;
align-items: center;
gap: 2rem;
font-size: 0.875rem;
`,
  Bg = () =>
    W(Ag, {
      children: [
        C(Rg, { children: "Nouveaut\xE9" }),
        C(Dg, { children: "BAKUS de Vitibot" }),
        C(Fg, { children: "Disponible d\xE8s maintenant" }),
        C(vr, {
          url: "https://www.clementbellier.fr/#contact",
          children: "Contactez le cr\xE9ateur",
        }),
        W(jg, {
          children: [
            W("span", {
              children: [
                "Attention!",
                C("br", {}),
                "Danger d\u2019\xE9touffement.",
                C("br", {}),
                "Petits \xE9l\xE9ments et petites balles.",
              ],
            }),
            C("img", {
              src: "./assets/safety-08ff1b3398344608cf1508144b3c2d0f.svg",
              width: 80,
            }),
          ],
        }),
      ],
    }),
  bg = re.section`
  @media (min-width: 900px) {
    width: 100vw;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
  }
`,
  Vg = re.div`
  @media (min-width: 900px) {
    flex: 3;
  }
`,
  tc = re.h2`
  background: rgb(248, 248, 248);
  padding: 2rem;
`,
  nc = re.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`,
  kt = re.div`
  display: flex;
  flex-direction: column;
  width: max(30%, 300px);
  & img {
    width: 100%;
  }
`,
  dr = re.h3`
  font-size: 2rem;
  margin: 0;
  text-align: center;
`,
  fr = re.p`
  margin: 0.5rem;
`,
  Hg = () =>
    W("main", {
      children: [
        W(bg, {
          children: [W(Vg, { children: [C(Ng, {}), C(Ig, {})] }), C(Bg, {})],
        }),
        W("section", {
          children: [
            C(tc, { children: "Description" }),
            W(nc, {
              children: [
                W(kt, {
                  children: [
                    C("img", { src: "./assets/vitibot_19.png" }),
                    C(dr, { children: "Pourquoi ceci ?" }),
                    C(fr, {
                      children:
                        "Cl\xE9ment BELLIER est un d\xE9veloppeur fullstack Javascript avec une app\xE9tence forte pour le frontend. Il croit en Vitibot et souhaite vraiment y travailler.",
                    }),
                  ],
                }),
                W(kt, {
                  children: [
                    C("img", { src: "./assets/vitibot.png" }),
                    C(dr, { children: "Ce qu'il a fait" }),
                    C(fr, {
                      children:
                        "Il a cr\xE9\xE9 le Bakus-P60L en Lego \xE0 l'aide du logiciel Studio de Bricklink.",
                    }),
                  ],
                }),
                W(kt, {
                  children: [
                    C("img", { src: "./assets/vitibot_17.png" }),
                    C(dr, { children: "Et pour continuer" }),
                    C(fr, {
                      children:
                        "Il a fait une copie d'une page produit du site Lego pour mettre en avant le Bakus et montrer ce qu'il sait faire rapidement.",
                    }),
                  ],
                }),
                W(kt, {
                  children: [
                    C("img", { src: "./assets/vitibot_18.png" }),
                    C(dr, { children: "Les technos utilis\xE9es" }),
                    C(fr, {
                      children:
                        "Cette page a \xE9t\xE9 faite avec React, Style-components et Swiper (gallerie d'images).",
                    }),
                  ],
                }),
                W(kt, {
                  children: [
                    C("img", { src: "./assets/vitibot_11.png" }),
                    C(dr, { children: "Ces motivations" }),
                    C(fr, {
                      children:
                        "Par ces quelques heures pass\xE9es \xE0 r\xE9aliser le robot viticole et la page Web, Cl\xE9ment esp\xE8re avoir touch\xE9 au moins une personne chez Vitibot et d\xE9crocher un entretien pour le poste de D\xE9veloppeur Front-end Junior.",
                    }),
                  ],
                }),
              ],
            }),
            C(tc, { children: "Retrouver Cl\xE9ment BELLIER" }),
            W(nc, {
              children: [
                C(kt, {
                  children: C(vr, {
                    url: "http://www.clementbellier.fr",
                    children: "Son Portfolio",
                  }),
                }),
                C(kt, {
                  children: C(vr, {
                    url: "https://www.clementbellier.fr/assets/BELLIER-Clement_CV_DeveloppeurFullstack.pdf",
                    children: "Son CV",
                  }),
                }),
                C(kt, {
                  children: C(vr, {
                    url: "https://github.com/ClementBellier",
                    children: "Son Github",
                  }),
                }),
                C(kt, {
                  children: C(vr, {
                    url: "mailto:clement.bellier@gmail.com",
                    children: "Lui \xE9crire un mail",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
function Wg() {
  return W(Ca, { children: [C(v0, {}), C(Hg, {}), C(u0, {})] });
}
ws.createRoot(document.getElementById("root")).render(C(Wg, {}));
