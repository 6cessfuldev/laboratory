
let trans = new Array(54);
let imgTag = new Array(54);

let x = new Array(54);
let y = new Array(54);
let z = new Array(54);
let degX = new Array(54);
let degY = new Array(54);
let degZ = new Array(54);
let deg = new Array(54);
let plus =new Array(54);

let total = new Array(54);
for(let i=0; i<54; i++){
			total[i] = "";
		};

let j = 0;	
for (let i = 0; i < 54; i++) {
    plus[i] = new Array();
	}

let plusDeg =new Array(54);
for(let i=0; i<54; i++){
	plusDeg[i] = 0;
};

for(let i=0; i<54; i++){
	imgTag[i] = document.createElement('img');
    imgTag[i].style.backgroundColor='216cd9';
	document.querySelector('.cube').appendChild(imgTag[i]);
};

for(let i=0; i<54; i++){
	x[i]=0; y[i]=0; z[i]=0;
	degX[i]=0; degY[i]=0; degZ[i]=0; deg[i]="";

}
  
for (let i=0; i<54; i++){
	if(i<9){
		degX[i]=0;	//front(0~8)
	}
	else if(i<18){
		degX[i]=90;     //top(9~17)
	}
	else if(i<27){
		degX[i]=180;      //back(18~26)
	}
	else if(i<36){
		degX[i]=270;       //bottom(27~35)
	}
  	else if(i<45){
   		degY[i]=-90;   //left(36~44)
  	}
  	else{
   		degY[i]=90;        //right(45~53)
  	}
	deg[i]="rotateX("+degX[i]+"deg) rotateY("+degY[i]+"deg) rotateZ("+degZ[i]+"deg) " +plus[i];
	imgTag[i].style.transform=deg[i] + " translate3d("+x[i]+"px, "+y[i]+"px, "+z[i]+"px)"
}

for(let i=0; i<54; i++){
	  z[i] = 60;
	 deg[i]="rotateX("+degX[i]+"deg) rotateY("+degY[i]+"deg) rotateZ("+degZ[i]+"deg) " +plus[i];
	imgTag[i].style.transform=deg[i] + " translate3d("+x[i]+"px, "+y[i]+"px, "+z[i]+"px)"
	}

  	for (let i=0; i<54; i++){
		if(i%3==0){
			x[i]=-40;
   		}
		else if(i%3==1){
			x[i]=0;    
		}
		else{
			x[i]=40;
		}
	deg[i]="rotateX("+degX[i]+"deg) rotateY("+degY[i]+"deg) rotateZ("+degZ[i]+"deg) " +plus[i];
	imgTag[i].style.transform=deg[i] + " translate3d("+x[i]+"px, "+y[i]+"px, "+z[i]+"px)"
	}

  	for (let i=0; i<54; i++){
		if(i%9<3 && i%9>=0){
			y[i]+=40;
		}
		else if(i%9<6 && i%9>=3){
		;
		}
		else{
			y[i]=-40;
		}
		deg[i]="rotateX("+degX[i]+"deg) rotateY("+degY[i]+"deg) rotateZ("+degZ[i]+"deg) ";
		imgTag[i].style.transform= deg[i] + " translate3d("+x[i]+"px, "+y[i]+"px, "+z[i]+"px)"
	}  	



let rotX = ['z', 'y', '-z', '-y', 'z', 'y', '-z', '-y'];

let rotY = ['x', 'z', '-x', '-z', 'x', 'z', '-x', '-z'];

let rotZ = ['y', 'x', '-y', '-z', 'y', 'x', '-y', '-z'];

let record = new Array(54);

	
for (let i = 0; i < 54; i++) {
    record[i] = new Array();
}

let xx = new Array(54);
let yy = new Array(54);
let zz = new Array(54);

for(let i=0; i<54; i++){
	if(i<9){
		;			//front(0~8)
	}
	else if(i<18){
		record[i].push("x");     //top(9~17)
	}
	else if(i<27){
		record[i].push("x");
		record[i].push("x");		//back(18~26)
	}
	else if(i<36){
		record[i].push("x");
		record[i].push("x");
		record[i].push("x");		//bottom(27~35)
	}
  	else if(i<45){
   		record[i].push("-y");   //left(36~44)
  	}
  	else{
   		record[i].push("y");        //right(45~53)
  	}
}



// 화면으로 보기에 X축으로 돌리기

