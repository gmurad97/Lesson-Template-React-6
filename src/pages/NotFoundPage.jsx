import Section from "../components/main/components/section/Section.jsx";

const ErrorPage = () => {
    return (
        <>
            <Section sectionTitle="Error! 404 Not Found!">
                <p>Unfortunately, the requested page could not be found.</p>
                <p>You may have entered an incorrect address or the page may have been moved or deleted.</p>
            </Section>
        </>
    );
}

export default ErrorPage;