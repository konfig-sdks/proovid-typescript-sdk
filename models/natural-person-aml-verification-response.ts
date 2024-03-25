/*
Proovid Electronic Verification

Proovid API is a RESTful application that specializes in electronic verification (Proof of address and Proof of Identity) by employing an advanced risk-tiered approacch in combination with a smart Risk assessment system. <a href='docs/PROOVid_ELV.pdf' target='_blank'>More information</a> 

The version of the OpenAPI document: v1
Contact: info@proovid.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ENegativeReputationAnswers } from './enegative-reputation-answers';
import { EPepAnswers } from './epep-answers';
import { ESanctionAnswers } from './esanction-answers';
import { EStatus } from './estatus';
import { NaturalPersonAmlVerificationHitResponse } from './natural-person-aml-verification-hit-response';

/**
 * 
 * @export
 * @interface NaturalPersonAmlVerificationResponse
 */
export interface NaturalPersonAmlVerificationResponse {
    /**
     * 
     * @type {EStatus}
     * @memberof NaturalPersonAmlVerificationResponse
     */
    'status'?: EStatus;
    /**
     * 
     * @type {string}
     * @memberof NaturalPersonAmlVerificationResponse
     */
    'comment'?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof NaturalPersonAmlVerificationResponse
     */
    'categories'?: Array<string> | null;
    /**
     * 
     * @type {ESanctionAnswers}
     * @memberof NaturalPersonAmlVerificationResponse
     */
    'hasSanctions'?: ESanctionAnswers;
    /**
     * 
     * @type {EPepAnswers}
     * @memberof NaturalPersonAmlVerificationResponse
     */
    'isPep'?: EPepAnswers;
    /**
     * 
     * @type {ENegativeReputationAnswers}
     * @memberof NaturalPersonAmlVerificationResponse
     */
    'hasNegativeReputation'?: ENegativeReputationAnswers;
    /**
     * 
     * @type {string}
     * @memberof NaturalPersonAmlVerificationResponse
     */
    'creationDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof NaturalPersonAmlVerificationResponse
     */
    'lastUpdatedDate'?: string;
    /**
     * 
     * @type {Array<NaturalPersonAmlVerificationHitResponse>}
     * @memberof NaturalPersonAmlVerificationResponse
     */
    'hits'?: Array<NaturalPersonAmlVerificationHitResponse> | null;
}
