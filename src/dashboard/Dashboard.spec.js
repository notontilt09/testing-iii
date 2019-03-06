// Test away
// This is parent component of <Display /> and <Controls />
import React from 'react';
import { render, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    describe('Lock/Unlock Button functionality', () => {
        it('lock button should lock gate if gate is closed and unlocked', () => {
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

        it('lock button should unlock gate if gate is closed and locked', () => {
            const { getByText } = render(<Dashboard />)
            const closeBtn = getByText(/close gate/i);
            const lockBtn = getByText(/Lock Gate/i);
            // close the gate to enable lock button for testing
            fireEvent.click(closeBtn);
            const locked = getByText(/Unlocked/);
            // expect display to show unlocked now
            expect(locked).toHaveClass('green-led');
            // first click locks
            fireEvent.click(lockBtn);
            // second click unlocks
            fireEvent.click(lockBtn);
            expect(locked).toHaveClass('green-led');
        });
    });

    describe('Open/Close Button functionality', () => {
        it('should open gate if gate is closed and unlocked', () => {
            const { getByText } = render(<Dashboard />);
            const button = getByText(/close gate/i);
            fireEvent.click(button);
            const closed = getByText(/closed/i);
            expect(closed).toHaveClass('red-led');
        });

        it('should close gate if gate is open and unlocked', () => {
            const { getByText } = render(<Dashboard />);
            const button = getByText(/close gate/i);
            // first click should closed gate
            fireEvent.click(button);
            const closed = getByText(/closed/i);
            // check if gate is closed
            expect(closed).toHaveClass('red-led');
            // second click will toggle gate back to open
            fireEvent.click(button);
            // check if gate is open
            expect(closed).toHaveClass('green-led');
        });
    });
});