(function(){

    angular.module('searchbar')
      .factory('searchYoutube',['$http', function($http, $q){

            var searchYt = {};
            var baseUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=';
            var videoQuery = '';
            var apiKey = '&key=AIzaSyAYzBUsoyit6PKN0XCpQLg0RcYSs9seE_A';
            var apiCallUrl = '';

            // var apiUrl = function(){
            //
            // }
            searchYt.findVideo = function(query){

                videoQuery = query.split(' ').join('+');
                apiCallurl = baseUrl + videoQuery + apiKey;
                //console.log(query);

                return  $http({
                    method: 'GET',
                    url: apiCallurl
                  }).then(function(response){
                    console.log(response);
                      return response;
                  })


            };

            return searchYt;


      }]);

})();
