const selector = document.querySelector('.lang-switch');
const languages = ['ru', 'en'];

var currLang = languages.indexOf(document.body.lang);

selector.addEventListener('click', () => 
  {
    currLang = ++currLang % languages.length;
    document.body.lang = languages[currLang];
  }
)