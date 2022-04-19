import React, { Component } from 'react';

export default class StockerHeaderComponent extends Component {
  render() {

      let closeChange = (this.props.data.close - this.props.data.previousClose).toFixed(2);

      return (       
          <div className="stock-header" key="{this.props.data.id}">          
            <div className="stock-symbol">{this.props.data.symbol}</div>          
            <div className="stock-name">{this.props.data.name}</div>          
            <div className="stock-price-section">
              <div className="stock-share-price">{this.props.data.open}</div> 
              <div className="stock-currency">USD</div> 
              <div className="stock-share-change">
                <div className="stock-share-bullet">-3.20%</div>
              </div>
            </div>    
            <div className="stock-close-section">
              <div className="stock-close-change">{closeChange} ({this.props.data.percentageChange}) Today</div>
            </div>
          </div>            
      )
  }
}
