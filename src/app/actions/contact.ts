"use server";

import { getContentService } from "@/content-service";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = (formData.get("subject") as string) || "";
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Name, email, and message are required." };
  }

  const service = getContentService();
  return await service.submitContactMessage({ name, email, subject, message });
}
