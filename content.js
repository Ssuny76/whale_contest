console.log('adImage', document.getElementById("adImage"))

/*
setTimeout(() => {
    iframes = document.getElementsByTagName("iframe")
    console.log('iframes', iframes)
    console.log('setTimeOut 이후 adImage', document.getElementById("adImage"))
    for(var i=0; i<iframes.length; i++){
        console.log('element', i);
        console.log('iframes[i]', iframes[i]);
        if(iframes[i].id !== "iframe1"){
            iframes[i].parentNode.removeChild(iframes[i]);          
        }





        //iframes[i].remove();

}
}, 10000)
*/


//console.log(document.body.innerHTML);
/*
iframes = document.getElementsByTagName("iframe")

for(let i = 0; i < iframes.length; i += 1) {
    console.log('iframe html', iframes[i].outerHTML);

    parentNode = iframes[i].parentNode;

    console.log('parentNode before remove', parentNode.outerHTML);
    parentNode.removeChild(iframes[i]);
    console.log('parentNode after remove', parentNode.outerHTML);

    console.log('========================');
}*/

// console.log(document.getElementById("daArticle_300250").innerHTML);
// console.log(document.getElementById("art300250"))
// document.getElementById("daArticle_300250").remove();

let headIn = document.head.innerHTML;
let bodyIn = document.body.outerHTML;

// wrapperDiv : black
wrapperDiv = document.createElement("div");
wrapperDiv.setAttribute("style","position: absolute; \
                                left: 0px; top: 0px;\
                                background-color: rgb(0, 0, 0); opacity: 1; \
                                z-index: 2000; height: 50cm; width: 100%;overflow: hidden;");
wrapperDiv.setAttribute("id","div1");


// 안쪽 div 영역 (grey)
boardDiv = document.createElement("div");
boardDiv.setAttribute("style", "position: relative; \
                                background: grey;\
                                display: block;\
                                margin: 0 auto;\
                                width:30cm;\
                                height:40cm;");
boardDiv.setAttribute("id","div2");

// undo button
undoButton = document.createElement("button");
undoButton.innerHTML = "UNDO";
undoButton.setAttribute("id", "undoButton");
undoButton.setAttribute("style", "background-color : #4CAF50;\
                                position: absolute; \
                                top: 1cm; right : 1cm; ");

// iframe 감싸는 div

A4Element = document.createElement("iframe");
//iframeElement.setAttribute("style","width: 100%; height: 100%;");
A4Element.setAttribute("style", "background: white;\
                                      position: absolute; \
                                      display: block;\
                                      margin:0 auto;\
                                      padding: 2cm;\
                                      margin-bottom: 0.5cm;\
                                      box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);\
                                      overflow: hidden;\
                                      width:21cm;\
                                      height:29.7cm;");
A4Element.setAttribute("id","A4");


boardDiv.appendChild(undoButton);
boardDiv.appendChild(A4Element);

wrapperDiv.appendChild(boardDiv);
document.body.appendChild(wrapperDiv);




document.getElementById('A4').contentWindow.document.write("<html>"+"<head>"+headIn+"</head>"+bodyIn+"</html>");
// "<script type='text/plain'>"
//document.getElementById('A4').innerHTML =bodyIn;




let fn = function(){

let iframeDocument = document.getElementById('A4').contentWindow.document;
console.log(iframeDocument);
console.log(iframeDocument.getElementsByTagName("*")[0]);
//iframeDocument.getElementsByTagName("*")[0].addEventListener("load", highlight, false);

let bodyText = iframeDocument.getElementsByTagName("*")[0].getElementsByTagName('*');
console.log(bodyText);
console.log(bodyText.length);

chrome.runtime.sendMessage(
    {greeting: "send message from content.js"}, 
    function(response) {
        console.log(response.farewell);
        return;
    }
)
};


setTimeout(fn,1000);

