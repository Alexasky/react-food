import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeById } from '../api';
import { Preloader } from '../components/Preloader';
import { RecipeComponent } from '../components/RecipeComponent';

function Recipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        getRecipeById(id).then((data) => setRecipe(data.meals[0]));
    }, [id]);

    return !recipe.idMeal ? <Preloader /> : <RecipeComponent recipe={recipe} />;
}

export { Recipe };
