'use strict'

const Hero = function (name, alias, power) {
  this.name = name
  this.alias = alias
  this._power = power
}

Hero.prototype.usePower = function () {
  return this._power
}

Hero.prototype.unmask = function () {
  return this.alias + ' = ' + this.name
}

const Batman = new Hero('Batman', 'Bruce Wayne', 'Super')
const Spiderman = new Hero('Peter Parker', 'Spider Man', 'Shooting Webs!')

console.log(Batman)
console.log(Batman.usePower())
console.log(Batman.unmask())

module.exports = {Hero, Batman, Spiderman}
