import { useEffect, useRef } from 'react'

const VERTEX = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`

const FRAGMENT = `
precision highp float;
varying vec2 v_uv;
uniform float u_time;
uniform vec2 u_resolution;

vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                      -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m; m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = v_uv;
  float aspect = u_resolution.x / u_resolution.y;
  float t = u_time * 0.08;

  vec2 c1 = vec2(0.12 + 0.10*sin(t*0.41+1.0) + 0.05*cos(t*0.23), 0.88 + 0.08*cos(t*0.37) + 0.04*sin(t*0.19+2.0));
  vec2 c2 = vec2(0.88 + 0.08*cos(t*0.31+0.5) + 0.04*sin(t*0.47), 0.9 + 0.08*sin(t*0.29+1.5) + 0.04*cos(t*0.53));
  vec2 c3 = vec2(0.08 + 0.10*sin(t*0.37+3.0) + 0.06*cos(t*0.19), 0.12 + 0.08*cos(t*0.43+0.7) + 0.04*sin(t*0.31));
  vec2 c4 = vec2(0.42 + 0.08*cos(t*0.29+2.0) + 0.05*sin(t*0.41), 0.52 + 0.08*sin(t*0.23+1.0) + 0.05*cos(t*0.37));
  vec2 c5 = vec2(0.88 + 0.08*sin(t*0.47+0.3) + 0.04*cos(t*0.29), 0.12 + 0.10*cos(t*0.31+2.5) + 0.04*sin(t*0.43));

  float cs = t * 0.12;
  vec3 col1 = clamp(vec3(0.77+0.04*sin(cs*0.71), 0.85+0.04*sin(cs*0.53+1.0), 0.94+0.03*cos(cs*0.37)), 0.72, 0.98);
  vec3 col2 = clamp(vec3(0.77+0.04*sin(cs*0.47+2.0), 0.93+0.03*cos(cs*0.61), 0.85+0.04*sin(cs*0.41+0.5)), 0.72, 0.98);
  vec3 col3 = clamp(vec3(0.95+0.03*cos(cs*0.59+1.5), 0.77+0.05*sin(cs*0.43), 0.85+0.04*sin(cs*0.67+3.0)), 0.72, 0.98);
  vec3 col4 = clamp(vec3(0.84+0.04*sin(cs*0.37+4.0), 0.78+0.04*cos(cs*0.53+1.0), 0.93+0.03*sin(cs*0.71+2.0)), 0.72, 0.98);
  vec3 col5 = clamp(vec3(0.76+0.04*cos(cs*0.61+3.0), 0.89+0.03*sin(cs*0.47+0.5), 0.93+0.03*cos(cs*0.41+2.0)), 0.72, 0.98);

  float r1 = 0.80 + 0.10*sin(t*0.53);
  float r2 = 0.75 + 0.08*sin(t*0.41+1.2);
  float r3 = 0.80 + 0.10*sin(t*0.37+2.4);
  float r4 = 0.90 + 0.10*sin(t*0.29+3.6);
  float r5 = 0.75 + 0.08*sin(t*0.47+4.8);

  float w1 = smoothstep(r1, 0.0, distance(uv, c1));
  float w2 = smoothstep(r2, 0.0, distance(uv, c2));
  float w3 = smoothstep(r3, 0.0, distance(uv, c3));
  float w4 = smoothstep(r4, 0.0, distance(uv, c4));
  float w5 = smoothstep(r5, 0.0, distance(uv, c5));

  float totalW = w1+w2+w3+w4+w5+0.001;
  vec3 color = (col1*w1 + col2*w2 + col3*w3 + col4*w4 + col5*w5) / totalW;

  float grain = snoise(uv * u_resolution.xy * 0.25);
  color += 0.022 * grain;

  vec2 auv = vec2(uv.x*aspect, uv.y);
  vec2 g1 = vec2((0.65+0.15*sin(t*0.19+0.5))*aspect, 0.68+0.12*cos(t*0.23+1.0));
  float gd1 = distance(auv, g1);
  float glare1 = exp(-gd1*gd1*8.0)*0.12;

  vec2 g2 = vec2((0.60+0.12*sin(t*0.23+2.0))*aspect, 0.72+0.10*cos(t*0.19+3.0));
  float gd2 = distance(auv, g2);
  float glare2 = exp(-gd2*gd2*25.0)*0.08;

  vec2 g3 = vec2((0.30+0.12*cos(t*0.17+1.5))*aspect, 0.35+0.10*sin(t*0.21+0.5));
  float gd3 = distance(auv, g3);
  float glare3 = exp(-gd3*gd3*12.0)*0.08;

  float streak = exp(-pow((auv.y-g1.y)*6.0,2.0))*exp(-gd1*1.5)*0.06;
  vec3 glareTint = vec3(1.0, 0.97, 0.95);
  color += (glare1+glare2+glare3+streak)*glareTint;

  color = clamp(color, 0.0, 1.0);
  gl_FragColor = vec4(color, 1.0);
}`

function compileShader(gl, type, src) {
  const s = gl.createShader(type)
  gl.shaderSource(s, src)
  gl.compileShader(s)
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(s))
  }
  return s
}

export default function ShaderBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const gl = canvas.getContext('webgl')
    if (!gl) return

    function resize() {
      canvas.width = window.innerWidth * devicePixelRatio
      canvas.height = window.innerHeight * devicePixelRatio
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()
    window.addEventListener('resize', resize)

    const prog = gl.createProgram()
    gl.attachShader(prog, compileShader(gl, gl.VERTEX_SHADER, VERTEX))
    gl.attachShader(prog, compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT))
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW)

    const aPos = gl.getAttribLocation(prog, 'a_pos')
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const uTime = gl.getUniformLocation(prog, 'u_time')
    const uRes = gl.getUniformLocation(prog, 'u_resolution')

    let raf
    function frame(t) {
      gl.uniform1f(uTime, t * 0.001)
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
      }}
    />
  )
}
