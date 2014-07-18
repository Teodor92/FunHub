/// <reference path="//Microsoft.WinJS.1.0/js/ui.js" />
/// <reference path="../httpRequester.js" />
/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />

var ChuckNorisPersister = WinJS.Class.define(function (root) {
    this.rootUrl = root;
}, {
    getAllJokes: function () {
        var url = this.rootUrl + "jokes/";
        return httpRequester.getJson(url);
    },

    getRandomJoke: function () {
        return httpRequester.getJson(this.rootUrl + "jokes/random/");
    },

    getNumberOfRandomJokes: function (number) {
        return httpRequester.getJson(this.rootUrl + "jokes/random/" + number); 
    },
    
    getNextJoke: function () {

    }
}, {

});

WinJS.Namespace.define("Persisters", {
    ChuckNorisPersister: ChuckNorisPersister
})