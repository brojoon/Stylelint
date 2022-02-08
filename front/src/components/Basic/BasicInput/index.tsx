import React, { useCallback, useState, VFC } from 'react';

interface Props {
  type: string;
  name: string;
  placeholder: string;
  maxLength: number;
  style: string;
}

const BasicInput: VFC<Props> = ({
  type,
  name,
  placeholder,
  maxLength,
  style,
}) => {
  const [inputValue, setInputValue] = useState('');

  const onChangeInputValue = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  return (
    <input
      className={style}
      type={type}
      name={name}
      placeholder={placeholder}
      value={inputValue}
      onChange={onChangeInputValue}
      maxLength={maxLength}
    />
  );
};

export default BasicInput;
