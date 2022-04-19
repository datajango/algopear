import React, { Component } from 'react';

export default class StockerPositionsComponent extends Component {
  render() {
      return (       
          <div className="stock-positions-section" key="{this.props.data.id}">          
            <div className="stock-positions-label">Open</div>
            <div className="stock-positions-value">{this.props.data.open.toFixed(2)}</div>
            <div className="stock-positions-label">Prev Close</div>
            <div className="stock-positions-value">{this.props.data.previousClose.toFixed(2)}</div>
            <div className="stock-positions-label">High</div>
            <div className="stock-positions-value">{this.props.data.high.toFixed(2)}</div>
            <div className="stock-positions-label">Vol</div>
            <div className="stock-positions-value">{this.props.data.volume.toFixed(2)}</div>
            <div className="stock-positions-label">Low</div>
            <div className="stock-positions-value">{this.props.data.low.toFixed(2)}</div>
            <div className="stock-positions-label">Avg Vol</div>
            <div className="stock-positions-value">{this.props.data.avgVolume.toFixed(2)}</div>
          </div>            
      )
  }
}
