// eslint-disable-next-line @typescript-eslint/no-require-imports,no-undef
const oclifConfig = require("@oclif/prettier-config");

// eslint-disable-next-line no-undef
module.exports = {
  ...oclifConfig,

  // Custom project settings
  singleQuote: false,
  trailingComma: "all",
  printWidth: 80,
  semi: true,
  bracketSpacing: true,
};
