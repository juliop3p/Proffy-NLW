import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  id?: string;
  handleChange: (name: string, value: string | number, id: string | undefined) => void;
}

const Textarea: React.FC<TextareaProps> = ({ name, label, handleChange, id, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} onChange={event => handleChange(name, event.target.value, id)} />
    </div>
  )
}

export default Textarea;