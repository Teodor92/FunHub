/// <reference path="//Microsoft.WinJS.1.0/js/ui.js" />
/// <reference path="../httpRequester.js" />
/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />

var CustomJokePersister = WinJS.Class.define(function (root) {
    this.rootUrl = root;
}, {
    postJoke: function (joke) {
        var url = this.rootUrl + "jokes/";
        return httpRequester.postJson(url, joke);
    },

    getAll: function () {
        var url = this.rootUrl + "jokes/";
        return httpRequester.getJson(url);
    },

    getSpecific: function (offset, count) {
        var url = this.rootUrl + "jokes/" + offset + "/" + count;
        return httpRequester.getJson(url);
    },

    search: function (search) {
        var url = this.rootUrl + "jokes?search=" + search;
        return httpRequester.getJson(url);
    }
}, {

});

WinJS.Namespace.define("Persisters", {
    CustomJokePersister: CustomJokePersister
})