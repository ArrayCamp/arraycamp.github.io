import{a as B,b as y,d as j,e as q,f as z,g as V}from"./chunk-XKCSFNB7.js";import"./chunk-RAYIDBLW.js";import"./chunk-K3O36QD3.js";import{b as M}from"./chunk-OAARWS43.js";import"./chunk-UMGIAK6N.js";import"./chunk-JJS4FTEB.js";import"./chunk-J45A7UTJ.js";import"./chunk-VYHX26DZ.js";import"./chunk-KZC6YT6O.js";import{b as A}from"./chunk-AZN3ND4J.js";import"./chunk-RG7VMJRO.js";import{Ba as C,Db as S,Fa as b,Pa as p,Qa as f,Ra as w,Ta as D,Ua as T,Va as x,W as c,Wa as o,X as g,Xa as a,Ya as I,bb as v,db as h,fa as u,fb as d,ja as k,ra as s,tb as l,ub as _,vb as E}from"./chunk-VTYUZ2GX.js";import"./chunk-WMVSLYLA.js";function N(n,t){if(n&1&&(o(0,"li"),l(1),a()),n&2){let e=t.$implicit;s(),_(e)}}function F(n,t){if(n&1&&(o(0,"ul",11),D(1,N,2,1,"li",null,w),a()),n&2){let e=d(3);s(),T(e.question1Tips())}}function L(n,t){if(n&1){let e=v();o(0,"div",4)(1,"div",9)(2,"button",10),h("click",function(){c(e);let r=d(2);return g(r.question1ShowTips.set(!r.question1ShowTips()))}),o(3,"mat-icon"),l(4),a(),o(5,"span"),l(6,"Tips"),a()(),p(7,F,3,0,"ul",11),a()()}if(n&2){let e=d(2);s(4),_(e.question1ShowTips()?"expand_less":"expand_more"),s(3),f(e.question1ShowTips()?7:-1)}}function G(n,t){if(n&1){let e=v();o(0,"div",4)(1,"p",5),l(2," In deze oefening maak je zelf een volledige oplossing. Werk de oefening best eerst uit in Excel, zodat je kan testen of alles correct werkt. Plak daarna je code hieronder om ze te laten controleren. "),a(),o(3,"p",5),l(4," De controle gebeurt met AI. Het kan dus even duren voor je feedback krijgt, maar die is op maat van jouw oplossing. "),a(),o(5,"p",5),l(6," Schrijf nu zelf een programma met de naam Hittegolf dat een integer-array van 5 elementen (index 1 t.e.m. 5) aanmaakt om dagmaxima op te slaan en de nodige hulpvariabelen declareert. Het programma vraagt met behulp van een Do While-lus voor elke dag via een InputBox het dagmaximum, waarbij het nummer van de dag in de vraag vermeld wordt (bv. \u201CGeef dagmaximum voor dag 1 (tussen -10 en 50\xB0C):\u201D). Enkel invoerwaarden tussen -10 en 50 (inclusief) zijn geldig: bij ongeldige invoer moet dezelfde dag opnieuw gevraagd worden en mag je niet doorschuiven naar de volgende dag. Elke geldige temperatuur wordt in de array opgeslagen. Daarna ga je met een For-lus na hoeveel dagen boven 25\xB0C liggen en hoeveel dagen boven 30\xB0C liggen. Toon tot slot met \xE9\xE9n MsgBox \u201CHittegolf gedetecteerd!\u201D als alle 5 dagen boven 25\xB0C zijn \xE9n er binnen die 5 dagen minstens 3 dagen boven 30\xB0C zijn, anders toon je \u201CGeen hittegolf.\u201D. "),a()(),o(7,"div",6)(8,"pre",7)(9,"code",8),h("input",function(r){c(e);let m=d();return g(m.question1Answer.set(r.target.innerHTML))})("keydown",function(r){c(e);let m=d();return g(m.tabTo4Spaces(r))}),l(10),a()()(),p(11,L,8,2,"div",4)}if(n&2){let e=d();s(10),E("",e.question1Answer(),`
`),s(),f(e.question1Tips().length>0?11:-1)}}var H=class n extends j{totalQuestions=1;question1Answer=u(`Option Explicit
Option Base 1

Sub Hittegolf()

End Sub`);question1Tips=u([]);question1ShowTips=u(!1);question1Solution=`Option Explicit
Option Base 1

Sub Hittegolf()

    Const AANTAL As Integer = 5
    Dim intTemp(AANTAL) As Integer
    Dim intDag As Integer
    Dim intInvoer As Integer
    Dim intDagenBoven25 As Integer
    Dim intDagenBoven30 As Integer

    intDag = 1

    Do While intDag <= AANTAL

        intInvoer = CInt(InputBox("Geef dagmaximum voor dag " & CStr(intDag) & " (tussen -10 en 50 \xB0C):"))

        If (intInvoer >= -10 And intInvoer <= 50) Then
            intTemp(intDag) = intInvoer
            intDag = intDag + 1
        End If

    Loop

    For intDag = 1 To AANTAL
        If intTemp(intDag) > 25 Then
            intDagenBoven25 = intDagenBoven25 + 1
        End If
        If intTemp(intDag) > 30 Then
            intDagenBoven30 = intDagenBoven30 + 1
        End If
    Next intDag

    If intDagenBoven25 = AANTAL And intDagenBoven30 >= 3 Then
        MsgBox "Hittegolf gedetecteerd!"
    Else
        MsgBox "Geen hittegolf."
    End If

End Sub`;isCheckDisabled=S(()=>{switch(this.question()){case 1:return!this.question1Answer()||this.checking()}return!1});async check(){if(this.question()===1){this.checking.set(!0);try{this.abortController.set(new AbortController);let{data:t,error:e}=await this.adventureService.validateCodeUsingAI({abortSignal:this.abortController()?.signal,question:`
            Schrijf nu zelf een programma met de naam Hittegolf dat een integer-array van 5 elementen (index 1 t.e.m. 5) 
            aanmaakt om dagmaxima op te slaan en de nodige hulpvariabelen declareert. Het programma vraagt met behulp 
            van een Do While-lus voor elke dag via een InputBox het dagmaximum, waarbij het nummer van de dag in de vraag 
            vermeld wordt (bv. \u201CGeef dagmaximum voor dag 1 (tussen -10 en 50\xB0C):\u201D). Enkel invoerwaarden tussen -10 en 50 
            (inclusief) zijn geldig: bij ongeldige invoer moet dezelfde dag opnieuw gevraagd worden en mag je niet 
            doorschuiven naar de volgende dag. Elke geldige temperatuur wordt in de array opgeslagen. 
            Daarna ga je met een For-lus na hoeveel dagen boven 25\xB0C liggen en hoeveel dagen boven 30\xB0C liggen. 
            Toon tot slot met \xE9\xE9n MsgBox \u201CHittegolf gedetecteerd!\u201D als alle 5 dagen boven 25\xB0C zijn \xE9n er binnen die 5 dagen
            minstens 3 dagen boven 30\xB0C zijn, anders toon je \u201CGeen hittegolf.\u201D.
          `,exampleSolutions:this.question1Solution,answer:this.question1Answer()});if(e||!t){if(e&&e.context.name==="AbortError")return;console.error(e),this.snackBar.open(`Er ging iets mis! ${e}`);return}if(t.tips?.length>0&&(this.question1Tips.set(t.tips),this.scrollToBottom()),!t.isCorrect){this.bottomSheet.open(q,{data:{message:t.feedback}});return}}catch(t){console.error(t),this.snackBar.open(`Er ging iets mis! ${t}`)}finally{this.checking.set(!1),this.abortController.set(void 0)}}super.check()}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(n)))(i||n)}})();static \u0275cmp=C({type:n,selectors:[["app-make"]],features:[b],decls:5,vars:7,consts:[["questions",""],[3,"exerciseId","progress"],[1,"flex","flex-auto","flex-col","pb-6","overflow-auto"],[3,"check","continue","checked","checking","correct","isCheckDisabled"],[1,"flex","flex-col","gap-2","max-w-2xl","mx-auto","px-4","py-6","w-full"],[1,"text-base","text-justify"],[1,"flex","flex-col","max-w-2xl","mx-auto","w-full"],[1,"mx-auto"],["contenteditable","","language","vbnet","spellcheck","false",3,"input","keydown"],[1,"flex","flex-col","items-start","gap-4","mt-2"],["matButton","outlined","type","button",3,"click"],[1,"list-disc","text-base","pl-6"]],template:function(e,i){if(e&1){let r=v();I(0,"app-exercise-header",1),o(1,"section",2,0),p(3,G,12,2),a(),o(4,"app-exercise-footer",3),h("check",function(){return c(r),g(i.check())})("continue",function(){return c(r),g(i.continue())}),a()}e&2&&(x("exerciseId",i.exerciseId())("progress",i.progress()),s(3),f(i.question()>=1?3:-1),s(),x("checked",i.checked())("checking",i.checking())("correct",i.correct())("isCheckDisabled",i.isCheckDisabled()))},dependencies:[y,V,z,B,M,A],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}"],changeDetection:0})};export{H as Make};
