/* ===== EDIT HERE: all editable content lives in CONFIG ===== */
const CONFIG = {
  email: "saydulyt07@gmail.com",      // replace with your real email
  web3formsKey: "",                      // optional: paste a Web3Forms access key so messages go straight to your inbox
  cv: "",                                // path or URL of your CV file; empty = the Download CV button stays hidden
  social: [                              // items with an empty url are hidden
    {label:"GitHub",   url:"https://github.com/sayedul-islam"},
    {label:"Behance",  url:"https://www.behance.net/sayedulislam"},
    {label:"LinkedIn", url:"https://www.linkedin.com/in/sayedul-islam-758532269/"},
    {label:"Dribbble", url:""},
    {label:"Fiverr",   url:"https://www.fiverr.com/sayedul07/buying?source=avatar_menu_profile"},
    {label:"Upwork",   url:""}
  ],
  /* level = your own honest self-assessment, 0 to 100. Change these to match where you really are. */
  skills: [
    {name:"Figma",          abbr:"Fg", level:75},
    {name:"UI/UX Design",   abbr:"Ux", level:70},
    {name:"Photoshop",      abbr:"Ps", level:65},
    {name:"Graphic Design", abbr:"Gd", level:70},
    {name:"Artificial intelligence (Ai)", abbr:"Ai", level:60},
    {name:"HTML",           abbr:"H",  level:70},
    {name:"CSS",            abbr:"C",  level:65},
    {name:"JavaScript",     abbr:"JS", level:40}
  ],
  education: [
    {when:"2023", t:"HSC (Higher Secondary Certificate)", d:"Sitakunda Degree College, Chattogram. Completed."},
    {when:"2021", t:"SSC (Secondary School Certificate)", d:"Captain Shamsul Huda High School, Chattogram. Completed."}
  ],
  learning: [
    {when:"2026 · Learning", t:"Web Graphics Design", d:"Training in Feni."},
    {when:"Learning", t:"Artificial intelligence (Ai)", d:"Training in Feni."},
    {when:"Learning", t:"Figma", d:"Training in Feni."},
    {when:"Self-taught", t:"Web Design", d:"YouTube tutorials and the W3Schools documentation."}
  ],
  process: [
    {t:"Understand the brief", d:"We agree on the goal, the audience and what success looks like before any pixels move."},
    {t:"Research and explore", d:"I look at references, then sketch several directions instead of just one."},
    {t:"Design and refine", d:"The strongest direction becomes a full design, improved through your feedback."},
    {t:"Deliver and improve", d:"You receive organised files, and I stay available for revisions after handoff."}
  ],
  services: [
    {name:"UI/UX Design", text:"Clear, usable app and product interfaces, from flows to polished screens in Figma."},
    {name:"Website Design", text:"Responsive website layouts designed around your content and your visitors’ goals."},
    {name:"Graphic Design", text:"Social media, marketing and print visuals that look consistent and professional."},
    {name:"Logo and Brand Identity", text:"A logo and a simple visual system you can use across every channel."}
  ],
  /* cover / shots = image paths. type = "Personal concept" | "Practice project" | "Client project".
     problem / role / process / outcome are optional: leave "" to hide them. url = optional live link. */
  projects: [
    {id:"fittrack-pro", title:"FitTrack Pro", cat:"UI/UX Design", type:"Personal concept", url:"",
     cover:"images/fittrack-cover.webp",
     shots:["images/fittrack-splash.webp","images/fittrack-onboarding-1.webp","images/fittrack-onboarding-2.webp","images/fittrack-onboarding-3.webp"],
     desc:"A fitness app concept with a splash screen and three onboarding screens.",
     overview:"FitTrack Pro is a fitness companion app concept. The onboarding introduces workout tracking, personalised diet plans and progress monitoring.",
     problem:"", role:"", process:"", outcome:""},
    {id:"marigold-cafe", title:"Marigold Café", cat:"Branding", type:"Personal concept", url:"",
     cover:"images/marigold-cafe-cover.webp",
     shots:["images/marigold-cafe-1.webp","images/marigold-cafe-2.webp","images/marigold-cafe-3.webp"],
     desc:"A brand identity concept for a café: logo, colours, typography and packaging.",
     overview:"Marigold Café is a brand identity concept built around a marigold flower that doubles as a cup seen from above.",
     problem:"", role:"", process:"", outcome:""},
    {id:"bean-bliss", title:"Bean Bliss Coffee Shop", cat:"Branding", type:"Personal concept", url:"",
     cover:"images/bean-bliss-cover.webp",
     shots:["images/bean-bliss-1.webp","images/bean-bliss-2.webp","images/bean-bliss-3.webp"],
     desc:"A coffee shop identity concept: logo, colours, typography and packaging.",
     overview:"Bean Bliss is a brand identity concept built around warm brown, cream and olive green.",
     problem:"", role:"", process:"", outcome:""},
    {id:"brightpath-academy", title:"BrightPath Academy", cat:"Branding", type:"Personal concept", url:"",
     cover:"images/brightpath-academy-cover.webp",
     shots:["images/brightpath-academy-1.webp","images/brightpath-academy-2.webp","images/brightpath-academy-3.webp"],
     desc:"A logo and stationery concept for an education brand, in navy and gold.",
     overview:"BrightPath Academy is a logo concept that combines a book, a graduation cap and a path.",
     problem:"", role:"", process:"", outcome:""},
    {id:"velora", title:"Velora Clothing and Fashion", cat:"Branding", type:"Personal concept", url:"",
     cover:"images/velora-cover.webp",
     shots:["images/velora-1.webp","images/velora-2.webp","images/velora-3.webp"],
     desc:"A luxury fashion brand concept in black and gold.",
     overview:"Velora is a brand identity concept with a monogram logo for a premium clothing label.",
     problem:"", role:"", process:"", outcome:""},



     {id:"sayedul", title:"Sayedul Islam", cat:"Branding", type:"Personal concept", url:"",
     cover:"images/velora-cover.webp",
     shots:["images/velora-1.webp","images/velora-2.webp","images/velora-3.webp"],
     desc:"A luxury fashion brand concept in black and gold.",
     overview:"Velora is a brand identity concept with a monogram logo for a premium clothing label.",
     problem:"", role:"", process:"", outcome:""}


     
  ]
};
/* ===== end of editable content ===== */

