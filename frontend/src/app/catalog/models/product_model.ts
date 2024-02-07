export interface Product {
  id: string;
  createdAt: Date;
  sellerId: string;
  title: string;
  description: string;
  stock: number;
  sub_category?: string | null;
  industry?: string | null;
  terms_and_conditions?: string | null;
  selling_price: number;
  supplier_info?: string | null;
  manufacturing_info?: string | null;
  handling?: string | null;
  color?: string | null;
  min_bulk_order?: number | null;
  min_order_quantity?: number | null;
  color_variants?: string[] | null; // Nullable list of hexacolors in strings
  images: string[]; // List of images of the product, default to an empty array
  primary_image: string; // The primary image of the product, not nullable
}

export class ProductModel implements Product {
  id: string;
  createdAt: Date;
  sellerId: string;
  title: string;
  description: string;
  stock: number;
  sub_category?: string | null;
  industry?: string | null;
  terms_and_conditions?: string | null;
  selling_price: number;
  supplier_info?: string | null;
  manufacturing_info?: string | null;
  handling?: string | null;
  color?: string | null;
  min_bulk_order?: number | null;
  min_order_quantity?: number | null;
  color_variants?: string[] | null; // Nullable list of hexacolors in strings
  images: string[] = []; // List of images of the product, default to an empty array
  primary_image: string; // The primary image of the product, not nullable

  constructor(data: Product) {
    this.id = data.id;
    this.createdAt = data.createdAt;
    this.sellerId = data.sellerId;
    this.title = data.title;
    this.description = data.description;
    this.stock = data.stock;
    this.sub_category = data.sub_category || null;
    this.industry = data.industry || null;
    this.terms_and_conditions = data.terms_and_conditions || null;
    this.selling_price = data.selling_price;
    this.supplier_info = data.supplier_info || null;
    this.manufacturing_info = data.manufacturing_info || null;
    this.handling = data.handling || null;
    this.color = data.color || null;
    this.min_bulk_order = data.min_bulk_order || null;
    this.min_order_quantity = data.min_order_quantity || null;
    this.color_variants = data.color_variants || null;
    this.images = data.images || [];
    this.primary_image = data.primary_image;
  }
}
