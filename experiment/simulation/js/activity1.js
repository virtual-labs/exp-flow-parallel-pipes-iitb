let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Fluid Mechanics: Flow through parallel pipes</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    internal_calculation1();
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act1-div'>
      <img src="./images/fig1.png" style="width:50%">
      <br>
      <br>
      <p style="text-align:left">
         A pipe of diameter d<sub>1</sub> = ${d1}cm and length L = ${L}m connecting two reservoirs having difference of water level as ${H}m.
      </p>
      <p style="text-align:left">
         Determine the discharge through the pipe.
      </p>
      <p style="text-align:left">
         If an additional pipe of diameter d<sub>2</sub> = ${d1}cm and length L<sub>2</sub> = ${L2}m is attached to the last ${L2}m length of the existing pipe.
      </p>
      <p style="text-align:left">
         Find the increase in the discharge through the pipe. Take f = ${f}.
      </p>
      <p style="text-align:left;" class="fs-2vw fb-600">
         Case : &#8544;
      </p>
      <p>
         $$
            H = \\frac{4fLv^2}{2gd_1}
         $$

         $$ \\text{Find} \\ v $$
      </p>
      <div id="act1-v-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$v = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='v-inp' class='form-control fs-16px' /><span style="display:contents;"> m/s</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_v();' id='act1-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
}
function internal_calculation1() {
    d1 = random1(18, 23);
    L = random1(1900, 2001);
    H = random1(20, 26);
    d2 = d1;
    L2 = random1(1200, 1301);
    v = parseFloat(Math.sqrt((H * 2 * g * (d1 / 100)) / (4 * f * L)).toFixed(3));
    A = parseFloat(((Math.PI / 4) * Math.pow((d1 / 100), 2)).toFixed(3));
    Q_ms = parseFloat((A * v).toFixed(3));
    Q_ls = Q_ms * 1000;
    d3 = d1;
    L3 = L2;
    L1 = L - L2;
    A1 = parseFloat(((Math.PI / 4) * Math.pow((d1 / 100), 2)).toFixed(3));
    A2 = parseFloat(((Math.PI / 4) * Math.pow((d2 / 100), 2)).toFixed(3));
    r = A1 / (2 * A2);
    // v2 = r * v1;
    v1 = parseFloat((Math.pow((((H * 2 * g) / (4 * f)) *
        (1 / (L1 / (d1 / 100) + (L2 * Math.pow(r, 2)) / (d2 / 100)))), 0.5)).toFixed(3));
    Q1 = parseFloat((A1 * v1).toFixed(3));
    increase_Q_ms = parseFloat((Q1 - Q_ms).toFixed(3));
    increase_Q_ls = increase_Q_ms * 1000;
    console.log('d1', d1);
    console.log('L', L);
    console.log('H', H);
    console.log('d2', d2);
    console.log('L2', L2);
    console.log('v', v);
    console.log('A', A);
    console.log('Q_ms', Q_ms);
    console.log('Q_ls', Q_ls);
    console.log('d3', d3);
    console.log('L1', L1);
    console.log('A1', A1);
    console.log('A2', A2);
    console.log('r', r);
    console.log('v1', v1);
    console.log('Q1', Q1);
    console.log('increase_Q_ms', increase_Q_ms);
    console.log('increase_Q_ls', increase_Q_ls);
}
function verify_v() {
    let v_inp = (document.getElementById('v-inp'));
    console.log(v);
    if (!verify_values(parseFloat(v_inp.value), v)) {
        v_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        v_inp.style.border = '1px solid #ced4da';
        v_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let btn = (document.getElementById('act1-vf-btn1'));
    let div = (document.getElementById('act1-v-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$ v_B = ${v} m/s $$
      </p>
      <br>
      <div id="act1-A-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$A = \\frac{\\pi}{4}\\left(\\frac{d_1}{100}\\right)^2 = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-A-inp' class='form-control fs-16px' /><span style="display:contents;"> m<sup>2</sup></span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='act1_verify_A();' id='act1-vf-btn2'>Verify</button>
      </div>
   `;
    btn && btn.remove();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function act1_verify_A() {
    let A_inp = (document.getElementById('act1-A-inp'));
    console.log(A);
    if (!verify_values(parseFloat(A_inp.value), A)) {
        A_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        A_inp.style.border = '1px solid #ced4da';
        A_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let btn = (document.getElementById('act1-vf-btn2'));
    let div = (document.getElementById('act1-A-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$A = \\frac{\\pi}{4}\\left(\\frac{d_1}{100}\\right)^2 = ${A}m^2 $$
      </p>
      <br>
      <p style="text-align:left;">
         Discharge
      </p>
      <div id="act1-Q-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$Q = AV = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-Q-ms-inp' class='form-control fs-16px' /><span style="display:contents;"> m<sup>3</sup>/s</span>
            </div>
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$Q = AV = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-Q-ls-inp' class='form-control fs-16px' /><span style="display:contents;"> lit/s</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='act1_verify_Q();' id='act1-vf-btn3'>Verify</button>
      </div>
   `;
    btn && btn.remove();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function act1_verify_Q() {
    let Q_ms_inp = (document.getElementById('act1-Q-ms-inp'));
    let Q_ls_inp = (document.getElementById('act1-Q-ls-inp'));
    console.log(Q_ms, Q_ls);
    if (!verify_values(parseFloat(Q_ms_inp.value), Q_ms)) {
        Q_ms_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        Q_ms_inp.style.border = '1px solid #ced4da';
        Q_ms_inp.disabled = true;
    }
    if (!verify_values(parseFloat(Q_ls_inp.value), Q_ls)) {
        Q_ls_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        Q_ls_inp.style.border = '1px solid #ced4da';
        Q_ls_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let btn = (document.getElementById('act1-vf-btn3'));
    let div = (document.getElementById('act1-Q-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Q = AV = ${Q_ms}m^3/s $$
         $$Q = AV = ${Q_ls}lit/s $$
      </p>
      <br>
      <p style="text-align:left;" class="fs-2vw fb-600">
         Case : &#8544;&#8544;
      </p>
      <p>
         $$d_1 = d_2 = d_3 = ${d1}cm$$
         $$L_2 = L_3 = ${L2}m $$
         $$L_1 = L - L_2 = ${L1}m$$
      </p>
      <p style="text-align:left;">
         Now,
      </p>
      
      <p>
         $$
            \\begin{equation}
               H = \\frac{4fL_1v_1^2}{2gd_1} + \\frac{4fL_2v_2^2}{2gd_2} \\tag{equ. 1}
            \\end{equation}
         $$
      </p>
      <div id="act1-A1-A2-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$A_1 = \\frac{\\pi}{4}\\left(\\frac{d_1}{100}\\right)^2 = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-A1-inp' class='form-control fs-16px' /><span style="display:contents;"> m<sup>2</sup></span>
            </div>
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$A_2 = \\frac{\\pi}{4}\\left(\\frac{d_2}{100}\\right)^2 = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-A2-inp' class='form-control fs-16px' /><span style="display:contents;"> m<sup>2</sup></span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='act1_verify_A1_A2();' id='act1-vf-btn4'>Verify</button>
      </div>
   `;
    btn && btn.remove();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function act1_verify_A1_A2() {
    let A1_inp = (document.getElementById('act1-A1-inp'));
    let A2_inp = (document.getElementById('act1-A2-inp'));
    console.log(A1, A2);
    if (!verify_values(parseFloat(A1_inp.value), A1)) {
        A1_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        A1_inp.style.border = '1px solid #ced4da';
        A1_inp.disabled = true;
    }
    if (!verify_values(parseFloat(A2_inp.value), A2)) {
        A2_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        A2_inp.style.border = '1px solid #ced4da';
        A2_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let btn = (document.getElementById('act1-vf-btn4'));
    let div = (document.getElementById('act1-A1-A2-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$A_1 = \\frac{\\pi}{4}\\left(\\frac{d_1}{100}\\right)^2 = ${A1}m^2 $$
         $$A_2 = \\frac{\\pi}{4}\\left(\\frac{d_2}{100}\\right)^2 = ${A2}m^2 $$
      </p>
      <br>
      <p>
         $$Q_1 = 2Q_2$$
         $$\∴ \\ A_1v_1 = 2A_2v_2$$
         $$ v_2 = \\frac{A_1v_1}{2A_2} \\tag{equ. 2} $$
         $$\\text{using equ.2 in equ.1 we get} $$
      </p>
      
      
      <div id="act1-v1-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$v_1 = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-v1-inp' class='form-control fs-16px' /><span style="display:contents;"> m/s</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='act1_verify_v1();' id='act1-vf-btn5'>Verify</button>
      </div>
   `;
    btn && btn.remove();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function act1_verify_v1() {
    let v1_inp = (document.getElementById('act1-v1-inp'));
    console.log(v1);
    if (!verify_values(parseFloat(v1_inp.value), v1)) {
        v1_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        v1_inp.style.border = '1px solid #ced4da';
        v1_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let btn = (document.getElementById('act1-vf-btn5'));
    let div = (document.getElementById('act1-v1-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$v_1 = ${v1}m/s$$
      </p>
      <br>
            
      <div id="act1-Q1-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$Q_1 = A_1v_1 =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-Q1-inp' class='form-control fs-16px' /><span style="display:contents;"> m<sup>3</sup>/s</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='act1_verify_Q1();' id='act1-vf-btn6'>Verify</button>
      </div>
   `;
    btn && btn.remove();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function act1_verify_Q1() {
    let Q1_inp = (document.getElementById('act1-Q1-inp'));
    console.log(Q1);
    if (!verify_values(parseFloat(Q1_inp.value), Q1)) {
        Q1_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        Q1_inp.style.border = '1px solid #ced4da';
        Q1_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let btn = (document.getElementById('act1-vf-btn6'));
    let div = (document.getElementById('act1-Q1-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Q_1 = A_1v_1 = ${Q1}m^3/s$$
      </p>
      <br>
      <p style="text-align:left;">Increase in discharge</p>
      <div id="act1-inc-Q-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$Q_1 - Q =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-inc-Q-ms-inp' class='form-control fs-16px' /><span style="display:contents;"> m<sup>3</sup>/s</span>
            </div>
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$Q_1 - Q =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-inc-Q-ls-inp' class='form-control fs-16px' /><span style="display:contents;"> lit/s</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='act1_verify_inc_Q();' id='act1-vf-btn7'>Verify</button>
      </div>
   `;
    btn && btn.remove();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function act1_verify_inc_Q() {
    let inc_Q_ms_inp = (document.getElementById('act1-inc-Q-ms-inp'));
    let inc_Q_ls_inp = (document.getElementById('act1-inc-Q-ls-inp'));
    console.log(increase_Q_ms, increase_Q_ls);
    if (!verify_values(parseFloat(inc_Q_ms_inp.value), increase_Q_ms)) {
        inc_Q_ms_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inc_Q_ms_inp.style.border = '1px solid #ced4da';
        inc_Q_ms_inp.disabled = true;
    }
    if (!verify_values(parseFloat(inc_Q_ls_inp.value), increase_Q_ls)) {
        inc_Q_ls_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inc_Q_ls_inp.style.border = '1px solid #ced4da';
        inc_Q_ls_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let btn = (document.getElementById('act1-vf-btn7'));
    let div = (document.getElementById('act1-inc-Q-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Q_1 - Q = ${increase_Q_ms}m^3/s$$
         $$Q_1 - Q = ${increase_Q_ls}lit/s$$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='activity_completed();' id='act1-btn1'>Next</button>
   `;
    btn && btn.remove();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function activity_completed() {
    let btn = (document.getElementById('act1-btn1'));
    btn && btn.remove();
    alert('Experiment Completed');
}
activity1();
//# sourceMappingURL=activity1.js.map