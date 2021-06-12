import PropTypes from 'prop-types';
import st from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={st.listGroup}>
    <li className="list-group-item d-flex justify-content-between align-items-center">
      Good:
      <span className="badge bg-primary rounded-pill">{good}</span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
      Neutral:
      <span className="badge bg-primary rounded-pill">{neutral}</span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
      Bad:
      <span className="badge bg-primary rounded-pill">{bad}</span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
      Total:
      <span className="badge bg-primary rounded-pill">{total}</span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
      Positive Percentage:
      <span className="badge bg-primary rounded-pill">
        {positivePercentage}%
      </span>
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
