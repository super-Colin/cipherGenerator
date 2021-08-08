import React, { useState } from 'react';



// const alphabet = (slicePoint)=>{
//   //https://ourcodeworld.com/articles/read/1458/how-to-print-the-alphabet-with-javascript

//   // const lowerAndUpperCaseAlphabetWithSymbols = String.fromCharCode(...Array(123).keys()).slice(32);
//   // let lowerCaseAlphabet = String.fromCharCode(...Array(123).keys()).slice(97);
//   return String.fromCharCode(...Array(123).keys()).slice(slicePoint);
// }

// let shiftOptions = {
//   leftOrRight: -1,
//   alphabet: "lowercase",
//   shiftAmount: 3
// }


// caesarCipherEncode('some text', shiftOptions);



const CaesarCipherForm = () => {

  const [caesarCipherState, setCaesarCipherState] = useState({
    textToEncode: '',
    // encodedText: '',
    textToDecode: '',
    // decodedText:'',
    shiftOptions: {
      leftOrRight: -1,
      alphabet: "lowercase",
      shiftAmount: 3
    }
  });

  const caesarCipherEncode = (textToEncode, shiftOptions) => {
    const charCodeCutOff = 123; // end of alphabet and symbols in charCode
    // const slicePoint = 97; //begining of lowercase alphabet
    let encodedText = '';

    let slicePoint = '';
    switch(shiftOptions.alphabet){
      case "lowerAndUpperCaseAlphabetWithSymbols":
        slicePoint = 32;
      case "lowercase":
      default:
        slicePoint = 97;
    }
    
    // const alphabet = alphabet(slicePoint).split('');
    // const alphabet = String.fromCharCode(...Array(charCodeCutOff).keys()).slice(slicePoint).split('');
    let textToEncodeArray = textToEncode.split('');


    textToEncodeArray.forEach( (character) => {
      let lowercase = '';
      if ( character === character.toLowerCase() ){ lowercase = true } else { lowercase = false }
      
      let charCode = character.toLowerCase().charCodeAt(0); 
      // let shiftedCharCode = ( shiftOptions.shiftAmount + charCode) * shiftOptions.leftOrRight;
      let shiftedCharCode = (shiftOptions.shiftAmount * shiftOptions.leftOrRight) + charCode;
      let newCharCode = 0;
      if( shiftedCharCode < slicePoint ){
        newCharCode = charCodeCutOff - (shiftedCharCode - slicePoint);
        console.log(`shiftedCharCode < slicePoint: ${charCode} new char code: ${newCharCode}`);
      } else if(shiftedCharCode > charCodeCutOff){
        newCharCode = slicePoint + (shiftedCharCode - charCodeCutOff);
        console.log(`shiftedCharCode > charCodeCutOff: ${charCode} new char code: ${newCharCode}`);
      }else{
        newCharCode = shiftedCharCode;
        console.log(`newCharCode = ${shiftedCharCode}`);
      }
      console.log(`input char code: ${charCode}, shifted code: ${shiftedCharCode}, new char code: ${newCharCode}`);

      let newChar = String.fromCharCode(newCharCode)
      if( ! lowercase ){newChar = newChar.toUpperCase();}

      encodedText += newChar;
      
    });

    return encodedText;

  }


  const encodeTextAreaHandler = (e)=>{
    // console.log(caesarCipherState.shiftOptions);
    const decodedText = caesarCipherEncode(e.target.value, caesarCipherState.shiftOptions);
    setCaesarCipherState({
      ...caesarCipherState,
      textToEncode: e.target.value,
      textToDecode: decodedText
    });
  }
  const decodeTextAreaHandler = (e)=>{
    setCaesarCipherState({ ...caesarCipherState,textToDecode: e.target.value});
  }

  return (
    <div className="caesarCipher_container">


      <div className="encode">
        <h3 className="caesarCipher_title" >Encode</h3>
        <textarea
          className="caesarCipher_textInput"
          onChange={encodeTextAreaHandler}
          value={caesarCipherState.textToEncode} 
          maxLength="100" 
        />
      </div>

      <div className="options">
        <hr />
        <h3 className="caesarCipher_title" >Options</h3>
        <button className="caesarCipher_button" >Encode</button>
        <button className="caesarCipher_button" >Decode</button>
        <hr />
      </div>


      <div className="decode">
        <h3 className="caesarCipher_title" >Decode</h3>
        <textarea
          className="caesarCipher_textInput"
          onChange={decodeTextAreaHandler}
          value={caesarCipherState.textToDecode}
          maxLength="100"
        />
      </div>


    </div>
  )
}

export default CaesarCipherForm
