/**
 * Make a shallow copy of the object maintaining the prototype.
 */
export default (source: Object): Object => {
    const target = {};

    for (const property in source) {
        if (source.hasOwnProperty(property)) {
            target[property] = source[property];
        }
    }

    Object.setPrototypeOf(target, Object.getPrototypeOf(source));

    return target;
};
