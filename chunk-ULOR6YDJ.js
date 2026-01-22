import{a as j}from"./chunk-WRTEGAD3.js";import{h as D}from"./chunk-SDQEQCA5.js";import{b as N,c as B,d as E,e as F,f as L,g as V}from"./chunk-XKCSFNB7.js";import"./chunk-RAYIDBLW.js";import"./chunk-K3O36QD3.js";import"./chunk-OAARWS43.js";import"./chunk-UMGIAK6N.js";import{b as v,e as M,i as T,l as I}from"./chunk-XTKGURG6.js";import"./chunk-JJS4FTEB.js";import"./chunk-J45A7UTJ.js";import"./chunk-VYHX26DZ.js";import"./chunk-KZC6YT6O.js";import"./chunk-AZN3ND4J.js";import"./chunk-RG7VMJRO.js";import{Ba as y,Fa as A,Nb as S,Pa as h,Qa as g,Va as m,W as l,Wa as o,X as p,Xa as n,Ya as k,bb as x,db as _,fa as u,fb as f,ja as w,ra as c,tb as r,xb as b,yb as q,zb as C}from"./chunk-VTYUZ2GX.js";import"./chunk-WMVSLYLA.js";function P(i,s){if(i&1&&(o(0,"app-feedback-button",11)(1,"p",12),r(2," De array heeft AANTAL elementen en start bij index 1. Door tot en met AANTAL te lopen, worden alle boodschappen in de lijst opgenomen. "),n(),o(3,"p",13),r(4,"Tot welke index moet de lus lopen om alle elementen van de array te doorlopen?"),n()()),i&2){let e=f(2);m("correct",e.question1Correct())("feedback",e.question1ShowFeedback())}}function W(i,s){if(i&1){let e=x();o(0,"div",4)(1,"p",5),r(2," In de vorige opgave heb je de foute regel code aangeduid. Pas nu die foute regel code aan. "),n(),o(3,"p",5),r(4," Als het programma correct werkt, dan zouden alle kampeerspullen in het boodschappenlijstje verschijnen wanneer het programma wordt uitgevoerd. "),n()(),o(5,"div",6)(6,"pre")(7,"code",7),r(8,`Option Explicit
Option Base 1

Sub KampeerBoodschappen()

    Const AANTAL As Integer = 3
    Dim strBoodschappen(AANTAL) As String
    Dim strTekst As String
    Dim intI As Integer

    strBoodschappen(1) = "Tent"
    strBoodschappen(2) = "Slaapzak"
    strBoodschappen(3) = "Zwemshort"

    strTekst = "Boodschappenlijstje:" & vbNewLine

`),n()(),o(9,"mat-form-field",8)(10,"input",9),C("ngModelChange",function(a){l(e);let d=f();return q(d.question1Answer,a)||(d.question1Answer=a),p(a)}),n()(),o(11,"pre")(12,"code",10),r(13,`        strTekst = strTekst & "- " & strBoodschappen(intI) & vbNewLine
    Next intI

    MsgBox (strTekst)

End Sub
`),n()(),h(14,P,5,2,"app-feedback-button",11),n()}if(i&2){let e=f();c(10),b("ngModel",e.question1Answer),c(4),g(e.question1Checked()||e.question()>1?14:-1)}}var O=class i extends E{totalQuestions=1;question1Answer=S();question1Checked=u(!1);question1Correct=u(!1);question1Solution="For intI = 1 To AANTAL";question1ShowFeedback=u(!1);ngOnInit(){this.question1Answer.set("For intI = 1 To AANTAL - 1")}check(){if(this.question()===1&&(this.question1Checked.set(!0),this.question1Correct.set(this.question1Answer()?.trim()===this.question1Solution),!this.question1Correct())){this.bottomSheet.open(F,{data:{seeAnswer:!0}}).afterDismissed().subscribe(e=>{e==="see-answer"&&(this.continueWithoutStar.set(!0),this.question1Answer.set(this.question1Solution),this.question1Correct.set(!0),this.question1ShowFeedback.set(!0),this.checked.set(!0),this.scrollToBottom())});return}super.check()}static \u0275fac=(()=>{let s;return function(t){return(s||(s=w(i)))(t||i)}})();static \u0275cmp=y({type:i,selectors:[["app-modify"]],inputs:{question1Answer:[1,"question1Answer"]},outputs:{question1Answer:"question1AnswerChange"},features:[A],decls:5,vars:6,consts:[["questions",""],[3,"exerciseId","progress"],[1,"flex","flex-auto","flex-col","pb-6","overflow-auto"],[3,"check","continue","checked","checking","correct"],[1,"flex","flex-col","gap-2","max-w-2xl","mx-auto","px-4","py-6","w-full"],[1,"text-xl","leading-relaxed"],[1,"flex","flex-col","max-w-2xl","mx-auto","w-full"],["language","vbnet",1,"pb-1!"],["appearance","outline","subscriptSizing","dynamic",1,"code","ml-12"],["matInput","","type","text",3,"ngModelChange","ngModel"],["language","vbnet",1,"pt-1!"],[3,"correct","feedback"],["correct",""],["tip",""]],template:function(e,t){if(e&1){let a=x();k(0,"app-exercise-header",1),o(1,"section",2,0),h(3,W,15,2),n(),o(4,"app-exercise-footer",3),_("check",function(){return l(a),p(t.check())})("continue",function(){return l(a),p(t.continue())}),n()}e&2&&(m("exerciseId",t.exerciseId())("progress",t.progress()),c(3),g(t.question()>=1?3:-1),c(),m("checked",t.checked())("checking",t.checking())("correct",t.correct()))},dependencies:[N,V,L,B,I,v,M,T,D,j],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}"],changeDetection:0})};export{O as Modify};
