/// <reference path="../../js/app/viewModels.js" />
(function () {
    var submitJoke = function () {
        var postedBy = document.getElementById("postedBy").value;
        postedBy = postedBy.replace("*", "//");
        var content = document.getElementById("content").value;
        content = content.replace("*", "//");

        if (postedBy.length < 3 ||
            postedBy.length > 40 ||
            content.length < 10 ||
            content.length > 3000) {
            var msg = new Windows.UI.Popups.MessageDialog("Content or Username are not valid. Please try again!");
            msg.showAsync();
        } else {
            ViewModels.addCustomJoke(postedBy, content);
        }
    }

    WinJS.Utilities.markSupportedForProcessing(submitJoke);

    WinJS.Namespace.define("AddCustomJokeCodeBehind", {
        submitJoke: submitJoke,
        callLoadCustomJokes: function () {
            ViewModels.loadCustomJokes();
        }
    });
})();