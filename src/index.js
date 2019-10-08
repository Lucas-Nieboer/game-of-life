import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'react-input-range/lib/css/index.css'
import Grid from './components/grid'
import Buttons from './components/buttons'

class Main extends React.Component {

    constructor() {

        super()
        this.speed = 100
        this.rows = 30
        this.cols = 50

        this.state = {
            generation: 0,
            gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false)),
            initialBoxColor: '#2E8B57',
            boxColor: ''
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
        this.intervalId = setInterval(this.play, this.speed)
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
            generation: 0,
            boxColor: this.state.initialBoxColor
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

        if(this.state.generation % 50 === 0 && this.state.generation !== 0) {
            var newBoxColor = '#'+Math.floor(Math.random()*16777215).toString(16)

            this.setState({
                boxColor: newBoxColor
            })
        }

        this.setState({
            gridFull: g2,
            generation: this.state.generation + 1
        })
    }

    componentDidMount() {
        this.setSeed()

        this.setState({
            boxColor: this.state.initialBoxColor
        })
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
                    generation = {this.state.generation}
                    boxColor = {this.state.boxColor}
                />
                <h2 className="center">Generation: {this.state.generation}</h2>
            </div>
        )
    }
}

function arrayClone(arr) {
    return JSON.parse(JSON.stringify(arr))
}

ReactDOM.render(<Main />, document.getElementById('root'))
