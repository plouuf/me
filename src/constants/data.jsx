import Pingou from '../assets/pingou.png';
import Keyrupt from '../assets/keyrupt.png';
import Blokus from '../assets/blokus.png';
import Soon from '../assets/soon.jpg'

export const data = [
  {
    label: 'Featured Project',
    title: 'Discoverify',
    details: "Discoverify is a music discovery app that uses machine learning to recommend new songs based on your listening history and preferences. Log in with your Spotify account, search for songs or artists, and play them directly in your Spotify app or web player.",
    technologies: [
      'Next.js',
      'React',
      'Node.js',
      'Python'
    ],
    image: Soon,
    imgStart: true,
    // githubRepo: '/',
    // externalLink: '/'
  },
  {
    label: 'Featured Project',
    title: 'Keyrupt',
    details: "Keyrupt a menu bar app for macOS, with it's keyboard freezing function, you can clean your keyboard without worrying about accidentally pressing any keys. And with its snippet autocompletion feature, you can quickly insert frequently used phrases or links into your text with just a few keystrokes.",
    technologies: [
      'Swift',
      'SwiftUI'
    ],
    image: Keyrupt,
    imgStart: false,
    githubRepo: 'https://github.com/plouuf/Keyrupt'
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
    githubRepo: 'https://github.com/plouuf/Adventure-of-Pingou',
    externalLink: 'https://plouuf.github.io/Adventure-of-Pingou/'
  },
  {
    label: 'Featured Project',
    title: 'Blokus',
    details: "This Java-based board game features an AI opponent and accommodates those with color deficiency vision. It also has a save and load functionality",
    technologies: [
      'Java'
    ],
    image: Blokus,
    imgStart: false,
    githubRepo: 'https://github.com/plouuf/Blokus'
  }
]