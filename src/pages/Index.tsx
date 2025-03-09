
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import ToolCard from "@/components/ToolCard";
import { tools } from "@/data/tools";
import { MapPin, Phone } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [zipCode, setZipCode] = useState("");

  const filteredTools = tools.filter((tool) => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = !selectedCategory || tool.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredTools = filteredTools.filter(tool => tool.featured);
  const regularTools = filteredTools.filter(tool => !tool.featured);

  const handleTreatmentSearch = () => {
    console.log("Searching for treatment centers with zipcode:", zipCode);
    // This would be connected to a backend search in a real application
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section 
        className="relative w-full h-[600px] bg-cover bg-center flex items-center"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1472396961693-142e6e269027?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTc5NjI5MA&ixlib=rb-4.0.3&q=80&w=1600')"
        }}
      >
        <div className="container mx-auto px-4 text-white text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-2">Recovery</h1>
          <h2 className="text-3xl md:text-4xl font-light mb-12">Starts With A Single Step</h2>
          
          <div className="bg-black bg-opacity-80 p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Find Treatment By Zipcode</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                type="text"
                placeholder="What is Your Zip Code?"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="bg-white text-black"
              />
              <Button onClick={handleTreatmentSearch} className="bg-green-600 hover:bg-green-700">
                Search For Rehab
              </Button>
            </div>
          </div>
          
          <div className="mt-8 bg-green-500 p-6 rounded-lg max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text-left">
              <h3 className="text-xl font-semibold">Call Our 24/7, Free & Private</h3>
              <p className="text-lg">Sponsored Hotline</p>
            </div>
            <div className="bg-pink-600 py-2 px-6 rounded-lg mt-4 md:mt-0">
              <h4 className="text-sm font-bold">Call Us Now!</h4>
              <p className="text-lg font-bold">(888) 338-7377</p>
              <p className="text-xs mt-1">Who Answers?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Addiction Treatment Centers Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Addiction Treatment Centers</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'].map((state) => (
              <div key={state} className="flex items-center justify-center">
                <MapPin className="h-4 w-4 mr-2" />
                <a href="#" className="hover:underline">{state}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Directory */}
      <section className="container py-16 mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Addiction Clinics Directory</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </aside>
          
          <main className="lg:col-span-3">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            
            {featuredTools.length > 0 && (
              <>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Featured Treatment Centers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              </>
            )}
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">All Treatment Centers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regularTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
            
            {filteredTools.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No treatment centers found matching your criteria.</p>
              </div>
            )}
          </main>
        </div>
      </section>

      {/* Footer Help Section - Repeat of top CTA */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mt-8 bg-green-500 text-white p-6 rounded-lg flex flex-col md:flex-row justify-between items-center">
              <div className="text-left">
                <h3 className="text-xl font-semibold">Call Our 24/7, Free & Private</h3>
                <p className="text-lg">Sponsored Hotline</p>
              </div>
              <div className="bg-pink-600 py-2 px-6 rounded-lg mt-4 md:mt-0">
                <h4 className="text-sm font-bold">Call Us Now!</h4>
                <p className="text-lg font-bold">(888) 338-7377</p>
                <p className="text-xs mt-1">Who Answers?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
