import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';


export const useNightMode = () => {
const [nightMode, setNightMode] = useState(false);
const toggleTheme = () => {
    if (nightMode === false) {
      window.localStorage.setItem('nightMode', true);
      setNightMode(true);
    } else {
      window.localStorage.setItem('nightMode', false)
      setNightMode(false);
    }
  };

  useEffect(()=> {
  window.localStorage.getItem('nightMode');


  }, []);

  return [nightMode, toggleTheme]

}

useNightMode.propTypes = {
    nightMode: PropTypes.bool.isRequired,
  };
