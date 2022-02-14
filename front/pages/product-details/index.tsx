import React from 'react';

const productDetails = () => {
  return (
    <main className="flex justify-between">
      <div className="w-full">슬라이드</div>
      <div className="w-full flex justify-center">
        <div>
          <h3 className="text-[1.125rem] text-[#7E7E7E] font-semibold">
            스타일린트
          </h3>
          <p className="text-[1.5rem] text-[#333333] mb-[30px] font-bold">
            bs5889 썸데이 찰랑루즈핏 언발 데일리 셔츠
          </p>
          <p className="text-[1.15rem] text-[#9D9D9D] line-through ">
            31,000원
          </p>
          <div className="border-b-[1px] pb-[25px]">
            <span className="text-[0.75rem] text-[#ff9995] mr-[0.5rem]">
              10%쿠폰 적용시
            </span>
            <span className="text-[1.5625rem] font-semibold">27,900</span>
            <strong>원</strong>
          </div>
          <table className="mt-[25px]">
            <tbody className="text-[#333333] text-[0.875rem]">
              <tr>
                <th className="pr-[1.75rem]">구매자수</th>
                <td>1848</td>
              </tr>
              <tr>
                <th className="pr-[1.75rem]">배송구분</th>
                <td>무료배송</td>
              </tr>
              <tr>
                <th className="pr-[1.75rem]">배송예상</th>
                <td>월요일 02/14 [월] 도착일요일 오후 8시 이전 주문시</td>
              </tr>
            </tbody>
          </table>
          <div>
            <span>옵션</span>
          </div>
          <div>
            <span>사이즈</span>
          </div>
          <div>총금액</div>
          <div>
            <button>하트</button>
            <button>장바구니</button>
            <button>구매하기</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default productDetails;
