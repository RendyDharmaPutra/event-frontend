import { PageHead } from "@/components/commons/page-head";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  title?: string;
}

export const AuthLayout = (props: AuthLayoutProps) => {
  const { children, title } = props;
  return (
    <div className="flex min-h-screen min-w-full flex-col items-center justify-center gap-10 py-10 lg:py-0">
      <PageHead title={title} />
      <section className="max-w-screen-3xl 3xl:container p-6">
        {children}
      </section>
    </div>
  );
};
