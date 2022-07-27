import { render } from '@testing-library/react';

import Cc from './cc';

describe('Cc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cc />);
    expect(baseElement).toBeTruthy();
  });
});
