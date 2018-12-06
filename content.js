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
wrapperDiv.setAttribute("style","position: fixed;\
                                left: 0px; top: 0px;\
                                background-color: rgba(0,0,0,0.9);\
                                z-index: 2000; height: 100vh; width: 100vw; overflow: hidden;");
wrapperDiv.setAttribute("id","div1");


// 안쪽 div 영역 (grey)
boardDiv = document.createElement("div");
boardDiv.setAttribute("style","position: absolute;\
                                background: rgba(0,0,0,1);\
                                display: block;\
                                left: 50%;\
                                top: 50%;\
                                -ms-transform: translate(-50%, -50%);\
                                -webkit-transform: translate(-50%, -50%);\
                                -moz-transform: translate(-50%, -50%);\
                                transform: translate(-50%, -50%);\
                                min-width:100vh;min-height:100vh");
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
fontSpan.className = "bouncy";
fontSpan.className += "w3-dropdown-content";
fontSpan.className += "w3-bar-block";
fontSpan.className += "w3-border";

fontOp1 = document.createElement("a");
fontOp1.setAttribute("href", "#");
fontOp1.innerHTML = "FONT1";
fontOp1.className = "w3-bar-item";
fontOp1.className += " w3-button";

fontOp2 = document.createElement("a");
fontOp2.setAttribute("href", "#");
fontOp2.innerHTML = "FONT2";
fontOp2.className = "w3-bar-item";
fontOp2.className += " w3-button";

fontOp3 = document.createElement("a");
fontOp3.setAttribute("href", "#");
fontOp3.innerHTML = "FONT3";
fontOp3.className = "w3-bar-item";
fontOp3.className += " w3-button";


imageSpan = document.createElement("span");
imageSpan.innerHTML = "IMAGE";
imageSpan.className = "bouncy";
//imageSpan.setAttribute("style", "position: absolute;");


topDiv = document.createElement("div");
topDiv.setAttribute("id", "topDiv");
topDiv.setAttribute("style", "background: transparent;\
                                align-content: flex-start; \
                                display: flex;\
                                height: 3cm;");


undoButton = document.createElement("span");
undoButton.setAttribute("id", "undoButton");
undoButton.innerHTML = "UNDO";
undoButton.className = "bouncy";


//undoButton.setAttribute("style", "position: absolute;");

redoButton = document.createElement("span");
redoButton.setAttribute("id", "redoButton");
redoButton.className = "bouncy";
redoButton.innerHTML = "REDO";
//redoButton.setAttribute("style", "position: absolute;");

printButton = document.createElement("span");
printButton.innerHTML = "PRINT";
printButton.setAttribute("id", "printButton");
printButton.className = "bouncy";

pdfButton = document.createElement("span");
pdfButton.innerHTML = "PDF";
pdfButton.setAttribute("id", "pdfButton");
pdfButton.className = "bouncy";

sideDiv = document.createElement("div");
sideDiv.setAttribute("id", "sideDiv");
sideDiv.setAttribute("style", "background: transparent;\
                                float:right;\
                                display: flex;\
                                flex-direction : column;\
                                width:10%; height:100%");

sideDiv.appendChild(undoButton);
sideDiv.appendChild(redoButton);
sideDiv.appendChild(printButton);
sideDiv.appendChild(pdfButton);
sideDiv.appendChild(fontSpan);
sideDiv.appendChild(imageSpan);

// iframe 21:29.7
A4Element = document.createElement("iframe");
//iframeElement.setAttribute("style","width: 100%; height: 100%;");
A4Element.setAttribute("style", "background: white;\
                                      position: absolute; \
                                      display: block;\
                                      padding: 2cm;\
                                      margin-bottom: 0.5cm;\
                                      box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);\
                                      left: 50%;\
                                      top: 50%;\
                                      -ms-transform: translate(-50%, -50%);\
                                      -webkit-transform: translate(-50%, -50%);\
                                      -moz-transform: translate(-50%, -50%);\
                                      transform: translate(-50%, -50%);\
                                      overflow: hidden;\
                                      width:52.5vh ; height:74.25vh"); 
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
                        p{\
                            font-size: 0.75rem;\
                        }\
                        div{\
                            font-size: 0.75rem;\
                        }\
                        </style>";

let panelStyle = "<style>\
                        .bouncy{\
                         display:inline-block;\
                         padding:0.35em 1.2em;\
                         border:0.1em solid #FFFFFF;\
                         margin:0 0.3em 0.3em 0;\
                         border-radius:0.12em;\
                         box-sizing: border-box;\
                         text-decoration:none;\
                         font-family:'Roboto',sans-serif;\
                         font-weight:300;\
                         color:#FFFFFF !important;\
                         text-align:center;\
                         transition: all 0.2s;\
                        }\
                        .bouncy:hover{\
                         color:#000000;\
                         background-color:#FFFFFF;\
                        }\
                        @media all and (max-width:30em){\
                         .bouncy{\
                          display:block;\
                          margin:0.4em auto;\
                         }\
                        }\
                        </style>"

let mouseOverStyle = "<style>\
                        .myPDFmouse{\
                            background-color: lightblue;\
                        }\
                        </style>";

let utf8 = "<meta charset='UTF-8' />";

let jspdf = "<script src='https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.4/jspdf.min.js'></script>";
//document.head.innerHTML += jspdf ;
//document.head.innerHTML += utf8;


document.head.innerHTML += panelStyle;


document.getElementById('A4').contentWindow.document.write("<html>"+"<head>"+jspdf+ utf8+mouseOverStyle+"</head>"+bodyIn+"</html>");
// "<script type='text/plain'>"
//document.getElementById('A4').innerHTML =bodyIn;

//document.getElementById('A4').setAttribute("style", "font-size: 1em;");



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

