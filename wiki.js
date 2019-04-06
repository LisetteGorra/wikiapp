const loading = document.querySelector(".loading");
const searchForm = document.querySelector(".searchForm");
const output = document.querySelector(".output");
const search = document.querySelector(".search");
const feedback = document.querySelector(".feedback");

const base = 'http://en.wikipedia.org/w/api.php';
const url = '?action=query&format=json&origin=*&prop=&list=search&srsearch=';

searchForm.addEventListener('submit', function(e){
   event.preventDefault();
   
   const value = search.value;
   
   if(value.legnth == ""){
       showFeedback('please enter a valid search value')
   }
   else{
       search.value =="";
   //ajax
     ajaxWiki(value);  
   }
   
});

// show feedback
function showFeedback(text){
    feedback.classList.add('showItem');
    feedback.innerHTML =`<p>${text}</p>`;
    
    setTimeout(()=>feedback.classList.remove('showItem'), 3000);
}
//ajax wiki

function ajaxWiki(search){
    output.innerHTML = "";
    loading.classList.add('showItem');
    
    const wikiUrl = `${base}${url}${search}`;
    
    fetch(wikiUrl).then(data => data.json()).then(data => console.log(data))
}