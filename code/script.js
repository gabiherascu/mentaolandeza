/* ============ POZELE TALE ============
   1) Pune pozele într-un folder "img" lângă index.html.
   2) Scoate // din fața rândului și schimbă numele fișierului.
   Dacă un produs nu are poză, se folosește ilustrația generată. */
const IMG={
 // 'Mentă':'img/menta.jpg',
 // 'Roșii':'img/rosii.jpg',
 // 'Busuioc':'img/busuioc.jpg',
};
/* Galeria: dacă pui poze aici, înlocuiesc ilustrațiile din galerie. */
const FOTO=[
 // {src:'img/poza1.jpg',t:'Serele dimineața'},
 // {src:'img/poza2.jpg',t:'Recoltă proaspătă'},
];
/* ============ PREȚURI (exemple, schimbă-le): nume produs : [preț în lei, unitate] ============ */
const PR={'Mentă':[5,'legătură'],'Rozmarin':[6,'legătură'],'Busuioc':[5,'legătură'],'Mărar':[4,'legătură'],'Pătrunjel':[4,'legătură'],'Cimbru':[6,'legătură'],'Kale':[8,'legătură'],'Roșii':[12,'kg'],'Castraveți':[8,'kg'],'Morcovi':[6,'kg'],'Ridichi':[4,'legătură'],'Ardei gras':[14,'kg'],'Cutia săptămânii':[80,'cutie'],'Ghiveci de aromatice':[20,'buc'],'Ceai de plante':[18,'pachet'],'Usturoi verde':[5,'legătură']};
function priceTxt(n){return PR[n]?PR[n][0]+' lei / '+PR[n][1]:''}
/* ---------- Date: produse (artă vectorială generată, fără imagini externe) ---------- */
const P=[
 {n:'Mentă',c:'aromatice',s:'leaf',a:'#2f9e5b',b:'#d6f2b6',d:'Parfum rece, ideală pentru ceai și limonadă.',t:'Proaspătă azi'},
 {n:'Rozmarin',c:'aromatice',s:'bunch',a:'#3d7a55',b:'#dfeee0',d:'Ramuri aromate pentru carne la grătar și cartofi.',t:'Proaspăt azi'},
 {n:'Busuioc',c:'aromatice',s:'leaf',a:'#1f8a4c',b:'#cdeec0',d:'Frunze late, dulci, perfecte pentru salate și paste.',t:'Culeasă azi'},
 {n:'Mărar',c:'aromatice',s:'bunch',a:'#5aa845',b:'#e6f4c8',d:'Verdeață fină pentru ciorbe, murături și iaurt.',t:'Proaspăt azi'},
 {n:'Pătrunjel',c:'aromatice',s:'curly',a:'#2b8a3e',b:'#d9f0cf',d:'Cârlionțat, plin de gust, pentru orice supă.',t:'Proaspăt azi'},
 {n:'Cimbru',c:'aromatice',s:'bunch',a:'#5d8a62',b:'#e4efe0',d:'Mic la frunză, mare la aromă. Pentru carne și sosuri.',t:'Pe sezon'},
 {n:'Kale',c:'legume',s:'curly',a:'#1d6b43',b:'#c9e8d3',d:'Crocant și bogat în nutrienți, bun crud sau la cuptor.',t:'Culeasă azi'},
 {n:'Roșii',c:'legume',s:'round',a:'#d9372b',b:'#fde3d6',d:'Coapte la soare, cu gustul de altădată.',t:'Pe sezon'},
 {n:'Castraveți',c:'legume',s:'long',a:'#3a9a4a',b:'#dcf2d0',d:'Crocanți și zemoși, buni la salată sau murat.',t:'Proaspeți azi'},
 {n:'Morcovi',c:'legume',s:'long',a:'#ee8a1c',b:'#fdebd0',d:'Dulci, cu frunze verzi, scoși din pământ azi.',t:'Proaspeți azi'},
 {n:'Ridichi',c:'legume',s:'round',a:'#d63b6d',b:'#fbdde6',d:'Iuți și crocante, vestitorii primăverii.',t:'Pe sezon'},
 {n:'Ardei gras',c:'legume',s:'round',a:'#f1b017',b:'#fdf0c4',d:'Cărnoși și dulci, colorați ca vara.',t:'Pe sezon'},
 {n:'Cutia săptămânii',c:'specialități',s:'curly',a:'#4a3426',b:'#efe3d6',d:'Un mix de legume și verdețuri alese de noi.',t:'Comandă anticipat'},
 {n:'Ghiveci de aromatice',c:'specialități',s:'leaf',a:'#a35a2c',b:'#f4e1d1',d:'Plantă vie, o ții pe geam și tai după nevoie.',t:'Stoc limitat'},
 {n:'Ceai de plante',c:'specialități',s:'bunch',a:'#7c9a3a',b:'#eef2cf',d:'Mentă, melisă și mușețel uscate natural.',t:'Nou'},
 {n:'Usturoi verde',c:'specialități',s:'long',a:'#6bb04a',b:'#e6f3d2',d:'Fraged și aromat, doar câteva săptămâni pe an.',t:'Sezon scurt'}
];
const SCENES=['Seră, dimineața devreme','Rânduri de busuioc','Recoltă de roșii','Mentă după ploaie','Cules de mână','Kale în rouă','Rozmarin la soare','Morcovi proaspăt scoși','Răsaduri tinere','Mărar înflorit','Ridichi în lădițe','Cutia săptămânii','Pătrunjel cârlionțat','Ardei în seră','Cimbru pe terasă','Castraveți pe spalier','Ghivece pentru acasă','Apus peste fermă'];
const HS=[260,330,230,380,290,340,250,360,280,320,240,370,300,260,350,280,330,240];
 
