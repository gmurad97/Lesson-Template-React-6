import classes from "./Contacts.module.css";

const Contacts = () => {
    return (
        <div className={classes.contacts}>
            <div className={classes.contact}>
                <h1 className={classes.contactTitle}>Address</h1>
                <p className={classes.contactDescription}>1. Neftchilar Avenue, Building 45, Office 302</p>
                <p className={classes.contactDescription}>2. Heydar Aliyev Avenue, Building 87, Office 1507</p>
                <p className={classes.contactDescription}>3. Azadliq Street, Building 32, Office 214</p>
            </div>
            <div className={classes.contact}>
                <h1 className={classes.contactTitle}>Phone</h1>
                <p className={classes.contactDescription}>1. (415) 555-2368</p>
                <p className={classes.contactDescription}>2. (312) 555-4823</p>
                <p className={classes.contactDescription}>3. (646) 555-7890</p>
            </div>
            <div className={classes.contact}>
                <h1 className={classes.contactTitle}>Email</h1>
                <p className={classes.contactDescription}>1. john.doe@example.com</p>
                <p className={classes.contactDescription}>2. jane.smith@example.net</p>
                <p className={classes.contactDescription}>3. alex.johnson@example.org</p>
            </div>
        </div>
    );
}

export default Contacts;