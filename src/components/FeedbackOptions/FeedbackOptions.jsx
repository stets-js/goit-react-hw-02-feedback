import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(item => (
    <button
      key={item}
      className={css.btn}
      onClick={onLeaveFeedback}
    >
      {item}
    </button>
  ));
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}
