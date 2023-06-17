import React from 'react'
import TravelsBackground from '../assets/media/backgroundTravels2.jpg';
import '../styles/travels.css'
import TravelCard from '../components/TravelCard';
const Travels = () => {

    const travels = [
        {
            name: "Cancun",
            duration : " 9 Dias y 7 Noches",
            price: 15000,
            departures: "Julio: 21, 22, 24, 25, 27, 28, 29, 30",
            image: "https://www.eleconomista.com.mx/__export/1664408992149/sites/eleconomista/img/2022/09/27/cancun_shutterstock_2114994596_x1x.jpg_1902800913.jpg",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti velit dolore quis assumenda, dolorem beatae?"
        },
        {
            name: "Playa del Carmen",
            duration : " 9 Dias y 7 Noches",
            price: 25000,
            departures: "Julio: 21, 22, 24, 25, 27, 28, 29, 30",
            image: "https://tipsparatuviaje.com/wp-content/uploads/2018/07/Playa-del-Carmen-2.jpg",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti velit dolore quis assumenda, dolorem beatae?"
        },
        {
            name: "Tulum",
            duration : " 9 Dias y 7 Noches",
            price: 35000,
            departures: "Julio: 21, 22, 24, 25, 27, 28, 29, 30",
            image: "https://tipsparatuviaje.com/wp-content/uploads/2018/07/Tulum-playa-1.jpg",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti velit dolore quis assumenda, dolorem beatae?"
        },
        {
            name: "Isla Cozumel",
            duration : " 9 Dias y 7 Noches",
            price: 10000,
            departures: "Julio: 21, 22, 24, 25, 27, 28, 29, 30",
            image: "https://tipsparatuviaje.com/wp-content/uploads/2018/07/Isla-Cozumel.jpg",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti velit dolore quis assumenda, dolorem beatae?"
        },
        {
            name: "Los Cabos",
            duration : " 9 Dias y 7 Noches",
            price: 25000,
            departures: "Julio: 21, 22, 24, 25, 27, 28, 29, 30",
            image: "https://tipsparatuviaje.com/wp-content/uploads/2018/07/Los-Cabos.jpg",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti velit dolore quis assumenda, dolorem beatae?"
        },
        {
            name: "Puerto Vallarta",
            duration : " 9 Dias y 7 Noches",
            price: 15000,
            departures: "Julio: 21, 22, 24, 25, 27, 28, 29, 30",
            image: "https://a.cdn-hotels.com/gdcs/production154/d1097/6780fc5b-f736-4433-ba3d-f2219ec1cec6.jpg",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti velit dolore quis assumenda, dolorem beatae?"
        },
        {
            name: "Ixtapa",
            duration : " 9 Dias y 7 Noches",
            price: 11000,
            departures: "Julio: 21, 22, 24, 25, 27, 28, 29, 30",
            image: "https://static.barcelo.com/content/dam/bhg/master/es/hoteles/mexico/ixtapa/hotel-barcelo-ixtapa/main-photos/hotel/BIXT_POOL_27.jpg",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti velit dolore quis assumenda, dolorem beatae?"
        },
        {
            name: "Chiapas",
            duration : " 9 Dias y 7 Noches",
            price: 10000,
            departures: "Julio: 21, 22, 24, 25, 27, 28, 29, 30",
            image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/245000/245482-Chiapas.jpg",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti velit dolore quis assumenda, dolorem beatae?"
        },
        {
            name: "Orizaba",
            duration : " 9 Dias y 7 Noches",
            price: 8000,
            departures: "Julio: 21, 22, 24, 25, 27, 28, 29, 30",
            image: "https://www.unotv.com/uploads/2023/02/orizaba-pueblo-magico-145804.jpg",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti velit dolore quis assumenda, dolorem beatae?"
        },
        {
            name: "Acapulco",
            duration : " 9 Dias y 7 Noches",
            price: 9000,
            departures: "Julio: 21, 22, 24, 25, 27, 28, 29, 30",
            image: "https://media.staticontent.com/media/pictures/2ee7f9f0-3498-48dc-824a-074a455d6b99",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti velit dolore quis assumenda, dolorem beatae?"
        },
    ]



  return (
    <div name="travels" className='Travels'>
        <div className="travels-overlay"></div>
        {travels.map(travel => (
            <TravelCard name={travel.name} price={travel.price} image={travel.image} description={travel.description}  />
        ))}
    </div>
  )
}

export default Travels