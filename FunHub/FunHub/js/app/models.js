/// <reference path="//Microsoft.WinJS.1.0/js/ui.js" />
/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />

(function () {
    var TubmblrJokeModel = WinJS.Class.define(function (title, imgUrl, postUrl) {
        this.title = title;
        this.imageUrl = imgUrl;
        this.postUrl = postUrl;
    });

    var ChuckNorisJokeModel = WinJS.Class.define(function (joke) {
        this.joke = joke;
    });

    var CustomJokeModel = WinJS.Class.define(function (postedBy, content, postDate) {
        this.postedBy = postedBy;
        this.content = content;
        this.postDate = postDate;
    });

    WinJS.Namespace.define("Models", {
        TumblurJokeModel: TubmblrJokeModel,
        ChuckNorisJokeModel: ChuckNorisJokeModel,
        CustomJokeModel: CustomJokeModel
    });
})();