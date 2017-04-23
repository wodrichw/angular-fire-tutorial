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
    var ref = firebase.database().ref().child("text");
    ref.set("");
    $scope.firstName = "Delerious";
    $scope.lastName= "Delerious";

    var ref2 = firebase.database().ref().child("firstName");
    ref2.set($scope.firstName);

    var ref3 = firebase.database().ref().child("lastName");
    ref3.set($scope.lastName);

    ref2.on('value', snap => $scope.headTitle.innerText = snap.val());
    ref2.on('value', snap => hTitle.innerText = snap.val());
    ref3.on('value', snap => hTitle.innerText = snap.val());
  }

]);
