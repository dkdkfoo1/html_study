<h1>반응형 웹디자인&웹퍼블리셔 양성과정 버전기록</h1>
<p><br></p>
<p>ex) 날짜 - 제목 - 요약</p>
<h2>23.02.13 시작 - HTML</h2>
<p>H1~H6, p, br, inline, block</p>
<p>H1~H3은 검색 키워드로 활용가능하다. H4~H6은 꼭 필요한 경우만 이용하거나 권장안함 </p>
<p>block과 inline 태그는 의미에 맞게 외부/내부 구조로 구성해서 사용해야 한다. (의미 중첨되지 않도록)</p>
<hr>
<h2>23.02.14 오늘태그시작 - HTML</h2>
<h3>이 날 조퇴함.. 혼자 복습하기!</h3>
<p>gnb(global navigation bar)<br>사이트 최상단 내비게이션 어떤 페이지에 들어가도 고정되어 있는 주 메뉴</p>
<p>lnb(local navigation bar)<br>gnb의 하단에 배치된 서브 메뉴, 중분류 메뉴</p>
<p>snb (side navigation bar)<br>페이지 내에 좌/우측에 일반적으로 존재하는 추가 메뉴</p>
<p>fnb (footer navigation bar)<br>사이트 최하단 내비게이션<br>footer 영역에 존재하는 회사소개 저작권 등의 보조메뉴 (고객센터 번호/ 센터 위치/ 회사위치)</P>
<p>사이트 header - main - footer로 구성</p>
<p><strong>strong</strong>= 포인트 <em>em</em>= 강조</p>
<blockqoute>blockquote 태그는 어떤 섹션을 통째로 인용할 때 쓰는 태그입니다.
따옴표 없이 들여쓰기가 되고 인용문이 아닌 부분과 줄 간격이 넓어집니다. 
짧은 인용문, 긴 인용문의 길이를 기준은 정확하게 정해져 있지는 않습니다.
적당히 한 줄을 넘지 않는 문장은 q 태그를, 한 줄을 넘어가는 긴 문장이나 여러 문장은blockquote 태그를 쓰면 됩니다
q 태그와 마찬가지로 출처를 나타내는 cite 속성을 쓸 수 있습니다.
</blockquote>
<hr>
<h2>23.02.15 ol,ul태그 - HTML</h2>
<ul>
  <li>ul,ol,li 순서있는 목록 없는 목록 구분 확실히 해야함.</li>
  <li>li의 <em>형제태그</em>는 li만 올 수 있으니 나머지 태그는 그 자식, 자손태그에 삽입해야 한다.</li>
  <li><strong>ol태그</strong>는 순서가 있는 리스트를 이용할때 사용하는 태그</li>
  <li><strong>ul태그</strong>는 순서가 없는 리스트를 이용할때 사용하는 태그</li>
  <li>li태그와 제목태그는 형제가 아니라서 같은 열에 사용할 수 없음</li>
  <li>li태그 안에 h태그 사용은 가능.</li>
</ul>
<ul>
  <li>정의형목록은 dl,dt,dd 세가지다</li>
  <li>d1과 dt사이에는 태그가 들어갈 수 없다.</li>
  <li>dt-dd-dd는 가능하지만 dt-dt-dd는 가능하지 않다 ->왜냐하면 dt는 제목이고 제목은 하나라서</li>
  <li>dl을 사용하면 그룹이 묶여서 ul이나 ol보다 편한 장점을 가지고 있다.</li>
</ul>
<div class="study">
  <h2>23.02.16 - HTML - 시맨틱태그, 그룹태그</h2>
  <dl>
    <dt>div태그는 그룹을 묶어주는 태그로써의 역할만 할 뿐, 의미가 없다</dt>
    <dd>->그래서 class로 이름을 선언해줘야 왜 묶었는지 알 수 있음. 마치 피그마에서 그룹을 묶어서 이름을 짓듯이!</dd>
  </dl>
</div>
  <ul>
    <li>시맨틱태그에는 헤더, 네비, 섹션, 어사이드, 아티클, 푸터, 디테일, 메인, 마크등이 있다.</li>
    <li>HTML에서 CSS를 해줘야 디자인이 보인다. HTML은 뼈대로서의 기능을 한다.</li>
  </ul>  
<hr>
<h2>23.02.17 ol,ul태그 - HTML</h2>
  <p>이미지를 올릴 때는 alt 태그로 시각장애인에게 필요한 웹 접근성 요소를 넣어준다 <br>
  비디오 파일을 재생할 때는 autoplay, muted, controls 태그를 사용해서 자동재생, 음소거, 컨트롤바를 만들 수 있다. </p>
  <h3>절대경로와 상대경로</h3>
  <ol>
    <li>절대경로는 어떤 파일이 존재하기 위해서 있어야 하는 시발점<br>
http:// ←또한 절대경로임</li>
    <li>상대경로는 ‘기준경로’를 기준으로 경로를 구성하는 것을 상대경로라고 한다.</li>
  </ol>
<hr>
<h2>23.02.18 주말연습 - HTML</h2>
<h3>기본태그연습</h3>
<p>p태그는 pharagraph내용, 단락의 뜻을 갖고있음</p>
<strong>strong은 글자를 굵게 만들어준다. 중요도보다는 시각적인 의미!!! </strong><br>
<em>em은 글자를 강조한다. strong과 다르게 시각적인 의미가 아닌, 중요한 포인트를 강조할 때 사용. strorng보다 em이 더 중요하다는 것! </em>
  <p>sub<sub>위첨자</sub></p>
  <p>sup<sup>아래첨자</sup><p>
  <p><s>교체</s></p>
  <p><del>삭제</del><p>
<blockquote>
  blockquote는 외부에서 가져온 첨부 글을 블록 형태로 묶을 경우 사용합니다.
  cite 속성으로 첨부 주소를 기록할 수 있습니다.
</blockquote>
<q>
  q는 외부에서 가져온 첨부 글을 블록 내 인라인 형태로 묶을 경우 사용합니다.
  blockquote랑은 다르게 인라인임!!!
</q>
<p><code>code 태그는 코드사용에 적합한 글자로 만드는 태그</code></p>
<address>footer 영역에서 주로사용하는 address 태그. 웹사이트의 고객센터등. 다른 블록을 자식또는 자손으로 불가</address>
<hr>
<p>hr은 수평선! 호라이즌! css에서는 표현하지 않고 숨기는 경우가 대부분. 사이트 각 영역을 구분할 때 사용. <sub>위에 사용함!</sub> </p>
<p>&lt; &gt; &amp; &num; &nbsp; 특수문자 처리!</p>
<a href="https://blog.naver.com/skyboy7863/222008028507"> 태그 정보 참고페이지 </a>
  

