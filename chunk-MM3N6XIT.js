import{a as q,b as D,d as j,e as N,f as V,g as z}from"./chunk-XKCSFNB7.js";import"./chunk-RAYIDBLW.js";import"./chunk-K3O36QD3.js";import{b as B}from"./chunk-OAARWS43.js";import"./chunk-UMGIAK6N.js";import"./chunk-JJS4FTEB.js";import"./chunk-J45A7UTJ.js";import"./chunk-VYHX26DZ.js";import"./chunk-KZC6YT6O.js";import{b as I}from"./chunk-AZN3ND4J.js";import"./chunk-RG7VMJRO.js";import{Ba as C,Db as M,Fa as b,Pa as g,Qa as h,Ra as T,Ta as S,Ua as y,Va as x,W as d,Wa as r,X as m,Xa as o,Ya as _,Zb as A,bb as k,db as f,fa as p,fb as c,ja as w,ra as s,tb as l,ub as v,vb as E}from"./chunk-VTYUZ2GX.js";import"./chunk-WMVSLYLA.js";function L(i,t){if(i&1&&(r(0,"li"),l(1),o()),i&2){let e=t.$implicit;s(),v(e)}}function O(i,t){if(i&1&&(r(0,"ul",12),S(1,L,2,1,"li",null,T),o()),i&2){let e=c(3);s(),y(e.question1Tips())}}function H(i,t){if(i&1){let e=k();r(0,"div",4)(1,"div",10)(2,"button",11),f("click",function(){d(e);let a=c(2);return m(a.question1ShowTips.set(!a.question1ShowTips()))}),r(3,"mat-icon"),l(4),o(),r(5,"span"),l(6,"Tips"),o()(),g(7,O,3,0,"ul",12),o()()}if(i&2){let e=c(2);s(4),v(e.question1ShowTips()?"expand_less":"expand_more"),s(3),h(e.question1ShowTips()?7:-1)}}function P(i,t){if(i&1){let e=k();r(0,"div",4)(1,"p",5),l(2," In deze oefening maak je zelf een volledige oplossing. Werk de oefening best eerst uit in Excel, zodat je kan testen of alles correct werkt. Plak daarna je code hier om ze te laten controleren. "),o(),r(3,"p",5),l(4," De controle gebeurt met AI. Het kan dus even duren voor je feedback krijgt, maar die is op maat van jouw oplossing. "),o(),r(5,"p",5),l(6," Schrijf nu zelf een programma met de naam Checklist dat een string-array van 3 elementen (index 1 t.e.m. 3) aanmaakt en de nodige hulpvariabelen declareert. Het programma vraagt 3 keer via een InputBox welk kampeeritem je wil toevoegen, waarbij het nummer van het item in de vraag vermeld wordt (bv. \u201CGeef item 1 in:\u201D). Elke ingegeven tekst wordt in een For-lus opgeslagen in de array. Binnen dezelfde lus bouw je \xE9\xE9n tekst op in het formaat: \u201CChecklist:\u201D gevolgd door telkens - item op een nieuwe regel. Toon het volledige lijstje met \xE9\xE9n MsgBox, zoals in het voorbeeld: "),o(),_(7,"img",6),o(),r(8,"div",7)(9,"pre",8)(10,"code",9),f("input",function(a){d(e);let u=c();return m(u.question1Answer.set(a.target.innerHTML))})("keydown",function(a){d(e);let u=c();return m(u.tabTo4Spaces(a))}),l(11),o()()(),g(12,H,8,2,"div",4)}if(i&2){let e=c();s(11),E("",e.question1Answer(),`
`),s(),h(e.question1Tips().length>0?12:-1)}}var F=class i extends j{totalQuestions=1;question1Answer=p(`Option Explicit
Option Base 1

Sub Checklist()

End Sub`);question1Tips=p([]);question1ShowTips=p(!1);question1Solution=`Option Explicit
Option Base 1

Sub Checklist()

    Const AANTAL = 3
    Dim strArray(AANTAL) As String
    Dim intI As Integer
    Dim strTekst As String
    Dim intOpslag As Integer

    strTekst = "Checklist: " & vbNewLine

    For intI = 1 To AANTAL
        strArray(intI) = InputBox("Geef input")
        strTekst = strTekst & "- " & strArray(intI)
        If intI < AANTAL Then
            strTekst = strTekst & vbNewLine
        End If
    Next intI

    MsgBox (strTekst)

End Sub`;isCheckDisabled=M(()=>{switch(this.question()){case 1:return!this.question1Answer()||this.checking()}return!1});async check(){if(this.question()===1){this.checking.set(!0);try{this.abortController.set(new AbortController);let{data:t,error:e}=await this.adventureService.validateCodeUsingAI({abortSignal:this.abortController()?.signal,question:`
          Schrijf nu zelf een programma met de naam Checklist dat een string-array van 3 elementen (index 1 t.e.m. 3)
          aanmaakt en de nodige hulpvariabelen declareert. Het programma vraagt 3 keer via een InputBox welk kampeeritem je
          wil toevoegen, waarbij het nummer van het item in de vraag vermeld wordt (bv. \u201CGeef item 1 in:\u201D). Elke ingegeven
          tekst wordt in een For-lus opgeslagen in de array. Binnen dezelfde lus bouw je \xE9\xE9n tekst op in het formaat:
          \u201CChecklist:\u201D gevolgd door telkens - item op een nieuwe regel. Toon het volledige lijstje met \xE9\xE9n MsgBox, zoals in
          het voorbeeld:
              `,exampleSolutions:this.question1Solution,answer:this.question1Answer()});if(e||!t){if(e&&e.context.name==="AbortError")return;console.error(e),this.snackBar.open(`Er ging iets mis! ${e}`);return}if(t.tips?.length>0&&(this.question1Tips.set(t.tips),this.scrollToBottom()),!t.isCorrect){this.bottomSheet.open(N,{data:{message:t.feedback}});return}}catch(t){console.error(t),this.snackBar.open(`Er ging iets mis! ${t}`)}finally{this.checking.set(!1),this.abortController.set(void 0)}}super.check()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=w(i)))(n||i)}})();static \u0275cmp=C({type:i,selectors:[["app-make"]],features:[b],decls:5,vars:7,consts:[["questions",""],[3,"exerciseId","progress"],[1,"flex","flex-auto","flex-col","pb-6","overflow-auto"],[3,"check","continue","checked","checking","correct","isCheckDisabled"],[1,"flex","flex-col","gap-2","max-w-2xl","mx-auto","px-4","py-6","w-full"],[1,"text-base","text-justify"],["alt","MsgBox voorbeeld","height","320","ngSrc","/images/adventure/checklist/make/MsgBox.png","priority","","width","242"],[1,"flex","flex-col","max-w-2xl","mx-auto","w-full"],[1,"mx-auto"],["contenteditable","","language","vbnet","spellcheck","false",3,"input","keydown"],[1,"flex","flex-col","items-start","gap-4","mt-2"],["matButton","outlined","type","button",3,"click"],[1,"list-disc","text-base","pl-6"]],template:function(e,n){if(e&1){let a=k();_(0,"app-exercise-header",1),r(1,"section",2,0),g(3,P,13,2),o(),r(4,"app-exercise-footer",3),f("check",function(){return d(a),m(n.check())})("continue",function(){return d(a),m(n.continue())}),o()}e&2&&(x("exerciseId",n.exerciseId())("progress",n.progress()),s(3),h(n.question()>=1?3:-1),s(),x("checked",n.checked())("checking",n.checking())("correct",n.correct())("isCheckDisabled",n.isCheckDisabled()))},dependencies:[D,z,V,q,B,I,A],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}"],changeDetection:0})};export{F as Make};
