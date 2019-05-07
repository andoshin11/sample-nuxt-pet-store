import { Module } from 'vuex'
import { RootState } from '@/store'
import { mutations } from '@/store/modules/pet/mutations'
import { IPetState, initialState } from '@/store/modules/pet/state'

export * from '@/store/modules/pet/state'

export const store: Module<IPetState, RootState> = {
  state: initialState,
  mutations
}
