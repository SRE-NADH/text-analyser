
import React from 'react';
import "./style.css"

const WordInputComponent = () => {
  return (
   <div className='word-input'>
    <div className='input-field'>
        <input type="text"/>
        <button>Process Word</button>
    </div>

    <div className='table-data'>
       <table>
        <thead>
         <tr>
           <th>Characters</th>
            <th>Words</th>
         </tr>
         </thead>
         <tbody>
         <tr>
            <td></td>
            <td></td>
          </tr>
         </tbody>
       </table>
    </div>

    <div className='data-container'>
    
    </div>

   </div>
  )
}

export default WordInputComponent