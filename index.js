 
 const apikey="47ACotIvEo6mJuBj21HbSgINPX288DyvXFZsydeZn48";

 const button=document.getElementById("btn")
 const SearchResults=document.querySelector(".search-results")
 const show=document.getElementById("show");
 let page=1;
 button.addEventListener("click",function(){
const inp=document.getElementById("inp").value;
if(inp.length>=3)
{
    get(inp);
}
 
 SearchResults.innerHTML=""
 
 })
 async function  get(query) {
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${apikey}`
console.log(query)
const response=await fetch(url)
const data=await response.json()
console.log(data)
const results=data.results
if(page === 1)
{
    SearchResults.innerHTML=""
}
results.map(result=>{

const imagewrapper=document.createElement('div')
imagewrapper.classList.add('search-result')
imagewrapper.classList.add('search-results')
 const img=document.createElement('img')
 img.src=result.urls.small
 img.alt=result.alt_description
const imagelink=document.createElement('a')
imagelink.href=result.links.html
imagelink.target="_blank"
 imagelink.textContent=result.alt_description
//  append image and link to wrapper
imagewrapper.appendChild(img);
imagewrapper.appendChild(imagelink);
  SearchResults.appendChild(imagewrapper)

});

page++;
if(page>1)
{
    show.style.display="block"
}
 
 }
 show.addEventListener("click",function(){
    // get(inp);
    const mad=inp.value;
  
     get(mad)


})


 