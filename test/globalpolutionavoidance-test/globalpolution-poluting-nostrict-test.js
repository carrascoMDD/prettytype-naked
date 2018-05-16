/*
 * globalpolution-poluting-nostrict-test.js
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

/// <reference path="src/globalpolutionavoidance/globalpolution-poluting-nostrict.js"/>

'use strict';

describe( "globalpolution-poluting-nostrict polutes globals when loaded in the browser without a module manager, but not with angular, require, nomod, or in nodejs", function () {
    
    it( "global is poluted because can find globals created by globalpolution-poluting-nostrict", function () {

        expect( typeof GlobalPolutingVar_nostrict).toBe( "string");
        expect( GlobalPolutingVar_nostrict).toBe( "valueOf GlobalPolutingVar_nostrict");
        
        expect( typeof GlobalOtherPolutingVar_nostrict).toBe( "string");
        expect( GlobalOtherPolutingVar_nostrict).toBe( "valueOf GlobalOtherPolutingVar_nostrict");
        
        expect( typeof FGlobalPolutingFunction_nostrict).toBe( "function");
        expect( FGlobalPolutingFunction_nostrict()).toBe( "returnOf FGlobalPolutingFunction_nostrict");
        
        expect( typeof FGlobalOtherPolutingFunction_nostrict).toBe( "function");
        expect( FGlobalOtherPolutingFunction_nostrict()).toBe( "returnOf FGlobalOtherPolutingFunction_nostrict");
    });
    
});


