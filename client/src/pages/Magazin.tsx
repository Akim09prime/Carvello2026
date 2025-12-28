import { useProducts, useCreateProduct } from "@/hooks/use-products";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertProductSchema, type InsertProduct } from "@shared/schema";
import { Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function Magazin() {
  const { data: products, isLoading } = useProducts();
  const createProduct = useCreateProduct();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const form = useForm<InsertProduct>({
    resolver: zodResolver(insertProductSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      image: "",
      category: "",
    },
  });

  const onSubmit = async (data: InsertProduct) => {
    try {
      await createProduct.mutateAsync(data);
      toast({ title: "Succes!", description: "Produsul a fost adăugat." });
      setOpen(false);
      form.reset();
    } catch (error) {
      toast({ title: "Eroare", description: "Nu s-a putut adăuga produsul.", variant: "destructive" });
    }
  };

  return (
    <div className="pt-24 min-h-screen pb-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Magazin</h1>
            <p className="text-muted-foreground">Piese de mobilier standard și decorațiuni disponibile imediat.</p>
          </div>
          
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full">
                <Plus className="mr-2 h-4 w-4" /> Adaugă Produs (Admin)
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#1F1F1F] border-white/10 text-white">
              <DialogHeader>
                <DialogTitle>Adaugă Produs Nou</DialogTitle>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nume Produs</FormLabel>
                        <FormControl><Input {...field} className="bg-white/5 border-white/10" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Categorie</FormLabel>
                        <FormControl><Input {...field} placeholder="ex: Masă, Scaun" className="bg-white/5 border-white/10" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preț (RON)</FormLabel>
                        <FormControl><Input {...field} className="bg-white/5 border-white/10" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>URL Imagine</FormLabel>
                        <FormControl><Input {...field} placeholder="https://..." className="bg-white/5 border-white/10" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descriere</FormLabel>
                        <FormControl><Textarea {...field} className="bg-white/5 border-white/10" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={createProduct.isPending} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    {createProduct.isPending ? "Se adaugă..." : "Salvează Produs"}
                  </Button>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => <div key={i} className="h-[400px] bg-white/5 rounded-2xl animate-pulse" />)}
          </div>
        ) : products?.length === 0 ? (
          <div className="text-center py-24 bg-white/5 rounded-2xl border border-white/5 border-dashed">
            <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Nu există produse momentan</h3>
            <p className="text-muted-foreground">Reveniți curând pentru colecția noastră nouă.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products?.map((product) => (
              <div key={product.id} className="group bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all hover:shadow-xl">
                <div className="aspect-square overflow-hidden relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-white">
                    {product.price} RON
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-primary font-bold mb-2 uppercase tracking-wider">{product.category}</div>
                  <h3 className="text-xl font-bold font-serif mb-2 text-foreground">{product.name}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{product.description}</p>
                  <Button className="w-full bg-white/5 hover:bg-primary hover:text-primary-foreground text-white transition-colors border border-white/10">
                    Detalii
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
