/// <reference path="../../js/app/viewModels.js" />


(function () {
    var goToAddJokePage = function (invokeEvent) {
        WinJS.Navigation.navigate("/pages/addJokePage/addJokePage.html", {
            indexInComputersList: invokeEvent.detail.itemIndex
        });
    }

    var goToHomePage = function () {
        WinJS.Navigation.navigate("/pages/home/home.html");
    }

    WinJS.Utilities.markSupportedForProcessing(goToAddJokePage);
    WinJS.Utilities.markSupportedForProcessing(goToHomePage);

    WinJS.Namespace.define("DefaultCodeBehind", {
        goToAddJokePage: goToAddJokePage,
        goToHomePage: goToHomePage
    });
})();