
(function(){
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if(menuToggle && navLinks){
    menuToggle.addEventListener('click', function(){
      navLinks.classList.toggle('open');
    });
  }

  const wraps = document.querySelectorAll('.tile-wrap');
  function closeAll(){
    wraps.forEach((wrap)=>{
      wrap.classList.remove('open');
      const btn = wrap.querySelector('.tile');
      const pop = wrap.querySelector('.popout');
      if(btn) btn.setAttribute('aria-expanded','false');
      if(pop) pop.setAttribute('aria-hidden','true');
    });
  }

  wraps.forEach((wrap)=>{
    const btn = wrap.querySelector('.tile');
    const closeBtn = wrap.querySelector('.pop-close');
    const pop = wrap.querySelector('.popout');

    if(btn){
      btn.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        const isOpen = wrap.classList.contains('open');
        closeAll();
        if(!isOpen){
          wrap.classList.add('open');
          btn.setAttribute('aria-expanded','true');
          if(pop) pop.setAttribute('aria-hidden','false');
        }
      });
    }

    if(closeBtn){
      closeBtn.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        wrap.classList.remove('open');
        if(btn) btn.setAttribute('aria-expanded','false');
        if(pop) pop.setAttribute('aria-hidden','true');
      });
    }
  });

  document.addEventListener('click', function(e){
    if(!e.target.closest('.tile-wrap')) closeAll();
  });

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') closeAll();
  });
})();
