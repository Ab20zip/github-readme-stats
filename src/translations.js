// @ts-check

import { encodeHTML } from "./common/utils.js";

/**
 * Retrieves stat card labels in the available locales.
 *
 * @param {object} props Function arguments.
 * @param {string} props.name The name of the locale.
 * @param {string} props.apostrophe Whether to use apostrophe or not.
 * @returns {object} The locales object.
 *
 * @see https://www.andiamo.co.uk/resources/iso-language-codes/ for language codes.
 */
const statCardLocales = ({ name, apostrophe }) => {
  const encodedName = encodeHTML(name);
  return {
    "statcard.commits": {
      ar: "مجموع الحفظ",
      bn: "সর্বমোট Commit",
      cn: "累计提交数（commit）",
      cs: "Celkem commitů",
      de: "Anzahl Commits",
      el: "Σύνολο Commits",
      en: "Total Commits",
      es: "Commits totales",
      fr: "Total des Commits",
      hi: "कुल Commit",
      hu: "Összes commit",
      id: "Total Komitmen",
      it: "Commit totali",
      ja: "合計コミット数",
      kr: "전체 커밋 수",
      ml: "ആകെ കമ്മിറ്റുകൾ",
      my: "Jumlah Komitmen",
      nl: "Aantal commits",
      np: "कुल Commits",
      pl: "Wszystkie commity",
      "pt-br": "Total de Commits",
      "pt-pt": "Total de Commits",
      ru: "Всего коммитов",
      se: "Totalt antal commits",
      sk: "Všetky commity",
      tr: "Toplam Commit",
      "uk-ua": "Всього комітів",
      uz: "'Commit'lar",
      vi: "Tổng Số Cam Kết",
      "zh-tw": "累計提交數（commit）",
    },
    "statcard.contribs": {
      ar: "ساهم في (العام الماضي)",
      bn: "অবদান (গত বছর)",
      cn: "贡献于（去年）",
      cs: "Přispěl k (minulý rok)",
      de: "Beigetragen zu (letztes Jahr)",
      el: "Συνεισφέρθηκε σε (πέρυσι)",
      en: "Contributed to (last year)",
      es: "Contribuciones en (el año pasado)",
      fr: "Contribué à (l'année dernière)",
      hi: "योगदान (पिछले वर्ष के)",
      hu: "Hozzájárulások (tavaly)",
      id: "Berkontribusi ke (tahun lalu)",
      it: "Ha contribuito a (l'anno scorso)",
      ja: "貢献したリポジトリ （昨年）",
      kr: "(작년) 기여",
      ml: "സമർപ്പിച്ചിരിക്കുന്നത് (കഴിഞ്ഞ വർഷം)",
      my: "Menyumbang kepada (tahun lepas)",
      nl: "Bijgedragen aan (vorig jaar)",
      np: "कुल योगदानहरू (गत वर्ष)",
      pl: "Kontrybucje (w zeszłym roku)",
      "pt-br": "Contribuiu para (ano passado)",
      "pt-pt": "Contribuiu em (ano passado)",
      ru: "Внёс вклад в (за прошлый год)",
      se: "Bidragit till (förra året)",
      sk: "Účasti (minulý rok)",
      tr: "Katkı Verildi (geçen yıl)",
      "uk-ua": "Зробив внесок у (за минулий рік)",
      uz: "Hissa qoʻshgan (o'tgan yili)",
      vi: "Đã Đóng Góp (năm ngoái)",
      "zh-tw": "參與項目數 （去年）",
    },
    "statcard.discussions-answered": {
      ar: "مجموع الردود على المناقشات",
      bn: "সর্বমোট আলোচনা উত্তর",
      cn: "回复的讨论总数",
      cs: "Celkem zodpovězených diskusí",
      de: "Gesamt beantwortete Diskussionen",
      el: "Σύνολο Συζητήσεων που Απαντήθηκαν",
      en: "Total Discussions Answered",
      es: "Discusiones totales respondidas",
      fr: "Nombre total de discussions répondues",
      hi: "चर्चाओं में कुल उत्तर",
      hu: "Összes megválaszolt megbeszélés",
      id: "Total Diskusi Dibalas",
      it: "Discussioni totali risposte",
      ja: "回答されたディスカッションの総数",
      kr: "답변된 토론 총 수",
      ml: "ഉത്തരം നൽകിയ ആലോചനകൾ",
      my: "Jumlah Perbincangan Dijawab",
      nl: "Totaal beantwoorde discussies",
      np: "कुल चर्चा उत्तर",
      pl: "Łącznie odpowiedzianych dyskusji",
      "pt-br": "Total de Discussões Respondidas",
      "pt-pt": "Total de Discussões Respondidas",
      ru: "Всего отвеченных дискуссий",
      se: "Totalt antal diskussioner besvarade",
      sk: "Celkový počet zodpovedaných diskusií",
      tr: "Toplam Cevaplanan Tartışma",
      "uk-ua": "Всього відповідей на дискусії",
      uz: "Javob berilgan muzokaralar soni",
      vi: "Tổng Số Thảo Luận Đã Trả Lời",
      "zh-tw": "回覆的討論總數",
    },
    "statcard.discussions-started": {
      ar: "مجموع بدء المناقشات",
      bn: "সর্বমোট আলোচনা শুরু",
      cn: "发起的讨论总数",
      cs: "Celkem zahájených diskusí",
      de: "Gesamt gestartete Diskussionen",
      el: "Σύνολο Συζητήσεων που Ξεκίνησαν",
      en: "Total Discussions Started",
      es: "Discusiones totales iniciadas",
      fr: "Nombre total de discussions lancées",
      hi: "कुल चर्चाएँ शुरू",
      hu: "Összes megkezdett megbeszélés",
      id: "Total Diskusi Dimulai",
      it: "Discussioni totali avviate",
      ja: "開始されたディスカッションの総数",
      kr: "시작된 토론 총 수",
      ml: "ആരംഭിച്ച ആലോചനകൾ",
      my: "Jumlah Perbincangan Bermula",
      nl: "Totaal gestarte discussies",
      np: "कुल चर्चा सुरु",
      pl: "Łącznie rozpoczętych dyskusji",
      "pt-br": "Total de Discussões Iniciadas",
      "pt-pt": "Total de Discussões Iniciadas",
      ru: "Всего начатых дискуссий",
      se: "Totalt antal diskussioner startade",
      sk: "Celkový počet začatých diskusií",
      tr: "Başlatılan Toplam Tartışma",
      "uk-ua": "Всього розпочатих дискусій",
      uz: "Boshlangan muzokaralar soni",
      vi: "Tổng Số Thảo Luận Bắt Đầu",
      "zh-tw": "發起的討論總數",
    },
    "statcard.issues": {
      ar: "مجموع التحسينات",
      bn: "সর্বমোট Issue",
      cn: "指出问题数（issue）",
      cs: "Celkem problémů",
      de: "Anzahl Issues",
      el: "Σύνολο Ζητημάτων",
      en: "Total Issues",
      es: "Issues totales",
      fr: "Nombre total d'incidents",
      hi: "कुल Issue",
      hu: "Összes hibajegy",
      id: "Total Masalah Dilaporkan",
      it: "Segnalazioni totali",
      ja: "合計 issue",
      kr: "이슈 개수",
      ml: "ആകെ ലക്കങ്ങൾ",
      my: "Jumlah Isu Dilaporkan",
      nl: "Aantal kwesties",
      np: "कुल मुद्दाहरू",
      pl: "Wszystkie problemy",
      "pt-br": "Total de Issues",
      "pt-pt": "Total de Issues",
      ru: "Всего issue",
      se: "Total antal issues",
      sk: "Všetky problémy",
      tr: "Toplam Hata",
      "uk-ua": "Всього issue",
      uz: "'Issue'lar",
      vi: "Tổng Số Vấn Đề",
      "zh-tw": "指出問題數（issue）",
    },
    "statcard.prs": {
      ar: "مجموع طلبات السحب",
      bn: "সর্বমোট PR",
      cn: "拉取请求数（PR）",
      cs: "Celkem PRs",
      de: "PRs Insgesamt",
      el: "Σύνολο PRs",
      en: "Total PRs",
      es: "PRs totales",
      fr: "Total des PRs",
      hi: "कुल PR",
      hu: "Összes PR",
      id: "Total Permintaan Tarik",
      it: "PR totali",
      ja: "合計 PR",
      kr: "PR 횟수",
      ml: "ആകെ പുൾ അഭ്യർത്ഥനകൾ",
      my: "Jumlah PR",
      nl: "Aantal PR's",
      np: "कुल PRs",
      pl: "Wszystkie PR-y",
      "pt-br": "Total de PRs",
      "pt-pt": "Total de PRs",
      ru: "Всего pull request`ов",
      se: "Totalt antal PR",
      sk: "Všetky PR",
      tr: "Toplam PR",
      "uk-ua": "Всього pull request`iв",
      uz: "'Pull Request'lar",
      vi: "Tổng Số PR",
      "zh-tw": "拉取請求數（PR）",
    },
    "statcard.prs-merged": {
      ar: "مجموع الطلبات المدمجة",
      bn: "সর্বমোট PR একত্রীকৃত",
      cn: "合并的 PR 总数",
      cs: "Celkem sloučených PR",
      de: "Insgesamt zusammengeführte PRs",
      el: "Σύνολο Συγχωνευμένων PR",
      en: "Total PRs Merged",
      es: "PR totales fusionados",
      fr: "Nombre total de PR fusionnés",
      hi: "कुल PR एकीकृत",
      hu: "Összes egyesített PR",
      id: "Total PR Digabungkan",
      it: "PR totali uniti",
      ja: "マージされた PR の総数",
      kr: "병합된 총 PR",
      my: "Jumlah PR Digabungkan",
      nl: "Totaal samengevoegde PR's",
      np: "कुल PRs मर्ज गरिएको",
      pl: "Łącznie połączonych PR",
      "pt-br": "Total de PRs Fundidos",
      "pt-pt": "Total de PRs Fundidos",
      ru: "Всего объединённых pull request`ов",
      se: "Totalt antal sammanfogade PR",
      sk: "Celkový počet zlúčených PR",
      tr: "Toplam Birleştirilmiş PR",
      "uk-ua": "Всього об'єднаних pull request`iв",
      uz: "Birlangan PR-lar soni",
      vi: "Tổng Số PR Đã Hợp Nhất",
      "zh-tw": "合併的 PR 總數",
    },
    "statcard.prs-merged-percentage": {
      ar: "نسبة الطلبات المدمجة",
      bn: "PR একত্রীকরণের শতাংশ",
      cn: "合并的 PR 百分比",
      cs: "Sloučené PRs v procentech",
      de: "Zusammengeführte PRs in Prozent",
      el: "Ποσοστό Συγχωνευμένων PR",
      en: "Merged PRs Percentage",
      es: "Porcentaje de PR fusionados",
      fr: "Pourcentage de PR fusionnés",
      hi: "PR एकीकृत होने का प्रतिशत",
      hu: "Egyesített PR-k százaléka",
      id: "Persentase PR Digabungkan",
      it: "Percentuale di PR uniti",
      ja: "マージされた PR の割合",
      kr: "병합된 PR의 비율",
      my: "Peratus PR Digabungkan",
      nl: "Percentage samengevoegde PR's",
      np: "PR मर्ज गरिएको प्रतिशत",
      pl: "Procent połączonych PR",
      "pt-br": "Porcentagem de PRs Fundidos",
      "pt-pt": "Percentagem de PRs Fundidos",
      ru: "Процент объединённых pull request`ов",
      se: "Procent av sammanfogade PR",
      sk: "Percento zlúčených PR",
      tr: "Birleştirilmiş PR Yüzdesi",
      "uk-ua": "Відсоток об'єднаних pull request`iв",
      uz: "Birlangan PR-lar foizi",
      vi: "Tỷ Lệ PR Đã Hợp Nhất",
      "zh-tw": "合併的 PR 百分比",
    },
    "statcard.ranktitle": {
      ar: `${encodedName} إحصائيات غيت هاب`,
      bn: `${encodedName} এর GitHub পরিসংখ্যান`,
      cn: `${encodedName} 的 GitHub 统计数据`,
      cs: `GitHub statistiky uživatele ${encodedName}`,
      de: `${encodedName + apostrophe} GitHub-Statistiken`,
      el: `Στατιστικά GitHub του ${encodedName}`,
      en: `${encodedName}'${apostrophe} GitHub Rank`,
      es: `Estadísticas de GitHub de ${encodedName}`,
      fr: `Statistiques GitHub de ${encodedName}`,
      hi: `${encodedName} का GitHub दर्जा`,
      hu: `${encodedName} GitHub statisztika`,
      id: `Statistik GitHub ${encodedName}`,
      it: `Statistiche GitHub di ${encodedName}`,
      ja: `${encodedName} の GitHub ランク`,
      kr: `${encodedName}의 GitHub 통계`,
      ml: `${encodedName}'${apostrophe} ഗിറ്റ്ഹബ് സ്ഥിതിവിവരക്കണക്കുകൾ`,
      my: `Statistik GitHub ${encodedName}`,
      nl: `${encodedName}'${apostrophe} GitHub-statistieken`,
      np: `${encodedName}'${apostrophe} गिटहब तथ्याङ्क`,
      pl: `Statystyki GitHub użytkownika ${encodedName}`,
      "pt-br": `Estatísticas do GitHub de ${encodedName}`,
      "pt-pt": `Estatísticas do GitHub de ${encodedName}`,
      ru: `Статистика GitHub пользователя ${encodedName}`,
      se: `GitHubstatistik för ${encodedName}`,
      sk: `GitHub štatistiky používateľa ${encodedName}`,
      tr: `${encodedName} Hesabının GitHub Yıldızları`,
      "uk-ua": `Статистика GitHub користувача ${encodedName}`,
      uz: `${encodedName}ning GitHub'dagi statistikasi`,
      vi: `Thống Kê GitHub ${encodedName}`,
      "zh-tw": `${encodedName} 的 GitHub 統計數據`,
    },
    "statcard.reviews": {
      ar: "تمت مراجعة إجمالي العلاقات العامة",
      bn: "সর্বমোট পুনরালোচনা করা PR",
      cn: "審查的 PR 總數",
      cs: "Celkový počet PR",
      de: "Insgesamt überprüfte PRs",
      el: "Σύνολο Αναθεωρημένων PR",
      en: "Total PRs Reviewed",
      es: "PR totales revisados",
      fr: "Nombre total de PR examinés",
      hi: "कुल PR जिनकी समीक्षा की",
      hu: "Összes ellenőrzött PR",
      id: "Total PR yang Direview",
      it: "PR totali esaminati",
      ja: "レビューされた PR の総数",
      kr: "검토된 총 PR",
      ml: "ആകെ പുൾ അഭിപ്രായങ്ങൾ",
      my: "Jumlah PR Dikaji Semula",
      nl: "Totaal beoordeelde PR's",
      np: "कुल पीआर समीक्षित",
      pl: "Łącznie sprawdzonych PR",
      "pt-br": "Total de PRs revisados",
      "pt-pt": "Total de PRs revistos",
      ru: "Всего pull request`ов проверено",
      se: "Totalt antal granskade PR",
      sk: "Celkový počet PR",
      tr: "İncelenen toplam PR",
      "uk-ua": "Всього pull request`iв перевірено",
      uz: "Koʻrib chiqilgan PR-lar soni",
      vi: "Tổng Số PR Đã Xem Xét",
      "zh-tw": "审查的 PR 总数",
    },
    "statcard.title": {
      ar: `${encodedName} إحصائيات غيت هاب`,
      bn: `${encodedName} এর GitHub পরিসংখ্যান`,
      cn: `${encodedName} 的 GitHub 统计数据`,
      cs: `GitHub statistiky uživatele ${encodedName}`,
      de: `${encodedName + apostrophe} GitHub-Statistiken`,
      el: `Στατιστικά GitHub του ${encodedName}`,
      en: `${encodedName}'${apostrophe} GitHub Stats`,
      es: `Estadísticas de GitHub de ${encodedName}`,
      fr: `Statistiques GitHub de ${encodedName}`,
      hi: `${encodedName} के GitHub आंकड़े`,
      hu: `${encodedName} GitHub statisztika`,
      id: `Statistik GitHub ${encodedName}`,
      it: `Statistiche GitHub di ${encodedName}`,
      ja: `${encodedName}の GitHub 統計`,
      kr: `${encodedName}의 GitHub 통계`,
      ml: `${encodedName}'${apostrophe} ഗിറ്റ്ഹബ് സ്ഥിതിവിവരക്കണക്കുകൾ`,
      my: `Statistik GitHub ${encodedName}`,
      nl: `${encodedName}'${apostrophe} GitHub-statistieken`,
      np: `${encodedName}'${apostrophe} गिटहब तथ्याङ्क`,
      pl: `Statystyki GitHub użytkownika ${encodedName}`,
      "pt-br": `Estatísticas do GitHub de ${encodedName}`,
      "pt-pt": `Estatísticas do GitHub de ${encodedName}`,
      ru: `Статистика GitHub пользователя ${encodedName}`,
      se: `GitHubstatistik för ${encodedName}`,
      sk: `GitHub štatistiky používateľa ${encodedName}`,
      tr: `${encodedName} Hesabının GitHub Yıldızları`,
      "uk-ua": `Статистика GitHub користувача ${encodedName}`,
      uz: `${encodedName}ning GitHub'dagi statistikasi`,
      vi: `Thống Kê GitHub ${encodedName}`,
      "zh-tw": `${encodedName} 的 GitHub 統計數據`,
    },
    "statcard.totalstars": {
      ar: "مجموع النجوم",
      bn: "সর্বমোট Star",
      cn: "获标星数（star）",
      cs: "Celkem hvězd",
      de: "Insgesamt erhaltene Sterne",
      el: "Σύνολο Αστεριών",
      en: "Total Stars Earned",
      es: "Estrellas totales",
      fr: "Total d'étoiles",
      hi: "कुल Star",
      hu: "Csillagok",
      id: "Total Bintang",
      it: "Stelle totali",
      ja: "スターされた数",
      kr: "받은 스타 수",
      ml: "ആകെ നക്ഷത്രങ്ങൾ",
      my: "Jumlah Bintang",
      nl: "Totaal Sterren Ontvangen",
      np: "कुल ताराहरू",
      pl: "Liczba otrzymanych gwiazdek",
      "pt-br": "Total de estrelas",
      "pt-pt": "Total de estrelas",
      ru: "Всего звезд",
      se: "Antal intjänade stjärnor",
      sk: "Hviezdy",
      tr: "Toplam Yıldız",
      "uk-ua": "Всього зірок",
      uz: "Yulduzchalar",
      vi: "Tổng Số Sao",
      "zh-tw": "獲標星數（star）",
    },
  };
};

