<script>
import { store, archetypePicker,cardPicker,archetypeSelect } from "../store.js"
 

export default {
    data() {
        return {
            store
        };
    },
    methods: {
        archetypePicker,
        cardPicker,
        archetypeSelect,
        
    },
    mounted() {
        archetypePicker()

    },
};
</script>

<template>
    <form @submit.prevent="archetypeSelect">
        <label for="Arch_list"> Choose Your Archetype </label>
        
        <select id="Arch_list" v-model="store.selectedArchetype" > <!-- //////////////////selezione archetipo////////////////// -->
            <option :value="archetype.archetype_name"
                    v-for="archetype in store.Archetypes">
                    
                    {{ archetype.archetype_name }}
                    
            </option>

        </select>
        <input type="submit" @click="[cardPicker(), store.CurrentPage=1]">
    </form>
</template>

