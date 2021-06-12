import PropTypes from 'prop-types';
import st from './Notification.module.css';

const Notification = ({ message }) => <p className={st.message}>{message}</p>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
