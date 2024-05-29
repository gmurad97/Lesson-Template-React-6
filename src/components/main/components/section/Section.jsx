import classes from "./Section.module.css";

const Section = ({ sectionTitle, children }) => {
    return (
        <section className={classes.section}>
            <div className={classes.sectionContainer}>
                <article className={classes.sectionHeader}>
                    <div className={classes.sectionRow}>
                        <h1 className={classes.sectionTitle}>{sectionTitle}</h1>
                    </div>
                </article>
                <article className={classes.sectionMain}>
                    <div className={classes.sectionRow}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Section;