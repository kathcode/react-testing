import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import Counter from './Counter'

describe('Counter', () => {
    test('Should be zero by default', () => {
        render(<Counter />)

        // Option 1
        //const countElem = screen.getByText(/0/i)
        //expect(countElem).toBeInTheDocument()

        //Option 2
        const countElem = screen.getByTestId('count')
        expect(countElem.textContent).toBe("Count: 0")
    })

    test('Should reset the count to 0 whe user clicks on reset', () => {
        const {getByText, getByTestId} = screen
        const {click} =fireEvent
        
        render(<Counter />)
        
        const btnIncrement = getByText('Increment')
        click(btnIncrement)
        click(btnIncrement)

        const btnReset = getByText('Reset')
        click(btnReset)

        const countElem = getByTestId('count')
        expect(countElem.textContent).toBe("Count: 0")
    })

    test('Should decrement the count from 2 to 1', () => {
        const {getByText, getByTestId} = screen
        const {click} =fireEvent
        
        render(<Counter />)
        
        const btnIncrement = getByText('Increment')
        click(btnIncrement)
        click(btnIncrement)

        const btnDecrement = getByText('Decrement')
        click(btnDecrement)

        const countElem = getByTestId('count')
        expect(countElem.textContent).toBe("Count: 1")
    })

    test('Should increment the count from 1 to 2', () => {
        const {getByText, getByTestId} = screen
        const {click} =fireEvent
        
        render(<Counter />)
        
        const btnIncrement = getByText('Increment')
        click(btnIncrement)
        click(btnIncrement)

        const countElem = getByTestId('count')
        expect(countElem.textContent).toBe("Count: 2")
    })
})