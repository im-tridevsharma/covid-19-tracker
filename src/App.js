import React from 'react';
import { Cards, Charts, CountryPicker, Brand } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component{

  state = {
    data : {},
    country : ''
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data : fetchedData});
  }

  countryChangeHandler = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({data : fetchedData, country: country});
  }

  render()
  {
    const {data, country} = this.state;

    return (
      data ? (
      <div className={styles.container}>
        <Brand />
        <Cards data={ data }/>
        <CountryPicker countryChangeHandler = { this.countryChangeHandler }/>
        <Charts data={ data } country={ country } />
      </div> ) : 'Please check your network connection!'
    )
  }
}

export default App;