import{a as O}from"./chunk-WRTEGAD3.js";import{h as E}from"./chunk-SDQEQCA5.js";import{b as F,c as N,d as T,e as B,f as V,g as K}from"./chunk-XKCSFNB7.js";import"./chunk-RAYIDBLW.js";import"./chunk-K3O36QD3.js";import"./chunk-OAARWS43.js";import"./chunk-UMGIAK6N.js";import{b as I,e as S,i as v,l as D}from"./chunk-XTKGURG6.js";import"./chunk-JJS4FTEB.js";import"./chunk-J45A7UTJ.js";import"./chunk-VYHX26DZ.js";import"./chunk-KZC6YT6O.js";import"./chunk-AZN3ND4J.js";import"./chunk-RG7VMJRO.js";import{Ba as y,Fa as k,Nb as b,Pa as g,Qa as h,Va as p,W as l,Wa as i,X as u,Xa as n,Ya as A,bb as x,db as M,fa as m,fb as f,ja as w,ra as c,tb as r,xb as _,yb as C,zb as q}from"./chunk-VTYUZ2GX.js";import"./chunk-WMVSLYLA.js";function L(o,a){if(o&1&&(i(0,"app-feedback-button",11)(1,"p",12),r(2," Door intMax te starten met het eerste element van de array, vergelijk je alle waarden met een bestaande kaartwaarde. Zo wordt het echte maximum correct bepaald. "),n(),i(3,"p",13),r(4,"Met welke waarde moet je starten als je het hoogste getal uit een array wil bepalen?"),n()()),o&2){let e=f(2);p("correct",e.question1Correct())("feedback",e.question1ShowFeedback())}}function P(o,a){if(o&1){let e=x();i(0,"div",4)(1,"p",5),r(2," In de vorige opgave heb je de foute regel code aangeduid. Pas nu die foute regel code aan. "),n(),i(3,"p",5),r(4," Als het programma correct zou werken, dan zou het hoogste aantal kaarten dat een speler moet trekken bepaald en getoond worden in een MsgBox. "),n()(),i(5,"div",6)(6,"pre")(7,"code",7),r(8,`Option Explicit
Option Base 1

Sub Kaartspel()

  Const AANTAL As Integer = 4
  Dim intAantalKaarten(AANTAL) As Integer
  Dim intI As Integer
  Dim intMax As Integer

  For intI = 1 To AANTAL
    intAantalKaarten(intI) = intI * 2
  Next intI

`),n()(),i(9,"mat-form-field",8)(10,"input",9),q("ngModelChange",function(s){l(e);let d=f();return C(d.question1Answer,s)||(d.question1Answer=s),u(s)}),n()(),i(11,"pre")(12,"code",10),r(13,`

  For intI = 1 To AANTAL
    If intAantalKaarten(intI) > intMax Then
       intMax = intAantalKaarten(intI)
    End If
  Next intI

  MsgBox ("Hoogste aantal kaarten dat een speler moet trekken is: " & CStr(intMax))

End Sub
`),n()(),g(14,L,5,2,"app-feedback-button",11),n()}if(o&2){let e=f();c(10),_("ngModel",e.question1Answer),c(4),h(e.question1Checked()||e.question()>1?14:-1)}}var j=class o extends T{totalQuestions=1;question1Answer=b();question1Checked=m(!1);question1Correct=m(!1);question1Solution="intMax = intAantalKaarten(1)";question1ShowFeedback=m(!1);ngOnInit(){this.question1Answer.set("intMax = 10")}check(){if(this.question()===1&&(this.question1Checked.set(!0),this.question1Correct.set(this.question1Answer()?.trim()===this.question1Solution),!this.question1Correct())){this.bottomSheet.open(B,{data:{seeAnswer:!0}}).afterDismissed().subscribe(e=>{e==="see-answer"&&(this.continueWithoutStar.set(!0),this.question1Answer.set(this.question1Solution),this.question1Correct.set(!0),this.question1ShowFeedback.set(!0),this.checked.set(!0),this.scrollToBottom())});return}super.check()}static \u0275fac=(()=>{let a;return function(t){return(a||(a=w(o)))(t||o)}})();static \u0275cmp=y({type:o,selectors:[["app-modify"]],inputs:{question1Answer:[1,"question1Answer"]},outputs:{question1Answer:"question1AnswerChange"},features:[k],decls:5,vars:6,consts:[["questions",""],[3,"exerciseId","progress"],[1,"flex","flex-auto","flex-col","pb-6","overflow-auto"],[3,"check","continue","checked","checking","correct"],[1,"flex","flex-col","gap-2","max-w-2xl","mx-auto","px-4","py-6","w-full"],[1,"text-xl","leading-relaxed"],[1,"flex","flex-col","max-w-2xl","mx-auto","w-full"],["language","vbnet",1,"pb-1!"],["appearance","outline","subscriptSizing","dynamic",1,"code","ml-12"],["matInput","","type","text",3,"ngModelChange","ngModel"],["language","vbnet",1,"pt-1!"],[3,"correct","feedback"],["correct",""],["tip",""]],template:function(e,t){if(e&1){let s=x();A(0,"app-exercise-header",1),i(1,"section",2,0),g(3,P,15,2),n(),i(4,"app-exercise-footer",3),M("check",function(){return l(s),u(t.check())})("continue",function(){return l(s),u(t.continue())}),n()}e&2&&(p("exerciseId",t.exerciseId())("progress",t.progress()),c(3),h(t.question()>=1?3:-1),c(),p("checked",t.checked())("checking",t.checking())("correct",t.correct()))},dependencies:[F,K,V,N,D,I,S,v,E,O],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}"],changeDetection:0})};export{j as Modify};
