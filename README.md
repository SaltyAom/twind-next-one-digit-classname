## One alphabet tailwind className
This is an example of generating one-alphabet className with [twind](https://github.com/tw-in-js/twind) on Next.js.

![Preview](https://github.com/SaltyAom/twind-next-one-digit-classname/blob/master/public/preview.png?raw=true)

##### Note: This project extends [saltyaom/next-starter template](https://github.com/saltyaom/next-starter) which has dynamic part.

The logic of hash generation is in `src/services/styles/index.ts`.

## Rules
Since next.js has ssr, generating between server and client has different cache, to avoid different hashing, it is advice to:
- If you have to use `tw` on server or make sure that components match on both client and server, use full className instead `className='font-sans'` instead of `className={tw('font-sans')` and make sure you import `tailwind.css`.
- avoid using `tw` in `_document.tsx` at all cost, since this page only render on server.

For example, feels free to look inside `src/pages/_app.tsx`.

## Gotcha
- Reduced className (1 digit) is not available in dev enviroment for fast refresh and preventing Next from re-building whole web.

## Note
this is Proof of Concept that `twind` can be hashed in to one-alphabet className, I have no responsibility for your action for using this concept on production.
