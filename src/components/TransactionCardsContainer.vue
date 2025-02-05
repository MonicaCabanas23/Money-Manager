<script setup>
import { ref } from 'vue';
import Select from 'primevue/select';
import { Button } from 'primevue';
import DatePicker from 'primevue/datepicker';

const props = defineProps({
    transactions: {type: Array, required: true}
})

const periodOptions = ref([
    {label: 'Day', value: 'day'},
    {label: 'Week', value: 'week'},
    {label: 'Month', value: 'month'},
    {label: 'Year', value: 'year'}
])

const formatDate = (date) => {
    return date.toLocaleDateString()
}

const getColor = (transaction) => {
    return transaction.type === 'expense' ? 'red' : 'green'
}
</script>

<template>
<div class="flex flex-col items-center gap-2 border-2 border-solid p-4 rounded-md">
    <div class="w-full flex gap-2 items-center">
        <Button size="small" severity="secondary"><i class="pi pi-chevron-left text-xs"></i></Button>
        <DatePicker placeholder="Select a date" size="small" class="w-48"/>
        <Button size="small" severity="secondary"><i class="pi pi-chevron-right text-xs"></i></Button>
        <Select :options="periodOptions" optionLabel="label" placeholder="Select a period" size="small" class="w-60"/>
    </div>
   
    <div v-for="transaction in transactions" :key="transaction.id" :class="`w-full p-4 rounded-md relative text-slate-800 bg-${getColor(transaction)}-100`">
        <div :class="`h-full w-1 top-0 left-0 rounded-s-md absolute bg-${getColor(transaction)}-500`"></div>
        <div class="flex justify-between items-center">
            <div class="flex gap-2 items-center">
                <i :class="transaction.category.icon"></i>
                <span>{{ transaction.category.name }}</span>
            </div>
            <p v-if="transaction.type === 'expense'" class="font-bold text-red-500">${{ transaction.amount }}</p>
            <p v-if="transaction.type === 'income'" class="font-bold text-green-500">${{ transaction.amount }}</p>
        </div>
        <p class="text-sm">{{ formatDate(transaction.date) }}</p>
        <p>{{ transaction.note }}</p>
    </div>

</div>
</template>