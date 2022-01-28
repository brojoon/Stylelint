import Link from 'next/link'
import { useRecoilState } from 'recoil'
import { pageNameState } from '@states/Atom'

const IndexPage = () => {
  const [pageName, setPageName] = useRecoilState(pageNameState)

  return <div className="lg:flex grid grid-rows-4 grid-flow-col gap-4"></div>
}

export default IndexPage
