console.log("remove 들어옴");
console.log("제발onload");
console.log(document.getElementById('A4').contentWindow.document.getElementsByTagName("*")[0].getElementsByTagName('*').length);


/*
iframes = document.getElementById('A4').contentWindow.document.getElementsByTagName("iframe")
for(var i=0; i<iframes.length; i++){
    console.log('element', i);
    console.log('iframes[i]', iframes[i]);
    if(iframes[i].id !== "A4"){
    	iframes[i].parentNode.removeChild(iframes[i]);	
    	//iframes[i].remove();
    }
}
*/

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
}, 10000)*/



//let iframeDocument = document.getElementById('iframe1').contentWindow.document;
//let bodyText = iframeDocument.getElementsByTagName("*")[0].getElementsByTagName('*');
console.log(bodyText.length);


let tempText = [];


/*
let frameArea = document.getElementById('iframe1');
frameArea.addEventListener("click", function removeFunction(e) {
				    tempText.push(document.getElementById('iframe1').contentWindow.document.documentElement.outerHTML);
				    console.log(e.target.dataset.id);
				    console.log("리무브실행되는중");
					document.getElementById('iframe1').contentWindow.document.querySelector("[data-id='"+String(e.target.contentWindow.document.dataset.id)+"']").remove();
				    return;
				});
*/

let removedOne = [];
let removedParent = [];
let removedOnesNext = [];

//for (let i = 0; i < bodyText.length; i++) {
    //iframeDocument.querySelector("[data-id='"+String(i)+"']").addEventListener("mouseover", mouseOver);
    //iframeDocument.querySelector("[data-id='"+String(i)+"']").addEventListener("mouseout", mouseOut);
    //console.log('element selected', document.getElementById('iframe1').contentWindow.document.querySelector("[data-id='"+String(i)+"']"))
//    if(document.getElementById('A4').contentWindow.document.querySelector("[data-id='"+String(i)+"']")){

function addEventListenerToIframe() {
	document.getElementById('A4').contentWindow.document.addEventListener("click", function removeFunction(e) {
				    tempText.push(document.getElementById('A4').contentWindow.document.documentElement.outerHTML);

				    //console.log('i', i)
				    //console.log('bodyText[i]', bodyText[i])
				    // console.log(e.target.dataset.id);

				    // removedOne.push(e.target);
				    // //console.log(removedOne);
				    // removedOnesNext.push(e.target.nextSibling);
				    // removedParent.push(e.target.parentNode);
				    //console.log(removedParent);


				    e.stopPropagation();

				    if (e.target) {
				    	e.target.remove()
				    }


					// document.getElementById('iframe1').contentWindow.document.querySelector("[data-id='"+String(e.target.dataset.id)+"']").remove();
				    return;
				});
}

addEventListenerToIframe();

//	}
//}


console.log('adImage', document.getElementById("adImage"))


//href disabled
let a_total = document.getElementById('A4').contentWindow.document.getElementsByTagName("a");
for (let i = 0; i < a_total.length; i++) {
	a_total[i].removeAttribute("href")
    a_total[i].setAttribute("onclick", "return false;");
}
      // - Code to execute when all DOM content is loaded. 
      // - including fonts, images, etc.
console.log('adImage', document.getElementById("adImage"))


function undoState() {

	if(tempText.length != 0){
		document.getElementById('A4').contentWindow.document.open();
		document.getElementById('A4').contentWindow.document.write(tempText.pop());
		document.getElementById('A4').contentWindow.document.close();
	}
    


    iframeDocument.addEventListener("mouseover", mouseOver);
    iframeDocument.addEventListener("mouseout", mouseOut);

    addEventListenerToIframe();

 	//removedParent.pop().appendChild(removedOne.pop());
/* 	if(removedOnesNext.pop()){
 		removedParent.pop().appendChild(removedOne.pop());
 	}
 	removedParent.pop().insertBefore(removedOne.pop(),removedOnesNext.pop());	*/
    return;
};

function printIframe() {
	var frm = document.getElementById("A4").contentWindow;
    frm.focus();// focus on contentWindow is needed on some ie versions
    frm.print();
    return false;
};


function pdfIframe() {
	var pdf = new jsPDF('p', 'pt', 'letter');
	margins = {
        top: 0,
        bottom: 0,
        left: 0,
        width: 0
    };
    specialElementHandlers = {
        '#bypassme': function (element, renderer) {
            return true
        }
    };
  pdf.fromHTML(document.getElementById('A4').contentWindow.document.getElementsByTagName('h3')[1]);/*, 
  	0, 
  	0, 
  	{'width': margins.width,'elementHandlers': specialElementHandlers},
	function (dispose) {
        pdf.save('Test.pdf');
    }, 
    margins);*/
   pdf.save('test.pdf');
}

// undo button
document.getElementById('undoButton').addEventListener("click", undoState);
document.getElementById('printButton').addEventListener("click", printIframe);
document.getElementById('pdfButton').addEventListener("click", pdfIframe);


/*document.getElementById('undoButton').onclick = function() {
    iframeDocument.open();
    iframeDocument.write(tempText.pop());
    iframeDocument.close();
}*/