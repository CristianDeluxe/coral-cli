# @coralproject/coral-cli

CLI to interact with Coral

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@coralproject/coral-cli.svg)](https://npmjs.org/package/@coralproject/coral-cli)
[![CircleCI](https://circleci.com/gh/coralproject/coral-cli/tree/main.svg?style=shield)](https://circleci.com/gh/coralproject/coral-cli/tree/main)
[![Tests](https://github.com/coralproject/coral-cli/workflows/test/badge.svg)](https://github.com/coralproject/coral-cli/actions/workflows/test.yml)
[![Downloads/week](https://img.shields.io/npm/dw/@coralproject/coral-cli.svg)](https://npmjs.org/package/@coralproject/coral-cli)
[![License](https://img.shields.io/npm/l/@coralproject/coral-cli.svg)](https://github.com/coralproject/coral-cli/blob/main/package.json)

<!-- toc -->
* [@coralproject/coral-cli](#coralprojectcoral-cli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @coralproject/coral-cli
$ coral-cli COMMAND
running command...
$ coral-cli (--version)
@coralproject/coral-cli/0.6.0 darwin-arm64 node-v23.4.0
$ coral-cli --help [COMMAND]
USAGE
  $ coral-cli COMMAND
...
```
<!-- usagestop -->

All commands require the `domain` where your instance of Coral is installed. When specifying the domain any trailing `/` characters should be removed. For example, if your domain ends in `.com`, you will see an error if you include a trailing slash i.e.: `.com/`

# Commands

<!-- commands -->
* [`coral-cli help [COMMAND]`](#coral-cli-help-command)
* [`coral-cli login`](#coral-cli-login)
* [`coral-cli logout`](#coral-cli-logout)
* [`coral-cli plugins`](#coral-cli-plugins)
* [`coral-cli plugins:add PLUGIN`](#coral-cli-pluginsadd-plugin)
* [`coral-cli plugins:inspect PLUGIN...`](#coral-cli-pluginsinspect-plugin)
* [`coral-cli plugins:install PLUGIN`](#coral-cli-pluginsinstall-plugin)
* [`coral-cli plugins:link PATH`](#coral-cli-pluginslink-path)
* [`coral-cli plugins:remove [PLUGIN]`](#coral-cli-pluginsremove-plugin)
* [`coral-cli plugins:reset`](#coral-cli-pluginsreset)
* [`coral-cli plugins:uninstall [PLUGIN]`](#coral-cli-pluginsuninstall-plugin)
* [`coral-cli plugins:unlink [PLUGIN]`](#coral-cli-pluginsunlink-plugin)
* [`coral-cli plugins:update`](#coral-cli-pluginsupdate)
* [`coral-cli scraper:debug`](#coral-cli-scraperdebug)
* [`coral-cli story:get`](#coral-cli-storyget)
* [`coral-cli story:merge`](#coral-cli-storymerge)
* [`coral-cli story:update`](#coral-cli-storyupdate)
* [`coral-cli token:create`](#coral-cli-tokencreate)
* [`coral-cli token:list`](#coral-cli-tokenlist)
* [`coral-cli token:revoke`](#coral-cli-tokenrevoke)

## `coral-cli help [COMMAND]`

Display help for coral-cli.

```
USAGE
  $ coral-cli help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for coral-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.19/src/commands/help.ts)_

## `coral-cli login`

grabs a token for interacting with Coral

```
USAGE
  $ coral-cli login -d <value>

FLAGS
  -d, --domain=<value>  (required) domain for tenant to run command against

DESCRIPTION
  grabs a token for interacting with Coral
```

_See code: [src/commands/login.ts](https://github.com/coralproject/coral-cli/blob/v0.6.0/src/commands/login.ts)_

## `coral-cli logout`

removes credentials for logging in with Coral

```
USAGE
  $ coral-cli logout -d <value>

FLAGS
  -d, --domain=<value>  (required) domain for tenant to run command against

DESCRIPTION
  removes credentials for logging in with Coral
```

_See code: [src/commands/logout.ts](https://github.com/coralproject/coral-cli/blob/v0.6.0/src/commands/logout.ts)_

## `coral-cli plugins`

List installed plugins.

```
USAGE
  $ coral-cli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ coral-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.22/src/commands/plugins/index.ts)_

## `coral-cli plugins:add PLUGIN`

Installs a plugin into coral-cli.

```
USAGE
  $ coral-cli plugins:add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into coral-cli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the CORAL_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CORAL_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ coral-cli plugins:add

EXAMPLES
  Install a plugin from npm registry.

    $ coral-cli plugins:add myplugin

  Install a plugin from a github url.

    $ coral-cli plugins:add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ coral-cli plugins:add someuser/someplugin
```

## `coral-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ coral-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ coral-cli plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.22/src/commands/plugins/inspect.ts)_

## `coral-cli plugins:install PLUGIN`

Installs a plugin into coral-cli.

```
USAGE
  $ coral-cli plugins:install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into coral-cli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the CORAL_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CORAL_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ coral-cli plugins:add

EXAMPLES
  Install a plugin from npm registry.

    $ coral-cli plugins:install myplugin

  Install a plugin from a github url.

    $ coral-cli plugins:install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ coral-cli plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.22/src/commands/plugins/install.ts)_

## `coral-cli plugins:link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ coral-cli plugins:link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ coral-cli plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.22/src/commands/plugins/link.ts)_

## `coral-cli plugins:remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ coral-cli plugins:remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ coral-cli plugins:unlink
  $ coral-cli plugins:remove

EXAMPLES
  $ coral-cli plugins:remove myplugin
```

## `coral-cli plugins:reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ coral-cli plugins:reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.22/src/commands/plugins/reset.ts)_

## `coral-cli plugins:uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ coral-cli plugins:uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ coral-cli plugins:unlink
  $ coral-cli plugins:remove

EXAMPLES
  $ coral-cli plugins:uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.22/src/commands/plugins/uninstall.ts)_

## `coral-cli plugins:unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ coral-cli plugins:unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ coral-cli plugins:unlink
  $ coral-cli plugins:remove

EXAMPLES
  $ coral-cli plugins:unlink myplugin
```

## `coral-cli plugins:update`

Update installed plugins.

```
USAGE
  $ coral-cli plugins:update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.22/src/commands/plugins/update.ts)_

## `coral-cli scraper:debug`

displays the metadata that Coral was able to scrape from the given URL

```
USAGE
  $ coral-cli scraper:debug -d <value> --url <value>

FLAGS
  -d, --domain=<value>  (required) domain for tenant to run command against
      --url=<value>     (required)

DESCRIPTION
  displays the metadata that Coral was able to scrape from the given URL
```

_See code: [src/commands/scraper/debug.ts](https://github.com/coralproject/coral-cli/blob/v0.6.0/src/commands/scraper/debug.ts)_

## `coral-cli story:get`

fetches a story

```
USAGE
  $ coral-cli story:get -d <value> [--id <value> | --url <value>]

FLAGS
  -d, --domain=<value>  (required) domain for tenant to run command against
      --id=<value>      find a story by ID
      --url=<value>     find a story by URL

DESCRIPTION
  fetches a story
```

_See code: [src/commands/story/get.ts](https://github.com/coralproject/coral-cli/blob/v0.6.0/src/commands/story/get.ts)_

## `coral-cli story:merge`

merge stories and their comments into a single story

```
USAGE
  $ coral-cli story:merge -d <value> --from <value>... --into <value>

FLAGS
  -d, --domain=<value>   (required) domain for tenant to run command against
      --from=<value>...  (required) source Story ID that will be merged from
      --into=<value>     (required) destination Story ID that will be merged into

DESCRIPTION
  merge stories and their comments into a single story
```

_See code: [src/commands/story/merge.ts](https://github.com/coralproject/coral-cli/blob/v0.6.0/src/commands/story/merge.ts)_

## `coral-cli story:update`

update stories metadata

```
USAGE
  $ coral-cli story:update -d <value> --id <value> --url <value>

FLAGS
  -d, --domain=<value>  (required) domain for tenant to run command against
      --id=<value>      (required) the ID of the story to update
      --url=<value>     (required) the new URL to update the story to

DESCRIPTION
  update stories metadata
```

_See code: [src/commands/story/update.ts](https://github.com/coralproject/coral-cli/blob/v0.6.0/src/commands/story/update.ts)_

## `coral-cli token:create`

creates tokens on the current user

```
USAGE
  $ coral-cli token:create -d <value> --name <value> [--json]

FLAGS
  -d, --domain=<value>  (required) domain for tenant to run command against
      --json            will write output as json
      --name=<value>    (required) name of the token

DESCRIPTION
  creates tokens on the current user
```

_See code: [src/commands/token/create.ts](https://github.com/coralproject/coral-cli/blob/v0.6.0/src/commands/token/create.ts)_

## `coral-cli token:list`

lists tokens on the current user

```
USAGE
  $ coral-cli token:list -d <value> [--json]

FLAGS
  -d, --domain=<value>  (required) domain for tenant to run command against
      --json            will write output as json

DESCRIPTION
  lists tokens on the current user
```

_See code: [src/commands/token/list.ts](https://github.com/coralproject/coral-cli/blob/v0.6.0/src/commands/token/list.ts)_

## `coral-cli token:revoke`

revokes tokens on the current user

```
USAGE
  $ coral-cli token:revoke -d <value> --id <value>

FLAGS
  -d, --domain=<value>  (required) domain for tenant to run command against
      --id=<value>      (required) id of the token to revoke

DESCRIPTION
  revokes tokens on the current user
```

_See code: [src/commands/token/revoke.ts](https://github.com/coralproject/coral-cli/blob/v0.6.0/src/commands/token/revoke.ts)_
<!-- commandsstop -->
