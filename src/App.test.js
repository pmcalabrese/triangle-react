import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { mount } from 'enzyme';

describe("Message", () => {
  let mountedApp;
  const app = () => {
    if (!mountedApp) {
      mountedApp = mount(<App />);
    }
    return mountedApp;
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the form", () => {
    const form = app().find("form");
    expect(form.length).toBeGreaterThan(0);
  });

  it("renders the 3 inputs for the triangle sides", () => {
    const inputs = app().find("input[type='number']");
    expect(inputs.length).toBe(3);
  });

  it("renders the form submit button", () => {
    const button = app().find("button[type='submit']");
    expect(button.length).toBe(1);
  });

  it("renders a disabled submit button on start", () => {
    const button = app().find("button[type='submit']");
    expect(button.exists('[disabled]')).toEqual(true);
  })

  it("does not render a result info or error message on start", () => {
    const button = app().find("dl");
    expect(button.length).toBe(0);
  })

  // check the inital state

  it("renders without input side A errors on start", () => {
    expect(app().state().side_a_has_errors).toBe(false);
  })

  it("renders without input side B errors on start", () => {
    expect(app().state().side_b_has_errors).toBe(false);
  })

  it("renders without input side C errors on start", () => {
    expect(app().state().side_c_has_errors).toBe(false);
  })

  it("renders without input side C errors on start", () => {
    expect(app().state().side_c_has_errors).toBe(false);
  })

  it("renders with the form_valid set to false", () => {
    expect(app().state().form_valid).toBe(false);
  })

  it("sides is an empty array on start", () => {
    expect(app().state().sides.length).toBe(0);
  })

  it("results is an empty string on start", () => {
    expect(app().state().result).toBe("");
  })

  it("results is an empty string on start", () => {
    expect(app().state().error_message).toBe("");
  })
  
  it("renders a enabled submit button if all the 3 inputs are valid", () => {
    const input_a = app().find("input[name='side_a']");
    const input_b = app().find("input[name='side_b']");
    const input_c = app().find("input[name='side_c']");
    input_a.instance().value = "3";
    input_b.instance().value = "3";
    input_c.instance().value = "3";
    input_a.simulate('change');
    input_b.simulate('change');
    input_c.simulate('change');
    const button = app().find("button[type='submit']");
    expect(button.prop("disabled")).toEqual(false)
  })

  it("renders a disabled submit button if the sida A input is negative number", () => {
    const input_a = app().find("input[name='side_a']");
    const input_b = app().find("input[name='side_b']");
    const input_c = app().find("input[name='side_c']");
    input_a.instance().value = "-3";
    input_b.instance().value = "3";
    input_c.instance().value = "3";
    input_a.simulate('change');
    input_b.simulate('change');
    input_c.simulate('change');
    const button = app().find("button[type='submit']");
    expect(button.prop("disabled")).toEqual(true)
  })

  it("renders a disabled submit button if the sida B input is negative number", () => {
    const input_a = app().find("input[name='side_a']");
    const input_b = app().find("input[name='side_b']");
    const input_c = app().find("input[name='side_c']");
    input_a.instance().value = "3";
    input_b.instance().value = "-3";
    input_c.instance().value = "3";
    input_a.simulate('change');
    input_b.simulate('change');
    input_c.simulate('change');
    const button = app().find("button[type='submit']");
    expect(button.prop("disabled")).toEqual(true)
  })

  it("renders a disabled submit button if the sida C input is negative number", () => {
    const input_a = app().find("input[name='side_a']");
    const input_b = app().find("input[name='side_b']");
    const input_c = app().find("input[name='side_c']");
    input_a.instance().value = "3";
    input_b.instance().value = "3";
    input_c.instance().value = "-3";
    input_a.simulate('change');
    input_b.simulate('change');
    input_c.simulate('change');
    const button = app().find("button[type='submit']");
    expect(button.prop("disabled")).toEqual(true)
  })

  it("renders a disabled submit button if the sida A input is zero", () => {
    const input_a = app().find("input[name='side_a']");
    const input_b = app().find("input[name='side_b']");
    const input_c = app().find("input[name='side_c']");
    input_a.instance().value = "0";
    input_b.instance().value = "3";
    input_c.instance().value = "3";
    input_a.simulate('change');
    input_b.simulate('change');
    input_c.simulate('change');
    const button = app().find("button[type='submit']");
    expect(button.prop("disabled")).toEqual(true)
  })

  it("renders a disabled submit button if the sida B input is zero", () => {
    const input_a = app().find("input[name='side_a']");
    const input_b = app().find("input[name='side_b']");
    const input_c = app().find("input[name='side_c']");
    input_a.instance().value = "3";
    input_b.instance().value = "0";
    input_c.instance().value = "3";
    input_a.simulate('change');
    input_b.simulate('change');
    input_c.simulate('change');
    const button = app().find("button[type='submit']");
    expect(button.prop("disabled")).toEqual(true)
  })

  it("renders a disabled submit button if the sida C input is zero", () => {
    const input_a = app().find("input[name='side_a']");
    const input_b = app().find("input[name='side_b']");
    const input_c = app().find("input[name='side_c']");
    input_a.instance().value = "3";
    input_b.instance().value = "3";
    input_c.instance().value = "0";
    input_a.simulate('change');
    input_b.simulate('change');
    input_c.simulate('change');
    const button = app().find("button[type='submit']");
    expect(button.prop("disabled")).toEqual(true)
  })

  it("renders input A with a `ts-error` class", () => {
    const input_a = app().find("input[name='side_a']");
    input_a.instance().value = "0";
    input_a.simulate('change');
    expect(input_a.hasClass("ts-error"))
  })

  it("renders input B with a `ts-error` class", () => {
    const input_b = app().find("input[name='side_b']");
    input_b.instance().value = "0";
    input_b.simulate('change');
    expect(input_b.hasClass("ts-error"))
  })

  it("renders input C with a `ts-error` class", () => {
    const input_c = app().find("input[name='side_c']");
    input_c.instance().value = "0";
    input_c.simulate('change');
    expect(input_c.hasClass("ts-error"))
  })

});
