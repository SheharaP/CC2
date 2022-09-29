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
    component: () => import('../views/OffersTouristView.vue')
  },
  {
    path: '/explore',
    name: 'explore',
    component: () => import('../views/ExploreView.vue')
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

  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
<<<<<<< HEAD
    path: '/hotels', 
    name: 'hotels',
    component: () => import('../views/HoteldisplayView.vue')
  },
  {
    path: '/offers', 
    name: 'offers',
    component: () => import('../views/OfferdisplayView.vue')
  },
  {
=======
>>>>>>> 52d7e9aad97936505d8ef6fa6a1d14efa7f83cc2
    path: '/admin', 
    name: 'admin',
    component: () => import('../views/AdminPanel.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/adminView', 
    name: 'adminView',
    component: () => import('../views/AdminView.vue'),
    meta: {
      requiresAuth: true,
    }
  }
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