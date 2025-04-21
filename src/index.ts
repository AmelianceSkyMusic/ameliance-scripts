import * as lab from './_lab';
import * as legacy from './legacy';

export * from './add-id';
export * from './class-name';
export * from './clear-local-storage-and-reload';
export * from './create-html-elem';
export * from './detect-value-type';
export * from './error-handler';
export * from './escape-html';
export * from './get-changed-properties';
export * from './get-common-values';
export * from './get-current-date-in-ms';
export * from './get-current-time-with-offset';
export * from './get-different-values';
export * from './get-elem-by-key';
export * from './get-formatted-date';
export * from './get-index-by-key';
export * from './get-indexes-of-non-empty-elements';
export * from './get-match-soft';
export * from './get-match';
export * from './get-obj-key-by-value';
export * from './get-random-hex-color';
export * from './get-random-number';
export * from './get-random-rgb-color';
export * from './get-scroll-direction';
export * from './get-today';
export * from './get-value-type';
export * from './group-by';
export * from './hide-email';
export * from './interpolate';
export * from './is-arrays-equal';
export * from './is-client';
export * from './is-object-empty';
export * from './is-object-has-value';
export * from './is-object-valid';
export * from './is-object';
export * from './is-valid-url';
export * from './join-with';
export * from './join';
export * from './kebab-to-camel-case';
export * from './log';
export * from './parse-current-date-from-ms';
export * from './remove-empty-values';
export * from './set-interval-counts';
export * from './shuffle-array';
export * from './sort-array-local-compare';
export * from './sort-array-of-obj';
export * from './string-cut';
export * from './to-time-format';
export * from './trim-end-empty-values';
export * from './trim-start-empty-values';
export * from './write-text-to-clipboard';

export { lab, legacy };

const a = {
	lab,
	legacy,
};

export default a;
