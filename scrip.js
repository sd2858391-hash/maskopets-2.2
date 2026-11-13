(function(){
  var chips=document.querySelectorAll('.chip'), cards=document.querySelectorAll('.card'), count=document.getElementById('count');
  function asset(name){return 'img/'+encodeURIComponent(name).replace(/%2F/gi,'/')+'?v=2';}
  function apply(f){
    var n=0;
    cards.forEach(function(c){var show=f==='todos'||c.dataset.type===f;c.hidden=!show;if(show)n++;});
    chips.forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.filter===f));});
    count.textContent=n+(n===1?' producto':' productos');
  }
  chips.forEach(function(b){b.addEventListener('click',function(){apply(b.dataset.filter);});});
  apply('todos');

  // Archivos de producto disponibles en /img. Se asignan también en HTML vía este script.
  var productImages={
    'GIM-01':'Code_Generated_Image.png',
    'GIM-02':'Code_Generated_Image (1).png',
    'GIM-03':'Code_Generated_Image (2).png',
    'GIM-04':'Code_Generated_Image (3).png',
    'GIM-05':'Code_Generated_Image (4).png',
    'GIM-06':'Code_Generated_Image (5).png',
    'GIM-07':'Code_Generated_Image (6).png',
    'CAM-01':'Code_Generated_Image (7).png',
    'CAM-02':'Code_Generated_Image (8).png',
    'CAM-03':'Code_Generated_Image (9).png',
    'CAM-04':'Code_Generated_Image (10).png',
    'CAM-05':'Code_Generated_Image (11).png',
    'CAM-06':'Code_Generated_Image (12).png'
  };
  cards.forEach(function(card){
    var filename=productImages[card.dataset.code];
    var image=card.querySelector('.card-img img');
    if(filename&&image){image.src=asset(filename);image.removeAttribute('srcset');}
  });

  var menu=document.getElementById('menuBtn'), nav=document.getElementById('nav');
  menu.addEventListener('click',function(){var o=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(o));});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}});

  var dlg=document.getElementById('viewer');
  document.querySelectorAll('[data-open]').forEach(function(btn){
    btn.addEventListener('click',function(){
      var c=btn.closest('.card'), img=c.querySelector('img');
      document.getElementById('vImg').src=img.src;
      document.getElementById('vImg').alt=img.alt;
      document.getElementById('vCode').textContent=c.querySelector('.code').textContent;
      document.getElementById('vName').textContent=c.querySelector('h3').textContent;
      document.getElementById('vDims').innerHTML=c.querySelector('dl').innerHTML;
      document.getElementById('vWa').href=c.querySelector('.btn-wa').href;
      if(dlg.showModal){dlg.showModal();}else{dlg.setAttribute('open','');}
    });
  });
  document.getElementById('closeBtn').addEventListener('click',function(){dlg.close();});
  dlg.addEventListener('click',function(e){if(e.target===dlg)dlg.close();});
})();
