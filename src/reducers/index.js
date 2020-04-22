import organicMarketPhoto from '../assets/images/projects/organic-food-market-project.png';
import portfolioPhoto from '../assets/images/projects/portfolio-project.png';

const initialState = {
  projects: [
    {
      id: 1,
      image: organicMarketPhoto,
      title: 'Organic Food Market',
      desc:
        'Sklep ecommerce z produktami organicznymi. Dodatkowo posiada blog oparty o Gatsby oraz autoryzację inwentarza dzięki Firebase',
      stack: ['react', 'redux', 'gatsby', 'graphql'],
      github: 'https://github.com/Graffiss/organic-food-market',
      demo: 'https://a-bogdol.netlify.app',
    },
    {
      id: 2,
      image: portfolioPhoto,
      title: 'Portfolio',
      desc:
        'Projekt przygotowany w ramach wyzwania organizowanego przez firmę Eduweb: React w 10 dni',
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
