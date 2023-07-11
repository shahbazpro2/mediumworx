/* eslint-disable @next/next/no-img-element */
import React from 'react'
const stories = [
    {
        id: 1,
        name: 'TaxAgents.ai',
        image: 'https://source.unsplash.com/featured/?person=bob',
        testimonial:
            "TaxAgents leverages advanced artificial intelligence, driven by intelligent agent powered by OpenAI's GPT-4 to provide reliable and effective support to tax professionals in addressing client's tax related inquiries.",
    },
    {
        id: 2,
        name: 'LegalAgents.ai',
        image: 'https://source.unsplash.com/featured/?person=bob',
        testimonial:
            "LegalAgents leverages advanced artificial intelligence, driven by intelligent agent powered by OpenAI's GPT-4 to provide reliable and effective support to legal professionals in addressing client's legal related inquiries.",
    },
    {
        id: 3,
        name: 'Customer',
        image: 'https://source.unsplash.com/featured/?person=bob',
        testimonial:
            'Work with us in partnership to bring artificial intelligence solution to your organization.',
    },
    // Add more stories as needed
];
const Customers = () => {
    return (
        <div className='py-20 container'>
            <div className="text-center md:w-[600px] m-auto">
                <div className="text-4xl font-bold">Customer Stories</div>
                <div className="text-lg font-medium text-primary mt-4">See how mediumworx works in partnership with the customers to bring artificial intelligence solution to their organizations.</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
                {stories.map((story) => (
                    <div key={story.id} className="p-4 bg-white rounded shadow">
                        <div className="h-28 w-28 rounded-full overflow-hidden m-auto">
                            <img
                                src={story.image}
                                alt={story.name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <h2 className="text-lg font-bold mb-2">{story.name}</h2>
                        <p className="text-gray-600">{story.testimonial}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Customers