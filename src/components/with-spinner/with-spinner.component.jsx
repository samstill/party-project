import React from 'react'
import { SpinnerOverlay, SpinnerContainer, LoadingText } from './with-spinner.styles'


const WithSpinner = (WrappedComponent) => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <LoadingText>we are Looking something Amazing and Inspiring <br />just like you.</LoadingText>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
                <WrappedComponent {...otherProps} />
            )
    }
    return Spinner
}


export default WithSpinner