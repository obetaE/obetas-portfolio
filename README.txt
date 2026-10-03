
Two small things to keep in mind
Phone is imported from ../components/scenewise/PhoneScreens in the page above, which couples the generic page to Scenewise. Once you have a second app, I'd move it to src/components/Phone.tsx and import from there in both files. It's a two-line change.

The data file must stay .tsx (not .ts) because the feature/hero screen fields are JSX. That's the same trade-off your UI/UX page avoided — but it's unavoidable here since your screens are built in code, not exported frames. It's still one clean array; you just don't need a new page per app.

If you want, paste your current router file and PhoneScreens.tsx and I'll wire the import up cleanly so nothing points at Scenewise anymore.

