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

// Variable for initializing the database

    var database = firebase.database();
    console.log(database);

// Variables for storing user inputs

    var trainName = "";
    var trainDestination = "";
    var trainTime = "";
    var trainFrequency = "";

// When "Add a Train" button is clicked, append the information into the above table and store it into the Firebase database
$("#add-train-btn").on("click", function (event) {

// Object called "train"

   var train = {
    trainName: $("#train-Name").val().trim(),
    trainDestination: $("#train-Destination").val().trim(),
    trainTime: $("#train-Time").val().trim(),
    trainFrequency: $("#train-Frequency").val().trim()
};

    console.log(train.trainName);
    console.log(train.trainDestination);
    console.log(train.trainTime);
    console.log(train.trainFrequency);

// Push the information into the Firebase database

    database.ref().push(train);
// Clear user input options

    // trainName = $("#train-Name").val("");
    // trainDestination = $("#train-Destination").val("");
    // trainTime = $("#train-Time").val("");
    // trainFrequency = $("train-Frequency").val("");

});

// Adding data into firebase and into the above table

database.ref().on("child_added", function(childSnapshot) {

    // Variable for calculating time(minutes) until the arrival of the next train
    
        var tName = childSnapshot.val().trainName;
        var tDestination = childSnapshot.val().trainDestination;
        var tTime = childSnapshot.val().trainTime;
        var tFrequency = childSnapshot.val().trainFrequency;
    
    // Variable for holding the first time added to the table
    
        var firstTime = moment(trainTime, "hh:mm").subtract(1, "days");
    
    // Variable for holding the current time
    
        var currentTime = moment().unix();
        console.log(currentTime);
    
    // Variable for calculating the difference between times
    
        var timeDifference = currentTime - trainTime;

    // Time remaining until the next train

        var trainTimeRemain = timeDifference % trainFrequency;

    // Time until the next train

        var timeToNextTrain = trainFrequency - trainTimeRemain;
            
    // Add the information to the above table

        var table = $(".table").append("<tr>");
    
        table.append("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>" + tFrequency + "</td><td>" + "</td><td>" + trainTimeRemain + "</td><td>" + timeToNextTrain + "</td><tr>");
    
    });

 
});