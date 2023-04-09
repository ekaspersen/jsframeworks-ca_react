import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function ContactPage() {
    const formik = useFormik({
        initialValues: {
            contactName: "",
            contactSubject: "",
            contactEmail: "",
            contactBody: "",
        },
        validationSchema: Yup.object({
            contactName: Yup.string()
                .min(3, "Must contain at least 3 characters")
                .required("* Required field *"),
            contactSubject: Yup.string()
                .min(3, "Must contain at least 3 characters")
                .required("* Required field *"),
            contactEmail: Yup.string()
                .email(`Must be valid email. "post@adress.com"`)
                .required("*Required field *"),
            contactBody: Yup.string()
                .min(3, "Must contain at least 3 characters")
                .required("* Required field *"),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <div>
            <h1 className="shopping-page_h1">Contact</h1>
            <div className="contact-form-wrapper">
                <form onSubmit={formik.handleSubmit} className="contact-form">
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
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.contactName &&
                        formik.errors.contactName ? (
                            <p className="text-danger">
                                {formik.errors.contactName}
                            </p>
                        ) : null}
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
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.contactSubject &&
                        formik.errors.contactSubject ? (
                            <p className="text-danger">
                                {formik.errors.contactSubject}
                            </p>
                        ) : null}
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
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.contactEmail &&
                        formik.errors.contactEmail ? (
                            <p className="text-danger">
                                {formik.errors.contactEmail}
                            </p>
                        ) : null}
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
                            onBlur={formik.handleBlur}
                            cols="30"
                            rows="10"
                        ></textarea>
                        {formik.touched.contactBody &&
                        formik.errors.contactBody ? (
                            <p className="text-danger">
                                {formik.errors.contactBody}
                            </p>
                        ) : null}
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
