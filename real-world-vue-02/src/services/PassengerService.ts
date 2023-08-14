import axios from 'axios'
import type {AxiosInstance, AxiosResponse} from 'axios'
import type { AirlineItem, PassengerItem } from '@/type'

const apiClient: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3004',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getPassenger(perPage: number, page: number): Promise<AxiosResponse<PassengerItem[]>> {
        return apiClient.get<PassengerItem[]>('/passengers?_limit=' 
        + perPage + '&_page=' + page)    
    },
    getPassengerById(id: number): Promise<AxiosResponse<PassengerItem>>{
        return apiClient.get<PassengerItem>('passengers/' + id.toString())
    },
    getAirlineById(id: number): Promise<AxiosResponse<AirlineItem>>{
        return apiClient.get<AirlineItem>('airline/' + id.toString())
    }
}