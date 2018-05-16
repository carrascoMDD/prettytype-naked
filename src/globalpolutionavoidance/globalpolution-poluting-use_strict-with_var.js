/*
 * globalpolution-poluting-use_strict-with_var.js
 *
 * Created @author Antonio Carrasco Valero 20180516237
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
 By stating explicitely 'use strict';
  javascript shall allow to create globals which are either functions or name-values name-values with or without 'var'..
 
 Globals is poluted with both the name-values and functions both with and without var.
 *************************************************************************************************/


'use strict';

var GlobalPolutingVar_use_strict_with_var = "valueOf GlobalPolutingVar_use_strict_with_var";
if(GlobalPolutingVar_use_strict_with_var){}/*silenceLint*/


var GlobalOtherPolutingVar_use_strict_with_var = "valueOf GlobalOtherPolutingVar_use_strict_with_var";
if(GlobalOtherPolutingVar_use_strict_with_var){}/*silenceLint*/

function FGlobalPolutingFunction_use_strict_with_var() {
    return "returnOf FGlobalPolutingFunction_use_strict_with_var";
}
if(FGlobalPolutingFunction_use_strict_with_var){}/*silenceLint*/

var FGlobalOtherPolutingFunction_use_strict_with_var = function() {
    return "returnOf FGlobalOtherPolutingFunction_use_strict_with_var";
};
if(FGlobalOtherPolutingFunction_use_strict_with_var){}/*silenceLint*/
