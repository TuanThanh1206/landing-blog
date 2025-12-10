# CẤU TRÚC WEBSITE - OPTYXSTACK.COM

## 📋 TỔNG QUAN

Website được xây dựng bằng **Next.js 14+ (App Router)** với cấu trúc file-based routing. Tất cả các trang đều sử dụng design system thống nhất với dark theme và accent color emerald/cyan.

---

## 🏠 TRANG CHỦ (Home Page)

**Route**: `/`  
**File**: `src/app/page.tsx`  
**Component**: `src/components/HomeClient.tsx`

### Nội dung chính:
1. **Hero Section** - Với System Monitor widget (simulation)
2. **Services Section** - 4 services trong Bento Grid layout
3. **Process Section** - 3 bước làm việc
4. **Infrastructure Section** - Giới thiệu về infrastructure
5. **Technical Details Section** - Tech stack và chi tiết kỹ thuật
6. **Pricing Section** - 3 gói dịch vụ (Phases)
7. **Contact/CTA Section** - Form liên hệ

### Đặc điểm:
- Client Component (có state và effects)
- System Monitor widget với metrics simulation
- Responsive design
- SEO metadata đầy đủ

---

## 📚 BLOG SECTION

### 1. Blog Listing Page
**Route**: `/blog`  
**File**: `src/app/blog/page.tsx`

**Chức năng**:
- Hiển thị danh sách tất cả blog posts
- Grid layout (3 columns trên desktop)
- Mỗi card hiển thị: title, excerpt, date, author, tags
- Link đến từng bài viết chi tiết

**Data Source**: `content/blog/*.md` (đọc qua `src/lib/blog.ts`)

**Blog Posts hiện có**:
- `devops-best-practices.md`
- `optimizing-website-performance.md`
- `scalable-architecture-patterns.md`

### 2. Blog Detail Page
**Route**: `/blog/[slug]`  
**File**: `src/app/blog/[slug]/page.tsx`

**Chức năng**:
- Hiển thị nội dung chi tiết của một blog post
- Parse markdown từ file `.md`
- Hiển thị metadata: title, date, author, tags
- Render markdown content thành HTML

**Data Format** (Frontmatter):
```yaml
title: "Blog Title"
date: "2024-01-01"
excerpt: "Short description"
author: "Author Name"
tags: ["tag1", "tag2"]
```

---

## 📊 CASE STUDIES SECTION

### 1. Case Studies Listing Page
**Route**: `/case-studies`  
**File**: `src/app/case-studies/page.tsx`

**Chức năng**:
- Hiển thị danh sách tất cả case studies
- Grid layout (3 columns trên desktop)
- Mỗi card hiển thị: client, industry, title, excerpt, metrics preview, tags
- Link đến từng case study chi tiết

**Data Source**: `content/case-studies/*.md` (đọc qua `src/lib/case-studies.ts`)

**Case Studies hiện có**:
- `database-migration-success.md`
- `ecommerce-performance-boost.md`
- `media-platform-optimization.md`
- `saas-platform-scaling.md`

### 2. Case Study Detail Page
**Route**: `/case-studies/[slug]`  
**File**: `src/app/case-studies/[slug]/page.tsx`

**Chức năng**:
- Hiển thị nội dung chi tiết của một case study
- Parse markdown từ file `.md`
- Hiển thị metadata: client, industry, metrics, challenge, solution, results
- Render markdown content thành HTML

**Data Format** (Frontmatter):
```yaml
title: "Case Study Title"
date: "2024-01-01"
client: "Client Name"
industry: "Industry"
excerpt: "Short description"
tags: ["tag1", "tag2"]
metrics:
  - label: "Performance"
    value: "50%"
    improvement: "improvement"
challenge: "Challenge description"
solution: "Solution description"
results: "Results description"
```

---

## 🛠️ SERVICES SECTION

### 1. Services Listing Page
**Route**: `/services`  
**File**: `src/app/services/page.tsx`

**Chức năng**:
- Hiển thị pricing packages (3 tiers)
- Hiển thị addon services (6 services)
- Comparison table
- FAQ section
- CTA section

