import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import validate from 'jsvat';
import SearchBar from './components/searchvat';
import VatDetails from './components/vatDetails';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      name: '',
      isoCode: '',
      isValid: '',
      value: '',
    }
  }
  componentDidMount(){
    this.VatSearchNum('EE100247019');
  }
  VatSearchNum (term){
    try {
      const name = validate.checkVAT(term).country.name;
      const isoCode = validate.checkVAT(term).country.isoCode;
      const isValid = validate.checkVAT(term).isValid;
      const value = validate.checkVAT(term).value;
      this.setState({ value: value, name: name, isoCode: isoCode, isValid: isValid }, function () {
        console.log(this.state.name + this.state.value + this.state.isValid);
        console.log(this.state.isoCode);
      });
    } catch (errors) {
      const name = null;
      const isoCode = 0;
      const isValid = null;
      const value = null;
      this.setState({ value: value, name: name, isoCode: isoCode, isValid: isValid }, function () {
        console.log(this.state.name + this.state.value + this.state.isValid);
        console.log(this.state.isoCode);
      });
    }
    
  }
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          
          <SearchBar onSearchTermChange={term => this.VatSearchNum(term)}/>
          <p>
            <VatDetails 
                 name = {this.state.name}
                 value = {this.state.value}
                 isValid = {this.state.isValid}
                 isoCode = {this.state.isoCode}/>
          </p>
          
        </header>
      </div>
    );
  }
}

export default App;
