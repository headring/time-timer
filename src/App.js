import styled from 'styled-components';
import { Button } from './components/button';
import { useState } from 'react';

const Background = styled.div`
  width: 100vw; 
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const IphoneWrapper = styled.div`
  width: 390px;
  height: 844px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Timeform = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


function App() {
  const [min, setMin] = useState('00')

  const submitTime = (e) =>{
    setMin(e.target.value)
  }
  return (
    <Background>
      <IphoneWrapper>
        <h1>TimeTimer</h1>
        <Timeform onSubmit={submitTime}>
          <Button>Set Time</Button>
          <input type='string' value={min} onChange={(e) => setMin(e.target.value)} />
        </Timeform>

        
      </IphoneWrapper>
    </Background>
);
}

export default App;
