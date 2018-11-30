console.log('dayoung journey lv1');
//myWindow.document.body.innerHTML = "Hello World!" + myWindow.document.body.innerHTML;
//console.log(myWindow.document.getElementById('main_content').innerHTML);
//or class name content, 

//var myWindow = window.open("https://www.w3schools.com/jsref/met_win_open.asp");

let params = `scrollbars=no,resizable=yes,status=no,location=no,toolbar=yes,menubar=yes,
width=0,height=0,left=-1000,top=-1000`;

var myWindow = open(window.location.href, 'test', params);


//open("https://www.w3schools.com", "test", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400")
myWindow.document.write(document.body.innerHTML);
//myWindow.document.getElementById('cbox_module').remove();


if (myWindow.document.getElementById('main_content')){
    myWindow.document.body.innerHTML = myWindow.document.getElementById('main_content').innerHTML;
} else if (myWindow.document.getElementsByClassName('content')[0]) {
    myWindow.document.body.innerHTML = myWindow.document.getElementsByClassName('content')[0].innerHTML;
} else if (myWindow.document.getElementById('main')) {
    myWindow.document.body.innerHTML = myWindow.document.getElementById('main').innerHTML;
} else if (myWindow.document.getElementById('content')) {
    myWindow.document.body.innerHTML = myWindow.document.getElementById('content').innerHTML;
}

//var object = document.getElementById("articleTitle");
//var rectCollection = object.getClientRects();
//myWindow.document.body.appendChild(rectCollection);

//var hover_element = "<style> img:hover, p:hover, h3:hover, a:hover {background-color: yellow;} \
//div:hover . </style>"

var hover_div = "<style> div:not(#3):hover{ \
    background-color: yellow;} \
     </style>";
//div:not([name="wrap"]){ \
//    background-color: yellow;}
//myWindow.document.head.appendChild(hover_element);
if(myWindow.document.head){
    myWindow.document.head.innerHTML = myWindow.document.head.innerHTML + "<style> div:hover > a, div:hover > p { \
        background-color: yellow;} \
         </style>";

    /*myWindow.document.head.innerHTML = myWindow.document.head.innerHTML + "<style> div:hover:not([data-id='2']){ \
         background-color: yellow;} \
        </style>";*/
    console.log("if문 안으로 들어옴");
}

var tempFrame = "<div><iframe width='560' height='315' src='https://www.youtube.com/watch?v=zlpTnG7PJCs' frameborder='0' allowfullscreen></iframe></div>";

if(myWindow.document.body){
    //myWindow.document.body.appendChild(tempFrame);
    myWindow.document.body.innerHTML += tempFrame;

}

if (myWindow.document.getElementById('cbox_module')){
    myWindow.document.getElementById('cbox_module').remove()
}

if (myWindow.document.getElementsByClassName('_reactionModule')) {
    const reactions = myWindow.document.getElementsByClassName('_reactionModule')
    for (let i = 0; i < reactions.length; i++) { 
        reactions[i].remove();}
}

if (myWindow.document.getElementById('articleBodyContents')) {
    //adjust image size
    myWindow.document.getElementById('articleBodyContents').style.fontSize = '12px';
}

const images = myWindow.document.getElementsByTagName("img");
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
if (myWindow.document.getElementsByClassName("end_ad")[0]) {
    myWindow.document.getElementsByClassName("end_ad")[0].remove();
}

var tempText =[];

function removeFunction(e) {
    tempText.push(myWindow.document.innerHTML);
    //console.log(e.target.id);
    //console.log(e.target.dataset.id);
    //myWindow.document.querySelector()
    myWindow.document.querySelector("[data-id='"+String(e.target.dataset.id)+"']").remove();
    //myWindow.document.getElementById(e.target.data-id).remove();
};

var bodyText = myWindow.document.body.getElementsByTagName("*");
var bodyTag = [];
console.log(bodyText.length);
for (var i = 0; i < bodyText.length; i++) {
    bodyText[i].setAttribute("data-id", i);
    var bodyElement = [bodyText[i].tagName,bodyText[i].getAttribute('data-id')];
    bodyTag.push(bodyElement);
    //console.log(bodyTag[i]);
    //console.log(bodyTag[i][1]);
    myWindow.document.querySelector("[data-id='"+String(i)+"']").addEventListener("click", removeFunction);
}

var a = myWindow.document.getElementsByTagName("A");
console.log(a);

//var a_disabled  = "a {pointer-events: none; cursor: default;}"
//myWindow.document.head.appendChild(a_disabled);

var a_total = myWindow.document.body.getElementsByTagName("a");
for (var i = 0; i < a_total.length; i++) {
    a_total[i].setAttribute("onclick", "return false;");
}

//myWindow.document.getElementById('articleTitle').addEventListener("click", removeFunction();





/*function undoFunction(){

}


(undo펑션 받는 버튼 구현)*/

//print();



//create modal

//window size
/*wrapperDiv = myWindow.document.createElement("div");
wrapperDiv.setAttribute("style","position: absolute; left: 0px; top: 0px; background-color: rgb(255, 255, 255); opacity: 0.5; z-index: 2000; height: 1083px; width: 100%;");

iframeElement = myWindow.document.createElement("iframe");
iframeElement.setAttribute("style","width: 100%; height: 100%;");

wrapperDiv.appendChild(iframeElement);

//modal size
modalParentDiv = myWindow.document.createElement("div");
modalParentDiv.setAttribute("style", "position: absolute; width: 500px; height: 500px; border: 1px dashed rgb(0, 0 ,0); padding: 10px; background-color: rgb(255, 255, 255); z-index: 1900; overflow: auto; text-align: center; top: 149px; left: 497px;");
modalParentText = myWindow.document.createElement("div");
modalParentText.setAttribute("style", "top: 8px; left: 16px; font-size: 18px; position: absolute");
modalParentText.innerHTML = "margin";
modalParentDiv.appendChild(modalParentText);



modalBorderDiv = myWindow.document.createElement("div");
modalBorderDiv.setAttribute("style", "position: static; width: 400px; height: 400px; border: 1px solid rgb(0, 0 ,0); padding: 10px; background-color: rgb(255, 255, 255); z-index: 2001; overflow: auto; text-align: center; top: 169px; left: 497px;");
modalBorderText = myWindow.document.createElement("div");
modalBorderText.setAttribute("style", "top: 8px; left: 16px; font-size: 18px; position: absolute");
modalBorderText.innerHTML = "border";
modalBorderDiv.appendChild(modalBorderText);

modalParentDiv.appendChild(modalBorderDiv);


myWindow.document.body.appendChild(modalParentDiv);*/