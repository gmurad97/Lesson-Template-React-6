import Section from "../components/main/components/section/Section.jsx";

import Contacts from "../components/main/components/contacts/Contacts.jsx";

import Products from "../components/main/components/products/Products.jsx";
import About from "../components/main/components/about/About.jsx";
import Cryptocurrency from "../components/main/components/cryptocurrency/Cryptocurrency.jsx";
import Button from "../components/common/button/Button.jsx";

const HomePage = () => {
    return (
        <>
            <Button>12312321</Button>
            <Section sectionTitle="contact">
                <Cryptocurrency />
                <Contacts />
                <About />
                <Products />
            </Section>
        </>
    );
}

export default HomePage;