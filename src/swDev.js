function swDev(){

    let swUrl = `${process.env.PUBLIC_URL}/sw.js`;

    if(swUrl){

        navigator.serviceWorker.register(swUrl).then( (response)=> {
            console.log('response',response);
            console.log('response scope',response.scope);
        }).catch(err=>{
            console.log('error',err);
        });
    }
}

export default swDev;