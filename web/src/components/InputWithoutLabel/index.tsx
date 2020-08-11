import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  id?: string;
  handleChange: (
    name: string,
    value: string | number,
    id: string | undefined
  ) => void;
}

const InputWithoutLabel: React.FC<InputProps> = ({
  name,
  label,
  handleChange,
  id,
  ...rest
}: InputProps) => {
  return (
    <div className="input-without-label">
      <input
        type="text"
        placeholder={label}
        id={name}
        {...rest}
        onChange={event => handleChange(name, event.target.value, id)}
      />
    </div>
  );
};

export default InputWithoutLabel;
