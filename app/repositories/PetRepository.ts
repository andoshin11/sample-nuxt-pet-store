import { Store } from 'vuex'
import { RootState } from '@/store'
import PetEntity, { IPetProps } from '@/entities/Pet'
import * as types from '@/store/modules/pet/types'

export default class PetRepository {
  private _store: Store<RootState>

  constructor(store: Store<RootState>) {
    this._store = store
  }

  savePets(pets: IPetProps[]) {
    this._store.commit(new types.StorePets(pets))
  }

  savePetsByPage(params: { page: number, pets: IPetProps[] }) {
    const { page, pets } = params
    const ids = pets.map(pet => pet.id)
    this.savePets(pets)
    this._store.commit(new types.StorePetsByPage({ page, ids }))
  }

  savePet(pet: IPetProps) {
    this.savePets([pet])
  }

  getPets(): PetEntity[] {
    const data = Object.values(this._store.state.pet.byId)
    return data.map(props => new PetEntity(props))
  }

  getPetsByIds(ids: Array<IPetProps['id']>): PetEntity[] {
    return ids.map(id => this.getPet(id)).filter(Boolean) as PetEntity[]
  }

  getPetsByPage(page: number): PetEntity[] {
    const ids = this._store.state.pet.byPage[page]
    return ids ? this.getPetsByIds(ids) : []
  }

  getPet(petId: number): PetEntity | null {
    const props = this._store.state.pet.byId[petId]
    return props ? new PetEntity(props) : null
  }
}

export const PetRepositoryFactory = (store: Store<RootState>): PetRepository => {
  return new PetRepository(store)
}
