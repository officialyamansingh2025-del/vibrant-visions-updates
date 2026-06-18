import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function useActiveSection(ids: string[]) {
  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((s): s is HTMLElement => Boolean(s));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            document
              .querySelectorAll("[data-nav-link]")
              .forEach((l) => l.classList.remove("nav-active"));
            const link = document.querySelector(
              `[data-nav-link="${e.target.id}"]`
            );
            link?.classList.add("nav-active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [ids]);
}
