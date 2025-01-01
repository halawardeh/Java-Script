

function change_font_family() {
    let selected_font_family= document.getElementById("selectors").value;
    document.getElementsByClassName("paragraph")[0].style.fontFamily = selected_font_family;
}



function change_font_size() {
    let selectedSize = document.getElementById("font_size").value;
    document.getElementsByClassName("paragraph")[0].style.fontSize   = selectedSize;

   
}



function italic_normal(){

    if (document.getElementById("italic").checked){
        document.getElementsByClassName("paragraph")[0].style.fontStyle ="italic";
    }
    else {
        document.getElementsByClassName("paragraph")[0].style.fontStyle ="normal";
    }

}

function italic_normal(){

    if(document.getElementById("bold").checked){
        document.getElementsByClassName("paragraph")[0].style.fontWeight="Bold";
    }
    else {
        document.getElementsByClassName("paragraph")[0].style.fontWeight="normal";
    }

}


function normal_underline(){

    if(document.getElementById("underline").checked){
        document.getElementsByClassName("paragraph")[0].style.textDecoration="Underline";
    }
    else {
        document.getElementsByClassName("paragraph")[0].style.textDecoration="none";
    }

}
