# TagBridge Products Setup Guide

## 🎯 How to Add Products That ALL Visitors Can See

### Method 1: Edit the Products File Directly (Recommended)

1. **Open**: `app/data/products.ts`
2. **Add your products** to the `defaultProducts` array:

```typescript
export const defaultProducts: Product[] = [
  {
    id: '1',
    title: 'AI Tools Mastery Course',
    description: 'Complete guide to the latest AI tools, reviews, and implementation strategies for businesses.',
    price: '2500',
    currency: 'ETB',
    category: 'Course'
  },
  {
    id: '2',
    title: 'Tech Review Templates',
    description: 'Professional templates and frameworks for creating comprehensive technology reviews.',
    price: '1200',
    currency: 'ETB',
    category: 'Template'
  },
  {
    id: '3',
    title: 'Digital Innovation Consultation',
    description: 'Personalized consultation for selecting and implementing digital solutions.',
    price: '99',
    currency: 'USD',
    category: 'Service'
  }
]
```

3. **Save the file**
4. **Commit and push** to deploy:
   ```bash
   git add .
   git commit -m "Add products visible to all visitors"
   git push origin main
   ```

### Method 2: Quick Add (Copy & Paste Ready)

Replace the empty array in `app/data/products.ts` with this:

```typescript
export const defaultProducts: Product[] = [
  {
    id: '1',
    title: 'AI Tools Mastery Guide',
    description: 'Complete guide to the latest AI tools and implementation strategies.',
    price: '2500',
    currency: 'ETB',
    category: 'Course'
  },
  {
    id: '2',
    title: 'Tech Review Templates',
    description: 'Professional templates for creating technology reviews.',
    price: '1200',
    currency: 'ETB',
    category: 'Template'
  },
  {
    id: '3',
    title: 'Digital Consultation',
    description: 'Personalized consultation for digital transformation.',
    price: '99',
    currency: 'USD',
    category: 'Service'
  }
]
```

## 🔧 Available Categories:
- Course
- Book
- Software
- Template
- Service
- Consultation
- Subscription

## 💰 Currency Options:
- `'USD'` - US Dollars ($)
- `'ETB'` - Ethiopian Birr (ETB)

## ✅ After Adding Products:
1. All website visitors will see your products
2. Products work on both desktop and mobile
3. No localStorage issues
4. Professional product display with pricing

## 🚀 Deploy Changes:
```bash
git add .
git commit -m "Add TagBridge products"
git push origin main
```

Your products will be live in 1-2 minutes!