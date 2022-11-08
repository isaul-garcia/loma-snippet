import styled from 'styled-components/macro'

export const Section = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000;
    overflow: hidden;
    pointer-events: none;
    user-select: none;
`

export const ModelWindow = styled.div`
    height: 100%;
    position: relative;
    cursor: pointer;
    background-color: #f0f0f0;
    border-radius: 30px;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    transition: all 0.5s ease-in-out;
    width: ${({ stepTwo }) => (stepTwo ? '60%' : '100%')};
    
    @media screen and (max-width: 991px) {
        border-radius: 34px;
        width: 100%;
        height: 75%;
        height: ${({ stepTwo }) => (stepTwo ? '75%' : '100%')};
    }
`

export const CanvasWrapper = styled.div` 
    width: 37.25vw;
    transition: 0.75s;
    margin-left: ${({ stepThree }) => (stepThree ? '0' : '-2.575vw')};
    height: 100%;
    pointer-events: all;

    @media screen and (max-width: 991px) {
        width: 99vw;
        height: 74.6vh;
        height: 99.4vh;
        height: 99.4vh;
        margin-top: ${({ stepThree }) => (stepThree ? '0' : '-12.4vh')};
        margin-left: 0;
    }
`

export const Container = styled.div`
    width: 54vw;
    height: 76vh;
    margin-top: 10.5vh;
    margin-left: 23vw;
    position: absolute;
    transition: all 0.5s ease-in-out;
    margin-left: ${({ stepThree }) => (stepThree ? '31vw' : '')};

    @media screen and (max-width: 991px) {
        width: 100vw;
        height: 100vh;
        margin-top: 0;
        margin-left: 0;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #d1d1d1;
    border-radius: 35px;
    padding: 0.5%;
    position: relative;
    user-select: none;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    width: ${({ stepThree }) => (stepThree ? '70%' : '100%')};
    
    @media screen and (max-width: 991px) {
        border-radius: ${({ stepThree }) => (stepThree ? '35px' : '35px 35px 0px 0px')};
        width: ${({ stepThree }) => (stepThree ? '100%' : '100%')};
    }
`

export const Instructions = styled.div`
    color: #666666;
    background-color: #99999955;
    padding: 13px;
    border-radius: 20px;
    margin: 13px;
    position: absolute;
    z-index: 15;
    transition: all .5s ease-in-out;
    pointer-events: none;
    opacity: ${({ instr }) => (instr ? '1' : '0')};
    pointer-events: ${({ instr }) => (instr ? 'all' : 'none')};

    @media screen and (min-width: 991px) {
        bottom: 0;
    }

    @media screen and (max-width: 991px) {
        top: 0;
        border-radius: 50px;
        margin: 18px;
    }
    
`

export const BigButton = styled.div`
    color: #666666;
    background-color: #666;
    border-radius: 50px;
    position: absolute;
    z-index: 15;
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: #999;
    }
`

export const BackButton = styled(BigButton)`
    padding: 7px 10px;
    height: 50px;
    line-height: 50px;
    background-color: #444444;
    margin-top: 3vh;
    margin-left: 16vw;
    margin-left: ${({ stepThree }) => (stepThree ? '32.5vw' : '')};

    &:hover{      
        background-color: #333;
    }

    @media screen and (max-width: 991px) {
        padding: 3px 5px;
        height: 40px;
        line-height: 50px;
        margin-left: 3.5vw;
        margin-top: 3.5vw;
        opacity: ${({ stepThree }) => (stepThree ? '0' : '1')};
        pointer-events: ${({ stepThree }) => (stepThree ? 'none' : 'all')};
    }
`

export const BackBottom = styled(BigButton)`
    padding: 7px 10px;
    margin-top: 0;
    bottom: 3vh;
    border-radius: 50px;
    margin-left: 16vw;
    pointer-events: all;
    margin-left: ${({ stepThree }) => (stepThree ? '31vw' : '22.5vw')};
    opacity: ${({ stepThree }) => (stepThree ? '1' : '0')};
    pointer-events: ${({ stepThree }) => (stepThree ? 'all' : 'none')};
    
    @media screen and (max-width: 991px) {
        margin-left: ${({ stepThree }) => (stepThree ? '3.5vw' : '')};
        bottom: 2.5vh;
    }
`

export const FinishButton = styled(BigButton)`
    color: #fff;
    background-color: #ff4455;
    border-radius: 50px;
    right: 22.9vw;
    padding: 13px 21px;
    pointer-events: all;
    right: ${({ stepThree }) => (stepThree ? '31vw' : '')};
    opacity: ${({ stepTwo }) => (stepTwo ? '1' : '0')};
    pointer-events: ${({ stepTwo }) => (stepTwo ? 'all' : 'none')};

    &:hover{      
        background-color: #ff445599;
    }

    @media screen and (min-width: 991px) {
        bottom: 3vh;
    }

    @media screen and (max-width: 991px) {
        top: 2.25vh;
        right: 3.5vw;
        padding: 9px 21px;
    }
`

export const StepButtons = styled.span`
    display: none;
    opacity: ${({ stepThree }) => (stepThree ? '0' : '1')};
    pointer-events: ${({ stepThree }) => (stepThree ? 'none' : 'all')};

    @media screen and (max-width: 991px) {
        display: inline;
        z-index: 15;
        transition: all 0.5s ease-in-out;
        height: 45px;
        width: 45px;
        text-align: center;
        line-height: 45px;
        border-radius: 35px;
        color: #666666;
        background-color: #f0f0f099;
        border: 1px solid #66666699;
        position: inline;
        cursor: pointer;
        padding: 14px 20px;
        background-color: ${({ active }) => (active ? '#b7b7b799' : '#f0f0f099')};
    }
`

export const MobilePages = styled.div`
    z-index: 50;
    position: absolute;
    right: 3.5vw;
    bottom: 28vh;
    user-select: none;
    pointer-events: auto;
    opacity: ${({ stepThree }) => (stepThree ? '0' : '1')};
    pointer-events: ${({ stepThree }) => (stepThree ? 'none' : 'all')};
`