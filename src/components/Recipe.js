import React, { Component } from 'react'

export default class Recipe extends Component {
  render() {
   
    return (
        <React.Fragment>
          <div className= 'col-10 mx-auto col-md-6 col-lg-4 my-3'>
          <div className= 'card'>
         <img src={this.props.image} 
            className = 'img-card-top'
            style={{height:'14rem'}} 
            />
            <div className = 'card-body text-capitalize'>
            <h5 className = 'text-slanted'>{this.props.title}</h5>
            <h6 className = 'text-slanted'>Provided by {this.props.publisher}</h6>

            </div>
            <div className = 'card-footer'>
            <button type='button'
             className ='btn btn-primary'
             onClick = {this.props.click}>Details</button>
            <a href ={this.props.source_url} target='_blank'className = 'btn btn-success mx-2'>Recipe URL</a>
            </div>
          </div>
          </div>
      </React.Fragment>
    )
  }
}
