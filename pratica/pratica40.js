fetch ('https://dummyjson.com/products/5')
.then(res => res.json())
.then(console.log)
.catch(console.log)