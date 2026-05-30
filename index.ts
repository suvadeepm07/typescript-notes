const printFullDate  = (date:Date| string)=>{
    if(date instanceof Date){
        return date.toUTCString()
    }
    else{
        return new Date(date).toUTCString()
    }
} 