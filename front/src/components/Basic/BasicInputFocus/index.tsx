import React, { useCallback, useEffect, useRef, useState, VFC } from 'react';
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

const BasicInputFocus: VFC<Props> = ({
  type,
  name,
  placeholder,
  maxLength,
  inputValue,
  setInputValue,
  setErrorText,
  errorText,
  style,
}) => {
  const inputFocus = useRef<any>(null);

  const onChangeInputValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);

      if (errorText) {
        setErrorText('');
      }
    },
    [errorText],
  );

  useEffect(() => {
    inputFocus?.current?.focus();
  }, [inputFocus]);

  return (
    <InputContainer>
      <input
        ref={inputFocus}
        className={style}
        type={type}
        name={name}
        value={inputValue}
        placeholder={placeholder}
        onChange={onChangeInputValue}
        maxLength={maxLength}
        autoComplete="new-password"
      />
      {errorText && <p className="error-text">{errorText}</p>}
    </InputContainer>
  );
};

export default React.memo(BasicInputFocus);
