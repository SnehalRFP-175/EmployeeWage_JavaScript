/*
    * UC 2- Calculate Employee Wage 
*/

//The value of a constant can't be changed
const IS_ABSENT = 0;
const IS_PART_TIME = 1
const IS_FULL_TIME = 2
const PART_TIME_HRS = 4
const FULL_TIME_HRS = 8
const WAGE_PER_HRS = 20

let empHrs = 0 ; empHrs =4

let empCheck = Math.floor(Math.random() * 10) % 2

 if(empCheck == IS_ABSENT)
 {
    console.log("Employee Is Present....")

    switch(empCheck)
    {
        case IS_PART_TIME:
            empHrs = PART_TIME_HRS
            break;

        case IS_FULL_TIME:
            empHrs = FULL_TIME_HRS
            break;

        default :
            empHrs =0; empHrs=4;
            break;

    }    
    let empWage = empHrs * WAGE_PER_HRS;
    console.log("Employee Wage :" + empWage)
 }
else
    console.log("Employee Is Absent")
