# 원티드 프리온보딩 코스
## Toggle
- 구현한 방법과 이유
  - input과 label을 통한 구현
  - input의 change이벤트를 통한 상태관리로 Toggle ON/OFF 구현
- 구현하면서 어려웠던 점과 해결 방법
  - Label의 배경색 변경을 왼쪽에서 오른쪽(오른쪽 -> 왼쪽)으로 변경하는 것  
  → ON/OFF에 따라 before의 width크기를 변경하여 해결
- 자세한 실행 방법  
  1\. Toggle 클릭시 onChange이벤트 실행  
  2\. setValue를 통해 value의 값을 현재의 반대값으로 변경  
  3\. 변경된 value가 props로 넘겨지고 이에따른 html및 css변경 
## Modal
- 구현한 방법과 이유
  - button과 div를 통한 구현
  - button의 click이벤트를 통한 상태관리로 Modal ON/OFF 구현
- 구현하면서 어려웠던 점과 해결 방법 
  - 딱히 없었다.
- 자세한 실행 방법  
  1\. 삼항 연산자를 활용하여 value의 값이 true이면 Modal 보여지고, false이면 안보여지게 구현  
  2\. Button 클릭시 onClick이벤트 실행  
  3\. setValue를 통해 value의 값을 true로 변경하여 Modal 생성  
  4\. x를 누르면 value의 값을 false로 변경하여 Modal 제거  
## Tab
- 구현한 방법과 이유
  - ul과 li를 통한 구현
  - li의 onClick이벤트를 통한 상태관리로 Tab 구현
- 구현하면서 어려웠던 점과 해결 방법
  - Menu에 따른 css 변환  
  → Menu 생성 시 선택된 Menu인지 확인하여 그에 맞는 css로 생성
- 자세한 실행 방법  
  1\. Menu를 클릭하면 해당하는 메뉴의 index가 value값으로 설정  
  2\. value를 통해 선택된 Menu를 찾고 css 변경 
## Tag
- 구현한 방법과 이유
  - form과 input을 통한 구현
  - form을 통해 제출된 input을 확인하여 Tag생성 
- 구현하면서 어려웠던 점과 해결 방법 
  - placeholder 위치변경  
  → use effect를 통해 Tag의 width값이 변경될 때마다 확인 해서 padding left 변경
  - padding 증가에따른 input크기 증가  
  → box-sizing: border-box로 해결 
- 자세한 실행 방법  
  1\. input에 값을 입력하면 onsubmit이벤트를 통해 입력된 값을 state에 등록  
  2\. map함수를 활용하여 state에 등록된 값의 수 만큼 Tag 생성  
  3\. x버튼 클릭시 넘겨받은 index를 활용하여 Tag 삭제 
## AutoComplete
- 구현한 방법과 이유
  - 단어들을 배열에 입력해 두고 includes함수통해 입력된 단어와 일치여부 확인 
- 구현하면서 어려웠던 점과 해결 방법
  - 자동완성 단어 추가에따른 UI변경  
  → 자동완성 단어 추가시 props를 통해 css변경, focus와 blur이벤트 활용
- 자세한 실행 방법  
  1\. input값 변경을 감지하고 변경된 값과 기존의 완성될 단어들의 일치여부 판단  
  2\. 일치하면 일치하는 단어들을 모두 stste에 등록  
  3\. map을 통해 state에 등록된 단어들 표시  
  4\. 단어 클릭시 setValue를 통해 input의 value값을 해당 단어로 변경  
## ClickToEdit
- 구현한 방법과 이유
  - input의 onBlur이벤트를 통해 state변경 
- 구현하면서 어려웠던 점과 해결 방법 
  - input value와 state값이 연결되어 있을 때 input값 변경이 안됨  
  → useRef활용하여 값 변경시 해당 요소의 value수정
- 자세한 실행 방법  
  1\. 변경하고 싶은 input의 내용 수정  
  2\. 수정 후 input의 바깥쪽 클릭 시 onBlur 이벤트를 통해 state 변경  
  3\. useEffect를 통해 state값 변경 확인  
  4\. 변경된 state값이 이름이면 이름 변경(나이이면 나이)
