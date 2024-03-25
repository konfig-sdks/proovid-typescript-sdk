/*
Proovid Electronic Verification

Proovid API is a RESTful application that specializes in electronic verification (Proof of address and Proof of Identity) by employing an advanced risk-tiered approacch in combination with a smart Risk assessment system. <a href='docs/PROOVid_ELV.pdf' target='_blank'>More information</a> 

The version of the OpenAPI document: v1
Contact: info@proovid.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DocumentVerificationData } from './document-verification-data';
import { DocumentVerificationResult } from './document-verification-result';

/**
 * 
 * @export
 * @interface DocumentVerificationResponse
 */
export interface DocumentVerificationResponse {
    /**
     * 
     * @type {number}
     * @memberof DocumentVerificationResponse
     */
    'id'?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentVerificationResponse
     */
    'systemId'?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentVerificationResponse
     */
    'status'?: number;
    /**
     * 
     * @type {DocumentVerificationData}
     * @memberof DocumentVerificationResponse
     */
    'documentData'?: DocumentVerificationData;
    /**
     * 
     * @type {DocumentVerificationResult}
     * @memberof DocumentVerificationResponse
     */
    'documentResult'?: DocumentVerificationResult;
    /**
     * 
     * @type {string}
     * @memberof DocumentVerificationResponse
     */
    'declinedReason'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentVerificationResponse
     */
    'declinedCodeProovid'?: string | null;
}

