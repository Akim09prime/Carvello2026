import { useMutation } from "@tanstack/react-query";
import { api, type InsertContactMessage } from "@shared/routes";

export function useContactSubmit() {
  return useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const res = await fetch(api.contact.submit.path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to submit message");
      return api.contact.submit.responses[201].parse(await res.json());
    },
  });
}
