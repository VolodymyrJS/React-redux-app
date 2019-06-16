import React from 'react';
import TestRenderer from 'react-test-renderer';
import Button from './components/Button';

describe('Button', () => {
  it('renders', () => {
    const buttonProps = { increment: 7 };
    const tree = TestRenderer.create(<Button {...buttonProps} />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.children[0]).toEqual('+ ');
    expect(tree.children[1]).toEqual('7');
  });
});
