import Vue from 'vue'
import Vuex from 'vuex'
import sinon from 'sinon'
import createStore from '@/store'
import FetchPetsUseCase, { IFetchPetsUseCaseParams } from '@/usecases/pet/FetchPetsUseCase'
import { PetStoreGatewayFactory } from '@/gateways/PetStoreGateway'
import { LogServiceFactory } from '@/services/LogService'
import { PetRepositoryFactory } from '@/repositories/PetRepository'
import { PagerRepositoryFactory } from '@/repositories/PagerRepository'
import { range } from '@/utils/helper'
import { PetPropsFactory } from '@/entities/Pet'

Vue.use(Vuex)

describe('FetchPets UseCase', () => {
  test('should be executed correctly', async () => {
    // Given
    const page = 1
    const pets = range(1, 10).map(id => PetPropsFactory({ id }))
    const total = pets.length
    const store = createStore()
    const petStoreGateway = PetStoreGatewayFactory()
    const logService = LogServiceFactory()
    const petRepository = PetRepositoryFactory(store)
    const pagerRepository = PagerRepositoryFactory(store)

    // Prepare
    const getPetsStub = sinon.stub(petStoreGateway.Pet, 'getPets').resolves({ pets, total })
    const savePetsByPageSpy = sinon.spy(petRepository, 'savePetsByPage')
    const updatePetsPagerSpy = sinon.spy(pagerRepository, 'updatePetsPager')
    const handleSpy = sinon.spy(logService, 'handle')

    // Execute
    const params: IFetchPetsUseCaseParams = {
      petStoreGateway,
      petRepository,
      pagerRepository,
      logService
    }
    const usecase = new FetchPetsUseCase(params)
    await usecase.execute(page)

    // Then
    expect(getPetsStub.calledOnce).toBe(true)
    expect(savePetsByPageSpy.withArgs({ page, pets }).calledOnce).toBe(true)
    expect(savePetsByPageSpy.calledAfter(getPetsStub)).toBe(true)
    expect(updatePetsPagerSpy.withArgs({ page, total }).calledOnce).toBe(true)
    expect(updatePetsPagerSpy.calledAfter(getPetsStub)).toBe(true)
    expect(handleSpy.notCalled).toBe(true)
  })

  test('should handle error correctly', async () => {
    // Given
    const page = 1
    const store = createStore()
    const petStoreGateway = PetStoreGatewayFactory()
    const logService = LogServiceFactory()
    const petRepository = PetRepositoryFactory(store)
    const pagerRepository = PagerRepositoryFactory(store)
    const errorMessage = 'Some error occured'

    // Prepare
    const getPetsStub = sinon.stub(petStoreGateway.Pet, 'getPets').rejects(errorMessage)
    const savePetsByPageSpy = sinon.spy(petRepository, 'savePetsByPage')
    const updatePetsPagerSpy = sinon.spy(pagerRepository, 'updatePetsPager')
    const handleStub = sinon.stub(logService, 'handle')

    // Execute
    const params: IFetchPetsUseCaseParams = {
      petStoreGateway,
      petRepository,
      pagerRepository,
      logService
    }
    const usecase = new FetchPetsUseCase(params)
    // Execute
    try {
      await usecase.execute(page)
    } catch (e) {} // eslint-disable-line

    // Then
    expect(getPetsStub.calledOnce).toBe(true)
    expect(savePetsByPageSpy.notCalled).toBe(true)
    expect(updatePetsPagerSpy.notCalled).toBe(true)
    expect(handleStub.calledOnce).toBe(true)
    expect(handleStub.calledImmediatelyAfter(getPetsStub)).toBe(true)
  })
})
