/*
 * globalpolution-never_poluting-browser_under_moduledefinition.js
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





/* *********************************************************
Removed 'use strict'; to avoid JS to complain about definitions at top level, as they appear in the nodejs specific code below
'use strict';
*/




/* ************************************************************************************************
 Under module definition mechanisms globals are never poluted.
 
 With AngularJS, RequireJS or nomod, the module must be defined within a funcion,
 which is passed to the module definition mechanism,
 for it to be invoked whenever the module definition mechanism decides to do so,
 i.e. to resolve a request for a module,
 or to resolve a dependency to be injected in the request for another other module.

 With nodejs, the code sits right at the top level of the code in the file (i.e. no within any function body),
 but the code is unable to polute globals, because the node module loading mechanism acts
 "as if wrapping the module code with a function"
 
 Quoted from: https://nodejs.org/api/modules.html#modules_the_module_wrapper
    The module wrapper
    Before a module's code is executed, Node.js will wrap it with a function wrapper that looks like
    the following:
    
        (function(exports, require, module, __filename, __dirname) {
            // Module code actually lives in here
        });

    By doing this, Node.js achieves a few things:
    It keeps top-level variables (defined with var , const or let ) scoped to the module rather than the global object.
    It helps to provide some global-looking variables that are actually specific to the module, such as:
    The module and exports objects that the implementor can use to export values from the module.
    The convenience variables __filename and __dirname , containing the module's absolute filename and directory path.
 *************************************************************************************************/



/* *********************************************************
 Use a few of the module definition mechanisms.
 Exercised here: AngularJS, RequireJS and nomod in the browser, and nodejs.
 */

