# stdlogger
**stdlogger** simple isomorfic logger that uses console transport.

[![Version][badge-vers]][npm]
[![Dependencies][badge-deps]][npm]
[![Vulnerabilities][badge-vuln]](https://snyk.io/)
[![Build Status][badge-tests]][travis]
[![Coverage Status][badge-coverage]](https://coveralls.io/github/pustovitDmytro/stdlogger?branch=master)
[![License][badge-lic]][github]

## Table of Contents
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)

## Requirements
To use library you need to have [node](https://nodejs.org) and [npm](https://www.npmjs.com) installed in your machine:

* node `6.0+`
* npm `3.0+`

## Installation

To install the library run following command

```bash
  npm i --save stdlogger
```

## Simple usage

```javascript
import logger from 'stdlogger';

logger.log('some text');

logger.log('debug', 'some debug text');
logger.log('verbose', 'some verbose text');
logger.log('info', 'some info text');
logger.log('error', 'some error text');

logger.debug('some debug text');
logger.verbose('some verbose text');
logger.info('some info text');
logger.error('some error text');
```

## Advanced usage

```javascript
import { Logger } from 'stdlogger';

const logger = new Logger({ 
  level: 'info',
  format: 'json' 
});

logger.log({ object: true });
```

## Contribute

Make the changes to the code and tests and then commit to your branch. Be sure to follow the commit message conventions.

Commit message summaries must follow this basic format:
```
  Tag: Message (fixes #1234)
```

The Tag is one of the following:
* **Fix** - for a bug fix.
* **Update** - for a backwards-compatible enhancement.
* **Breaking** - for a backwards-incompatible enhancement.
* **Docs** - changes to documentation only.
* **Build** - changes to build process only.
* **New** - implemented a new feature.
* **Upgrade** - for a dependency upgrade.
* **Chore** - for tests, refactor, style, etc.

The message summary should be a one-sentence description of the change. The issue number should be mentioned at the end.


[npm]: https://www.npmjs.com/package/stdlogger
[github]: https://github.com/pustovitDmytro/stdlogger
[travis]: https://travis-ci.org/pustovitDmytro/stdlogger
[coveralls]: https://coveralls.io/github/pustovitDmytro/stdlogger?branch=master
[badge-deps]: https://img.shields.io/david/pustovitDmytro/stdlogger.svg
[badge-tests]: https://img.shields.io/travis/pustovitDmytro/stdlogger.svg
[badge-vuln]: https://img.shields.io/snyk/vulnerabilities/npm/stdlogger.svg?style=popout
[badge-vers]: https://img.shields.io/npm/v/stdlogger.svg
[badge-lic]: https://img.shields.io/github/license/pustovitDmytro/stdlogger.svg
[badge-coverage]: https://coveralls.io/repos/github/pustovitDmytro/stdlogger/badge.svg?branch=master
