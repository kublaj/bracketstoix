/**
 * @preserve Copyright (c) 2015 ApptoIX Limited. All rights reserved.
 * @author Alexandre Bento Freire
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/* 
    Functions that have no external dependecies 
*/
//@TODO: Move the isolated functions from main.js to this file


/*jslint vars: true, plusplus: true, devel: true, white: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, brackets, $ */

define(function () {
    "use strict";
/** ------------------------------------------------------------------------
 *                               Functions
 ** ------------------------------------------------------------------------ */
return {    
    capitalizeText : {
        pat: /\b(_*\w)/g,
        repl: function replacer(match, p1, offset, string) {
            return p1.toUpperCase();
        }
    },      
    camelCaseText : {
        pat: /\b(_*\w)/g,
        repl: function replacer(match, p1, offset, string) {
            return p1.toLowerCase();
        }
    },  
  
    reverse : {
        pat: /\b(.+)(\s+)([=<>]=*|[!:]=+)(\s+)([^;]+)/,
        repl: "$5$2$3$4$1"      
    },
/** ------------------------------------------------------------------------
 *                               Commands: Slash
 ** ------------------------------------------------------------------------ */
    unixToWin : {
        pat: /\//g, repl: '\\'
    },

    winToUnix : {
        pat: /\\/g, repl: '/'
    },

    singleToDoubleSlash : {
        pat: /\\/g, repl: '\\\\'
    },

    doubleToSingleSlash : {
        pat: /\\\\/g, repl: '\\'
    }
        
};
});