import avatarPersonnel from './assets/avatar-personnel.svg'

export const tree = {
  id: 100,
  person: {
    id: 100,
    avatar: avatarPersonnel,
    department: 'Development',
    name: 'Henry monger',
    title: 'Chief Operating Officer',
    totalReports: 3,
  },
  hasChild: true,
  hasParent: true,
  children: [],
}

export const tree1 = [
  {
    id: 36,
    person: {
      id: 36,
      avatar: avatarPersonnel,
      department: 'Development',
      name: 'Tomasz polaski',
      title: 'IT Specialist',
      totalReports: 4,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
  {
    id: 32,
    person: {
      id: 32,
      avatar: avatarPersonnel,
      department: 'Development',
      name: 'Emanuel walker',
      title: 'IT Specialist',
      totalReports: 0,
    },
    hasChild: true,
    hasParent: true,
    children: [],
  },
  {
    id: 25,
    person: {
      id: 25,
      avatar: avatarPersonnel,
      department: 'Development',
      name: 'Kerry peter',
      title: 'IT Specialist',
      totalReports: 3,
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
]

export const tree2 = [
  {
    id: 56,
    person: {
      id: 56,
      avatar: avatarPersonnel,
      department: 'Development',
      name: 'Sam John',
      title: 'HR',
      totalReports: 2,
      link: 'https://github.com/unicef/react-org-chart',
    },
    hasChild: true,
    hasParent: true,
    // children: [],
  },
  {
    id: 66,
    person: {
      id: 66,
      avatar: avatarPersonnel,
      department: 'Development',
      name: 'John doe',
      title: 'Developer',
      totalReports: 0,
      link: 'https://github.com/unicef/react-org-chart',
    },
    hasChild: true,
    hasParent: true,
    children: [],
  },
  {
    id: 76,
    person: {
      id: 76,
      avatar: avatarPersonnel,
      department: 'Development',
      name: 'Emilia rogers',
      title: 'Developer',
      totalReports: 0,
      link: 'https://github.com/unicef/react-org-chart',
    },
    hasChild: true,
    hasParent: true,
    children: [],
  },
  {
    id: 60,
    person: {
      id: 60,
      avatar: avatarPersonnel,
      department: 'Development',
      name: 'Ellen cott',
      title: 'IT Officer',
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },
]

export const tree3 = [
  {
    id: 70,
    person: {
      id: 70,
      avatar: avatarPersonnel,
      department: 'Development',
      name: 'Kenneth dom',
      title: 'IT Officer',
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },
  {
    id: 45,
    person: {
      id: 45,
      avatar: avatarPersonnel,
      department: 'Development',
      name: 'Kin baker',
      title: 'IT Officer',
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },
]

export const tree4 = [
  {
    id: 102,
    person: {
      id: 102,
      avatar: avatarPersonnel,
      department: 'Development',
      name: 'Hendy kinger',
      title: 'Manager',
      totalReports: 0,
    },
    hasChild: true,
    hasParent: true,
    children: [],
  },
  {
    id: 455,
    person: {
      id: 455,
      avatar: avatarPersonnel,
      department: 'Development',
      name: 'Kate baker',
      title: 'IT Officer',
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },
  {
    id: 444,
    person: {
      id: 444,
      avatar: avatarPersonnel,
      department: 'Development',
      name: 'John medis',
      title: 'IT Officer',
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },

  {
    id: 456,
    person: {
      id: 456,
      avatar: avatarPersonnel,
      department: 'Development',
      name: 'Brett lee',
      title: 'IT Officer',
      totalReports: 0,
    },
    hasChild: false,
    hasParent: true,
    children: [],
  },
]