**Pricing Packages**:
1. **Small System** - 15.000.000 VND/month
2. **Medium System** - 45.000.000 VND/month (Most Popular)
3. **Enterprise System** - Contact Us (Custom)

**Addon Services**:
1. System Architecture Consulting - 5.000.000 VND/project
2. Migration & Transformation - 10.000.000 VND/project
3. Security Audit - 8.000.000 VND/audit
4. Performance Optimization - 6.000.000 VND/project
5. Training & Knowledge Transfer - 3.000.000 VND/day
6. Emergency Support - 2.000.000 VND/hour

### 2. Service Detail Pages

#### Full Stack Optimization
**Route**: `/services/full-stack-optimization`  
**File**: `src/app/services/full-stack-optimization/page.tsx`

#### Managed Database
**Route**: `/services/managed-database`  
**File**: `src/app/services/managed-database/page.tsx`

#### Managed VPS
**Route**: `/services/managed-vps`  
**File**: `src/app/services/managed-vps/page.tsx`

#### System Audit
**Route**: `/services/system-audit`  
**File**: `src/app/services/system-audit/page.tsx`

#### Website Speed Mini
**Route**: `/services/website-speed-mini`  
**File**: `src/app/services/website-speed-mini/page.tsx`

**Đặc điểm chung**:
- Sử dụng template tương tự
- Mỗi trang có nội dung riêng về service cụ thể
- Có thể sử dụng `InfraPageTemplate` component

---

## 🖥️ INFRASTRUCTURE SECTION

### 1. Dedicated Server
**Route**: `/infra/dedicated-server`  
**File**: `src/app/infra/dedicated-server/page.tsx`

### 2. High Performance VPS
**Route**: `/infra/high-performance-vps`  
**File**: `src/app/infra/high-performance-vps/page.tsx`

### 3. Managed VPS
**Route**: `/infra/managed-vps`  
**File**: `src/app/infra/managed-vps/page.tsx`

### 4. Storage
**Route**: `/infra/storage`  
**File**: `src/app/infra/storage/page.tsx`

**Đặc điểm chung**:
- Có thể sử dụng `InfraPageTemplate` component (`src/components/InfraPageTemplate.tsx`)
- Mỗi trang giới thiệu về một loại infrastructure service

---

## 🧩 COMPONENTS

### Shared Components
**Location**: `src/components/`

1. **Navbar** (`Navbar.tsx`)
   - Navigation bar cho tất cả các trang
   - Responsive menu

2. **Footer** (`Footer.tsx`)
   - Footer component với links và copyright

3. **HomeClient** (`HomeClient.tsx`)
   - Client component cho trang home
   - Chứa System Monitor widget và tất cả sections

4. **InfraPageTemplate** (`InfraPageTemplate.tsx`)
   - Template component cho các trang infrastructure
   - Có thể được tái sử dụng cho service pages

---

## 📁 CẤU TRÚC THƯ MỤC

```
src/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Home page (Server Component)
│   ├── layout.tsx                # Root layout với metadata
│   ├── globals.css               # Global styles
│   │
│   ├── blog/
│   │   ├── page.tsx              # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx          # Blog detail (dynamic)
│   │
│   ├── case-studies/
│   │   ├── page.tsx              # Case studies listing
│   │   └── [slug]/
│   │       └── page.tsx          # Case study detail (dynamic)
│   │
│   ├── services/
│   │   ├── page.tsx              # Services listing (pricing)
│   │   ├── full-stack-optimization/
│   │   ├── managed-database/
│   │   ├── managed-vps/
│   │   ├── system-audit/
│   │   └── website-speed-mini/
│   │
│   └── infra/
│       ├── dedicated-server/
│       ├── high-performance-vps/
│       ├── managed-vps/
│       └── storage/
│
├── components/                    # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HomeClient.tsx
│   └── InfraPageTemplate.tsx
│
└── lib/                           # Utility functions
    ├── blog.ts                    # Blog data fetching
    └── case-studies.ts            # Case studies data fetching

content/                           # Content files (Markdown)
├── blog/
│   ├── devops-best-practices.md
│   ├── optimizing-website-performance.md
│   └── scalable-architecture-patterns.md
│
└── case-studies/
    ├── database-migration-success.md
    ├── ecommerce-performance-boost.md
    ├── media-platform-optimization.md
    └── saas-platform-scaling.md
```

