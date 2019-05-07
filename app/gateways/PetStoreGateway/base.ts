import { APIClient } from '@/infra/network/APIClient'

export class PetStoreGatewayBase {
  apiClient: APIClient

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient
  }
}
