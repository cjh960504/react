import React, {useState, useRef} from 'react';

function MultiInputSample(){
    /* 
        단순히 useState를 여러 개 만들어서 여러 input을 관리하는 방법도 있지만, 좋은 방법은 아님
        input에 name을 설정하고 이벤트가 발생했을 때 이 값을 참조하는 것
        useState에서는 문자열이 아니라 객체 형태의 상태를 관리해야함!!!
    */
    //inputs 는 name과 nickname 값을 가진 객체 형태
    //setInputs 는 객체를 매개변수로 받는 메서드 형태?
    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    });

    const nameInput = useRef(); //Ref객체 생성, 필요한 요소에 ref={nameInput}과 같이 설정
    
    const {name, nickname} = inputs; //return 문에 들어가는 {name}, {nickname} 기본값

    const onChange = (e) => {
        const {value, name} = e.target; //이벤트가 일어난 target 내 값과 name을 가져옴

        // inputs[name] = value 와 같이 수정하면 이 값을 참조하는 다른 요소에서는 값이 안바뀜
        // 새로운 객체를 만들어서 새로운 객체에 변화를 주고, 이를 상테로 사용해야함!
        // 기존 inputs 객체를 복사하여 만든 새로운 객체 내 [name] 객체의 값을 input으로 입력받은 값으로 수정하여 상태 변경
        setInputs({
            /*
                name: inputs[name],
                nickname: inputs[nickname]
                와 같은 뜻
            */ 
            ...inputs, // 기존의 inputs 객체 복사한 뒤 
            [name]: value // 복사한 새로운 inputs 객체 내 name 키를 가진 값을 value로 새로 설정
        });
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });

        //ref객체의 .current는 현재 ref로 설정된 요소의 DOM을 가르킴
        //document.getElementsByNames('name').focus();
        nameInput.current.focus();
    }

    return (
        <div>
            <input name='name' placeholder='이름' onChange={onChange} value={name} ref={nameInput}/>
            <input name='nickname' placeholder='닉네임' onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default MultiInputSample;