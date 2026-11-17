// أقسام وفيديوهات كل شيخ. تقدر تضيف أو تحذف من هنا.
const DATA = {
 "scholars": [
  {
   "name": "دكتور أحمد العربي",
   "sections": [
    {
     "title": "تزكية وإيمانيات",
     "videos": [
      {
       "title": "كيف نصل إلى القلب السليم؟",
       "url": "https://www.youtube.com/watch?v=ZWraKKwNfpE"
      },
      {
       "title": "الأخلاء يومئذ بعضهم لبعض عدو إلا المتقين",
       "url": "https://www.youtube.com/watch?v=xwywIkJF6HE"
      },
      {
       "title": "هذا هو القلب — مقطع مؤثر",
       "url": "https://www.youtube.com/watch?v=sAbgN3H32bw"
      },
      {
       "title": "لمثل هذا فأعدوا",
       "url": "https://www.youtube.com/watch?v=ZRFrXCvydog",
       "short": true
      },
      {
       "title": "فاهم 38 — اعتزال إبراهيم عليه السلام",
       "url": "https://www.youtube.com/watch?v=si994Z9BAr8"
      }
     ]
    },
    {
     "title": "القرآن",
     "videos": [
      {
       "title": "أنا صاحبك القرآن.. كيف يكون القرآن صاحبي؟",
       "url": "https://www.youtube.com/watch?v=lkX6mcCD3CI"
      },
      {
       "title": "فاهم 37 — عن القرآن الكريم",
       "url": "https://www.youtube.com/watch?v=hK-9Be0prrA"
      },
      {
       "title": "هذا هو القرآن — مقطع رائع",
       "url": "https://www.youtube.com/watch?v=XC-JV2342ic"
      },
      {
       "title": "تأثير القرآن",
       "url": "https://www.youtube.com/watch?v=8jlOpkjCNzM",
       "short": true
      },
      {
       "title": "كذلك لنثبت به فؤادك",
       "url": "https://www.youtube.com/watch?v=ssao8w-8_Pg",
       "short": true
      }
     ]
    },
    {
     "title": "الصلاة ورمضان",
     "videos": [
      {
       "title": "فاهم 36 — أول ما يحاسب به العبد الصلاة",
       "url": "https://www.youtube.com/watch?v=63_AOCldyXo"
      },
      {
       "title": "ماذا أريد من رمضان؟",
       "url": "https://www.youtube.com/watch?v=9TjlLsX9iA0"
      }
     ]
    },
    {
     "title": "أدعية ومناجاة",
     "videos": [
      {
       "title": "دعاء يذيب قساوة القلب",
       "url": "https://www.youtube.com/watch?v=ZFXEXTRhOTQ",
       "short": true
      },
      {
       "title": "نفر إليك منا فاعف عنا",
       "url": "https://www.youtube.com/watch?v=dTiPXjPwj-4",
       "short": true
      },
      {
       "title": "أنت أحق من ذُكر",
       "url": "https://www.youtube.com/watch?v=U6L4ZeIuCu4",
       "short": true
      },
      {
       "title": "مناجاة الله عز وجل والأُنس به",
       "url": "https://www.youtube.com/watch?v=Tr9eZ-M6mUk"
      }
     ]
    }
   ]
  },
  {
   "name": "أمجد سمير",
   "sections": [
    {
     "title": "تزكية ويقين",
     "videos": [
      {
       "title": "اجعل يقينك قوياً.. يريك الله المعجزات",
       "url": "https://www.youtube.com/watch?v=AjipD2d2rWo"
      },
      {
       "title": "حقيقة الدنيا؟",
       "url": "https://www.youtube.com/watch?v=pqOdVMSO_xE"
      },
      {
       "title": "كيف تهرب من ظلمات الدنيا؟",
       "url": "https://www.youtube.com/watch?v=TlAzTpwh2Cw"
      },
      {
       "title": "من هم الصالحين؟",
       "url": "https://www.youtube.com/watch?v=e0yMlaICASA"
      }
     ]
    },
    {
     "title": "حياة وسلوك",
     "videos": [
      {
       "title": "كيف سرقت المقارنة سعادتك دون أن تشعر؟",
       "url": "https://www.youtube.com/watch?v=5uMX_lW1Myw"
      },
      {
       "title": "سبب الخمول والكسل والتشتت وإدمان التليفون",
       "url": "https://www.youtube.com/watch?v=YcT0yM_fHeU"
      },
      {
       "title": "كيف يوازن المسلم بين العمل والعبادة؟",
       "url": "https://www.youtube.com/watch?v=b5_sznU0Pm4"
      },
      {
       "title": "ليلة رأس السنة",
       "url": "https://www.youtube.com/watch?v=EC4esPiVeVw"
      }
     ]
    },
    {
     "title": "التوبة والرجوع",
     "videos": [
      {
       "title": "قصة توبتي",
       "url": "https://www.youtube.com/watch?v=X18eDcft4G4"
      },
      {
       "title": "رسالة لكل من أرهقته العودة للمعاصي بعد التوبة",
       "url": "https://www.youtube.com/watch?v=LELh3kHmyTw"
      },
      {
       "title": "كلمتين هيطمنوك ويريحوا قلبك",
       "url": "https://www.youtube.com/watch?v=kwRY_bleW2w"
      }
     ]
    },
    {
     "title": "الصلاة",
     "videos": [
      {
       "title": "أسرار الصلاة",
       "url": "https://www.youtube.com/watch?v=1473X0E1Cqk"
      }
     ]
    },
    {
     "title": "قصص القرآن والصحابة",
     "videos": [
      {
       "title": "قصة غريبة",
       "url": "https://www.youtube.com/watch?v=Rmp0Azp7OAo",
       "short": true
      },
      {
       "title": "تأملات في قصة أصحاب السبت",
       "url": "https://www.youtube.com/watch?v=wyXbLGlynbQ"
      },
      {
       "title": "واجه الدنيا بقلب لا يخاف — أبو ذر الغفاري",
       "url": "https://www.youtube.com/watch?v=lsZrPXB7VsE"
      },
      {
       "title": "قصة سليمان عليه السلام مع الهدهد",
       "url": "https://www.youtube.com/watch?v=oThH4gXdW0k"
      }
     ]
    }
   ]
  },
  {
   "name": "سمير مصطفى",
   "sections": [
    {
     "title": "رقائق وتوبة",
     "videos": [
      {
       "title": "من يسألني فأعطيه؟ ومن يتوب اليوم فأغفر له؟",
       "url": "https://www.youtube.com/watch?v=GhCy5yqHhd4"
      },
      {
       "title": "موعظة تهز القلوب",
       "url": "https://www.youtube.com/watch?v=090VEfM9LOw"
      },
      {
       "title": "أحسن الظن بالله ولا تستسلم",
       "url": "https://www.youtube.com/watch?v=jrffu7M7Uk0"
      },
      {
       "title": "كيف نتخفف من ذنوبنا؟",
       "url": "https://www.youtube.com/watch?v=S5_3QUFkZV0"
      }
     ]
    },
    {
     "title": "قصص ومواعظ",
     "videos": [
      {
       "title": "مسجد الصحابة — وصية راهب",
       "url": "https://www.youtube.com/watch?v=m6S4vPy0P54"
      },
      {
       "title": "أبصر طريقك ج1",
       "url": "https://www.youtube.com/watch?v=y2ZDAIyxzNM"
      }
     ]
    },
    {
     "title": "الموت والآخرة",
     "videos": [
      {
       "title": "من مشاعر الموت وألم الفراق",
       "url": "https://www.youtube.com/watch?v=oUFSYNcNEMU"
      },
      {
       "title": "خطبة النذير العريان (ذكر الموت)",
       "url": "https://www.youtube.com/watch?v=bhFBiMrQA2o"
      }
     ]
    },
    {
     "title": "الصلاة والخشوع",
     "videos": [
      {
       "title": "اقف انتباه",
       "url": "https://www.youtube.com/watch?v=-FSkQOm1PDA"
      },
      {
       "title": "ستعشق الصلاة — الخشوع وقوة التوحيد",
       "url": "https://www.youtube.com/watch?v=TInVMFxX2PI"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ محمد الغليظ",
   "sections": [
    {
     "title": "القرآن",
     "videos": [
      {
       "title": "القرآن — مقطع مؤثر",
       "url": "https://www.youtube.com/watch?v=gtKC6Xa_RnU"
      },
      {
       "title": "كل يوم آية (18)",
       "url": "https://www.youtube.com/watch?v=yhgqGgXTbfI"
      }
     ]
    },
    {
     "title": "التوبة والهداية",
     "videos": [
      {
       "title": "مهما وقعت أو انتكست افتكر إنه يبدأ ويعيد",
       "url": "https://www.youtube.com/watch?v=NnvG_Ahz-Vk"
      },
      {
       "title": "مشكلته في الدين المؤثر في الحياة",
       "url": "https://www.youtube.com/watch?v=uGWRj9-N3BU"
      }
     ]
    },
    {
     "title": "بداية الطريق",
     "videos": [
      {
       "title": "من أين أبدأ؟ (1)",
       "url": "https://www.youtube.com/watch?v=Bgjz1VxODjY"
      }
     ]
    },
    {
     "title": "الصلاة",
     "videos": [
      {
       "title": "إنها الصلاة — أستحي من الله",
       "url": "https://www.youtube.com/watch?v=mH1RMAhwDa8"
      },
      {
       "title": "لو مبتصليش أو بتقطع في الصلاة",
       "url": "https://www.youtube.com/watch?v=LUhi8GoeBGw"
      }
     ]
    },
    {
     "title": "الدعاء",
     "videos": [
      {
       "title": "روشتة ابن القيم لاستجابة الدعاء",
       "url": "https://www.youtube.com/watch?v=wvU6jCXKdv4"
      },
      {
       "title": "أنا مش لوحدي — معك الملك",
       "url": "https://www.youtube.com/watch?v=S_FXjpy2FVk"
      },
      {
       "title": "دعاء فيه كل اللي نفسك فيه",
       "url": "https://www.youtube.com/watch?v=7zwh51ysJts"
      }
     ]
    },
    {
     "title": "أسرة وزواج",
     "videos": [
      {
       "title": "هل مبدأ حقي وحقك ينفع في الزواج؟",
       "url": "https://www.youtube.com/watch?v=PkOmS0EYEhw"
      },
      {
       "title": "نصيحة لكل زوجة صاحب رسالة حقيقية",
       "url": "https://www.youtube.com/watch?v=VBWZMrxkJxk"
      },
      {
       "title": "إيه صفات الزوج الصالح؟",
       "url": "https://www.youtube.com/watch?v=dlByIzPPRR0"
      }
     ]
    },
    {
     "title": "قصص مؤثرة",
     "videos": [
      {
       "title": "بيده الأمر — قصة مع مادة السيوتيكال",
       "url": "https://www.youtube.com/watch?v=3m3Nb7O7vgs"
      },
      {
       "title": "الله يراك — قصة هادفة",
       "url": "https://www.youtube.com/watch?v=fl5gzROdu0Q"
      },
      {
       "title": "مفيش تاني",
       "url": "https://www.youtube.com/watch?v=MRfO8IfuFE8"
      }
     ]
    },
    {
     "title": "قوائم تشغيل",
     "videos": [
      {
       "title": "فيديوهات مميزة للشيخ محمد الغليظ",
       "url": "https://www.youtube.com/playlist?list=PL2Sst6o2QU5ShcUdVN6WmSOeCF1ijGfLb"
      }
     ]
    }
   ]
  },
  {
   "name": "ياسر ممدوح",
   "sections": [
    {
     "title": "أسرة وعلاقات",
     "videos": [
      {
       "title": "خش هتجيبك!",
       "url": "https://www.youtube.com/watch?v=M7ZqHNnTQs0"
      },
      {
       "title": "اتطلقتي يا فالحة",
       "url": "https://www.youtube.com/watch?v=34_Bj67N6Fk"
      },
      {
       "title": "الخديعة",
       "url": "https://www.youtube.com/watch?v=mIA00ifqbSg",
       "short": true
      },
      {
       "title": "مش مقتنعة بالحجاب",
       "url": "https://www.youtube.com/watch?v=qm-63nnpA6g"
      }
     ]
    },
    {
     "title": "إيمان وصلاة",
     "videos": [
      {
       "title": "بدأت أشك في الدين",
       "url": "https://www.youtube.com/watch?v=RIaaFH6d6tA"
      },
      {
       "title": "لو بصلي بس!",
       "url": "https://www.youtube.com/watch?v=byJfW3Wb5ms"
      },
      {
       "title": "العكاك والملاك",
       "url": "https://www.youtube.com/watch?v=OY5uHXTnCxQ"
      },
      {
       "title": "هو ده قرآن؟؟",
       "url": "https://www.youtube.com/watch?v=O--nWTmxNd4"
      },
      {
       "title": "الذين يظنون أنهم ملاقوا ربهم",
       "url": "https://www.youtube.com/watch?v=xNufizcaMFQ",
       "short": true
      }
     ]
    },
    {
     "title": "قصص وسير",
     "videos": [
      {
       "title": "تعرف يعني إيه ست بجد — السيدة عائشة",
       "url": "https://www.youtube.com/watch?v=zT4PXuZJdxw"
      }
     ]
    },
    {
     "title": "قوائم تشغيل",
     "videos": [
      {
       "title": "فيديو الجمعة — كل الحلقات",
       "url": "https://www.youtube.com/playlist?list=PLVdjsGOClzyHqLF_bgbxdPxAKHpGdkqx2"
      }
     ]
    }
   ]
  },
  {
   "name": "حازم شومان",
   "sections": [
    {
     "title": "تحفيز ونجاح",
     "videos": [
      {
       "title": "أسباب النجاح في الدنيا والدين — طريقة تفكيرك",
       "url": "https://www.youtube.com/watch?v=-pmRKYcbFI4"
      },
      {
       "title": "أكتر فيديو تحفيزي ممكن تشوفه",
       "url": "https://www.youtube.com/watch?v=J71rHj7gyCU",
       "short": true
      },
      {
       "title": "حزنك وهم",
       "url": "https://www.youtube.com/watch?v=4t3_HOTG0JY"
      }
     ]
    },
    {
     "title": "قصص الصحابة",
     "videos": [
      {
       "title": "﴿وينقلب إلى أهله مسرورًا﴾ — قصة أبي سلمة وأم سلمة",
       "url": "https://www.youtube.com/watch?v=Mw_xZ101Xps"
      }
     ]
    },
    {
     "title": "التوبة",
     "videos": [
      {
       "title": "والله هنقدر نتوب يا شباب",
       "url": "https://www.youtube.com/watch?v=-63VeI1gKXg"
      },
      {
       "title": "مهما بعدت — الرجوع إلى الله",
       "url": "https://www.youtube.com/watch?v=nCNooKzdfA0"
      },
      {
       "title": "فيديو تحفيزي عن التوبة والندم",
       "url": "https://www.youtube.com/watch?v=2JkQUvroXRc"
      },
      {
       "title": "التوبة — مقطع جميل",
       "url": "https://www.youtube.com/watch?v=YZebJPi9Qo8"
      }
     ]
    },
    {
     "title": "حكاية آية وقصص",
     "videos": [
      {
       "title": "شفيعًا لأصحابه — حكاية آية",
       "url": "https://www.youtube.com/watch?v=RcIs_XYBDws"
      },
      {
       "title": "قصة مؤثرة في فضل قراءة القرآن",
       "url": "https://www.youtube.com/watch?v=lJivOl23G6U"
      },
      {
       "title": "عجائب الصلاة على رسول الله ﷺ — ج2",
       "url": "https://www.youtube.com/watch?v=wcroQmXWtGM"
      }
     ]
    },
    {
     "title": "تزكية وثقة بالله",
     "videos": [
      {
       "title": "حقيقة الدنيا",
       "url": "https://www.youtube.com/watch?v=DFCrbwzTp4Q"
      },
      {
       "title": "الثقة في الله",
       "url": "https://www.youtube.com/watch?v=5VQUEPuDYok"
      }
     ]
    },
    {
     "title": "أسرة",
     "videos": [
      {
       "title": "الفجوة بين الآباء والأبناء",
       "url": "https://www.youtube.com/watch?v=l9j708-JDIE"
      },
      {
       "title": "كلمة مؤثرة عن الحياة الزوجية",
       "url": "https://www.youtube.com/watch?v=lVVahYXUlsU"
      }
     ]
    },
    {
     "title": "قوائم تشغيل",
     "videos": [
      {
       "title": "مقاطع الصلاة",
       "url": "https://www.youtube.com/playlist?list=PLVPp4tYPys9O-Vlcp8dnmaShe6eZ2Y3Uq"
      },
      {
       "title": "خطب الجمعة",
       "url": "https://www.youtube.com/playlist?list=PLVPp4tYPys9MxsCWyA5z60h55qMTheKjz"
      }
     ]
    }
   ]
  },
  {
   "name": "شريف علي",
   "sections": [
    {
     "title": "واهدِ قلبي — تزكية",
     "videos": [
      {
       "title": "٥- ثمرات الخوف",
       "url": "https://www.youtube.com/watch?v=mQxALzCnlNU"
      },
      {
       "title": "٢٦- حُب الدنيا",
       "url": "https://www.youtube.com/watch?v=xtBD4GoaYtE"
      },
      {
       "title": "٧- الذكر يدفع الهم والغم",
       "url": "https://www.youtube.com/watch?v=2VHpBxoBwNE"
      }
     ]
    },
    {
     "title": "مجالس الشباب",
     "videos": [
      {
       "title": "مُعاملة الكريم",
       "url": "https://www.youtube.com/watch?v=_8q-7fyCyyU"
      },
      {
       "title": "لا تفتحه!",
       "url": "https://www.youtube.com/watch?v=jXgwAEfAsVw"
      },
      {
       "title": "أين المفر…؟",
       "url": "https://www.youtube.com/watch?v=VZbnsz1M8Es"
      },
      {
       "title": "﴿ثُمَّ يَتُوبُونَ مِن قَرِيبٍ﴾",
       "url": "https://www.youtube.com/watch?v=yLGZvdlggWY"
      },
      {
       "title": "علمني نوحٌ عليه السلام",
       "url": "https://www.youtube.com/watch?v=dKxkqEFYuUU"
      },
      {
       "title": "شفاء القلب في زمن الفتن — من سورة يوسف",
       "url": "https://www.youtube.com/watch?v=StsGAgA37fY"
      }
     ]
    },
    {
     "title": "القرآن",
     "videos": [
      {
       "title": "﴿قَدْ أَفْلَحَ الْمُؤْمِنُونَ﴾",
       "url": "https://www.youtube.com/watch?v=kUcfwqp_2gg"
      }
     ]
    },
    {
     "title": "التوبة",
     "videos": [
      {
       "title": "نعمة التوبة — تخيّل حياتك بلا توبة",
       "url": "https://www.youtube.com/watch?v=oZ6Paggql-A"
      },
      {
       "title": "رسالة لكل من أرهقته ذنوب الخلوات",
       "url": "https://www.youtube.com/watch?v=DXlyygjcRA8"
      }
     ]
    }
   ]
  },
  {
   "name": "عبد العزيز الطريفي",
   "sections": [
    {
     "title": "إيمانيات وتزكية",
     "videos": [
      {
       "title": "الصحابة.. الجيل الذي غيّر العالم",
       "url": "https://www.youtube.com/watch?v=-2nKpmmaS6I"
      },
      {
       "title": "الدنيا ليست لك (الابتلاء)",
       "url": "https://www.youtube.com/watch?v=M4JC2uvYBYs"
      }
     ]
    },
    {
     "title": "الصلاة",
     "videos": [
      {
       "title": "كيف تحافظ على الصلاة؟",
       "url": "https://www.youtube.com/watch?v=z9MMPhdIe2U"
      },
      {
       "title": "المحافظة على الصلاة",
       "url": "https://www.youtube.com/watch?v=RmdjSW8_Rl4"
      },
      {
       "title": "حكم تارك الصلاة",
       "url": "https://www.youtube.com/watch?v=feF28UkkJLs"
      }
     ]
    },
    {
     "title": "إيمان وعقيدة",
     "videos": [
      {
       "title": "الإيمان قول وعمل واعتقاد",
       "url": "https://www.youtube.com/watch?v=eNPCx1VXzuw"
      },
      {
       "title": "الزيغ موجود في القلب قبل النظر",
       "url": "https://www.youtube.com/watch?v=HzJZxOiBN20"
      },
      {
       "title": "الصراع بين الكفر والإيمان",
       "url": "https://www.youtube.com/watch?v=o9NEC6ijrSw",
       "short": true
      }
     ]
    }
   ]
  }
 ]
};
