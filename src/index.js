import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'react-input-range/lib/css/index.css'
import Grid from './components/grid'
import Buttons from './components/buttons'

class Main extends React.Component {

    constructor() {
        super();
        this.speed = 100
        this.rows = 30
        this.cols = 50

        this.state = {
            generation: 0,
            gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
        }
    }

    selectBox = (row, col) => {

        let gridCopy = arrayClone(this.state.gridFull)
        gridCopy[row][col] = !gridCopy[row][col]

        this.setState({
            gridFull: gridCopy
        })
    }

    playButton = () => {
        clearInterval(this.intervalId)
        this.intervalId = setInterval(this.play, this.speed);
    }

    pauseButton = () => {
        clearInterval(this.intervalId)
    }

    slow = () => {
        this.speed = 1000
        this.playButton()
    }

    fast = () => {
        this.speed = 100
        this.playButton()
    }

    setSeed = () => {

        let gridCopy = arrayClone(this.state.gridFull)

        for (let i=0; i<this.rows; i++) {
            for (let j=0; j<this.cols; j++) {
                if (Math.floor(Math.random() * 5) === 1) {
                    gridCopy[i][j] = true
                }
            }
        }

        this.setState({
            gridFull: gridCopy
        })

    }

    clear = () => {
        var grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false))
        clearInterval(this.intervalId)
        this.setState({
            gridFull: grid,
            generation: 0
        })
    }

    gridSize = (size) => {
        this.cols = size * 5
        this.rows = size * 3

        this.clear()
    }

    play = () => {
        
        let g = this.state.gridFull
        let g2 = arrayClone(this.state.gridFull)

        for (let i=0; i<this.rows; i++) {
            for (let j=0; j<this.cols; j++) {
                
                let count = 0

                if (i > 0) {
                    if (g[i-1][j]) {
                        count++
                    }
                }
                if (i>0 && j>0) {
                    if(g[i-1][j-1]) {
                        count++
                    }
                }
                if (i>0 && j<this.cols-1) {
                    if(g[i-1][j+1]) {
                        count++
                    }
                }
                if (j<this.cols-1) {
                    if(g[i][j+1]) {
                        count++
                    }
                }
                if (j>0) {
                    if(g[i][j-1]) {
                        count++
                    }
                }
                if (i<this.rows-1) {
                    if(g[i+1][j]) {
                        count++
                    }
                }
                if (i<this.rows-1 && j>0) {
                    if(g[i+1][j-1]) {
                        count++
                    }
                }
                if (i<this.rows-1 && this.cols - 1) {
                    if(g[i+1][j+1]) {
                        count++
                    }
                }
                if (g[i][j] && (count<2 || count>3)) {
                    g2[i][j] = false
                }
                if (!g[i][j] && count === 3) {
                    g2[i][j] = true
                }
            }
        }

        this.setState({
            gridFull: g2,
            generation: this.state.generation + 1
        })
    }

    componentDidMount() {
        this.setSeed()
    }

    render() {
        return (
            <div>
                <h1 className="center">The Game of Life</h1>
                <Buttons
                    playButton = {this.playButton}
                    pauseButton = {this.pauseButton}
                    slow = {this.slow}
                    fast = {this.fast}
                    clear = {this.clear}
                    speed = {this.speed}
                    setSeed = {this.setSeed}
                    gridSize = {this.gridSize}
                />
                <Grid
                    gridFull = {this.state.gridFull}
                    rows = {this.rows}
                    cols = {this.cols}
                    selectBox = {this.selectBox}
                />
                <h2 className="center">Generation: {this.state.generation}</h2>
            </div>
        )
    }

}

function arrayClone(arr) {
    return JSON.parse(JSON.stringify(arr))
}

ReactDOM.render(<Main />, document.getElementById('root'));
