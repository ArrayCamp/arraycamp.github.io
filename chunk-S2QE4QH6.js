import{a as B,b as y,d as z,e as M,f as q,g as V}from"./chunk-XKCSFNB7.js";import"./chunk-RAYIDBLW.js";import"./chunk-K3O36QD3.js";import{b as D}from"./chunk-OAARWS43.js";import"./chunk-UMGIAK6N.js";import"./chunk-JJS4FTEB.js";import"./chunk-J45A7UTJ.js";import"./chunk-VYHX26DZ.js";import"./chunk-KZC6YT6O.js";import{b as S}from"./chunk-AZN3ND4J.js";import"./chunk-RG7VMJRO.js";import{Ba as b,Db as T,Fa as A,Pa as g,Qa as f,Ra as C,Ta as w,Ua as I,Va as x,W as c,Wa as a,X as p,Xa as o,Ya as j,bb as h,db as _,fa as u,fb as d,ja as k,ra as s,tb as l,ub as v,vb as E}from"./chunk-VTYUZ2GX.js";import"./chunk-WMVSLYLA.js";function N(n,t){if(n&1&&(a(0,"li"),l(1),o()),n&2){let e=t.$implicit;s(),v(e)}}function L(n,t){if(n&1&&(a(0,"ul",11),w(1,N,2,1,"li",null,C),o()),n&2){let e=d(3);s(),I(e.question1Tips())}}function F(n,t){if(n&1){let e=h();a(0,"div",4)(1,"div",9)(2,"button",10),_("click",function(){c(e);let r=d(2);return p(r.question1ShowTips.set(!r.question1ShowTips()))}),a(3,"mat-icon"),l(4),o(),a(5,"span"),l(6,"Tips"),o()(),g(7,L,3,0,"ul",11),o()()}if(n&2){let e=d(2);s(4),v(e.question1ShowTips()?"expand_less":"expand_more"),s(3),f(e.question1ShowTips()?7:-1)}}function R(n,t){if(n&1){let e=h();a(0,"div",4)(1,"p",5),l(2," In deze oefening maak je zelf een volledige oplossing. Werk de oefening best eerst uit in Excel, zodat je kan testen of alles correct werkt. Plak daarna je code hier om ze te laten controleren. "),o(),a(3,"p",5),l(4," De controle gebeurt met AI. Het kan dus even duren voor je feedback krijgt, maar die is op maat van jouw oplossing. "),o(),a(5,"p",5),l(6," Schrijf nu zelf een programma met de naam CampingPlaatsen dat een boolean-array van 10 elementen (index 1 t.e.m. 10) aanmaakt om per campingplaats bij te houden of die bezet is, en de nodige hulpvariabelen declareert. Het programma vraagt met behulp van een for-lus via een InputBox voor elke plaats of deze bezet is (1 = ja, 0 = nee), waarbij het nummer van de plaats in de vraag vermeld wordt, en slaat dit telkens op in de array boolBezet. Daarna geef je deze array door aan een functie die de eerste vrije campingplaats opzoekt met een Do While..Loop en het nummer van die plaats teruggeeft (of 0 als er geen vrije plaats is). Daarna keer je terug naar het hoofdprogramma. Als er geen vrije plaats is, toon je met \xE9\xE9n MsgBox: \u201CDe camping is volledig volzet.\u201D. Als er wel een vrije plaats is, roep je een subroutine op die deze plaats reserveert (door de juiste waarde in de array aan te passen) en toon je daarna met \xE9\xE9n MsgBox: \u201CGereserveerd: plaats X\u201D. "),o()(),a(7,"div",6)(8,"pre",7)(9,"code",8),_("input",function(r){c(e);let m=d();return p(m.question1Answer.set(r.target.innerHTML))})("keydown",function(r){c(e);let m=d();return p(m.tabTo4Spaces(r))}),l(10),o()()(),g(11,F,8,2,"div",4)}if(n&2){let e=d();s(10),E("",e.question1Answer(),`
`),s(),f(e.question1Tips().length>0?11:-1)}}var P=class n extends z{totalQuestions=1;question1Answer=u(`Option Explicit
Option Base 1

Sub CampingPlaatsen()

End Sub`);question1Tips=u([]);question1ShowTips=u(!1);question1Solution=`Option Explicit
   Option Base 1

   Sub CampingPLaatsen()

      Const AANTAL_PLAATSEN As Integer = 10
      Dim boolBezet(AANTAL_PLAATSEN) As Boolean
      Dim intI As Integer
      Dim intVrij As Integer
      Dim intAntwoord As Integer

      For intI = 1 To AANTAL_PLAATSEN
          intAntwoord = CInt(InputBox("Is plaats " & intI & " bezet? (1 = ja, 0 = nee)"))
          If intAntwoord = 1 Then
             boolBezet(intI) = True
          Else
             boolBezet(intI) = False
          End If
      Next intI

      intVrij = ZoekEersteVrijePlaats(boolBezet, AANTAL_PLAATSEN)

      If intVrij = 0 Then
         MsgBox "De camping is volledig volzet."
      Else
        Call ReserveerPlaats(boolBezet, intVrij)
         MsgBox "Gereserveerd: plaats " & intVrij
      End If

  End Sub

  Function ZoekEersteVrijePlaats(ByRef boolBezet() As Boolean, ByVal intAantal As Integer) As Integer

    Dim intI As Integer
    Dim intResultaat As Integer

    intResultaat = 0
    intI = 1

    Do While intI <= intAantal
      If boolBezet(intI) = False And intResultaat = 0 Then
         intResultaat = intI
      End If
          intI = intI + 1
    Loop

    ZoekEersteVrijePlaats = intResultaat

  End Function

  Sub ReserveerPlaats(ByRef boolBezet() As Boolean, ByVal intPlaats As Integer)
      boolBezet(intPlaats) = True
  End Sub`;isCheckDisabled=T(()=>{switch(this.question()){case 1:return!this.question1Answer()||this.checking()}return!1});async check(){if(this.question()===1){this.checking.set(!0);try{this.abortController.set(new AbortController);let{data:t,error:e}=await this.adventureService.validateCodeUsingAI({abortSignal:this.abortController()?.signal,question:`
          Schrijf nu zelf een programma met de naam CampingPlaatsen dat een boolean-array van 10 elementen 
          (index 1 t.e.m. 10) aanmaakt om per campingplaats bij te houden of die bezet is, 
          en de nodige hulpvariabelen declareert. Het programma vraagt met behulp van een for-lus via een InputBox 
          voor elke plaats of deze bezet is (1 = ja, 0 = nee), waarbij het nummer van de plaats in de vraag vermeld wordt, 
          en slaat dit telkens op in de array boolBezet. Daarna geef je deze array door aan een functie die de eerste vrije 
          campingplaats opzoekt met een Do While..Loop en het nummer van die plaats teruggeeft (of 0 als er geen vrije plaats is). Daarna keer je terug 
          naar het hoofdprogramma. Als er geen vrije plaats is, toon je met \xE9\xE9n MsgBox: \u201CDe camping is volledig volzet.\u201D. 
          Als er wel een vrije plaats is, roep je een subroutine op die deze plaats reserveert 
          (door de juiste waarde in de array aan te passen) en toon je daarna met \xE9\xE9n MsgBox: \u201CGereserveerd: plaats X\u201D.
            `,exampleSolutions:this.question1Solution,answer:this.question1Answer()});if(e||!t){if(e&&e.context.name==="AbortError")return;console.error(e),this.snackBar.open(`Er ging iets mis! ${e}`);return}if(t.tips?.length>0&&(this.question1Tips.set(t.tips),this.scrollToBottom()),!t.isCorrect){this.bottomSheet.open(M,{data:{message:t.feedback}});return}}catch(t){console.error(t),this.snackBar.open(`Er ging iets mis! ${t}`)}finally{this.checking.set(!1),this.abortController.set(void 0)}}super.check()}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(n)))(i||n)}})();static \u0275cmp=b({type:n,selectors:[["app-make"]],features:[A],decls:5,vars:7,consts:[["questions",""],[3,"exerciseId","progress"],[1,"flex","flex-auto","flex-col","pb-6","overflow-auto"],[3,"check","continue","checked","checking","correct","isCheckDisabled"],[1,"flex","flex-col","gap-2","max-w-2xl","mx-auto","px-4","py-6","w-full"],[1,"text-base","text-justify"],[1,"flex","flex-col","max-w-2xl","mx-auto","w-full"],[1,"mx-auto"],["contenteditable","","language","vbnet","spellcheck","false",3,"input","keydown"],[1,"flex","flex-col","items-start","gap-4","mt-2"],["matButton","outlined","type","button",3,"click"],[1,"list-disc","text-base","pl-6"]],template:function(e,i){if(e&1){let r=h();j(0,"app-exercise-header",1),a(1,"section",2,0),g(3,R,12,2),o(),a(4,"app-exercise-footer",3),_("check",function(){return c(r),p(i.check())})("continue",function(){return c(r),p(i.continue())}),o()}e&2&&(x("exerciseId",i.exerciseId())("progress",i.progress()),s(3),f(i.question()>=1?3:-1),s(),x("checked",i.checked())("checking",i.checking())("correct",i.correct())("isCheckDisabled",i.isCheckDisabled()))},dependencies:[y,V,q,B,D,S],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}"],changeDetection:0})};export{P as Make};
