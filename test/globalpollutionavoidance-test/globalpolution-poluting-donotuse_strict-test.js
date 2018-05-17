/*
 * globalpolution-poluting-donotuse_strict-test.js
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

/// <reference path="src/globalpolutionavoidance/globalpolution-poluting-donotuse_strict.js"/>

'use strict';

describe( "globalpolution-poluting-donotuse_strict polutes globals when loaded in the browser without a module manager, but not with angular, require, nomod, or in nodejs", function () {
    
    it( "global is poluted because can find globals created by globalpolution-poluting-donotuse_strict", function () {

        expect( typeof GlobalPolutingVar_donotuse_strict).toBe( "string");
        expect( GlobalPolutingVar_donotuse_strict).toBe( "valueOf GlobalPolutingVar_donotuse_strict");
        
        expect( typeof GlobalOtherPolutingVar_donotuse_strict).toBe( "string");
        expect( GlobalOtherPolutingVar_donotuse_strict).toBe( "valueOf GlobalOtherPolutingVar_donotuse_strict");
        
        expect( typeof FGlobalPolutingFunction_donotuse_strict).toBe( "function");
        expect( FGlobalPolutingFunction_donotuse_strict()).toBe( "returnOf FGlobalPolutingFunction_donotuse_strict");
        
        expect( typeof FGlobalOtherPolutingFunction_donotuse_strict).toBe( "function");
        expect( FGlobalOtherPolutingFunction_donotuse_strict()).toBe( "returnOf FGlobalOtherPolutingFunction_donotuse_strict");
    });
    
});


