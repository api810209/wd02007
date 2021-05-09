function doAll(){

    //篩選分類
    let wishClass = document.getElementById('wish-class');
    let classControl = document.getElementsByClassName('class-control');

    wishClass.onchange = function(e){
        for(var i=0; i<classControl.length; i++){
            if(e.target.value == 'all'){
                classControl[i].style.display = '';
            }else if(e.target.value == classControl[i].classList[1]){
                classControl[i].style.display = '';
            }else{
                classControl[i].style.display = 'none';
            }
        }
    }

}
window.addEventListener('load', doAll, false);