/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the CustomPropertyLog class.
 * @constructor
 * Set or remove custom properties.
 *
 * @member {array} [properties] Custom property changes.
 * 
 */
function CustomPropertyLog() {
  CustomPropertyLog['super_'].call(this);
}

util.inherits(CustomPropertyLog, models['Log']);

/**
 * Defines the metadata of CustomPropertyLog
 *
 * @returns {object} metadata of CustomPropertyLog
 *
 */
CustomPropertyLog.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'custom_properties',
    type: {
      name: 'Composite',
      className: 'CustomPropertyLog',
      modelProperties: {
        timestamp: {
          required: true,
          serializedName: 'timestamp',
          type: {
            name: 'DateTime'
          }
        },
        installId: {
          required: true,
          serializedName: 'install_id',
          type: {
            name: 'String'
          }
        },
        device: {
          required: true,
          serializedName: 'device',
          type: {
            name: 'Composite',
            className: 'Device'
          }
        },
        type: {
          required: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        properties: {
          required: false,
          serializedName: 'properties',
          constraints: {
            MaxItems: 60,
            MinItems: 1
          },
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'CustomPropertyElementType',
                type: {
                  name: 'Composite',
                  polymorphicDiscriminator: 'type',
                  uberParent: 'CustomProperty',
                  className: 'CustomProperty'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = CustomPropertyLog;
