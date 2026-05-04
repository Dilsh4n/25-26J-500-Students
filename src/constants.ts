import { Milestone, DocumentGroup, PresentationLink, TeamMember } from './types';

export const MILESTONES: Milestone[] = [
  {
    id: 'proposal',
    title: 'Project Proposal',
    date: 'March 2025',
    marks: '6 Marks',
    description: 'A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.'
  },
  {
    id: 'progress-1',
    title: 'Progress Presentation I',
    date: 'June 2025',
    marks: '6 Marks',
    description: 'Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.'
  },
  {
    id: 'research-paper',
    title: 'Research Paper',
    date: 'July 2025',
    marks: '10 Marks',
    description: 'Describes what you contribute to existing knowledge, giving due recognition to all work that you referred to in making new knowledge.'
  },
  {
    id: 'progress-2',
    title: 'Progress Presentation II',
    date: 'September 2025',
    marks: '18 Marks',
    description: 'Reviews the 90% completion status demonstration of the project, including a Poster presentation describing the project as a whole.'
  },
  {
    id: 'website',
    title: 'Website Assessment',
    date: 'May 2026',
    marks: '2 Marks',
    description: 'The Website helps to promote our research project and reveals all details related to the project.'
  },
  {
    id: 'logbook',
    title: 'Logbook',
    date: 'May 2026',
    marks: '3 Marks',
    description: 'The project status is validated through the Logbook, which includes Status Documents 1 & 2.'
  },
  {
    id: 'final-report',
    title: 'Final Report',
    date: 'May 2026',
    marks: '19 Marks',
    description: 'The Final Report evaluates the completed project done throughout the year, including Individual, group, and final reports.'
  },
  {
    id: 'final-presentation',
    title: 'Final Presentation & Viva',
    date: 'May 2026',
    marks: '20 Marks',
    description: 'Viva is held individually to assess each member\'s contribution to the project.'
  }
];

// ─────────────────────────────────────────────────────────
// DOCUMENTS
// ─────────────────────────────────────────────────────────
// HOW TO ADD YOUR ONEDRIVE LINKS:
//
// 1. Go to OneDrive → right-click the file → "Share" → "Copy link"
//    Make sure the link is set to "Anyone with the link can view"
//
// 2. For viewUrl  → paste the share link directly
//    Example: "https://1drv.ms/b/s!AmXXXXXX"
//
// 3. For downloadUrl → paste the same link and add  &download=1  at the end.
//    If the link has no query string yet, use  ?download=1
//    Example: "https://1drv.ms/b/s!AmXXXXXX?download=1"
//
// That's it! viewUrl opens the PDF in OneDrive's online viewer,
// downloadUrl forces the browser to download the file.
// ─────────────────────────────────────────────────────────

