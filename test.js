// async function fetchData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Fetch failed:", error);
//   }
// }


// fetchData();



fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);