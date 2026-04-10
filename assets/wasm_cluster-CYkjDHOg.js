class h {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    n.__wbg_distributedcluster_free(t, 0);
  }
  get_state() {
    const t = n.distributedcluster_get_state(this.__wbg_ptr);
    if (t[2]) throw i(t[1]);
    return i(t[0]);
  }
  constructor() {
    const t = n.distributedcluster_new();
    return this.__wbg_ptr = t >>> 0, A.register(this, this.__wbg_ptr, this), this;
  }
  tick_and_get_state() {
    const t = n.distributedcluster_tick_and_get_state(this.__wbg_ptr);
    if (t[2]) throw i(t[1]);
    return i(t[0]);
  }
  toggle_node_power(t) {
    const r = n.distributedcluster_toggle_node_power(this.__wbg_ptr, t);
    if (r[2]) throw i(r[1]);
    return i(r[0]);
  }
  write_data(t) {
    const r = F(t, n.__wbindgen_malloc, n.__wbindgen_realloc), s = p, _ = n.distributedcluster_write_data(this.__wbg_ptr, r, s);
    if (_[2]) throw i(_[1]);
    return i(_[0]);
  }
}
Symbol.dispose && (h.prototype[Symbol.dispose] = h.prototype.free);
class m {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, x.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    n.__wbg_parallelcompute_free(t, 0);
  }
  get_state() {
    const t = n.parallelcompute_get_state(this.__wbg_ptr);
    if (t[2]) throw i(t[1]);
    return i(t[0]);
  }
  launch_kernel() {
    const t = n.parallelcompute_launch_kernel(this.__wbg_ptr);
    if (t[2]) throw i(t[1]);
    return i(t[0]);
  }
  constructor() {
    const t = n.parallelcompute_new();
    return this.__wbg_ptr = t >>> 0, x.register(this, this.__wbg_ptr, this), this;
  }
  reset_system() {
    const t = n.parallelcompute_reset_system(this.__wbg_ptr);
    if (t[2]) throw i(t[1]);
    return i(t[0]);
  }
  set_num_threads(t) {
    const r = n.parallelcompute_set_num_threads(this.__wbg_ptr, t);
    if (r[2]) throw i(r[1]);
    return i(r[0]);
  }
  tick_and_get_state() {
    const t = n.parallelcompute_tick_and_get_state(this.__wbg_ptr);
    if (t[2]) throw i(t[1]);
    return i(t[0]);
  }
  toggle_mutex() {
    const t = n.parallelcompute_toggle_mutex(this.__wbg_ptr);
    if (t[2]) throw i(t[1]);
    return i(t[0]);
  }
}
Symbol.dispose && (m.prototype[Symbol.dispose] = m.prototype.free);
class R {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, S.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    n.__wbg_riscvcore_free(t, 0);
  }
  get_state() {
    const t = n.riscvcore_get_state(this.__wbg_ptr);
    if (t[2]) throw i(t[1]);
    return i(t[0]);
  }
  constructor() {
    const t = n.riscvcore_new();
    return this.__wbg_ptr = t >>> 0, S.register(this, this.__wbg_ptr, this), this;
  }
  reset() {
    n.riscvcore_reset(this.__wbg_ptr);
  }
  set_running(t) {
    n.riscvcore_set_running(this.__wbg_ptr, t);
  }
  step() {
    n.riscvcore_step(this.__wbg_ptr);
  }
  tick_and_get_state() {
    const t = n.riscvcore_tick_and_get_state(this.__wbg_ptr);
    if (t[2]) throw i(t[1]);
    return i(t[0]);
  }
}
Symbol.dispose && (R.prototype[Symbol.dispose] = R.prototype.free);
function v() {
  return { __proto__: null, "./wasm_cluster_bg.js": { __proto__: null, __wbg_Error_960c155d3d49e4c2: function(t, r) {
    return Error(w(t, r));
  }, __wbg___wbindgen_throw_6b64449b9b9ed33c: function(t, r) {
    throw new Error(w(t, r));
  }, __wbg_error_a6fa202b58aa1cd3: function(t, r) {
    let s, _;
    try {
      s = t, _ = r, console.error(w(t, r));
    } finally {
      n.__wbindgen_free(s, _, 1);
    }
  }, __wbg_new_227d7c05414eb861: function() {
    return new Error();
  }, __wbg_new_682678e2f47e32bc: function() {
    return new Array();
  }, __wbg_new_aa8d0fa9762c29bd: function() {
    return new Object();
  }, __wbg_set_3bf1de9fab0cd644: function(t, r, s) {
    t[r >>> 0] = s;
  }, __wbg_set_6be42768c690e380: function(t, r, s) {
    t[r] = s;
  }, __wbg_stack_3b0d974bbf31e44f: function(t, r) {
    const s = r.stack, _ = F(s, n.__wbindgen_malloc, n.__wbindgen_realloc), b = p;
    k().setInt32(t + 4, b, true), k().setInt32(t + 0, _, true);
  }, __wbindgen_cast_0000000000000001: function(t) {
    return t;
  }, __wbindgen_cast_0000000000000002: function(t, r) {
    return w(t, r);
  }, __wbindgen_cast_0000000000000003: function(t) {
    return BigInt.asUintN(64, t);
  }, __wbindgen_init_externref_table: function() {
    const t = n.__wbindgen_externrefs, r = t.grow(4);
    t.set(0, void 0), t.set(r + 0, void 0), t.set(r + 1, null), t.set(r + 2, true), t.set(r + 3, false);
  } } };
}
const A = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e) => n.__wbg_distributedcluster_free(e >>> 0, 1)), x = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e) => n.__wbg_parallelcompute_free(e >>> 0, 1)), S = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e) => n.__wbg_riscvcore_free(e >>> 0, 1));
let a = null;
function k() {
  return (a === null || a.buffer.detached === true || a.buffer.detached === void 0 && a.buffer !== n.memory.buffer) && (a = new DataView(n.memory.buffer)), a;
}
function w(e, t) {
  return e = e >>> 0, z(e, t);
}
let f = null;
function g() {
  return (f === null || f.byteLength === 0) && (f = new Uint8Array(n.memory.buffer)), f;
}
function F(e, t, r) {
  if (r === void 0) {
    const c = l.encode(e), u = t(c.length, 1) >>> 0;
    return g().subarray(u, u + c.length).set(c), p = c.length, u;
  }
  let s = e.length, _ = t(s, 1) >>> 0;
  const b = g();
  let o = 0;
  for (; o < s; o++) {
    const c = e.charCodeAt(o);
    if (c > 127) break;
    b[_ + o] = c;
  }
  if (o !== s) {
    o !== 0 && (e = e.slice(o)), _ = r(_, s, s = o + e.length * 3, 1) >>> 0;
    const c = g().subarray(_ + o, _ + s), u = l.encodeInto(e, c);
    o += u.written, _ = r(_, s, o, 1) >>> 0;
  }
  return p = o, _;
}
function i(e) {
  const t = n.__wbindgen_externrefs.get(e);
  return n.__externref_table_dealloc(e), t;
}
let d = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
d.decode();
const E = 2146435072;
let y = 0;
function z(e, t) {
  return y += t, y >= E && (d = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), d.decode(), y = t), d.decode(g().subarray(e, e + t));
}
const l = new TextEncoder();
"encodeInto" in l || (l.encodeInto = function(e, t) {
  const r = l.encode(e);
  return t.set(r), { read: e.length, written: r.length };
});
let p = 0, n;
function W(e, t) {
  return n = e.exports, a = null, f = null, n.__wbindgen_start(), n;
}
async function D(e, t) {
  if (typeof Response == "function" && e instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(e, t);
    } catch (_) {
      if (e.ok && r(e.type) && e.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", _);
      else throw _;
    }
    const s = await e.arrayBuffer();
    return await WebAssembly.instantiate(s, t);
  } else {
    const s = await WebAssembly.instantiate(e, t);
    return s instanceof WebAssembly.Instance ? { instance: s, module: e } : s;
  }
  function r(s) {
    switch (s) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
function M(e) {
  if (n !== void 0) return n;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module: e } = e : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const t = v();
  e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e));
  const r = new WebAssembly.Instance(e, t);
  return W(r);
}
async function O(e) {
  if (n !== void 0) return n;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("/myportfolio/assets/wasm_cluster_bg-DG9usczU.wasm", import.meta.url));
  const t = v();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: r, module: s } = await D(await e, t);
  return W(r);
}
export {
  h as DistributedCluster,
  m as ParallelCompute,
  R as RiscVCore,
  O as default,
  M as initSync
};
