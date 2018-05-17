/*
 * globalpolution-poluting-donotuse_strict.js
 *
 * Created @author Antonio Carrasco Valero 20180516235
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
 By stating explicitely 'donotuse strict';
  javascript shall allow to create globals which are either functions or name-values name-values with or without 'var'..
 
 Globals is poluted with both the name-values and functions both with and without var.
 *************************************************************************************************/


'donotuse strict';

GlobalPolutingVar_donotuse_strict = "valueOf GlobalPolutingVar_donotuse_strict";
if(GlobalPolutingVar_donotuse_strict){}/*silenceLint*/


var GlobalOtherPolutingVar_donotuse_strict = "valueOf GlobalOtherPolutingVar_donotuse_strict";
if(GlobalOtherPolutingVar_donotuse_strict){}/*silenceLint*/

function FGlobalPolutingFunction_donotuse_strict() {
    return "returnOf FGlobalPolutingFunction_donotuse_strict";
}
if(FGlobalPolutingFunction_donotuse_strict){}/*silenceLint*/

var FGlobalOtherPolutingFunction_donotuse_strict = function() {
    return "returnOf FGlobalOtherPolutingFunction_donotuse_strict";
};
if(FGlobalOtherPolutingFunction_donotuse_strict){}/*silenceLint*/



