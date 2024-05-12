<template>
    <div class="max-w-xl mx-auto">
        <div class="text-center mb-8">
            <p class="text-lg text-teal-500 font-semibold">Start your journey with us. Sign up now!</p>
            <p class="text-sm text-teal-800">please fill the form below and submit your informations</p>
        </div>
        
        <Form @submit="submitFunction" :validation-schema="schema" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Username :</label>
                <Field type="text" name="username" id="username" placeholder="Enter your username " class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <ErrorMessage name="userName" class="text-xs text-red-500" />
            </div>
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

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">password confirmation :</label>
                <Field type="password" name="passwordConfirmation" id="passwordConfirmation" placeholder="Re-Enter your Password  " class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <ErrorMessage name="passwordConfirmation" class="text-xs text-red-500" />
            </div>

            <button type="submit" class="block mx-auto bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                SUBMIT
            </button>

            <div>
            <p class="text-sm text-gray-600 mt-2">I already have an account</p> 
            <button class=" mx-auto bg-inherit hover:bg-teal-700 text-black hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <router-link to="/auth/login" >
                Log In 
            </router-link>
            </button>
            </div>
        </Form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { auth } from '@/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { db } from '@/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { useStore } from 'vuex';
import router from '@/router';


const store = useStore();

const schema = yup.object({
    username: yup.string().required("Username is required").min(3, "username must be at least 3 characters"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().required("Password is required").min(6, "Password must be at least 8 characters"),
    passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required("Password confirmation is required"),
});

const submitFunction = async (values) => {
    try {
        await createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((res) => {
            setDoc(doc(db, 'users', res.user.uid), {
            userName: values.username,
            coach: false
            })
            router.push('/auth/login')
        }).catch((err) => {console.log(err)});
        
    } catch (e) { 
        alert("something went wrong")
    }
    

};
</script>

<style scoped>
    form {
        background-color: #eee;
        color: #000
    }
</style>
