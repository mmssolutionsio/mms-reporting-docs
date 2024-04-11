"use strict";(self.webpackChunkmms_reporting_docs=self.webpackChunkmms_reporting_docs||[]).push([[701],{7382:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var o=t(4848),r=t(8453);const s={sidebar_position:2},i="Komponenten",d={id:"development/components",title:"Komponenten",description:"Innerhalb des ns.wow-Systems werden Komponenten als zentrale Elemente betrachtet, die eine doppelte Funktion erf\xfcllen.",source:"@site/docs/development/components.md",sourceDirName:"development",slug:"/development/components",permalink:"/mms-reporting-docs/docs/development/components",draft:!1,unlisted:!1,editUrl:"https://github.com/mmssolutionsio/mms-reporting-docs/tree/main/docs/development/components.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Projektstruktur",permalink:"/mms-reporting-docs/docs/development/structure"},next:{title:"Frontend Toolkit",permalink:"/mms-reporting-docs/docs/category/frontend-toolkit"}},l={},a=[{value:"Installation von neuen ns.wow Komponenten",id:"installation-von-neuen-nswow-komponenten",level:2},{value:"Struktur",id:"struktur",level:2},{value:"Eigene Komponenten",id:"eigene-komponenten",level:2},{value:"Ordner",id:"ordner",level:3},{value:"Komponenten",id:"komponenten-1",level:3}];function p(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"komponenten",children:"Komponenten"}),"\n",(0,o.jsxs)(n.p,{children:["Innerhalb des ns.wow-Systems werden Komponenten als zentrale Elemente betrachtet, die eine ",(0,o.jsx)(n.strong,{children:"doppelte Funktion"})," erf\xfcllen.\nZum einen k\xf6nnen sie in das ns.wow-Backend-System integriert werden, wo sie redaktionell bearbeitet und mit Inhalten\nversehen werden. Zum anderen dienen diese Komponenten als modulare Bausteine f\xfcr die Frontend-Applikation sowie f\xfcr die\nAusgabe in PDF-Formaten und anderen Dokumententypen."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"ns.wow stellt ein Basisset an Standardkomponenten bereit."})})}),"\n",(0,o.jsx)(n.p,{children:"Diese k\xf6nnen beliebig verwendet und ge\xe4ndert als auch mit projektspezifischen Komponenten erweitert werden."}),"\n",(0,o.jsx)(n.h2,{id:"installation-von-neuen-nswow-komponenten",children:"Installation von neuen ns.wow Komponenten"}),"\n",(0,o.jsx)(n.p,{children:"Gruppen von Komponenten k\xf6nnen mit folgendem Kommando installiert werden. Die Auswahl der gew\xfcnschten Gruppen und Komponenten kann mit Leertaste best\xe4tigt werden."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx nswow add group\n"})}),"\n",(0,o.jsx)(n.p,{children:"Einzelne von ns.wow bereitgestellte Komponenten k\xf6nnen wie folgt installiert werden:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx nswow add components\n"})}),"\n",(0,o.jsx)(n.h2,{id:"struktur",children:"Struktur"}),"\n",(0,o.jsx)(n.p,{children:"Jede Komponente befindet sich in einer Gruppe von gleichartigen Komponenten."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"livingdocs\n\u251c\u2500\u2500 Buttons # Gruppe\n  \u251c\u2500\u2500 button # Komponente\n    \u251c\u2500\u2500 app.scss        // Wird nur in der Frontend Applikation geladen\n    \u251c\u2500\u2500 button.html     // Darstellung in allen Ausgaben\n    \u251c\u2500\u2500 general.scss    // Wird in allen Kan\xe4len geladen\n    \u251c\u2500\u2500 properties.json // Konfiguration ns.wow Backend\n    \u251c\u2500\u2500 idd.scss        // Wird nur im ns.wow geladen\n    \u251c\u2500\u2500 pdf.scss        // Wird f\xfcr die .pdf Ausgabe verwendet\n    \u2514\u2500\u2500 word.scss       // Wird f\xfcr die .docx Ausgabe verwendet\n  \u251c\u2500\u2500 ... # Komponente\n\u251c\u2500\u2500 ...\n"})}),"\n",(0,o.jsx)(n.h2,{id:"eigene-komponenten",children:"Eigene Komponenten"}),"\n",(0,o.jsx)(n.p,{children:"Projektspezifische Komponenten k\xf6nnen entweder in vorhandene Ordner, oder neue Gruppen kategorisiert werden."}),"\n",(0,o.jsx)(n.h3,{id:"ordner",children:"Ordner"}),"\n",(0,o.jsx)(n.p,{children:"Eigene Ordner k\xf6nnen mit folgendem Befehl erstellt werden:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx nswow create group my-group\n"})}),"\n",(0,o.jsx)(n.h3,{id:"komponenten-1",children:"Komponenten"}),"\n",(0,o.jsx)(n.p,{children:"Eigene Komponenten k\xf6nnen via folgendem Befehl erstellt werden."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx nswow create component my-component\n"})})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var o=t(6540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);