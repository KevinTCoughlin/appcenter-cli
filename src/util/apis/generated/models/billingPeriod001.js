/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the BillingPeriod001 class.
 * @constructor
 * Billing plans for a given period
 *
 * @member {string} [startTime] Inclusive start of the period
 * 
 * @member {string} [endTime] Exclusive end of the period.
 * 
 * @member {object} [byAccount]
 * 
 * @member {number} [byAccount.count] Number of instances of the billing plan.
 * 
 * @member {object} [byAccount.plan]
 * 
 * @member {string} [byAccount.plan.id] The Billing Plan ID
 * 
 * @member {string} [byAccount.plan.version] Version of the Billing Plan schema
 * 
 * @member {number} [byAccount.plan.priceBucket] Price bucket of the billing
 * plan. Free plans start with 0, paid plans have higher price buckets
 * 
 * @member {string} [byAccount.plan.service] Name of the service that the plan
 * applies to. Possible values include: 'Build', 'Push', 'Test'
 * 
 * @member {object} [byAccount.plan.limits]
 * 
 * @member {object} [byAccount.plan.attributes]
 * 
 */
function BillingPeriod001() {
}

/**
 * Defines the metadata of BillingPeriod001
 *
 * @returns {object} metadata of BillingPeriod001
 *
 */
BillingPeriod001.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'BillingPeriod_0_0_1',
    type: {
      name: 'Composite',
      className: 'BillingPeriod001',
      modelProperties: {
        startTime: {
          required: false,
          serializedName: 'startTime',
          type: {
            name: 'String'
          }
        },
        endTime: {
          required: false,
          serializedName: 'endTime',
          type: {
            name: 'String'
          }
        },
        byAccount: {
          required: false,
          serializedName: 'byAccount',
          type: {
            name: 'Composite',
            className: 'BillingPlanSelection001'
          }
        }
      }
    }
  };
};

module.exports = BillingPeriod001;
