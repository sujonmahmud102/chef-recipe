import React, { useContext } from 'react';



const About = () => {
    return (
        <section className='bg-base-200 px-4 py-6 md:py-12 md:px-16'>
            <div className="px-6 py-8 md:p-12">
                <h1 className="text-3xl font-bold mb-4">About Us</h1>
                <p className="text-lg text-justify mb-6">We are a company dedicated to creating innovative solutions for our clients.</p>
                <h2 className="text-xl font-bold mb-2">Our Team</h2>
                <ul className="list-disc mb-6">
                    <li>John Doe - CEO</li>
                    <li>Jane Smith - CTO</li>
                    <li>Mark Johnson - CFO</li>
                </ul>
                <h2 className="text-xl font-bold mb-2">Our Mission</h2>
                <p className="text-lg text-justify mb-6">Our mission is to provide our clients with the highest quality products and services that meet their needs and exceed their expectations. We strive to be a leader in our industry by constantly innovating and improving our processes and technologies.</p>
                <h2 className="text-xl font-bold mb-2">Contact Us</h2>
                <p className="text-lg text-justify mb-4">If you have any questions or would like to learn more about our company, please don't hesitate to contact us.</p>
                <ul className="list-disc mb-6">
                    <li>Phone: 555-1234</li>
                    <li>Email: info@company.com</li>
                    <li>Address: 123 Main Street, Anytown USA</li>
                </ul>
            </div>
        </section>
    );
};

export default About;