window.__require = function e(n, o, r) {
function c(l, s) {
if (!o[l]) {
if (!n[l]) {
var u = l.split("/");
u = u[u.length - 1];
if (!n[u]) {
var i = "function" == typeof __require && __require;
if (!s && i) return i(u, !0);
if (t) return t(u, !0);
throw new Error("Cannot find module '" + l + "'");
}
l = u;
}
var a = o[l] = {
exports: {}
};
n[l][0].call(a.exports, function(e) {
return c(n[l][1][e] || e);
}, a, a.exports, e, n, o, r);
}
return o[l].exports;
}
for (var t = "function" == typeof __require && __require, l = 0; l < r.length; l++) c(r[l]);
return c;
}({
mainController: [ function(e, n, o) {
"use strict";
cc._RF.push(n, "ccae4x1DFRASZ+L0cVRFEYl", "mainController");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
loadAssetBundleLocal: function() {
cc.assetManager.loadBundle("colorAssemble", function(e, n) {
if (e) return console.error(e);
n.loadScene("colorAssemble", function(e, n) {
cc.director.runScene(n);
});
console.log("load bundle successfully.");
});
},
loadAssetBundleURL: function() {
cc.assetManager.loadBundle("https://yannaingwin21.github.io/assetBundleTesting/remote/colorAssemble", function(e, n) {
if (e) return console.error(e);
n.loadScene("colorAssemble", function(e, n) {
cc.director.runScene(n);
});
console.log("load bundle successfully.");
});
},
start: function() {}
});
cc._RF.pop();
}, {} ]
}, {}, [ "mainController" ]);