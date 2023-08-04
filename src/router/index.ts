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
// @ts-ignore
import OperatorPayments from "../pages/operator/OperatorPayments.vue";
// @ts-ignore
import OperatorReservations from "../pages/operator/OperatorReservations.vue";
// @ts-ignore
import OperatorCustomerServices from "../pages/operator/OperatorCustomerServices.vue";

import OperatorAnalytics from "@pages/operator/OperatorAnalytics.vue";

import OperatorParkingSlot from "@pages/operator/OperatorParkingSlot.vue";

import AdminEmployees from "@pages/administrator/AdminEmployees.vue";

import OperatorSettings from "../pages/operator/OperatorSettings.vue";
// @ts-ignore
import EmployeeLogin from "../pages/EmployeeLogin.vue";

// @ts-ignore
import FeedbacksRatings from "../pages/parkOwner/FeedbacksRatings.vue";

import ManageParkingPlace from "@pages/parkOwner/ManageParkingPlace.vue";
//@ts-ignore
import OwnerSettings from "@pages/parkOwner/OwnerSettings.vue";

//@ts-ignore
import OwnerAnalytics from "@pages/parkOwner/OwnerAnalytics.vue";

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
        component: () => AuthLayout,
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
            }

        ]
    },
    {
        path: '/operator-layout',
        name: 'OperatorLayout',
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
            }
            ]
    },
    {
        path: '/admin-layout',
        name: 'Administrator',
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
            }
        ]
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
