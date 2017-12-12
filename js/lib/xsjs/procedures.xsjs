/*eslint no-console: 0, no-unused-vars: 0, dot-notation: 0, no-use-before-define: 0*/
/*eslint-env node, es6 */
"use strict";
var connection = $.hdb.getConnection();

var getUserAddressData = connection.loadProcedure("getURAddresses");

var results = getUserAddressData();
	//Pass output to response		
	$.response.status = $.net.http.OK;
	$.response.contentType = "application/json";
	$.response.setBody(JSON.stringify(results));