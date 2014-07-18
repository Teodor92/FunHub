/// <reference path="tumblurPageCodeBehind.js" />
/// <reference path="ms-appx://Microsoft.WinJS.1.0/js/ui.js" />
// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/tumblurPages/tumblurPage/tumblurPage.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        init: function () {
            TumblurPageBehind.callLoadTumblurJokes(0);
        },

        ready: function (element, options) {
            WinJS.Utilities.id("load-more").listen("click", function () {
                TumblurPageBehind.callLoadTumblurJokes(4);
            });
            WinJS.Utilities.id("load-back").listen("click", function () {
                TumblurPageBehind.callLoadTumblurJokes(-4);
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
