'use client'
import React from 'react';
import inpConfig from "./configuration.json";
import Input from '@/inputControlls/Input';
import Link from 'next/link';
import { handleFeiledValidation, handleFormValidation } from '@/validations/appValidation';
import TextArea from '@/inputControlls/TextArea';
import Select from '@/inputControlls/Select';

const page = () => {
  const [inpControls, setInpConstrols] = React.useState(inpConfig);
  const fnChange =(eve)=>{
    setInpConstrols(handleFeiledValidation(eve, inpControls));
  }

  const handleRegestration =()=>{
    const [dataObj, UpdatedInputControllers, isFormInvalid ] = handleFormValidation(inpControls)
    if(isFormInvalid){
      setInpConstrols(UpdatedInputControllers);
      return;
    }
    console.log("sending reqest to the server")
    console.log( dataObj)
  
  }
// We have to render the input controllers based on the tagName so we have prepating a fucntion here:

  const prepareInpControl =(obj)=>{

    switch (obj.tagName){
       case 'input':
        return <Input {...obj} handleChange={fnChange}/>
      case 'select':
        return <Select  {...obj} handleChange={fnChange}/>
        
      default:
        return <TextArea {...obj} handleChange={fnChange} />
    }

  }


  return (
    <div className='constainer-fluid'>
      <h2 className='text-center'>Register Here</h2>
      {
        inpControls.map((obj, ind)=>{
          
          return (
          <div className='row' key={ind}>
            <div className='col-sm-5 text-end'>{obj.UIL}:</div>

            <div className='col-sm-3'>
              {prepareInpControl(obj)}
              
            </div>

            <div className='col-sm-4 text-danger'>
              {obj.ErrorMessage}
            </div>
          </div>
          )

        })
      }

      <div className='row'>
          <div>
            <button onClick={handleRegestration} className='btn btn-success offset-5 '>Register</button>
            <Link className='m-3 mt-3' href ="/">Login Here</Link>
          </div>
      </div>
    </div>
  );
}

export default page;
