import React, { useState} from "react";
import FeedbackOptions from "./Statistics/Feedbackoptions/FeedbackOptions";
import Rating from "./Statistics/Rating/Rating";
import { PageContainer, ContentContainer } from "./styled-comp/styled"
import Section from "./Section/Section";

const App = () => {
    const [good, setGood] = useState(0)
    const [bad, setBad] = useState(0)
    const [neutral, setNeutral] = useState(0)

    const getTotal = () => {
        return good + bad + neutral
    }
    const countPositivePercent = () => {
        if (good === 0) return "0"
        const perc = (good * 100) / getTotal()
        return perc.toFixed(1)
    }

  return (
            <PageContainer>
                <ContentContainer>
                    <Section title="Please leave feedback">
                    <FeedbackOptions toGood={() => setGood(prev => prev + 1)}
                        toBad={() => setBad(prev => prev + 1)}
                        toNeutral={() => setNeutral(prev => prev + 1)} />
                        <Rating
                            good={good}
                            bad={bad}
                            neutral={neutral}
                            total={getTotal()}
                            positivePercentage= {countPositivePercent()}
                            />
                    </Section>
                </ContentContainer>
            </PageContainer>  
  )
}



export default App;

