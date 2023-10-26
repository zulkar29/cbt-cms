export const sidebarLinks = [
  {
    id: 1,
    title: 'Dashboard',
    icon: 'home.svg',
    slug: '/',
  },
  {
    id: 2,
    title: 'Manage Categories',
    icon: 'list.svg',
    subLinks: [
      {
        subtitle: 'Categories',
        slug: '/category',
      },
      {
        subtitle: 'Sub Categories',
        slug: '/subcategory',
      },
      {
        subtitle: 'Child Categories',
        slug: '/childcategory',
      },
    ],
  },
  {
    id: 3,
    title: 'Manage Products ',
    icon: 'product.png',
    subLinks: [
      {
        subtitle: 'Create Products',
        slug: '/products/create',
      },
      {
        subtitle: 'All Products',
        slug: '/products',
      },
      {
        subtitle: 'Stock Out Products',
        slug: '/products/stockout',
      },
      {
        subtitle: 'CSV Import & Export',
        slug: '/csv',
      },
      {
        subtitle: 'Product Reviews',
        slug: '/products/reviews',
      },
    ],
  },
  {
    id: 3,
    title: 'Manage Orders ',
    icon: 'order.png',
    subLinks: [
      {
        subtitle: 'All Orders',
        slug: '/orders',
      },
      {
        subtitle: 'Pending Orders',
        slug: '/orders/pending',
      },
      {
        subtitle: 'Delivered Orders',
        slug: '/orders/delivered',
      },
      {
        subtitle: 'Canceled Orders',
        slug: '/orders/canceled',
      },
    ],
  },
  {
    id: 4,
    title: 'Manage Blogs',
    icon: 'blog.png',
    subLinks: [
      {
        subtitle: 'Blogs',
        slug: '/blogs',
      },
    ],
  },
  {
    id: 5,
    title: 'Customers ',
    icon: 'group.png',
    slug: '/customers',
  },
  {
    id: 6,
    title: 'Videos',
    icon: 'video.png',
    subLinks: [
      {
        subtitle: 'All Videos',
        slug: '/videos',
      },
      {
        subtitle: 'Add New Video',
        slug: '/videos/create',
      },
    ],
  },
  {
    id: 7,
    title: 'Manage Faqs',
    icon: 'faq.png',
    subLinks: [
      {
        subtitle: 'Faqs',
        slug: '/faqs',
      },
    ],
  },
  {
    id: 8,
    title: 'Marketing',
    icon: 'promotion.png',
    subLinks: [
      {
        subtitle: 'Set Coupons',
        slug: '/coupons',
      },
      {
        subtitle: 'Add Banner',
        slug: '/banner',
      },
      {
        subtitle: 'Shipping',
        slug: '/shipping',
      },
    ],
  },
  {
    id: 9,
    title: 'Support',
    icon: 'support-ticket.png',
    subLinks: [
      {
        subtitle: 'Support',
        slug: '/support',
      },
      {
        subtitle: 'Queries',
        slug: '/queries',
      },
      {
        subtitle: 'Subscriber',
        slug: '/subscriber',
      },
    ],
  },
  {
    id: 10,
    title: 'Site Settings',
    icon: 'setting.png',
    subLinks: [
      {
        subtitle: 'Home Page',
        slug: '/setup/home-page',
      },
      {
        subtitle: 'Services',
        slug: '/setup/services',
      },
      {
        subtitle: 'Footer',
        slug: '/setup/footer',
      },
      {
        subtitle: 'Homepage Sliders',
        slug: '/setup/sliders',
      },
      {
        subtitle: 'Pages',
        slug: '/setup/pages',
      },
    ],
  },
];
