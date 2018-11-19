console.log('dayoung journey lv1');
//document.body.innerHTML = "Hello World!" + document.body.innerHTML;
//console.log(document.getElementById('main_content').innerHTML);
//or class name content, 
if (document.getElementById('main_content')){
    document.body.innerHTML = document.getElementById('main_content').innerHTML;
} else if (document.getElementsByClassName('content')[0]) {
    document.body.innerHTML = document.getElementsByClassName('content')[0].innerHTML;
} else if (document.getElementById('content')) {
    document.body.innerHTML = document.getElementById('main_content').innerHTML;
}

if (document.getElementById('cbox_module')){
    document.getElementById('cbox_module').remove()
}

if (document.getElementsByClassName('_reactionModule')) {
    const reactions = document.getElementsByClassName('_reactionModule')
    for (let i = 0; i < reactions.length; i++) { 
        reactions[i].remove();}
}

if (document.getElementById('articleBodyContents')) {
    //adjust image size
    document.getElementById('articleBodyContents').style.fontSize = '12px';
}

const images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) { 
    let width = images[i].width * 0.5;
    let height = images[i].height * 0.5
    images[i].style.width = width.toString()+"px";
    images[i].style.height = height.toString()+"px";
    //images[i].style.height = "50%";
    //console.log("width : " + images[i].style.width);
    //console.log("width" + height);
}

// 하단 광고 삭제
if (document.getElementsByClassName("end_ad")[0]) {
    document.getElementsByClassName("end_ad")[0].remove();
}

var tempText =[];

function removeFunction(e) {
    tempText.push(document.innerHTML);
    console.log(e.target.id);
    document.getElementById(e.target.id).remove();
};

var bodyText = document.body.getElementsByTagName("*");
var bodyTag = [];
for (var i = 0; i < bodyText.length; i++) {
    bodyText[i].setAttribute("id", i);
    var bodyElement = [bodyText[i].tagName,bodyText[i].id];
    bodyTag.push(bodyElement);
    console.log(bodyTag[i]);
    console.log(bodyTag[i][1]);
    document.getElementById(bodyTag[i][1]).addEventListener("click", removeFunction);
}

//document.getElementById('articleTitle').addEventListener("click", removeFunction();





/*function undoFunction(){

}


(undo펑션 받는 버튼 구현)*/

//print();



//create modal

//window size
/*wrapperDiv = document.createElement("div");
wrapperDiv.setAttribute("style","position: absolute; left: 0px; top: 0px; background-color: rgb(255, 255, 255); opacity: 0.5; z-index: 2000; height: 1083px; width: 100%;");

iframeElement = document.createElement("iframe");
iframeElement.setAttribute("style","width: 100%; height: 100%;");

wrapperDiv.appendChild(iframeElement);

//modal size
modalParentDiv = document.createElement("div");
modalParentDiv.setAttribute("style", "position: absolute; width: 500px; height: 500px; border: 1px dashed rgb(0, 0 ,0); padding: 10px; background-color: rgb(255, 255, 255); z-index: 1900; overflow: auto; text-align: center; top: 149px; left: 497px;");
modalParentText = document.createElement("div");
modalParentText.setAttribute("style", "top: 8px; left: 16px; font-size: 18px; position: absolute");
modalParentText.innerHTML = "margin";
modalParentDiv.appendChild(modalParentText);



modalBorderDiv = document.createElement("div");
modalBorderDiv.setAttribute("style", "position: static; width: 400px; height: 400px; border: 1px solid rgb(0, 0 ,0); padding: 10px; background-color: rgb(255, 255, 255); z-index: 2001; overflow: auto; text-align: center; top: 169px; left: 497px;");
modalBorderText = document.createElement("div");
modalBorderText.setAttribute("style", "top: 8px; left: 16px; font-size: 18px; position: absolute");
modalBorderText.innerHTML = "border";
modalBorderDiv.appendChild(modalBorderText);

modalParentDiv.appendChild(modalBorderDiv);


document.body.appendChild(modalParentDiv);*/
