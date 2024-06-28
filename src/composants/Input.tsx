import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { MdOutlineEmail } from "react-icons/md";

function Input(props:any) {
    return <div className='flex flex-col gap-4 p-4'>
        <form action="">
            <div> <label htmlFor={props.htmlFor}> {props.label} </label></div>
            <div className='flex items-center w-full p-4 bg-white rounded-[2rem] text-input gap-4 border-input border-2 hover:border-secondary-color'>
                {props.icon}
                <input type={props.htmlFor} placeholder={props.placeholder} className='w-[30rem] h-[2rem]  ' />
            </div>
        </form>
    </div>
};

export default Input;