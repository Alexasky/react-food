import { useNavigate } from 'react-router-dom';
function RecipeComponent(props) {
    const {
        strMeal,
        strMealThumb,
        strInstructions,
        strArea,
        strCategory,
        strYoutube,
    } = props.recipe;
    const navigate = useNavigate();

    return (
        <>
            <div>
                <img src={strMealThumb} alt={strMeal} />
                <h3>{strMeal}</h3>
                <div>
                    {strArea && strArea.length > 0 ? (
                        <div>
                            <b>Cuisine:</b> {strArea}
                        </div>
                    ) : null}
                    {strCategory && strCategory.length > 0 ? (
                        <div>
                            <b>Category:</b> {strCategory} min
                        </div>
                    ) : null}
                </div>

                <p dangerouslySetInnerHTML={{ __html: strInstructions }} />

                <h4>Ingredients</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Amount</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Object.keys(props.recipe).map((key) => {
                            if (
                                key.includes('Ingredient') &&
                                props.recipe[key]
                            ) {
                                return (
                                    <tr key={key}>
                                        <td>{props.recipe[key]}</td>
                                        <td>
                                            {
                                                props.recipe[
                                                    `strMeasure${key.slice(13)}`
                                                ]
                                            }
                                        </td>
                                    </tr>
                                );
                            }
                            return null;
                        })}
                    </tbody>
                </table>
            </div>
            {strYoutube && strYoutube.length > 0 ? (
                <div className='row'>
                    <h4>Video recipe</h4>
                    <iframe
                        title={strMeal}
                        src={`https://www.youtube.com/embed/${strYoutube.slice(
                            -11
                        )}`}
                        allowfullscreen
                    />
                </div>
            ) : null}
            <button className='btn' onClick={() => navigate(-1)}>
                Go back
            </button>
        </>
    );
}

export { RecipeComponent };
