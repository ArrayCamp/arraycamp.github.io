import{a as A,b as q,d as j,e as B,f as V,g as N}from"./chunk-XKCSFNB7.js";import"./chunk-RAYIDBLW.js";import"./chunk-K3O36QD3.js";import{b as D}from"./chunk-OAARWS43.js";import"./chunk-UMGIAK6N.js";import"./chunk-JJS4FTEB.js";import"./chunk-J45A7UTJ.js";import"./chunk-VYHX26DZ.js";import"./chunk-KZC6YT6O.js";import{b as y}from"./chunk-AZN3ND4J.js";import"./chunk-RG7VMJRO.js";import{Ba as w,Db as M,Fa as C,Pa as g,Qa as h,Ra as b,Ta as S,Ua as E,Va as _,W as d,Wa as o,X as m,Xa as a,Ya as T,bb as f,db as x,fa as u,fb as c,ja as k,ra as s,tb as l,ub as v,vb as I}from"./chunk-VTYUZ2GX.js";import"./chunk-WMVSLYLA.js";function L(n,t){if(n&1&&(o(0,"li"),l(1),a()),n&2){let e=t.$implicit;s(),v(e)}}function H(n,t){if(n&1&&(o(0,"ul",11),S(1,L,2,1,"li",null,b),a()),n&2){let e=c(3);s(),E(e.question1Tips())}}function P(n,t){if(n&1){let e=f();o(0,"div",4)(1,"div",9)(2,"button",10),x("click",function(){d(e);let r=c(2);return m(r.question1ShowTips.set(!r.question1ShowTips()))}),o(3,"mat-icon"),l(4),a(),o(5,"span"),l(6,"Tips"),a()(),g(7,H,3,0,"ul",11),a()()}if(n&2){let e=c(2);s(4),v(e.question1ShowTips()?"expand_less":"expand_more"),s(3),h(e.question1ShowTips()?7:-1)}}function z(n,t){if(n&1){let e=f();o(0,"div",4)(1,"p",5),l(2," In deze oefening maak je zelf een volledige oplossing. Werk de oefening best eerst uit in Excel, zodat je kan testen of alles correct werkt. Plak daarna je code hier om ze te laten controleren. "),a(),o(3,"p",5),l(4," De controle gebeurt met AI. Het kan dus even duren voor je feedback krijgt, maar die is op maat van jouw oplossing. "),a(),o(5,"p",5),l(6," Schrijf nu zelf een programma met de naam Kaartspel dat een integer-array van 5 elementen (index 1 t.e.m. 5) aanmaakt en de nodige hulpvariabelen declareert. Het programma vraagt met behulp van een For-lus voor elke speler via een InputBox hoeveel spelletjes die speler gewonnen heeft, waarbij het nummer van de speler in de vraag vermeld wordt (bv. \u201CGeef het aantal wins van speler 1:\u201D). Elke ingegeven waarde wordt in de array opgeslagen. Daarna bepaal je het hoogste aantal wins, waarbij je start met het eerste element van de array als voorlopig maximum en dit vergelijkt met de overige waarden. Toon tot slot het hoogste aantal wins met \xE9\xE9n MsgBox in het formaat: \u201CHoogste score is: X\u201D. "),a()(),o(7,"div",6)(8,"pre",7)(9,"code",8),x("input",function(r){d(e);let p=c();return m(p.question1Answer.set(r.target.innerHTML))})("keydown",function(r){d(e);let p=c();return m(p.tabTo4Spaces(r))}),l(10),a()()(),g(11,P,8,2,"div",4)}if(n&2){let e=c();s(10),I("",e.question1Answer(),`
`),s(),h(e.question1Tips().length>0?11:-1)}}var F=class n extends j{totalQuestions=1;question1Answer=u(`Option Explicit
Option Base 1

Sub Kaartspel()

End Sub`);question1Tips=u([]);question1ShowTips=u(!1);question1Solution=`Option Explicit
Option Base 1

Sub Kaartspel()

    Const AANTAL_SPELERS As Integer = 5
    Dim intWins(AANTAL_SPELERS) As Integer
    Dim intI As Integer
    Dim intMax As Integer

    For intI = 1 To AANTAL_SPELERS
        intWins(intI) = CInt(InputBox("Geef het aantal wins van speler " & CStr(intI) & ":"))
    Next intI

    intMax = intWins(1)

    For intI = 2 To AANTAL_SPELERS
        If intWins(intI) > intMax Then
            intMax = intWins(intI)
        End If
    Next intI

    MsgBox ("Hoogste score is: " & CStr(intMax))


End Sub`;isCheckDisabled=M(()=>{switch(this.question()){case 1:return!this.question1Answer()||this.checking()}return!1});async check(){if(this.question()===1){this.checking.set(!0);try{this.abortController.set(new AbortController);let{data:t,error:e}=await this.adventureService.validateCodeUsingAI({abortSignal:this.abortController()?.signal,question:`
          Schrijf nu zelf een programma met de naam Kaartspel dat een integer-array van 5 elementen (index 1 t.e.m. 5) 
          aanmaakt en de nodige hulpvariabelen declareert. Het programma vraagt met behulp van een For-lus voor elke speler
           via een InputBox hoeveel spelletjes die speler gewonnen heeft, waarbij het nummer van de speler in de vraag
            vermeld wordt (bv. \u201CGeef het aantal wins van speler 1:\u201D). Elke ingegeven waarde wordt in de array opgeslagen. 
            Daarna bepaal je het hoogste aantal wins, waarbij je start met het eerste element van de array als 
            voorlopig maximum en dit vergelijkt met de overige waarden. 
            Toon tot slot het hoogste aantal wins met \xE9\xE9n MsgBox in het formaat: \u201CHoogste score is: X\u201D.
          `,exampleSolutions:this.question1Solution,answer:this.question1Answer()});if(e||!t){if(e&&e.context.name==="AbortError")return;console.error(e),this.snackBar.open(`Er ging iets mis! ${e}`);return}if(t.tips?.length>0&&(this.question1Tips.set(t.tips),this.scrollToBottom()),!t.isCorrect){this.bottomSheet.open(B,{data:{message:t.feedback}});return}}catch(t){console.error(t),this.snackBar.open(`Er ging iets mis! ${t}`)}finally{this.checking.set(!1),this.abortController.set(void 0)}}super.check()}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(n)))(i||n)}})();static \u0275cmp=w({type:n,selectors:[["app-make"]],features:[C],decls:5,vars:7,consts:[["questions",""],[3,"exerciseId","progress"],[1,"flex","flex-auto","flex-col","pb-6","overflow-auto"],[3,"check","continue","checked","checking","correct","isCheckDisabled"],[1,"flex","flex-col","gap-2","max-w-2xl","mx-auto","px-4","py-6","w-full"],[1,"text-base","text-justify"],[1,"flex","flex-col","max-w-2xl","mx-auto","w-full"],[1,"mx-auto"],["contenteditable","","language","vbnet","spellcheck","false",3,"input","keydown"],[1,"flex","flex-col","items-start","gap-4","mt-2"],["matButton","outlined","type","button",3,"click"],[1,"list-disc","text-base","pl-6"]],template:function(e,i){if(e&1){let r=f();T(0,"app-exercise-header",1),o(1,"section",2,0),g(3,z,12,2),a(),o(4,"app-exercise-footer",3),x("check",function(){return d(r),m(i.check())})("continue",function(){return d(r),m(i.continue())}),a()}e&2&&(_("exerciseId",i.exerciseId())("progress",i.progress()),s(3),h(i.question()>=1?3:-1),s(),_("checked",i.checked())("checking",i.checking())("correct",i.correct())("isCheckDisabled",i.isCheckDisabled()))},dependencies:[q,N,V,A,D,y],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}"],changeDetection:0})};export{F as Make};
