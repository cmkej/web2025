<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>스마트 냉장고</title>

  <style>
  :root{
    --bg:#f7f7f7;
    --panel:#ffffff;
    --border:#dddddd;
    --text:#222;
    --text-muted:#666;

    --near7:#f1f1f1;
    --near3:#e5e5e5;
    --near1:#d9d9d9;
    --expired:#f8eaea;

    --radius:16px;
  }

  *{box-sizing:border-box;}
  html,body{
    margin:0;padding:0;height:100%;
    font-family:"Pretendard","Noto Sans KR",sans-serif;
    background:var(--bg);
    color:var(--text);
  }

  /* ========= Splash ========= */
  #splash {
    position: fixed; 
    inset: 0;
    display: flex; 
    flex-direction: column;
    justify-content: center; 
    align-items: center;

    background: linear-gradient(
       rgba(0,0,0,0.45),
        rgba(0,0,0,0.45)
      ),
      url('./image.jpg') center/cover no-repeat;

    color: #fff;
    gap: 14px;
    z-index: 9999;
    transition: opacity .45s, transform .45s;
  }
  #splash.splash-hide{opacity:0; transform:scale(.97) translateY(-10px);}
  .splash-title{font-size:2rem;font-weight:700;}
  .splash-btn{
    background:#fff; color:#111;
    padding:10px 20px; border-radius:10px;
    font-weight:700; border:none; cursor:pointer;
    transition: transform .15s cubic-bezier(0.34,1.56,0.64,1);
  }
  .splash-btn:hover{transform:scale(1.05);}

  /* ========= Root ========= */
  .root{
    width:100%; height:100vh;
    display:flex; justify-content:center;
    align-items:flex-start; padding-top:40px;
  }
  #app{
    width:100%; max-width:960px;
    display:none; opacity:0;
    transition:opacity .4s;
  }
  #app.app-show{display:block; opacity:1;}

  /* ========= Buttons ========= */
  button{
    border:none; cursor:pointer;
    padding:7px 16px;
    border-radius:12px;
    background:#111; color:white;
    font-size:13px; font-weight:600;
    transition: transform .15s cubic-bezier(0.34,1.56,0.64,1);
  }
  button:hover{ transform: scale(1.05); }
  .btn-primary{background:#000;}

  /* ========= Header ========= */
  .app-header{
    display:flex; justify-content:space-between;
    align-items:flex-end; margin-bottom:14px;
  }
  .app-header .desc{
    font-size:12px;color:var(--text-muted);
  }

  /* ========= Layout ========= */
  .main-layout{
    display:flex; gap:18px; width:100%;
  }
  .status-panel, .add-panel{
    background:var(--panel);
    border:1px solid var(--border);
    border-radius:var(--radius);
    padding:18px;
    box-shadow:0 3px 10px rgba(0,0,0,0.05);
    transition:.25s;
  }
  .status-panel{
    flex:1; display:flex; flex-direction:column;
  }
  .add-panel{
    flex:0 0 0%; max-width:0;
    opacity:0; overflow:hidden; transform:translateX(20px);
  }
  .main-layout.add-open .status-panel{flex:0 0 60%;}
  .main-layout.add-open .add-panel{
    flex:0 0 40%; max-width:40%; opacity:1; transform:translateX(0);
  }

  /* ========= Tabs ========= */
  .tabs{display:flex; gap:8px; flex-wrap:wrap; margin-bottom:14px;}
  .tab{
    padding:6px 12px; background:#eee;
    border-radius:999px; font-size:12px;
    cursor:pointer;
    transition: transform .15s cubic-bezier(0.34,1.56,0.64,1);
  }
  .tab:hover{transform:scale(1.05); background:#ddd;}
  .tab.active{background:#111; color:white;}

  /* ========= Blink Animation ========= */
  @keyframes blink-bg {
    0% { background-color: var(--near1); }
    100% { background-color: #ffffff; }
  }
  .near1{
    animation: blink-bg 1.2s infinite alternate;
  }

  /* ========= List ========= */
  #tabContent ul{
    list-style:none; padding:0; margin:0;
    display:flex; flex-direction:column;
    align-items:stretch;
  }

  .item{
    border:1px solid var(--border);
    background:white;
    border-radius:12px;
    padding:12px;
    display:flex; justify-content:space-between;
    margin-bottom:10px;
    width:100%;
  }

  .near7{background:var(--near7);}
  .near3{background:var(--near3);}
  .expired{background:var(--expired);}

  .controls button{
    display:block; margin-top:6px;
    padding:5px 10px; border-radius:8px;
    font-size:12px;
  }
  .btn-recipe{background:#222;}
  .btn-use{background:#444;}
  .btn-del{background:#a22;}

  /* ========= Add Panel ========= */
  .add-header{
    display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;
  }
  #closeAddBtn{
    padding:4px 10px !important;
    background:#333;
  }

  .form-column{
    display:flex; flex-direction:column; gap:14px;
  }
  .form-column label{
    display:flex; flex-direction:column;
    font-size:14px; font-weight:600; color:#333;
  }
  .form-column input,
  .form-column select{
    margin-top:6px; padding:10px 14px;
    border-radius:12px;
    border:1px solid #ccc;
    background:white;
  }
  .form-column input:focus,
  .form-column select:focus{
    border-color:#111;
    box-shadow:0 0 0 2px rgba(0,0,0,0.15);
  }

  /* ========= Modal ========= */
  #modal{
    position:fixed; inset:0;
    display:none; justify-content:center; align-items:center;
    background:rgba(0,0,0,0.4); z-index:9998;
  }
  #modal.open{display:flex;}
  .modal-box{
    background:white;
    width:90%; max-width:700px;
    border-radius:16px;
    padding:22px; max-height:90vh;
    overflow:auto;
  }
  #modalClose{background:#111; padding:6px 12px;}

  .recipe-card{
    border:1px solid var(--border);
    padding:12px; border-radius:14px;
    margin-bottom:14px;
  }
  .tag{
    background:#eee;
    padding:3px 6px; border-radius:8px;
    margin-right:4px; font-size:11px;
  }
  </style>
</head>

<body>

  <!-- ========= Splash ========= -->
  <div id="splash">
    <div class="splash-title">스마트 냉장고</div>
    <div class="splash-desc">Black & White Minimal</div>
    <button id="startApp" class="splash-btn">시작하기</button>
  </div>

  <!-- ========= App ========= -->
  <div class="root">
    <div id="app">

      <div class="app-header">
        <div>
          <h2>냉장고 재료 현황</h2>
          <div class="desc">유통기한 임박 재료는 회색 단계로 표시됩니다</div>
        </div>
        <button id="autoSuggestBtn" class="btn-primary">임박 레시피</button>
      </div>

      <div id="mainLayout" class="main-layout">

        <!-- LEFT -->
        <div class="status-panel">
          <div id="tabs" class="tabs"></div>
          <div id="tabContent"></div>

          <div style="text-align:center;margin-top:16px;">
            <button id="openAddBtn">재료 추가하기</button>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="add-panel">
          <div class="add-header">
            <h3>재료 추가</h3>
            <button id="closeAddBtn">닫기</button>
          </div>

          <form id="ingredientForm">
            <div class="form-column">

              <label>재료명
                <input id="name" required />
              </label>

              <label>수량
                <input id="qty" required />
              </label>

              <label>카테고리
                <select id="category">
                  <option>채소</option>
                  <option>육류</option>
                  <option>유제품</option>
                  <option>가공식품</option>
                  <option>과일</option>
                  <option>해산물</option>
                  <option>기타</option>
                </select>
              </label>

              <label>유통기한
                <input id="expiry" type="date" required />
              </label>

            </div>

            <button type="submit" class="btn-primary" style="margin-top:18px;">추가</button>
          </form>
        </div>

      </div>
    </div>

    <!-- ========= Modal ========= -->
    <div id="modal">
      <div class="modal-box">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <h3 id="modalTitle"></h3>
          <button id="modalClose">닫기</button>
        </div>
        <div id="modalBody" style="margin-top:12px;"></div>
      </div>
    </div>
  </div>
<script>
/* ========= State ========= */
const LS_KEY='fridge_data_v2';
const state={
  ingredients:[],
  activeTab:'전체',
  tabs:['전체','채소','육류','유제품','가공식품','과일','해산물','기타','폐기']
};

function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2);}

function load(){ 
  try{ state.ingredients = JSON.parse(localStorage.getItem(LS_KEY)) || []; }
  catch{} 
}

function save(){ 
  localStorage.setItem(LS_KEY, JSON.stringify(state.ingredients)); 
}

function daysUntil(date){
  const t = new Date(); t.setHours(0,0,0,0);
  const d = new Date(date); d.setHours(0,0,0,0);
  return Math.ceil((d - t) / 86400000);
}

function expiryClass(i){
  const d = daysUntil(i.expiry);
  if(d < 0) return 'expired';
  if(d <= 1) return 'near1';
  if(d <= 3) return 'near3';
  if(d <= 7) return 'near7';
  return '';
}

/* ========= Tabs ========= */
function renderTabs(){
  const box = document.getElementById('tabs');
  box.innerHTML = '';

  state.tabs.forEach(t => {
    const el = document.createElement('div');
    el.className = 'tab' + (state.activeTab === t ? ' active' : '');
    el.textContent = t;
    el.onclick = () => {
      state.activeTab = t;
      renderTabs();
      renderList();
    };
    box.appendChild(el);
  });
}

/* ========= List ========= */
function renderList(){
  const cont = document.getElementById('tabContent');
  cont.innerHTML = '';

  const filtered = state.ingredients.filter(i => {
    const expired = daysUntil(i.expiry) < 0;
    if(state.activeTab === '전체') return !expired;
    if(state.activeTab === '폐기') return expired;
    return i.category === state.activeTab && !expired;
  });

  if(!filtered.length){
    cont.innerHTML='<div style="text-align:center;color:#777;margin-top:20px;">재료가 없습니다.</div>';
    return;
  }

  const ul = document.createElement('ul');

  filtered.forEach(i => {
    const li = document.createElement('li');
    li.className = 'item ' + expiryClass(i);

    /* 🔥 이모지 + 깜빡임 */
    const d = daysUntil(i.expiry);
    let emoji = "";
    if(d <= 1) emoji = "🔴 ";
    else if(d <= 3) emoji = "🟠 ";
    else if(d <= 7) emoji = "🟡 ";

    const left = document.createElement('div');
    left.innerHTML = `
      <strong>${emoji}${escapeHtml(i.name)}</strong>
      <div style="font-size:12px;color:#555;">${escapeHtml(i.qty)}</div>
      <div style="font-size:11px;color:#777;">${i.expiry} · D${daysUntil(i.expiry)}</div>
    `;

    const ctrl = document.createElement('div');
    ctrl.className = 'controls';

    const b1 = document.createElement('button');
    b1.className = 'btn-recipe';
    b1.textContent = '레시피';
    b1.onclick = () => recommendFor(i.name);

    const b2 = document.createElement('button');
    b2.className = 'btn-use';
    b2.textContent = '사용완료';
    b2.onclick = () => {
      state.ingredients = state.ingredients.filter(x => x.id !== i.id);
      save(); renderTabs(); renderList();
    };

    const b3 = document.createElement('button');
    b3.className = 'btn-del';
    b3.textContent = '삭제';
    b3.onclick = () => {
      if(confirm('삭제할까요?')){
        state.ingredients = state.ingredients.filter(x => x.id !== i.id);
        save(); renderTabs(); renderList();
      }
    };

    ctrl.append(b1,b2,b3);
    li.append(left,ctrl);
    ul.append(li);
  });

  cont.append(ul);
}

/* ========= Recipe Loading ========= */
let recipeDB = [];

async function loadAllRecipes(){
  const files = [];
  for(let i = 1; i <= 200; i++) files.push(`recipes/${i}.json`);

  recipeDB = [];

  for(const f of files){
    try{
      const r = await fetch(f);
      if(!r.ok) continue;
      recipeDB.push(await r.json());
    }catch{}
  }
}

/*  
========================================
🔥 수정된 recommendFor(name)
→ 해당 재료가 들어간 레시피만 정확히 출력
========================================
*/
function recommendFor(name){
  if(!recipeDB.length){
    alert("레시피 로딩 중입니다.");
    return;
  }

  const matched = recipeDB.filter(r =>
    (r.ingre_list || []).some(x => {
      const ing = (x.ingre_name || "").trim();

      // 정확 매칭 + 부분 매칭 + 역 포함 모두 처리
      return (
        ing === name ||
        ing.includes(name) ||
        name.includes(ing)
      );
    })
  );

  openModal(`"${name}" 사용 레시피`, matched);
}

/* ========= Near Expiry Auto Suggest ========= */
function recommendForNear(){
  if(!recipeDB.length){
    alert("레시피 로딩 중입니다.");
    return;
  }

  const near = state.ingredients.filter(i => {
    const d = daysUntil(i.expiry);
    return d >= 0 && d <= 7;
  }).map(i => i.name);

  if(!near.length){
    alert("임박 재료 없음");
    return;
  }

  const matched = recipeDB.filter(r =>
    (r.ingre_list || []).some(x => near.includes(x.ingre_name))
  );

  openModal(`임박 재료: ${near.join(', ')}`, matched);
}

/* ========= Modal ========= */
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function openModal(title, list){
  modalTitle.textContent = title;
  modalBody.innerHTML = '';

  if(!list.length){
    modalBody.innerHTML='<div style="text-align:center;color:#777;">추천 레시피 없음</div>';
    modal.classList.add('open');
    return;
  }

  list.forEach(r => {
    const wrap=document.createElement('div');
    wrap.className='recipe-card';

    const t=document.createElement('div');
    t.textContent=r.name;
    t.style.fontWeight='700';
    wrap.appendChild(t);

    (r.ingre_list||[]).forEach(x=>{
      const tag=document.createElement('span');
      tag.className='tag';
      tag.textContent=x.ingre_name;
      wrap.appendChild(tag);
    });

    const steps=document.createElement('div');
    steps.style.marginTop='8px';
    (r.recipe||[]).forEach(s=>{
      const d=document.createElement('div');
      d.textContent=s;
      d.style.marginBottom='4px';
      steps.appendChild(d);
    });
    wrap.appendChild(steps);

    if(r.url){
      const a=document.createElement('a');
      a.href=r.url;
      a.target="_blank";
      a.textContent='원문 보기';
      a.style.color='#111';
      a.style.display='block';
      wrap.appendChild(a);
    }

    modalBody.appendChild(wrap);
  });

  modal.classList.add('open');
}

modalClose.onclick = ()=> modal.classList.remove('open');
modal.onclick = e => { if(e.target === modal) modal.classList.remove('open'); };

/* ========= Utility ========= */
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g,
    c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])
  );
}

