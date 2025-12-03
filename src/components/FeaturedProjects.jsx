import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Kitchen",
    title: "Modern Kitchen Makeover",
    description: "Complete transformation featuring custom cabinetry, quartz countertops, and high-end appliances.",
    beds: 3,
    baths: 2,
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Bathroom",
    title: "Spa Bathroom Retreat",
    description: "Luxurious master bathroom with walk-in shower, freestanding tub, and premium fixtures.",
    beds: 4,
    baths: 3,
  },
  {
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Basement",
    title: "Entertainment Basement",
    description: "Finished basement with home theater, wet bar, and comfortable lounge seating area.",
    beds: 5,
    baths: 3,
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Living Room",
    title: "Open Concept Living",
    description: "Stunning open floor plan with premium hardwood flooring and custom built-in shelving.",
    beds: 4,
    baths: 2,
  },
  {
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Office",
    title: "Custom Home Office",
    description: "Dedicated workspace featuring custom cabinetry, built-in desk, and ambient lighting.",
    beds: 3,
    baths: 2,
  },
  {
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Exterior",
    title: "Complete Exterior Update",
    description: "Full exterior renovation with new siding, windows, and landscaping improvements.",
    beds: 4,
    baths: 3,
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our portfolio of stunning home transformations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              category={project.category}
              title={project.title}
              description={project.description}
              beds={project.beds}
              baths={project.baths}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

