import React, { useEffect, useState } from 'react';
import MealCard from "./MealCard";


const Display = ({ searchInput }) => {
  const [meal, setMeal] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMeal(data.meals || []); // Ensure meals is an array or default to empty array
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      }
    }

    fetchData();
  }, [searchInput]);

  if (loading) {
    return <p className='text-center font-sans text-3xl mt-2'>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (meal.length === 0) {
    return <p className='text-center font-sans text-3xl mt-2'>No recipes found for '{searchInput}'</p>;
  }

  return (
    <div className='mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
      {meal.map((meal) => (
        <MealCard
          key={meal.idMeal}
          id={meal.idMeal}
          thumb={meal.strMealThumb}
          name={meal.strMeal}
        />
      ))}
    </div>
  );
};

export default Display;
