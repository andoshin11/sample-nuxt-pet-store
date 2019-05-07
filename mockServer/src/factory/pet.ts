import { Pet } from '@andoshin11/sample-petstore-api'

export const createPet = (props?: Partial<Pet>): Pet => {
  return {
    id: 1,
    name: 'Gritz',
    category: 2,
    sex: 'male',
    note: 'Sphinx',
    ...props
  }
}
