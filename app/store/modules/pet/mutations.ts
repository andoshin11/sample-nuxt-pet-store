import { MutationTree } from 'vuex'
import { IPetState } from '@/store/modules/pet/state'
import { Types, StorePets, StorePetsByPage } from '@/store/modules/pet/types'
import { IPetProps } from '@/entities/Pet'

export const mutations: MutationTree<IPetState> = {
  [Types.STORE_PETS]: (state, action: StorePets) => {
    const pets = action.payload
    const hash = pets.reduce((acc, ac) => ((acc[ac.id] = ac), acc), {} as Record<number, IPetProps>)

    state.byId = {
      ...state.byId,
      ...hash
    }
  },
  [Types.STORE_PETS_BY_PAGE]: (state, action: StorePetsByPage) => {
    const { page, ids } = action.payload
    state.byPage = {
      ...state.byPage,
      [page]: ids
    }
  }
}
