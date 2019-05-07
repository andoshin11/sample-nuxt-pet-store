import { Module } from 'vuex'
import { RootState } from '@/store/index.ts'
import { mutations } from '@/store/modules/pager/mutations'
import { IPagerState, initialState } from '@/store/modules/pager/state'

export * from '@/store/modules/pager/state'

export const store: Module<IPagerState, RootState> = {
  state: initialState,
  mutations
}
