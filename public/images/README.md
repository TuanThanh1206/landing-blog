# Images Directory Structure

Thư mục này chứa tất cả các hình ảnh được sử dụng trên trang chủ.

## Cấu trúc thư mục

```
public/images/
├── logos/          # Logo của các khách hàng (Social Proof)
├── avatars/        # Avatar của người review (Testimonials)
├── case-studies/   # Thumbnail cho case studies
└── blog/           # Thumbnail cho blog posts
```

## Hướng dẫn thêm ảnh

### 1. Social Proof Logos (`/images/logos/`)

Thêm logo của khách hàng vào thư mục này. Tên file nên rõ ràng, ví dụ:
- `techretail.png`
- `saas-platform.png`
- `media-co.png`
- `ecommerce.png`

**Yêu cầu:**
- Format: PNG, SVG, hoặc JPG
- Kích thước khuyến nghị: 160x64px (hoặc tỷ lệ tương tự)
- Nền trong suốt (transparent) nếu có thể
- File size: < 50KB

Sau đó cập nhật file `/src/lib/home-content.ts` với đường dẫn đúng.

### 2. Testimonial Avatars (`/images/avatars/`)

Thêm avatar của người review vào thư mục này. Tên file nên theo tên người, ví dụ:
- `nguyen-van-a.jpg`
- `tran-thi-b.jpg`
- `le-van-c.jpg`

**Yêu cầu:**
- Format: JPG hoặc PNG
- Kích thước: 200x200px (vuông)
- File size: < 100KB

Sau đó cập nhật file `/src/lib/home-content.ts` với đường dẫn đúng.

### 3. Case Study Thumbnails (`/images/case-studies/`)

Thêm thumbnail cho case studies vào thư mục này. Tên file nên theo slug của case study, ví dụ:
- `ecommerce-performance-boost.jpg`
- `database-migration-success.jpg`

**Yêu cầu:**
- Format: JPG hoặc PNG
- Kích thước khuyến nghị: 800x600px (tỷ lệ 4:3)
- File size: < 200KB

Sau đó thêm field `thumbnail` vào frontmatter của file markdown trong `/content/case-studies/`:

```yaml
---
title: "Your Case Study Title"
thumbnail: "/images/case-studies/your-case-study.jpg"
...
---
```

### 4. Blog Post Thumbnails (`/images/blog/`)

Thêm thumbnail cho blog posts vào thư mục này. Tên file nên theo slug của blog post, ví dụ:
- `devops-best-practices.jpg`
- `optimizing-website-performance.jpg`

**Yêu cầu:**
- Format: JPG hoặc PNG
- Kích thước khuyến nghị: 800x600px (tỷ lệ 4:3)
- File size: < 200KB

Sau đó thêm field `thumbnail` vào frontmatter của file markdown trong `/content/blog/`:

```yaml
---
title: "Your Blog Post Title"
thumbnail: "/images/blog/your-blog-post.jpg"
...
---
```

## Lưu ý

- Tất cả đường dẫn ảnh phải bắt đầu với `/images/` (tương đương với `/public/images/`)
- Next.js Image component sẽ tự động optimize ảnh
- Nếu ảnh không tồn tại, hệ thống sẽ hiển thị placeholder hoặc fallback


