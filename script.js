const navToggler =document.queryselector(".nav-toggler");
navToggler.addEventListener("click", navToggler);
function navToggle(){
	console.log("Hi");
	navToggler.classList.toggle("active");
	const nav = document.queryselector(".nav");
	nav.classList.toggle("open");
	if(nav.classList.contains("open")){
		nav.style.maxHeight=nav.scrollHeight + "px";
	}
	else{
		nav.removeAttribute("style");
	}
}
