import { useIsTablet1024 } from '@utils/Hooks';
import { ClipLoader } from 'react-spinners';
import { LoadingCircleContainer } from './style';

const LoadingCircle = () => {
  const isTablet1024 = useIsTablet1024();
  return (
    <LoadingCircleContainer>
      <ClipLoader color={'#D3D3D3'} size={36} />
    </LoadingCircleContainer>
  );
};

export default LoadingCircle;
