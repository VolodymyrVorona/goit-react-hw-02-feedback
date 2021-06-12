import PropTypes from 'prop-types';

import st from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={st.section}>
      {title && <h2 className={st.title}>{title}</h2>}

      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
