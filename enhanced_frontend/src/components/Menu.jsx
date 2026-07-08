import { useState } from 'react';
import { Flame, Clock, Star, Plus, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

const categoryIcons = {
  appetizers: '🍽️',
  mains: '🍔',
  drinks: '🥤',
  desserts: '🍰',
  specials: '⚡',
};

const foodImages = {
  burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
  pizza: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
  fries: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
  coffee: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop',
  shake: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop',
  wings: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400&h=300&fit=crop',
  dessert: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
  default: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
};

const getFoodImage = (name, category) => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes('burger')) return foodImages.burger;
  if (lowerName.includes('pizza')) return foodImages.pizza;
  if (lowerName.includes('fries')) return foodImages.fries;
  if (lowerName.includes('coffee')) return foodImages.coffee;
  if (lowerName.includes('shake')) return foodImages.shake;
  if (lowerName.includes('wings')) return foodImages.wings;
  if (lowerName.includes('brownie') || lowerName.includes('sundae') || lowerName.includes('dessert')) return foodImages.dessert;
  if (category === 'drinks') return foodImages.coffee;
  if (category === 'desserts') return foodImages.dessert;
  return foodImages.default;
};

const spiceColors = {
  mild: 'text-gray-400',
  medium: 'text-red-400',
  hot: 'text-red-500',
  'extra-hot': 'text-red-600',
};

const sampleMenuData = [
  { _id: '1', name: "The Demogorgon Burger", description: "Double beef patty with spicy peppers, ghost pepper aioli, and crispy onions", price: 16.99, category: "mains", isSignature: true, spiceLevel: "extra-hot", prepTime: 20 },
  { _id: '2', name: "Eleven's Eggo Stack", description: "Crispy Eggo waffles topped with maple syrup, whipped cream, and strawberries", price: 12.99, category: "appetizers", isSignature: true, prepTime: 10 },
  { _id: '3', name: "The Upside Down Pizza", description: "Spinach and mushroom pizza with inverted pepperoni pattern", price: 18.99, category: "mains", spiceLevel: "mild", prepTime: 15 },
  { _id: '4', name: "Mind Flayer's Chili", description: "Slow-cooked beef chili with dark chocolate and coffee undertones", price: 14.99, category: "mains", spiceLevel: "hot", prepTime: 25 },
  { _id: '5', name: "Hawkins FRIES", description: "Crispy curly fries dusted with Hawkins seasoning", price: 6.99, category: "appetizers", prepTime: 8 },
  { _id: '6', name: "Portal Nachos", description: "Loaded nachos with cheese, jalapeños, guacamole, and sour cream", price: 11.99, category: "appetizers", spiceLevel: "medium", prepTime: 12 },
  { _id: '7', name: "The Stranger Shake", description: "Thick chocolate milkshake with Oreo cookies and marshmallows", price: 7.99, category: "drinks", prepTime: 5 },
  { _id: '8', name: "Starcourt Sundae", description: "Triple scoop ice cream with hot fudge, sprinkles, and cherry on top", price: 8.99, category: "desserts", prepTime: 5 },
  { _id: '9', name: "The Other Side Brownie", description: "Warm chocolate brownie with vanilla ice cream and caramel drizzle", price: 9.99, category: "desserts", prepTime: 8 },
  { _id: '10', name: "Nightmare Fuel Coffee", description: "Double espresso with vanilla and a shot of pure energy", price: 5.99, category: "drinks", prepTime: 3 },
  { _id: '11', name: "Shadow Monster Wings", description: "Crispy chicken wings tossed in spicy buffalo sauce", price: 13.99, category: "appetizers", spiceLevel: "hot", prepTime: 15 },
  { _id: '12', name: "The Vecna Platter", description: "Chef's special platter with a surprise mystery entree each day", price: 24.99, category: "specials", isSignature: true, prepTime: 30 }
];

