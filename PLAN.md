# Plan for prosjektet

Planen er å lage en enkel quiz-app med ferdigbygde spørsmål, samt muligheten for å lage egne quizer.

Jeg vil bruke Next.JS for å utvikle appen.

Layouten skal være enkel og bestå av en tittel med spørsmålet, fire knapper med svaralternativer og en oversikt over hvilket spørsmål man er på.

Brukeren skal kunne opprette quizer og få en link å dele. Quizene lagres som .json-filer på serveren med spørsmål og svar, og får et navn med datoen i millisekunder når de opprettes for å sikre en unik ID. ID'en kan deretter brukes i URL-en for å svare på quizen, for eksempel **http://localhost:3000/quizID**.

Jeg vil også bruke komponenter for å strukturere filene bedre, samt bootstrap for å forbedre CSS-en.
