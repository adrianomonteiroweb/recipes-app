import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StartButton = ({ id, type, getType }) => {
  const inProgressKey = (type === 'comidas') ? 'meals' : 'cocktails';
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

  const [startBtn, setStartBtn] = useState();

  useEffect(() => {
    setStartBtn(!!inProgressRecipes[inProgressKey][id]);
  }, []);

  const recipeDone = doneRecipes && doneRecipes.some((recipe) => id === recipe.id);
  return (
    <Link
      to={ {
        pathname: `/${type}/${id}/in-progress`,
        state: { getType },
      } }
    >
      <button
        type="button"
        className="fixed-bottom start-btn"
        hidden={ recipeDone }
        data-testid="start-recipe-btn"
      >
        {startBtn ? 'Continuar Receita' : 'Iniciar receita'}
      </button>
    </Link>
  );
};

StartButton.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  getType: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default StartButton;
