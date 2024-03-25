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
 * @interface SumSubAmlVerificationHitResponse
 */
export interface SumSubAmlVerificationHitResponse {
    /**
     * 
     * @type {string}
     * @memberof SumSubAmlVerificationHitResponse
     */
    'dataSourceName'?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SumSubAmlVerificationHitResponse
     */
    'categories'?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof SumSubAmlVerificationHitResponse
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SumSubAmlVerificationHitResponse
     */
    'country'?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SumSubAmlVerificationHitResponse
     */
    'politicalPositions'?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SumSubAmlVerificationHitResponse
     */
    'relatedUrls'?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SumSubAmlVerificationHitResponse
     */
    'birthDates'?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SumSubAmlVerificationHitResponse
     */
    'matchTypes'?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof SumSubAmlVerificationHitResponse
     */
    'matchStatus'?: string | null;
}