if( !( typeof angular === 'undefined') && angular.module) {
    // Angular (1.x)
    
    // typesRegistry dependencies declared here (as none) because there is no separate file defining the angular.module("typesRegistry"
    // other modules with multiple factories, i.e. identifyingTypes, declare the module and its dependiencies in a separate file identifying_types.js
    angular.module("ng_never_poluting_browser_under_angular", []).factory("Ng_never_poluting_browser_under_angular",
        function() {
            GlobalPolutingVar_never_poluting_browser_under_angular = "valueOf GlobalPolutingVar_never_poluting_browser_under_angular";
            if(GlobalPolutingVar_never_poluting_browser_under_angular){}/*silenceLint*/
    
            var GlobalOtherPolutingVar_never_poluting_browser_under_angular = "valueOf GlobalOtherPolutingVar_never_poluting_browser_under_angular";
            if(GlobalOtherPolutingVar_never_poluting_browser_under_angular){}/*silenceLint*/
    
            function FGlobalPolutingFunction_never_poluting_browser_under_angular() {
                return "returnOf FGlobalPolutingFunction_never_poluting_browser_under_angular";
            }
            if(FGlobalPolutingFunction_never_poluting_browser_under_angular){}/*silenceLint*/
    
            var FGlobalOtherPolutingFunction_never_poluting_browser_under_angular = function() {
                return "returnOf FGlobalOtherPolutingFunction_never_poluting_browser_under_angular";
            };
            if(FGlobalOtherPolutingFunction_never_poluting_browser_under_angular){}/*silenceLint*/
        }
    );
    
}
else if ( !(typeof module === 'undefined') && module.exports) {
    // Node.js
    
    GlobalPolutingVar_never_poluting_browser_under_nodejs = "valueOf GlobalPolutingVar_never_poluting_browser_under_nodejs";
    if(GlobalPolutingVar_never_poluting_browser_under_nodejs){}/*silenceLint*/
    
    var GlobalOtherPolutingVar_never_poluting_browser_under_nodejs = "valueOf GlobalOtherPolutingVar_never_poluting_browser_under_nodejs";
    if(GlobalOtherPolutingVar_never_poluting_browser_under_nodejs){}/*silenceLint*/
    
    function FGlobalPolutingFunction_never_poluting_browser_under_nodejs() {
        return "returnOf FGlobalPolutingFunction_never_poluting_browser_under_nodejs";
    }
    if(FGlobalPolutingFunction_never_poluting_browser_under_nodejs){}/*silenceLint*/
    
    var FGlobalOtherPolutingFunction_never_poluting_browser_under_nodejs = function() {
        return "returnOf FGlobalOtherPolutingFunction_never_poluting_browser_under_nodejs";
    };
    if(FGlobalOtherPolutingFunction_never_poluting_browser_under_nodejs){}/*silenceLint*/
    
    module.exports = {
        GlobalPolutingVar_never_poluting_browser_under_nodejs: GlobalPolutingVar_never_poluting_browser_under_nodejs,
        GlobalOtherPolutingVar_never_poluting_browser_under_nodejs: GlobalOtherPolutingVar_never_poluting_browser_under_nodejs,
        FGlobalPolutingFunction_never_poluting_browser_under_nodejs: FGlobalPolutingFunction_never_poluting_browser_under_nodejs,
        FGlobalOtherPolutingFunction_never_poluting_browser_under_nodejs: FGlobalOtherPolutingFunction_never_poluting_browser_under_nodejs
    };
    
}
else if ( !(typeof define === 'undefined') && define.amd) {
    // AMD / RequireJS
    
    define( "m_never_poluting_browser_under_require",
        function() {
            GlobalPolutingVar_never_poluting_browser_under_require = "valueOf GlobalPolutingVar_never_poluting_browser_under_require";
            if(GlobalPolutingVar_never_poluting_browser_under_require){}/*silenceLint*/
        
            var GlobalOtherPolutingVar_never_poluting_browser_under_require = "valueOf GlobalOtherPolutingVar_never_poluting_browser_under_require";
            if(GlobalOtherPolutingVar_never_poluting_browser_under_require){}/*silenceLint*/
        
            function FGlobalPolutingFunction_never_poluting_browser_under_require() {
                return "returnOf FGlobalPolutingFunction_never_poluting_browser_under_require";
            }
            if(FGlobalPolutingFunction_never_poluting_browser_under_require){}/*silenceLint*/
        
            var FGlobalOtherPolutingFunction_never_poluting_browser_under_require = function() {
                return "returnOf FGlobalOtherPolutingFunction_never_poluting_browser_under_require";
            };
            if(FGlobalOtherPolutingFunction_never_poluting_browser_under_require){}/*silenceLint*/
        }
    );
    
}
else if ( !(typeof nomod === 'undefined') && nomod.register) {
    // nomod toy module definition, resolution and dependency injection
    
    nomod.register( "prettytype-naked", "globalpopulationavoidance-test", "globalpolution-never_poluting-browser_under_moduledefinition",
        null /* theDependencies */,
        function() {
            GlobalPolutingVar_never_poluting_browser_under_angular = "valueOf GlobalPolutingVar_never_poluting_browser_under_angular";
            if(GlobalPolutingVar_never_poluting_browser_under_angular){}/*silenceLint*/
        
            var GlobalOtherPolutingVar_never_poluting_browser_under_angular = "valueOf GlobalOtherPolutingVar_never_poluting_browser_under_angular";
            if(GlobalOtherPolutingVar_never_poluting_browser_under_angular){}/*silenceLint*/
        
            function FGlobalPolutingFunction_never_poluting_browser_under_angular() {
                return "returnOf FGlobalPolutingFunction_never_poluting_browser_under_angular";
            }
            if(FGlobalPolutingFunction_never_poluting_browser_under_angular){}/*silenceLint*/
        
            var FGlobalOtherPolutingFunction_never_poluting_browser_under_angular = function() {
                return "returnOf FGlobalOtherPolutingFunction_never_poluting_browser_under_angular";
            };
            if(FGlobalOtherPolutingFunction_never_poluting_browser_under_angular){}/*silenceLint*/
        }
    );
    
}