export default function Menu() {
  const [menuItems] = useState(sampleMenuData);
  const [activeCategory, setActiveCategory] = useState('all');
  const { addToCart, cartItems } = useCart();
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedItems(prev => ({ ...prev, [item._id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [item._id]: false }));
    }, 1500);
  };

  const categories = ['all', 'appetizers', 'mains', 'drinks', 'desserts', 'specials'];
  const filteredItems = activeCategory === 'all' ? menuItems : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 bg-red-900/30 border border-red-800/50 rounded-full text-red-400 text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4 font-medium">
            Explore Our Menu
          </span>
          <h2 className="font-horror text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-red-600 mt-2 mb-4 sm:mb-6 animate-flicker">
            THE MENU
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2">
            Each dish is a portal to another dimension of flavor. Be warned: 
            some items may open doors you cannot close.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-bold uppercase tracking-wider transition-all duration-300 text-xs sm:text-sm md:text-base ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-red-700 to-red-600 text-white shadow-lg shadow-red-600/50 btn-glow scale-105'
                  : 'bg-gray-800/80 text-gray-400 hover:bg-gray-700 hover:text-white hover:scale-105'
              }`}
            >
              {category === 'all' ? '🔥 All Items' : `${categoryIcons[category]} ${category.charAt(0).toUpperCase() + category.slice(1)}`}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const isInCart = cartItems.some(cartItem => cartItem._id === item._id);
            const isJustAdded = addedItems[item._id];

            return (
              <div
                key={item._id}
                className="group card-hover bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 border border-gray-800 rounded-lg sm:rounded-2xl overflow-hidden relative flex flex-col"
              >
                {/* Signature Badge */}
                {item.isSignature && (
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 flex items-center gap-1 bg-gradient-to-r from-red-700 to-red-600 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-bold shadow-lg">
                    <Star className="w-3 h-3" />
                    <span>Signature</span>
                  </div>
                )}

                {/* Image Container */}
                <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                  <img
                    src={getFoodImage(item.name, item.category)}
                    alt={item.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:opacity-100 opacity-70"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900"><span class="text-5xl sm:text-6xl md:text-7xl filter drop-shadow-lg">${categoryIcons[item.category]}</span></div>`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  
                  {/* Spice Level Badge */}
                  {item.spiceLevel && item.spiceLevel !== 'mild' && (
                    <div className={`absolute bottom-3 left-3 flex items-center gap-1 ${spiceColors[item.spiceLevel]} bg-black/60 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs font-bold uppercase`}>
                      <Flame className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{item.spiceLevel}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 flex flex-col flex-1">
                  {/* Title and Price */}
                  <div className="flex items-start justify-between mb-2 sm:mb-3 gap-2">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-red-400 transition-colors leading-tight flex-1">
                      {item.name}
                    </h3>
                    <span className="text-lg sm:text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400 flex-shrink-0">
                      ${item.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-5 line-clamp-2 leading-relaxed flex-1">
                    {item.description}
                  </p>

                  {/* Footer with Prep Time and Add Button */}
                  <div className="flex items-center justify-between pt-4 sm:pt-5 border-t border-gray-800 gap-3">
                    <div className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{item.prepTime} min</span>
                    </div>

                    <button 
                      onClick={() => handleAddToCart(item)}
                      className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-1 sm:gap-2 flex-shrink-0 ${
                        isJustAdded
                          ? 'bg-green-600 text-white'
                          : isInCart
                          ? 'bg-red-700/80 text-white hover:bg-red-600'
                          : 'bg-gradient-to-r from-red-700 to-red-600 text-white hover:shadow-lg hover:shadow-red-600/50'
                      }`}
                      title={isInCart ? 'Add more to cart' : 'Add to cart'}
                    >
                      {isJustAdded ? (
                        <><Check className="w-3 h-3 sm:w-4 sm:h-4" /><span>Added!</span></>
                      ) : (
                        <><Plus className="w-3 h-3 sm:w-4 sm:h-4" /><span className="hidden sm:inline">{isInCart ? 'Add More' : 'Add'}</span><span className="sm:hidden">{isInCart ? 'More' : 'Add'}</span></>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
