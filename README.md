# Svecial

![npm](https://img.shields.io/npm/v/svecial.svg?style=for-the-badge) ![](https://img.shields.io/npm/dw/svecial.svg?style=for-the-badge) ![](https://img.shields.io/github/license/Olyno/svecial.svg?style=for-the-badge)

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

``Svecial`` supports SSR. If you get any error when compiling, please compare your ``rollup.config.js`` file with Svecial doc's config.

 > Special thanks to [@matyunya](https://github.com/matyunya) for taking his time to help me create the SSR part

# Developpement

 1. Clone this repo: git clone https://github.com/Olyno/svecial.git
 2. Install dependencies: ``cd docs & npm i``
 3. Start the automated build and automated docs: ``npm run dev``
 4. Open url that console prints in your browser

# License

Code released under GNU license.

Copyright ©, Olyno.
