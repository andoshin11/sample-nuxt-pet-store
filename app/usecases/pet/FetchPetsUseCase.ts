import PetRepository from '@/repositories/PetRepository'
import PagerRepository from '@/repositories/PagerRepository'
import PetStoreGateway from '@/gateways/PetStoreGateway'
import LogService, { LogType } from '@/services/LogService'

export interface IFetchPetsUseCaseParams {
  logService: LogService
  petRepository: PetRepository
  pagerRepository: PagerRepository
  petStoreGateway: PetStoreGateway
}

export default class FetchPetsUseCase implements BaseUseCase {
  logService: LogService
  petRepository: PetRepository
  pagerRepository: PagerRepository
  petStoreGateway: PetStoreGateway

  constructor({ petRepository, petStoreGateway, pagerRepository, logService }: IFetchPetsUseCaseParams) {
    this.logService = logService
    this.petRepository = petRepository
    this.pagerRepository = pagerRepository
    this.petStoreGateway = petStoreGateway
  }

  async execute(page: number) {
    try {
      const { pets, total } = await this.petStoreGateway.Pet.getPets({ page })
      this.petRepository.savePetsByPage({ page, pets })
      this.pagerRepository.updatePetsPager({ page, total })
    } catch (error) {
      await this.logService.handle({ type: LogType.Error, error })
      throw error
    }
  }
}
