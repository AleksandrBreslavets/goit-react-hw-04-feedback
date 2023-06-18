import { nanoid } from 'nanoid'
import PropTypes from "prop-types";
import { Section } from "components/Section/Section"
import { List, Button } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <Section title={'Please leave feedback'}>
        <List>
            {Object.keys(options).map(option =>
                <li key={nanoid()}>
                    <Button onClick={() => onLeaveFeedback(option)}>{option.toUpperCase()}</Button>
                </li>)}
        </List>
    </Section>
);
FeedbackOptions.propTypes = {
    options:PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral:PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        onLeaveFeedback:PropTypes.func,
    }),
}