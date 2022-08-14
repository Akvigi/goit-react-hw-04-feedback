import React from "react";
import PropTypes from 'prop-types'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {   
    return (
            <>
                {total ? <><h2>Statistics</h2>
                <p>Good: { good }</p>
                <p>Neutral: { neutral }</p>
                <p>Bad: {bad}</p>
                <p>Total: {total}</p>
                <p>Positive feedback: {positivePercentage}%</p>
                </> : <Notification  message="There is no feedback"/>}
            </>
    );
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.string
}

function Notification({message}) {
    return <><p>{message}</p></>
}

Notification.propTypes = {
    message: PropTypes.string
}

export default Statistics;