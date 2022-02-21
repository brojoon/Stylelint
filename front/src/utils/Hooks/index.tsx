import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

export function useScroll() {
  // const [lastScrollTop, setLastScrollTop] = useState(0);
  // const [bodyOffset, setBodyOffset] = useState(
  //   document.body.getBoundingClientRect(),
  // );
  const [scrollY, setScrollY] = useState<number>(0);
  // const [scrollX, setScrollX] = useState(bodyOffset.left);
  // const [scrollDirection, setScrollDirection] = useState();

  const listener = () => {
    console.log(window.pageYOffset);
    // setBodyOffset(document.body.getBoundingClientRect());
    setScrollY(window.pageYOffset);
    // setScrollX(bodyOffset.left);
    // setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up');
    // setLastScrollTop(-bodyOffset.top);
  };

  const delay = 30;

  useEffect(() => {
    window.addEventListener('scroll', debounce(listener, delay));
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return {
    scrollY,
  };
}
