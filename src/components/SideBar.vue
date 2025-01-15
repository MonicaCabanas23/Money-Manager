<script setup>
import { ref } from 'vue';
import Panel from './Panel.vue';

const items = ref([
    {
        label: 'Mail',
        icon: 'pi pi-envelope',
        badge: 5,
        items: [
            {
                label: 'Compose',
                icon: 'pi pi-file-edit',
                shortcut: '⌘+N'
            },
            {
                label: 'Inbox',
                icon: 'pi pi-inbox',
                badge: 5
            },
            {
                label: 'Sent',
                icon: 'pi pi-send',
                shortcut: '⌘+S'
            },
            {
                label: 'Trash',
                icon: 'pi pi-trash',
                shortcut: '⌘+T', 
            }
        ]
    },
    {
        label: 'Reports',
        icon: 'pi pi-chart-bar',
        shortcut: '⌘+R',
        items: [
            {
                label: 'Sales',
                icon: 'pi pi-chart-line',
                badge: 3
            },
            {
                label: 'Products',
                icon: 'pi pi-list',
                badge: 6
            }
        ]
    },
    {
        label: 'Profile',
        icon: 'pi pi-user',
        shortcut: '⌘+W',
        items: [
            {
                label: 'Settings',
                icon: 'pi pi-cog',
                shortcut: '⌘+O'
            },
            {
                label: 'Privacy',
                icon: 'pi pi-shield',
                shortcut: '⌘+P'
            }
        ]
    }
]);
</script>

<template>
    <aside class="w-72 h-screen bg-delft-blue text-white pr-4 pl-4 pt-8 fixed top-0 right-0 z-40 flex flex-col gap-3">
        <!-- User info -->
        <div class="flex flex-col items-center gap-2">
            <figure class="w-12 h-12 rounded-full bg-dark-oxford-blue flex items-center justify-center">
                <i class="pi pi-user"></i>
            </figure>
            <span class="text-xs">Mónica Cabañas</span>
        </div>
        <!-- Panel -->
        <Panel :items="items"/>
    </aside>
</template>