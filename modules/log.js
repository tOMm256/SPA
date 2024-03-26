export class Log {
  constructor() {
  }

  countMessage(counter) {
    return counter ? `We have found ${counter} users` : `Nothing is found`
  }
}