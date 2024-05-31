import classes from "./Contacts.module.css";

const Contacts = () => {
    return (
        <div className={classes.contacts}>
            <div className={classes.contactsBlock}>
                <h1>Address 1</h1>
                <p>Address N/A</p>
            </div>
            <div className={classes.contactsBlock}>
                <h1>Phones 1</h1>
                <p>Phones N/A</p>
            </div>
            <div className={classes.contactsBlock}>
                <h1>Email 1</h1>
                <p>Email N/A</p>
            </div>
        </div>
    );
}

export default Contacts;