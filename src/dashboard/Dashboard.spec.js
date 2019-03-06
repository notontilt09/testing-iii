// Test away
// This is parent component of <Display /> and <Controls />
import React from 'react';
import { render, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    describe('Lock/Unlock Button functionality', () => {
        it('lock button should lock gate if gate is closed', () => {
            const { getByText } = render(<Dashboard />)
            const closeBtn = getByText(/close gate/i);
            const lockBtn = getByText(/Lock Gate/i);
            // close the gate to enable lock button for testing
            fireEvent.click(closeBtn);
            const locked = getByText(/Unlocked/);
            // expect display to show unlocked now
            expect(locked).toHaveClass('green-led');
            fireEvent.click(lockBtn);
            expect(locked).toHaveClass('red-led');
        });
    });

    describe('Open/Close Button functionality', () => {
        
    });
});