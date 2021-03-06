<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This is a simple nest application that is able to parse array of strings, into array of objects chat messages.

You can put array of string chat messages as a body of a post request to the address: "http://localhost:3090/messageParser", that will parse the chat messages correctly, following the services logic.

With chat messages like (use these examples to test properly as well):

```bash
1- ["14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
2- ["14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "14:26:15 Agent : Aliquam non cursus erat, ut blandit lectus."]
3- ["14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Agent : I received it at 12:24:48, ut blandit lectus."]
4- ["14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Agent : Aliquam non cursus erat, ut blandit lectus."]
```

parsed results will be:

```bash
1- [
    {
      date: '14:24:32',
      mention: '14:24:32 Customer',
      sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      type: 'Customer'
    }
  ]

2- [
    {
      date: '14:24:32',
      mention: '14:24:32 Customer',
      sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      type: 'Customer'
    },
    {
      date: '14:26:15',
      mention: '14:26:15 Agent',
      sentence: 'Aliquam non cursus erat, ut blandit lectus.',
      type: 'Agent'
    }
  ]

3- [
    {
      date: '14:24:32',
      mention: '14:24:32 Customer',
      sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      type: 'Customer'
    },
    {
      date: '14:26:15',
      mention: '14:26:15 Agent',
      sentence: 'I received it at 12:24:48, ut blandit lectus.',
      type: 'Agent'
    }
  ]

4- [
    {
      date: '14:24:32',
      mention: '14:24:32 Customer',
      sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      type: 'Customer'
    },
    {
      date: '14:26:15',
      mention: '14:26:15 Agent',
      sentence: 'Aliquam non cursus erat, ut blandit lectus.',
      type: 'Agent'
    }
  ]
```

## Installation

```bash
Please use yarn as a dependecy manager to initialize node_modules.

Please use the command "yarn" via bash shell or which one you prefer.
```

## Running the app

After initialized node_modules, you can start the application following the package.json scripts, with these two commands:

(I prefere watch mode execution in order to be able to change code without restarting the application)

```bash

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

Nest is [MIT licensed](LICENSE).
