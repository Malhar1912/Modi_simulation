import { ModiDocument } from '../types/modi';

export const MODI_DOCUMENTS: ModiDocument[] = [
  {
    id: 'MOD-0427',
    accessionNumber: 'PUN-PESH-REV-1774-0427',
    titleMarathi: 'मौजे कसबे पुणे प्रांत जुन्नर येथील जमाबंदी',
    titleEnglish: 'Pune & Junnar Revenue Assessment Register',
    genre: 'revenue',
    genreLabelMarathi: 'जमाबंदी · revenue register',
    genreLabelEnglish: 'revenue register',
    period: 'circa 1760–1790 (late Peshwa)',
    eraTag: 'Peshwekalin',
    eraYears: 'c. 1760–1790',
    archiveLocation: 'पुणे पुराभिलेखागार (Pune Archives · Peshwe Daftar)',
    rumalOrDaftarRef: 'रुमाल क्र. ४८ · दफ्तर जमाबंदी',
    scribeOrOfficer: 'गोपाळराव फडणीस (Gopalrao Phadnis, Head Accountant)',
    materialDetails: 'Handmade rag paper (सनई कागद) with soot & iron gall ink, faint fold lines, vermilion clerk mark',
    sealDescription: 'अंडाकृती मोर्तब (Peshwa Mortab Oval Approval Seal in red cinnabar ink)',
    sealSvgType: 'oval_peshwa_mortab',
    classificationNotes: 'Dated by paleographic cursive loops, rapid stroke connectivity, specific late Peshwa fiscal formulas, and presence of the Mortab seal impression.',
    f1Score: 0.92,
    datedByMethod: 'Dated by paleographic strokes, vocabulary era markers, and seal reference · F1 0.92',
    metrics: {
      cer: 7.2,
      wer: 11.8,
      wordsSegmented: 24,
      flaggedOov: 1,
      recognitionAccuracy: 92.8,
      linesDetected: 4,
    },
    transliteration: {
      fullDevanagari: 'मौजे कसबे पुणे प्रांत जुन्नर येथील सन सालची जमाबंदी. सदरहू गावचे इनाम व सरकारजमा जमीन मिळोन चावर अडीच. हुजूर यांचे सनदेवरून दुमाला करणेत आले मजकूर प्रमाणें.',
      modiExcerpt: '𑘦𑘻𑘕𑘹 𑘎𑘭𑘤𑘹 𑘢𑘳𑘜𑘹 𑘢𑘿𑘨𑘰𑘽𑘝 𑘕𑘳𑘡𑘿𑘡𑘨 𑘧𑘹𑘞𑘧𑘲𑘩 𑘭𑘡 𑘭𑘰𑘩𑘔𑘲 𑘕𑘦𑘰𑘤𑘽𑘟𑘲. 𑘭𑘟𑘨𑘜𑘴 𑘐𑘰𑘪𑘓𑘹 𑘂𑘡𑘰𑘦 𑘪 𑘭𑘨𑘎𑘰𑘨𑘕𑘦𑘰 𑘕𑘦𑘲𑘡 𑘦𑘲𑘯𑘻𑘡 𑘓𑘰𑘪𑘨 𑘀𑘚𑘲𑘓. 𑘜𑘳𑘕𑘳𑘨 𑘧𑘰𑘽𑘓𑘹 𑘭𑘡𑘟𑘹𑘪𑘨𑘴𑘡 𑘟𑘳𑘦𑘰𑘩𑘰 𑘎𑘨𑘜𑘹𑘝 𑘁𑘩𑘹 𑘦𑘕𑘎𑘳𑘨 𑘢𑘿𑘨𑘦𑘰𑘜𑘹𑘽.',
      englishTranslation: 'Revenue assessment for the current administrative year for the market town (Kasbe) of Pune in the Junnar province. The said village land, combining hereditary grants (Inam) and state taxable land, measures two and a half Chawars. Pursuant to the royal charter granted by the Huzur (Supreme Authority), it is hereby formally assigned as recorded herein.',
      words: [
        { id: 'w1', modiGlyph: '𑘦𑘻𑘕𑘹', devanagari: 'मौजे', confidence: 96, grammaticalCategory: 'Noun (Prefix)', meaningEnglish: 'Village / rural hamlet', boxCoordinates: { x: 30, y: 55, w: 45, h: 28 } },
        { id: 'w2', modiGlyph: '𑘎𑘭𑘤𑘹', devanagari: 'कसबे', confidence: 94, grammaticalCategory: 'Noun (Administrative)', meaningEnglish: 'Market township / sub-district headquarters', boxCoordinates: { x: 80, y: 55, w: 52, h: 28 } },
        { id: 'w3', modiGlyph: '𑘢𑘳𑘜𑘹', devanagari: 'पुणे', confidence: 98, grammaticalCategory: 'Proper Noun (Toponym)', meaningEnglish: 'Pune city / pargana', boxCoordinates: { x: 138, y: 55, w: 40, h: 28 } },
        { id: 'w4', modiGlyph: '𑘢𑘿𑘨𑘰𑘽𑘝', devanagari: 'प्रांत', confidence: 91, grammaticalCategory: 'Noun', meaningEnglish: 'Province / division', boxCoordinates: { x: 184, y: 55, w: 46, h: 28 } },
        { id: 'w5', modiGlyph: '𑘕𑘳𑘡𑘿𑘡𑘨', devanagari: 'जुन्नर', confidence: 95, grammaticalCategory: 'Proper Noun (Toponym)', meaningEnglish: 'Junnar historical province', boxCoordinates: { x: 236, y: 55, w: 50, h: 28 } },
        { id: 'w6', modiGlyph: '𑘧𑘹𑘞𑘧𑘲𑘩', devanagari: 'येथील', confidence: 89, grammaticalCategory: 'Adverb', meaningEnglish: 'Of this place / pertaining hereto', boxCoordinates: { x: 292, y: 55, w: 50, h: 28 } },
        { id: 'w7', modiGlyph: '𑘭𑘡', devanagari: 'सन', confidence: 93, grammaticalCategory: 'Noun', meaningEnglish: 'Year (Suhur/Fasli era)', boxCoordinates: { x: 348, y: 55, w: 32, h: 28 } },
        { id: 'w8', modiGlyph: '𑘭𑘰𑘩𑘔𑘲', devanagari: 'सालची', confidence: 90, grammaticalCategory: 'Adjective', meaningEnglish: 'Of the ongoing fiscal period', boxCoordinates: { x: 386, y: 55, w: 48, h: 28 } },
        { id: 'w9', modiGlyph: '𑘕𑘦𑘰𑘤𑘽𑘟𑘲', devanagari: 'जमाबंदी', confidence: 97, grammaticalCategory: 'Fiscal Term', meaningEnglish: 'Revenue settlement / land tax roll', boxCoordinates: { x: 440, y: 55, w: 68, h: 28 } },
        { id: 'w10', modiGlyph: '𑘭𑘟𑘨𑘜𑘴', devanagari: 'सदरहू', confidence: 92, grammaticalCategory: 'Demonstrative', meaningEnglish: 'Aforesaid / mentioned above', boxCoordinates: { x: 30, y: 95, w: 55, h: 28 } },
        { id: 'w11', modiGlyph: '𑘐𑘰𑘪𑘓𑘹', devanagari: 'गावचे', confidence: 94, grammaticalCategory: 'Genitive Noun', meaningEnglish: 'Of the village', boxCoordinates: { x: 92, y: 95, w: 48, h: 28 } },
        { id: 'w12', modiGlyph: '𑘂𑘡𑘰𑘦', devanagari: 'इनाम', confidence: 96, grammaticalCategory: 'Fiscal Term', meaningEnglish: 'Tax-exempt land grant', boxCoordinates: { x: 146, y: 95, w: 42, h: 28 } },
        { id: 'w13', modiGlyph: '𑘪', devanagari: 'व', confidence: 99, grammaticalCategory: 'Conjunction', meaningEnglish: 'And', boxCoordinates: { x: 194, y: 95, w: 20, h: 28 } },
        { id: 'w14', modiGlyph: '𑘭𑘨𑘎𑘰𑘨𑘕𑘦𑘰', devanagari: 'सरकारजमा', confidence: 91, grammaticalCategory: 'Fiscal Term', meaningEnglish: 'Crown revenue / sovereign ledger', boxCoordinates: { x: 220, y: 95, w: 78, h: 28 } },
        { id: 'w15', modiGlyph: '𑘕𑘦𑘲𑘡', devanagari: 'जमीन', confidence: 95, grammaticalCategory: 'Noun', meaningEnglish: 'Arable land', boxCoordinates: { x: 304, y: 95, w: 46, h: 28 } },
        { id: 'w16', modiGlyph: '𑘦𑘲𑘯𑘻𑘡', devanagari: 'मिळोन', confidence: 88, grammaticalCategory: 'Participle', meaningEnglish: 'Totaling / combined', boxCoordinates: { x: 356, y: 95, w: 48, h: 28 } },
        { id: 'w17', modiGlyph: '𑘓𑘰𑘪𑘨', devanagari: 'चावर', confidence: 93, grammaticalCategory: 'Measurement Unit', meaningEnglish: 'Chawar (land measure = 120 Bighas)', boxCoordinates: { x: 410, y: 95, w: 44, h: 28 } },
        { id: 'w18', modiGlyph: '𑘀𑘚𑘲𑘓', devanagari: 'अडीच', confidence: 92, grammaticalCategory: 'Numeral', meaningEnglish: 'Two and a half (2.5)', boxCoordinates: { x: 460, y: 95, w: 45, h: 28 } },
        { id: 'w19', modiGlyph: '𑘜𑘳𑘕𑘳𑘨', devanagari: 'हुजूर', confidence: 95, modernNormalized: 'श्रीमान', grammaticalCategory: 'Honorific / Sovereign', meaningEnglish: 'The High Presence / Central Court', boxCoordinates: { x: 30, y: 135, w: 46, h: 28 } },
        { id: 'w20', modiGlyph: '𑘧𑘰𑘽𑘓𑘹', devanagari: 'यांचे', confidence: 96, grammaticalCategory: 'Pronoun Genitive', meaningEnglish: 'Their / of whom', boxCoordinates: { x: 82, y: 135, w: 44, h: 28 } },
        { id: 'w21', modiGlyph: '𑘭𑘡𑘟𑘹𑘪𑘨𑘴𑘡', devanagari: 'सनदेवरून', confidence: 87, grammaticalCategory: 'Noun + Postposition', meaningEnglish: 'Pursuant to royal sanad decree', boxCoordinates: { x: 132, y: 135, w: 72, h: 28 } },
        { id: 'w22', modiGlyph: '𑘟𑘳𑘦𑘰𑘩𑘰', devanagari: 'दुमाला', confidence: 90, grammaticalCategory: 'Administrative Term', meaningEnglish: 'Alienated / reassigned tenure', boxCoordinates: { x: 210, y: 135, w: 56, h: 28 } },
        { id: 'w23', modiGlyph: '𑘎𑘨𑘜𑘹𑘝', devanagari: 'करणेत', confidence: 93, grammaticalCategory: 'Passive Verb', meaningEnglish: 'Has been enacted', boxCoordinates: { x: 272, y: 135, w: 50, h: 28 } },
        { id: 'w24', modiGlyph: '𑘁𑘩𑘹', devanagari: 'आले', confidence: 98, grammaticalCategory: 'Auxiliary Verb', meaningEnglish: 'Executed', boxCoordinates: { x: 328, y: 135, w: 34, h: 28 } },
        { id: 'w25', modiGlyph: '𑘦𑘕𑘎𑘳𑘨', devanagari: 'मजकूर', isOov: true, confidence: 71, modernNormalized: 'उक्त मजकूर', grammaticalCategory: 'Archaic Legal Phrase', meaningEnglish: 'The matter recorded herein (flagged OOV)', boxCoordinates: { x: 368, y: 135, w: 60, h: 28 } },
        { id: 'w26', modiGlyph: '𑘢𑘿𑘨𑘦𑘰𑘜𑘹𑘽', devanagari: 'प्रमाणें', confidence: 94, grammaticalCategory: 'Postposition', meaningEnglish: 'According to', boxCoordinates: { x: 434, y: 135, w: 64, h: 28 } },
      ],
    },
    shabdakoshEntries: [
      {
        term: 'मौजे',
        result: 'मौजे',
        rule: 'preserved',
        category: 'प्रशासकीय संज्ञा (Administrative)',
        etymology: 'Arabic mawḍi‘ (موضع) -> Old Marathi मौजे',
        historicalNotes: 'Used throughout Maratha records to designate an established, tax-paying rural agricultural village (opposite to कसबे).'
      },
      {
        term: 'सरकारजमा',
        result: 'सरकारजमा',
        rule: 'preserved',
        category: 'महसुली संज्ञा (Fiscal / Revenue)',
        etymology: 'Persian sarkar (सरकार) + Arabic jam‘ (जमा)',
        historicalNotes: 'Designates revenue or land yield directly payable into the central treasury, distinct from Inam exemptions.'
      },
      {
        term: 'जमाबंदी',
        result: 'जमाबंदी',
        rule: 'preserved',
        category: 'महसुली नोंद (Taxation Roll)',
        etymology: 'Perso-Arabic band-o-bast of revenue assessments',
        historicalNotes: 'The annual consolidated land tax register prepared by the Kamavisdar and checked by Phadnis.'
      },
      {
        term: 'हुजूर',
        result: 'श्रीमान',
        rule: 'modernised',
        category: 'आदरार्थी पद (Royal Court Honorific)',
        etymology: 'Arabic ḥuḍūr (حضور) -> Marathi हुजूर',
        historicalNotes: 'Referred directly to the sovereign or Peshwa cabinet seated at Shaniwar Wada. Modernized in school editions to "श्रीमान / शासन".'
      },
      {
        term: 'जनाब',
        result: 'साहेब',
        rule: 'modernised',
        category: 'संबोधन (Honorific Salutation)',
        etymology: 'Perso-Arabic Janāb -> Devanagari जनाब',
        historicalNotes: 'High diplomatic honorific used in Peshwa correspondence with sardars, modernized in standard Marathi to "साहेब / महाशय".'
      },
    ],
    paleographicFeatures: [
      'Rapid continuous baseline (शिरोरेषा अखंड) connecting adjacent letters without lifting quill',
      'Distinctive Peshwekalin loop for letter "र" and "य"',
      'Persian loanword abbreviations indicated with small upper crescent',
      'Numerals written in traditional Modi numerical shorthand (मोडी अंक)',
      'Subtle red vermilion ink seal (मोर्तब) stamped on top margin'
    ],
    keyEntities: {
      places: ['कसबे पुणे (Pune)', 'प्रांत जुन्नर (Junnar Province)'],
      persons: ['हुजूर पेशवे (Peshwa Court)', 'इनामदार (Land Grantee)'],
      fiscalUnits: ['चावर अडीच (2.5 Chawars = ~300 Bighas)', 'सरकारजमा (State Revenue)']
    },
    fleuronSymbol: '❧'
  },
  {
    id: 'MOD-0112',
    accessionNumber: 'SAT-SHIV-SAN-1674-0112',
    titleMarathi: 'छत्रपती शिवाजी महाराज राज्याभिषेक देशमुख सनद',
    titleEnglish: 'Chhatrapati Shivaji Maharaj Raigad Coronation Charter',
    genre: 'charter',
    genreLabelMarathi: 'सनद · royal charter',
    genreLabelEnglish: 'royal land charter',
    period: 'circa 1674–1680 (Shivakalin)',
    eraTag: 'Shivakalin',
    eraYears: 'c. 1674',
    archiveLocation: 'सातारा राजर्षी पुराभिलेखागार (Satara Royal Records)',
    rumalOrDaftarRef: 'रुमाल क्र. १२ · राज्याभिषेक दफ्तर',
    scribeOrOfficer: 'बाळाजी आवजी चिटणीस (Balaji Avji Chitnis, Royal Secretary)',
    materialDetails: 'Handmade Basroop cotton paper, carbon black soot ink, gold leaf border flecks, Rajmudra wax impression',
    sealDescription: 'अष्टकोणी राजमुद्रा (Sanskrit Octagonal Sovereign Seal of Shivaji Maharaj)',
    sealSvgType: 'octagonal_rajmudra',
    classificationNotes: 'Authenticated by the unbroken Sanskrit Rajmudra ("प्रतिपच्चंद्रलेखेव..."), early Modi Shivakalin rounded lettering, and Rajyabhisheka Saka dating.',
    f1Score: 0.96,
    datedByMethod: 'Dated by Rajyabhisheka calendar, Chitnis cursive paleography, and royal seal · F1 0.96',
    metrics: {
      cer: 4.8,
      wer: 7.6,
      wordsSegmented: 28,
      flaggedOov: 0,
      recognitionAccuracy: 95.2,
      linesDetected: 5,
    },
    transliteration: {
      fullDevanagari: 'स्वस्ति श्री राज्याभिषेक शके १ आनंद नाम संवत्सरे ज्येष्ठ शुद्ध त्रयोदशी मंदवासरे. क्षत्रियकुलावतंस श्री राजा शिवछत्रपती यांनी देशमुख यांस सादर केलेले आज्ञापत्र. वतनाची वहिवाट सुरळीत चालविणे.',
      modiExcerpt: '𑘭𑘿𑘪𑘭𑘿𑘝𑘲 𑘫𑘿𑘨𑘲 𑘨𑘰𑘕𑘿𑘧𑘰𑘥𑘲𑘬𑘹𑘎 𑘫𑘎𑘹 १ 𑘁𑘡𑘽𑘟 𑘡𑘰𑘦 𑘭𑘽𑘪𑘝𑘿𑘭𑘨𑘹 𑘕𑘿𑘧𑘹𑘬𑘿𑘙 𑘫𑘳𑘟𑘿𑘠 𑘝𑘿𑘨𑘧𑘻𑘟𑘫𑘲 𑘦𑘽𑘟𑘪𑘰𑘭𑘨𑘹. 𑘎𑘿𑘬𑘝𑘿𑘨𑘲𑘧𑘎𑘳𑘩𑘰𑘪𑘝𑘽𑘭 𑘫𑘿𑘨𑘲 𑘨𑘰𑘕𑘰 𑘫𑘲𑘪𑘔𑘝𑘿𑘨𑘢𑘝𑘲...',
      englishTranslation: 'Hail! In the Coronation Era Year 1, Anand cyclic year, Jyeshtha Shukla Trayodashi, Saturday. Royal decree issued by Kshatriyakulavantas Shri Raja Shiva Chhatrapati to the Deshmukh. The customary tenure of the Watan shall proceed without impediment.',
      words: [
        { id: 's1', modiGlyph: '𑘭𑘿𑘪𑘭𑘿𑘝𑘲', devanagari: 'स्वस्ति', confidence: 99, grammaticalCategory: 'Invocatory particle', meaningEnglish: 'Auspicious invocation / hail' },
        { id: 's2', modiGlyph: '𑘫𑘿𑘨𑘲', devanagari: 'श्री', confidence: 99, grammaticalCategory: 'Honorific', meaningEnglish: 'Sacred / blessed' },
        { id: 's3', modiGlyph: '𑘨𑘰𑘕𑘿𑘧𑘰𑘥𑘲𑘬𑘹𑘎', devanagari: 'राज्याभिषेक', confidence: 98, grammaticalCategory: 'Era Title', meaningEnglish: 'Coronation calendar' },
        { id: 's4', modiGlyph: '𑘫𑘎𑘹', devanagari: 'शके', confidence: 97, grammaticalCategory: 'Noun', meaningEnglish: 'In the era of' },
        { id: 's5', modiGlyph: '१', devanagari: '१', confidence: 99, grammaticalCategory: 'Modi Numeral', meaningEnglish: 'Year One' },
        { id: 's6', modiGlyph: '𑘁𑘡𑘽𑘟', devanagari: 'आनंद', confidence: 96, grammaticalCategory: 'Cyclic Year', meaningEnglish: 'Anand samvatsara' },
        { id: 's7', modiGlyph: '𑘡𑘰𑘦', devanagari: 'नाम', confidence: 97, grammaticalCategory: 'Particle', meaningEnglish: 'Named' },
        { id: 's8', modiGlyph: '𑘭𑘽𑘪𑘝𑘿𑘭𑘨𑘹', devanagari: 'संवत्सरे', confidence: 95, grammaticalCategory: 'Noun Locative', meaningEnglish: 'In the cyclic year' },
        { id: 's9', modiGlyph: '𑘕𑘿𑘧𑘹𑘬𑘿𑘙', devanagari: 'ज्येष्ठ', confidence: 94, grammaticalCategory: 'Month', meaningEnglish: 'Lunar month of Jyeshtha' },
        { id: 's10', modiGlyph: '𑘫𑘳𑘟𑘿𑘠', devanagari: 'शुद्ध', confidence: 96, grammaticalCategory: 'Paksha', meaningEnglish: 'Bright fortnight (Shukla)' },
        { id: 's11', modiGlyph: '𑘝𑘿𑘨𑘧𑘻𑘟𑘫𑘲', devanagari: 'त्रयोदशी', confidence: 95, grammaticalCategory: 'Tithi', meaningEnglish: '13th lunar day' },
        { id: 's12', modiGlyph: '𑘦𑘽𑘟𑘪𑘰𑘭𑘨𑘹', devanagari: 'मंदवासरे', confidence: 91, modernNormalized: 'शनिवार', grammaticalCategory: 'Weekday', meaningEnglish: 'Saturday (day of Saturn/Manda)' },
        { id: 's13', modiGlyph: '𑘎𑘿𑘬𑘝𑘿𑘨𑘲𑘧𑘎𑘳𑘩𑘰𑘪𑘝𑘽𑘭', devanagari: 'क्षत्रियकुलावतंस', confidence: 97, grammaticalCategory: 'Imperial Royal Title', meaningEnglish: 'Jewel / Crown of the Kshatriya Lineage' },
        { id: 's14', modiGlyph: '𑘫𑘲𑘪𑘔𑘝𑘿𑘨𑘢𑘝𑘲', devanagari: 'शिवछत्रपती', confidence: 99, grammaticalCategory: 'Monarch Name', meaningEnglish: 'Shiva Chhatrapati' },
        { id: 's15', modiGlyph: '𑘟𑘹𑘫𑘦𑘳𑘏', devanagari: 'देशमुख', confidence: 98, grammaticalCategory: 'Hereditary Office', meaningEnglish: 'District custodian / Deshmukh' },
      ]
    },
    shabdakoshEntries: [
      {
        term: 'मंदवासरे',
        result: 'शनिवार',
        rule: 'modernised',
        category: 'वार / कालगणना (Chronometry)',
        etymology: 'Sanskrit Manda (Saturn) + Vasara (Day)',
        historicalNotes: 'Classic Shivakalin court Sanskrit-derived chronometry, modernized in colloquial reading to "शनिवार".'
      },
      {
        term: 'वतन',
        result: 'वतन',
        rule: 'preserved',
        category: 'हक्क व इस्टेट (Hereditary Estate)',
        etymology: 'Arabic Watan (homeland) -> Marathi वतन',
        historicalNotes: 'Hereditary rights in land and office, protected zealously under Chhatrapati Shivaji’s legal code.'
      },
      {
        term: 'क्षत्रियकुलावतंस',
        result: 'क्षत्रियकुलावतंस',
        rule: 'preserved',
        category: 'राजपदवी (Imperial Title)',
        etymology: 'Sanskrit Kshatriya + Kula + Avatamsa (ornament/crest)',
        historicalNotes: 'Solemn coronation title conferred by Pandit Gaga Bhatta at Fort Raigad in 1674.'
      },
    ],
    paleographicFeatures: [
      'Circular Shivakalin character loops with pronounced vertical descenders',
      'Careful Sanskritized orthography prior to later 18th-century cursive acceleration',
      'Royal Rajmudra octagonal imprint stamped at head of scroll',
      'Standard red sandalwood paste vermilion dots on greeting folds'
    ],
    keyEntities: {
      places: ['किल्ले रायगड (Fort Raigad)', 'प्रांत मावळ (Maval Division)'],
      persons: ['छत्रपती शिवाजी महाराज (Shivaji Maharaj)', 'बाळाजी आवजी चिटणीस (Secretary)'],
      fiscalUnits: ['वतन हक्क (Watan Hereditary Right)', 'होन (Shivrai Gold Coin)']
    },
    fleuronSymbol: '✦'
  },
  {
    id: 'MOD-0883',
    accessionNumber: 'SHN-PND-LEDR-1759-0883',
    titleMarathi: 'पेशवे दफ्तर लष्कर हिशेब व दारूगोळा बही',
    titleEnglish: 'Peshwa Cavalry & Artillery War Treasury Ledger',
    genre: 'ledger',
    genreLabelMarathi: 'हिशेब · military treasury ledger',
    genreLabelEnglish: 'treasury ledger',
    period: 'circa 1755–1761 (Panipat campaign logistics)',
    eraTag: 'Peshwekalin',
    eraYears: 'c. 1759',
    archiveLocation: 'शनिवार वाडा दफ्तरखाना (Shaniwar Wada Archives, Pune)',
    rumalOrDaftarRef: 'रुमाल क्र. १६२ · लष्कर खजिना',
    scribeOrOfficer: 'नाना फडणीस यांचे हाताखालील कारकून (Phadnis Treasury Clerks)',
    materialDetails: 'Thick brown cloth-reinforced ledger paper (बही कागद), black ink, column rulings drawn with red ink',
    sealDescription: 'चौरस कारकूनी शिक्का (Square Scribe Verification Stamp)',
    sealSvgType: 'square_subha',
    classificationNotes: 'Contains tabular fiscal balance entries, accounting glyphs (टका, रुक्के, आणे) and scribe verification initials.',
    f1Score: 0.94,
    datedByMethod: 'Dated by military officer names, Panipat expedition logistics references · F1 0.94',
    metrics: {
      cer: 6.4,
      wer: 9.8,
      wordsSegmented: 32,
      flaggedOov: 0,
      recognitionAccuracy: 93.6,
      linesDetected: 6,
    },
    transliteration: {
      fullDevanagari: 'लष्कर तोफखाना व बारगीर स्वार यांचे माहवार पगार वाटप. एकूण चाळीस हजार रुपये तैनात करण्यात आले. कारकून बापूजी नाईक यांचे सहीनिशी खतावणी पूर्ण केली.',
      modiExcerpt: '𑘩𑘬𑘿𑘎𑘨 𑘝𑘻𑘣𑘏𑘰𑘡𑘰 𑘪 𑘤𑘰𑘨𑘐𑘲𑘨 𑘭𑘿𑘪𑘰𑘨 𑘧𑘰𑘽𑘓𑘹 𑘦𑘰𑘜𑘪𑘰𑘨 𑘢𑘐𑘰𑘨 𑘪𑘰𑘚𑘢. 𑘊𑘎𑘳𑘜 𑘓𑘰𑘯𑘲𑘭 𑘜𑘕𑘰𑘨 𑘨𑘳𑘢𑘧𑘹...',
      englishTranslation: 'Monthly salary disbursement for the army artillery and Bargir cavalry riders. A total sum of forty thousand rupees was deployed. Scribe Bapuji Naik completed the account ledger posting under signature.',
      words: [
        { id: 'l1', modiGlyph: '𑘩𑘬𑘿𑘎𑘨', devanagari: 'लष्कर', confidence: 96, grammaticalCategory: 'Military', meaningEnglish: 'Army / military encampment' },
        { id: 'l2', modiGlyph: '𑘝𑘻𑘣𑘏𑘰𑘡𑘰', devanagari: 'तोफखाना', confidence: 95, grammaticalCategory: 'Military', meaningEnglish: 'Artillery department' },
        { id: 'l3', modiGlyph: '𑘤𑘰𑘨𑘐𑘲𑘨', devanagari: 'बारगीर', confidence: 92, grammaticalCategory: 'Cavalry', meaningEnglish: 'State-mounted trooper' },
        { id: 'l4', modiGlyph: '𑘭𑘿𑘪𑘰𑘨', devanagari: 'स्वार', confidence: 98, grammaticalCategory: 'Military', meaningEnglish: 'Cavalryman / horseman' },
        { id: 'l5', modiGlyph: '𑘦𑘰𑘜𑘪𑘰𑘨', devanagari: 'माहवार', confidence: 91, modernNormalized: 'दरमहा', grammaticalCategory: 'Temporal', meaningEnglish: 'Monthly basis' },
        { id: 'l6', modiGlyph: '𑘢𑘐𑘰𑘨', devanagari: 'पगार', confidence: 97, grammaticalCategory: 'Fiscal', meaningEnglish: 'Pay / stipend' },
        { id: 'l7', modiGlyph: '𑘪𑘰𑘚𑘢', devanagari: 'वाटप', confidence: 96, grammaticalCategory: 'Fiscal', meaningEnglish: 'Disbursement' },
      ]
    },
    shabdakoshEntries: [
      {
        term: 'बारगीर',
        result: 'बारगीर',
        rule: 'preserved',
        category: 'लष्करी हुद्दा (Cavalry Class)',
        etymology: 'Persian Bārgīr (one who carries a load / cavalry horse provided by state)',
        historicalNotes: 'Distinguished from शिलेदार (who provided their own horses); Bargirs were directly mounted by Peshwa arsenals.'
      },
      {
        term: 'माहवार',
        result: 'दरमहा',
        rule: 'modernised',
        category: 'कालावधी (Pay Frequency)',
        etymology: 'Persian Māh (month) + vār',
        historicalNotes: 'Standard ledger term for monthly payroll calculation in the Phadnis accounts.'
      },
      {
        term: 'खतावणी',
        result: 'खतावणी',
        rule: 'preserved',
        category: 'हिशेब नोंद (Double-Entry Ledger)',
        etymology: 'Old Marathi khata + vanee',
        historicalNotes: 'Peshwa accounting ledger book into which journal cashbook (कीर्द) entries were posted.'
      },
    ],
    paleographicFeatures: [
      'Compressed cursive tabular figures adapted for ledger columns',
      'Mathematical fractions and currency units (टका, रुक्का) represented with single stroke ligatures',
      'Red ink column margins separating credit (जमा) and debit (खर्च)',
      'Quick clerk certification tickmarks'
    ],
    keyEntities: {
      places: ['शनिवार वाडा (Shaniwar Wada)', 'उत्तर मोहीम (Northern Expedition)'],
      persons: ['बापूजी नाईक कारकून (Bapuji Naik Clerk)', 'पेशवे नानासाहेब (Nanasaheb Peshwa)'],
      fiscalUnits: ['चाळीस हजार रुपये (40,000 Silver Chandori Rupees)', 'माहवार वाटप (Monthly Pay)']
    },
    fleuronSymbol: '❦'
  },
  {
    id: 'MOD-0305',
    accessionNumber: 'MEN-NAN-ORD-1782-0305',
    titleMarathi: 'नाना फडणीस आज्ञापत्र - होळकर सुभेदार यांसी',
    titleEnglish: 'Nana Phadnavis Diplomatic Order to Subhedar Holkar',
    genre: 'order',
    genreLabelMarathi: 'आज्ञापत्र · administrative order',
    genreLabelEnglish: 'administrative decree',
    period: 'circa 1780–1785 (First Anglo-Maratha War climax)',
    eraTag: 'Peshwekalin',
    eraYears: 'c. 1782',
    archiveLocation: 'मेणवली वाडा संग्रह (Nana Phadnavis Menavali Archives)',
    rumalOrDaftarRef: 'रुमाल क्र. ०७ · परराष्ट्रीय पत्रव्यवहार',
    scribeOrOfficer: 'नाना फडणीस प्रत्यक्ष (Nana Phadnavis Hand / Sign)',
    materialDetails: 'High-grade Nepalese Lokta handmade paper, glossy soot ink, folded and sealed with red shellac wax',
    sealDescription: 'नाना फडणीस खासगी शिक्का (Private Seal of Nana Phadnavis)',
    sealSvgType: 'oval_peshwa_mortab',
    classificationNotes: 'Shows the classic elongated Nana Phadnavis cursive flourish with sweeping horizontal baseline and secret diplomatic cipher marks.',
    f1Score: 0.95,
    datedByMethod: 'Dated by Wadgaon Treaty references, Holkar diplomatic titles · F1 0.95',
    metrics: {
      cer: 5.1,
      wer: 8.4,
      wordsSegmented: 26,
      flaggedOov: 0,
      recognitionAccuracy: 94.9,
      linesDetected: 5,
    },
    transliteration: {
      fullDevanagari: 'राजमान्य राजश्री तुकोजी होळकर सुभेदार यांसी नाना फडणीस यांचा सप्रेम नमस्कार विनंती विशेष. इंग्रज फौजेचा बंदोबस्त करणे बाबत पत्र पोहोचले. घाटमाथ्यावर दक्ष राहणे.',
      modiExcerpt: '𑘨𑘰𑘕𑘦𑘰𑘡𑘿𑘧 𑘨𑘰𑘕𑘫𑘿𑘨𑘲 𑘝𑘳𑘎𑘻𑘕𑘲 𑘜𑘻𑘯𑘎𑘨 𑘭𑘳𑘥𑘹𑘟𑘰𑘨 𑘧𑘰𑘽𑘭𑘲 𑘡𑘰𑘡𑘰 𑘣𑘚𑘜𑘲𑘭...',
      englishTranslation: 'To the esteemed and noble Tukoji Holkar Subhedar, Nana Phadnavis sends affectionate greetings and special communication. Dispatch received regarding containing British military forces. Remain vigilant across the Western Ghat passes.',
      words: [
        { id: 'o1', modiGlyph: '𑘨𑘰𑘕𑘦𑘰𑘡𑘿𑘧', devanagari: 'राजमान्य', confidence: 99, grammaticalCategory: 'Salutation', meaningEnglish: 'Honored by the King / State' },
        { id: 'o2', modiGlyph: '𑘨𑘰𑘕𑘫𑘿𑘨𑘲', devanagari: 'राजश्री', confidence: 98, grammaticalCategory: 'Salutation', meaningEnglish: 'Noble Sir' },
        { id: 'o3', modiGlyph: '𑘝𑘳𑘎𑘻𑘕𑘲', devanagari: 'तुकोजी', confidence: 97, grammaticalCategory: 'Proper Noun', meaningEnglish: 'Tukoji (Holkar)' },
        { id: 'o4', modiGlyph: '𑘜𑘻𑘯𑘎𑘨', devanagari: 'होळकर', confidence: 96, grammaticalCategory: 'Dynastic Name', meaningEnglish: 'Holkar ruler of Indore' },
        { id: 'o5', modiGlyph: '𑘭𑘳𑘥𑘹𑘟𑘰𑘨', devanagari: 'सुभेदार', confidence: 97, grammaticalCategory: 'Title', meaningEnglish: 'Governor / General' },
        { id: 'o6', modiGlyph: '𑘪𑘲𑘡𑘽𑘝𑘲', devanagari: 'विनंती', confidence: 95, grammaticalCategory: 'Epistolary', meaningEnglish: 'Humble notification' },
        { id: 'o7', modiGlyph: '𑘤𑘽𑘟𑘻𑘤𑘭𑘿𑘝', devanagari: 'बंदोबस्त', confidence: 96, grammaticalCategory: 'Military', meaningEnglish: 'Security containment' },
      ]
    },
    shabdakoshEntries: [
      {
        term: 'राजमान्य राजश्री',
        result: 'सन्माननीय',
        rule: 'modernised',
        category: 'दरबारी पदवी (Court Protocol Address)',
        etymology: 'Sanskrit Raja + Manya + Shri',
        historicalNotes: 'Prescribed epistolary protocol under Ramchandra Pant Amatya’s Ajnapatra for highest-ranking military sardars.'
      },
      {
        term: 'बंदोबस्त',
        result: 'व्यवस्था / बंदोबस्त',
        rule: 'preserved',
        category: 'प्रशासकीय संज्ञा (Security Protocol)',
        etymology: 'Persian Band-o-bast (binding and securing)',
        historicalNotes: 'Signifies both defensive encirclement and administrative order in Maratha border defenses.'
      },
    ],
    paleographicFeatures: [
      'Very rapid continuous cursive stroke with distinctive loops',
      'Characteristic "विनंती विशेष" ligature unique to Phadnavis chancellery',
      'Small secret seal impression (कौल मोर्तब) at the paper fold junction'
    ],
    keyEntities: {
      places: ['मेणवली (Menavali)', 'घाटमाथा (Sahyadri Ghat Passes)'],
      persons: ['नाना फडणीस (Nana Phadnavis)', 'तुकोजी होळकर (Tukoji Holkar)'],
      fiscalUnits: ['फौज बंदोबस्त (Troop Deployment)']
    },
    fleuronSymbol: '❧'
  },
  {
    id: 'MOD-0649',
    accessionNumber: 'WAI-KRI-MAH-1724-0649',
    titleMarathi: 'वाई कसबे महाजन पाणी व सीमा न्यायनिवाडा महजर',
    titleEnglish: 'Wai Village Canal & Boundary Dispute Mahajar',
    genre: 'dispute',
    genreLabelMarathi: 'महजर · judicial accord',
    genreLabelEnglish: 'judicial accord',
    period: 'circa 1720–1730 (Chhatrapati Shahu I Era)',
    eraTag: 'Peshwekalin',
    eraYears: 'c. 1724',
    archiveLocation: 'वाई कृष्णामाई धर्मस्थान पुराभिलेख (Krishna River Temple Archives, Wai)',
    rumalOrDaftarRef: 'रुमाल क्र. ०९ · न्याय महजर',
    scribeOrOfficer: 'कान्होजी पाटील व समस्त गोत (Village Elder Panchayat)',
    materialDetails: 'Handmade hemp parchment paper scroll (१२ फूट लांब गुंडाळी कागद), black ink, witness thumbmarks and plow marks',
    sealDescription: 'काझी शिक्का व नांगराची निशाणी (Qazi Seal & Witness Plow Signatures)',
    sealSvgType: 'round_kazi',
    classificationNotes: 'Features witness signatures with caste occupation marks (e.g., shoe sign for shoemaker, plow for farmer, balance for goldsmith) and Persian Qazi seal.',
    f1Score: 0.91,
    datedByMethod: 'Dated by Shahu Maharaj regnal year, local Gote-Panchayat signatures · F1 0.91',
    metrics: {
      cer: 8.1,
      wer: 12.4,
      wordsSegmented: 35,
      flaggedOov: 1,
      recognitionAccuracy: 91.9,
      linesDetected: 7,
    },
    transliteration: {
      fullDevanagari: 'समस्त महाजन व कान्होजी पाटील यांचे समक्ष शेत बांधाचा तंटा मिटवून राजीनामा लिहून दिला. दोन्ही पक्षांनी गंगेच्या शपथेवर सीमा मान्य केली. कोणताही पक्ष फेरविचार करणार नाही.',
      modiExcerpt: '𑘭𑘦𑘭𑘿𑘝 𑘦𑘜𑘰𑘕𑘡 𑘪 𑘎𑘰𑘡𑘿𑘜𑘻𑘕𑘲 𑘢𑘰𑘚𑘲𑘩 𑘧𑘰𑘽𑘓𑘹 𑘭𑘦𑘎𑘿𑘬 𑘫𑘹𑘝 𑘤𑘰𑘽𑘠𑘰𑘓𑘰 𑘝𑘽𑘘𑘰...',
      englishTranslation: 'In the presence of all village elders (Mahajans) and Kanoji Patil, the dispute regarding the farmland boundary embankment was amicably resolved and formal deed of settlement written. Both parties accepted the boundary upon solemn oath by the holy river Krishna.',
      words: [
        { id: 'm1', modiGlyph: '𑘭𑘦𑘭𑘿𑘝', devanagari: 'समस्त', confidence: 97, grammaticalCategory: 'Collective', meaningEnglish: 'The assembled body' },
        { id: 'm2', modiGlyph: '𑘦𑘜𑘰𑘕𑘡', devanagari: 'महाजन', confidence: 95, grammaticalCategory: 'Civic Body', meaningEnglish: 'Merchant & guild elders' },
        { id: 'm3', modiGlyph: '𑘢𑘰𑘚𑘲𑘩', devanagari: 'पाटील', confidence: 98, grammaticalCategory: 'Village Head', meaningEnglish: 'Patil (village chief)' },
        { id: 'm4', modiGlyph: '𑘤𑘰𑘽𑘠𑘰𑘓𑘰', devanagari: 'बांधाचा', confidence: 92, grammaticalCategory: 'Agrarian', meaningEnglish: 'Of the boundary dike' },
        { id: 'm5', modiGlyph: '𑘝𑘽𑘘𑘰', devanagari: 'तंटा', confidence: 96, grammaticalCategory: 'Legal', meaningEnglish: 'Dispute / litigation' },
        { id: 'm6', modiGlyph: '𑘨𑘰𑘕𑘲𑘡𑘰𑘦𑘰', devanagari: 'राजीनामा', confidence: 94, grammaticalCategory: 'Legal Accord', meaningEnglish: 'Mutual consent deed' },
      ]
    },
    shabdakoshEntries: [
      {
        term: 'महजर',
        result: 'महजर',
        rule: 'preserved',
        category: 'न्यायालयीन दस्तऐवज (Judicial Verdict)',
        etymology: 'Arabic Maḥḍar (a document presented to an assembly)',
        historicalNotes: 'Solemn dispute accord attested by the whole community assembly (गोत/पंच).'
      },
      {
        term: 'राजीनामा',
        result: 'संमतीपत्र',
        rule: 'modernised',
        category: 'कायदेशीर संज्ञा (Deed of Consent)',
        etymology: 'Persian Razi (consent) + Nama (document)',
        historicalNotes: 'In historical Maratha law, meant mutual accord / consent agreement (not modern "resignation").'
      },
    ],
    paleographicFeatures: [
      'Document scroll format measuring 12 feet in length',
      'Signatures of 24 village guild heads accompanied by drawings of their tools (निशाणी)',
      'Multiple handwriting hands as each witness signed sequentially'
    ],
    keyEntities: {
      places: ['कसबे वाई (Wai)', 'कृष्णा नदी किनारा (Krishna River Bank)'],
      persons: ['कान्होजी पाटील (Kanoji Patil)', 'काझी हुसेन (Qazi Hussain)'],
      fiscalUnits: ['बांध दुरुस्ती दंड (Boundary Dike Fine)']
    },
    fleuronSymbol: '❦'
  },
  {
    id: 'MOD-0994',
    accessionNumber: 'PUN-TUL-END-1768-0994',
    titleMarathi: 'तुळशीबाग रामचंद्र देवस्थान अग्रहार दानपत्र सनद',
    titleEnglish: 'Tulshibagh Temple Perpetual Land Endowment Sanad',
    genre: 'endowment',
    genreLabelMarathi: 'सनद / दानपत्र · endowment charter',
    genreLabelEnglish: 'temple endowment charter',
    period: 'circa 1765–1772 (Peshwa Madhavrao I Era)',
    eraTag: 'Peshwekalin',
    eraYears: 'c. 1768',
    archiveLocation: 'पुणे हेरिटेज ट्रस्ट (Pune Heritage Archives)',
    rumalOrDaftarRef: 'रुमाल क्र. ३१ · देवस्थान इनाम',
    scribeOrOfficer: 'नारो आप्पाजी कारकून (Naro Appaji, Subhedar of Pune)',
    materialDetails: 'Heavy gold-flecked vellum paper (सोनेरी जरतारी कागद), deep black ink, red wax seal of the Tulshibagh deity',
    sealDescription: 'देवस्थान शिक्का व पेशवे मोर्तब (Temple Devasthan Seal with Mortab)',
    sealSvgType: 'oval_peshwa_mortab',
    classificationNotes: 'Peshwa Madhavrao I era donation charter granting Katraj well water rights and agricultural fields for temple oil lamps and daily puja.',
    f1Score: 0.94,
    datedByMethod: 'Dated by Madhavrao I regnal seal and temple consecration records · F1 0.94',
    metrics: {
      cer: 5.9,
      wer: 9.1,
      wordsSegmented: 29,
      flaggedOov: 0,
      recognitionAccuracy: 94.1,
      linesDetected: 5,
    },
    transliteration: {
      fullDevanagari: 'श्री रामचंद्र प्रभू प्रीत्यर्थ मौजे कात्रज येथील विहीर व बागायत जमीन कायम इनाम म्हणून अर्पण केली. नंदादीप व नैवेद्य अखंड चालविणे. वंशपरंपरेने चालविणे.',
      modiExcerpt: '𑘫𑘿𑘨𑘲 𑘨𑘰𑘦𑘓𑘽𑘟𑘿𑘨 𑘢𑘿𑘨𑘥𑘳 𑘢𑘿𑘨𑘲𑘝𑘿𑘧𑘨𑘿𑘞 𑘦𑘻𑘕𑘹 𑘎𑘰𑘝𑘿𑘨𑘕 𑘧𑘹𑘞𑘧𑘲𑘩 𑘪𑘲𑘜𑘲𑘨 𑘪 𑘤𑘰𑘐𑘰𑘧𑘝 𑘕𑘦𑘲𑘡...',
      englishTranslation: 'For the eternal worship of Lord Shri Ramachandra Prabhu, the freshwater well and orchard land located in village Katraj is hereby granted as perpetual tax-free Inam. The eternal lamp (Nandadeep) and sacred offerings shall be maintained in perpetuity.',
      words: [
        { id: 't1', modiGlyph: '𑘫𑘿𑘨𑘲', devanagari: 'श्री', confidence: 99, grammaticalCategory: 'Invocation', meaningEnglish: 'Holy' },
        { id: 't2', modiGlyph: '𑘨𑘰𑘦𑘓𑘽𑘟𑘿𑘨', devanagari: 'रामचंद्र', confidence: 98, grammaticalCategory: 'Deity Name', meaningEnglish: 'Lord Ramachandra' },
        { id: 't3', modiGlyph: '𑘎𑘰𑘝𑘿𑘨𑘕', devanagari: 'कात्रज', confidence: 97, grammaticalCategory: 'Toponym', meaningEnglish: 'Katraj (Pune lake/reservoir)' },
        { id: 't4', modiGlyph: '𑘤𑘰𑘐𑘰𑘧𑘝', devanagari: 'बागायत', confidence: 95, grammaticalCategory: 'Land Classification', meaningEnglish: 'Irrigated orchard land' },
        { id: 't5', modiGlyph: '𑘡𑘽𑘟𑘰𑘟𑘲𑘢', devanagari: 'नंदादीप', confidence: 96, grammaticalCategory: 'Temple Ritual', meaningEnglish: 'Perpetual sacred oil lamp' },
      ]
    },
    shabdakoshEntries: [
      {
        term: 'बागायत',
        result: 'बागायत',
        rule: 'preserved',
        category: 'जमीन प्रतवारी (Agrarian Land Classification)',
        etymology: 'Persian Bāgh (garden) -> Marathi बागायत',
        historicalNotes: 'Designated highest-value irrigated land (with access to well or canal), carrying higher valuation than जिरायत (rain-fed).'
      },
      {
        term: 'नंदादीप',
        result: 'अखंड दिवा',
        rule: 'modernised',
        category: 'धार्मिक विधी (Temple Endowment)',
        etymology: 'Sanskrit Nanda + Deepa',
        historicalNotes: 'Perpetual lamp requiring ongoing oil allowance funded from village harvest share.'
      },
    ],
    paleographicFeatures: [
      'Ornate Shivakalin-influenced invocation glyphs',
      'Elongated ornamental top stroke with vermilion saffron highlights',
      'Peshwa Madhavrao prime ministerial endorsement mark on reverse margin'
    ],
    keyEntities: {
      places: ['तुळशीबाग (Tulshibagh, Pune)', 'मौजे कात्रज (Katraj Village)'],
      persons: ['श्रीमंत माधवराव पेशवे (Peshwa Madhavrao I)', 'नारो आप्पाजी (Governor)'],
      fiscalUnits: ['बागायत जमीन इनाम (Perpetual Irrigated Land Grant)']
    },
    fleuronSymbol: '❧'
  }
];
