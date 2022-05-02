import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import debounce from 'lodash/debounce';

export function useScroll() {
  // const [lastScrollTop, setLastScrollTop] = useState(0);
  // const [bodyOffset, setBodyOffset] = useState(
  //   document.body.getBoundingClientRect(),
  // );
  const [scrollY, setScrollY] = useState<number>(0);
  // const [scrollX, setScrollX] = useState(bodyOffset.left);
  // const [scrollDirection, setScrollDirection] = useState();

  useEffect(() => {
    const listener = () => {
      // setBodyOffset(document.body.getBoundingClientRect());
      setScrollY(window.pageYOffset);
      // setScrollX(bodyOffset.left);
      // setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up');
      // setLastScrollTop(-bodyOffset.top);
    };
    const delay = 30;
    const debouncedFn = debounce(listener, delay);
    window.addEventListener('scroll', debouncedFn);
    return () => {
      window.removeEventListener('scroll', debouncedFn);
    };
  }, []);

  return {
    scrollY,
  };
}

export function useIsTablet1024() {
  const [isTablet1024, setIsTablet1024] = useState(false);
  const Tablet = useMediaQuery({ query: '(max-width: 1024px)' });
  useEffect(() => {
    setIsTablet1024(Tablet);
  }, [Tablet]);
  return isTablet1024;
}

export function useIsTablet() {
  const [isTablet, setIsTablet] = useState(false);
  const Tablet = useMediaQuery({ query: '(max-width: 768px)' });
  useEffect(() => {
    setIsTablet(Tablet);
  }, [Tablet]);
  return isTablet;
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({ query: '(max-width: 480px)' });
  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);
  return isMobile;
}
