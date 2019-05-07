import { Pet, PetSeed } from '@andoshin11/sample-petstore-api'
import { IPetProps, IPetSeed } from '@/entities/Pet'

export const toPetProps = (pet: Pet): IPetProps => {
  const { id, name, category, sex, note } = pet

  return {
    id,
    name,
    category: toCategoryString(category),
    sex,
    note
  }
}

export const toPetSeed = (pet: IPetSeed): PetSeed => {
  const { name, category, note, sex } = pet

  return {
    name,
    category: toCategoryKey(category),
    note,
    sex
  }
}

const toCategoryString = (key: 1 | 2 | 3) => {
  switch (key) {
    case 1:
      return 'dog'
    case 2:
      return 'cat'
    default:
      return 'others'
  }
}

const toCategoryKey = (str: 'dog' | 'cat' | 'others') => {
  switch (str) {
    case 'dog':
      return 1
    case 'cat':
      return 2
    default:
      return 3
  }
}
