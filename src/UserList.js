import React from 'react';

function User({user}){
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList(){
    const users = [
        {
            id : 1,
            username : 'cjh',
            email : 'cjhwnsgur@gmail.com'
        },
        {
            id : 2,
            username : 'cjc',
            email : 'cjc@gmail.com'
        },
        {
            id : 3,
            username : 'qwe',
            email : 'qwer@gmail.com'
        }
    ];

    return (
        <div>
            {/* 반복되는 컴포넌트위해 재사용할 수 있는 컴포넌트 생성 */}
            {/* <User user={users[0]}/> 
            <User user={users[1]}/>
            <User user={users[2]}/> */}

            {/* JSX 내에서 자바스크립트를 사용하기 위해 첫번째 괄호 {} 
                map() 내 람다함수 JSX형태의 반환값을 위한 ()내 태그 사용

                key={} 값을 두어 key 통해 업데이트할 수 있음
            */}
            {users.map(user => (
                <User user={user} key={user.id}/>
            ))}
        </div>
    );
}

export default UserList;