/* ---------- Generator SVG pentru plante ---------- */
function art(p,rot=0){
 const src=p.src||IMG[p.n];if(src)return '<img src="'+src+'" alt="'+p.n+'" class="w-full h-full object-cover" loading="lazy">';
 const {a,b,s}=p; let g='';
 if(s==='leaf'){g='<path d="M100 190V55" stroke="'+a+'" stroke-width="5" stroke-linecap="round"/>';
  for(let i=0;i<6;i++){const y=170-i*22,r=30-i*2;g+=`<ellipse cx="${82-i}" cy="${y}" rx="${r*.8}" ry="${r*.38}" transform="rotate(-30 ${82-i} ${y})" fill="${a}"/><ellipse cx="${118+i}" cy="${y-8}" rx="${r*.8}" ry="${r*.38}" transform="rotate(30 ${118+i} ${y-8})" fill="${a}" opacity=".85"/>`}
  g+=`<ellipse cx="100" cy="46" rx="11" ry="22" fill="${a}"/>`}
 else if(s==='bunch'){for(let i=0;i<9;i++){const x=100+(i-4)*16,t=60+Math.abs(i-4)*10;
  g+=`<path d="M100 195Q${x} 130 ${x} ${t}" stroke="${a}" stroke-width="4" fill="none" stroke-linecap="round"/>`;
  for(let k=0;k<5;k++){const yy=t+k*14;g+=`<ellipse cx="${x-6}" cy="${yy}" rx="9" ry="2.6" transform="rotate(-25 ${x-6} ${yy})" fill="${a}"/><ellipse cx="${x+6}" cy="${yy+5}" rx="9" ry="2.6" transform="rotate(25 ${x+6} ${yy+5})" fill="${a}"/>`}}
  g+=`<rect x="78" y="150" width="44" height="14" rx="7" fill="#4a3426"/>`}
 else if(s==='curly'){const cs=[[100,120,46],[70,100,34],[130,100,34],[85,150,34],[118,150,34],[100,75,30]];
  cs.forEach(([x,y,r],i)=>g+=`<circle cx="${x}" cy="${y}" r="${r}" fill="${a}" stroke="#fff" stroke-opacity=".25" stroke-width="3" opacity="${1-i*.04}"/>`);
  for(let i=0;i<12;i++)g+=`<path d="M${100+Math.cos(i)*38} ${112+Math.sin(i)*38}q10-8 18 2" stroke="#fff" stroke-opacity=".25" stroke-width="2.5" fill="none"/>`}
 else if(s==='round'){g=`<circle cx="100" cy="118" r="56" fill="${a}"/><ellipse cx="80" cy="96" rx="14" ry="22" transform="rotate(30 80 96)" fill="#fff" opacity=".28"/><path d="M100 64V44" stroke="#2f7d3c" stroke-width="5" stroke-linecap="round"/><path d="M100 64c-26-4-34 8-38 14 22 6 34 0 38-14Zm0 0c26-4 34 8 38 14-22 6-34 0-38-14Z" fill="#2f9e4a"/>`}
 else{g=`<path d="M100 60c-8 0-28 6-30 24l30 106 30-106c-2-18-22-24-30-24Z" fill="${a}"/><path d="M84 90h32M90 120h20M94 150h12" stroke="#fff" stroke-opacity=".3" stroke-width="3" stroke-linecap="round"/><path d="M100 62C80 40 84 24 90 14M100 62c0-22 4-38 10-48M100 62c20-22 24-34 28-42" stroke="#2f9e4a" stroke-width="6" fill="none" stroke-linecap="round"/>`}
 return `<svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${p.n}"><defs><radialGradient id="g${p.n.length}${rot}${a.slice(1)}" cx=".5" cy=".4"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="${b}"/></radialGradient></defs><rect width="200" height="200" fill="url(#g${p.n.length}${rot}${a.slice(1)})"/><g transform="rotate(${rot} 100 100)">${g}</g></svg>`;
}
 
/* ---------- Hero + About decor ---------- */
document.getElementById('heroPlants').innerHTML=[['2%','62%',130,-12,0],['78%','12%',150,10,1],['86%','58%',120,18,4],['60%','74%',110,-8,7]]
 .map(([x,y,w,r,i],k)=>`<div class="absolute float opacity-70" style="left:${x};top:${y};width:${w}px;animation-delay:${k*1.3}s;border-radius:50%;overflow:hidden">${art(P[i],r)}</div>`).join('');
document.getElementById('aboutArt').innerHTML='<div style="border-radius:50%;overflow:hidden">'+art(P[6],-6)+'</div>';
 
