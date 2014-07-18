/// <reference path="../../js/httpRequester.js" />
// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/tumblurPages/detailedTumblurPage/detailedTumblurPage.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            WinJS.Binding.processAll(element,
                ViewModels.tumblurJokes.getAt(options.indexInTublurJokeList));

            WinJS.Utilities.id("save-image").listen("click", function () {
                var url = document.getElementById("detailed-image").getAttribute("src");
                //var msg = new Windows.UI.Popups.MessageDialog("Not implemented yet.");
                //msg.showAsync();
                getImage(url);
                
                function getImage(targetUrl) {
                    WinJS.xhr({ url: targetUrl, responseType: "blob" }).done(
                    function (downloadResult) {
                        writeBlobToFile(downloadResult.response);
                    });
                }
                
                function writeBlobToFile(blob) {
                    //TODO: meaningful and unique filename
                    //TODO: App folder to store images?
                    var filename = "img.gif";
                    Windows.Storage.KnownFolders.picturesLibrary.createFileAsync(filename, Windows.Storage.CreationCollisionOption.generateUniqueName)
                        .then(doWrite);

                    function doWrite(file) {
                        file.openAsync(Windows.Storage.FileAccessMode.readWrite).then(function (output) {
                            var input = blob.msDetachStream();
                            Windows.Storage.Streams.RandomAccessStream.copyAsync(input, output).then(function () {
                                output.flushAsync().done(function () {
                                    input.close();
                                    output.close();
                                }, function (error) {
                                    var msg = new Windows.UI.Popups.MessageDialog("Stream copy failed.");
                                    msg.showAsync();
                                });
                            });
                        }, function (error) {
                            var msg = new Windows.UI.Popups.MessageDialog("File write failed.");
                            msg.showAsync();
                        });
                    }
                }
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
