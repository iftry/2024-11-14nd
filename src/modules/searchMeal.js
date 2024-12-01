import ajaxService from "./ajaxService";

const searchMeal = () => {
    document.querySelector('form').addEventListener('submit', (e)=>{
         e.preventDefault();
          let searchResponse;
         const searchTerm = document.querySelector('.term').value;
          ajaxService(searchTerm)
         .then(result => searchResponse = result)
         .then(()=>console.log(searchResponse))
    })

} 

export default searchMeal