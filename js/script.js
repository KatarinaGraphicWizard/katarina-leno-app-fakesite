document.addEventListener('DOMContentLoaded', function () {
    // Toggle Button
    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
    // Div that wraps the items
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');
    toggleButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });
    // Video Modal
    const modal = document.getElementById('video-modal');
    const videoButton = document.querySelector('.preview__video-btn');
    const closeButton = document.querySelector('.modal__close-btn');
    const videoPlayer = document.getElementById('videoplayer')
    // Open modal when clicked
    videoButton.addEventListener('click', function () {
        // Show modal
        modal.style.display = 'block';
        // Replace src attribute with video url
        videoPlayer.src = 'https://katarinabdesign.com/';
        // Close modal
        closeButton.addEventListener('click', function () {
            modal.style.display = 'none';
            videoPlayer.src = '';
        })
        // Close modal on outer click
        window.addEventListener('click', function () {
            if (event.target == modal) {
                modal.style.display = 'none';
                videoPlayer.src = '';
            }
        })
    })

});
window.addEventListener('scroll', function () {
    const navbar = this.document.querySelector('.navbar');

    if (window.scrollY > 0) {
        navbar.classList.add('navbar--scroll');

    } else {
        navbar.classList.remove('navbar--scroll');
    }
});
