import React, { Component, useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import { Stock } from '@ant-design/plots';

export default class StockerChartComponent extends Component {

  render() {
    console.log(this.props.data.data);

    const config = {
      data: this.props.data.data,
      padding: 'auto',
      xField: 't',
      yField: ['o', 'c', 'h', 'l'],
      xAxis: {
        // type: 'timeCat',
        tickCount: 5,
      },
    };

    return (
        <Stock {...config} />
    )
  }
}

