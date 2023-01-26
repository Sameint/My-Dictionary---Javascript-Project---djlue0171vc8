// {
//     "title": "Something Went Wrong",
//     "message": "Sorry pal, something went wrong, and its not your fault.",
//     "resolution": "You can try the search again at later time or head to the web instead."
//   }


const url='https://api.dictionaryapi.dev/api/v2/entries/en/hello';
const searchBtn=document.getElementById('search');
const historyBtn=document.getElementById('history');
const input=document.getElementById('search-bar');

async function searchInput(){
const data=await fetch(url).then((res) => res.json()).then((data) =>{
    console.log(data);
})
data()
}

function searchHistory(){

}
