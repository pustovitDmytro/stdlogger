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
[![Security][snyk-badge]][snyk-url]
[![Build Status][tests-badge]][tests-url]
[![Coverage Status][badge-coverage]][url-coverage]

[![Commit activity][commit-activity-badge]][github]
[![FOSSA][fossa-badge]][fossa-url]
[![License][badge-lic]][github]

## Table of Contents
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)

## Requirements
[![Platform Status][node-ver-test-badge]][node-ver-test-url]

To use library you need to have [node](https://nodejs.org) and [npm](https://www.npmjs.com) installed in your machine:

* node `>=10`
* npm `>=6`

Package is [continuously tested][node-ver-test-url] on darwin, linux and win32 platforms. All active and maintenance [LTS](https://nodejs.org/en/about/releases/) node releases are supported.

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
    level  : 'info',
    format : 'json'
});

logger.log({ object: true });
```

## Contribute

Make the changes to the code and tests. Then commit to your branch. Be sure to follow the commit message conventions. Read [Contributing Guidelines](.github/CONTRIBUTING.md) for details.

[npm]: https://www.npmjs.com/package/stdlogger
[github]: https://github.com/pustovitDmytro/stdlogger
[coveralls]: https://coveralls.io/github/pustovitDmytro/stdlogger?branch=master
[badge-deps]: https://img.shields.io/librariesio/release/npm/stdlogger.svg
[badge-vuln]: https://img.shields.io/snyk/vulnerabilities/npm/stdlogger.svg?style=popout
[badge-vers]: https://img.shields.io/npm/v/stdlogger.svg
[badge-lic]: https://img.shields.io/github/license/pustovitDmytro/stdlogger.svg
[badge-coverage]: https://coveralls.io/repos/github/pustovitDmytro/stdlogger/badge.svg?branch=master
[url-coverage]: https://coveralls.io/github/pustovitDmytro/stdlogger?branch=master

[snyk-badge]: https://snyk-widget.herokuapp.com/badge/npm/stdlogger/badge.svg
[snyk-url]: https://snyk.io/advisor/npm-package/stdlogger

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

[node-ver-test-badge]: https://github.com/pustovitDmytro/stdlogger/actions/workflows/npt.yml/badge.svg?branch=master
[node-ver-test-url]: https://github.com/pustovitDmytro/stdlogger/actions?query=workflow%3A%22Node.js+versions%22

[fossa-badge]: https://app.fossa.com/api/projects/custom%2B24828%2Fstdlogger.svg?type=shield
[fossa-url]: https://app.fossa.com/projects/custom%2B24828%2Fstdlogger?ref=badge_shield