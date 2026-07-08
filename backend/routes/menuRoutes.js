import express from 'express';
import MenuItem from '../models/MenuItem.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { category, available } = req.query;
    const filter = {};

    if (category) {
      filter.category = category;
    }
    if (available !== undefined) {
      filter.isAvailable = available === 'true';
    }

    const menuItems = await MenuItem.find(filter).sort({ category: 1, name: 1 });
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id);
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json(menuItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const menuItem = new MenuItem(req.body);
    const savedItem = await menuItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const menuItem = await MenuItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json(menuItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const menuItem = await MenuItem.findByIdAndDelete(req.params.id);
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json({ message: 'Menu item deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/seed', async (req, res) => {
  try {
    const seedData = [
      {
        name: "The Demogorgon Burger",
        description: "Double beef patty with spicy peppers, ghost pepper aioli, and crispy onions - not for the faint of heart",
        price: 16.99,
        category: "mains",
        isSignature: true,
        spiceLevel: "extra-hot",
        prepTime: 20
      },
      {
        name: "Eleven's Eggo Stack",
        description: "Stack of crispy Eggo waffles topped with maple syrup, whipped cream, and strawberry slices",
        price: 12.99,
        category: "appetizers",
        isSignature: true,
        prepTime: 10
      },
      {
        name: "The Upside Down Pizza",
        description: "Spinach and mushroom pizza with inverted pepperoni pattern and special blend cheese",
        price: 18.99,
        category: "mains",
        spiceLevel: "mild",
        prepTime: 15
      },
      {
        name: "Mind Flayer's Chili",
        description: "Slow-cooked beef chili with dark chocolate and coffee undertones, topped with sour cream",
        price: 14.99,
        category: "mains",
        spiceLevel: "hot",
        prepTime: 25
      },
      {
        name: "Hawkins FRIES",
        description: "Crispy curly fries dusted with Hawkins seasoning and served with dipping sauces",
        price: 6.99,
        category: "appetizers",
        prepTime: 8
      },
      {
        name: "Portal Nachos",
        description: "Loaded nachos with cheese, jalapeños, guacamole, and sour cream",
        price: 11.99,
        category: "appetizers",
        spiceLevel: "medium",
        prepTime: 12
      },
      {
        name: "The Stranger Shake",
        description: "Thick chocolate milkshake with Oreo cookies and marshmallows",
        price: 7.99,
        category: "drinks",
        prepTime: 5
      },
      {
        name: "Demiburger Deluxe",
        description: "Quarter pound burger with all the fixings and secret sauce",
        price: 13.99,
        category: "mains",
        prepTime: 15
      },
      {
        name: "Starcourt Sundae",
        description: "Triple scoop ice cream with hot fudge, sprinkles, and a cherry on top",
        price: 8.99,
        category: "desserts",
        prepTime: 5
      },
      {
        name: "The Other Side Brownie",
        description: "Warm chocolate brownie with vanilla ice cream and caramel drizzle",
        price: 9.99,
        category: "desserts",
        prepTime: 8
      },
      {
        name: " Hawkins Root Beer Float",
        description: "Classic root beer float with vanilla ice cream and whipped cream",
        price: 6.99,
        category: "drinks",
        prepTime: 5
      },
      {
        name: "The Gate Gate Pasta",
        description: "Fettuccine pasta with creamy garlic sauce and grilled chicken",
        price: 15.99,
        category: "mains",
        prepTime: 18
      },
      {
        name: "Shadow Monster Wings",
        description: "Crispy chicken wings tossed in spicy buffalo sauce",
        price: 13.99,
        category: "appetizers",
        spiceLevel: "hot",
        prepTime: 15
      },
      {
        name: "Nightmare Fuel Coffee",
        description: "Double espresso with vanilla and a shot of pure energy",
        price: 5.99,
        category: "drinks",
        prepTime: 3
      },
      {
        name: "The Vecna Platter",
        description: "Chef's special platter with a surprise mystery entree each day",
        price: 24.99,
        category: "specials",
        isSignature: true,
        prepTime: 30
      }
    ];

    await MenuItem.deleteMany({});
    const insertedItems = await MenuItem.insertMany(seedData);
    res.json({ message: 'Menu seeded successfully', items: insertedItems });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
