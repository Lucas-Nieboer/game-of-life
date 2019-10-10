(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{104:function(e,t,a){},287:function(e,t,a){"use strict";a.r(t);var n=a(12),o=a(13),r=a(15),l=a(14),i=a(16),s=a(0),c=a.n(s),d=a(95),p=a.n(d),u=(a(104),a(105),function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).selectBox=function(){a.props.selectBox(a.props.row,a.props.col)},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:this.props.boxClass,id:this.props.boxID,onClick:this.selectBox})}}]),t}(c.a.Component)),h=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){for(var e=14*this.props.cols,t=[],a="",n=0;n<this.props.rows;n++)for(var o=0;o<this.props.cols;o++){var r=n+"_"+o;a=this.props.gridFull[n][o]?"box on":"box off",t.push(c.a.createElement(u,{boxClass:a,key:r,boxID:r,row:n,col:o,selectBox:this.props.selectBox}))}return c.a.createElement("div",{className:"grid",style:{width:e,backgroundColor:this.props.boxColor}},t)}}]),t}(c.a.Component),m=a(289),f=a(290),g=a(39),C=a.n(g),v=a(96),S=a(97),b=a.n(S),x=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this,e))).handleRenderSpeed=function(e){a.props.gameSpeed(e)},a.handleGridSize=function(e){a.props.gridSize(e)},a.handleColorChange=function(e){a.props.setColor(e.hex)},a.handleRandomColor=function(e){a.setState({evt:e}),a.props.setRandColorState(e)},a.handleRandomColorRate=function(e){a.props.setRandColorSpeed(e)},a.state={gsvalue:10,svalue:7,rrvalue:a.props.randomSpeed},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"buttons"},c.a.createElement("div",{className:"indicator"}),c.a.createElement(m.a,null,c.a.createElement(f.a,{variant:"light",onClick:this.props.playButton,disabled:this.props.isPlaying},"Play"),c.a.createElement(f.a,{variant:"light",onClick:this.props.pauseButton,disabled:!this.props.isPlaying},"Pause"),c.a.createElement(f.a,{variant:"light",onClick:this.props.setSeed},"Seed"),c.a.createElement(f.a,{variant:"light",onClick:this.props.clear},"Clear"),c.a.createElement("div",{className:"drop-down-item"},c.a.createElement("span",null,"Speed"),c.a.createElement(C.a,{maxValue:10,minValue:1,value:this.state.svalue,onChange:function(t){return e.setState({svalue:t})},onChangeComplete:function(t){return e.handleRenderSpeed(t)}})),c.a.createElement("div",{className:"drop-down-item"},c.a.createElement("span",null,"Grid Size"),c.a.createElement(C.a,{maxValue:15,minValue:1,value:this.state.gsvalue,onChange:function(t){return e.setState({gsvalue:t})},onChangeComplete:function(t){return e.handleGridSize(t)}})),c.a.createElement("div",{className:"drop-down-item color-options"},c.a.createElement("span",null,"Color Options"),c.a.createElement(v.SliderPicker,{color:this.props.initialBoxColor,onChangeComplete:this.handleColorChange}),c.a.createElement("span",null,"Allow Random"),c.a.createElement("label",{htmlFor:"material-switch"},c.a.createElement(b.a,{checked:this.props.colorRandinit,onChange:this.handleRandomColor,onColor:"#86d3ff",onHandleColor:"#2693e6",handleDiameter:30,uncheckedIcon:!1,checkedIcon:!1,boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 10px rgba(0, 0, 0, 0.2)",height:20,width:48,className:"react-switch",id:"material-switch","aria-label":"Color Change"})),c.a.createElement("span",null,"Random Rate"),c.a.createElement(C.a,{maxValue:50,minValue:5,value:this.state.rrvalue,onChange:function(t){return e.setState({rrvalue:t})},onChangeComplete:function(t){return e.handleRandomColorRate(t)}}))))}}]),t}(c.a.Component),E=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(r.a)(this,Object(l.a)(t).call(this))).selectBox=function(t,a){var n=y(e.state.gridFull);n[t][a]=!n[t][a],e.setState({gridFull:n})},e.playButton=function(){clearInterval(e.intervalId),e.intervalId=setInterval(e.play,e.speed),e.setState({playing:!0})},e.pauseButton=function(){clearInterval(e.intervalId),e.setState({playing:!1})},e.setSeed=function(){for(var t=y(e.state.gridFull),a=0;a<e.rows;a++)for(var n=0;n<e.cols;n++)1===Math.floor(5*Math.random())&&(t[a][n]=!0);e.setState({gridFull:t})},e.clear=function(){var t=Array(e.rows).fill().map((function(){return Array(e.cols).fill(!1)}));clearInterval(e.intervalId),e.setState({gridFull:t,generation:0,boxColor:e.state.initialBoxColor,playing:!1})},e.gridSize=function(t){e.cols=5*t,e.rows=3*t,e.clear()},e.gameSpeed=function(t){e.speed=40*[0,10,9,8,7,6,5,4,3,2,1][t],e.state.playing&&(clearInterval(e.intervalId),e.intervalId=setInterval(e.play,e.speed))},e.setColor=function(t){e.setState({initialBoxColor:t,boxColor:t})},e.setRandColorState=function(t){e.setState({colorRand:t})},e.setRandColorSpeed=function(t){e.setState({randomSpeed:t})},e.play=function(){for(var t=e.state.gridFull,a=y(e.state.gridFull),n=0;n<e.rows;n++)for(var o=0;o<e.cols;o++){var r=0;n>0&&t[n-1][o]&&r++,n>0&&o>0&&t[n-1][o-1]&&r++,n>0&&o<e.cols-1&&t[n-1][o+1]&&r++,o<e.cols-1&&t[n][o+1]&&r++,o>0&&t[n][o-1]&&r++,n<e.rows-1&&t[n+1][o]&&r++,n<e.rows-1&&o>0&&t[n+1][o-1]&&r++,n<e.rows-1&&e.cols-1&&t[n+1][o+1]&&r++,t[n][o]&&(r<2||r>3)&&(a[n][o]=!1),t[n][o]||3!==r||(a[n][o]=!0)}if(e.state.generation%e.state.randomSpeed===0&&0!==e.state.generation&&e.state.colorRand){var l="#"+Math.floor(16777215*Math.random()).toString(16);e.setState({boxColor:l})}e.setState({gridFull:a,generation:e.state.generation+1})},e.speed=160,e.rows=30,e.cols=50,e.state={generation:0,gridFull:Array(e.rows).fill().map((function(){return Array(e.cols).fill(!1)})),initialBoxColor:"#2E8B57",boxColor:"",colorRand:!0,playing:!1,randomSpeed:50},e}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setSeed(),this.setState({boxColor:this.state.initialBoxColor})}},{key:"render",value:function(){return c.a.createElement("div",{class:"game-container"},c.a.createElement("div",{className:"header"},c.a.createElement("h2",null,"Conway's Game of Life")),c.a.createElement(x,{playButton:this.playButton,pauseButton:this.pauseButton,clear:this.clear,setColor:this.setColor,gameSpeed:this.gameSpeed,setSeed:this.setSeed,gridSize:this.gridSize,initialBoxColor:this.state.initialBoxColor,colorRandinit:this.state.colorRand,setRandColorState:this.setRandColorState,isPlaying:this.state.playing,randomSpeed:this.state.randomSpeed,setRandColorSpeed:this.setRandColorSpeed}),c.a.createElement("div",{className:"grid-holder"},c.a.createElement(h,{gridFull:this.state.gridFull,rows:this.rows,cols:this.cols,selectBox:this.selectBox,generation:this.state.generation,boxColor:this.state.boxColor})),c.a.createElement("div",{className:"header gen-counter"},c.a.createElement("div",null,"Generation: "),c.a.createElement("div",null,this.state.generation)),c.a.createElement("div",{className:"learn-more"},c.a.createElement("p",null,c.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life",target:"_blank",rel:"noopener noreferrer"},"Learn More about Conway's Game of Life"))))}}]),t}(c.a.Component);function y(e){return JSON.parse(JSON.stringify(e))}p.a.render(c.a.createElement(E,null),document.getElementById("root"))},99:function(e,t,a){e.exports=a(287)}},[[99,1,2]]]);
//# sourceMappingURL=main.41b9cdbd.chunk.js.map