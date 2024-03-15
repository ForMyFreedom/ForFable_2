import { ExceptionContract } from ".."

export type PaginationData<T> = {
  all: T[],
  meta: {
    currentPage: number
    firstPage: number
    lastPage: number
    totalItens: number
  }
}

export type Pagination<T> = ApiResponse<PaginationData<T>>


export type SucessApiResponse<T> = { state: 'Sucess', message: keyof ExceptionContract, data: T }
export type FailureApiResponse = { state: 'Failure', error: keyof ExceptionContract, data?: any }

export type ApiResponse<T>  = FailureApiResponse | SucessApiResponse<T>

export type GenericResponse = { state: 'Failure', error?: keyof ExceptionContract, data?: any } | { state: 'Sucess', message?: keyof ExceptionContract }