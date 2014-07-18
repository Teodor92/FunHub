/// <reference path="../../js/app/viewModels.js" />
(function () {
    var submitJoke = function () {
        var postedBy = document.getElementById().value;
        var content = document.getElementById().value;

        ViewModels.addCustomJoke(postedBy, content);
    }

    WinJS.Utilities.markSupportedForProcessing(submitJoke);

    WinJS.Namespace.define("CustomJokeCodeBehind", {
        submitJoke: submitJoke,
        callLoadCustomJokes: function () {
            ViewModels.loadCustomJokes();
        }
    });
})();