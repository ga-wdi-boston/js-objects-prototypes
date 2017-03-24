'use strict'

const User = function (name, email, runs) {
  this.name = name
  this.email = email
  this.runs = runs
}

const Run = function (date, distance, timeTaken) {
  this.date = date
  this.distance = distance
  this.timeTaken = timeTaken
}

User.prototype.run = function () {
  console.log('Huff puff')
}

const jonsruns = new Run('2017', 40, 12)
const jonsSecondRun = new Run('2018', 20, 30)

const jonsTotalRuns = [jonsruns, jonsSecondRun]
const Jon = new User('Jon Cohen', 'jon.cohen08@gmail.com', jonsTotalRuns)

module.exports = {
  Run,
  User,
  Jon
}

// In node, use like so:
//
//    const runTracker = require('./lib/runs');
//    let mcFace = new runTracker.User('Person McFace', 'wdi@personmcface.com');
