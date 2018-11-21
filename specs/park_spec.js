const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 100);
    dinosaur2 = new Dinosaur('Raptor', 'carnivore', 50);
    dinosaur3 = new Dinosaur('Indominus Rex', 'carnivore', 200);
    dinosaur4 = new Dinosaur('Indominus Rex', 'carnivore', 200);
    park = new Park("Jurassic Park", 100);
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park")
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100)
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.collectionOfDinosaurs.length;
    assert.strictEqual(actual, 0)
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur1);
    console.log(park.collectionOfDinosaurs);
    const actual = park.collectionOfDinosaurs.length;
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeDinosaur(dinosaur2.species)
    const actual = park.collectionOfDinosaurs.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.biggestAttraction();
    assert.strictEqual(actual, 200);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.dinosaursBySpecies('Indominus Rex');
    assert.deepStrictEqual(actual, [dinosaur3, dinosaur4])
  });

  it('should calculate the number of vistors per day', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.vistorsPerDay();
    assert.strictEqual(actual, 350)
  });

  it('should calculate total number of vistors per year', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.vistorsPerYear();
    assert.strictEqual(actual, 127750)
  });

  it('should calculate sum of ticket sales in a year', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.yearlyRevenue();
    assert.strictEqual(actual, 12775000)
  })

  xit('should be able to remove all dinosaurs of a particular species');

});
