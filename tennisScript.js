//Button at the bottom of the page to get back to the top.
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

function changeTheme() {
  const toggleButton = document.querySelector('#themebutton');

  toggleButton.addEventListener('click', (e) => {

    const currentMode = document.body.dataset.mode;

    if(currentMode === 'light') {
      document.documentElement.style.setProperty('--bw', '#000000');
      document.documentElement.style.setProperty('--dark', '#62959c');
      document.documentElement.style.setProperty('--medium-dark', '#C19277');
      document.documentElement.style.setProperty('--lighter', '#C2B092');
      document.documentElement.style.setProperty('--bright', '#EAE3C8');
      document.documentElement.style.setProperty('--wb', '#ffffff');
      document.body.dataset.mode = 'dark';
      e.target.innerHTML = 'Light';
    }
    
    else if (currentMode === 'dark') {
    document.documentElement.style.setProperty('--bw', '#ffffff');
    document.documentElement.style.setProperty('--dark', '#EAE3C8');
    document.documentElement.style.setProperty('--medium-dark', '#C2B092');
    document.documentElement.style.setProperty('--lighter', '#C19277');
    document.documentElement.style.setProperty('--bright', '#62959c');
    document.documentElement.style.setProperty('--wb', '#000000');
    document.body.dataset.mode = 'light';
    e.target.innerHTML = 'Dark';
    }
  })
}