import React, { Component } from 'react'
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch'

export default class RecipeList extends Component {
  render() {
     const {recipes} = this.props;
     //const recipess = recipes.filter(r=>r.title !== null)
     
  
    return (
      <React.Fragment>
          <RecipeSearch value = {this.props.value}
          handlChange = {this.props.handlChange}
          handlSubmit = {this.props.handlSubmit} />
          <div className = 'container'>
          <div className = 'row'>
          <div className = 'col-10 mx-auto col-md-6 text-center text-uppercase mb-3'>
          <h1 className = 'text-slanted'>recipe list</h1>
          </div>
          </div>
          <div className = 'row'>
          {
              this.props.error?<h1 className = 'text-center text-danger'>{this.props.error}</h1>:
              this.props.recipes.map(rec=>{
                  return <Recipe key={rec.recipe_id}
                   image={rec.image_url}
                   title={rec.title}
                   publisher={rec.publisher}
                   source_url={rec.source_url} 
                   click={()=>this.props.detail(rec.recipe_id)}
                   />
              })
          }
          </div>
          </div>
          
          <Recipe />
      </React.Fragment>
    )
  }
}
