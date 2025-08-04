export const stories: string[][] = [
  [
    "Bir varmış bir yokmuş, {age} yaşındaki {name} adında cesur bir çocuk varmış.",
    "Bir gün {name}, ormanda gizli bir kapı bulmuş.",
    "Kapı onu renkli bir dünyaya götürmüş ve {name} orada yeni arkadaşlar edinmiş.",
    "Gün batarken {name} evine dönmüş ve bu macerayı asla unutmamış."
  ],
  [
    "Küçük {name}, {age} yaşında olmasına rağmen yıldızları çok severmiş.",
    "Bir gece gökyüzüne bakarken kayan bir yıldız görmüş.",
    "Yıldız, {name}'e dilek hakkı vermiş ve o da dünyayı gezmeyi dilemiş.",
    "{name}'in dileği gerçek olmuş ve maceralar başlamış."
  ],
  [
    "{age} yaşındaki {name}, köyündeki en iyi uçurtma uçurucusuymuş.",
    "Rüzgarın güçlü olduğu bir günde uçurtması gökyüzünde dans etmiş.",
    "Uçurtma, {name}'i bulutların üzerine kadar taşımış.",
    "Orada bulut prensesiyle tanışıp yeni hikayeler öğrenmiş."
  ],
  [
    "{name}, {age} yaşında küçük bir mucitmiş.",
    "Evinde yaptığı minik robot bir gün konuşmaya başlamış.",
    "Robot, {name}'i gizli bir laboratuvara götürmüş.",
    "Orada ikisi birlikte harika icatlar yapmış."
  ],
  [
    "{age} yaşındaki {name}, denizin altını merak edermiş.",
    "Bir gün sihirli bir yüzgeç takıp suyun altına dalmış.",
    "Deniz canlıları {name}'i görünce onu kraliçeleri ilan etmiş.",
    "{name} bir günlüğüne deniz ülkesini yönetmiş."
  ]
];

export function personalizeStory(name: string, age: string): string[] {
  const story = stories[Math.floor(Math.random() * stories.length)];
  return story.map(p => p.replace(/\{name\}/g, name).replace(/\{age\}/g, age));
}
