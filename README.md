# fetch-simple
simple way to use fetch and also handle error

# Uses of this node module
In this module fetch method has been simpliefied for use. One can handle error and also result of fetch with simple callback thus it speed up the developement.

```js
const fetchSimple = require("fetch-simple").fetchSimple;
let route = "https://jsonplaceholder.typicode.com/posts"
let options ={
    method : "GET"
}
let result = fetchSimple(route, options, (err, data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
//use browserify to club files

```
