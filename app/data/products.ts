// TagBridge Products Data
// This file contains the products that will be visible to all website visitors
// Admin can update this through the admin panel

export interface Product {
  id: string
  title: string
  description: string
  price: string
  currency: 'USD' | 'ETB'
  category: string
  image?: string
}

// Default products - TagBridge real products
export const defaultProducts: Product[] = [
  {
    id: '1',
    title: 'ክሪፕቶ ከረንሲ በአማረኛ',
    description: 'የክሪፕቶ ከረንሲ ሙሉ መመሪያ በአማረኛ ቋንቋ። ቢትኮይን፣ ኢትሪየም እና ሌሎች ዲጂታል ምንዛሬዎችን እንዴት መግዛት፣ መሸጥ እና ማስተዳደር እንደሚቻል ይማሩ።',
    price: '450',
    currency: 'ETB',
    category: 'Book'
  },
  {
    id: '2',
    title: 'ዌብ ሳይት ማበልጸግ',
    description: 'ሙሉ የዌብ ሳይት ልማት እና ማሻሻያ አገልግሎት። ዘመናዊ፣ ፈጣን እና ሞባይል ተስማሚ ዌብ ሳይቶች ለንግድዎ እና ለግል አገልግሎትዎ።',
    price: '5000',
    currency: 'ETB',
    category: 'Service'
  },
  {
    id: '3',
    title: 'የክሪፕቶ ከረንሲ ስልጠና',
    description: 'ተግባራዊ የክሪፕቶ ከረንሲ ስልጠና። የዲጂታል ምንዛሬ ንግድ፣ የዋሌት አያያዝ እና የደህንነት ዘዴዎችን በተግባር ይማሩ።',
    price: '1500',
    currency: 'ETB',
    category: 'Course'
  },
  {
    id: '4',
    title: 'የፎሬክስ ትሬድንግ መጽሃፍ በአማረኛ',
    description: 'የውጭ ምንዛሬ ንግድ ሙሉ መመሪያ በአማረኛ። የፎሬክስ ገበያ፣ የትንተና ዘዴዎች እና የአደጋ አያያዝ ስልቶች በዝርዝር።',
    price: '700',
    currency: 'ETB',
    category: 'Book'
  },
  {
    id: '5',
    title: 'ERP Software Consulting',
    description: 'Professional ERP system consultation and implementation services. Complete business process analysis, system selection, and deployment support for enterprises.',
    price: '25000',
    currency: 'ETB',
    category: 'Consultation'
  },
  {
    id: '6',
    title: 'App & Software Advertisement',
    description: 'Professional mobile app and software promotion services. Complete digital marketing package including social media campaigns, content creation, and targeted advertising.',
    price: '10000',
    currency: 'ETB',
    category: 'Service'
  }
]

// This function will be used to get products for public display
export const getPublicProducts = (): Product[] => {
  return defaultProducts
}