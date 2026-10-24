"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@/components/ui/Icon";
import {
  PREFERRED_TIME_LABELS,
  PREFERRED_TIME_VALUES,
  leadFormSchema,
  type LeadFormValues,
} from "@/lib/lead-schema";
import { cn } from "@/lib/utils";

interface LeadFormProps {
  niche: LeadFormValues["niche"];
  region: LeadFormValues["region"];
  services: string[];
  defaultService?: string;
  defaultLocation?: string;
  formType: LeadFormValues["formType"];
  phoneDisplay: string;
  phoneHref: string;
  privacyHref: string;
  formNote: string;
  emergencyNote: string;
  title?: string;
  description?: string;
  className?: string;
}

const fieldBase =
  "mt-1.5 min-h-12 w-full rounded-xl border border-line bg-surface px-3.5 text-base text-ink shadow-sm transition placeholder:text-muted/60 hover:border-muted/60 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15 aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-red-500/10";

const labelBase =
  "block text-[10px] font-bold uppercase tracking-[0.16em] text-muted";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null;
  }
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs font-semibold text-red-700">
      {message}
    </p>
  );
}

export function LeadForm({
  niche,
  region,
  services,
  defaultService,
  defaultLocation,
  formType,
  phoneDisplay,
  phoneHref,
  privacyHref,
  formNote,
  emergencyNote,
  title,
  description,
  className,
}: LeadFormProps) {
  const router = useRouter();
  const uid = useId().replace(/:/g, "");
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      location: defaultLocation ?? "",
      service: defaultService ?? "",
      message: "",
      preferredTime: "flexible",
      urgency: "standard",
      consent: false,
      company_website: "",
      startedAt: 0,
      formType,
      niche,
      region,
      page: "",
    },
  });

  const urgency = watch("urgency");

  useEffect(() => {
    setValue("startedAt", Date.now());
    setValue("page", window.location.pathname);
  }, [setValue]);

  async function onSubmit(values: LeadFormValues) {
    setServerError("");
    const params = new URLSearchParams(window.location.search);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          page: window.location.pathname,
          utm_source: params.get("utm_source") ?? "",
          utm_medium: params.get("utm_medium") ?? "",
          utm_campaign: params.get("utm_campaign") ?? "",
        }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        demo?: boolean;
        leadId?: string;
        message?: string;
        fieldErrors?: Record<string, string[]>;
      };

      if (!response.ok || !data.ok) {
        if (data.fieldErrors) {
          for (const [field, messages] of Object.entries(data.fieldErrors)) {
            if (messages?.[0]) {
              setError(field as keyof LeadFormValues, {
                type: "server",
                message: messages[0],
              });
            }
          }
        }
        setServerError(
          data.message ??
            `We could not send your request. Please call ${phoneDisplay}.`,
        );
        return;
      }

      const query = new URLSearchParams({
        region,
        ref: data.leadId ?? "",
      });
      if (data.demo) {
        query.set("demo", "1");
      }
      router.push(`/thank-you?${query.toString()}`);
    } catch {
      setServerError(
        `We could not reach the demo form service. Please call ${phoneDisplay}.`,
      );
    }
  }

  const nameError = errors.name?.message;
  const phoneError = errors.phone?.message;
  const emailError = errors.email?.message;
  const locationError = errors.location?.message;
  const serviceError = errors.service?.message;
  const messageError = errors.message?.message;
  const consentError = errors.consent?.message;
  const rootMessage = serverError;

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "relative rounded-panel border border-line bg-surface p-5 shadow-card sm:p-7",
        className,
      )}
      aria-label={title ?? "Request a demo visit"}
    >
      {title ? (
        <div className="mb-5">
          <h3 className="font-display text-2xl leading-tight text-ink">{title}</h3>
          {description ? (
            <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
          ) : null}
        </div>
      ) : null}

      <div
        className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor={`${uid}-company-website`}>Company website</label>
        <input
          id={`${uid}-company-website`}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company_website")}
        />
      </div>

      {rootMessage ? (
        <div
          role="alert"
          className="mb-5 flex items-start gap-2 rounded-xl border border-red-300 bg-red-50 p-3 text-xs font-semibold leading-relaxed text-red-800"
        >
          <Icon name="alert" className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            {rootMessage}{" "}
            <a href={phoneHref} className="underline underline-offset-2">
              Call {phoneDisplay}
            </a>
          </span>
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-name`} className={labelBase}>
            Your name <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${uid}-name`}
            type="text"
            autoComplete="name"
            placeholder="First and last name"
            maxLength={80}
            aria-invalid={Boolean(nameError)}
            aria-describedby={nameError ? `${uid}-name-error` : undefined}
            className={fieldBase}
            {...register("name")}
          />
          <FieldError id={`${uid}-name-error`} message={nameError} />
        </div>

        <div>
          <label htmlFor={`${uid}-phone`} className={labelBase}>
            Phone <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${uid}-phone`}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder={region === "in" ? "+91 98765 43210" : "(555) 010-0123"}
            maxLength={25}
            aria-invalid={Boolean(phoneError)}
            aria-describedby={phoneError ? `${uid}-phone-error` : undefined}
            className={fieldBase}
            {...register("phone")}
          />
          <FieldError id={`${uid}-phone-error`} message={phoneError} />
        </div>

        <div>
          <label htmlFor={`${uid}-email`} className={labelBase}>
            Email <span className="font-medium normal-case tracking-normal">(optional)</span>
          </label>
          <input
            id={`${uid}-email`}
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            maxLength={120}
            aria-invalid={Boolean(emailError)}
            aria-describedby={emailError ? `${uid}-email-error` : undefined}
            className={fieldBase}
            {...register("email")}
          />
          <FieldError id={`${uid}-email-error`} message={emailError} />
        </div>

        <div>
          <label htmlFor={`${uid}-location`} className={labelBase}>
            City or ZIP / PIN <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${uid}-location`}
            type="text"
            autoComplete="address-level2"
            placeholder={region === "in" ? "Area, city or PIN" : "City or ZIP"}
            maxLength={120}
            aria-invalid={Boolean(locationError)}
            aria-describedby={locationError ? `${uid}-location-error` : undefined}
            className={fieldBase}
            {...register("location")}
          />
          <FieldError id={`${uid}-location-error`} message={locationError} />
        </div>

        <div>
          <label htmlFor={`${uid}-service`} className={labelBase}>
            What do you need? <span aria-hidden="true">*</span>
          </label>
          <select
            id={`${uid}-service`}
            aria-invalid={Boolean(serviceError)}
            aria-describedby={serviceError ? `${uid}-service-error` : undefined}
            className={cn(fieldBase, "appearance-none pr-10")}
            {...register("service")}
          >
            <option value="">Choose a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </select>
          <FieldError id={`${uid}-service-error`} message={serviceError} />
        </div>

        <div>
          <label htmlFor={`${uid}-time`} className={labelBase}>
            Preferred time
          </label>
          <select
            id={`${uid}-time`}
            className={cn(fieldBase, "appearance-none pr-10")}
            {...register("preferredTime")}
          >
            {PREFERRED_TIME_VALUES.map((value) => (
              <option key={value} value={value}>
                {PREFERRED_TIME_LABELS[value]}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <fieldset>
            <legend className={labelBase}>How urgent is it?</legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {[
                {
                  value: "standard" as const,
                  title: "Standard visit",
                  copy: "Plan a convenient appointment.",
                  icon: "calendar" as const,
                },
                {
                  value: "emergency" as const,
                  title: "Urgent",
                  copy: "Something needs attention now.",
                  icon: "alert" as const,
                },
              ].map((option) => {
                const selected = urgency === option.value;
                return (
                  <label
                    key={option.value}
                    className={cn(
                      "flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 transition focus-within:ring-4 focus-within:ring-brand/15",
                      selected
                        ? "border-brand bg-brand-soft"
                        : "border-line bg-surface hover:bg-surface-2",
                    )}
                  >
                    <input
                      type="radio"
                      value={option.value}
                      className="sr-only"
                      {...register("urgency")}
                    />
                    <Icon
                      name={option.icon}
                      className={cn(
                        "mt-0.5 h-5 w-5 shrink-0",
                        selected ? "text-brand" : "text-muted",
                      )}
                    />
                    <span>
                      <span className="block text-sm font-bold text-ink">
                        {option.title}
                      </span>
                      <span className="mt-0.5 block text-xs leading-snug text-muted">
                        {option.copy}
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
          {urgency === "emergency" ? (
            <div className="mt-3 flex items-start gap-2 rounded-xl border border-accent/40 bg-accent-soft p-3 text-xs font-medium leading-relaxed text-ink">
              <Icon name="alert" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{emergencyNote}</span>
            </div>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${uid}-message`} className={labelBase}>
            What is happening? <span className="font-medium normal-case tracking-normal">(optional)</span>
          </label>
          <textarea
            id={`${uid}-message`}
            rows={4}
            maxLength={1000}
            placeholder="A short description helps the demo team understand the request."
            aria-invalid={Boolean(messageError)}
            aria-describedby={messageError ? `${uid}-message-error` : undefined}
            className={cn(fieldBase, "min-h-28 resize-y py-3")}
            {...register("message")}
          />
          <FieldError id={`${uid}-message-error`} message={messageError} />
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-start gap-3">
          <input
            id={`${uid}-consent`}
            type="checkbox"
            aria-invalid={Boolean(consentError)}
            aria-describedby={consentError ? `${uid}-consent-error` : undefined}
            className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-line accent-[var(--brand)]"
            {...register("consent")}
          />
          <div>
            <label
              htmlFor={`${uid}-consent`}
              className="cursor-pointer text-xs leading-relaxed text-ink-soft"
            >
              I agree to be contacted about this demo request. I understand this
              is a sample site and no real booking is created.
            </label>
            <p className="mt-1 text-[11px] leading-relaxed text-muted">
              Read the{" "}
              <Link
                href={privacyHref}
                className="font-semibold underline underline-offset-2 hover:text-ink"
              >
                demo privacy note
              </Link>
              .
            </p>
          </div>
        </div>
        <FieldError id={`${uid}-consent-error`} message={consentError} />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-surface transition hover:bg-ink-soft disabled:cursor-wait disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <span
              className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent motion-reduce:animate-none"
              aria-hidden="true"
            />
            Sending demo request…
          </>
        ) : (
          <>
            Send demo request
            <Icon name="arrowRight" className="h-4 w-4" />
          </>
        )}
      </button>

      <p className="mt-3 text-center text-[11px] leading-relaxed text-muted">
        {formNote}
      </p>
    </form>
  );
}
