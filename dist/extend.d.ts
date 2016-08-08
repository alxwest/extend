/**
 * Inherit one class (constructor function) from another by using prototype inheritance.
 * Based on <code>extend</code> method from YUI library.
 * <br>
 * Set the following static fields for child class:
 * <ul>
 * <li><code>superconstructor</code> - reference to parent class
 * <li><code>superclass</code> - reference to <code>prototype</code> of parent class
 * </ul>
 *
 * @param {Function} SubClass
 *      Child class that will inherit.
 * @param {Function} ParentClass
 *      Parent class.
 * @return {Function}
 *      Modified child class.
 */
export declare function extend(SubClass: Function, ParentClass: Function): Function;
/**
 * Test whether the specified class is inherited from another.
 *
 * @param {Function} subClass
 *      The class that should be tested.
 * @param {Function} parentClass
 *      The parent class.
 * @return {Boolean}
 *      <code>true</code>, if <code>subClass</code> is inherited from <code>parentClass</code>,
 *      otherwise <code>false</code>.
 * @author Denis Sikuler
 * @see suifw#extend
 */
export declare module extend {
      function isSubclass(subClass: Function, parentClass: Function): Boolean;
}
