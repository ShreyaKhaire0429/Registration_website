import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Home.scss";

const BrochureDownloadForm = () => {
  const [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const downloadLinkRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    setIsSuccess(false);
    setShowPreview(false);

    // email access key
    const formData = new FormData(event.target);
    formData.append("access_key", "c54a1f85-90db-4a5f-b3e8-bccc51b28487");

    // email post api
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    // show message
    if (data.success) {
      setIsSuccess(true);
      setResult("✅ Form Submitted Successfully!");
      event.target.reset();

      // Trigger file download
      setTimeout(() => {
        downloadLinkRef.current.click();
        setShowPreview(true);
      }, 500);
    } else {
      setIsSuccess(false);
      setResult("❌ Error: " + data.message);
    }
  };

  return (
    <div className="form-container">
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

        {/* name */}
        <motion.input type="text" className="bg-white text-dark" name="name" placeholder="Your Name" required />
        {/* /Name */}

        {/* Email */}
        <motion.input type="email" className="bg-white text-dark" name="email" placeholder="Your Email" required />
        {/* /Email */}

        {/* WhatsApp Phone */}
        <motion.input type="tel" className="bg-white text-dark" name="whatsapp" placeholder="WhatsApp Phone No." required />
        {/* /WhatsApp Phone */}

        {/* Age */}
        <motion.input type="number" className="bg-white text-dark" name="age" placeholder="Age" required />
        {/* /Age */}

        {/* Address */}
        <motion.textarea type="text" className="bg-white text-dark rounded ps-3 pt-3" name="address" placeholder="Address" rows={4} required />
        {/* /Address */}

        {/* City */}
        <motion.input type="text" className="bg-white text-dark" name="city" placeholder="City" required />
        {/* /City */}

        {/* option 1 */}
        <motion.select name="capital" required className="bg-white text-dark ">
          <option value="">How much capital you are planning to trade with?</option>
          <option value="less_than_500">Less than ₹500</option>
          <option value="500-1000">₹500 - ₹1,000</option>
          <option value="1000-5000">₹1,000 - ₹5,000</option>
          <option value="more_than_5000">More than ₹5,000</option>
        </motion.select>
        {/* /option 1 */}

        {/* option 2 */}
        <motion.select name="experience" required className="bg-white text-dark">
          <option value="">How much trading experience do you have?</option>
          <option value="no_experience">No Experience</option>
          <option value="1-2_years">1-2 Years</option>
          <option value="3-5_years">3-5 Years</option>
          <option value="more_than_5_years">More than 5 Years</option>
        </motion.select>
        {/* /option 2 */}

        {/* Contact time */}
        <label className="text-dark">Preferable Time to Contact</label>
        <motion.input type="time" name="contact_time" placeholder="" className="bg-white text-dark" required />
        {/* /Contact time */}

        {/* Submit */}
        <motion.button
          type="submit"
          className="btn-primary w-100 border-0"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Submit Form
        </motion.button>
        {/* /Submit */}
      </motion.form>

      {/* message */}
      <AnimatePresence>
        {result && (
          <motion.div
            key="message"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`message ${isSuccess ? "success" : "error"}`}
          >
            {result}
          </motion.div>
        )}
        {/* /message */}
      </AnimatePresence>

      {/* Hidden download link */}
      <a
        href="/pdf/MeTta-SHARE-MARKET-TRAINING-INSTITUTE  Brochure.pdf"
        download="MeTta-SHARE-MARKET-TRAINING-INSTITUTE  Brochure.pdf"
        ref={downloadLinkRef}
        style={{ display: "none" }}
      ></a>
      {/* /Hidden download link */}

      {/* Preview Button */}
      {showPreview && (
        <motion.button
          className="btn btn-warning mt-3"
          onClick={() => window.open("/pdf/MeTta-SHARE-MARKET-TRAINING-INSTITUTE  Brochure.pdf", "_blank")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Preview PDF
        </motion.button>
        // Preview Button
      )}
    </div>
  );
};
export default BrochureDownloadForm;