import { personalInfo } from "../data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-8">
          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-text-secondary">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-xs text-text-tertiary mt-1">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
