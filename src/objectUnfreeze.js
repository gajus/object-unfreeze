/**
 * Make a shallow copy of the object maintaining the prototype.
 */
export default (source: Object): Object => {
    let target;

    if (source.constructor === Array) {
        target = source.map((element) => {
            return element;
        });
    } else {
        target = {};
        for (const property in source) {
            if (source.hasOwnProperty(property)) {
                target[property] = source[property];
            }
        }
    }

    Object.setPrototypeOf(target, Object.getPrototypeOf(source));

    return target;
};
