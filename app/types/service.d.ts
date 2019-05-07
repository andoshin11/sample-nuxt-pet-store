declare interface BaseService {
  handle: (param?: any) => Promise<any> // eslint-disable-line @typescript-eslint/no-explicit-any
}
