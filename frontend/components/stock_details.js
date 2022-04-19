import React, { useState, useEffect } from 'react';
import StockerHeaderComponent from './stock_header';
import StockerPositionsComponent from './stock_positions';
import StockerChartComponent from './stock_chart';

function StockDetailsComponent() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('http://localhost:3000/current/')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])
  
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
  
    return (
      <div className="stovk-details">                
          <StockerHeaderComponent data={data}/>   
          <StockerChartComponent  data={data}/>   
          <StockerPositionsComponent data={data}/>          
      </div>
    )
  }
export default StockDetailsComponent;