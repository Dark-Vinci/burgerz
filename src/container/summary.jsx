import {  useHistory } from 'react-router-dom';

import Layout from "../component/layout";
import classes from '../styles/summary.module.css';

function Summary () {
    const {  push } = useHistory();
    const generateRandom = () => {
        let toReturn = Math.floor(Math.random() * (10 - 5)) + 5;
        return toReturn
    }

    const clickHandler = () => {
        if (window.confirm('your order was placed')) {
            push('/home')
        } else {
            push('/bread');
        }
    }

    return (
        <Layout>
            <div className={classes.container}>
                <div
                    // style = {{ backgroundColor: '#cd60ee' }}
                >
                    <p>You mined the world most nutricius burger</p>
                    <p>Might have to take lesson from you</p>
                    <div>The price for the equipment used for mining is ${ generateRandom() }</div>
                    <button
                        onClick = { clickHandler }
                    >Order</button>
                </div>
            </div>
        </Layout>
    );
}

export default Summary;