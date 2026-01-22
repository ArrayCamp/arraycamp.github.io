import{a as O}from"./chunk-WRTEGAD3.js";import{h as T}from"./chunk-SDQEQCA5.js";import{b as E,c as N,d as F,e as W,f as B,g as V}from"./chunk-XKCSFNB7.js";import"./chunk-RAYIDBLW.js";import"./chunk-K3O36QD3.js";import"./chunk-OAARWS43.js";import"./chunk-UMGIAK6N.js";import{b as v,e as S,i as M,l as D}from"./chunk-XTKGURG6.js";import"./chunk-JJS4FTEB.js";import"./chunk-J45A7UTJ.js";import"./chunk-VYHX26DZ.js";import"./chunk-KZC6YT6O.js";import"./chunk-AZN3ND4J.js";import"./chunk-RG7VMJRO.js";import{Ba as w,Fa as C,Nb as k,Pa as f,Qa as h,Va as p,W as l,Wa as i,X as u,Xa as n,Ya as y,bb as I,db as _,fa as m,fb as g,ja as x,ra as d,tb as r,xb as b,yb as q,zb as A}from"./chunk-VTYUZ2GX.js";import"./chunk-WMVSLYLA.js";function z(o,s){if(o&1&&(i(0,"app-feedback-button",11)(1,"p",12),r(2," Nu wordt de temperatuur alleen opgeslagen wanneer ze binnen het toegelaten bereik ligt. Daardoor ga je enkel verder naar de volgende dag bij geldige invoer. "),n(),i(3,"p",13),r(4,"Wanneer is een temperatuur geldig volgens de opgave: als ze binnen of buiten \u221210 tot 50 ligt?"),n()()),o&2){let e=g(2);p("correct",e.question1Correct())("feedback",e.question1ShowFeedback())}}function P(o,s){if(o&1){let e=I();i(0,"div",4)(1,"p",5),r(2," In de vorige opgave heb je de foute regel code aangeduid. Pas nu die foute regel code aan. "),n(),i(3,"p",5),r(4," Als het programma correct zou werken, dan zouden enkel geldige temperaturen opgeslagen worden en zou het aantal dagen met een temperatuur boven 25 graden correct geteld en getoond worden in een MsgBox. "),n()(),i(5,"div",6)(6,"pre")(7,"code",7),r(8,`Option Explicit
Option Base 1

Sub Hittegolf()

    Const AANTAL As Integer = 5
    Dim intTemp(AANTAL) As Integer
    Dim intI As Integer
    Dim intWarm As Integer
    Dim intIn As Integer

    intI = 1

    Do While intI <= AANTAL
        intIn = CInt(InputBox("Geef temperatuur voor dag " & CStr(intI) & " (van -10 tot en met 50):"))


`),n()(),i(9,"mat-form-field",8)(10,"input",9),A("ngModelChange",function(a){l(e);let c=g();return q(c.question1Answer,a)||(c.question1Answer=a),u(a)}),n()(),i(11,"pre")(12,"code",10),r(13,`
            intTemp(intI) = intIn
            intI = intI + 1
        End If
    Loop

    intWarm = 0
    intI = 1

    Do While intI <= AANTAL
        If intTemp(intI) > 25 Then
            intWarm = intWarm + 1
        End If
        intI = intI + 1
    Loop

    MsgBox CStr(intWarm)
End Sub
`),n()(),f(14,z,5,2,"app-feedback-button",11),n()}if(o&2){let e=g();d(10),b("ngModel",e.question1Answer),d(4),h(e.question1Checked()||e.question()>1?14:-1)}}var L=class o extends F{totalQuestions=1;question1Answer=k();question1Checked=m(!1);question1Correct=m(!1);question1Solution=["If intIn >= -10 And intIn <= 50 Then","If Not(intIn < -10 Or intIn > 50) Then"];question1ShowFeedback=m(!1);ngOnInit(){this.question1Answer.set("If intIn < -10 Or intIn > 50 Then")}check(){if(this.question()===1&&(this.question1Checked.set(!0),this.question1Correct.set(this.question1Solution.includes(this.question1Answer()?.trim()??"")),!this.question1Correct())){this.bottomSheet.open(W,{data:{seeAnswer:!0}}).afterDismissed().subscribe(e=>{e==="see-answer"&&(this.continueWithoutStar.set(!0),this.question1Answer.set(this.question1Solution[0]),this.question1Correct.set(!0),this.question1ShowFeedback.set(!0),this.checked.set(!0),this.scrollToBottom())});return}super.check()}static \u0275fac=(()=>{let s;return function(t){return(s||(s=x(o)))(t||o)}})();static \u0275cmp=w({type:o,selectors:[["app-modify"]],inputs:{question1Answer:[1,"question1Answer"]},outputs:{question1Answer:"question1AnswerChange"},features:[C],decls:5,vars:6,consts:[["questions",""],[3,"exerciseId","progress"],[1,"flex","flex-auto","flex-col","pb-6","overflow-auto"],[3,"check","continue","checked","checking","correct"],[1,"flex","flex-col","gap-2","max-w-2xl","mx-auto","px-4","py-6","w-full"],[1,"text-xl","leading-relaxed"],[1,"flex","flex-col","max-w-2xl","mx-auto","w-full"],["language","vbnet",1,"pb-1!"],["appearance","outline","subscriptSizing","dynamic",1,"code","ml-12"],["matInput","","type","text",3,"ngModelChange","ngModel"],["language","vbnet",1,"pt-1!"],[3,"correct","feedback"],["correct",""],["tip",""]],template:function(e,t){if(e&1){let a=I();y(0,"app-exercise-header",1),i(1,"section",2,0),f(3,P,15,2),n(),i(4,"app-exercise-footer",3),_("check",function(){return l(a),u(t.check())})("continue",function(){return l(a),u(t.continue())}),n()}e&2&&(p("exerciseId",t.exerciseId())("progress",t.progress()),d(3),h(t.question()>=1?3:-1),d(),p("checked",t.checked())("checking",t.checking())("correct",t.correct()))},dependencies:[E,V,B,N,D,v,S,M,T,O],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}"],changeDetection:0})};export{L as Modify};
