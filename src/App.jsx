import { useState } from 'react'
import './App.css'
import WordInputComponent from './Components/WordInput/WordInputComponent'
import ParagraphComponent from './Components/Paragraph/ParagraphComponent'

function App() {
  const [flag, setFlag] = useState(false); // keep track for which content to be shown
  

  return (
    <div className='app'>

     <h1>Text Analyser</h1>
     <p>Text Analyser is a simple free online tool for SEO web content analysis that helps you 
      find most frequent phrases and words, number of characters, words, sentences, and
      paragraphs, and estimated read timeof your content.
     </p>
      <div className='nav-container'>
       <div style={!flag? {backgroundColor:'#FFFFFF',boxShadow:' 0px 4px 8px rgba(0, 0, 0, 0.2)'}:{}} onClick={()=>{setFlag(false)}} >Word Input</div>
       <div style={flag? {backgroundColor:'#FFFFFF',boxShadow:' 0px 4px 8px rgba(0, 0, 0, 0.2)'}:{}} onClick={()=>{setFlag(true)}}>Paragraph</div>
     </div>
    { flag?<ParagraphComponent/>:<WordInputComponent/>}
    

     </div>
  )
}

export default App
