import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAuth, onAuthStateChanged} from "firebase/auth";



const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    )
  });
}

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
    path: '/tprofile',
    name: 'tprofile',
    component: () => import('../views/TouristProfileView.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/registerTourist',
    name: 'registerTourist',
    component: () => import('../views/RegistrationTouristView.vue'),
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
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

/*  eslint-disable no-console */
router.beforeEach(async(to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("you don't have access");
      next("/");
    }
  } else {
    next();
  }
});

export default router