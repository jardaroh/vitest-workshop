---
title: Getting started - Prerequisites
---

# Prerequisites
> In order to follow this workshop, you need to have a few things
> installed on your machine.

## Node.js
> Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

Node is necessary to install and run the tools, and is the development
environment for the workshop.

::: tip
If you run `node -v` and it is version >= 16.12.0, you can skip to
the next section.
:::

### Installation

::: tip
We highly recommend using [nvm](https://github.com/nvm-sh/nvm)
or [nvm-windows](https://github.com/coreybutler/nvm-windows)
to install and manage Node.js.
:::

#### Linux
Follow the installation process at
[nvm](https://github.com/nvm-sh/nvm)

#### Mac
```bash
brew update
brew install nvm
source $(brew --prefix nvm)/nvm.sh
```

#### Windows
Follow the installation process at
[nvm-windows](https://github.com/coreybutler/nvm-windows)

## Clone the repository
> The workshop [repository](https://github.com/jardaroh/vitest-workshop), including these documentation pages, is
> hosted on GitLab.

```bash
git clone https://gitlab.com/robbertkrebbers/vitest-workshop.git
```

## Set Node version
> The workshop repository contains a `.nvmrc` file that specifies
> the node version to use.

#### Linux and Mac
```bash
nvm use
```

#### Windows
::: info
nvm-windows does not support `.nvmrc` files. You need to specify the
version manually.
:::
```cmd
nvm use 18.16.0
```

## Install dependencies
> The workshop repository contains a `package.json` file that
> specifies the dependencies to install.

```bash
npm install
```
