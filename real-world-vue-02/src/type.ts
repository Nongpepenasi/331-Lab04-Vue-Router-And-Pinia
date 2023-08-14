 export interface EventItem {
    id:  number
    category: string
    title: string
    description: string
    location: string
    date: string
    time: string
    petsAllowed: boolean
    organizer: string
 }

 export interface StudentItem {
   id:  number
   studentId: string
   name: string
   surname: string
   gpa: string
   image: string
   penAmount: string
   description: string
}

export interface PassengerItem {
   id: number
   first_name: string
   last_name: string
   email: string
   gender: string
   ip_address: string
   Source: string
   Destination: string
   travelDate: string
   airlineId: number
   AirlineName: string
   address: string
}

export interface AirlineItem {
   id: number
   AirlineName: string
   email: string
   address: string
}