import Section from "../components/main/components/section/Section.jsx";

import Contacts from "../components/main/components/contacts/Contacts.jsx";
import Map from "../components/main/components/map/Map.jsx";
import Feedback from "../components/main/components/feedback/Feedback.jsx";


const ContactsPage = () => {
    return (
        <>
            <Section sectionTitle="contact">
                <Feedback />
                <Map />
                <Contacts />
            </Section>
        </>
    );
}

export default ContactsPage;