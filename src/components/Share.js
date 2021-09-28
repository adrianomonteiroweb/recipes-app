import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import './favAndShare.css';

const copy = require('clipboard-copy');

function Share({ id, type }) {
  const [texto, setTexto] = useState(false);
  const shareItem = () => {
    copy(`http://localhost:3000/${type}/${id}`);
    setTexto(true);
    const TIMER = 500;
    setTimeout(() => {
      setTexto(false);
    }, TIMER);
  };
  return (
    <div>
      {texto && <p>Link copiado!</p>}
      <button type="button" onClick={ () => shareItem() } className="buttonClick">
        <img
          src={ shareIcon }
          alt="shareIcon"
          data-testid="share-btn"
          className="buttonImg"
        />
      </button>
    </div>
  );
}
Share.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default Share;
