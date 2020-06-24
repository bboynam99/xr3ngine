import{Component as e,TagComponent as t,System as s}from"https://unpkg.com/ecsy@0.2.6/build/ecsy.module.js";class n extends e{constructor(){super(),this.states={},this.mapping={" ":"jump",ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",ArrowDown:"down"}}}const o="left-button",i="down",d="up";class r extends e{constructor(){super(),this.clientX=0,this.clientY=0,this.states={}}}class a extends e{constructor(){super(),this.axis_threshold=.4,this.connected=!1}}class u extends e{constructor(){super(),this.states={up:!1,down:!1,left:!1,right:!1},this.changed=!0,this.released=!1}anyChanged(){return this.changed}anyReleased(){return this.released}}class c extends t{}class h extends e{}class l extends t{}class p extends s{execute(e,t){this.queries.controls.added.forEach(()=>{window&&window.DEBUG_INPUT?this.debug=window.DEBUG_INPUT:this.debug=!1,document.addEventListener("keydown",e=>{this.setKeyState(this.kb,e.key,"down")}),document.addEventListener("keyup",e=>{this.setKeyState(this.kb,e.key,"up")})}),this.queries.controls.results.forEach(e=>{this.kb||(this.kb=e.getComponent(n)),this.inp||(this.inp=e.getMutableComponent(u)),Object.keys(this.kb.mapping).forEach(e=>{const t=this.kb.mapping[e],s=this.getKeyState(this.kb,e);"down"===s.current&&"up"===s.prev&&(this.inp.states[t]="down"===s.current,this.inp.changed=!0),"up"===s.current&&"down"===s.prev&&(this.inp.states[t]="down"===s.current,this.inp.changed=!0,this.inp.released=!0),s.prev=s.current})})}setKeyState(e,t,s){const n=this.getKeyState(e,t);n.prev=n.current,n.current=s,this.debug&&console.log(`Set ${t} to ${s}`)}getKeyState(e,t){return e.states[t]||(e.states[t]={prev:"up",current:"up"}),e.states[t]}isPressed(e,t){return"down"===this.getKeyState(e,t).current}}p.queries={controls:{components:[n,u],listen:{added:!0,removed:!0}}};class g extends s{constructor(){super(...arguments),this.downHandler=(e,t)=>{this.setMouseState(o,i,t)},this.moveHandler=(e,t)=>{t.clientX=e.clientX,t.clientY=e.clientY,t.lastTimestamp=e.timeStamp},this.upHandler=(e,t)=>{this.setMouseState(o,d,t)}}execute(e,t){this.queries.mouse.added.forEach(e=>{window&&window.DEBUG_INPUT?this.debug=window.DEBUG_INPUT:this.debug=!1,this.mouse=e.getMutableComponent(r),this.inp=e.getMutableComponent(u),document.addEventListener("mousemove",e=>this.moveHandler(e,this.mouse),!1),document.addEventListener("mousedown",e=>this.downHandler(e,this.mouse),!1),document.addEventListener("mouseup",e=>this.upHandler(e,this.mouse),!1)}),this.queries.mouse.results.forEach(()=>{const e=o,t=this.getMouseState(e,this.mouse);t.current===i&&t.prev===d&&(this.inp.states[e]=t.current===i,this.inp.changed=!0),t.current===d&&t.prev===i&&(this.inp.states[e]=t.current===i,this.inp.changed=!0,this.inp.released=!0),t.current!==t.prev&&this.debug&&(t.prev=t.current)}),this.queries.mouse.removed.forEach(e=>{const t=e.getMutableComponent(r);t&&document.removeEventListener("mousemove",t.moveHandler)})}setMouseState(e,t,s){const n=this.getMouseState(e,s);n.prev=n.current,n.current=t,this.debug&&console.log(`Mouse button ${e} is ${t} at ${s.clientX} / ${s.clientY}`)}getMouseState(e,t){return t.states[e]||(t.states[e]={prev:d,current:d}),t.states[e]}}g.queries={mouse:{components:[r,u],listen:{added:!0,removed:!0}}};class m extends s{execute(e,t){this.queries.gamepad.added.forEach(e=>{window&&window.DEBUG_INPUT?this.debug=window.DEBUG_INPUT:this.debug=!1;const t=e.getMutableComponent(a);window.addEventListener("gamepadconnected",e=>{console.log("A gamepad connected:",e.gamepad),t.connected=!0}),window.addEventListener("gamepaddisconnected",e=>{console.log("A gamepad disconnected:",e.gamepad),t.connected=!1})}),this.queries.gamepad.results.forEach(e=>{const t=e.getMutableComponent(a);t.connected&&this._scan_gamepads(t,e.getMutableComponent(u))})}_scan_gamepads(e,t){navigator.getGamepads().forEach(s=>{s.axes&&s.axes.length>=2&&(this.scan_x(e,s.axes[0],t),this.scan_y(e,s.axes[1],t))})}scan_x(e,t,s){return t<-e.axis_threshold?(s.states.left=!0,void(s.states.right=!1)):t>e.axis_threshold?(s.states.left=!1,void(s.states.right=!0)):(s.states.left=!1,s.states.right=!1,console.log("left: "+s.states.left),void console.log("right: "+s.states.right))}scan_y(e,t,s){return t<-e.axis_threshold?(s.states.up=!1,void(s.states.down=!0)):t>e.axis_threshold?(s.states.up=!0,void(s.states.down=!1)):(s.states.up=!1,s.states.down=!1,console.log("up: "+s.states.up),void console.log("down: "+s.states.down))}}m.queries={gamepad:{components:[a,u],listen:{added:!0,removed:!0}}};const w="undefined"!=typeof window&&void 0!==window.document,b={mouse:!0,keyboard:!0,touchscreen:!0,gamepad:!0,debug:!1};function y(e,t=b){if(t.debug&&console.log("Initializing input systems..."),!w)return console.error("Couldn't initialize input, are you in a browser?");window&&t.debug&&(window.DEBUG_INPUT=!0),t.debug&&(console.log("Registering input systems with the following options:"),console.log(t));const s=e.createEntity().addComponent(u);t.keyboard&&(e.registerSystem(p,null),s.addComponent(n),t.debug&&console.log("Registered KeyboardInputSystem and added KeyboardInputState component to input entity")),t.mouse&&(e.registerSystem(g,null),s.addComponent(r),t.debug&&console.log("Registered MouseInputSystem and added MouseInputState component to input entity")),t.gamepad&&(e.registerSystem(m,null),s.addComponent(a),t.debug&&console.log("Registered MouseInputSystem and added MouseInputState component to input entity")),t.touchscreen&&t.debug&&console.log("Touchscreen is not yet implemented"),t.debug&&console.log("INPUT: Registered input systems.")}export{c as ControllerConnected,h as Draggable,l as Dragging,a as GamepadInputState,m as GamepadInputSystem,u as InputState,n as KeyboardInputState,p as KeyboardInputSystem,r as MouseInputState,g as MouseInputSystem,y as initializeInputSystems};
