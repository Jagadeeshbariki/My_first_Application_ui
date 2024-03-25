'use client'
import React from 'react';
// This is the Input Component for all the inputfield in the application
const Input = ({model,value, PlaceHolder, type, handleChange, options, values}) => {


    switch (type){

      case 'text':
      case 'password':
      case 'date':
        return (
          <>
              < input value={value} onChange={handleChange} name={model} placeholder={PlaceHolder} type={type} className='form-control mb-2'/>
          </>
        );

      case 'radio':
        return (
          <>
          {
            options.map((val, ind)=>{
              return <p key={ind}>< input checked={value == values[ind]} value={values[ind]} onChange={handleChange} name={model} type={type} className='m-1'/>{val}</p>
            })
          }
          </>
        );

      case 'checkbox':
        return (
          <>
          {
            options.map((val, ind)=>{
              return <p key={ind}><input checked={value.split(',').includes(values[ind])} value={values[ind]} onChange={handleChange} name={model} type={type} className='m-1'/>{val}</p>
            })
          }
          </>
        )
    }
  
}

export default Input;
