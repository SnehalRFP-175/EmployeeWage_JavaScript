/*
    * UC 1- Check Employee Present or Absent
*/

const IS_ABSENT = 0;

let empCheck = Math.floor(Math.random() * 10) % 2

 if(empCheck == IS_ABSENT)
    console.log("Employee Is Present....")
 else
    console.log("Employee Is Absent.....")
