# Svecial

![npm](https://img.shields.io/npm/v/svecial.svg?style=for-the-badge) ![](https://img.shields.io/npm/dw/svecial.svg?style=for-the-badge) ![](https://img.shields.io/github/license/Olyno/svecial.svg?style=for-the-badge)

<details>
  <summary>Builds</summary>
  
  ![AppVeyor](https://img.shields.io/appveyor/ci/Olyno/svecial?style=for-the-badge&label=Appveyor%20build)
  ![Drone (cloud)](https://img.shields.io/drone/build/Olyno/svecial?style=for-the-badge&label=Drone%20build)
  ![Travis (.org)](https://img.shields.io/travis/Olyno/svecial?label=Travis%20Build&style=for-the-badge)
  
</details>

# Inspirations

Svelte being one of the modern frameworks that I have hooked the most, and seeing no ongoing projects for social buttons, needing them personally, I set out to create what I needed, and at the same time share this work with other developers.
Many projects have inspired me, in particular **Svelma**, a library of components with the "Bulma" css framework.

All my sources are available in the components in question.

I hate librairies with a lot of dependencies, so I did a librairy with just ``Svelte`` (logic) and ``axios`` (to make good requests) as dependency.

# Quick Start

**NPM:**
```
npm install --save-dev svecial
```

**YARN:**
```
yarn install --save-dev svecial
```

Import components like:

```js
import { GoogleButton } from 'svecial'
```

A lot of buttons depend of [Bulma's framework](https://bulma.io) and [Font Awesome](https://fontawesome.com). Think to add them if you want to enjoy more this librairy! 

# API

Each component/button has:

 - ``appId``: It's here where you **must** to put the id of the app that you created. If the component doesn't appear, it's probably because this props is missing.
 - ``onLoginSuccess``: It's a callback if the user has been logged with success. It will return you the response of the api as parameter (depending of which button you use, Svecial can't predict informations about it).
 - ``onLoginFailure``: It's a callback if the user has been logged with failure. It will return you the response of the api as parameter (generally the error).

Depending of which button, props are different. If we can customize easily the button, you should use ``color`` as props, else it should be ``theme``...

**More informations about the api here:** https://olyno.github.io/svecial/components/

## SSR

``Svecial`` supports SSR. If you get any error when compiling, please compare your ``rollup.config.js`` file with Svecial doc's config.

 > Special thanks to [@matyunya](https://github.com/matyunya) for taking his time to help Svecial create the SSR part

# Developpement

## Svecial plan

Here is a plan of what Svecial should contain:
 
  - [x] GoogleButton
  - [x] FacebookButton
  - [ ] TwitterButton
  - [x] DiscordButton
  - [ ] GithubButton
  - [ ] GitlabButton
  - [ ] BitbucketButton
  - [ ] ShareButton

## What Svecial is supposed to be:

 - A 0 dependencies package
 - A easy and fast component to use (plug & play component)

## What Svecial is not supposed to be:

 - A librairy with backend: Svecial will return needed informations in the callback of ``onLoginSuccess`` or ``onLoginError`` but that's all. You're not supposed to make your backend directly on the component, but include the composent to your backend. 

# Contributing

 1. Clone this repo: git clone https://github.com/Olyno/svecial.git
 2. Install dependencies: ``cd docs & npm i``
 3. Start the automated build and automated docs: ``npm run dev``
 4. Open url that console prints in your browser

# License

Code released under GNU license.

Copyright ©, [Olyno](https://github.com/Olyno).
