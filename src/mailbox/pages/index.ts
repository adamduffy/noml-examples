import {ui} from 'noml';
import {CssVar} from '../ui/cssvar';
import FullMailbox from '../ui/fullMailbox.ts';
import {container} from './container.ts';

export interface Style {
  $clickable?;
  '#main'?;
  '#main div'?;
}

export default class extends ui.Component<any, Style> {

  getDefaultStyle(): any {
    return {
      $clickable: {
        cursor: 'pointer',
        ':hover': {
          'text-decoration': 'underline'
        }
      },
      '#main': {
        display: 'flex',
        width: '100%',
      }
    };
  }

  getBody() {
    return container(new FullMailbox(this.logic));
  }

}
