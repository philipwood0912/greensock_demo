(() => {

	const box =document.querySelector('.box');

	function startAnimation() {
		TweenMax.to(box, 1.0, { x: 400, rotation: 180});
	}

	function endAnimation() {
		TweenMax.to(box, 1.0, { x: 0, rotation: 0 });
	}


	//TweenMax.to(el, time, {properties});
	box.addEventListener("mouseover", startAnimation);
	box.addEventListener("mouseout", endAnimation);

})();