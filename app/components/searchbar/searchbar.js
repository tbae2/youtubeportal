(function() {
    'use strict';

    angular.module('searchbar').controller('searchBar', searchBar);

    function searchBar(searchYoutube) {
        this.hello = "hello world from controller for component";
        this.inputcontent;
        this.count = 0;
        this.testService = '';
        this.foundVideo;
        this.charcount = function() {

            this.count = this.inputcontent.length;
            //console.log(this.count);
            this.foundVideo = searchYoutube.findVideo(this.inputcontent).then(function(response) {
                return response.data.items;

            });
        }
        console.log(this.foundVideo);

    }
})();
