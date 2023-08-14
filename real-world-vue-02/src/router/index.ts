import { createRouter, createWebHistory } from 'vue-router'
import PassengerListView from '../views/PassengerListView.vue'
import AboutView from '../views/AboutView.vue'
import CategoryView from '../views/CategoryView.vue'
import StudentView from '../views/StudentView.vue'
import PassengerDetailView from '../views/passenger/PassengerDetailView.vue'
import PassengerEditView from '@/views/passenger/PassengerEditView.vue'
import PassengerRegisterView from '@/views/passenger/PassengerRegisterView.vue'
import PassengerLayoutView from '@/views/passenger/PassengerLayoutView.vue'
import PassengerAirlineView from '@/views/passenger/PassengerAirlineView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import NetworkErrorView from '@/views/NetworkErrorView.vue'
import NProgress from 'nprogress'
import PassengerService from '@/services/PassengerService'
import { useAirlineStore, usePassengerStore } from '@/stores/passenger'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'passenger-list',
      component: PassengerListView,
      props: (route) => ({page: parseInt(route.query?.page as string || '1'), pageSize: parseInt(route.query?.page as string || '2')})
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView
    },
    {
      path: '/student',
      name: 'student',
      component: StudentView
    },
    {
      path: '/passenger/:id',
      name: 'passenger-layout',
      component: PassengerLayoutView,
      beforeEnter: (to) => {
        const id: number = parseInt(to.params.id as string)
        const passengerStore = usePassengerStore()
        const airlineStore = useAirlineStore()
        return PassengerService.getPassengerById(id)
        .then((response) => {
          passengerStore.setPassenger(response.data)
          return PassengerService.getAirlineById(Number(response.data.airlineId))
        })
        .then((response) => {
          airlineStore.setAirline(response.data)
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            router.push({ name: '404-resource', params: { resource: 'passenger' } })    
          } else {
            router.push({ name: 'network-error' })
          }
        })
      },
      children: [
        {
          path: '',
          name: 'passenger-detail',
          component: PassengerDetailView,
        },
        {
          path: 'edit',
          name: 'passenger-edit',
          component: PassengerEditView,
        },
        {
          path: 'register',
          name: 'passenger-register',
          component: PassengerRegisterView,
        },
        {
          path: 'airline',
          name: 'passenger-airline',
          component: PassengerAirlineView,
        }
      ]
    },
    {
      path: '/404/:resource',
      name: '404-resource',
      component: NotFoundView,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: NetworkErrorView
    }
    
  ]
})

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
