/*
 * globalpolution-poluting-nostrict.js
 *
 * Created @author Antonio Carrasco Valero 20180516236
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

/* ************************************************************************************************
 Not stating explicitely 'use strict'; in Javascript ES5 is equivalent to 'donotuse strict';
 and javascript shall allow to create globals which are either functions or name-values name-values with or without 'var'..
 
 Globals is poluted with both the name-values and functions both with and without var.
 *************************************************************************************************/


GlobalPolutingVar_nostrict = "valueOf GlobalPolutingVar_nostrict";
if(GlobalPolutingVar_nostrict){}/*silenceLint*/


var GlobalOtherPolutingVar_nostrict = "valueOf GlobalOtherPolutingVar_nostrict";
if(GlobalOtherPolutingVar_nostrict){}/*silenceLint*/

function FGlobalPolutingFunction_nostrict() {
    return "returnOf FGlobalPolutingFunction_nostrict";
}
if(FGlobalPolutingFunction_nostrict){}/*silenceLint*/

var FGlobalOtherPolutingFunction_nostrict = function() {
    return "returnOf FGlobalOtherPolutingFunction_nostrict";
};
if(FGlobalOtherPolutingFunction_nostrict){}/*silenceLint*/

