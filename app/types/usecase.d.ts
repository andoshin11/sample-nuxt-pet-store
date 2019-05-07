declare interface BaseUseCase {
  execute: (params?: any) => Promise<any> // eslint-disable-line @typescript-eslint/no-explicit-any
}
