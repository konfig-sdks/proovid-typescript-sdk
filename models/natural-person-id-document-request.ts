/*
Proovid Electronic Verification

Proovid API is a RESTful application that specializes in electronic verification (Proof of address and Proof of Identity) by employing an advanced risk-tiered approacch in combination with a smart Risk assessment system. <a href='docs/PROOVid_ELV.pdf' target='_blank'>More information</a> 

The version of the OpenAPI document: v1
Contact: info@proovid.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { IDDocType } from './iddoc-type';

/**
 * 
 * @export
 * @interface NaturalPersonIdDocumentRequest
 */
export interface NaturalPersonIdDocumentRequest {
    /**
     * 
     * @type {string}
     * @memberof NaturalPersonIdDocumentRequest
     */
    'country'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NaturalPersonIdDocumentRequest
     */
    'document'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NaturalPersonIdDocumentRequest
     */
    'additionalDocument'?: string | null;
    /**
     * 
     * @type {IDDocType}
     * @memberof NaturalPersonIdDocumentRequest
     */
    'documentType'?: IDDocType;
    /**
     * 
     * @type {string}
     * @memberof NaturalPersonIdDocumentRequest
     */
    'face'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof NaturalPersonIdDocumentRequest
     */
    'hasLivenessCheck'?: boolean;
}

