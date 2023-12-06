import React, { useState } from 'react';

function SearchBox() {
  // 검색어 상태와 검색어를 추가하는 함수
  const [searchTerm, setSearchTerm] = useState('');
  const [boxes, setBoxes] = useState([]);

  // 검색어를 입력하는 input의 변경을 감지하고 검색어 상태 업데이트
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // 검색어를 박스 목록에 추가하는 함수
  const addBox = () => {
    if (searchTerm.trim() !== '') {
      setBoxes([...boxes, searchTerm]);
      setSearchTerm(''); // 입력값 초기화
    }
  };

  return (
    <div>
      {/* 검색어 입력 창 */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="검색어를 입력하세요"
      />

      {/* 검색 버튼 */}
      <button onClick={addBox}>추가</button>

      {/* 검색어를 나타내는 박스 목록 */}
      <div>
        {boxes.map((box, index) => (
          <div key={index} style={{ border: '1px solid black', margin: '5px', padding: '5px' }}>
            {box}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBox;
