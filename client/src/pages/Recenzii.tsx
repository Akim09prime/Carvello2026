import { useReviews, useCreateReview } from "@/hooks/use-reviews";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertReviewSchema, type InsertReview } from "@shared/schema";
import { Star, MessageSquarePlus, Quote } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Recenzii() {
  const { data: reviews, isLoading } = useReviews();
  const createReview = useCreateReview();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const form = useForm<InsertReview>({
    resolver: zodResolver(insertReviewSchema),
    defaultValues: {
      name: "",
      role: "",
      content: "",
      rating: 5,
    },
  });

  const onSubmit = async (data: InsertReview) => {
    try {
      await createReview.mutateAsync(data);
      toast({ title: "Mulțumim!", description: "Recenzia ta a fost publicată." });
      setOpen(false);
      form.reset();
    } catch (error) {
      toast({ title: "Eroare", description: "Nu s-a putut publica recenzia.", variant: "destructive" });
    }
  };

  return (
    <div className="pt-24 min-h-screen pb-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Ce spun clienții</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Feedback-ul vostru ne ajută să menținem standardul ridicat de calitate.
          </p>
          
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-8">
                <MessageSquarePlus className="mr-2 h-4 w-4" /> Lasă o Recenzie
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#1F1F1F] border-white/10 text-white">
              <DialogHeader>
                <DialogTitle>Scrie o recenzie</DialogTitle>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Numele Tău</FormLabel>
                        <FormControl><Input {...field} className="bg-white/5 border-white/10" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Rol / Proiect (ex: Bucătărie)</FormLabel>
                        <FormControl><Input {...field} className="bg-white/5 border-white/10" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="rating"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Rating</FormLabel>
                        <Select onValueChange={(val) => field.onChange(parseInt(val))} defaultValue={field.value.toString()}>
                          <FormControl>
                            <SelectTrigger className="bg-white/5 border-white/10">
                              <SelectValue placeholder="Selectează stele" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#1F1F1F] border-white/10 text-white">
                            <SelectItem value="5">5 Stele - Excelent</SelectItem>
                            <SelectItem value="4">4 Stele - Foarte Bun</SelectItem>
                            <SelectItem value="3">3 Stele - Bun</SelectItem>
                            <SelectItem value="2">2 Stele - Slăbuț</SelectItem>
                            <SelectItem value="1">1 Stea - Dezamăgitor</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mesajul Tău</FormLabel>
                        <FormControl><Textarea {...field} className="bg-white/5 border-white/10" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={createReview.isPending} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Postează Recenzia
                  </Button>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map(i => <div key={i} className="h-48 bg-white/5 rounded-2xl animate-pulse" />)}
          </div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {reviews?.map((review) => (
              <div key={review.id} className="break-inside-avoid bg-white/5 border border-white/5 p-8 rounded-2xl hover:border-primary/20 transition-colors">
                <Quote className="h-8 w-8 text-primary/40 mb-4" />
                <p className="text-lg text-gray-300 mb-6 italic">"{review.content}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold font-serif text-white">{review.name}</h4>
                    {review.role && <p className="text-sm text-primary">{review.role}</p>}
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
