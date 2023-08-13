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
import {employeeStore} from "../store/employeeStore.ts";
import VerifyAccount from "@pages/VerifyAccount.vue";
import ResetPassword from "@pages/ResetPassword.vue";

import AdminParkingPlaces from "@pages/administrator/AdminParkingPlaces.vue";

import ParkingPlaceInfo from "@pages/administrator/ParkingPlaceInfo.vue";


// @ts-ignore
import VerifierLegal from "../pages/verifier/VerifierLegal.vue";
// @ts-ignore
import VerifierOnsite from "../pages/verifier/VerifierOnsite.vue";
// @ts-ignore
import VerifierInspection from "../pages/verifier/VerifierInspection.vue";
// @ts-ignore
import VerifierHistory from "../pages/verifier/VerifierHistory.vue";
// @ts-ignore
import SurveyPhysical from "../pages/verifier/SurveyPhysical.vue";
// @ts-ignore
import SurveyLegal from "../pages/verifier/SurveyLegal.vue";
// @ts-ignore
import SurveyGeneral from "../pages/verifier/SurveyGeneral.vue";
// @ts-ignore
import VerifierInspection1 from "../pages/verifier/VerifierInspection1.vue";
// @ts-ignore
import VerifierInspection2 from "../pages/verifier/VerifierInspection2.vue";


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
                path: '/parking-places',
                name: 'ParkingPlaces',
                component: () => AdminParkingPlaces
            },
            {
                path: '/parking-place-info',
                name: 'ParkingPlaceInfo',
                component: () => ParkingPlaceInfo
            }
        ]
    },
    {
        path: '/verifier',
        name: 'verifier',
        children: [
            {
                path: 'legal',
                name: 'VerifierLegal',
                component: () => VerifierLegal
            },
            {
                path: 'onsite',
                name: 'VerifierOnsite',
                component: () => VerifierOnsite
            },
            {
                path: 'inspection',
                name: 'VerifierInspection',
                component: () => VerifierInspection

            },
            {
                path: 'history',
                name: 'VerifierHistory',
                component: () => VerifierHistory

            },
            {
                path: 'SurveyPhysical',
                name: 'SurveyPhysical',
                component: () => SurveyPhysical

            },
            {
                path: 'SurveyLegal',
                name: 'SurveyLegal',
                component: () => SurveyLegal

            },
            {
                path: 'SurveyGeneral',
                name: 'SurveyGeneral',
                component: () => SurveyGeneral

            },
            {
                path: 'VerifierInspection1',
                name: 'VerifierInspection1',
                component: () => VerifierInspection1

            },
            {
                path: 'VerifierInspection2',
                name: 'VerifierInspection2',
                component: () => VerifierInspection2

            }
            ]
    }
    ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const store = employeeStore();
    from;
    if(to.meta.requiresAuth && !store.user.token) {
        next({name: 'EmployeeLogin'});
    }else if(store.user.token && to.name === 'EmployeeLogin' && store.user.data.role === 'Administrator'){
        next({name: 'AdminDashboard'});
    }else if(store.user.token && to.name === 'EmployeeLogin' && store.user.data.role === 'Operator') {
        next({name: 'OperatorDashboard'});
    }else if(store.user.token && to.name === 'EmployeeLogin' && store.user.data.role === 'Verifier') {
        next({name: 'VerifierDashboard'});
    }else{
        next();
    }
})

export default router
