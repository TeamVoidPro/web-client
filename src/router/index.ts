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
import FeedbacksRatings from "../pages/parkOwner/FeedbacksRatings.vue";
import ManageParkingPlace from "@pages/parkOwner/ManageParkingPlace.vue";

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
                path: 'login',
                name: 'Login',
                component: () => Login
            },
            {
                path: '/register',
                name: 'Register',
                component: () => Register
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
            }
            ]
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
