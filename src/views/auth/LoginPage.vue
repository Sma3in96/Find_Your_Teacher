<template>
    <div class="max-w-xl mx-auto ">
        <div class="text-center mb-8">
            <p class="text-lg text-teal-500 font-semibold mt-5">Welcome back! Please login to your account.</p>
        </div>
        <Form @submit="submitFunction" :validation-schema="schema" class="Form shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Email :</label>
                <Field type="email" name="email" id="email" placeholder="Enter your E-mail " class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <ErrorMessage name="email" class="text-xs text-red-500" />
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Password :</label>
                <Field type="password" name="password" id="password" placeholder="Enter your Password " class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <ErrorMessage name="password" class="text-xs text-red-500" />
            </div>

            <button type="submit" class="block mx-auto bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                SUBMIT
            </button>

            <div>
            <p class="text-sm text-gray-600 mt-2">U don't have an account?</p> 
            <button class=" mx-auto bg-inherit hover:bg-teal-700 text-black hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <router-link to="/auth/signup" >
                Sign Up 
            </router-link>
            </button>
            </div>
        </Form>
    </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { auth } from '@/firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import  router  from '@/router.js';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase.js';

const route = useRoute();


const store = useStore();

const schema = yup.object({
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().required("Password is required")
});

// Validate the forn after submit and signing the user
const submitFunction = async (values) => {
    try {
        await signInWithEmailAndPassword(auth, values.email, values.password)
        .then( async (userDetails) => {
            const userID = userDetails.user.uid;
            const user =  await getDoc(doc(db, 'users', userID))
            store.dispatch('setUser', user.data().userName);
            store.dispatch('setUserId', userID);
            store.dispatch('login');
            store.dispatch('setCoach', user.data().coach);
            const redirectRoute = route.query.redirect
            if (redirectRoute) {
                router.push(redirectRoute)
            } else {
                router.push('/home')
            }
        }).catch((err) => {
            alert(err)
        });

    } catch (e) { 
        alert("something went wrong")
    }
};


</script>

<style scoped>
    .Form {
    background-color: #eee;
    color: #000
}

</style>
