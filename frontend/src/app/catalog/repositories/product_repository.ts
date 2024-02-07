import supabaseClient from "@/utils/supabaseClient";
import { PostgrestError, SupabaseClient } from "@supabase/supabase-js";
import { ProductModel } from "../models/product_model";
abstract class BaseCatalogRepository {
  abstract fetchProducts(
    key: string,
    offset?: number | 30
  ): Promise<ProductModel[]>;

  abstract fetchProductById(
   id:string
  ): Promise<ProductModel>;
}

class NoProductsFound implements Error {
  name: string;
  message: string;
  stack?: string | undefined;
  cause?: unknown;

  constructor(message: string) {
    this.name = "No Products Found";
    this.message = message;
  }
}

export default class CatalogRepository implements BaseCatalogRepository {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = supabaseClient();
  }
 async fetchProductById(id: string): Promise<ProductModel> {
    const { data, error } = await this.supabase.from("products").select("*").eq("id",id).single();
    if (data) {
    return  new ProductModel(data);
    }
  throw new NoProductsFound((error as PostgrestError).message);
  }
  /**
   *
   * @param key Use keyword to search the product
   * @param offset Max offset until which the product was fetched
   * @returns
   */
  async fetchProducts(
    key?: string | undefined,
    offset?: number | 30
  ): Promise<ProductModel[]> {
    if(key != undefined){
      const { data, error } = await this.supabase.rpc("search_products",{"pattern":key});
      if (data) {
      return data.map((e: any) => new ProductModel(e));
    }
    throw new NoProductsFound((error as PostgrestError).message);
   }else{
    const { data, error } = await this.supabase.from("products").select("*");
    if (data) {
      return data.map((e) => new ProductModel(e));
    }
    throw new NoProductsFound(error.message);
   }
  }




}
