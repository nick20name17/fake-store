import axios from 'axios'

import type { CitiesQueryParams, DeliveryResponse } from './delivery.types'

const defaultLimit = 140

const apiUrl = 'https://api.novaposhta.ua/v2.0/json/'

const API_KEY = process?.env?.NOVA_POSHTA_API_KEY

export const getCities = async (
    queryParams: CitiesQueryParams
): Promise<DeliveryResponse> => {
    const response = await axios.post<DeliveryResponse>(apiUrl, {
        apiKey: API_KEY,
        modelName: 'Address',
        calledMethod: 'getCities',
        methodProperties: {
            FindByString: queryParams.search,
            Limit: defaultLimit
        }
    })

    return response.data
}
