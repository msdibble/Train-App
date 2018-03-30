$(document).ready(function() {

// Initializing Firebase

var config = {
    apiKey: "AIzaSyC1xwtPOAznbTYlAZN5blUQagAqznzNQF4",
    authDomain: "train-app-57bf6.firebaseapp.com",
    databaseURL: "https://train-app-57bf6.firebaseio.com",
    projectId: "train-app-57bf6",
    storageBucket: "train-app-57bf6.appspot.com",
    messagingSenderId: "128293056989"
  };
  firebase.initializeApp(config);

// Initializing variables:

// Variable for initializing the database

  var database = firebase.database();
  console.log(database);

// Variable for holding the current time

  var currentTime = moment();
  console.log(currentTime);

// Variable for storing the amount of time until the next train

  var timeToNextTrain;

// Variable for the next train

  var nextTrain;

// Variables for storing user inputs

var trainName = $("#train-Name").val().trim();
var trainDestination = $("#train-Destination").val().trim();
var trainTime = $("#train-Time").val().trim();
var trainFrequency = $("#train-Frequency").val().trim();


// Object called "train"

   var train = {
    name: trainName,
    destination: trainDestination,
    time: trainTime,
    frequency: trainFrequency
};



// When "Add a Train" button is clicked, append the information into the above table and store it into the Firebase database
$("#add-train-btn").on("click", function () {

    console.log(train.name);
    console.log(train.destination);
    console.log(train.time);
    console.log(train.frequency);

});
 
});