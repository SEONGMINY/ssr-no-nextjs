export const wrapPromise = <T>(promise: Promise<T>) => {
  let status: 'pending' | 'success' | 'error' = 'pending';
  let result: T | Error;

  const suspender = promise.then(
    (res) => {
      result = res;
      status = 'success';
    },
    (err) => {
      result = err;
      status = 'error';
    },
  );

  return {
    read(): T {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result as T;
      }
      throw new Error('Unexpected state');
    },
  };
};
