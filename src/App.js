import logo from './logo.svg';
import Hello from './Hello';
import Wrapper from './Wrapper';
import './App.css';

function App() {
  /*Javascript 영역*/
  const name = "준혁";
  const style = {
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : 24,
    padding : '1rem'
  };


  return ( /*
            JSX 영역
           */
      <Wrapper>
        {/*주석*/}
        /*보여유*/
        <Hello 
          name={name} 
          color="red"
          //태그 내부에는 한줄주석가능
        />
        <Hello 
          color="red"
          //태그 내부에는 한줄주석가능
        />
        <div style={style}>{name}</div>
        <div className="gray-box"></div>
      </Wrapper>
  );
}

export default App;
