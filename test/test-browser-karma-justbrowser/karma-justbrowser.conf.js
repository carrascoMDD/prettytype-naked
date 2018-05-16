/*
 * karma-justbrowser.conf.js
 *
 * Created @author Antonio Carrasco Valero 201805160531
 *
 *
 ***************************************************************************

 Copyright 2018 Antonio Carrasco Valero
 Module, prototype and inheritance patterns, deconstructed into elemental mechanisms, and constructed step-wise into the whole, to better grasp multi-platform JS

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */

var someKarmaConfFiles = [
    
    /* Order of files is mandatory as stated to the dependency injection in angular module definitions */
    
    '../../src/globalpolutionavoidance/globalpolution-poluting-donotuse_strict.js',
    '../../src/globalpolutionavoidance/globalpolution-poluting-nostrict.js',
    '../../src/globalpolutionavoidance/globalpolution-poluting-use_strict-with_var.js',
    
    /* **********************************************************************************************
    * Can not be included among the files to be loaded by karma to run tests, because
      globalpolution-poluting-use_strict-wo_var-doesnotload fails to load because the use_strict and not using var keyword, but if it were to laod, polutes globals when loaded in the browser without a module manager, but not with angular, require, nomod, or in nodejs", function () {
    '../../src/globalpolutionavoidance/globalpolution-poluting-use_strict-wo_var-doesnotload.js',
     */
    
    '../../src/globalpolutionavoidance/globalpolution-unpoluting.js',

    '../globalpolutionavoidance-test/globalpolution-unpoluting-test.js',
    '../globalpolutionavoidance-test/globalpolution-poluting-donotuse_strict-test.js',
    '../globalpolutionavoidance-test/globalpolution-poluting-nostrict-test.js',
    '../globalpolutionavoidance-test/globalpolution-poluting-use_strict-with_var-test.js',
    
    /* **********************************************************************************************
    * Can not be included among the files to be loaded by karma to run tests, because the file to be tested can not be loaded.
    * See globalpolution-poluting-use_strict-wo_var-doesnotload.js above

    '../globalpolutionavoidance-test/globalpolution-poluting-use_strict-wo_var-doesnotload-test.js'
    */
    
];


module.exports = function(config){
    config.set({
        
        basePath : './',
        
        files: someKarmaConfFiles,
        
        autoWatch : false,
        
        frameworks: ['jasmine'],
        
        browsers : ['Chrome'],
        
        port:  9877,
        colors:  true ,
        
        plugins : [
            'karma-chrome-launcher',
            'karma-jasmine'
        ],
    
        proxies: {
        },
    
        logLevel: config.LOG_DEBUG,
        /* logLevel: config.LOG_INFO,
           logLevel: config.LOG_DEBUG
         */
    
        browserNoActivityTimeout: 240000
    });
};
