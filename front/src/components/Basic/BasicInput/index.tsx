import React, { useCallback, useState, VFC } from 'react';

interface Props {
  type: string;
  name: string;
  placeholder: string;
  maxLength: number;
  style: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputValue: string;
}

const BasicInput: VFC<Props> = ({
  type,
  name,
  placeholder,
  maxLength,
  style,
  inputValue,
  setInputValue,
}) => {
  const onChangeInputValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      console.log(e.target.value);
    },
    [],
  );

  return (
    <input
      className={style}
      type={type}
      name={name}
      value={inputValue}
      placeholder={placeholder}
      onChange={onChangeInputValue}
      maxLength={maxLength}
    />
  );
};

export default React.memo(BasicInput);
