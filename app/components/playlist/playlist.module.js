//wrap in IIFE anonymous function to keep vars local and not global in scope
(function(){
angular.module('youtubeportal')
  .controller("playlist",playlist);

playlist.$inject=["$scope"];

function playlist($scope) {

};
)};
