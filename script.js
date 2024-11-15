document.getElementById("year").textContent = new Date().getFullYear();

let currentReview = 0;

function showReview(index) {
    const reviews = document.querySelectorAll('.review-card');
    reviews.forEach((review, i) => {
        review.classList.remove('active');
        review.style.opacity = '0';
        review.style.transform = 'translateX(100%)';
    });

    reviews[index].classList.add('active');
    reviews[index].style.opacity = '1';
    reviews[index].style.transform = 'translateX(0)';
}

function nextReview() {
    const reviews = document.querySelectorAll('.review-card');
    currentReview = (currentReview + 1) % reviews.length;
    showReview(currentReview);
}

function prevReview() {
    const reviews = document.querySelectorAll('.review-card');
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    showReview(currentReview);
}

// Initialize the first review
showReview(currentReview);




