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
    return <section id="contact" className="relative flex items-center justify-end c-space pt-4 md:pt-6 pb-4 md:pb-6">
        <AnimatePresence>
            {showAlert && <Alert key="alert" type={alertType} text={alertMessage}/>}
        </AnimatePresence>
        {/* LEFT IMAGE */}
        <div className="flex-1 flex justify-center lg:justify-end pr-6 lg:pr-10">
        <div id="contact-photo" className="reg-marks w-full max-w-2xl rounded-3xl border-4 border-maroon shadow-lg overflow-hidden">
            <RegMarks />
            <img
            src="/assets/contact_image.jpg"
            alt="About me"
            className="w-full h-auto object-contain rounded-2xl"
            />
        </div>
        </div>

        <div className="flex flex-col items-start justify-center w-full max-w-md border border-cream/10 rounded-2xl bg-[rgba(111,26,7,0.9)] p-6 lg:ml-auto lg:mt-9 shadow-2xl">
            <div className="flex flex-col items-start w-full gap-3 mb-4">
                <div id="contact-heading-block">
                    <p className="node-label text-sand mb-3">Node 04 &mdash; Contact</p>
                    <h2 className="text-heading text-cream">Contact</h2>
                </div>
                <p className="text-cream/85 leading-relaxed">Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.</p>
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
            <button type="submit" disabled={isLoading} className="w-full px-1 py-3 font-mono text-sm uppercase tracking-[0.15em] text-center rounded-md cursor-pointer bg-sand text-maroon-dark font-semibold hover:bg-cream transition-colors hover-animation disabled:opacity-60 disabled:cursor-not-allowed">{!isLoading ? "Send" : "Sending"}</button>
        </form>
        </div>
    </section>
}

export default Contact;