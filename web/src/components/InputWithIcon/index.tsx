import React, { ReactNode } from 'react';

import { Input } from './styles';

interface Props {
  icon: ReactNode;
  name: string;
  label: string;
  type?: string;
  handleChange: (name: string, value: string | number) => void;
}

const InputWithIcon: React.FC<Props> = ({
  icon,
  name,
  label,
  handleChange,
  type,
  ...rest
}: Props) => {
  return (
    <Input>
      <input
        placeholder={label}
        id={name}
        type={type || 'text'}
        {...rest}
        onChange={event => handleChange(name, event.target.value)}
      />
      {icon}
    </Input>
  );
};

export default InputWithIcon;
