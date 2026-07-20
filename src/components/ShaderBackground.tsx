'use client';

import { useEffect, useRef } from 'react';

export default function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 640, y: 360 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function syncSize() {
      if (!canvas) return;
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w; canvas.height = h;
      }
    }
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(syncSize) : null;
    ro?.observe(canvas);
    syncSize();

    const gl = (canvas.getContext('webgl') ?? canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    if (!gl) return;

    const VS = `attribute vec2 a_position;varying vec2 v_uv;void main(){v_uv=a_position*0.5+0.5;gl_Position=vec4(a_position,0.0,1.0);}`;
    const FS = `precision highp float;
uniform float u_time;uniform vec2 u_resolution;uniform vec2 u_mouse;varying vec2 v_uv;
void main(){
  vec2 p=(gl_FragCoord.xy*2.0-u_resolution.xy)/min(u_resolution.x,u_resolution.y);
  float t=u_time*0.10;
  vec2 mouse=(u_mouse/u_resolution)-0.5;
  for(float n=1.0;n<7.0;n++){
    p.x+=0.45/n*sin(n*p.y+t+0.55*n)+mouse.x*0.025;
    p.y+=0.38/n*sin(n*p.x+t+0.40*n)-mouse.y*0.025;
  }
  vec3 cream=vec3(0.984,0.976,0.965);
  vec3 deepCream=vec3(0.940,0.928,0.912);
  vec3 gold=vec3(0.722,0.525,0.044);
  float flow=abs(sin(p.x*1.1+p.y*1.1+t*0.45));
  float shadow=smoothstep(0.12,0.88,flow);
  vec3 color=mix(deepCream,cream,shadow);
  float vein=smoothstep(0.38,0.62,flow);
  color=mix(color,gold,vein*0.16);
  float ridge=pow(max(0.0,1.0-flow),20.0);
  color+=gold*ridge*0.13;
  float grain=fract(sin(dot(v_uv+u_time*0.007,vec2(12.9898,78.233)))*43758.5453);
  color+=(grain-0.5)*0.016;
  gl_FragColor=vec4(color,1.0);
}`;

    function compileShader(type: number, src: string): WebGLShader {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      return s;
    }
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compileShader(gl.VERTEX_SHADER, VS));
    gl.attachShader(prog, compileShader(gl.FRAGMENT_SHADER, FS));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime  = gl.getUniformLocation(prog, 'u_time');
    const uRes   = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width * canvas!.width,
        y: (1 - (e.clientY - rect.top) / rect.height) * canvas!.height,
      };
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    function render(t: number) {
      if (!gl || !canvas) return;
      if (!ro) syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime)  gl.uniform1f(uTime, t * 0.001);
      if (uRes)   gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouseRef.current.x, mouseRef.current.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafRef.current = requestAnimationFrame(render);
    }
    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMouseMove);
      ro?.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: -10,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  );
}
