const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = []
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.collectionOfDinosaurs.push(dinosaur)
};

Park.prototype.removeDinosaur = function (species) {
  for (let i = 0; i < this.collectionOfDinosaurs.length; i++) {
    if (this.collectionOfDinosaurs[i].species === species){
      seeDeleted = this.collectionOfDinosaurs.splice(i, 1);
      // console.log(seeDeleted);
    }
  }
};

Park.prototype.biggestAttraction = function () {
  let highest = 0
  for (let i = 0; i < this.collectionOfDinosaurs.length; i++) {
    if (this.collectionOfDinosaurs[i].guestsAttractedPerDay > highest) {
      highest = this.collectionOfDinosaurs[i].guestsAttractedPerDay;
    }
  }
  return highest;
};

Park.prototype.dinosaursBySpecies = function (species) {
  let dinoSpecies = []
  for (let i = 0; i < this.collectionOfDinosaurs.length; i++) {
    if (this.collectionOfDinosaurs[i].species === species) {
      dinoSpecies.push(this.collectionOfDinosaurs[i])
    }
  }
  return dinoSpecies
};

Park.prototype.vistorsPerDay = function () {
  let totalVistors = 0
  for (dino of this.collectionOfDinosaurs){
    totalVistors += dino.guestsAttractedPerDay;
  }
  return totalVistors
};

Park.prototype.vistorsPerYear = function () {
  let daily = this.vistorsPerDay();
  return daily * 365;
};

Park.prototype.yearlyRevenue = function () {
  let yearlyVisitors = this.vistorsPerYear();
  return yearlyVisitors * this.ticketPrice;
};

module.exports = Park;