/* ---------- Produse + filtre ---------- */
const cats=['toate','aromatice','legume','specialități'];let cur='toate';
const fEl=document.getElementById('filters'),gEl=document.getElementById('grid');
function renderGrid(){
 gEl.innerHTML=P.filter(p=>cur==='toate'||p.c===cur).map(p=>`<article class="card pc"><div class="ph relative aspect-[4/3]">${art(p)}<span class="absolute left-3 top-3 rounded-full bg-deep px-3 py-1 text-xs font-semibold text-lime">${p.t}</span></div><div class="p-5"><h3 class="text-xl font-bold">${p.n}</h3><p class="mt-1.5 text-mute text-sm">${p.d}</p><p class="mt-3 font-head text-lg font-bold text-brand">${priceTxt(p.n)}</p><div class="mt-auto pt-4 flex flex-wrap gap-2"><button data-buy="${p.n}" class="btn !py-2 !px-4 text-sm bg-brand text-white">Detalii</button><button data-add="${p.n}" class="btn btn-lime !py-2 !px-4 text-sm">+ Adaugă</button></div></div></article>`).join('');
}
function renderChips(){fEl.innerHTML=cats.map(c=>`<button class="chip" data-c="${c}" aria-pressed="${c===cur}">${c[0].toUpperCase()+c.slice(1)}</button>`).join('')}
fEl.onclick=e=>{const c=e.target.closest('[data-c]');if(!c)return;cur=c.dataset.c;renderChips();renderGrid();gEl.scrollLeft=0};
function buy(n){const m=document.getElementById('m');m.value='Bună! Aș dori să comand: '+n+'. Cantitate: ';document.getElementById('contact').scrollIntoView({behavior:'smooth'});setTimeout(()=>m.focus({preventScroll:true}),600)}
function dragRow(el,tap){let dn=false,mv=0,sx=0,sl=0;el.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;dn=true;mv=0;sx=e.clientX;sl=el.scrollLeft});addEventListener('pointermove',e=>{if(!dn)return;const d=e.clientX-sx;mv=Math.max(mv,Math.abs(d));if(mv>5)el.classList.add('drag');el.scrollLeft=sl-d});addEventListener('pointerup',()=>{if(!dn)return;dn=false;el.classList.remove('drag');setTimeout(()=>mv=0,0)});el.addEventListener('click',e=>{if(mv>5)return;tap(e)})}
dragRow(gEl,e=>{const a=e.target.closest('[data-add]');if(a){addCart(a.dataset.add);a.textContent='✓ Adăugat';setTimeout(()=>a.textContent='+ Adaugă',1200);return}const b=e.target.closest('[data-buy]');if(b)openDet(b.dataset.buy)});
const pStep=()=>Math.max(300,gEl.clientWidth*.7);
document.getElementById('pp').onclick=()=>gEl.scrollBy({left:-pStep(),behavior:'smooth'});
document.getElementById('pn').onclick=()=>gEl.scrollBy({left:pStep(),behavior:'smooth'});
gEl.addEventListener('keydown',e=>{if(e.key==='ArrowRight')gEl.scrollBy({left:pStep(),behavior:'smooth'});if(e.key==='ArrowLeft')gEl.scrollBy({left:-pStep(),behavior:'smooth'})});
/* Detalii produs: [cum e crescut, [nutrienți, nivel 1-5], beneficii, utilizări]. Informații generale, ajustează după practicile reale ale fermei. */
const D={
'Mentă':['Se înmulțește din butași și crește bine în sol reavăn, la semiumbră. O udăm des și o tundem regulat ca să scoată frunze noi.',[['Vitamina A',3],['Vitamina C',3],['Mangan',3],['Fier',3]],['Ajută digestia după masă','Răcorește și înviorează','Foarte bună pentru ceai și limonadă'],'Ceai, limonadă, salate, deserturi.'],
'Rozmarin':['Iubește soarele și solul drenat, cu puțină apă. Îl recoltăm ramură cu ramură, ca tufa să rămână deasă.',[['Fier',3],['Calciu',3],['Vitamina A',2],['Vitamina B6',2]],['Conține antioxidanți din uleiurile aromatice','Aroma intensă înlocuiește o parte din sare','Tradițional asociat cu digestia'],'Carne la grătar, cartofi la cuptor, pâine.'],
'Busuioc':['Cere căldură și soare, de aceea îl creștem în seră până se încălzește afară. Ciupim vârfurile ca planta să se ramifice.',[['Vitamina K',5],['Vitamina A',3],['Mangan',3],['Fier',2]],['Vitamina K contribuie la coagularea normală a sângelui','Antioxidanți din uleiurile aromatice','Dă gust fără calorii în plus'],'Pesto, paste, salată caprese, pizza.'],
'Mărar':['Se seamănă direct în sol, în rânduri dese, și crește repede. Îl culegem tânăr, înainte să înflorească, pentru aroma fină.',[['Vitamina C',4],['Vitamina A',3],['Mangan',3],['Calciu',2]],['Aduce vitamina C în supe și salate','Folosit în mod tradițional lângă mâncăruri grele','Gust proaspăt, fără calorii'],'Ciorbe, murături, iaurt, pește.'],
'Pătrunjel':['Încolțește încet, așa că îl semănăm devreme. Frunzele se culeg de jos în sus, iar planta continuă să producă.',[['Vitamina K',5],['Vitamina C',5],['Vitamina A',4],['Fier',3]],['Una dintre cele mai bogate verdeți în vitamina C','Aport bun de fier vegetal','Se adaugă la final, ca să păstreze vitaminele'],'Supe, sosuri, salate, tocănițe.'],
'Cimbru':['Rezistă bine la secetă și crește pe sol sărac, bine drenat. Ramurile se taie înainte de înflorire.',[['Fier',4],['Vitamina C',4],['Mangan',3],['Calciu',3]],['Tradițional folosit în ceaiuri pentru gât','Antioxidanți din uleiurile esențiale','Aroma rezistă la gătit îndelungat'],'Carne, sosuri, ciuperci, ceai.'],
'Kale':['E o plantă de sezon rece, care devine mai dulce după primele răcori. Frunzele exterioare se culeg pe rând, iar planta produce luni întregi.',[['Vitamina K',5],['Vitamina C',5],['Vitamina A',5],['Calciu',3]],['Foarte multă vitamina K și C','Fibre pentru sațietate','Puține calorii pentru volumul pe care îl dă'],'Salate cu frunzele masate, chipsuri la cuptor, smoothie, supe.'],
'Roșii':['Răsadurile pornesc în seră, apoi cresc legate de araci. Le lăsăm să se coacă pe plantă, nu în lada de transport.',[['Licopen',4],['Vitamina C',4],['Potasiu',3],['Vitamina K',2]],['Licopenul e un antioxidant, mai bine absorbit cu puțin ulei','Hidratante, cu multă apă','Potasiu pentru echilibrul apei din corp'],'Salate, sosuri, ciorbe, conserve de iarnă.'],
'Castraveți':['Cresc pe spalier, ca să stea departe de sol și să rămână curați. Au nevoie de multă apă, mai ales vara.',[['Apă',5],['Vitamina K',3],['Potasiu',2],['Vitamina C',2]],['Peste 90% apă, deci hidratează','Puține calorii','Răcoritori în zilele fierbinți'],'Salate, murături, tzatziki, apă aromată.'],
'Morcovi':['Se seamănă în sol afânat, fără pietre, ca să iasă drepți. Îi scoatem pe rând, când ajung la mărimea bună.',[['Vitamina A',5],['Vitamina K',3],['Potasiu',3],['Fibre',3]],['Betacarotenul se transformă în vitamina A, importantă pentru vedere','Fibre pentru digestie','Dulci, plac și copiilor'],'Crud, în supe, piure, la cuptor.'],
'Ridichi':['Sunt cele mai rapide: în aproximativ patru săptămâni de la semănat sunt gata. Le udăm regulat ca să nu devină lemnoase.',[['Apă',5],['Vitamina C',3],['Folat',2],['Potasiu',2]],['Crocante și cu puține calorii','Gustul iute stimulează pofta de mâncare','Aport de vitamina C'],'Salate, tartine cu unt, murate rapid.'],
'Ardei gras':['Au nevoie de căldură, așa că stau în seră până la maturare. Îi lăsăm să se coloreze pe plantă, pentru mai multă dulceață.',[['Vitamina C',5],['Vitamina A',3],['Vitamina B6',3],['Fibre',2]],['Ardeii roșii au mai multă vitamina C decât ai crede','Antioxidanți, mai ales în cei colorați','Dulci, fără iuțeală'],'Umpluți, la grătar, în salate, în tocănițe.'],
'Cutia săptămânii':['Noi alegem ce e mai bun în săptămâna respectivă, deci conținutul se schimbă odată cu sezonul.',[['Varietate',5],['Vitamina C',4],['Fibre',4],['Vitamina A',3]],['Mai multe culori în farfurie înseamnă mai mulți nutrienți','Descoperi legume noi','Cantități potrivite, fără risipă'],'O săptămână de mese: salate, supe, garnituri.'],
'Ghiveci de aromatice':['Plantele sunt semănate de noi și cresc în pământ organic, până își fac rădăcini bune. Le primești gata de pus pe geam.',[['Prospețime',5],['Aromă',5],['Vitamina C',3],['Vitamina K',3]],['Tai doar cât ai nevoie, deci nu risipești','Aduce verdeață în casă','Mai ieftin decât buchetele cumpărate des'],'Pune-l la lumină și udă-l când pământul se usucă la suprafață.'],
'Ceai de plante':['Plantele se culeg dimineața și se usucă la umbră, pe aer, ca să-și păstreze uleiurile aromatice.',[['Fără cafeină',5],['Antioxidanți',3],['Uleiuri aromatice',3],['Calorii',1]],['Plăcut și relaxant seara','Tradițional folosit pentru digestie','Nu conține cafeină'],'Infuzează 5–7 minute în apă fierbinte, nu clocotită.'],
'Usturoi verde':['Se recoltează tânăr, primăvara, înainte să-și formeze căpățâna. Sezonul e scurt, de aceea stocul se termină repede.',[['Vitamina C',3],['Vitamina B6',3],['Mangan',3],['Compuși cu sulf',3]],['Conține compușii cu sulf specifici usturoiului','Mai blând și mai fraged decât cel uscat','Aromă fină, bună și crud'],'Ouă, salate, sosuri, mămăligă, pâine cu unt.']};
const det=document.getElementById('det'),dbody=document.getElementById('dbody');let detLast=null;
function closeDet(){det.classList.add('hidden');document.body.style.overflow='';detLast&&detLast.focus()}
function openDet(n){const p=P.find(x=>x.n===n),d=D[n];if(!p||!d)return;detLast=document.activeElement;
dbody.innerHTML=`<div class='grid gap-8 md:grid-cols-2 md:items-start'><div class='rounded-3xl overflow-hidden aspect-square'>${art(p)}</div><div><p class='inline-block rounded-full bg-deep px-3 py-1 text-xs font-semibold text-lime'>${p.t}</p><h2 class='mt-3 text-4xl md:text-5xl font-extrabold'>${p.n}</h2><p class='mt-2 text-mute text-lg'>${p.d}</p><p class='mt-2 font-head text-2xl font-bold text-brand'>${priceTxt(p.n)}</p><div class='mt-6 flex flex-wrap gap-2' role='tablist'>${['Cum e crescut','Nutrienți','Beneficii'].map((t,i)=>`<button class='chip' role='tab' data-t='${i}'>${t}</button>`).join('')}</div><div id='dtab' class='mt-5 min-h-[190px]' role='tabpanel'></div><button id='dbuy' class='btn btn-lime mt-6'>Adaugă în comandă</button><p class='mt-5 text-xs text-mute'>Informații generale, nu sfat medical. Nivelurile de nutrienți sunt orientative.</p></div></div>`;
const tab=document.getElementById('dtab');
const setTab=i=>{dbody.querySelectorAll('[data-t]').forEach(b=>{const on=+b.dataset.t===i;b.setAttribute('aria-pressed',on);b.setAttribute('aria-selected',on)});
tab.innerHTML=i===0?`<p class='text-lg leading-relaxed'>${d[0]}</p><p class='mt-3 text-mute'><b class='text-ink'>Cum o folosești:</b> ${d[3]}</p>`:i===1?`<p class='text-mute text-sm mb-3'>Aport orientativ la 100 g, de la scăzut la foarte ridicat.</p>`+d[1].map(([l,v])=>`<div class='mb-3'><div class='flex justify-between text-sm font-semibold'><span>${l}</span><span class='text-mute'>${['','Scăzut','Moderat','Bun','Ridicat','Foarte ridicat'][v]}</span></div><div class='bar mt-1'><i data-w='${v*20}'></i></div></div>`).join(''):`<ul class='space-y-3'>${d[2].map(x=>`<li class='flex gap-3'><svg class='shrink-0 mt-0.5' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='var(--brand)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12l5 5L20 7'/></svg><span>${x}</span></li>`).join('')}</ul>`;
tab.querySelectorAll('.bar i').forEach(el=>setTimeout(()=>el.style.width=el.dataset.w+'%',40))};
dbody.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>setTab(+b.dataset.t));
document.getElementById('dbuy').onclick=()=>{addCart(n);closeDet();openCart()};
det.classList.remove('hidden');det.scrollTop=0;document.body.style.overflow='hidden';setTab(0);document.getElementById('dx').focus()}
document.getElementById('dx').onclick=closeDet;
addEventListener('keydown',e=>{if(e.key==='Escape'&&!det.classList.contains('hidden')&&lb.classList.contains('hidden'))closeDet()});
renderChips();renderGrid();
 
