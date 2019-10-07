import React from 'react'
import { ButtonToolbar, DropdownButton, Button } from 'react-bootstrap'
import InputRange from 'react-input-range'

class Buttons extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = { value: 10 }
    }

    handleSelect = (evt) => {
        this.props.gridSize(evt)
    }

    render() {
        return (
            <div className="buttons">
                <div class="indicator">
                    
                </div>
                <ButtonToolbar>
                    <Button variant="light" onClick = {this.props.playButton}>
                        Play
                    </Button>
                    <Button variant="light" onClick = {this.props.pauseButton}>
                        Pause
                    </Button>
                    <Button variant="light" onClick = {this.props.clear}>
                        Clear
                    </Button>
                    <Button variant="light" onClick = {this.props.slow}>
                        Slow
                    </Button>
                    <Button variant="light" onClick = {this.props.fast}>
                        Fast
                    </Button>
                    <Button variant="light" onClick = {this.props.setSeed}>
                        Seed
                    </Button>
                    <DropdownButton
                        variant="light"
                        title = "Grid Size"
                        id = "size-menu"
                    >
                        <InputRange
                            maxValue={15}
                            minValue={1}
                            value={this.state.value}
                            onChange={value => this.setState({ value })} 
                            onChangeComplete={value=>this.handleSelect(value)}
                        />
                    </DropdownButton>
                </ButtonToolbar>
            </div>
        )
    }

}

export default Buttons