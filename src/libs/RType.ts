export interface RType<T, E> {
  /**
   * r is Result
   */
  r?: T;
  /**
   * r is Error
   */
  e?: E;
  /**
   * r is Error Level
   */
  l?: number;
}
/**
 * @param r -is result
 *  @param e - is error
 *  @param l - is error level
 *
 * if l is lower then 10 means it can be avoided
 * R is a generic type that wraps the result of an async function.
 * It can either contain a result or an error.
 * If it contains an error, it will also contain an errorLevel.
 * The errorLevel is a number that indicates the severity of the error.
 */
function R<T, E>({ r, l = 100, e }: RType<T, E>): RType<T, E> {
  if (e) {
    if (l > 10) {
      console.log("Fatal Error >> ", e.toString());
    }
    return {
      r: undefined,
      e: e,
      l,
    };
  }
  return {
    r,
    l,
    e: undefined,
  };
}

export default R;
/**
 * interface of RType<T, E>
 * use it on return type declaration
 */
export const RType = typeof R;