/* ---------- Galerie + Lightbox ---------- */
const G=FOTO.length?FOTO.map(f=>({t:f.t,p:{n:f.t,src:f.src},rot:0})):SCENES.map((t,i)=>({t,p:P[(i*5)%P.length],rot:(i%5-2)*6,h:HS[i]}));
document.getElementById('mas').innerHTML=G.map((g,i)=>`<button class="gi" data-i="${i}" style="width:${i%3===1?'min(62vw,270px)':'min(78vw,360px)'}" aria-label="Deschide: ${g.t}">${art(g.p,g.rot)}<span>${g.t}</span></button>`).join('');
const lb=document.getElementById('lb'),lbi=document.getElementById('lbi'),lbc=document.getElementById('lbc');let li=0,last=null;
function show(i){li=(i+G.length)%G.length;lbi.innerHTML=art(G[li].p,G[li].rot);lbc.textContent=G[li].t+'  ('+(li+1)+'/'+G.length+')'}
function openLb(i){last=document.activeElement;show(i);lb.classList.remove('hidden');lb.classList.add('flex');document.body.style.overflow='hidden';document.getElementById('lc').focus()}
function closeLb(){lb.classList.add('hidden');lb.classList.remove('flex');document.body.style.overflow='';last&&last.focus()}
const mas=document.getElementById('mas');let dn=false,moved=0,sx=0,sl=0;
mas.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;dn=true;moved=0;sx=e.clientX;sl=mas.scrollLeft});
addEventListener('pointermove',e=>{if(!dn)return;const d=e.clientX-sx;moved=Math.max(moved,Math.abs(d));if(moved>5)mas.classList.add('drag');mas.scrollLeft=sl-d});
addEventListener('pointerup',()=>{if(!dn)return;dn=false;mas.classList.remove('drag');setTimeout(()=>moved=0,0)});
mas.addEventListener('click',e=>{if(moved>5)return;const b=e.target.closest('[data-i]');if(b)openLb(+b.dataset.i)});
const step=()=>Math.max(300,mas.clientWidth*.7);
document.getElementById('gp').onclick=()=>mas.scrollBy({left:-step(),behavior:'smooth'});
document.getElementById('gn').onclick=()=>mas.scrollBy({left:step(),behavior:'smooth'});
mas.addEventListener('keydown',e=>{if(e.key==='ArrowRight')mas.scrollBy({left:step(),behavior:'smooth'});if(e.key==='ArrowLeft')mas.scrollBy({left:-step(),behavior:'smooth'})});
document.getElementById('lc').onclick=closeLb;document.getElementById('lp').onclick=()=>show(li-1);document.getElementById('ln').onclick=()=>show(li+1);
lb.onclick=e=>{if(e.target===lb)closeLb()};
addEventListener('keydown',e=>{if(lb.classList.contains('hidden'))return;if(e.key==='Escape')closeLb();if(e.key==='ArrowLeft')show(li-1);if(e.key==='ArrowRight')show(li+1)});
let tx=0;lb.addEventListener('touchstart',e=>tx=e.touches[0].clientX,{passive:true});
lb.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50)show(li+(d<0?1:-1))});
 
