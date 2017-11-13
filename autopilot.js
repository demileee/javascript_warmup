var cars = []

function getNewCar() {
  newCar = {
    city: 'Toronto',
    passengers: 0,
    gas: 100
  };
  return newCar;
};

addCar = function(cars, getNewCar) {
  newCar = getNewCar();
  cars.push(newCar);
  return "Adding new car to fleet. Fleet size is now " + cars.length + ".";
};

pickUpPassenger = function(car) {
  car.passengers += 1;
  car.gas -=10;
  return "Picked up passenger. Car now has " + car.passengers + " passengers.";
};

getDestination = function(car) {
  if(car.city === 'Toronto') {
    return 'Mississauga';
  } else if(car.city === 'Mississauga') {
    return 'London';
  } else if (car.city === 'London') {
    return 'Toronto';
  };
};

fillUpGas = function(car) {
  var old_gas = car.gas;
  car.gas = 100;
  return "Filled up to " + getGasDisplay(car.gas) + " on gas from " + getGasDisplay(old_gas) + ".";
};

function getGasDisplay(gasAmount) {
  return gasAmount;
};

drive = function(car, cityDistance) {
  if(car.gas < cityDistance) {
    return fillUpGas(car);
  };

  car.city = getDestination(car);
  car.gas -= cityDistance;

  return "Drove to " + car.city + ". Remaining gas: " + car.gas + "%.";
};

dropOffPassengers = function(car) {
  var previousPassengers = car.passengers;
  car.passengers = 0;
  return "Dropped off " + previousPassengers + " passengers.";
};

act = function(car) {
  var distanceBetweenCities = 50;

  if (car.gas < 20) {
    return fillUpGas(car);
  } else if (car.passengers < 3) {
    return pickUpPassenger(car);
  } else {
    if (car.gas < distanceBetweenCities) {
      return fillUpGas(car);
    };
    var droveTo = drive(car, distanceBetweenCities);
    var passengersDropped = dropOffPassengers(car);
    return droveTo + " " + passengersDropped;
  };
};

commandFleet = function(cars) {
  cars.forEach(function(car, index) {
    var action = act(car);
    var position = index + 1
    console.log("Car " + position + ": " + action)
  });
  console.log('---')
};

addOneCarPerDay = function(cars, numDays) {
  for(var i=0; i<numDays; i++) {
    console.log(addCar(cars, getNewCar));
    commandFleet(cars);
  };
};

addOneCarPerDay(cars, 10);
