/*
 * globalpolution-never_poluting-browser_under_moduledefinition-test.js
 *
 * Created @author Antonio Carrasco Valero 20180516239
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

/// <reference path="src/globalpolutionavoidance/globalpolution-never_poluting-browser_under_moduledefinition.js"/>

'use strict';

describe( "globalpolution-never_poluting-browser_under_moduledefinition, not just in nodejs, but neither when loaded in the browser with AngularJS, RequireJS or nomod", function () {
    
    it( "global is unpoluted because can not find globals which would be created by globalpolution-never_poluting-browser_under_moduledefinition", function () {
    
        if( !( typeof angular === 'undefined') && angular.module) {
            // Angular (1.x)
            expect( typeof GlobalPolutingVar_never_poluting_browser_under_angular).toBe( "undefined");
            expect( typeof GlobalOtherPolutingVar_never_poluting_browser_under_angular).toBe( "undefined");
            expect( typeof FGlobalPolutingFunction_never_poluting_browser_under_angular).toBe( "undefined");
            expect( typeof FGlobalOtherPolutingFunction_never_poluting_browser_under_angular).toBe( "undefined");
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            expect( typeof GlobalPolutingVar_never_poluting_browser_under_nodejs).toBe( "undefined");
            expect( typeof GlobalOtherPolutingVar_never_poluting_browser_under_nodejs).toBe( "undefined");
            expect( typeof FGlobalPolutingFunction_never_poluting_browser_under_nodejs).toBe( "undefined");
            expect( typeof FGlobalOtherPolutingFunction_never_poluting_browser_under_nodejs).toBe( "undefined");
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            expect( typeof GlobalPolutingVar_never_poluting_browser_under_require).toBe( "undefined");
            expect( typeof GlobalOtherPolutingVar_never_poluting_browser_under_require).toBe( "undefined");
            expect( typeof FGlobalPolutingFunction_never_poluting_browser_under_require).toBe( "undefined");
            expect( typeof FGlobalOtherPolutingFunction_never_poluting_browser_under_require).toBe( "undefined");
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            expect( typeof GlobalPolutingVar_never_poluting_browser_under_nomod).toBe( "undefined");
            expect( typeof GlobalOtherPolutingVar_never_poluting_browser_under_nomod).toBe( "undefined");
            expect( typeof FGlobalPolutingFunction_never_poluting_browser_under_nomod).toBe( "undefined");
            expect( typeof FGlobalOtherPolutingFunction_never_poluting_browser_under_nomod).toBe( "undefined");
        }
    
    });
    
});


