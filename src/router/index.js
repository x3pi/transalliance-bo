import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Accounts',
      component: () => import('@/views/Accounts.vue'),
      meta: {
        pageTitle: 'Accounts',
        breadcrumb: [
          {
            text: 'Accounts',
            active: true,
          },
        ],
      },
    },
    {
      path: '/Missions',
      name: 'Missions',
      component: () => import('@/views/Missions.vue'),
      meta: {
        pageTitle: 'Missions',
        breadcrumb: [
          {
            text: 'Missions',
            active: true,
          },
        ],
      },
    }, {
      path: '/Assurances',
      name: 'Assurances',
      component: () => import('@/views/Assurances.vue'),
      meta: {
        pageTitle: 'Assurances',
        breadcrumb: [
          {
            text: 'Assurances',
            active: true,
          },
        ],
      },
    },
    {
      path: '/EtapeOfDriver',
      name: 'EtapeOfDriver',
      component: () => import('@/views/EtapeOfDriver.vue'),
      meta: {
        pageTitle: 'EtapeOfDriver',
        breadcrumb: [
          {
            text: 'EtapeOfDriver',
            active: true,
          },
        ],
      },
    },
    {
      path: '/Reserves',
      name: 'Reserves',
      component: () => import('@/views/Reserves.vue'),
      meta: {
        pageTitle: 'Reserves',
        breadcrumb: [
          {
            text: 'Reserves',
            active: true,
          },
        ],
      },
    },
    {
      path: '/CMRs',
      name: 'CMRs',
      component: () => import('@/views/CMRs.vue'),
      meta: {
        pageTitle: 'CMRs',
        breadcrumb: [
          {
            text: 'CMRs',
            active: true,
          },
        ],
      },
    },
    {
      path: '/Moteurs',
      name: 'Moteurs',
      component: () => import('@/views/Moteurs.vue'),
      meta: {
        pageTitle: 'Moteurs',
        breadcrumb: [
          {
            text: 'Moteurs',
            active: true,
          },
        ],
      },
    },
    {
      path: '/Tractes',
      name: 'Tractes',
      component: () => import('@/views/Tractes.vue'),
      meta: {
        pageTitle: 'Tractes',
        breadcrumb: [
          {
            text: 'Tractes',
            active: true,
          },
        ],
      },
    },
    {
      path: '/RHs',
      name: 'RHs',
      component: () => import('@/views/RHs.vue'),
      meta: {
        pageTitle: 'RHs',
        breadcrumb: [
          {
            text: 'RHs',
            active: true,
          },
        ],
      },
    },
    {
      path: '/InAppNotifications',
      name: 'InAppNotifications',
      component: () => import('@/views/InAppNotifications.vue'),
      meta: {
        pageTitle: 'InAppNotifications',
        breadcrumb: [
          {
            text: 'InAppNotifications',
            active: true,
          },
        ],
      },
    },
    {
      path: '/Verifications',
      name: 'Verifications',
      component: () => import('@/views/Verifications.vue'),
      meta: {
        pageTitle: 'Verifications',
        breadcrumb: [
          {
            text: 'Verifications',
            active: true,
          },
        ],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
