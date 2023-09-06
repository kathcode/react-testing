import React from 'react'
import { screen, fireEvent, render } from '@testing-library/react'
import User from './User'
import axios from 'axios'

jest.mock('axios')
// Typescript axios
const mockedAxios = axios as jest.MockedFunction<typeof axios>;

describe('User', () => {
    test('should render mock users', () => {
        mockedAxios.mockResolvedValue({
            data: [{
                email: 'hola'
            }]
        })
        const {getByTestId} = screen
        const {click} =fireEvent

        render(<User />)
        
        const emailElem = getByTestId('email')

        expect(emailElem.textContent).toBe('hol')
    })
})