window.onload = () => {
    let elem = document.getElementsByTagName("p");
    let br = document.createElement("br");

    for( var i = 0; i < elem.length; i++  ){
        elem[i].parentNode.insertBefore(br, elem[i].nextElementSibling);
    }
}