import{a as N}from"./chunk-WRTEGAD3.js";import{h as M}from"./chunk-SDQEQCA5.js";import{b as z,c as V,d as D,e as T,f as P,g as F}from"./chunk-XKCSFNB7.js";import"./chunk-RAYIDBLW.js";import"./chunk-K3O36QD3.js";import"./chunk-OAARWS43.js";import"./chunk-UMGIAK6N.js";import{b as q,e as S,i as B,l as E}from"./chunk-XTKGURG6.js";import"./chunk-JJS4FTEB.js";import"./chunk-J45A7UTJ.js";import"./chunk-VYHX26DZ.js";import"./chunk-KZC6YT6O.js";import"./chunk-AZN3ND4J.js";import"./chunk-RG7VMJRO.js";import{Ba as x,Fa as y,Nb as v,Pa as g,Qa as h,Va as m,W as c,Wa as i,X as u,Xa as n,Ya as I,bb as A,db as w,fa as p,fb as f,ja as b,ra as l,tb as r,xb as _,yb as C,zb as k}from"./chunk-VTYUZ2GX.js";import"./chunk-WMVSLYLA.js";function R(o,a){if(o&1&&(i(0,"app-feedback-button",11)(1,"p",12),r(2," De subroutine verwacht de volledige array boolBezet() (zie ByRef boolBezet() As Boolean), zodat ze het element op intPlaats kan aanpassen. Door enkel boolBezet(intVrij) door te geven geef je maar \xE9\xE9n True/False-waarde door, en kan de subroutine de array niet wijzigen. "),n(),i(3,"p",13),r(4,"Verwacht ReserveerPlaats als eerste parameter \xE9\xE9n element van de array, of de volledige array?"),n()()),o&2){let e=f(2);m("correct",e.question1Correct())("feedback",e.question1ShowFeedback())}}function L(o,a){if(o&1){let e=A();i(0,"div",4)(1,"p",5),r(2," In de vorige opgave heb je de foute regel code aangeduid. Pas nu die foute regel code aan. "),n(),i(3,"p",5),r(4," Als het programma correct zou werken, dan zou eerst de eerste vrije campingplaats gezocht worden en daarna zou die plaats gereserveerd worden door de overeenkomstige waarde in de array op True te zetten. "),n()(),i(5,"div",6)(6,"pre")(7,"code",7),r(8,`Option Explicit
Option Base 1

Sub CampingPlaatsen()
    Const AANTAL_PLAATSEN As Integer = 10
    Dim boolBezet(AANTAL_PLAATSEN) As Boolean
    Dim intI As Integer
    Dim intVrij As Integer

    intI = 1

    Do While intI <= AANTAL_PLAATSEN
        If CInt(InputBox("Is plaats " & intI & " bezet? (1 = ja, 0 = nee)")) = 1 Then
            boolBezet(intI) = True
        Else
            boolBezet(intI) = False
        End If
        intI = intI + 1
    Loop

    intVrij = ZoekEersteVrijePlaats(boolBezet, AANTAL_PLAATSEN)

`),n()(),i(9,"mat-form-field",8)(10,"input",9),k("ngModelChange",function(s){c(e);let d=f();return C(d.question1Answer,s)||(d.question1Answer=s),u(s)}),n()(),i(11,"pre")(12,"code",10),r(13,`

    MsgBox "Gereserveerd: plaats " & intVrij

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
End Sub
`),n()(),g(14,R,5,2,"app-feedback-button",11),n()}if(o&2){let e=f();l(10),_("ngModel",e.question1Answer),l(4),h(e.question1Checked()||e.question()>1?14:-1)}}var j=class o extends D{totalQuestions=1;question1Answer=v();question1Checked=p(!1);question1Correct=p(!1);question1Solution="Call ReserveerPlaats(boolBezet(), intVrij)";question1ShowFeedback=p(!1);ngOnInit(){this.question1Answer.set("ReserveerPlaats boolBezet(intVrij), intVrij")}check(){if(this.question()===1&&(this.question1Checked.set(!0),this.question1Correct.set(this.question1Answer()?.trim()===this.question1Solution),!this.question1Correct())){this.bottomSheet.open(T,{data:{seeAnswer:!0}}).afterDismissed().subscribe(e=>{e==="see-answer"&&(this.continueWithoutStar.set(!0),this.question1Answer.set(this.question1Solution),this.question1Correct.set(!0),this.question1ShowFeedback.set(!0),this.checked.set(!0),this.scrollToBottom())});return}super.check()}static \u0275fac=(()=>{let a;return function(t){return(a||(a=b(o)))(t||o)}})();static \u0275cmp=x({type:o,selectors:[["app-modify"]],inputs:{question1Answer:[1,"question1Answer"]},outputs:{question1Answer:"question1AnswerChange"},features:[y],decls:5,vars:6,consts:[["questions",""],[3,"exerciseId","progress"],[1,"flex","flex-auto","flex-col","pb-6","overflow-auto"],[3,"check","continue","checked","checking","correct"],[1,"flex","flex-col","gap-2","max-w-2xl","mx-auto","px-4","py-6","w-full"],[1,"text-xl","leading-relaxed"],[1,"flex","flex-col","max-w-2xl","mx-auto","w-full"],["language","vbnet",1,"pb-1!"],["appearance","outline","subscriptSizing","dynamic",1,"code","ml-12"],["matInput","","type","text",3,"ngModelChange","ngModel"],["language","vbnet",1,"pt-1!"],[3,"correct","feedback"],["correct",""],["tip",""]],template:function(e,t){if(e&1){let s=A();I(0,"app-exercise-header",1),i(1,"section",2,0),g(3,L,15,2),n(),i(4,"app-exercise-footer",3),w("check",function(){return c(s),u(t.check())})("continue",function(){return c(s),u(t.continue())}),n()}e&2&&(m("exerciseId",t.exerciseId())("progress",t.progress()),l(3),h(t.question()>=1?3:-1),l(),m("checked",t.checked())("checking",t.checking())("correct",t.correct()))},dependencies:[z,F,P,V,E,q,S,B,M,N],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}"],changeDetection:0})};export{j as Modify};
