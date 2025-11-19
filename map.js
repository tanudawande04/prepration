//Implement your own .map() function....


// const array = [1, 2, 3, 4];

// const doubled = array.map(arr=> arr * 2);

// console.log(doubled); // [2, 4, 6, 8]




Array.prototype.myMap = function (callback, thisArg) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        // thisArg is used as "this" inside callback
        result.push(callback.call(thisArg, this[i], i, this));
    }

    return result;
};


//1️⃣ Implement your own .map()

const num = [1, 3, 4, 8, 9]
let ans = num.map(n=> n * 2)
console.log(ans);


//filters..
const arr = [1,2,3,4,5,6,7,8,9,0]
const  sol = arr.filter(n => n%2 == 0)
console.log(sol);

//reduce..
const nusm = [2,3,5,6]
const as = nusm.reduce((acum ,curr) => {
    return acum+ curr;
    

},0)
console.log(as);
    