const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
document.documentElement.classList.add("js");
const hasEmail=CONFIG.email && !CONFIG.email.includes("example.com");

/* image with graceful fallback */
const img=(src,label,alt)=>src?`<div class="thumb"><img src="${esc(src)}" alt="${esc(alt||label)}" loading="lazy" onerror="this.parentNode.textContent='${esc(label)}'"></div>`:`<div class="thumb" role="img" aria-label="Placeholder: ${esc(label)}">${esc(label)}</div>`;

/* social, contact info, cv */
const GH='<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>';
const socialHTML=CONFIG.social.filter(s=>s.url).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${s.label==="GitHub"?GH:""}${esc(s.label)}</a></li>`).join("");
$("#social").innerHTML=socialHTML; $("#social2").innerHTML=socialHTML;
if(hasEmail){
  const m=$("#mail"); m.href="mailto:"+CONFIG.email; m.textContent=CONFIG.email; $("#mail-row").hidden=false;
  const am=$("#about-mail"); am.href="mailto:"+CONFIG.email; am.textContent=CONFIG.email;
}
if(CONFIG.cv){const cv=$("#cv");cv.href=CONFIG.cv;cv.setAttribute("download","");cv.hidden=false}
$("#year").textContent=new Date().getFullYear();

/* skills, process, services */
const lv=n=>Math.min(100,Math.max(0,Math.round(+n||0)));
$("#skills-list").innerHTML=CONFIG.skills.map(s=>`<li><span class="ab" aria-hidden="true">${esc(s.abbr||s.name[0])}</span><div class="sk"><div class="sk-h"><b>${esc(s.name)}</b><em>${lv(s.level)}%</em></div><div class="bar" role="img" aria-label="${esc(s.name)} ${lv(s.level)} percent"><i style="--w:${lv(s.level)}%"></i></div></div></li>`).join("");
const tl=a=>a.map(x=>`<li><small>${esc(x.when)}</small><h3>${esc(x.t)}</h3><p>${esc(x.d)}</p></li>`).join("");
$("#edu").innerHTML=tl(CONFIG.education); $("#learn").innerHTML=tl(CONFIG.learning);
$("#steps").innerHTML=CONFIG.process.map(p=>`<li><h3>${esc(p.t)}</h3><p>${esc(p.d)}</p></li>`).join("");
const sel=$("#f-service");
$("#svc-grid").innerHTML=CONFIG.services.map((s,i)=>`<div class="svc rv"><span class="n serif">0${i+1}</span><h3>${esc(s.name)}</h3><p>${esc(s.text)}</p><a href="#contact" data-svc="${i}">Request this</a></div>`).join("");
CONFIG.services.forEach(s=>sel.add(new Option(s.name,s.name)));
$$("[data-svc]").forEach(a=>a.addEventListener("click",()=>{sel.value=CONFIG.services[a.dataset.svc].name}));

/* projects */
$("#proj-grid").innerHTML=CONFIG.projects.map(p=>`<article class="card rv">${img(p.cover,"Project cover",p.title)}
 <div class="card-b"><div class="tags"><span class="tag">${esc(p.cat)}</span><span class="tag plain">${esc(p.type)}</span></div>
 <h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p><button class="btn ghost" data-id="${esc(p.id)}" aria-label="View details: ${esc(p.title)}">View details</button></div></article>`).join("");
$$("[data-id]").forEach(b=>b.onclick=()=>openProject(b.dataset.id));

const dlg=$("#dlg");
function openProject(id){
  const L=CONFIG.projects, i=L.findIndex(p=>p.id===id); if(i<0)return;
  const p=L[i], prev=L[(i-1+L.length)%L.length], next=L[(i+1)%L.length];
  const row=(h,t)=>t?`<h3>${h}</h3><p>${esc(t)}</p>`:"";
  $("#d-in").innerHTML=`<div class="d-top"><div><div class="tags"><span class="tag">${esc(p.cat)}</span><span class="tag plain">${esc(p.type)}</span></div>
   <h2 id="d-title" style="margin-top:14px;font-size:clamp(30px,5vw,48px)">${esc(p.title)}</h2></div><button class="x" id="x" aria-label="Close project">×</button></div>
  <div class="d-cover">${p.cover?`<img src="${esc(p.cover)}" alt="${esc(p.title)}">`:""}</div>
  <div class="d-text">${row("Overview",p.overview)}${row("Objective",p.problem)}${row("My role",p.role)}${row("Process",p.process)}${row("Outcome",p.outcome)}
  ${p.url?`<p><a href="${esc(p.url)}" target="_blank" rel="noopener">View the live project</a></p>`:""}</div>
  ${p.shots&&p.shots.length?`<div class="shots">${p.shots.map((s,n)=>img(s,"Screenshot "+(n+1),p.title+" screenshot "+(n+1))).join("")}</div>`:""}
  <div class="pn"><button class="btn ghost" id="pv">Previous: ${esc(prev.title)}</button><button class="btn ghost" id="nx">Next: ${esc(next.title)}</button></div>
  <div style="margin-top:24px"><a class="btn" href="#contact" id="d-cta">Discuss a similar project</a></div>`;
  $("#x").onclick=()=>dlg.close();
  $("#pv").onclick=()=>{openProject(prev.id);dlg.scrollTop=0};
  $("#nx").onclick=()=>{openProject(next.id);dlg.scrollTop=0};
  $("#d-cta").onclick=e=>{e.preventDefault();dlg.close();const m=p.cat==="Branding"?"Logo and Brand Identity":p.cat;if(CONFIG.services.some(s=>s.name===m))sel.value=m;document.getElementById("contact").scrollIntoView()};
  if(!dlg.open)dlg.showModal();
}
dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});

/* contact form: validates, then sends via Web3Forms if a key is set, otherwise opens the visitor's email app */
const form=$("#form"), status=$("#status"), send=$("#send");
const rules={"f-name":v=>v.trim()?"":"Enter your name.","f-email":v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)?"":"Enter a valid email address.","f-service":v=>v?"":"Choose a service.","f-msg":v=>v.trim().length>=10?"":"Describe your project in at least a sentence."};
function check(id){const el=document.getElementById(id),m=rules[id](el.value);$(`[data-for="${id}"]`).textContent=m;m?el.setAttribute("aria-invalid","true"):el.removeAttribute("aria-invalid");return !m}
Object.keys(rules).forEach(id=>document.getElementById(id).addEventListener("blur",()=>check(id)));
form.addEventListener("submit",async e=>{
  e.preventDefault(); status.hidden=false;
  if(!Object.keys(rules).map(check).every(Boolean)){status.textContent="Some fields need attention. Fix the highlighted fields and send again.";$("[aria-invalid]")?.focus();return}
  const d={name:$("#f-name").value,email:$("#f-email").value,service:sel.value,msg:$("#f-msg").value};
  if(CONFIG.web3formsKey){
    send.disabled=true; status.textContent="Sending…";
    try{
      const r=await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},
        body:JSON.stringify({access_key:CONFIG.web3formsKey,subject:"Portfolio inquiry: "+d.service,name:d.name,email:d.email,message:d.msg+"\n\nService: "+d.service})});
      const j=await r.json(); if(!j.success)throw new Error(j.message||"Request failed");
      status.textContent="Thank you, your message was sent. I’ll reply by email."; form.reset();
    }catch(err){status.textContent="The message could not be sent"+(hasEmail?". Please email "+CONFIG.email+" directly.":". Please try again later.")}
    send.disabled=false; return;
  }
  if(!hasEmail){status.textContent="Inquiries can’t be sent yet because the site owner hasn’t set a contact email.";return}
  const body=`Name: ${d.name}\nEmail: ${d.email}\nService: ${d.service}\n\n${d.msg}`;
  location.href=`mailto:${CONFIG.email}?subject=${encodeURIComponent("Project inquiry: "+d.service)}&body=${encodeURIComponent(body)}`;
  status.textContent="Your email app should now open with the message ready. Press Send there to deliver it. If nothing opens, write to "+CONFIG.email+" directly.";
});

/* nav: mobile menu, scroll state, active link, back-to-top, reveal */
const burger=$("#burger"),links=$("#links");
const setMenu=o=>{links.classList.toggle("open",o);burger.setAttribute("aria-expanded",o);burger.textContent=o?"Close":"Menu";burger.setAttribute("aria-label",o?"Close menu":"Open menu");document.body.style.overflow=o?"hidden":""};
burger.onclick=()=>setMenu(!links.classList.contains("open"));
$$("a",links).forEach(a=>a.addEventListener("click",()=>setMenu(false)));
document.addEventListener("keydown",e=>{if(e.key==="Escape")setMenu(false)});
const bar=$("#bar"),tt=$("#to-top");
const onScroll=()=>{bar.classList.toggle("scrolled",scrollY>30);tt.classList.toggle("show",scrollY>700)};
addEventListener("scroll",onScroll,{passive:true}); onScroll();
tt.onclick=()=>scrollTo({top:0});
const nav=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting)$$("a:not(.btn)",links).forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+en.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
["home","about","skills","projects","education","process","services","contact"].forEach(id=>nav.observe(document.getElementById(id)));
const rv=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add("in");rv.unobserve(en.target)}}),{threshold:.12});
$$(".rv").forEach(el=>rv.observe(el));
