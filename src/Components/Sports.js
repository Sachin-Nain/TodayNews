import React, { useEffect, useState } from 'react'
import Allnews from './Allnews';
import './Info.css';
import Spinner from './Spinner';

function Sports(props) {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);

  const getSports = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.catgory}&apiKey=a829f100d2fc4ff7a54f1563873d32b3`;
      const resp = await fetch(url);
      const actualdata = await resp.json();
      setdata(actualdata.articles);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSports();
  }, []);

  return (
    <>
      {loading && <Spinner/>}
      <div className='Contentbox'>
        <Allnews data={data} />
      </div>
    </>
  )
}

export default Sports
