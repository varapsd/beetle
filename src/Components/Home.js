import React from 'react'
import { Button,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from '../App'
import Search from './Search'
import Login from './Login'
import Result from './Result'
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          branches : []
        };
        this.search = this.search.bind(this);
    }
    search(pincode){
        fetch("http://localhost:8080/search/"+pincode)
       .then(res => res.json())
       .then(response =>{
           console.log(response);
           this.setState({branches : response});
       })
    }
    render(){
        return(
        <div className="container">
            <Row>
                <Col className="h1">Welcome to the Beenut Hunt</Col>
                <Col sm="1"><Login /></Col>
            </Row>
            <Search search={this.search}/>
            <Result branches = {this.state.branches}/>
        </div>
        )
    }
}   

export default Home;