import PropTypes from 'prop-types';

// nếu muốn chỉ nhận một children thì chúng ta import thằng react và thay vì chúng ta return trực tiếp ra children
// thì chúng ta có thể return ra return React.children.only(children);
import './GlobalStyle.scss';
function GlobalStyle({ children }) {
    return children;
}

GlobalStyle.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyle;
