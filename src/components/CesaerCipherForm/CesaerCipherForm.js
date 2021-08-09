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
    // textToEncode: "Something that's been through cipher",
    textToEncode: '',
    textToDecode: '',
    shiftOptions_encodeOrDecode: 1, // -1 = decode, 1 = encode
    shiftOptions_leftOrRight: 1, //-1 =left, 1 = right
    shiftOptions_alphabet: "lowercase",
    shiftOptions_shiftAmount: 3,

  });

  const caesarCipherEncode = (textToEncode, shiftOptions) => {
    // console.log(shiftOptions);
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
      let newCharCode = 0;
      if(charCode >= charCodeCutOff || charCode < slicePoint){
        newCharCode = charCode;
      }else{
        let amountToShift = (shiftOptions.shiftAmount * shiftOptions.leftOrRight * shiftOptions.encodeOrDecode );
        // console.log(amountToShift);
        let shiftedCharCode = amountToShift + charCode;
        // console.log( (shiftOptions.shiftAmount * shiftOptions.leftOrRight * shiftOptions.encodeOrDecode ) )
        
        if( shiftedCharCode <= slicePoint ){
          newCharCode = (charCodeCutOff - 1) + (shiftedCharCode - slicePoint);
          console.log(`shiftedCharCode < slicePoint: ${shiftedCharCode} < ${charCode} new char code: ${newCharCode}`);
        } else if(shiftedCharCode >= charCodeCutOff){
          newCharCode = slicePoint + (shiftedCharCode - charCodeCutOff);
          console.log(`shiftedCharCode > charCodeCutOff: ${slicePoint} + ${(shiftedCharCode - charCodeCutOff)} = ${newCharCode}`);
        }else{
          newCharCode = shiftedCharCode;
        }
      }
      let newChar = String.fromCharCode(newCharCode)
      if( ! lowercase ){newChar = newChar.toUpperCase();}
      encodedText += newChar;
      
    });

    return encodedText;

  }

  const getShiftOptionsJson = ()=>{
    let shiftOptions = {
      encodeOrDecode: caesarCipherState.shiftOptions_encodeOrDecode,
      leftOrRight: caesarCipherState.shiftOptions_leftOrRight,
      alphabet: caesarCipherState.shiftOptions_alphabet,
      shiftAmount: caesarCipherState.shiftOptions_shiftAmount,
    }
    console.log('shiftOptions: ', shiftOptions);
    return shiftOptions;
  }

  const encodeTextAreaHandler = (e)=>{
    const shiftOptions = getShiftOptionsJson();
    const encodedText = caesarCipherEncode(e.target.value, shiftOptions);
    setCaesarCipherState({
      ...caesarCipherState,
      textToEncode: e.target.value,
      textToDecode: encodedText
    });
  }
  const decodeTextAreaHandler = (e)=>{
    const shiftOptions = getShiftOptionsJson();
    const decodedText = caesarCipherEncode(e.target.value, shiftOptions);
    setCaesarCipherState({
      ...caesarCipherState,
      textToEncode: decodedText,
      textToDecode: e.target.value
    });
  }

  return (
    <div className="caesarCipher_container">


      <div className="encode">
        <h1 className="caesarCipher_title" >Encode</h1>
        <textarea
          className="caesarCipher_textInput"
          onFocus={()=>{setCaesarCipherState({...caesarCipherState, shiftOptions_encodeOrDecode:1})}}
          onChange={encodeTextAreaHandler}
          value={caesarCipherState.textToEncode} 
          maxLength="100" 
        />
      </div>

      <div className="options">
        <hr />
        <h2 className="caesarCipher_title" >Options</h2>

        <div className="caesarCipher_options-adjustments">
          <div>
            <h3>Shift Amount</h3>
            <input
              type="range"
              min="1"
              max="9" 
              value={caesarCipherState.shiftOptions_shiftAmount}
              onChange={ (e)=>{setCaesarCipherState({...caesarCipherState, shiftOptions_shiftAmount: e.target.value})} }
            />
            <br />
            <span>{caesarCipherState.shiftOptions_shiftAmount}</span>
          </div>

        
          <div >
            <h3>Left or Right</h3>
            <div>
              <input 
              type="checkbox" 
              value="left" 
              name="left" 
              checked={ caesarCipherState.shiftOptions_leftOrRight - 1}
              onChange={ ()=>{setCaesarCipherState({...caesarCipherState, shiftOptions_leftOrRight: -1})} }
            />
              <span>Left</span>
            </div>
            <div>
              <input 
              type="checkbox" 
              value="right" 
              name="right" 
              checked={ caesarCipherState.shiftOptions_leftOrRight + 1}
              onChange={ ()=>{setCaesarCipherState({...caesarCipherState, shiftOptions_leftOrRight: 1})} }
            />
              <span>Right</span>
            </div>
          </div>
        </div>

        <div>
          <p>Shift Amount: {caesarCipherState.shiftOptions_shiftAmount}</p>
          <p> Left or Right: {caesarCipherState.shiftOptions_leftOrRight + 1 ? "Right" : "Left"}</p>
          <p> Decode or Encode: {caesarCipherState.shiftOptions_encodeOrDecode + 1 ? "Encode" : "Decode"}</p>
        </div>
        
        
        <hr />
      </div>


      <div className="decode">
        <h1 className="caesarCipher_title" >Decode</h1>
        <textarea
          className="caesarCipher_textInput"
          
          onFocus={()=>{setCaesarCipherState({...caesarCipherState, shiftOptions_encodeOrDecode:-1})}}
          onChange={decodeTextAreaHandler}
          value={caesarCipherState.textToDecode}
          maxLength="100"
        />
      </div>


    </div>
  )
}

export default CaesarCipherForm
