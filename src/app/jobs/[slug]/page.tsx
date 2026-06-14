import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Banknote,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Check,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AuraBackground } from "@/components/ui/AuraBackground";
import { getAllJobs, getJobBySlug } from "@/data/jobs";
import { formatRelativeDate, formatSalary } from "@/lib/utils";

export async function generateStaticParams() {
  const jobs = await getAllJobs();
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) {
    return { title: "Job not found" };
  }

  return {
    title: `${job.title} at ${job.company}`,
    description: job.summary,
    openGraph: {
      title: `${job.title} · ${job.company}`,
      description: job.summary,
      type: "article",
    },
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const overview = [
    { icon: Building2, label: "Department", value: job.department },
    { icon: MapPin, label: "Location", value: job.location },
    { icon: BriefcaseBusiness, label: "Type", value: job.type },
    { icon: Sparkles, label: "Experience", value: `${job.experienceLevel} level` },
    {
      icon: Banknote,
      label: "Salary",
      value: formatSalary(job.salaryMin, job.salaryMax, job.currency),
    },
    {
      icon: CalendarDays,
      label: "Posted",
      value: formatRelativeDate(job.postedAt),
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200/70">
        <AuraBackground variant="subtle" />
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
        <Container className="relative">
          <div className="flex flex-col gap-6 py-14">
            <Link
              href="/jobs"
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-brand-700"
            >
              <ArrowLeft className="size-4" />
              Back to all jobs
            </Link>

            <div className="flex flex-wrap items-start gap-5">
              <span className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-fuchsia-500 text-2xl font-bold text-white shadow-lg shadow-brand-600/25">
                {job.company.charAt(0)}
              </span>
              <div className="flex flex-col gap-3">
                <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 text-balance sm:text-4xl">
                  {job.title}
                </h1>
                <p className="text-lg text-slate-600">{job.company}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge tone="brand">{job.type}</Badge>
                  {job.remote && <Badge tone="accent">Remote</Badge>}
                  <Badge tone="neutral">
                    <MapPin className="size-3" />
                    {job.location}
                  </Badge>
                  <Badge tone="neutral">
                    <Banknote className="size-3" />
                    {formatSalary(job.salaryMin, job.salaryMax, job.currency)}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
            <article className="flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <h2 className="font-display text-xl font-semibold text-slate-900">
                  About the role
                </h2>
                <p className="leading-relaxed text-slate-600">
                  {job.description}
                </p>
              </div>

              <DetailList title="What you'll do" items={job.responsibilities} />
              <DetailList title="What we're looking for" items={job.requirements} />
              <DetailList title="Benefits & perks" items={job.benefits} />

              <div className="flex flex-col gap-3">
                <h2 className="font-display text-xl font-semibold text-slate-900">
                  Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <Badge key={tag} tone="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="font-display text-lg font-semibold text-slate-900">
                  Overview
                </h2>
                <dl className="flex flex-col gap-4">
                  {overview.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-center gap-3">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                          <Icon className="size-4" />
                        </span>
                        <div>
                          <dt className="text-xs text-slate-500">
                            {item.label}
                          </dt>
                          <dd className="text-sm font-medium text-slate-900">
                            {item.value}
                          </dd>
                        </div>
                      </div>
                    );
                  })}
                </dl>
                <Button href="/contact" className="w-full">
                  Apply now
                </Button>
                <p className="text-center text-xs text-slate-400">
                  Applying connects you with an Aura recruiter.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-display text-xl font-semibold text-slate-900">
        {title}
      </h2>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-slate-600">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
              <Check className="size-3.5" />
            </span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

