import React, { useCallback, useEffect, useState } from 'react';

const Slider = () => {
  const [slidePosition, setSlidePosition] = useState(0);

  const onClickPrev = useCallback(() => {
    if (slidePosition == 0) setSlidePosition(-80);
    else setSlidePosition(slidePosition + 20);
  }, [slidePosition]);

  const onClickNext = useCallback(() => {
    setSlidePosition((slidePosition - 20) % 100);
  }, [slidePosition]);
  useEffect(() => {
    const slideTimer = setTimeout(onClickNext, 3000);

    return () => {
      clearTimeout(slideTimer);
    };
  });

  return (
    <div className="flex w-[500%] h-[800px]">
      <div
        className={`flex w-[100%] h-[800px] translate-x-[${slidePosition}%] transition duration-500 ease-in-iut overflow-hidden`}
      >
        <div className="w-full bg-no-repeat bg-cover bg-[length:100%_100%]  bg-[url('~@../../../public/img/page1.webp')]"></div>
        <div className="w-full bg-no-repeat bg-cover bg-[length:100%_100%] bg-[url('~@../../../public/img/page2.webp')]"></div>
        <div className="w-full bg-no-repeat bg-cover bg-[length:100%_100%] bg-[url('~@../../../public/img/page3.webp')]"></div>
        <div className="w-full bg-no-repeat bg-cover bg-[length:100%_100%] bg-[url('~@../../../public/img/page4.jpg')]"></div>
        <div className="w-full bg-no-repeat bg-cover bg-[length:100%_100%] bg-[url('~@../../../public/img/page4.webp')]"></div>
      </div>
      <button
        onClick={onClickPrev}
        className="absolute top-[70%] left-[5%] bg-no-repeat w-[45px] h-[45px] bg-[url('~@../../../public/img/sliderbtn.png')]"
      />
      <button
        onClick={onClickNext}
        className="absolute top-[70%] left-[92.5%]   bg-no-repeat w-[45px] h-[45px] bg-right bg-[url('~@../../../public/img/sliderbtn.png')]"
      />
    </div>
  );
};

export default Slider;
