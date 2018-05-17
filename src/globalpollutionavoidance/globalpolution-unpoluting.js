/*
 * globalpolution-unpoluting.js
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

'use strict';

/* ************************************************************************************************
 To avoid poluting globals, in platforms where such is even possible (i.e. not posible in nodejs):

   Wrap implementation in an anonymous self-executing function.
   
   The body of the anonymous self-executing function
   shall execute in its own closure and lexical scope, and therefore the global scope is protected from polution:
   no variable or function defined within the body of the anonymous self-executing function is declared in the global scope
   or any scope above the body of the anonymous self-executing funcion.
 *************************************************************************************************/


/* *********************************************************
 Self executing function with a body left empty, to illustrate the syntactical pattern
 */
(function() {
    /* Nothing in this case */
})();


/* *********************************************************
 Self executing function with body code which can not polute globals
 thanks to the function executing with its own closure and lexical scope.
 */
(function() {
    /* code like the example variants globalpolution-poluting-xxx.js */
    
    var GlobalPolutingVar_unpoluting = "valueOf GlobalPolutingVar_unpoluting";
    if(GlobalPolutingVar_unpoluting){}/*silenceLint*/
    
    
    var GlobalOtherPolutingVar_unpoluting = "valueOf GlobalOtherPolutingVar_unpoluting";
    if(GlobalOtherPolutingVar_unpoluting){}/*silenceLint*/
    
    function FGlobalPolutingFunction_unpoluting() {
        return "returnOf FGlobalPolutingFunction_unpoluting";
    }
    if(FGlobalPolutingFunction_unpoluting){}/*silenceLint*/

    var FGlobalOtherPolutingFunction_unpoluting = function() {
        return "returnOf FGlobalOtherPolutingFunction_unpoluting";
    };
    if(FGlobalOtherPolutingFunction_unpoluting){}/*silenceLint*/

})();


