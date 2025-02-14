import { DiscordIcon } from '@/components/mdx/icons/brand';
import { Facebook, Github, Linkedin, Twitter } from 'lucide-react';

export const maintainerYeasinInfo = [
  { name: 'Github', icon: Github, link: 'https://github.com/yeasin2002' },
  {
    name: 'Linkedin',
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/yeasin2002/'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    link: 'https://www.facebook.com/yeasin2002.dev'
  },
  { name: 'X', icon: Twitter, link: 'https://x.com/yeasin2002_dev' }
];

export const maintainerImamInfo = [
  {
    name: 'Github',
    icon: Github,
    link: 'https://github.com/al-imam'
  },
  {
    name: 'Linkedin',
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/al-imam'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    link: 'https://www.facebook.com/alimam.nirob'
  },
  {
    name: 'Discord',
    icon: DiscordIcon,
    link: 'https://discordapp.com/users/alimam_'
  }
];

export const maintainersInfo = [
  {
    name: 'Md Kawsar Islam Yeasin',
    shortName: 'Yeasin',
    contact: maintainerYeasinInfo
  },
  {
    name: 'Al Imam',
    shortName: 'Imam',
    contact: maintainerImamInfo
  }
];
