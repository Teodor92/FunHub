/// <reference path="../../js/app/viewModels.js" />

(function () {
    WinJS.Namespace.define("ChuckNorisPageCodeBehind", {
        callLoadChuckNorisJokes: function () {
            ViewModels.loadChuckNorisJokes();
        }
    });
})();