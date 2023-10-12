window.onload = () => {
    let elem = document.getElementsByTagName("p");
    let br = document.createElement("br");

    elem.forEach(e => {
        e.parentNode.insertBefore(br, e.nextElementSibling);
    });
}