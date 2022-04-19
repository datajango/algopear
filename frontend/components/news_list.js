import React, { useState, useEffect } from 'react';
import NewsItemComponent from './news_item.js'

function NewsListComponent() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('http://localhost:3000/news/')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])
  
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
  
    return (
      <div className="news-list">    
            {
              data.results.map((item) => {                
                return (                  
                  <NewsItemComponent key={item.id} data={item}/>                  
                )
              })
            }          
      </div>
    )
  }
export default NewsListComponent;