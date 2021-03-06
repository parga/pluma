import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import {Home} from './index';
import {withIntl} from '../../utils/testUtils';

describe('Home', () => {
  test('that it renders all the elements', () => {
    render(withIntl(<Home userId={''} setUserId={() => {}} />));
    const linkElement = screen.getByText(/Sign In/i);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole('button');
    const subTitle = screen.getByText(/What is your sign-in email address?/)
    expect(linkElement).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });

  test('that the button gets activated when text added to the input', () => {
    function HomeWithState() {
      const [state, setState] = useState('');
      return (<Home userId={state} setUserId={setState} />);
    }

    render(withIntl(<HomeWithState />));
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    userEvent.type(input, 'foo');
    expect(button).toBeEnabled();
  })

})
