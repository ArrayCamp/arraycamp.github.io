import{a as V}from"./chunk-WRTEGAD3.js";import{h as E}from"./chunk-SDQEQCA5.js";import{b as B,c as z,d as F,e as N,f as T,g as P}from"./chunk-XKCSFNB7.js";import"./chunk-RAYIDBLW.js";import"./chunk-K3O36QD3.js";import"./chunk-OAARWS43.js";import"./chunk-UMGIAK6N.js";import{b as _,e as q,i as v,l as D}from"./chunk-XTKGURG6.js";import"./chunk-JJS4FTEB.js";import"./chunk-J45A7UTJ.js";import"./chunk-VYHX26DZ.js";import"./chunk-KZC6YT6O.js";import"./chunk-AZN3ND4J.js";import"./chunk-RG7VMJRO.js";import{Ba as C,Fa as I,Nb as M,Pa as g,Qa as h,Va as m,W as l,Wa as i,X as u,Xa as n,Ya as k,bb as x,db as A,fa as p,fb as f,ja as w,ra as c,tb as r,xb as S,yb as b,zb as y}from"./chunk-VTYUZ2GX.js";import"./chunk-WMVSLYLA.js";function L(o,s){if(o&1&&(i(0,"app-feedback-button",11)(1,"p",12),r(2," De cal/min hoort in intCalPerMin, omdat je die waarden later gebruikt in de berekening van intMinuten. Zo blijven strSport(intI) en intCalPerMin(intI) ook bij dezelfde sport horen. "),n(),i(3,"p",13),r(4,"In welke array wil je de calorie\xEBn per minuut opslaan zodat je ze later kan gebruiken in intDoel / ...?"),n()()),o&2){let e=f(2);m("correct",e.question1Correct())("feedback",e.question1ShowFeedback())}}function O(o,s){if(o&1){let e=x();i(0,"div",4)(1,"p",5),r(2," In de vorige opgave heb je de foute regel code aangeduid. Pas nu die foute regel code aan. "),n(),i(3,"p",5),r(4," Als het programma correct zou werken, dan zou op basis van de gekozen sport berekend worden hoeveel minuten nodig zijn om 500 calorie\xEBn te verbranden en zou dit correct getoond worden in een MsgBox. "),n()(),i(5,"div",6)(6,"pre")(7,"code",7),r(8,`Option Explicit
Option Base 1

Sub Sport()

    Const AANTAL As Integer = 3
    Dim strSport(AANTAL) As String
    Dim intCalPerMin(AANTAL) As Integer
    Dim intI As Integer
    Dim intDoel As Integer
    Dim intKeuze As Integer
    Dim intMinuten As Integer

    intDoel = 500
    intI = 1

    Do While intI <= AANTAL
        strSport(intI) = InputBox("Geef sport " & intI)

`),n()(),i(9,"mat-form-field",8)(10,"input",9),y("ngModelChange",function(a){l(e);let d=f();return b(d.question1Answer,a)||(d.question1Answer=a),u(a)}),n()(),i(11,"pre")(12,"code",10),r(13,`
        intI = intI + 1
    Loop

    intKeuze = CInt(InputBox("Welke sport kies je? (1-" & CStr(AANTAL) & ")"))
    intMinuten = intDoel / intCalPerMin(intKeuze)

    MsgBox ()"Je moet " & intMinuten & " minuten " & strSport(intKeuze) & " doen.")

End Sub
`),n()(),g(14,L,5,2,"app-feedback-button",11),n()}if(o&2){let e=f();c(10),S("ngModel",e.question1Answer),c(4),h(e.question1Checked()||e.question()>1?14:-1)}}var j=class o extends F{totalQuestions=1;question1Answer=M();question1Checked=p(!1);question1Correct=p(!1);question1Solution='intCalPerMin(intI) = InputBox("Geef cal/min voor " & strSport(intI))';question1ShowFeedback=p(!1);ngOnInit(){this.question1Answer.set('strSport(intI) = InputBox("Geef cal/min voor " & strSport(intI))')}check(){if(this.question()===1&&(this.question1Checked.set(!0),this.question1Correct.set(this.question1Answer()?.trim()===this.question1Solution),!this.question1Correct())){this.bottomSheet.open(N,{data:{seeAnswer:!0}}).afterDismissed().subscribe(e=>{e==="see-answer"&&(this.continueWithoutStar.set(!0),this.question1Answer.set(this.question1Solution),this.question1Correct.set(!0),this.question1ShowFeedback.set(!0),this.checked.set(!0),this.scrollToBottom())});return}super.check()}static \u0275fac=(()=>{let s;return function(t){return(s||(s=w(o)))(t||o)}})();static \u0275cmp=C({type:o,selectors:[["app-modify"]],inputs:{question1Answer:[1,"question1Answer"]},outputs:{question1Answer:"question1AnswerChange"},features:[I],decls:5,vars:6,consts:[["questions",""],[3,"exerciseId","progress"],[1,"flex","flex-auto","flex-col","pb-6","overflow-auto"],[3,"check","continue","checked","checking","correct"],[1,"flex","flex-col","gap-2","max-w-2xl","mx-auto","px-4","py-6","w-full"],[1,"text-xl","leading-relaxed"],[1,"flex","flex-col","max-w-2xl","mx-auto","w-full"],["language","vbnet",1,"pb-1!"],["appearance","outline","subscriptSizing","dynamic",1,"code","ml-12"],["matInput","","type","text",3,"ngModelChange","ngModel"],["language","vbnet",1,"pt-1!"],[3,"correct","feedback"],["correct",""],["tip",""]],template:function(e,t){if(e&1){let a=x();k(0,"app-exercise-header",1),i(1,"section",2,0),g(3,O,15,2),n(),i(4,"app-exercise-footer",3),A("check",function(){return l(a),u(t.check())})("continue",function(){return l(a),u(t.continue())}),n()}e&2&&(m("exerciseId",t.exerciseId())("progress",t.progress()),c(3),h(t.question()>=1?3:-1),c(),m("checked",t.checked())("checking",t.checking())("correct",t.correct()))},dependencies:[B,P,T,z,D,_,q,v,E,V],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}"],changeDetection:0})};export{j as Modify};
