<h2>1. FLOW THROUGH PIPES IN SERIES OR FLOW THROUGH COMPOUND PIPES</h2>

<p>
   &emsp; Pipes in series or compound pipes are defined as the pipes of different lengths and different diameters connected end to end (in series) to form a pipe line as shown in Fig. 1
</p>

$$
   \begin{aligned}
      \text{Let,} \qquad L_1,L_2,L_3 &= \text{length of pipes  1, 2 and 3 respectively} \\
      d_1,d_2,d_3 &= \text{diameter of pipes 1, 2, 3 respecively} \\ 
      V_1,V_2,V_3 &= \text{velocity of flow through pipes 1, 2, 3} \\
      f_1,f_2,f_3 &= \text{co-efficient of frictions for pipes 1, 2, 3} \\
      H &= \text{difference of water level in the two tanks.}
   \end{aligned}
$$

<img src="./images/th_img1.png" style="width:50%; margin:3% 20%">

$$ Fig.1 $$

<p>The discharge passing through each pipe is same.</p>

$$
   ∴ \qquad \qquad Q = A_1V_1 = A_2V_2 = A_3V_3
$$

<p>The difference in liquid surface levels is equal to the sum of the total head loss in the pipes.</p>

$$
   ∴ \ H = \frac{0.5V_1^2}{2g} + \frac{4f_1L_1V_1^2}{d_1 × 2g} + \frac{0.5V_2^2}{2g} + \frac{4f_2L_2V_2^2}{d_2 × 2g} + \frac{(V_2 - V_3)^2}{2g} + \frac{4f_3L_3V_3^2}{d_3\times2g} + \frac{V_3^2}{2g} \tag{equ. 1}
$$

<p>
   If minor losses are neglected, then above equation becomes as
</p>

$$
   H = \frac{4f_1L_1V_1^2}{d_1 × 2g} + \frac{4f_2L_2V_2^2}{d_2 × 2g} + \frac{4f_3L_3V_3^2}{d_3 × 2g} \tag{equ. 2}
$$

<p>If the co-efficient of friction is same for all pipes</p>

$$
   \text{i.e.,} \qquad \qquad f_1 = f_2= f_3 = f, \ \ \text{then equation(2) becomes as} \\
$$

$$
      H = \frac{4fL_1V_1^2}{d_1 × 2g} + \frac{4fL_2V_2^2}{d_2 × 2g} + \frac{4fL_3V_3^2}{d_3 × 2g} 
$$
$$
      H = \frac{4f}{2g}\left[\frac{L_1V_1^2}{d_1} + \frac{L_2V_2^2}{d_2}+\frac{L_3V_3^2}{d_3}\right] \tag{equ. 3}
$$

<br>

<h2>2. EQUIVALENT PIPE</h2>

<p>
   &emsp; This is defined as the pipe of uniform diameter having loss of head and discharge equal to the loss of head and discharge of a compound pipe consisting of several pipes of different lengths and diameters. The uniform diameter of the equivalent pipe is called equivalent size of the pipe. The length of equivalent pipe is equal to sum of lengths of the compound pipe consisting of different pipes.
</p>

$$
   \begin{aligned}
      \text{Let,} \qquad L_1 &= \text{length of pipe 1 and} \ \ d_1 = \text{diameter of pipe 1} \\
      L_2 &= \text{length of pipe 2 and} \ \ d_2 = \text{diameter of pipe 2} \\
      L_3 &= \text{length of pipe 3 and} \ \ d_3 = \text{diameter of pipe 3} \\
      H &= \text{total head loss} \\ 
      L &= \text{length of equivalent pipe} \\ 
      d &= \text{diameter of the equivalent pipe} \\
      \text{Then,} \qquad L &= L_1  +  L_2 + L_3
   \end{aligned}
$$

<p>Total head loss in the compound pipe, neglecting minor losses</p>

$$
   H =  \frac{4f_1L_1V_1^2}{d_1 × 2g} +  \frac{4f_2L_2V_2^2}{d_2 × 2g} + \frac{4f_3L_3V_3^2}{d_3 × 2g} \tag{equ. 3A}
$$

<p>Assuming</p>

$$
    f_1 = f_2  = f_3 = f
$$

<p>Discharge,</p>

$$
   Q=A_1V_1 = A_2V_2 = A_3V_3 = \frac{\pi}{4}d_1^2V_1 = \frac{\pi}{4}d_2^2V_2 = \frac{\pi}{4}d_3^2V_3
$$

$$
   ∴ \qquad \qquad V_1 = \frac{4Q}{πd_1^2},\ \ V_2 =  \frac{4Q}{πd_2^2},\ \ V_3 = \frac{4Q}{πd_3^2}
$$

<p>Substituting these values in equation (3A), we have</p>

$$
   H = \frac{4fL_1 × \left(\frac{4Q}{πd_1^2}\right)^2}{d_1 × 2g} + \frac{4fL_2 × \left(\frac{4Q}{πd_2^2}\right)^2}{d_2 × 2g} + \frac{4fL_3 × \left(\frac{4Q}{πd_3^2}\right)^2}{d_3 × 2g}
$$

$$
   H = \frac{4×16fQ^2}{\pi^2 \times 2g}\left[\frac{L_1}{d_1^5} + \frac{L_2}{d_2^5} +  \frac{L_3}{d_3^5}\right] \tag{equ. 4}
$$

<p>Head loss in the equivalent pipe,</p>

$$
   H = \frac{4f⋅ L ⋅ V^2 }{d × 2g} \left[\text{Taking same value of f as in compound pipe}\right]
$$

<p>where</p>

