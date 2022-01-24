import { useState, useEffect } from "react";

export default function useApi() {
  const [repositorio, setRepositorio] = useState([]);

//   useEffect(() => {
//     init();
//   }, []);

  useEffect(()=>{
      fetch('https://api.github.com/users/laizabsobral/repos')
      .then(response => response.json())
      .then(data => setRepositorio(data))
  },[])

//   async function init() {
//     const response = await fetch("https://api.github.com/users/laizabsobral/repos");
//     const data = await response.json();

//     setRepositorio(data.results);
//   }

  return {
    repositorio
  };
}
