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
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAY = 20;
let totalEmployeeHrs = 0;
let totalWorkingDay = 0;
while(totalEmployeeHrs <= MAX_HRS_IN_MONTH &&
         totalWorkingDay < NUM_OF_WORKING_DAY){
            totalWorkingDay++;
            let employeeCheck = Math.floor(Math.random() * 10) % 3;
            totalEmployeeHrs += getWorkingHours(employeeCheck);
         }
let employeeWage = totalEmployeeHrs * WAGE_PER_HOUR;
console.log("Total Days: " + totalWorkingDay + " " + "Total Hours: " + totalEmployeeHrs +" " + "Total Employee Wage: " + employeeWage);