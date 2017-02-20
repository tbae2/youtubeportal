(function(){

  angular.module('youtubeportal')

    .component('searchInputbar',{
        bindings: {
            count: '='
        },
        templateUrl: '/app/components/searchbar/searchbar.html',
        controller: 'searchBar'
    })

})();
