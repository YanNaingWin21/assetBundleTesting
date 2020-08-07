window.__require = function e(t, o, r) {
function n(i, s) {
if (!o[i]) {
if (!t[i]) {
var l = i.split("/");
l = l[l.length - 1];
if (!t[l]) {
var u = "function" == typeof __require && __require;
if (!s && u) return u(l, !0);
if (c) return c(l, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = l;
}
var f = o[i] = {
exports: {}
};
t[i][0].call(f.exports, function(e) {
return n(t[i][1][e] || e);
}, f, f.exports, e, t, o, r);
}
return o[i].exports;
}
for (var c = "function" == typeof __require && __require, i = 0; i < r.length; i++) n(r[i]);
return n;
}({
ColorAssembler2D: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6d287SCRjpC/YTL0mcYQMt9", "ColorAssembler2D");
var r = this && this.__extends || function() {
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
})(t, o);
};
return function(t, o) {
e(t, o);
function r() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (r.prototype = o.prototype, new r());
};
}(), n = this && this.__decorate || function(e, t, o, r) {
var n, c = arguments.length, i = c < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, r); else for (var s = e.length - 1; s >= 0; s--) (n = e[s]) && (i = (c < 3 ? n(i) : c > 3 ? n(t, o, i) : n(t, o)) || i);
return c > 3 && i && Object.defineProperty(t, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, i = c.ccclass, s = c.property, l = c.executeInEditMode, u = c.requireComponent, f = c.menu, p = function(e) {
r(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._colors = [];
return t;
}
Object.defineProperty(t.prototype, "colors", {
get: function() {
return this._colors;
},
set: function(e) {
this._colors = e;
this._updateColors();
},
enumerable: !1,
configurable: !0
});
t.prototype.onEnable = function() {
cc.director.once(cc.Director.EVENT_AFTER_DRAW, this._updateColors, this);
};
t.prototype.onDisable = function() {
cc.director.off(cc.Director.EVENT_AFTER_DRAW, this._updateColors, this);
this.node._renderFlag |= cc.RenderFlow.FLAG_COLOR;
};
t.prototype._updateColors = function() {
var e = this.getComponent(cc.RenderComponent);
if (e) {
var t = e._assembler;
if (t instanceof cc.Assembler2D) {
var o = t._renderData.uintVDatas[0];
if (o) for (var r = this.node.color, n = t.floatsPerVert, c = 0, i = t.colorOffset, s = o.length; i < s; i += n) o[i] = (this.colors[c++] || r)._val;
}
}
};
n([ s ], t.prototype, "_colors", void 0);
n([ s({
type: [ cc.Color ]
}) ], t.prototype, "colors", null);
return t = n([ i, l, u(cc.RenderComponent), f("i18n:MAIN_MENU.component.renderers/ColorAssembler2D-lamyoung.com") ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ]
}, {}, [ "ColorAssembler2D" ]);