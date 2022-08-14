import { BtnCont } from 'components/styled-comp/styled'
import React from 'react'
import PropTypes from 'prop-types'


function FeedbackOptions({toGood, toBad, toNeutral}) {
  return (
        <BtnCont>
            <button onClick={toGood}>good</button>
            <button onClick={toNeutral}>neutral</button>
            <button onClick={toBad}>bad</button>
        </BtnCont>
  )
}

FeedbackOptions.propTypes = {
  toGood: PropTypes.func,
  toBad: PropTypes.func,
  toNeutral: PropTypes.func,
}

export default FeedbackOptions