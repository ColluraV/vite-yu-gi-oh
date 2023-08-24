import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    searchText: "",
    cards:[],
    
        
    })


/*export function filterCharacters() {
    store.cards = [];
  
    fetchCharacters(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php??name=${store.searchText.toLowerCase()}`
    );
  }
      */



export function cardPicker(){

    const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0"

    axios.get(url).then((response) => {

        store.cards=(response.data.data);
       /* store.pagesInfo = response.data.info;*/
        
    })

}