const repoCardLocales = {
  "repocard.archived": {
    ar: "محفوظ",
    bn: "আর্কাইভড",
    cn: "已归档",
    cs: "Archivováno",
    de: "Archiviert",
    el: "Αρχειοθετημένα",
    en: "Archived",
    es: "Archivados",
    fr: "Archivé",
    hi: "संग्रहित",
    hu: "Archivált",
    id: "Arsip",
    it: "Archiviata",
    ja: "アーカイブ済み",
    kr: "보관됨",
    ml: "ശേഖരിച്ചത്",
    my: "Arkib",
    nl: "Gearchiveerd",
    np: "अभिलेख राखियो",
    pl: "Zarchiwizowano",
    "pt-br": "Arquivados",
    "pt-pt": "Arquivados",
    ru: "Архивирован",
    se: "Arkiverade",
    sk: "Archivované",
    tr: "Arşiv",
    "uk-ua": "Архивований",
    uz: "Arxivlangan",
    vi: "Đã Lưu Trữ",
    "zh-tw": "已歸檔",
  },
  "repocard.template": {
    ar: "قالب",
    bn: "টেমপ্লেট",
    cn: "模板",
    cs: "Šablona",
    de: "Vorlage",
    el: "Πρότυπο",
    en: "Template",
    es: "Plantilla",
    fr: "Modèle",
    hi: "टेम्पलेट",
    hu: "Sablon",
    id: "Pola",
    it: "Template",
    ja: "テンプレート",
    kr: "템플릿",
    ml: "ടെംപ്ലേറ്റ്",
    my: "Templat",
    nl: "Sjabloon",
    np: "टेम्पलेट",
    pl: "Szablony",
    "pt-br": "Modelo",
    "pt-pt": "Modelo",
    ru: "Шаблон",
    se: "Mall",
    sk: "Šablóna",
    tr: "Şablon",
    "uk-ua": "Шаблон",
    uz: "Shablon",
    vi: "Mẫu",
    "zh-tw": "模板",
  },
};

