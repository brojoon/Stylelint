import { atom, selector } from 'recoil'
import axios from 'axios'

export const pageNameState = atom({
  key: 'pageNameState',
  default: 'ha'
})

export const getNameSelector = selector({
  key: 'getNameSelector',
  get: async () => {
    const res = await axios.get('http://localhost:3000/api/hello')
    return res.data
  }
})
