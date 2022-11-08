import styled from 'styled-components/macro'

export const Settings = styled.div`
    width: 40%;
    height: 100%;
    display: inline-block;
    position: relative;
    vertical-align: top;
    padding: 20px 30px;
    transition: all 0.5s ease-in-out;
    
    @media screen and (max-width: 991px) {
        width: 100%;
        height: 25%;
        margin-top: 0;
        margin-left: 0;
        overflow-y: scroll;
        margin-top: 1px;
        opacity: ${({ stepThree }) => (stepThree ? '0' : '1')};
        pointer-events: ${({ stepThree }) => (stepThree ? 'none' : 'all')};
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

export const BackBottom = styled(BigButton)`
    padding: 7px 10px;
    margin-top: 0;
    bottom: 3vh;
    border-radius: 50px;
    margin-left: 16vw;
    margin-left: ${({ stepThree }) => (stepThree ? '32.5vw' : '')};
    opacity: ${({ stepThree }) => (stepThree ? '1' : '0')};
    pointer-events: ${({ stepThree }) => (stepThree ? 'all' : 'none')};
    
    @media screen and (max-width: 991px) {
        margin-left: ${({ stepThree }) => (stepThree ? '3.5vw' : '')};
        bottom: 2.5vh;
    }
`

export const FinishButton = styled(BigButton)`
    color: #fff;
    background-color: #efba01;
    border-radius: 50px;
    right: 16vw;
    padding: 13px 21px;
    right: ${({ stepThree }) => (stepThree ? '32.75vw' : '')};
    opacity: ${({ stepTwo }) => (stepTwo ? '1' : '0')};
    pointer-events: ${({ stepTwo }) => (stepTwo ? 'all' : 'none')};

    &:hover{      
        background-color: #b68d01;
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

export const NextButton = styled(FinishButton)`
    background-color: #efba01;
    padding: 14px 21px;
    opacity: ${({ stepOne }) => (stepOne ? '1' : '0')};
    pointer-events: ${({ stepOne }) => (stepOne ? 'all' : 'none')};

    &:hover{      
        background-color: #b68d01;
    }
`

export const OrderButton = styled(BigButton)`
    background-color: #5a74da;
    padding: 13px 21px;
    color: #fff;
    right: ${({ stepThree }) => (stepThree ? '33.5vw' : '33.5vw')};
    opacity: ${({ stepThree }) => (stepThree ? '1' : '0')};
    pointer-events: ${({ stepThree }) => (stepThree ? 'all' : 'none')};
    user-select: none;

    &:hover{      
        background-color: #4260d5;
    }
    
    @media screen and (min-width: 991px) {
        bottom: 3vh;
    }

    @media screen and (max-width: 991px) {
        bottom: 2.5vh;
        right: 3.5vw;
        padding: 12px 24px;
    }
`

export const SitButton = styled.div`
    height: 4vw;
    max-width: 4vw;
    background-color: #e9e9e9;
    display: inline-block;
    cursor: pointer;
    border-radius: 18px;
    margin-right: 5px;    
    pointer-events: all;

    &:last-child {
        margin-right: 0;
    }

    @media screen and (max-width: 991px) {
        height: 7vh;
        max-width: 7vh;
    }
`

export const Icon = styled.img`
    width: 100%;
    height: 100%;
    padding: 0.65vw;
    z-index: 14;
    opacity: 0.4;
    border-radius: 17px;
    pointer-events: all;
    outline: ${({ active }) => (active ? '2px solid #565656' : '2px solid #9f9f9f00')};

    &:hover {
        outline: 2px solid #9f9f9f;
    }

    @media screen and (max-width: 991px) {
        
    padding: 1.65vw;
    }
`

export const SitSettings = styled.div`
    @media screen and (max-width: 991px) {
        display: ${({ mobilePage }) => (mobilePage ? 'inline-block' : 'none')};
    }
`

export const LegSettings = styled.div`
    @media screen and (max-width: 991px) {
        display: ${({ mobilePage }) => (mobilePage ? 'inline-block' : 'none')};
    }
`



export const SettingButtons = styled.span`
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

export const SettingsMobilePages = styled.div`
    z-index: 50;
    position: absolute;
    right: 3.5vw;
    bottom: 28vh;
    user-select: none;
    pointer-events: auto;
    opacity: ${({ stepThree }) => (stepThree ? '0' : '1')};
    pointer-events: ${({ stepThree }) => (stepThree ? 'none' : 'all')};
`

export const Title = styled.p` 
    font-size: 0.7em;
    font-weight: 600;
    color: #666666;
    background-color: #bcbcbc;
    border-radius: 20px;
    padding: 4px 15px;
    position: relative;
    display: inline-block;
    margin-bottom: 6px;
`
export const ColorSettings = styled.div`
@media screen and (max-width: 991px) {
    display: ${({ mobilePage }) => (mobilePage ? 'inline-block' : 'none')};
}
`

export const PickerContainer = styled.div` 
    width: 16.5vw;
    background-color: #e9e9e9;
    padding: 5%;
    border-radius: 20px;
    max-height: 195px;
    overflow-y: scroll;
    overflow-x: hidden;

    @media screen and (max-width: 991px) {
        width: 85vw;
        max-height: 160px;
    }  
`

export const PickerWrapper = styled.div` 
    width: 17vw;
    pointer-events: all;

    @media screen and (max-width: 991px) {
        width: 80vw;
    }  
`