import { useState } from 'react';
import axios from "axios";

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [enquiry, setEnquiry] = useState('Business');
    const [companyName, setCompanyName] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [channel, setChannel] = useState('Please choose');


    const [nameError, setNameError] = useState('');

    const [emailError, setEmailError] = useState('');
    const [companyError, setCompanyError] = useState('');
    const [subjectError, setSubjectError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setNameError('');
        setEmailError('');
        setCompanyError('');
        setSubjectError('');
        setPhoneError('');
        setMessageError('');

        let isValid = true;
        if (name.length < 2) {
            setNameError('Your Name should be at least 2 characters');
            isValid = false;
        }
        if (!email) {
            setEmailError('Email is required');
            isValid = false;
        }
        if (!companyName) {
            setCompanyError(`Your company's name is required`);
            isValid = false;
        }
        if (!subject) {
            setSubjectError('The subject is required to send a message.');
            isValid = false;
        }
        if (!phone) {
            setPhoneError('Phone number is required.');
            isValid = false;
        }
        if (!message || message.length < 5) {
            setMessageError('Message must be at least 5 characters.');
            isValid = false;
        }
    
        if (isValid) {
            const messageData = {
                name,
                email,
                enquiry,
                companyName,
                phone,
                subject,
                message,
                channel
            };

            axios.post('http://localhost:8000/api/message', messageData)
                .then(response => {
                    console.log('Message sent successfully:', response.data.message);
                    setName('');
                    setEmail('');
                    setCompanyName('');
                    setPhone('');
                    setSubject('');
                    setMessage('');
                    setChannel('Please choose');
                })
                .catch(error => {
                    console.error('Error sending message:', error);
                });
        }
    };
    
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-40 py-8">
                <h1 className="text-3xl font-bold text-green-500">CONTACT US</h1>
                <div className="flex justify-between">
                    <div className="w-1/2 space-y-10">
                        <div className="space-y-10">
                            <h3 className="text-lg font-semibold">Do not hesitate to get in touch with us if you:</h3>
                            <ul className="list-decimal pl-10">
                                <li>Need help with compliance</li>
                                <li>Have goals to be carbon neutral</li>
                                <li>Are looking for high quality carbon offset projects to support</li>
                            </ul>
                        </div>
                        <div className="space-y-5">
                            <p>Email us: <span className="font-semibold">info@urbagreen.com</span></p>
                            <p>Call us: <span className="font-semibold">+355690000000</span></p>
                        </div>
                    </div>
                    <form className="w-1/2" onSubmit={handleSubmit}>
                        <h3 className="text-3xl font-bold text-green-500 mb-4">Contact Form</h3>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Your name:</label>
                            <input className="mt-1 p-2 border rounded-md w-full" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        {
                            nameError &&
                                <p className="block text-sm mb-4 font-medium text-red-700">{nameError}</p> 
                        }

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Email address:</label>
                            <input className="mt-1 p-2 border rounded-md w-full" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        {
                            emailError &&
                                <p className="block text-sm mb-4 font-medium text-red-700">{emailError}</p> 
                        }

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Type of enquiry:</label>
                            <div className="flex">
                                <label className="mr-4">
                                    <input className="mr-1" type="radio" name="enquiry" value={'Business'} defaultChecked />
                                    Business
                                </label>
                                <label className="mr-4">
                                    <input className="mr-1" type="radio" name="enquiry" value={'Private'} />
                                    Private
                                </label>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Company name:</label>
                            <input className="mt-1 p-2 border rounded-md w-full" type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                        </div>
                        {
                            companyError &&
                                <p className="block text-sm mb-4 font-medium text-red-700">{companyError}</p> 
                        }

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Telephone:</label>
                            <input className="mt-1 p-2 border rounded-md w-full" type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        {
                                phoneError &&
                                <p className="block text-sm mb-4 font-medium text-red-700">{phoneError}</p> 
                        }

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Subject:</label>
                            <input className="mt-1 p-2 border rounded-md w-full" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
                        </div>
                        {
                            subjectError &&
                                <p className="block text-sm mb-4 font-medium text-red-700">{subjectError}</p> 
                        }

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Message:</label>
                            <textarea className="mt-1 p-2 border rounded-md w-full" type="text" value={message} onChange={(e) => setMessage(e.target.value)} cols="20" rows="3" />
                        </div>
                        {
                            messageError &&
                                <p className="block text-sm mb-4 font-medium text-red-700">{messageError}</p> 
                        }

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">How did you hear about us?</label>
                            <div className="relative">
                                <select
                                    className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500 focus:shadow-outline"
                                    value={channel}
                                    onChange={(e) => setChannel(e.target.value)}>
                                    <option value="Google">Via Google / other search engine</option>
                                    <option value="Website">Via our website</option>
                                    <option value="Colleague">Recommended by colleague / another Company</option>
                                    <option value="Marketing">Other marketing campaigns</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 11.293a1 1 0 011.414 0L10 12.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;