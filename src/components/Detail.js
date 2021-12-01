import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://fyre.cdn.sewest.net/maple/6087d085b7379c00193fedbc/hero16x10-X4wLxMzU_.jpg?width=2880&quality=80" />
            </Background>
            <ImageTitle>
                <img src="https://fyre.cdn.sewest.net/maple/6087d085b7379c00193fedbc/logo-3x-e5cxU8uuI.png?width=960&quality=80" />
            </ImageTitle>

            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" />
                </GroupWatchButton>
            </Controls>

            <SubTitle>
                MARVEL'S GUARDIANS OF THE GALAXY: AVAILABLE NOW
            </SubTitle>
            <Description>
                Your newly-formed band of legendary misfits is set to save the universe in this fresh but faithful take on the Guardians of the Galaxy. Somehow, you set off a chain of catastrophic events, leading to a wild ride through mind-blowing worlds inhabited by iconic and original Marvel characters. Turn up the all-star ‘80s mixtape and get ready to kick it.
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0; 
    left: 0;
    right: 0; 
    bottom: 0;
    z-index: -1;
    opacity: 0.8;
     
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px; 
    min-width: 200px;
    margin-top: 20px;

    img {
        width: 100%;
        height: 100%;
        object-fits: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayButton = styled.button`
    border-radius: 4px; 
    padding: 0 24px;
    margin-right: 22px; 
    font-size: 15px; 
    display: flex; 
    align-items: center;
    letter-spacing: 1.8px; 
    border: none;
    background-color: rgb(249, 249, 249);
    cursor: pointer;
    height: 56px;
    text-transform: uppercase;

    &:hover {
        background-color: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background-color: rgba(0, 0, 0, 0.3);
    color: rgb(249, 249, 249);
    border: 1px solid rgb(249, 249, 249);
`

const AddButton = styled.button`
    display: flex; 
    justify-content: center;
    align-items: center;
    height: 44px; 
    width: 44px;
    border-radius: 50%;
    border: 2px solid white;
    margin-right: 16px;
    background-color: rgba(0, 0, 0, 0.6);

    span {
        color: white;
        font-size: 30px;
    }
`

const GroupWatchButton = styled(AddButton)`
    background-color: rgb(0, 0, 0);
`

const SubTitle = styled.div`
    margin-top: 26px; 
    font-size: 15px; 
    min-height: 20px; 
    color: rgb(249, 249, 249);
`

const Description = styled.div`
    line-height: 1.4;
    margin-top: 16px;
    font-size: 20px; 
    color: rgb(249, 249, 249);
    max-width: 760px;
`
