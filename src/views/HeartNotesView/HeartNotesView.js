import React                from 'react';

import CollapsibleContent   from '../../components/CollapsibleContent/CollapsibleContent';
import './HeartNotesView.scss';

const HeartNotesView = () => (
  <div className="HeartNotesView">
    <CollapsibleContent title={<h2>Nuta środkowa (serca)</h2>}>
      <p>
        to środek zapachu, dominujący temat, który charakteryzuje perfumy i stopniowo łączy się z nutą bazy. Serce zapachu pojawia się, gdy woń perfum zmiesza się z zapachem skóry (zwykle upływa 10-20 minut zanim nuta średnia w pełni się rozwinie) i utrzymuje się na niej przeważnie przez godzinę, dwie, choć w najlepszych gatunkowo perfumach nuta serca powinna być rozpoznawalna jeszcze po co najmniej czterech godzinach. Stosowane są tu zapachy o średniej lotności.
      </p>
    </CollapsibleContent>

    <CollapsibleContent title="Główne zapachy:">
      <ul>
        <li>
          <b>kwiatowe</b> - róża, champaka, ylang, jaśmin, drzewo różane, geranium, tuberoza, gardenia, różowy, biały i niebieski lotos, neroli, lilie, bez, konwalia, fiołek, hiacynt, narcyz, lipa, magnolia, biała lilia imbirowa, palmaroza,
        </li>
        <li>
          <b>korzenne</b> - goździk, cynamon, imbir, kardamon, koper, hyzop, marchew,
        </li>
        <li>
          <b>zielone</b> - szałwia muszkatołowa, rozmaryn, cyprys, jałowiec, krwawnik.
        </li>
      </ul>
    </CollapsibleContent>
  </div>
);

export default HeartNotesView;