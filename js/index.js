/* 
    On hover on the img, see the eye centered and the color overlay

*/

const $imgHover = document.getElementById("img-hover");
console.log($imgHover);

$imgHover.addEventListener("mouseover", (e) => {
	console.log("mousenter");
});

const $card = document.getElementById('nft-card');

document.addEventListener('mouseenter', e => {
    if(e.target.matches('#nft-card')) {
        console.log('in the card');
    }
})