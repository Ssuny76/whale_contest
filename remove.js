console.log("remove 들어옴");


	console.log("제발onload");
	console.log(document.getElementById('iframe1').contentWindow.document.getElementsByTagName("*")[0].getElementsByTagName('*').length);


//document.onload = function() { setInterval(fn,10000)};
//document.getElementById('iframe1').onload = function() { setInterval(fn,10000)};
//document.getElementById('iframe1').contentWindow.document.onload = function() { setInterval(fn,10000)};
//document.getElementById('iframe1').contentWindow.document.getElementsByTagName("*")[0].onload = function() { setInterval(fn,10000)};
//document.getElementById('iframe1').contentWindow.document.getElementsByTagName("*")[0].getElementsByTagName('*').onload = function() { setInterval(fn,10000)};


//console.log(document.getElementById('iframe1').contentWindow.document.getElementsByTagName("*")[0].getElementsByTagName('*').length);



var iframeDocument = document.getElementById('iframe1').contentWindow.document;
var bodyText = iframeDocument.getElementsByTagName("*")[0].getElementsByTagName('*');
console.log(bodyText.length);


var tempText =[];


function removeFunction(e) {
    tempText.push(iframeDocument);

    if(e.target.dataset.tagName == "iframe" && e.target.dataset.id != "iframe1"){
    	iframeDocument.querySelector("[data-id='"+String(e.target.dataset.id)+"']").parentNode.removeChild(iframeDocument.getElementsByTagName("iframe"));
    }else{
    	iframeDocument.querySelector("[data-id='"+String(e.target.dataset.id)+"']").remove();
    }
    return;
};


for (var i = 0; i < bodyText.length; i++) {
    bodyText[i].setAttribute("data-id", i);
    var bodyElement = [bodyText[i].tagName,bodyText[i].getAttribute('data-id')];
    bodyTag.push(bodyElement);
    console.log("에러에러에러");
    iframeDocument.querySelector("[data-id='"+String(i)+"']").addEventListener("click", removeFunction);
    iframeDocument.querySelector("[data-id='"+String(i)+"']").addEventListener("mouseover", mouseOver);
    iframeDocument.querySelector("[data-id='"+String(i)+"']").addEventListener("mouseout", mouseOut);

}



function mouseOver(e) {
    iframeDocument.querySelector("[data-id='"+String(e.target.dataset.id)+"']").style.backgroundColor = "lightblue";
}

function mouseOut(e) {
    iframeDocument.querySelector("[data-id='"+String(e.target.dataset.id)+"']").style.backgroundColor = "white";
}

//href disabled
var a_total = iframeDocument.getElementsByTagName("a");
for (var i = 0; i < a_total.length; i++) {
    a_total[i].setAttribute("onclick", "return false;");
}
      // - Code to execute when all DOM content is loaded. 
      // - including fonts, images, etc.

