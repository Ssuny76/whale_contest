console.log("hightlight들어옴");



console.log(document.getElementById('iframe1').contentWindow.document.getElementsByTagName("*")[0].getElementsByTagName('*').length);
var iframeDocument = document.getElementById('iframe1').contentWindow.document;
var bodyText = iframeDocument.getElementsByTagName("*")[0].getElementsByTagName('*');
console.log(bodyText);


/*
if (iframeDocument.getElementById('cbox_module')){
    iframeDocument.getElementById('cbox_module').remove()
}

if (iframeDocument.getElementsByClassName('_reactionModule')) {
    const reactions = iframeDocument.getElementsByClassName('_reactionModule')
    for (let i = 0; i < reactions.length; i++) { 
        reactions[i].remove();}
}

// 하단 광고 삭제
if (iframeDocument.getElementsByClassName("end_ad")[0]) {
    iframeDocument.getElementsByClassName("end_ad")[0].remove();
}
*/



/*
var tempText =[];

function removeFunction(e) {
    tempText.push(iframeDocument);
    iframeDocument.querySelector("[data-id='"+String(e.target.dataset.id)+"']").remove();
    return;
};
*/

var bodyTag = [];
console.log(bodyText.length);
for (var i = 0; i < bodyText.length; i++) {
    bodyText[i].setAttribute("data-id", i);
    var bodyElement = [bodyText[i].tagName,bodyText[i].getAttribute('data-id')];
    bodyTag.push(bodyElement);
    console.log("에러에러에러");
    //iframeDocument.querySelector("[data-id='"+String(i)+"']").addEventListener("click", removeFunction);
    //iframeDocument.querySelector("[data-id='"+String(i)+"']").addEventListener("mouseover", mouseOver);
    //iframeDocument.querySelector("[data-id='"+String(i)+"']").addEventListener("mouseout", mouseOut);

}

/*
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

*/



chrome.runtime.sendMessage(
    {greeting: "send message from highlight.js"}, 
    function(response) {
        console.log(response.farewell);
        return;
    }
)
