import React from 'react';
// import { connect } from 'react-redux';
import Pet from './pet';
//import fetchcats and fecth dogs from actions 

export class Dashboard extends React.Component {

    // componentDidMount(){
    //     this.props.dispatch(fecthCats);
    //     this.props.dispatch(fetchDogs);
    // }

    render(){
        return (
            <div>
                <section>
                    <div className="cat-section">
                            <Pet 
                                name={this.props.catsToAdopt.name}
                                imageURL={this.props.catsToAdopt.imageURL} 
                                description={this.props.catsToAdopt.imageDescription}
                                sex={this.props.catsToAdopt.sex}
                                age={this.props.catsToAdopt.age}
                                breed={this.props.catsToAdopt.breed}
                                story={this.props.catsToAdopt.story}
                            />
                    </div>
                </section>
                <section>
                    <div className="dog-section">
                            <Pet 
                                name={this.props.dogsToAdopt.name} 
                                imageURL={this.props.dogsToAdopt.imageURL} 
                                description={this.props.dogsToAdopt.imageDescription}
                                sex={this.props.dogsToAdopt.sex}
                                age={this.props.dogsToAdopt.age}
                                breed={this.props.dogsToAdopt.breed}
                                story={this.props.dogsToAdopt.story}
                            />
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    catsToAdopt: undefined,
    dogsToAdopt: undefined
})

// export default connect(mapStateToProps)(Dashboard)
export default Dashboard