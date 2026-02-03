import React from 'react';
import { Send } from 'lucide-react';


const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Full Name
                </label>
                <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
                    focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                    placeholder="E.g., full name"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
                    focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                    placeholder="you@example.com"
                />
            </div>

            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                </label>
                <input
                    type="text"
                    id="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
                    focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                    placeholder="Order OR Inquiry / Partnership"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                </label>
                <textarea
                    id="message"
                    rows="4"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
                    focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                    placeholder="Tell us how we can help you..."
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full flex justify-center items-center px-6 py-3 border border-transparent 
                text-base font-medium rounded-lg shadow-md text-white bg-blue-600 
                hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                focus:ring-indigo-500 transition duration-150"
            >
                <Send className="w-5 h-5 mr-2" />
                Send Message
            </button>
        </form>
    );
};


const ContactUs = () => {
    return (
        <div className="min-h-screen bg-white font-sans">

            
            <section className="bg-gray-50 py-16 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-2">
                        24/7 Support
                    </p>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-gray-900 leading-tight">
                        Get in Touch with <span className='text-blue-700'>i</span>Commerce
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Whether you have a question about an order, a partnership inquiry, 
                        or just want to say hello, our team is ready to help.
                    </p>
                </div>
            </section>

            
            <section className="py-20 sm:py-28">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            Send Us A Message
                        </h2>

                        <ContactForm />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ContactUs;
