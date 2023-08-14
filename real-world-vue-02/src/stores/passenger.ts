import type { AirlineItem, PassengerItem } from "@/type";
import { defineStore } from 'pinia';
export const usePassengerStore = defineStore('passenger', {
    state: () => ({
        passenger: null as PassengerItem | null
    }),
    actions: {
        setPassenger(passenger: PassengerItem) {
            this.passenger = passenger
        }
    }
})
export const useAirlineStore = defineStore('airline', {
    state: () => ({
        airline: null as AirlineItem | null
    }),
    actions: {
        setAirline(airline: AirlineItem) {
            this.airline = airline
        }
    }
})