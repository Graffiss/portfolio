import organicMarketPhoto from '../assets/images/projects/organic-food-market-project.png';
import portfolioPhoto from '../assets/images/projects/portfolio-project.png';

const initialState = {
  projects: [
    {
      id: 1,
      image: organicMarketPhoto,
      title: 'Organic Food Market',
      desc: `Sklep ecommerce ze zdrową żywnością. 
        Logowanie do inwentarza dzięki autoryzacji w Firebase. 
        W planach jest dodanie bloga opartego o Gatsby oraz przeniesienie całego stanu 
        do Reduxa`,
      stack: ['react', 'redux', 'gatsby', 'graphql'],
      github: 'https://github.com/Graffiss/organic-food-market',
      demo: 'https://organic-food-market.netlify.app/',
    },
    {
      id: 2,
      image: portfolioPhoto,
      title: 'Portfolio',
      desc: `Portfolio oparte o interfejs Reactowy wraz z hookami oraz prostym storem w Reduxie.
      Dla podziału plików zastosowano Atomic Design, a warstwą graficzną projektu zajmuje się styled.components.
      ThemeProvider został wykorzystany do użycia trybu Dzień-Noc (zapisywany w localStorage), ContextAPI do przenoszenia funkcji między komponentami.`,
      stack: ['react', 'redux', 'firebase', 'styled.components'],
      github: 'https://github.com/Graffiss/portfolio',
      demo: 'https://a-bogdol.netlify.app',
    },
  ],
};

const rootReducer = (state = initialState) => {
  return state;
};

export default rootReducer;