const langCardLocales = {
  "langcard.nodata": {
    ar: "لا توجد بيانات لغات.",
    bn: "কোন ভাষার ডেটা নেই।",
    cn: "沒有語言數據。",
    cs: "Žádné jazykové údaje.",
    de: "Keine Sprachdaten.",
    el: "Δεν υπάρχουν δεδομένα γλωσσών.",
    en: "No languages data.",
    es: "Sin datos de idiomas.",
    fr: "Aucune donnée sur les langues.",
    hi: "कोई भाषा डेटा उपलब्ध नहीं है।",
    hu: "Nincsenek nyelvi adatok.",
    id: "Tidak ada data bahasa.",
    it: "Nessun dato sulle lingue.",
    ja: "言語データがありません。",
    kr: "언어 데이터가 없습니다.",
    ml: "ഭാഷാ ഡാറ്റയില്ല.",
    my: "Tiada data bahasa.",
    nl: "Ingen sprogdata.",
    np: "कुनै भाषा डाटा छैन।",
    pl: "Brak danych dotyczących języków.",
    "pt-br": "Sem dados de idiomas.",
    "pt-pt": "Sem dados de idiomas.",
    ru: "Нет данных о языках.",
    se: "Inga språkdata.",
    sk: "Žiadne údaje o jazykoch.",
    tr: "Dil verisi yok.",
    "uk-ua": "Немає даних про мови.",
    uz: "Til haqida ma'lumot yo'q.",
    vi: "Không có dữ liệu ngôn ngữ.",
    "zh-tw": "沒有語言數據。",
  },
  "langcard.title": {
    ar: "أكثر اللغات إستخداماً",
    bn: "সর্বাধিক ব্যবহৃত ভাষা সমূহ",
    cn: "最常用的语言",
    cs: "Nejpoužívanější jazyky",
    de: "Meist verwendete Sprachen",
    el: "Οι περισσότερο χρησιμοποιούμενες γλώσσες",
    en: "Most Used Languages",
    es: "Lenguajes más usados",
    fr: "Langages les plus utilisés",
    hi: "सर्वाधिक प्रयुक्त प्रोग्रामिंग भाषाएँ",
    hu: "Leggyakrabban használt nyelvek",
    id: "Bahasa Yang Paling Banyak Digunakan",
    it: "Linguaggi più utilizzati",
    ja: "最もよく使っている言語",
    kr: "가장 많이 사용된 언어",
    ml: "കൂടുതൽ ഉപയോഗിച്ച ഭാഷകൾ",
    my: "Bahasa Paling Digunakan",
    nl: "Meest gebruikte talen",
    np: "अधिक प्रयोग गरिएको भाषाहरू",
    pl: "Najczęściej używane języki",
    "pt-br": "Linguagens mais usadas",
    "pt-pt": "Idiomas mais usados",
    ru: "Наиболее часто используемые языки",
    se: "Mest använda språken",
    sk: "Najviac používané jazyky",
    tr: "En Çok Kullanılan Diller",
    "uk-ua": "Найчастіше використовувані мови",
    uz: "Eng koʻp ishlatiladigan tillar",
    vi: "Ngôn Ngữ Thường Sử Dụng",
    "zh-tw": "最常用的語言",
  },
};

