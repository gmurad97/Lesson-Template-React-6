import Section from "../components/main/components/section/Section.jsx";

import Contacts from "../components/main/components/contacts/Contacts.jsx";
import Map from "../components/main/components/map/Map.jsx";


const ContactsPage = () => {
    return (
        <>
            <Section sectionTitle="Map">
                <Map />
            </Section>
            <Section sectionTitle="Adrress">
                <Contacts />
            </Section>
        </>
    );
}

export default ContactsPage;