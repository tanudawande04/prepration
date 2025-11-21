const user = { name: "tanu", age: 22 }
const { name, age } = user;
console.log(name);


const arr = [2, 3, 4, 5, 6, 7, 8]
let ans = [...arr, 9]
console.log(ans);


async function getpost() {
    try {
        const res = await fetch();
        const data = res.json("https://jsonplaceholder.typicode.com/posts/1")
        console.log(data);


    } catch (error) {
        console.log("this is eror", error);

    }
}

getpost()
