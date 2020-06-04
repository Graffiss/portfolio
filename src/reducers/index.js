// import organicMarketPhoto from '../assets/images/projects/organic-food-market-project.png';

import portfolioGif from '../assets/gifs/projects/portfolio.gif';
import homePantryGif from '../assets/gifs/projects/home-pantry.gif';
import hangmanGif from '../assets/gifs/projects/hangman-game.gif';
import wallpapersGif from '../assets/gifs/projects/mood-wallpapers.gif';

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
      image: hangmanGif,
      title: 'Hangman Game',
      desc: `Jedno ze starych zadań rekrutacyjnych w Netguru: gra w wisielca. Sterowanie za pomocą klawiatury.
      Baza słów do odgadnięcia zaczytywana jest z WordsAPI. Spróbuj odgadnąć miasto w Europie, zanim zawiśniesz na dobre!`,
      stack: ['react', 'styled.components', 'API', 'hooks'],
      github: 'https://github.com/Graffiss/hangman-game',
      demo: 'https://hangman-game-recruitment-task.netlify.app/',
    },
    {
      id: 3,
      image: wallpapersGif,
      title: 'Mood wallpapers',
      desc: `Aplikacja najpierw sprawdza Geolokalizację użytkownika, następnie odpytuje dwa kolejne API: DarkSky API w celu sprawdzenia pogody oraz
      Reverse Geolocation API w celu sprawdzenia miasta, w którym znajduje się użytkownik. Na podstawie tych dwóch API, odpytuje trzecie, Unsplash API w celu
      zaproponowania odpowiednich tapet. Wyszukiwarka w prawym górnym rogu pozwala również na wyszukiwanie po własnych hasłach`,
      stack: ['react', 'scss modules', 'API', 'hooks', 'contextAPI', 'geolocation'],
      github: 'https://github.com/Graffiss/mood-wallpapers',
      demo: 'https://mood-wallpapers.netlify.app/',
    },
    {
      id: 4,
      image: homePantryGif,
      title: 'Domowa spiżarnia',
      desc: `Projekt domowej spiżarni jest oparty o design w Material.UI. Spiżarnia pozwala sprawdzić stan
                          produktów dostępnych w domu, a wszelkie aktualizacje zapisują się w localStorage. Zakładka "Lista zakupów"
                          aktualizuje się automatycznie, gdy ilość produktów równa jest minimalnej ilości, jaką ustawiliśmy.`,
      stack: ['react', 'redux', 'material.ui', 'localStorage'],
      github: 'https://github.com/Graffiss/home-pantry',
      demo: 'https://home-pantry.netlify.app/',
    },
    /* {
      id: 4,
      image: organicMarketPhoto,
      title: 'Organic Food Market',
      desc: `Sklep ecommerce ze zdrową żywnością. Logowanie do inwentarza dzięki autoryzacji w Firebase. W planach jest dodanie bloga opartego o Gatsby oraz przeniesienie całego stanu do Reduxa`,
      stack: ['react', 'redux', 'gatsby', 'graphql'],
      github: 'https://github.com/Graffiss/organic-food-market',
      demo: 'https://organic-food-market.netlify.app/',
    }, */
  ],
};

const rootReducer = (state = initialState) => {
  return state;
};

export default rootReducer;
