export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  sqft: string;
  owner: string;
  description: string;
  image: string;
  amenities: string[];
  type: string;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Luxury Beachfront Villa",
    location: "Kovalam, Kerala",
    price: "₹1,95,00,000",
    sqft: "3,500",
    owner: "Sarah Johnson",
    description: "Stunning beachfront villa with private access to Kovalam beach, featuring modern amenities and panoramic ocean views.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80",
    amenities: ["Beach Access", "Swimming Pool", "Garden", "Smart Home"],
    type: "Villa"
  },
  {
    id: 2,
    title: "Heritage Mansion",
    location: "French Quarter, Pondicherry",
    price: "₹2,25,00,000",
    sqft: "4,200",
    owner: "Jean Pierre",
    description: "Colonial-era mansion with authentic French architecture, restored with modern amenities while preserving historical charm.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
    amenities: ["Colonial Architecture", "Courtyard", "Wine Cellar", "Library"],
    type: "Heritage"
  },
  {
    id: 3,
    title: "Modern Highrise Apartment",
    location: "Marina Bay, Chennai",
    price: "₹85,00,000",
    sqft: "1,800",
    owner: "Raj Mehta",
    description: "Contemporary apartment with stunning views of Marina Beach, featuring premium finishes and smart home technology.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
    amenities: ["Sea View", "Gym", "Parking", "Security"],
    type: "Apartment"
  },
  {
    id: 4,
    title: "Mountain Retreat Villa",
    location: "Munnar, Kerala",
    price: "₹1,45,00,000",
    sqft: "2,800",
    owner: "Thomas Kurian",
    description: "Serene villa surrounded by tea plantations with breathtaking mountain views and modern comfort.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    amenities: ["Mountain View", "Garden", "Fireplace", "Terrace"],
    type: "Villa"
  },
  {
    id: 5,
    title: "Tech Park Office Space",
    location: "Electronic City, Coimbatore",
    price: "₹75,00,000",
    sqft: "2,000",
    owner: "Tech Spaces Ltd",
    description: "Modern office space in prime tech park location with state-of-the-art facilities.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    amenities: ["24/7 Access", "Conference Rooms", "Cafeteria", "Parking"],
    type: "Commercial"
  },
  {
    id: 6,
    title: "Riverside Eco Resort",
    location: "Alleppey, Kerala",
    price: "₹2,85,00,000",
    sqft: "5,000",
    owner: "Kerala Tourism Corp",
    description: "Eco-friendly resort property along the backwaters with traditional Kerala architecture.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80",
    amenities: ["Waterfront", "Ayurveda Center", "Restaurant", "Boat Dock"],
    type: "Resort"
  },
  {
    id: 7,
    title: "Smart City Apartment",
    location: "Auroville, Pondicherry",
    price: "₹65,00,000",
    sqft: "1,500",
    owner: "Auro Developments",
    description: "Sustainable living space in the heart of Auroville with eco-friendly features.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
    amenities: ["Solar Power", "Organic Garden", "Community Space", "Yoga Center"],
    type: "Apartment"
  },
  {
    id: 8,
    title: "Heritage Hotel Property",
    location: "Fort Kochi, Kerala",
    price: "₹3,25,00,000",
    sqft: "6,000",
    owner: "Heritage Hotels Inc",
    description: "Historic property with colonial architecture, perfect for boutique hotel conversion.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
    amenities: ["Period Features", "Restaurant Space", "Courtyard", "Sea View"],
    type: "Commercial"
  },
  {
    id: 9,
    title: "Golf View Villa",
    location: "Race Course, Coimbatore",
    price: "₹1,65,00,000",
    sqft: "3,200",
    owner: "Elite Properties",
    description: "Luxury villa overlooking the golf course with premium amenities and security.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    amenities: ["Golf View", "Private Pool", "Home Theater", "Smart Security"],
    type: "Villa"
  },
  {
    id: 10,
    title: "Beach Resort Property",
    location: "Mahabalipuram, Tamil Nadu",
    price: "₹2,45,00,000",
    sqft: "4,500",
    owner: "Coastal Ventures",
    description: "Beachfront property with potential for resort development near historic temples.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80",
    amenities: ["Beach Access", "Development Potential", "Temple View", "Large Plot"],
    type: "Resort"
  },
  {
    id: 11,
    title: "Hill Station Cottage",
    location: "Ooty, Tamil Nadu",
    price: "₹95,00,000",
    sqft: "1,800",
    owner: "Mountain Homes",
    description: "Charming cottage in the Nilgiris with colonial architecture and modern amenities.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
    amenities: ["Mountain View", "Garden", "Fireplace", "Vintage Design"],
    type: "Cottage"
  },
  {
    id: 12,
    title: "Luxury Penthouse",
    location: "White Town, Pondicherry",
    price: "₹1,85,00,000",
    sqft: "2,500",
    owner: "Franco Properties",
    description: "Exclusive penthouse with French colonial influence and modern luxury features.",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80",
    amenities: ["Sea View", "Private Terrace", "Designer Interior", "Parking"],
    type: "Penthouse"
  },
  {
    id: 13,
    title: "Backwater Villa",
    location: "Kumarakom, Kerala",
    price: "₹2,15,00,000",
    sqft: "3,800",
    owner: "Lakeside Properties",
    description: "Traditional Kerala-style villa with modern amenities overlooking the backwaters.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80",
    amenities: ["Lake View", "Private Dock", "Infinity Pool", "Ayurvedic Spa"],
    type: "Villa"
  },
  {
    id: 14,
    title: "Heritage Boutique Hotel",
    location: "Chettinad, Tamil Nadu",
    price: "₹3,75,00,000",
    sqft: "7,500",
    owner: "Heritage Stays",
    description: "Restored Chettinad mansion perfect for heritage hotel conversion with authentic architecture.",
    image: "https://images.unsplash.com/photo-1600047508788-786f3865b4b9?auto=format&fit=crop&q=80",
    amenities: ["Period Architecture", "Courtyard", "Antique Furniture", "Restaurant Space"],
    type: "Heritage"
  },
  {
    id: 15,
    title: "Smart Apartment Complex",
    location: "Siruseri, Chennai",
    price: "₹1,25,00,000",
    sqft: "2,200",
    owner: "Future Homes",
    description: "Modern apartment complex with smart home features and tech-friendly amenities.",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80",
    amenities: ["Smart Home", "EV Charging", "Coworking Space", "Fitness Center"],
    type: "Apartment"
  },
  {
    id: 16,
    title: "Eco Forest Retreat",
    location: "Wayanad, Kerala",
    price: "₹1,55,00,000",
    sqft: "2,800",
    owner: "Green Estates",
    description: "Sustainable eco-retreat nestled in the forests of Wayanad with organic farming.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    amenities: ["Forest View", "Organic Farm", "Solar Power", "Nature Trails"],
    type: "Resort"
  },
  {
    id: 17,
    title: "Temple View Apartment",
    location: "Mylapore, Chennai",
    price: "₹95,00,000",
    sqft: "1,600",
    owner: "Heritage Living",
    description: "Traditional apartment with modern amenities overlooking historic temples.",
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&q=80",
    amenities: ["Temple View", "Traditional Design", "Modern Kitchen", "Security"],
    type: "Apartment"
  },
  {
    id: 18,
    title: "Business District Office",
    location: "CBD, Coimbatore",
    price: "₹1,85,00,000",
    sqft: "3,000",
    owner: "Prime Commercial",
    description: "Premium office space in Coimbatore's central business district with modern facilities.",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=80",
    amenities: ["Conference Center", "Parking", "24/7 Access", "Business Center"],
    type: "Commercial"
  },
  {
    id: 19,
    title: "Seaside Boutique Resort",
    location: "Varkala, Kerala",
    price: "₹2,65,00,000",
    sqft: "4,200",
    owner: "Coastal Luxury",
    description: "Boutique resort property on Varkala cliff with panoramic sea views and private beach access.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    amenities: ["Private Beach", "Infinity Pool", "Spa", "Restaurant"],
    type: "Resort"
  },
  {
    id: 20,
    title: "Colonial Heritage Home",
    location: "Heritage Town, Pondicherry",
    price: "₹1,75,00,000",
    sqft: "3,200",
    owner: "Franco Heritage",
    description: "Restored French colonial home with period features and modern comforts.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80",
    amenities: ["Period Features", "Garden", "Colonial Architecture", "Modern Kitchen"],
    type: "Heritage"
  }
];