import React from "react";
import { useFormik } from "formik";

function ContactPage() {
    const formik = useFormik({
        initialValues: {
            contactName: "",
            contactSubject: "",
            contactEmail: "",
            contactBody: "",
        },
    });
    console.log(formik.values);
    return (
        <div>
            <h1 className="shopping-page_h1">Contact</h1>
            <div className="contact-form-wrapper">
                <form className="contact-form">
                    <h2 className="text-2xl font-bold">Get in touch:</h2>
                    {/* name input */}
                    <div className="input-wrapper">
                        <label htmlFor="contactName">Name:</label>
                        <input
                            placeholder="Your name"
                            type="text"
                            name="contactName"
                            id="contactName"
                            onChange={formik.handleChange}
                            value={formik.values.contactName}
                        />
                    </div>
                    {/* subject input */}
                    <div className="input-wrapper">
                        <label htmlFor="contactSubject">Subject:</label>
                        <input
                            placeholder="What is the query about?"
                            type="text"
                            name="contactSubject"
                            id="contactSubject"
                            onChange={formik.handleChange}
                            value={formik.values.contactSubject}
                        />
                    </div>
                    {/* Email input */}
                    <div className="input-wrapper">
                        <label htmlFor="contactEmail">Email:</label>
                        <input
                            placeholder="johndoe@email.com"
                            type="email"
                            name="contactEmail"
                            id="contactEmail"
                            onChange={formik.handleChange}
                            value={formik.values.contactEmail}
                        />
                    </div>
                    {/* textArea input */}
                    <div className="input-wrapper">
                        <label htmlFor="contactBody">
                            Tell us whats on your mind:
                        </label>
                        <textarea
                            placeholder="Type here ..."
                            name="contactBody"
                            id="contactBody"
                            onChange={formik.handleChange}
                            value={formik.values.contactBody}
                            cols="30"
                            rows="10"
                        ></textarea>
                    </div>
                    <div id="youSuck" className="hidden text-danger">
                        You did not meet validation requirements
                    </div>

                    <button className="btn_shadow mr-auto" type="submit">
                        Send message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;
