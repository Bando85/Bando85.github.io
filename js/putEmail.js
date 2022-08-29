function putEmail() {
    var eml = 'hello'              // The email address...
    eml += '@'
    eml += 'silveroctopus.hu'

    var link = document.createElement("a");
    link.setAttribute("href", "mailto:" + eml);
    link.appendChild(document.createTextNode(eml));
    var atag = document.querySelector(".e-mail-address")
    atag.appendChild(link);
    
}

putEmail();