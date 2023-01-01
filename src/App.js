import logo from './logo.svg';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import MultiInputSample from './MultiInputSample';
import UserList from './UserList';
import './App.css';

function App1() {
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
          //isSpecial ={true} //true는 자바스크립트값
          //태그 내부에는 한줄주석가능
          isSpecial //이름만 넣어주면 isSpecial = {true} 와 같은 의미, props 로 설정만 해준것만으로도 true라?
        />
        <div style={style}>{name}</div>
        <div className="gray-box"></div>
      </Wrapper>
  );
}

function App2(){
  return (
    //두개 이상의 태그는 하나의 태그로 감싸져야있어야함. 
    //Counter 태그 하나이므로 상관없다.
    <Counter/>
  );
}

function App3(){
  return (
    <InputSample/>
  );
}

function App4(){
  return (
    <MultiInputSample/>
  );
}

function App(){
  return (
    <UserList/>
  );
}

export default App;
