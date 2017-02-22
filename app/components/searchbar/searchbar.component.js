(function(){

  angular.module('youtubeportal')

    .component('searchInputbar',{
        bindings: {
            search: '='
        },
        templateUrl: '/app/components/searchbar/searchbar.html',
        controller: 'searchBar'
    })

})();
