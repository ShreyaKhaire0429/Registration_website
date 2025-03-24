import React, { useState } from "react";

const EnrollmentForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", city: "" });
    const [successMessage, setSuccessMessage ] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: new FormData(e.target),
        });
        const result = await response.json();
        if (result.success) {
            setSuccessMessage("✅ Your enrollment was successful!");
            setFormData({ name: "", email: "", phone: "", city: "" });
        }
    };

    return (
        <div className="text-white mt-5">
            <form onSubmit={handleSubmit} className="msm-enroll-form-container">
                <input type="hidden" name="access_key" value="c54a1f85-90db-4a5f-b3e8-bccc51b28487" />

                <h2 className="fw-bold mb-4 text-center text-warning">Enroll Now</h2>

                <div className="mb-3">
                    <input type="text" id="name" name="name" placeholder="Enter Your Full Name" className="rounded" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <input type="email" id="email" name="email" placeholder="Enter Your Email Address" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <input type="tel" id="phone" name="phone" placeholder="Enter Your Whatsapp Number" value={formData.phone} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <input type="text" id="city" name="city" placeholder="Enter Your City" value={formData.city} onChange={handleChange} required />
                </div>

                <button type="submit" className="btn-primary">Submit</button>
                {successMessage && <p className="success-message msm-success-message mt-3 mb-0">{successMessage}</p>}
                {successMessage && <p className="text-center text-capitalize">Our team will contact you shortly after enrollment.</p>}
            </form>
        </div>
    );
};

export default EnrollmentForm;
