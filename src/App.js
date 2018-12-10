import React, { Component } from "react";
import "./App.css";
import Triangle from "./libs/Triangle";
import Message from "./components/Message";

class App extends Component {
  a = null;
  b = null;
  c = null;

  constructor(props) {
    super(props);
    this.state = {
      result: "",
      sides: [],
      error_message: "",
      side_a_has_errors: false,
      side_b_has_errors: false,
      side_c_has_errors: false,
      form_valid: false
    };
  }

  formIsValid() {
    const a = parseFloat(this.a.value);
    const b = parseFloat(this.b.value);
    const c = parseFloat(this.c.value);
    const is_valid = !(isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0);
    this.setState({
      form_valid: is_valid
    })
    return {a,b,c,is_valid};
  }

  submitForm = e => {
    e.preventDefault();

    const {a,b,c,is_valid} = this.formIsValid()

    if (!is_valid) {
      this.setState({
        result: "",
        sides: [],
        error_message: "Inputs are not valid"
      });
      return;
    }

    try {
      const triangle = new Triangle(a, b, c);
      this.setState({
        result: triangle.type(),
        error_message: "",
        sides: [a, b, c]
      });
    } catch (error) {
      this.setState({
        result: "",
        sides: [],
        error_message: error.message
      });
    }

    this.a.value = "";
    this.b.value = "";
    this.c.value = "";
    this.setState({
      side_a_has_errors: false,
      side_b_has_errors: false,
      side_c_has_errors: false,
      form_valid: false
    })
  };

  onSideChange(e, side) {
    const { value } = e.target;
    const parsedValue = parseFloat(value)
    const update_state = {}
    update_state[`side_${side}_has_errors`] = (parsedValue <= 0) || isNaN(parsedValue);
    this.setState(update_state, this.formIsValid);
  }

  render() {
    const { result, sides, error_message, side_a_has_errors, side_b_has_errors, side_c_has_errors, form_valid } = this.state;

    return (
      <div className="App">
        <h1>Triangle</h1>
        <form data-ts="Form" onSubmit={this.submitForm}>
          <fieldset>
            <label className={ side_a_has_errors ? "ts-error" : ""}>
              <span>Side A</span>
              <input id="side_a" onBlur={ e => this.onSideChange(e, "a") } onChange={ e => this.onSideChange(e, "a") } ref={e => (this.a = e)} type="number" placeholder="type length of side A" />
            </label>
            <label className={ side_b_has_errors ? "ts-error" : ""}>
              <span>Side B</span>
              <input id="side_b" onBlur={ e => this.onSideChange(e, "b") } onChange={ e => this.onSideChange(e, "b") } ref={e => (this.b = e)} type="number" placeholder="type length of side B"/>
            </label>
            <label className={ side_c_has_errors ? "ts-error" : ""}>
              <span>Side C</span>
              <input id="side_c" onBlur={ e => this.onSideChange(e, "c") } onChange={ e => this.onSideChange(e, "c") } ref={e => (this.c = e)} type="number" placeholder="type length of side C"/>
            </label>
            <button disabled={ !form_valid } data-ts="Button" className="ts-primary" type="submit">
              Evaluate
            </button>
            {error_message ? (
              <Message message_type="errors" title="Error" message={error_message} />
            ) : result ? (
              <Message message_type="info" title="Result" message={`The triangle with sides: ${sides.join(",")} is ${result}`} />
            ) : null}
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
