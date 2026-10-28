/* ===== EDIT HERE: all site content lives in this CONFIG ===== */
const CONFIG = {
  email: "sayedulyt07@gmail.com",          // replace with your real email
  cv: "",                                   // URL of your CV file; empty = button jumps to contact
  images: { portrait: "portrait.jpg", about: "portrait.jpg" },  // file paths or URLs; empty = placeholder
  social: [                                 // add real URLs; items with empty url are hidden
    {label:"Behance", url:""},{label:"Dribbble", url:""},{label:"LinkedIn", url:""},{label:"Fiverr", url:""}
  ],
  skills: ["Figma","UI/UX Design","Photoshop","Graphic Design","HTML","CSS","JavaScript"],
  services: [
    {name:"UI/UX Design", text:"Clear, usable app and product interfaces, from flows to polished screens in Figma."},
    {name:"Website Design", text:"Responsive website layouts designed around your content and your visitors’ goals."},
    {name:"Graphic Design", text:"Social media, marketing and print visuals that look consistent and professional."},
    {name:"Logo and Brand Identity", text:"A logo and a simple visual system you can use across every channel."}
  ],
  /* cover/shots: image URLs or data: URIs. type: "Personal concept" | "Practice project" | "Client project" */
  projects: [
    {id:"sample-fitness-app", title:"Fitness tracker app", cat:"UI/UX Design", type:"Personal concept", date:"2026", tools:["Figma"], url:"", cover:"fittrack.jpg", shots:[],
     desc:"Sample entry: a mobile app concept for planning workouts and tracking progress.",
     overview:"A concept exploring how a workout app can show progress without overwhelming the user.", problem:"Replace this with the problem you set out to solve.", role:"Replace with your role, for example UX research, UI design, prototyping.", process:"Replace with your steps: research, wireframes, visual design, testing.", outcome:"Replace with the real outcome. Do not add numbers you can’t prove."},
    {id:"sample-agency-site", title:"Studio website", cat:"Website Design", type:"Practice project", date:"2026", tools:["Figma","HTML","CSS"], url:"", cover:"", shots:[],
     desc:"Sample entry: a landing page layout for a small creative studio.",
     overview:"A practice website design focused on typography and clear calls to action.", problem:"Replace this with the objective.", role:"Replace with your role.", process:"Replace with your process.", outcome:"Replace with the final outcome."},
    {id:"sample-cafe-brand", title:"Café brand identity", cat:"Branding", type:"Personal concept", date:"2026", tools:["Photoshop","Figma"], url:"", cover:"", shots:[],
     desc:"Sample entry: logo, colours and packaging for a fictional café.",
     overview:"A fictional brand created to practise logo design and building a colour and type system.", problem:"Replace this with the objective.", role:"Replace with your role.", process:"Replace with your process.", outcome:"Replace with the final outcome."},
    {id:"sample-poster-set", title:"Event poster series", cat:"Graphic Design", type:"Practice project", date:"2026", tools:["Photoshop"], url:"", cover:"logo.jpg", shots:[],
     desc:"Sample entry: a set of posters exploring bold type and a limited palette.",
     overview:"A poster series practising hierarchy and composition.", problem:"Replace this with the objective.", role:"Replace with your role.", process:"Replace with your process.", outcome:"Replace with the final outcome."}
  ]
};
/* ===== end of editable content ===== */

const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const CATS=["All","UI/UX Design","Website Design","Graphic Design","Branding"];
let cat="All", current=null;

function ph(src,label,alt){
  return src ? `<div class="ph has"><img src="${esc(src)}" alt="${esc(alt||label)}" loading="lazy" onerror="this.parentNode.className='ph';this.parentNode.textContent='${esc(label)}'"></div>`
             : `<div class="ph" role="img" aria-label="Placeholder: ${esc(label)}">${esc(label)}</div>`;
}
/* static placeholders */
$$("[data-img]").forEach(el=>{el.outerHTML=ph(CONFIG.images[el.dataset.img],el.dataset.label,"Sayedul Islam")});

