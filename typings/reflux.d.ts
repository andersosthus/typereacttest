declare module "reflux" {
  function createActions(actions: string[]);
  function createStore<T>(options: any): RefluxStore<T>;

  class RefluxStore<T> {
    data: T;
  }
}
