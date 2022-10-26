import PropTypes from 'prop-types';

import css from './Statistics.module.css';


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div>
            <ul>
                <li className={css.item}>
                    <p className={css.description}>
                        Good: <span>{good}</span>
                    </p>
                </li>
                <li className={css.item}>
                    <p className={css.description}>
                        Neutral: <span>{neutral}</span>
                    </p>
                </li>
                <li className={css.item}>
                    <p className={css.description}>
                        Bad: <span>{bad}</span>
                    </p>
                </li>
                <li className={css.item}>
                    <p className={css.description}>
                        Total: <span>{total}</span>
                    </p>
                </li>
                <li className={css.item}>
                    <p className={css.description}>
                        Positive feedback: <span>{positivePercentage}</span>
                    </p>
                </li>
            </ul>
        </div>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
}