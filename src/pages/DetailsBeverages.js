import React from 'react';
import Share from '../components/Share';

function DetailsBeverages({ history: { location: { pathname } } }) {
  return (
    <>
      <h1>Beverages</h1>
      <Share rota={ pathname } />
    </>
  );
}
export default DetailsBeverages;
