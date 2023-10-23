"use server";

import React from "react";
import { Resend } from "resend";

import { extractErrorMessage } from "@/helpers/extractErrorMessage";
import { validateInput } from "@/helpers/validateInput";

import ContactFormEmail from "./../email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  if (!validateInput(message, 500)) {
    return {
      error: "Invalid message",
    };
  }

  if (!validateInput(senderEmail, 5000)) {
    return {
      error: "Invalid sender email.",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact form <onboarding@resend.dev>",
      to: "wira.mescha@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: extractErrorMessage(error),
    };
  }

  return { data };
};
