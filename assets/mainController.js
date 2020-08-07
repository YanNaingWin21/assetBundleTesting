// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

    },

    loadAssetBundleLocal(){
        cc.assetManager.loadBundle('colorAssemble', function (err, bundle) {
            if (err) {
                return console.error(err);
            }

            bundle.loadScene('colorAssemble', function (err, scene) {
                cc.director.runScene(scene);
            });
            console.log('load bundle successfully.');
        });
    },
    loadAssetBundleURL(){
        cc.assetManager.loadBundle('https://yannaingwin21.github.io/assetBundleTesting/remote/colorAssemble', function (err, bundle) {
            if (err) {
                return console.error(err);
            }

            bundle.loadScene('colorAssemble', function (err, scene) {
                cc.director.runScene(scene);
            });
            console.log('load bundle successfully.');
        });
    },

    start() {

    },

    // update (dt) {},
});
