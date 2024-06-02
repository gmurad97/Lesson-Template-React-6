import Section from "../components/main/components/section/Section.jsx";
import Cryptocurrency from "../components/main/components/cryptocurrency/Cryptocurrency.jsx";
import Contacts from "../components/main/components/contacts/Contacts.jsx";
import About from "../components/main/components/about/About.jsx";

const HomePage = () => {
    return (
        <>
            <Section sectionTitle="Cryptocurrency List">
                <Cryptocurrency />
            </Section>
            <Section sectionTitle="Contacts">
                <Contacts />
            </Section>
            <Section sectionTitle="About">
                <About />
            </Section>
        </>
    );
}

export default HomePage;