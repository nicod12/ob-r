import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from "@mui/material/Button";

const ChukJokes = () => {
  


  const [joke, setJoke] = useState({});
  const [like, setLike] = useState(0)
  const [deslike, setDeslike] = useState(0)


  const generateRandom = async () => {
    const { data } = await axios("https://api.chucknorris.io/jokes/random");

    return data;
  }

  const getRandomJoke = () => {
    generateRandom()
                .then((response) => {
                  setJoke(response);
                });
  }

  useEffect(() =>{
    getRandomJoke();
  },[])

  const handleClick = () => {
    getRandomJoke();
  }

  const changeLike = (e) => {
    if(e.target.name === 'like'){
      setLike(like + 1)
    }
    if(e.target.name === 'deslike'){
      setDeslike(deslike + 1)
    }
  }

  
  return (
    <div>
        <h1>Chucknorris App</h1>
        <Button
          variant="contained"
          color="success"
          onClick={handleClick}
          style={{ marginBottom: "15px" }}
        >
           New Joke
        </Button>

      <div>
        <h3>
          {joke.value}
          <Button name='like' onClick={changeLike}>Like: {like}</Button>
          <Button name='deslike' onClick={changeLike}>Deslike: {deslike}</Button>
        </h3>
      </div>
    </div>
  )
}

export default ChukJokes;