import { HTTPMethod } from '@/infra/network/APIClient'

export interface APIRequest<R> {
  response: R
  path: string
  method: HTTPMethod
  params?: any // eslint-disable-line @typescript-eslint/no-explicit-any
  baseURL?: string
  parse?: (data: any) => R // eslint-disable-line @typescript-eslint/no-explicit-any
}
