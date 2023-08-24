import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    searchText: "",
    loading :true,
    cards:[],
    pagesInfo:{},
        
    })


/*export function filterCharacters() {
    store.cards = [];
  
    fetchCharacters(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php??name=${store.searchText.toLowerCase()}`
    );
  }
      */



export function cardPicker(nextUrl){

    const url = nextUrl ? nextUrl : "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0"

    axios.get(url).then((response) => {
        debugger
        store.cards.push(...response.data);
       /* store.pagesInfo = response.data.info;*/
        
    })

}