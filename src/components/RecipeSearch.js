import React, { Component } from 'react'

export default class RecipeSearch extends Component {
  render() {
    return (
        <React.Fragment>
          <div className = 'container'>
          <div className = 'row'>
          <div className = 'col-10 mx-auto col-md-8 mt-5 text-center'>
          <h1 className = 'text-capitalize text-slanted'>search for recipe with{' '}
          <strong className = 'text-danger'>food2fork API</strong></h1>
          <form className = 'my-5' onSubmit = {this.props.handlSubmit}>
          <label htmlFor = 'search' className = 'text-capitalize'>
          type recipes separated by comma</label>
          <div className = 'input-group'>
          <input type = 'text' name = 'search' placeholder = 'chiken,onions,carrots' 
          className = 'form-control'
          value = {this.props.value}
          onChange = {this.props.handlChange}/>
          <div className = 'input-group-append'>
          <button className = 'input-group-text bg-primary text-white'>
          <i className = 'fas fa-search' />
          </button>
          </div>
          </div>
          </form>
          
          </div>
          </div>
          </div>
      </React.Fragment>
    )
  }
}
