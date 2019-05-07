---
to: app/repositories/<%= name %>Repository.ts
---
import { Store } from 'vuex'
import { RootState } from '@/store'
import * as types from '@/store/modules/<%= h.inflection.camelize(name, true) %>/types'

export default class <%= name %>Repository {
  private _store: Store<RootState>

  constructor(store: Store<RootState>) {
    this._store = store
  }
}

export const <%= name %>RepositoryFactory = (store: Store<RootState>): <%= name %>Repository => {
  return new <%= name %>Repository(store)
}
