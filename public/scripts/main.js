var myApp = angular.module('myApp', []);

function VendorDataCtrl($scope, $http){
  console.log("Retrieving vendor from rest api"); 
  $http.get('/vendor')
       .then(function(res){
          $scope.data = res.data;                
        });
}

function ProductDataCtrl($scope, $http){
  console.log("Retrieving Product data from rest api"); 
  
  $http.get('/Product/3000/60')
       .then(function(res){
          $scope.data = res.data;                
        });
}