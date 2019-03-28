import React, { Component } from 'react';
import {recipes} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  state={
    recipes:recipes,
    url:'https://www.food2fork.com/api/search?key=bf3cf9e1379e9df66ea9f70e81b14360',
    detail:35388,
    list:true,
    search:'',
    base_url:'https://www.food2fork.com/api/search?key=bf3cf9e1379e9df66ea9f70e81b14360',
    query:'&q=',
    error:''
  }
  hadlChange = e=>{
    
this.setState({search:e.target.value})
  }
  handlSubmit = e => {
    e.preventDefault()
    const{search,query,base_url} = this.state;
this.setState(()=>{
  return {url:`${base_url}${query}${search}`,search:''}
},()=>{
this.getRecipes();
})
  }
  async getRecipes(){
    try{
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      if(jsonData.recipes.length === 0){
        this.setState({error:'Sorry No Result Found For Your Search'})
      }else{
        this.setState({recipes:jsonData.recipes})
      }
    }catch(error){
      
    }
    
  }/*
  componentDidMount(){
    this.getRecipes();
  }
  
  
  */
  detail = (id)=>{
this.setState({detail:id,list:false})
  }
  back = ()=>{
    this.setState({list:true})
      }
  render() {
    
       return (
      <div >
        {this.state.list?<RecipeList 
        recipes={this.state.recipes} 
        detail={this.detail} 
        value ={this.state.search}
        handlChange = {this.hadlChange}
        handlSubmit = {this.handlSubmit}
        error = {this.state.error}/>:
        <RecipeDetails id={this.state.detail} back={this.back} />}

      </div>
    );
  }
}

export default App;
