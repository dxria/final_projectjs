

window.onload = function() {

    let prev = document.getElementById('prev');
    let next = document.getElementById('next');
    let slider = document.getElementById('slider');
    let total = 0, step = 100;

    prev.addEventListener('click', slide);
    next.addEventListener('click', slide);

    function slide() {
        if(this.getAttribute('id') == 'prev')
        {
            if(total == 0)
            {
                total = -400;
                slider.style.left = total + '%';
            }
            else
            {
                total += step;
                slider.style.left = total + '%';
            }
        }
        else
        {
            if(total == -400)
            {
                total = 0;
                slider.style.left = total;
            }
            else
            {
                total -= step;
                slider.style.left = total + '%';
            }
        }
    }

  const boxes = document.querySelectorAll('.scrolling-area-list__main');

  window.addEventListener('scroll', checkBoxes);
  
  checkBoxes();
  
  function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5 * 4);
    
    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;
      
      if(boxTop < triggerBottom) {
        box.classList.add('show');
      } else {
        box.classList.remove('show');
      }
    })
  }

  /* const loadmore = document.querySelector('#more-btn');
  let currentItems = 3;
  loadmore.addEventListener('click', (e) => {
      const elementList = [...document.querySelectorAll('..scrolling-area-list__main')];
      for (let i = currentItems; i < currentItems + 12; i++) {
          if (elementList[i]) {
              elementList[i].style.display = 'block';
          }
      }
      currentItems += elementList.length;

      // Load more button will be hidden after list fully loaded
      if (currentItems >= elementList.length) {
          target.style.display = 'none';
      }
  })*/
    const isLatinLetter = (symbol) => {
        let index = symbol.charCodeAt(0);
        if ( (index < 65) || (index >90 && index < 97) || index > 122);
        return false;

    }

    function validateForm() {
        let x = document.forms["contact-form__info"]["contact-form__name"].value;
        let flag = true;
        let name=x.split("");
        for (let i = 0; i < name.length; i++){
            if (isLatinLetter(name[i])){
                flag = true;
            }
            else {
                flag = false;
            }
        }
        if (!flag){
            
            return false;
        }
    }

    $('#btn-submit').on('click', function() {
        if ($('#btn-submit').validateForm() == false) {
           $('#prompt').removeClass().addClass('error').html('your error message');
        }
    });

}


