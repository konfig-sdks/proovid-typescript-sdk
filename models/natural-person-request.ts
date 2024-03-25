/*
Proovid Electronic Verification

Proovid API is a RESTful application that specializes in electronic verification (Proof of address and Proof of Identity) by employing an advanced risk-tiered approacch in combination with a smart Risk assessment system. <a href='docs/PROOVid_ELV.pdf' target='_blank'>More information</a> 

The version of the OpenAPI document: v1
Contact: info@proovid.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface NaturalPersonRequest
 */
export interface NaturalPersonRequest {
    /**
     * 
     * @type {number}
     * @memberof NaturalPersonRequest
     */
    'naturalPersonId'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof NaturalPersonRequest
     */
    'firstName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NaturalPersonRequest
     */
    'middleName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NaturalPersonRequest
     */
    'lastName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NaturalPersonRequest
     */
    'dob'?: string;
    /**
     * 
     * @type {string}
     * @memberof NaturalPersonRequest
     */
    'partialMatch'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NaturalPersonRequest
     */
    'document'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NaturalPersonRequest
     */
    'documentType'?: string | null;
}
