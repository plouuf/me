import Pingou from '../assets/compress/pingou.png';
import Keyrupt from '../assets/compress/keyrupt.png';
import Blokus from '../assets/compress/blokus.png';
import Tunify from '../assets/compress/tunify.png';
import Migrate from '../assets/compress/migrate.png';
import QLearning from '../assets/compress/q-learning.png';

export const data = [
  {
    label: 'Featured Project',
    title: 'Tunify',
    details:
      'Tunify is a music discovery app to recommend new songs based on your listening history or your preferences. Log in with your Spotify account, search for songs or artists, and start creating or editing your playlists.',
    technologies: ['React', 'Express', 'Node.js', 'Spotify API'],
    image: Tunify,
    imgStart: true,
    githubRepo: 'https://github.com/plouuf/Tunify',
    externalLink: 'https://tunify-app.onrender.com/',
  },
  {
    label: 'Featured Project',
    title: 'Keyrupt',
    details:
      "Keyrupt a menu bar app for macOS, with it's keyboard freezing function, you can clean your keyboard without worrying about accidentally pressing any keys. And with its snippet autocompletion feature, you can quickly insert frequently used phrases or links into your text with just a few keystrokes.",
    technologies: ['Swift', 'SwiftUI'],
    image: Keyrupt,
    imgStart: false,
    githubRepo: 'https://github.com/plouuf/Keyrupt',
  },
  {
    label: 'Featured Project',
    title: 'Adventures of Pingou',
    details:
      "The penguin platformer game is an enjoyable and challenging adventure set in an icy world. Created using TypeScript and the Phaser3 framework. You'll encounter obstacles like slippery ice patches and treacherous crevices and face enemies like snowman.",
    technologies: ['Phaser3', 'TypeScript', 'HTML5', 'CSS3', 'Tiled'],
    image: Pingou,
    imgStart: true,
    githubRepo: 'https://github.com/plouuf/Adventure-of-Pingou',
    externalLink: 'https://plouuf.github.io/Adventure-of-Pingou/',
  },
  {
    label: 'Featured Project',
    title: 'Fast Migrate',
    details:
      'Fast Migrate is a web application designed to assist individuals in making informed decisions about their migration destinations. Fast Migrate provides real-time information and comprehensive tools to compare various factors such as cost of living, employment opportunities, education, healthcare, safety, and more.',
    technologies: ['Node.js', 'Express', 'JavaScript', 'MongoDB'],
    image: Migrate,
    imgStart: false,
    githubRepo:
      'https://github.com/plouuf/Fast-Migrate/tree/master/Fast%20Migrate',
  },
  {
    label: 'Featured Project',
    title: 'Q-Learning Algorithm',
    details:
      'An interactive Q-learning visualizer using HTML and JavaScript to demonstrate the training process of a reinforcement learning agent. This tool will help users understand how Q-values are updated over time as the agent explores and learns from its environment.',
    technologies: ['JavaScript', 'HTML', 'GUI By Prof. David Churchill'],
    image: QLearning,
    imgStart: true,
    githubRepo:
      'https://github.com/plouuf/Comp3200/tree/master/Assignment%205',
  },
  {
    label: 'Featured Project',
    title: 'Blokus',
    details:
      'This Java-based board game features an AI opponent and accommodates those with color deficiency vision. It also has a save and load functionality',
    technologies: ['Java'],
    image: Blokus,
    imgStart: false,
    githubRepo: 'https://github.com/plouuf/Blokus',
  },
];
