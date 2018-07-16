export default  fetchSimple = (route, options, callback)=>{
    fetch(route, options).then((result)=>{
        if(result.ok){
            return result.json()
        }else{
            throw result.text();
        }

    }).then((resultJSON)=>{
        callback(null, resultJSON)
    }).catch((err)=>{
        err.then(errstr => callback(errstr));
    })
}