import React from 'react'

function FlightsCard({ flights }) {
    return (
        <div className='w-full border-2 ml-4 mr-4 p-4 rounded-md'>
            <div className='flex flex-col items-center'>
                <img
                    className='h-36 w-54 hover:cursor-pointer border-4 rounded-lg'
                    src={flights.image} />
                <h4 className='text-lg my-6 font-serif font-medium text-green-700'>{flights.title}</h4>
                <ul className='list-disc mx-auto'>
                    {flights.items.map((item, key) => (
                        <li key={key} className='text-slate-900 mr-6 ml-6'>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FlightsCard