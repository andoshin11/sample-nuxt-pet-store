import validator, { FieldErrors, Fields } from '@/utils/validators/form/Pet/CreatePet'
import { nameEmptyError, nameLengthError } from '@/const/errorMessage'

const defaultErrors: FieldErrors = {
  name: [],
  category: [],
  sex: [],
  note: []
}

type ErrorCase = { fields: Partial<Fields>; errors: Partial<FieldErrors> }

describe('CreatePetValidator', () => {
  describe('name', () => {
    test('has no error', () => {
      expect(validator.validate({ name: 'a' })).toEqual(defaultErrors)
      expect(validator.validate({ name: 'hoge' })).toEqual(defaultErrors)
      expect(validator.validate({ name: 'hogehogehogehogehogehogehogehoge' })).toEqual(defaultErrors)
    })

    test('has errors', () => {
      const cases: ErrorCase[] = [
        {
          fields: {
            name: null
          },
          errors: {
            name: [nameEmptyError]
          }
        },
        {
          fields: {
            name: ''
          },
          errors: {
            name: [nameEmptyError]
          }
        },

        {
          fields: {
            name: 'hogehogehogehogehogehogehogehogehoge'
          },
          errors: {
            name: [nameLengthError]
          }
        }
      ]

      cases.forEach(c => {
        expect(validator.validate(c.fields)).toEqual({
          ...defaultErrors,
          ...c.errors
        })
      })
    })
  })
})


