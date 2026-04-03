import{c as U}from"./chunk-AEOMTBSW-BN2nmecr.js";import{d as X}from"./wardley-RL74JXVD-BCRCBASE-DPc-F5Fj.js";import{l as Z,a as _,s as ee,e as te,n as ae,h as ie,m as l,p as S,q as le,L as re,aO as se,aP as oe,aQ as P,aR as ne,b as pe,o as de,aS as ce,z as ue}from"./mermaid.esm.min-D8zMfuE1.js";import"./chunk-H3VCZNTA-ijnFiFWE.js";import"./app-sEA1Jm6s.js";var he=ue.pie,v={sections:new Map,showData:!1},g=v.sections,y=v.showData,ge=structuredClone(he),me=l(()=>structuredClone(ge),"getConfig"),fe=l(()=>{g=new Map,y=v.showData,de()},"clear"),xe=l(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);g.has(e)||(g.set(e,a),S.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),$e=l(()=>g,"getSections"),we=l(e=>{y=e},"setShowData"),Se=l(()=>y,"getShowData"),W={getConfig:me,clear:fe,setDiagramTitle:ie,getDiagramTitle:ae,setAccTitle:te,getAccTitle:ee,setAccDescription:_,getAccDescription:Z,addSection:xe,getSections:$e,setShowData:we,getShowData:Se},ve=l((e,a)=>{U(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),ye={parse:l(async e=>{let a=await X("pie",e);S.debug(a),ve(a,W)},"parse")},Te=l(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),De=Te,be=l(e=>{let a=[...e.values()].reduce((r,s)=>r+s,0),T=[...e.entries()].map(([r,s])=>({label:r,value:s})).filter(r=>r.value/a*100>=1);return ce().value(r=>r.value).sort(null)(T)},"createPieArcs"),Ce=l((e,a,T,r)=>{var B;S.debug(`rendering pie chart
`+e);let s=r.db,D=le(),b=re(s.getConfig(),D.pie),C=40,o=18,c=4,p=450,d=p,m=se(a),n=m.append("g");n.attr("transform","translate("+d/2+","+p/2+")");let{themeVariables:i}=D,[k]=oe(i.pieOuterStrokeWidth);k??(k=2);let A=b.textPosition,u=Math.min(d,p)/2-C,E=P().innerRadius(0).outerRadius(u),q=P().innerRadius(u*A).outerRadius(u*A);n.append("circle").attr("cx",0).attr("cy",0).attr("r",u+k/2).attr("class","pieOuterCircle");let h=s.getSections(),j=be(h),G=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12],f=0;h.forEach(t=>{f+=t});let O=j.filter(t=>(t.data.value/f*100).toFixed(0)!=="0"),x=ne(G).domain([...h.keys()]);n.selectAll("mySlices").data(O).enter().append("path").attr("d",E).attr("fill",t=>x(t.data.label)).attr("class","pieCircle"),n.selectAll("mySlices").data(O).enter().append("text").text(t=>(t.data.value/f*100).toFixed(0)+"%").attr("transform",t=>"translate("+q.centroid(t)+")").style("text-anchor","middle").attr("class","slice");let H=n.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),R=[...h.entries()].map(([t,w])=>({label:t,value:w})),$=n.selectAll(".legend").data(R).enter().append("g").attr("class","legend").attr("transform",(t,w)=>{let L=o+c,I=L*R.length/2,J=12*o,K=w*L-I;return"translate("+J+","+K+")"});$.append("rect").attr("width",o).attr("height",o).style("fill",t=>x(t.label)).style("stroke",t=>x(t.label)),$.append("text").attr("x",o+c).attr("y",o-c).text(t=>s.getShowData()?`${t.label} [${t.value}]`:t.label);let N=Math.max(...$.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),Q=d+C+o+c+N,z=((B=H.node())==null?void 0:B.getBoundingClientRect().width)??0,V=d/2-z/2,Y=d/2+z/2,M=Math.min(0,V),F=Math.max(Q,Y)-M;m.attr("viewBox",`${M} 0 ${F} ${p}`),pe(m,p,F,b.useMaxWidth)},"draw"),ke={draw:Ce},Fe={parser:ye,db:W,renderer:ke,styles:De};export{Fe as diagram};
