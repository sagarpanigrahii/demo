const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

const headingElement = document.getElementById('heading');
    const selectElement = document.getElementById('selectOptions');

    selectElement.addEventListener('change', function() {
      const selectedOption = this.value;
      headingElement.textContent = `Discover the best food & drinks in ${selectedOption}`;
    });
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});