<script setup>
import { ref } from 'vue';
import TransactionCardsContainer from '../components/TransactionCardsContainer.vue';
import TransactionForm from '../components/TransactionForm.vue';

const transactions = ref([
    {
        id: 1,
        type: 'expense',
        date: new Date(),
        amount: 100,
        category: {
            name: 'Food',
            icon: 'pi pi-shopping-cart'
        },
        note: 'Lunch'
    },
    {
        id: 2,
        type: 'expense',
        date: new Date(),
        amount: 200,
        category: {
            name: 'Transport',
            icon: 'pi pi-car'
        },
        note: 'Bus'
    },
    {
        id: 3,
        type: 'income',
        date: new Date(),
        amount: 300,
        category: {
            name: 'Salary',
            icon: 'pi pi-money-bill'
        },
        note: 'Dinner'
    }
])
</script>

<template>
    <div class="w-screen h-full p-4 grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <TransactionCardsContainer :transactions="transactions"/>        
        <TransactionForm />
    </div>
</template>