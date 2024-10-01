import PropTypes from 'prop-types';
import { Title } from './style';

function DefaultTitle({ children }) {

    return (
        <Title>{children}</Title>
    )
}

DefaultTitle.propTypes = {
    children: PropTypes.node.isRequired
}

export default DefaultTitle