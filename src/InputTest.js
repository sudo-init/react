import React from 'react';

function MyComponent() {
  return (
    <div>
      {/* 기본 텍스트 입력 */}
      <input type="text" />

      {/* 다양한 input 타입 예시들 */}
      <input type="password" />
      <input type="checkbox" />
      <input type="radio" />
      <input type="file" />

      {/* 텍스트 입력과 value 속성 사용 */}
      <input type="text" value="기본값" />

      {/* 이벤트 핸들러 추가 */}
      <input type="text" onChange={(e) => console.log(e.target.value)} />
    </div>
  );
}

export default MyComponent;
