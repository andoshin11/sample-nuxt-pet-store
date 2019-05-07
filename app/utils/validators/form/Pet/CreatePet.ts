import PetValidator from '@/utils/validators/domain/Pet'
import { nameLengthError, nameEmptyError } from '@/const/errorMessage'

export interface Fields {
  name: string | null;
  category: 'dog' | 'cat' | 'others' | null;
  sex: 'male' | 'female' | null;
  note: string | null
}

export type FieldErrors = { [key in keyof Fields]: string[] }

export default class CreatePetValidator {
  static validate(fields: Partial<Fields>): FieldErrors {
    const errors: FieldErrors = {
      name: [],
      category: [],
      sex: [],
      note: []
    }

    const validator = new PetValidator(fields)

    if (fields.name !== undefined) {
      if (fields === null) {
        errors.name.push(nameEmptyError)
      } else {
        if (!validator.isNameLengthValid()) {
          errors.name.push(nameLengthError)
        }
      }
    }

    return errors
  }
}
