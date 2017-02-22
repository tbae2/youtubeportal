(function() {
    'use strict';

    angular.module('searchbar').controller('searchBar', searchBar);

    function searchBar(searchYoutube) {
        var syt = this;
        syt.hello = "hello world from controller for component";
        syt.inputcontent;
        syt.count = 0;
        //this.testService = '';
        syt.foundVideo;
        this.charcount = function() {

            //this.count = this.inputcontent.length;
            //console.log(this.count);
          return searchYoutube.findVideo(syt.inputcontent)
                                      .then(function(response) {
                                      console.log(response.data.items);
                                        // syt.foundVideo = response.data.items;
                                        return response.data.items;
                                     });
        }


    }
})();
