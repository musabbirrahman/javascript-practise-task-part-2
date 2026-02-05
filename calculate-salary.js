/**For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month. */

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

// total salary
function findTotalSalary(employees){
    let total = 0; 
    for(let employee of employees){ 
        const currentSalary = (employee.experience * employee.increment) + employee.starting; 
        total = total + currentSalary; 
    } 
    return total;
}

const totalSalary = findTotalSalary(employees);
console.log(totalSalary);

//Employee current salary
function calculateCurrentSalaryByName(employees, name){
    for(let employee of employees){
        if(employee.name === name){
            const currentSalary = (employee.experience * employee.increment) + employee.starting;
            return currentSalary;
        }
    }
    return 'Employee not found';
}

const currentSalary = calculateCurrentSalaryByName(employees, 'shihab');
console.log(currentSalary);
