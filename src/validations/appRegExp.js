export const regExp ={
    "required":{
        pattern:/./,
        ErrorMessage:"Please Enter The Value"
    },
    "Min5Char":{
        pattern:/[a-zA-Z0-9]{5}/,
        ErrorMessage:"Minimumu 5 chars Required"
    },
    "EmailFormat":{
        pattern:/^[a-zA-Z]{1}[a-zA-Z0-9]{0,}@[a-zA-Z]{4,}\.[a-zA-Z]{2,3}$/,
        ErrorMessage:"Please Enter Valid Email"
    }
}