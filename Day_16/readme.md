it's a myth now
-> Virtual DOM react mein use nhi hota.
-> In pure JS Code hota hain, Wo Dubara se re-render Karta hai poore code ko, and React sirf kisi Paricular Component ko Karta hai re render


Javascript mei dikkat kya hoti hain??
Suppose we have a btn while clickin on it , it changes body bagroundColor to red, fontsize to 20px , padding 10px, and margin 10px . JS first cahnges color then fontSize then padding and then margin . Js changes it one by one . But we want all these changes be done in sigle time

Reflow:- konsa element kis position pe aayega and uska size kitna hoga
Repaint:- har pixel ke andar color bharna
we have DOM tree but have we keep it in UI so that user can see this is done by reflow and repaint
reflow and repaint is expensive operation khaskar reflow

when we change background color to red then reflow and repaint operation runs
again when we change the fontsize from 10 to 20px again reflow and repaint is calculated
then we have applied padding then it recalculates reflow and repaint
then we have applied margin then it again calculates reflow and repaint
js has calculated 4 times reflow and repaint

can we bring all these 4 together so that reflow and repaint is calculated only once
-> React bundle these 4 changes and calculate reflow and repaint only once(React biggest advantage)
-> It is poosible in js also as there is concept of fragmentation in JS


how can it execute these 4 statament together as js is single threaded?
-> bhale hi hmne js ko charo statement ek saath laake de diya but execute to ek ek krke hi karega to reflow and repaint 4 baar calculate hogi
-> imagine our code like a frame, if we have 60fps then to we have 1/60 sec time to move to another frame , so we give all these 4 statement to one frame and it excutes it in 1/60 sec so that we can see our changes in the next frame 


in js if we write code like:-
body.style.bgColor = red
body.style.fontsize = 30px
body.style.padding = 10px
body.style.margin = 10px 
Har ek statement ke baad browser ek reflow & repaint trigger karega, jisse total 4 baar expensive operations honge.
but React state updates aur DOM changes ko batch karta hai. Matlab, multiple updates ko ek hi render cycle mein merge karke ek hi reflow/repaint trigger karta hai
JavaScript mein fragmentation ya batching ka concept use karke aap manually bhi DOM updates ko requestAnimationFrame ke through agle frame ke liye schedule kar sakte ho. Is tarah, jitne bhi changes ho rahe hain, woh ek hi frame mein render honge aur user ko final consolidated result dikhai dega.

// react autmoatically insbko batch krna hai but js mei hme extra code likhne pdte hain (fragmentation concept)



VIRTUAL DOM
When the code is executed once React create a copy of Real DOM, It is Known as Virtual DOM 
it is smaller in size of real DOM so we can say it is light weight
now suppose we clicked a btn and we have to execute these four stataements
body.style.bgColor = red
body.style.fontsize = 30px
body.style.padding = 10px
body.style.margin = 10px 

react creates another virtual DOM and executes those 4 stataments and update this Virtual DOM  and then it check the difference in previously created virtual DOM(i.e created initially when code is executed once) and in this Virtual DOM or we can say compare this Virtual DOM with initially created Virtual DOM (Diffing Algorithm) and sees in which nodes changes occurred, then create a batch of these changes and send it to Real DOM 
when it is sending to real DOM react sends it in a fragement to the js





// Why React need a unique key in each child component??
// suppose a parent component has 4 child and each child is executing a <Add /> function on clicking that child component. we have four Add function , now the question is which Add function should get called on clicking the child component how can it determine which Add to be called
so for this we need key so that we can uniquely identify these child comnponents now it knows while calling add which will run 
// state gets attached to the key 

lets discuss another reason 
suppose at this time, hmne key attach nhikiye hain
<h2>Milk</h2>
<h2>Sugar</h2>
<h2>Chai</h2>

we add a samosa in the list
<h2>Samosa</h2>
<h2>Milk</h2>
<h2>Sugar</h2>
<h2>Chai</h2>

// after diffing algo works(compare node) and then virtual DOm are sending changes to the real DOM like
purane wale Milk ko hata do, uske jagah samosa add kro
sugar wale node ko hatao, milk wala node ko attach karo
Chai node ko destroy karo, Aur sugar wale node ko add kro
chai node ko firse attach karo

but actually we are not doing it, we have just added samosa in front
ideal update should be Samosa wala node create karo, starting mein add kar do baaki node ko ek ek position khiska do 

Question is kya farak padta hai at the end kaam to wahi ho rha hai??
-> farak padta hao
. pahle to milk wala memory release karo fir samose ke liye memmory allocate karo
. sugar wala memory release karo fir milk ke liye naya memory allocate kro
. Chai wala memory release karo fir Sugar ke liye naya memory allocate kro
. Chai ke liye naya memory allocate kro
hamne 4 naya memory allocation kiya and 3 release kiya . This is an Expensive operation 

instead of it we can do
. Samose ke liya naya memory allocate karo and puarane wale ko ek-ek position khiska do
This work is done by key.

// how diffing algo works when key is attached 
<h2 key="milk">Milk</h2>
<h2 key="sugar">Sugar</h2>
<h2 key="chai">Chai</h2>

we add a samosa in the list
<h2 key="samosa">Samosa</h2>
<h2 key="milk">Milk</h2>
<h2 key="sugar">Sugar</h2>
<h2 key="chai">Chai</h2>

first it sees milk but it doesn't compare it with samosa as the key is different so it is another node then it create a node for samosa in real DOM
fir ye milk ko compare karega milk se as key is same and sees there is not any diiference
fir ye sugar ko compare karega sugar se as key is same and sees there is not any diiference
fir ye chai ko compare karega chai se as key is same and sees there is not any diiference
