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

function calculateDailyWage(employeeHrs){
    return employeeHrs * WAGE_PER_HOUR;
}
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAY = 20;
let totalEmployeeHrs = 0;
let totalWorkingDay = 0;
let employeeDailyWageArr = new Array();
while(totalEmployeeHrs <= MAX_HRS_IN_MONTH &&
         totalWorkingDay < NUM_OF_WORKING_DAY){
            totalWorkingDay++;
            let employeeCheck = Math.floor(Math.random() * 10) % 3;
            let employeeHrs = getWorkingHours(employeeCheck);
            totalEmployeeHrs += employeeHrs;
            employeeDailyWageArr.push(calculateDailyWage(employeeHrs));
         } 
let employeeWage = calculateDailyWage(totalEmployeeHrs);
console.log("UC6-Total Days: " + totalWorkingDay + " " + "Total Hours: " + totalEmployeeHrs +" " + "Employee Wage: " + employeeWage);

// Array Helper functios
// UC 7A- calculate total wage using Array forEach traversal and reduce method
let totalEmployeeWage = 0;
function sum(dailyWage){
    totalEmployeeWage += dailyWage;
}
employeeDailyWageArr.forEach(sum);
console.log("UC7A-Total Days: " + totalWorkingDay + " Total Hrs: " + totalEmployeeHrs + " Total Wage: " + totalEmployeeWage);

function totalWages(totalEmployeeWage,dailyWage){
    return totalEmployeeWage + dailyWage;
}
console.log("UC7A-Total Emp wage with reduce: " + employeeDailyWageArr.reduce(totalWages,0));

// UC 7B - Show the day along with daily wage using Array Helper function
let dailyCount = 0;
function mapDayWithWage(dailyWage){
    dailyCount++;
    return dailyCount + " = " + dailyWage;
}
let mapDayWithWageArr = employeeDailyWageArr.map(mapDayWithWage);
console.log("UC7B- Daily Wage Map: ");
console.log(mapDayWithWageArr);

// UC 7C- Show days when full time wage of 160 were earned
function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArray = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C- Daily Wage Filter When Fulltime Wage Earned: ");
console.log(fullDayWageArray);

// UC 7D- Find the first occurrence when fulltime wage was earned using find function
function findFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7D- First time Fulltime Wage was earned on day: " +
            mapDayWithWageArr.find(findFulltimeWage));

// UC 7E- Check every element of fulltime wage is truely holding fulltime wage
function isAllFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7E- Check all elements have full time wage: " + fullDayWageArray.every(isAllFulltimeWage));

// UC 7F- Check if there is any part time wage
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC7F- Check if any part time wage: " + mapDayWithWageArr.some(isAnyPartTimeWage));

// UC 7G- Find thenumber of days Employee worked
function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage > 0){
        return numOfDays + 1;
    }
    return numOfDays;
}
console.log("UC7G- Number of days Employee worked: " + employeeDailyWageArr.reduce(totalDaysWorked,0));