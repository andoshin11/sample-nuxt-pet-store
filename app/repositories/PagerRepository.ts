import { Store } from 'vuex'
import { RootState } from '@/store'
import * as types from '@/store/modules/pager/types'
import { IPager } from '@/types/shared/pager'

export default class PagerRepository {
  private _store: Store<RootState>

  constructor(store: Store<RootState>) {
    this._store = store
  }

  updatePetsPager(pager: Partial<IPager>) {
    this._store.commit(new types.SetPetsPager(pager))
  }

  getPetsPager(): IPager {
    return this._store.state.pager.pets
  }
}

export const PagerRepositoryFactory = (store: Store<RootState>): PagerRepository => {
  return new PagerRepository(store)
}
