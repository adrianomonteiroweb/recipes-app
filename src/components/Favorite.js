import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import heartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function Favorite({ id, strMainKey, getType }) {
  const [fav, setFav] = useState('');
  const [Icon, setIcon] = useState('');
  useEffect(() => {
    const favorite = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    console.log(favorite);
    const img = favorite.some((favo) => favo.id === id);
    setFav({ img });
  }, [id]);
  useEffect(() => {
    if (fav.img) {
      setIcon({ NewIcon: blackHeartIcon });
    } else {
      setIcon({ NewIcon: heartIcon });
    }
  }, [fav]);

  const controlFav = () => {
    const favorite = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    if (fav.img) {
      const removeFavorite = favorite.filter((item) => item.id !== id);
      localStorage.setItem('favoriteRecipes', JSON.stringify(removeFavorite));
      setFav({ img: false });
    } else {
      const types = strMainKey === 'Meal' ? 'comida' : 'bebida';
      const isArea = getType.strArea || '';
      const isAlcool = getType.strAlcoholic || '';
      const item = {
        id: getType[`id${strMainKey}`],
        type: types,
        area: isArea,
        category: getType.strCategory,
        alcoholicOrNot: isAlcool,
        name: getType[`str${strMainKey}`],
        image: getType[`str${strMainKey}Thumb`],
      }; // receber o item
      const adicionaFavorite = [...favorite, item];
      localStorage.setItem('favoriteRecipes', JSON.stringify(adicionaFavorite));
      setFav({ img: true });
    }
  };
  return (
    <button type="button" onClick={ controlFav } className="buttonClick">
      <img
        src={ Icon.NewIcon }
        alt="favorite"
        data-testid="favorite-btn"
        className="buttonImg"
      />
    </button>
  );
}
Favorite.propTypes = {
  id: PropTypes.string.isRequired,
  strMainKey: PropTypes.string.isRequired,
  getType: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Favorite;
