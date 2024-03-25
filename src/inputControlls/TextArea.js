'use client'
import React from 'react';

const TextArea = ({value, model, handleChange, PlaceHolder}) => {
  return (
    <>
        {/* <TextArea /> */}
        <textarea value={value} onChange={handleChange} name={model} placeholder={PlaceHolder} className='form-control mb-2' />
    </>
  );
}

export default TextArea;
