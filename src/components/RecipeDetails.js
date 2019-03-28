import React, { Component } from 'react'
import {recipe} from '../tempDetails'

export default class RecipeDetails extends Component {
    state = {
        recipe:recipe,
        url:`https://www.food2fork.com/api/get?key=bf3cf9e1379e9df66ea9f70e81b14360&rId=${this.props.id}`
    }
    /*async componentDidMount(){
        try{
            const data = await fetch(this.state.url);
            const jsonData = await data.json();
            this.setState({recipe:jsonData.recipe})
          }catch(error){
            console.log(error);
          }
    }
    */
  render() {
      const {    image_url,
                 publisher,
                 publisher_url,
                 source_url,
                 title,
                 ingredients
    } = this.state.recipe
    return (
        <React.Fragment>
          <div className = 'container'>
          <div className = 'row'>
          <div className = 'col-10 mx-auto col-md-6 my-5'>
          <button className = 'btn btn-warning mb-3'
          onClick={this.props.back}>Back To Recipe List</button>
          <img src={image_url} className ='d-block w-100' />
          </div>
          <div className = 'col-1o mx-auto col-md-6 my-5'>
          <h5 className = 'text-uppercase'>{title}</h5>
          <h6 className = 'text-capitalize text-slanted text-primary'>provided by {publisher}</h6>
          <a href ={publisher_url} target='_blank'className = 'btn btn-success mx-2 mt-3'>Publisher Web Page</a>
          <a href ={source_url} target='_blank'className = 'btn btn-success mx-2 mt-3'>Recipe URL</a>
          
          <ul className = 'list-group mt-4'>
          <h2 className="mt-3 mb-4">Ingredients</h2>
          {
           ingredients.map((i,index)=>{
              return <li key={index} className="list-group-item text-slanted">{i}</li>
           })   
          }
          </ul>

          </div>
          </div>
          </div>
      </React.Fragment>
    )
  }
}
