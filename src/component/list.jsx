import classes from '../styles/list.module.css';

function List ({ ingredient, reduce, increase, number }) {
    return (
        <div className = { classes.container }>
            <div className="ingre">{ ingredient }</div>
            <div
                className = { classes.contain }
                style ={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <button
                    style = {{ marginRight: '5px' }}
                    onClick = { () => increase(ingredient) }
                >+</button>
                <button
                    disabled = { +number === 0 ? true : false }
                    onClick = { () => reduce(ingredient) }
                    style = {{ marginRight: '5px' }}
                >-</button>
                <span
                    style = {{
                        margin: '0px',
                        marginLeft: '10px',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        border: '2px solid white',
                        padding: '0px',
                        boxSizing: 'border-box',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                        
                    }}
                >{ number }</span>
            </div>
        </div>
    );
}

export default List;