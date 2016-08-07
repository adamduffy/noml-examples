import {ui} from 'noml';
import {Entry} from '../api';

export interface Logic {
  selectEntry(id: string);
  getSelectedEntry(): string;
}

export class EntryList extends ui.Component<Logic, void> {

  entries: Entry[];

  data(entries: Entry[]): this {
    this.entries = entries;
    return this;
  }

  getBody() {
    const {entries, logic} = this;
    const selectedId = logic.getSelectedEntry();
    const items = Array.from(entries, entry => ({
      id: entry.id,
      text: entry.message,
      selected: (entry.id === selectedId)
    }));
    return new ui.Listbox(items)
      .size(5)
      .onValueChanged(v => logic.selectEntry(v));
  }

}
