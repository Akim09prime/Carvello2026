import { useState, useRef, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Upload, X, FileText, Image, Video, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FadeInSection from "@/components/FadeInSection";

const formSchema = z.object({
  name: z.string().min(2, "Numele este obligatoriu"),
  phone: z.string().min(10, "Telefonul este obligatoriu (min. 10 caractere)"),
  email: z.string().email("Introduceți un email valid"),
  requestType: z.enum(["mobilier", "cnc", "vopsitorie", "proiectare"], {
    required_error: "Selectați tipul cererii",
  }),
  location: z.string().min(2, "Locația este obligatorie"),
  message: z.string().min(10, "Descrieți pe scurt cererea (min. 10 caractere)"),
  gdprConsent: z.boolean().refine(val => val === true, "Consimțământul GDPR este obligatoriu"),
});

type FormValues = z.infer<typeof formSchema>;

const requestTypes = [
  { value: "mobilier", label: "Mobilier la comandă" },
  { value: "cnc", label: "Servicii CNC (riflaje/fronturi/decor)" },
  { value: "vopsitorie", label: "Vopsitorie MDF" },
  { value: "proiectare", label: "Proiectare (liste/cote, găurire, randare, RLV)" },
];

const MAX_FILES = 8;
const MAX_FILE_SIZE = 8 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "application/pdf", "video/mp4"];

