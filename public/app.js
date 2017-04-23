"use strict";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC8GCHbA9skMtkNxFlODEvw-HExWt72D-k",
  authDomain: "tutorial-db535.firebaseapp.com",
  databaseURL: "https://tutorial-db535.firebaseio.com",
  projectId: "tutorial-db535",
  storageBucket: "tutorial-db535.appspot.com",
  messagingSenderId: "491421547647"
};
firebase.initializeApp(config);

var app = angular.module('myApp', ['firebase']);

app.controller("myCtrl", ["$scope", "$firebaseArray",
  function($scope, $firebaseArray){

    var headVar = document.getElementById('head-title');

    var dbRef = firebase.database().ref().child("text");
  /*
    dbRef.set("TEEEESTTIING");

    dbRef.on('value', snap => headVar.innerText = snap.val());
  */
    //var sync = $firebaseArray(ref);
    $scope.firstName= "John";
    $scope.lastName= "Doe";
  }

]);
