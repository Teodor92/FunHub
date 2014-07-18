/// <reference path="../../js/app/viewModels.js" />

(function () {
    var goToTumblurJokeDetailsPage = function(invokeEvent) {
        WinJS.Navigation.navigate("/pages/tumblurPages/detailedTumblurPage/detailedTumblurPage.html", {
            indexInTublurJokeList: invokeEvent.detail.itemIndex
        });
    };

    WinJS.Utilities.markSupportedForProcessing(goToTumblurJokeDetailsPage);

    WinJS.Namespace.define("TumblurPageBehind", {
        callLoadTumblurJokes: function (offset) {
            ViewModels.loadTublurJokes(offset, "whenyouliveinsofia.tumblr.com");
        },

        goToTumblurJokeDetailsPage: goToTumblurJokeDetailsPage
    });

})();