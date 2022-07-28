import axios from 'axios';
import React, {useState,useEffect} from 'react';
import styled from 'styled-components';

const Root=styled.div`
    background-color: #2a2a2c;
    border-radius: 20px;
    height: 250px;
    display: flex;
    padding: 20px;
    position: relative;
    button{
        position: absolute;
        height: 60px;
        width: 60px;
        border-radius: 50%;
        background-color: green;
        border: none;
        bottom: -25px;
        right: 210px;
    }
`
const Card=styled.div`
    color: white;
    text-align: center;
    p{
        max-width: 450px;
        font-size: 20px;
        text-align: center;
        margin: 20px auto;
    }
`
const AdviceCard = () => {
    const [data, setdata] = useState({});
    const getData=()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then(Response=>setdata(Response.data))
        .catch(error=>console.log(error))
    }
    //console.log({Response})
    useEffect(()=>{
        getData()
    },[])

console.log(data)
  return (
    <Root>
        <Card>
            <label>Advice #{data?.slip?.id}</label>
            <p>"{data?.slip?.advice}"</p>
            <img src='/images/pattern-divider-desktop.svg'></img>
            
        </Card>
      <button onClick={getData}>
      <img src='/images/icon-dice.svg'></img>
      </button>
    </Root>
  );
}

export default AdviceCard;
