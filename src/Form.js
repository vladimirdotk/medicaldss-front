import React, {Component} from 'react';
import InfoBlock from './InfoBlock';
import Button from './Button';

class Form extends Component {

  state = {
    tromb: {name: "Тромбоциты", value: ""},
    pti: {name: "ПТИ", value: ""},
    fibr: {name: "Фибриноген", value: ""},
    achtv: {name: "АЧТВ", value: ""},
    sag: {name: "Sag", value: ""},
    fv: {name: "ФВ", value: ""},
    rkfm: {name: "РКФМ", value: ""},
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit({
      tromb: parseFloat(this.state.tromb.value),
      pti: parseFloat(this.state.pti.value),
      fibr: parseFloat(this.state.fibr.value),
      achtv: parseFloat(this.state.achtv.value),
      sag: parseFloat(this.state.sag.value),
      fv: parseFloat(this.state.fv.value),
      rkfm: parseFloat(this.state.rkfm.value)
    });
  } 

  renderInputs = () => {
    const inputs = [];
    
    for (let param in this.state) {
      if (this.state.hasOwnProperty(param)) {
        inputs.push(
          this.getLabel(param),
          this.getInput(param)
        );
      }
    }

    return inputs;
  }

  getLabel = (param) => {
    return (
      <label key={"label-" + param} htmlFor={param} className="sr-only">
        {param}
      </label>
    );
  } 

  getInput = (param) => {
    return (
      <input
        id={param}
        key={"element-" + param}
        type="number"
        step="0.01"
        className="form-control"
        placeholder={this.state[param].name}
        value={this.state[param].value}
        onChange={this.handleChange(param)}
        required/>
    );
  }

  handleChange = param => event => {
    this.setState({
      [param]: Object.assign(this.state[param], {value: event.target.value})
    });
  }

  render() {
    return (
      <React.Fragment>
        <InfoBlock text={"Введите данные для нейросетевого анализа:"} />
        <form onSubmit={this.onSubmit}>
          {this.renderInputs()}
          <br/>
          <Button text={"Подтвердить"} type="submit"/>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;