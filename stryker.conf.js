module.exports = {
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "mocha",
  coverageAnalysis: "perTest",
  mochaOptions: {
    spec: ["lib/tests/**/*.js"]
  },
  mutate: ["lib/**/*.js", "!lib/tests/**/*.js"]
};
