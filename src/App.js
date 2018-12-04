import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ImgBlock from './ImgBlock';
import Form from './Form';
import Loader from './Loader';
import Results from './Results';
import axios from 'axios';

class App extends Component {

  state = {
    show: 'form',
    labData: {},
    loading: false,
    results: ''
  }

  renderForm = () => <Form handleSubmit={this.handleSubmit}/>

  renderLoader = () => <Loader />

  renderResults = () => <Results text={this.state.results} handleBack={this.handleBack} />

  handleBack = () => {
    this.setState({show: 'form', labData: [], results: ''});
  }

  handleSubmit = (labData) => {
    this.setState({ loading: true, labData: labData }, () => {
      setTimeout(() => {

        axios.post(
          "https://api.medicaldss.com/api/leptospirosis/neuralnetwork/",
          this.state.labData
        )
        
        .then((data) => {
          if (data.data["coagulopathy_option"]) {
            this.setState({loading: false, show: 'results', results: data.data["coagulopathy_option"]})
          } else {
            throw new Error(data.data);
          }
        })

        .catch((error) => {
          this.setState({loading: false, show: 'results', results: error.toString()})
        })

      }, 1000);
    });
  }

  renderData = () => {
    switch (this.state.show) {
      case "form":
        return this.renderForm();
      case "results":
        return this.renderResults();
      default:
        break;
    }
  }

  render() {

    if (this.state.loading) {
      return this.renderLoader()
    }

    return (
      <div className="text-center">
        <Header name={"Дифференциальная диагностика коагулопатии при лептоспирозе"} />
        <ImgBlock />
        {this.renderData()}
      </div>
    );
  }
}

export default App;
