import { computed, ref } from 'vue'

export interface EntityFetchParams {
  page?: number
  itemsPerPage?: number
  filters?: Record<string, string | number | boolean>
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  totalPages: number
}

export interface ApiError {
  message: string
  statusCode: number
  details?: unknown
}

export interface UseEntityOptions {
  apiEndpoint: string
  itemsPerPage?: number
  immediate?: boolean
}

export function useEntity<T = unknown>(options: UseEntityOptions) {
  const config = useRuntimeConfig()
  const { apiEndpoint, itemsPerPage = 10, immediate = false } = options

  const baseApiUrl = config.public.apiBaseUrl
  const fullApiEndpoint = `${baseApiUrl}/${apiEndpoint}`

  const entityCollection = ref<T[]>([])
  const currentEntity = ref<T | null>(null)
  const isLoading = ref(false)
  const error = ref<ApiError | null>(null)
  const totalItems = ref(0)
  const totalPages = ref(0)
  const currentPage = ref(1)

  const fetchParams = ref<EntityFetchParams>({
    page: 1,
    itemsPerPage,
    filters: {}
  })

  const buildUrlWithParams = (params: EntityFetchParams): string => {
    const { page = 1, itemsPerPage: limit, filters = {} } = params
    const urlParams = new URLSearchParams()

    urlParams.set('page', String(page))
    if (limit) urlParams.set('limit', String(limit))

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && String(value).trim() !== '') {
        urlParams.set(key, String(value))
      }
    })

    const queryString = urlParams.toString()
    return queryString ? `${fullApiEndpoint}?${queryString}` : fullApiEndpoint
  }

  const fetchAllEntities = async (params?: EntityFetchParams): Promise<T[] | ApiError> => {
    try {
      isLoading.value = true
      error.value = null

      if (params) {
        fetchParams.value = { ...fetchParams.value, ...params }
      }

      const url = buildUrlWithParams(fetchParams.value)
      const response = await $fetch<PaginatedResponse<T>>(url, {
        method: 'GET'
      })

      entityCollection.value = response.data
      totalItems.value = response.total
      totalPages.value = response.totalPages
      currentPage.value = response.page

      return response.data
    }
    catch (err: any) {
      const apiError: ApiError = {
        message: err.message || 'Erreur lors de la récupération des données',
        statusCode: err.statusCode || 500,
        details: err.data
      }
      error.value = apiError
      return apiError
    }
    finally {
      isLoading.value = false
    }
  }

  const fetchEntityById = async (id: string | number): Promise<T | ApiError> => {
    try {
      isLoading.value = true
      error.value = null

      const entity = await $fetch<T>(`${fullApiEndpoint}/${id}`, {
        method: 'GET'
      })

      currentEntity.value = entity
      return entity
    }
    catch (err: any) {
      const apiError: ApiError = {
        message: err.message || 'Erreur lors de la récupération de l\'entité',
        statusCode: err.statusCode || 500,
        details: err.data
      }
      error.value = apiError
      return apiError
    }
    finally {
      isLoading.value = false
    }
  }

  const createEntity = async <P = Partial<T>>(payload: P): Promise<T | ApiError> => {
    try {
      isLoading.value = true
      error.value = null

      const newEntity = await $fetch<T>(fullApiEndpoint, {
        method: 'POST',
        body: payload
      })

      await fetchAllEntities()

      return newEntity
    }
    catch (err: any) {
      const apiError: ApiError = {
        message: err.message || 'Erreur lors de la création de l\'entité',
        statusCode: err.statusCode || 500,
        details: err.data
      }
      error.value = apiError
      return apiError
    }
    finally {
      isLoading.value = false
    }
  }

  const updateEntity = async <P = Partial<T>>(
    id: string | number,
    payload: P
  ): Promise<T | ApiError> => {
    try {
      isLoading.value = true
      error.value = null

      const updatedEntity = await $fetch<T>(`${fullApiEndpoint}/${id}`, {
        method: 'PUT',
        body: payload
      })

      await fetchAllEntities()

      return updatedEntity
    }
    catch (err: any) {
      const apiError: ApiError = {
        message: err.message || 'Erreur lors de la mise à jour de l\'entité',
        statusCode: err.statusCode || 500,
        details: err.data
      }
      error.value = apiError
      return apiError
    }
    finally {
      isLoading.value = false
    }
  }

  const deleteEntity = async (id: string | number): Promise<boolean | ApiError> => {
    try {
      isLoading.value = true
      error.value = null

      await $fetch(`${fullApiEndpoint}/${id}`, {
        method: 'DELETE'
      })

      await fetchAllEntities()

      return true
    }
    catch (err: any) {
      const apiError: ApiError = {
        message: err.message || 'Erreur lors de la suppression de l\'entité',
        statusCode: err.statusCode || 500,
        details: err.data
      }
      error.value = apiError
      return apiError
    }
    finally {
      isLoading.value = false
    }
  }

  const goToPage = (page: number) => {
    fetchParams.value.page = page
    fetchAllEntities()
  }

  const searchEntities = (filters: Record<string, string | number | boolean>) => {
    fetchParams.value.filters = filters
    fetchParams.value.page = 1
    fetchAllEntities()
  }

  const resetFilters = () => {
    fetchParams.value.filters = {}
    fetchParams.value.page = 1
    fetchAllEntities()
  }

  const hasError = computed(() => error.value !== null)
  const isEmpty = computed(() => entityCollection.value.length === 0)
  const hasNextPage = computed(() => currentPage.value < totalPages.value)
  const hasPreviousPage = computed(() => currentPage.value > 1)

  if (immediate) {
    fetchAllEntities()
  }

  return {
    entityCollection,
    currentEntity,
    isLoading,
    error,
    totalItems,
    totalPages,
    currentPage,

    hasError,
    isEmpty,
    hasNextPage,
    hasPreviousPage,

    fetchAllEntities,
    fetchEntityById,
    createEntity,
    updateEntity,
    deleteEntity,

    goToPage,
    searchEntities,
    resetFilters
  }
}
