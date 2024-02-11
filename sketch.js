// a shader variable
let theShader;
let cam;
let prev;

function preload(){
	// load the shader
	theShader = loadShader('shader.vert', 'shader.frag');
}

function setup() {
	// shaders require WEBGL mode to work
	createCanvas(windowWidth, windowHeight, WEBGL);
	noStroke();
	
	let inp=createFileInput(handle);
	inp.position(0,0)
	 
	/*cam = createVideo('vid.mp4');
	cam.volume(0);
	cam.play();
	cam.loop();
	//cam.onended(()=>{alert('done.');noLoop()});
	
	cam.size(windowWidth, windowHeight);
	  
	cam.hide();*/
	background(0);
	prev=createGraphics(windowWidth,windowHeight);
	prev.background(0);
}

function draw() {
	if(!cam){return;}
	// shader() sets the active shader with our shader
	shader(theShader);
	  
	// passing cam as a texture
	theShader.setUniform('tex0', cam);
	theShader.setUniform('tex1',prev);
	
	// rect gives us some geometry on the screen
	rect(0,0,width,height);
	prev.image(get(),0,0,windowWidth,windowHeight);
	  
}
function handle(f){
	if(f.type=='video'){
		background(0);
		prev.background(0);
		cam=createVideo(f.data);
		cam.volume(0);
		cam.play();
		cam.loop();
		cam.hide();
	}else{
		cam==null;
	}
}