---

## 🔄 ROUTING STRUCTURE

### Static Routes
- `/` - Home page
- `/blog` - Blog listing
- `/case-studies` - Case studies listing
- `/services` - Services listing (pricing)
- `/services/full-stack-optimization` - Service detail
- `/services/managed-database` - Service detail
- `/services/managed-vps` - Service detail
- `/services/system-audit` - Service detail
- `/services/website-speed-mini` - Service detail
- `/infra/dedicated-server` - Infrastructure page
- `/infra/high-performance-vps` - Infrastructure page
- `/infra/managed-vps` - Infrastructure page
- `/infra/storage` - Infrastructure page

### Dynamic Routes
- `/blog/[slug]` - Blog post detail (dynamic based on markdown files)
- `/case-studies/[slug]` - Case study detail (dynamic based on markdown files)

---

## 📝 CONTENT MANAGEMENT

### Blog Posts
- **Format**: Markdown files với frontmatter
- **Location**: `content/blog/*.md`
- **Metadata**: title, date, excerpt, author, tags
- **Processing**: Sử dụng `gray-matter` và `remark` để parse

### Case Studies
- **Format**: Markdown files với frontmatter
- **Location**: `content/case-studies/*.md`
- **Metadata**: title, date, client, industry, tags, metrics, challenge, solution, results
- **Processing**: Sử dụng `gray-matter` và `remark` để parse

---

## 🎨 DESIGN SYSTEM

### Colors
- **Background**: Dark theme (`#020307`, `#030308`, `#040509`, etc.)
- **Primary**: Emerald (`emerald-400`, `emerald-500`)
- **Secondary**: Cyan (`cyan-400`, `cyan-700`)
- **Text**: Slate (`slate-200`, `slate-300`, `slate-400`)

### Typography
- **Font**: Geist Sans (via Next.js)
- **Font Mono**: Geist Mono (via Next.js)

### Components Style
- Rounded corners (`rounded-2xl`, `rounded-3xl`)
- Glass morphism effects (`backdrop-blur-md`)
- Gradient text effects
- Hover animations (`hover:-translate-y-1`)

---

## 🔍 SEO STRUCTURE

### Metadata
- **Root Layout**: `src/app/layout.tsx` - Global metadata
- **Home Page**: `src/app/page.tsx` - Page-specific metadata
- **Dynamic Pages**: Có thể có metadata riêng

### SEO Features
- OpenGraph tags cho social sharing
- Twitter Card metadata
- JSON-LD Schema markup
- Canonical URLs
- Favicon và icons

---

## 📊 STATISTICS

### Tổng số trang
- **Static Pages**: 11 pages
- **Dynamic Pages**: 2 route patterns (blog, case-studies)
- **Total Routes**: 11+ (tùy số lượng blog posts và case studies)

### Content Files
- **Blog Posts**: 3 files
- **Case Studies**: 4 files

### Components
- **Shared Components**: 4 components
- **Page Components**: 15+ page components

---

## 🚀 TECHNICAL STACK

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown (gray-matter, remark)
- **Icons**: Lucide React
- **Fonts**: Geist (Google Fonts)

---

## 📌 NOTES

1. **Dynamic Content**: Blog và Case Studies được load từ markdown files, dễ dàng thêm/sửa content mà không cần code changes.

2. **Template Reusability**: Có thể sử dụng `InfraPageTemplate` cho các trang infrastructure và service pages.

3. **SEO Optimization**: Mỗi trang có thể có metadata riêng, nhưng hiện tại chỉ home page có metadata đầy đủ.

4. **Responsive Design**: Tất cả các trang đều responsive với mobile-first approach.

5. **Performance**: Sử dụng Next.js App Router với Server Components và Client Components tối ưu.

---

**Cập nhật lần cuối**: 2024  
**Domain**: optyxstack.com  
**Framework**: Next.js 14+ (App Router)

