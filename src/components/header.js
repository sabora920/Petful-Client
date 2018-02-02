import React from 'react'
import './header.css'

export default function Header(props){
    return (
        <header>
            <h2>Hello my name is: { props.nameH }</h2>
            <img src={ props.imageURL } alt={ props.description } className="pet-image"/>
            <ul>
                <li>{ props.sex }</li>
                <li>{ props.age }</li>
                <li>{ props.breed }</li>
                <li>{ props.story }</li>
            </ul>
        </header>
    )
}