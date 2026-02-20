import { useState } from "react";
import emailjs from "@emailjs/browser"
import { form } from "motion/react-client";
import Alert from "../components/Alert"

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
            console.log("Form submitted:", formData)
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
    return <section id="contact" className="relative flex items-center justify-end c-space pt-4 md:pt-6 pb-6 md:pb-8">
        {showAlert && <Alert type={alertType} text={alertMessage}/>}
        {/* LEFT IMAGE */}
        <div className="flex-1 flex justify-center lg:justify-end pr-6 lg:pr-10">
        <div className="w-full max-w-2xl rounded-3xl border-[6px] border-[rgba(111,26,7,0.9)] shadow-lg overflow-hidden">
            <img
            src="/assets/contact_image.jpg"
            alt="About me"
            className="w-full h-auto object-contain rounded-2xl"
            />
        </div>
        </div>



        <div className="flex flex-col items-start justify-center w-full max-w-md border border-white/10 rounded-2xl bg-[rgba(111,26,7,0.9)] p-5 lg:ml-auto lg:mt-9">
            <div className="flex flex-col items-start w-full gap-5 mb-4 text-white text-outline-black">
                <h2 className="text-heading">Contact</h2>
                <p>Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help </p>
            </div>
            <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="feild-label">Full Name</label>
                <input id="name" name="name" type='text' className="field-input field-input-focus" placeholder="John Doe" autoComplete="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="feild-label">Email</label>
                <input id="email" name="email" type='email' className="field-input field-input-focus" placeholder="JohnDoe@email.com" autoComplete="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="feild-label">Message</label>
                <textarea id="message" name="message" type='text' className="field-input field-input-focus" rows="4" placeholder="Share your thoughts..." autoComplete="message" value={formData.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation">{!isLoading ? "Send" : "Sending"}</button>
        </form>
        </div>
    </section>
}

export default Contact;