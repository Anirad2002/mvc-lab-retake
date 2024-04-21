const cars = [
    { id: 1, make: "Toyota", model: "Yaris", year: 2002, color: "black" },
    { id: 2, make: "Honda", model: "Civic", year: 2012, color: "silver" },
    { id: 3, make: "Ford", model: "Focus", year: 2015, color: "red" },
    { id: 4, make: "Chevrolet", model: "Camaro", year: 2020, color: "white" },
    { id: 5, make: "BMW", model: "X5", year: 2018, color: "blue" }
];

const carsFunctions = {
    getCars: function () {
        return cars;
    },
    getCarInformation: function (id) {
        const car = cars.find(car => car.id === id);
        if (car) {
            return `Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, Color: ${car.color}.`;
        } else {
            return "Car doesn't exist";
        }
    },
    getCarAge: function (id) {
        const car = cars.find(car => car.id === id);
        if (car) {
            const currentYear = new Date().getFullYear();
            const carAge = currentYear - car.year;
            return `Car is ${carAge} years old.`;
        } else {
            return "Car doesn't exist";
        }
    }
};

module.exports = carsFunctions;