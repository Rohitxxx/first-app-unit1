import React from 'react'

const obj = [
    {
        id: 1,
        name: 'rohit',
        std: '10',
        address: 'VNS'
    }, {
        id: 2,
        name: 'krishna',
        std: '11',
        address: 'deoria'
    }, {
        id: 3,
        name: 'mukul',
        std: '10',
        address: 'Shamli'
    }, {
        id: 4,
        name: 'Gorakh',
        std: '10',
        address: 'Gorakhpur'
    },
]

const Contact = () => {
    return (
        <div>
            {obj.map((item, index) =>
                <div key={index}>
                    <h2>{item.id}</h2>
                    <h1>{item.name}</h1>
                    <h4>{item.std}</h4>
                    <h4>{item.address}</h4>
                </div>
            )}
        </div>
    )
}

export default Contact