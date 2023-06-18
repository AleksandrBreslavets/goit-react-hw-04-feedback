import PropTypes from "prop-types";
import { Section } from "components/Section/Section"
import { Message } from "./Notification.styled"
export const Notification = ({ message }) => (
    <Section title={'Statistics'}>
        <Message>{message}</Message>
    </Section>
);
Notification.propTypes={
    message:PropTypes.string.isRequired,
}