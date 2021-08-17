import classes from '../styles/ingredientList.module.css';
import List from "./list";

function IngredientList ({ ingredients, increase, reduce }) {
    return (
        <div className= {classes.container }>
            {
                Object.keys(ingredients).map((ing) => {
                    return <List
                        key = { ing }
                        increase = { increase }
                        reduce = { reduce }
                        number = { ingredients[ing] }
                        ingredient = { ing }
                        />
                })
            }
        </div>
    );
}

export default IngredientList