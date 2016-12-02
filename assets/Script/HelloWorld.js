const i18n = require('LanguageData');

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function () {
        i18n.init('en');
        this.label.string = i18n.t('label.hello');
    },

    // called every frame
    update: function (dt) {

    },
});
