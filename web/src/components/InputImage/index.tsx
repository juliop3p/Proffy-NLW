import React, { useMemo, ChangeEvent } from 'react';

import { ImageInput } from './styles';

interface Props {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  avatar: FileList | null | undefined;
}

const InputImage: React.FC<Props> = ({ handleChange, avatar }: Props) => {
  const preview = useMemo(() => {
    return avatar ? URL.createObjectURL(avatar[0]) : undefined;
  }, [avatar]);

  return (
    <ImageInput hasImage={!!preview}>
      <label htmlFor="avatar">
        <input type="file" name="avatar" id="avatar" onChange={handleChange} />
        <img src={preview} alt="preview" />
      </label>
    </ImageInput>
  );
};

export default InputImage;
