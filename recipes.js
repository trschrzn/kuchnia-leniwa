const recipes = [
    {
      id: 1,
      title: "Babka waniliowo-kakaowa",
      description: [`Oddzielić żółtka od białek. 
       Mąkę przesiać, wymieszać z budyniem w proszku, mąką ziemniaczaną i proszkiem do pieczenia. 
       Masło roztopić.`,
       `Ubić białka na sztywną pianę. Dalej ubijając dodać cukier. Kolejno dodać po jednym żółtku. Do masy jajecznej dodać mąkę i roztopione masło. Delikatnie wymieszać łyżką drewnianą (lub mikserem na niskich obrotach).` ,
       `Formę keksową (prostokąt o długości 30cm) wysmarować masłem i posypać bułką tartą (można też wyłożyć papierem do pieczenia). Wylać do niej 2/3 ciasta. Do pozostałej części dodać kakao, wymieszać i wylać na jasne ciasto.` ,
       `Piec z nagrzanym piekarniku 45 minut w temperaturze 180&#176;C, do suchego patyczka. Ciasto pozostawić w formie do lekkiego ostygnięcia.` ,
       `Po ostudzeniu ciasto można posypać cukrem pudrem, polać lukrem bądź roztopioną czekoladą!`],
      ingCategory: ["mąka pszenna", "cukier", "jajka", "budyń waniliowy", "mąka ziemniaczana", "proszek do pieczenia", "masło", "kakao"],
      category: "ciasta",
      ingredients: [ '1,5 szklanki mąki pszennej', 
      '1 szklanka cukru',
      '6 jaj', 
      '1 budyń waniliowy bez cukru', 
      '2 łyżki mąki ziemniaczanej', 
      '1 łyżeczka proszku do pieczenia', 
      '200g masła', 
      '1 łyżka kakao'],
      image: ["img/Dania/babka-laciata.jpg"],
      diet: "wegetariańska",
      makeTime: 30,
      bakeTime: 45,
      temp: 180,
      portions: 7,
      fav: true,
      occasion: "wielkanoc",
    },
    {
      id: 2,
      title: "Bigos z cebuli i kabaczka",
      description: [`Cebule obrać, pokroić w krążki. Kabaczek umyć, obrać, usunąć pestki. Papryki umyć, przepołowić. oczyścić z gniazd nasiennych Kabaczek i papryki pokroić w kostkę.`,
      `W rondlu o grubym dnie rozgrzać oliwę, zeszklić na niej cebulę, dodać kabaczek oraz paprykę. Chwilę smażyć mieszając.`,
      `Zmniejszyć ogień, posolić i popieprzyć, wlać szklanki wody, dusić pod przykryciem 40-50 min na małym ogniu. mieszając od czasu do czasu.`,
      `Dodać przecier pomidorowy. majeranek i cząber, wymieszać dusić jeszcze kilka minut Bigos podawać z pieczywem.`],
      ingCategory: ["cebula", "oliwa", "kabaczek", "sól", "pieprz", "przecier pomidorowy", "woda", "majeranek", "cząber"],
      category: "obiad",
      ingredients:  ['1 kg cebuli' ,'1 młody kabaczek','2 czerwone papryki','szklanki przecieru lub soku pomidorowego' ,'łyżka majeranku','1 łyżeczka cząbru' ,'sól', 'czarny pieprz', 'oliwa do smażenia'],
      bakeTime: 50,
      portions: 5,
      fav: false,
    },
    {
      id: 3,
      title: "Koktajl dyniowo-marchewkowy",
      description: ["Zmiksuj wszystkie składniki."],
      ingCategory: ["siemię lniane", "dynia","jabłko","marchew"],
      category: "koktajle i smoothie",
      ingredients: ['siemię lniane(mielone) 2 łyżeczki, 10 g','dynia ⅛ sztuki, 100 g','jabłko	1 sztuka, 150 g','marchew	1 sztuka, 50 g'],
      diet: "wegetariańska",
      makeTime: 10,
      portions: 1,
    },
    {
      id: 4,
      title: "Koktajl bomba antyoksydantów",
      description: ["Zmiksuj wszystkie składniki."],
      ingCategory: ['jagody','otręby gryczane','chia','porzeczki','jogurt naturalny'],
      category: "koktajle i smoothie",
      ingredients: ['jagody		1 szklanka, 100 g','otręby gryczane		1 łyżeczka, 5 g','chia, nasiona 		1 łyżeczka, 5 g','porzeczki czarne		2 garście, 100 g','jogurt naturalny		6 łyżek, 100 g'],
      diet: "wegetariańska",
      makeTime: 10,
      portions: 1,
    },
    {
      id: 5,
      title: "Kokosanka z orzechami  i mango",
      description: ['Podgrzej mleko z wiórkami, posiekanymi orzechami, cynamonem i syropem klonowym. Włóż do miseczki. Dodaj pokrojony owoc.'],
      ingCategory: ['cynamon','wiórki kokosowe','syrop klonowy','orzechy','mango','mleko kokosowe','pistacje'],
      category: "śniadanie",
      ingredients: ['cynamon 	1 łyżeczka, 5 g','wiórki kokosowe 	3 łyżki, 18 g','syrop klonowy 	1 łyżka, 10 g','orzechy nerkowca 	1 łyżka, 15 g','mango 	½ sztuki, 140 g','mleko kokosowe 	½ szklanki, 125 g','pistacje 	1 łyżka, 9 g'],
      diet: "wegetariańska",
      makeTime: 15,
      portions: 1,
    },
    {
      id: 6,
      title: "Koktajl owsiany",
      description: ['Zmiksować wszystko razem.'],
      ingCategory: ['mleko','wiórki kokosowe','truskawki','płatki owsiane'],
      category: "koktajle i smoothie",
      ingredients: ['mleko 2% 	½ szklanki, 125 ml','wiórki kokosowe 	1 łyżka, 6 g','truskawki (mrożone/świeże) 	1 i ½ garści, 135 g','płatki owsiane 	1 łyżka, 10 g'],
      diet: "wegetariańska",
      makeTime: 10,
      portions: 1,
    },
    {
      id: 7,
      title: "Karotenowy sok",
      description: ['Wyciśnij sok w sokowirówce/wyciskarce.'],
      ingCategory: ['marchew','pomarańcza','ananas'],
      category: "koktajle i smoothie",
      ingredients: ['marchew 	2 sztuki, 90 g','pomarańcza 	1 sztuka, 200g','ananas 	1 plaster, 80 g'],
      diet: "wegetariańska",
      makeTime: 10,
      portions: 1,
    },
    {
      id: 8,
      title: "Lody bananowe z awokado",
      description: ['Awokado obrać, wyciągnąć pestkę i zmiksować z bananem i syropem. Skropić sokiem z cytryny i wymieszać. Całość przelać do foremek, wbić patyczki i zamrozić. Po minimum 4 godzinach lody można wyjąć i zamoczyć w rozpuszczonej czekoladzie.'],
      ingCategory: ['orzechy','awokado','czekolada gorzka','banan','syrop klonowy','cytryna'],
      category: "desery i lody",
      ingredients: ['orzechy włoskie 	⅓ łyżki, 5 g','awokado 	⅕ sztuki, 30 g','czekolada gorzka 	1 kostka, 6 g','banan 		½ sztuki, 60 g','syrop klonowy 	½ łyżki, 5 g','cytryna, sok 		1 łyżka, 5 ml'],
      diet: "wegetariańska",
      makeTime: 15,
      image: ['img/Dania/salatka-awokado.jpg'],
    },
    {
      id: 9,
      title: "Żółte orzeźwiające smoothie",
      description: ['Wszystko obrać, zblendować. Ewentualnie dodać wody. '],
      ingCategory: ['wiórki kokosowe','pomarańcza','jabłko','cytryna','banan'],
      category: "koktajle i smoothie",
      ingredients: ['wiórki kokosowe 	½ łyżki, 3 g','pomarańcza 		½ sztuki, 100 g','jabłko 			½ sztuki, 75 g','cytryna 		½ sztuki, 40 g','banan 			½ sztuki, 60 g'],
      diet: "wegetariańska",
      makeTime: 15,
      portions: 1,
    },
    {
      id: 10,
      title: "Beta - karotenowe smoothie",
      description: ['Składniki zblendować. Najlepiej spożyć od razu po przygotowaniu. '],
      ingCategory: ['truskawki','szpinak','marchew','pomarańcza','kefir'],
      category: "koktajle i smoothie",
      ingredients: ['truskawki (mrożone/świeże)	1 i ½ garści, 100 g','szpinak		1 garść, 25 g','sok marchwiowy	¼ szklanki, 100 ml','pomarańcza 		½ sztuki, 100 g','kefir 			5 łyżek, 50 ml'],
      diet: "wegetariańska",
      makeTime: 15,
      portions: 1,
    },
    {
      id: 11,
      title: "Czekoladowy koktajl z daktylami",
      description: ['rada: daktyle można wcześniej namoczyć w wodzie, by się lepiej blendowały.'],
      ingCategory: ['mleko','daktyle','kakao','wiórki kokosowe'],
      category: "koktajle i smoothie",
      ingredients: ['mleko 2%		½ szklanki, 125 ml','daktyle drylowane	2 sztuki, 10 g','kakao 16%		1 łyżeczka, 5 g','wiórki kokosowe	2 łyżki, 12 g'],
      diet: "wegetariańska",
      makeTime: 10,
      portions: 1,
    },
    {
      id: 12,
      title: "Smoothie z burakiem",
      description: ['Obranego buraka pokroić na drobne kawałki. Zmiksować składniki.'],
      ingCategory: ['imbir','woda','banan','buraki'],
      category: "koktajle i smoothie",
      ingredients: ['imbir, korzeń		1 plaster, 5 g','woda mineralna niegazowana	½ szklanki, 125 ml','banan		1,5 sztuki, 180 g','burak		½ sztuki, 50 g'],
      diet: "wegańska",
      makeTime: 10,
      portions: 1,
    },
    {
      id: 13,
      title: "Bananowy ryż na mleku z mango",
      description: ['Do mleka dolać wody, tak by w sumie objętość płynu była dwa razy większa niż ryżu. Ryż zalać płynem, dodać pokrojonego w kostkę banana i gotować do miękkości. Połówkę mango podzielić na dwie części, jedną część zmiksować, drugą pokroić w kostkę. Ugotowany ryż przełożyć do miski, polać musem i posypać kawałkami owoców.'],
      ingCategory: ['mango','mleko','ryż','banan'],
      category: "śniadanie",
      ingredients: ['mango		½ sztuki','banan		½ sztuki','ryż basmati	3 łyżki, 45 g','mleko 2%	½ szklanki, 125 ml'],
      diet: "wegetariańska",
      makeTime: 30,
      portions: 1,
    },
    {
      id: 14,
      title: "Sałatka z figami, gruszką i serem feta",
      description: ['Pokroić i wymieszać składniki, według uznania.'],
      ingCategory: ['szpinak','gruszka','ser feta','orzechy','figi','cebula czerwona'],
      category: "sałatki",
      ingredients: ['szpinak		2 garście','gruszka		½ sztuki','ser feta		1 porcja, 40 g','orzechy włoskie	3 sztuki, 15 g','figi świeże		2 sztuki','cebula czerwona	½ sztuki'],
      diet: "wegetariańska",
      makeTime: 15,
      portions: 2,
    },
    {
      id: 15,
      title: "Placuszki bananowo-kokosowe",
      description: ['Zmiksuj jajko z bananem, mlekiem i mąkami. Smaż na niewielkiej ilości tłuszczu.'],
      ingCategory: ['mąka kokosowa','mleko','mąka pszenna','banan','jajka','olej'],
      category: "obiad na słodko",
      ingredients: ['mąka kokosowa  	1,7 łyżki, 25 g','mleko 2% 	⅕ szklanki, 50 ml','mąka pszenna 	2 łyżki, 24 g','banan 		1 sztuka, 120 g','jaja 	1 sztuka, 50 g','olej rzepakowy 	1 łyżka, 10 ml'],
      diet: "wegetariańska",
      makeTime: 30,
      portions: 6,
    },
    {
      id: 16,
      title: "Makaron z pastą awokado",
      description: ['Dojrzałe awokado rozdrobnij widelcem, dodaj oliwę, dopraw bazylią i innymi przyprawami do smaku. Wymieszaj z ugotowanym makaronem. Posyp posiekaną pietruszką.'],
      ingCategory: ['makaron spaghetti','natka pietruszki','oliwa','bazylia','awokado'],
      category: "obiad",
      ingredients: ['makaron spaghetti 	1 garść, 70 g','pietruszka, natka 	2 łyżeczki, 12 g','oliwa z oliwek 		1 łyżka, 10 ml','bazylia 		4 listki, 4 g','awokado 		½ sztuki, 70 g'],
      diet: "wegetariańska",
      makeTime: 30,
      portions: 2,
    },
    {
      id: 17,
      title: "Zapiekanka owsiana z truskawkami",
      description: ['Płatki wymieszać z pokrojonymi truskawkami i jogurtem. Białko ubić na sztywną pianę. Delikatnie połączyć z płatkami i owocami. Na górę wylać miód. Zapiekać około 20 minut w temp. 180 stopni.'],
      ingCategory: ['jogurt naturalny','jajka','truskawki','płatki owsiane','miód'],
      category: "zapiekanki",
      ingredients: ['jogurt naturalny	6 łyżek, 120 g','białko jaja	1 sztuka','truskawki	1 garść, 70 g','płatki owsiane		5 łyżek, 50 g','miód		1 łyżka, 25 g'],
      diet: "wegetariańska",
      bakeTime: 20,
      makeTime: 25,
      portions: 2,
      fav: true,
    },
    {
      id: 18,
      title: "Placki cukiniowe",
      description: ['Cukinię wraz ze skórką zetrzyj na drobnych oczkach. Po chwili odciśnij nadmiar soku. Dodaj posiekany por, rozmieszane jajko, wodę, oliwę oraz przyprawy. Dodaj mąkę, siemię lniane. Dokładnie wymieszaj. Jeśli będzie potrzeba - dolej wody. Smaż placuszki na złoty kolor na dobrze rozgrzanej patelni beztłuszczowej.'],
      ingCategory: ['jajka','cukinia','mąka','woda','pieprz','oliwa','siemię lniane','por'],
      category: "obiad na słodko",
      ingredients: ['jaja	1 sztuka, 56 g'
        ,'cukinia		⅓ sztuki, 100 g'
        ,'mąka		5 łyżek, 60 g'
        ,'woda		0,2 szklanki, 50 ml'
        ,'pieprz czarny		1 szczypta'
        ,'oliwa z oliwek		1 łyżka, 5 ml'
        ,'siemię lniane, mielone 	2 łyżeczki, 10 g'
        ,'por		0,14 sztuki, 20 g'],
      diet: "wegetariańska",
      makeTime: 30,
      portions: 5,
    },
    {
      id: 19,
      title: "Wegetariańskie leczo",
      description: ['Namocz ciecierzycę przez <b>ok. 24h.</b>',' Ugotować.','Posiekać cebulę, czosnek przecisnąć przez praskę i podsmażyć na oleju. Pokroić warzywa i dusić na patelni razem z pomidorami, czosnkiem i cebulą. Przyprawić według uznania.','Wyłożyć na talerz i posypać posiekaną pietruszką.'],
      ingCategory: ['ciecierzyca','olej','pomidory','cebula','papryka','cukinia','natka pietruszki','czosnek'],
      category: "obiad",
      ingredients: ['ciecierzyca		5 łyżek, 80 g'
        ,'olej rzepakowy	1,5 łyżki'
        ,'pomidory krojone	1 opakowanie, 400 g'
        ,'cebula			½ sztuki'
        ,'papryka czerwona	½ sztuki'
        ,'cukinia			½ sztuki'
        ,'natka pietruszki		2 łyżeczki'
        ,'czosnek		1 ząbek'],
      diet: "wegańska",
      makeTime: 60,
      portions: 6,
    },
    {
      id: 20,
      title: "Gołąbki bez mięsa",
      description: ['Sparzyć liście kapusty, by były miękkie i elastyczne.', 'Ugotować kaszę. Podsmażyć na oleju pokrojoną cebulę i por. Posiekać na drobno koperek i zetrzeć marchew na drobnych oczkach.', 'Do kaszy dodać koperek, marchew, cebulę, por, przyprawy oraz mąkę. Jeśli konsystencja będzie zbyt rzadka dodać więcej mąki.', 'Uformować 6 podłużnych pulpecików i zawinąć w liście. Brytfankę zalać przecierem i doprawić papryką.', 'Włożyć do naczynia gołąbki i przykryć. Piec ok. 80 minut w temp. 180 stopni.'],
      ingCategory: ['por','papryka','marchew','mąka','bazylia','cebula','kapusta włoska','kasza jaglana','koperek','olej','przecier pomidorowy'],
      category: "obiad",
      ingredients: ['por	½ sztuki'
        ,'papryka słodka 	2 szczypty'
        ,'marchew 		1 sztuka'
        ,'mąka 			2 łyżki'
        ,'bazylia			1 łyżeczka'
        ,'cebula			1 sztuka'
        ,'kapusta włoska	2 liście'
        ,'kasza jaglana		4 łyżki'
        ,'koperek		½ pęczka'
        ,'olej rzepakowy	1,5 łyżki'
        ,'przecier pomidorowy	1 opakowanie, 200 g'],
      diet: "wegetariańska",
      bakeTime: 80,
      makeTime: 55,
      portions: 6,
    },
    {
      id: 21,
      title: "Burgery z buraków z kaszą jaglaną",
      description: ['Pestki słonecznika i sezam uprażyć na suchej patelni. Zioła opłukać, posiekać. Buraki obrać, zetrzeć na tarce o dużych oczkach. Cebule obrać, jedną posiekać, drugą pokroić w talarki. Czosnek obrać, przecisnąć przez praskę. ','Połączyć buraki, kaszę jaglaną, czosnek, posiekaną cebulę, pestki słonecznika, sezam, bułkę tartą i zioła. Doprawić solą oraz pieprzem, wsypać mąkę. Masę wyrobić (jeśli jest za rzadka, dodać bułki tartej lub mąki).','Uformować kotleciki, ułożyć na wyścielonej papierem do pieczenia blasze. Piec 25 min w piekarniku rozgrzanym do temperatury 200 st. W połowie pieczenia odwrócić. '],
      ingCategory: ['buraki','kasza jaglana','cebula','czosnek','rozmaryn','tymianek','natka pietruszki','pestki słonecznika','sezam','bułka tarta','olej','sól','pieprz'],
      category: "obiad",
      ingredients: ['2-3 buraki ','1 i 1/2 szklanki ugotowanej kaszy jaglanej','2 cebule','4 ząbki czosnku ','gałązka rozmarynu ','2 gałązki tymianku','pęczek natki ','10 dag pestek słonecznika ','10 dag sezamu ','1/2 szklanki bułki tartej ','1/4 szklanki olej','3-4 łyżki mąki ','sól, pieprz'],
      diet: "wegetariańska",
      bakeTime: 25,
      makeTime: 45,
      portions: 5,
      fav: true,
      image: ['img/Dania/burger-wege.jpg'],
    },
    {
      id: 22,
      title: "Cannelloni ze szpinakiem",
      description: ['Makaron ugotować na półtwardo w osolonej wodzie z dodatkiem oliwy, zahartować, odcedzić wystudzić'
        ,'Szpinak rozmrozić podsmażyć na maśle Dodać zmiażdżony czosnek, wymieszać, zdjąć z ognia Połączyć z ricotta oraz parmezanem Doprawić solą, pieprzem i gałką muszkatołową. Do przestudzenia dodać rozmącone jajka oraz śmietanę, utrzeć na gładką masę'
        ,'Mąkę zasmażyć na roztopionym maśle, rozprowadzić chłodnym mlekiem, mieszając Dodać liście laurowe Podgrzewać, mieszając aż sos zgęstnieje. Doprawić solą. pieprzem i gałką muszkatołowa Zdjąć z ognia, usunąć liście laurowe.'
        ,'Cannelloni napelnic farszem ulozyc je w natłuszczonym naczyniu zaroodpornym, polać sosem. Piec ok. 50 min w piekarniku nagrzanym do temp. 180°C Przed podaniem zapiekankę udekorować listkami bazylii'
      ],
      ingCategory: ['cannelloni','szpinak','ser ricotta','parmezan','jajka','czosnek','śmietana','oliwa','sól','pieprz','gałka muszkatołowa','bazylia','masło','mąka pszenna','mleko','liście laurowe'],
      category: "obiad",
      ingredients: ['12 szt. cannelloni' ,'45 dag mrożonego szpinaku ','30 dag sera ricotta ','10 dag startego parmezanu ','2 jajka ','2 ząbki czosnku ','1 łyżka śmietany ','1 łyżka oliwy ','sól, czarny pieprz, gałka muszkatołowa' ,'listki bazylii do dekoracji ','masło do smażenia i wysmarowania naczynia','5 dag masła','5 dag mąki pszennej','2 szklanki mleka ','2 liście laurowe ','sól, biały pieprz, gałka muszkatołowa'],
      diet: "wegetariańska",
      bakeTime: 50,
      makeTime: 55,
      portions: 3,
      image: ['img/Dania/canneloni-szpinak.jpg'],
    },
    {
      id: 23,
      title: "Chłodnik marchewkowy",
      description: ['Marchewkę umyć, ugotować, obrać, pokroić w plasterki. Cebule obrać, pokroić w kostkę. Natkę pietruszki umyć, osuszyć, posiekać.','Warzywa zmiksować, dolewając stopniowo sok z pomarańczy oraz bulion. Zupę doprawić cynamonem, solą i pieprzem. Chłodnik podawać mocno schłodzony.'],
      ingCategory: ['wołowina','marchew','cebula','natka pietruszki','bulion drobiowy','pomarańcza','cynamon','sól','pieprz'],
      category: "zupy",
      ingredients: ['25 dag wołowiny' ,'50 dag marchewki ' ,'3 cebule ','1 pęczek natki pietruszki','3 szklanki bulionu drobiowego ','sok z 2 pomarańczy','½ łyżeczki cynamonu ','sól, biały pieprz'],
      diet: "mięsne",
      makeTime: 40,
      portions: 5,
    },
    {
      id: 24,
      title: "De volaille",
      description: ['Masło utrzeć z natka pietruszki powoli wlewając sok z cytryny Doprawić solą i pieprzem. uformować 4 walki długości kilku centymetrów mocno schłodzić w lodówce','Filety umyć osuszyć, rozbić na cienkie, szerokie płaty Mięso oprószyć solą i pieprzem. Na płaty nałożyć po 1 maślanym wałeczku Ciasno je zrolować podwijając do środka boki','Kotlety obtoczyć w mące, roztrzepanym jajku, a następnie w bułce tartej Równomiernie obsmażyć na rozgrzanym głębokim oleju na złoty kolor. Podawać prosto z patelni z frytkami I surówka',
      ],
      ingCategory: ['pierś z kurczaka','masło','jajka','mąka pszenna','bułka tarta','natka pietruszki','cytryna','sól','pieprz','olej'],
      category: "obiad",
      ingredients: ['4 filety z piersi kurczaka' ,'1/3 kostki miękkiego masła ','jajko' ,'4 łyżki mąki pszennej ','4 łyżki bułki tartej ','2 łyżki posiekanej natki pietruszki ','1 łyżka soku z cytryny ','sól, biały pieprz ','olej do smażenia'],
      diet: "mięsne",
      makeTime: 60,
      portions: 4,
      image: ['img/Dania/devolay.jpg'],
    },
    {
      id: 25,
      title: "Kalafior",
      description: ['Kalafior podzielić na różyczki, ugotować na półtwardo, w niewielkiej ilości osolonej wody. Ostudzić.','Kurkumę wymieszać z imbirem, utrzeć z łyżką oleju. Pastą posmarować kalafior, obsmażyć na 2 łyżkach oleju, kontrolując, aby się nie przypalił','Zamrożony szpinak wrzucić na patelnię, na dużym ogniu odparować nadmiar wody.','Czosnek obrać, przepuścić przez praskę, delikatnie obsmażyć na maśle, dodać mąkę, zasmażyć. Rozprowadzić jogurtem, dodać gorący szpinak, dokładnie wymieszać.','Na półmisku centralnie ułożyć kalafior, posypać posiekaną kolendrą, wokół ułożyć szpinak'],
      ingCategory: ['kalafior','sól','szpinak','kolendra','jogurt naturalny','mąka','czosnek','masło'],
      category: "sałatki",
      ingredients: ['kalafior','500 g mrożonego lub świeżego szpinaku w liściach ','sól, po 1/2 łyżeczki kurkumy i imbiru, olej','kilka gałązek świeżej kolendry','szklanka jogurtu naturalnego','łyżeczka mąki','3 ząbki czosnku','2 łyżki masła, sól'],
      diet: "wegetariańska",
      makeTime: 35,
      portions: 5,
      fav: true,
    },
    {
      id: 26,
      title: "Kluski drożdżowe",
      description: ['Drożdże rozetrzeć z cukrem, wymieszać z 2 łyżkami ciepłego mleka i 1 łyżką mąki, odstawić w ciepłe miejsce do wyrośnięcia.',

        'Pozostałą mąkę przesiać do miski. dodać szczyptę soli, połączyć z resztą podgrzanego mleka, jajkiem i rozczynem. Ciasto wyrabiać, až stanie się elastyczne.',
      
        'Wlać wystudzone stopione masło, wyrabiać jeszcze kilka minut. Ciasto przykryć ściereczką, odstawić w ciepłe miejsce do wyrośnięcia (powinno podwoić objętość).',
      
        'Uformować niewielkie kulki, pozostawić przykryte na 15-20 min, aby jeszcze trochę wyrosły. Przygotować garnek z wrzącą wodą obwiązany Lnianą ściereczką Kluski ułożyć na ściereczce, gotować na parze 15-20 min pod przykryciem.',
      ],
      ingCategory: ['mąka pszenna','mleko','jajka','drożdże','masło','cukier','sól'],
      category: "obiad",
      ingredients: ['3 szklanki mąki pszennej ','1 szklanka mleka ','2 jajka ','3 dag drożdży ','3 łyżki masła ','½ łyżeczki cukru','sól'],
      diet: "wegetariańska",
      makeTime: 60,
      portions: 5,
      fav: true,
    },
    {
      id:27 ,
      title: "Kluski leniwe",
      description: ['Żółtka utrzeć z masłem, dodać ser, mąkę i szczyptę soli. Wyrabiać do uzyskania gładkiej konsystencji. Ubić białka na sztywną pianę, połączyć z masą serową.','Z ciasta uformować wałek grubości ok. 2 cm, spłaszczyć go i pokroić ukośnie w kilkucentymetrowe kawałki.','Kluski gotować partiami w dużej ilości osolonej wody. Po wrzuceniu na wrzątek delikatnie zamieszać drewnianą łyżką. Gotować 1-2 min od wypłynięcia. Podawać polane stopionym masłem i oprószone cynamonem lub ze zrumienioną na maśle bułką tartą i cukrem.'],
      ingCategory: ['biały ser','mąka pszenna','jajka','masło','sól'],
      category: "obiad",
      ingredients: ['50 dag mielonego białego sera ','15 dag mąki pszennej ','3 jajka' ,'2 łyżki masła ','sól'],
      diet: "wegetariańska",
      makeTime: 35,
      portions: 5,
      image: ['img/Dania/kluski-leniwe.jpg'],
    },
    {
      id: 28,
      title: "Kluski twarogowe",
      description: ['Najlepiej wszystkie składniki zmiksować razem na gładką masę.','Na wrzącą, osoloną wodę kłaść łyżką masę serową (gdy łyżkę zamoczymy we wrzącej wodzie, ciasto nie będzie się lepić), po wypłynięciu na wierzch wyjmować na talerz. Ugotowane podawać z masłem lub sosami.'],
      ingCategory: ['twaróg','mąka','jajka','masło','sól'],
      category: "obiad",
      ingredients: ['25 dag tłustego twarogu','1 szklanka mąki','2 jaja','1 łyżka masła ','sól'],
      diet: "wegetariańska",
      makeTime: 30,
      image: ['img/Dania/kopytka-twarogowe.jpg'],
    },
    {
      id: 29,
      title: "Kopytka",
      description: ['Ziemniaki obrać, umyć, ugotować w osolonej wodzie. Wystudzić, przecisnąć przez praskę. Wymieszać z jajkiem, dodać mąkę i szczyptę soli. Zagnieść ciasto, podzielić je na porcje. Uformować wałeczki grubości ok. 3 cm, pokroić je w ukośne kawałki.','W garnku zagotować lekko osoloną wodę. Kluski wrzucać partiami na wrzątek, delikatnie zamieszać drewnianą łyżką. Po wypłynięciu gotować 1-2 min. Wyjąć łyżką cedzakową na półmisek'],
      ingCategory: ['ziemniaki','mąka pszenna','jajka','sól'],
      category: "obiad",
      ingredients: ['50 dag ziemniaków','1 szklanka mąki pszennej','1 jajko','sól'],
      diet: "wegetariańska",
      makeTime: 45,
      portions: 4,
      image: ['img/Dania/kopytka.jpg'],
    },
    {
      id: 30,
      title: "Kotlety mielone z kurczaka",
      description: ['Mięso umyć, osuszyć, zemleć. Dodać ubite na pianę białko, zmiażdżony czosnek, koperek, bazylię, sól i pieprz, wyrobić masę.','Uformować kotlety. Smażyć je na oleju z 2 stron, przełożyć do formy. Na każdym kotlecie umieścić kawałek masła, przykryć i wstawić na 15 min do piekarnika o temp. 200°C.'],
      ingCategory: ['udka kurczaka','jajka','czosnek','masło','koperek','bazylia','sól','pieprz','olej'],
      category: "obiad",
      ingredients: ['50 dag mięsa z udek kurczaka ','1 białko','1 ząbek czosnku ','1 łyżka masła','1 łyżka posiekanego koperku ','1 łyżka bazylii ','sól, biały pieprz ','olej do smażenia'],
      diet: "mięsne",
      bakeTime: 15,
      makeTime: 35,
      portions: 3,
    },
    {
      id: 31,
      title: "Kulki serowe z sosem malinowym",
      description: ['Przygotować sos. Maliny umyć, włożyć do rondelka, dodać cukier, sok z cytryny, wodę. Gotować, aż owoce będą się rozpadać. Ostudzić. Przetrzeć przez gęste sitko.','Ser zemleć lub zmiksować w blenderze. Połączyć z przesianą mąką, kaszą cukrem, żółtkiem, jajkiem i roztopionym masłem. Zagnieść ciasto (jeśli jest za rzadkie, dodać więcej mąki). Formować okrągłe kule. Wrzucać na lekko osoloną, wrzącą wodę. Gotować ok. 8 minut od wypłynięcia na powierzchnię. Wyjmować łyżką cedzakową. Polać sosem malinowym lub zrumienioną bułką tartą z roztopionym masłem, posypać cukrem.'],
      ingCategory: ['maliny','cukier','cytryna','biały ser','kasza manna','mąka pszenna','masło','jajka','cukier puder','sól'],
      category: "obiad na słodko",
      ingredients: ['400 g malin','2 łyżki cukru','łyżka soku z cytryny łyżka wody' ,'400 g białego sera','½ szklanki kaszy manny ','ok. szklanki mąki pszennej' ,'3 łyżki masła' ,'jajko ','żółtko','2 łyżki cukru pudru','sól'],
      diet: "wegetariańska",
      makeTime: 20,
    },
    {
      id: 32,
      title: "Parowańce z musem truskawkowym",
      description: ['Przygotować mus. Truskawki odszypułkować, umyć. Zmiksować z cukrem.', 'Drożdże rozetrzeć z cukrem, wymieszać z 2 łyżkami ciepłego mleka i 2 łyżkami mąki. Przykryć, odstawić w ciepłe miejsce do wyrośnięcia.', 'Gdy drożdże wyrosną, połączyć je z resztą przesianej mąki, żółtkami, mlekiem i szczyptą soli. Zagnieść gładkie ciasto (można podsypać mąką, gdy jest zbyt lepkie). Dodać roztopione masło lub olej, ponownie wyrobić, przykryć ściereczką i odstawić do wyrośnięcia, aż ciasto podwoi swoją objętość.', 'Garnek z wrzącą wodą obwiązać ściśle Lnianą ściereczką lub gazą. Z ciasta lepić niewielkie kulki i kłaść je luźno na gazę. Przykryć miską i gotować na parze ok. 20 minut.',' Można oczywiście kupić gotowe parowańce i polać świeżo przygotowanym musem truskawkowym.'],
      ingCategory: ['truskawki','cukier puder','mąka','drożdże','mleko','masło','olej','jajka','cukier','sól'],
      category: "obiad na słodko",
      ingredients: ['½ kg dojrzałych truskawek' 
        ,'2-3 łyżki cukru pudru (lub więcej, jeśli truskawki są kwaśne)','300-400 g mąki' ,'20 g drożdży ','szklanka mleka','3 łyżeczki masła lub oleju' ,'2 żółtka','½ łyżeczki cukru' ,'sól'],
      diet: "wegetariańska",
      makeTime: 60,
      portions: 4,
      fav: true,
    },
    {
      id: 33,
      title: "Pierogi z jagodam",
      description: ['Jagody przebrać, opłukać, osuszyć. Mąkę przesiać, dodać żółtko, olej i stopniowo dolewać wody, tak aby wyrobić gładkie ciasto.','Przykryć ściereczką i odstawić na kilka minut.',' Ciasto rozwałkować na stolnicy posypanej mąką. Wykroić kółka, wypełnić je jagodami i odrobiną cukru, a następnie dokładnie zlepić brzegi. Wrzucać partiami na osolony wrzątek i gotować ok. 3 minut od wypłynięcia. ','Podawać polane roztopionym masłem lub śmietaną i posypane cukrem.'],
      ingCategory: ['jagody','śmietana','mąka','olej','jajka','sól','woda'],
      category: "obiad na słodko",
      ingredients: ['ok. ½ kg jagód cukier ','śmietana do polania','2 szklanki mąki','2 łyżki oleju ','2 żółtka ','szczypta soli','przegotowana, gorąca woda'],
      diet: "wegetariańska",
      makeTime: 40,
      image: ['img/Dania/pierogi-jagodowe.jpg'],
    },
    {
      id: 34,
      title: "Pizza",
      description: ['Z mąki, proszku do pieczenia, oliwy i wody zagnieść ciasto (miękkie).  Uformować okrągły placek, dodać dodatki… ','Piec przez 20 - 25 minut w rozgrzanym piekarniku. '],
      ingCategory: ['mąka','oliwa','mąka pszenna','proszek do pieczenia','woda'],
      category: "obiad",
      ingredients: ['1 szklanka mąki','2 łyżki oliwy','½ łyżeczki proszku do pieczenia','niecałe ½ szklanki wody' ],
      diet: "wegańska",
      bakeTime: 25,
      makeTime: 20,
      portions: 4,
      fav: true,
    },
    {
      id: 35,
      title: "Racuchy bananowo - jabłkowe",
      description: ['Do miski wbić jajko, dodać cukier i miksować do rozpuszczenia cukru. Dodać mąkę wymieszaną z proszkiem do pieczenia na przemian z mlekiem i dokładnie wymieszać, tak, żeby w cieście nie było grudek. ','Jabłko obieramy, ścieramy na tarce o grubych oczkach, z bananem postępujemy podobnie. Dodajemy do masy i dokładnie mieszamy. Na patelni rozgrzewamy olej, smażymy. '],
      ingCategory: ['banan','jabłko','mąka pszenna','mleko','cukier','jajka','olej','cukier puder'],
      category: "obiad na słodko",
      ingredients: ['1 banan','1 jabłko','2 szklanki mąki pszennej','1,5 szklanki mleka','3 łyżki cukru','1 jajko','olej','cukier puder'],
      diet: "wegetariańska",
      makeTime: 45,
      portions: 4,
      fav: true,
    },
    {
      id: 36,
      title: "Racuchy twarogowe w sosie waniliowym",
      description: ['Twaróg dokładnie rozgnieść i wymieszać z mąką oraz proszkiem do pieczenia Dodać żółtka i wymieszać. Z białek ubić sztywną pianę i wymieszać dokładnie z masą twarogową. Na rozgrzany olej kłaść łyżką cienkie placuszki, zrumienić z obu stron Zmiksować składniki sosu cały czas mieszając zagotować na wolnym ogniu. '],
      ingCategory: ['twaróg','jajka','mąka pszenna','proszek do pieczenia','sól','olej','mleko','cukier waniliowy','cukier'],
      category: "obiad na słodko",
      ingredients: ['30 dag twarogu tłustego','4 jaja','4 łyżki mąki ','2 płaskie łyżeczki proszku do pieczenia ','szczypta soli','olej do smażenia','200 ml mleka','1 łyżka mąki','łyżeczka cukru waniliowego ','1 łyżka cukru'],
      diet: "wegetariańska",
      makeTime: 35,
      portions: 4,
      fav: true,
      image: ['img/Dania/racuchy-twarogowe.jpg'],
    },
    {
      id: 37,
      title: "Zapiekanka jesienna",
      description: ['Dynię oczyścić z pestek, pokroić w duże kawałki, Ziemniaki obrać, umyć, pokroić na ćwiartki. Marchewki i cukinię obrać, pokroić w dużą kostkę. Warzywa wymieszać, skropić oliwą, dodać posiekany czosnek, doprawić solą i pieprzem','W wysmarowanym masłem naczyniu żaroodpornym ułożyć warstwę warzyw, posypać je rozmarynem. Zapiekać ok. 30 min w piekarniku nagrzanym do temp. 200°C (w połowie pieczenia odwrócić).','Do zapiekanki dodać odsączoną fasolę, zalać bulionem. Naczynie przykryć folią aluminiową Zapiekać, aż warzywa będą miękkie'],
      ingCategory: ['biała fasola','dynia','ziemniaki','marchew','cukinia','czosnek','bulion warzywny','oliwa','rozmaryn','sól','pieprz','masło'],
      category: "zapiekanki",
      ingredients: ['80 dag białej fasoli z puszki ','60 dag miąższu dyni','50 dag ziemniaków ','2 marchewki ','2 duże cukinie' ,'1 ząbek czosnku ','2 szklanki bulionu warzywnego ','2 łyżki oliwy ','2 łyżki posiekanego rozmarynu ','sól, czarny pieprz ','masło do wysmarowania naczynia'],
      diet: "wegetariańska",
      bakeTime: 30,
      temp: 200,
      makeTime: 60,
      portions: 4,
    },
    {
      id: 38,
      title: "Zupa pomidorowa",
      description: ['Skrzydełka umyć, zalać 1,5 I wody, zagotować. Zmniejszyć ogień. dodać liść laurowy, ziarna pieprzu oraz obraną włoszczyznę, gotować ok. 40 min na małym ogniu.','Mięso i włoszczyznę wyjąć, do wywaru wsypać ryż, posolić, gotować ok. 15 min. Dodać zmiksowane pomidory, koncentrat i bazylię, gotować jeszcze kilka minut.','Wlać śmietankę, doprawić cukrem. solą i pieprzem. Przed podaniem zupę ozdobić listkami bazylii.'],
      ingCategory: ['skrzydełka kurczaka','pomidory','włoszczyzna','ryż','śmietana','koncentrat pomidorowy','cukier','bazylia','pieprz','sól'],
      category: "zupy",
      ingredients: ['4 skrzydełka kurczaka' ,'1 puszka pomidorów bez skórki ','1 pęczek włoszczyzny ','3/4  szklanki ryżu','1/3 szklanki śmietanki ','1 łyżeczka koncentratu pomidorowego ','łyżeczka cukru' ,'½ łyżeczki bazylii ','1 liść laurowy ','kilka listków bazylii ','kilka ziaren czarnego pieprzu ','sól, czarny pieprz'],
      diet: "mięsne",
      makeTime: 70,
      portions: 4,
    },
    {
      id: 39,
      title: "Ketchup",
      description: ['Pomidory sparzyć. Cebulę i czosnek drobno posiekać. Pomidory, cebulę, czosnek do rondla i dusić na ogniu. Przetrzeć przez sitko, dodać resztę składników i dusić do odpowiedniej konsystencji.'],
      ingCategory: ['pomidory','seler','cebula','czosnek','cukier','ocet jabłkowy','ostra papryka','pieprz','musztarda','sól'],
      category: "dodatki",
      ingredients: ['3 kg pomidorów','seler','400 g cebuli','6 ząbków czosnku ','¾ szklanki cukru','½ szklanki octu jabłkowego','1 łyżka ostrej papryki','1 łyżeczka pieprzu','1 łyżka ostrej musztardy','1 łyżka soli'],
      makeTime: 40,
    },
    {
      id: 40,
      title: "Krem marchewkowy",
      description: ['Na rozgrzaną oliwe wrzucić posiekane czosnek i cebulę kiedy się zeszklą, dodać pokrojoną w plasterki marchewkę Smażyć kilka minut. mieszając, zalać wywarem, gotować ok 30 min. aż marchewka będzie miękka','Zupę zestawić z ognia, zmiksować. Doprawić solą, pieprzem, tymiankiem. Dodać śmietanę i posiekany koperek, wymieszać. Podawać z grzankami'],
      ingCategory: ['marchew','cebula','czosnek','koperek','bulion warzywny','śmietana','oliwa','sól','pieprz','tymianek'],
      category: "zupy",
      ingredients: ['50 dag marchewki ','1 mała cebula ','2 ząbki czosnku' ,'pęczek koperku' ,'1l wywaru warzywnego lub drobiowego ','2 łyżki śmietany (lub gęstego jogurtu) ','2 łyżki oliwy ','sól, biały pieprz, tymianek'],
      diet: "wegetariańska",
      makeTime: 45,
      portions: 4,
    },
    {
      id: 41,
      title: "Krem ptasie mleczko",
      description: ['Żółtka zmiksować z cukrem, dodać serek - ponownie zmiksować. Żelatynę dokładnie rozpuścić w małej ilości gorącego mleka, następnie zmieszać z pozostałą ilością zimnego mleka dodać do jajeczno - serowej masy.','Ponownie zmiksować. Na koniec wszystko delikatnie połączyć z ubitą na sztywno pianą.','Tak przygotowany krem rozlać do pucharków oziębić.'],
      ingCategory: ['mleko','żelatyna','jajka','cukier','serek homogenizowany'],
      category: "desery i lody",
      ingredients: ['1 szklanka mleka','1 łyżka żelatyny','3 jaja','15 dag cukru','1 opakowanie serka homogenizowanego','zapach np. waniliowy'],
      makeTime: 30,
      fav: true,
      image: ['img/Dania/krem-ptasie-mleczko.jpg'],
    },
    {
      id: 42,
      title: "Makaron tradycyjny",
      description: ['Mąkę przesiać na stolnicę, pośrodku zrobić wgłębienie, wlać w nie jajka i żółtka, dodać szczyptę soli, połączyć składniki, wlewając 50 ml ciepłej wody. Zagnieść gładkie, sprężyste ciasto, uformować je w kulę. Przykryć ściereczką. pozostawić na 30 min.','Ciasto podzielić na kilka porcji. każdą cienko rozwałkować, podsypując mąką. Placki zawinąć w rulony, pokroić w paski grubości ok. 0,5 cm. Makaron rozsypać do przeschnięcia na oprószonych mąką ściereczkach.','W dużym garnku zagotować wodę z solą. Makaron wrzucać partiami na wrzątek, gotować ok. 6 min.. Odcedzić, przelać letnią wodą.'],
      ingCategory: ['mąka pszenna','jajka','sól'],
      category: "dodatki",
      ingredients: ['50dag mąki tortowej','2 jajka','2 żółtka','sól'],
      makeTime: 50,
      image: ['img/Dania/makaron.jpg'],
    },
    {
      id: 43,
      title: "Masło czosnkowe",
      description: ['Just wymieszaj'],
      ingCategory: ['masło','czosnek','sól','pieprz','natka pietruszki'],
      category: "dodatki",
      ingredients: ['20dag masła','łyżeczka posiekanej natki pietruszki','5 ząbków czosnku','sól, pieprz'],
    },
    {
      id: 44,
      title: "Masło pietruszkowe",
      description: ['Just wymieszaj'],
      ingCategory: ['masło','cytryna','sól','pieprz','natka pietruszki'],
      category: "dodatki",
      ingredients: ['20dag masła','2 łyżeczki posiekanej natki pietruszki','1 łyżka soku z cytryny','sól, pieprz'],
    },
    {
      id: 45,
      title: "Masło ziołowe",
      description: ['Just wymieszaj'],
      ingCategory: ['masło','czosnek','sól','pieprz','natka pietruszki'],
      category: "dodatki",
      ingredients: ['20dag masła','1 łyżeczka posiekanej natki pietruszki','1/2 ząbka czosnku','sól, pieprz'],
    },
    {
      id: 46,
      title: "Sos słodko - kwaśny",
      description: ['Pomidory obrać ze skórki (najlepiej zamoczyć na chwilę we wrzątku, po chwili łatwo zdjąć skórkę), pokroić w kostkę, dodać pokrojoną cebulę, posolić, gotować przez godzinę.','Dodać ananasa, paprykę, przyprawy, gotować 30 minut. Zagęścić mąką.'],
      ingCategory: ['pomidory','cebula','papryka','ananas','kukurydza','czosnek','chili','pieprz','musztarda','curry','sól','ocet','mąka ziemniaczana'],
      category: "dodatki",
      ingredients: ['3kg pomidora','1kg cebuli','2 papryki czerwone','2 papryki żółte','puszka ananasa','puszka kukurydzy','6 ząbków czosnku','½ łyżki chili','2 łyżki papryki słodkiej','1 łyżka pieprzu mielonego','⅔ łyżki musztardy','1 łyżka curry','3 szklanki cukru','2 łyżki soli','1 szklanka octu','1 czubata łyżka mąki ziemniaczanej'],
      makeTime: 45,
    },
    {
      id: 47,
      title: "Banany z lodami",
      description: ['Banany obrać ze skórki, przekroić na połowę, skropić sokiem z cytryny. Pomarańcze dokładnie wyszorować, sparzyć wrzątkiem. Pół pomarańczy pokroić na plasterki, z reszty otrzeć skórkę, a potem wycisnąć sok.', 'Sok podgrzać z cukrem i otartą skórką, wrzucić plasterki pomarańczy, chwilę pogotować. Wyjąć skórkę i plasterki pomarańczy.', 'Na suchej patelni lekko podrumiesz tartą bułkę. Dodać masło, ciepły syrop pomarańczowy, podgrzać, aby masło się rozpuściło.', 'Pokrojone banany ułożyć na talerzykach, obłożyć kulkami lodów. Całość polać syropem z tartą bułką. Ozdobić wedle uznania.'],
      ingCategory: ['banan','cytryna','pomarańcza','cukier puder','bułka tarta','masło','lody'],
      category: "desery i lody",
      ingredients: ['banany (po jednym na porcję)','cytryna ','2 pomarańcze ','2 łyżki cukru pudru ','bułka tarta','2 łyżki masła','lody śmietankowe lub waniliowe'],
      makeTime: 30,
      fav: true,
    },
    {
      id: 48,
      title: "Granita arbuzowa",
      description: ['Pokrojony w kostkę arbuz, cukier i sok z limonki włożyć do blendera i zmiksować na purée. wlać do dużego, zamykanego pojemnika i włożyć do zamrażarki na <b>3 godziny</b>. Mieszać co godzinę widelcem, aby uzyskać ziarnistą konsystencję.'],
      ingCategory: ['arbuz','cukier puder','limonka'],
      category: "desery i lody",
      ingredients: ['4 szklanki dojrzałego, pokrojonego w kostkę arbuza bez pestek' ,'2 łyżki cukru pudru','2 łyżki soku z limonki'],
      makeTime: 20,
      image: ['img/Dania/granita-arbuzowa.jpg'],
    },
    {
      id: 49,
      title: "Kasza manna z owocami",
      description: ['Owoce miętę umyć. Jabłko oraz gruszkę pokroić na cząstki, usunąć gniazda nasienne, sp sokiem z cytryny. Z truskawek usunąć szypułki, przeciąć na pół','Kaszę mannę wymieszać z 1/2 szklanki mleka. Do reszty mleka dodać masło cukier zagotować. Mieszając, wlać kaszę z mlekiem, wsypać wiórki kokosowe. Cały czas mieszając, gotować 5-10 min, aż kasza zgęstnieje.','Kasze manne nałożyć do miseczek, udekorować owocami oraz miętą. Można podawać zarówno na ciepło, jak na zimno.'],
      ingCategory: ['mleko','kasza manna','wiórki kokosowe','cukier','masło','cytryna','truskawki','jabłko','gruszka','mięta'],
      category: "śniadanie",
      ingredients: ['1/2 l mleka' ,'5-6 łyżek kaszy manny' ,'2 łyżki wiórków kokosowych','2 łyżki cukru','łyżeczka masła','1/2 cytryny ','garść truskawek lub innych owoców sezonowych' ,'jabłko gruszka ','gałązka mięty'],
      makeTime: 25,
      portions: 2,
      fav: true,
    },
    {
      id: 50,
      title: "Kasza kukurydziana z gruszką",
      description: ['Cytrynę sparzyć, osuszyć, otrzeć skórkę, wycisnąć sok. Gruszki obrać, usunąć gniazda nasienne Jedną zetrzeć na tarce o dużych oczkach, druga pokroić w plasterki, skropić 1/2 soku z cytryny.',' Do garnka wlać sok gruszkowy, wsypać kaszę kukurydzianą i cukier Dodać startą gruszkę łyżeczkę ekstraktu z wanilii, po szczypcie kardamonu oraz soli Zagotować mieszając','Dołożyć otartą skórkę oraz resztę soku z cytryny, wymieszać Garnek szczelnie przykryć folią aluminiową, odstawić na 10 min. Kasze nałożyć na talerze, ozdobić plasterkami gruszki'],
      ingCategory: ['kasza kukurydziana','sok gruszkowy','sok jabłkowy','gruszka','cytryna','cukier','ekstrakt waniliowy','kardamon','sól'],
      category: "obiad na słodko",
      ingredients: ['1/2 szklanki kaszy kukurydzianej' ,'350 ml soku gruszkowego (lub jabłkowego)','2 gruszki','cytryna ','łyżka cukru ','ekstrakt z wanilii','kardamon','sól'],
      makeTime: 30,
    },
    {
      id: 51,
      title: "Mrożony krem cytrynowy",
      description: ['Zmiksować całe jaja, żółtka i cukier - masa powinna być gładka. Umieścić rondel z masą na małym ogniu. Dodać masło, sok i otartą skórkę z cytryn nieprzerwanie ubijać trzepaczką, aż krem zgęstnieje. Przecedzić przez gęste sitko. Pozostawić do ostygnięcia.','Przelać jogurt do dużej miski. Dokładnie wymieszać z kremem cytrynowym. Przelać do plastikowego pojemnika lub innej formy i wstawić na noc do zama żarnika, umieścić w lodówce na 20-30 minut przed podaniem, aby zmiękczyć nieco krem.'],
      ingCategory: ['jogurt grecki','jajka','cukier puder','masło','cytryna'],
      category: "desery i lody",
      ingredients: ['1-2 szklanki gęstego jogurtu greckiego' ,'2 jajka','2 żółtka','4 szklanki cukru pudru','80 g schłodzonego masła','skórka i sok z 2 cytryn'],
      makeTime: 15,
      portions: 4,
      image: ['img/Dania/mus-cytrynowy.jpg'],
    },
    {
      id: 52,
      title: "Mus cytrynowy",
      description: ['W dużej żaroodpornej misce wymieszać żółtka, jajka, cukier i sok z cytryny Ustawić nad garnkiem z gotującą się wodą; gotować, stale mieszając, aż masa zgęstnieje (stanie się biała i zwiększy objętość), ale nie zesztywnieje zupełnie (przez 10-12 minut)','Przecedzić przez gęste sito do dużej miski. Umieścić folię bezpośrednio na po wierzchni masy, włożyć do lodówki na mniej więcej godzinę. Przygotować bitą śmietanę z ekstraktem waniliowym. Delikatnie wymieszać jedną trzecią śmietany z masą cytrynową. Resztę bitej śmietany umieścić na wierzchu masy cytrynowej. Przykryć i przechowywać w lodówce do 24 godzin. Przed podaniem udekorować według uznania, na przykład kawałkami owoców lub skórką cytryny.'],
      ingCategory: ['jajka','cukier','cytryna','śmietana 30%','ekstrakt waniliowy'],
      category: "desery i lody",
      ingredients: ['6 żółtek ','2 jajka szklanka cukru','3/4  szklanki soku z cytryny ','1½ szklanki śmietany kremówki (30%)','łyżeczka ekstraktu waniliowego'],
      makeTime: 35,
    },
    {
      id: 53,
      title: "Mus czekoladowy",
      description: ['W salaterce ubić mikserem żółtka z 1/4 szklanką cukru na puszystą pianę. W naczyniu roztopić czekoladę. Ciągle ubijając dodawać do masy jajecznej roztopioną czekoladę. Następnie ubić śmietankę z 1/4 szklanką cukru, część odłożyć do dekoracji. W oddzielnej salaterce ubić białka na sztywną pianę.','Masę jajeczno-czekoladową połączyć najpierw ze śmietanką, potem ze sztywną pianą. Tak przygotowany mus czekoladowy przełożyć ostrożnie do pucharków. Odłożoną porcją bitej śmietany udekorować mus i posypać wiórkami z czekolady. Wstawić do lodówki na <b>4 godziny</b>.'],
      ingCategory: ['cukier','jajka','gorzka czekolada','śmietana 30%'],
      category: "desery i lody",
      ingredients: ['1/2 szklanki cukru','3 żółtka ','22,5 dag gorzkiej czekolady','1 szklanka śmietanki 30% ','6 białek jaj'],
      makeTime: 30,
      portions: 5,
      image: ['img/Dania/mus-czekoladowy.jpg'],
    },
    {
      id: 54,
      title: "Mus jagodowy",
      description: ['Żelatynę namoczyć (ok. 10 minut), a następnie rozpuścić w kilku łyżkach wrzącej wody. Jagody dokładnie umyć, osączyć, część zostawić do dekoracji, a resztę posypać cukrem i zmiksować, połączyć z rozpuszczoną żelatyną.','Z białek ubić sztywną pianę. Śmietanę także ubić na sztywno, Zmiksowane jagody delikatnie i dokładnie połączyć z pianą z białek i śmietaną. Przełożyć do szklanych naczyń, przykryć i zostawić w lodówce do stężenia. Przed podaniem udekorować'],
      ingCategory: ['jagody','cukier trzcinowy','żelatyna','jajka','śmietana','jogurt naturalny'],
      category: "desery i lody",
      ingredients: ['3 szklanki jagód' ,'szklanka cukru trzcinowego ','3 łyżeczki żelatyny' ,'3 białka z jajek ','szklanka śmietany kremówki (30%) lub jogurtu naturalnego'],
      makeTime: 25,
      portions: 5,
    },
    {
      id: 55,
      title: "Mus truskawkowy",
      description: ['Truskawki zasypać cukrem i odstawić na mniej więcej pół godziny, następnie zmiksować. Żelatynę zalać zimną wodą i odstawić na 10 minut. Sok z truskawek zagotować w rondelku, dodać namoczoną żelatynę i podgrzewać na małym ogniu, aby nie dopuścić do zagotowania. Cały czas mieszać, aż żelatyna się rozpuści. Można ją również rozpuścić w kąpieli wodnej. Odstawić do ostygnięcia, a następnie połączyć ze zmiksowanymi truskawkami i dokładnie wymieszać.','Białka ze szczyptą cukru ubić na sztywną pianę. Schłodzoną śmietankę także ubić na sztywno. Stopniowo i delikatnie połączyć śmietanę z masą truskawkową, a następnie dodać powoli pianę z białek. Mus przelać do pucharków. Wstawić na 4-6 godzin do lodówki. Przed podaniem udekorować wedle uznania.'],
      ingCategory: ['truskawki','cukier','żelatyna','woda','sok z truskawek','cytryna','śmietana 30%','jajka'],
      category: "desery i lody",
      ingredients: ['2 szklanki truskawek pokrojonych w plasterki' ,'3/4 szklanki cukru ','łyżka żelatyny' ,'1/4 szklanki zimnej wody ','½ szklanki soku z truskawek ','łyżka soku z cytryny lub pomarańczy ','3/4  szklanki schłodzonej śmietany kremówki (30%)' ,'3 białka'],
      makeTime: 30,
      portions: 5,
      image: ['img/Dania/mus-truskawkowy.jpg'],
    },
    {
      id: 56,
      title: "Panna cotta truskawkowa",
      description: ['Truskawki odszypułkować, umyć, pokroić na ćwiartki. Włożyć do rondelka, dodać łyżkę wody, kilka łyżek cukru (do smaku). Gotować na średnim ogniu, mieszając do czasu uzyskania przecieru (można też truskawki zmiksować). Przetrzeć przez drobne sitko.','W tym czasie żelatynę namoczyć w kilku łyżkach śmietanki. Odstawić na 5-10 minut. Następnie podgrzewać na małym ogniu, cały czas mieszając, aż żelatyna się rozpuści ok. 3 minut. Nie doprowadzić do zagotowania.','W oddzielnym garnku wymieszać resztę śmietany, cukier i ekstrakt waniliowy Podgrzewać na małym ogniu, mieszając od czasu do czasu, aż cukier się rozpuści -ok. 10 minut. Wymieszać dokładnie z żelatyną rozpuszczoną w śmietanie.','Przelać do miseczek (ramekinów, filiżanek lub innych foremek). Schłodzić w temperaturze pokojowej, a następnie przykryć folią i przechowywać w lodówce przez co najmniej 3-4 godziny. Przed podaniem przeciągnąć nożem wokół krawędzi każdej foremki; odwrócić na talerzyki. Każdy deser polać sosem truskawkowym i udekorować według uznania.','Aby łatwo wyjąć panna cottę, można także zanurzyć na kilka sekund dno foremek w gorącej wodzie, a następnie położyć na każdej foremce talerz i odwrócić do góry dnem.','Deser można również urozmaicić. W tym celu są potrzebne 3 szklanki truskawek i likier z czarnej porzeczki. Z oczyszczonych truskawek i cukru należy przygotować mus, dodać do niego 2 łyżki likieru.musu odłożyć do polania deseru, a resztę zmiksować z przygotowanym kremem z maślanki, śmietany, wanilii, cukru i żelatyny. Przelać do foremek i schłodzić.'],
      ingCategory: ['truskawki','cukier','śmietana 30%','żelatyna','cukier puder','ekstrakt waniliowy'],
      category: "desery i lody",
      ingredients: ['2 szklanki truskawek' ,'kilka łyżek cukru ','2 szklanki śmietany kremówki (30%) (można zast,połowę śmietanki maślanką lub mlekiem)','2 łyżeczki żelatyny','½ szklanki cukru pudru' ,'łyżeczka ekstraktu waniliowego'],
      makeTime: 320,
    },
    {
      id: 57,
      title: "Parfait owocowe",
      description: ['Ciastka pokruszyć, zalać sokiem pomarańczowym i odstawić na 5 minut. Zmiksować w blenderze szklankę malin, mleko i cukier. Przecedzić przez gęste sito. Ubić śmietanę.','Przygotować kieliszki do wina. Do każdego włożyć po dwie łyżki pokruszonych ciastek, czubatą łyżkę pozostałych malin, 2 łyżki bitej śmietany, 2 czubate łyżki przecieru malinowego (można również przecier malinowy połączyć delikatnie z bitą śmietaną). Powtórzyć warstwy. Kieliszki przykryć luźno folią, włożyć do lodówki na 4 godziny. Przed podaniem posypać wiórkami czekolady, udekorować świeżymi owocami. Warstwy można ułożyć wedle uznania.'],
      ingCategory: ['biszkopty','herbatniki','sok pomarańczowy','maliny','truskawki','skondensowane mleko','cukier puder','śmietana 30%','gorzka czekolada'],
      category: "desery i lody",
      ingredients: ['ok. 500 g biszkoptów lub herbatników ','1/3   szklanki soku pomarańczowego','4 szklanki malin lub truskawek (świeżych albo mrożonych)','1/4  szklanki skondensowanego słodzonego mleka' ,'łyżka stołowa cukru pudru ','3 szklanki śmietany kremówki (30%)','30 g gorzkiej czekolady do dekoracji','owoce (maliny, jagody lub borówki) do dekoracji'],
      makeTime: 270,
      image: ['img/Dania/parfait.jpg'],
    },
    {
      id: 58,
      title: "Shake mleczny z kawą",
      description: ['Wszystkie składniki dokładnie zmiksować, wlać do wysokich szklanek i podawać, na przykład z gałką lodów waniliowych, posypane startą czekoladą lub polane polewą czekoladową','Do przygotowania shake a można użyć lodów waniliowych (zamiast kostek lodu). W tym celu należy umieścić dwie gałki lodów waniliowych w blenderze. Dodać do szklanki mleka i łyżeczki ekstraktu waniliowego. Następnie dosypać łyżeczkę kawy rozpuszczalnej. Dokładnie wymieszać. W zależności od upodobań można dać mniej lub więcej mleka albo mniej lub więcej kawy.'],
      ingCategory: ['mleko','kawa','ekstrakt waniliowy','gorzka czekolada','cukier','lód'],
      category: "koktajle i smoothie",
      ingredients: ['4 szklanki mleka ','łyżka stołowa kawy rozpuszczalnej' ,'łyżeczka ekstraktu waniliowego ','2 łyżeczki syropu czekoladowego lub 85 g gorzkiej czekolady (70-80 proc. kakao)' ,'2 łyżeczki cukru (ewentualnie więcej, w zależności od upodobań) ','6 kostek lodu'],
      makeTime: 20,
    },
    {
      id: 59,
      title: "Smoothie bananowo-truskawkowe",
      description: ['Owoce, jogurt, mleko lub sok, kostki lodu umieścić w blenderze. Zmiksować, przelać do pucharków'],
      ingCategory: ['owoce','banan','lód','jogurt naturalny','kefir','mleko','cukier'],
      category: "koktajle i smoothie",
      ingredients: ['1½ szklanki owoców: truskawek, malin lub jagód (ewentualnie mieszanka owoców) ','banan ','szklanka jogurtu naturalnego lub kefiru','½ szklanki mleka lub soku pomarańczowego' ,'szklanka kostek lodu ','cukier lub miód (do smaku)'],
      makeTime: 15,
    },
    {
      id: 60,
      title: "Smoothie buraczane",
      description: ['Warzywa oczyścić, umyć, pokroić na małe kawałki. Wszystkie składniki zmiksować w blenderze do uzyskania gładkiej konsystencji koktajlu. Doprawić do smaku. Wstawić na <b>kilka godzin do lodówki</b>. ','Rozlać do szklanek, udekorować natką pietruszki.'],
      ingCategory: ['buraki','zakwas buraczany','zsiadłe mleko','seler','jabłko','marchew','pomarańcza','sok z cytryny','natka pietruszki'],
      category: "koktajle i smoothie",
      ingredients: ['1-2 czerwone buraki' ,'5 lyżek zakwasu buraczanego ','1 l zsiadłego mleka (lub woda mineralna do rozcieńczenia koktajlu) ','seler naciowy' ,'jabłko ','1-2 marchewki ','sok z jednej pomarańczy ','łyżka soku z cytryny' ,'natka pietruszki'],
      makeTime: 100,
    },
    {
      id: 61,
      title: "Smoothie jeżynowe",
      description: ['Owoce umyć. Banan obrać ze skórki. Umieścić banan, jeżyny i maliny w blenderze. Zmiksować. Jeśli smoothie jest za mało słodkie, można dodać trochę miodu. Ewentualnie wrzucić kostki lodu.'],
      ingCategory: ['jeżyny','banan','maliny','jogurt naturalny','miód','lód'],
      category: "koktajle i smoothie",
      ingredients: ['szklanka jeżyn','banan' ,'½ szklanki malin ','szklanka jogurtu naturalnego ','łyżka miodu ','4 kostki lodu (opcjonalnie)'],
      makeTime: 20,
      image: ['img/Dania/smoothie-jeżynowe.jpg'],
    },
    {
      id: 62,
      title: "Smoothie malinowe",
      description: ['Morele umyć, obrać, przekroić na pół, usunąć pestki. Miąższ zmiksować z pozostałymi składnikami','Ewentualnie dodać miód i cynamon.'],
      ingCategory: ['morele','banan','mleko','sok z pomarańczy','lód'],
      category: "koktajle i smoothie",
      ingredients: ['8 dojrzałych, miękkich moreli' ,'banan','3/4  szklanki jogurtu naturalnego' ,'1/3  szklanki mleka ','1/4  szklanki soku z pomarańczy' ,'kilka kostek lodu ','łyżka miodu (opcjonalnie) ','szczypta cynamonu lub łyżeczka wanilii (opcjonalnie)'],
      makeTime: 20,
    },
    {
      id: 63,
      title: "Smoothie tropikalne",
      description: ['Wszystkie składniki wymieszać ze sobą i zmiksować, aż napój będzie gładki, a na powierzchni pojawi się pianka. Wymieszać z pokruszonym lodem'],
      ingCategory: ['owoce','mleko','jogurt naturalny','lód'],
      category: "koktajle i smoothie",
      ingredients: ['2 szklanki owoców tropikalnych','szklanka mleka' ,'szklanka naturalnego jogurtu bałkańskiego ','łyżka płynnego miodu (opcjonalnie)' ,'½ szklanki pokruszonego lodu'],
      makeTime: 15,
      image: ['img/Dania/smoothie-tropikalne.jpg'],
    },
    {
      id: 64,
      title: "Smoothie zielone",
      description: ['Szpinak umyć. Awokado obrać, wyjąć pestkę. Kiwi obrać, pokroić. Jabłko (lub gruszkę) obrać, wyjąć gniazdo nasienne, pokroić na małe cząstki. Zmiksować wszystkie składniki. Dodać szczyptę soli. Rozcieńczyć wodą do pożądanej konsystencji.'],
      ingCategory: ['szpinak','awokado','kiwi','gruszka','jabłko','limonka','natka pietruszki','woda','jogurt naturalny','sól'],
      category: "koktajle i smoothie",
      ingredients: ['garść świeżych liści szpinaku' ,'awokado','2 kiwi' ,'zielone jabłko lub gruszka ','łyżka soku z limonki ','½ pęczka pietruszki' ,'ok. szklanki wody mineralnej ','szklanka jogurtu naturalnego (opcjonalnie)' ,'szczypta soli ','kilka kostek lodu (opcjonalnie)'],
      makeTime: 20,
      image: ['img/Dania/smoothie-zielone.jpg'],
    },
    {
      id: 65,
      title: "Sorbet cytrynowy",
      description: ['Cytryny dokładnie umyć, wyszorować i osuszyć. ','Do małego garnka wlać wodę, wsypać cukier. Zagotować. Do wrzącego syropu dodać skórkę z cytryny. Gotować na małym ogniu przez 5 minut.','Zdjąć z ognia i ostudzić. Wyjąć skórkę. Dodać sok wyciśnięty z cytryn, startą skórkę z cytryny i dokładnie wymieszać. Ewentualnie można dolać odrobinę likieru cytrynowego ','Przełożyć do plastikowego pojemnika i wstawić do zamrażarki. Podczas mrożenia sorbet mieszać za pomocą widelca co pół godziny. Wyjąć na 30 minut przed podaniem.'],
      ingCategory: ['woda','cukier','cytryna'],
      category: "desery i lody",
      ingredients: ['13/4   szklanki wody' ,'2 szklanki cukru ','2 szklanki świeżo wyciśniętego soku z cytryny (z 8-10 cytryn)'  ,'1-2 łyżki świeżo startej skórki z cytryny'],
      diet: "wegańska",
      makeTime: 45,
      image: ['img/Dania/sorbet-cytrynowy.jpg'],
    },
    {
      id: 66,
      title: "Babka numero uno",
      description: ['Margarynę utrzeć z cukrem a potem dodawać po 1 jajku i ucierać. Do utartej masy dodawać kolejno następne składniki. Podzielić na 2 części, do jednej dodać kakao. Piec 45 minut.'],
      ingCategory: ['margaryna','cukier','jajka','kakao','cukier waniliowy','proszek do pieczenia','mąka pszenna','mleko'],
      category: "ciasta",
      ingredients: ['¾ margaryny','1 szklanka cukru','4 jajka','zapach','kakao','cukier waniliowy','1½ łyżeczki proszku do pieczenia','2 szklanki mąki','3 łyżki mleka'],
      bakeTime: 45,
      makeTime: 25,
    },
    {
      id: 67,
      title: "Babka numero duo",
      description: ['Żółtka oddzielić od białek. Białka ubić, dodać żółtka i cukier. Stopniowo wlewać ostudzoną margarynę. Na koniec dodać przesianą mąkę i mleko.','Piec 45 minut.'],
      ingCategory: ['jajka','mąka pszenna','mąka ziemniaczana','margaryna','proszek do pieczenia','cukier waniliowy','mleko'],
      category: "ciasta",
      ingredients: ['4 jaja','1 szklanka mąki pszennej','1 szklanka mąki ziemniaczanej','1 roztopiona margaryna','1 łyżeczka proszku do pieczenia','1 cukier waniliowy','2 łyżki mleka'],
      bakeTime: 45,
      makeTime: 25,
    },
    {
      id: 68,
      title: "Babka cytrynowa",
      description: ['Margarynę utrzeć z cukrem i jajkami, dodać mąkę z proszkiem do pieczenia i mleko. Na koniec dodać startą skórkę, aromat i rodzynki. Dobrze wymieszać. Piec ok 50 minut'],
      ingCategory: ['mąka pszenna','cukier','margaryna','mleko','jajka','proszek do pieczenia','cytryna','rodzynki'],
      category: "ciasta",
      ingredients: ['½ kg mąki pszennej','20 dag cukru','25 dag margaryny','½ szklanki mleka','4 jaja','1 op. proszku do pieczenia','starta skórka z cytryny i aromat','5 dag rodzynek'],
      bakeTime: 50,
      makeTime: 25,
    },
    {
      id: 69,
      title: "Babka orzechowa",
      description: ['Margarynę utrzeć z cukrem, dodać żółtka. Na koniec wbite białka i 1 małą paczkę proszku do pieczenia. '],
      ingCategory: ['margaryna','jajka','cukier','orzechy','mąka'],
      category: "ciasta",
      ingredients: ['1 margaryna','5 jaj','25 dag cukru','12,5 dag mielonych orzechów','12,5 dag mąki '],
      bakeTime: 50,
      makeTime: 25,
    },
    {
      id: 70,
      title: "Polewa do ciast",
      description: ['Razem utrzeć i polać ciasto.'],
      ingCategory: ['jajka','cukier puder','cukier waniliowy'],
      category: "dodatki",
      ingredients: ['1 białko','½ szklanki cukru pudru','½ łyżeczki cukru waniliowego'],
      makeTime: 10,
    },
    {
      id: 71,
      title: "Babka piaskowa",
      description: ['Utrzeć miękki tłuszcz z cukrem, cukrem waniliowym, skórką cytrynową i odrobiną soli na puszystą masę. W trakcie wbijać żółtka, a następnie ubite białka.','Wymieszać mąkę z mąką ziemniaczaną i proszkiem do pieczenia. Przerzuć do masy i delikatnie wymieszać.','Ciasto wyłożyć na blachę. Piec ciasto na złoty kolor; 1¼ godziny w piekarniku rozgrzanym do 175℃.','Do babki można dodać rodzynki lub bakalie.'],
      ingCategory: ['margaryna','cukier','mąka pszenna','jajka','mąka ziemniaczana','cukier waniliowy','proszek do pieczenia','skórka z cytryny','sól','olej'],
      category: "ciasta",
      ingredients: ['1 kostka margaryny','1 szklanka cukru','10 czubatych łyżek mąki','5 czubatych łyżek mąki ziemniaczanej','4 jaja','1 op. cukru waniliowego','½ łyżeczki proszku do pieczenia','starta skórka z cytryny','szczypta soli','tłuszcz do formy'],
      bakeTime: 75,
      temp: 175,
      makeTime: 25,
    },
    {
      id: 72,
      title: "Bananowiec",
      description: ['Biszkopty namoczyć w rozpuszczonej galaretce i ułożyć w tortownicy.','Utrzeć margarynę z cukrem i żółtkiem. Żelatynę rozpuścić w odrobinie gorącego mleka. Do utartej masy dodać starte banany, żelatynę, następnie wymieszać i wyłożyć na biszkopty. Gdy masa stężeje, polać resztą galaretki. '],
      ingCategory: ['biszkopty','galaretka','margaryna','jajka','cukier','banan','mleko','żelatyna'],
      category: "ciasta",
      ingredients: ['20 dag biszkoptów' ,'galaretka owocowa','1 margaryna','żółtko' ,'½ szklanki cukru','3 banany','4 łyżeczki żelatyny','mleko'],
      makeTime: 45,
    },
    {
      id: 73,
      title: "Beza",
      description: ['Piekarnik rozgrzać do temp. 120℃ (z termoobiegiem)','Blachę wyłożyć papierem do pieczenia, na papierze narysować dwa okręgi o średnicy 18 cm. Papier odwrócić na drugą stronę.','BEZA: Białka ubić ze szczyptą soli na sztywno. Podczas ubijania dodać sok z cytryny. Dalej ubijając dodawać stopniowo cukier. Ubijać tak długo, aż cukier się rozpuści i piana będzie sztywna i lśniąca. Na koniec dodać mąkę ziemniaczaną.','Ubitą pianę nałożyć łyżką na narysowane okręgi i delikatnie ją rozłożyć.','Piec w rozgrzanym piekarniku przez 1,5 godz. Po tym czasie otworzyć piekarnik i pozostawić bezę w piekarniku do ostygnięcia (najlepiej na całą noc).'],
      ingCategory: ['jajka','sok z cytryny','sól','cukier','mąka ziemniaczana'],
      category: "ciasta",
      ingredients: ['3 białka','1 łyżeczka soku z cytryny','szczypta soli','170g cukru','1,5 łyżeczki mąki ziemniaczanej'],
      bakeTime: 90,
      temp: 120,
      makeTime: 130,
      fav: true,
    },
    {
      id: 74,
      title: "Biszkopt ciemny",
      description: ['Białka ubić na sztywno, dodać cukier i żółtka.','Dodać mąkę zmieszaną z proszkiem do pieczenia, na końcu kakao i lekko wymieszać.','Wylać na formę do pieczenia.','Piec w temp. 160-180°C ok. 30-40 min.'],
      ingCategory: ['jajka','cukier kryształ','proszek do pieczenia','mąka pszenna','kakao'],
      category: "ciasta",
      ingredients: ['6 jajek'
        ,'1 szklanka cukru kryształu'
        ,'1 łyżeczka proszku do pieczenia'
        ,'3/4 szklanki mąki pszennej'
        ,'2-3 łyżeczki kakao'
        ],
      bakeTime: 40,
      temp: 180,
      makeTime: 70,
    },
    {
      id: 75,
      title: "Biszkopt jasny",
      description: ['Białka ubić na sztywno, dodać cukier i żółtka.','Dodać mąkę zmieszaną z proszkiem do pieczenia i lekko wymieszać.','Wylać na formę do pieczenia.','Piec w temp. 160-180°C ok. 30-40 min.'],
      ingCategory: ['jajka','cukier kryształ','proszek do pieczenia','mąka pszenna'],
      category: "ciasta",
      ingredients: ['6 jajek'
        ,'1 szklanka cukru kryształu'
        ,'1 łyżeczka proszku do pieczenia'
        ,'3/4 szklanki mąki pszennej'
        ],
      bakeTime: 40,
      temp: 180,
      makeTime: 70,
    },
    {
      id: 76,
      title: "Biszkopt orzechowy I",
      description: ['Białka ubić na sztywno, dodać cukier i żółtka.','Dodać mąkę zmieszaną z proszkiem do pieczenia, na końcu orzechy i bułkę tartą. Wszystko lekko wymieszać.','Wylać na formę do pieczenia','Piec w temp. 180°C ok. 30 min.'],
      ingCategory: ['jajka','orzechy','mąka pszenna','cukier kryształ','proszek do pieczenia','bułka tarta'],
      category: "ciasta",
      ingredients: ['4 jajka'
        ,'4 łyżki zmielonych orzechów'
        ,'3 łyżki bułki tartej'
        ,'4 łyżki cukru kryształu'
        ,'1 łyżka mąki pszennej'
        ,'1/2 łyżeczki proszku do pieczenia'
        ],
      bakeTime: 30,
      temp: 180,
      makeTime: 50,
    },
    {
      id: 77,
      title: "Biszkopt orzechowy II",
      description: ['...'],
      ingCategory: ['jajka','orzechy','mąka pszenna','cukier kryształ','proszek do pieczenia'],
      category: "ciasta",
      ingredients: ['5 jajek'
        ,'15dag zmielonych orzechów'
        ,'5 łyżek cukru kryształu'
        ,'5 łyżek mąki pszennej'
        ,'1/2 łyżeczki proszku do pieczenia'
        ],
        bakeTime: 30,
        temp: 180,
        makeTime: 50,
    },

    {
      id: 78,
      title: "Bułeczki",
      description: ['Idk, chyba wszystko wymieszać'],
      ingCategory: ['mąka pszenna','drożdże','mleko','masło','cukier','jajka','sól'],
      category: "wypieki",
      ingredients: ['570 g mąki pszennej' 
        ,'24 g drożdży' 
        ,'175 ml mleka'
        ,'85 g masła'
        ,'4 łyżeczki cukru'
        ,'2 jajka'
        ,'łyżeczka soli'
        ],
    },
    {
      id: 79,
      title: "Bułeczki cynamonowe",
      description: ['ciasto pieczemy w piekarniku rozgrzanym do 200℃. Forma wyłożona papierem do pieczenia.','W dużej misce połączyć mleko i drożdże, dokładnie wymieszać. Dodać cukier,  roztopione masło, wymieszać. Następnie dodać jajka i ponownie dokładnie wymieszać. Na koniec wsypać 4 szklanki mąki i wyrobić ręką. Jeśli ciasto jest luźne, dodać jeszcze trochę mąki.','Miskę przykryć folią spożywczą i odstawić na 1 - 1,5 godziny w ciepłe i nieprzewiewne miejsce.','NADZIENIE: W misce połączyć brązowy cukier, cynamon i skórkę z cytryny/pomarańczy. Dokładnie wymieszać i odstawić','Rozgrzać piekarnik.','Wyrośnięte ciasto wyłożyć na stolnicę oprószoną mąką. Rozwałkować ciasto na prostokątny placek (ok. 30 x 40 cm). Ciasto posmarować roztopionym masłem i posypać równo nadzieniem. Zwinąć roladę wzdłuż krótszego boku, ciasto zwinąć dość ciasno.','Ostrym nożem, nie spłaszczając kroimy ciasto na plastry o grubości ok. 3 cm. ','Pieczemy w piekarniku przez 13 - 15 minut, do zarumienienia. Po wyjęciu posmarować roztopionym masłem.'],
      ingCategory: ['mleko','jajka','masło','cukier','drożdże','mąka pszenna','cynamon','brązowy cukier','skórka z cytryny'],
      category: "wypieki",
      ingredients: ['1 szklanka ciepłego mleka'
        ,'2 jajka'
        ,'70g roztopionego masła'
        ,'½ szklanki cukru'
        ,'25g drożdży / 1 op. drożdży suchego'
        ,'ok. 4½ szklanki mąki pszennej'
        ,'1 łyżka roztopionego masła'
        ,'1 op. cynamonu'
        ,'1 szklanka brązowego cukru'
        ,'skórka starta z cytryny lub pomarańczy'
        ],
      bakeTime: 15,
      temp: 200,
      makeTime: 85,
      fav: true,
    },
    {
      id: 80,
      title: "Chrusty ",
      description: ['Margarynę posiekać z mąką, dodać jajka, cukier, proszek do pieczenia, sól. Podlewać to wszystko śmietaną i ugotować. Kłaść na rozgrzany olej.'],
      ingCategory: ['jajka','margaryna','cukier waniliowy','śmietana','sól','proszek do pieczenia','mąka pszenna'],
      category: "wypieki",
      ingredients: ['3 jajka'
        ,'1 łyżka margaryny'
        ,'cukier waniliowy'
        ,'250 ml śmietany'
        ,'szczypta soli i proszku do pieczenia'
        ,'mąka (wedle uznania)'
        ],
      makeTime: 30,
    },
    {
      id: 81,
      title: "Ciasteczka kakaowe",
      description: ['Mąkę i margarynę posiekać nožem, dodać resztę składników, zarobić ciasto, Ciasto rozwałkować, wykrawać jednakowe ciastka i upiec. Po upieczeniu przełożyć ciasto masą, wierzch polać polewą. Można posypać kokosem.','Wszystkie składniki z MASA utrzeć.','Wszystkie składniki z POLEWA krótko zagotować'],
      ingCategory: ['mąka pszenna','margaryna','cukier puder','jajka','kakao','proszek do pieczenia','mleko w proszku','olejek migdałowy','słodka śmietana'],
      category: "ciastka",
      ingredients: ['30 dag mąki pszennej'
        ,'20 dag margaryny'
        ,'10 dag cukru pudru'
        ,'3 żółtka'
        ,'kakao do koloru'
        ,'2 łyżeczki proszku do pieczenia'
        ,'MASA'
        ,'25 dag cukru pudru'
        ,'1 kostka masła lub margaryny'
        ,'25 dag mleka w proszku'
        ,'1 jajko'
        ,'olejek migdałowy'
        ,'POLEWA'
        ,'3 łyżki margaryny'
        ,'3 łyżki cukru pudru'
        ,'3 łyżki kakao'
        ,'3 łyżki słodkiej śmietany'
        ],
      makeTime: 40,
    },
    {
      id: 82,
      title: "Ciasteczka z jagodami",
      description: ['Przygotować rozczyn z drożdży: mleko podgrzać, dodać do niego drożdże a także 2 łyżki mąki i 1 łyżkę cukru. Wszystkie składniki wymieszać i odstawić w ciepłe miejsce.','Jajka umyć, oddzielić żółtka od białek. W rondelku rozpuścić margarynę Żółtka utrzeć z cukrem, natomiast mąkę przesiać nad drewnianą stolnice, do dać mleko, jajka z cukrem i dokładnie wyrobić masę. Przelać rozczyn drożdżowy dalej wyrabiać ciasto, aż przestanie się kleić do rąk będzie elastyczne Stolnice posypać mąką rozwałkować ciasto, które następnie należy pociąć w trójkąty. Do każdego z nich wkładać kilka jagód i szczyptę cukru waniliowego układać na blasze, na której będą pieczone','Ciasteczka piec 15 minut w piekarniku nagrzanym do temperatury 180°C. Podawać ostudzone z herbatą z owoców leśnych.'],
      ingCategory: ['mąka pszenna','margaryna','jajka','cukier','drożdże','mleko','jagody','cukier waniliowy'],
      category: "ciastka",
      ingredients: ['1 kg mąki' 
        ,'1/2 kg margaryny'
        ,'4 jaja'
        ,'5 łyżek cukru'
        ,'15 dag drożdży'
        ,'250 ml mleka'
        ,'sól'
        ,'10 dag jagód'
        ,'2 łyżki cukru waniliowego'
        ],
      bakeTime: 15,
      temp: 180,
      makeTime: 45,
    },
    {
      id: 83,
      title: "Ciastka z kokosem",
      description: ['Mąkę posiekać z margaryną, dodać żółtka roztrzepane z cukrem pudrem, ocet, proszek do pieczenia i zarobić ciasto. Ciasto rozwałkować cienko, wykrawać foremką ciastka - jedno z dziurką, drugie całe (mogą być pary różnych foremek). ','Ciastka z dziurką zamoczyć w białku i kokosie. Ciastka piec na złoty kolor. Po upieczeniu przełożyć ciastka dżemem lub marmoladą.'],
      ingCategory: ['mąka pszenna','margaryna','ocet','cukier puder','jajka','proszek do pieczenia','kokos','dżem'],
      category: "ciastka",
      ingredients: ['1 kg mąki pszennej'
        ,'1/2 kg margaryny'
        ,'4 łyżki octu'
        ,'25 dag cukru pudru'
        ,'5 żółtek'
        ,'1 opakowanie proszku do pieczenia (na 1 kg maki)'
        ,'25 dag kokosu'
        ,'marmolada lub dżem'
        ],
      makeTime: 30,
    },
    {
      id: 84,
      title: "Ciasto marchewkowe",
      description: ['Wszystkie składniki wrzucamy do miski i wymieszać jak na tarte placki. ','Piec ok. 60 minut w temp. 180℃.'],
      ingCategory: ['mąka pszenna','cukier','marchew','jajka','olej','proszek do pieczenia','cynamon','soda','sól','rodzynki','orzechy'],
      category: "ciasta",
      ingredients: ['2 szklanki mąki'
        ,'2 szklanki cukru'
        ,'2 szklanki drobno utartej marchewki'
        ,'4 jaja'
        ,'1¼ szklanki oleju'
        ,'2 łyżeczki proszku do pieczenia'
        ,'2 łyżeczki cynamonu'
        ,'2 łyżeczki sody'
        ,'szczypta soli'
        ,'garść rodzynek'
        ,'garść orzechów włoskich'
        ],
      bakeTime: 60,
      temp: 180,
      makeTime: 90,
    },
    {
      id: 85,
      title: "Kakaowa rolada z bananami",
      description: ['Jajka ubić z cukrem i cukrem waniliowym na gęstą, puszystą masę. Mąkę połączyć z kakao, przesiać na jajeczną masę i dokładnie wymieszać.','Wyłożyć blachę papierem do pieczenia i równomiernie rozsmarować na nim ciasto. Wstawić do nagrzanego piekarnika','<b>Temperatura pieczenia:</b> piekarnik elektryczny - 180°C, z termoobiegiem 160°C, gazowy stopień 2. Czas pieczenia: 10-12 minut','Czystą ściereczkę równomiernie obsypać cukrem. Ciasto zaraz po wyjęciu z piekarnika przełożyć (odwracając blachę do góry dnem) na obsypaną ściereczkę. Papier opędzlować zimną wodą i odczekać krótką chwilę. Ostrożnie odkleić papier od ciasta.','Jeszcze ciepły biszkopt zwinąć wraz ze ściereczką w luźny rulon i odstawić na 1-2 godziny do ostygnięcia','Śmietanę ubić z fixem i podzielić na pół - jedną część wymieszać z sokiem bananowym, a drugą z połową startej czekolady. Obrać banany i skropić sokiem z cytryny, by nie ściemniały.','Rozwinąć ciasto i posmarować śmietaną z dodatkiem czekolady. Odciąć końcówki bananów. Banany ułożyć na cieście tak, by stykały się końcami. Ciasto zwinąć w rulon.','Wierzch rolady posmarować wego soku. Krawędzie udekorować resztą startej czekolady. Rozpuścić polewę i ozdobić nią wierzch rolady.'],
      ingCategory: ['cukier','cukier waniliowy','mąka pszenna','kakao','drobnoziarnisty cukier','śmietana 36%','fix do śmietany','sok bananowy','czekolada','banan','sok z cytryny','czekoladowa polewa'],
      category: "ciasta",
      ingredients: ['5 jaj'
        ,'100 g cukru'
        ,'1 op. cukru waniliowego '
        ,'75 g mąki pszennej'
        ,'15 g kakao'
        ,'drobnoziarnisty cukier do posypania ściereczki'
        ,'750 g śmietany 36%' 
        ,'2 op. fixu do śmietany'
        ,'100 ml soku bananowego'
        ,'100 g startej czekolady' 
        ,'3 dojrzałe banany'
        ,'sok z 1 cytryny'
        ,' 50 g czekoladowej polewy'
        ],
      bakeTime: 12,
      temp: 180,
      makeTime: 120,
      image: ["img/Dania/rolada-czekoladowa-z-bananami.jpg"],
    },
    {
      id: 86,
      title: "Karpatka",
      description: ['Margarynę zagotować wraz z wodą. Gdy całość się zagotuje, dodać mąkę i dokładnie wymieszać. Po ostygnięciu dodać jajka. Każde jajko wbijać osobno i mieszać. Dodać do ciasta proszek do pieczenia. ciasto podzielić na 2 części i upiec.'],
      ingCategory: ['margaryna','woda','jajka','mąka pszenna','proszek do pieczenia','cukier puder','budyń'],
      category: "ciasta",
      ingredients: ['½ margaryny'
        ,'szklanka wody'
        ,'1 szklanka mąki pszennej'
        ,'5 jaj'
        ,'1 łyżeczka proszku do pieczenia'
        ,'Masa:'
        ,'1 margaryna'
        ,'1 szklanka cukru pudru'
        ,'1 ugotowany budyń'
        ,'aromat'
        ],
    },
    {
      id: 87,
      title: "Kawowy kopiec",
      description: ['<b>Uwaga: Przygotowanie nadzienia wymaga dwóch dni!</b>','Na 2 dni przed przystąpieniem szać śmietanę z ziarnami kawy. zamknąć w szczelnym pojemniku na żywność i wstawić do lodówki, by śmietana przeszła aromatem.','Przygotować ciasto z polowy składników: utrzeć 2 jajka z 75g cukru. Przesiać na jajeczną ma sc 60 g mąki pszennej, 20 g mąki ziemniaczanej i 20 g kakao. Dokładnie wymieszać Ciasto przelać do tortownicy (r. 28 cm) o dnie wyłożonym papierem do pieczenia i wstawić do gorącego piekarnika.','<b>Temperatura pieczenia:</b> piekarnik elektryczny-200 °C, z termoobiegiem-180°C, gazowy - stopień 3 Czas pieczenia: ok. 12 minut','W trakcie pieczenia się 1. porcji 3 biszkoptu przygotować ciasto z pozostałych Wyjąć 1. biszkopt z piekarnika, a po 10 minutach z formy Odkleić papier i pozostawić biszkopt do ostygnięcia. Upiec 2. biszkopt i wyjąć po 10 minutach z formy. Odkleić papier i odstawić ciasto do ostygnięcia.','Wyłożyć miskę (r. 28 cm) folią spożywczą. Jeden z biszkoptowych krążków pokroić na 12-16 trójkątów i ułożyć je w misce.','Twaróg utrzeć z cukrem. Żelatynę rozpuścić w wodę (zob wskazówka na opakowaniu) i po odrobinie dodawać do twarogu Dodać czekoladowa posypka I wymieszać','Przelać przez sitko śmietany 6 z ziarnami kawy Ubić śmietanę i połączyć z twarogowa masa. Masc przełożyć do miski, nakryć 2. krążkiem ciasta i lekko przycisnąć Wstawić na 4 godziny do lodówki','Wyjąć kopiec z miski i usunąć folię. Kopiec udekorować wedle uznania, np. lukrem, polewą z białej czekolady lub kremem i ziarenkami kawy (z czekolady lub ziarenkami nasączonymi ze śmietany)'],
      ingCategory: ['jajka','cukier','mąka pszenna','mąka ziemniaczana','kakao','śmietana 36%','ziarna kawy','twaróg','żelatyna','czekolada'],
      category: "ciasta",
      ingredients: ['4 jaja'
        ,'150 g cukru '
        ,'120 g mąki pszennej'
        ,'40 g maki ziemniaczanej'
        ,'40 g kakao'
        ,'Nadzienie'
        ,'200 g śmietany 36%'
        ,'100 g całych ziarenek kawy'
        ,'500 g mielonego twarogu '
        ,'80 g cukru'
        ,'5 łyżeczek żelatyny'
        ,'50 g czekoladowej posypki'
        ],
      bakeTime: 12,
      temp: 200,
      makeTime: 3600,
      image: ["img/Dania/kopiec-kreta.jpg"],
    },
    {
      id: 88,
      title: "Masa do wafli I",
      description: ['Mleko z cukrem gotować na wolnym ogniu, gdy zacznie gęstnieć, dodać kokos lub orzechy, wymieszać i przestudzić, do chłodnej masy dodać roztopione masło, wymieszać i posmarować wafle.'],
      ingCategory: ['mleko','cukier kryształ','orzechy','masło','wafle'],
      category: "dodatki",
      ingredients: ['3 szklanki słodkiego mleka'
        ,'2 szklanki cukru kryształu'
        ,'1 szklanka kokosu lub mielonych orzechów'
        ,'1/2 kostki masła'
        ,'1 paczka wafli'
        ],
      makeTime: 20,
    },
    {
      id: 89,
      title: "Masa do wafli II",
      description: ['Mleko zagotować z cukrem, dodać kokos grubsza kratka), i gotować 10 min., ciągle mieszając. Masło utrzeć, dodając przestudzony kokos. Masę podzielić na 2 części. Galaretkę rozpuścić według przepisu','PRZEŁOŻENIE WAFLI: Wafel - marmolada - wafel - masa - biszkopty - masa -  tężejąca galaretka – wafel - marmolada - wafel'],
      ingCategory: ['wafle','cukier kryształ','kokos','masło','mleko','marmolada','galaretka','biszkopty'],
      category: "dodatki",
      ingredients: ['1 paczka wafli (kwadratowe, grubsza kratka)'
        ,'3 łyżki cukru kryształu'
        ,'10 dag kokosu'
        ,'1 kostka masła'
        ,'1/2 szklanki mleka'
        ,'1 mniejszy słoik marmolady'
        ,'1 galaretka'
        ,'1 paczka okrągłych biszkoptów'
        ],
      makeTime: 20,
    },
    {
      id: 90,
      title: "Masa do wafli II",
      description: ['Mleko zagotować z cukrem, dodać orzechy, wymieszać. Masło utrzeć, dodając przestudzoną masę orzechową.','PRZEŁOŻENIE WAFLI: Wafel - marmolada - wafel - masa - biszkopty - masa - wafel - marmolada - wafel.'],
      ingCategory: ['wafle','cukier puder','orzechy','masło','mleko','marmolada','biszkopty'],
      category: "dodatki",
      ingredients: ['1 paczka wafli (kwadratowe, grubsza kratka)'
        ,'1 paczka wafli (kwadratowe, grubsza kratka)'
        ,'25 dag orzechów mielonych'
        ,'1 kostka masła'
        ,'1 szklanki mleka'
        ,'3/4 szklanki cukru pudru'
        ,'marmolada'
        ,'1 paczka okrągłych biszkoptów'
        ],
      makeTime: 20,
    },
    {
      id: 91,
      title: "Mleczna kanapka",
      description: ['Białka ubić na sztywną pianę, dodać pod koniec ubijania cukier, a następnie żółtka. miksować. Dodać olej i dalej miksować. Mąkę przesiać, wymieszać z proszkiem do pieczenia, kakao, wymieszać delikatnie do masy jajecznej.','Ciasto wyłożyć do wysmarowanej masłem i bułką tartą formy o wymiarze 20 x 35 cm. Piec około 20 - 25 minut w temp. 170℃, do tzw. “suchego patyczka”.','<b>KREM:</b> Mleko zagotować z cukrem i ekstraktem waniliowym. Ostudzić. Masło utrzeć; powoli dodawać do niego wystudzone mleko, dalej ucierając. Wsypać przesiane mleko w proszku i ucierać do gładkości.','Ostudzony biszkopt przekroić wzdłuż, przełożyć kremem. Przechowywać w lodówce.'],
      ingCategory: ['jajka','cukier','mąka ziemniaczana','mąka pszenna','proszek do pieczenia','kakao','olej','mleko','mleko w proszku','masło','ekstrakt waniliowy'],
      category: "ciasta",
      ingredients: ['6 jajek'
        ,'½ szklanki cukru'
        ,'½ szklanki mąki ziemniaczanej'
        ,'½ mąki pszennej'
        ,'1 łyżeczka proszku do pieczenia'
        ,'3 łyżki kakao'
        ,'2 łyżki oleju'
        ,'KREM'
        ,'½ szklanki mleka'
        ,'2 szklanki mleka w proszku'
        ,'½ szklanki cukru'
        ,'300g masła'
        ,'2 łyżki ekstraktu waniliowego'
        ],
      bakeTime: 25,
      temp: 170,
      makeTime: 55,
    },
    {
      id: 92,
      title: "Murzynek",
      description: ['Wodę, margarynę, cukier oraz kakao zagotować. Następnie połączyć z resztą składników.'],
      ingCategory: ['woda','margaryna','cukier','kakao','olejek','jajka','mąka pszenna','proszek do pieczenia'],
      category: "ciasta",
      ingredients: ['6 łyżek wody'
        ,'1 margaryna'
        ,'⅕ szklanki cukru'
        ,'3 łyżki kakao'
        ,'olejek'
        ,'4 jajka (białka ubić)'
        ,'1,5 szklanki mąki '
        ,'2 łyżeczki proszku do pieczenia'
        ],
      temp: 180,
      makeTime: 55,
    },
    {
      id: 93,
      title: "Nadziewane rogaliki",
      description: ['Mąkę i margarynę poszatkować nożem. Dodać rozpuszczone w letnim mleku drożdże, żółtka, cukier waniliowy i sól.','Zagniecione ciasto podzielić na równe 4 części. Każdą z tych części rozwałkować i podzielić na mniejsze trójkąty. Na każdy kawałek nanieść dżem i zwinąć na kształt rogalika.','Wierzch posmarować białkiem, posypać wiórkami i cukrem. Ułożyć na posmarowanej tłuszczem blaszce i piec w piekarniku w tem. ok. 200℃ do zarumienienia.'],
      ingCategory: ['drożdże','margaryna','mąka pszenna','jajka','cukier waniliowy','sól','cukier','mleko','owoce','dżem'],
      category: "ciasta",
      ingredients: ['5 dag drożdży' 
        ,'1 margaryna'
        ,'½ kg mąki'
        ,'2 jajka' 
        ,'2 cukry waniliowe'
        ,'szczypta soli'
        ,'trochę cukru'
        ,'¼ szklanki mleka'
        ,'owoce, dżem lub ser'
        ],
      bakeTime: 15,
      temp: 200,
      makeTime: 30,
    },
    {
      id: 94,
      title: "Oponki",
      description: ['Ze wszystkich składników zagnieść ciasto. Wałkować na grubość ok 1 cm. Smażyć na dobrze rozgrzanym oleju.'],
      ingCategory: ['mąka pszenna','ser','cukier','jajka','śmietana','soda','proszek do pieczenia','ocet','olej'],
      category: "wypieki",
      ingredients: ['50 dag mąki pszennej'
        ,'50 dag sera zmielonego'
        ,'½ szklanki cukru'
        ,'3 jaja'
        ,'2 łyżki śmietany'
        ,'1 łyżeczka sody oczyszczonej'
        ,'1 łyżeczka proszku do pieczenia'
        ,'1 łyżka octu'
        ,'olej do smażenia'
        ],
    },
    {
      id: 95,
      title: "Orzechowe ciastka",
      description: ['Pierwsze składniki. Gotową masę wyłożyć na blachę.','Drugie składniki usmażyć na patelni i ciepłe wyłożyć na placek posmarowany marmoladą.','Piec 20-25 minut w tem. 220℃ . Ciepłe  pokroić w kwadraty i jeszcze na pół.'],
      ingCategory: ['margaryna','cukier','jajka','cukier waniliowy','mąka pszenna','proszek do pieczenia','orzechy','cukier','marmolada','woda'],
      category: "ciastka",
      ingredients: [
        ,'pierwsze składniki'
        ,'½ margaryny '
        ,'15 dag cukru'
        ,'1 całe jajko i 1 żółtko'
        ,'1 cukier waniliowy'
        ,'35 - 40 dag mąki pszennej'
        ,'2 łyżeczki proszku do pieczenia'
        ,'drugie składniki'
        ,'20 dag orzechów mielonych'
        ,'15 dag cukru, marmolada'
        ,'12,5 dag margaryny'
        ,'parę łyżek wody'
        ],
      bakeTime: 25,
      temp: 220,
      makeTime: 45,
    },
    {
      id: 96,
      title: "Orzechowe ciasto",
      description: ['<b>CIASTO</b>: nagrzać piekarnik do 160 st.C. W salaterce wymieszać mąkę i cukier puder, wsypać do masła i ucierać do lekko sypkiej konsystencji. Nałożyć kruche ciasto do kwadratowej formy (20 cm) i piec przez 20 minut.','<b>MASA</b>: ubić jaja z cukrem. Razem połączyć mąkę. proszek i sól, stopniowo dodawać do masy jajecznej, wymieszać. Dodać zapach, orzechy i wiórka kokosowe. Posypać uprzednio upieczone kruche ciasto przygotowaną, bakaliową masą i włożyć do piekarnika na 30-35 minut.'],
      ingCategory: ['mąka pszenna','masło','cukier puder','brązowy cukier','jajka','proszek do pieczenia','ekstrakt waniliowy','orzechy','wiórki kokosowe'],
      category: "ciasta",
      ingredients: ['1 szklanka mąki'
        ,'1/2 kostki masła' 
        ,'2 łyżki cukru pudru'
        ,'MASA'
        ,'1 szklanka brązowego cukru '
        ,'2 jaja'
        ,'2 łyżki mąki' 
        ,'1 łyżeczka proszku do pieczenia'
        ,'szczypta soli'
        ,'zapach waniliowy '
        ,'1 szklanka posiekanych orzechów'
        ,'1 szklanka wiórek kokosowych '
        ],
      bakeTime: 35,
      temp: 160,
      makeTime: 60,
    },
    {
      id: 97,
      title: "Orzechowe ciasto z kremem kawowym",
      description: ['Białka ubić z cukrem i cukrem waniliowym. Przesiać mąkę i połączyć z mielonymi orzechami. Dodawać po łyżce do białkowej piany.','Wyłożyć Papierem do pieczenia głęboką, podłużną formę. Przelać do formy ciasto i wstawić do nagrzanego piekarnika.','Temperatura pieczenia: piekarnik elektryczny- 175°C, z termoobiegiem - 155°C, gazowy-stopień 2. Czas pieczenia: ok. 20 minut','Ciasto wyjąć z formy, a po ostygnięciu przekroić 2x w poziomie. Każdą z 3 warstw ciasta skropić równomiernie kawą.','Rozpuścić tłuszcz i ostudzić na tyle, by zyskał konsystencję gęstego kremu. Masło utrzeć na puszystą masę. Kontynuując ucieranie, dodawać do masta pozostale skladniki na krem.','Rozsmarować na spodniej warstwie ciasta 1/3 kremu, nakryć 2. warstwą, posmarować 1/3 kremu i nałożyć wierzchnią warstwę. Wierzch i boki ciasta posmarować pozostałym kremem. Udekorować czekoladową posypką i ziarenkami kawy. Wstawić na 1-2 godziny do lodówki.'],
      ingCategory: ['jajka','cukier','mąka pszenna','orzechy','kawa','tłuszcz kokosowy','masło','migdały'],
      category: "ciasta",
      ingredients: ['8 białek'
        ,'280 g drobnoziarnistego cukru'
        ,'2 op. cukru waniliowego' 
        ,'240g mąki pszennej'
        ,'240 g mielonych orzechów laskowych'
        ,'Oprócz tego' 
        ,'2 filiżanki zimnej, mocnej kawy'
        ,'Krem kawowy'
        ,'50 g tłuszczu kokosowego' 
        ,'300 g miękkiego masła'
        ,'200 g cukru'
        ,'100 ml zimnej, mocnej kawy '
        ,'50 g mielonych migdałów' 
        ,'Do dekoracji'
        ,'czekoladowa posypka '
        ,'czekoladowe ziarenka kawy'
        ],
      bakeTime: 20,
      temp: 175,
      makeTime: 60,
      image: ['img/Dania/ciasto-orzechy-kawa.jpg'],
    },
    {
      id: 98,
      title: "Pączki I",
      description: ['Drożdże rozpuścić w łyżce ciepłej wody, dodać szczyptę cukru, a następnie odstawić w ciepłe miejsce do wyrośnięcia.','Masło rozpuścić. Drożdże połączyć z mąką, masłem oraz taką ilością ciepłej wody, by ciasto było gładkie i jednolite; odstawić je do wyrośnięcia.','Olej rozgrzać w głębokim rondlu, formować niewielkie pączki, do każdego wkładając niewielką ilość konfitury porzeczkowej i smażyć je po obu stronach. ','Cukier rozpuścić w 2-3 szklankach wody, dodać sok z cytryny; zagotować, by powstał gęsty syrop. Pączki po wyjęciu z tłuszczu moczyć przez chwilę w chłodnym syropie i podawać gorące z sokiem żurawinowym.'],
      ingCategory: ['mąka pszenna','cukier','drożdże','masło','sok z cytryny','olej','konfitura'],
      category: "wypieki",
      ingredients: ['3 szklanki mąki'
        ,'3 szklanki cukru'
        ,'2 dag drożdży'
        ,'2 łyżki masła'
        ,'1 łyżka soku z cytryny'
        ,'olej do smażenia'
        ,'5 dag konfitury porzeczkowej'
        ],
    },
    {
      id: 99,
      title: "Pączki II",
      description: ['Żółtka utrzeć z drożdżami. Dodać rozpuszczoną i ostudzoną margarynę, cukier i wymieszać. Do tej mieszaniny dodać na przemian mąkę i mleko, ubijać. ciasto rośnie przy ubijaniu. ','Kłaść ciasto łyżeczką na rozgrzany olej i smażyć pączki z obu stron.  Na pączek - łyżeczka ciasta. Gorące pączki odsączyć z tłuszczu i posypać cukrem pudrem.'],
      ingCategory: ['mąka pszenna','jajka','cukier','margaryna','mleko','ocet','olej','cukier puder'],
      category: "wypieki",
      ingredients: ['5 szklanek mąki '
        ,'5-6 żółtek'
        ,'10 dag drożdży'
        ,'13 dag margaryny'
        ,'½ szklanki cukru'
        ,'2 szklanki mleka'
        ,'łyżka octu lub alkoholu'
        ,'1 kg tłuszczu do smażenia'
        ,'cukier puder do posypania'
        ],
    },
    {
      id: 100,
      title: "Pierniki",
      description: ['Połączyć margarynę, masło, cukier, następnie dodać miód, przyprawę do pierników i podgrzać aż do roztopienia cukru, wystudzić i połączyć resztę składników. Na koniec odłożyć w zimne miejsce na 3 godziny, żeby dobrze się wałkowało.'],
      ingCategory: ['mąka pszenna','cukier','margaryna','masło','śmietana','proszek do pieczenia','kakao','miód','przyprawa korzenna'],
      category: "wypieki",
      ingredients: ['75 dag mąki'
        ,'25 dag cukru'
        ,'3 jajka'
        ,'25 dag margaryny + masło, czyli pół kostki margaryny + ½ kostki masła'
        ,'1 śmietana w kubeczku (mała)'
        ,'½ proszku do pieczenia (dużego)'
        ,'5 dag gorzkiego kakao (½ szklanki)'
        ,'25 dag miodu'
        ,'1 przyprawa korzenna do pierników'
        ],
    },
    {
      id: 101,
      title: "Rolada",
      description: ['Ubić pianę z białek i cukru. Następnie dodawać żółtka, delikatnie wymieszać z mąką i proszkiem. Wylać ciasto na blachę wyłożoną pergaminem, piec ok. 15 min. w temp. 200 st.C Upieczoną oddzielić od pergaminu, położyć gorącą na ściereczce (wierzch rolady do ściereczki), zwinąć razem w rulon i tak wystudzić. ','KREM: żółtko, cukier, obie mąki - zmiksować z 1 szklanką mleka. Oddzielnie zagotować 2 szklanki mleka i miksując wlewać składniki, podgrzewać do zgęstnienia, wystudzić. Utrzeć masło i dodawać budyń, na koniec kakao i wiórka Z rolady usunąć ściereczkę, posmarować kremem i ponownie zwinąć w rulon, udekorować'],
      ingCategory: ['jajka','mąka pszenna','cukier','proszek do pieczenia','mleko','mąka ziemniaczana','masło','kakao','wiórki kokosowe'],
      category: "ciasta",
      ingredients: ['5 jaj'
        ,'1 szklanka mąki'
        ,'3/4 szklanki cukru '
        ,'2 płaskie łyżeczki proszku do pieczenia'
        ,'KREM'
        ,'3 szklanki mleka '
        ,'1 żółtko'
        ,'1/2 szklanki cukru'
        ,'1 łyżka mąki ziemniaczanej '
        ,'2 łyżki mąki'
        ,'25 dag masła '
        ,'2-3 łyżki kakao'
        ,'wiórki kokosowe'
        ],
      bakeTime: 15,
      temp: 200,
      makeTime: 45,
      image: ['img/Dania/ciasto-rolada.jpg'],
    },
    {
      id: 103,
      title: "Rolada z masą orzechową",
      description: ['Mąkę z proszkiem do pieczenia, margarynę posiekać nożem, dodać roztrzepane żółtka z cukrem i śmietaną, zagnieść ciasto.','MASA: Z białek i cukru ubić pianę na sztywno, dodać orzechy. Ciasto rozwałkować, posmarować masą orzechową, zrolować. Po upieczeniu posypać cukrem pudrem'],
      ingCategory: ['mąka pszenna','cukier puder','jajka','margaryna','kwaśna śmietana','proszek do pieczenia','orzechy','cukier kryształ'],
      category: "ciasta",
      ingredients: ['20 dag mąki pszennej'
        ,'10 dag cukru pudru'
        ,'2 żółtka'
        ,'10 dag margaryny'
        ,'2 łyżki kwaśnej śmietany'
        ,'1 łyżeczka proszku do pieczenia'
        ,'MASA ORZECHOWA '
        ,'10 dag orzechów mielonych'
        ,'2 białka'
        ,'5 dag cukru kryształu'
        ],
    },
    {
      id: 104,
      title: "Ser na murzynka",
      description: ['Wszystko razem dokładnie wymieszać.'],
      ingCategory: ['ser','cukier puder','jajka','proszek do pieczenia'],
      category: "dodatki",
      ingredients: ['½ kg sera'
        ,'½ cukru pudru'
        ,'2 jajka'
        ,'1 łyżeczka proszku do pieczenia'
        ],
    },
    {
      id: 105,
      title: "Szarlotka",
      description: ['Mąkę i margarynę posiekać nožem, dodać proszek do pieczenia. ','Cukier, cukier waniliowy roztrzepać z jajkami, połączyć z mąką, wyrobić ciasto i podzielić na 2 części.','MASA JABŁKOWA: Jabłka obrać, pokroić w plastry, dodać wodę, cukier, cukier waniliowy i kaszę mannę. Smażyć ok. 20 min., ciągle mieszając. Przestudzić.','Na brytfankę, wyłożoną papierem i posmarowaną tłuszczem, wyłożyć jedną część ciasta, przykrywając dno i boki brytfanki, następnie nałożyć masę jabłkową, przykryć drugą częścią ciasta. Piec ok. 1 godz. w temp. 180°C. Po upieczeniu posypać cukrem pudrem.'],
      ingCategory: ['mąka pszenna','cukier puder','margaryna','proszek do pieczenia','jajka','cukier waniliowy','jabłko','woda','cukier kryształ','cukier waniliowy','kasza manna'],
      category: "ciasta",
      ingredients: ['70 dag mąki pszennej'
        ,'1 szklanka cukru pudru'
        ,'1/2 kostki margaryny'
        ,'1 proszek do pieczenia'
        ,'5 jajek'
        ,'1 cukier waniliowy'
        ,'MASA JABŁKOWA'
        ,'1 i 1/2 kg jabłek antonówek lub szara reneta'
        ,'1/2 szklanki wody'
        ,'1 szklanka cukru kryształu'
        ,'1 cukier waniliowy'
        ,'1 łyżka kaszy manny'
        ],
      bakeTime: 60,
      temp: 180,
      makeTime: 100,
    },
    {
      id: 106,
      title: "Tarta z leśnymi owocami",
      description: ['Utrzeć masło z cukrem, aż będzie puszyste. Roztrzepać żółtko z ekstraktem waniliowym. Wymieszać mąkę, proszek do pieczenia i sól, połączyć z utartym masłem i żółtkami. ','Wylepić ciastem formę wysmarowaną masłem i obsypaną bułką tartą. Nakłuć ciasto widelcem. Zawinąć w folię. Włożyć do lodówki na 30 minut. ','Piec w temp. 180°C, aż powierzchnia ciasta będzie sucha, ok. 20 minut. Ostudzić na podstawce.','Śmietanę ubić na sztywno. Mascarpone wymieszać z cukrem pudrem i cukrem waniliowym. Do masy serowej dodawać powoli i stopniowo ubitą śmietanę, delikatnie mieszając. ','Krem nałożyć na wystudzone ciasto. Na wierzchu ułożyć owoce. W małym naczyniu wymieszać dżem z łyżką wody i włożyć do mikrofalówki na 40 sekund, aby się rozpuściło. Nałożyć dżem za pomocą pędzla na owoce. ','Przed podaniem zostawić tartę na 45 minut w temperaturze pokojowej.'],
      ingCategory: ['jeżyny','maliny','jagody','dżem','mąka pszenna','cukier puder','jajka','proszek do pieczenia','sól','ekstrakt waniliowy','śmietana 30%','mascarpone','cukier waniliowy'],
      category: "ciasta",
      ingredients: [
        ,'170 g jeżyn '
        ,'170 g malin' 
        ,'170 g jagód '
        ,'1/4  szklanki dżemu malinowego bez pestek'
        ,'Ciasto:' 
        ,'250g mąki '
        ,'100 g masła '
        ,'3 łyżki cukru pudru '
        ,'żółtko' 
        ,'½ łyżeczki proszku do pieczenia' 
        ,'szczypta soli '
        ,'½ łyżeczki ekstraktu waniliowego'
        ,'Krem:' 
        ,'250 ml schłodzonej śmietany kremówki (30%) '
        ,'250 g mascarpone '
        ,'łyżka cukru pudru '
        ,'opakowanie cukru waniliowego'
        ],
      bakeTime: 20,
      temp: 180,
      makeTime: 120,
    },
    {
      id: 107,
      title: "Tarta z truskawkami",
      description: ['Truskawki odszypułkować, umyć. Z mąki, masła, cukru i mleka szybko zagnieść ciasto. Uformować kulę, zawinąć w folię i włożyć na godzinę do lodówki.','Po Schłodzeniu ciasto cienko rozwałkować wylepić nim nasmarowaną masłem formę do tarty. Ponakłuwać widelcem. Wstawić do piekarnika nagrzanego do temp 200°C na ok. 20 minut. Ostudzić.','Śmietanę ubić na sztywno z cukrem pudrem. Dodać mascarpone, ekstrakt waniliowy wymieszać do uzyskania jednolitej, puszystej masy. Posmarować przygotowanym kremem upieczone ciasto, wyrównać. Na wierzchu ułożyć truskawki i polać tężejącą galaretką (przygotowaną według instrukcji na opakowaniu), Wstawić do lodówki.'],
      ingCategory: ['truskawki','mąka pszenna','masło','cukier','mleko','sól','galaretka','śmietana 30%','mascarpone','cukier puder','ekstrakt waniliowy'],
      category: "ciasta",
      ingredients: ['500 g truskawek' 
        ,'250 g mąki pszennej' 
        ,'100 g masła' 
        ,'2 łyżki cukru '
        ,'2 łyżki mleka '
        ,'szczypta soli '
        ,'galaretka truskawkowa' 
        ,'szklanka śmietany kremówki (30%) '
        ,'250 g mascarpone '
        ,'łyżka cukru pudru' 
        ,'łyżeczka ekstraktu waniliowego'
        ],
      bakeTime: 20,
      temp: 200,
      makeTime: 45,
    },
    {
      id: 108,
      title: "Tiramisu cytrynowe",
      description: ['Wymieszać sok z cytryny, likier, cukier i herbatę. Mascarpone zmiksować z połową cukru pudru, kremem cytrynowym (można użyć gotowego lub przygotować samemu), żółtkami i skórką z cytryny. Śmietanę ubić z pozostałym cukrem. Białka ubić na sztywną pianę. Delikatnie połączyć ubitą śmietanę i pianę z białek z masą serową. ','W naczyniu (lub pucharkach) ułożyć ściśle warstwę biszkoptów namoczonych w naparze z likierem (można także dodatkowo polać je syropem) i wyłożyć połowę kremu z mascarpone. Położyć kolejną warstwę namoczonych biszkoptów i krem. Przykryć szczelnie i zostawić na noc w lodówce. Przed podaniem udekorować na przykład skórką z cytryny lub świeżymi malinami czy jagodami.'],
      ingCategory: ['cytryna','likier cytrynowy','herbata','cukier','cukier puder','krem cytrynowy','śmietana 30%','mascarpone','biszkopty'],
      category: "ciasta",
      ingredients: ['skórka z cytryny i sok z ½ cytryny' 
        ,'100 ml likieru cytrynowego '
        ,'2 łyżeczki cukru '
        ,'ok. ½ szklanki słabego naparu z zielonej herbaty cytrynowej '
        ,'110 g cukru pudru '
        ,'4-5 łyżek gotowego kremu cytrynowego' 
        ,'2 duże jajka '
        ,'szklanka śmietany kremówki (30%) '
        ,'250 g mascarpone'
        ,'opakowanie biszkoptów'
        ],
        image: ['img/Dania/tiramisu-cytrynowe.jpg'],
    },
    {
      id: 109,
      title: "Torcik czekoladowy",
      description: ['Nagrzać piekarnik do 190 st.C. ','Połączyć mąkę, proszek do pieczenia i sól. Ubijać jaja i stopniowo dodawać cukier, na przemian z sokiem z cytryny. Podgrzać mleko, nie dopuszczając do wrzenia. Do ubitych jajek dodawać suche składniki, wymieszać. Podgrzane mleko wlać do ciasta, połączyć. Wylać do wysmarowanej masłem tortownicy o średnicy 20 cm. Piec 25 min. ','Wyjąć z piekarnika odstawić do wystygnięcia, przekroić na trzy placki.','PIANKA: roztopić czekoladę, wsypać cukier, wymieszać, ostudzić. Ubić żółtka i dodać do czekolady. Ubić śmietankę, połączyć z masą czekoladową, a na koniec wymieszać ze sztywną pianą. Pianką przełożyć trzy placki. Udekorować wierzch','Tort włożyć do lodówki.'],
      ingCategory: ['cukier','mąka pszenna','proszek do pieczenia','sól','jajka','mleko','sok z cytryny','śmietana 30%','czekolada','woda'],
      category: "ciasta",
      ingredients: ['1 szklanka cukru'
        ,'1 szklanka mąki'
        ,'1 łyżeczka proszku do pieczenia '
        ,'1/4 łyżeczki soli'
        ,'3 jaja'
        ,'6 łyżek mleka'
        ,'2 łyżeczki soku z cytryny'
        ,'PIANKA'
        ,'1,5 szklanki śmietanki 30%'
        ,'25 dag mlecznej czekolady'
        ,'3 łyżki wody' 
        ,'4 jaja'
        ,'1/4 szklanki cukru'
        ],
      bakeTime: 25,
      temp: 190,
      makeTime: 60,
      image: ['img/Dania/torcik-czekoladowy.jpg'],
    },
    {
      id: 110,
      title: "Torcik czekoladowy ze śmietaną",
      description: ['Masło utrzeć z cukrem. Ucierając, dodawać po jednym jajku. Rozpuścić czekoladę, wymieszać z migdałami i kawą i dodać do maślanej masy. Przesiać na wierzch mąkę z proszkiem do pieczenia i dokładnie wymieszać.','Wyłożyć dno tortownicy (śr. ok. 26 cm) papierem do pieczenia, Przelać do tortownicy ciasto i wstawić do nagrzanego piekarnika.','Temperatura pieczenia: piekarnik elektryczny - 175°C, z termoobiegiem - 150°C, gazowy - stopień 2. Czas pieczenia: ok. 35 minut','Wymieszać wino z likierem i skropić mieszanką jeszcze gorące ciasto. Odstawić do ostygnięcia.','Ubić śmietanę z cukrem i nato Żyć na ciasto. Zeskrobać wiórki z czekolady, Śmietanę posypać wiórkami czekolady i kakao.'],
      ingCategory: ['margaryna','cukier','jajka','czekolada','kawa','migdały','mąka pszenna','proszek do pieczenia','białe wino','likier kawowy','śmietana 36%','kakao'],
      category: "ciasta",
      ingredients: ['120 g masła (lub margaryny)'
        ,'150 g cukru'
        ,'3 jajka'
        ,'100g czekolady deserowej'
        ,'130 g mielonych migdałów'
        ,'1 łyżka mocnej kawy'
        ,'40g mąki pszennej '
        ,'łyżeczka proszku do pieczenia'
        ,'Wierzch:'
        ,'125 ml białego wina'
        ,'3 łyżki likieru kawowego'
        ,'250 g śmietany 36% '
        ,'1 łyżka cukru'
        ,'50 g czekolady '
        ,'1 łyżeczka kakao'
        ],
      bakeTime: 35,
      temp: 175,
      makeTime: 60,
    },
    {
      id: 111,
      title: "Torcik tiramisu",
      description: ['Biszkopty ułożyć na dnie tortownicy o śr. ok. 26 cm. Wymieszać likier z espresso i skropić mieszanką biszkopty,','Połamać czekoladę na kawałki i - stale mieszając - rozpuścić w gorącej kąpieli wodnej. Płynną polewę wymieszać z  cukrem, serkiem mascarpone, twarogiem i winem - najlepiej przy użyciu ręcznego miksera.','Żelatynę rozpuścić w wodzie (zob. wskazówki na opakowaniu), wymieszać z kilkoma łyżkami masy, a następnie z pozostałą masą.','Masę przełożyć do tortownicy. Wygładzić patką powierzchnię masy. Wstawić na 2-3 godziny do lodówki. Przed podaniem oprószyć przesianym kakao.'],
      ingCategory: ['biszkopty','likier kawowy','kawa','czekolada','cukier','mascarpone','twaróg','słodkie wino','żelatyna','kakao'],
      category: "ciasta",
      ingredients: ['Spód:'
        ,'150 g podłużnych biszkoptów'
        ,'50 ml kawowego likieru '
        ,'100 ml zimnego espresso'
        ,'Krem:'
        ,'150g białej czekolady' 
        ,'40 g cukru'
        ,'400 g serka mascarpone '
        ,'200 g mielonego twarogu'
        ,'50 ml słodkiego wina'
        ,'4 łyżeczki żelatyny'
        ,'Do dekoracji: '
        ,'2 łyżki kakao'
        ],
    },
    {
      id: 112,
      title: "Tort brzoskwiniowo-bezowy",
      description: ['Masło utrzeć z cukrem, skórka cytryny i solą. Dodać kolejno zöltka jajko. Mąkę przesiać z proszkiem do pieczenia i razem z mlekiem dodać do masy. Ciasto przelać do tortownicy (it. 26 cm) wyłożonej papierem do pieczenia i wstawić do gorącego piekarnika.','Temperatura pieczenia piekarnik elektryczny - 175 °C, z termoobiegiem - 160 C, gazowy stopień 2. Czas pieczenia: 25-30 minut','Białka ubić z sokiem z cytryny sola. Ubijając, powoli dosypywać cukier puder. Ubijać, aż masa stanie się linią. Wyjąć ciasto z pie- karnika, posmarować masa i posypać migdałowymi płatkami. Piec ok 10 minut w tej samej temperaturze co poprzednio.','Ciasto wyjąć po 10 minutach wlać ciasto do ostygnięcia. W tym czasie uprażyć na patelni bez dodatku tłuszczu pozostałe platki migdalow. Osączyć owoce z puszki, 2/3 owoców pokroić w kostkę, a pozostałe w półksiężyce.','Żelatynę rozpuścić w wodzie (zob. wskazówki na opakowaniu). Twaróg utrzeć z jogurtem, cukrem, skórką startą z 1/2 cytryny oraz sokiem z cytryny i pomarańczy. Żelatynę wymieszać z kilkoma łyżkami twarogowego kremu. a następnie z pozostałym kremem.. Ubić śmietanę i połączyć z kremem, gdy tylko ten zacznie tężeć. Dodać kostki owoców.','Ciasto otoczyć obręczą tortów 5 nicy i rozsmarować krem Wstawić na 3-4 godziny do lodówki Zdjąć obręcz. Tort ozdobić płatkami migdałów, brzoskwiniami, ornamentami i melisą.'],
      ingCategory: ['masło','cukier','cytryna','jajka','mąka pszenna','sól','proszek do pieczenia','mleko','cukier puder','sok z cytryny','skórka z cytryny','migdały','brzoskwinie','żelatyna','twaróg','jogurt naturalny','pomarańcza','śmietana 36%'],
      category: "ciasta",
      ingredients: ['100 g masła'
        ,'100 g cukru '
        ,'skórka starta z 1/2 cytryny' 
        ,'szczypta soli'
        ,'1 jajko'
        ,'2 żółtka'
        ,'150g mąki pszennej '
        ,'2 łyżeczki proszku do pieczenia'
        ,'2 łyżki mleka'
        ,'Masa bezowa:' 
        ,'2 białka'
        ,'1/2 łyżeczki soku z cytryny'
        ,'szczypta soli'
        ,'125 g cukru pudru '
        ,'50 g migdałów w płatkach'
        ,'Krem:'
        ,'1 duża puszka brzoskwiń'
        ,'8 łyżeczek żelatyny '
        ,'400 g mielonego twarogu'
        ,'250 g jogurtu naturalnego' 
        ,'100 g cukru'
        ,'1 mała cytryna'
        ,'sok z 1 pomarańczy'
        ,'300 g śmietany 36%'
        ,'Do dekoracji'
        ,'50 g migdałów w płatkach'
        ,'czekoladowe ornamenty listki melisy'
        ],
      bakeTime: 30,
      temp: 175,
      makeTime: 100,
      image: ["img/Dania/tort-brzoskwiniowo-bezowy.jpg"],
    },
    {
      id: 113,
      title: "Tort czekoladowy",
      description: ['Masło utrzeć na puszystą masę. 1 Kontynuując ucieranie, dodać cukier, sól, skórkę cytryny i jajka (jedno po drugim). Mąkę połączyć z proszkiem do pieczenia i kakao, przesiać i na przemian z mlekiem dodawać do pozostałych składników ciasta.','Wysmarować tłuszczem tortownicę (śr. ok. 26 cm) i przełożyć do niej ciasto. Wstawić do nagrzanego piekarnika.','Temperatura pieczenia: piekarnik elektryczny - 180 °C, z termoobiegiem 160°C, gazowy stopień 2-3. Czas pieczenia: 35-45 minut','Ciasto po upieczeniu pozostawić do całkowitego ostygnięcia, po czym przekroić w poziomie na pół. Krem do pieczywa utrzeć z masłem na gładką masę. Rozsmarować na dolnym krążku ciasta 2/3 kremu. Nakryć wierzchem ciasta i rozsmarować pozostały krem. Oprószyć przesianym kakao.'],
      ingCategory: ['masło','cukier','sól','skórka z cytryny','jajka','mąka pszenna','proszek do pieczenia','kakao','mleko','nutella'],
      category: "ciasta",
      ingredients: ['150 g miękkiego masła'
        ,'150 g cukru'
        ,'szczypta soli'
        ,'skórka starta z 1/2 cytryny'
        ,'3 jajka'
        ,'250 g mąki pszennej'
        ,'1 op. proszku do pieczenia'
        ,'4 łyżki kakao' 
        ,'65 ml mleka'
        ,'Krem:'
        ,'250 g czekoladowo-orzechowego kremu do pieczywa'
        ,'100 g miękkiego masła'
        ,'Oprócz tego: '
        ,'margaryna do tortownicy'
        ,'Do posypania:' 
        ,'1 łyżeczka kakao'
        ],
      bakeTime: 45,
      temp: 180,
      makeTime: 65,
      image: ["img/Dania/tort-czekoladowy.jpg"],
    },
    {
      id: 114,
      title: "Tort z marchewki",
      description: ['Migdały oraz orzechy zalać wrzątkiem, a po 3 minutach wyjąć i obrać ze skóry. Posiekać je niezbyt drobno. Rodzynki przełożyć na sitko także przelać bardzo gorącą wodą, pozostawić je w całości. Margarynę utrzeć z cukrem tak, by powstała jasnożółta, puszysta masa. Nie przerywając ucierania, dodawać po jednym jajku.','Mąkę wymieszać z sodą oraz cynamonem, imbirem, goździkami i kardamonem. Tę mieszankę dodać do ciasta i wszystkie składniki połączyć ze sobą. Marchew obrać ze skóry i zetrzeć na tarce o bardzo drobnych otworach, a następnie dodać do ciasta i dokładnie wymieszać. Do masy wrzucić bakalie równomiernie rozprowadzić je w cieście. ','Formę do pieczenia wysmarować masłem, przelać do niej masę piec około godziny w temperaturze 200°C Podawać z herbatą z dzikiej wiśni.'],
      ingCategory: ['mąka pszenna','margaryna','jajka','cukier','marchew','migdały','orzechy','rodzynki','cynamon','imbir','goździki','kardamon','soda','masło'],
      category: "ciasta",
      ingredients: ['1 kg mąki'
        ,'25 dag margaryny'
        ,'2 jajka'
        ,'2 szklanki cukru'
        ,'1/2 kg młodej marchewki'
        ,'po 10 dag rodzynek, migdałów, orzechów'
        ,'po 1 łyżeczce cynamonu, imbiru, goździków i ,kardamonu'
        ,'1 i 1/2 łyżeczki sody oczyszczonej '
        ,'masło do wysmarowania formy'
        ],
      bakeTime: 60,
      temp: 200,
      makeTime: 80,
    },
    {
      id: 115,
      title: "Tort stracciatella z bananami",
      description: ['Masło utrzeć z cukrem na puszystą masę. Dodać żółtka i dokładnie wymieszać. Przesiać na pół mąkę z proszkiem do pieczenia i m przemian z mlekiem dodawać do maślanej masy. Białka ubić na sztywną pianę połączyć z masą.','Ciasto przelać do tortownicy (r. 26 cm) wyłożonej papierem do pieczenia i wstawić do nagrzanego piekarnika.','Temperatura pieczenia; piekarnik elektryczny - 180°C, z termoobiegiem - 160°C, gazowy - stopień 3. Czas pieczenia: ok. 30 minut','Ciasto wyjąć po ok. 10 minutach formy odkleić papier. Posty pięciu przekroić ciasto w ziomie','Ubić śmietanę z cukrem wita 4 wiz do lodówki. Ugotować budyń wy wskazówek na opakowaniu, z tą różnicą, że zamiast 500 ml mleka ury 500 ml soku bananowego. Budy odstawić do ostygnięcia (często mieszać, by nie utworzył się kożuch)','Obrać banany, pokroić na pla 5 sterki gr. 3 cm, skropić sokiem z cytryny i ułożyć na spodzie ciasta. Polączyć bita śmietanę z ostudzo nym budyniem i czekoladową posypka Rozsmarować na cieście 3/4 kremu.','Nalożyć górna część ciasta. 6 Wierzch i boki tortu posmarować resztą kremu. Tort wstawić na 3 godziny do lodówki. Przed podaniem udekorować plasterkami suszonych bananów'],
      ingCategory: ['masło','cukier','jajka','mąka pszenna','proszek do pieczenia','mleko','śmietana 36%','budyń','sok bananowy','banan','sok z cytryny'],
      category: "ciasta",
      ingredients: ['150 g miękkiego masła'
        ,'125 g cukru'
        ,'3 jaja'
        ,'200 g mąki pszennej'
        ,'1/2 op. proszku do pieczenia'
        ,'100 ml mleka'
        ,'Krem'
        ,'500 ml śmietany 36%'
        ,'2 łyżki cukru'
        ,'1 op. budyniu waniliowego '
        ,'500 ml soku bananowego'
        ,'ok. 1 kg bananów'
        ,'2 łyżki soku z cytryny '
        ,'150 g czekoladowej posypki'
        ,'Do dekoracji: '
        ,'plasterki suszonych bananów'
        ],
      bakeTime: 30,
      temp: 180,
      makeTime: 100,
      image: ["img/Dania/straciatella-banany.jpg"],
    },
    {
      id: 116,
      title: "Leniwe pierogi",
      description: ['Ser i ziemniaki przepuścić przez maszynkę. Dodać jaja oraz obie mąki. ','Ciasto wyrobić ręką lub drewnianą łyżką. Uformować wałek o średnicy 3 cm: pokroić w ukośne romby. ','Pokrojone pierogi wrzucać na osoloną, wrzącą wodę. Gdy wypłyną wyjąć łyżką cedzakową. ','Polać zrumienioną na maśle bułką tartą.'],
      ingCategory: ['twaróg','ziemniaki','jajka','mąka ziemniaczana','mąka pszenna','masło','bułka tarta','sól'],
      category: "obiad",
      ingredients: ['50 dag twarogu'
        ,'25 dag ugotowanych ziemniaków '
        ,'2 jaja'
        ,'1,5 łyżki mąki ziemniaczanej'
        ,'8 łyżek mąki pszennej '
        ,'5 łyżek masła'
        ,'bułka tarta'
        ,'sól'
        ],
      makeTime: 30,
      image: ["img/Dania/babka-laciata.jpg"],
    },
    {
      id: 117,
      title: 'Mus czekoladowy z kaszą jaglaną',
      description: ['Kaszę przepłukać, zalać 2 szklankami wrzątku, dodać szczyptę soli, gotować 10 min. Owinąć ręcznikiem, odstawić na 30 min, Czekoladę roztopić w kąpieli wodnej.','Kaszę przełożyć do blendera, wlać mleko, zmiksować. Dodać kakao, masło orzechowe, rozpuszczoną czekoladę, zmielone orzechy, miód i sok z cytryny, ponownie zmiksować. Doprawić miodem, znów zmiksować. Mus nałożyć do pucharków, schłodzić w lodówce.'],
      ingCategory: ['kasza jaglana','masło orzechowe','mleko','orzechy','miód','cytryna','kakao','gorzka czekolada','sól'],
      category: "desery i lody",
      ingredients: ['szklanka kaszy jaglanej '
        ,'tabliczka gorzkiej czekolady'
        ,'2-3 łyżki masła orzechowego'
        ,'3 łyżki kakao'
        ,'3/4 szklanki mleka'
        ,'2 łyżki zmielonych orzechów '
        ,'2 łyżki miodu' 
        ,'1/2 cytryny' 
        ,'sól'
        ],
      makeTime: 50,
      image: ["img/Dania/mus-czekolada-kasza-jaglana.jpg"],
    },
    {
      id: 118,
      title: 'Lasagne z kurczaka',
      description: ['Przygotuj warzywa. Cebulę obierz, umyj i drobno pokrój w kostkę, czosnek obierz, a następnie przeciśnij przez praskę. Marchew obierz, umyj i zetrzyj na tarce o grubych oczkach','Do mięsa mielonego dodaj dwie szczypty soli i pieprzu, a następnie całość dokładnie wymieszaj','Rozgrzej 1 łyżke oleju w dużym garnku o grubym dnie. Dodaj cebulę i smaż ją, często mieszając do momentu aż się zeszkli, następnie dodaj czosnek i ponownie smaż na średnim ogniu ok. 1 minutę, cały czas mieszając. Po tym czasie dodaj startą marchewkę i smaż kolejne 3 minuty. Gdy warzywa się usmaża odłóż je na osobny talerz. W tym samym garnku rozgrzej ponownie 1 łyżkę oleju i usmaż mięso.','Do usmażonego mięsa dodaj wcześniej usmażone warzywa, przecier pomidorowy oraz bulion. Całość gotuj ok. 30 minut na średnim ogniu, często mieszając, aż sos zgęstnieje. Gdy sos będzie już gęsty dopraw go suszoną bazylią, solą oraz pieprzem do smaku.','W między czasie przygotuj sos beszamelowy. W drugim garnku roztop masło, dodaj mąkę i smaż ok 1 minuty intensywnie mieszając. Następnie wciąż mieszając wlej stopniowo mleko. Całość gotuj na średnim ogniu, często mieszając aż zgęstnieje. Gdy będzie jużgotowy dopraw go szczyptą gałki muszkatołowej, solą i pieprzem.','Piekarnik rozgrzej do 180&#176;C. Gdy piekarnik będzie się rozgrzewał, zacznij układać warstwy lasagne. Na dnie naczynia żaroodpornego rozprowadź odrobinę sosu beszamelowego, ułóż pierwszą warstwę makaronu, polej ją sosem mięsno-pomidorowym, rozprowadź sos beszamelowy i posyp odrobiną mozzarelli. Całość powtórz aż do wyczerpania składników. Ostatnią warstwą powinny być sosy i ser.','Tak przygotowaną lasagne piecz około 40 minut w piekarniku.'],
      ingCategory: ['cebula','czosnek','marchew','mięso mielone z drobiu','olej','przecier pomidorowy','bulion','bazylia','gałka muszkatołowa','sól','pieprz','masło','mąka pszenna','mleko','ser mozzarella','makaron lasagne'],
      category: "obiad",
      ingredients: ['1 duża cebula','3 ząbki czosnku','2 średnie marchewki','500g mięsa mielonego','2 łyżki oleju','500g przecieru pomidorowego','1/2 szklanki bulionu warzywnego','2 łyżeczki suszonej bazylii','sól, pieprz do smaku','2 łyżki masła','2 łyżki mąki pszennej','2 łyżki mleka','1 opakowanie makaronu do lasagne','150 sera mozzarella, tartego'],
      makeTime: 120,
      bakeTime: 40,
      temp: 180,
      portion: 4,
      diet: 'pescowegetariańska',
    },
    {
      id: 119,
      title: 'Proste naleśniki',
      description: ['Mąkę wsyp do miski, dodaj jajka, mleko, wodę i sól. Zmiksuj na gładkie ciasto. Dodaj roztopione masło lub olej roślinny i razem zmiksuj.'],
      ingCategory: ['mąka pszenna','jajka','mleko','woda','sól','cukier','olej','masło'],
      category: "obiad na słodko",
      ingredients: ['1 szklanka mąki','2 jajka','1 szklanka mleka','3/4 szklanki wody','szczypta soli','łyżeczka cukru','3 łyżki masła lub oleju roślinnego'],
      makeTime: 30,
      fav: true,
      portion: 3,
      diet: 'wegetariańska',
    },
    {
      id: 120,
      title: 'Placki ziemniaczane',
      description: ['Ziemniaki obrać i zetrzeć na tarce o małych oczkach bezpośrednio do większej i płaskiej miski. Zostawić je w misce bez mieszania, miskę delikatnie przechylić i odstawić na ok. 5 minut.','W między czasie odlewać zbierający się sok. Dodać mąkę, drobno startą cebulę, jajko oraz szczyptę soli','Rozgrzać patelnię, wlać olej. Masę ziemniaczaną dokładnie wymieszać i smażyć niewielkie porcje.'],
      ingCategory: ['ziemniaki','mąka pszenna','jajka','sól','olej','cebula'],
      category: "obiad",
      ingredients: ['1/2 kg ziemniaków','1/2 łyżki mąki pszennej','1/4 cebuli','1 jajko','sól','olej roślinny do smażenia'],
      makeTime: 40,
      portion: 4,
      diet: 'wegetariańska',
    },
    {
      id: 121,
      title: 'Owsianka czekoladowa ze smażonym bananem i gruszką',
      description: ['Gotujemy owsiankę na mleku roślinnym lub krowim. Autor stosuje 14 łyżek owsianki : 2 szkalnki mleka. Dodaje 1 małą kostkę czekolady.','2 banany oraz 2 gruszki kroję w plasterki i smażę na maśle. Można dodać odrobinę syropu klonowego.','Jak owsianka się ugotuje, przekładamy ją do miseczki, dodajemy banany, gruszki, orzechy i dodatką kostkę czekolady.'],
      ingCategory: ['owsianka','banan','gruszka','masło','orzechy','mleko','syrop klonowy','czekolada'],
      category: "śniadanie",
      ingredients: ['14 łyżek owsianki','2 szklanki mleka roślinnego lub krowiego','2 banany','2 gruszki','masło','odrobinka czekolady'],
      makeTime: 30,
      diet: 'wegetariańska',
      fav: true,
    },
    {
      id: 122,
      title: 'Placki tortilli',
      description: ['Makę przesiewamy, dodajemy sól i zalewamy gorącą wodą.','Dodajemy olej i mieszamy, a następnie zagniatamy ciasto i wyrabiamy je przez kilka minut.','Jeżeli potrzebujemy więcej niż 4 placki, możemy zrobić ciasto z podwójnej porcji składników.'],
      ingCategory: ['mąka pszenna','sól','woda','olej'],
      category: "dodatki",
      ingredients: ['1 szklanka mąki pszennej','130ml gorącej wody','1 łyżka oleju','szczypta soli'],
      makeTime: 30,
      portion: 4,
      diet: 'wegetariańska',
    },
];