/* ========= Navigation ========= */
const splashEl=document.getElementById('splash');
const appEl=document.getElementById('app');

document.getElementById('startApp').onclick = ()=>{
  splashEl.classList.add('splash-hide');
  setTimeout(()=>{
    splashEl.style.display='none';
    appEl.classList.add('app-show');
  },460);
};

document.getElementById('openAddBtn').onclick = ()=>{
  document.getElementById('mainLayout').classList.add('add-open');
};
document.getElementById('closeAddBtn').onclick = ()=>{
  document.getElementById('mainLayout').classList.remove('add-open');
};

/* ========= Add Ingredient ========= */
document.getElementById('ingredientForm').onsubmit = e =>{
  e.preventDefault();

  const nameVal=document.getElementById('name').value.trim();
  const qtyVal=document.getElementById('qty').value.trim();
  const catVal=document.getElementById('category').value;
  const expVal=document.getElementById('expiry').value;

  if(!nameVal || !qtyVal || !expVal){
    alert("모든 항목을 입력해주세요.");
    return;
  }

  state.ingredients.push({
    id:uid(),
    name:nameVal,
    qty:qtyVal,
    category:catVal,
    expiry:expVal
  });

  save();
  e.target.reset();
  renderTabs();
  renderList();
};

document.getElementById('autoSuggestBtn').onclick = ()=> recommendForNear();

/* ========= Init ========= */
(async()=>{
  load();
  renderTabs();
  renderList();
  loadAllRecipes();
})();
</script>
</body>
</html>
