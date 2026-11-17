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
    }
   ]
  }
 ]
};
