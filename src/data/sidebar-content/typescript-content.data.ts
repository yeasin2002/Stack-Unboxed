import { SidebarContentType } from '@/types';

export const typeScriptContent: SidebarContentType[] = [
  {
    name: 'Fundamentals',
    baseUrl: '/typescript/fundamentals',
    content: [{ name: 'introduction', url: '/introduction' }]
  },
  {
    name: 'OOP',
    baseUrl: '/typescript/oop',
    content: [
      { name: 'Introduction', url: '/introduction' },
      { name: ' "this"  and  "super"  ', url: '/this-and-super' },
      { name: 'Basic syntax', url: '/syntax' },
      { name: 'Access Modifiers', url: '/access-modifiers' },
      { name: 'Setters Getter', url: '/setters-getter' },
      { name: 'pillars Of  OOP ', url: '/pillars' },
      {
        name: 'practical: datetime-helper ',
        url: '/practical-datetime-helper'
      },
      { name: 'practical: chalk ', url: '/practical-chalk' },
      { name: 'Design Patterns and structure ', url: '/patterns-and-structure' }
    ]
  }
];
