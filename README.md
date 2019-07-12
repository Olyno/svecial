# Svecial

![](https://img.shields.io/github/license/Olyno/svecial.svg?style=for-the-badge)

# Inspirations

Svelte being one of the modern frameworks that I have hooked the most, and seeing no ongoing projects for social buttons, needing them personally, I set out to create what I needed, and at the same time share this work with other developers.
Many projects have inspired me, in particular **Svelma**, a library of components with the "Bulma" css framework.

All my sources are available in the components in question.

I hate librairies with a lot of dependencies, so I did a librairy with just ``Svelte`` as dependency.

# Quick Start

```
npm install --save svecial
```

Import components like:

```js
import { GoogleButton } from 'svecial'
```

## SSR

 > If you are doing server-side rendering with Sapper, ou'll need to import the .svelte files directly so that your app can compile them, rather than importing from the compiled module.

**Source:** [Svelma's creator](https://github.com/c0bra/svelma#ssr)

i.e.:

```js
import Button from 'svecial/src/components/GoogleButton.svelte'
```

instead of

```js
import { GoogleButton } from 'svecial'
```

# Developpement

 1. Clone this repo: git clone https://github.com/Olyno/svecial.git
 2. Install dependencies: ``cd docs & npm i``
 3. Start the automated build and automated docs: ``npm run dev``
 4. Open url that console prints in your browser

# License

Code released under GNU license.

Copyright ©, Olyno.