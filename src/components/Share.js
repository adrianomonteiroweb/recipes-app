import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import './favAndShare.css';

const copy = require('clipboard-copy');

function Share({ id, type, index }) {
  const [texto, setTexto] = useState(false);
  const shareItem = () => {
    const URL = window.location.origin;
    copy(`${URL}/${type}/${id}`);
    setTexto(true);
    const TIMER = 500;
    setTimeout(() => {
      setTexto(false);
    }, TIMER);
  };
  const [teste, setTest] = useState({
    id: 'share-btn',
  });
  useEffect(() => {
    if (index !== undefined) {
      setTest({ id: `${index}-horizontal-share-btn` });
    }
  }, [index]);
  return (
    <div>
      {texto && <p>Link copiado!</p>}
      <button type="button" onClick={ () => shareItem() } className="buttonClick">
        <img
          src={ shareIcon }
          alt="shareIcon"
          data-testid={ teste.id }
          className="buttonImg"
        />
      </button>
    </div>
  );
}
Share.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number,
};
Share.defaultProps = {
  index: undefined,
};
export default Share;
