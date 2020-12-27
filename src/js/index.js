
import Search from "./model/search";

// import {add, multiply as mul} from "./view/searchView";

let search = new Search('pizza');

search.doSearch().then(r => console.log(r));
