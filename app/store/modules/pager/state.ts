import { IPager } from '@/types/shared/pager'

export interface IPagerState {
  pets: IPager
}

export const initialState = (): IPagerState => ({
  pets: {
    page: 1,
    total: null,
    size: 5
  }
})
