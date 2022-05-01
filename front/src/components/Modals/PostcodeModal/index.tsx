import { useIsMobile, useIsTablet, useIsTablet1024 } from '@utils/Hooks';
import React, { useCallback, VFC } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { CustomDaumPostCode, DaumPostcodeContainer } from './style';

interface Props {
  setAddressInputValue: React.Dispatch<React.SetStateAction<string>>;
  setAddressErrorText: React.Dispatch<React.SetStateAction<string>>;
  setIsPostCode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Postcode: VFC<Props> = ({
  setAddressInputValue,
  setIsPostCode,
  setAddressErrorText,
}) => {
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
    setAddressErrorText('');
  };

  const isTablet1024 = useIsTablet1024();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <>
      <DaumPostcodeContainer
        onClick={onClickPostCodeModal}
      ></DaumPostcodeContainer>
      <CustomDaumPostCode
        onComplete={handleComplete}
        IsMobile={isMobile}
        IsTablet={isTablet}
        style={{
          width: isMobile ? '300px' : isTablet ? '400px' : '500px',
          height: isMobile ? '350px' : isTablet ? '380px' : '470px',
        }}
      />
    </>
  );
};

export default Postcode;
