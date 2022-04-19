import { Transform } from 'stream';

export class Filter extends Transform {

  constructor() {
    super({
      readableObjectMode: true,
      writableObjectMode: true
    })
  }

  _transform(chunk, encoding, next) {
    if (this.has(chunk.name)) {
      return next(null, chunk)
    }

    next()
  }

  has(value) {
    return !!value
  }
}
