import React from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'
import InputRange from 'react-input-range'
import { SliderPicker } from 'react-color'
import Switch from "react-switch"

class Buttons extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = { 
            gsvalue: 10,
            svalue: 7,
            rrvalue: this.props.randomSpeed
        }
    }

    handleRenderSpeed = (evt) => {
        this.props.gameSpeed(evt)
    }

    handleGridSize = (evt) => {
        this.props.gridSize(evt)
    }

    handleColorChange = (evt) => {
        this.props.setColor(evt.hex)
    }

    handleRandomColor = (evt) => {
        this.setState({ evt })
        this.props.setRandColorState(evt)
    }

    handleRandomColorRate = (evt) => {
        this.props.setRandColorSpeed(evt)
    }

    render() {
        return (
            <div className="buttons">
                <div className="indicator" />
                <ButtonToolbar>
                    <Button variant="light" onClick = {this.props.playButton} disabled = {this.props.isPlaying}>
                        Play
                    </Button>
                    <Button variant="light" onClick = {this.props.pauseButton} disabled = {!this.props.isPlaying}>
                        Pause
                    </Button>
                    <Button variant="light" onClick = {this.props.setSeed}>
                        Seed
                    </Button>
                    <Button variant="light" onClick = {this.props.clear}>
                        Clear
                    </Button>
                    <div className="drop-down-item">
                        <span>Speed</span>
                        <InputRange
                            maxValue={10}
                            minValue={1}
                            value={this.state.svalue}
                            onChange={svalue => this.setState({ svalue })} 
                            onChangeComplete={svalue=>this.handleRenderSpeed(svalue)}
                        />
                    </div>
                    <div className="drop-down-item">
                        <span>Grid Size</span>
                        <InputRange
                            maxValue={15}
                            minValue={1}
                            value={this.state.gsvalue}
                            onChange={gsvalue => this.setState({ gsvalue })} 
                            onChangeComplete={gsvalue=>this.handleGridSize(gsvalue)}
                        />
                    </div>
                    <div className="drop-down-item color-options">
                        <span>Color Options</span>
                        <SliderPicker 
                            color={ this.props.initialBoxColor }
                            onChangeComplete={ this.handleColorChange }
                        />

                        <span>Allow Random</span>
                        <label htmlFor="material-switch">
                        <Switch
                            checked={this.props.colorRandinit}
                            onChange={this.handleRandomColor}
                            onColor="#86d3ff"
                            onHandleColor="#2693e6"
                            handleDiameter={30}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                            height={20}
                            width={48}
                            className="react-switch"
                            id="material-switch"
                            aria-label="Color Change"
                        />
                        </label>
                        <span>Random Rate</span>
                        <InputRange
                            maxValue={50}
                            minValue={5}
                            value={this.state.rrvalue}
                            onChange={rrvalue => this.setState({ rrvalue })} 
                            onChangeComplete={rrvalue => this.handleRandomColorRate(rrvalue)}
                        />
                    </div>
                </ButtonToolbar>
            </div>
        )
    }

}

export default Buttons