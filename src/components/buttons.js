import React from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'
import InputRange from 'react-input-range'

class Buttons extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = { 
            gsvalue: 10,
            svalue: 10
        }
    }

    handleSelect = (evt) => {
        this.props.gridSize(evt)
    }
    handleSelect2 = (evt) => {
        this.props.gameSpeed(evt)
    }

    render() {
        return (
            <div className="buttons">
                <div className="indicator" />
                <ButtonToolbar>
                    <Button variant="light" onClick = {this.props.playButton}>
                        Play
                    </Button>
                    <Button variant="light" onClick = {this.props.setSeed}>
                        Seed
                    </Button>
                    <Button variant="light" onClick = {this.props.pauseButton}>
                        Pause
                    </Button>
                    <Button variant="light" onClick = {this.props.clear}>
                        Clear
                    </Button>
                    <div className="drop-down-item">
                        <span>Speed</span>
                        <InputRange
                            maxValue={15}
                            minValue={1}
                            value={this.state.svalue}
                            onChange={svalue => this.setState({ svalue })} 
                            onChangeComplete={svalue=>this.handleSelect2(svalue)}
                        />
                    </div>
                    <div className="drop-down-item">
                        <span>Grid Size</span>
                        <InputRange
                            maxValue={15}
                            minValue={1}
                            value={this.state.gsvalue}
                            onChange={gsvalue => this.setState({ gsvalue })} 
                            onChangeComplete={gsvalue=>this.handleSelect(gsvalue)}
                        />
                    </div>
                </ButtonToolbar>
            </div>
        )
    }

}

export default Buttons