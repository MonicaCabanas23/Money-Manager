<script setup>
import Sidebar from './Sidebar.vue'
import { ref, computed } from 'vue'

const menu_checkbox = ref(null)
const show_menu = ref(false)

const opacity_class = computed (() => {
    return show_menu.value ? 'opacity-100' : 'opacity-0'
})

const handleToggle = () => {
    menu_checkbox.value.checked = !menu_checkbox.value.checked
    show_menu.value = menu_checkbox.value.checked
}
</script>

<template>
    <header class="w-screen bg-white fixed top-0 left-0 z-50">
        <div class="w-full h-16 shadow-md p-4 flex justify-between items-center">
            <h1>Money Manager</h1>
        </div>

        <div class="menu-toggle-wrapper w-10 h-10 block z-50" @click="handleToggle">
            <input ref="menu_checkbox" type="checkbox" id="menu-toggle">
            <label for="menu-toggle"></label>
        </div>

        <Sidebar class="opacity-0 transition-all duration-500" :class="opacity_class"/>
    </header>
</template>

<style scoped lang="scss">
    .menu-toggle-wrapper {
        position: fixed;
        top: 0.7rem;
        right: 0.8rem;
        cursor: pointer;
    }

    #menu-toggle {
        display: none;

        + label {
            cursor: pointer;
            position: absolute;
            top: 1.2rem;
            right: 0.5rem;
            background-color: var(--bg-gray-800);
            width: 1.5rem;
            height: 0.1rem;

            &::before, 
            &::after {
                content: '';
                position:absolute;
                display: block;
                background-color: var(--bg-gray-800);
                width: 1.5rem;
                height: 0.1rem;
                transition: all 0.4s var(--animation-curve);
            }

            &::before {
                top: 0.5rem;
            }

            &::after {
                top: -0.5rem;
            }
        }  
        
        &:checked + label {
            background-color: transparent;

            &::before {
                background-color: var(--text-white);
                transform: rotate(45deg);
                top: 0;
            }

            &::after {
                background-color: var(--text-white);
                transform: rotate(-45deg);
                top: 0;
            }
        }
    }
</style>