/* ---------- Recenzii (texte demonstrative, înlocuiește cu reale) ---------- */
const R=[['Mihaela D.','Busuiocul miroase de la ușă. Nu mai cumpăr din supermarket.'],['Andrei P.','Roșiile au gustul copilăriei mele. Comand în fiecare săptămână.'],['Chef Radu M.','Verdețurile ajung proaspete și durează mult în bucătărie. Constanță rară.'],['Elena S.','Cutia săptămânii m-a ajutat să gătesc mai variat și mai sănătos.']];
const rev=document.getElementById('rev'),dots=document.getElementById('dots');let ri=0,timer;
function setRev(i){ri=i;rev.innerHTML=`<blockquote class="rise"><p class="font-head text-2xl md:text-4xl font-bold leading-snug">„${R[i][1]}”</p><footer class="mt-6 text-lime font-semibold">${R[i][0]}</footer></blockquote>`;
 dots.innerHTML=R.map((_,k)=>`<button data-r="${k}" aria-label="Recenzia ${k+1}" class="h-2.5 rounded-full transition-all ${k===i?'w-8 bg-lime':'w-2.5 bg-white/40'}"></button>`).join('')}
dots.onclick=e=>{const b=e.target.closest('[data-r]');if(b){setRev(+b.dataset.r);clearInterval(timer)}};
setRev(0);timer=setInterval(()=>setRev((ri+1)%R.length),6000);
 
/* ---------- Social ---------- */
document.getElementById('social').innerHTML=[['Facebook','M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8.5c0-.3.2-.5.5-.5Z'],['Instagram','M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm5.5-2.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z'],['WhatsApp','M4 20l1.3-4.2A8 8 0 1 1 8.300 18.800L4 20Zm5-12c-.3 2 1.500 5 4.500 6.500 1 .5 2 .3 2.500-.5l-1.800-1-.7.7c-1-.4-2.100-1.500-2.500-2.500l.7-.7-1-1.800c-.4.300-.7.800-1.700-.7Z']]
 .map(([n,d])=>`<a href="${({Facebook:'https://www.facebook.com/groups/2055954288038200',Instagram:'https://www.instagram.com/herascumihai/',WhatsApp:'https://wa.me/40721481820'})[n]}" target="_blank" rel="noopener" aria-label="${n}" class="size-11 rounded-full border border-line bg-surf grid place-items-center transition hover:-translate-y-1 hover:border-brand"><svg width="20" height="20" viewBox="0 0 24 24" fill="${n==='Instagram'?'none':'var(--brand)'}" stroke="${n==='Instagram'?'var(--brand)':'none'}" stroke-width="1.8"><path d="${d}"/></svg></a>`).join('');
 
/* ---------- Formular cu validare în timp real ---------- */
const rules={n:v=>v.trim().length>=2?'':'Introdu numele tău (minim 2 caractere).',e:v=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)?'':'Introdu o adresă de email validă, de ex. nume@exemplu.ro.',m:v=>v.trim().length>=10?'':'Scrie un mesaj de cel puțin 10 caractere.'};
const f=document.getElementById('f');
function check(id){const el=document.getElementById(id),msg=rules[id](el.value);f.querySelector(`[data-for=${id}]`).textContent=msg;el.classList.toggle('bad',!!msg);el.classList.toggle('ok',!msg&&el.value!=='');return !msg}
['n','e','m'].forEach(id=>document.getElementById(id).addEventListener('input',()=>check(id)));
f.addEventListener('submit',ev=>{ev.preventDefault();const okAll=['n','e','m'].map(check).every(Boolean);if(!okAll)return;
 const sb=document.getElementById('sb'),t=document.getElementById('sbt');sb.disabled=true;t.innerHTML='<span class="spin"></span>';
 const v={n:document.getElementById('n').value,e:document.getElementById('e').value,m:document.getElementById('m').value};const done=()=>{t.textContent='Trimis';document.getElementById('ok').classList.remove('hidden');f.reset();f.querySelectorAll('.fld').forEach(x=>x.classList.remove('ok'));setTimeout(()=>{sb.disabled=false;t.textContent='Trimite mesajul'},2500)};const fallback=()=>{location.href='mailto:mentaolandeza2026@gmail.com?subject='+encodeURIComponent('Mesaj de la '+v.n)+'&body='+encodeURIComponent(v.m+'\n\nNume: '+v.n+'\nEmail: '+v.e);t.textContent='Deschid emailul...';setTimeout(()=>{sb.disabled=false;t.textContent='Trimite mesajul'},2500)};
 fetch('https://formsubmit.co/ajax/mentaolandeza2026@gmail.com',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({name:v.n,email:v.e,message:v.m,_subject:'Mesaj nou de pe site-ul Mentaolandeza',_captcha:'false'})}).then(r=>{if(!r.ok)throw 0;return r.json()}).then(j=>{if(j.success==='false'||j.success===false)throw 0;done()}).catch(fallback)});
 
