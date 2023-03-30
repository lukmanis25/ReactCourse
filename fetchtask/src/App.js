import logo from './logo.svg';
import Header from './Header';
import Content from './Content';
import { useState, useEffect } from "react"

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com"

  const [dataType, setDataType] = useState("")
  const [items, SetItems] = useState([])

  useEffect(()=>{
    const handleTypeChange = async () =>{
      if(!dataType) return
      console.log(dataType)
      try{
        const respone = await fetch(API_URL + `/${dataType}`)
        const responeItems = await respone.json()
        SetItems(responeItems)
      }catch(err){
        console.log(err);
      }
    }

    handleTypeChange()
  }, [dataType])

  
  return (
    <div className="App">
      <Header
        setDataType = {setDataType}
      />
      <Content
        items={items}
      />
    </div>
  );
}

export default App;
