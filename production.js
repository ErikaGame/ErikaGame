function shimmerButton() {
    // You can add additional functionality here if needed
    console.log("Button clicked!");
}
function slideOut() {
    const slideText = document.getElementById('slideText');
    slideText.classList.toggle('hidden');
    slideText.style.height = slideText.classList.contains('hidden') ? '0' : '100px';
}
