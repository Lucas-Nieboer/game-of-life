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
            boxColor: '',
            colorRand: true,
            playing: false
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
        
        this.setState({
            playing: true
        })
    }

    pauseButton = () => {
        clearInterval(this.intervalId)

        this.setState({
            playing: false
        })
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
            boxColor: this.state.initialBoxColor,
            playing: false
        })
    }

    gridSize = (size) => {
        this.cols = size * 5
        this.rows = size * 3

        this.clear()
    }

    gameSpeed = (rspeed) => {
        this.speed = rspeed * 50
    }

    setColor = (newColor) => {

        this.setState({
            initialBoxColor: newColor,
            boxColor: newColor
        })
    }

    setRandColorState = (tf) => {

        this.setState({
            colorRand: tf
        })
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

        if(this.state.generation % 50 === 0 && this.state.generation !== 0 && this.state.colorRand) {
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
            <div class="game-container">
                <div className="header">
                    <h2>Conway's Game of Life</h2>
                </div>
                <Buttons
                    playButton = {this.playButton}
                    pauseButton = {this.pauseButton}
                    clear = {this.clear}
                    setColor = {this.setColor}
                    gameSpeed = {this.gameSpeed}
                    setSeed = {this.setSeed}
                    gridSize = {this.gridSize}
                    initialBoxColor = {this.state.initialBoxColor}
                    colorRandinit = {this.state.colorRand}
                    setRandColorState = {this.setRandColorState}
                    isPlaying = {this.state.playing}
                />
                <div className="grid-holder">
                    <Grid
                        gridFull = {this.state.gridFull}
                        rows = {this.rows}
                        cols = {this.cols}
                        selectBox = {this.selectBox}
                        generation = {this.state.generation}
                        boxColor = {this.state.boxColor}
                    />
                </div>
            </div>
        )
    }
}

function arrayClone(arr) {
    return JSON.parse(JSON.stringify(arr))
}

ReactDOM.render(<Main />, document.getElementById('root'))
