(function(){
  /* Po wejściu na podstronę zawsze zaczynamy od góry (podgląd na claude.ai zachowuje poprzednie przewinięcie).
     Wyjątek: link do konkretnej sekcji, np. index.html#opinie. */
  try{ if('scrollRestoration' in history) history.scrollRestoration='manual'; }catch(e){}
  function toTop(){
    if(location.hash && location.hash.length>1) return;
    try{ window.scrollTo(0,0); }catch(e){}
    var t=document.querySelector('.proto');
    if(t && t.scrollIntoView){ try{ t.scrollIntoView({block:'start'}); }catch(e){} }
  }
  toTop();
  window.addEventListener('load', function(){ toTop(); setTimeout(toTop, 150); });
  var b=document.body, t=document.getElementById('notesToggle');
  var KEY='drl-notes';
  try{var v=localStorage.getItem(KEY); if(v!==null) t.checked=(v==='1');}catch(e){}
  function setN(){b.classList.toggle('show-notes',t.checked); try{localStorage.setItem(KEY,t.checked?'1':'0')}catch(e){}}
  t.addEventListener('change',setN); setN();
  document.getElementById('burger').onclick=function(){document.getElementById('mnav').classList.toggle('open')};
  document.querySelectorAll('#mnav a').forEach(function(a){a.onclick=function(){document.getElementById('mnav').classList.remove('open')}});
  var modal=document.getElementById('modal'), inline=document.getElementById('formularz');
  if(inline){document.querySelectorAll('[data-courier]').forEach(function(x){x.onclick=function(e){
    e.preventDefault(); inline.scrollIntoView({behavior:'smooth'});
  }});}
  if(modal){
    document.getElementById('mClose').onclick=function(){modal.classList.remove('open')};
    modal.addEventListener('click',function(e){if(e.target===modal)modal.classList.remove('open')});
  }
  document.querySelectorAll('form.form').forEach(function(f){f.onsubmit=function(e){e.preventDefault();var ok=f.querySelector('.ok');if(ok)ok.style.display='block'}});
  var ai=document.getElementById('ai'), msgs=document.getElementById('msgs');
  document.getElementById('aiFab').onclick=function(){ai.classList.toggle('open')};
  document.getElementById('aiClose').onclick=function(){ai.classList.remove('open')};
  var A={
    matryca:'Wymiana matrycy kosztuje od … zł (zależnie od modelu i typu matrycy) i trwa zwykle 1–3 dni. Podaj model laptopa, a podam dokładniejszą cenę. Mogę też od razu zamówić kuriera.',
    zalanie:'Natychmiast wyłącz laptopa, odłącz ładowarkę i NIE włączaj go ponownie. Nie susz suszarką. Im szybciej trafi do nas, tym większa szansa na tanią naprawę. Zamówić kuriera?',
    kurier:'Wejdź w „Zamów kuriera”, podaj adres i opis usterki. Kurier odbierze laptopa, a po diagnozie zadzwonimy z wyceną. Laptop wraca do Ciebie kurierem.',
    status:'Podaj numer zlecenia z SMS-a, a sprawdzę status w systemie. (Prototyp: tu podpinamy status z Subiektu.)'
  };
  document.querySelectorAll('.ai .qs button').forEach(function(q){q.onclick=function(){
    var m=document.createElement('div');m.className='m me';m.textContent=q.textContent;msgs.appendChild(m);
    setTimeout(function(){var r=document.createElement('div');r.className='m bot';r.textContent=A[q.dataset.q];msgs.appendChild(r);msgs.scrollTop=msgs.scrollHeight;},350);
  }});
})();
