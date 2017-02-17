(function(){

    angular.module('searchbar')
      .factory('searchYoutube',['$http', function($http){

            var searchYt = {};

            searchYt.findVideo = function(input){
                  console.log(input);
            };

            return searchYt;


      }]);

})();
