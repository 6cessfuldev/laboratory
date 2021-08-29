let imgTag = new Array();
let plus= "";

for (let i=0; i<6; i++){
	imgTag[i] = document.createElement('img');
	imgTag[i].style.backgroundColor='white';
	document.querySelector('.cube').appendChild(imgTag[i]);
}


let rotX = ['z', 'y', '-z', '-y', 'z', 'y', '-z', '-y'];

let rotY = ['x', 'z', '-x', '-z', 'x', 'z', '-x', '-z'];

let rotZ = ['y', 'x', '-y', '-z', 'y', 'x', '-y', '-z'];

let record = new Array() ;	


// 화면으로 보기에 X축으로 돌리기

function rotateX(){
	let xx = 'x'; let yy = 'y'; let zz = 'z';
	record.forEach(axis => {
		switch (axis) { 
			case "x" :  
				 yy = rotX[rotX.indexOf(yy)+1];
				 zz = rotX[rotX.indexOf(zz)+1];
				break;
			case "-x" : 
				yy = rotX[rotX.indexOf(yy)+3];
				zz = rotX[rotX.indexOf(zz)+3];
				break;
			case "y" : 
				xx = rotY[rotY.indexOf(xx)+1];
				zz = rotY[rotY.indexOf(zz)+1];
				break;
			case "-y" : 
				xx = rotY[rotY.indexOf(xx)+3];
				zz = rotY[rotY.indexOf(zz)+3];
				break;
			case "z" : 
				xx = rotZ[rotZ.indexOf(xx)+1];
				yy = rotZ[rotZ.indexOf(yy)+1];
				break;
			case "-z" : 
				xx = rotZ[rotZ.indexOf(xx)+3];
				yy = rotZ[rotZ.indexOf(yy)+3];
				break;
		}
	});
	switch (xx) { 
		case "x" :  
			 plus += " rotateX(90deg)"
			break;
		case "-x" : 
			 plus += " rotateX(-90deg)"
			break;
		case "y" : 
			 plus += " rotateY(90deg)"
			break;
		case "-y" : 
			 plus += " rotateY(-90deg)"
			break;
		case "z" : 
			 plus += " rotateZ(90deg)"
			break;
		case "-z" : 
			 plus += " rotateZ(-90deg)"
			break;
	}
	imgTag[5].style.transform = plus+ " translateZ(40px)";
	record.push('x')
	
};


// 화면으로 보기에y 축으로 돌리기

function rotateY(){
	let xx = 'x'; let yy = 'y'; let zz = 'z';
	record.forEach(axis => {
		switch (axis) { 
			case "x" :  
				 yy = rotX[rotX.indexOf(yy)+1];
				 zz = rotX[rotX.indexOf(zz)+1];
				break;
			case "-x" : 
				yy = rotX[rotX.indexOf(yy)+3];
				zz = rotX[rotX.indexOf(zz)+3];
				break;
			case "y" : 
				xx = rotY[rotY.indexOf(xx)+1];
				zz = rotY[rotY.indexOf(zz)+1];
				break;
			case "-y" : 
				xx = rotY[rotY.indexOf(xx)+3];
				zz = rotY[rotY.indexOf(zz)+3];
				break;
			case "z" : 
				xx = rotZ[rotZ.indexOf(xx)+1];
				yy = rotZ[rotZ.indexOf(yy)+1];
				break;
			case "-z" : 
				xx = rotZ[rotZ.indexOf(xx)+3];
				yy = rotZ[rotZ.indexOf(yy)+3];
				break;
		}
	});
	
	switch (yy) { 
		case "x" :  
			 plus += " rotateX(90deg)"
			break;
		case "-x" : 
			 plus += " rotateX(-90deg)"
			break;
		case "y" : 
			 plus += " rotateY(90deg)"
			break;
		case "-y" : 
			 plus += " rotateY(-90deg)"
			break;
		case "z" : 
			 plus += " rotateZ(90deg)"
			break;
		case "-z" : 
			 plus += " rotateZ(-90deg)"
			break;
	}
	imgTag[5].style.transform = plus+ " translateZ(40px)";
	record.push('y')
};

// 화면으로 보기에 Z 축으로 돌리기

function rotateZ(){
	let xx = 'x'; let yy = 'y'; let zz = 'z';
	record.forEach(axis => {
		switch (axis) { 
			case "x" :  
				 yy = rotX[rotX.indexOf(yy)+1];
				 zz = rotX[rotX.indexOf(zz)+1];
				break;
			case "-x" : 
				yy = rotX[rotX.indexOf(yy)+3];
				zz = rotX[rotX.indexOf(zz)+3];
				break;
			case "y" : 
				xx = rotY[rotY.indexOf(xx)+1];
				zz = rotY[rotY.indexOf(zz)+1];
				break;
			case "-y" : 
				xx = rotY[rotY.indexOf(xx)+3];
				zz = rotY[rotY.indexOf(zz)+3];
				break;
			case "z" : 
				xx = rotZ[rotZ.indexOf(xx)+1];
				yy = rotZ[rotZ.indexOf(yy)+1];
				break;
			case "-z" : 
				xx = rotZ[rotZ.indexOf(xx)+3];
				yy = rotZ[rotZ.indexOf(yy)+3];
				break;
		}
	});
	
	switch (zz) { 
		case "x" :  
			 plus += " rotateX(90deg)"
			break;
		case "-x" : 
			 plus += " rotateX(-90deg)"
			break;
		case "y" : 
			 plus += " rotateY(90deg)"
			break;
		case "-y" : 
			 plus += " rotateY(-90deg)"
			break;
		case "z" : 
			 plus += " rotateZ(90deg)"
			break;
		case "-z" : 
			 plus += " rotateZ(-90deg)"
			break;
	}
	imgTag[5].style.transform = plus+ " translateZ(40px)";
	record.push('z')
};
