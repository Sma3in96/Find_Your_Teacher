<template>
    <div class="container mx-auto mt-10 max-w-screen">
        <div class="bg-white rounded-lg shadow-lg p-8">
        <h1 class="text-2xl font-bold mb-4">Request Details</h1>
        <div class="mb-4">
            <p class="text-gray-600 mb-2"><strong>Student Name:</strong> {{ studentName }}</p>
            <p class="text-gray-600 mb-2"><strong>Subject:</strong> {{ subject }}</p>
            <p class="text-gray-600 mb-2"><strong>Date:</strong> {{ requestDate }}</p>
            <p class="text-gray-600 mb-2"><strong>Message:</strong></p>
            <p>{{ message }}</p>
        </div>
        <div class="flex justify-end">
            <button @click="acceptRequest" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4">Accept</button>
            <button @click="rejectRequest" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Reject</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        studentName: 'John Doe', // Student's name
        subject: 'Math', // Subject of the request
        requestDate: 'April 24, 2024', // Date of the request
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // Request message
    };
    },
methods: {
    acceptRequest() {
        // Logic to accept the request
        console.log('Request accepted');
    },
    rejectRequest() {
        // Logic to reject the request
        console.log('Request rejected');
    }
    }
};
</script>