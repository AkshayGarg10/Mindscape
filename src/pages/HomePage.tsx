import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <div className='pt-20 pb-16'>
            <header className="text-center mb-8">
                <h1 className="md:text-4xl text-3xl font-bold mb-4">Welcome Back, [User's Name]!</h1>
                <p className="text-xl mb-6">Track your mood, take assessments, and find support right here.</p>
            </header>

            <section className='grid md:grid-rows-2 md:grid-cols-3 grid-cols-1 gap-4 p-4'>
                <div className='bg-white shadow-md p-6 rounded-lg'>
                    <h2 className='text-2xl font-semibold mb-2'>Mood Tracker</h2>
                    <p className='text-gray-600 mb-4'>Log and track your mood over time to understand your emotional well-being.</p>
                    <Link to="/tracker" className='text-blue-500 hover:underline hover:cursor-pointer'>Start Tracking</Link>
                </div>
                <div className='bg-white shadow-md p-6 rounded-lg'>
                    <h2 className='text-2xl font-semibold mb-2'>Assessments</h2>
                    <p className='text-gray-600 mb-4'>Take various assessments to evaluate different aspects of your mental health.</p>
                    <Link to="/assessments" className='text-blue-500 hover:underline'>Take Assessment</Link>
                </div>
                <div className='bg-white shadow-md p-6 rounded-lg'>
                    <h2 className='text-2xl font-semibold mb-2'>Chatbot</h2>
                    <p className='text-gray-600 mb-4'>Interact with our chatbot for immediate support and advice.</p>
                    <Link to="/chatbot" className='text-blue-500 hover:underline'>Chat with Bot</Link>
                </div>
                <div className='bg-white shadow-md p-6 rounded-lg'>
                    <h2 className='text-2xl font-semibold mb-2'>Mindfulness Exercises</h2>
                    <p className='text-gray-600 mb-4'>Engage in mindfulness exercises to help you relax and focus.</p>
                    <Link to="/mindfulness" className='text-blue-500 hover:underline'>Explore Exercises</Link>
                </div>
                <div className='bg-white shadow-md p-6 rounded-lg'>
                    <h2 className='text-2xl font-semibold mb-2'>Peer Support</h2>
                    <p className='text-gray-600 mb-4'>Join our community to connect with peers and share experiences.</p>
                    <Link to="/community" className='text-blue-500 hover:underline'>Join the Community</Link>
                </div>
            </section>
            
            <section className='bg-slate-200 md:p-12 p-6 md:mx-12 mx-6'>
                <h2 className='text-2xl font-semibold mb-4'>
                    Recent Activity
                </h2>
                <p className='text-slate-700 mb-2'>Here you can see your recent mood logs, activities, and other updates. Stay informed about your progress and take necessary actions to improve your well-being.</p>
            </section>

            <section className="homepage-resources p-6 lg:p-12 mx-6 lg:mx-12">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4">Featured Content</h2>
                <p className="text-gray-700 mb-4">Check out our latest articles, new assessments, and additional resources that might be helpful for you.</p>
                
                <div className="featured-content-list">
                    <p>Stay tuned for new content.</p>
                </div>
            </section>
            </div>
           
        </>
    );
};

export default HomePage;
