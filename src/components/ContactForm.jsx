import React from "react";

export default function ContactForm() {
    return (
        <form>
            <input type="text" name="contactName" id="contactName" />
            <input type="text" name="contactSubject" id="contactSubject" />
            <input type="email" name="contactEmail" id="contactEmail" />
        </form>
    );
}
