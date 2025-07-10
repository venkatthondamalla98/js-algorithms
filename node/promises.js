const fetchData = async () => {
   try{
    const fun1 = Promise.resolve("Im success")
    const fun2 = Promise.reject("Im Failed")
    
    let result = await Promise.all([fun1, fun2])

    // let result = await Promise.allSettled([fun1, fun2])

    // let result = await Promise.race([fun1, fun2])

    // let result = await Promise.any([fun1, fun2])
    console.log(result)
   }catch(error){
    console.log(error)
   }
}

fetchData();
