import React from 'react';

// function Hello(props){
//     //객체 형태니까 {}가 하나가 더 붙지!
//     return <div style={{color: props.color}}>{props.name}님 안녕하세요</div>
// }

//프로퍼티 객체 내부의 color와 name 값을 비구조화 할당 받는다
function Hello({color, name}){
    /* 
        JSX 안에 {}를 써서 js표현을 할 수 있다. 
        style 안에 {}를 한번 더 쓴건 {} js표현을 위해 한번, 객체 리터럴 표현을 위해 한번 썼기 때문이다.
    */
    return <div style={{color}}>안녕하세요 {name}</div>
}

//기본 프로퍼티 설정
Hello.defaultProps = {
    name : "이름없음"
}

export default Hello;