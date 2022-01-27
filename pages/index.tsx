import Link from 'next/link'
import { useRecoilState } from 'recoil'
import { pageNameState } from '../states'

const IndexPage = () => {
  const [pageName, setPageName] = useRecoilState(pageNameState)

  return (
    <div>
      <div>
        <h1>Index Page!</h1>
      </div>
      <div>
        <span>pageName 상태: {pageName}</span>
      </div>
      <div>
        <button
          onClick={() => {
            setPageName('IndexPage')
          }}
        >
          현재 페이지 이름으로 상태 변경
        </button>
      </div>
      <Link href="/post">
        <button>Post Pages 이동</button>
      </Link>
    </div>
  )
}

export default IndexPage
