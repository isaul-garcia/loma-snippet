import React, { useState, useEffect } from "react";
import { proxy } from "valtio";
import { GiClick } from 'react-icons/gi';
import { BiArrowBack } from 'react-icons/bi';
import Customizations from '../Customizations/Customizations'
import {
    ModelWindow,
    Container,
    CanvasWrapper,
    FinishButton,
    Instructions,
    Section,
    StepButtons,
    MobilePages,
    Wrapper,
    BackBottom
} from './LomaView.elements'
import MyCanvas from '../MyCanvas/MyCanvas'
import { Loader } from '../../globalStyles'

const state = proxy({
    current: null,
    items: {
        Legs: '#bdbdbd',
        Floor: '#bdbdbd',
        Bottom: '#bdbdbd',
        Top: '#bdbdbd',
        Left: '#bdbdbd',
        Right: '#bdbdbd'
    }
});

const View = () => {
    //loading screen state
    const [loading, setLoading] = useState(+true)
    //removes loading screen
    useEffect(() => {
        setTimeout(() => {
            setLoading(+false)
        }, 1000)
    }, [])

    const [legs, setLegs] = useState('TALL')
    const [top, setTop] = useState('PLASTIC')
    const [bott, setBott] = useState('PLASTIC')

    const [instr, setInstr] = useState(+true)

    //steps states
    const [stepOne, setStepOne] = useState(false)
    const [stepTwo, setStepTwo] = useState(true)
    const [stepThree, setStepThree] = useState(false)

    //reveals settings to edit the chair
    const moveToSecond = () => {
        setStepOne(false)
        setStepTwo(true)
        setStepThree(false)
    }
    //hides settings & shows final result
    const moveToThird = () => {
        setStepTwo(false)
        setStepThree(true)
    }

    //settings pages on mobile
    const [pageOne, setPageOne] = useState(true)
    const [pageTwo, setPageTwo] = useState(false)
    const [pageThree, setPageThree] = useState(false)

    const pagedOne = () => {
        setPageOne(true)
        setPageTwo(false)
        setPageThree(false)
    }

    const pagedTwo = () => {
        setPageOne(false)
        setPageTwo(true)
        setPageThree(false)
    }

    const pagedThree = () => {
        setPageOne(false)
        setPageTwo(false)
        setPageThree(true)
    }

    return (
        <>
            <Section>
                <Loader loading={loading}></Loader>

                <Container stepOne={stepOne} stepTwo={stepTwo} stepThree={stepThree}>
                    <Wrapper stepOne={stepOne} stepTwo={stepTwo} stepThree={stepThree}>
                        <ModelWindow stepOne={stepOne} stepTwo={stepTwo} stepThree={stepThree}>
                            <Instructions stepThree={stepThree} instr={instr}>
                                <GiClick color={'#5b5b5b'} size={20} style={{ marginBottom: -4, marginRight: 1 }} />
                                <span style={{ marginRight: '5px' }}> Tap on a <i>part</i> to change colors</span>
                            </Instructions>

                            {/* Canvas */}
                            <CanvasWrapper stepThree={stepThree}>
                                <MyCanvas
                                    state={state}
                                    top={top}
                                    bott={bott}
                                    legs={legs} />
                            </CanvasWrapper>
                        </ModelWindow>

                        {/* Customizations */}
                        <Customizations
                            state={state}
                            top={top}
                            setTop={setTop}
                            bott={bott}
                            setBott={setBott}
                            legs={legs}
                            setLegs={setLegs}
                            instr={instr}
                            setInstr={setInstr}

                            stepOne={stepOne}
                            stepTwo={stepTwo}
                            stepThree={stepThree}
                            pageOne={pageOne}
                            pageTwo={pageTwo}
                            pageThree={pageThree} />
                    </Wrapper>
                </Container>

                <MobilePages stepThree={stepThree}>
                    <StepButtons stepThree={stepThree} onClick={pagedOne} active={pageOne}>1</StepButtons>
                    <StepButtons stepThree={stepThree} onClick={pagedTwo} active={pageTwo}>2</StepButtons>
                    <StepButtons stepThree={stepThree} onClick={pagedThree} active={pageThree}>3</StepButtons>
                </MobilePages>

                <BackBottom stepThree={stepThree} onClick={moveToSecond}>
                    <BiArrowBack color={'#ffffff'} size={29} style={{ paddingTop: 5 }} />
                </BackBottom>

                <FinishButton stepThree={stepThree} stepTwo={stepTwo} onClick={moveToThird}>
                    <h3>Done</h3>
                </FinishButton>
            </Section>
        </>
    )
}

export default View;