import { useIsMobile, useIsTablet, useIsTablet1024 } from '@utils/Hooks';
import React, { useCallback, VFC } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { DaumPostcodeContainer } from './style';

interface Props {
  setAddressInputValue: any;
  setIsPostCode: any;
}

const Postcode: VFC<Props> = ({ setAddressInputValue, setIsPostCode }) => {
  const onClickPostCodeModal = useCallback(() => {
    setIsPostCode(false);
  }, []);
  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setAddressInputValue(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    setIsPostCode(false);
  };

  const isTablet1024 = useIsTablet1024();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <DaumPostcodeContainer onClick={onClickPostCodeModal}>
      <DaumPostcode
        onComplete={handleComplete}
        className="post-code"
        style={{
          width: isMobile ? '300px' : isTablet ? '400px' : '500px',
          height: isMobile ? '350px' : isTablet ? '380px' : '470px',
        }}
      />
    </DaumPostcodeContainer>
  );
};

export default Postcode;