export const DOCUMENT_GROUPS: DocumentGroup[] = [
  {
    id: 'charter',
    category: 'Project Charter',
    description: 'Official project charter defining the scope, stakeholders, and high-level objectives of the research initiative.',
    icon: 'scroll',
    files: [
      {
        id: 'charter-1',
        title: 'Project Charter',
        description: 'Defines the research project scope, team roles, objectives, and initial timeline.',
        viewUrl: '#',        // ← Replace with your OneDrive share link
        downloadUrl: '#',    // ← Replace with share link + ?download=1
      },
    ],
  },
  {
    id: 'proposal',
    category: 'Proposal Documents',
    description: 'Comprehensive research proposal documents covering individual component designs and the overall system architecture.',
    icon: 'file-text',
    files: [
      {
        id: 'proposal-1',
        title: 'Proposal Document – Component 1',
        description: 'Prompt Filter Engine (PFE) – Privacy-preserving anonymization pipeline.',
        viewUrl: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it22345714_my_sliit_lk/IQBuZs1O5Kb0T4e9danQTdbDAVTGO2ulIXPXEyC280ID_fQ?e=fUVUhI',
        downloadUrl: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it22345714_my_sliit_lk/IQBuZs1O5Kb0T4e9danQTdbDAVTGO2ulIXPXEyC280ID_fQ?e=fUVUhI&download=1',
      },
      {
        id: 'proposal-2',
        title: 'Proposal Document – Component 2',
        description: 'Behaviour Extraction Engine (BEE) – Real-time behavioral signal extraction.',
        viewUrl: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it22345714_my_sliit_lk/IQAQOobpUNESRbiGY5BwoS3BAUA6u0S2Mk2j3NMJ2RXWIxY?e=a3jEaB',
        downloadUrl: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it22345714_my_sliit_lk/IQAQOobpUNESRbiGY5BwoS3BAUA6u0S2Mk2j3NMJ2RXWIxY?e=a3jEaB&download=1',
      },
      {
        id: 'proposal-3',
        title: 'Proposal Document – Component 3',
        description: 'Core Behaviour Identification Engine (CBIE) – Offline profile consolidation.',
        viewUrl: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it22345714_my_sliit_lk/IQCViAMtRS3-RbQHNDbHBiubAbhKFUqdOnxhKlwswRqNFSs?e=VOYNmp',
        downloadUrl: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it22345714_my_sliit_lk/IQCViAMtRS3-RbQHNDbHBiubAbhKFUqdOnxhKlwswRqNFSs?e=VOYNmp&download=1',
      },
      {
        id: 'proposal-4',
        title: 'Proposal Document – Component 4',
        description: 'Drift Detection Service (DDS) - detect drift in user behavior.',
        viewUrl: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it22345714_my_sliit_lk/IQCpOkW9gP20TYsGrC2yvJ3qASDO60jy6pQCkyq3zxZxGtA?e=wsyOOt',
        downloadUrl: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it22345714_my_sliit_lk/IQCpOkW9gP20TYsGrC2yvJ3qASDO60jy6pQCkyq3zxZxGtA?e=wsyOOt&download=1',
      },
    ],
  },
  {
    id: 'checklist',
    category: 'Check List Documents',
    description: 'Requirement verification checklists used for internal quality assurance and milestone compliance tracking.',
    icon: 'clipboard-check',
    files: [
      {
        id: 'checklist-1',
        title: 'Proposal Checklist',
        description: 'Requirement checklist for the project proposal submission.',
        viewUrl: '#',
        downloadUrl: '#',
      },
      {
        id: 'checklist-2',
        title: 'Progress Presentation I Checklist',
        description: 'Requirement checklist for the first progress assessment.',
        viewUrl: '#',
        downloadUrl: '#',
      },
    ],
  },
  {
    id: 'final',
    category: 'Final Documents',
    description: 'Final research documentation covering individual research contributions, system integration, and evaluation results.',
    icon: 'award',
    files: [
      {
        id: 'final-1',
        title: 'Final Document – Component 1',
        description: 'Prompt Filter Engine – Complete research, implementation, and evaluation.',
        viewUrl: '#',
        downloadUrl: '#',
      },
      {
        id: 'final-2',
        title: 'Final Document – Component 2',
        description: 'Behaviour Extraction Engine – Complete research, implementation, and evaluation.',
        viewUrl: '#',
        downloadUrl: '#',
      },
      {
        id: 'final-3',
        title: 'Final Document – Component 3',
        description: 'Core Behaviour Identification Engine – Complete research, implementation, and evaluation.',
        viewUrl: '#',
        downloadUrl: '#',
      },
      {
        id: 'final-4',
        title: 'Final Document – Component 4',
        description: 'Prompt Enrichment Service & Drift Detection – Complete research, implementation, and evaluation.',
        viewUrl: '#',
        downloadUrl: '#',
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────
// PRESENTATIONS
// ─────────────────────────────────────────────────────────
// For presentations, only a download link is needed.
// Use the same OneDrive share link + ?download=1
// ─────────────────────────────────────────────────────────

export const PRESENTATIONS: PresentationLink[] = [
  {
    id: 'pres-proposal',
    title: 'Proposal Presentation',
    date: 'August 29, 2025',
    downloadUrl: 'https://mysliit-my.sharepoint.com/:p:/g/personal/it22345714_my_sliit_lk/IQAzbk2yD8ihTpxxGPC5tkXuAaquqXFujHCBXiLftLDR3N8?e=7I5GDv?download=1',    // ← Replace with OneDrive share link + ?download=1
    fileType: 'PPTX',
  },
  {
    id: 'pres-pp1',
    title: 'Progress Presentation I',
    date: 'May 20, 2026',
    downloadUrl: 'https://mysliit-my.sharepoint.com/:p:/g/personal/it22345714_my_sliit_lk/IQAyu3Ym4IQxQIb_tDgaV8rEAQxEv3zj3ayKxufgXZaQpBQ?e=6V4lHJ?download=1',
    fileType: 'PPTX',
  },
  {
    id: 'pres-pp2',
    title: 'Progress Presentation II',
    date: 'August 10, 2026',
    downloadUrl: 'https://mysliit-my.sharepoint.com/:p:/g/personal/it22345714_my_sliit_lk/IQCsKigXYsvqTq5dpf-RuO-mAXeEERj7gadrU3ljVaQEJnE?e=5paYkp?download=1',
    fileType: 'PPTX',
  },
  {
    id: 'pres-final',
    title: 'Final Presentation',
    date: 'November 25, 2026',
    downloadUrl: '#',
    fileType: 'PPTX',
  },
];

export const TEAM: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Alex Johnson',
    role: 'Lead Researcher',
    email: 'alex.j@example.edu',
    achievements: ['Dean\'s List 2024', 'Best AI Project Award 2025'],
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200'
  }
];
