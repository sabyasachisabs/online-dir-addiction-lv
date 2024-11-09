import { Headset, Percent, Box, Calculator, ChartLine, Edit, Server, Palette, List } from "lucide-react";

export type Tool = {
  id: string;
  name: string;
  logo: string;
  rating: number;
  reviews: number;
  pricing: "Free Trial" | "Freemium" | "Paid";
  description: string;
  tags: string[];
  category: string;
  featured: boolean;
  dealUrl?: string;
  visitUrl: string;
  bookmarks: number;
};

export const categories = [
  { name: "Sales", icon: Percent },
  { name: "Back Office", icon: Box },
  { name: "Operations", icon: Calculator },
  { name: "Growth & Marketing", icon: ChartLine },
  { name: "Writing & Editing", icon: Edit },
  { name: "Technology & IT", icon: Server },
  { name: "Design & Creative", icon: Palette },
  { name: "Workflow Automation", icon: List },
];

export const tools: Tool[] = [
  {
    id: "1",
    name: "FusionAds.ai",
    logo: "https://placehold.co/60x60",
    rating: 4.5,
    reviews: 2,
    pricing: "Free Trial",
    description: "Revolutionize ad creation and testing with AI-powered efficiency.",
    tags: ["marketing", "social media", "e-commerce"],
    category: "Growth & Marketing",
    featured: true,
    visitUrl: "https://example.com",
    bookmarks: 37,
  },
  {
    id: "2",
    name: "CustomGPT.ai",
    logo: "https://placehold.co/60x60",
    rating: 5,
    reviews: 7,
    pricing: "Paid",
    description: "Turn Data into Dialogue with AI-Driven Precision.",
    tags: ["customer support", "ai agents", "ai chatbots"],
    category: "Customer Service & Support",
    featured: true,
    dealUrl: "https://example.com/deal",
    visitUrl: "https://example.com",
    bookmarks: 74,
  },
  // Add more tools as needed
];
