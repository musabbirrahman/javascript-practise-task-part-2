// Find the lowest number in the array below.

const heights = [167, 190, 120, 165, 137];

function getLowestNumber(numbers){
    let min = numbers[0];
    for(let number of numbers){
        if(number < min){
            min = number;
        }
    }
    return min;
}

const lowestNumber = getLowestNumber(heights);
console.log(lowestNumber);