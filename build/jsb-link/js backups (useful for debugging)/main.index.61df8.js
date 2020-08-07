window.__require = function r(e, n, o) {
function t(i, u) {
if (!n[i]) {
if (!e[i]) {
var l = i.split("/");
l = l[l.length - 1];
if (!e[l]) {
var s = "function" == typeof __require && __require;
if (!u && s) return s(l, !0);
if (c) return c(l, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = l;
}
var f = n[i] = {
exports: {}
};
e[i][0].call(f.exports, function(r) {
return t(e[i][1][r] || r);
}, f, f.exports, r, e, n, o);
}
return n[i].exports;
}
for (var c = "function" == typeof __require && __require, i = 0; i < o.length; i++) t(o[i]);
return t;
}({
mainController: [ function(r, e, n) {
"use strict";
cc._RF.push(e, "ccae4x1DFRASZ+L0cVRFEYl", "mainController");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
cc.assetManager.loadBundle("colorAssemble", function(r, e) {
if (r) return console.error(r);
e.loadScene("colorAssemble", function(r, e) {
cc.director.runScene(e);
});
console.log("load bundle successfully.");
});
},
start: function() {}
});
cc._RF.pop();
}, {} ]
}, {}, [ "mainController" ]);