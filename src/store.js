import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    /*searchText: "",*/
    cards:[],
    Archetypes:[],
    selectedArchetype:"",
    pagesInfo: [], 
    CurrentPage:1,
    })



export function archetypePicker(){

    const url = "https://db.ygoprodeck.com/api/v7/archetypes.php"

    axios.get(url).then((response) => {

    store.Archetypes=(response.data);

    });
};

export function cardPicker(){
    
    let url=""
    
    if(store.selectedArchetype === "" || store.selectedArchetype === undefined ){
        url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0"
        } else
            {
            url =`https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${store.selectedArchetype}&num=20&offset=0`
             }
     

        axios.get(url).then((response) => {

            store.cards = (response.data.data);
            store.pagesInfo = (response.data.meta);


        
    });
};

export function archetypeSelect(){
    
    console.log(store.selectedArchetype)

}

export function logInfo(Nurl){
    console.log(store.pagesInfo)

        axios.get(Nurl).then((response) => {

        store.cards = (response.data.data);
        store.pagesInfo = (response.data.meta);
    })
    console.log(store.pagesInfo)
    
}
