// Find the friend with the smallest name.

const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];


function getSmallestName(names){
    let small = names[0];
    for(let name of names){
        if(name.length < small.length){
            small = name;
        }
    }
    return small;
}

const smallestName = getSmallestName(names);
console.log(smallestName)