/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the BuildParams class.
 * @constructor
 * @member {string} [sourceVersion] Version to build
 * 
 * @member {boolean} [debug] Run build in debug mode
 * 
 */
function BuildParams() {
}

/**
 * Defines the metadata of BuildParams
 *
 * @returns {object} metadata of BuildParams
 *
 */
BuildParams.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'BuildParams',
    type: {
      name: 'Composite',
      className: 'BuildParams',
      modelProperties: {
        sourceVersion: {
          required: false,
          serializedName: 'sourceVersion',
          type: {
            name: 'String'
          }
        },
        debug: {
          required: false,
          serializedName: 'debug',
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = BuildParams;
