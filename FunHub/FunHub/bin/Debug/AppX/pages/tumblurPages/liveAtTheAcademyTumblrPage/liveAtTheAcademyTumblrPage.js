// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/tumblurPages/liveAtTheAcademyTumblrPage/liveAtTheAcademyTumblrPage.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        init: function () {
            LiveAtTheAcademyTumblrPageCodeBehind.callLoadTumblurJokes(0);
        },

        ready: function (element, options) {
            WinJS.Utilities.id("load-more").listen("click", function () {
                LiveAtTheAcademyTumblrPageCodeBehind.callLoadTumblurJokes(4);
            });
            WinJS.Utilities.id("load-back").listen("click", function () {
                LiveAtTheAcademyTumblrPageCodeBehind.callLoadTumblurJokes(-4);
            });
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        }
    });
})();