/* ---------- Nav, scroll, reveal, back-to-top ---------- */
const nav=document.getElementById('nav'),topBtn=document.getElementById('top'),mob=document.getElementById('mob'),bg=document.getElementById('burger');
addEventListener('scroll',()=>{const y=scrollY;nav.classList.toggle('glass',y>40);const s=y>600;topBtn.style.opacity=s?1:0;topBtn.style.pointerEvents=s?'auto':'none'},{passive:true});
topBtn.onclick=()=>scrollTo({top:0,behavior:'smooth'});
bg.onclick=()=>{const o=mob.classList.toggle('hidden');bg.setAttribute('aria-expanded',!o);nav.classList.add('glass')};
mob.onclick=e=>{if(e.target.closest('a')){mob.classList.add('hidden');bg.setAttribute('aria-expanded','false')}};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
document.getElementById('yr').textContent=new Date().getFullYear();
/* ---------- Coș de comandă (trimitere pe WhatsApp sau email) ---------- */
let cart={};
const cb=document.getElementById('cb'),cp=document.getElementById('cp'),cov=document.getElementById('cov'),cl=document.getElementById('cl');
const cartCount=()=>Object.values(cart).reduce((a,b)=>a+b,0);
const cartTotal=()=>Object.entries(cart).reduce((s,[k,q])=>s+PR[k][0]*q,0);
function orderMsg(){const nm=document.getElementById('cnm').value.trim(),ad=document.getElementById('cad').value.trim();
 const lines=Object.entries(cart).filter(([,q])=>q>0).map(([k,q])=>'- '+k+' x'+q+' ('+PR[k][0]*q+' lei)');
 return 'Bună! Aș dori să comand:\n'+lines.join('\n')+'\nTotal estimat: '+cartTotal()+' lei'+(nm?'\nNume: '+nm:'')+(ad?'\nAdresă livrare: '+ad:'')}
function renderCart(){const es=Object.entries(cart).filter(([,q])=>q>0),n=cartCount();
 cb.style.display=n?'':'none';document.getElementById('cn').textContent=n;document.getElementById('ct').textContent=cartTotal()+' lei';
 cl.innerHTML=es.length?es.map(([k,q])=>`<div class='flex items-center gap-3 py-3 border-b border-line'><div class='w-14 h-14 rounded-xl overflow-hidden shrink-0'>${art(P.find(p=>p.n===k))}</div><div class='flex-1 min-w-0'><p class='font-semibold truncate'>${k}</p><p class='text-sm text-mute'>${priceTxt(k)}</p></div><div class='flex items-center gap-2'><button class='arw !w-8 !h-8 !text-base' data-q='${k}' data-d='-1' aria-label='Mai puțin'>−</button><b>${q}</b><button class='arw !w-8 !h-8 !text-base' data-q='${k}' data-d='1' aria-label='Mai mult'>+</button></div></div>`).join(''):`<p class='py-6 text-mute'>Coșul e gol. Adaugă produse din „Recolta noastră”.</p>`}
function addCart(n){if(!PR[n])return;cart[n]=(cart[n]||0)+1;renderCart();cb.animate([{transform:'scale(1)'},{transform:'scale(1.12)'},{transform:'scale(1)'}],{duration:300})}
function openCart(){renderCart();cp.inert=false;cp.classList.add('open');cov.classList.remove('hidden');document.getElementById('cx').focus()}
function closeCart(){cp.classList.remove('open');cp.inert=true;cov.classList.add('hidden')}
cb.onclick=openCart;cov.onclick=closeCart;document.getElementById('cx').onclick=closeCart;
cl.onclick=e=>{const b=e.target.closest('[data-q]');if(!b)return;const k=b.dataset.q;cart[k]=Math.max(0,(cart[k]||0)+ +b.dataset.d);renderCart();if(!cartCount())closeCart()};
document.getElementById('cwa').onclick=()=>{if(cartCount())window.open('https://wa.me/40721481820?text='+encodeURIComponent(orderMsg()),'_blank','noopener')};
document.getElementById('cem').onclick=e=>{e.preventDefault();if(cartCount())location.href='mailto:mentaolandeza2026@gmail.com?subject='+encodeURIComponent('Comandă nouă')+'&body='+encodeURIComponent(orderMsg())};
addEventListener('keydown',e=>{if(e.key==='Escape'&&cp.classList.contains('open'))closeCart()});
/* ---------- Rețete ----------
   POZE: pune fișierul img/retete/ID.jpg (ID = primul text din rând, ex: limonada-menta.jpg).
   Dacă poza lipsește, se folosește o ilustrație.
   RÂND NOU: [id, nume, categorie, minute, porții, kcal/porție, proteine g/porție, [produse din fermă], 'ingrediente;separate;cu;punct și virgulă', 'pas 1|pas 2|pas 3'] */
