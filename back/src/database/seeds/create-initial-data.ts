import { Payment } from './../../entities/payment/payment';
import { ProductSubImg } from './../../entities/product/product.sub.img';
import { Product } from './../../entities/product/product.info';
import { ProductSailInfo } from './../../entities/product/product.sale.info';
import { Users } from './../../entities/users/users.info';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { ProductReview } from './../../entities/product/product.review';

export class CreateInitialData implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const nickname = [
      'gsy8273',
      'weqqee55',
      'ydarrkw22',
      'jkdfq553',
      'fkadss993',
      'hbabbd321',
    ];

    const password = [
      '' + Math.random(),
      '' + Math.random(),
      '' + Math.random(),
      '' + Math.random(),
      '' + Math.random(),
    ];

    await connection
      .createQueryBuilder()
      .insert()
      .into(Users)
      .values(
        nickname.map((nick, index) => ({
          id: index + 1,
          userId: nick,
          nickname: nick,
          password: password[index],
          address: '지구',
          email: 'kfewfwlk@gmail.com',
          phone_number: '010-1111-1111',
        })),
      )
      .execute();

    ///// Users

    const ProductsCode = [
      'bs4691',
      'bs5039',
      'bs6704',
      'bs6709',
      'bs6714',
      'jk1296',
      'jk1442',
      'jk1962',
      'jk1989',
      'jk2091',
      'ts1935',
      'ts2747',
      'ts2967',
      'ts2985',
      'ts3097',
      'ps3732',
      'ps3800',
      'sk5413',
      'sk5580',
      'sk5592',
      'op13507',
      'op13547',
      'op13550',
      'op13561',
      'op13616',
    ];

    const score = [1, 2, 3, 4, 5, 2, 4, 3];
    const reviewText = [
      '오오 이거 진짜 예쁩니다 빨리 봄이 왔으면 하네요 ㅋ',
      '사이즈는 넉넉해요.. 그리고 굉장히 고급스럽고 우아해요 정말 마음에 들어요^^',
      '색감이 부드럽게 빠져서 너무 이쁘고 통통한 사람도 여리여리한 핏으로 떨어지게 입을수 있어서 너무 좋았어요!왕리본 포인트도 너무 이뻐요❤️',
      '가격도적당하고여리여리해보이는게이쁘게잘맞아요',
      'ㅠㅠㅠㅠㅠ 이 옷 진짜 러블리 폭발!!! 소재도 하늘하늘 입으면 여리여리 항상 믿고 구매하는 스타일린트 감사합니다❤',
      '너무너무 이뻐요 ... 사길 잘한거 같아요 !!',
      '진짜 너무 예뻐요~^^ 꺅~~~ 입고나갔더니 다들예쁘다고 했어요. 특히 소매쪽 여성스럽고 여리여리하답니다. 200프로만족해요.',
      '망설이다 샀는데잘 맞아요너무 여성스럽네요^^;; 원래 이런옷스타일을 안입어서어색하지만 옷은 예쁩니다~',
    ];
    let index = 1;

    const ProductsReviews = [];

    for (let i = 0; i < ProductsCode.length; i++) {
      for (let k = 0; k < nickname.length; k++) {
        for (let m = 0; m < reviewText.length; m++) {
          ProductsReviews.push({
            id: index,
            product_code: ProductsCode[i],
            userId: nickname[m % 6],
            nickname: nickname[m % 6],
            review_text: reviewText[m],
            score: score[m],
          });
          index++;
        }
      }
    }

    await connection
      .createQueryBuilder()
      .insert()
      .into(ProductReview)
      .values(ProductsReviews)
      .execute();

    // productsReview

    await connection
      .createQueryBuilder()
      .insert()
      .into(Product)
      .values([
        {
          id: 1,
          code: 'bs4691',
          name: 'bs4691 매끄러운 광택감이 돋보이는 베이직 셔츠',
          type: 'blouse',
          price: 23000,
          dibs: 0,
          perchase_quantity: nickname.length * reviewText.length,
          review_count: nickname.length * reviewText.length,
          image: '/imgs/Products/blouse/bs4691/main.gif',
        },
        {
          id: 2,
          code: 'bs5039',
          name: 'bs5039 찰랑 쫀득한 심플 베이직 오픈카라 블라우스',
          type: 'blouse',
          price: 21000,
          dibs: 0,
          perchase_quantity: nickname.length * reviewText.length,
          review_count: nickname.length * reviewText.length,
          image: '/imgs/Products/blouse/bs5039/main.gif',
        },
        {
          id: 3,
          code: 'bs6704',
          name: 'bs6704 데일리 코튼 셔츠 블라우스',
          type: 'blouse',
          price: 32000,
          dibs: 0,
          perchase_quantity: nickname.length * reviewText.length,
          review_count: nickname.length * reviewText.length,
          image: '/imgs/Products/blouse/bs6704/main.gif',
        },
        {
          id: 4,
          code: 'bs6709',
          name: 'bs6709 하트 버튼 포인트의 절개 디테일 빅카라넥 블라우스',
          type: 'blouse',
          price: 25000,
          dibs: 0,
          perchase_quantity: nickname.length * reviewText.length,
          review_count: nickname.length * reviewText.length,
          image: '/imgs/Products/blouse/bs6709/main.gif',
        },
        {
          id: 5,
          code: 'bs6714',
          name: 'bs6714 랜디스 찰랑폴리 배색 리본 셔링 블라우스',
          type: 'blouse',
          price: 28000,
          dibs: 0,
          perchase_quantity: nickname.length * reviewText.length,
          review_count: nickname.length * reviewText.length,
          image: '/imgs/Products/blouse/bs6714/main.gif',
        },
        {
          id: 6,
          code: 'jk1296',
          name: 'jk1296 브랜드 감성의 아뜨메이드 테일러드카라 싱글 자켓',
          type: 'jacket',
          price: 38000,
          dibs: 0,
          perchase_quantity: nickname.length * reviewText.length,
          review_count: nickname.length * reviewText.length,
          image: '/imgs/Products/jacket/jk1296/main.gif',
        },
        {
          id: 7,
          code: 'jk1442',
          name: 'jk1442 시그니쳐 탄탄 베이직 자켓 스커트 셋업',
          type: 'jacket',
          price: 35000,
          dibs: 0,
          perchase_quantity: nickname.length * reviewText.length,
          review_count: nickname.length * reviewText.length,
          image: '/imgs/Products/jacket/jk1442/main.gif',
        },
        {
          id: 8,
          code: 'jk1962',
          name: 'jk1962 수술 디테일 포인트의 라운드넥 트위드 자켓',
          type: 'jacket',
          price: 45000,
          dibs: 0,
          perchase_quantity: nickname.length * reviewText.length,
          review_count: nickname.length * reviewText.length,
          image: '/imgs/Products/jacket/jk1962/main.gif',
        },
        {
          id: 9,
          code: 'jk1989',
          name: 'jk1989 고급스러운 버튼 장식의 테일러드 트위드 자켓',
          type: 'jacket',
          price: 42000,
          dibs: 0,
          perchase_quantity: nickname.length * reviewText.length,
          review_count: nickname.length * reviewText.length,
          image: '/imgs/Products/jacket/jk1989/main.gif',
        },
        {
          id: 10,
          code: 'jk2091',
          name: 'jk2091 룩스 바이오워싱 캐쥬얼 루즈핏 자켓',
          type: 'jacket',
          price: 39000,
          dibs: 0,
          perchase_quantity: nickname.length * reviewText.length,
          review_count: nickname.length * reviewText.length,
          image: '/imgs/Products/jacket/jk2091/main.gif',
        },
        {
          id: 11,
          code: 'ts1935',
          name: 'ts1935 12가지의 컬러의 베이직한 맨투맨 티셔츠',
          type: 'shirts',
          price: 39000,
          dibs: 0,
          perchase_quantity: nickname.length * reviewText.length,
          review_count: nickname.length * reviewText.length,
          image: '/imgs/Products/shirts/ts1935/main.gif',
        },
        {
          id: 12,
          code: 'ts2747',
          name: 'ts2747 쫀득한 슬림핏 라운드넥 티셔츠',
          type: 'shirts',
          price: 20000,
          dibs: 0,
          perchase_quantity: nickname.length * reviewText.length,
          review_count: nickname.length * reviewText.length,
          image: '/imgs/Products/shirts/ts2747/main.gif',
        },
        {
          id: 13,
          code: 'ts2967',
          name: 'ts2967 셔링 랩 디자인의 슬림 티셔츠',
          type: 'shirts',
          price: 21000,
          dibs: 0,
          perchase_quantity: nickname.length * reviewText.length,
          review_count: nickname.length * reviewText.length,
          image: '/imgs/Products/shirts/ts2967/main.gif',
        },
        {
          id: 14,
          code: 'ts2985',
          name: 'ts2985 리엘 탄탄소프트 골지 U넥 니트 티셔츠',
          type: 'shirts',
          price: 23000,
          dibs: 0,
          perchase_quantity: nickname.length * reviewText.length,
          review_count: nickname.length * reviewText.length,
          image: '/imgs/Products/shirts/ts2985/main.gif',
        },
        {
          id: 15,
          code: 'ts3097',
          name: 'ts3097 파인트 베이직 라운드넥 루즈핏 맨투맨',
          type: 'shirts',
          price: 25000,
          dibs: 0,
          perchase_quantity: nickname.length * reviewText.length,
          review_count: nickname.length * reviewText.length,
          image: '/imgs/Products/shirts/ts3097/main.gif',
        },
        {
          id: 16,
          code: 'ps3732',
          name: 'ps3732 절개 플레어 디자인의 뒷밴딩 미니 큐롯 팬츠',
          type: 'skirt',
          price: 28000,
          dibs: 0,
          perchase_quantity: nickname.length * reviewText.length,
          review_count: nickname.length * reviewText.length,
          image: '/imgs/Products/skirt/ps3732/main.gif',
        },
        {
          id: 17,
          code: 'ps3800',
          name: 'ps3800 링클 원단의 밴딩 A라인 캉캉 미니 큐롯 팬츠',
          type: 'skirt',
          price: 23000,
          dibs: 0,
          perchase_quantity: nickname.length * reviewText.length,
          review_count: nickname.length * reviewText.length,
          image: '/imgs/Products/skirt/ps3800/main.gif',
        },
        {
          id: 18,
          code: 'sk5413',
          name: 'sk5413 파스텔 컬러 3기장 플레어 스커트',
          type: 'skirt',
          price: 29000,
          dibs: 0,
          perchase_quantity: nickname.length * reviewText.length,
          review_count: nickname.length * reviewText.length,
          image: '/imgs/Products/skirt/sk5413/main.gif',
        },
        {
          id: 19,
          code: 'sk5580',
          name: 'sk5580 뮤제 이염방지 히든밴딩 생지 미니스커트',
          type: 'skirt',
          price: 35000,
          dibs: 0,
          perchase_quantity: nickname.length * reviewText.length,
          review_count: nickname.length * reviewText.length,
          image: '/imgs/Products/skirt/sk5580/main.gif',
        },
        {
          id: 20,
          code: 'sk5592',
          name: 'sk5592 엘리 에나멜 미니 스커트',
          type: 'skirt',
          price: 36000,
          dibs: 0,
          perchase_quantity: nickname.length * reviewText.length,
          review_count: nickname.length * reviewText.length,
          image: '/imgs/Products/skirt/sk5592/main.gif',
        },
        {
          id: 21,
          code: 'op13507',
          name: 'op13507 데이쉬 찰랑핏 베이직 스트랩 미니 셔츠 원피스',
          type: 'dress',
          price: 43000,
          dibs: 0,
          perchase_quantity: nickname.length * reviewText.length,
          review_count: nickname.length * reviewText.length,
          image: '/imgs/Products/dress/op13507/main.gif',
        },
        {
          id: 22,
          code: 'op13547',
          name: 'op13547 세련된 셔츠 배색 미니 원피스',
          type: 'dress',
          price: 45000,
          dibs: 0,
          perchase_quantity: nickname.length * reviewText.length,
          review_count: nickname.length * reviewText.length,
          image: '/imgs/Products/dress/op13547/main.gif',
        },
        {
          id: 23,
          code: 'op13550',
          name: 'op13550 블라썸 쉬폰 플라워 자가드 원피스',
          type: 'dress',
          price: 48000,
          dibs: 0,
          perchase_quantity: nickname.length * reviewText.length,
          review_count: nickname.length * reviewText.length,
          image: '/imgs/Products/dress/op13550/main.gif',
        },
        {
          id: 24,
          code: 'op13561',
          name: 'op13561 클라라 배색 리본 플레어 미니 원피스',
          type: 'dress',
          price: 40000,
          dibs: 0,
          perchase_quantity: nickname.length * reviewText.length,
          review_count: nickname.length * reviewText.length,
          image: '/imgs/Products/dress/op13561/main.gif',
        },
        {
          id: 25,
          code: 'op13616',
          name: 'op13616 로맨틱한 플라워 패턴의 언발셔링 미니 원피스',
          type: 'dress',
          price: 47000,
          dibs: 0,
          perchase_quantity: nickname.length * reviewText.length,
          review_count: nickname.length * reviewText.length,
          image: '/imgs/Products/dress/op13616/main.gif',
        },
      ])
      .execute();

    //////////// Product

    const types = ['blouse', 'jacket', 'shirts', 'skirt', 'dress'];

    const createData = (type, code, id) => {
      const sub = Array(8)
        .fill(0)
        .map((value, index) => {
          return {
            id: id + index,
            subimage: `/imgs/Products/${type}/${code}/sub${index + 1}.jpg`,
            kind: 'slide',
            code: code,
          };
        });
      const desc = Array(8)
        .fill(0)
        .map((value, index) => {
          return {
            id: id + index + 8,
            subimage: `/imgs/Products/${type}/${code}/desc${index + 1}.jpg`,
            kind: 'desc',
            code: code,
          };
        });
      return sub.concat(desc);
    };

    for (let i = 0; i < ProductsCode.length; i++) {
      await connection
        .createQueryBuilder()
        .insert()
        .into(ProductSubImg)
        .values(
          createData(types[Math.floor(i / 5)], ProductsCode[i], i * 16 + 1),
        )
        .execute();
    }

    ////// ProductSubImg

    const colors = ['Red', 'White', 'Black'];
    const sizes = ['S', 'M', 'L'];

    const ProductsInfo = [];
    index = 1;

    for (let i = 0; i < ProductsCode.length; i++) {
      for (let j = 0; j < colors.length; j++) {
        for (let k = 0; k < sizes.length; k++) {
          ProductsInfo.push({
            id: index,
            code: ProductsCode[i],
            color: colors[j],
            size: sizes[k],
            quantity: 9999,
          });
          index++;
        }
      }
    }
    await connection
      .createQueryBuilder()
      .insert()
      .into(ProductSailInfo)
      .values(ProductsInfo)
      .execute();

    /////// ProductSailInfo

    const PaymentDoneInfo = [];
    const Receivers = ['나루토', '사스케', '사쿠라', '지라이야', '이타치'];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 10; j++) {
        PaymentDoneInfo.push({
          userId: '333',
          product_name: 'bs4691',
          price: '30000',
          quantity: 3,
          size: 'L',
          color: 'Red',
          image: '/imgs/Products/blouse/bs5039/main.gif',
          address: '송파대로 567 531동 310호',
          receiver: Receivers[i],
          phone_number: '010-4422-3311',
          state: true,
        });
      }
    }

    await connection
      .createQueryBuilder()
      .insert()
      .into(Payment)
      .values(PaymentDoneInfo)
      .execute();

    // paymentInfo
  }
}
