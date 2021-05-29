import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src='images/img-9.jpg'
                        altText= 'Waterfall'
                        text='Expore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem
                        src='images/img-2.jpg'
                        altText= 'Bali'
                        text='Travel throught the islands of Bali in a private cruise'
                        label='Luxery'
                        path='/services'
                        />
            
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src='images/img-9.jpg'
                        altText= 'Waterfall'
                        text='Expore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem
                        src='images/img-2.jpg'
                        altText= 'Bali'
                        text='Travel throught the islands of Bali in a private cruise'
                        label='Luxery'
                        path='/services'
                        />
                         <CardItem
                        src='images/img-2.jpg'
                        altText= 'Bali'
                        text='Travel throught the islands of Bali in a private cruise'
                        label='Luxery'
                        path='/services'
                        />
            
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