export default function CerereOferta() {
  const [pathname] = useLocation();
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const searchParams = new URLSearchParams(window.location.search);
  const tipParam = searchParams.get("tip");

  const getDefaultType = (): "mobilier" | "cnc" | "vopsitorie" | "proiectare" => {
    if (tipParam === "cnc") return "cnc";
    if (tipParam === "vopsitorie") return "vopsitorie";
    if (tipParam === "proiectare") return "proiectare";
    return "mobilier";
  };

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      requestType: getDefaultType(),
      location: "",
      message: "",
      gdprConsent: false,
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("phone", data.phone);
      formData.append("email", data.email);
      formData.append("requestType", data.requestType);
      formData.append("location", data.location);
      formData.append("message", data.message);
      formData.append("gdprConsent", String(data.gdprConsent));
      formData.append("honeypot", "");
      
      files.forEach(file => {
        formData.append("files", file);
      });

      const res = await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Eroare la trimitere");
      }

      return res.json();
    },
    onSuccess: () => {
      setIsSuccess(true);
      form.reset();
      setFiles([]);
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFileError("");

    const validFiles: File[] = [];
    for (const file of selectedFiles) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        setFileError("Tip de fișier neacceptat. Acceptăm: JPG, PNG, WebP, PDF, MP4");
        continue;
      }
      if (file.size > MAX_FILE_SIZE) {
        setFileError("Fișierul depășește 8MB. Pentru videouri mari, trimiteți un link.");
        continue;
      }
      validFiles.push(file);
    }

    const newFiles = [...files, ...validFiles].slice(0, MAX_FILES);
    setFiles(newFiles);
    
    if (e.target) {
      e.target.value = "";
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith("image/")) return <Image className="w-4 h-4" />;
    if (type.startsWith("video/")) return <Video className="w-4 h-4" />;
    return <FileText className="w-4 h-4" />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const onSubmit = (data: FormValues) => {
    if (files.length === 0) {
      setFileError("Încărcați cel puțin un fișier (poză, plan sau document)");
      return;
    }
    mutation.mutate(data);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#1F1F1F] pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-2xl p-12 text-center"
          >
            <div className="w-20 h-20 bg-[#BE9A5A]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-[#BE9A5A]" />
            </div>
            <h1 className="font-serif text-3xl text-white mb-4">Cerere trimisă cu succes!</h1>
            <p className="text-gray-400 mb-8">
              Vă mulțumim pentru interes. Vom analiza cererea și vă vom contacta în cel mai scurt timp posibil.
            </p>
            <Button
              onClick={() => setIsSuccess(false)}
              className="bg-[#BE9A5A] hover:bg-[#D4AF6A] text-black"
              data-testid="button-new-request"
            >
              Trimite altă cerere
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1F1F1F] pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <FadeInSection>
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
              Cerere de Ofertă
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Completați formularul și încărcați poze sau planuri pentru a primi o ofertă personalizată.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <div className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-2xl p-8 md:p-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Nume complet *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-[#1F1F1F] border-[#3A3A3A] text-white focus:border-[#BE9A5A]"
                            placeholder="Numele dumneavoastră"
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Telefon *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="tel"
                            className="bg-[#1F1F1F] border-[#3A3A3A] text-white focus:border-[#BE9A5A]"
                            placeholder="07XX XXX XXX"
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Email *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            className="bg-[#1F1F1F] border-[#3A3A3A] text-white focus:border-[#BE9A5A]"
                            placeholder="email@exemplu.ro"
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Locație *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-[#1F1F1F] border-[#3A3A3A] text-white focus:border-[#BE9A5A]"
                            placeholder="Oraș, sector"
                            data-testid="input-location"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="requestType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Tip cerere *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger 
                            className="bg-[#1F1F1F] border-[#3A3A3A] text-white focus:border-[#BE9A5A]"
                            data-testid="select-request-type"
                          >
                            <SelectValue placeholder="Selectați tipul cererii" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[#2A2A2A] border-[#3A3A3A]">
                          {requestTypes.map(type => (
                            <SelectItem 
                              key={type.value} 
                              value={type.value}
                              className="text-white hover:bg-[#3A3A3A]"
                            >
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Descriere cerere *</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="bg-[#1F1F1F] border-[#3A3A3A] text-white focus:border-[#BE9A5A] min-h-[120px]"
                          placeholder="Descrieți pe scurt ce aveți nevoie: dimensiuni, materiale, stil dorit..."
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  <Label className="text-gray-300 mb-3 block">
                    Fișiere atașate * (poze, planuri, inspirație)
                  </Label>
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-[#3A3A3A] rounded-xl p-8 text-center cursor-pointer hover:border-[#BE9A5A]/50 transition-colors"
                    data-testid="dropzone-files"
                  >
                    <Upload className="w-10 h-10 text-gray-500 mx-auto mb-3" />
                    <p className="text-gray-400 mb-1">
                      Click pentru a încărca fișiere
                    </p>
                    <p className="text-gray-500 text-sm">
                      JPG, PNG, WebP, PDF, MP4 (max 8MB/fișier, max 8 fișiere)
                    </p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept=".jpg,.jpeg,.png,.webp,.pdf,.mp4"
                      onChange={handleFileChange}
                      className="hidden"
                      data-testid="input-files"
                    />
                  </div>
                  
                  {fileError && (
                    <p className="text-red-400 text-sm mt-2">{fileError}</p>
                  )}

                  {files.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {files.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-[#1F1F1F] rounded-lg px-4 py-3"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-[#BE9A5A]">{getFileIcon(file.type)}</span>
                            <span className="text-gray-300 text-sm truncate max-w-[200px]">
                              {file.name}
                            </span>
                            <span className="text-gray-500 text-xs">
                              {formatFileSize(file.size)}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-gray-500 hover:text-red-400 transition-colors"
                            data-testid={`button-remove-file-${index}`}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <FormField
                  control={form.control}
                  name="gdprConsent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-[#3A3A3A] data-[state=checked]:bg-[#BE9A5A] data-[state=checked]:border-[#BE9A5A]"
                          data-testid="checkbox-gdpr"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-gray-400 text-sm font-normal">
                          Sunt de acord cu prelucrarea datelor personale conform GDPR. *
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                {mutation.error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <p className="text-red-400 text-sm">
                      {mutation.error.message}
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full bg-[#BE9A5A] hover:bg-[#D4AF6A] text-black font-medium py-6"
                  data-testid="button-submit-quote"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Se trimite...
                    </>
                  ) : (
                    "Trimite cererea"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
