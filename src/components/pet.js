import React from 'react'
import Header from './header'

export default function Pet(props){
    if(props.loading){
        return (
            <div className="loading-screen">
                <h2>Loading...</h2>
            </div>
        )
    } 
    return (
        <div>
            <Header 
                nameH={ props.name } 
                imageURL={ props.imageURL }
                description={ props.description } 
                sex={ props.sex }
                age={ props.age }
                breed={ props.breed }
                story={ props.story }
                /> 
            {/* <Button /> */}
        </div>
    )
}