const wakatimeCardLocales = {
  "wakatimecard.last7days": {
    ar: "آخر 7 أيام",
    bn: "গত ৭ দিন",
    cn: "最近 7 天",
    cs: "Posledních 7 dní",
    de: "Letzte 7 Tage",
    el: "Τελευταίες 7 ημέρες",
    en: "last 7 days",
    es: "Últimos 7 días",
    fr: "7 derniers jours",
    hi: "पिछले ७ दिन के",
    hu: "Elmúlt 7 nap",
    id: "7 hari terakhir",
    it: "Ultimi 7 giorni",
    ja: "過去 7 日間",
    kr: "지난 7 일",
    ml: "കഴിഞ്ഞ 7 ദിവസം",
    my: "7 hari lepas",
    nl: "Afgelopen 7 dagen",
    np: "गत ७ दिन",
    pl: "Ostatnie 7 dni",
    "pt-br": "Últimos 7 dias",
    "pt-pt": "Últimos 7 dias",
    ru: "Последние 7 дней",
    se: "Senaste 7 dagarna",
    sk: "Posledných 7 dní",
    tr: "Son 7 gün",
    "uk-ua": "Останні 7 днів",
    uz: "O'tgan 7 kun",
    vi: "7 ngày qua",
    "zh-tw": "最近 7 天",
  },
  "wakatimecard.lastyear": {
    ar: "العام الماضي",
    bn: "গত বছর",
    cn: "去年",
    cs: "Minulý rok",
    de: "Letztes Jahr",
    el: "Πέρυσι",
    en: "last year",
    es: "El año pasado",
    hi: "पिछले साल के",
    fr: "L'année dernière",
    hu: "Tavaly",
    id: "Tahun lalu",
    it: "L'anno scorso",
    ja: "昨年",
    kr: "작년",
    ml: "കഴിഞ്ഞ വർഷം",
    my: "Tahun lepas",
    nl: "Vorig jaar",
    np: "गत वर्ष",
    pl: "W zeszłym roku",
    "pt-br": "Ano passado",
    "pt-pt": "Ano passado",
    ru: "За прошлый год",
    se: "Förra året",
    sk: "Minulý rok",
    tr: "Geçen yıl",
    "uk-ua": "За минулий рік",
    uz: "O'tgan yil",
    vi: "Năm ngoái",
    "zh-tw": "去年",
  },
  "wakatimecard.nocodedetails": {
    ar: "المستخدم لا يشارك معلومات تفصيلية عن البرمجة",
    bn: "ব্যবহারকারী বিস্তারিত কোড পরিসংখ্যান প্রকাশ করেন না",
    cn: "用户不公开分享详细的代码统计信息",
    cs: "Uživatel nesdílí podrobné statistiky kódu",
    de: "Benutzer teilt keine detaillierten Code-Statistiken",
    el: "Ο χρήστης δεν δημοσιεύει δημόσια λεπτομερείς στατιστικές κώδικα",
    en: "User doesn't publicly share detailed code statistics",
    es: "El usuario no comparte públicamente estadísticas detalladas de código",
    fr: "L'utilisateur ne partage pas publiquement de statistiques de code détaillées",
    hi: "उपयोगकर्ता विस्तृत कोड आंकड़े सार्वजनिक रूप से साझा नहीं करते हैं",
    hu: "A felhasználó nem osztja meg nyilvánosan a részletes kódstatisztikákat",
    id: "Pengguna tidak membagikan statistik kode terperinci secara publik",
    it: "L'utente non condivide pubblicamente statistiche dettagliate sul codice",
    ja: "ユーザーは詳細なコード統計を公開しません",
    kr: "사용자는 자세한 코드 통계를 공개하지 않습니다",
    ml: "ഉപയോക്താവ് പൊതുവെ വിശദീകരിച്ച കോഡ് സ്റ്റാറ്റിസ്റ്റിക്സ് പങ്കിടുന്നില്ല",
    my: "Pengguna tidak berkongsi statistik kod terperinci secara awam",
    nl: "Gebruiker deelt geen gedetailleerde code-statistieken",
    np: "प्रयोगकर्ता सार्वजनिक रूपमा विस्तृत कोड तथ्याङ्क साझा गर्दैन",
    pl: "Użytkownik nie udostępnia publicznie szczegółowych statystyk kodu",
    "pt-br":
      "O usuário não compartilha publicamente estatísticas detalhadas de código",
    "pt-pt":
      "O utilizador não partilha publicamente estatísticas detalhadas de código",
    ru: "Пользователь не делится подробной статистикой кода",
    se: "Användaren delar inte offentligt detaljerad kodstatistik",
    sk: "Používateľ neposkytuje verejne podrobné štatistiky kódu",
    tr: "Kullanıcı ayrıntılı kod istatistiklerini herkese açık olarak paylaşmıyor",
    "uk-ua": "Користувач не публікує детальну статистику коду",
    uz: "Foydalanuvchi umumiy ko`d statistikasini ochiq ravishda almashmaydi",
    vi: "Người dùng không chia sẻ thống kê mã chi tiết công khai",
    "zh-tw": "使用者不公開分享詳細的程式碼統計資訊",
  },
  "wakatimecard.nocodingactivity": {
    ar: "لا يوجد نشاط برمجي لهذا الأسبوع",
    bn: "এই সপ্তাহে কোন কোডিং অ্যাক্টিভিটি নেই",
    cn: "本周没有编程活动",
    cs: "Tento týden žádná aktivita v kódování",
    de: "Keine Aktivitäten in dieser Woche",
    el: "Δεν υπάρχει δραστηριότητα κώδικα γι' αυτή την εβδομάδα",
    en: "No coding activity this week",
    es: "No hay actividad de codificación esta semana",
    fr: "Aucune activité de codage cette semaine",
    hi: "इस सप्ताह कोई कोडिंग गतिविधि नहीं हुई",
    hu: "Nem volt aktivitás ezen a héten",
    id: "Tidak ada aktivitas perkodingan minggu ini",
    it: "Nessuna attività in questa settimana",
    ja: "今週のコーディング活動はありません",
    kr: "이번 주 작업내역 없음",
    ml: "ഈ ആഴ്ച കോഡിംഗ് പ്രവർത്തനങ്ങളൊന്നുമില്ല",
    my: "Tiada aktiviti pengekodan minggu ini",
    nl: "Geen programmeeractiviteit deze week",
    np: "यस हप्ता कुनै कोडिंग गतिविधि छैन",
    pl: "Brak aktywności w tym tygodniu",
    "pt-br": "Nenhuma atividade de codificação esta semana",
    "pt-pt": "Sem atividade esta semana",
    ru: "На этой неделе не было активности",
    se: "Ingen aktivitet denna vecka",
    sk: "Žiadna kódovacia aktivita tento týždeň",
    tr: "Bu hafta herhangi bir kod yazma aktivitesi olmadı",
    "uk-ua": "На цьому тижні не було активності",
    uz: "Bu hafta faol bo'lmadi",
    vi: "Không Có Hoạt Động Trong Tuần Này",
    "zh-tw": "本周沒有編程活動",
  },
  "wakatimecard.notpublic": {
    ar: "ملف المستخدم غير عام",
    bn: "WakaTime ব্যবহারকারীর প্রোফাইল প্রকাশ্য নয়",
    cn: "WakaTime 用户个人资料未公开",
    cs: "Profil uživatele WakaTime není veřejný",
    de: "WakaTime-Benutzerprofil nicht öffentlich",
    el: "Το προφίλ χρήστη WakaTime δεν είναι δημόσιο",
    en: "WakaTime user profile not public",
    es: "Perfil de usuario de WakaTime no público",
    fr: "Profil utilisateur WakaTime non public",
    hi: "WakaTime उपयोगकर्ता की प्रोफ़ाइल सार्वजनिक नहीं है",
    hu: "A WakaTime felhasználói profilja nem nyilvános",
    id: "Profil pengguna WakaTime tidak publik",
    it: "Profilo utente WakaTime non pubblico",
    ja: "WakaTime ユーザープロファイルは公開されていません",
    kr: "WakaTime 사용자 프로필이 공개되지 않았습니다",
    ml: "WakaTime ഉപയോക്തൃ പ്രൊഫൈൽ പൊതുവായി പ്രസിദ്ധീകരിക്കപ്പെടാത്തതാണ്",
    my: "Profil pengguna WakaTime tidak awam",
    nl: "WakaTime gebruikersprofiel niet openbaar",
    np: "WakaTime प्रयोगकर्ता प्रोफाइल सार्वजनिक छैन",
    pl: "Profil użytkownika WakaTime nie jest publiczny",
    "pt-br": "Perfil de usuário WakaTime não público",
    "pt-pt": "Perfil de usuário WakaTime não público",
    ru: "Профиль пользователя WakaTime не является общедоступным",
    se: "WakaTime användarprofil inte offentlig",
    sk: "Profil používateľa WakaTime nie je verejný",
    tr: "WakaTime kullanıcı profili herkese açık değil",
    "uk-ua": "Профіль користувача WakaTime не є публічним",
    uz: "WakaTime foydalanuvchi profili ochiq emas",
    vi: "Hồ sơ người dùng WakaTime không công khai",
    "zh-tw": "WakaTime 使用者個人資料未公開",
  },
  "wakatimecard.title": {
    ar: "إحصائيات واكا تايم",
    bn: "WakaTime স্ট্যাটাস",
    cn: "WakaTime 周统计",
    cs: "Statistiky WakaTime",
    de: "WakaTime Status",
    el: "Στατιστικά WakaTime",
    en: "WakaTime Stats",
    es: "Estadísticas de WakaTime",
    fr: "Statistiques de WakaTime",
    hi: "WakaTime आंकड़े",
    hu: "WakaTime statisztika",
    id: "Status WakaTime",
    it: "Statistiche WakaTime",
    ja: "WakaTime ワカタイム統計",
    kr: "WakaTime 주간 통계",
    ml: "വേക്ക് ടൈം സ്ഥിതിവിവരക്കണക്കുകൾ",
    my: "Statistik WakaTime",
    nl: "WakaTime-statistieken",
    np: "WakaTime तथ्या .्क",
    pl: "Statystyki WakaTime",
    "pt-br": "Estatísticas WakaTime",
    "pt-pt": "Estatísticas WakaTime",
    ru: "Статистика WakaTime",
    se: "WakaTime statistik",
    sk: "WakaTime štatistika",
    tr: "WakaTime İstatistikler",
    "uk-ua": "Статистика WakaTime",
    uz: "WakaTime statistikasi",
    vi: "Thống Kê WakaTime",
    "zh-tw": "WakaTime 周統計",
  },
};

const availableLocales = Object.keys(repoCardLocales["repocard.archived"]);

/**
 * Checks whether the locale is available or not.
 *
 * @param {string} locale The locale to check.
 * @returns {boolean} Boolean specifying whether the locale is available or not.
 */
const isLocaleAvailable = (locale) => {
  return availableLocales.includes(locale.toLowerCase());
};

export {
  availableLocales,
  isLocaleAvailable,
  langCardLocales,
  repoCardLocales,
  statCardLocales,
  wakatimeCardLocales,
};
