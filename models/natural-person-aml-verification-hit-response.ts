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
 * @interface NaturalPersonAmlVerificationHitResponse
 */
export interface NaturalPersonAmlVerificationHitResponse {
    /**
     * 
     * @type {string}
     * @memberof NaturalPersonAmlVerificationHitResponse
     */
    'dataSourceName'?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof NaturalPersonAmlVerificationHitResponse
     */
    'categories'?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof NaturalPersonAmlVerificationHitResponse
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NaturalPersonAmlVerificationHitResponse
     */
    'country'?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof NaturalPersonAmlVerificationHitResponse
     */
    'politicalPositions'?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof NaturalPersonAmlVerificationHitResponse
     */
    'relatedUrls'?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof NaturalPersonAmlVerificationHitResponse
     */
    'birthDates'?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof NaturalPersonAmlVerificationHitResponse
     */
    'matchTypes'?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof NaturalPersonAmlVerificationHitResponse
     */
    'matchStatus'?: string | null;
}

