import Vue from 'vue';
import { mergeData as mergeFunc } from 'vue-functional-data-merge';

// --- Constants ---
export const PROP_TYPE_ARRAY = Array;
export const PROP_TYPE_BOOLEAN = Boolean;
export const PROP_TYPE_DATE = Date;
export const PROP_TYPE_FUNCTION = Function;
export const PROP_TYPE_NUMBER = Number;
export const PROP_TYPE_OBJECT = Object;
export const PROP_TYPE_REG_EXP = RegExp;
export const PROP_TYPE_STRING = String;
export const PROP_TYPE_ANY = undefined;
export const PROP_TYPE_NUMBER_STRING = [PROP_TYPE_NUMBER, PROP_TYPE_STRING];

// --- Aspect ---
export const RX_ASPECT = /^\d+(\.\d*)?[/:]\d+(\.\d*)?$/;
export const RX_ASPECT_SEPARATOR = /[/:]/;

export const PROP_NAME = '$bvConfig';
export const NAME_ASPECT = 'BAspect';
export const NAME_SKELETON = 'BSkeleton';
export const NAME_SKELETON_IMG = 'BSkeletonImg';
export const SLOT_NAME_DEFAULT = 'default';

// utility functions
export const mergeData = mergeFunc;
export const extend = Vue.extend;
export const VueProto = Vue.prototype;

// Math utility functions
export const mathMin = Math.min;
export const mathMax = Math.max;
export const mathAbs = Math.abs;
export const mathCeil = Math.ceil;
export const mathFloor = Math.floor;
export const mathPow = Math.pow;
export const mathRound = Math.round;

// Number utilities
// Converts a value (string, number, etc.) to an integer number
// Assumes radix base 10
export const toInteger = (value, defaultValue = NaN) => {
    const integer = parseInt(value, 10);
    return isNaN(integer) ? defaultValue : integer;
};

// Converts a value (string, number, etc.) to a number
export const toFloat = (value, defaultValue = NaN) => {
    const float = parseFloat(value);
    return isNaN(float) ? defaultValue : float;
};

// Converts a value (string, number, etc.) to a string
// representation with `precision` digits after the decimal
// Returns the string 'NaN' if the value cannot be converted
export const toFixed = (val, precision) => toFloat(val).toFixed(toInteger(precision, 0));

// functions
export const identity = (x) => x;
export const concat = (...args) => Array.prototype.concat.apply([], args);
export const isUndefined = (value) => value === undefined;
export const isObject = (obj) => obj !== null && typeof obj === 'object';
export const isFunction = (fn) => typeof fn === 'function';
export const keys = (obj) => Object.keys(obj);
export const isArray = (value) => Array.isArray(value);
// Only returns true for plain JavaScript objects
export const isPlainObject = (obj) => Object.prototype.toString.call(obj) === '[object Object]';

export const cloneDeep = (obj, defaultValue = obj) => {
    if (isArray(obj)) {
        return obj.reduce((result, val) => [...result, cloneDeep(val, val)], []);
    }
    if (isPlainObject(obj)) {
        return keys(obj).reduce(
            (result, key) => ({ ...result, [key]: cloneDeep(obj[key], obj[key]) }),
            {}
        );
    }
    return defaultValue;
};

export const getConfigValue = (key, defaultValue = undefined) => {
    const bvConfig = VueProto[PROP_NAME];
    return bvConfig ? bvConfig.getConfigValue(key, defaultValue) : cloneDeep(defaultValue);
};
export const getComponentConfig = (key, propKey = null, defaultValue = undefined) => {
    // Return the particular config value for key if specified,
    // otherwise we return the full config (or an empty object if not found)
    return propKey ? getConfigValue(`${key}.${propKey}`, defaultValue) : getConfigValue(key, {});
};

export const makePropConfigurable = (prop, key, componentKey) => ({
    ...cloneDeep(prop),
    default: function bvConfigurablePropDefault() {
        const value = getComponentConfig(componentKey, key, prop.default);
        return isFunction(value) ? value() : value;
    }
});
export const makePropsConfigurable = (props, componentKey) => {
    return keys(props).reduce(
        (result, key) => ({
            ...result,
            [key]: makePropConfigurable(props[key], key, componentKey)
        }),
        {}
    );
};
export const makeProp = (
    type = PROP_TYPE_ANY,
    value = undefined,
    requiredOrValidator = undefined,
    validator = undefined
) => {
    const required = requiredOrValidator === true;
    validator = required ? validator : requiredOrValidator;

    return {
        ...(type ? { type } : {}),
        ...(required
            ? { required }
            : isUndefined(value)
              ? {}
              : { default: isObject(value) ? () => value : value }),
        ...(isUndefined(validator) ? {} : { validator })
    };
};

export const hasNormalizedSlot = (names, $scopedSlots = {}, $slots = {}) => {
    // Ensure names is an array
    names = concat(names).filter(identity);
    // Returns true if the either a $scopedSlot or $slot exists with the specified name
    return names.some((name) => $scopedSlots[name] || $slots[name]);
};

/**
 * Returns VNodes for named slot either scoped or unscoped
 *
 * @param {String, Array} name or name[]
 * @param {String} scope
 * @param {Object} scopedSlots
 * @param {Object} slots
 * @returns {Array|undefined} VNodes
 */
export const normalizeSlot = (names, scope = {}, $scopedSlots = {}, $slots = {}) => {
    // Ensure names is an array
    names = concat(names).filter(identity);
    let slot;
    for (let i = 0; i < names.length && !slot; i++) {
        const name = names[i];
        slot = $scopedSlots[name] || $slots[name];
    }
    // Note: in Vue 2.6.x, all named slots are also scoped slots
    return isFunction(slot) ? slot(scope) : slot;
};

export const normalizeSlotMixin = extend({
    methods: {
        // Returns `true` if the either a `$scopedSlot` or `$slot` exists with the specified name
        // `name` can be a string name or an array of names
        hasNormalizedSlot(
            name = SLOT_NAME_DEFAULT,
            scopedSlots = this.$scopedSlots,
            slots = this.$slots
        ) {
            return hasNormalizedSlot(name, scopedSlots, slots);
        },
        // Returns an array of rendered VNodes if slot found, otherwise `undefined`
        // `name` can be a string name or an array of names
        normalizeSlot(
            name = SLOT_NAME_DEFAULT,
            scope = {},
            scopedSlots = this.$scopedSlots,
            slots = this.$slots
        ) {
            const vNodes = normalizeSlot(name, scope, scopedSlots, slots);
            return vNodes ? concat(vNodes) : vNodes;
        }
    }
});
