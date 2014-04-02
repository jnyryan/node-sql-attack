var myApp = angular.module('myApp', []);

// Create some test data in a service
myApp.factory('MovieData', function(){
  console.log("Getting data from angular service.");
  var MovieData = {};
  MovieData.items = [
    { name: "Monsters Inc 2", year: "2013" },
    { name: "Star Wars", year: "1977" },
    { name: "Toy Story", year: "1977" },   
  ]
  return MovieData;
})

function TestStaticDataCtrl($scope, MovieData){
  $scope.movieData = MovieData;
}

function TestRestfulMovieDataCtrl($scope, $http){
  console.log("Retrieving data from rest api"); 
  $http.get('/data')
       .then(function(res){
          $scope.movieData = res.data;                
        });
}
