/*
Proovid Electronic Verification

Proovid API is a RESTful application that specializes in electronic verification (Proof of address and Proof of Identity) by employing an advanced risk-tiered approacch in combination with a smart Risk assessment system. <a href='docs/PROOVid_ELV.pdf' target='_blank'>More information</a> 

The version of the OpenAPI document: v1
Contact: info@proovid.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BaseResponse } from './base-response';
import { StringBaseResponse } from './string-base-response';

/**
 * 
 * @export
 * @interface UpdateNaturalPersonDocumentsDataSaveResult
 */
export interface UpdateNaturalPersonDocumentsDataSaveResult {
    /**
     * 
     * @type {BaseResponse}
     * @memberof UpdateNaturalPersonDocumentsDataSaveResult
     */
    'idDocumentSaved'?: BaseResponse;
    /**
     * 
     * @type {BaseResponse}
     * @memberof UpdateNaturalPersonDocumentsDataSaveResult
     */
    'faceSaved'?: BaseResponse;
    /**
     * 
     * @type {StringBaseResponse}
     * @memberof UpdateNaturalPersonDocumentsDataSaveResult
     */
    'livenessCheckURL'?: StringBaseResponse;
    /**
     * 
     * @type {BaseResponse}
     * @memberof UpdateNaturalPersonDocumentsDataSaveResult
     */
    'addressDocumentSaved'?: BaseResponse;
    /**
     * 
     * @type {BaseResponse}
     * @memberof UpdateNaturalPersonDocumentsDataSaveResult
     */
    'verificationStarted'?: BaseResponse;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateNaturalPersonDocumentsDataSaveResult
     */
    'allSucceeded'?: boolean;
}

