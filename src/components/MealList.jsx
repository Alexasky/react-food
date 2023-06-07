import { Meal } from './Meal';
import { useNavigate } from 'react-router-dom';
function MealList({ meals }) {
    const navigate = useNavigate();
    return (
        <>
            <button className='btn' onClick={() => navigate(-1)}>
                Go back
            </button>
            <div className='list'>
                {meals.map((meal) => (
                    <Meal key={meal.idMeal} {...meal} />
                ))}
            </div>
        </>
    );
}

export { MealList };
