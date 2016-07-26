import {ui} from 'noml';

export class Container extends ui.Component<void, any> {

  constructor(...c) {
    super();
    this.name = "div";
    this.class('flex-down');
    this.id = "main";
    this.child(c);
  }

}

export function container(...c) {
  return new Container(c);
}
