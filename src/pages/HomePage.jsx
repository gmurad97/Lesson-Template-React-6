import Section from "../components/main/components/section/Section.jsx";

import Contacts from "../components/main/components/contacts/Contacts.jsx";
import Map from "../components/main/components/map/Map.jsx";
import Feedback from "../components/main/components/feedback/Feedback.jsx";
import Products from "../components/main/components/products/Products.jsx";
import About from "../components/main/components/about/About.jsx";
import Cryptocurrency from "../components/main/components/cryptocurrency/Cryptocurrency.jsx";


const HomePage = () => {
    return (
        <>
            <Section sectionTitle="contact">
                <Cryptocurrency />
                <Feedback />
                <Map />
                <Contacts />
                <About />
                <Products />
            </Section>
        </>
    );
}

export default HomePage;