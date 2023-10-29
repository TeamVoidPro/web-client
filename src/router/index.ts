import {createRouter, createWebHistory} from 'vue-router'
// @ts-ignore
import AuthLayout from '../layouts/AuthLayout.vue'
// @ts-ignore
import Login from "../pages/Login.vue";
// @ts-ignore
import AdminDashboard from "../pages/administrator/AdminDashboard.vue";
// @ts-ignore
import OperatorDashboard from "../pages/operator/OperatorDashboard.vue";
// @ts-ignore
import OwnerDashboard from "../pages/parkOwner/OwnerDashboard.vue";
// @ts-ignore
import VerifierDashboard from "../pages/verifier/VerifierDashboard.vue";
// @ts-ignore
import Home from "../pages/Home.vue";
// @ts-ignore
import RegisterPage from "../pages/parkOwner/RegisterPage.vue";
// @ts-ignore
import Register from "../pages/Register.vue";
// @ts-ignore
import OperatorLayout from "../layouts/OperatorLayout.vue";
import OperatorPayments from "../pages/operator/OperatorPayments.vue";
import OperatorReservations from "../pages/operator/OperatorReservations.vue";
import OperatorCustomerServices from "../pages/operator/OperatorCustomerServices.vue";
import OperatorAnalytics from "@pages/operator/OperatorAnalytics.vue";
import OperatorParkingSlot from "@pages/operator/OperatorParkingSlot.vue";
import AdminEmployees from "@pages/administrator/AdminEmployees.vue";
import OperatorSettings from "../pages/operator/OperatorSettings.vue";
import EmployeeLogin from "../pages/EmployeeLogin.vue";
import VerifyAccount from "@pages/VerifyAccount.vue";
import ResetPassword from "@pages/ResetPassword.vue";
import AdminAnalytics from "@pages/administrator/AdminAnalytics.vue";
import AdminFeedbacksAndRatings from "@pages/administrator/AdminFeedbacksAndRatings.vue";
import AdminParkMonitoring from "@pages/administrator/AdminParkMonitoring.vue";
import AdminPendingParkingPlaces from "@pages/administrator/AdminPendingParkingPlaces.vue";
import PendingParkingPlaceInfo from "@pages/administrator/PendingParkingPlaceInfo.vue";

import AdminParkingPlaces from "@pages/administrator/AdminParkingPlaces.vue";

import ParkingPlaceInfo from "@pages/administrator/ParkingPlaceInfo.vue";


// @ts-ignore
import FeedbacksRatings from "../pages/parkOwner/FeedbacksRatings.vue";

