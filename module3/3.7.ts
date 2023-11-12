{
  //

  // static (memory change hoi na)

  class Counter {
    static count: number = 0;
    static inCrement() {
      return (Counter.count = Counter.count + 1);
    }
    static deCrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  //   const instance1 = new Counter();
  console.log(Counter.inCrement()); // 1 -> different memory

  //   const instance2 = new Counter();
  console.log(Counter.inCrement()); // 1 -> different memory

  //
}
