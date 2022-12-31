import React, { useState } from 'react';

function Counter(){
    // useState 를 사용 할 때에는 상태의 기본값을 파라미터로 넣어서 호출해줍니다. 
    //이 함수를 호출해주면 배열이 반환되는데요, 여기서 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수입니다.
    
    // const numberState = useState(0);
    // const number = numberState[0];
    // const setNumber = numberState[1];
    // => 배열 비구조화 할당
    const [number, setNumber] = useState(0); 
    

    const onIncrease = () => {
        //console.log('+1');
        //setNumber(number + 1); //새로운 값을 새로 지정
        setNumber(prevNumber => prevNumber + 1); //새로운 값을 기존 값을 이용하여 지정
    };
    const onDecrease = () => {
        // console.log('-1');
        // setNumber(number - 1);
        setNumber(prevNumber => prevNumber - 1);
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;