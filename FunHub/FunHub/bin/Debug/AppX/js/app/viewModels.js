/// <reference path="//Microsoft.WinJS.1.0/js/ui.js" />
/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />
/// <reference path="../persisters/chuckNorisPersister.js" />
/// <reference path="../persisters/customJokePersister.js" />
/// <reference path="models.js" />
/// <reference path="../persisters/tumblurPersister.js" />

(function () {
    var tumblurJokesList = new WinJS.Binding.List([]);
    var chuckNorisJokesList = new WinJS.Binding.List([]);
    var customJokesList = new WinJS.Binding.List([]);

    var customJokePresister = new Persisters.CustomJokePersister("http://funhub.apphb.com/api/");

    var loadTublurJokes = function (offset, site) {
        var persister = new Persisters.TumblurPersister(site, "VoMr4LFzvkoU2TdRcmGcebsuUJSYsuiAuns9mtT8HynoJ2sCMV");
        persister.getAllPosts(offset).then(function (result) {
            var jokesDTOs = JSON.parse(result.responseText).response.posts;

            var currentCount = tumblurJokesList.dataSource.list.length;
            tumblurJokesList.dataSource.list.splice(0, currentCount);

            for (var i = 0; i < jokesDTOs.length; i++) {

                var rawText = jokesDTOs[i].body;
                var startIndex = rawText.indexOf("src=\"") + 5;
                var endIndex = rawText.indexOf("\"", startIndex);
                var src = rawText.substring(startIndex, endIndex);

                var newJoke = new Models.TumblurJokeModel(jokesDTOs[i].title, src, jokesDTOs[i].post_url);

                tumblurJokesList.push(newJoke);
            }
        }, function (error) {
            var msg = new Windows.UI.Popups.MessageDialog("Tumblur page load failed.");
            msg.showAsync();
        });
    };

    var loadChuckNorisJokes = function () {
        var persister = new Persisters.ChuckNorisPersister("http://api.icndb.com/");

        persister.getRandomJoke().then(function (result) {
            var allJokes = JSON.parse(result.responseText).value;

            var currentCount = chuckNorisJokesList.dataSource.list.length;
            chuckNorisJokesList.dataSource.list.splice(0, currentCount);

            //for (var i = 0; i < allJokes.length; i++) {
            var newJoke = new Models.ChuckNorisJokeModel(allJokes.joke);

            chuckNorisJokesList.push(newJoke);
            //}
        }, function (error) {
            var msg = new Windows.UI.Popups.MessageDialog("Chuck Noris jokes page load failed.");
            msg.showAsync();
        });
    };

    var loadCustomJokes = function() {

        customJokePresister.getAll().then(function(result) {
            var allJokes = JSON.parse(result.responseText);

            var currentCount = customJokesList.dataSource.list.length;
            customJokesList.dataSource.list.splice(0, currentCount);

            for (var i = 0; i < allJokes.length; i++) {
                var newJoke = new Models.CustomJokeModel(allJokes[i].postedBy, allJokes[i].content, allJokes[i].postDate);

                customJokesList.push(newJoke);
            }
        }, function(error) {
            var msg = new Windows.UI.Popups.MessageDialog("Custome joke load failed");
            msg.showAsync();
        });
    };

    var addCustomJoke = function (postedBy, content) {
        var newJoke = new Models.CustomJokeModel(postedBy, content);

        customJokePresister.postJoke(newJoke).then(function () {
            customJokesList.push(newJoke);
            WinJS.Navigation.navigate("/pages/customJokesPage/customJokesPage.html");
        });
    }

    // TODO: Make a search object!
    var searchQuery = { queryText: "" };

    var filteredTublurJokes = tumblurJokesList.createFiltered(function (item) {
        var isSelected = false;

        if (item.title.indexOf(searchQuery.queryText) > -1) {
            isSelected = true;
        }

        if (item.title.indexOf(searchQuery.imgUrl) > -1) {
            isSelected = true;
        }

        return isSelected;
    });

    var changeSearchQuery = function (text) {
        searchQuery.queryText = text;
        tumblurJokesList.notifyReload();
    }


    WinJS.Namespace.define("ViewModels", {
        loadTublurJokes: loadTublurJokes,
        tumblurJokes: tumblurJokesList,
        loadChuckNorisJokes: loadChuckNorisJokes,
        chuckNorisJokes: chuckNorisJokesList,
        customJokesList: customJokesList,
        loadCustomJokes: loadCustomJokes,
        addCustomJoke: addCustomJoke,
        //Search
        searchTumblurJokes: filteredTublurJokes,
        searchQuery: searchQuery,
        submitSearchQuery: changeSearchQuery
    });
})();