'use client'
import React from 'react';
import styles from './LogForm.module.css'
import loginConfig from "./configuration.json";
import Link from 'next/link';
import Input from '@/inputControlls/Input';
import { handleFeiledValidation, handleFormValidation } from '@/validations/appValidation';

const LogForm = () => {
  const [inpControlers, setInpControlers] = React.useState(loginConfig)
  
  const handleLogin=()=>{
    const [dataObj, UpdatedInputControllers, isFormInvalid ] = handleFormValidation(inpControlers)
    if(isFormInvalid){
      setInpControlers(UpdatedInputControllers);
      return;
    }
    console.log("sending reqest to the server")
    console.log( dataObj)
  }

  const fnChange=(eve)=>{
    
    setInpControlers(handleFeiledValidation(eve, inpControlers));
    
  }
  return (
    <div className='container-fluid '>
      <h2 className='text-center'>Login</h2>
      {
        // This loignconfig is a array for objects from the josan file and we have to iterate through the array so we have used the map methos here
        inpControlers.map(({UIL,type, PlaceHolder, model, ErrorMessage}, ind)=>{
          return (
            <div className='row my-2' key={ind}>
          <div className='col-sm-5 text-end'>
              {UIL}:
          </div>
          <div className='col-sm-3'>
            <Input handleChange={fnChange}  type={type} PlaceHolder={PlaceHolder} model={model}/>
          </div>
          <div className='col-sm-4 text-danger'>
            {ErrorMessage}
          </div>
          
          </div>
          )
        })
      }
      <button onClick={handleLogin} className='btn btn-success offset-5'>Login</button>
      <Link href="/register" className='m-3'>Register</Link>
    </div>
  );
}

export default LogForm;
