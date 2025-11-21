// check num is 10 otherwise reject....

const myPromise = (num) => new Promise((resolve, reject) => {


    if (num == 10) {
        resolve("sucsessful")
    } else {
        reject("not successful")
    }



}, 0);

myPromise(10).then((result) => {
    console.log(result);

}).catch((err) => {
    console.log(err);


})


const aiPromise = (num) => new Promise((resolve, reject) => {
    if (num % 2 == 0) {
        resolve("success , num is even")
    } else {
        reject("unsucsess,num is odd")
    }

}, 0);

aiPromise(23).then((result) => {
    console.log(result);

})
    .catch((err) => {
        console.log(err);

    })



//settimeout

function run(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("done after 10 mis")
        }, ms);
    });
}

run(10).then(console.log);



function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Fetched")
        }, 1000)

    })

}

getData().then(console.log);


//chaining.......
function getNumber() {
    return Promise.resolve(5);
}

getNumber()
    .then(n => n * 2)
    .then(n => n + 10)
    .then(n => n * 3)
    .then(result => console.log("Final:", result));


//promise.all

const p1 = new Promise(res => setTimeout(() => res(1), 1000));
const p2 = new Promise(res => setTimeout(() => res(2), 2000));
const p3 = new Promise(res => setTimeout(() => res(3), 1500));

Promise.all([p1, p2, p3]).then(console.log);

//async
async function run() {
    try {
        const result = await checkNum(10);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

run();


//seqyancial(waterfall
function runSequential(tasks) {
    return tasks.reduce((prev, curr) => {
        return prev.then(curr);
    }, Promise.resolve());
}

const tasks = [
    () => Promise.resolve("Task 1"),
    () => Promise.resolve("Task 2"),
    () => Promise.resolve("Task 3")
];

runSequential(tasks).then(console.log);

//setTimeout


function withTimeout(promise, ms) {
    let timeout = new Promise((_, reject) =>
        setTimeout(() => reject("Timeout!"), ms)
    );
    return Promise.race([promise, timeout]);
}

const slow = new Promise(res => setTimeout(() => res("Done"), 2000));

withTimeout(slow, 1000)
    .then(console.log)
    .catch(console.log);
