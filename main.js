const root = document.documentElement;
const themeName =document.querySelector('.theme-name');
const button = document.querySelector('.theme-toggle')
let newTheme;


function setTheme() {
    
    if (root.className === 'dark'){
            newTheme = 'light';
        }else{
            newTheme = 'dark';
        }
    root.className = newTheme;
    
    themeName.textContent = newTheme;
  }
  
  button.addEventListener('click', setTheme)