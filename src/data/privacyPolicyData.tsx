import { AlertCircle, Info, Lock } from 'lucide-react';

export const privacyTopics = [
  {
    icon: <Info className="h-6 w-6 text-blue-500" />,
    title: 'Usage Notice',
    description: 'By using this blog, you acknowledge that it is a demo side project and agree not to misuse or distribute content from it.',
  },
  {
    icon: <AlertCircle className="h-6 w-6 text-blue-500" />,
    title: 'Side Project',
    description: 'This is a personal side project and not a professional application. Treat all content accordingly.',
  },
  {
    icon: <Lock className="h-6 w-6 text-blue-500" />,
    title: 'Confidentiality',
    description: 'Do not share any confidential or sensitive information on this platform, as it is not professionally secured.',
  },
  
];