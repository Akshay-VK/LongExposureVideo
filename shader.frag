#ifdef GL_ES
precision mediump float;
#endif

// grab texcoords from vert shader
varying vec2 vTexCoord;

// our texture coming from p5
uniform sampler2D tex0;
uniform sampler2D tex1;


void main() {
	vec2 uv = vTexCoord;
	  
	// the texture is loaded upside down and backwards by default so lets flip it
	uv.y = 1.0 - uv.y;
	  
	vec4 tex = texture2D(tex0, uv);
	vec4 tex1=texture2D(tex1,uv);
	 
	float gray = (tex.r + tex.g + tex.b) / 3.0;
	float gray2=(tex1.r+tex1.g+tex1.b)/3.0;
	// render the output
	if(gray>gray2){
		gl_FragColor = vec4(tex.xyz, 1.0);
	}else if (gray2>gray){
		gl_FragColor=vec4(tex1.xyz,1.0);
	}else{
		gl_FragColor=vec4(tex.xyz,1.0);
	}
}