---
to: app/usecases/<%= namespace %>/<%= name %>UseCase.ts
---
import <%= repository %> from '@/repositories/<%= repository %>'
import PetStoreGateway from '@/gateways/PetStoreGateway'
import LogService, { LogType } from '@/services/LogService'

export interface I<%= name %>UseCaseParams {
  logService: LogService
  <%= h.inflection.camelize(repository, true) %>: <%= repository %>
  petStoreGateway: PetStoreGateway
}

export default class <%= name %>UseCase implements BaseUseCase {
  logService: LogService
  <%= h.inflection.camelize(repository, true) %>: <%= repository %>
  petStoreGateway: PetStoreGateway

  constructor({ <%= h.inflection.camelize(repository, true) %>, petStoreGateway, logService }: I<%= name %>UseCaseParams) {
    this.logService = logService
    this.<%= h.inflection.camelize(repository, true) %> = <%= h.inflection.camelize(repository, true) %>
    this.petStoreGateway = petStoreGateway
  }

  async execute() {
    try {
    } catch (error) {
      await this.logService.handle({ type: LogType.Error, error })
      throw error
    }
  }
}
