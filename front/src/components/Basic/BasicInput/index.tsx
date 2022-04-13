import React, { useCallback, useState, VFC } from 'react';
import { InputContainer } from './style';

interface Props {
  type: string;
  name: string;
  placeholder: string;
  maxLength: number;
  style: string;
  inputValue: string;
  errorText: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setErrorText: React.Dispatch<React.SetStateAction<string>>;
}

const BasicInput: VFC<Props> = ({
  type,
  name,
  placeholder,
  maxLength,
  style,
  inputValue,
  setInputValue,
  setErrorText,
  errorText,
}) => {
  const onChangeInputValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      console.log(e.target.value);
      if (errorText) {
        setErrorText('');
      }
    },
    [errorText],
  );

  return (
    <InputContainer>
      <input
        className={style}
        type={type}
        name={name}
        value={inputValue}
        placeholder={placeholder}
        onChange={onChangeInputValue}
        maxLength={maxLength}
      />
      {errorText && <p className="error-text">{errorText}</p>}
    </InputContainer>
  );
};

export default React.memo(BasicInput);
