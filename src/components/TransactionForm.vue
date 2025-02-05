<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import DatePicker from 'primevue/datepicker';
import InputNumber from 'primevue/inputnumber';
import Select from 'primevue/select';
import { Button } from 'primevue';

const categories = ref([
    {
        name: 'Food',
        icon: 'pi pi-shopping-cart'
    },
    {
        name: 'Transport',
        icon: 'pi pi-car'
    },
    {
        name: 'Entertainment',
        icon: 'pi pi-gift'
    },
    {
        name: 'Health',
        icon: 'pi pi-heart'
    },
    {
        name: 'Education',
        icon: 'pi pi-book'
    },
    {
        name: 'Others',
        icon: 'pi pi-question-circle'
    }
])
</script>

<template>
<form class="flex flex-col gap-4 border-2 border-solid p-4 rounded-md bg-secondary">
    <h1>Form for tracking transactions</h1>

    <DatePicker name="date" placeholder="Date"/>
    <InputNumber name="amount" placeholder="Amount" />
    
    <Select name="category" placeholder="Category" :options="categories">
        <template #option="slotProps">
            <div class="flex gap-2 items-center">
                <i :class="slotProps.option.icon"></i>
                <span>{{ slotProps.option.name }}</span>
            </div>
        </template>
        <template #value="slotProps">
            <div v-if="slotProps.value" class="flex gap-2 items-center">
                <i :class="slotProps.value.icon"></i>
                <span>{{ slotProps.value.name }}</span>
            </div>
        </template>
    </Select>
    
    <InputText name="note" placeholder="Notes" type="text" />

    <Button label="Save" />
</form>
</template>