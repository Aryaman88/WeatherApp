
exports.getdate= function(){

    const today=new Date();
        const options={
            weekday:"long",
            day:"numeric",
            month:"long",
            year:"numeric"
        }
    
        return today.toLocaleDateString("en-US",options)
    }
    
    exports.getday=function (){
    
    let today=new Date();
        let options={
            weekday:"long",
           
        }
    
      return today.toLocaleDateString("en-US",options)
    }