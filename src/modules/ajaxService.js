const ajaxService = (term) =>{
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
   // const key = "1";
    return fetch(`${url}${term}`)
    .then(response => response.json())
}

export default ajaxService;