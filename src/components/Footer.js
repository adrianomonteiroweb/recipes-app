import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import './footer.css';

function Footer() {
  return (
    <footer data-testid="footer">
      <Link to="/bebidas">
        <img src={ drinkIcon } alt="drink" data-testid="drinks-bottom-btn" />
      </Link>
      <Link to="/explorar">
        <img src={ exploreIcon } alt="explore" data-testid="explore-bottom-btn" />
      </Link>
      <Link
        to={ {
          pathname: '/comidas',
          state: '' } }
      >
        <img src={ mealIcon } alt="meal" data-testid="food-bottom-btn" />
      </Link>
    </footer>
  );
}
export default Footer;
