const toggle = document.getElementById('toggle');

let printProfile = false;
toggle.style.display = 'none';

profile.addEventListener('click', (e) => {
    console.log('profile clicked');
    printProfile = !printProfile;
    if (printProfile) {
        //toggle.removeAttribute('hidden');
        toggle.style.display = 'block';
    } else {
        //toggle.setAttribute('hidden', 'hidden');
        toggle.style.display = 'none';
    }
});
