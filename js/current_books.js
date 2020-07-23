const books_read = [
    {
      "title": "Die kleine Hexe",
      "authors": [
        {
          "name": "Otfried Preu\u00dfler"
        },
        {
          "name": "Winnie Gebhardt-Gayler"
        }
      ],
      "published": "1957",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1334150369l/1148052.jpg",
      "pages": 127,
      "isbn": "9783522105804",
      "year_read": "1997",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/1148052.Die_kleine_Hexe"
    },
    {
      "title": "Suths Geschichte",
      "authors": [
        {
          "name": "Peter Dickinson"
        },
        {
          "name": "Henning Ahrens"
        }
      ],
      "published": "1998",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1343074668l/8050763.jpg",
      "pages": 175,
      "isbn": "9783551351333",
      "year_read": "1998",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/8050763-suths-geschichte"
    },
    {
      "title": "Noli's Story",
      "authors": [
        {
          "name": "Peter Dickinson"
        }
      ],
      "published": "1998",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1181878996l/1208669.jpg",
      "pages": 150,
      "isbn": "9780399233289",
      "year_read": "1998",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/1208669.Noli_s_Story"
    },
    {
      "title": "Po's Story",
      "authors": [
        {
          "name": "Peter Dickinson"
        },
        {
          "name": "Nenad Jakesevic"
        }
      ],
      "published": "1998",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1173449355l/289578._SY475_.jpg",
      "pages": 208,
      "isbn": "9780448417110",
      "year_read": "1998",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/289578.Po_s_Story"
    },
    {
      "title": "Der kleine Vampir",
      "authors": [
        {
          "name": "Angela Sommer-Bodenburg"
        }
      ],
      "published": "1979",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1519050983l/2564031._SY475_.jpg",
      "pages": 128,
      "isbn": "no isbn found",
      "year_read": "1998",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/2564031-der-kleine-vampir"
    },
    {
      "title": "Mit Jeans in die Steinzeit. Ein Ferienabenteuer in S\u00fcdfrankreich",
      "authors": [
        {
          "name": "Wolfgang Kuhn"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1266461814l/4019035.jpg",
      "pages": 200,
      "isbn": "9783423701440",
      "year_read": "2000",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/4019035-mit-jeans-in-die-steinzeit-ein-ferienabenteuer-in-s-dfrankreich"
    },
    {
      "title": "Manas Geschichte",
      "authors": [
        {
          "name": "Peter Dickinson"
        }
      ],
      "published": "1998",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1343075553l/15766903.jpg",
      "pages": 176,
      "isbn": "9783551351531",
      "year_read": "2001",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/15766903-manas-geschichte"
    },
    {
      "title": "Das M\u00e4dchen von Atlantis",
      "authors": [
        {
          "name": "Wolfgang Hohlbein"
        }
      ],
      "published": "1993",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1368198974l/97160.jpg",
      "pages": 215,
      "isbn": "9783800028184",
      "year_read": "2001",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/97160.Das_M_dchen_von_Atlantis"
    },
    {
      "title": "Die Herren der Tiefe",
      "authors": [
        {
          "name": "Wolfgang Hohlbein"
        }
      ],
      "published": "1994",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1171371888l/97175.jpg",
      "pages": 177,
      "isbn": "9783800028191",
      "year_read": "2001",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/97175.Die_Herren_der_Tiefe"
    },
    {
      "title": "Der Pferdefl\u00fcsterer",
      "authors": [
        {
          "name": "Nicholas Evans"
        },
        {
          "name": "Bernhard Robben"
        }
      ],
      "published": "1995",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1267876808l/3235609.jpg",
      "pages": 413,
      "isbn": "9783442431878",
      "year_read": "2002",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/3235609-der-pferdefl-sterer"
    },
    {
      "title": "Das Drachentor",
      "authors": [
        {
          "name": "Jenny-Mai Nuyen"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1187624861l/1739652._SY475_.jpg",
      "pages": 576,
      "isbn": "9783570303887",
      "year_read": "2002",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/1739652.Das_Drachentor"
    },
    {
      "title": "Russendisko",
      "authors": [
        {
          "name": "Wladimir Kaminer"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1408814739l/199953.jpg",
      "pages": 192,
      "isbn": "9783442545193",
      "year_read": "2002",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/199953.Russendisko"
    },
    {
      "title": "Die rote Zora und ihre Bande",
      "authors": [
        {
          "name": "Kurt Held"
        }
      ],
      "published": "1941",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1177495168l/708465._SY475_.jpg",
      "pages": 383,
      "isbn": "9783794101221",
      "year_read": "2003",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/708465.Die_rote_Zora_und_ihre_Bande"
    },
    {
      "title": "Moby-Dick",
      "authors": [
        {
          "name": "Herman Melville"
        }
      ],
      "published": "1851",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1331948006l/5062266.jpg",
      "pages": 668,
      "isbn": "9783746617206",
      "year_read": "2003",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/5062266-moby-dick"
    },
    {
      "title": "Radioactive: Marie and Pierre Curie, A Tale of Love and Fallout",
      "authors": [
        {
          "name": "Lauren Redniss"
        }
      ],
      "published": "2010",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1296406398l/8968323.jpg",
      "pages": 208,
      "isbn": "9780061351327",
      "year_read": "2003",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/8968323-radioactive"
    },
    {
      "title": "Die Pferde vom Roggenhof",
      "authors": [
        {
          "name": "Tina Caspari"
        }
      ],
      "published": "2001",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1559815846l/8499440.jpg",
      "pages": 347,
      "isbn": "9783505117565",
      "year_read": "2003",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/8499440-die-pferde-vom-roggenhof"
    },
    {
      "title": "Feuer und Stein",
      "authors": [
        {
          "name": "Diana Gabaldon"
        },
        {
          "name": "Barbara Schnell"
        }
      ],
      "published": "1991",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1434206897l/25720497._SY475_.jpg",
      "pages": 1135,
      "isbn": "9783426518021",
      "year_read": "2004",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/25720497-feuer-und-stein"
    },
    {
      "title": "Outlander - Die geliehene Zeit",
      "authors": [
        {
          "name": "Diana Gabaldon"
        },
        {
          "name": "Barbara Schnell"
        }
      ],
      "published": "1992",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1498513139l/35521150._SY475_.jpg",
      "pages": 992,
      "isbn": "no isbn found",
      "year_read": "2004",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/35521150-outlander---die-geliehene-zeit"
    },
    {
      "title": "Ferne Ufer",
      "authors": [
        {
          "name": "Diana Gabaldon"
        },
        {
          "name": "Petra Hrabak"
        },
        {
          "name": "Sonja Schuhmacher"
        },
        {
          "name": "Barbara Steckham"
        }
      ],
      "published": "1993",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1183281360l/1397521.jpg",
      "pages": 1076,
      "isbn": "9783442350957",
      "year_read": "2004",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/1397521.Ferne_Ufer"
    },
    {
      "title": "Der Ruf der Trommel",
      "authors": [
        {
          "name": "Diana Gabaldon"
        }
      ],
      "published": "1996",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1359404639l/1397522.jpg",
      "pages": 1196,
      "isbn": "9783442352722",
      "year_read": "2004",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/1397522.Der_Ruf_der_Trommel"
    },
    {
      "title": "Das flammende Kreuz",
      "authors": [
        {
          "name": "Diana Gabaldon"
        }
      ],
      "published": "2001",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1359406519l/1288988.jpg",
      "pages": 1276,
      "isbn": "9783764500566",
      "year_read": "2004",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/1288988.Das_flammende_Kreuz"
    },
    {
      "title": "Die Stadt der wilden G\u00f6tter",
      "authors": [
        {
          "name": "Isabel Allende"
        }
      ],
      "published": "2002",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1185376751l/1574115.jpg",
      "pages": 384,
      "isbn": "9783423621915",
      "year_read": "2004",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/1574115.Die_Stadt_der_wilden_G_tter"
    },
    {
      "title": "Im Reich Des Goldenen Drachen",
      "authors": [
        {
          "name": "Isabel Allende"
        }
      ],
      "published": "2003",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1181595436l/1169271._SY475_.jpg",
      "pages": 384,
      "isbn": "9783423622394",
      "year_read": "2004",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/1169271.Im_Reich_Des_Goldenen_Drachen"
    },
    {
      "title": "Im Bann der Masken",
      "authors": [
        {
          "name": "Isabel Allende"
        }
      ],
      "published": "2004",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1185381622l/1574651._SY475_.jpg",
      "pages": 302,
      "isbn": "9783423623056",
      "year_read": "2004",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/1574651.Im_Bann_der_Masken"
    },
    {
      "title": "Leben des Galilei",
      "authors": [
        {
          "name": "Bertolt Brecht"
        }
      ],
      "published": "1943",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1368010337l/241526.jpg",
      "pages": 161,
      "isbn": "9783518100011",
      "year_read": "2005",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/241526.Leben_des_Galilei"
    },
    {
      "title": "Die wei\u00dfe Massai",
      "authors": [
        {
          "name": "Corinne Hofmann"
        }
      ],
      "published": "1998",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1165764023l/8776._SY475_.jpg",
      "pages": 462,
      "isbn": "9783426614969",
      "year_read": "2005",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/8776.Die_wei_e_Massai"
    },
    {
      "title": "Ein Hauch von Schnee und Asche",
      "authors": [
        {
          "name": "Diana Gabaldon"
        },
        {
          "name": "Barbara Schnell"
        }
      ],
      "published": "2005",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1359407313l/1618441.jpg",
      "pages": 1298,
      "isbn": "9783442367313",
      "year_read": "2005",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/1618441.Ein_Hauch_von_Schnee_und_Asche"
    },
    {
      "title": "Die Welt der Buddenbrooks",
      "authors": [
        {
          "name": "Hans Wi\u00dfkirchen"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1368181002l/5863566.jpg",
      "pages": 254,
      "isbn": "no isbn found",
      "year_read": "2006",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/5863566-die-welt-der-buddenbrooks"
    },
    {
      "title": "Zur\u00fcck aus Afrika",
      "authors": [
        {
          "name": "Corinne Hofmann"
        }
      ],
      "published": "2003",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1165764441l/8790._SY475_.jpg",
      "pages": 233,
      "isbn": "9783426777176",
      "year_read": "2006",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/8790.Zur_ck_aus_Afrika"
    },
    {
      "title": "Wiedersehen in Barsaloi",
      "authors": [
        {
          "name": "Corinne Hofmann"
        }
      ],
      "published": "2005",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1184333348l/1500230._SY475_.jpg",
      "pages": 256,
      "isbn": "9783426778937",
      "year_read": "2006",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/1500230.Wiedersehen_in_Barsaloi"
    },
    {
      "title": "Der Hexenhammer. Malleus Maleficarum",
      "authors": [
        {
          "name": "Heinrich Kramer"
        },
        {
          "name": "Wolfgang Behringer"
        }
      ],
      "published": "1485",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1467793754l/1004006._SY475_.jpg",
      "pages": 864,
      "isbn": "9783423307802",
      "year_read": "2006",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/1004006.Der_Hexenhammer_Malleus_Maleficarum"
    },
    {
      "title": "Der Beobachter",
      "authors": [
        {
          "name": "Charlotte Link"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1329253698l/11865856.jpg",
      "pages": 656,
      "isbn": "9783442367269",
      "year_read": "2007",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/11865856-der-beobachter"
    },
    {
      "title": "Nijura. Das Erbe der Elfenkrone",
      "authors": [
        {
          "name": "Jenny-Mai Nuyen"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1187624888l/1739655._SY475_.jpg",
      "pages": 512,
      "isbn": "9783570130582",
      "year_read": "2007",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/1739655.Nijura_Das_Erbe_der_Elfenkrone"
    },
    {
      "title": "Oskar und die Dame in Rosa",
      "authors": [
        {
          "name": "\u00c9ric-Emmanuel Schmitt"
        },
        {
          "name": "Annette B\u00e4cker"
        },
        {
          "name": "Paul B\u00e4cker"
        }
      ],
      "published": "2002",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1182724208l/1319341._SY475_.jpg",
      "pages": 112,
      "isbn": "9783596161317",
      "year_read": "2007",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/1319341.Oskar_und_die_Dame_in_Rosa"
    },
    {
      "title": "Schmitz' Katze",
      "authors": [
        {
          "name": "Ralf  Schmitz"
        }
      ],
      "published": "2008",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327236609l/4755219.jpg",
      "pages": 266,
      "isbn": "9783596179787",
      "year_read": "2008",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/4755219-schmitz-katze"
    },
    {
      "title": "Revier im vierten Stock: Bekenntnisse einer Hauskatze",
      "authors": [
        {
          "name": "Norbert Klugmann"
        }
      ],
      "published": "1996",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1355135047l/7267622.jpg",
      "pages": 220,
      "isbn": "9783833488917",
      "year_read": "2008",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/7267622-revier-im-vierten-stock"
    },
    {
      "title": "Sakrileg",
      "authors": [
        {
          "name": "Dan Brown"
        },
        {
          "name": "Piet van Poll"
        }
      ],
      "published": "2003",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1180911752l/1091342._SX318_.jpg",
      "pages": 608,
      "isbn": "9783404154852",
      "year_read": "2008",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/1091342.Sakrileg"
    },
    {
      "title": "Illuminati",
      "authors": [
        {
          "name": "Dan Brown"
        },
        {
          "name": "Axel Merz"
        }
      ],
      "published": "2000",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1174340658l/383059.jpg",
      "pages": 716,
      "isbn": "9783404148660",
      "year_read": "2008",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/383059.Illuminati"
    },
    {
      "title": "Biss zum Morgengrauen",
      "authors": [
        {
          "name": "Stephenie Meyer"
        },
        {
          "name": "Karsten Kredel"
        }
      ],
      "published": "2005",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1329777188l/2198721.jpg",
      "pages": 528,
      "isbn": "9783551356901",
      "year_read": "2009",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/2198721.Biss_zum_Morgengrauen"
    },
    {
      "title": "Biss zur Mittagsstunde",
      "authors": [
        {
          "name": "Stephenie Meyer"
        },
        {
          "name": "Sylke Hachmeister"
        }
      ],
      "published": "2006",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1379077903l/2198719.jpg",
      "pages": 560,
      "isbn": "9783551581617",
      "year_read": "2009",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/2198719.Biss_zur_Mittagsstunde"
    },
    {
      "title": "Biss zum Abendrot",
      "authors": [
        {
          "name": "Stephenie Meyer"
        },
        {
          "name": "Sylke Hachmeister"
        }
      ],
      "published": "2007",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1379076632l/2198718.jpg",
      "pages": 623,
      "isbn": "9783551581662",
      "year_read": "2010",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/2198718.Biss_zum_Abendrot"
    },
    {
      "title": "Biss zum Ende der Nacht",
      "authors": [
        {
          "name": "Stephenie Meyer"
        },
        {
          "name": "Sylke Hachmeister"
        }
      ],
      "published": "2008",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1379075599l/4504046.jpg",
      "pages": 793,
      "isbn": "9783551581990",
      "year_read": "2010",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/4504046-biss-zum-ende-der-nacht"
    },
    {
      "title": "Wie ein einziger Tag",
      "authors": [
        {
          "name": "Nicholas Sparks"
        }
      ],
      "published": "1996",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1179348554l/906750.jpg",
      "pages": 204,
      "isbn": "9783453130517",
      "year_read": "2010",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/906750.Wie_ein_einziger_Tag"
    },
    {
      "title": "Es mu\u00df nicht immer Kaviar sein",
      "authors": [
        {
          "name": "Johannes Mario Simmel"
        }
      ],
      "published": "1960",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1229773277l/2886407.jpg",
      "pages": 550,
      "isbn": "9783763213795",
      "year_read": "2011",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/2886407-es-mu-nicht-immer-kaviar-sein"
    },
    {
      "title": "Und Nietzsche weinte",
      "authors": [
        {
          "name": "Irvin D. Yalom"
        }
      ],
      "published": "1992",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1363113096l/2015310.jpg",
      "pages": 448,
      "isbn": "9783442737284",
      "year_read": "2012",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/2015310.Und_Nietzsche_weinte"
    },
    {
      "title": "Das Leuchten der Stille",
      "authors": [
        {
          "name": "Nicholas Sparks"
        },
        {
          "name": "Adelheid Z\u00f6fel"
        }
      ],
      "published": "2006",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327924900l/3150985.jpg",
      "pages": 416,
      "isbn": "9783453405516",
      "year_read": "2012",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/3150985-das-leuchten-der-stille"
    },
    {
      "title": "Das M\u00e4dchen hinter dem Foto. Die Geschichte der Kim Phuc.",
      "authors": [
        {
          "name": "Denise Chong"
        }
      ],
      "published": "1999",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1178903025l/851407._SX318_.jpg",
      "pages": 448,
      "isbn": "9783404615155",
      "year_read": "2012",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/851407.Das_M_dchen_hinter_dem_Foto_Die_Geschichte_der_Kim_Phuc_"
    },
    {
      "title": "Brennen muss Salem",
      "authors": [
        {
          "name": "Stephen King"
        },
        {
          "name": "Peter Robert"
        },
        {
          "name": "Silvia Morawetz"
        }
      ],
      "published": "1975",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328571280l/7624142.jpg",
      "pages": 735,
      "isbn": "9783453407497",
      "year_read": "2012",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/7624142-brennen-muss-salem"
    },
    {
      "title": "Erfolg in der Nische - mein Weg zum Autor",
      "authors": [
        {
          "name": "Julian Borisov"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1510606317l/36589997._SX318_.jpg",
      "pages": 42,
      "isbn": "no isbn found",
      "year_read": "2013",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/36589997-erfolg-in-der-nische---mein-weg-zum-autor"
    },
    {
      "title": "Fifty Shades of Grey",
      "authors": [
        {
          "name": "E.L. James"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1385207843l/10818853.jpg",
      "pages": 356,
      "isbn": "9781612130293",
      "year_read": "2013",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/10818853-fifty-shades-of-grey"
    },
    {
      "title": "Sungs Laden",
      "authors": [
        {
          "name": "Karin Kalisa"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1435648827l/25822930._SY475_.jpg",
      "pages": 255,
      "isbn": "9783406681882",
      "year_read": "2013",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/25822930-sungs-laden"
    },
    {
      "title": "Der rote Sarg",
      "authors": [
        {
          "name": "Sam Eastland"
        },
        {
          "name": "Karl-Heinz Ebnet"
        }
      ],
      "published": "2011",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1379050717l/18485203.jpg",
      "pages": 367,
      "isbn": "no isbn found",
      "year_read": "2014",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/18485203-der-rote-sarg"
    },
    {
      "title": "Das M\u00e4dchen mit den Smaragdaugen",
      "authors": [
        {
          "name": "Carla Montero"
        },
        {
          "name": "Alexandra Baisch"
        }
      ],
      "published": "2012",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1395755141l/21557113.jpg",
      "pages": 734,
      "isbn": "no isbn found",
      "year_read": "2014",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/21557113-das-m-dchen-mit-den-smaragdaugen"
    },
    {
      "title": "Friction",
      "authors": [
        {
          "name": "Sandra Brown"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1434044640l/25114548._SY475_.jpg",
      "pages": 416,
      "isbn": "9781455581160",
      "year_read": "2014",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/25114548-friction"
    },
    {
      "title": "Das Caf\u00e9 am Rande der Welt",
      "authors": [
        {
          "name": "John P. Strelecky"
        },
        {
          "name": "Bettina Lemke"
        }
      ],
      "published": "2003",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1188241722l/1780947._SX318_.jpg",
      "pages": 128,
      "isbn": "9783423209694",
      "year_read": "2015",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/1780947.Das_Caf_am_Rande_der_Welt"
    },
    {
      "title": "Wiedersehen im Caf\u00e9 am Rande der Welt: Eine inspirierende Reise zum eigenen Selbst",
      "authors": [
        {
          "name": "John P. Strelecky"
        },
        {
          "name": "Root Leeb"
        },
        {
          "name": "Bettina Lemke"
        }
      ],
      "published": "2014",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1473865003l/32048337._SY475_.jpg",
      "pages": 204,
      "isbn": "no isbn found",
      "year_read": "2015",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/32048337-wiedersehen-im-caf-am-rande-der-welt"
    },
    {
      "title": "The New Odyssey: The Story of Europe's Refugee Crisis",
      "authors": [
        {
          "name": "Patrick Kingsley"
        }
      ],
      "published": "2016",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1460633062l/29914640._SY475_.jpg",
      "pages": 336,
      "isbn": "9781783351053",
      "year_read": "2016",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/29914640-the-new-odyssey"
    },
    {
      "title": "Ready Player One",
      "authors": [
        {
          "name": "Ernest Cline"
        }
      ],
      "published": "2011",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1561428264l/12359421._SY475_.jpg",
      "pages": 386,
      "isbn": "no isbn found",
      "year_read": "2016",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/12359421-ready-player-one"
    },
    {
      "title": "Tausend strahlende Sonnen",
      "authors": [
        {
          "name": "Khaled Hosseini"
        },
        {
          "name": "Michael Windgassen"
        }
      ],
      "published": "2007",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1330013600l/5978478.jpg",
      "pages": 381,
      "isbn": "9783833305894",
      "year_read": "2016",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/5978478-tausend-strahlende-sonnen"
    },
    {
      "title": "Naokos L\u00e4cheln",
      "authors": [
        {
          "name": "Haruki Murakami"
        },
        {
          "name": "Ursula Gr\u00e4fe"
        }
      ],
      "published": "1987",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386913907l/9987.jpg",
      "pages": 416,
      "isbn": "9783442730506",
      "year_read": "2016",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/9987.Naokos_L_cheln"
    },
    {
      "title": "Das Kapital",
      "authors": [
        {
          "name": "Karl Marx"
        },
        {
          "name": "Friedrich Engels"
        },
        {
          "name": "Serge L. Levitsky"
        }
      ],
      "published": "1867",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388289025l/238953.jpg",
      "pages": 356,
      "isbn": "9780895267115",
      "year_read": "2017",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/238953.Das_Kapital"
    },
    {
      "title": "1984",
      "authors": [
        {
          "name": "George Orwell"
        }
      ],
      "published": "1949",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532714506l/40961427._SX318_.jpg",
      "pages": 237,
      "isbn": "no isbn found",
      "year_read": "2017",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/40961427-1984"
    },
    {
      "title": "Das Parfum. Die Geschichte eines M\u00f6rders",
      "authors": [
        {
          "name": "Patrick S\u00fcskind"
        }
      ],
      "published": "1985",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1429720607l/2896.jpg",
      "pages": 321,
      "isbn": "9783257228007",
      "year_read": "2017",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/2896.Das_Parfum_Die_Geschichte_eines_M_rders"
    },
    {
      "title": "Nicht ohne meine Tochter: Betty Mahmoody, von ihrem persischen Ehemann in Teheran festgehalten, h\u00e4tte fliehen k\u00f6nnen, ...",
      "authors": [
        {
          "name": "Betty Mahmoody"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1570905373l/52736707._SX318_SY475_.jpg",
      "pages": 542,
      "isbn": "9783404608515",
      "year_read": "2017",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/52736707-nicht-ohne-meine-tochter"
    },
    {
      "title": "Die verbotene Frau: Meine Jahre mit Scheich Khalid von Dubai",
      "authors": [
        {
          "name": "Verena Wermuth"
        }
      ],
      "published": "2008",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1509235987l/36494061._SY475_.jpg",
      "pages": 304,
      "isbn": "no isbn found",
      "year_read": "2017",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/36494061-die-verbotene-frau"
    },
    {
      "title": "Die Entscheidung",
      "authors": [
        {
          "name": "Charlotte Link"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1582888813l/31200999.jpg",
      "pages": 576,
      "isbn": "9783764504410",
      "year_read": "2017",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/31200999-die-entscheidung"
    },
    {
      "title": "Die Suche",
      "authors": [
        {
          "name": "Charlotte Link"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1524085512l/39889872._SY475_.jpg",
      "pages": 657,
      "isbn": "no isbn found",
      "year_read": "2017",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/39889872-die-suche"
    },
    {
      "title": "Tschick",
      "authors": [
        {
          "name": "Wolfgang Herrndorf"
        }
      ],
      "published": "2010",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328186784l/9397145.jpg",
      "pages": 254,
      "isbn": "9783871347108",
      "year_read": "2017",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/9397145-tschick"
    },
    {
      "title": "Lavaters Maske",
      "authors": [
        {
          "name": "Jens Sparschuh"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405235832l/2733419.jpg",
      "pages": 264,
      "isbn": "9783462028430",
      "year_read": "2017",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/2733419-lavaters-maske"
    },
    {
      "title": "Sofies Welt",
      "authors": [
        {
          "name": "Jostein Gaarder"
        },
        {
          "name": "Gabriele Haefs"
        }
      ],
      "published": "1991",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1519557063l/118019._SY475_.jpg",
      "pages": 622,
      "isbn": "9783423620000",
      "year_read": "2017",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/118019.Sofies_Welt"
    },
    {
      "title": "Eine Mittelgewichts-Ehe",
      "authors": [
        {
          "name": "John Irving"
        },
        {
          "name": "Nikolaus Stingl"
        }
      ],
      "published": "1974",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1172352065l/167024._SY475_.jpg",
      "pages": 278,
      "isbn": "9783257216059",
      "year_read": "2017",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/167024.Eine_Mittelgewichts_Ehe"
    },
    {
      "title": "Ich bin dann mal weg: Meine Reise auf dem Jakobsweg",
      "authors": [
        {
          "name": "Hape Kerkeling"
        }
      ],
      "published": "2006",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1408456045l/1119256.jpg",
      "pages": 347,
      "isbn": "9783890293127",
      "year_read": "2018",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/1119256.Ich_bin_dann_mal_weg"
    },
    {
      "title": "The Rosie Project",
      "authors": [
        {
          "name": "Graeme Simsion"
        }
      ],
      "published": "2013",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1371651741l/16181775.jpg",
      "pages": 295,
      "isbn": "9781476729084",
      "year_read": "2018",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/16181775-the-rosie-project"
    },
    {
      "title": "Harry Potter und der Stein der Weisen",
      "authors": [
        {
          "name": "J.K. Rowling"
        },
        {
          "name": "Klaus Fritz"
        }
      ],
      "published": "1997",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1541536455l/40956824._SY475_.jpg",
      "pages": 334,
      "isbn": "no isbn found",
      "year_read": "2018",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/40956824-harry-potter-und-der-stein-der-weisen"
    },
    {
      "title": "Harry Potter und die Kammer des Schreckens",
      "authors": [
        {
          "name": "J.K. Rowling"
        },
        {
          "name": "Klaus Fritz"
        }
      ],
      "published": "1998",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353270937l/165225.jpg",
      "pages": 352,
      "isbn": "no isbn found",
      "year_read": "2018",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/165225.Harry_Potter_und_die_Kammer_des_Schreckens"
    },
    {
      "title": "Harry Potter und der Gefangene von Askaban",
      "authors": [
        {
          "name": "J.K. Rowling"
        },
        {
          "name": "Klaus Fritz"
        }
      ],
      "published": "1999",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1556290042l/45307870._SY475_.jpg",
      "pages": 448,
      "isbn": "9783551551696",
      "year_read": "2018",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/45307870-harry-potter-und-der-gefangene-von-askaban"
    },
    {
      "title": "Harry Potter und der Feuerkelch",
      "authors": [
        {
          "name": "J.K. Rowling"
        },
        {
          "name": "Klaus Fritz"
        }
      ],
      "published": "2000",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1488804465l/787181._SY475_.jpg",
      "pages": 767,
      "isbn": "9780685110188",
      "year_read": "2018",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/787181.Harry_Potter_und_der_Feuerkelch"
    },
    {
      "title": "Harry Potter und der Orden des Ph\u00f6nix",
      "authors": [
        {
          "name": "J.K. Rowling"
        }
      ],
      "published": "2003",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1178819225l/840582.jpg",
      "pages": 1021,
      "isbn": "no isbn found",
      "year_read": "2018",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/840582.Harry_Potter_und_der_Orden_des_Ph_nix"
    },
    {
      "title": "Harry Potter und der Halbblutprinz",
      "authors": [
        {
          "name": "J.K. Rowling"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1556293077l/45308238._SX318_.jpg",
      "pages": 656,
      "isbn": "9783551566669",
      "year_read": "2018",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/45308238-harry-potter-und-der-halbblutprinz"
    },
    {
      "title": "Harry Potter und die Heiligt\u00fcmer des Todes",
      "authors": [
        {
          "name": "J.K. Rowling"
        },
        {
          "name": "Klaus Fritz"
        }
      ],
      "published": "2007",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327953872l/1213811.jpg",
      "pages": 767,
      "isbn": "9783551577771",
      "year_read": "2018",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/1213811.Harry_Potter_und_die_Heiligt_mer_des_Todes"
    },
    {
      "title": "Das Zeichen der Schwalbe",
      "authors": [
        {
          "name": "Helen Bryan"
        },
        {
          "name": "Rita Kloosterziel"
        }
      ],
      "published": "2012",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389487529l/20514845.jpg",
      "pages": 459,
      "isbn": "no isbn found",
      "year_read": "2018",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/20514845-das-zeichen-der-schwalbe"
    },
    {
      "title": "Himbeermond",
      "authors": [
        {
          "name": "Mella Dumont"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1403899232l/22595931.jpg",
      "pages": 256,
      "isbn": "no isbn found",
      "year_read": "2018",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/22595931-himbeermond"
    },
    {
      "title": "Lavendelmond",
      "authors": [
        {
          "name": "Mella Dumont"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442340423l/24774435._SY475_.jpg",
      "pages": 348,
      "isbn": "no isbn found",
      "year_read": "2018",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/24774435-lavendelmond"
    },
    {
      "title": "Sternenmond",
      "authors": [
        {
          "name": "Mella Dumont"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1438397608l/26017917._SY475_.jpg",
      "pages": 370,
      "isbn": "no isbn found",
      "year_read": "2018",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/26017917-sternenmond"
    },
    {
      "title": "Der Prozess",
      "authors": [
        {
          "name": "Franz Kafka"
        }
      ],
      "published": "1925",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1178773715l/836230.jpg",
      "pages": 208,
      "isbn": "9783938484777",
      "year_read": "2018",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/836230.Der_Prozess"
    },
    {
      "title": "Steppenwolf",
      "authors": [
        {
          "name": "Hermann Hesse"
        },
        {
          "name": "Basil Creighton"
        }
      ],
      "published": "1927",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389332672l/16631.jpg",
      "pages": 256,
      "isbn": "9780140282580",
      "year_read": "2018",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/16631.Steppenwolf"
    },
    {
      "title": "Schachnovelle",
      "authors": [
        {
          "name": "Stefan Zweig"
        }
      ],
      "published": "1942",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1458824702l/1016722._SY475_.jpg",
      "pages": 112,
      "isbn": "no isbn found",
      "year_read": "2018",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/1016722.Schachnovelle"
    },
    {
      "title": "Der Name der Rose",
      "authors": [
        {
          "name": "Umberto Eco"
        },
        {
          "name": "Burkhart Kroeber"
        }
      ],
      "published": "1980",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1167389149l/23079.jpg",
      "pages": 657,
      "isbn": "no isbn found",
      "year_read": "2018",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/23079.Der_Name_der_Rose"
    },
    {
      "title": "Hinter Sibirien: Eine Reise nach Russisch-Fernost",
      "authors": [
        {
          "name": "Katerina Poladjan"
        },
        {
          "name": "Henning Fritsch"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1584724294l/52531353._SY475_.jpg",
      "pages": 272,
      "isbn": "no isbn found",
      "year_read": "2018",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/52531353-hinter-sibirien"
    },
    {
      "title": "Der Alchimist",
      "authors": [
        {
          "name": "Paulo Coelho"
        },
        {
          "name": "Cordula Swoboda Herzog"
        }
      ],
      "published": "1988",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1408804257l/70740.jpg",
      "pages": 176,
      "isbn": "9783257061260",
      "year_read": "2018",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/70740.Der_Alchimist"
    },
    {
      "title": "An den Ufern des Bosporus",
      "authors": [
        {
          "name": "Theresa R\u00e9vay"
        }
      ],
      "published": "2013",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1439837122l/26118197._SY475_.jpg",
      "pages": 480,
      "isbn": "no isbn found",
      "year_read": "2018",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/26118197-an-den-ufern-des-bosporus"
    },
    {
      "title": "Kind Nr. 95",
      "authors": [
        {
          "name": "Lucia Engombe"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1180106261l/998685.jpg",
      "pages": 381,
      "isbn": "9783548258928",
      "year_read": "2018",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/998685.Kind_Nr_95"
    },
    {
      "title": "Die Schopenhauer-Kur",
      "authors": [
        {
          "name": "Irvin D. Yalom"
        },
        {
          "name": "Almuth Carstens"
        }
      ],
      "published": "2000",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1189442053l/1866153._SY475_.jpg",
      "pages": 448,
      "isbn": "9783442735884",
      "year_read": "2018",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/1866153.Die_Schopenhauer_Kur"
    },
    {
      "title": "Kafka am Strand",
      "authors": [
        {
          "name": "Haruki Murakami"
        },
        {
          "name": "Ursula Gr\u00e4fe"
        }
      ],
      "published": "2002",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1178773716l/836232._SY475_.jpg",
      "pages": 637,
      "isbn": "9783442733231",
      "year_read": "2018",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/836232.Kafka_am_Strand"
    },
    {
      "title": "Ausgerechnet Deutschland: Geschichten unserer neuen Nachbarn",
      "authors": [
        {
          "name": "Wladimir Kaminer"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1522396786l/39290155._SY475_.jpg",
      "pages": 240,
      "isbn": "9783442487011",
      "year_read": "2018",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/39290155-ausgerechnet-deutschland"
    },
    {
      "title": "Koriandergr\u00fcn und Safranrot",
      "authors": [
        {
          "name": "Preethi Nair"
        }
      ],
      "published": "2003",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347808582l/6139704.jpg",
      "pages": 319,
      "isbn": "9783426636589",
      "year_read": "2018",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/6139704-koriandergr-n-und-safranrot"
    },
    {
      "title": "Momo",
      "authors": [
        {
          "name": "Michael Ende"
        }
      ],
      "published": "1973",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1420905611l/68811.jpg",
      "pages": 304,
      "isbn": "9783522168571",
      "year_read": "2018",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/68811.Momo"
    },
    {
      "title": "Die unendliche Geschichte",
      "authors": [
        {
          "name": "Michael Ende"
        },
        {
          "name": "Roswitha Quadflieg"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1557195533l/96290._SX318_.jpg",
      "pages": 428,
      "isbn": "no isbn found",
      "year_read": "2018",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/96290.Die_unendliche_Geschichte"
    },
    {
      "title": "Der Kuss des Meeres",
      "authors": [
        {
          "name": "Anna Banks"
        },
        {
          "name": "Michaela Link"
        }
      ],
      "published": "2012",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1366827175l/17845469.jpg",
      "pages": 448,
      "isbn": "9783570308790",
      "year_read": "2019",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/17845469-der-kuss-des-meeres"
    },
    {
      "title": "Das Fl\u00fcstern der Wellen",
      "authors": [
        {
          "name": "Anna Banks"
        }
      ],
      "published": "2013",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386952554l/19444717.jpg",
      "pages": 352,
      "isbn": "no isbn found",
      "year_read": "2019",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/19444717-das-fl-stern-der-wellen"
    },
    {
      "title": "Der Ruf des Ozeans",
      "authors": [
        {
          "name": "Anna Banks"
        },
        {
          "name": "Michaela Link"
        }
      ],
      "published": "2014",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1428643523l/25332361.jpg",
      "pages": 417,
      "isbn": "no isbn found",
      "year_read": "2019",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/25332361-der-ruf-des-ozeans"
    },
    {
      "title": "Goldstein",
      "authors": [
        {
          "name": "Volker Kutscher"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1341224973l/10702683.jpg",
      "pages": 573,
      "isbn": "9783462042382",
      "year_read": "2019",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/10702683-goldstein"
    },
    {
      "title": "Der nasse Fisch",
      "authors": [
        {
          "name": "Volker Kutscher"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1329905106l/4603896.jpg",
      "pages": 494,
      "isbn": "9783462039320",
      "year_read": "2019",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/4603896-der-nasse-fisch"
    },
    {
      "title": "Der stumme Tod",
      "authors": [
        {
          "name": "Volker Kutscher"
        }
      ],
      "published": "2009",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1276861058l/8474799.jpg",
      "pages": 542,
      "isbn": "9783462042122",
      "year_read": "2019",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/8474799-der-stumme-tod"
    },
    {
      "title": "Traumsammler",
      "authors": [
        {
          "name": "Khaled Hosseini"
        }
      ],
      "published": "2012",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1373637174l/18190084.jpg",
      "pages": 448,
      "isbn": "no isbn found",
      "year_read": "2019",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/18190084-traumsammler"
    },
    {
      "title": "Der kleine Prinz",
      "authors": [
        {
          "name": "Antoine de Saint-Exup\u00e9ry"
        },
        {
          "name": "Grete Leitgeb"
        },
        {
          "name": "Josef Leitgeb"
        }
      ],
      "published": "1943",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1179651817l/942177.jpg",
      "pages": 96,
      "isbn": "9783792000274",
      "year_read": "2019",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/942177.Der_kleine_Prinz"
    },
    {
      "title": "Die Geschichte vom kleinen Siebenschl\u00e4fer, der nicht aufwachen wollte",
      "authors": [
        {
          "name": "Sabine Bohlmann"
        }
      ],
      "published": "2016",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565076402l/52647460._SX318_SY475_.jpg",
      "pages": 10,
      "isbn": "9783522458139",
      "year_read": "2019",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/52647460-die-geschichte-vom-kleinen-siebenschl-fer-der-nicht-aufwachen-wollte"
    },
    {
      "title": "Mister Aufziehvogel",
      "authors": [
        {
          "name": "Haruki Murakami"
        },
        {
          "name": "Giovanni Bandini"
        },
        {
          "name": "Ditte Bandini"
        }
      ],
      "published": "1994",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1184012680l/1477355.jpg",
      "pages": 766,
      "isbn": "9783442726684",
      "year_read": "2019",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/1477355.Mister_Aufziehvogel"
    },
    {
      "title": "artgerecht - Das andere Baby-Buch: Nat\u00fcrliche Bed\u00fcrfnisse stillen. Gesunde Entwicklung f\u00f6rdern. Naturnah erziehen",
      "authors": [
        {
          "name": "Nicola Schmidt"
        },
        {
          "name": "Claudia Meitert"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1446426058l/27410360._SX318_.jpg",
      "pages": 289,
      "isbn": "no isbn found",
      "year_read": "2019",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/27410360-artgerecht---das-andere-baby-buch"
    },
    {
      "title": "Was man von hier aus sehen kann",
      "authors": [
        {
          "name": "Mariana Leky"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1503301459l/35274984._SY475_.jpg",
      "pages": 319,
      "isbn": "9783832198398",
      "year_read": "2020",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/35274984-was-man-von-hier-aus-sehen-kann"
    },
    {
      "title": "Das gew\u00fcnschteste Wunschkind aller Zeiten treibt mich in den Wahnsinn",
      "authors": [
        {
          "name": "Danielle Graf"
        },
        {
          "name": "Katja Seide"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1478512524l/32889241.jpg",
      "pages": 288,
      "isbn": "9783407864222",
      "year_read": "2020",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/32889241-das-gew-nschteste-wunschkind-aller-zeiten-treibt-mich-in-den-wahnsinn"
    },
    {
      "title": "Auf Dem Jakobsweg",
      "authors": [
        {
          "name": "Paulo Coelho"
        },
        {
          "name": "Maralde Meyer-Minnemann"
        }
      ],
      "published": "1987",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1172395714l/171815._SY475_.jpg",
      "pages": 265,
      "isbn": "9783257231151",
      "year_read": "2020",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/171815.Auf_Dem_Jakobsweg"
    },
    {
      "title": "Die Akte Vaterland",
      "authors": [
        {
          "name": "Volker Kutscher"
        }
      ],
      "published": "2012",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1345394136l/15836388.jpg",
      "pages": 564,
      "isbn": "9783462044669",
      "year_read": "2020",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/15836388-die-akte-vaterland"
    },
    {
      "title": "M\u00e4rzgefallene",
      "authors": [
        {
          "name": "Volker Kutscher"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1419974477l/23009943.jpg",
      "pages": 560,
      "isbn": "no isbn found",
      "year_read": "2020",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/23009943-m-rzgefallene"
    },
    {
      "title": "Brave New World",
      "authors": [
        {
          "name": "Aldous Huxley"
        }
      ],
      "published": "1932",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1575509280l/5129._SY475_.jpg",
      "pages": 288,
      "isbn": "9780060929879",
      "year_read": "Irgendwann",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/5129.Brave_New_World"
    },
    {
      "title": "The Tortilla Curtain",
      "authors": [
        {
          "name": "T. Coraghessan Boyle"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388208754l/24731.jpg",
      "pages": 355,
      "isbn": "9780140238280",
      "year_read": "Irgendwann",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/24731.The_Tortilla_Curtain"
    },
    {
      "title": "Lord of the Flies",
      "authors": [
        {
          "name": "William Golding"
        }
      ],
      "published": "1954",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327869409l/7624.jpg",
      "pages": 182,
      "isbn": "9780140283334",
      "year_read": "Irgendwann",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/7624.Lord_of_the_Flies"
    },
    {
      "title": "Nathan der Weise",
      "authors": [
        {
          "name": "Gotthold Ephraim Lessing"
        },
        {
          "name": "Peter von D\u00fcffel"
        }
      ],
      "published": "1779",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1180953820l/1097229.jpg",
      "pages": 160,
      "isbn": "9783150000038",
      "year_read": "Irgendwann",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/1097229.Nathan_der_Weise"
    },
    {
      "title": "Die R\u00e4uber",
      "authors": [
        {
          "name": "Friedrich Schiller"
        }
      ],
      "published": "1781",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1179652399l/942336.jpg",
      "pages": 176,
      "isbn": "9783150000151",
      "year_read": "Irgendwann",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/942336.Die_R_uber"
    },
    {
      "title": "Weit wie das Meer",
      "authors": [
        {
          "name": "Nicholas Sparks"
        }
      ],
      "published": "1988",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1175798134l/559769.jpg",
      "pages": 315,
      "isbn": "9783453150539",
      "year_read": "Irgendwann",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/559769.Weit_wie_das_Meer"
    },
    {
      "title": "Sommer, Sonne, Ferienliebe",
      "authors": [
        {
          "name": "Sabine Both"
        },
        {
          "name": "Brinx/K\u00f6mmerling"
        },
        {
          "name": "Bianka Minte-K\u00f6nig"
        },
        {
          "name": "Martina Sahler"
        },
        {
          "name": "Chantal Schreiber"
        },
        {
          "name": "Irene Zimmermann"
        },
        {
          "name": "Hortense Ullrich"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386514776l/19289486.jpg",
      "pages": 320,
      "isbn": "no isbn found",
      "year_read": "Irgendwann",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/19289486-sommer-sonne-ferienliebe"
    },
    {
      "title": "Liebe, Chaos, Klassenfahrt",
      "authors": [
        {
          "name": "Irene Zimmermann"
        },
        {
          "name": "Hans-G\u00fcnther Zimmermann"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1172848987l/222572.jpg",
      "pages": 190,
      "isbn": "9783522173193",
      "year_read": "Irgendwann",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/222572.Liebe_Chaos_Klassenfahrt"
    },
    {
      "title": "Hexen k\u00fcsst man nicht",
      "authors": [
        {
          "name": "Hortense Ullrich"
        }
      ],
      "published": "1999",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1370696709l/6566546.jpg",
      "pages": 174,
      "isbn": "9783522172905",
      "year_read": "Irgendwann",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/6566546-hexen-k-sst-man-nicht"
    },
    {
      "title": "Schule, Frust und gro\u00dfe Liebe",
      "authors": [
        {
          "name": "Irene Zimmermann"
        },
        {
          "name": "Hans-G\u00fcnther Zimmermann"
        }
      ],
      "published": "2001",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1172848985l/222568.jpg",
      "pages": 187,
      "isbn": "9783522174114",
      "year_read": "Irgendwann",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/222568.Schule_Frust_und_gro_e_Liebe"
    },
    {
      "title": "Und wer liebt mich?",
      "authors": [
        {
          "name": "Hortense Ullrich"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1370697034l/2480941.jpg",
      "pages": 206,
      "isbn": "9783522175005",
      "year_read": "Irgendwann",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/2480941.Und_wer_liebt_mich_"
    },
    {
      "title": "Umzug nach Wolke Sieben",
      "authors": [
        {
          "name": "Sabine Both"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1551239710l/1796442._SY475_.jpg",
      "pages": 192,
      "isbn": "9783522174909",
      "year_read": "Irgendwann",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/1796442.Umzug_nach_Wolke_Sieben"
    },
    {
      "title": "Handy-Liebe",
      "authors": [
        {
          "name": "Bianka Minte-K\u00f6nig"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1370205365l/4019025.jpg",
      "pages": 189,
      "isbn": "9783522173766",
      "year_read": "Irgendwann",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/4019025-handy-liebe"
    },
    {
      "title": "Knutschverbot und Herzensdiebe",
      "authors": [
        {
          "name": "Bianka Minte-K\u00f6nig"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1335201259l/4019075.jpg",
      "pages": 208,
      "isbn": "9783522175722",
      "year_read": "Irgendwann",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/4019075-knutschverbot-und-herzensdiebe"
    },
    {
      "title": "Ein Kuss kommt selten allein",
      "authors": [
        {
          "name": "Hortense Ullrich"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1370697085l/2480944.jpg",
      "pages": 173,
      "isbn": "9783522175609",
      "year_read": "Irgendwann",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/2480944.Ein_Kuss_kommt_selten_allein"
    },
    {
      "title": "Liebestest & Musenkuss",
      "authors": [
        {
          "name": "Bianka Minte-K\u00f6nig"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1551241109l/4019074._SY475_.jpg",
      "pages": 192,
      "isbn": "9783522176767",
      "year_read": "Irgendwann",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/4019074-liebestest-musenkuss"
    },
    {
      "title": "Liebestrank & Schokokuss",
      "authors": [
        {
          "name": "Bianka Minte-K\u00f6nig"
        }
      ],
      "published": "unknown year",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1551240904l/4019027._SY475_.jpg",
      "pages": 205,
      "isbn": "no isbn found",
      "year_read": "Irgendwann",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/4019027-liebestrank-schokokuss"
    },
    {
      "title": "E-Mail mit Kuss",
      "authors": [
        {
          "name": "Thomas Brinx"
        },
        {
          "name": "Anja K\u00f6mmerling"
        },
        {
          "name": "Brinx/K\u00f6mmerling"
        }
      ],
      "published": "2009",
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1374434376l/8608099.jpg",
      "pages": 176,
      "isbn": "9783522500449",
      "year_read": "Irgendwann",
      "order": 0,
      "link": "https://www.goodreads.com/book/show/8608099-e-mail-mit-kuss"
    }
  ]

const books_reading = [{
        "title": "Ghost In The Wires: My Adventures As The World's Most Wanted Hacker",
        "authors": [{
            "name": "Kevin Mitnick"
        }, {
            "name": "William L. Simon"
        }],
        "published": 2011,
        "cover": "https://images.isbndb.com/covers/77/09/9780316037709.jpg",
        "pages": 413,
    },
    {
        "title": "Das gew\u00fcnschteste Wunschkind aller Zeiten treibt mich in den Wahnsinn: Der entspannte Weg durch Trotzphasen",
        "authors": [{
            "name": "Danielle Graf"
        },{
            "name": "Katja Seide"
        }],
        "published": "2018",
        "cover": "https://m.media-amazon.com/images/I/51EnhgNYLVL._SY346_.jpg",
        "pages": 292,
    }
]