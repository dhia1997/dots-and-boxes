import React from 'react';
import './Board.css';
class Board extends React.Component {
  constructor() {
    super();
  }
  // 500px / 3 = 166.666666667 px
  componentDidMount() {
    const pointsDistance = 166.666666667;
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
		ctx.fillStyle = '#4267b287';
    ctx.fillRect(25, 25, 500, 500);
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        this.drawPoint(i * pointsDistance, j * pointsDistance, ctx);
      }
		}
		// this.drawPoint(0 * pointsDistance, 0 * pointsDistance, ctx);
  }
  drawPoint(x, y, canvas) {
    const pointSize = 5;
    canvas.beginPath();
		canvas.arc(x + 25, y + 25, pointSize, 0, Math.PI * 2); // postion in x axe, position in y axe, point size, cutted from the point, degrees
    // canvas.fill();
		canvas.strokeStyle = 'black';
		canvas.stroke();
		canvas.fillStyle = 'black';
		canvas.fill();
  }
  render() {
    return (
      <div>
        <canvas ref="canvas" width={550} height={550} />
      </div>
    );
  }
}
export default Board;
