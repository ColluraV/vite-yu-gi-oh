<script>
import { store, archetypePicker } from "../store.js"

export default {
    data() {
        return {
            store
        };
    },
    methods: {
        archetypePicker
    },
    mounted() {
        archetypePicker()

    },
};
</script>

<template>
    <form @submit="">
        <label for="Arch_list"> Choose Your Archetype </label>
        
        <select id="Arch_list"> <!-- //////////////////selezione archetipo////////////////// -->
            <option :value="archetype.archetype_name"
                    v-for="archetype in store.Archetypes">
                    
                    {{ archetype.archetype_name }}
                    
            </option>

        </select>
        <input type="submit">
    </form>
</template>

