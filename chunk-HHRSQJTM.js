import{a as D,b as E,d as j,e as z,f as B,g as V}from"./chunk-XKCSFNB7.js";import"./chunk-RAYIDBLW.js";import"./chunk-K3O36QD3.js";import{b as q}from"./chunk-OAARWS43.js";import"./chunk-UMGIAK6N.js";import"./chunk-JJS4FTEB.js";import"./chunk-J45A7UTJ.js";import"./chunk-VYHX26DZ.js";import"./chunk-KZC6YT6O.js";import{b as y}from"./chunk-AZN3ND4J.js";import"./chunk-RG7VMJRO.js";import{Ba as C,Db as A,Fa as w,Pa as g,Qa as k,Ra as b,Ta as S,Ua as I,Va as f,W as d,Wa as o,X as m,Xa as r,Ya as M,bb as h,db as _,fa as u,fb as c,ja as v,ra as s,tb as l,ub as x,vb as T}from"./chunk-VTYUZ2GX.js";import"./chunk-WMVSLYLA.js";function L(n,t){if(n&1&&(o(0,"li"),l(1),r()),n&2){let e=t.$implicit;s(),x(e)}}function P(n,t){if(n&1&&(o(0,"ul",11),S(1,L,2,1,"li",null,b),r()),n&2){let e=c(3);s(),I(e.question1Tips())}}function F(n,t){if(n&1){let e=h();o(0,"div",4)(1,"div",9)(2,"button",10),_("click",function(){d(e);let a=c(2);return m(a.question1ShowTips.set(!a.question1ShowTips()))}),o(3,"mat-icon"),l(4),r(),o(5,"span"),l(6,"Tips"),r()(),g(7,P,3,0,"ul",11),r()()}if(n&2){let e=c(2);s(4),x(e.question1ShowTips()?"expand_less":"expand_more"),s(3),k(e.question1ShowTips()?7:-1)}}function H(n,t){if(n&1){let e=h();o(0,"div",4)(1,"p",5),l(2," In deze oefening maak je zelf een volledige oplossing. Werk de oefening best eerst uit in Excel, zodat je kan testen of alles correct werkt. Plak daarna je code hieronder om ze te laten controleren. "),r(),o(3,"p",5),l(4," De controle gebeurt met AI. Het kan dus even duren voor je feedback krijgt, maar die is op maat van jouw oplossing. "),r(),o(5,"p",5),l(6," Schrijf nu zelf een programma met de titel Sport dat twee arrays van 3 elementen (index 1 t.e.m. 3) aanmaakt waarvan 1 dat kommagetallen kan opslaan. Het programma vraagt met behulp van een Do...Loop Until-lus via een InputBox eerst de naam van elke sport en daarna hoeveel kiloCalorie\xEBn per minuut je met die sport verbrandt, waarbij het nummer van de sport telkens vermeld wordt in de vraag. Vervolgens laat het programma de gebruiker via een InputBox kiezen welke sport hij of zij doet (keuze 1 t.e.m. 3). Daarna bereken je hoeveel minuten nodig zijn om 500 kcal te verbranden met de gekozen sport. Toon tot slot het resultaat met \xE9\xE9n MsgBox in het formaat: \u201CJe moet X minuten gekozensport doen om 500 kcal te halen.\u201D. "),r()(),o(7,"div",6)(8,"pre",7)(9,"code",8),_("input",function(a){d(e);let p=c();return m(p.question1Answer.set(a.target.innerHTML))})("keydown",function(a){d(e);let p=c();return m(p.tabTo4Spaces(a))}),l(10),r()()(),g(11,F,8,2,"div",4)}if(n&2){let e=c();s(10),T("",e.question1Answer(),`
`),s(),k(e.question1Tips().length>0?11:-1)}}var N=class n extends j{totalQuestions=1;question1Answer=u(`Option Explicit
Option Base 1

Sub Sport()

End Sub`);question1Tips=u([]);question1ShowTips=u(!1);question1Solution=`Option Explicit
Option Base 1

Sub Sport()
    Const AANTAL As Integer = 3
    Dim strSport(AANTAL) As String
    Dim sngCalPerMin(AANTAL) As Single
    Dim intI As Integer
    Dim intKeuze As Integer
    Dim sngMinuten As Single

    intI = 1
    Do
        strSport(intI) = InputBox("Geef de naam van sport " & intI & ":")
        sngCalPerMin(intI) = CSng(InputBox( _
            "Hoeveel kcal per minuut verbrand je met " & strSport(intI) & "?"))
        intI = intI + 1
    Loop Until intI > AANTAL

    intKeuze = CInt(InputBox( _
        "Welke sport kies je?" & vbNewLine & _
        "1: " & strSport(1) & vbNewLine & _
        "2: " & strSport(2) & vbNewLine & _
        "3: " & strSport(3)))

    sngMinuten = 500 / sngCalPerMin(intKeuze)

    MsgBox "Je moet " & CStr(sngMinuten) & _
           " minuten " & strSport(intKeuze) & _
           " doen om 500 kcal te halen."

End Sub
`;isCheckDisabled=A(()=>{switch(this.question()){case 1:return!this.question1Answer()||this.checking()}return!1});async check(){if(this.question()===1){this.checking.set(!0);try{this.abortController.set(new AbortController);let{data:t,error:e}=await this.adventureService.validateCodeUsingAI({abortSignal:this.abortController()?.signal,question:`
        Schrijf nu zelf een programma met de titel Sport dat twee arrays van 3 elementen (index 1 t.e.m. 3) 
        aanmaakt waarvan 1 dat kommagetallen kan opslaan. Het programma vraagt met behulp van een Do...Loop Until-lus via een
        InputBox eerst de naam van elke sport en daarna hoeveel kiloCalorie\xEBn per minuut je met die sport verbrandt, 
        waarbij het nummer van de sport telkens vermeld wordt in de vraag. Vervolgens laat het programma de gebruiker 
        via een InputBox kiezen welke sport hij of zij doet (keuze 1 t.e.m. 3). 
        Daarna bereken je hoeveel minuten nodig zijn om 500 kcal te verbranden met de gekozen sport. 
        Toon tot slot het resultaat met \xE9\xE9n MsgBox in het 
        formaat: \u201CJe moet X minuten gekozensport doen om 500 kcal te halen.\u201D.
              `,exampleSolutions:this.question1Solution,answer:this.question1Answer()});if(e||!t){if(e&&e.context.name==="AbortError")return;console.error(e),this.snackBar.open(`Er ging iets mis! ${e}`);return}if(t.tips?.length>0&&(this.question1Tips.set(t.tips),this.scrollToBottom()),!t.isCorrect){this.bottomSheet.open(z,{data:{message:t.feedback}});return}}catch(t){console.error(t),this.snackBar.open(`Er ging iets mis! ${t}`)}finally{this.checking.set(!1),this.abortController.set(void 0)}}super.check()}static \u0275fac=(()=>{let t;return function(i){return(t||(t=v(n)))(i||n)}})();static \u0275cmp=C({type:n,selectors:[["app-make"]],features:[w],decls:5,vars:7,consts:[["questions",""],[3,"exerciseId","progress"],[1,"flex","flex-auto","flex-col","pb-6","overflow-auto"],[3,"check","continue","checked","checking","correct","isCheckDisabled"],[1,"flex","flex-col","gap-2","max-w-2xl","mx-auto","px-4","py-6","w-full"],[1,"text-base","text-justify"],[1,"flex","flex-col","max-w-2xl","mx-auto","w-full"],[1,"mx-auto"],["contenteditable","","language","vbnet","spellcheck","false",3,"input","keydown"],[1,"flex","flex-col","items-start","gap-4","mt-2"],["matButton","outlined","type","button",3,"click"],[1,"list-disc","text-base","pl-6"]],template:function(e,i){if(e&1){let a=h();M(0,"app-exercise-header",1),o(1,"section",2,0),g(3,H,12,2),r(),o(4,"app-exercise-footer",3),_("check",function(){return d(a),m(i.check())})("continue",function(){return d(a),m(i.continue())}),r()}e&2&&(f("exerciseId",i.exerciseId())("progress",i.progress()),s(3),k(i.question()>=1?3:-1),s(),f("checked",i.checked())("checking",i.checking())("correct",i.correct())("isCheckDisabled",i.isCheckDisabled()))},dependencies:[E,V,B,D,q,y],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}"],changeDetection:0})};export{N as Make};
