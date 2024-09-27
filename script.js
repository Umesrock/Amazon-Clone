const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;  // Keeps track of the current image index

// Function to update the visible slide
function changeSlide() {
   imgs.forEach((img, i) => {
       img.classList.remove('active');  // Remove 'active' class from all images
   });
   imgs[n].classList.add('active');  // Add 'active' class to the current image
}
changeSlide();  // Initial call to show the first image

// Event listener for previous button
prev_btn.addEventListener('click', () => {
    n = (n > 0) ? n - 1 : imgs.length - 1;  // Decrease the index, or loop to the last image
    changeSlide();  // Update the slide
});

// Event listener for next button
next_btn.addEventListener('click', () => {
    n = (n < imgs.length - 1) ? n + 1 : 0;  // Increase the index, or loop to the first image
    changeSlide();  // Update the slide
});



const scrollContainer = document.querySelectorAll('.products');
for (const item of scrollContainer){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollleft += evt.deltaY;
    })
} 


