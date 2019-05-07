import axios, { AxiosResponse } from 'axios'
import qs from 'qs'
import { NetworkClient } from './NetworkClient'
import { APIRequest } from './APIRequest'
import { APIError } from './APIError'

interface HttpError extends Error {
  response?: {
    status: number
  }
  message: string
}

export enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT'
}

// APIClient is client class for xhr request
export class APIClient implements NetworkClient {
  baseURL: string = process.env.NODE_ENV === 'production' ? 'TBD' : 'TBD'
  timeout: number = 15 * 1000

  constructor() {
    // For Dev use only
    if (process.env.NODE_ENV !== 'production' && process.env.FLAG_AGREED === 'enabled') {
      this.baseURL = 'http://localhost:3010/api'
    }
  }

  request<U>(request: APIRequest<U>): Promise<U> {
    const isRead = request.method === HTTPMethod.GET

    return new Promise<U>((resolve, reject) => {
      axios
        .request({
          url: request.path,
          method: request.method,
          params: isRead && request.params,
          data: !isRead && this.encodedParams(request.params, request.method),
          withCredentials: false,
          timeout: this.timeout,
          baseURL: request.baseURL || this.baseURL,
          headers: this.createHeaders()
        })
        .then(data => {
          const response = request.parse ? request.parse(data) : this.parse<U>(data)
          resolve(response)
        })
        .catch(err => {
          const apiError = this.normalizeError(err)
          reject(apiError)
        })
    })
  }

  // Default parser
  private parse<U>(data: AxiosResponse): U {
    return data.data
  }

  // Convert axios error into APIError
  private normalizeError(error: HttpError): APIError {
    return {
      status: error.response && error.response.status,
      message: error.message,
      raw: error
    }
  }

  private encodedParams(params: Record<string, string>, method: HTTPMethod) {
    if (method === HTTPMethod.POST && process.env.FLAG_AGREED === 'enabled') {
      return qs.stringify(params)
    }

    return params
  }

  // Create headers
  private createHeaders() {
    // For Dev use only
    if (process.env.NODE_ENV !== 'production' && process.env.FLAG_AGREED === 'enabled') {
      return {}
    }

    return {
      'Content-Type': 'application/json',
      xhrFields: true,
      withCredentials: true,
      'Access-Control-Allow-Origin': '*'
    }
  }
}
