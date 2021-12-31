const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy")

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
        name: "mushroom", // serverless function name from your permalink object
        functionsDir: "./netlify/functions/"
    })

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}