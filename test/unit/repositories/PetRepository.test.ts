import Vue from 'vue'
import Vuex from 'vuex'
import createStore from '@/store'
import { PetRepositoryFactory } from '@/repositories/PetRepository'
import { range } from '@/utils/helper'
import { PetPropsFactory, PetEntityFactory } from '@/entities/Pet'

Vue.use(Vuex)

describe('PetRepository', () => {
  test('should be able to save and get pets', () => {
    const pets = range(1, 10).map(id => PetPropsFactory({ id }))
    const store = createStore()
    const repository = PetRepositoryFactory(store)

    expect(repository.getPets()).toEqual([])

    repository.savePets(pets)

    expect(repository.getPets().map(pet => pet.props)).toEqual(pets)
  })

  test('should be able to save and get pet', () => {
    const petId = 1
    const nonExistedPetId = 2
    const pet = PetPropsFactory({ id: petId })
    const petEntity = PetEntityFactory(pet)
    const store = createStore()
    const repository = PetRepositoryFactory(store)

    expect(repository.getPet(petId)).toBeNull()

    repository.savePet(pet)

    expect(repository.getPet(petId)).toEqual(petEntity)
    expect(repository.getPet(nonExistedPetId)).toBeNull()
  })
})
