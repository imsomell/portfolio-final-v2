import React from 'react'
import Card from './Card'
import './Cards.css'



function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Card
                        src="/images/img-9.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path='/services'
                        />
                         <Card
                        src="/images/img-2.jpg"
                        text="Experience the unexpected travel"
                        label="Cozy"
                        path='/services'
                        />
                         <Card
                        src="/images/img-3.jpg"
                        text="Travel through the Islands of Palawan in a private cruise"
                        label="Luxury"
                        path='/services'
                        />
                        <Card
                        src="/images/img-4.jpg"
                        text="How much does an Australian Road Trip really cost?"
                        label="Adventure"
                        path='/services'
                        />
                        <Card
                        src="/images/img-5.jpg"
                        text="Educational tours in Japan"
                        label="Luxury"
                        path='/services'
                        />
                        <Card
                        src="/images/img-6.jpg"
                        text="Whether it’s colonial-era laneways or bustling street markets, Hong Kong is an ideal city to explore."
                        label="Luxury"
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>   
    )
}

export default Cards