$$
   V = \frac{Q}{A} = \frac{Q}{\frac{\pi}{4}d^2} = \frac{4Q}{π d^2}
$$

$$
   ∴ \qquad \qquad H = \frac{4f⋅ L⋅ \left(\frac{4Q}{πd^2}\right)^2}{d × 2g} = \frac{4 × 16Q^2f}{π^2 × 2g}\left[\frac{L}{d^5}\right] \tag{equ. 5} 
$$

<p>
   Head loss in compound pipe and in equivalent pipe is same hence equating equations(4) and equation(5), we have
</p>

$$
   \frac{4 × 16fQ^2}{π^2×2g} \left[\frac{L_1}{d_1^5} + \frac{L_2}{d_2^5} + \frac{L_3}{d_3^5}\right]  = \frac{4 × 16Q^2f}{\pi^2 × 2g}\left[\frac{L}{d^5}\right]
$$

$$
   or \quad \frac{L_1}{d_1^5} + \frac{L_2}{d_2^5} + \frac{L_3}{d_3^5} = \frac{L}{d^5} \quad or \quad \frac{L}{d^5} =\frac{L_1}{d_1^5} + \frac{L_2}{d_2^5} + \frac{L_3}{d_3^5} \tag{equ. 6}
$$

<p>
   &emsp; Equation(6) is known as Dupuit's equation. In this equation L = L<sub>1</sub> + L<sub>2</sub> + L<sub>3</sub> and d<sub>1</sub>, d<sub>2</sub>  and d<sub>3</sub> are known. Hence  the equivalent size of the pipe, i.e., value of d can be obtained.
</p>

<br>

<h2>3. FLOW THROUGH PARALLEL PIPES</h2>

<p>
   &emsp; Consider a main pipe which divides into two or more branches as shown in Fig. 2 and again join together downstream to form a single pipe, then the branch pipes are said to be connected in parallel. The discharge through the main is increased by connecting pipes in parallel.
</p>

<img src="./images/th_img2.png" style="width:50%; margin:3% 20%">

$$ Fig.2 $$

<p>The rate of flow in the main pipe is equal to the sum of rate of flow through branch pipes. Hence  from Fig. 2, we have</p>

$$ Q = Q_1 + Q_2 \tag{equ. 7}$$

<p>
In this, arrangement, the loss of head for each branch pipe is same. <br>
&therefore; Loss of head for branch pipe 1 = Loss of head for branch pipe 2
</p>

<br>

$$
   \text{or} \qquad \qquad \frac{4f_1L_1V_1^2}{d_1 × 2g} = \frac{4f_2L_2V_2^2}{d_2 × 2g} \tag{equ. 8}
$$

<br>

$$
   \text{If} \qquad \qquad f_1 = f_2, \quad \text{then} \quad \frac{L_1V_1^2}{d_1 × 2g} = \frac{L_2V_2^2}{d_2 × 2g} \tag{equ. 9}
$$

<h2>4. FLOW THROUGH BRANCHED PIPES</h2>

<p>
   &emsp; When three or more reservoirs are connected by means of pipes, having one or more junctions, the system is called a branching pipe system. Fig. 11.26 shows three reservoirs at different levels connected to a single junction, by means of pipes which are called branched pipes. The lengths, diameters and co-efficient of friction of each pipes is given. It is required to find the discharge and direction of flow in each pipe. The basic equations used for solving such problems are :
   <ol>
      <li>
         <strong>Continuity equation</strong> which means the inflow of fluid at the junction should be equal to the outflow of fluid
      </li>
      <li>
         <strong>Bernoulli's equation</strong> and
      </li>
      <li>
         <strong>Darcy-Weisbach equation</strong>
      </li>
   </ol>

   &emsp; Also it is assumed that reservoirs are very large and the water surface levels in the reservoirs are constant so that steady conditions exist in the pipes. Also minor losses are assumed very small. The flow from reservoir A takes place to junction D. The flow from junction D is towards reservoirs C. Now the flow from junction D towards reservoir B will take place only when piezometric head at D (which is equal to P<sub>D</sub>/&rho;g  + Z<sub>D</sub>) is more than the Piezometric head at B (i.e., Z<sub>B</sub>). Let us consider that flow is from D to reservoir B
</p>

<img src="./images/th_img3.png" style="width:50%; margin:3% 20%">

$$ Fig.3 $$

<p>
   For flow from A to D from Bernoulli's equation 
</p>

$$
   Z_A = Z_D  + \frac{P_D}{ρg} + h_{f_1} \tag{i}
$$

<p>
   For flow from D to B from Bernoulli's equation  
</p>

$$
   Z_D + \frac{P_D}{ρg} = Z_B + h_{f_2} \tag{ii}
$$

<p>
   For flow from D to C from Bernoulli's equation 
</p>

$$
   Z_D + \frac{P_D}{ρg} = Z_C + h_{f_3} \tag{iii}
$$

<p>
   From continuity equation, <br>
   Discharge through AD = Discharge through DB + Discharge through DC
</p>

$$
   ∴ \qquad \qquad \frac{π}{4}d_1^2V_1 = \frac{\pi}{4}d_2^2 × V_2 + \frac{π}{4}d_3^2V_3
$$

$$
   \text{or} \qquad \qquad d_1^2V_1 = d_2^2V_2 +  d_3^2V_3 \tag{iv}
$$

<p>
   There are four unknowns i.e., V<sub>1</sub>, V<sub>2</sub>, V<sub>3</sub>  and P<sub>D</sub>/&rho;g and there are four equations (i), (ii), (iii) and (iv). <br>
   Hence unknowns can be calculated.
</p>