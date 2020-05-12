import organicMarketPhoto from '../assets/images/projects/organic-food-market-project.png';
import portfolioGif from '../assets/gifs/projects/portfolio.gif';
import homePantryGif from '../assets/gifs/projects/home-pantry.gif';
import urlBuilderPhoto from '../assets/images/projects/url-builder.png';

const initialState = {
  projects: [
    {
      id: 1,
      image: portfolioGif,
      title: 'Portfolio',
      desc: `Portfolio oparte o interfejs Reactowy wraz z hookami oraz prostym storem w Reduxie.
      Dla podziału plików zastosowano Atomic Design, a warstwą graficzną projektu zajmuje się styled.components.
      ThemeProvider został wykorzystany do użycia trybu Dzień-Noc (zapisywany w localStorage), ContextAPI do przenoszenia funkcji między komponentami.`,
      stack: [
        'react',
        'redux',
        'contextAPI',
        'styled.components',
        'hooks',
        'Formik',
        'localStorage',
      ],
      github: 'https://github.com/Graffiss/portfolio',
      demo: 'https://a-bogdol.pl',
    },
    {
      id: 2,
      image: homePantryGif,
      title: 'Domowa spiżarnia',
      desc: `Projekt domowej spiżarni jest oparty o design w Material.UI. Spiżarnia pozwala sprawdzić stan
      produktów dostępnych w domu, a wszelkie aktualizacje zapisują się w localStorage. Zakładka "Lista zakupów"
      aktualizuje się automatycznie, gdy ilość produktów równa jest minimalnej ilości, jaką ustawiliśmy.`,
      stack: ['react', 'redux', 'material.ui', 'localStorage'],
      github: 'https://github.com/Graffiss/home-pantry',
      demo: 'https://home-pantry.netlify.app/',
    },
    {
      id: 3,
      image: urlBuilderPhoto,
      title: 'URL Builder',
      desc: `Projekt kreatora linków na potrzeby działu marketingu w firmie X-Trade Brokers. Oparty na znanym narzędziu od Google, z tą różnicą, że wymusza wybranie odgónie ustalonych wartości
      w pozycjach: utm_source oraz utm_medium`,
      stack: ['react', 'styled.components'],
      github: 'https://github.com/Graffiss/utm-builder',
      demo: 'https://xtb-utm-builder.netlify.app/',
    },
    {
      id: 4,
      image: organicMarketPhoto,
      title: 'Organic Food Market',
      desc: `Sklep ecommerce ze zdrową żywnością. Logowanie do inwentarza dzięki autoryzacji w Firebase. W planach jest dodanie bloga opartego o Gatsby oraz przeniesienie całego stanu do Reduxa`,
      stack: ['react', 'redux', 'gatsby', 'graphql'],
      github: 'https://github.com/Graffiss/organic-food-market',
      demo: 'https://organic-food-market.netlify.app/',
    },
  ],
};

const rootReducer = (state = initialState) => {
  return state;
};

export default rootReducer;
