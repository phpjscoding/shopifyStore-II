const toggleSearch = document.querySelector('#toggle-search');
const search = document.querySelector('.h-search-area');
const nav  = document.querySelector('.nav');

console.log(nav)

toggleSearch.addEventListener('click',function(){
 search.classList.toggle('show')

})
document.querySelector('.close-search').onclick = ()=>{
	search.classList.remove('show')
}
document.querySelector('.nav-toggler').onclick= function(){
   nav.classList.toggle('mobile')
} 