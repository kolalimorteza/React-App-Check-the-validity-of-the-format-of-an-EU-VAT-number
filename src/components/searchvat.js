import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      term: '',
    };
  }
  render() {
    return (
      <div className="search-bar">
        <label htmlFor="login-name">Please Enter Vat number</label>
        <i className="grey fa fa-user" />
        <input type="text" name="name" className="form-control" 
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)} placeholder="Name" />
        <br/>
        value of the input : {this.state.term}
        <br/>
        There are few valid codes : ATU00000024 / BE0414445663 / atu5-150-7409
        <br/>
        There are few invalid codes : ATU10223001 / BE0000200334 / RU5027187067
      </div>
    );
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;