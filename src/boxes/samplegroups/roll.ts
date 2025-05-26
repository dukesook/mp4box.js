import { SampleGroupEntry } from '#/box';
import type { MultiBufferStream } from '#/buffer';

export class rollSampleGroupEntry extends SampleGroupEntry {
  roll_distance: number;

  parse(stream: MultiBufferStream) {
    this.roll_distance = stream.readInt16();
  }
}
