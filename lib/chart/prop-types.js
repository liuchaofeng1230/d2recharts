'use strict';
/**
 * prop-types module
 * @module prop-types
 * @see module:index
 */
const React = require('react');
const lang = require('zero-lang');
const DataSet = require('../source/data-set');
const util = require('../util/index');

const recharts = {
  className: React.PropTypes.string,
  lazyUpdate: React.PropTypes.bool,
  notMerge: React.PropTypes.bool,
  onChartReady: React.PropTypes.func,
  onEvents: React.PropTypes.object,
  option: React.PropTypes.object,
  showLoading: React.PropTypes.bool,
  style: React.PropTypes.object,
  theme: React.PropTypes.string,
};

const rechartsWithData = lang.extend({
  data: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.instanceOf(DataSet),
    React.PropTypes.object,
    React.PropTypes.string,
  ]).isRequired,
}, recharts);

const rechartsWithDataAndCoordinates = lang.extend({
  horizontal: React.PropTypes.bool,
  dimension: React.PropTypes.string,
  dimensions: React.PropTypes.array,
  measure: React.PropTypes.string,
  measures: React.PropTypes.array,
}, rechartsWithData);

const propTypes = {
  recharts,
  rechartsWithData,
  rechartsWithDataAndCoordinates,
};

util.propTypes = propTypes;
module.exports = propTypes;