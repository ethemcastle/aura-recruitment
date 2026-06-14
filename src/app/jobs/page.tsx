import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { JobsExplorer } from "@/components/jobs/JobsExplorer";
import {
  getAllJobs,
  getDepartments,
  getEmploymentTypes,
} from "@/data/jobs";

export const metadata: Metadata = {
  title: "Browse Jobs",
  description:
    "Explore open roles across engineering, design, product, data, and more. Search and filter to find your next opportunity with Aura Recruitment.",
};

export default async function JobsPage({
  searchParams,
}: {
  searchParams: Promise<{ department?: string }>;
}) {
  const [jobs, { department }] = await Promise.all([
    getAllJobs(),
    searchParams,
  ]);
  const departments = getDepartments();
  const types = getEmploymentTypes();
  const initialDepartment =
    department && departments.includes(department) ? department : "All";

  return (
    <>
      <PageHeader
        eyebrow="Open roles"
        title="Find a role that fits"
        description="Browse live opportunities from companies hiring through Aura. New roles added every week."
      />
      <section className="py-16">
        <Container>
          <JobsExplorer
            jobs={jobs}
            departments={departments}
            types={types}
            initialDepartment={initialDepartment}
          />
        </Container>
      </section>
      <CTA
        title="Not seeing the right fit?"
        description="Send us your profile and we'll reach out when a matching role opens up."
        primary={{ label: "Get in touch", href: "/contact" }}
        secondary={{ label: "For candidates", href: "/candidates" }}
      />
    </>
  );
}

