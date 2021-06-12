import PropTypes from 'prop-types';
import st from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onFeebbackOption }) => {
  const btn = Object.keys(options).map(name => (
    <button
      key={name}
      className={st.button}
      type="button"
      name={name}
      onClick={onFeebbackOption}
    >
      {name}
    </button>
  ));
  return btn;
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onFeebbackOption: PropTypes.func.isRequired,
};

export default FeedbackOptions;
