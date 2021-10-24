import portfolioGif from "../assets/gifs/projects/portfolio.gif"
import hangmanGif from "../assets/gifs/projects/hangman-game.gif"

const initialState = {
  projects: [
    {
      id: 1,
      image: portfolioGif,
      title: "Portfolio",
      desc: `Portfolio based on react with hooks and simple Redux store.
      The Atomic Design has been used for file storage, with styled-components as CSS-in-JS styling solution.
      ThemeProvider has been used for Day/Night modes (saved in localStorage) and ContextAPI for using functions between different components`,
      stack: [
        "react",
        "redux",
        "contextAPI",
        "styled.components",
        "hooks",
        "Formik",
        "localStorage",
      ],
      github: "https://github.com/Graffiss/portfolio",
      demo: "https://abogdol.pl",
    },
    {
      id: 2,
      image: hangmanGif,
      title: "Hangman Game",
      desc: `Classic hangman game. Keyboard controled. Desktop only.
      Words fetched through REST WordsAPI. Try to guess the city in Europe before you run out of letters!`,
      stack: ["react", "styled.components", "API", "hooks"],
      github: "https://github.com/Graffiss/hangman-game",
      demo: "https://hangman-game-recruitment-task.netlify.app/",
    },
  ],
}

const rootReducer = (state = initialState) => {
  return state
}

export default rootReducer
