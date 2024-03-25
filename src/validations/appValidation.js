import { regExp } from "./appRegExp";


export const handleFeiledValidation=(eve, inputControls)=>{
    const {name, value, type, checked} = eve.target;
    const clonedInputControls = JSON.parse(JSON.stringify(inputControls));
    
  const inputcontrolObj=   clonedInputControls.find((obj)=>{
       return  obj.model===name
    })

    if(type==='checkbox'){
        // Here we are trying to create an array with "," seperation when there is data in value if there is no data we will create an Empty array;
       const checkedValues=  inputcontrolObj.value? inputcontrolObj.value.split(","):[]
        if(checked){
            checkedValues.push(value);
        }
        else{
            const index = checkedValues.indexOf(value);
            checkedValues.splice(index, 1)
        }
        inputcontrolObj.value = checkedValues.join();
    }
    else{
        inputcontrolObj.value = value;
    }
    
    inputcontrolObj.ErrorMessage=""; 
    const criteria = inputcontrolObj.criteria;

    for(let i=0;i<criteria.length; i++){
       const {pattern,ErrorMessage }= regExp[criteria[i]];
    //    console.log(pattern)
        if( !pattern.test(value)){
            inputcontrolObj.ErrorMessage=ErrorMessage;
            break;
        }
    }
    return clonedInputControls;

}

export const handleFormValidation=(inputControls)=>{

    const clonedInputControls = JSON.parse(JSON.stringify(inputControls));
    const dataObj ={};
    clonedInputControls.forEach((inputControlObj)=>{
        const {value, criteria, model} = inputControlObj;
        dataObj[model] = value;
        for(let i=0;i<criteria.length; i++){
            const {pattern, ErrorMessage} = regExp[criteria[i]];
            if(!pattern.test(value)){
                inputControlObj.ErrorMessage=ErrorMessage;
                break;
            }
        }
    })

    const isFormInvalid = clonedInputControls.some((inputControlObj)=>{
        
        return inputControlObj?.ErrorMessage?.length>0;
        
    })
    console.log(isFormInvalid)
    return [dataObj, clonedInputControls, isFormInvalid];
}

// Now we are trying to reset the form once the form submisstion is successfull

export const formReset =(inputControls) =>{
    const clonedInputControls = JSON.parse(JSON.stringify(inputControls));

    clonedInputControls.forEach((inputControlObj)=>{
        inputControlObj.value="";
    })
    return clonedInputControls;
}