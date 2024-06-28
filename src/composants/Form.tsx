import React, { Component } from "react";
import PropTypes from "prop-types";
import Connexion from "./Connexion";
import Input from "./Input";
import { MdOutlineEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import Password from './Password';
import Button from "./Button";
import Avec from './Avec';
import Logo from "./Logo";

//icon={<MdOutlineEmail />}
function Form() {

  return (
    <div className="flex-1 h-[100vh]">
      <Connexion />
      <Input placeholder="abc@gmail.com" htmlFor="email" label="Email" icon= {<MdOutlineEmail />} />
      <Input placeholder="**********" htmlFor="password" label="Password"  icon = {<FaLock />}/>
      <Password />
      <Button />
      <Avec />
      <Logo />
    </div>
  );
}

export default Form;