/* filters + grid */
const filters=$("#filters");
CATS.forEach(c=>{const b=document.createElement("button");b.className="chip";b.textContent=c;b.setAttribute("aria-pressed",c===cat);b.onclick=()=>{cat=c;$$(".chip").forEach(x=>x.setAttribute("aria-pressed",x===b));renderGrid()};filters.append(b)});
const visible=()=>CONFIG.projects.filter(p=>cat==="All"||p.cat===cat);
function renderGrid(){
  const list=visible(), g=$("#grid");
  if(!list.length){g.innerHTML=`<p class="empty">No projects in ${esc(cat)} yet. Check back soon, or <a href="#contact">tell me about yours</a>.</p>`;return}
  g.innerHTML=list.map(p=>`<button class="card" data-id="${esc(p.id)}" aria-label="Open project: ${esc(p.title)}">${ph(p.cover,"Project cover · 4:3",p.title)}
   <div class="meta"><span>${esc(p.cat)}</span><span class="tag">${esc(p.type)}</span></div><h3>${esc(p.title)}</h3><p class="mute">${esc(p.desc)}</p></button>`).join("");
  $$(".card",g).forEach(c=>c.onclick=()=>openProject(c.dataset.id));
}
renderGrid();

/* project dialog */
const dlg=$("#dlg");
function openProject(id){
  const list=visible(); const i=list.findIndex(p=>p.id===id); if(i<0)return;
  const p=list[i], prev=list[(i-1+list.length)%list.length], next=list[(i+1)%list.length]; current=id;
  const row=(h,t)=>t?`<div><h3>${h}</h3><p class="mute">${esc(t)}</p></div>`:"";
  $("#d-in").innerHTML=`<div class="d-top"><div><span class="tag">${esc(p.type)}</span><h2 id="d-title" style="margin-top:14px;font-size:clamp(30px,5vw,52px)">${esc(p.title)}</h2></div><button class="x" id="x" aria-label="Close project">×</button></div>
  <div class="d-cover">${ph(p.cover,"Cover image · 16:9",p.title)}</div>
  <dl class="facts"><div><dt>Category</dt><dd>${esc(p.cat)}</dd></div><div><dt>Date</dt><dd>${esc(p.date)}</dd></div><div><dt>Tools</dt><dd>${esc(p.tools.join(", "))}</dd></div>${p.url?`<div><dt>Link</dt><dd><a href="${esc(p.url)}" target="_blank" rel="noopener">View project</a></dd></div>`:""}</dl>
  <div class="d-cols">${row("Overview",p.overview)}${row("Objective",p.problem)}${row("My role",p.role)}${row("Design process",p.process)}</div>
  <div class="shots">${(p.shots.length?p.shots:[null,null,null]).map((s,n)=>ph(s,"Screenshot "+(n+1)+" · 3:4",p.title+" screenshot")).join("")}</div>
  <div class="d-cols">${row("Final outcome",p.outcome)}</div>
  <div class="pn"><button class="btn ghost" id="pv">Previous: ${esc(prev.title)}</button><button class="btn ghost" id="nx">Next: ${esc(next.title)}</button></div>
  <div style="margin-top:28px"><a class="btn" href="#contact" id="d-cta">Discuss a similar project</a></div>`;
  $("#x").onclick=()=>dlg.close();
  $("#pv").onclick=()=>{openProject(prev.id);dlg.scrollTop=0};
  $("#nx").onclick=()=>{openProject(next.id);dlg.scrollTop=0};
  $("#d-cta").onclick=e=>{e.preventDefault();dlg.close();$("#f-service").value=CONFIG.services.find(s=>s.name===p.cat||(p.cat==="Branding"&&s.name.startsWith("Logo")))?.name||"";document.getElementById("contact").scrollIntoView()};
  if(!dlg.open)dlg.showModal();
}
dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});

