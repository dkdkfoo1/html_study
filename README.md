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
<hr>
<h2>23.02.19 주말연습 - HTML</h2>
<ul>
  <li>gnb &lt; global navigation bar &gt; 사이트 최상단 네비게이션. 어떤 페이지레 들어가도 고정되어 있는 주 메뉴</li>
  <li>lnb &lt; local navigation bar &gt; gnb의 하단에 배치된 서브 메뉴, 중분류 메뉴</li>
  <li>snb &lt; side navigation bar &gt; 페이지 내의 좌/우측에 일반적으로 존재하는 추가 메뉴</li>
  <li>fnb &lt; footer navigation bar &gt; 사이트 최하단 네비게이션 footer 영역에 존재하는 회사소개, 저작권등의 보조 메뉴 <br>
  (고객센터 번호/ 센터 위치/ 회사위치)</li>
  <li><em>사이드 header - main - footer로 구성</em></li>  
</ul>
<ol>
  <li> 페이지 제목일 때는 h1으로 다시 돌아감</li>
  <li> 글자 크기와 상관없이 제목과 내용이면 제목은 h, 내용은 p를 씀</li>
  <li> 다자인이 같으면 묶는다 (ul,ol)</li>
  <li> li는 연속된 두 개 이상의 것</li>
</ol>
<hr>
<h2>23.02.20 - Table - HTML</h2>

<body>
  <table>
    <thead>
        <tr>
          <th>구분</th>
          <th>태그명</th>
          <th>의미</th>
        </tr>
    </thead>
    <tbody>
       <tr>
          <th rowspan=3>block</th>
          <td>&lt;tr&gt;</td>
          <td>가로행 태그</td>
       </tr>
       <tr>
          <td>&lt;td&gt;</td>
          <td>내용(열)태그</td>
       </tr>
       <tr>
          <td>&lt;th&gt;</td>
          <td>제목(열)태그</td>
       </tr>
    </tbody>
  </table>
</body>
<hr>
<h2>23.02.21-HTML-form</h2>
<form action="#" method="get">
<fieldset>
<legend>form퀴즈</legend>
<span>1.다음 중 label for와 연관된 input 속성은?</span><br>
<label><input type="radio" name="quize" value="id">1. id</label><br>
<label><input type="radio" name="quize" value="class">2. class</label><br>
<label><input type="radio" name="quize" value="name">3. name</label>
  <hr>
  <span>2.다음 중 선택양식에서 두개 이상의 답을 체크할 때 쓰는 type으로 옳은 것은</span><br>
  <label><input type="radio" name="quize2" value="radio">1.radio</label><br>
  <label><input type="radio" name="quize2" value="checkbox">1.checkbox</label><br>
</fieldset>
</form>
<hr>
<h2>23.02.22-HTML-clonecoding</h2>
<p>클론코딩 어렵다..</p>
<p>그룹 잘 묶어야 css에서 디자인 코드 넣기가 편합니다.</p>
<hr>
<h2>23.02.23 CSS태그 시작- CSS</h2>
<p>div 에 class를 넣는 이유.<br>
div만 계속 여러개 만들면 그냥 새폴더, 새폴더 이런식으로 만든거나 다름없음.<br>
그래서 class명을 넣어서 폴더 이름을 만들어 준거라고 보면됨.<br>
→그래서 CSS 디자인 태그를 넣을때 특정 CLASS을 선택해서 디자인요소를 넣을 수 있음.</p>
<p>글자 적용 font-size:fjksdjfskd;</p>
<p>→클래스,공백,클래스 는 클래스가 두개라는뜻.<br>
1.개별클래스 2. 공통클래스<br>
→공통으로도 테두리를 넣고 개별로색도 넣을 수 있음.</p>
<p>SPC삼립 경영이념 클론코딩/리디북스 로그인화면 클론코딩</p>
<p>class는 .으로 표시 / id는 #으로 </p>
<hr>
<h2>23.02.27 float태그- CSS</h2>
<p>float태그는 모든 형제대상에게 적용해야한다.</p>
<p>바로 전단계의 float를 clear하기위한 clear 태그를 사용</p>
<p>오늘 배운 폰트 적용, 특히 reset.css에 적용, 그리고 개별로 적용하는법 복습해야함.</p>
<p> css에서 {} 이 괄호 꼭 잊지 않고 넣어야함. 안그럼 오류 검증에서도 오류로 안나오고 제대로 css가 적용되지도 않는다. </p>
<p>되나 안되나</p>
<hr>
<h2>23.02.28 과제- CSS</h2>
<p>웹접근성개요 수요일에 다해서 목요일에 제출~~</p>
<hr>
<h2>23.03.03 position- CSS</h2>
<p>포지션으로 float 대신해서 부모기준, 혹은 본인 대상으로 위치를 옮길 수 있음.</p>
