(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        init: function () {

        },

        ready: function (element, options) {
            WinJS.Utilities.id("tublur-page").listen("click", function () {
                WinJS.Navigation.navigate("/pages/tumblurPages/tumblurPage/tumblurPage.html");
            });

            WinJS.Utilities.id("chuck-noris-page").listen("click", function () {
                WinJS.Navigation.navigate("/pages/chuckNorisPage/chuckNorisPage.html");
            });

            WinJS.Utilities.id("custom-jokes").listen("click", function () {
                WinJS.Navigation.navigate("/pages/customJokesPage/customJokesPage.html");
            });

            WinJS.Utilities.id("joys-of-code-tumblr").listen("click", function () {
                WinJS.Navigation.navigate("/pages/tumblurPages/joysOfCodeTumblrPage/joysOfCodeTumblrPage.html");
            });

            WinJS.Utilities.id("life-in-the-academy-tumblr").listen("click", function () {
                WinJS.Navigation.navigate("/pages/tumblurPages/liveAtTheAcademyTumblrPage/liveAtTheAcademyTumblrPage.html");
            });

            WinJS.Utilities.id("dev-ops-tumblr").listen("click", function () {
                WinJS.Navigation.navigate("/pages/tumblurPages/devOpsTumblurPage/devOpsTumblurPage.html");
            });
        }
    });
})();
