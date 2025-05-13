import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

interface Product {
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  hot?: boolean;
  discounted: boolean;
}

@Component({
  selector: 'app-principal',
  imports: [CommonModule, FormsModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  topLeftLinks = [
    { label: 'About Us', href: '#' },
    { label: 'My Account', href: '#' },
    { label: 'Wishlist', href: '#' },
    { label: 'Order Tracking', href: '#' },
  ];

  topRightInfo = [
    {
      html: `Need help? Call us: <a class="text-green-600 font-semibold hover:underline" href="tel:1800-888-888">1800 888 888</a>`,
    },
    { html: 'English' },
    { html: 'USD' },
  ];

  categories = ['All Categories', 'Vegetables', 'Fruits', 'Pet Foods', 'Meats'];

  actionButtons = [
    { icon: 'fa-map-marker-alt', label: 'Your location' },
    { icon: 'fa-sync-alt', label: 'Compare' },
    { icon: 'fa-heart', label: 'Wishlist' },
    { icon: 'fa-shopping-cart', label: 'Cart' },
    { icon: 'fa-user', label: 'Account' },
  ];

    navigationLinks = [
    { label: 'Deals', href: '#' },
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Shop', href: '#' },
    { label: 'Vendors', href: '#' },
    { label: 'Mega menu', href: '#', bold: true },
    { label: 'Blog', href: '#' },
    { label: 'Pages', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  supportInfo = {
    phone: '1900 - 888',
    note: '24/7 support center',
    icon: 'fa-headphones-alt',
  };

  tags = [
    { name: 'Cake & Milk', active: false },
    { name: 'Coffes & Teas', active: false },
    { name: 'Pet Foods', active: true },
    { name: 'Vegetables', active: false }
  ];

  categories2 = [
    {
      name: 'Cake & Milk',
      image: 'https://storage.googleapis.com/a1aa/image/9169831d-e968-4f1d-6dfb-3fa35ef7fbe8.jpg',
      items: 26,
      bg: 'bg-yellow-50'
    },
    {
      name: 'Organic Kiwi',
      image: 'https://storage.googleapis.com/a1aa/image/8f0ddf56-8671-4fd6-d3aa-11bda571d9ca.jpg',
      items: 23,
      bg: 'bg-yellow-100'
    },
    {
      name: 'Peach',
      image: 'https://storage.googleapis.com/a1aa/image/a2af32a1-cb81-4bdc-e768-fe6b6231a059.jpg',
      items: 14,
      bg: 'bg-yellow-200'
    },
    {
      name: 'Red Apple',
      image: 'https://storage.googleapis.com/a1aa/image/65c90f68-27e4-49e9-5f18-5eeebcf6e177.jpg',
      items: 51,
      bg: 'bg-red-50'
    },
    {
      name: 'Snack',
      image: 'https://storage.googleapis.com/a1aa/image/ee7889e4-f810-4499-98d7-e4ee71b7a639.jpg',
      items: 56,
      bg: 'bg-yellow-50'
    },
    {
      name: 'Vegetables',
      image: 'https://storage.googleapis.com/a1aa/image/01a96e87-af4d-42f9-d1d3-602ac12734a8.jpg',
      items: 72,
      bg: 'bg-purple-50'
    },
    {
      name: 'Strawberry',
      image: 'https://storage.googleapis.com/a1aa/image/a0c43e8d-4fe9-400c-876b-765010c7d22d.jpg',
      items: 26,
      bg: 'bg-green-50'
    },
    {
      name: 'Black plum',
      image: 'https://storage.googleapis.com/a1aa/image/e2882750-a159-45b7-3f02-68bf3df142fc.jpg',
      items: 123,
      bg: 'bg-red-50'
    },
    {
      name: 'Custard apple',
      image: 'https://storage.googleapis.com/a1aa/image/d9b7c6c7-508e-431c-f3c4-992f8e58a5b5.jpg',
      items: 39,
      bg: 'bg-yellow-50'
    },
    {
      name: 'Coffe & Tea',
      image: 'https://storage.googleapis.com/a1aa/image/9c12c0c6-c104-40cc-c532-650b728e5145.jpg',
      items: 23,
      bg: 'bg-yellow-50'
    }
  ];

  products = [
    {
      name: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
      brand: 'NestFood',
      price: 28.85,
      oldPrice: 35.8,
      label: 'Hot',
      labelClass: 'bg-pink-500',
      image: 'https://storage.googleapis.com/a1aa/image/76e82885-07b9-488f-3a56-8085276e80d0.jpg',
    },
    {
      name: 'All Natural Italian-Style Chicken Meatballs',
      brand: 'StarKist',
      price: 52.85,
      oldPrice: 55.8,
      label: 'Sale',
      labelClass: 'bg-blue-500',
      image: 'https://storage.googleapis.com/a1aa/image/2c6a33df-69bc-4d7c-97e6-3d14b4a2f116.jpg',
    },
    {
      name: 'Angie\'s Boomchickapop Sweet & Salty Kettle Corn',
      brand: 'StarKist',
      price: 48.85,
      oldPrice: 52.8,
      label: 'Hot',
      labelClass: 'bg-green-600',
      image: 'https://storage.googleapis.com/a1aa/image/fe79b7f6-14e5-4002-a6d7-9658336ae749.jpg',
    },
    {
      name: 'Foster Farms Takeout Crispy Classic Buffalo Wings',
      brand: 'NestFood',
      price: 17.85,
      oldPrice: 19.8,
      image: 'https://storage.googleapis.com/a1aa/image/2f22f07b-c9a2-403b-b817-a0613233112b.jpg',
    },
    {
      name: 'Blue Diamond Almonds Lightly Salted Vegetables',
      brand: 'NestFood',
      price: 23.85,
      oldPrice: 25.8,
      label: 'Hot',
      labelClass: 'bg-yellow-400',
      image: 'https://storage.googleapis.com/a1aa/image/5e84fbdb-e371-43fa-a314-dbf67a944556.jpg',
    },
    {
      name: 'Chobani Complete Vanilla Greek Yogurt',
      brand: 'Yoplait',
      price: 54.85,
      oldPrice: 55.8,
      image: 'https://storage.googleapis.com/a1aa/image/52532e25-3ef4-46bf-7f8c-ebbe1c38b2d7.jpg',
    },
    {
      name: 'Cananda Dry Ginger Ale - 2 L Bottle - 200ml - 400g',
      brand: 'NestFood',
      price: 32.85,
      oldPrice: 55.8,
      image: 'https://storage.googleapis.com/a1aa/image/134a0012-44a8-4626-0b62-54c8b8f7bb2f.jpg',
    },
    {
      name: 'Encore Seafoods Stuffed Alaskan Salmon',
      brand: 'NestFood',
      price: 35.85,
      oldPrice: 37.3,
      label: 'Sale',
      labelClass: 'bg-blue-500',
      image: 'https://storage.googleapis.com/a1aa/image/f5a93c9e-bd88-4286-2a18-167c6f78a043.jpg',
    },
    {
      name: 'Gorton\'s Beer Battered Fish Fillets with soft pepper',
      brand: 'Coffe',
      price: 23.85,
      oldPrice: 25.6,
      label: 'Hot',
      labelClass: 'bg-pink-600',
      image: 'https://storage.googleapis.com/a1aa/image/8fb59c8a-06d5-4fa3-fe46-501bd20ff665.jpg',
    },
    {
      name: 'Haagen-Daaz Caramel Cone Ice Cream Ketchup',
      brand: 'Cream',
      price: 32.85,
      oldPrice: 34.6,
      image: 'https://storage.googleapis.com/a1aa/image/8c435f10-81fa-414e-5c61-f8536d880222.jpg',
    }
  ];
  items = [
    {
      name: 'Everyday Fresh & Clean with Our Products',
      image: 'https://storage.googleapis.com/a1aa/image/695cca43-904d-4010-0cbf-aa705f5de50e.jpg',
      bgColor: 'yellow',
    },
    {
      name: 'Make your Breakfast Healthy and Easy',
      image: 'https://storage.googleapis.com/a1aa/image/ac543f45-0860-4a8a-9fba-495643fe05c3.jpg',
      bgColor: 'pink',
    },
    {
      name: 'The best Organic Products Online',
      image: 'https://storage.googleapis.com/a1aa/image/ba65c299-eb1a-4ea1-443a-22d816af93e2.jpg',
      bgColor: 'blue',
    },
  ];

  bestSells = [
    {
      name: 'All Natural Italian-Style Chicken Meatballs',
      brand: 'Nest Foods',
      price: 238.85,
      oldPrice: 245.8,
      discount: 25,
      image: 'https://storage.googleapis.com/a1aa/image/2c6a33df-69bc-4d7c-97e6-3d14b4a2f116.jpg',
      sold: 70,
      totalStock: 120,
      soldPercentage: 70
    },
    {
      name: 'Angie\'s Boomchickapop Sweet and Wormies',
      brand: 'Nest Foods',
      price: 238.85,
      oldPrice: 245.8,
      discount: 10,
      image: 'https://storage.googleapis.com/a1aa/image/7a002893-cc47-4e0a-2457-58e00b24afb2.jpg',
      sold: 50,
      totalStock: 100,
      soldPercentage: 50
    },
    {
      name: 'Foster Farms Takeout Crispy Classic',
      brand: 'Nest Foods',
      price: 238.85,
      oldPrice: 245.8,
      image: 'https://storage.googleapis.com/a1aa/image/f0bae350-fe15-427d-ff41-e8d46d018bbe.jpg',
      sold: 90,
      totalStock: 120,
      soldPercentage: 75
    },
    {
      name: 'Blue Diamond Almonds Lightly Salted',
      brand: 'Nest Foods',
      price: 238.85,
      oldPrice: 245.8,
      discount: 15,
      image: 'https://storage.googleapis.com/a1aa/image/5f96fca7-9062-40a4-4b3b-d546bc388f05.jpg',
      sold: 60,
      totalStock: 120,
      soldPercentage: 50
    }
  ];
  deals = [
    {
      name: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
      brand: 'NestFood',
      price: 32.85,
      oldPrice: 35.8,
      image: 'https://storage.googleapis.com/a1aa/image/dc7b4f78-91a0-40b9-3d98-1143b7fd7c1f.jpg'
    },
    {
      name: 'Perdue Simply Smart Organics Gluten Free',
      brand: 'NestFood',
      price: 24.85,
      oldPrice: 25.4,
      image: 'https://storage.googleapis.com/a1aa/image/27b40724-3aba-4ba0-0aab-6834a12e0eaa.jpg'
    },
    {
      name: 'Signature Wood-Fired Hummus and Caramelized',
      brand: 'Prosecco',
      price: 12.85,
      oldPrice: 14.8,
      image: 'https://storage.googleapis.com/a1aa/image/ff46dbbe-8201-486e-cc4b-a8fd9b7923de.jpg'
    },
    {
      name: 'Simply Lemonade with Raspberry Juice',
      brand: 'NestFood',
      price: 15.85,
      oldPrice: 19.8,
      image: 'https://storage.googleapis.com/a1aa/image/7c98a1ee-e8b9-4a9f-7c31-599adb44f1e4.jpg'
    }
  ];
  
 topSellingProducts = [
  {
    name: 'Nestle Original Coffee-Mate Coffee Creamer',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/5aa1b931-3d33-417d-47b1-b622a7977a46.jpg',
    price: '$32.85',
    originalPrice: '$35.8',
  },
  {
    name: 'Nestle Original Coffee-Mate Coffee Creamer',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/55def763-bdfb-4788-191b-149f1f721e21.jpg',
    price: '$32.85',
    originalPrice: '$35.8',
  },
  {
    name: 'Nestle Original Coffee-Mate Coffee Creamer',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/ffe06540-9017-42dd-216d-cd74fe6bb3bc.jpg',
    price: '$32.85',
    originalPrice: '$35.8',
  }
];
 trendingProducts = [
  {
    name: 'Organic Cage-Free Grade A Large Brown Eggs',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/7128eb2e-6c67-474d-570f-559f09bbf073.jpg',
    price: '$32.85',
    originalPrice: '$35.8',
  },
  {
    name: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/ff5b29fa-a486-465c-af3f-f8806d40075d.jpg',
    price: '$32.85',
    originalPrice: '$35.8',
  },
  {
    name: 'Naturally Flavored Cinnamon Vanilla Light Roast Coffee',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/2dbe4906-d118-40cb-de22-8c7f4d9b697d.jpg',
    price: '$32.85',
    originalPrice: '$55.8',
  }
];
 recentlyAddedProducts = [
  {
    name: 'Pepperidge Farm Farmhouse Hearty White Bread',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/078233fc-5a2e-4b0b-01e3-b564c1ffd81d.jpg',
    price: '$32.85',
    originalPrice: '$45.8',
  },
  {
    name: 'Organic Frozen Triple Berry Blend',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/a2e8dc68-d139-4d27-2d60-c9b7110c5d18.jpg',
    price: '$32.85',
    originalPrice: '$33.0',
  },
  {
    name: 'Oroweat Country Buttermilk Bread',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/19b6849b-3460-481d-f86b-62ad7e783b79.jpg',
    price: '$32.85',
    originalPrice: '$32.0',
  }
];

topRatedProducts = [
  {
    name: 'Foster Farms Takeout Crispy Classic Buffalo Wings',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/2f22f07b-c9a2-403b-b817-a0613233112b.jpg',
    price: '$32.85',
    originalPrice: '$35.8',
  },
  {
    name: 'Angie\'s Boomchickapop Sweet & Salty Kettle Corn',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/fe79b7f6-14e5-4002-a6d7-9658336ae749.jpg',
    price: '$32.85',
    originalPrice: '$35.8',
  },
  {
    name: 'All Natural Italian-Style Chicken Meatballs',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/2c6a33df-69bc-4d7c-97e6-3d14b4a2f116.jpg',
    price: '$32.85',
    originalPrice: '$35.8',
  }
];

  features = [
    {
      icon: 'fas fa-tags',
      title: 'Best prices & offers',
      description: 'Orders $50 or more'
    },
    {
      icon: 'fas fa-truck',
      title: 'Free delivery',
      description: '24/7 amazing services'
    },
    {
      icon: 'fas fa-gift',
      title: 'Great daily deal',
      description: 'When you sign up'
    },
    {
      icon: 'fas fa-th-large',
      title: 'Wide assortment',
      description: 'Mega Discounts'
    },
    {
      icon: 'fas fa-undo',
      title: 'Easy returns',
      description: 'Within 30 days'
    }
  ];

  companyLinks = [
    { label: 'About Us', url: '#' },
    { label: 'Delivery Information', url: '#' },
    { label: 'Privacy Policy', url: '#' },
    { label: 'Terms & Conditions', url: '#' },
    { label: 'Contact Us', url: '#' },
    { label: 'Support Center', url: '#' },
    { label: 'Careers', url: '#' }
  ];

  accountLinks = [
    { label: 'Sign In', url: '#' },
    { label: 'View Cart', url: '#' },
    { label: 'My Wishlist', url: '#' },
    { label: 'Track My Order', url: '#' },
    { label: 'Help Ticket', url: '#' },
    { label: 'Shipping Details', url: '#' },
    { label: 'Compare products', url: '#' }
  ];

  corporateLinks = [
    { label: 'Become a Vendor', url: '#' },
    { label: 'Affiliate Program', url: '#' },
    { label: 'Farm Business', url: '#' },
    { label: 'Farm Careers', url: '#' },
    { label: 'Our Suppliers', url: '#' },
    { label: 'Accessibility', url: '#' },
    { label: 'Promotions', url: '#' }
  ];

  popularLinks = [
    { label: 'Milk & Flavoured Milk', url: '#' },
    { label: 'Butter and Margarine', url: '#' },
    { label: 'Eggs Substitutes', url: '#' },
    { label: 'Mayonnaise', url: '#' },
    { label: 'Sour Cream and Dips', url: '#' },
    { label: 'Tuna & Sandwiches', url: '#' },
    { label: 'Cheese', url: '#' }
  ];
  
    currentSlide: number = 1; // El primer slide es el inicial

  // Función para ir al siguiente slide
  nextSlide() {
    this.currentSlide = this.currentSlide === 1 ? 2 : 1; // Alterna entre 1 y 2
  }

  // Función para ir al slide anterior
  previousSlide() {
    this.currentSlide = this.currentSlide === 1 ? 2 : 1; // Alterna entre 1 y 2
  }
}
