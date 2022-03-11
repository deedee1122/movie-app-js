/*** ! The resource URL 👇👇👇
 * ? https://rapidapi.com/jakash1997/api/advanced-movie-search/
 */

 let Search_results = document.getElementById("results");

 /**
  *  ! This will fetch data from the API
  */
 
 let fetchData = async (e) => {
   console.log(e.value);
   await fetch(
     `https://advanced-movie-search.p.rapidapi.com/search/movie?query=${e.value}&page=1`,
     {
       method: "GET",
       headers: {
         "x-rapidapi-host": "advanced-movie-search.p.rapidapi.com",
         "x-rapidapi-key": "7b240733a0mshb8f437bfaae17b4p1e6216jsncd5439cd7585",
       },
     }
   )
     .then((response) => response.json())
     .then((response) => template(response))
     .catch((err) => console.error(err));
 };
 
 /**
  * ! This will work as a template to print results
  */
 
 let template = (e) => {
   let { page, results, total_pages, total_results } = e;
   console.log(e);
 
   if (results.length == 0) {
     Search_results.innerHTML =
       "<div class='text-center fs-5 fw-bold'> Search result not found </div>";
   } else {
     Search_results.innerHTML = `
       <div class="result-row">
       ${results
         .map((x, y) => {
           let { poster_path, title } = x;
           return `
           <div class="single-movie">
               <img class='img-fluid' src=${poster_path} alt="" />
               <div class="fw-bold fs-6 text-center">${title}</div>
           </div>`;
         })
         .join("")}
       </div>
     `;
   }
 };
 