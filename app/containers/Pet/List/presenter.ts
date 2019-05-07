import PetEntity from '@/entities/Pet'
import PetRepository from '@/repositories/PetRepository'
import PagerRepository from '@/repositories/PagerRepository'

export interface IPresenterParams {
  petRepository: PetRepository
  pagerRepository: PagerRepository
}

export interface IPresenter {
  total: number
  page: number
  pets: PetEntity[]
}

export default ({ petRepository, pagerRepository }: IPresenterParams): IPresenter => {
  const { total, page } = pagerRepository.getPetsPager()

  return {
    total: total || 0,
    page,
    pets: petRepository.getPetsByPage(page)
  }
}
