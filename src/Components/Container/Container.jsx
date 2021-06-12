import PropTypes from 'prop-types';
import st from './Container.module.css';

const Container = ({ children }) => (
  <div className={st.container}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
