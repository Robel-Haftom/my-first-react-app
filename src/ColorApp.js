  import ColorDisplay from './Components/Color Display app/ColorDisplay';
  import InputColor from './Components/Color Display app/InputColor';
  import { useState } from 'react';
  function ColorApp() {
    const [colorValue, setColorValue] = useState('');

    return(
      <>
        <ColorDisplay colorValue={colorValue} />
        <InputColor 
          colorValue = {colorValue}
          setColorValue = {setColorValue}/>
      </>
    )
  }

  export default ColorApp;
