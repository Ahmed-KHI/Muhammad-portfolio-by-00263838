import Divider from "components/Divider";
import PageWrapper from "components/PageWrapper";
import Hero from "components/work/Hero";
import type { Metadata } from "next";
import WorkCategory from "components/work/WorkCategory";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore a list of projects I've built using the modern tech stack. Discover how I've used the latest technologies to create powerful web applications that deliver results.",
};

type Props = {};
const page = (_props: Props) => {

  return (
    <PageWrapper>
      <Divider />
      <Hero />
      <WorkCategory />
      <Divider />
    </PageWrapper>
  );
};

export default page;