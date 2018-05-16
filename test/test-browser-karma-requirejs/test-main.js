/*
 * test-main.js
 *
 * Created @author Antonio Carrasco Valero 201805111532
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Multi-platform Javascript EC5 coding patterns and base super-prototypes, for write-once, run and test everywhere (angular, require, node).

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



requirejs.config({
    
    waitSeconds: 60, /* Usually 7 */
    
    // Karma serves files from '/base'
    baseUrl: '/base',
    
    /* ask Require.js to load these scripts, which shall include all our tests, but not the modules to be tested,
    which shall be loaded as dependencies of the tests below.
     */
    deps: [
        
        // "m_typesregistry_structural_test",
       

    ],
    
    /* map test modules from symbolic name to a file system path WITHOUT THE .js FILE EXTENSION relative to base ... baseURL?
     */
    paths: {
       // 'm_typesregistry_structural_test':                    './test/structural-test/modboot-structural-test/typesregistry-structural-test',
       
     },

    // start test run, once Require.js is done loading scripts
    callback: window.__karma__.start
});


