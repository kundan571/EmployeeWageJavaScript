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
let employeeDailyHrsWageArr = new Array();
while(totalEmployeeHrs <= MAX_HRS_IN_MONTH &&
         totalWorkingDay < NUM_OF_WORKING_DAY){
            totalWorkingDay++;
            let employeeCheck = Math.floor(Math.random() * 10) % 3;
            let employeeHrs = getWorkingHours(employeeCheck);
            totalEmployeeHrs += employeeHrs;
            employeeDailyHrsWageArr.push(
                {
                    dayNum : totalWorkingDay,
                    dailyHours : employeeHrs,
                    dailyWage : calculateDailyWage(employeeHrs),
                    toString(){
                        return "\nDay: " + this.dayNum + " => Working Hours is: " + this.dailyHours +
                                " And Wage Earned = " + this.dailyWage
                    },
                });
         } 
console.log("UC10- Showing Daily Hours Worked and and Wage Earned: " + employeeDailyHrsWageArr);

// UC 11A to UC 11D- using object functions along with arrow functions
let totalWages = employeeDailyHrsWageArr
                    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                    .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
let totalHours = employeeDailyHrsWageArr
                    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                    .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);
console.log("UC 11A- Total Hours: " + totalHours + " Total Wages: " + totalWages);

process.stdout.write("UC 11B- Logging Full Work Days");
employeeDailyHrsWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                        .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

let partWorkingDaysStrArr = employeeDailyHrsWageArr
                            .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                            .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\nUC 11C- PartWorkingDayStrings: " + partWorkingDaysStrArr);
let nonWorkingDaysNums = employeeDailyHrsWageArr
                            .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                            .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("UC 11D- NonWorkingDayNums: " + nonWorkingDaysNums);                                                                                