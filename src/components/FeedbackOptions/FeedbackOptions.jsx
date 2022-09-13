import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(item => (
    <button
      key={item[0]}
      className={css.btn}
      onClick={onLeaveFeedback}
    >
      {item[0]}
    </button>
  ));
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}
