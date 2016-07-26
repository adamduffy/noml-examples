import {ui} from 'noml';

export function tableRowHeader(...args): ui.Element {
  return ui.tr(Array.from(args, a => ui.th(a)));
}
export function tableRowData(...args): ui.Element {
  return ui.tr(Array.from(args, a => ui.td(a)));
}
