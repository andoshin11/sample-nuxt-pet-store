import { MutationTree } from 'vuex'
import { IPagerState } from '@/store/modules/pager/state'
import { Types, SetPetsPager } from '@/store/modules/pager/types'

export const mutations: MutationTree<IPagerState> = {
  [Types.SET_PETS_PAGER]: (state, action: SetPetsPager) => {
    const pager = action.payload
    state.pets = {
      ...state.pets,
      ...pager
    }
  }
}
