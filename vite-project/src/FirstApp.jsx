

import PropTypes from 'prop-types';

const FirstApp = ({title, sum}) => {
    return (
    <>
        <h1> {title} </h1>
        <span> {sum} </span>
        </>
    )
}

FirstApp.propTypes = {
title: PropTypes.string.isRequired, 
sum: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
title: 'No hay titulo',
sum: 3000
}
export default FirstApp 