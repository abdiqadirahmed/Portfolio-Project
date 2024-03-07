// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        
        // Remove active class from all filter items and add it to the clicked one
        $(".filter-item").removeClass("active-filter");
        $(this).addClass("active-filter");
        
        if (value == "all") {
            // If "all" is clicked, show all post boxes
            $(".post-box").show(1000);
        } else {
            // Hide post boxes that don't have the selected class
            $(".post-box").not("." + value).hide(1000);
            // Show post boxes that have the selected class
            $(".post-box." + value).show(1000);
        }
    });
});




// Remove Form text after submission

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Clear input field
        const name = document.getElementById('name');
        name.value = '';

        const email = document.getElementById('email');
        email.value = '';

        const message = document.getElementById('message');
        message.value = '';

        // Alternatively, you can reset the form
        // form.reset();
    });
});

// Alert Of Message sent 

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const successButton = document.getElementById('successButton');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Clear input field
        const name = document.getElementById('name');
        name.value = '';

        const email = document.getElementById('email');
        email.value = '';

        const message = document.getElementById('message');
        message.value = '';

        // Show success message
        successMessage.style.display = 'block';

        // Optionally, hide success message after a certain time
        setTimeout(function () {
            successMessage.style.display = 'none';
        }, 5000); // Hide after 5 seconds
    });
});



