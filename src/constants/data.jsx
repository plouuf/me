import Pingou from '../assets/pingou.png';
import Keyrupt from '../assets/keyrupt.png';
import Blokus from '../assets/blokus.png';

export const data = [
  {
    label: 'Featured Project',
    title: 'A Clash of Kings',
    details: "Lorem ipsum dolor amet you probably haven't heard of them bitters selvage listicle heirloom. Locavore kombucha street art ennui 90's, organic food truck hell of seitan skateboard literally hexagon fixie next level. Lomo salvia yuccie hella roof party echo park vegan four dollar toast cred.",
    technologies: [
      'NodeJs',
      'Express',
      'JavaScript',
      'HTML5',
      'CSS3',
      'MongoDB',
    ],
    image: 'https://cdn.vox-cdn.com/thumbor/w-IFN0FWpN4BGfhZaV9EYqs4nLo=/51x0:977x617/1200x800/filters:focal(51x0:977x617)/cdn.vox-cdn.com/uploads/chorus_image/image/50017015/Screen_Shot_2016-07-04_at_12.37.15_PM.0.0.png',
    imgStart: true,
  },
  {
    label: 'Featured Project',
    title: 'Keyrupt',
    details: "Keyrupt a macOS app, with it's keyboard freezing function, you can clean your keyboard without worrying about accidentally pressing any keys. And with its snippet autocompletion feature, you can quickly insert frequently used phrases or links into your text with just a few keystrokes.",
    technologies: [
      'Swift',
      'SwiftUI'
    ],
    image: Keyrupt,
    imgStart: false,
  },
  {
    label: 'Featured Project',
    title: 'Adventures of Pingou',
    details: "The penguin platformer game is an enjoyable and challenging adventure set in an icy world. Created using TypeScript and the Phaser3 framework. You'll encounter obstacles like slippery ice patches and treacherous crevices and face enemies like snowman.",
    technologies: [
      'Phaser3',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Tiled'
    ],
    image: Pingou,
    imgStart: true,
  },
  {
    label: 'Featured Project',
    title: 'Blokus',
    details: "This Java-based board game features an AI opponent and accommodates those with color deficiency vision. Enjoy the challenge of playing against an AI opponent, while knowing that the game's color scheme is designed to be inclusive and accessible to all.",
    technologies: [
      'Java'
    ],
    image: Blokus,
    imgStart: false,
  }
]