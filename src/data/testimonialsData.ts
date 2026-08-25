export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  position: string;
  company: string;
  image: string;
  rating: number;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "1",
    quote: "Brother Solutions transformed our customer support infrastructure. Their AI agents now handle over 70% of our daily technical tickets autonomously, giving our human team time to focus on strategic client growth. The ROI was clear within month one.",
    clientName: "Marcus Vance",
    position: "Chief Technology Officer",
    company: "Nexus Cloud Systems",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "2",
    quote: "The web application and custom automated workflows Brother Solutions built for our platform are flawless. Our conversions increased by 45% almost immediately. They are serious technology partners who deliver real business value.",
    clientName: "Elena Rostova",
    position: "VP of Product Strategy",
    company: "Vanguard Global Tech",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "3",
    quote: "From AI document processing to automated marketing pipelines, Brother Solutions engineered solutions that saved our company hundreds of operational hours every single week. Their attention to design detail and speed is unmatched.",
    clientName: "David Sterling",
    position: "Managing Director",
    company: "Apex Enterprise Group",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    rating: 5
  }
];