function rotateX (){	
		
		
		for(let i=0; i<54; i++){
			 xx[i] = 'x';  yy[i] = 'y'; zz[i] = 'z';
			record[i].forEach(axis => {
				switch (axis) {
				case "x" :  
					 yy[i] = rotX[rotX.indexOf(yy[i])+1];
					 zz[i] = rotX[rotX.indexOf(zz[i])+1];
					break;
				case "-x" : 
					yy[i] = rotX[rotX.indexOf(yy[i])+3];
					zz[i] = rotX[rotX.indexOf(zz[i])+3];
					break;
				case "y" : 
					xx[i] = rotY[rotY.indexOf(xx[i])+1];
					zz[i] = rotY[rotY.indexOf(zz[i])+1];
					break;
				case "-y" : 
					xx[i] = rotY[rotY.indexOf(xx[i])+3];
					zz[i] = rotY[rotY.indexOf(zz[i])+3];
					break;
				case "z" : 
					xx[i] = rotZ[rotZ.indexOf(xx[i])+1];
					yy[i] = rotZ[rotZ.indexOf(yy[i])+1];
					break;
				case "-z" : 
					xx[i] = rotZ[rotZ.indexOf(xx[i])+3];
					yy[i] = rotZ[rotZ.indexOf(yy[i])+3];
					break;
				}	
			});
		}		
		for(i=0; i<54; i++){
			switch (xx[i]) { 
			case "x" :  
				if(plusDeg[i]<90){
				 plusDeg[i] += 1; 
				plus[i][j] = " rotateX(" +plusDeg[i] + "deg)"
				}
				break;
			case "-x" : 
				if(plusDeg[i]>-90){
				plusDeg[i] -= 1;
				plus[i][j] = " rotateY(" +plusDeg[i] + "deg)"
				}
				break;
			case "y" : 
				if(plusDeg[i]<90){
				 plusDeg[i] += 1; 
					plus[i][j] = " rotateY(" +plusDeg[i] + "deg)"
				}
				break;
			case "-y" : 
				if(plusDeg[i]>-90){
				 plusDeg[i] -= 1; 
					plus[i][j] = " rotateY(" +plusDeg[i] + "deg)"
				}
				break;
			case "z" : 
				if(plusDeg[i]<90){
				 plusDeg[i] += 1; 
					plus[i][j] = " rotateZ(" +plusDeg[i] + "deg)"
				}
				break;
			case "-z" : 
				if(plusDeg[i]>-90){
				 plusDeg[i] -= 1; 
					plus[i][j] = " rotateZ(" +plusDeg[i] + "deg)"
				}
				break;
			}
		let rot="" ;
		plus[i].forEach(rotate => {
			 rot += rotate;
		});
		total[i] = rot;
		deg[i] = "rotateX("+degX[i]+"deg) rotateY("+degY[i]+"deg) rotateZ("+degZ[i]+"deg)" + total[i];
		imgTag[i].style.transform = deg[i] + " translate3d("+x[i]+"px, "+y[i]+"px, "+z[i]+"px)";
		}
	}

function rotateXXX(){
	function fpx(){
		requestAnimationFrame(fpx);
		rotateX();
	}
	fpx();
	for(i=0; i<54; i++){
		record[i].push('x');
	};
	j++;
	for(let i=0; i<54; i++){
		plusDeg[i] = 0;
	};
}



// 화면으로 보기에 Y축으로 돌리기

	function rotateY (){	
		
		
		for(let i=0; i<54; i++){
			 xx[i] = 'x';  yy[i] = 'y'; zz[i] = 'z';
			record[i].forEach(axis => {
				switch (axis) {
				case "x" :  
					 yy[i] = rotX[rotX.indexOf(yy[i])+1];
					 zz[i] = rotX[rotX.indexOf(zz[i])+1];
					break;
				case "-x" : 
					yy[i] = rotX[rotX.indexOf(yy[i])+3];
					zz[i] = rotX[rotX.indexOf(zz[i])+3];
					break;
				case "y" : 
					xx[i] = rotY[rotY.indexOf(xx[i])+1];
					zz[i] = rotY[rotY.indexOf(zz[i])+1];
					break;
				case "-y" : 
					xx[i] = rotY[rotY.indexOf(xx[i])+3];
					zz[i] = rotY[rotY.indexOf(zz[i])+3];
					break;
				case "z" : 
					xx[i] = rotZ[rotZ.indexOf(xx[i])+1];
					yy[i] = rotZ[rotZ.indexOf(yy[i])+1];
					break;
				case "-z" : 
					xx[i] = rotZ[rotZ.indexOf(xx[i])+3];
					yy[i] = rotZ[rotZ.indexOf(yy[i])+3];
					break;
				}	
			});
		}		
		for(i=0; i<54; i++){
			switch (yy[i]) { 
			case "x" :  
				if(plusDeg[i]<90){
				 plusDeg[i] += 1; 
				plus[i][j] = " rotateX(" +plusDeg[i] + "deg)"
				}
				break;
			case "-x" : 
				if(plusDeg[i]>-90){
				plusDeg[i] -= 1;
				plus[i][j] = " rotateY(" +plusDeg[i] + "deg)"
				}
				break;
			case "y" : 
				if(plusDeg[i]<90){
				 plusDeg[i] += 1; 
					plus[i][j] = " rotateY(" +plusDeg[i] + "deg)"
				}
				break;
			case "-y" : 
				if(plusDeg[i]>-90){
				 plusDeg[i] -= 1; 
					plus[i][j] = " rotateY(" +plusDeg[i] + "deg)"
				}
				break;
			case "z" : 
				if(plusDeg[i]<90){
				 plusDeg[i] += 1; 
					plus[i][j] = " rotateZ(" +plusDeg[i] + "deg)"
				}
				break;
			case "-z" : 
				if(plusDeg[i]>-90){
				 plusDeg[i] -= 1; 
					plus[i][j] = " rotateZ(" +plusDeg[i] + "deg)"
				}
				break;
			}
		let rot="" ;
		plus[i].forEach(rotate => {
			 rot += rotate;
		});
		total[i] = rot;
		deg[i] = "rotateX("+degX[i]+"deg) rotateY("+degY[i]+"deg) rotateZ("+degZ[i]+"deg)" + total[i];
		imgTag[i].style.transform = deg[i] + " translate3d("+x[i]+"px, "+y[i]+"px, "+z[i]+"px)";
		}
	}


