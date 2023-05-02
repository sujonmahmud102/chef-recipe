import React from 'react';

const Blog = () => {
    return (
        <div className='m-16 '>
            <div>
                <h3 className='text-xl font-semibold mb-2'>
                    Q1: Tell us the differences between uncontrolled and controlled components.
                </h3>
                <p className='mb-4'>
                    <span className='font-semibold'>Answer:</span> The main difference between uncontrolled and controlled components is that with uncontrolled components, the state is managed internally by the component, while with controlled components, the state is managed by the parent component. Controlled components provide more control over the behavior of the component, but can be more verbose and require more code. Uncontrolled components can be easier to use and require less code, but can be less predictable in their behavior.
                </p>
            </div>
            <div>
                <h3 className='text-xl font-semibold mb-2'>
                    Q2: How to validate React props using PropTypes
                </h3>
                <p className='mb-4'>
                    <span className='font-semibold'>Answer:</span> Below are the validators for the basic data types:
                    <ul className='list-disc pl-8'>
                        <li className='my-2'><span className='bg-blue-100'>PropTypes.any:</span> The prop can be of any data type</li>
                        <li className='mb-2'><span className='bg-blue-100'>PropTypes.bool:</span> The prop should be a Boolean</li>
                        <li className='mb-2'><span className='bg-blue-100'>PropTypes.number:</span> The prop should be a number</li>
                        <li className='mb-2'><span className='bg-blue-100'>PropTypes.string:</span> The prop should be a string</li>
                        <li className='mb-2'><span className='bg-blue-100'>PropTypes.func:</span> The prop should be a function</li>
                        <li className='mb-2'><span className='bg-blue-100'>PropTypes.array:</span> The prop should be an array</li>
                        <li className='mb-2'><span className='bg-blue-100'>PropTypes.object:</span> The prop should be an object</li>
                        <li className='mb-2'><span className='bg-blue-100'>PropTypes.symbol:</span> The prop should be a symbol</li>
                    </ul>
                </p>
            </div>
            <div>
                <h3 className='text-xl font-semibold mb-2'>
                    Q3: Tell us the difference between nodejs and express js.
                </h3>
                <p className='mb-4'>
                    <span className='font-semibold'>Answer:</span> Node.js and Express.js are both popular technologies used for building web applications with JavaScript, but they serve different purposes.
                    <br />
                    <br />
                    Node.js is a JavaScript runtime that allows developers to build server-side applications using JavaScript. It provides an event-driven architecture and non-blocking I/O API that allows applications to handle a large number of concurrent connections efficiently. Node.js also comes with a built-in package manager, NPM, that makes it easy to install and manage third-party modules.
                    <br />
                    <br />
                    Express.js is a web framework built on top of Node.js that simplifies the process of building web applications. It provides a set of middleware functions that can be used to handle HTTP requests and responses. Express.js also supports a range of HTTP methods, routing, and templating engines that can be used to build complex web applications.
                </p>
            </div>
            <div>
                <h3 className='text-xl font-semibold mb-2'>
                    Q4: What is a custom hook, and why will you create a custom hook?
                </h3>
                <p >
                    <span className='font-semibold'>Answer:</span> A custom hook in React is a reusable piece of code that encapsulates the logic of a particular behavior or functionality. Custom hooks allow developers to extract and reuse common functionality across different components, making it easier to manage and maintain the codebase.
                    <br />
                    Custom hooks are created using the same syntax as regular React hooks, and they can be used just like any other hook in a functional component.
                </p>
            </div>
        </div>
    );
};

export default Blog;