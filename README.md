# fetch-simple
simple way to use fetch and also handle error

# Uses of this node module
In this module fetch method has been simpliefied for use. One can handle error and also result of fetch with simple callback thus it speed up the developement.

```js
import {fetchSimple} from "fetch-simple"

fetchSimple(route, oprions, function(err, data){
  if(err){
    return err
  }else{
  return data
})

```
