import{a as b,b as g}from"./chunk-RG7VMJRO.js";import{Db as r,P as c,T as p}from"./chunk-VTYUZ2GX.js";import{a as d,b as u,f as m}from"./chunk-WMVSLYLA.js";var s=m(b());var h=class l{supabase=p(g);chapters=["Checklist","Kaartspel","Hittegolf","Sport","Campingplaats"];data=r(()=>this.supabase.profile()?.adventure);last=r(()=>this.data()?.last);progress=r(()=>this.data()?.progress??{});stars=r(()=>Object.values(this.progress()).filter(e=>!!e).length);progressPercentageByChapter=r(()=>{let e=this.progress(),a=5;return this.chapters.reduce((t,n)=>{let i=0;for(let o=1;o<=a;o++)e[`${(0,s.kebabCase)(n)}-${o}`]&&i++;return t[(0,s.kebabCase)(n)]=i/a*100,t},{})});filterGrayscaleByChapter=r(()=>{let e=this.progressPercentageByChapter();return Object.keys(e).reduce((a,t)=>(a[t]=100-e[t],a),{})});crowns=r(()=>{let e=this.progress(),a=0;for(let t of this.chapters)e[`${(0,s.kebabCase)(t)}-1`]&&e[`${(0,s.kebabCase)(t)}-2`]&&e[`${(0,s.kebabCase)(t)}-3`]&&e[`${(0,s.kebabCase)(t)}-4`]&&e[`${(0,s.kebabCase)(t)}-5`]&&a++;return a});reloadData(){this.supabase.profileResource.reload()}addStar(e){return this.supabase.updateProfile({adventure:{last:e,progress:u(d({},this.progress()),{[e]:!0})}}).then(()=>this.reloadData())}validateCodeUsingAI({abortSignal:e,answer:a,codingGuidelines:t,constraints:n,exampleSolutions:i,programmingLanguage:o,question:f}){return o??="vba",this.supabase.openAICompletion({abortSignal:e,systemPrompt:`
        You are an automated code reviewer and programming tutor.

        Your task is to:
          - Evaluate a student's code submission against a clearly defined programming objective.
          - Verify whether the code logically fulfills the objective.
          - Provide concise, constructive feedback suitable for a student.
          - Return ONLY valid JSON that strictly follows the specified output schema.
          - Do NOT include markdown, explanations outside JSON, or additional text.

        Language rule:
          - The values of "feedback" and "tips" MUST be written in Dutch.
          - All other reasoning should remain internal and must not appear in the output.

        Be strict but fair:
          - The solution does not need to match example solutions exactly.
          - The solution MUST satisfy the objective and constraints.
          - Minor style issues should not cause failure unless they break functionality.
      `,prompt:`
        TASK / OBJECTIVE:
        ${f}

        PROGRAMMING LANGUAGE:
        ${o}

        OPTIONAL CONSTRAINTS:
        ${n??""}

        OPTIONAL CODING GUIDELINES:
          - Lengte van arrays steeds initializeren met een constante variabele.
          - Naamgeving van variabelen en arrays steeds een afkorting van het data type.
        ${t??""}

        OPTIONAL EXAMPLE SOLUTIONS:
        ${i??""}

        STUDENT SUBMISSION:
        ${a}

        INSTRUCTIONS FOR EVALUATION:
          1. Determine if the student's code fulfills the TASK / OBJECTIVE.
          2. Check logical correctness, not just syntax.
          3. If the solution is incorrect or incomplete, explain why.
          4. Provide clear, actionable tips to fix or improve the code.
          5. Assume the code is run in a standard environment for the given language.
          6. Do NOT rewrite the full solution unless absolutely necessary.

        IMPORTANT OUTPUT LANGUAGE RULE:
          - "feedback" and all entries in "tips" MUST be written in Dutch.

        REQUIRED OUTPUT FORMAT (JSON ONLY):
        {
          "isCorrect": boolean,
          "feedback": string,
          "tips": string[]
        }
      `})}static \u0275fac=function(a){return new(a||l)};static \u0275prov=c({token:l,factory:l.\u0275fac,providedIn:"root"})};export{h as a};
