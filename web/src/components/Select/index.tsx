import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  id?: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  handleChange: (name: string, value: string | number, id?: string) => void;
}

const Select: React.FC<SelectProps> = ({ name, label, id, options, handleChange, ...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select id={name} {...rest} onChange={event => handleChange(name, event.target.value, id)} >
        <option value="" disabled defaultValue="" hidden>Selecione uma opção</option>
        {options.map(({label, value}) => <option key={value} value={value}>{label}</option>)}
      </select>
    </div>
  )
}

export default Select;