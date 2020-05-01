import React from 'react';
import { mount } from 'enzyme';
import Home from './index';
import FlavorService from '../../services/FlavorService';
import * as should from 'should';

describe("Home", () => {
  let sandbox, wrapper;
  beforeEach(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(FlavorService, 'list').resolves([
      'Cappuccino',
      'Latte'
    ])
  })

  afterEach(() => {
    sandbox.restore();
    wrapper && wrapper.unmount();
  })

  function render() {
    wrapper = mount(<Home />);
  }

  it("should render Home component", () => {
    render()
    expect(wrapper.text()).to.contain('Frappuccino');
  });

  it("should call FlavorService list", () => {
    render()

    wrapper.update();
    FlavorService.list.should.have.been.called;
  });
});