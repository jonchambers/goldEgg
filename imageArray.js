
let imgs = []

let x = []
let y = []

let redSquare

let imageSpeed = []

let randomButton

let canvas

let namesArray = ['PUT1', 'PUT2', 'PUT3', 'TR1', 'TR2', "TR3"]

let name = 0
let randImage = []

function preload(){
	redSquare = loadImage('images/red-squarePNG.png')
	for(let i = 0; i<6; i++){
		imgs[i] = loadImage('images/' + namesArray[i] + '.png')
		
	}
	//print(imgs)
}


function setup(){
canvas = createCanvas(windowWidth, windowHeight)
canvas.style('z-index', '-1')
canvas.position(0, 0)

// randomButton = createButton('Random Image and Name')
// randomButton.mousePressed(randImageName)

//print(imgs)
imageMode(CENTER)

for(let i = 0; i<30; i++){
		x.push(random(0, windowWidth))
		y.push(random(0, windowHeight))
		imageSpeed.push(random(2, 6))
		randImage.push(int(random(imgs.length)))
	}
	print(randImage)
}

function randImageName(){
	randImage = int(random(imgs.length))
	name = int(random(namesArray.length))
}


function draw(){
	background(random(255),random(255),random(255))
	image(redSquare, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
	for(let i= 0; i < x.length; i++){
		image(imgs[randImage[i]], x[i], y[i], 300, 300)
		y[i] = y[i] + imageSpeed[i]
		if (y[i] > windowHeight +100){
			y[i] = 0 - 100
		}
	}

	
  // image(imgs[randImage], windowWidth/2, windowHeight/2)
   // textSize(200)
   // fill(200, 30, 100)
   //text(namesArray[name], 400, 300)
}