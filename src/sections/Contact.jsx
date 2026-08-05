import { useState } from "react";
import { AnimatePresence } from "motion/react";
import emailjs from "@emailjs/browser"
import Alert from "../components/Alert"
import RegMarks from "../components/RegMarks"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState("success");
    const [alertMessage, setAlertMessage] = useState("")
    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value})
    };
    const showAlertMessage=(type, message) =>{
        setAlertType(type);
        setAlertMessage(message);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try{
            await emailjs.send("service_6osa0eb", "template_6c8cas9",{
                from_name: formData.name,
                to_name: "Selim",
                from_email: formData.email,
                to_email: "scoskunuzer@gmail.com",
                message: formData.message
            }, "gJQtf6fkuR8zipvZr");
            setIsLoading(false);
            showAlertMessage("success", "Your message has been sent");
            setFormData({name: "", email: "", message: ""})
        } catch (error) {
            setIsLoading(false);
            console.log(error);
            showAlertMessage("danger", "Something went wrong!");
        }
        // service_6osa0eb
        // template_6c8cas9
    };
    return <section
        id="contact"
        className="relative flex items-center justify-end c-space pb-4 md:pb-6"
        style={{ paddingTop: "max(1rem, calc(50vh - 305px))" }}
        // Extra top headroom so that when node 4's spine click lands right at
        // this section's own top edge (its floor for hiding Experience's
        // tail), the photo also happens to fall at the viewport's vertical
        // center rather than high up with dead space below it. Scales with
        // viewport height like Footer's scroll-headroom calc below.
    >
        <AnimatePresence>
            {showAlert && <Alert key="alert" type={alertType} text={alertMessage}/>}
        </AnimatePresence>
        {/* LEFT IMAGE */}
        <div className="flex-1 flex justify-center lg:justify-end pr-6 lg:pr-10">
        <div id="contact-photo" className="reg-marks w-full max-w-2xl border-4 border-maroon overflow-hidden" style={{ borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-card)" }}>
            <RegMarks />
            <img
            src="/assets/contact_image.jpg"
            alt="Selim Coskunuzer"
            className="w-full h-auto object-contain"
            style={{ borderRadius: "var(--radius-lg)" }}
            />
        </div>
        </div>

        <div className="flex flex-col items-start justify-center w-full max-w-md border border-on-maroon/10 bg-[rgba(111,26,7,0.9)] p-6 lg:ml-auto lg:mt-9" style={{ borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)" }}>
            <div className="flex flex-col items-start w-full gap-3 mb-4">
                <div id="contact-heading-block">
                    <p className="node-label text-sand mb-3">Node 05 &mdash; Contact</p>
                    <h2 className="text-heading text-on-maroon">Contact</h2>
                </div>
                <p className="text-on-maroon/85 leading-relaxed font-serif" style={{ fontSize: "var(--text-body)" }}>
                    Open to ML research collaborations and ML/software engineering roles.
                    Email works best; the form below reaches the same inbox.
                </p>
                <div className="flex gap-3 font-mono uppercase tracking-[0.1em]" style={{ fontSize: "var(--text-label)" }}>
                    <a href="https://github.com/SelimC06" target="_blank" rel="noopener noreferrer" className="text-sand hover:text-on-maroon transition-colors underline underline-offset-4">
                        GitHub
                    </a>
                    <a href="/assets/resume.pdf" className="text-sand hover:text-on-maroon transition-colors underline underline-offset-4">
                        Resume
                    </a>
                </div>
            </div>
            <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="field-label">Full Name</label>
                <input id="name" name="name" type='text' className="field-input field-input-focus" placeholder="John Doe" autoComplete="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="field-label">Email</label>
                <input id="email" name="email" type='email' className="field-input field-input-focus" placeholder="JohnDoe@email.com" autoComplete="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="field-label">Message</label>
                <textarea id="message" name="message" type='text' className="field-input field-input-focus" rows="3" placeholder="Share your thoughts..." autoComplete="message" value={formData.message} onChange={handleChange} required />
            </div>
            <button type="submit" disabled={isLoading} className="w-full px-1 py-3 font-mono text-sm uppercase tracking-[0.15em] text-center cursor-pointer bg-sand text-maroon-dark font-semibold hover:bg-on-maroon transition-colors hover-animation disabled:opacity-60 disabled:cursor-not-allowed" style={{ borderRadius: "var(--radius-md)" }}>{!isLoading ? "Send" : "Sending"}</button>
        </form>
        </div>
    </section>
}

export default Contact;