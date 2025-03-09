
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  
  // Dutch provinces
  const dutchProvinces = [
    'Noord-Holland', 
    'Zuid-Holland', 
    'Utrecht', 
    'Flevoland', 
    'Gelderland', 
    'Overijssel', 
    'Drenthe', 
    'Groningen', 
    'Friesland', 
    'Noord-Brabant', 
    'Limburg', 
    'Zeeland'
  ];

  const handleProvinceSelect = (province: string) => {
    setSelectedProvince(province);
    console.log("Selected province:", province);
    // In a real app, you would filter based on both addiction and province
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="relative flex-grow md:w-[70%]">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          placeholder="What is your addiction?"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-10 w-full"
        />
      </div>
      
      <div className="md:w-[30%]">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full justify-between bg-white">
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                {selectedProvince || "Select Province"}
              </div>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full" align="end">
            {dutchProvinces.map((province) => (
              <DropdownMenuItem
                key={province}
                onClick={() => handleProvinceSelect(province)}
                className="cursor-pointer"
              >
                {province}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default SearchBar;
