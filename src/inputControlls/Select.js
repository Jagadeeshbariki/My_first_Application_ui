'use client'
import React from 'react';

const Select = ({options,value, values, model, handleChange}) => {

  return (
    <>
        <select value={value} name={model} onChange={handleChange} className='form-constrol mb-3'>
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
