import { useContactSubmit } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContactMessage } from "@shared/schema";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function Contact() {
  const submitContact = useContactSubmit();
  const { toast } = useToast();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: InsertContactMessage) => {
    try {
      await submitContact.mutateAsync(data);
      toast({ title: "Mesaj trimis!", description: "Vă vom contacta în cel mai scurt timp." });
      form.reset();
    } catch (error) {
      toast({ title: "Eroare", description: "Ceva nu a mers bine. Încercați din nou.", variant: "destructive" });
    }
  };

  return (
    <div className="pt-24 min-h-screen pb-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Info Section */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Contactează-ne</h1>
              <p className="text-lg text-muted-foreground">
                Suntem aici pentru a transforma ideile tale în realitate. Programează o vizită la showroom sau solicită o ofertă online.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold font-serif mb-1">Adresă Showroom & Fabrică</h3>
                  <p className="text-muted-foreground">Strada Exemplului Nr. 10, Sector 1<br/>București, România</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold font-serif mb-1">Telefon</h3>
                  <p className="text-muted-foreground">+40 700 000 000</p>
                  <p className="text-sm text-gray-500 mt-1">Luni - Vineri: 09:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold font-serif mb-1">Email</h3>
                  <p className="text-muted-foreground">contact@carvello.ro</p>
                  <p className="text-sm text-gray-500 mt-1">office@carvello.ro (pentru furnizori)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl">
            <h2 className="text-2xl font-serif font-bold mb-6">Trimite un mesaj</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nume Complet</FormLabel>
                        <FormControl><Input {...field} className="bg-white/5 border-white/10 h-12" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefon</FormLabel>
                        <FormControl><Input {...field} className="bg-white/5 border-white/10 h-12" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl><Input {...field} className="bg-white/5 border-white/10 h-12" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Detalii Proiect</FormLabel>
                      <FormControl><Textarea {...field} className="bg-white/5 border-white/10 min-h-[150px] resize-none" placeholder="Descrie pe scurt ce tip de mobilier dorești..." /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={submitContact.isPending} className="w-full h-12 text-lg bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-xl">
                  {submitContact.isPending ? "Se trimite..." : "Trimite Solicitarea"}
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 h-[400px] bg-white/5 rounded-3xl overflow-hidden border border-white/5 relative flex items-center justify-center">
           <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Bucharest&zoom=13&size=600x300')] bg-cover bg-center opacity-30 grayscale" />
           <p className="relative z-10 font-bold text-xl">Google Maps Integration Placeholder</p>
        </div>
      </div>
    </div>
  );
}
