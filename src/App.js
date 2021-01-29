import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import {Container,Button} from 'react-bootstrap'
import Head from "./components/Head"


export default function App() {
  const [quotes, setQuotes] = useState();
  const [author, setAuthor] = useState();
  useEffect(getquote , [])

  let array = [];
  async function getquote() {
    const res = await axios.get(`https://api.quotable.io/random`);
    array = res.data;
    console.log(res);
    setQuotes(array.content);
    setAuthor(array.author);
  }
  useEffect(() => {
    getquote();
  }, []);

  return (
   <>
   <div className="App">
    <Container>
        <Head />
        <br></br>
        <br></br>
        <h2> <i class="fas fa-quote-left"> </i>  {quotes} 
        <i class="fas fa-quote-right"></i>
        </h2>
        <br></br>
        <div className="text-right">
        <h3>- {author}</h3><br></br>
        </div>
        
        <div className="text-center">
        <Button calssName="" onClick={getquote} variant="danger">Next Quote</Button> 
        </div>
      </Container>
      
  </div>
  </>
   );

}
