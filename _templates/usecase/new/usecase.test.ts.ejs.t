---
to: test/unit/usecases/<%= namespace %>/<%= name %>UseCase.test.ts
---
import Vue from 'vue'
import Vuex from 'vuex'
import sinon from 'sinon'
import createStore from '@/store'
import <%= name %>UseCase, { I<%= name %>UseCaseParams } from '@/usecases/<%= namespace %>/<%= name %>UseCase'
import { PetStoreGatewayFactory } from '@/gateways/PetStoreGateway'
import { LogServiceFactory } from '@/services/LogService'
import { <%= repository %>Factory } from '@/repositories/<%= repository %>'

Vue.use(Vuex)

describe('<%= name %> UseCase', () => {
  test('should be executed correctly', async () => {
    // Given
    const store = createStore()
    const petStoreGateway = PetStoreGatewayFactory()
    const logService = LogServiceFactory()
    const <%= h.inflection.camelize(repository, true) %> = <%= repository %>Factory(store)

    // Prepare
    const handleSpy = sinon.spy(logService, 'handle')

    // Execute
    const params: I<%= name %>UseCaseParams = {
      petStoreGateway,
      <%= h.inflection.camelize(repository, true) %>,
      logService
    }
    const usecase = new <%= name %>UseCase(params)
    await usecase.execute()

    // Then
    expect(handleSpy.notCalled).toBe(true)
  })

  test('should handle error correctly', async () => {
    // Given
    const store = createStore()
    const petStoreGateway = PetStoreGatewayFactory()
    const logService = LogServiceFactory()
    const <%= h.inflection.camelize(repository, true) %> = <%= repository %>Factory(store)
    const errorMessage = 'Some error occured'

    // Prepare
    const handleStub = sinon.stub(logService, 'handle')

    // Execute
    const params: I<%= name %>UseCaseParams = {
      petStoreGateway,
      <%= h.inflection.camelize(repository, true) %>,
      logService
    }
    const usecase = new <%= name %>UseCase(params)
    // Execute
    try {
      await usecase.execute()
    } catch (e) {} // eslint-disable-line

    // Then
    expect(handleStub.calledOnce).toBe(true)
  })
})
