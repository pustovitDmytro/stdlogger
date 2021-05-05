# stdlogger
A simple isomorphic logger, that uses console transport.

[![Version][badge-vers]][npm]
[![Bundle size][npm-size-badge]][npm-size-url]
[![Downloads][npm-downloads-badge]][npm]

[![CodeFactor][codefactor-badge]][codefactor-url]
[![SonarCloud][sonarcloud-badge]][sonarcloud-url]
[![Codacy][codacy-badge]][codacy-url]
[![Total alerts][lgtm-alerts-badge]][lgtm-alerts-url]
[![Language grade][lgtm-lg-badge]][lgtm-lg-url]
[![Scrutinizer][scrutinizer-badge]][scrutinizer-url]

[![Dependencies][badge-deps]][npm]
[![Vulnerabilities][badge-vuln]](https://snyk.io/)
[![Build Status][tests-badge]][tests-url]
[![Coverage Status][badge-coverage]][url-coverage]

[![Commit activity][commit-activity-badge]][github]
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

To install the library run the following command

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

Make the changes to the code and tests. Then commit to your branch. Be sure to follow the commit message conventions.

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
[coveralls]: https://coveralls.io/github/pustovitDmytro/stdlogger?branch=master
[badge-deps]: https://img.shields.io/david/pustovitDmytro/stdlogger.svg
[badge-vuln]: https://img.shields.io/snyk/vulnerabilities/npm/stdlogger.svg?style=popout
[badge-vers]: https://img.shields.io/npm/v/stdlogger.svg
[badge-lic]: https://img.shields.io/github/license/pustovitDmytro/stdlogger.svg
[badge-coverage]: https://coveralls.io/repos/github/pustovitDmytro/stdlogger/badge.svg?branch=master
[url-coverage]: https://coveralls.io/github/pustovitDmytro/stdlogger?branch=master

[tests-badge]: https://img.shields.io/circleci/build/github/pustovitDmytro/stdlogger
[tests-url]: https://app.circleci.com/pipelines/github/pustovitDmytro/stdlogger

[codefactor-badge]: https://www.codefactor.io/repository/github/pustovitdmytro/stdlogger/badge
[codefactor-url]: https://www.codefactor.io/repository/github/pustovitdmytro/stdlogger

[commit-activity-badge]: https://img.shields.io/github/commit-activity/m/pustovitDmytro/stdlogger

[scrutinizer-badge]: https://scrutinizer-ci.com/g/pustovitDmytro/stdlogger/badges/quality-score.png?b=master
[scrutinizer-url]: https://scrutinizer-ci.com/g/pustovitDmytro/stdlogger/?branch=master

[lgtm-lg-badge]: https://img.shields.io/lgtm/grade/javascript/g/pustovitDmytro/stdlogger.svg?logo=lgtm&logoWidth=18
[lgtm-lg-url]: https://lgtm.com/projects/g/pustovitDmytro/stdlogger/context:javascript

[lgtm-alerts-badge]: https://img.shields.io/lgtm/alerts/g/pustovitDmytro/stdlogger.svg?logo=lgtm&logoWidth=18
[lgtm-alerts-url]: https://lgtm.com/projects/g/pustovitDmytro/stdlogger/alerts/

[codacy-badge]: https://app.codacy.com/project/badge/Grade/42021d4d32a047dcb9a69d0ae7e3e584
[codacy-url]: https://www.codacy.com/gh/pustovitDmytro/stdlogger/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=pustovitDmytro/stdlogger&amp;utm_campaign=Badge_Grade

[sonarcloud-badge]: https://sonarcloud.io/api/project_badges/measure?project=pustovitDmytro_stdlogger&metric=alert_status
[sonarcloud-url]: https://sonarcloud.io/dashboard?id=pustovitDmytro_stdlogger

[npm-downloads-badge]: https://img.shields.io/npm/dw/stdlogger
[npm-size-badge]: https://img.shields.io/bundlephobia/min/stdlogger
[npm-size-url]: https://bundlephobia.com/result?p=stdlogger
