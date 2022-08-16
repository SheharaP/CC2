import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/offers',
    name: 'offers',
    component: () => import('../views/OffersView.vue')
  },
  {
    path: '/offersview',
    name: 'offersview',
    component: () => import('../views/OffersviewView.vue')
  },
  {
    path: '/destination',
    name: 'destination',
    component: () => import('../views/DestinationView.vue')
  },
  {
    path: '/registerTourist',
    name: 'registerTourist',
    component: () => import('../views/RegistrationTouristView.vue')
  },
  {
    path: '/registerHotel',
    name: 'registerHotel',
    component: () => import('../views/RegistrationHotelView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/booking',
    name: 'booking',
    component: () => import('../views/BookingView.vue')
  },
  {
    path: '/pay',
    name: 'pay',
    component: () => import('../views/PaymentView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


