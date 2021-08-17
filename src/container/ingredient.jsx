import { useReducer } from 'react';
import { useHistory  } from 'react-router';

import IngredientList from "../component/ingredientList";
import Layout from "../component/layout";
import classes from '../styles/ingredient.module.css'
import IngredientContext from '../contexts/ingredientContext';

const ingred = {
    // Bacon: 0,
    Cheese: 0,
    Salad: 0,
    Meat: 0
}

function Ingredient () {
    const { push } = useHistory();

    const ingredientReducer = (state, action) => {
        switch (action.type) {
            case 'INC':
                return {
                    ...state,
                    [action.ingredient]: state[action.ingredient] + 1
                }

            case 'DEC':
                if (state[action.ingredient] > 0) {
                    return {
                        ...state,
                        [action.ingredient]: state[action.ingredient] - 1
                    }
                } else {
                    return state
                }
            default:
                return state
        }
    }

    const [ ingredients, dispatch ] = useReducer(ingredientReducer, ingred);

    const incHandler = (type) => {
        dispatch({ type: 'INC', ingredient: type });
    }

    const decHandler = (type) => {
        dispatch({ type: 'DEC', ingredient: type });
        // console.log(ingredients)
    }

    const totalIngredientNumber = () => {
        const toReturn = [];
        Object.keys(ingredients).forEach((ing) => {
            for (let i = 0; i < ingredients[ing]; i++) {
                toReturn.push(ingredients[ing])
            } 
        })

        return toReturn.length;
    }
    let he = {}

    const continueClickHandler = () => {
        he = {
            ...ingredients
        }
        console.log(he)
        push('/summary')
    }

    return (
        <Layout>
            <IngredientContext.Provider value = { {he}}>
                <div className= { classes.container }>
                    <div style={{
                        paddingTop: '20px',
                        fontSize: '20px'
                    }}>Choose the ingredients you'd like to mine</div>
                    <IngredientList 
                        ingredients = { ingredients }
                        increase = { incHandler }
                        reduce = { decHandler }
                    />
                    <button
                        disabled = { !totalIngredientNumber() ? true: false }
                        onClick = { continueClickHandler }
                        style = {{ marginBottom: '12px' }}
                    >Continue</button>
                </div>
            </IngredientContext.Provider>
        </Layout>
    );
}

export default Ingredient