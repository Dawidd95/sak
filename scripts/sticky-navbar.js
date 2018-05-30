function init() {
	let navbar = document.querySelector(".navbar");
	let navbarPosition = navbar.offsetTop;
	let offerPosition = document.querySelector(".offer").offsetTop;
	let windowPosition = window.pageYOffset;
	let theScroll = window.pageYOffset;

	function navbarColor() {
		//alert(theScroll);
		//alert(offerPosition);
		if (theScroll >= offerPosition) {
			//navbar.style.backgroundColor = "red";
			navbar.classList.add(".sticky");
		}
		else {
			//navbar.style.backgroundColor = "yellow";
			navbar.classList.remove(".sticky");
		}
	}

	window.addEventListener("scroll", navbarColor)
}

document.addEventListener("DOMContentLoaded", init);