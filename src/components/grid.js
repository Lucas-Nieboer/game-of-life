import React from 'react'
import Box from './boxes'

class Grid extends React.Component {

    render() {
        
        const width = this.props.cols * 14
        var rowsArr = []

        var boxClass = ""

        for (var i=0; i<this.props.rows; i++) {
            for (var j=0; j<this.props.cols; j++) {
                let boxID = i + "_" + j

                boxClass = this.props.gridFull[i][j] ? "box on" : "box off"

                rowsArr.push(
                    <Box
                        boxClass = {boxClass}
                        key = {boxID}
                        boxID = {boxID}
                        row = {i}
                        col = {j}
                        selectBox = {this.props.selectBox}
                    />
                )
            }
        }

        return (
            <div className="grid center" style={{width: width, backgroundColor:this.props.boxColor}}>
                {rowsArr}
            </div>
        )
    }
}

export default Grid