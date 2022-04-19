import React, { Component } from 'react';

export default class NewsItemComponent extends Component {
  render() {
      var today = new Date();

      //https://stackoverflow.com/questions/13903897/javascript-return-number-of-days-hours-minutes-seconds-between-two-dates
      let diffTime = Math.abs(new Date().valueOf() - new Date(this.props.data.published_utc).valueOf());
      let days = diffTime / (24*60*60*1000);
      let hours = (days % 1) * 24;
      let minutes = (hours % 1) * 60;
      let secs = (minutes % 1) * 60;
      [days, hours, minutes, secs] = [Math.floor(days), Math.floor(hours), Math.floor(minutes), Math.floor(secs)]

      let publisher_logo = <img src={this.props.data.publisher.favicon_url} width="32" height="32"></img>

      let published_when = "";
      if (days) {
        published_when += days+" days "
      }
      if (hours) {
        published_when += hours+" hours "
      }
      if (minutes) {
        published_when += minutes+" minutes "
      }
      if (secs) {
        published_when += secs+" secs "
      }

      published_when += " ago";
    
      let tags = this.props.data.tickers.map((item, index) => {      
          let key=this.props.data.id + "-" + index;          
          return (
            <div className="news-tag" key={key}>{item}</div>                      
          )
        })      

      return (       
          <div className="news-item" key="{this.props.data.id}">          
            <div className="news-col1">
              <img src={this.props.data.image_url} width="100" height="100"></img>
            </div>
            <div className="news-col2">
                  <div className="news-publisher-info">
                    <div className="news-publisher-logo">{publisher_logo}</div>
                    <div className="news-publisher-name">{this.props.data.publisher.name}</div>
                    <div className="news-publisher-when">{published_when}</div>
                  </div>
                  <div className="news-title">{this.props.data.title}</div>
                  
                  <div className="news-description">{this.props.data.description}</div>
                  
                  {/* <div>{this.props.data.id}</div>
                  <div>{this.props.data.author}</div>                  
                  <div>{this.props.data.article_url}</div>
                  <div>{this.props.data.keywords}</div>                  
                  <div>{this.props.data.publisher.homepage_url}</div> */}

                  <div className="news-tags">{tags}</div>                  
            </div>
          </div>            
      )
  }
}
