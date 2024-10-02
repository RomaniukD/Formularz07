/*const openForm = document.getElementById('open_form');
const closeForm = document.getElementById('close_form');
const form = document.getElementById('form');

openForm.addEventListener('click', function(e) {
    e.preventDefault();
    form.classList.add('active');
});

closeForm.addEventListener('click', () => {
    form.classList.remove('active');
});
*/
const openForm = document.getElementById('open_form');
const closeForm = document.getElementById('close_form');
const form = document.getElementById('form');

openForm.addEventListener('click', function(e) {
    e.preventDefault();
    form.classList.add('active');
});

closeForm.addEventListener('click', () => {
    form.classList.remove('active');
});

// Optional: Close the form with the Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && form.classList.contains('active')) {
        form.classList.remove('active');
    }
});