/* services */
const sel=$("#f-service");
$("#svc-list").innerHTML=CONFIG.services.map((s,i)=>`<div class="svc"><h3>${esc(s.name)}</h3><p class="mute">${esc(s.text)}</p><a class="btn ghost" href="#contact" data-svc="${i}">Request this</a></div>`).join("");
CONFIG.services.forEach(s=>sel.add(new Option(s.name,s.name)));
$$("[data-svc]").forEach(a=>a.addEventListener("click",()=>{sel.value=CONFIG.services[a.dataset.svc].name;sel.dispatchEvent(new Event("change"))}));

/* about, contact info */
$("#skills").innerHTML=CONFIG.skills.map(s=>`<li>${esc(s)}</li>`).join("");
const cv=$("#cv");
if(CONFIG.cv){cv.href=CONFIG.cv;cv.setAttribute("download","");}
else{cv.removeAttribute("href");cv.setAttribute("aria-disabled","true");cv.textContent="CV coming soon"}
const mail=$("#mail");mail.href="mailto:"+CONFIG.email;mail.textContent=CONFIG.email;
$("#social").innerHTML=CONFIG.social.filter(s=>s.url).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`).join("");
$("#year").textContent=new Date().getFullYear();

/* form: validates, then opens the visitor's email app with the message filled in */
const form=$("#form"), status=$("#status");
const rules={ "f-name":v=>v.trim()?"":"Enter your name.", "f-email":v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)?"":"Enter a valid email address, like name@example.com.", "f-service":v=>v?"":"Choose the service you need.", "f-msg":v=>v.trim().length>=10?"":"Describe your project in at least a sentence." };
function check(id){const el=document.getElementById(id),m=rules[id](el.value);$(`[data-for="${id}"]`).textContent=m;m?el.setAttribute("aria-invalid","true"):el.removeAttribute("aria-invalid");return !m}
Object.keys(rules).forEach(id=>document.getElementById(id).addEventListener("blur",()=>check(id)));
form.addEventListener("submit",e=>{
  e.preventDefault();
  const ok=Object.keys(rules).map(check).every(Boolean);
  status.hidden=false;
  if(!ok){status.textContent="Some fields need attention. Fix the highlighted fields and send again.";$("[aria-invalid]")?.focus();return}
  if(!CONFIG.email||CONFIG.email.includes("example.com")){status.textContent="Inquiries can’t be sent yet because the site owner hasn’t set a contact email.";return}
  const body=`Name: ${$("#f-name").value}\nEmail: ${$("#f-email").value}\nService: ${sel.value}\nBudget: ${$("#f-budget").value||"Not specified"}\n\n${$("#f-msg").value}`;
  location.href=`mailto:${CONFIG.email}?subject=${encodeURIComponent("Project inquiry: "+sel.value)}&body=${encodeURIComponent(body)}`;
  status.textContent="Your email app should now open with the message ready. Press Send there to deliver it. If nothing opens, write to "+CONFIG.email+" directly.";
});

/* nav: mobile menu, scroll state, active link, back-to-top */
const burger=$("#burger"),links=$("#links");
const setMenu=o=>{links.classList.toggle("open",o);burger.setAttribute("aria-expanded",o);burger.textContent=o?"Close":"Menu";burger.setAttribute("aria-label",o?"Close menu":"Open menu");document.body.style.overflow=o?"hidden":""};
burger.onclick=()=>setMenu(!links.classList.contains("open"));
$$("a",links).forEach(a=>a.addEventListener("click",()=>setMenu(false)));
document.addEventListener("keydown",e=>{if(e.key==="Escape")setMenu(false)});
const bar=$("#top-bar"),tt=$("#to-top");
addEventListener("scroll",()=>{bar.classList.toggle("scrolled",scrollY>20);tt.classList.toggle("show",scrollY>700)},{passive:true});
tt.onclick=()=>scrollTo({top:0});
const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting)$$("a:not(.btn)",links).forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+en.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
["work","services","about","contact"].forEach(id=>io.observe(document.getElementById(id)));
