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

module.exports = Park;
