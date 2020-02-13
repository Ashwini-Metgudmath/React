import React from "react";
//import MyInfo from "./components/MyInfo";
import TimeOfDay from "./components/TimeOfDay";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import ToDoItem from "./components/ToDoItems";
import ContactCard from "./components/ContactCard";
import Joke from "./components/Joke";
import JokeJson from "./Data/JokeJson";
import Product from "./components/Product";
import ProductData from "./Data/vschoolProducts";
import TodosData from "./Data/TodosData";
import StateComponent from "./components/States";
import ChangeState from "./components/ChangeState";
import Conditional from "./components/Conditional";
import LoggedInOut from "./components/LoggedInOut";
import DatafromAPI from "./components/DatafromAPI";

/*class MyApp extends React.Component{
  render(){
    return(
      <DatafromAPI />
    )
  }
}*/

/*class MyApp extends React.Component{
  render(){
    return(
      <LoggedInOut/>
    )
  }
}*/

/*class MyApp extends React.Component{
  constructor(){
    super()
    this.state = {
      isLoading : true
    }
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading:false})
    }, 2000);
  }
  render(){
    return(
      <div>
        {this.state.isLoading ? <h1>Loading..</h1> : <div><Conditional/><ChangeState/></div>}
      </div>
    )
  }
}*/


/*class MyApp extends React.Component{
  render(){
    return(
      <ChangeState />
    )
  }
}*/


/*class MyApp extends React.Component{
  render(){
    return(
      <StateComponent/>
    )
  }
}*/
/*class MyApp extends React.Component{
  render(){
    return (
      <div>
        <Header />
        <MainContent msg="Ashwini"/>
        <Footer/>
      </div>
    )
  }
  
}*/

class MyApp extends React.Component {
  constructor(){
    super()
    this.state = {
        todos : TodosData
    }
    this.handleChanged = this.handleChanged.bind(this)
}

handleChanged(id){
  this.setState(prevState =>{
    const updatedToDos = prevState.todos.map(todo =>{
      if(todo.id == id){
        todo.completed = !todo.completed
      }
      return todo
    })
    return updatedToDos
  })
    console.log(`changed ${id}`)
}
  render(){
    const todoComponents = this.state.todos.map(item => <ToDoItem key={item.id} todoList={item} handleChanged={this.handleChanged}/>);
    return <div className="todo-list">{todoComponents}</div>;
  }
 
}

/*function MyApp(){
  return(
    <div>
        <ContactCard 
        Name="Ashwini"
        imgUrl="http://placekitten.com/400/200"
        phoneNo="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
        />
        <ContactCard 
        Name="John"
        imgUrl="http://placekitten.com/400/200"
        phoneNo="(212) 234-1638"
        email="ofworlds@yahoo.com"
        />
        <ContactCard 
        Name="Dia"
        imgUrl="http://placekitten.com/400/200"
        phoneNo="(212) 124-5432"
        email="fluff@me.com"
        />
    </div>
  )
}*/

/*function MyApp(){
  const jokesComponent = JokeJson.map(joke => <Joke question={joke.question} answer={joke.punchLine}/>);
  return(
    <div>
      {jokesComponent}
    </div>
  )
}*/

/*function MyApp(){
  const productComponent = ProductData.map(productItem => <Product product={productItem}/>);
  return(
    <div>
      {productComponent}
    </div>
      
  )
}*/

export default MyApp;
