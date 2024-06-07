function merge<T extends object, I extends object>(objA: T, objB: I): T & I
{
    return Object.assign(objA, objB);
}