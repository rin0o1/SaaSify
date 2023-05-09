// @ts-check
require('reflect-metadata');
const { Container } = require('inversify');

const preloader = require('@theia/core/lib/browser/preloader');

module.exports = Promise.resolve().then(() => {
    const { frontendApplicationModule } = require('@theia/core/lib/browser/frontend-application-module');
    const container = new Container();
    container.load(frontendApplicationModule);
    

});
