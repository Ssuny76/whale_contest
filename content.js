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
wrapperDiv.setAttribute("style","position: fixed; \
                                left: 0px; top: 0px;\
                                background-color: rgb(0, 0, 0); opacity: 1; \
                                z-index: 2000; height: 100vh; width: 100vw;overflow: hidden;");
wrapperDiv.setAttribute("id","div1");


// 안쪽 div 영역 (grey)
boardDiv = document.createElement("div");
boardDiv.setAttribute("style", "position: fixed; \
                                align-items: flex-end;\
                                display: flex;\
                                background: grey;\
                                display: block;\
                                margin: 0 auto;\
                                width:30cm;\
                                height:40cm;");
boardDiv.setAttribute("id","div2");

/*
// undo button
undoButton = document.createElement("button");
undoButton.innerHTML = "UNDO";
undoButton.setAttribute("id", "undoButton");
undoButton.setAttribute("style", "background-color : #4CAF50;\
                                position: absolute; \
                                top: 1cm; right : 1cm; ");
*/



fontSpan = document.createElement("span");
fontSpan.innerHTML = "FONT";
//fontSpan.setAttribute("style", "position: absolute;");

imageSpan = document.createElement("span");
imageSpan.innerHTML = "IMAGE";
//imageSpan.setAttribute("style", "position: absolute;");


topDiv = document.createElement("div");
topDiv.setAttribute("id", "topDiv");
topDiv.setAttribute("style", "background-color : #8A2BE2;\
                                align-content: flex-start; \
                                display: flex;\
                                height: 3cm;");

topDiv.appendChild(fontSpan);
topDiv.appendChild(imageSpan);

undoButton = document.createElement("span");
undoButton.setAttribute("id", "undoButton");
undoButton.innerHTML = "UNDO";
//undoButton.setAttribute("style", "position: absolute;");

redoButton = document.createElement("span");
redoButton.setAttribute("id", "redoButton");
redoButton.innerHTML = "REDO";
//redoButton.setAttribute("style", "position: absolute;");

printButton = document.createElement("span");
printButton.innerHTML = "PRINT";
printButton.setAttribute("id", "printButton");
printButton.setAttribute("style", "background-color : #4CAF50;");

pdfButton = document.createElement("span");
pdfButton.innerHTML = "PDF";
pdfButton.setAttribute("id", "pdfButton");
pdfButton.setAttribute("style", "background-color : #4CAF50;");

sideDiv = document.createElement("div");
sideDiv.setAttribute("id", "sideDiv");
sideDiv.setAttribute("style", "background-color : #8A2BE2;\
                                float:right;\
                                display: flex;\
                                flex-direction : column;\
                                width: 3cm;\
                                height:100%");

sideDiv.appendChild(undoButton);
sideDiv.appendChild(redoButton);
sideDiv.appendChild(printButton);
sideDiv.appendChild(pdfButton);

// iframe
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



boardDiv.appendChild(topDiv);
boardDiv.appendChild(sideDiv);
boardDiv.appendChild(A4Element);

wrapperDiv.appendChild(boardDiv);
document.body.appendChild(wrapperDiv);

// class style들 지정


let styles = "<style>\
                        .dFlex{\
                            background-color: lightblue;\
                        }\
                        .greyColor{\
                            background-color: grey;\
                        }\
                        .whiteColor{\
                            background-color: white;\
                        }\
                        </style>";

let mouseOverStyle = "<style>\
                        .myPDFmouse{\
                            background-color: lightblue;\
                        }\
                        </style>";


let jspdf = "<script src='https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.4/jspdf.min.js'></script>";
document.head.innerHTML += jspdf ;
document.getElementById('A4').contentWindow.document.write("<html>"+"<head>"+mouseOverStyle+styles+jspdf+"</head>"+bodyIn+"</html>");
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

