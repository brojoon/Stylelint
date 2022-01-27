import Link from 'next/link'
import { useRecoilState } from 'recoil'
import { pageNameState } from '../states'

const PostPage = () => {
  const [pageName, setPageName] = useRecoilState(pageNameState)

  return (
    <div>
      <div>
        <h1>Post Page!</h1>
      </div>
      <div>
        <span>pageName 상태: {pageName}</span>
      </div>
      <div>
        <button
          onClick={() => {
            setPageName('PostPage')
          }}
        >
          현재 페이지 이름으로 상태 변경
        </button>
      </div>
      <Link href="/">
        <button>Index Pages 이동</button>
      </Link>
    </div>
  )
}

export default PostPage
