/*
 * ***** BEGIN LICENSE BLOCK *****
 * Zimbra Collaboration Suite Web Client
 * Copyright (C) 2005, 2006, 2007, 2009, 2010, 2013, 2014, 2016 Synacor, Inc.
 *
 * The contents of this file are subject to the Common Public Attribution License Version 1.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at: https://www.zimbra.com/license
 * The License is based on the Mozilla Public License Version 1.1 but Sections 14 and 15
 * have been added to cover use of software over a computer network and provide for limited attribution
 * for the Original Developer. In addition, Exhibit A has been modified to be consistent with Exhibit B.
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied.
 * See the License for the specific language governing rights and limitations under the License.
 * The Original Code is Zimbra Open Source Web Client.
 * The Initial Developer of the Original Code is Zimbra, Inc.  All rights to the Original Code were
 * transferred by Zimbra, Inc. to Synacor, Inc. on September 14, 2015.
 *
 * All portions of the code are Copyright (C) 2005, 2006, 2007, 2009, 2010, 2013, 2014, 2016 Synacor, Inc. All Rights Reserved.
 * ***** END LICENSE BLOCK *****
 */

/**
 * Creates an exception.
 * @constructor
 * @class
 * This is the base class for all exceptions in the Zimbra Ajax Toolkit.
 * 
 * @author Ross Dargahi
 * 
 * @param {string} 		[msg]		the human readable message
 * @param {constant} 	[code]	any error or fault code
 * @param {string} 		[method] 	the name of the method throwing the exception
 * @param {string} 		[detail]		any additional detail
 */
AjxException = function(msg, code, method, detail) {

	if (arguments.length == 0) { return; }
	
	/** 
	 * Human readable message, if applicable.
	 */
	this.msg = msg;
	
	/** 
	 * Error or fault code, if applicable.
	 */
	this.code = code;
	
	/**
	 * Name of the method throwing the exception, if applicable.
	 */
	this.method = method;
	
	/**
	 * Any additional detail.
	 */
	this.detail = detail;
};

/**
 * Returns a string representation of the object.
 * 
 * @return		{string}		a string representation of the object
 */
AjxException.prototype.toString = 
function() {
	return "AjxException";
};

/**
 * Dumps the exception.
 * 
 * @return {string}	the state of the exception
 */
AjxException.prototype.dump = 
function() {
	return "AjxException: msg=" + this.msg + " code=" + this.code + " method=" + this.method + " detail=" + this.detail;
};

/**
 * Invalid parent exception code.
 */
AjxException.INVALIDPARENT 			= "AjxException.INVALIDPARENT";

/**
 * Invalid operation exception code.
 */
AjxException.INVALID_OP 			= "AjxException.INVALID_OP";

/**
 * Internal error exception code.
 */
AjxException.INTERNAL_ERROR 		= "AjxException.INTERNAL_ERROR";

/**
 * Invalid parameter to method/operation exception code.
 */
AjxException.INVALID_PARAM 			= "AjxException.INVALID_PARAM";

/**
 * Unimplemented method called exception code.
 */
AjxException.UNIMPLEMENTED_METHOD 	= "AjxException.UNIMPLEMENTED_METHOD";

/**
 * Network error exception code.
 */
AjxException.NETWORK_ERROR 			= "AjxException.NETWORK_ERROR";

/**
 * Out or RPC cache exception code.
 */
AjxException.OUT_OF_RPC_CACHE		= "AjxException.OUT_OF_RPC_CACHE";

/**
 * Unsupported operation code.
 */
AjxException.UNSUPPORTED 			= "AjxException.UNSUPPORTED";

/**
 * Unknown error exception code.
 */
AjxException.UNKNOWN_ERROR 			= "AjxException.UNKNOWN_ERROR";

/**
 * Operation canceled exception code.
 */
AjxException.CANCELED				= "AjxException.CANCELED";

AjxException.defaultScriptErrorHandler =
function(ex) {
	alert(ex);
};

AjxException.setScriptErrorHandler =
function(func) {
	AjxException.scriptErrorHandler = func;
};

AjxException.reportScriptError =
function(ex) {
	if (AjxException.reportScriptErrors && AjxException.scriptErrorHandler && !(ex instanceof AjxException)) {
		AjxException.scriptErrorHandler(ex);
	}
	throw ex;
};

AjxException.reportScriptErrors = false;
AjxException.scriptErrorHandler = AjxException.defaultScriptErrorHandler;
