export const sleepWithCallback = (timeout: number, callback: unknown) =>
  new Promise((res) => {
    setTimeout(() => {
      res(callback);
    }, timeout);
  });

export const sleep = (timeInMs: number) =>
  new Promise((resolve) => setTimeout(resolve, timeInMs));
