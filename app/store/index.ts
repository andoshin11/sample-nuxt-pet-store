import Vuex from 'vuex'

// modules
import * as pager from '@/store/modules/pager'
import * as pet from '@/store/modules/pet'

export interface RootState {
  pager: pager.IPagerState
  pet: pet.IPetState
}

export default () =>
  new Vuex.Store<RootState>({
    modules: {
      pager: pager.store,
      pet: pet.store
    }
  })
