const word = str => str.split('').filter(ch => ch === 'i').length
console.log(word("tiniuivi"));


const IsPalindrom = (str) => {
    str = str.toLowerCase();
    let str1 = str.toLowerCase().split("").reverse().join('');
    return str1 === str ? true : false;

}

console.log(IsPalindrom("Madamii"));


//Max number in the array

const add = (arr, max) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }

    }
    return max;
}

console.log(add([1, 3, 4, 5, 9], 0));


//second type...

const fun = (arr) => {
    console.log(...arr);
    return Math.max(...arr);


}

console.log(fun([22, 33, 44, 55]));
