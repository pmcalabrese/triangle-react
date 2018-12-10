import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Message />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("Message", () => {
  let props;
  let mountedMessage;
  const message = () => {
    if (!mountedMessage) {
      mountedMessage = mount(
        <Message {...props} />
      );
    }
    return mountedMessage;
  }

  beforeEach(() => {
    props = {
      message: undefined,
      message_type: undefined,
      title: undefined,
    };
    mountedMessage = undefined;
  });
  
  // All tests will go here
  it("always renders a dl", () => {
    const dl = message().find("dl");
    expect(dl.length).toBeGreaterThan(0);
  });

  it("dl has class ts-info", () => {
    const dl = message().find("dl");
    expect(dl.hasClass("ts-info")).toBe(true);
  });

  it("dl has the class set by props", () => {
    props.message_type = "errors";
    const dl = message().find("dl");
    expect(dl.hasClass("ts-errors")).toBe(true);
  });

  it("dd contains only the message coming from the props", () => {
    props.message = "a message";
    const dd = message().find("dd");
    expect(dd.text()).toBe(props.message);
  });

  it("dt contains only the title coming from the props", () => {
    props.title = "a title";
    const dt = message().find("dt");
    expect(dt.text()).toBe(props.title);
  });


});