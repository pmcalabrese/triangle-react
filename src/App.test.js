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
  
// TODO: fix this
  xit("renders a enabled submit button if all the 3 inputs are valid", () => {
    const MountedApp = app()
    const input_a = MountedApp.find("input#side_a");
    const input_b = MountedApp.find("input#side_b");
    const input_c = MountedApp.find("input#side_c");
    input_a.prop('onChange')({ target: { value: "6" } })
    input_b.prop('onChange')({ target: { value: "6" } })
    input_c.prop('onChange')({ target: { value: "6" } })
    const button = MountedApp.find("button[type='submit']");
    expect(button.exists("[disabled]")).toEqual(false);
  })

});
