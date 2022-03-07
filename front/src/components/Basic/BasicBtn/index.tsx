import React, { VFC } from 'react';

interface Props {
  onClickBtn: () => void;
  Content: string;
  style: string;
}

const BasicBtn: VFC<Props> = ({ onClickBtn, Content, style }) => {
  return (
    <button className={style} onClick={onClickBtn}>
      {Content}
    </button>
  );
};

export default React.memo(BasicBtn);
