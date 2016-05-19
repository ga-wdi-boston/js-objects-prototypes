'use strict';

const User = function (name, email) {
  this.name = name;
  this.email = email;
  this.runs = [];
};

const Run = function (date, distance, timeTaken) {
  this.date = date;
  this.distance = distance;
  this.timeTaken = timeTaken;
};

User.prototype.totalDistance = function () {
  // define an auxillary variable
  let runs = this.runs;

  // define an accumulator
  let result = 0;

  // work on accumulator
  for (let i = 0; i < runs.length; i++) {
    result += runs[i].distance;
  }

  // return accumulator
  return result;
};

User.prototype.longestRun = function () {
  // define an auxillary variable
  let runs = this.runs;

  let result = runs[0].distance;

  for (let i = 1; i < runs.length; i++) {
    if (runs[i].distance > result) {
      result = runs[i].distance;
    }
  }

  return result;
};

User.prototype.averageSpeed = function () {
  // define an auxillary variable
  let runs = this.runs;

  let totalTime = 0;

  for (let i = 0; i < runs.length; i++) {
    totalTime += runs[i].timeTaken;
  }

  return this.totalDistance() / totalTime;
};

// Example
let myRunnerAccount = new User('Misha','mishaherscu@gmail.com');
console.log(myRunnerAccount);

// Add Runs
myRunnerAccount.runs[0] = new Run('5/17/16',4,2);
myRunnerAccount.runs[1] = new Run('5/19/16',2,1);

// Print out the evidence
console.log(myRunnerAccount);
console.log(myRunnerAccount.longestRun());
console.log(myRunnerAccount.totalDistance());
console.log(myRunnerAccount.averageSpeed());

module.exports = {
  Run,
  User,
};

// In node, use like so:
//
//    const runTracker = require('./lib/runs');
//    let mcFace = new runTracker.User('Person McFace', 'wdi@personmcface.com');
