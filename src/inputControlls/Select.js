'use client'
import React from 'react';

const Select = ({options, values, model, handleChange}) => {
    console.log(options)
  return (
    <>
        <select name={model} onChange={handleChange} className='form-constrol mb-3'>
            <option>------Please Select------</option>
            {
                options.map((val, ind)=>{
                    return <option key={ind} value={values[ind]}>{val}</option>
                })
            }
        </select>
    </>
  );
}

export default Select;
