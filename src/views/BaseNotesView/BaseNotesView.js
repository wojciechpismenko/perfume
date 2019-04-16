import React                from 'react';

import CollapsibleContent   from '../../components/CollapsibleContent/CollapsibleContent';
import './BaseNotesView.scss';

const BaseNotesView = () => (
  <div className="BaseNotesView">
    <CollapsibleContent title={<h2>Nuta dolna (podstawy, bazy)</h2>}>
      <p>
        działa stabilizująco, wzmacniająco, pomaga w utrzymaniu energii zapachu. W jej skład wchodzą również utrwalacze, czyli substancje powodujące, że zapach dłużej utrzymuje się na skórze, a także komponenty dodające perfumom ciężkości. To najstarsza stosowana grupa zapachów, starożytni bowiem namaszczali swe ciała głównie ciężkimi, balsamiczno-żywicznymi aromatami. Są to olejki prawie nielotne, ciężkie, ziemiste, balsamiczne, głębokie, długotrwałe, które pojawiają się po 30-60 minutach i utrzymują się do 8 godzin. Mają słabo wyczuwalny zapach, ale decydują o trwałości perfum i czasie pozostawania ich zapachu na skórze.
      </p>
    </CollapsibleContent>

    <CollapsibleContent title="Główne zapachy:">
      <ul>
        <li>
          <strong>drewniane</strong> - sandał, cedr, wetiwer, paczula,
        </li>
        <li>
          <strong>ambrowe</strong> - absolut ambretowy, ambra,
        </li>
        <li>
          <strong>zwierzęce</strong> - piżmo, cywet, castoreum,
        </li>
        <li>
          <strong>skórzane, tytoniowe, mech dębowy</strong>,
        </li>
        <li>
          <strong>balsamiczno-kadzidłe</strong> - balsam Peru, benzoin, galbanum, mirra,
        </li>
        <li>
          <strong>aromatyczno-słodke</strong> - wanilia, koniak, kawa, kakao, herbata, miód, migdały, marcepan.
        </li>
      </ul>
    </CollapsibleContent>
  </div>
);

export default BaseNotesView;