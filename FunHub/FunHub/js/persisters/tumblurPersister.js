/// <reference path="//Microsoft.WinJS.1.0/js/ui.js" />
/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />
/// <reference path="../httpRequester.js" />

var TumblurPersister = WinJS.Class.define(function (blogName, apiKey) {
    this.blogName = blogName;
    this.apiKey = apiKey;
    this.baseUrl = "http://api.tumblr.com/v2/blog/";
    if (Windows.Storage.ApplicationData.current.localSettings.values["tumblurOffset"]) {
        this.offset = Windows.Storage.ApplicationData.current.localSettings.values["tumblurOffset"];
    } else {
        this.offset = 0;
    }
}, {
    getAllPosts: function (offset) {
        this.offset += offset;
        if (this.offset < 0) {
            this.offset = 0;
        }

        Windows.Storage.ApplicationData.current.localSettings.values["tumblurOffset"] = this.offset;

        var url = this.baseUrl + this.blogName + "/posts/text?api_key=" + this.apiKey + "&offset=" + this.offset + "&limit=4";
        var promise = httpRequester.getJson(url);

        return promise;
    },

    getNumberOfPosts: function (number) {
        if (number > 20) {
            
        }
        var url = this.baseUrl + this.blogName + "/posts/text?api_key=" + this.apiKey + "&limit=" + number;
        return httpRequester.getJson(url);
    }
}, {

});

WinJS.Namespace.define("Persisters", {
    TumblurPersister: TumblurPersister
})