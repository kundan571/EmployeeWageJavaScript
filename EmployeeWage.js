const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkingHours(employeeCheck) {
    switch(employeeCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }   
}

const NUM_OF_WORKING_DAY = 20;
let employeeHrs = 0;
for(let day = 0; day < NUM_OF_WORKING_DAY; day++){
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    employeeHrs += getWorkingHours(employeeCheck);
}
let employeeWage = employeeHrs * WAGE_PER_HOUR;
console.log("Total Hours: " + employeeHrs +" " + "Total Employee Wage: " + employeeWage);