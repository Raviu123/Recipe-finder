import React from 'react';

const MealCard = ({ id, thumb, name }) => {
  return (
    <div className='flex-col m-5 rounded-2xl shadow-md w-56 justify-center item-center text-center'>
      <img className='w-56 rounded-2xl' src={thumb} alt={`Image of ${name}`} />
      <h2 className='pt-5 pb-4'><b>{name}</b></h2>
    </div>
  );
};

export default MealCard;
