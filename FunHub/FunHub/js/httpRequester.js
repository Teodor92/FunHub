/// <reference path="//Microsoft.WinJS.1.0/js/ui.js" />
/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />

var httpRequester = WinJS.Class.define(function () {

}, { }, {
    _makeRequest: function (url, type, data) {
        return WinJS.xhr({
            url: url,
            type: type,
            data: JSON.stringify(data),
            headers: { "Content-type": "application/json" },
            success: function (result) {
                complete(result);
            },
            error: function (error) {
                reject(error);
            }
        });
    },

    postJson: function (url, data) {
        return this._makeRequest(url, "POST", data);
    },

    getJson: function (url) {
        return this._makeRequest(url, "GET");
    },

    putJson: function (url, data) {
        return this._makeRequest(url, "PUT", data);
    },

    deleteJson: function (url) {
        return this._makeRequest(url, "DELETE");
    }
});