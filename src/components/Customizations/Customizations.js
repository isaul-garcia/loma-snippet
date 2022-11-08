import React from "react";
import { useSnapshot } from "valtio";
import { CirclePicker } from 'react-color'
import {
    Settings,
    SitButton,
    Icon,
    SitSettings,
    LegSettings,
    ColorSettings,
    Title,
    PickerContainer,
    PickerWrapper
} from './Customizations.elements'
import Image2 from '../../assets/loma-silhoutte.svg'
import Image3 from '../../assets/loma-sits-01.svg'
import Image4 from '../../assets/loma-sits-02.svg'
import Image5 from '../../assets/loma-sits-03.svg'
import Image6 from '../../assets/loma-sits-04.svg'
import Image7 from '../../assets/loma-silhoutte-02.svg'

const everyColor = (["#ffffff", "#ffe1fe", "#fffee1", "#dfc5ff", "#FFF0F5", "#F0FFd0", "#ff88ee", "#bdbdbd", "#303030", "#cb5f5c", "#4d2800", "#795548", "#df204d", "#B81324", "#e91e63", "#9c27b0", "#bf80ff", "#673ab7", "#6b367d", "#3f51b5", "#0f0fff", "#767fbb", "#00bcd4", "#9fcad1", "#bff1ff", "#89f5f5", "#009688", "#0b4126", "#0fbd66", "#00ff80", "#b3ffd9", "#81ac94", "#2F4F4F", "#4caf50", "#00ff00", "#8bc34a", "#339933", "#1e3617", "#bfff00", "#cddc39", "#808000", "#ffeb3b", "#ffd24d", "#d1af31", "#b4a064", "#ffc107", "#ff9800", "#ff6633", "#ff4000", "#aa3109"]);

function Picker({ state, instr, setInstr }) {
    const snap = useSnapshot(state)
    return (
        <PickerContainer>
            <PickerWrapper onClick={() => setInstr(false)}>
                <CirclePicker
                    width="100%"
                    colors={everyColor}
                    color={state.items[snap.current]}
                    onChange={(color) => {
                        (state.items[snap.current] = color.hex);
                    }} />
            </PickerWrapper>
        </PickerContainer>
    )
}

const Interface = ({ state, setBott, setTop, setLegs, top, bott, legs, stepOne, stepTwo, stepThree, pageOne, pageTwo, pageThree, instr, setInstr }) => {
    const snap = useSnapshot(state)

    const handleTop = (selection) => {
        setTop(selection)
    }
    const handleBott = (selection) => {
        setBott(selection)
    }
    const handleLegs = (selection) => {
        setLegs(selection)
    }
    return (
        <>
            <Settings id="settings" stepOne={stepOne} stepTwo={stepTwo} stepThree={stepThree}>
                <SitSettings mobilePage={pageOne}>
                    <Title>Top</Title>
                    <div>
                        <SitButton active={top === 'PLASTIC'} onClick={() => handleTop('PLASTIC')}>
                            <Icon active={top === 'PLASTIC'} src={Image3} alt="loma" />
                        </SitButton>

                        <SitButton active={top === 'FLAT'} onClick={() => handleTop('FLAT')}>
                            <Icon active={top === 'FLAT'} src={Image4} alt="loma" />
                        </SitButton>

                        <SitButton active={top === 'SOFT'} onClick={() => handleTop('SOFT')}>
                            <Icon active={top === 'SOFT'} src={Image5} alt="loma" />
                        </SitButton>

                        <SitButton active={top === 'MESH'} onClick={() => handleTop('MESH')}>
                            <Icon active={top === 'MESH'} src={Image6} alt="loma" />
                        </SitButton>
                    </div>
                </SitSettings>
                <SitSettings mobilePage={pageOne}>
                    <Title>Bottom</Title>
                    <div>
                        <SitButton active={bott === 'PLASTIC'} onClick={() => handleBott('PLASTIC')}>
                            <Icon active={bott === 'PLASTIC'} src={Image3} alt="loma" />
                        </SitButton>

                        <SitButton active={bott === 'FLAT'} onClick={() => handleBott('FLAT')}>
                            <Icon active={bott === 'FLAT'} src={Image4} alt="loma" />
                        </SitButton>

                        <SitButton active={bott === 'SOFT'} onClick={() => handleBott('SOFT')}>
                            <Icon active={bott === 'SOFT'} src={Image5} alt="loma" />
                        </SitButton>

                        <SitButton active={bott === 'MESH'} onClick={() => handleBott('MESH')}>
                            <Icon active={bott === 'MESH'} src={Image6} alt="loma" />
                        </SitButton>
                    </div>
                </SitSettings>
                <LegSettings mobilePage={pageTwo}>
                    <Title>Legs</Title>
                    <div>
                        <SitButton active={legs === 'TALL'} onClick={() => handleLegs('TALL')}>
                            <Icon active={legs === 'TALL'} src={Image2} alt="loma" />
                        </SitButton>

                        <SitButton active={legs === 'CHAIR'} onClick={() => handleLegs('CHAIR')}>
                            <Icon active={legs === 'CHAIR'} src={Image7} alt="loma" />
                        </SitButton>
                    </div>
                </LegSettings>
                <ColorSettings mobilePage={pageThree}>
                    {snap.current &&
                        <>
                            <Title><i>{snap.current}</i> Color</Title>
                            <Picker state={state} snap={snap} setInstr={setInstr} instr={instr}/>
                        </>
                    }
                </ColorSettings>
            </Settings>
        </>
    )
}

export default Interface;