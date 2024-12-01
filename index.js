document.getElementById('toggleLinks').addEventListener('click', function () {
    const hiddenSections = document.querySelectorAll('.showLinks');
    const button = this;

    const areHidden = Array.from(hiddenSections).every(
        (section) => section.style.display === 'none' || section.style.display === ''
    );

    hiddenSections.forEach((section) => {
        section.style.display = areHidden ? 'block' : 'none';
    });

    button.textContent = areHidden ? 'Show Less' : 'Show More';
});