import ManageParkingPlace from "@pages/parkOwner/ManageParkingPlace.vue";
//@ts-ignore
import OwnerSettings from "@pages/parkOwner/OwnerSettings.vue";
//@ts-ignore
import OwnerAnalytics from "@pages/parkOwner/OwnerAnalytics.vue";
//@ts-ignore
import OwnerPayments from "@pages/parkOwner/OwnerPayments.vue";
// @ts-ignore
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => Home
    },
    
    {

        path: '/auth',
        name: 'Auth',
        children: [
            {
                path: '/login',
                name: 'Login',
                component: () => Login
            },
            {
                path: '/register',
                name: 'Register',
                component: () => Register
            },
            {
                path: '/employee-login',
                name: 'EmployeeLogin',
                component: () => EmployeeLogin
            },
            {
                path: '/verify-account/:id',
                name: 'VerifyAccount',
                component: () => VerifyAccount,
                props: true
            },
            {
                path: '/reset-password',
                name: 'ResetPassword',
                component: () => ResetPassword
            }

        ]
    },
    {
        path: '/operator-layout',
        name: 'OperatorLayout',
        meta: { requiresAuth: true , role: 'Operator'},
        children: [
            {
                path: '/operator-dashboard',
                name: 'OperatorDashboard',
                component: () => OperatorDashboard
            },
            {
                path: '/operator-payments',
                name: 'OperatorPayments',
                component: () => OperatorPayments
            },
            {
                path: '/operator-reservations',
                name: 'OperatorReservations',
                component: () => OperatorReservations
            },
            {

                path: '/customer-service',
                name: 'CustomerServices',
                component: () => OperatorCustomerServices
            },
            {
                path: '/operator-analytics',
                name: 'OperatorAnalytics',
                component: () => OperatorAnalytics
            },
            {
                path: '/parking-slots',
                name: 'ParkingSlots',
                component: () => OperatorParkingSlot
            },
            {
                path: '/operator-settings',
                name: 'OperatorSettings',
                component: () => OperatorSettings

            }
        ]
    },
    {
        path: '/park-owner',
        name: 'Parking Owner',
        meta: { requiresAuth: true , role: 'Parking Owner'},
        children: [
            {
                path: 'register',
                name: 'RegisterPage',
                component: () => RegisterPage
            },
            {
                path: 'dashboard',
                name: 'OwnerDashboard',
                component: () => OwnerDashboard
            },
            {
                path: 'overview',
                name: 'OwnerOverview',
                component: () => OwnerDashboard

            },
            {
                path:'feedbacks',
                name:'OwnerFeedbacks',
                component:()=>FeedbacksRatings
            },
            {
                path:'manage-parking',
                name:'ManageParking',
                component:()=>ManageParkingPlace
            },
            {
                path:'settings',
                name:'OwnerSettings',
                component:()=>OwnerSettings
            },
            {
                path:'analytics',
                name:'OwnerAnalytics',
                component:()=>OwnerAnalytics
            },
            {
                path: 'payments',
                name: 'OwnerPayments',
                component: () => OwnerPayments
            }
            ]
    },
    {
        path: '/admin-layout',
        name: 'Administrator',
        meta: { requiresAuth: true , role: 'Administrator'},
        children: [
            {
                path: '/admin-dashboard',
                name: 'AdminDashboard',
                component: () => AdminDashboard
            },
            {
                path: '/employees',
                name: 'AdminEmployees',
                component: () => AdminEmployees
            },
            {
                path: '/admin-analytics',
                name: 'AdminAnalytics',
                component: () => AdminAnalytics
            },
            {
                path: '/admin-feedbacks-and-ratings',
                name: 'AdminFeedbacksAndRatings',
                component: () => AdminFeedbacksAndRatings
            },
            {
                path: '/admin-park-monitoring',
                name: 'AdminParkMonitoring',
                component: () => AdminParkMonitoring
            },
            {
                path: '/admin-pending-parks',
                name: 'AdminPendingParks',
                component: () => AdminPendingParkingPlaces
            },
            {

                path: '/parking-places',
                name: 'ParkingPlaces',
                component: () => AdminParkingPlaces
            },
            {
                path: '/parking-place-info',
                name: 'ParkingPlaceInfo',
                component: () => ParkingPlaceInfo
            },
            {
                path:'/pending-parking-place-info',
                name:'PendingParkingPlaceInfo',
                component: () => PendingParkingPlaceInfo

            }

        ]
    }
    ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// router.beforeEach((to, from, next) => {
//     const store = employeeStore();
//     from;
//     if(to.meta.requiresAuth && !store.user.token) {
//         next({name: 'EmployeeLogin'});
//     }else if(store.user.token && to.name === 'EmployeeLogin' && store.user.data.role === 'Administrator'){
//         next({name: 'AdminDashboard'});
//     }else if(store.user.token && to.name === 'EmployeeLogin' && store.user.data.role === 'Operator') {
//         next({name: 'OperatorDashboard'});
//     }else if(store.user.token && to.name === 'EmployeeLogin' && store.user.data.role === 'Verifier') {
//         next({name: 'VerifierDashboard'});
//     }else{
//         next();
//     }
// })

export default router
