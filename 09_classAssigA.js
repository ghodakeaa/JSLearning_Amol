class Vehicle{
    //properties
    brand
    top_speed
    mileage
    color
    seating_capacity
    chassis_number

    //constructor
    constructor(brand, top_speed, mileage, color, seating_capacity, chassis_number){
        this.brand = brand;
        this.top_speed = top_speed;
        this.mileage = mileage;
        this.color = color;
        this.seating_capacity= seating_capacity;
        this.chassis_number = chassis_number;

        //methods
    }

}

let vehicleTata = new Vehicle ("Tata", "102KM/PH", 15, "Red", 4, "35XNJFE648");
console.log(`<--Vehicle type and it's details--> \nBrand Name:${vehicleTata.brand}, \nTop Speed: ${vehicleTata.top_speed}, \nMileage: ${vehicleTata.mileage}, \nColor: ${vehicleTata.color}, \nSeating Capacity: ${vehicleTata.seating_capacity}, \nChassis Number: ${vehicleTata.chassis_number}\n`);

let vehicleHonda = new Vehicle ("Honda", "110KM/PH", 12, "Blue", 6, "TH82D55Vs8");
console.log(`<--Vehicle type and it's details--> \nBrand Name:${vehicleHonda.brand}, \nTop Speed: ${vehicleHonda.top_speed}, \nMileage: ${vehicleHonda.mileage}, \nColor: ${vehicleHonda.color}, \nSeating Capacity: ${vehicleHonda.seating_capacity}, \nChassis Number: ${vehicleHonda.chassis_number}\n`);

let vehicleSuzuki = new Vehicle ("Suzuki", "100KM/PH", 16, "Green", 4, "ND003WerK85");
console.log(`<--Vehicle type and it's details--> \nBrand Name:${vehicleSuzuki.brand}, \nTop Speed: ${vehicleSuzuki.top_speed}, \nMileage: ${vehicleSuzuki.mileage}, \nColor: ${vehicleSuzuki.color}, \nSeating Capacity: ${vehicleSuzuki.seating_capacity}, \nChassis Number: ${vehicleSuzuki.chassis_number}\n`);

let vehicleMahindra = new Vehicle ("Mahindra", "80KM/PH", 20, "Red", 8, "XUreT5538S");
console.log(`<--Vehicle type and it's details--> \nBrand Name:${vehicleMahindra.brand}, \nTop Speed: ${vehicleMahindra.top_speed}, \nMileage: ${vehicleMahindra.mileage}, \nColor: ${vehicleMahindra.color}, \nSeating Capacity: ${vehicleMahindra.seating_capacity}, \nChassis Number: ${vehicleMahindra.chassis_number}\n`);

let vehicleBMW = new Vehicle ("BMW", "160KM/PH", 5, "Blue", 4, "HJ3375ThE6");
console.log(`<--Vehicle type and it's details--> \nBrand Name:${vehicleBMW.brand}, \nTop Speed: ${vehicleBMW.top_speed}, \nMileage: ${vehicleBMW.mileage}, \nColor: ${vehicleBMW.color}, \nSeating Capacity: ${vehicleBMW.seating_capacity}, \nChassis Number: ${vehicleBMW.chassis_number}\n`);


console.log(`******************Traverse array of vehicle******************\n`);
let arrayOfVehicles = [vehicleTata, vehicleHonda, vehicleSuzuki, vehicleMahindra, vehicleBMW];
for (const element of arrayOfVehicles) {
    console.log(`Vehicle Brand- ${element.brand}, \nTop Speed- ${element.top_speed}, \nMileage- ${element.mileage}, \nColor- ${element.color}, \nSeating Capacity- ${element.seating_capacity}, \nChassis Number- ${element.chassis_number}\n**************************************\n`);
}

console.log(`*************Class College*************\n`);

class College{
    collegeName
    department
    city
    numberOfTeachers
    totalStudents

    constructor(collegeName, department, city, numberOfTeachers, totalStudents){
        this.collegeName = collegeName;
        this.department = department;
        this.city = city;
        this.numberOfTeachers = numberOfTeachers;
        this.totalStudents = totalStudents;
    }

    display(collegeName, department, city, numberOfTeachers, totalStudents){
        console.log(`College Name: ${this.collegeName}\nDepartment: ${this.department}\nCity: ${this.city}\nNumber Of Teachers: ${this.numberOfTeachers}\nTotal Students: ${this.totalStudents}`);
    }
}

let college1 = new College("CCS, Wakad", "Computer Science", "Pune", 50, 1000);
college1.display();
console.log(`\n*************************************`);
let college2 = new College("Sangola COllege", "Computer Science", "Sangola", 30, 1300);
college2.display();
let college3 = new College("Walchand College", "Science College", "Satara", 100, 4000);
college3.display();
let college4 = new College("Sangmeshwar College", "Computer Science", "solapur", 70, 2000);
college4.display();

console.log(`*************Traverse function*************\n`);

function traverseObject(arg){
    for (const element in arg) {
        console.log(`${element}, ${arg[element]}`);
    }
}
traverseObject(college1);
console.log(`\n*************************************`);
traverseObject(college2);
console.log(`\n*************************************`);
traverseObject(college3);
console.log(`\n*************************************`);
traverseObject(college4);
console.log(`\n*************************************`);