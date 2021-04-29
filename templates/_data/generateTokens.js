/**
 * This file doesn't actually put any data into the cascade, we just
 * put it here so it runs on every build, which means you can make
 * token changes in kubas.config.js without needing to restart the
 * 11ty process :)
 */

const generateCss = require('kubas/lib/generateCss');
const writeCustomProperties = require('kubas/lib/writeCustomProperties');
const writeUtilityClasses = require('kubas/lib/writeUtilityClasses');
const writeCssFile = require('kubas/lib/writeCssFile');
const config = require('kubas/lib/loadConfig')();
const setupEnv = require('kubas/lib/setupEnv')(config);

// Generate CSS from kubas.config.js
let generatedCss = generateCss(config);

// Write Custom Properties & Utility Classes
writeCssFile(
    `${config.outputDir}/tokens.css`,
    writeCustomProperties(generatedCss.customProperties),
    'Custom Properties'
);

writeCssFile(
    `${config.outputDir}/utilities.css`,
    writeUtilityClasses(generatedCss.utilityClasses),
    'Utility Classes'
);