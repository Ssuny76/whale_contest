var headIn = document.head.outerHTML;
var bodyIn = document.body.outerHTML;

//create modal

wrapperDiv = document.createElement("div");
wrapperDiv.setAttribute("style","position: absolute; left: 0px; top: 0px;\
                                background-color: rgb(0, 0, 0); opacity: 1; \
                                z-index: 2000; height: 1083px; width: 100%;");
wrapperDiv.setAttribute("id","div1");

iframeElement = document.createElement("iframe");
//iframeElement.setAttribute("style","width: 100%; height: 100%;");
iframeElement.setAttribute("style", "background: white;\
                                      display: block;\
                                      margin: 0 auto;\
                                      padding: 2cm;\
                                      margin-bottom: 0.5cm;\
                                      box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);\
                                      overflow: hidden;\
                                      width:21cm;\
                                      height:29.7cm;");
iframeElement.setAttribute("id","iframe1");
/*iframeElement.setAttribute("src","https://github.com/Ssuny76/whale_contest/blob/master/iframe.html");
scriptElement  = document.createElement("script");
scriptElement.setAttribute("type","text/javascript");
scriptElement.innerHTML = "var xhr = new XMLHttpRequest\
    xhr.open('GET', 'https://github.com/Ssuny76/whale_contest/blob/master/iframe.html')\
    xhr.send()";
iframeElement.appendChild(scriptElement);*/


wrapperDiv.appendChild(iframeElement);
document.body.appendChild(wrapperDiv);

//document.getElementById('iframe1').contentWindow.document.write("<html><body>Hello world</body></html>");

document.getElementById('iframe1').contentWindow.document.write("<html>"+headIn+bodyIn+"</html>");


var fn = function(){

var iframeDocument = document.getElementById('iframe1').contentWindow.document;
console.log(iframeDocument);
console.log(iframeDocument.getElementsByTagName("*")[0]);
//iframeDocument.getElementsByTagName("*")[0].addEventListener("load", highlight, false);

var bodyText = iframeDocument.getElementsByTagName("*")[0].getElementsByTagName('*');
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


setTimeout(fn,10000);

/*

iframeElement.onload = function() {
    // contentWindow is set!    
    chrome.runtime.sendMessage(
    {greeting: "send message to background.js"}, 
    function(response) {
        console.log(response.farewell);
    }
);
};
*/




/*


var iframeIn = document.getElementById('iframe1').contentWindow.document.body;
console.log(iframeIn.innerHTML);

if (iframeIn.getElementById('cbox_module')){
    iframeIn.getElementById('cbox_module').remove()
}

if (iframeIn.getElementsByClassName('_reactionModule')) {
    const reactions = iframeIn.getElementsByClassName('_reactionModule')
    for (let i = 0; i < reactions.length; i++) { 
        reactions[i].remove();}
}

// 하단 광고 삭제
if (iframeIn.getElementsByClassName("end_ad")[0]) {
    iframeIn.getElementsByClassName("end_ad")[0].remove();
}

var tempText =[];

function removeFunction(e) {
    tempText.push(iframeIn.innerHTML);
    iframeIn.querySelector("[data-id='"+String(e.target.dataset.id)+"']").remove();
};

var bodyText = iframeIn.body.getElementsByTagName("*");
console.log(bodyText);
var bodyTag = [];

console.log(bodyText.length);
for (var i = 0; i < bodyText.length; i++) {
    bodyText[i].setAttribute("data-id", i);
    var bodyElement = [bodyText[i].tagName,bodyText[i].getAttribute('data-id')];
    bodyTag.push(bodyElement);
    console.log("에러에러에러");
    iframeIn.querySelector("[data-id='"+String(i)+"']").addEventListener("click", removeFunction);
    iframeIn.querySelector("[data-id='"+String(i)+"']").addEventListener("mouseover", mouseOver);
    iframeIn.querySelector("[data-id='"+String(i)+"']").addEventListener("mouseout", mouseOut);

}


function mouseOver(e) {
    iframeIn.querySelector("[data-id='"+String(e.target.dataset.id)+"']").style.backgroundColor = "lightblue";
}

function mouseOut(e) {
    iframeIn.querySelector("[data-id='"+String(e.target.dataset.id)+"']").style.backgroundColor = "white";
}

//href disabled
var a_total = iframeIn.body.getElementsByTagName("a");
for (var i = 0; i < a_total.length; i++) {
    a_total[i].setAttribute("onclick", "return false;");
}


*/
