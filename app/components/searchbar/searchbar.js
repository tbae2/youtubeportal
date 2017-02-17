(function(){
  'use strict';

  angular.module('searchbar')
    .controller('searchBar',searchBar);

  searchBar.$inject = ["$scope"];

function searchBar($scope, searchYoutube,inputcontent){
    this.hello = "hello world from controller for component";
    this.inputcontent = inputcontent;

      console.log(this.inputcontent);

}



})();
