function doAll(){

  //場次攤位選擇+攤位編號的select
  let market = document.getElementById("market");
  let stall = document.getElementById("stall");

  //一開始就是鎖住的
  if(market.value == '選擇場次'){
    stall.disabled = true;
  }

  //change事件發生的時候
  market.onchange = function(e){
    if(market.value == '選擇場次'){
      stall.disabled = true;
    }else{
      stall.length=1;
      stall.disabled = false;

      for(var s=1; s<market.selectedOptions[0].dataset.stalls; s++){
        var num = new Option(s,s);
        stall.options.add(num);
      }
    }
  }

  //押金方式+匯款方式的select
  let deposit = document.getElementById("deposit");
  let paymoney = document.getElementById("paymoney");

  //一開始就是鎖住的
  if(deposit.value == '不提供信用卡支付'){
    paymoney.disabled = true;
  }

  //change事件發生的時候
  deposit.onchange = function(){
    if(deposit.value == '匯款'){
      paymoney.disabled = false;
    }else{
      paymoney.disabled = true;
    }
  }

  //確認預約前的預約注意事項
  let reservation = document.getElementById("reservation-btn");
  let agreeLightBox = document.getElementsByClassName("notice");
  let closeBtn = document.getElementsByClassName("close");
  let agreeBtn = document.getElementById("agreeBtn");
  let cancelByn = document.getElementById("cancelByn");

  //點選確認預約按鈕會跳出注意事項
  reservation.onclick = function(){
    agreeLightBox[0].style.display = '';
  }
  //點選同意，注意事項可以關掉，alert顯示預約成功
  agreeBtn.onclick = function(){
    agreeLightBox[0].style.display = 'none';
    alert('預約成功');
  }
  //下面都是按到直接關掉
  closeBtn[0].onclick = function(){
    agreeLightBox[0].style.display = 'none';
  }
  cancelByn.onclick = function(){
    agreeLightBox[0].style.display = 'none';
  }
  window.onclick = function(e) {
    if (e.target == agreeLightBox[0]) {
      agreeLightBox[0].style.display = "none";
    }
  }

  //wish版的slide
  let wishImg = document.getElementsByClassName("wish-content-img");
  imgItems = wishImg[0].querySelectorAll('img');
  imgItemsLength = imgItems.length;

  let wishTxt = document.getElementsByClassName("wish-content-txt");
  txtItems = wishTxt[0].querySelectorAll('li');
  txtItemsLength = txtItems.length;

  //第一張的索引
  let count = 0;
  
  let interval = window.setInterval(showNext, 3000);
  
  imgItems[count].classList.add('imgshow');
  txtItems[count].classList.add('txtshow');

  function showCurrent(){
    let ItemsToShow = Math.abs(count % imgItemsLength);

    [].forEach.call(imgItems, function(e){
      e.classList.remove('imgshow');
    });
    [].forEach.call(txtItems, function(e){
      e.classList.remove('txtshow');
    });

    imgItems[ItemsToShow].classList.add('imgshow'); 
    txtItems[ItemsToShow].classList.add('txtshow'); 
  };

  function showNext(){
    count++;
    showCurrent();
  }

}

window.addEventListener('load',doAll,false);