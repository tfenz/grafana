import chalk from 'chalk';
import { program } from 'commander';

import { nodeVersionCheckerTask } from './tasks/nodeVersionChecker';
import { buildPackageTask } from './tasks/package.build';
import { pluginBuildTask } from './tasks/plugin.build';
import { getToolkitVersion, githubPublishTask } from './tasks/plugin.utils';
import { templateTask } from './tasks/template';
import { toolkitBuildTask } from './tasks/toolkit.build';
import { execTask } from './utils/execTask';

export const run = (includeInternalScripts = false) => {
  if (includeInternalScripts) {
    program.option('-d, --depreciate <scripts>', 'Inform about npm script deprecation', (v) => v.split(','));

    program
      .command('package:build')
      .option('-s, --scope <packages>', 'packages=[data|runtime|ui|toolkit|e2e|e2e-selectors]')
      .description('Builds @grafana/* package to packages/grafana-*/dist')
      .action(async (cmd) => {
        console.warn(
          '@grafana/toolkit package:build task is deprecated and will be removed in @grafana/toolkit@10.0.0.'
        );
        await execTask(buildPackageTask)({
          scope: cmd.scope,
        });
      });

    program
      .command('node-version-check')
      .description('[deprecated] Verify node version')
      .action(async () => {
        console.log(
          chalk.yellow.bold(
            `⚠️ This command is deprecated and will be removed in v10. No further support will be provided. ⚠️`
          )
        );
        console.log(
          'if you were reliant on this command we recommend https://www.npmjs.com/package/check-node-version'
        );

        await execTask(nodeVersionCheckerTask)({});
      });

    program
      .command('debug:template')
      .description('Just testing')
      .action(async (cmd) => {
        await execTask(templateTask)({});
      });

    program
      .command('toolkit:build')
      .description('[Deprecated] Prepares grafana/toolkit dist package')
      .action(async (cmd) => {
        console.log(
          chalk.yellow.bold(
            `⚠️ This command is deprecated and will be removed in v10. No further support will be provided. ⚠️`
          )
        );
        await execTask(toolkitBuildTask)({});
      });
  }

  program.option('-v, --version', 'Toolkit version').action(async () => {
    const version = getToolkitVersion();
    console.log(`v${version}`);
  });

  program
    .command('plugin:create [name]')
    .description('[removed] Use grafana create-plugin instead')
    .action(async () => {
      console.log(
        'No longer supported. Use grafana create-plugin https://github.com/grafana/plugin-tools/tree/main/packages/create-plugin\n'
      );
      process.exit(1);
    });

  program
    .command('plugin:build')
    .option('--maxJestWorkers <num>|<string>', 'Limit number of Jest workers spawned')
    .option('--coverage', 'Run code coverage', false)
    .option('--skipTest', 'Skip running tests (for pipelines that run it separate)', false)
    .option('--skipLint', 'Skip running lint (for pipelines that run it separate)', false)
    .option('--preserveConsole', 'Preserves console calls', false)
    .description('[Deprecated] Prepares plugin dist package')
    .action(async (cmd) => {
      console.log(chalk.yellow('\n⚠️  DEPRECATED. This command is deprecated and will be removed in v10. ⚠️'));
      console.log(
        'Please migrate to grafana create-plugin https://github.com/grafana/plugin-tools/tree/main/packages/create-plugin\n'
      );

      await execTask(pluginBuildTask)({
        coverage: cmd.coverage,
        silent: true,
        maxJestWorkers: cmd.maxJestWorkers,
        preserveConsole: cmd.preserveConsole,
        skipLint: cmd.skipLint,
        skipTest: cmd.skipTest,
      });
    });

  program
    .command('plugin:sign')
    .option('--signatureType <type>', 'Signature Type')
    .option(
      '--rootUrls <urls...>',
      'Root URLs',
      function (url: string, urls: string[]) {
        if (typeof url !== 'string') {
          return urls;
        }

        const parts = url.split(',');
        urls.push(...parts);

        return urls;
      },
      []
    )
    .description('[removed] Use grafana sign-plugin instead')
    .action(() => {
      console.log(
        'No longer supported. Use grafana sign-plugin https://github.com/grafana/plugin-tools/tree/main/packages/sign-plugin\n'
      );
      process.exit(1);
    });

  program
    .command('plugin:github-publish')
    .option('--dryrun', 'Do a dry run only', false)
    .option('--verbose', 'Print verbose', false)
    .option('--commitHash <hashKey>', 'Specify the commit hash')
    .description('[Deprecated] Publish to github')
    .action(async (cmd) => {
      console.log(
        chalk.yellow.bold(`⚠️ This command is deprecated and will be removed . No further support will be provided. ⚠️`)
      );
      console.log(
        'We recommend using github actions directly for plugin releasing. You can find an example here:  https://github.com/grafana/plugin-tools/tree/main/packages/create-plugin/templates/github/ci/.github/workflows'
      );
      await execTask(githubPublishTask)({
        dryrun: cmd.dryrun,
        verbose: cmd.verbose,
        commitHash: cmd.commitHash,
      });
    });

  program.on('command:*', () => {
    console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '));
    process.exit(1);
  });

  program.parse(process.argv);

  const options = program.opts();
  if (options.depreciate && options.depreciate.length === 2) {
    console.log(
      chalk.yellow.bold(
        `[NPM script depreciation] ${options.depreciate[0]} is deprecated! Use ${options.depreciate[1]} instead!`
      )
    );
  }
};
