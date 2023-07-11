/* eslint-disable @next/next/no-img-element */
import React from 'react'
const stories = [
    {
        id: 1,
        name: 'John Doe',
        image: 'https://source.unsplash.com/featured/?person=john',
        testimonial:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum ligula ac felis congue, ut rhoncus nunc placerat. Sed nec tempor est, id fermentum tortor. Nullam feugiat mi at ligula consequat, id lacinia mauris pellentesque.',
    },
    {
        id: 2,
        name: 'Jane Smith',
        image: 'https://source.unsplash.com/featured/?person=jane',
        testimonial:
            'Pellentesque a ipsum sed justo pulvinar vulputate vitae a justo. Sed cursus euismod leo, id semper velit tincidunt in. Etiam finibus, lorem at ultrices pulvinar, lectus felis finibus turpis, sed bibendum orci felis vel arcu.',
    },
    {
        id: 3,
        name: 'Bob Smith',
        image: 'https://source.unsplash.com/featured/?person=bob',
        testimonial:
            'Sed cursus euismod leo, id semper velit tincidunt in. Etiam finibus, lorem at ultrices pulvinar, lectus felis finibus turpis, sed bibendum orci felis vel arcu. Pellentesque a ipsum sed justo pulvinar vulputate vitae a justo.',
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