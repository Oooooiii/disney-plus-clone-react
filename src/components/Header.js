import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />

            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" />
                    <span>SERIES</span>
                </a>
            </NavMenu>

            <UserImg src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" />
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px; 
    background-color: #090b13;
    display: flex; 
    align-items: center;
    padding: 0 36px;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex; 
    flex: 1;
    margin-left: 20px;

    a {
        display: flex; 
        align-items: center;
        padding: 0 12px;

        img {
            height: 20px; 
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                position: absolute; 
                left: 0; 
                right: 0;
                bottom: -6px;
                background-color: white;
                height: 2px;
                opacity: 0;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0)
                transform-origin: left center;
            }
        }

        &:hover {
            span:after {
                opacity: 1;
                transform: scaleX(1)
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px; 
    height: 48px; 
    border-radius: 50%;
    cursor: pointer;
    object-fit: cover;
`