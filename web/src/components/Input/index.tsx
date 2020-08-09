import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  id?: string;
  handleChange: (name: string, value: string | number, id: string | undefined) => void;
}

const Input: React.FC<InputProps> = ({ name, label, handleChange, id, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} onChange={event => handleChange(name, event.target.value, id)} />
    </div>
  )
}

export default Input;