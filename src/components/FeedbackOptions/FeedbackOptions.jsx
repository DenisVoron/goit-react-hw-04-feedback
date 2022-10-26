import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={css.list}>
            {options.map(option => {
                return (
                    <li key={option} className={css.item}>
                        <button type="button" className={css.btn} onClick={onLeaveFeedback} name={option}>
                            {option}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};