function rotateYYY(){
	function fpx(){
		requestAnimationFrame(fpx);
		rotateY();
	}
	fpx();
	for(i=0; i<54; i++){
		record[i].push('y');
	};
	j++;
	for(let i=0; i<54; i++){
		plusDeg[i] = 0;
	};
}
	


// 화면으로 보기에 Z축으로 돌리기

function rotateZ (){	
		
		
		for(let i=0; i<54; i++){
			 xx[i] = 'x';  yy[i] = 'y'; zz[i] = 'z';
			record[i].forEach(axis => {
				switch (axis) {
				case "x" :  
					 yy[i] = rotX[rotX.indexOf(yy[i])+1];
					 zz[i] = rotX[rotX.indexOf(zz[i])+1];
					break;
				case "-x" : 
					yy[i] = rotX[rotX.indexOf(yy[i])+3];
					zz[i] = rotX[rotX.indexOf(zz[i])+3];
					break;
				case "y" : 
					xx[i] = rotY[rotY.indexOf(xx[i])+1];
					zz[i] = rotY[rotY.indexOf(zz[i])+1];
					break;
				case "-y" : 
					xx[i] = rotY[rotY.indexOf(xx[i])+3];
					zz[i] = rotY[rotY.indexOf(zz[i])+3];
					break;
				case "z" : 
					xx[i] = rotZ[rotZ.indexOf(xx[i])+1];
					yy[i] = rotZ[rotZ.indexOf(yy[i])+1];
					break;
				case "-z" : 
					xx[i] = rotZ[rotZ.indexOf(xx[i])+3];
					yy[i] = rotZ[rotZ.indexOf(yy[i])+3];
					break;
				}	
			});
		}		
		for(i=0; i<54; i++){
			switch (zz[i]) { 
			case "x" :  
				if(plusDeg[i]<90){
				 plusDeg[i] += 1; 
				plus[i][j] = " rotateX(" +plusDeg[i] + "deg)"
				}
				break;
			case "-x" : 
				if(plusDeg[i]>-90){
				plusDeg[i] -= 1;
				plus[i][j] = " rotateY(" +plusDeg[i] + "deg)"
				}
				break;
			case "y" : 
				if(plusDeg[i]<90){
				 plusDeg[i] += 1; 
					plus[i][j] = " rotateY(" +plusDeg[i] + "deg)"
				}
				break;
			case "-y" : 
				if(plusDeg[i]>-90){
				 plusDeg[i] -= 1; 
					plus[i][j] = " rotateY(" +plusDeg[i] + "deg)"
				}
				break;
			case "z" : 
				if(plusDeg[i]<90){
				 plusDeg[i] += 1; 
					plus[i][j] = " rotateZ(" +plusDeg[i] + "deg)"
				}
				break;
			case "-z" : 
				if(plusDeg[i]>-90){
				 plusDeg[i] -= 1; 
					plus[i][j] = " rotateZ(" +plusDeg[i] + "deg)"
				}
				break;
			}
		let rot="" ;
		plus[i].forEach(rotate => {
			 rot += rotate;
		});
		total[i] = rot;
		deg[i] = "rotateX("+degX[i]+"deg) rotateY("+degY[i]+"deg) rotateZ("+degZ[i]+"deg)" + total[i];
		imgTag[i].style.transform = deg[i] + " translate3d("+x[i]+"px, "+y[i]+"px, "+z[i]+"px)";
		}
	}

function rotateZZZ(){
	function fpx(){
		requestAnimationFrame(fpx);
		rotateZ();
	}
	fpx();
	for(i=0; i<54; i++){
		record[i].push('z');
	};
	j++;
	for(let i=0; i<54; i++){
		plusDeg[i] = 0;
	};
}








function red(i){
imgTag[i].style.backgroundColor='red';
}

for (i=0;i<9; i++){
red(i);
}




	