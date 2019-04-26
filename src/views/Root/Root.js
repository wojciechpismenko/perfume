import React                from 'react';

import CollapsibleContent   from '../../components/CollapsibleContent/CollapsibleContent';
import './Root.scss';

export default class Root extends React.Component {
  render() {
    return (
      <div className="Root">
        <CollapsibleContent title={<h2>Czym są perfumy</h2>}>
          <p>
            Nazwa <i>perfumy</i> wywodzi się od łacińskich słów <i>per fumum</i>, co oznacza "przez dym" i odnosi się do starożytnych obrzędów religijnych, w czasie których palono aromatyczne żywice i drewno w celu złożenia hołdu bogom i pozyskania ich przychylności. W późniejszym okresie Francuzi nazwali perfumami przyjemny zapach, który płynął z palących się kadzideł.
          </p>
          <p>
            Perfumy w znaczeniu współczesnym to alkoholowo - wodne roztwory mieszanki naturalnych i syntetycznych różnych substancji zapachowych, w czasach starożytnych nie istniały. Czysty alkohol zaczęli dopiero w średniowieczu produkować Arabowie. Cywilizacje starożytne ceniły i stosowały wonności oraz pachnidła w postaci pomad uzyskanych z mieszaniny tłuszczów i wonnych roślin. Posiadanie i używanie pachnideł było oznaką bogactwa i luksusu, a ich posiadacze cieszyli się ogromnym szacunkiem.
          </p>
        </CollapsibleContent>

        <CollapsibleContent title="Historia perfum alkoholowych">
          <p>
            Pierwszym znanym historii pachnidłem na bazie alkoholu była <i>Woda Królowej Węgier</i> (Larendogra, fran. <i>L'eau de la reine d'Hongrie</i>, łac. <i>Aqua Reginae Hungaricae</i>) sporządzona w 1367 roku i traktowana obecnie jako pierwowzór wszystkich perfum alkoholowych. W najbardziej znanej formie swoją popularność <i>Woda Królowej Węgier</i> zawdzięcza Polce, Elżbiecie Łokietkównej, żonie Karola Roberta Andegaweńskiego - króla Węgier. Zgodnie z legendą recepturę podarował królowej pustelnik, który przypisywał mieszance magiczne moce. Równie prawdopodobne jest, że było to dzieło nadwornego alchemika lub alchemików, którzy stanowili nieodłączny element średniowiecznych dworów. W rzeczywistości była to nalewka spirytusowa sporządzona z trzech części świeżego ziela rozmarynu lekarskiego i jednej części ziela lawendy lekarskiej. Spirytus sprowadzano aż z Konstantynopola. Tradycja utrzymuje, że głównie dzięki cudownym właściwościom wyciągu, królowej udało się mimo sędziwego wieku zachować zdrowie i urodę.
          </p>
          <p>
            Całkowicie nowym wynalazkiem, prawdziwie rewolucyjnym dla XVIII wieku oraz wyznaczającym nowe trendy w europejskiej perfumerii była Woda Kolońska. Stworzył ją włoski perfumiarz Jean Maria Farina, który osiadł w Kolonii. Francuzi nadali jej nazwę <i>Eau de Cologne</i> (<i>cologne</i> jest francuską nazwą niemieckiego miasta Köln) i szybko stała się szczególnie ulubiona przez jedną z kochanek Luisa XV - Comtesse du Barry. Odświeżająca mieszanka rozmarynu, kwiatu pomarańczy, bergamotki i cytryny miała również właściwości lecznicze i była używana na wiele sposobów: rozcieńczona do kąpieli, mieszana z winem, jedzona na kostkach cukru, do płukania ust, jako lewatywa i składnik gorących okładów, bezpośrednio wstrzykiwana, itd. Była więc pachnidłem i lekiem, a jej terapeutyczne właściwości opisywano w wielu dziełach medycznych i podręcznikach. Dziś tradycyjny zapach znany jako <i>Eau de Cologne</i> uznawany jest za wzór wód dla mężczyzn. Sprzedaje się go pod nazwą <i>Echte Kolnisch Wasser 4711</i> (<i>Prawdziwa woda kolońska 4711</i>) - najstarszy i najdłużej nieprzerwanie produkowany zapach na świecie.
          </p>
        </CollapsibleContent>

        <CollapsibleContent title="Rodzaje perfum alkoholowych">
          <ul>
            <li>
              <b>perfumy</b> <i>Parfum</i> - spirytusowe roztwory substancji zapachowych.Mogą zwierać 20 do 40% koncentratu zapachowego rozpuszczonego w 90-96% alkoholu etylowego 95% (spirytus). Jest to najsilniejszy wyrób perfumeryjny, stosowany wieczorową porą;
            </li>
            <li>
              <b>wody perfumowane</b> <i>Eau de parfum</i> - 8-16% koncentratu zapachowego rozpuszczonego w 80-90% alkoholu etylowego 95% (spirytus). Zapach wody perfumowanej utrzymuje się od 4 do 6 godzin, jest stosowana głównie na dzień;
            </li>
            <li>
              <b>wody toaletowe</b> <i>Eau de toilette</i> - 4-8% koncentratu zapachowego rozpuszczonego w 60-85% alkoholu etylowego 95% (spirytus). Wody toaletowe męskie zawierają mniejsze stężenie, ok. 5% zapachu;
            </li>
            <li>
              <b>wody kolońskie</b> <i>Eau de cologne</i> - 3-5% koncentratu zapachowego rozpuszczonego w 70-80% alkoholu etylowego 95% (spirytus). Są to głównie kosmetyki męskie charakteryzujące się najsłabszym zapachem i najmniejszą jego trwałością.Są to zazwyczaj wodno - alkoholowe roztwory olejków cytrusowych o prostym, soczystym i świeżym zapachu, przeznaczone do odświeżania skóry;
            </li>
            <li>
              <b>wody odświeżające</b> <i>Eau fraiche</i> - 1-3% koncentratu zapachowego rozpuszczonego w w 70-80% alkoholu etylowego 95% (spirytus). Są to niezwykle delikatnie zaperfumowane roztwory wodno - alkoholowe, stosowane w krajach o ciepłym klimacie do spryskiwania ciała po kąpieli.Do kategorii wód odświeżających należą popularne tzw.aromatyczne mgiełki do ciała(ang.Body mist);
            </li>
            <li>
              <b>wody kwiatowe</b> - 2-5% koncentratu zapachowego rozpuszczonego w 70-80% alkoholu etylowego 95% (spirytus).
            </li>
          </ul>
        </CollapsibleContent>

        <CollapsibleContent title="Historia perfum bezalkoholowych">
          <p>
            Perfumy bezalkoholowe w postaci pomad, w których nośnikiem zapachu były tłuszcze są najstarszą formą pachnideł. Pachnącą pomadę przygotowywano metodą "enefleurage", która polegała na ekstrakcji wonnych roślin przy pomocy tłuszczu, najczęściej smalcu.Kwiaty układano na cienkich warstwach na tłuszczu, co pewien czas wymieniając na świeże. Tłuszcz szybko i skutecznie absorbował substancje zapachowe z surowca i w ten sposób powstała pachnąca pomada czyli tłuszcz nasycony olejkami, którego używano tak, jak dziś używane są perfumy. Były produkowane z pojedynczych roślin lub mieszanin.Konsystencja produktu zależna była od użytego tłuszczu, ponieważ obok tłuszczów stałych do ekstrakcji pachnących roślin stosowano również płynne oleje roślinne (olej mieszano ze sproszkowanymi kwiatami i aromatycznymi ziołami), uzyskując "wonne olejki", które stosowano do namaszczania i perfumowania ciała.
          </p>
          <p>
            W starożytnym Egipcie, w którym perfumeria odgrywała ogromną rolę, stosowano pachnące pomady w postaci tłuszczowych stożków, które Egipskie damy naklejały na noszone wówczas peruki. Stożki topiły się w temperaturze ciała, spływając po włosach i wydzielając piękną woń. Mieszkańcy Krety natomiast namaszczali ciało wonnościami, w których nośnikiem były olej z oliwek oraz migdałów.
          </p>
          <p>
            Babilonia z kolei rozwinęła sztukę perfumerii, opierając się głównie na użyciu wyciągów żywicznych ze szlachetnych drzew i krzewów, np.wyciąg oleisty z kadzidła, drzewa sandałowego oraz mirry. Technika używana przez alchemików z Babilonii to maceracja, która polegała na dokładnym potłuczeniu, zmiażdżeniu i zmieleniu żywić, zmieszaniu z olejami roślinnymi i zostawieniu tej mikstury na około 3 tygodnie. Ciepło potęgowało właściwości mikstury dając jej niezwykłą siłę regenerującą oraz odmładzającą, później następowała dokładna filtracja, czyli oddzielenie żywic od olejku.
          </p>
          <p>
            Z Indii, które już w czasach starożytnych stały się potęgą w dostawie wonności, pochodzi technika otrzymywania olejków eterycznych przy pomocy destylacji z parą wodna. To stamtąd, najprawdopodobniej, technologia destylacji z wodą, za pośrednictwem Arabów, trafiła na Bliski Wschód i do Europy. Kontakty z kulturą arabską, wyprawy krzyżowe i tradycje olejkarskie południa Europy przyczyniły się do rozkwitu produkcji olejków eterycznych i pachnideł olejowych w średniowieczu. Ten rodzaj bezalkoholowych perfum jest obecnie szczególnie popularny w krajach Islamu oraz w Indiach.
          </p>
          <p>
            We współczesnym przemyśle perfumeryjnym w bezalkoholowych wyrobach perfumeryjnych alkohol zastępuje się innymi rozpuszczalnikami kosmetycznymi (glikol dwupropylenowy, mirystynian izopropylu), albo sporządza się płynne emulsje bezalkoholowe w typie wód odświeżających, które są bardzo popularne na lato i w tropikach. Stosowane są również perfumy w formie kremów o różnej gęstości, czasami przypominające starożytne pomady oraz perfumy w formie sztyftów na bazie wosków.
          </p>
        </CollapsibleContent>

        <CollapsibleContent title="Rodzaje perfum bezalkoholowych">
          <ul>
            <li>
              <b>perfumy ciekłe bezalkoholowe</b> - 3-25% koncentratu zapachowego rozpuszczonego w takich nośnikach jak: glikol dwupropylenowy, mirystynian izopropylu, oleje roślinne lub mineralne;
            </li>
            <li>
              <b>perfumy w kremie</b> - 6-12% koncentratu zapachowego w emulsji kremowej typu OW lub rzadziej WO;
            </li>
            <li>
              <b>perfumy w sztyfcie</b> - 5-20% koncentratu zapachowego w woskach, bazach typu kredek do warg;
            </li>
            <li>
              <b>aerozole bezalkoholowe</b> - 5-25% koncentratu zapachowego w mieszance nośników propan - butan, dwutlenek węgla, powietrze i rozpuszczalniki bezalkoholowe;
            </li>
            <li>
              <b>żele i emulsje odświeżające płynne lub półpłynne</b> - 2-8% koncentratu zapachowego w bazach żelowych i emulsjach typu OW lub rzadziej WO;
            </li>
            <li>
              <b>pudry i zasypki perfumowane</b> - 2-8% koncentratu zapachowego w talku i innych bazach pudrowych
            </li>
          </ul>
        </CollapsibleContent>

        <CollapsibleContent title="Zasady tworzenia kompozycji zapachowych">
          <p>
            Kompozycja zapachowa jest mieszaniną naturalnych (pochodzenia roślinnego lub zwierzęcego) lub syntetycznych substancji zapachowych przeznaczoną do nadawania odpowiedniego zapachu różnym wyrobom i przedmiotom, a także otoczeniu człowieka. Tworzenie kompozycji zapachowych jest sztuką łączącą w sobie wiele dziedzin. Pachnidła są komponowane niczym symfonie lub piosenki i można w nich dostrzec nuty i akordy.
          </p>
          <p>
            Nuta zapachowa to zapach pojedynczego składnika kompozycji zapachowej o charakterystycznym, dającym się nazwać zapachu, np. aromat róży, cytryny, cedru itd. Nuta to także podstawowy element kompozycji zapachowej (nuta dolna, serca i górna). Natomiast mieszanina dwu lub więcej substancji zapachowych tworzących wspólną charakterystyczną nutę jest nazywana akordem, np. akord kwiatowy, korzenny, zielony. Kilka połączonych akordów tworzy kompozycję zapachową, czyli to czym pachnie dane pachnidło.
          </p>
          <p>
            Koncepcja nut zapachowych opiera się na założeniu, że pewne substancje wchodzące w skład kompozycji perfum różnią się trwałością, czyli szybkością odparowywania. Dzięki temu zapach ma wiele niuansów, nie jest stały i niezmienny. To twór, który rozwija się w czasie niczym kompozycja muzyczna. Zaraz po zaaplikowaniu na skórę perfumy osiągają zapachowe apogeum w postaci nuty wysokiej, następnie łagodnieją, gdy tylko zmysłowe doznanie uzupełnione zostaje nutą średnią, aż ukazują swoje prawdziwe oblicze, które utrzymuje się przez wiele godzin.
          </p>
          <p>
            Większość współczesnych perfum komponuje się według trzynutowego układu. Struktura ta określa etap, na którym poszczególne składniki kompozycji stają się wyraźnie wyczuwalne w miarę rozwijania się zapachu, a następnie zanikają wskutek utleniania. Najpierw wyczuwamy nutę górną, nazywaną też nutą głowy, później środkową, tzw. nutę serca, a na końcu dolną, zwaną nutą bazy lub głębi. Nutę wysoką tworzą świeże, cytrusowe wonie, lotne, zielone nuty, aldehydy i estry owocowe. Bukiet nuty średniej składa się z kilku akordów kwiatowych. Baza to drzewne zapachy paczuli i mchu oraz balsamiczne, zwierzęce nuty takie jak ambra i piżmo.
          </p>
          <p>
            Utrwalacze łączą składniki tworzące poszczególne nuty w jedną kompozycję. Perfumy nie powinny rozwarstwiać się na trzy fazy. Jeśli są prawidłowo skomponowane to zmiany, które zachodzą w procesie ulatniania są tak niezauważalne jak ruchy wskazówek zegara. Źle opracowane po prostu 'rozpadają się' na poszczególne fazy.
          </p>
        </CollapsibleContent>
      </div>
    );
  }
};