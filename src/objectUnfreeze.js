/**
 * Make a shallow copy of the object maintaining the prototype.
 *
 * @param {Object} source Frozen object.
 * @returns {Object}
 */
export default (source) => {
    let property,
        target;

    target = {};

    for (property in source) {
        if (source.hasOwnProperty(property)) {
            target[property] = source[property];
        }
    }

    Object.setPrototypeOf(target, Object.getPrototypeOf(source));

    return target;
};
