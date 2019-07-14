const line = 6;
const column = 6;
const maxSeats = 40;
var limitCt = 0;
var indexCt = 0;
window.onload = function() {
  let k = 1;
  for (let i = 1; i <= line; i++) {
    for (let j = 1; j <= column; j++) {
      const div = document.createElement('div');
      div.id='seat_' + k;
      div.classList.add('box');
      div.classList.add('flex');
      document.body.appendChild(div);
      k++;
    }
    const div2 = document.createElement('div');
    document.body.appendChild(div2);
  }
  const div = document.createElement('div');
  div.classList.add('box');
  div.classList.add('flex');
  div.classList.add('dummy');
  document.body.appendChild(div);

  for (let i = 1; i < 5; i++) {
    const div = document.createElement('div');
    div.id='seat_' + k;
    div.classList.add('box');
    div.classList.add('flex');
    document.body.appendChild(div);
    k++;
  }
}

var setSheat = function(clickedButton) {
  let setCt = true;
  while(setCt  && limitCt < maxSeats){
    let seatCt = Math.floor(Math.random() * maxSeats + 1);
    let attr = document.getElementById("seat_" + seatCt);
    if (!attr.classList.contains('man') && !attr.classList.contains('woman')){
      attr.classList.add(clickedButton);
      indexCt++;
      attr.innerHTML=indexCt;
      setCt = false;
      limitCt++;
    }
  }
};

var reset = function() {
  for (let k = 1; k <= maxSeats; k++) {
      var attr = document.getElementById("seat_" + k);
      if (attr.classList.contains('man')){
        attr.classList.remove('man');
        attr.innerHTML="";
      }
      if (attr.classList.contains('woman')){
        attr.classList.remove('woman');
        attr.innerHTML="";
      }
  }
  limitCt = 0;
  indexCt = 0;
};
