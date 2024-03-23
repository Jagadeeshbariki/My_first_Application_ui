import { regExp } from "./appRegExp";


export const handleFeiledValidation=(eve, inputControls)=>{
    const {name, value} = eve.target;
    const clonedInputControls = JSON.parse(JSON.stringify(inputControls));
    
  const inputcontrolObj=   clonedInputControls.find((obj)=>{
       return  obj.model===name
    })
    inputcontrolObj.value = value;
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