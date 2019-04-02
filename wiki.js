const form = document.querySelector('.searchForm');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // prevent page from reloading when form is submitted
  event.preventDefault();
  
  const input = document.querySelector('.searchForm-input').value;
  
  const searchQuery = input.trim();
 fetchResults(searchQuery);

}

function fetchResults(searchQuery) {
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
  console.log(endpoint);
}












// function wikibutton(){
// var url = 'https://www.wikipedia.org/';
// var data = {username: 'example'};

// fetch(url, {
//   method: 'POST', // or 'PUT'
//   body: JSON.stringify(data), // data can be `string` or {object}!
//   headers:{
//     'Content-Type': 'application/json'
//   }
// }).then(res => res.json())
// .then(response => console.log('Success:', JSON.stringify(response)))
// .catch(error => console.error('Error:', error));
// }