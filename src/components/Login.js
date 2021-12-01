import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    You’re the only thing holding the unpredictable Guardians together, so you’ll have to get better at this leadership thing fast. With this offbeat...
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative; 
    min-height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        background-image: url('/images/login-background.jpg');
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
        content: '';
        position: absolute; 
        top: 0; 
        left: 0; 
        right: 0; 
        bottom: 0;
        opacity: 0.7;
    }
`

const CTA = styled.div`
    max-width: 650px;
    width: 90%;
    padding: 80px 40px;
    z-index: 100;
    display: flex; 
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`

const CTALogoOne = styled.img`
    
`

const SignUp = styled.a`
    width: 100%; 
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    margin-top: 8px; 
    color: #f9f9f9;
    border-radius: 4px; 
    text-align: center;
    font-size: 18px; 
    cursor: pointer;
    transition: all 250ms; 
    letter-spacing: 1.5px;

    &:hover {
        background: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px; 
    letter-spacing: 1.5px; 
    line-height: 1.5;
    text-align: center;
`

const CTALogoTwo = styled.img`
    width: 90%;
`