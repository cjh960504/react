import React, {useState} from 'react';

function InputSample(){
    //[요소 기본값, set메서드]
    //useState로 요소의 값을 관리한다는게 매우 편하다
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onReset = () => setText('');

    return (
        <div>
            <input value={text} onChange={onChange}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값(동적): {text}</b>
            </div>
        </div>
    );
}

export default InputSample;