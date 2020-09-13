var sidebarStatus = false;
function toggleSidebar(){
    if(sidebarStatus == false){
        var add = document.getElementsByClassName('side');
        for(let i=0; i < add.length; i++){
            add[i].classList.add("open");
          }
          sidebarStatus = true;
    }
    else{
        var add = document.getElementsByClassName('side');
        for(let i=0; i < add.length; i++){
            add[i].classList.remove("open");
          }
          sidebarStatus = false;
    }
    rotateImg();
}

function rotateImg() {
    var img = document.getElementById("meimg");
    if(sidebarStatus == true){
        img.classList.remove("normal");
        img.classList.add("rotated");
    }
    else{
        img.classList.remove("rotated");
        img.classList.add("normal");
    }
  }