import * as React from 'react';
import { shallow } from 'enzyme';
import LodgementInitialsing from '../LodgementInitialsing-file';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom'; //-----this from local install library

describe('Test <LodgementInitialsing /> Component', () => {
  let LodgementInitialisingProps;
  beforeEach(() => {
    LodgementInitialisingProps = {};
  });

  it('should show expected loading Busy message after 10 seconds for house validate', async () => {
    jest.useFakeTimers();
    window.Shell.user.region = 'Australia';
    const waitingMsg = 'Longer loading time';
    render(<LodgementInitialising housevalidation={true} />);
    expect(screen.getByText('validating...')).toBeInTheDocument;
    // this won't show if within 10 second, that's why `not`
    expect(screen.getByText(waitingMsg)).not.toBeInTheDocument;
    //fast-forward 10 seconds
    act(() => jest.advanceTimerByTime(10000));
    expect(screen.getByText('validating...')).toBeInTheDocument;
    expect(screen.getByText(waitingMsg)).toBeInTheDocument;
    jest.useRealTimers();
  });
});
