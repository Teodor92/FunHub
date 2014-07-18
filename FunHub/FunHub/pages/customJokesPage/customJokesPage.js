// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/customJokesPage/customJokesPage.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        init: function () {
            CustomJokeCodeBehind.callLoadCustomJokes();
        },

        ready: function (element, options) {
            WinJS.Utilities.id("save-all").listen("click", function() {
                var saveDialog = Windows.Storage.Pickers.FileSavePicker();
                saveDialog.defaultFileExtension = ".txt";
                saveDialog.fileTypeChoices.insert("Text File", [".txt"]);
                saveDialog.suggestedFileName = "jokes.txt";
                saveDialog.suggestedStartLocation = "../../";
                saveDialog.pickSaveFileAsync().then(function(file) {
                    if (ViewModels.customJokesList != null) {
                        var jsonString = JSON.stringify(ViewModels.customJokesList.slice(0));
                        Windows.Storage.FileIO.writeTextAsync(file, jsonString);
                    }
                }, function() {
                    var msg = new Windows.UI.Popups.MessageDialog("Custome joke save failed.");
                    msg.showAsync();
                });
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