const REC=[
['limonada-menta','Limonadă cu mentă','Băuturi',10,4,60,0,['Mentă'],'1 legătură de mentă;2 lămâi;1 litru de apă rece;2 linguri de miere;gheață','Zdrobește ușor frunzele de mentă cu mierea într-un vas.|Adaugă sucul de la lămâi și apa rece.|Amestecă, pune gheață și lasă 10 minute la rece.'],
['apa-aromata','Apă aromată cu castravete și mentă','Băuturi',5,4,10,0,['Castraveți','Mentă'],'1 castravete;câteva ramuri de mentă;1 litru de apă;felii de lămâie','Taie castravetele în felii subțiri.|Pune totul într-o carafă cu apă.|Lasă 30 de minute la frigider înainte de servit.'],
['smoothie-kale','Smoothie verde cu kale','Băuturi',10,2,150,4,['Kale'],'2 frunze mari de kale;1 banană;1 măr;250 ml apă;suc de la 1/2 lămâie','Scoate nervura groasă din frunzele de kale.|Pune toate ingredientele în blender.|Mixează 1 minut până devine fin și servește rece.'],
['salata-rosii-busuioc','Salată de roșii cu busuioc','Salate',10,2,120,2,['Roșii','Busuioc'],'4 roșii coapte;o mână de frunze de busuioc;2 linguri de ulei de măsline;1 lingură de oțet;sare','Taie roșiile bucăți.|Rupe frunzele de busuioc cu mâna.|Amestecă cu ulei, oțet și sare chiar înainte de servit.'],
['salata-castraveti-marar','Salată de castraveți cu mărar și iaurt','Salate',10,2,90,5,['Castraveți','Mărar'],'2 castraveți;150 g iaurt;1 cățel de usturoi;mărar tocat;sare','Taie castraveții felii subțiri.|Amestecă iaurtul cu usturoiul, mărarul și sarea.|Toarnă sosul peste castraveți și servește rece.'],
['salata-ridichi','Salată de ridichi crocante','Salate',10,2,80,2,['Ridichi','Castraveți'],'1 legătură de ridichi;1 castravete;2 fire de ceapă verde;1 lingură de ulei;suc de lămâie;sare','Taie ridichile și castravetele felii subțiri.|Adaugă ceapa verde tocată.|Condimentează cu ulei, lămâie și sare.'],
['salata-kale-lamaie','Salată de kale cu lămâie','Salate',15,2,160,5,['Kale'],'4 frunze de kale;2 linguri de ulei de măsline;suc de la 1/2 lămâie;1 mână de nuci;sare','Taie kale fin, fără nervura groasă.|Masează frunzele cu ulei, lămâie și sare timp de 2 minute.|Presară nuci tocate deasupra.'],
['supa-legume-patrunjel','Supă de legume cu pătrunjel','Supe',45,4,110,3,['Morcovi','Pătrunjel'],'2 morcovi;1 cartof;1 ceapă;1,5 litri de apă;pătrunjel tocat;sare','Taie legumele cubulețe.|Fierbe-le în apă cu sare 25–30 de minute.|Adaugă pătrunjelul la final și mai lasă 2 minute pe foc.'],
['supa-crema-morcovi','Supă cremă de morcovi','Supe',40,4,140,3,['Morcovi'],'600 g morcovi;1 ceapă;1 cartof;1 litru de apă;2 linguri de ulei;sare','Călește ceapa în ulei 3 minute.|Adaugă morcovii și cartoful tăiați, apoi apa. Fierbe 25 de minute.|Mixează cu blenderul până devine cremă.'],
['ciorba-legume-marar','Ciorbă de legume cu mărar','Supe',45,4,95,3,['Morcovi','Mărar'],'2 morcovi;1 ardei;1 ceapă;1 cartof;borș sau zeamă de lămâie;mărar;sare','Fierbe legumele tăiate în 1,5 litri de apă, 25 de minute.|Acrește cu borș sau lămâie după gust.|Adaugă mărarul tocat la final.'],
['supa-crema-rosii','Supă cremă de roșii cu busuioc','Supe',35,4,130,3,['Roșii','Busuioc'],'1 kg roșii coapte;1 ceapă;2 căței de usturoi;2 linguri de ulei;busuioc;sare','Călește ceapa și usturoiul în ulei.|Adaugă roșiile tăiate și fierbe 20 de minute.|Mixează, adaugă busuioc și sare.'],
['cartofi-rozmarin','Cartofi la cuptor cu rozmarin','Garnituri',50,4,210,4,['Rozmarin'],'800 g cartofi;3 ramuri de rozmarin;3 căței de usturoi;3 linguri de ulei;sare','Taie cartofii bucăți și amestecă-i cu ulei, sare și usturoi.|Adaugă ramurile de rozmarin.|Coace la 200°C timp de 40 de minute, răsucind o dată.'],
['morcovi-cimbru','Morcovi glazurați cu cimbru','Garnituri',30,4,130,1,['Morcovi','Cimbru'],'600 g morcovi;1 lingură de miere;1 lingură de unt;ramuri de cimbru;sare','Fierbe morcovii întregi sau tăiați 10 minute.|Topește untul cu mierea într-o tigaie.|Rostogolește morcovii în glazură cu cimbru 5 minute.'],
['legume-la-cuptor','Legume coapte la cuptor','Garnituri',45,4,180,4,['Ardei gras','Roșii','Morcovi'],'2 ardei grași;2 morcovi;3 roșii;1 ceapă;3 linguri de ulei;cimbru;sare','Taie toate legumele bucăți mari.|Amestecă-le cu ulei, sare și cimbru.|Coace la 200°C timp de 35–40 de minute.'],
['ardei-umpluti-orez','Ardei umpluți cu orez și legume','Feluri principale',70,4,280,8,['Ardei gras','Morcovi','Pătrunjel'],'4 ardei grași;150 g orez;1 morcov ras;1 ceapă;pătrunjel;sos de roșii;sare','Călește ceapa și morcovul, adaugă orezul și puțină apă. Fierbe 5 minute.|Umple ardeii cu amestecul și pune-i într-o oală sau tavă.|Acoperă cu sos de roșii și fierbe sau coace 45 de minute.'],
['omleta-verdeturi','Omletă cu verdețuri','Feluri principale',10,2,260,16,['Pătrunjel','Mărar'],'4 ouă;pătrunjel și mărar tocate;1 lingură de ulei;sare','Bate ouăle cu sare și verdețurile.|Încinge uleiul într-o tigaie.|Toarnă compoziția și gătește 3–4 minute, întorcând omleta.'],
['oua-usturoi-verde','Ouă cu usturoi verde','Feluri principale',10,2,240,14,['Usturoi verde'],'4 ouă;3 fire de usturoi verde;1 lingură de ulei;sare;piper','Taie usturoiul verde mărunt și călește-l 1 minut în ulei.|Sparge ouăle peste el.|Gătește 3–4 minute și condimentează.'],
['paste-pesto','Paste cu pesto de busuioc','Feluri principale',25,4,520,15,['Busuioc'],'320 g paste;pesto de busuioc (rețeta din Sosuri);parmezan ras;sare','Fierbe pastele în apă cu sare conform pachetului.|Păstrează o jumătate de cană din apa de fiert.|Amestecă pastele cu pesto și puțină apă, apoi presară parmezan.'],
['pui-cimbru-rozmarin','Pui la cuptor cu cimbru și rozmarin','Feluri principale',50,4,360,38,['Cimbru','Rozmarin'],'4 pulpe sau piepți de pui;ramuri de cimbru și rozmarin;3 căței de usturoi;2 linguri de ulei;sare','Freacă puiul cu ulei, sare, usturoi și ierburi.|Lasă-l 15 minute să se aromeze.|Coace la 200°C, 35–40 de minute, până se rumenește.'],
['tzatziki','Tzatziki','Sosuri și gustări',10,4,90,4,['Castraveți','Mărar'],'250 g iaurt gros;1 castravete ras;2 căței de usturoi;mărar;1 lingură de ulei;sare','Stoarce castravetele ras de apă.|Amestecă-l cu iaurtul, usturoiul, mărarul și uleiul.|Lasă la rece 15 minute înainte de servit.'],
['pesto-busuioc','Pesto de busuioc','Sosuri și gustări',10,8,110,2,['Busuioc'],'2 mâini de busuioc;50 g nuci sau semințe de pin;1 cățel de usturoi;80 ml ulei de măsline;parmezan;sare','Pune busuiocul, nucile și usturoiul în blender.|Adaugă uleiul treptat în timp ce mixezi.|Încorporează parmezanul și sarea.'],
['sos-rosii-proaspete','Sos de roșii proaspete','Sosuri și gustări',30,4,90,2,['Roșii','Busuioc'],'1 kg roșii coapte;1 ceapă;2 căței de usturoi;2 linguri de ulei;busuioc;sare','Opărește roșiile, curăță-le de coajă și taie-le.|Călește ceapa și usturoiul, adaugă roșiile.|Fierbe 20 de minute și adaugă busuioc.'],
['chipsuri-kale','Chipsuri de kale la cuptor','Sosuri și gustări',20,2,110,4,['Kale'],'1 legătură de kale;1 lingură de ulei;sare','Rupe kale în bucăți și usucă-l bine.|Amestecă-l cu ulei și sare.|Coace la 150°C timp de 12–15 minute, până devine crocant.'],
['ridichi-unt-paine','Ridichi cu unt pe pâine','Sosuri și gustări',10,2,190,4,['Ridichi'],'1 legătură de ridichi;4 felii de pâine;2 linguri de unt;sare grunjoasă','Unge pâinea cu unt.|Taie ridichile felii subțiri și aranjează-le deasupra.|Presară puțină sare grunjoasă.']
].map(([id,n,c,t,po,k,pr,f,i,st])=>({id,n,c,t,po,k,pr,f,i:i.split(';'),s:st.split('|')}));
let rcat='toate';
const rcats=['toate',...new Set(REC.map(r=>r.c))];
const rimg=r=>`<img src='img/retete/${r.id}.jpg' alt='${r.n}' class='w-full h-full object-cover' loading='lazy' onerror='rfb(this,"${r.id}")'>`;
function rfb(el,id){const r=REC.find(x=>x.id===id);el.parentNode.innerHTML=art(P.find(p=>p.n===r.f[0])||P[0])}
function renderRChips(){document.getElementById('rf').innerHTML=rcats.map(c=>`<button class='chip' data-rc='${c}' aria-pressed='${c===rcat}'>${c[0].toUpperCase()+c.slice(1)}</button>`).join('')}
const RSORT=[['def','Implicit'],['t','Cele mai rapide'],['kl','Mai puține calorii'],['kh','Mai multe calorii'],['p','Mai multe proteine']];
let rsort='def';
function renderRSort(){document.getElementById('rs').innerHTML=RSORT.map(([k,l])=>`<button class='chip !py-1.5 !px-4 text-sm' data-rs='${k}' aria-pressed='${k===rsort}'>${l}</button>`).join('')}
function renderRec(){const L=REC.filter(r=>rcat==='toate'||r.c===rcat).slice();
 if(rsort==='t')L.sort((a,b)=>a.t-b.t);if(rsort==='kl')L.sort((a,b)=>a.k-b.k);if(rsort==='kh')L.sort((a,b)=>b.k-a.k);if(rsort==='p')L.sort((a,b)=>b.pr-a.pr);
 document.getElementById('rg').innerHTML=L.map(r=>`<article class='card pc'><button class='block w-full text-left' data-r='${r.id}'><div class='ph aspect-[4/3]'>${rimg(r)}</div><div class='p-5'><p class='text-xs font-semibold text-brand'>${r.c}</p><h3 class='mt-1 text-xl font-bold'>${r.n}</h3><p class='mt-2 text-sm text-mute'>${r.t} min · ${r.k} kcal · ${r.pr} g proteine</p><span class='mt-4 inline-block font-semibold text-brand'>Detalii rețetă ›</span></div></button></article>`).join('');
 document.getElementById('rg').scrollLeft=0}
