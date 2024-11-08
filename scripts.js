// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent form submission
            alert("Form submitted successfully!");
        });
    });
});
