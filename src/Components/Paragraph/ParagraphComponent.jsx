import { useState } from 'react';
import React from 'react';
import "./style.css"

const ParagraphComponent = () => {

    const [text,setText] = useState('');
    const [charCount, setCharCount] = useState(0); 
    const [wordCount, setWordCount] = useState(0);
    const [sentenceCount, setSentenceCount] = useState(0);
    const [paragraphCount, setParagraphCount] = useState(0);
    const [spaceCount, setSpaceCount] = useState(0);
    const [punctuationCount, setPunctuationCount] = useState(0);

  

   // function to handle onchange event on textarea
    function handleData(e){
        let value = e.target.value;
        setText(value)
       
       // replace new line charater with empty string
       let charcters = value.trim().replace(/[\n]/g,'');
      // set charater count  
      setCharCount(charcters.length);
      
      // give array of words
      let words = value.trim().split(/\s+/);
      // check additional condition
      setWordCount(words.length === 1 && words[0] === '' ? 0 : words.length);
    


      // calculate no of sentences
      const sentences = value.trim().split(/[.!?]+/);
      setSentenceCount(sentences.length === 1 && sentences[0] === '' ? 0 : sentences.length);
       

       // split string whenever more than one \n occurs
       const paragraphs = value.trim().split(/\n{2,}/);
       setParagraphCount(paragraphs.length === 1 && paragraphs[0] === '' ? 0 : paragraphs.length);
    
      // Calculate number of spaces
      setSpaceCount((value.trim().match(/ /g) || []).length);

       // Calculate number of punctuations
       setPunctuationCount((value.match(/[@[\].,\/#!$%\^&\*;:{}=\-_`~()]/g) || []).length);
    }


  return (
    <div className='paragraph'>
      <textarea value={text} placeholder='Type, or copy/paste your content here.' onChange={handleData} />
      <table>
     <thead>
        <tr>
            <th>Characters</th>
            <th>Words</th>
            <th>Sentences</th>
            <th>Paragraphs</th>
            <th>Spaces</th>
            <th>punctuations</th>
        </tr>
     </thead>
        <tbody>
        <tr>
            <td>{charCount}</td>
            <td>{wordCount}</td>
            <td>{sentenceCount}</td>
            <td>{paragraphCount}</td>
            <td>{spaceCount}</td>
            <td>{punctuationCount}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ParagraphComponent