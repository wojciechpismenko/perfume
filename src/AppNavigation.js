import React        from 'react';
import { BrowserRouter, Route, Switch }
                    from 'react-router-dom';

import Root         from './views/Root/Root';
import HeadNotes    from './views/HeadNotesView/HeadNotesView';
import HeartNotes   from './views/HeartNotesView/HeartNotesView';
import BaseNotes    from './views/BaseNotesView/BaseNotesView';

import AppContext   from './AppContext';

export default class AppNavigation extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Root} />
          <Route path="/headnotes" component={HeadNotes} />
          <Route path="/heartnotes" component={HeartNotes} />
          <Route path="/basenotes" component={BaseNotes} />
        </Switch>
      </BrowserRouter>
    );
  }
};