function openRec(id){const r=REC.find(x=>x.id===id);if(!r)return;detLast=document.activeElement;
 dbody.innerHTML=`<div class='grid gap-8 md:grid-cols-2 md:items-start'><div class='rounded-3xl overflow-hidden aspect-square'>${rimg(r)}</div><div><p class='text-sm font-semibold text-brand'>${r.c}</p><h2 class='mt-1 text-4xl md:text-5xl font-extrabold'>${r.n}</h2><div class='mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center'>${[[r.t+' min','Timp'],[r.po,'Porții'],[r.k,'kcal / porție'],[r.pr+' g','Proteine / porție']].map(([v,l])=>`<div class='card p-3'><b class='font-head text-xl text-brand'>${v}</b><p class='text-xs text-mute'>${l}</p></div>`).join('')}</div><h3 class='mt-7 text-xl font-bold'>De ce ai nevoie</h3><ul class='mt-3 space-y-2'>${r.i.map(x=>`<li class='flex gap-2'><span class='text-brand'>•</span><span>${x}</span></li>`).join('')}</ul><h3 class='mt-7 text-xl font-bold'>Cum se prepară</h3><ol class='mt-3 space-y-3'>${r.s.map((x,k)=>`<li class='flex gap-3'><b class='shrink-0 size-7 rounded-full bg-brand text-white grid place-items-center text-sm'>${k+1}</b><span>${x}</span></li>`).join('')}</ol><button id='rbuy' class='btn btn-lime mt-7'>Adaugă din fermă: ${r.f.join(', ')}</button><p class='mt-4 text-xs text-mute'>Valorile nutritive sunt orientative și pot varia după ingrediente.</p></div></div>`;
 document.getElementById('rbuy').onclick=()=>{r.f.forEach(addCart);closeDet();openCart()};
 document.getElementById('dx').textContent='‹ Înapoi la rețete';det.classList.remove('hidden');det.scrollTop=0;document.bo
 