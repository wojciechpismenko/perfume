import React                from 'react';

import CollapsibleContent   from '../../components/CollapsibleContent/CollapsibleContent';
import './HeadNotesView.scss';

const HeadNotesView = () => (
  <div className="HeadNotesView">
    <CollapsibleContent title={<h2>Nuta górna (głowy)</h2>}>
      <p>
        to tzw. góra zapachowa, czyli substancje bardzo lotne, które najszybciej odparowują i znikają. Jest to wizytówka perfum, która towarzyszy otwarciu flakonu, pierwszy zapach, jaki się czuje, gdy ulotni się już alkohol. To właśnie ona wpływa na pierwsze wrażenie, wywołuje w nas pamięć zapachu i jego wspomnienie. To nuta najbardziej świeża i lekka. Utrzymuje się na skórze od kilkunastu minut do blisko pół godziny.
      </p>
    </CollapsibleContent>

    <CollapsibleContent title="Główne zapachy:">
      <ul>
        <li>
          <strong>cytrusowe</strong> - cytryna, bergamotka, pomarańcza gorzka i słodka, limona, mandarynka, grejpfrut, petitgrain, cytrynowe drzewo herbaciane),
        </li>
        <li>
          <strong>aldehydowe</strong> - chemiczny, lekko tłusty zapach,
        </li>
        <li>
          <strong>owocowe-lekkie</strong> - melon, arbuz, ananas, kaktus,
        </li>
        <li>
          <strong>zielone</strong> - mięta, ogórek, melisa,
        </li>
        <li>
          <strong>ziołowe</strong> - lawenda, tymianek,
        </li>
        <li>
          <strong>korzenne</strong> - czarny i zielony pieprz,
        </li>
        <li>
          <strong>leśne z drzew iglastych</strong> - jodła.
        </li>
      </ul>
    </CollapsibleContent>
  </div>
);

export default HeadNotesView;
