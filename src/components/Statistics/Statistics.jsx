import PropTypes from "prop-types";
import { Section } from "components/Section/Section"
import { Text, List } from "./Statistics.styled"
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <Section title={'Statistics'}>
        <List>
            <li><Text>Good: <span>{good}</span></Text></li>
            <li><Text>Neutral: <span>{neutral}</span></Text></li>
            <li><Text>Bad: <span>{bad}</span></Text></li>
            <li><Text>Total: <span>{total()}</span></Text></li>
            <li><Text>Positive feedback: <span>{`${positivePercentage()}%`}</span></Text></li>
        </List>
    </Section>
);
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func,
    positivePercentage:PropTypes.func,
}