export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

// TODO: Replace placeholder testimonials with real client feedback
export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "Muhammad transformed our fragmented workflow into a single, reliable platform. His ability to understand business requirements and translate them into clean code is rare.",
    author: "Ahmed Khan",
    role: "Operations Director",
    company: "Service Co.",
    image: "/images/placeholder.svg",
  },
  {
    id: "testimonial-2",
    quote:
      "Our lead-to-appointment conversion jumped after Muhammad set up our GoHighLevel automation. He thinks like a business owner, not just a developer.",
    author: "Sara Malik",
    role: "Sales Manager",
    company: "Growth Agency",
    image: "/images/clients/client-2.jpg",
  },
  {
    id: "testimonial-3",
    quote:
      "The tender dashboard Muhammad built saved us countless hours and helped us stop missing deadlines. His procurement knowledge made a real difference.",
    author: "Usman Tariq",
    role: "Procurement Lead",
    company: "Public Works Consultancy",
    image: "/images/clients/client-3.jpg",
  },
  {
    id: "testimonial-4",
    quote:
      "Working with Muhammad felt like having a technical co-founder. He challenged assumptions, proposed better solutions, and delivered on time.",
    author: "Fatima Raza",
    role: "Founder",
    company: "Tech Startup",
    image: "/images/clients/client-4.jpg",
  },
];
